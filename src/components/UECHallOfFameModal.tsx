'use client';

import React, { useState, useMemo } from 'react';
import { School } from '../types/school';
import { useLanguage } from '../contexts/LanguageContext';
import {
  UEC_HALL_OF_FAME_CASES,
  UEC_TOP_UNIVERSITIES_ADMISSION_MATRIX,
  UEC_STUDY_METHODOLOGY_GUIDE,
  HallOfFameCase
} from '../data/uecHallOfFameData';
import {
  X, Trophy, Award, GraduationCap, Globe, BookOpen,
  Sparkles, CheckCircle2, ChevronRight, Printer, Search,
  Filter, Building2, MapPin, Lightbulb, Star, Quote,
  DollarSign, Landmark, ArrowUpRight
} from 'lucide-react';

interface UECHallOfFameModalProps {
  isOpen: boolean;
  onClose: () => void;
  schools: School[];
  onSelectSchoolDetail?: (school: School) => void;
}

export default function UECHallOfFameModal({
  isOpen,
  onClose,
  schools,
  onSelectSchoolDetail
}: UECHallOfFameModalProps) {
  const { t } = useLanguage();

  // Active View Tab: 'cases' | 'matrix' | 'methodology'
  const [activeTab, setActiveTab] = useState<'cases' | 'matrix' | 'methodology'>('cases');

  // Filter criteria for Cases
  const [selectedTrack, setSelectedTrack] = useState<string>('all');
  const [selectedRegion, setSelectedRegion] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Expanded Case Card Id for reading detailed study strategies
  const [expandedCaseId, setExpandedCaseId] = useState<string | null>(null);

  const toggleExpandCase = (id: string) => {
    setExpandedCaseId(prev => (prev === id ? null : id));
  };

  // Filtered cases
  const filteredCases = useMemo(() => {
    return UEC_HALL_OF_FAME_CASES.filter(c => {
      const matchTrack = selectedTrack === 'all' || c.track === selectedTrack;
      const matchRegion = selectedRegion === 'all' || c.destination_region === selectedRegion;
      const q = searchQuery.toLowerCase().trim();
      const matchSearch = !q ||
        c.student_name.toLowerCase().includes(q) ||
        c.school_name.toLowerCase().includes(q) ||
        c.admitted_university.toLowerCase().includes(q) ||
        c.major.toLowerCase().includes(q) ||
        c.tags.some(tag => tag.toLowerCase().includes(q));

      return matchTrack && matchRegion && matchSearch;
    });
  }, [selectedTrack, selectedRegion, searchQuery]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-5 bg-slate-900/60 backdrop-blur-md animate-fadeIn overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-5xl w-full max-h-[92vh] flex flex-col shadow-2xl border border-slate-100 overflow-hidden relative">
        
        {/* Header */}
        <div className="px-5 sm:px-8 py-5 border-b border-slate-100 bg-gradient-to-r from-amber-900 via-stone-900 to-slate-900 text-white flex items-center justify-between shrink-0">
          <div className="flex items-center space-x-3.5">
            <div className="p-2.5 rounded-2xl bg-amber-500/20 border border-amber-400/30 text-amber-300 shadow-inner">
              <Trophy className="w-6 h-6 text-amber-400" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h3 className="text-lg sm:text-2xl font-black text-white tracking-tight">
                  {t('历年 UEC 全国统考杰出考生与世界名校录取案例库')}
                </h3>
                <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-200 border border-amber-400/30 text-xs font-bold">
                  Hall of Fame
                </span>
              </div>
              <p className="text-xs sm:text-sm text-amber-100/80 mt-0.5">
                {t('清华 · 北大 · 新加坡国大 · 剑桥 · 港大 · 台大 · UTAR 全额奖学金殿堂与备战真经')}
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => window.print()}
              className="hidden sm:inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl border border-white/20 bg-white/10 text-xs font-semibold text-white hover:bg-white/20 transition backdrop-blur-xs"
              title={t('打印案例库')}
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

        {/* Tab Navigation */}
        <div className="px-5 sm:px-8 bg-slate-50 border-b border-slate-200 flex space-x-2 overflow-x-auto py-2.5 scrollbar-none shrink-0 text-xs sm:text-sm">
          <button
            onClick={() => setActiveTab('cases')}
            className={`px-3.5 py-2 rounded-xl font-bold transition flex items-center space-x-1.5 shrink-0 ${
              activeTab === 'cases'
                ? 'bg-amber-600 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-200/70 hover:text-slate-900'
            }`}
          >
            <GraduationCap className="w-4 h-4" />
            <span>{t('世界名校录取案例库')} ({UEC_HALL_OF_FAME_CASES.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('matrix')}
            className={`px-3.5 py-2 rounded-xl font-bold transition flex items-center space-x-1.5 shrink-0 ${
              activeTab === 'matrix'
                ? 'bg-amber-600 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-200/70 hover:text-slate-900'
            }`}
          >
            <Globe className="w-4 h-4" />
            <span>{t('全球六大升学地直录门槛')}</span>
          </button>

          <button
            onClick={() => setActiveTab('methodology')}
            className={`px-3.5 py-2 rounded-xl font-bold transition flex items-center space-x-1.5 shrink-0 ${
              activeTab === 'methodology'
                ? 'bg-amber-600 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-200/70 hover:text-slate-900'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>{t('学霸统考各科提分方法论')}</span>
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-8 space-y-6">

          {/* TAB 1: 录取案例库 */}
          {activeTab === 'cases' && (
            <div className="space-y-6">
              {/* Filter & Search Bar */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {/* Search query */}
                  <div className="relative">
                    <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder={t('搜索学生、母校、大学或科系...')}
                      className="w-full pl-9 pr-3 py-2 rounded-xl border border-slate-200 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white"
                    />
                  </div>

                  {/* Track filter */}
                  <div>
                    <select
                      value={selectedTrack}
                      onChange={(e) => setSelectedTrack(e.target.value)}
                      className="w-full py-2 px-3 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white"
                    >
                      <option value="all">{t('全部科系类组 (理科 / 商科 / 文科)')}</option>
                      <option value="science">{t('🔬 理工科类 (Science Track)')}</option>
                      <option value="commerce">{t('📊 商科类 (Commerce Track)')}</option>
                      <option value="arts">{t('🎨 文艺社科类 (Arts Track)')}</option>
                    </select>
                  </div>

                  {/* Destination Region filter */}
                  <div>
                    <select
                      value={selectedRegion}
                      onChange={(e) => setSelectedRegion(e.target.value)}
                      className="w-full py-2 px-3 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white"
                    >
                      <option value="all">{t('全部升学目的地')}</option>
                      <option value="China">{t('🇨🇳 中国大陆 (清华/北大/复旦等)')}</option>
                      <option value="Singapore">{t('🇸🇬 新加坡 (NUS / NTU)')}</option>
                      <option value="UK">{t('🇬🇧 英国 (剑桥 / 帝国理工等)')}</option>
                      <option value="Hong Kong">{t('🇭🇰 中国香港 (港大 / 港中文等)')}</option>
                      <option value="Taiwan">{t('🇹🇼 台湾 (台大医科 / 电机等)')}</option>
                      <option value="Malaysia">{t('🇲🇾 马来西亚 (UTAR / 本地全免奖学金)')}</option>
                    </select>
                  </div>
                </div>

                {/* Quick Results Summary */}
                <div className="flex items-center justify-between text-xs text-slate-500 pt-1">
                  <span>
                    {t('符合条件案例')}：<strong className="text-amber-700">{filteredCases.length}</strong> {t('名杰出学长姐')}
                  </span>
                  {(selectedTrack !== 'all' || selectedRegion !== 'all' || searchQuery) && (
                    <button
                      onClick={() => {
                        setSelectedTrack('all');
                        setSelectedRegion('all');
                        setSearchQuery('');
                      }}
                      className="text-amber-600 hover:text-amber-800 font-bold underline cursor-pointer"
                    >
                      {t('重置筛选条件')}
                    </button>
                  )}
                </div>
              </div>

              {/* Case Cards List */}
              <div className="space-y-4">
                {filteredCases.map(item => {
                  const isExpanded = expandedCaseId === item.id;
                  const trackBadge = 
                    item.track === 'science' ? { bg: 'bg-blue-100 text-blue-800', label: '理科' } :
                    item.track === 'commerce' ? { bg: 'bg-emerald-100 text-emerald-800', label: '商科' } :
                    { bg: 'bg-purple-100 text-purple-800', label: '文科' };

                  return (
                    <div
                      key={item.id}
                      className="bg-white rounded-3xl border border-slate-200 shadow-2xs hover:shadow-md hover:border-amber-300 transition overflow-hidden"
                    >
                      {/* Top Banner with Student Name, School & University */}
                      <div className="p-5 sm:p-6 bg-gradient-to-r from-slate-50 via-white to-amber-50/40 border-b border-slate-100">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                          <div className="space-y-1">
                            <div className="flex flex-wrap items-center gap-2">
                              <span className={`px-2.5 py-0.5 rounded-full text-xs font-black ${trackBadge.bg}`}>
                                {t(trackBadge.label)}
                              </span>
                              <span className="font-mono text-xs text-slate-400 font-bold">
                                {item.graduation_year} {t('届')}
                              </span>
                              <span className="text-sm sm:text-base font-black text-slate-900">
                                {item.student_name}
                              </span>
                              <span className="text-xs text-slate-500 font-medium">
                                ({item.school_name})
                              </span>
                            </div>

                            <div className="flex flex-wrap items-center gap-2 pt-1">
                              <span className="text-base sm:text-lg font-black text-amber-800">
                                {item.admitted_university}
                              </span>
                              <span className="text-xs sm:text-sm font-bold text-slate-700">
                                · {item.major}
                              </span>
                            </div>
                          </div>

                          {/* Action Button: School Detail Jump */}
                          {onSelectSchoolDetail && (
                            <button
                              onClick={() => {
                                const target = schools.find(s => s.school_id === item.school_id);
                                if (target) {
                                  onClose();
                                  onSelectSchoolDetail(target);
                                }
                              }}
                              className="self-start sm:self-auto inline-flex items-center space-x-1 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-amber-600 hover:text-white text-slate-700 text-xs font-bold transition"
                            >
                              <span>{t('母校招生简章')}</span>
                              <ArrowUpRight className="w-3.5 h-3.5" />
                            </button>
                          )}
                        </div>

                        {/* UEC Score & Scholarship */}
                        <div className="mt-3.5 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                          <div className="p-2.5 rounded-xl bg-amber-50/70 border border-amber-200/80 flex items-start space-x-2">
                            <Award className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                            <div>
                              <span className="font-bold text-amber-900">{t('统考战绩')}：</span>
                              <span className="font-semibold text-slate-800">{item.uec_results}</span>
                            </div>
                          </div>
                          <div className="p-2.5 rounded-xl bg-emerald-50/70 border border-emerald-200/80 flex items-start space-x-2">
                            <DollarSign className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                            <div>
                              <span className="font-bold text-emerald-900">{t('奖学金荣誉')}：</span>
                              <span className="font-semibold text-slate-800">{item.scholarship}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Content Body */}
                      <div className="p-5 sm:p-6 space-y-4">
                        {/* High school highlights */}
                        <div className="text-xs sm:text-sm text-slate-600">
                          <strong className="text-slate-800 font-bold">{t('高中亮点')}：</strong>
                          {item.high_school_highlights}
                        </div>

                        {/* Quote for juniors */}
                        <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-start space-x-3 text-xs sm:text-sm italic text-slate-700">
                          <Quote className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                          <div>
                            <span className="font-bold text-slate-900 not-italic mr-1">{t('学长寄语')}：</span>
                            &ldquo;{item.advice_for_juniors}&rdquo;
                          </div>
                        </div>

                        {/* Expandable Study Strategy */}
                        {isExpanded && (
                          <div className="pt-3 border-t border-slate-100 space-y-2 animate-fadeIn">
                            <div className="flex items-center space-x-2 text-xs font-bold text-amber-700">
                              <Lightbulb className="w-4 h-4" />
                              <span>{t('深度统考提分秘籍 & 备战策略')}</span>
                            </div>
                            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed bg-amber-50/40 p-4 rounded-2xl border border-amber-200/60">
                              {item.study_strategy}
                            </p>
                          </div>
                        )}

                        {/* Bottom Tags & Expand Toggle */}
                        <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
                          <div className="flex flex-wrap items-center gap-1.5">
                            {item.tags.map((tg, tIdx) => (
                              <span key={tIdx} className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 text-[11px] font-medium">
                                #{t(tg)}
                              </span>
                            ))}
                          </div>

                          <button
                            onClick={() => toggleExpandCase(item.id)}
                            className="text-xs font-bold text-amber-700 hover:text-amber-900 flex items-center space-x-1"
                          >
                            <span>{isExpanded ? t('收起备战秘籍') : t('展开详细提分秘籍')}</span>
                            <ChevronRight className={`w-3.5 h-3.5 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* TAB 2: 全球直录门槛矩阵 */}
          {activeTab === 'matrix' && (
            <div className="space-y-6">
              <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 space-y-1">
                <h4 className="font-black text-amber-950 text-sm sm:text-base">
                  {t('UEC 高中统考文凭直录世界顶尖名校标准一览表')}
                </h4>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {t('根据各大学国际留学生/侨生招生办最新 2025/2026 入学规定整理。统考 A1 积点不仅免除预科，更可直接申请全额入学奖学金。')}
                </p>
              </div>

              <div className="space-y-4">
                {UEC_TOP_UNIVERSITIES_ADMISSION_MATRIX.map((tier, idx) => (
                  <div key={idx} className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
                      <h5 className="font-black text-slate-900 text-base flex items-center space-x-2">
                        <Landmark className="w-4 h-4 text-amber-600" />
                        <span>{tier.region}</span>
                      </h5>
                      <span className="font-mono text-xs font-black text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200">
                        {tier.score_benchmark}
                      </span>
                    </div>

                    <div className="text-xs sm:text-sm text-slate-600 space-y-1.5 leading-relaxed">
                      <div>
                        <strong className="text-slate-800">{t('直录优势 & 奖学金政策')}：</strong>
                        {tier.benefits}
                      </div>
                      <div className="text-slate-500 italic">
                        <strong className="text-slate-700 not-italic">{t('历届录取概况')}：</strong>
                        {tier.quota_notes}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: 学霸提分方法论 */}
          {activeTab === 'methodology' && (
            <div className="space-y-6">
              <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 space-y-1">
                <h4 className="font-black text-blue-950 text-sm sm:text-base">
                  {t('董总统考各科真题提分核心法则')}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {t('历届统考全国学科榜首及世界名校学长姐集体复盘：统考不仅考查知识深度，更考查逻辑书写规范与心理节奏。')}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {UEC_STUDY_METHODOLOGY_GUIDE.map((sub, idx) => (
                  <div key={idx} className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-3">
                    <h5 className="font-black text-slate-900 text-sm sm:text-base flex items-center space-x-2 border-b border-slate-100 pb-2.5 text-blue-900">
                      <BookOpen className="w-4 h-4 text-blue-600" />
                      <span>{sub.subject}</span>
                    </h5>

                    <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
                      {sub.core_techniques.map((tech, tIdx) => (
                        <li key={tIdx} className="flex items-start space-x-2 leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                          <span>{tech}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between shrink-0">
          <div className="text-xs text-slate-500 hidden sm:block">
            {t('励志语：独中三年风雨铸就全球视野与坚韧品格，统考优异文凭助你无缝衔接世界顶尖学府！')}
          </div>
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-2 rounded-xl bg-slate-900 text-white font-bold text-xs sm:text-sm hover:bg-slate-800 transition"
          >
            {t('关闭荣誉榜')}
          </button>
        </div>

      </div>
    </div>
  );
}
