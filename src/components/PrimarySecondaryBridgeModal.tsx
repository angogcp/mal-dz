'use client';

import React, { useState, useMemo } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import {
  PRIMARY_VS_SECONDARY_DIFFERENCES,
  SUBJECT_TRANSITION_GUIDES,
  TRANSITION_GLOSSARY,
  REMOVE_CLASS_FAQS,
  PARENTING_RULES,
  READINESS_QUIZ_QUESTIONS,
  GlossaryTerm
} from '../data/primarySecondaryBridgeData';
import {
  X, Printer, BookOpen, Clock, AlertTriangle, Languages, Users,
  ShieldCheck, Calculator, BookMarked, FlaskConical, Hourglass,
  Globe, Search, CheckCircle2, ChevronRight, HelpCircle, HeartHandshake,
  Sparkles, Award, ArrowRight, Lightbulb, Compass, ThumbsUp, ThumbsDown
} from 'lucide-react';

interface PrimarySecondaryBridgeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenCutoffTrends?: () => void;
  onOpenPrepPapers?: () => void;
}

export default function PrimarySecondaryBridgeModal({
  isOpen,
  onClose,
  onOpenCutoffTrends,
  onOpenPrepPapers
}: PrimarySecondaryBridgeModalProps) {
  const { t } = useLanguage();

  // Active Tab
  const [activeTab, setActiveTab] = useState<'differences' | 'subjects' | 'glossary' | 'remove_class' | 'parenting' | 'quiz'>('differences');

  // Selected subject in subject guide tab
  const [selectedSubjectId, setSelectedSubjectId] = useState<string>('math');

  // Glossary search & filter
  const [glossaryCategory, setGlossaryCategory] = useState<'all' | 'math' | 'science' | 'geography'>('all');
  const [glossarySearch, setGlossarySearch] = useState<string>('');

  // Readiness Quiz State
  const [quizAnswers, setQuizAnswers] = useState<Record<number, number>>({});
  const [quizSubmitted, setQuizSubmitted] = useState<boolean>(false);

  // Active Subject Object
  const activeSubject = useMemo(() => {
    return SUBJECT_TRANSITION_GUIDES.find(s => s.subject_id === selectedSubjectId) || SUBJECT_TRANSITION_GUIDES[0];
  }, [selectedSubjectId]);

  // Filtered Glossary
  const filteredGlossary = useMemo(() => {
    return TRANSITION_GLOSSARY.filter(item => {
      const matchCat = glossaryCategory === 'all' || item.category === glossaryCategory;
      const query = glossarySearch.trim().toLowerCase();
      if (!query) return matchCat;
      const matchText =
        item.chinese.toLowerCase().includes(query) ||
        item.english.toLowerCase().includes(query) ||
        item.malay.toLowerCase().includes(query) ||
        item.definition.toLowerCase().includes(query);
      return matchCat && matchText;
    });
  }, [glossaryCategory, glossarySearch]);

  // Quiz Score Calculation
  const quizResults = useMemo(() => {
    let totalScore = 0;
    const answeredCount = Object.keys(quizAnswers).length;
    READINESS_QUIZ_QUESTIONS.forEach(q => {
      const chosen = quizAnswers[q.id];
      if (chosen !== undefined) {
        totalScore += chosen;
      }
    });

    let levelTitle = '';
    let levelBadgeColor = '';
    let summaryText = '';

    if (totalScore >= 15) {
      levelTitle = '卓越准备型 (High Readiness)';
      levelBadgeColor = 'bg-emerald-100 text-emerald-800 border-emerald-300';
      summaryText = '孩子在时间自律、心理抗挫与综合三语习惯上储备充分，能够迅速融入独中全日制与高挑战学术节奏！';
    } else if (totalScore >= 11) {
      levelTitle = '平稳过渡型 (Moderate Readiness)';
      levelBadgeColor = 'bg-blue-100 text-blue-800 border-blue-300';
      summaryText = '孩子具备健康的基本素质，但在全日制体能分配或某门非母语学科上仍需 1-2 个月的缓冲磨合期。';
    } else {
      levelTitle = '蓄力护航型 (Need Support & Bridge)';
      levelBadgeColor = 'bg-amber-100 text-amber-800 border-amber-300';
      summaryText = '孩子在自主收纳、作息管理或三语自信上较慢热。开学前建议提前介入，家长多以正向鼓励代替催逼。';
    }

    return {
      totalScore,
      answeredCount,
      isComplete: answeredCount === READINESS_QUIZ_QUESTIONS.length,
      levelTitle,
      levelBadgeColor,
      summaryText
    };
  }, [quizAnswers]);

  const handleSelectQuizOption = (questionId: number, score: number) => {
    setQuizAnswers(prev => ({
      ...prev,
      [questionId]: score
    }));
  };

  const handlePrint = () => {
    window.print();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-5 print:p-0 print:bg-white animate-fadeIn">
      <div className="relative w-full max-w-5xl bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden flex flex-col max-h-[92vh] print:max-h-none print:shadow-none print:border-none">
        
        {/* HEADER */}
        <div className="px-6 py-5 bg-gradient-to-r from-amber-600 via-orange-600 to-rose-600 text-white flex items-center justify-between shadow-sm relative overflow-hidden print:bg-none print:text-black">
          <div className="relative z-10 flex items-center space-x-3">
            <div className="w-11 h-11 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center shadow-inner">
              <Compass className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="px-2.5 py-0.5 rounded-full bg-white/25 text-[11px] font-bold uppercase tracking-wider text-amber-50">
                  {t('家长专栏 & 升学指南')}
                </span>
                <span className="text-amber-200 text-xs">Primary-to-Secondary Transition</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black tracking-tight text-white mt-0.5">
                {t('华小升独中衔接宝典')}
              </h2>
            </div>
          </div>

          <div className="flex items-center space-x-2 relative z-10 print:hidden">
            <button
              onClick={handlePrint}
              className="px-3.5 py-2 rounded-xl bg-white/15 hover:bg-white/25 text-white text-xs font-semibold backdrop-blur-md transition flex items-center space-x-1.5 shadow-xs"
              title={t('打印或导出为 PDF')}
            >
              <Printer className="w-4 h-4" />
              <span className="hidden sm:inline">{t('打印指南')}</span>
            </button>
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-xl bg-white/15 hover:bg-white/25 text-white flex items-center justify-center transition"
              title={t('关闭')}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* TABS NAVIGATION */}
        <div className="bg-gray-50 border-b border-gray-200 px-4 sm:px-6 flex overflow-x-auto no-scrollbar space-x-1 sm:space-x-2 py-2 print:hidden">
          <button
            onClick={() => setActiveTab('differences')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition flex items-center space-x-1.5 ${
              activeTab === 'differences'
                ? 'bg-amber-600 text-white shadow-sm'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200/70'
            }`}
          >
            <AlertTriangle className="w-4 h-4" />
            <span>{t('6大关键断层')}</span>
          </button>

          <button
            onClick={() => setActiveTab('subjects')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition flex items-center space-x-1.5 ${
              activeTab === 'subjects'
                ? 'bg-amber-600 text-white shadow-sm'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200/70'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>{t('学科攻坚策略')}</span>
          </button>

          <button
            onClick={() => setActiveTab('glossary')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition flex items-center space-x-1.5 ${
              activeTab === 'glossary'
                ? 'bg-amber-600 text-white shadow-sm'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200/70'
            }`}
          >
            <Languages className="w-4 h-4" />
            <span>{t('三语数理术语库')}</span>
          </button>

          <button
            onClick={() => setActiveTab('remove_class')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition flex items-center space-x-1.5 ${
              activeTab === 'remove_class'
                ? 'bg-amber-600 text-white shadow-sm'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200/70'
            }`}
          >
            <HelpCircle className="w-4 h-4" />
            <span>{t('预备班深度答疑')}</span>
          </button>

          <button
            onClick={() => setActiveTab('parenting')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition flex items-center space-x-1.5 ${
              activeTab === 'parenting'
                ? 'bg-amber-600 text-white shadow-sm'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200/70'
            }`}
          >
            <HeartHandshake className="w-4 h-4" />
            <span>{t('家长心态与陪跑')}</span>
          </button>

          <button
            onClick={() => setActiveTab('quiz')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition flex items-center space-x-1.5 ${
              activeTab === 'quiz'
                ? 'bg-amber-600 text-white shadow-sm'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200/70'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>{t('适应力测评自诊断')}</span>
          </button>
        </div>

        {/* MODAL BODY */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">

          {/* TAB 1: 6 大关键断层对比 */}
          {activeTab === 'differences' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="bg-amber-50/70 border border-amber-200 rounded-2xl p-4 sm:p-5 flex items-start space-x-3.5">
                <Lightbulb className="w-6 h-6 text-amber-700 shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-amber-950 leading-relaxed">
                  <span className="font-bold">{t('为什么初一常被称为“断层最剧烈的一年”？')}</span>
                  {t(' 很多华小成绩全优的学生，升上独中初一后第一次月考常遭遇滑铁卢。这并非孩子不用功，而是独中在“作息长度、学科门数、三语要求与留级机制”上全面重构。提前了解这 6 大差异，能有效避免盲目焦虑。')}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {PRIMARY_VS_SECONDARY_DIFFERENCES.map((diff) => {
                  return (
                    <div
                      key={diff.id}
                      className="bg-white border border-gray-200 rounded-2xl p-4 sm:p-5 shadow-xs hover:shadow-md transition flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between pb-3 border-b border-gray-100 mb-3">
                          <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-sm">
                              {diff.dimension.substring(0, 2)}
                            </div>
                            <h3 className="font-bold text-gray-900 text-sm sm:text-base">{t(diff.dimension)}</h3>
                          </div>
                          <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                            diff.impact_level === 'critical'
                              ? 'bg-red-100 text-red-800 border border-red-200'
                              : diff.impact_level === 'high'
                              ? 'bg-amber-100 text-amber-800 border border-amber-200'
                              : 'bg-blue-100 text-blue-800 border border-blue-200'
                          }`}>
                            {diff.impact_level === 'critical' ? t('关键巨变') : diff.impact_level === 'high' ? t('高影响') : t('中度适应')}
                          </span>
                        </div>

                        {/* Compare Box */}
                        <div className="space-y-2.5 text-xs sm:text-xs">
                          <div className="bg-gray-50 rounded-xl p-2.5 border border-gray-100">
                            <div className="font-bold text-gray-500 mb-1 flex items-center space-x-1">
                              <span>🎒</span>
                              <span>{t('华小阶段：')}</span>
                            </div>
                            <p className="text-gray-700 leading-relaxed">{t(diff.primary_system)}</p>
                          </div>

                          <div className="bg-amber-50/60 rounded-xl p-2.5 border border-amber-100/80">
                            <div className="font-bold text-amber-900 mb-1 flex items-center space-x-1">
                              <span>🏫</span>
                              <span>{t('独中初一：')}</span>
                            </div>
                            <p className="text-amber-950 font-medium leading-relaxed">{t(diff.secondary_system)}</p>
                          </div>
                        </div>
                      </div>

                      {/* Parent Advice */}
                      <div className="mt-3.5 pt-3 border-t border-dashed border-gray-200">
                        <div className="text-[11px] font-bold text-emerald-800 flex items-center space-x-1 mb-1">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                          <span>{t('家长破局对策：')}</span>
                        </div>
                        <p className="text-xs text-gray-600 leading-relaxed">{t(diff.advice_for_parents)}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* TAB 2: 学科攻坚策略 */}
          {activeTab === 'subjects' && (
            <div className="space-y-6 animate-fadeIn">
              {/* Subject selector pill bar */}
              <div className="flex flex-wrap gap-2 pb-2">
                {SUBJECT_TRANSITION_GUIDES.map(subj => {
                  const isSelected = subj.subject_id === selectedSubjectId;
                  return (
                    <button
                      key={subj.subject_id}
                      onClick={() => setSelectedSubjectId(subj.subject_id)}
                      className={`px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center space-x-1.5 shadow-2xs ${
                        isSelected
                          ? 'bg-amber-700 text-white shadow-sm'
                          : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
                      }`}
                    >
                      <span>{t(subj.subject_name.split('（')[0])}</span>
                    </button>
                  );
                })}
              </div>

              {/* Subject Detail Card */}
              <div className="bg-white border border-gray-200 rounded-3xl p-5 sm:p-6 shadow-sm space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-gray-100 gap-2">
                  <div>
                    <span className="text-[11px] font-bold text-amber-700 uppercase tracking-wider">{t('初一关键学科攻坚')}</span>
                    <h3 className="text-lg sm:text-xl font-black text-gray-900 mt-0.5">{t(activeSubject.subject_name)}</h3>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => setActiveTab('glossary')}
                      className="px-3 py-1.5 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200 text-xs font-bold transition flex items-center space-x-1"
                    >
                      <Languages className="w-3.5 h-3.5" />
                      <span>{t('查看对应三语术语')}</span>
                    </button>
                    {onOpenPrepPapers && (
                      <button
                        onClick={onOpenPrepPapers}
                        className="px-3 py-1.5 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-900 border border-rose-200 text-xs font-bold transition flex items-center space-x-1"
                      >
                        <BookOpen className="w-3.5 h-3.5" />
                        <span>{t('查看真题资源')}</span>
                      </button>
                    )}
                  </div>
                </div>

                {/* Primary vs Secondary Shock */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-2xl border border-gray-200">
                    <span className="text-xs font-bold text-gray-500 flex items-center space-x-1 mb-1.5">
                      <span>🎒</span>
                      <span>{t('华小阶段学习状态')}</span>
                    </span>
                    <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">{t(activeSubject.primary_status)}</p>
                  </div>

                  <div className="bg-rose-50/70 p-4 rounded-2xl border border-rose-200">
                    <span className="text-xs font-bold text-rose-800 flex items-center space-x-1 mb-1.5">
                      <AlertTriangle className="w-4 h-4 text-rose-600" />
                      <span>{t('初一断层与知识冲击')}</span>
                    </span>
                    <p className="text-xs sm:text-sm text-rose-950 font-medium leading-relaxed">{t(activeSubject.secondary_shock)}</p>
                  </div>
                </div>

                {/* Core Topics Checklist */}
                <div>
                  <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2.5 flex items-center space-x-1.5">
                    <Sparkles className="w-4 h-4 text-amber-600" />
                    <span>{t('初一第一学期核心重难点大纲')}</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {activeSubject.core_topics.map((topic, idx) => (
                      <div key={idx} className="bg-gray-50 rounded-xl p-3 border border-gray-100 flex items-start space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="text-xs text-gray-800 font-medium">{t(topic)}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Strategies */}
                <div className="bg-amber-50/50 rounded-2xl p-4 sm:p-5 border border-amber-200/80">
                  <h4 className="text-xs font-bold text-amber-900 uppercase tracking-wider mb-2.5 flex items-center space-x-1.5">
                    <Lightbulb className="w-4 h-4 text-amber-700" />
                    <span>{t('假期提前衔接备考策略（给学生与家长的具体操作）')}</span>
                  </h4>
                  <div className="space-y-2">
                    {activeSubject.bridge_strategies.map((strat, idx) => (
                      <div key={idx} className="flex items-start space-x-2 text-xs sm:text-sm text-amber-950">
                        <span className="w-5 h-5 rounded-full bg-amber-200 text-amber-900 font-black text-[11px] flex items-center justify-center shrink-0 mt-0.5">
                          {idx + 1}
                        </span>
                        <p className="leading-relaxed">{t(strat)}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recommended Resources */}
                <div>
                  <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                    {t('官方推荐教材与课外自学资源')}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeSubject.recommended_resources.map((res, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 rounded-xl bg-gray-100 text-gray-800 text-xs font-semibold border border-gray-200 flex items-center space-x-1.5"
                      >
                        <BookOpen className="w-3.5 h-3.5 text-gray-500" />
                        <span>{t(res)}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: 三语数理与关键学科术语对照库 */}
          {activeTab === 'glossary' && (
            <div className="space-y-5 animate-fadeIn">
              <div className="bg-blue-50/70 border border-blue-200 rounded-2xl p-4 flex items-start space-x-3">
                <Languages className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-blue-950 leading-relaxed">
                  <span className="font-bold">{t('跨语言数理速查宝典：')}</span>
                  {t(' 许多初一新生在进入英化理科班或面对双语题目时，因读不懂英文/国文专用术语而手足无措。本词库汇整初一数学、科学与地理最高频的三语专业名词，供小六与初一学生对照预习！')}
                </div>
              </div>

              {/* Filter & Search Bar */}
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <div className="flex items-center space-x-1.5 bg-gray-100 p-1 rounded-xl w-full sm:w-auto">
                  <button
                    onClick={() => setGlossaryCategory('all')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                      glossaryCategory === 'all' ? 'bg-white text-gray-900 shadow-2xs' : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {t('全部学科')} ({TRANSITION_GLOSSARY.length})
                  </button>
                  <button
                    onClick={() => setGlossaryCategory('math')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                      glossaryCategory === 'math' ? 'bg-white text-gray-900 shadow-2xs' : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {t('初中数学')}
                  </button>
                  <button
                    onClick={() => setGlossaryCategory('science')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                      glossaryCategory === 'science' ? 'bg-white text-gray-900 shadow-2xs' : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {t('综合科学')}
                  </button>
                  <button
                    onClick={() => setGlossaryCategory('geography')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                      glossaryCategory === 'geography' ? 'bg-white text-gray-900 shadow-2xs' : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {t('初中地理')}
                  </button>
                </div>

                <div className="relative flex-1 w-full">
                  <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={glossarySearch}
                    onChange={(e) => setGlossarySearch(e.target.value)}
                    placeholder={t('搜索中文、英文、马来文或定义（如：Density, 方程式, Kontur）...')}
                    className="w-full pl-9 pr-3 py-2 rounded-xl border border-gray-300 text-xs focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white"
                  />
                  {glossarySearch && (
                    <button
                      onClick={() => setGlossarySearch('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-xs"
                    >
                      ✕
                    </button>
                  )}
                </div>
              </div>

              {/* Glossary Cards Table / Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {filteredGlossary.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white border border-gray-200 rounded-2xl p-4 shadow-2xs hover:shadow-sm transition"
                  >
                    <div className="flex items-center justify-between pb-2 mb-2 border-b border-gray-100">
                      <div className="flex items-center space-x-2">
                        <span className="font-bold text-gray-900 text-sm sm:text-base">{t(item.chinese)}</span>
                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                          item.category === 'math'
                            ? 'bg-blue-100 text-blue-800'
                            : item.category === 'science'
                            ? 'bg-emerald-100 text-emerald-800'
                            : 'bg-amber-100 text-amber-800'
                        }`}>
                          {item.category === 'math' ? t('数学') : item.category === 'science' ? t('科学') : t('地理')}
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                      <div className="bg-gray-50 p-2 rounded-xl">
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">English</span>
                        <span className="font-semibold text-gray-900">{item.english}</span>
                      </div>
                      <div className="bg-gray-50 p-2 rounded-xl">
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">Bahasa Melayu</span>
                        <span className="font-semibold text-gray-900">{item.malay}</span>
                      </div>
                    </div>

                    <p className="text-xs text-gray-600 leading-relaxed bg-amber-50/40 p-2.5 rounded-xl border border-amber-100/60">
                      {t(item.definition)}
                    </p>
                  </div>
                ))}
              </div>

              {filteredGlossary.length === 0 && (
                <div className="text-center py-10 bg-gray-50 rounded-2xl text-gray-500 text-xs">
                  {t('未找到匹配词汇，请尝试其他关键词。')}
                </div>
              )}
            </div>
          )}

          {/* TAB 4: 初中预备班 (Remove Class) 深度答疑 */}
          {activeTab === 'remove_class' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="bg-gradient-to-r from-emerald-700 to-teal-800 text-white rounded-3xl p-5 sm:p-6 shadow-sm">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-white/20 text-emerald-100 text-xs font-bold">
                    {t('解开家长心中最大的心结')}
                  </span>
                </div>
                <h3 className="text-lg sm:text-2xl font-black mb-2">{t('理性看待“初中预备班”：不是退步，而是深蹲蓄力！')}</h3>
                <p className="text-xs sm:text-sm text-emerald-50 leading-relaxed">
                  {t('很多家长收到孩子的录取通知书上写着“编入初中预备班”时，常感到羞愧或沮丧。事实上，独中预备班是让基础语言暂时落后的孩子在爱与包容中建立自信的“黄金保护期”。')}
                </p>
              </div>

              <div className="space-y-4">
                {REMOVE_CLASS_FAQS.map((faq, idx) => (
                  <div key={idx} className="bg-white border border-gray-200 rounded-2xl p-5 shadow-xs">
                    <div className="flex items-start space-x-3 mb-2.5">
                      <div className="w-7 h-7 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                        Q{idx + 1}
                      </div>
                      <h4 className="font-black text-gray-900 text-sm sm:text-base leading-snug">{t(faq.question)}</h4>
                    </div>

                    <div className="pl-10 space-y-2">
                      <div className="inline-block px-3 py-1 rounded-xl bg-amber-50 text-amber-900 font-bold text-xs border border-amber-200">
                        💡 {t(faq.highlight)}
                      </div>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed pt-1">{t(faq.answer)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: 家长心态与陪跑指南 */}
          {activeTab === 'parenting' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* 4 大必做黄金法则 */}
                <div className="bg-emerald-50/50 border border-emerald-200 rounded-3xl p-5 sm:p-6 shadow-2xs space-y-4">
                  <div className="flex items-center space-x-2 pb-3 border-b border-emerald-200">
                    <div className="w-8 h-8 rounded-xl bg-emerald-600 text-white flex items-center justify-center">
                      <ThumbsUp className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-black text-emerald-950 text-base">{t('4 大黄金陪跑法则（家长必做）')}</h4>
                      <p className="text-[11px] text-emerald-800">{t('帮助孩子建立安全感与自驱力')}</p>
                    </div>
                  </div>

                  <div className="space-y-3.5">
                    {PARENTING_RULES.must_do.map((item, idx) => (
                      <div key={idx} className="bg-white p-3.5 rounded-2xl border border-emerald-100 shadow-3xs">
                        <h5 className="font-bold text-emerald-900 text-xs sm:text-sm mb-1 flex items-center space-x-1.5">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span>{t(item.title)}</span>
                        </h5>
                        <p className="text-xs text-gray-600 leading-relaxed pl-5.5">{t(item.desc)}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 4 大雷区禁忌 */}
                <div className="bg-rose-50/50 border border-rose-200 rounded-3xl p-5 sm:p-6 shadow-2xs space-y-4">
                  <div className="flex items-center space-x-2 pb-3 border-b border-rose-200">
                    <div className="w-8 h-8 rounded-xl bg-rose-600 text-white flex items-center justify-center">
                      <ThumbsDown className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-black text-rose-950 text-base">{t('4 大雷区禁忌（千万不要做）')}</h4>
                      <p className="text-[11px] text-rose-800">{t('避免无意识摧毁孩子的求知欲与自信')}</p>
                    </div>
                  </div>

                  <div className="space-y-3.5">
                    {PARENTING_RULES.dont_do.map((item, idx) => (
                      <div key={idx} className="bg-white p-3.5 rounded-2xl border border-rose-100 shadow-3xs">
                        <h5 className="font-bold text-rose-900 text-xs sm:text-sm mb-1 flex items-center space-x-1.5">
                          <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0" />
                          <span>{t(item.title)}</span>
                        </h5>
                        <p className="text-xs text-gray-600 leading-relaxed pl-5.5">{t(item.desc)}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 6: 适应力测评自诊断 (Interactive Readiness Quiz) */}
          {activeTab === 'quiz' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="bg-gradient-to-r from-amber-700 via-orange-600 to-rose-700 text-white rounded-3xl p-5 sm:p-6 shadow-sm">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-white/20 text-amber-100 text-xs font-bold">
                    {t('小六升中自测系统')}
                  </span>
                  <span className="text-amber-200 text-xs font-medium">6道维度自诊断</span>
                </div>
                <h3 className="text-lg sm:text-xl font-black mb-1">{t('华小生升读独中适应力自测模拟')}</h3>
                <p className="text-xs sm:text-sm text-amber-100 leading-relaxed">
                  {t('根据孩子目前的自理、双语、体能与抗压表现，快速测算孩子的升中准备度，并生成定制化的过渡建议方案。')}
                </p>
              </div>

              {/* Quiz Questions */}
              <div className="space-y-5">
                {READINESS_QUIZ_QUESTIONS.map((q) => {
                  const currentAnswer = quizAnswers[q.id];
                  return (
                    <div
                      key={q.id}
                      className="bg-white border border-gray-200 rounded-2xl p-4 sm:p-5 shadow-xs"
                    >
                      <div className="flex items-start space-x-3 mb-3">
                        <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-800 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                          {q.id}
                        </span>
                        <h4 className="font-bold text-gray-900 text-sm sm:text-base leading-snug">{t(q.question)}</h4>
                      </div>

                      <div className="space-y-2 pl-9">
                        {q.options.map((opt, optIdx) => {
                          const isSelected = currentAnswer === opt.score;
                          return (
                            <button
                              key={optIdx}
                              onClick={() => handleSelectQuizOption(q.id, opt.score)}
                              className={`w-full text-left p-3 rounded-xl border text-xs sm:text-sm transition flex items-start space-x-2.5 ${
                                isSelected
                                  ? 'bg-amber-50 border-amber-500 text-amber-950 font-semibold ring-1 ring-amber-400'
                                  : 'bg-gray-50/70 border-gray-200 text-gray-700 hover:bg-gray-100/80'
                              }`}
                            >
                              <div className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 mt-0.5 ${
                                isSelected ? 'border-amber-600 bg-amber-600 text-white' : 'border-gray-400 bg-white'
                              }`}>
                                {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                              </div>
                              <div className="flex-1">
                                <p>{t(opt.label)}</p>
                                {isSelected && (
                                  <p className="text-[11px] text-amber-700 mt-1 font-normal">
                                    💡 {t(opt.interpretation)}
                                  </p>
                                )}
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* QUIZ SCORE REPORT */}
              <div className="bg-white border-2 border-amber-300 rounded-3xl p-5 sm:p-6 shadow-md space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-gray-100">
                  <div>
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">{t('测评完成进度')}</span>
                    <div className="flex items-center space-x-2 mt-0.5">
                      <h4 className="text-xl font-black text-gray-900">
                        {quizResults.answeredCount} / {READINESS_QUIZ_QUESTIONS.length} {t('题已答')}
                      </h4>
                      {quizResults.isComplete && (
                        <span className={`px-3 py-1 rounded-full text-xs font-bold border ${quizResults.levelBadgeColor}`}>
                          {t(quizResults.levelTitle)}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">{t('综合准备度得分')}</span>
                    <div className="text-2xl font-black text-amber-700">
                      {quizResults.totalScore} <span className="text-sm text-gray-400 font-normal">/ 18 分</span>
                    </div>
                  </div>
                </div>

                {quizResults.isComplete ? (
                  <div className="space-y-4">
                    <div className="bg-amber-50 p-4 rounded-2xl border border-amber-200">
                      <h5 className="font-bold text-amber-950 text-sm mb-1">{t('综合专家建议：')}</h5>
                      <p className="text-xs sm:text-sm text-amber-900 leading-relaxed">{t(quizResults.summaryText)}</p>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {onOpenCutoffTrends && (
                        <button
                          onClick={onOpenCutoffTrends}
                          className="px-4 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs shadow-xs transition flex items-center space-x-1.5"
                        >
                          <span>{t('查看 8 大名校录取试录取线趋势')}</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      )}
                      {onOpenPrepPapers && (
                        <button
                          onClick={onOpenPrepPapers}
                          className="px-4 py-2.5 rounded-xl bg-gray-900 hover:bg-black text-white font-bold text-xs shadow-xs transition flex items-center space-x-1.5"
                        >
                          <span>{t('免费下载历届入学试真题模考卷')}</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                  </div>
                ) : (
                  <p className="text-xs text-gray-500 italic">
                    {t('请完成上方所有 6 道自测题，系统将自动生成您的适应力诊断报告与定制建议。')}
                  </p>
                )}
              </div>
            </div>
          )}

        </div>

        {/* MODAL FOOTER */}
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-3 print:hidden">
          <div className="text-xs text-gray-500 flex items-center space-x-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>{t('内容汇整自全马 63 所独中教务处、辅导处指引与真实教学实践')}</span>
          </div>

          <button
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gray-900 hover:bg-black text-white text-xs font-bold transition shadow-xs"
          >
            {t('返回浏览')}
          </button>
        </div>

      </div>
    </div>
  );
}
