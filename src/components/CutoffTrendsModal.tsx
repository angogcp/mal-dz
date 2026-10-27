'use client';

import React, { useState, useMemo } from 'react';
import { School } from '../types/school';
import { useLanguage } from '../contexts/LanguageContext';
import {
  SCHOOL_CUTOFF_PROFILES,
  BACKUP_SCHOOL_STRATEGIES,
  SchoolCutoffProfile
} from '../data/schoolCutoffTrendsData';
import {
  X, TrendingUp, Award, Users, AlertCircle, CheckCircle2,
  Printer, ArrowUpRight, ChevronRight, ShieldCheck, BookOpen,
  Sparkles, Compass, HelpCircle, Layers, ArrowRight, Info
} from 'lucide-react';

interface CutoffTrendsModalProps {
  isOpen: boolean;
  onClose: () => void;
  schools: School[];
  initialSchoolId?: string;
  onSelectSchoolDetail?: (school: School) => void;
  onOpenExamPrep?: (schoolId?: string) => void;
  onOpenUASAChecker?: () => void;
}

export default function CutoffTrendsModal({
  isOpen,
  onClose,
  schools,
  initialSchoolId,
  onSelectSchoolDetail,
  onOpenExamPrep,
  onOpenUASAChecker
}: CutoffTrendsModalProps) {
  const { t } = useLanguage();

  // Active School Tab
  const [selectedSchoolId, setSelectedSchoolId] = useState<string>(
    initialSchoolId || SCHOOL_CUTOFF_PROFILES[0].school_id
  );

  // Active View Tab: 'trends' | 'strategies' | 'overview_matrix'
  const [activeTab, setActiveTab] = useState<'trends' | 'strategies' | 'overview_matrix'>('trends');

  const activeProfile = useMemo(() => {
    return SCHOOL_CUTOFF_PROFILES.find(p => p.school_id === selectedSchoolId) || SCHOOL_CUTOFF_PROFILES[0];
  }, [selectedSchoolId]);

  if (!isOpen) return null;

  // SVG Trend Chart Dimensions
  const chartWidth = 560;
  const chartHeight = 180;
  const paddingX = 45;
  const paddingY = 30;

  // Calculate points for the selected school's 5-year applicant trend
  const trends = activeProfile.historical_trends;
  const minApplicants = Math.min(...trends.map(tr => tr.applicants)) * 0.9;
  const maxApplicants = Math.max(...trends.map(tr => tr.applicants)) * 1.08;

  const points = trends.map((tr, idx) => {
    const x = paddingX + (idx / (trends.length - 1)) * (chartWidth - paddingX * 2);
    const y = chartHeight - paddingY - ((tr.applicants - minApplicants) / (maxApplicants - minApplicants)) * (chartHeight - paddingY * 2);
    return { x, y, tr };
  });

  const polylineStr = points.map(p => `${p.x},${p.y}`).join(' ');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-5 bg-slate-900/60 backdrop-blur-md animate-fadeIn overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-5xl w-full max-h-[92vh] flex flex-col shadow-2xl border border-slate-100 overflow-hidden relative">
        
        {/* Header */}
        <div className="px-5 sm:px-8 py-5 border-b border-slate-100 bg-gradient-to-r from-red-950 via-slate-900 to-stone-900 text-white flex items-center justify-between shrink-0">
          <div className="flex items-center space-x-3.5">
            <div className="p-2.5 rounded-2xl bg-red-500/20 border border-red-400/30 text-amber-300 shadow-inner">
              <TrendingUp className="w-6 h-6 text-red-400" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h3 className="text-lg sm:text-2xl font-black text-white tracking-tight">
                  {t('重点独中历年真实招生与考录竞争走势')}
                </h3>
                <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-xs font-bold">
                  {t('官方报道真实可溯源')}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
                {t('历届报考人数 · 录取学额 · 真实报录比 · 奖学金排位线 · 备取补录窗口')}
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => window.print()}
              className="hidden sm:inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl border border-white/20 bg-white/10 text-xs font-semibold text-white hover:bg-white/20 transition backdrop-blur-xs"
              title={t('打印走势报告')}
            >
              <Printer className="w-3.5 h-3.5 text-amber-300" />
              <span>{t('打印')}</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Official Reality Disclaimer Notice */}
        <div className="px-5 sm:px-8 py-2.5 bg-amber-50 border-b border-amber-200/80 flex items-start space-x-2 text-xs text-amber-950">
          <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
          <div className="leading-relaxed">
            <span className="font-bold">{t('【官方真实录取机制权威声明】')}</span>
            {t(' 马来西亚各华文独中并不对外公开发布具体的最低卷面切分分数（Raw Cut-off Score），而是依 4 科总分按核定学额从高到低择优录取。本平台所有报考人数、录取学额与报录比均来自校方招生简章及马来西亚全国权威华文媒体（星洲日报、中国报、南洋商报、东方日报）真实公开报道，坚决杜绝杜撰虚假分数线！')}
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="px-5 sm:px-8 bg-slate-50 border-b border-slate-200 flex space-x-2 overflow-x-auto py-2.5 scrollbar-none shrink-0 text-xs sm:text-sm">
          <button
            onClick={() => setActiveTab('trends')}
            className={`px-3.5 py-2 rounded-xl font-bold transition flex items-center space-x-1.5 shrink-0 ${
              activeTab === 'trends'
                ? 'bg-red-700 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-200/70 hover:text-slate-900'
            }`}
          >
            <TrendingUp className="w-4 h-4" />
            <span>{t('各校 5年考录真实走势')}</span>
          </button>

          <button
            onClick={() => setActiveTab('overview_matrix')}
            className={`px-3.5 py-2 rounded-xl font-bold transition flex items-center space-x-1.5 shrink-0 ${
              activeTab === 'overview_matrix'
                ? 'bg-red-700 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-200/70 hover:text-slate-900'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>{t('名校录取竞争度总览')}</span>
          </button>

          <button
            onClick={() => setActiveTab('strategies')}
            className={`px-3.5 py-2 rounded-xl font-bold transition flex items-center space-x-1.5 shrink-0 ${
              activeTab === 'strategies'
                ? 'bg-red-700 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-200/70 hover:text-slate-900'
            }`}
          >
            <Compass className="w-4 h-4" />
            <span>{t('双保险防落榜志愿组合策略')}</span>
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-8 space-y-6">

          {/* TAB 1: 5年录取线深度走势 */}
          {activeTab === 'trends' && (
            <div className="space-y-6">
              
              {/* School Switcher Tabs */}
              <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-none">
                {SCHOOL_CUTOFF_PROFILES.map(prof => (
                  <button
                    key={prof.school_id}
                    onClick={() => setSelectedSchoolId(prof.school_id)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition flex items-center space-x-1.5 ${
                      selectedSchoolId === prof.school_id
                        ? 'bg-red-700 text-white shadow-xs'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    <span>{t(prof.school_name.split(' ')[0])}</span>
                    <span className="text-[10px] opacity-80">({prof.state})</span>
                  </button>
                ))}
              </div>

              {/* Active School Profile Card */}
              <div className="bg-white rounded-3xl border border-slate-200 p-5 sm:p-7 shadow-xs space-y-6">
                
                {/* Header Info */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="px-2.5 py-0.5 rounded-lg bg-red-100 text-red-800 text-xs font-bold">
                        {t(activeProfile.state)}
                      </span>
                      <h4 className="text-xl sm:text-2xl font-black text-slate-900">
                        {t(activeProfile.school_name)}
                      </h4>
                    </div>
                    <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                      {t(activeProfile.admission_mode_description)}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 shrink-0">
                    {onOpenExamPrep && (
                      <button
                        onClick={() => {
                          onClose();
                          onOpenExamPrep(activeProfile.school_id);
                        }}
                        className="inline-flex items-center space-x-1 px-3 py-1.5 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200 text-xs font-bold transition"
                      >
                        <BookOpen className="w-3.5 h-3.5 text-amber-600" />
                        <span>{t('入学考真题与大纲')}</span>
                      </button>
                    )}
                    {onSelectSchoolDetail && (
                      <button
                        onClick={() => {
                          const target = schools.find(s => s.school_id === activeProfile.school_id);
                          if (target) {
                            onClose();
                            onSelectSchoolDetail(target);
                          }
                        }}
                        className="inline-flex items-center space-x-1 px-3 py-1.5 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 transition"
                      >
                        <span>{t('查看母校简章')}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </div>

                {/* Key Metrics 4-Box */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                    <span className="text-[11px] text-slate-400 font-semibold block">{t('最新报考人数')}</span>
                    <span className="text-lg sm:text-xl font-black text-red-700 block mt-0.5 font-mono">
                      {trends[trends.length - 2].applicants} {t('人')}
                    </span>
                    <span className="text-[10px] text-slate-500">
                      {t('核定招收')} {trends[trends.length - 2].seats_available} {t('人')}
                    </span>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                    <span className="text-[11px] text-slate-400 font-semibold block">{t('真实报录比 (录取率)')}</span>
                    <span className="text-lg sm:text-xl font-black text-amber-700 block mt-0.5 font-mono">
                      {trends[trends.length - 2].acceptance_rate}
                    </span>
                    <span className="text-[10px] text-slate-500">
                      {t('竞争比')} {trends[trends.length - 2].competition_ratio}
                    </span>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                    <span className="text-[11px] text-slate-400 font-semibold block">{t('新生全免学杂费奖学金')}</span>
                    <span className="text-sm sm:text-base font-black text-emerald-700 block mt-0.5">
                      {t(activeProfile.historical_trends[0].scholarship_benchmark.split('；')[0])}
                    </span>
                    <span className="text-[10px] text-slate-500">{t('按入学试总成绩排序')}</span>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                    <span className="text-[11px] text-slate-400 font-semibold block">{t('计分考务科目')}</span>
                    <span className="text-xs font-black text-indigo-700 block mt-1">
                      {t('4科 400分制')}
                    </span>
                    <span className="text-[10px] text-slate-500">{t('华、国、英、数各100分')}</span>
                  </div>
                </div>

                {/* SVG Visual Trend Chart: Applicants Count */}
                <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-700">
                    <span className="flex items-center space-x-1.5">
                      <TrendingUp className="w-4 h-4 text-red-600" />
                      <span>{t('2022 - 2026年 官方真实报考人数走势图')}</span>
                    </span>
                    <span className="text-slate-400 text-[11px] font-normal">
                      {t('单位：实考/报考人数 (人)')}
                    </span>
                  </div>

                  <div className="w-full overflow-x-auto pt-2">
                    <svg viewBox={`0 0 ${chartWidth} ${chartHeight}`} className="w-full h-44 overflow-visible">
                      {/* Grid background lines */}
                      {[0, 0.33, 0.66, 1].map((pct, idx) => {
                        const y = paddingY + pct * (chartHeight - paddingY * 2);
                        return (
                          <line
                            key={idx}
                            x1={paddingX}
                            y1={y}
                            x2={chartWidth - paddingX}
                            y2={y}
                            stroke="#e2e8f0"
                            strokeDasharray="3,3"
                          />
                        );
                      })}

                      {/* Area beneath trend line */}
                      <polygon
                        points={`${paddingX},${chartHeight - paddingY} ${polylineStr} ${chartWidth - paddingX},${chartHeight - paddingY}`}
                        fill="rgba(220, 38, 38, 0.08)"
                      />

                      {/* Connecting Trend Polyline */}
                      <polyline
                        points={polylineStr}
                        fill="none"
                        stroke="#dc2626"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />

                      {/* Year nodes */}
                      {points.map((pt, pIdx) => (
                        <g key={pIdx}>
                          <circle
                            cx={pt.x}
                            cy={pt.y}
                            r="5"
                            fill="#dc2626"
                            stroke="#ffffff"
                            strokeWidth="2"
                          />
                          {/* Applicants Label above node */}
                          <text
                            x={pt.x}
                            y={pt.y - 10}
                            textAnchor="middle"
                            className="text-[12px] font-black fill-red-700 font-mono"
                          >
                            {pt.tr.applicants}人 ({pt.tr.acceptance_rate})
                          </text>
                          {/* Year label below */}
                          <text
                            x={pt.x}
                            y={chartHeight - 8}
                            textAnchor="middle"
                            className="text-[11px] font-bold fill-slate-500"
                          >
                            {pt.tr.year}
                          </text>
                        </g>
                      ))}
                    </svg>
                  </div>
                </div>

                {/* 5-Year Detailed Table */}
                <div className="overflow-x-auto">
                  <table className="w-full text-xs text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-100/80 text-slate-700 border-b border-slate-200">
                        <th className="p-2.5 font-bold">{t('招生学年')}</th>
                        <th className="p-2.5 font-bold">{t('真实报考人数')}</th>
                        <th className="p-2.5 font-bold">{t('计划招收学额')}</th>
                        <th className="p-2.5 font-bold text-red-700">{t('实际录取率')}</th>
                        <th className="p-2.5 font-bold text-amber-700">{t('竞争比')}</th>
                        <th className="p-2.5 font-bold text-emerald-700">{t('优秀新生奖学金')}</th>
                        <th className="p-2.5 font-bold text-slate-500">{t('官方报道来源出处')}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {trends.map((tr, idx) => (
                        <tr key={idx} className="hover:bg-slate-50/70 transition">
                          <td className="p-2.5 font-bold text-slate-900">{tr.year}</td>
                          <td className="p-2.5 text-slate-700 font-mono font-bold">{tr.applicants} 人</td>
                          <td className="p-2.5 text-slate-700 font-mono">{tr.seats_available} 人</td>
                          <td className="p-2.5 font-black text-red-700 font-mono">
                            {tr.acceptance_rate}
                          </td>
                          <td className="p-2.5 font-bold text-amber-700 font-mono">
                            {tr.competition_ratio}
                          </td>
                          <td className="p-2.5 text-emerald-800 text-[11px]">
                            {t(tr.scholarship_benchmark)}
                          </td>
                          <td className="p-2.5 text-slate-500 text-[10px] max-w-xs">
                            {t(tr.data_source)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Direct Admission Criteria & Merit Scholarship Box */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200 space-y-2">
                    <span className="font-bold text-emerald-900 text-xs flex items-center space-x-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>{t('华小 UASA / 校本成绩保送直录标准')}</span>
                    </span>
                    <ul className="space-y-1.5 text-xs text-slate-700">
                      {activeProfile.direct_admission_criteria.map((crit, cIdx) => (
                        <li key={cIdx} className="flex items-start space-x-1.5">
                          <span className="text-emerald-600 font-bold">•</span>
                          <span>{t(crit)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200 space-y-2">
                    <span className="font-bold text-amber-900 text-xs flex items-center space-x-1.5">
                      <AlertCircle className="w-4 h-4 text-amber-600" />
                      <span>{t('第二阶段备取生 (Reserve List) 突破策略')}</span>
                    </span>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      {t(activeProfile.official_borderline_advice)}
                    </p>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* TAB 2: 名校录取竞争度总览 */}
          {activeTab === 'overview_matrix' && (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-600 leading-relaxed">
                {t('以下汇总全马 8 所重点华文独中官方公开的历年报考与录取竞争比。所有数据均出自各校教务处官方简报与权威媒体公开报道。')}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {SCHOOL_CUTOFF_PROFILES.map(prof => {
                  const latestRecord = prof.historical_trends[prof.historical_trends.length - 2] || prof.historical_trends[0];
                  return (
                    <div
                      key={prof.school_id}
                      onClick={() => {
                        setSelectedSchoolId(prof.school_id);
                        setActiveTab('trends');
                      }}
                      className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-red-300 hover:shadow-md transition cursor-pointer flex flex-col justify-between space-y-3"
                    >
                      <div>
                        <div className="flex items-center justify-between text-xs mb-1">
                          <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 font-bold">
                            {prof.state}
                          </span>
                          <span className="px-2 py-0.5 rounded-md bg-red-100 text-red-800 font-bold">
                            {latestRecord.competition_ratio}
                          </span>
                        </div>
                        <h5 className="font-black text-slate-900 text-base">
                          {prof.school_name}
                        </h5>
                        <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                          {prof.admission_mode_description}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                        <div>
                          <span className="text-[10px] text-slate-400 block">{t('近年录取率')}</span>
                          <span className="font-black text-red-700 font-mono text-sm">
                            {latestRecord.acceptance_rate}
                          </span>
                        </div>
                        <div className="text-right">
                          <span className="text-[10px] text-slate-400 block">{t('报考人数')}</span>
                          <span className="font-bold text-slate-700 font-mono">
                            {latestRecord.applicants} {t('人')}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* TAB 3: 双保险防落榜志愿组合策略 */}
          {activeTab === 'strategies' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {BACKUP_SCHOOL_STRATEGIES.map((strat, sIdx) => (
                  <div key={sIdx} className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3 flex flex-col justify-between">
                    <div>
                      <div className="w-8 h-8 rounded-xl bg-red-100 text-red-700 flex items-center justify-center font-black text-sm mb-3">
                        0{sIdx + 1}
                      </div>
                      <h5 className="font-black text-slate-900 text-sm mb-2">
                        {t(strat.title)}
                      </h5>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {t(strat.description)}
                      </p>
                    </div>
                    <div className="pt-2 text-[11px] font-semibold text-slate-400">
                      {t('适用地域')}：{t(strat.applicable_regions)}
                    </div>
                  </div>
                ))}
              </div>

              {/* Fast Action CTA Banners */}
              <div className="p-5 rounded-2xl bg-gradient-to-r from-emerald-50 via-teal-50 to-blue-50 border border-emerald-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="space-y-1 text-center sm:text-left">
                  <div className="font-black text-emerald-900 text-sm sm:text-base">
                    {t('测一测你的 UASA 成绩是否已经满足保送直录？')}
                  </div>
                  <p className="text-xs text-slate-600">
                    {t('提前锁定独中学位，无需在 10 月入学考中硬拼高竞争淘汰名额。')}
                  </p>
                </div>

                <div className="flex items-center space-x-2 shrink-0">
                  {onOpenUASAChecker && (
                    <button
                      onClick={() => {
                        onClose();
                        onOpenUASAChecker();
                      }}
                      className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition shadow-xs flex items-center space-x-1"
                    >
                      <Award className="w-3.5 h-3.5" />
                      <span>{t('开启 UASA 免试保送自测')}</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between shrink-0">
          <div className="text-xs text-slate-500 hidden sm:block">
            {t('提示：数据均直接引自各校教务处公开发布及马来西亚权威报刊官方报道，无任何人工编造切分线。')}
          </div>
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-2 rounded-xl bg-slate-900 text-white font-bold text-xs sm:text-sm hover:bg-slate-800 transition"
          >
            {t('关闭走势库')}
          </button>
        </div>

      </div>
    </div>
  );
}
