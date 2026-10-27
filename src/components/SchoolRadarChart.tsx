'use client';

import React, { useState } from 'react';
import { School } from '../types/school';
import { useLanguage } from '../contexts/LanguageContext';
import {
  getSchoolRadarMetrics,
  RADAR_DIMENSION_LABELS,
  SchoolRadarMetrics
} from '../data/schoolComparisonMetrics';
import { Sparkles, Trophy, CheckCircle2, Info, ArrowRight } from 'lucide-react';

interface SchoolRadarChartProps {
  schools: School[];
  onSelectSchoolDetail?: (school: School) => void;
}

const SCHOOL_COLORS = [
  { stroke: '#059669', fill: 'rgba(5, 150, 105, 0.2)', text: 'text-emerald-700', bg: 'bg-emerald-50 border-emerald-300' },
  { stroke: '#D97706', fill: 'rgba(217, 119, 6, 0.2)', text: 'text-amber-700', bg: 'bg-amber-50 border-amber-300' },
  { stroke: '#4F46E5', fill: 'rgba(79, 70, 229, 0.2)', text: 'text-indigo-700', bg: 'bg-indigo-50 border-indigo-300' },
  { stroke: '#E11D48', fill: 'rgba(225, 29, 72, 0.2)', text: 'text-rose-700', bg: 'bg-rose-50 border-rose-300' }
];

const DIMENSION_KEYS: Array<keyof SchoolRadarMetrics['dimensions']> = [
  'academic',
  'cca',
  'affordability',
  'global',
  'infrastructure',
  'pastoral'
];

export default function SchoolRadarChart({ schools, onSelectSchoolDetail }: SchoolRadarChartProps) {
  const { t } = useLanguage();
  const [activeDimension, setActiveDimension] = useState<string | null>(null);

  if (!schools || schools.length === 0) return null;

  const schoolMetricsList = schools.map(s => ({
    school: s,
    metrics: getSchoolRadarMetrics(s)
  }));

  // SVG Geometry
  const size = 380;
  const center = size / 2;
  const radius = center - 58; // outer margin for labels
  const totalAxes = DIMENSION_KEYS.length;
  const angleSlice = (Math.PI * 2) / totalAxes;

  // Convert (value 0-100, axis index) to (x, y) coordinates
  const getCoordinates = (value: number, index: number) => {
    const angle = index * angleSlice - Math.PI / 2;
    const r = (value / 100) * radius;
    const x = center + r * Math.cos(angle);
    const y = center + r * Math.sin(angle);
    return { x, y };
  };

  // Concentric polygon levels
  const levels = [0.2, 0.4, 0.6, 0.8, 1.0];

  return (
    <div className="bg-white rounded-3xl border border-slate-200 p-5 sm:p-8 space-y-8 shadow-sm">
      
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-5">
        <div>
          <div className="flex items-center space-x-2">
            <Sparkles className="w-5 h-5 text-amber-500" />
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              {t('六维雷达多维评估对比')}
            </h3>
            <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
              {schools.length} {t('校同屏重叠')}
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            {t('基于各校公开发布的真实学杂费(RM)、宿舍硬件、单/双轨学制、社团数与统考海外升学出路综合测算，非主观排名')}
          </p>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap items-center gap-2">
          {schoolMetricsList.map((item, idx) => {
            const color = SCHOOL_COLORS[idx % SCHOOL_COLORS.length];
            return (
              <div
                key={item.school.school_id}
                className={`flex items-center space-x-1.5 px-3 py-1 rounded-xl text-xs font-bold border ${color.bg}`}
              >
                <span
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: color.stroke }}
                />
                <span className={color.text}>{item.school.name_zh}</span>
                <span className="text-slate-500 font-mono text-[11px]">
                  ({item.metrics.overall_score}分)
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Main Content Layout: Radar SVG on left, Dimension Analysis on right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* SVG Radar Chart (7 cols on desktop) */}
        <div className="lg:col-span-7 flex flex-col items-center justify-center relative">
          <svg
            viewBox={`0 0 ${size} ${size}`}
            className="w-full max-w-[420px] aspect-square overflow-visible drop-shadow-xs"
          >
            {/* Concentric grid webs */}
            {levels.map((lvl, lIdx) => {
              const points = DIMENSION_KEYS.map((_, aIdx) => {
                const { x, y } = getCoordinates(lvl * 100, aIdx);
                return `${x},${y}`;
              }).join(' ');
              return (
                <polygon
                  key={lIdx}
                  points={points}
                  fill={lIdx === levels.length - 1 ? '#f8fafc' : 'none'}
                  stroke="#cbd5e1"
                  strokeWidth="1"
                  strokeDasharray={lIdx === levels.length - 1 ? 'none' : '2,2'}
                />
              );
            })}

            {/* Axis Spokes from center to boundary */}
            {DIMENSION_KEYS.map((dimKey, aIdx) => {
              const { x, y } = getCoordinates(100, aIdx);
              const isHovered = activeDimension === dimKey;
              return (
                <line
                  key={aIdx}
                  x1={center}
                  y1={center}
                  x2={x}
                  y2={y}
                  stroke={isHovered ? '#3b82f6' : '#cbd5e1'}
                  strokeWidth={isHovered ? 2 : 1}
                  className="transition"
                />
              );
            })}

            {/* School Polygons */}
            {schoolMetricsList.map((item, sIdx) => {
              const color = SCHOOL_COLORS[sIdx % SCHOOL_COLORS.length];
              const points = DIMENSION_KEYS.map((key, aIdx) => {
                const val = item.metrics.dimensions[key];
                const { x, y } = getCoordinates(val, aIdx);
                return `${x},${y}`;
              }).join(' ');

              return (
                <g key={item.school.school_id}>
                  {/* Filled transparent polygon */}
                  <polygon
                    points={points}
                    fill={color.fill}
                    stroke={color.stroke}
                    strokeWidth="2.5"
                    className="transition-all duration-300"
                  />
                  {/* Vertex circles */}
                  {DIMENSION_KEYS.map((key, aIdx) => {
                    const val = item.metrics.dimensions[key];
                    const { x, y } = getCoordinates(val, aIdx);
                    const isHovered = activeDimension === key;
                    return (
                      <circle
                        key={aIdx}
                        cx={x}
                        cy={y}
                        r={isHovered ? 6 : 4}
                        fill={color.stroke}
                        stroke="#ffffff"
                        strokeWidth="1.5"
                        className="transition cursor-pointer"
                        onMouseEnter={() => setActiveDimension(key)}
                        onMouseLeave={() => setActiveDimension(null)}
                      />
                    );
                  })}
                </g>
              );
            })}

            {/* Dimension Text Labels around outer perimeter */}
            {DIMENSION_KEYS.map((dimKey, aIdx) => {
              const { x, y } = getCoordinates(115, aIdx);
              const info = RADAR_DIMENSION_LABELS[dimKey];
              const isHovered = activeDimension === dimKey;

              return (
                <g
                  key={dimKey}
                  className="cursor-pointer select-none"
                  onMouseEnter={() => setActiveDimension(dimKey)}
                  onMouseLeave={() => setActiveDimension(null)}
                >
                  <text
                    x={x}
                    y={y}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className={`text-[12px] font-black transition ${
                      isHovered ? 'fill-blue-700 font-extrabold scale-110' : 'fill-slate-700'
                    }`}
                  >
                    {t(info.label)}
                  </text>
                </g>
              );
            })}
          </svg>

          <div className="text-[11px] text-slate-400 mt-2 text-center">
            {t('提示：鼠标悬停或轻触雷达图顶点，可高亮查看该维度的指标定义与对比分值')}
          </div>
        </div>

        {/* Dimension Breakdown & Recommendations (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
            <h4 className="font-black text-slate-900 text-sm flex items-center space-x-1.5 mb-3">
              <Trophy className="w-4 h-4 text-amber-500" />
              <span>{t('各校六维分值明细对比 (0 - 100)')}</span>
            </h4>

            <div className="space-y-3">
              {DIMENSION_KEYS.map(key => {
                const info = RADAR_DIMENSION_LABELS[key];
                const isHovered = activeDimension === key;

                return (
                  <div
                    key={key}
                    onMouseEnter={() => setActiveDimension(key)}
                    onMouseLeave={() => setActiveDimension(null)}
                    className={`p-2.5 rounded-xl border transition cursor-pointer ${
                      isHovered
                        ? 'bg-blue-50/80 border-blue-300 shadow-2xs'
                        : 'bg-white border-slate-100 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs mb-1.5">
                      <span className="font-bold text-slate-800 flex items-center space-x-1">
                        <span className="w-2 h-2 rounded-full" style={{ backgroundColor: info.color }} />
                        <span>{t(info.label)}</span>
                      </span>
                      <div className="flex items-center space-x-2">
                        {schoolMetricsList.map((item, idx) => {
                          const color = SCHOOL_COLORS[idx % SCHOOL_COLORS.length];
                          return (
                            <span
                              key={item.school.school_id}
                              className={`font-mono font-bold text-xs ${color.text}`}
                            >
                              {item.metrics.dimensions[key]}
                            </span>
                          );
                        })}
                      </div>
                    </div>

                    {/* Progress bars stacked */}
                    <div className="space-y-1">
                      {schoolMetricsList.map((item, idx) => {
                        const color = SCHOOL_COLORS[idx % SCHOOL_COLORS.length];
                        const val = item.metrics.dimensions[key];
                        return (
                          <div key={item.school.school_id} className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
                            <div
                              className="h-full rounded-full transition-all duration-500"
                              style={{ width: `${val}%`, backgroundColor: color.stroke }}
                            />
                          </div>
                        );
                      })}
                    </div>

                    {isHovered && (
                      <p className="text-[11px] text-slate-500 mt-1.5 leading-snug">
                        {t(info.desc)}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* School Deep Profiles & Recommendations */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-4 border-t border-slate-100">
        {schoolMetricsList.map((item, idx) => {
          const color = SCHOOL_COLORS[idx % SCHOOL_COLORS.length];
          return (
            <div
              key={item.school.school_id}
              className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-3 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold border ${color.bg} ${color.text}`}>
                    {t(item.school.name_zh)}
                  </span>
                  <div className="text-right">
                    <span className="text-[10px] text-slate-400 font-semibold block">{t('综合多维评分')}</span>
                    <span className={`text-base font-black ${color.text}`}>
                      {item.metrics.overall_score} / 100
                    </span>
                  </div>
                </div>

                <div className="space-y-1.5 mt-3">
                  <div className="text-xs font-bold text-slate-700">{t('突出优势亮点：')}</div>
                  <ul className="space-y-1 text-xs text-slate-600">
                    {item.metrics.key_strengths.map((str, sIdx) => (
                      <li key={sIdx} className="flex items-start space-x-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{t(str)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 space-y-2.5">
                <div className="p-2.5 rounded-xl bg-slate-50 text-[11px] text-slate-600 leading-relaxed">
                  <strong className="text-slate-800 font-bold block mb-0.5">{t('适合学子画像：')}</strong>
                  {t(item.metrics.recommended_student_profile)}
                </div>

                {onSelectSchoolDetail && (
                  <button
                    onClick={() => onSelectSchoolDetail(item.school)}
                    className="w-full py-2 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition flex items-center justify-center space-x-1"
                  >
                    <span>{t('查看该校完整简章')}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}
