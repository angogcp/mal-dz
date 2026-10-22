'use client';

import React, { useState, useMemo } from 'react';
import { School } from '../types/school';
import { useLanguage } from '../contexts/LanguageContext';
import {
  BOARDING_DAILY_SCHEDULE,
  BOARDING_POLICY_HIGHLIGHTS,
  BOARDING_SCHOOL_PROFILES,
  OUTSTATION_PARENT_CHECKLIST,
  BoardingSchoolProfile
} from '../data/boardingLifeData';
import {
  X, BedDouble, Clock, ShieldCheck, Bus, CheckSquare,
  Utensils, Smartphone, HeartHandshake, Printer, Building2,
  ExternalLink, ChevronRight, CheckCircle2, AlertCircle, Info,
  MapPin, Phone, Sparkles, Coffee, Moon, Sun, BookOpen
} from 'lucide-react';

interface BoardingLifeModalProps {
  isOpen: boolean;
  onClose: () => void;
  schools: School[];
  initialSchoolId?: string;
  onSelectSchoolDetail?: (school: School) => void;
}

export default function BoardingLifeModal({
  isOpen,
  onClose,
  schools,
  initialSchoolId,
  onSelectSchoolDetail
}: BoardingLifeModalProps) {
  const { t } = useLanguage();

  // Active Tab: 'schedule' | 'policies' | 'transit' | 'checklist' | 'schools_directory'
  const [activeTab, setActiveTab] = useState<'schedule' | 'policies' | 'transit' | 'checklist' | 'schools_directory'>('schedule');

  // Selected School Profile inside Transit/Schools tab
  const [selectedProfileId, setSelectedProfileId] = useState<string>(
    initialSchoolId || BOARDING_SCHOOL_PROFILES[0].school_id
  );

  // State filter for schools directory
  const [stateFilter, setStateFilter] = useState<string>('all');

  // Interactive Checklist completed items tracker
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  const toggleCheckItem = (itemText: string) => {
    setCheckedItems(prev => ({
      ...prev,
      [itemText]: !prev[itemText]
    }));
  };

  // Dormitory schools list from overall 63 schools
  const dormSchools = useMemo(() => {
    return schools.filter(s => s.dormitory_and_boarding.has_dormitory);
  }, [schools]);

  const filteredDormSchools = useMemo(() => {
    if (stateFilter === 'all') return dormSchools;
    return dormSchools.filter(s => s.location.state === stateFilter);
  }, [dormSchools, stateFilter]);

  const uniqueStates = useMemo(() => {
    const set = new Set(dormSchools.map(s => s.location.state));
    return Array.from(set);
  }, [dormSchools]);

  const activeProfile = useMemo(() => {
    return BOARDING_SCHOOL_PROFILES.find(p => p.school_id === selectedProfileId) || BOARDING_SCHOOL_PROFILES[0];
  }, [selectedProfileId]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-5 bg-slate-900/60 backdrop-blur-md animate-fadeIn overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-5xl w-full max-h-[92vh] flex flex-col shadow-2xl border border-slate-100 overflow-hidden relative">
        
        {/* Header */}
        <div className="px-5 sm:px-8 py-5 border-b border-slate-100 bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white flex items-center justify-between shrink-0">
          <div className="flex items-center space-x-3.5">
            <div className="p-2.5 rounded-2xl bg-blue-500/20 border border-blue-400/30 text-amber-300 shadow-inner">
              <BedDouble className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h3 className="text-lg sm:text-2xl font-black text-white tracking-tight">
                  {t('独中寄宿生活全景指南与外州生家长安心宝典')}
                </h3>
                <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-200 border border-blue-400/30 text-xs font-bold">
                  2026 最新版
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
                {t('作息规制 · 手机封存 · 营养三餐 · 24h安保医疗 · 周末外州校车专线 · 行装清单')}
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => window.print()}
              className="hidden sm:inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl border border-white/20 bg-white/10 text-xs font-semibold text-white hover:bg-white/20 transition backdrop-blur-xs"
              title={t('打印寄宿指南')}
            >
              <Printer className="w-3.5 h-3.5 text-blue-200" />
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

        {/* Tab Navigation */}
        <div className="px-5 sm:px-8 bg-slate-50 border-b border-slate-200 flex space-x-2 overflow-x-auto py-2.5 scrollbar-none shrink-0 text-xs sm:text-sm">
          <button
            onClick={() => setActiveTab('schedule')}
            className={`px-3.5 py-2 rounded-xl font-bold transition flex items-center space-x-1.5 shrink-0 ${
              activeTab === 'schedule'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-200/70 hover:text-slate-900'
            }`}
          >
            <Clock className="w-4 h-4" />
            <span>{t('24小时精细作息')}</span>
          </button>

          <button
            onClick={() => setActiveTab('policies')}
            className={`px-3.5 py-2 rounded-xl font-bold transition flex items-center space-x-1.5 shrink-0 ${
              activeTab === 'policies'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-200/70 hover:text-slate-900'
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            <span>{t('四大安心保障')}</span>
          </button>

          <button
            onClick={() => setActiveTab('transit')}
            className={`px-3.5 py-2 rounded-xl font-bold transition flex items-center space-x-1.5 shrink-0 ${
              activeTab === 'transit'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-200/70 hover:text-slate-900'
            }`}
          >
            <Bus className="w-4 h-4" />
            <span>{t('外州专线与名校宿舍')}</span>
          </button>

          <button
            onClick={() => setActiveTab('checklist')}
            className={`px-3.5 py-2 rounded-xl font-bold transition flex items-center space-x-1.5 shrink-0 ${
              activeTab === 'checklist'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-200/70 hover:text-slate-900'
            }`}
          >
            <CheckSquare className="w-4 h-4" />
            <span>{t('必备行装与心理准备')}</span>
          </button>

          <button
            onClick={() => setActiveTab('schools_directory')}
            className={`px-3.5 py-2 rounded-xl font-bold transition flex items-center space-x-1.5 shrink-0 ${
              activeTab === 'schools_directory'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-200/70 hover:text-slate-900'
            }`}
          >
            <Building2 className="w-4 h-4" />
            <span>{t('全马寄宿独中一览')} ({dormSchools.length})</span>
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-8 space-y-6">

          {/* TAB 1: 24小时作息表 */}
          {activeTab === 'schedule' && (
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center space-x-2 text-blue-900 font-black text-base sm:text-lg">
                    <Sparkles className="w-5 h-5 text-amber-500" />
                    <span>{t('独中全封闭军事化规范作息：培养自律、自立与健康体魄')}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {t('从早晨 6:00 轻柔音乐唤醒，到晚间 22:30 统一点名断电，每个时段科学规划。无手机诱惑、专属全冷气晚自习大厅、名师当面辅导，让孩子在集体氛围中专心致志。')}
                  </p>
                </div>
                <div className="flex items-center space-x-2 shrink-0">
                  <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
                    <Sun className="w-3.5 h-3.5 mr-1" /> {t('充足 8小时睡眠')}
                  </span>
                  <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-blue-100 text-blue-800 text-xs font-bold">
                    <BookOpen className="w-3.5 h-3.5 mr-1" /> {t('2.5h 专注晚自习')}
                  </span>
                </div>
              </div>

              {/* Timeline cards */}
              <div className="relative border-l-2 border-blue-200 ml-4 sm:ml-6 space-y-6 py-2">
                {BOARDING_DAILY_SCHEDULE.map((item, idx) => {
                  const getCategoryBadge = (cat: string) => {
                    switch (cat) {
                      case 'study':
                        return { bg: 'bg-amber-100 text-amber-800 border-amber-200', label: '学业与自习', icon: BookOpen };
                      case 'activity':
                        return { bg: 'bg-emerald-100 text-emerald-800 border-emerald-200', label: '联课与运动', icon: Sparkles };
                      case 'rest':
                        return { bg: 'bg-purple-100 text-purple-800 border-purple-200', label: '熄灯安寝', icon: Moon };
                      default:
                        return { bg: 'bg-blue-100 text-blue-800 border-blue-200', label: '生活内务', icon: Coffee };
                    }
                  };
                  const badge = getCategoryBadge(item.category);
                  const BadgeIcon = badge.icon;

                  return (
                    <div key={idx} className="relative pl-6 sm:pl-8 group">
                      {/* Timeline dot */}
                      <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow-xs group-hover:scale-125 transition" />

                      <div className="bg-slate-50 hover:bg-blue-50/50 p-4 rounded-2xl border border-slate-200 transition group-hover:border-blue-300 group-hover:shadow-xs">
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                          <div className="flex items-center space-x-2">
                            <span className="font-mono text-xs sm:text-sm font-black text-blue-700 bg-white px-2.5 py-0.5 rounded-lg border border-blue-200 shadow-2xs">
                              {item.time}
                            </span>
                            <span className="text-sm sm:text-base font-bold text-slate-900">
                              {t(item.activity)}
                            </span>
                          </div>
                          <span className={`inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-xs font-semibold border ${badge.bg}`}>
                            <BadgeIcon className="w-3 h-3" />
                            <span>{t(badge.label)}</span>
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          {t(item.details)}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* TAB 2: 四大安心保障 */}
          {activeTab === 'policies' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {BOARDING_POLICY_HIGHLIGHTS.map((policy, idx) => (
                  <div key={idx} className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs hover:border-blue-300 transition flex flex-col justify-between">
                    <div>
                      <h4 className="text-base sm:text-lg font-black text-slate-900 mb-1">
                        {t(policy.title)}
                      </h4>
                      <p className="text-xs font-bold text-blue-600 mb-3.5">
                        {t(policy.summary)}
                      </p>
                      <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
                        {policy.rules.map((rule, rIdx) => (
                          <li key={rIdx} className="flex items-start space-x-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                            <span className="leading-relaxed">{t(rule)}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>

              {/* Extra Safety Notice Box */}
              <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200 flex items-start space-x-3.5">
                <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div className="space-y-1 text-xs sm:text-sm text-slate-700">
                  <div className="font-bold text-slate-900">
                    {t('家长安心保障承诺')}
                  </div>
                  <p className="leading-relaxed">
                    {t('独中宿舍舍监全天候住校驻守（比例平均 1名舍监: 30-40名学生），并配备专职驻校医生/护士。学生生病均第一时间由校方专车护送至私立专科或政府中央医院，绝无延误风险。')}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: 外州专线与名校宿舍 */}
          {activeTab === 'transit' && (
            <div className="space-y-6">
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <h4 className="font-black text-slate-900 text-sm sm:text-base">
                      {t('特色寄宿名校档案与外州交通网络')}
                    </h4>
                    <p className="text-xs text-slate-500 mt-0.5">
                      {t('点击切换学校，查看该校宿舍标准、容纳规模及外州直通周末校车专线')}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2 overflow-x-auto pb-1 sm:pb-0">
                    {BOARDING_SCHOOL_PROFILES.map(prof => (
                      <button
                        key={prof.school_id}
                        onClick={() => setSelectedProfileId(prof.school_id)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition ${
                          selectedProfileId === prof.school_id
                            ? 'bg-blue-600 text-white shadow-xs'
                            : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
                        }`}
                      >
                        {t(prof.school_name)}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Selected Profile Detail Card */}
              <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-xs space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-100">
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="px-2 py-0.5 rounded-lg bg-blue-100 text-blue-800 text-xs font-bold">
                        {t(activeProfile.state)}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                        {t(activeProfile.school_name)}
                      </h3>
                    </div>
                    <p className="text-xs text-slate-500 mt-1">
                      {t('寄宿规模')}：{t(activeProfile.capacity)}
                    </p>
                  </div>

                  {onSelectSchoolDetail && (
                    <button
                      onClick={() => {
                        const target = schools.find(s => s.school_id === activeProfile.school_id);
                        if (target) {
                          onClose();
                          onSelectSchoolDetail(target);
                        }
                      }}
                      className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 transition"
                    >
                      <span>{t('查看该校完整简章')}</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

                {/* Specs Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 text-xs sm:text-sm">
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                    <div className="text-slate-400 font-semibold mb-1">{t('房型与设施')}</div>
                    <div className="font-bold text-slate-800">{t(activeProfile.room_types)}</div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                    <div className="text-slate-400 font-semibold mb-1">{t('空调配置')}</div>
                    <div className="font-bold text-slate-800">{t(activeProfile.air_conditioned)}</div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                    <div className="text-slate-400 font-semibold mb-1">{t('手机管控')}</div>
                    <div className="font-bold text-blue-700">{t(activeProfile.phone_policy)}</div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                    <div className="text-slate-400 font-semibold mb-1">{t('晚自习大厅')}</div>
                    <div className="font-bold text-slate-800">{t(activeProfile.study_hall)}</div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                    <div className="text-slate-400 font-semibold mb-1">{t('洗衣与烘干')}</div>
                    <div className="font-bold text-slate-800">{t(activeProfile.laundry_service)}</div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                    <div className="text-slate-400 font-semibold mb-1">{t('膳食计划')}</div>
                    <div className="font-bold text-slate-800">{t(activeProfile.dining_plan)}</div>
                  </div>
                </div>

                {/* Transit Routes */}
                <div className="space-y-3 pt-2">
                  <div className="flex items-center space-x-2 text-slate-900 font-bold text-sm">
                    <Bus className="w-4 h-4 text-blue-600" />
                    <span>{t('周末直通外州校车 / 接驳班次')} ({activeProfile.transit_routes.length} {t('条专线')})</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                    {activeProfile.transit_routes.map((route, rIdx) => (
                      <div key={rIdx} className="p-4 rounded-2xl bg-blue-50/60 border border-blue-200/80 space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="font-black text-sm text-blue-900">
                            {t(route.destination)}
                          </span>
                          <span className="px-2 py-0.5 rounded-md bg-white text-blue-700 border border-blue-200 text-[11px] font-bold">
                            {t(route.est_duration)}
                          </span>
                        </div>
                        <div className="text-xs text-slate-600 space-y-1">
                          <div>
                            <span className="font-bold text-slate-700">{t('上下车接送点')}：</span>
                            {t(route.pickup_dropoff)}
                          </div>
                          <div>
                            <span className="font-bold text-slate-700">{t('发车频次')}：</span>
                            {t(route.frequency)}
                          </div>
                          <div className="text-slate-500 italic mt-1">
                            {t(route.notes)}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: 必备行装与心理准备 */}
          {activeTab === 'checklist' && (
            <div className="space-y-6">
              <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <h4 className="font-black text-emerald-900 text-sm sm:text-base">
                    {t('外州寄宿生入校行李交互核对清单')}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600">
                    {t('家长可点击勾选已准备好的物品。根据历届寄宿生经验总结，精简实用，避免携带过多闲置物品。')}
                  </p>
                </div>
                <div className="shrink-0 text-right">
                  <div className="text-xs font-bold text-emerald-700">
                    {t('已准备')}：{Object.values(checkedItems).filter(Boolean).length} / {OUTSTATION_PARENT_CHECKLIST.reduce((acc, c) => acc + c.items.length, 0)}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {OUTSTATION_PARENT_CHECKLIST.map((category, cIdx) => (
                  <div key={cIdx} className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-3">
                    <h5 className="font-black text-slate-900 text-sm flex items-center space-x-2 border-b border-slate-100 pb-2">
                      <span className="w-2 h-2 rounded-full bg-blue-600" />
                      <span>{t(category.category)}</span>
                    </h5>

                    <div className="space-y-2">
                      {category.items.map((item, iIdx) => {
                        const isDone = !!checkedItems[item];
                        return (
                          <div
                            key={iIdx}
                            onClick={() => toggleCheckItem(item)}
                            className={`p-3 rounded-xl border transition cursor-pointer flex items-start space-x-3 select-none ${
                              isDone
                                ? 'bg-emerald-50/70 border-emerald-300 text-slate-500 line-through'
                                : 'bg-slate-50/60 border-slate-200 hover:bg-blue-50/40 text-slate-700'
                            }`}
                          >
                            <input
                              type="checkbox"
                              checked={isDone}
                              onChange={() => {}}
                              className="w-4 h-4 text-blue-600 rounded mt-0.5 pointer-events-none"
                            />
                            <span className="text-xs sm:text-sm leading-relaxed flex-1">
                              {t(item)}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: 全马寄宿独中一览 */}
          {activeTab === 'schools_directory' && (
            <div className="space-y-6">
              {/* State Filter Buttons */}
              <div className="flex flex-wrap items-center gap-1.5 bg-slate-50 p-2.5 rounded-2xl border border-slate-200">
                <span className="text-xs font-bold text-slate-600 px-2">{t('州属筛选：')}</span>
                <button
                  onClick={() => setStateFilter('all')}
                  className={`px-3 py-1 rounded-xl text-xs font-bold transition ${
                    stateFilter === 'all'
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  {t('全部州属')} ({dormSchools.length})
                </button>
                {uniqueStates.map(st => {
                  const count = dormSchools.filter(s => s.location.state === st).length;
                  return (
                    <button
                      key={st}
                      onClick={() => setStateFilter(st)}
                      className={`px-3 py-1 rounded-xl text-xs font-bold transition ${
                        stateFilter === st
                          ? 'bg-blue-600 text-white'
                          : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                      }`}
                    >
                      {t(st)} ({count})
                    </button>
                  );
                })}
              </div>

              {/* Schools Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredDormSchools.map(sch => {
                  const dormFee = sch.dormitory_and_boarding.dorm_fee_monthly;
                  return (
                    <div
                      key={sch.school_id}
                      className="bg-white rounded-2xl border border-slate-200 p-4 shadow-2xs hover:shadow-md hover:border-blue-300 transition flex flex-col justify-between space-y-3"
                    >
                      <div>
                        <div className="flex items-center justify-between text-xs mb-1">
                          <span className="px-2 py-0.5 rounded-md bg-blue-50 text-blue-700 font-bold">
                            {sch.location.state}
                          </span>
                          <span className="text-slate-400 font-mono text-[11px]">
                            {sch.location.city}
                          </span>
                        </div>
                        <h4 className="font-black text-slate-900 text-base">
                          {sch.name_zh}
                        </h4>
                        <div className="text-xs text-slate-500 line-clamp-1 mb-2">
                          {sch.name_en}
                        </div>
                        <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                          {sch.dormitory_and_boarding.study_hall_rules || (sch.dormitory_and_boarding.room_types ? sch.dormitory_and_boarding.room_types.join('、') : t('提供男女生寄宿公寓，配专职舍监管理。'))}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                        <div>
                          <div className="text-[10px] text-slate-400 font-semibold">{t('每月宿费 (参考)')}</div>
                          <div className="text-sm font-black text-blue-600">
                            {dormFee ? `RM ${dormFee}/月` : t('包含于配套')}
                          </div>
                        </div>

                        {onSelectSchoolDetail && (
                          <button
                            onClick={() => {
                              onClose();
                              onSelectSchoolDetail(sch);
                            }}
                            className="inline-flex items-center space-x-1 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-blue-600 hover:text-white text-slate-700 text-xs font-bold transition"
                          >
                            <span>{t('详情')}</span>
                            <ChevronRight className="w-3.5 h-3.5" />
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between shrink-0">
          <div className="text-xs text-slate-500 hidden sm:block">
            {t('提示：各独中宿舍床位通常依入学考成绩及外州路程远近优先审核分配，建议报名前尽早提交申请。')}
          </div>
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-2 rounded-xl bg-slate-900 text-white font-bold text-xs sm:text-sm hover:bg-slate-800 transition"
          >
            {t('关闭指南')}
          </button>
        </div>

      </div>
    </div>
  );
}
