'use client';

import React, { useState, useMemo } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { 
  EXAM_SUBJECT_SYLLABUSES, 
  SCHOOL_EXAM_PROFILES, 
  EXAM_SPRINT_CHECKLIST,
  SubjectSyllabus,
  SchoolExamProfile 
} from '../data/examPrepData';
import { 
  X, BookOpen, Calculator, Globe, MapPin, 
  FileText, CheckCircle2, AlertTriangle, Sparkles, 
  ExternalLink, ChevronDown, ChevronUp, Printer, 
  Calendar, Award, Search, Download, HelpCircle,
  Lightbulb, ShieldCheck, Clock
} from 'lucide-react';

interface ExamPrepModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialSchoolId?: string | null;
  onSelectSchoolDetail?: (schoolName: string) => void;
  onOpenUASAChecker?: () => void;
}

export default function ExamPrepModal({
  isOpen,
  onClose,
  initialSchoolId,
  onSelectSchoolDetail,
  onOpenUASAChecker
}: ExamPrepModalProps) {
  const { t } = useLanguage();

  const [activeTab, setActiveTab] = useState<'syllabus' | 'schools' | 'sprint'>('syllabus');
  const [selectedSubjectId, setSelectedSubjectId] = useState<string>('math');
  const [schoolSearchQuery, setSchoolSearchQuery] = useState('');
  const [schoolStateFilter, setSchoolStateFilter] = useState('全部');
  const [expandedKbatIdx, setExpandedKbatIdx] = useState<number | null>(0);
  const [selectedSchoolId, setSelectedSchoolId] = useState<string | null>(initialSchoolId || null);

  const activeSubject = useMemo(() => {
    return EXAM_SUBJECT_SYLLABUSES.find(s => s.id === selectedSubjectId) || EXAM_SUBJECT_SYLLABUSES[0];
  }, [selectedSubjectId]);

  const schoolStates = useMemo(() => {
    const states = Array.from(new Set(SCHOOL_EXAM_PROFILES.map(s => s.state)));
    return ['全部', ...states];
  }, []);

  const filteredSchools = useMemo(() => {
    return SCHOOL_EXAM_PROFILES.filter(s => {
      const matchState = schoolStateFilter === '全部' || s.state === schoolStateFilter;
      const matchQuery = !schoolSearchQuery.trim() || 
        s.school_name.toLowerCase().includes(schoolSearchQuery.toLowerCase()) ||
        s.prep_advice.toLowerCase().includes(schoolSearchQuery.toLowerCase()) ||
        s.state.includes(schoolSearchQuery);
      return matchState && matchQuery;
    });
  }, [schoolStateFilter, schoolSearchQuery]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-900/60 backdrop-blur-md animate-fadeIn overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[92vh] flex flex-col shadow-2xl border border-slate-100 overflow-hidden relative">
        
        {/* Header */}
        <div className="px-6 py-5 border-b border-slate-100 bg-gradient-to-r from-red-50 via-white to-amber-50/50 flex items-center justify-between shrink-0">
          <div className="flex items-center space-x-3">
            <div className="p-2.5 rounded-2xl bg-red-600 text-white shadow-md shadow-red-200">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h3 className="text-lg sm:text-xl font-black text-slate-900">
                  {t('独中初一入学考真题与备考全指南')}
                </h3>
                <span className="px-2 py-0.5 rounded-full bg-red-100 text-red-800 text-[10px] font-bold">
                  2026 最新版
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-0.5">
                {t('全马 63 所独中四大核心科目大纲、高频高思维题 (KBAT) 解析与官方历届试卷指引')}
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={handlePrint}
              className="hidden sm:inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl border border-slate-200 bg-white text-xs font-semibold text-slate-700 hover:bg-slate-50 transition shadow-xs"
              title={t('打印当前指南')}
            >
              <Printer className="w-3.5 h-3.5 text-slate-500" />
              <span>{t('打印 / 另存为 PDF')}</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="px-6 border-b border-slate-200 bg-slate-50/70 flex space-x-2 sm:space-x-4 overflow-x-auto shrink-0 py-2.5">
          <button
            onClick={() => setActiveTab('syllabus')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition flex items-center space-x-2 shrink-0 ${
              activeTab === 'syllabus'
                ? 'bg-red-700 text-white shadow-sm'
                : 'text-slate-600 hover:bg-slate-200/70'
            }`}
          >
            <Calculator className="w-4 h-4" />
            <span>{t('四大科目考纲与 KBAT 真题')}</span>
          </button>

          <button
            onClick={() => setActiveTab('schools')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition flex items-center space-x-2 shrink-0 ${
              activeTab === 'schools'
                ? 'bg-red-700 text-white shadow-sm'
                : 'text-slate-600 hover:bg-slate-200/70'
            }`}
          >
            <Award className="w-4 h-4" />
            <span>{t('各校真题特色与官方购买指引')}</span>
          </button>

          <button
            onClick={() => setActiveTab('sprint')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition flex items-center space-x-2 shrink-0 ${
              activeTab === 'sprint'
                ? 'bg-red-700 text-white shadow-sm'
                : 'text-slate-600 hover:bg-slate-200/70'
            }`}
          >
            <Clock className="w-4 h-4" />
            <span>{t('考前 30 天冲刺与防坑锦囊')}</span>
          </button>
        </div>

        {/* Scrollable Body Content */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-7 space-y-6">

          {/* TAB 1: SUBJECT SYLLABUS & KBAT EXAM ANALYSIS */}
          {activeTab === 'syllabus' && (
            <div className="space-y-6">
              {/* Subject Selector Buttons */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {EXAM_SUBJECT_SYLLABUSES.map(sub => {
                  const isSelected = sub.id === selectedSubjectId;
                  return (
                    <button
                      key={sub.id}
                      onClick={() => {
                        setSelectedSubjectId(sub.id);
                        setExpandedKbatIdx(0);
                      }}
                      className={`p-3 rounded-2xl border text-left transition flex flex-col justify-between ${
                        isSelected
                          ? 'border-red-600 bg-red-50/50 shadow-xs'
                          : 'border-slate-200 bg-white hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-center justify-between w-full">
                        <span className={`text-[10px] font-black px-1.5 py-0.5 rounded ${
                          isSelected ? 'bg-red-600 text-white' : 'bg-slate-100 text-slate-600'
                        }`}>
                          {sub.code}
                        </span>
                        <span className="text-[11px] text-slate-400 font-medium">
                          {sub.duration_minutes} {t('分钟')} / {sub.total_score} {t('分')}
                        </span>
                      </div>
                      <span className={`font-bold text-xs sm:text-sm mt-2 block ${
                        isSelected ? 'text-red-900' : 'text-slate-800'
                      }`}>
                        {t(sub.name)}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Subject Description Banner */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-700 leading-relaxed flex items-start space-x-3">
                <Lightbulb className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 font-bold block mb-1">
                    {t(activeSubject.name)} {t('考核定位与特点')}：
                  </strong>
                  <p>{t(activeSubject.description)}</p>
                </div>
              </div>

              {/* Weightage Breakdown Grid */}
              <div>
                <h4 className="text-xs font-black uppercase tracking-wider text-slate-500 mb-3 flex items-center space-x-1.5">
                  <BookOpen className="w-4 h-4 text-red-600" />
                  <span>{t('模块分值权重与核心考查要点 (Syllabus Breakdown)')}</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {activeSubject.weightage_analysis.map((sec, idx) => (
                    <div key={idx} className="p-4 rounded-2xl border border-slate-200 bg-white hover:shadow-xs transition space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-slate-900 text-xs sm:text-sm">
                          {t(sec.category)}
                        </span>
                        <span className="px-2 py-0.5 rounded-full bg-red-100 text-red-800 font-black text-xs">
                          {sec.percentage}%
                        </span>
                      </div>
                      {/* Visual progress indicator */}
                      <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                        <div 
                          className="bg-gradient-to-r from-red-600 to-amber-500 h-full rounded-full"
                          style={{ width: `${sec.percentage}%` }}
                        />
                      </div>
                      <p className="text-xs text-slate-600 leading-snug">
                        {t(sec.description)}
                      </p>
                      <div className="pt-2 border-t border-slate-100">
                        <span className="text-[10px] font-bold text-slate-400 block mb-1">{t('高频考点点位：')}</span>
                        <div className="flex flex-wrap gap-1.5">
                          {sec.topics.map((tp, tpIdx) => (
                            <span key={tpIdx} className="text-[10px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md">
                              {t(tp)}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* High-Yield KBAT Heuristics and Problem-Solving Walkthrough */}
              <div>
                <h4 className="text-xs font-black uppercase tracking-wider text-slate-500 mb-3 flex items-center space-x-1.5">
                  <Sparkles className="w-4 h-4 text-amber-500" />
                  <span>{t('高频高思维 (KBAT) 与名校经典压轴题演练')}</span>
                </h4>
                <div className="space-y-3">
                  {activeSubject.high_yield_kbat_points.map((kbat, idx) => {
                    const isExpanded = expandedKbatIdx === idx;
                    return (
                      <div 
                        key={idx} 
                        className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-xs"
                      >
                        <button
                          onClick={() => setExpandedKbatIdx(isExpanded ? null : idx)}
                          className="w-full p-4 flex items-center justify-between text-left hover:bg-slate-50 transition"
                        >
                          <div className="flex items-center space-x-2.5">
                            <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-900 font-bold text-[10px]">
                              {t(kbat.frequency)}
                            </span>
                            <span className="font-bold text-xs sm:text-sm text-slate-900">
                              {t(kbat.title)}
                            </span>
                          </div>
                          {isExpanded ? (
                            <ChevronUp className="w-4 h-4 text-slate-400" />
                          ) : (
                            <ChevronDown className="w-4 h-4 text-slate-400" />
                          )}
                        </button>

                        {isExpanded && (
                          <div className="px-4 pb-4 pt-1 space-y-3 border-t border-slate-100 bg-amber-50/20 text-xs">
                            <div className="p-3 rounded-xl bg-amber-100/60 border border-amber-200 text-amber-900 leading-relaxed">
                              <strong>{t('💡 独家破题技巧与口诀：')}</strong> {t(kbat.tips)}
                            </div>

                            {kbat.sample_question && (
                              <div className="p-3 rounded-xl bg-white border border-slate-200 space-y-2">
                                <span className="font-bold text-slate-800 block text-xs">
                                  {t(kbat.sample_question)}
                                </span>
                                {kbat.sample_answer && (
                                  <div className="p-2.5 rounded-lg bg-emerald-50/80 border border-emerald-200 text-emerald-950 font-medium text-xs leading-relaxed">
                                    <span className="font-bold text-emerald-800 block mb-0.5">{t('标准解法与得分步骤：')}</span>
                                    {t(kbat.sample_answer)}
                                  </div>
                                )}
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Common Pitfalls Warning */}
              <div className="p-4 rounded-2xl bg-red-50/70 border border-red-200 text-xs space-y-2">
                <div className="flex items-center space-x-1.5 font-bold text-red-900">
                  <AlertTriangle className="w-4 h-4 text-red-600 shrink-0" />
                  <span>{t('阅卷教师提醒：历年考生三大高频丢分陷阱')}</span>
                </div>
                <ul className="space-y-1.5 pl-5 text-red-800 list-disc">
                  {activeSubject.common_pitfalls.map((pit, idx) => (
                    <li key={idx} className="leading-snug">
                      {t(pit)}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* TAB 2: SCHOOL EXAM PROFILES & PAST PAPERS ACQUISITION */}
          {activeTab === 'schools' && (
            <div className="space-y-6">
              {/* Search and Filter */}
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={schoolSearchQuery}
                    onChange={(e) => setSchoolSearchQuery(e.target.value)}
                    placeholder={t('搜索独中名称（如：吉隆坡中华、宽柔、坤成、锺灵）...')}
                    className="w-full pl-9 pr-4 py-2.5 rounded-2xl border border-slate-200 bg-white text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-600"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-xs text-slate-500 shrink-0">{t('州属：')}</span>
                  <select
                    value={schoolStateFilter}
                    onChange={(e) => setSchoolStateFilter(e.target.value)}
                    className="text-xs py-2 px-3 rounded-2xl border border-slate-200 bg-white focus:outline-none focus:ring-1 focus:ring-red-600 font-medium"
                  >
                    {schoolStates.map(st => (
                      <option key={st} value={st}>{t(st)}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* School Profiles List */}
              <div className="space-y-4">
                {filteredSchools.map((school) => {
                  const isSelected = selectedSchoolId === school.school_id;
                  return (
                    <div 
                      key={school.school_id}
                      className="rounded-3xl border border-slate-200 bg-white p-5 hover:shadow-md transition space-y-4"
                    >
                      {/* School Header */}
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                        <div className="flex items-center space-x-2.5">
                          <span className="px-2.5 py-1 rounded-lg bg-red-100 text-red-800 text-xs font-bold">
                            {t(school.state)}
                          </span>
                          <h4 className="font-black text-base text-slate-900">
                            {t(school.school_name)}
                          </h4>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-xs text-slate-500">
                            {t('甄选考报名费：')} <strong className="text-slate-900">{school.exam_fee}</strong>
                          </span>
                          {school.past_papers_availability.official_download_url && (
                            <a
                              href={school.past_papers_availability.official_download_url}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center space-x-1 text-xs text-red-700 hover:underline font-semibold"
                            >
                              <span>{t('访问官网')}</span>
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          )}
                        </div>
                      </div>

                      {/* Official Past Papers Acquisition Method */}
                      <div className="p-3.5 rounded-2xl bg-amber-50/70 border border-amber-200/80 text-xs space-y-1.5">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-1.5 font-bold text-amber-900">
                            <BookOpen className="w-4 h-4 text-amber-700" />
                            <span>{t('官方历届试卷 / 样题获取方式：')}</span>
                          </div>
                          <span className="px-2 py-0.5 rounded-md bg-amber-200/60 text-amber-950 font-bold text-[10px]">
                            {t(school.past_papers_availability.status)}
                          </span>
                        </div>
                        <p className="text-slate-700 leading-relaxed">
                          {t(school.past_papers_availability.acquisition_method)}
                        </p>
                        {school.past_papers_availability.price_info && (
                          <div className="text-[11px] font-semibold text-amber-800">
                            • <strong>{t('参考价格')}</strong>：{t(school.past_papers_availability.price_info)}
                          </div>
                        )}
                      </div>

                      {/* 4 Subjects Exam Profile Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                        <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                          <span className="font-bold text-red-900 block mb-1">📐 {t('数学考查重点')}</span>
                          <span className="text-slate-600 leading-relaxed block">{t(school.exam_characteristics.math_focus)}</span>
                        </div>
                        <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                          <span className="font-bold text-slate-900 block mb-1">📖 {t('华文考查重点')}</span>
                          <span className="text-slate-600 leading-relaxed block">{t(school.exam_characteristics.chinese_focus)}</span>
                        </div>
                        <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                          <span className="font-bold text-blue-900 block mb-1">🔤 {t('英文考查重点')}</span>
                          <span className="text-slate-600 leading-relaxed block">{t(school.exam_characteristics.english_focus)}</span>
                        </div>
                        <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                          <span className="font-bold text-emerald-900 block mb-1">🇲🇾 {t('国文考查重点')}</span>
                          <span className="text-slate-600 leading-relaxed block">{t(school.exam_characteristics.bm_focus)}</span>
                        </div>
                      </div>

                      {/* Special Tracks and Prep Advice */}
                      {school.special_tracks_tested && (
                        <div className="text-xs text-purple-900 bg-purple-50 p-2.5 rounded-xl border border-purple-200">
                          <strong>🎓 {t('特殊分班/奖学金选拔考')}：</strong> {t(school.special_tracks_tested)}
                        </div>
                      )}

                      <div className="text-xs text-slate-600 bg-slate-50/80 p-3 rounded-xl border border-slate-200">
                        <strong className="text-slate-900">💡 {t('资深升学备考建议')}：</strong> {t(school.prep_advice)}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* TAB 3: 30-DAY SPRINT TIMELINE & EXAM DAY ESSENTIALS */}
          {activeTab === 'sprint' && (
            <div className="space-y-6">
              {/* Sprint Stages */}
              <div className="space-y-4">
                {EXAM_SPRINT_CHECKLIST.map((phase, idx) => (
                  <div key={idx} className="p-5 rounded-3xl border border-slate-200 bg-white shadow-xs space-y-3">
                    <div className="flex items-center space-x-2">
                      <span className="w-6 h-6 rounded-full bg-red-600 text-white font-black text-xs flex items-center justify-center">
                        {idx + 1}
                      </span>
                      <h4 className="font-black text-slate-900 text-sm sm:text-base">
                        {t(phase.period)}
                      </h4>
                    </div>
                    <div className="space-y-2 pl-8">
                      {phase.tasks.map((task, tIdx) => (
                        <div key={tIdx} className="flex items-start space-x-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{t(task)}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Exam Day Checklist & Rules */}
              <div className="p-5 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 text-white space-y-4 shadow-lg">
                <div className="flex items-center space-x-2">
                  <ShieldCheck className="w-5 h-5 text-amber-400" />
                  <h4 className="font-black text-base">{t('考试当天必备清单与考场纪律')}</h4>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300">
                  <div className="p-3 rounded-xl bg-white/10 space-y-1">
                    <strong className="text-white block font-bold">🪪 {t('必带证件与文凭')}</strong>
                    <p>{t('准考证（若网上报名须提前打印纸本收据/准考卡）、学生身份证 (MyKid/MyKad) 或报生纸复印本。')}</p>
                  </div>
                  <div className="p-3 rounded-xl bg-white/10 space-y-1">
                    <strong className="text-white block font-bold">✏️ {t('文具规范要求')}</strong>
                    <p>{t('2B 铅笔（建议带 2-3 支已削好）、标准软质橡皮擦、尺子、黑/蓝圆珠笔，装入透明文具袋内。严禁涂改液（部分校只允许涂改带或划线）。')}</p>
                  </div>
                  <div className="p-3 rounded-xl bg-white/10 space-y-1">
                    <strong className="text-white block font-bold">👔 {t('着装与仪容')}</strong>
                    <p>{t('必须穿戴整齐的华小学生校服（小学校服校裙/校裤），穿白袜与校鞋，保持发型整齐规范。')}</p>
                  </div>
                  <div className="p-3 rounded-xl bg-white/10 space-y-1">
                    <strong className="text-white block font-bold">📵 {t('考场电子产品规定')}</strong>
                    <p>{t('手机、智能手表等电子设备严禁带入考座，须按考场指示关机并放在指定寄存区，违者视作作弊。')}</p>
                  </div>
                </div>
              </div>

              {/* CTA to UASA Eligibility Checker */}
              {onOpenUASAChecker && (
                <div className="p-5 rounded-3xl bg-emerald-50 border border-emerald-200 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div>
                    <h5 className="font-black text-emerald-900 text-sm">{t('想知道孩子是否可以直接免试保送？')}</h5>
                    <p className="text-xs text-emerald-700 mt-0.5">
                      {t('如果华小 UASA 达到 5 科 TP5/TP6 或全级排名前 5 名，可直接测算 63 所独中保送直录门槛！')}
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      onClose();
                      onOpenUASAChecker();
                    }}
                    className="px-5 py-2.5 rounded-xl bg-emerald-700 text-white font-bold text-xs hover:bg-emerald-800 transition shadow-sm shrink-0 flex items-center space-x-1.5"
                  >
                    <Award className="w-4 h-4 text-amber-300" />
                    <span>{t('立即测算保送直录资格')}</span>
                  </button>
                </div>
              )}
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-slate-100 bg-slate-50 flex items-center justify-between shrink-0">
          <span className="text-xs text-slate-400">
            {t('数据来源：马来西亚董总 (Dong Zong) 独中工委会 & 各校招生处历年公开发布之考试规程')}
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 transition"
          >
            {t('关闭指南')}
          </button>
        </div>

      </div>
    </div>
  );
}
