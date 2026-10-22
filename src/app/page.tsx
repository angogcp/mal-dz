'use client';

import React, { useState, useMemo } from 'react';
import { ALL_SCHOOLS } from '../data/schoolsData';
import { School } from '../types/school';
import { useLanguage } from '../contexts/LanguageContext';
import FitQuizModal from '../components/FitQuizModal';
import ShareComparisonModal from '../components/ShareComparisonModal';
import UASACheckerModal from '../components/UASACheckerModal';
import ExamPrepModal from '../components/ExamPrepModal';
import BudgetCalculatorModal from '../components/BudgetCalculatorModal';
import SchoolImage from '../components/SchoolImage';
import UECGlobalHub from '../components/UECGlobalHub';
import BoardingLifeModal from '../components/BoardingLifeModal';
import UECHallOfFameModal from '../components/UECHallOfFameModal';
import { getSchoolCulture } from '../data/schoolCultureData';
import { generateSchoolICS, generateAllIntakeICS, downloadICS } from '../utils/calendarGenerator';
import { 
  Search, Filter, MapPin, Building2, BedDouble, 
  BookOpen, Calculator, Calendar, ExternalLink, 
  CheckCircle2, X, Plus, ArrowRight, ShieldCheck,
  GraduationCap, HelpCircle, Phone, Globe, DollarSign,
  Sparkles, Share2, Layers, Check, Award, AlertCircle, Clock,
  Landmark, Trophy, Users, Music
} from 'lucide-react';

export default function HomePage() {
  // Filters state
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedState, setSelectedState] = useState('全部');
  const [selectedDorm, setSelectedDorm] = useState('全部');
  const [selectedTrack, setSelectedTrack] = useState('全部');
  const [selectedTag, setSelectedTag] = useState('');

  // Comparison state (up to 4 schools)
  const [compareList, setCompareList] = useState<School[]>([]);

  // Modal detail state
  const [activeModalSchool, setActiveModalSchool] = useState<School | null>(null);

  // Quiz Modal state
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  // Share Modal state
  const [isShareOpen, setIsShareOpen] = useState(false);

  // UASA Checker Modal state
  const [isUASAOpen, setIsUASAOpen] = useState(false);

  // Exam Prep & Past Papers Modal state
  const [isExamPrepOpen, setIsExamPrepOpen] = useState(false);
  const [examPrepSchoolId, setExamPrepSchoolId] = useState<string | null>(null);

  // Budget Calculator Modal state
  const [isBudgetOpen, setIsBudgetOpen] = useState(false);
  const [budgetSelectedSchool, setBudgetSelectedSchool] = useState<School | null>(null);

  // Boarding Life & Outstation Parents Modal state
  const [isBoardingOpen, setIsBoardingOpen] = useState(false);
  const [boardingSchoolId, setBoardingSchoolId] = useState<string | undefined>(undefined);

  // UEC Hall of Fame Modal state
  const [isHallOfFameOpen, setIsHallOfFameOpen] = useState(false);

  // Timeline table filter state
  const [timelineStateFilter, setTimelineStateFilter] = useState('全部');

  // Calculator state
  const [calcSchoolId, setCalcSchoolId] = useState<string>('foonyew-jb');
  const [calcIsBoarder, setCalcIsBoarder] = useState<boolean>(false);
  const [calcMonthlyTransport, setCalcMonthlyTransport] = useState<number>(200);

  const { t, lang } = useLanguage();

  const handleDownloadSchoolCalendar = (school: School) => {
    const ics = generateSchoolICS(school, lang);
    if (!ics) {
      alert(t('该校暂无明确的考试日期数据'));
      return;
    }
    downloadICS(`${school.name_zh}_2026招考日程`, ics);
  };

  const handleDownloadAllCalendar = () => {
    const ics = generateAllIntakeICS(displaySchools);
    downloadICS('2026全马独中初一入学甄选考日程包', ics);
  };

  const states = useMemo(() => [
    t('全部'), t('柔佛'), t('吉隆坡'), t('雪兰莪'), t('森美兰'), t('马六甲'), 
    t('霹雳'), t('槟城'), t('吉打'), t('吉兰丹'), t('彭亨'), t('沙巴'), t('砂拉越')
  ], [lang]);

  // Dynamically convert schools dataset based on active language (zh-Hans vs zh-Hant)
  const displaySchools: School[] = useMemo(() => {
    if (lang === 'zh-Hans') return ALL_SCHOOLS;
    return ALL_SCHOOLS.map(sch => ({
      ...sch,
      name_zh: t(sch.name_zh),
      abbreviation: t(sch.abbreviation),
      location: {
        ...sch.location,
        state: t(sch.location.state),
        city: t(sch.location.city),
        address: t(sch.location.address),
      },
      academics: {
        ...sch.academics,
        track_type: t(sch.academics.track_type),
        academic_highlights: sch.academics.academic_highlights ? t(sch.academics.academic_highlights) : undefined,
      },
      dormitory_and_boarding: {
        ...sch.dormitory_and_boarding,
        dorm_gender: sch.dormitory_and_boarding.dorm_gender ? t(sch.dormitory_and_boarding.dorm_gender) : undefined,
        air_conditioned: sch.dormitory_and_boarding.air_conditioned ? t(sch.dormitory_and_boarding.air_conditioned) : undefined,
        study_hall_rules: sch.dormitory_and_boarding.study_hall_rules ? t(sch.dormitory_and_boarding.study_hall_rules) : undefined,
      },
      costs_and_fees: {
        ...sch.costs_and_fees,
        scholarship_info: sch.costs_and_fees.scholarship_info ? t(sch.costs_and_fees.scholarship_info) : undefined,
      },
      admission_intake: sch.admission_intake ? {
        ...sch.admission_intake,
        admission_mode: sch.admission_intake.admission_mode ? t(sch.admission_intake.admission_mode) : undefined,
        exam_format: sch.admission_intake.exam_format ? t(sch.admission_intake.exam_format) : undefined,
        exam_venue: sch.admission_intake.exam_venue ? t(sch.admission_intake.exam_venue) : undefined,
        scholarship_quota: sch.admission_intake.scholarship_quota ? t(sch.admission_intake.scholarship_quota) : undefined,
        direct_admission_criteria: sch.admission_intake.direct_admission_criteria ? sch.admission_intake.direct_admission_criteria.map(c => t(c)) : undefined,
      } : undefined,
      fit_tags: sch.fit_tags.map(tag => t(tag)),
    }));
  }, [lang]);

  // State school count map
  const stateCounts = useMemo(() => {
    const allKey = t('全部');
    const counts: Record<string, number> = { [allKey]: displaySchools.length };
    displaySchools.forEach(s => {
      counts[s.location.state] = (counts[s.location.state] || 0) + 1;
    });
    return counts;
  }, [displaySchools, lang]);

  // Filter logic for main directory
  const filteredSchools = useMemo(() => {
    const allKey = t('全部');
    return displaySchools.filter((school) => {
      const matchesSearch = 
        school.name_zh.toLowerCase().includes(searchTerm.toLowerCase()) ||
        school.name_en.toLowerCase().includes(searchTerm.toLowerCase()) ||
        school.location.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
        school.abbreviation.toLowerCase().includes(searchTerm.toLowerCase()) ||
        school.fit_tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchesState = selectedState === '全部' || selectedState === allKey || school.location.state === selectedState;

      const matchesDorm = 
        selectedDorm === '全部' || selectedDorm === allKey ||
        ((selectedDorm === '有宿舍' || selectedDorm === t('有宿舍')) && school.dormitory_and_boarding.has_dormitory) ||
        ((selectedDorm === '走读校' || selectedDorm === t('走读校')) && !school.dormitory_and_boarding.has_dormitory);

      const matchesTrack = 
        selectedTrack === '全部' || selectedTrack === allKey ||
        ((selectedTrack === '单轨' || selectedTrack === t('单轨')) && (school.academics.track_type.includes('单轨') || school.academics.track_type.includes('單軌'))) ||
        ((selectedTrack === '双轨' || selectedTrack === t('双轨')) && (school.academics.track_type.includes('双轨') || school.academics.track_type.includes('雙軌'))) ||
        ((selectedTrack === '三轨' || selectedTrack === t('三轨')) && (school.academics.track_type.includes('三轨') || school.academics.track_type.includes('三軌')));

      const matchesTag = !selectedTag || school.fit_tags.includes(selectedTag);

      return matchesSearch && matchesState && matchesDorm && matchesTrack && matchesTag;
    });
  }, [displaySchools, searchTerm, selectedState, selectedDorm, selectedTrack, selectedTag, lang]);

  // Filtered schools for timeline section
  const timelineSchools = useMemo(() => {
    const allKey = t('全部');
    return displaySchools.filter(s => {
      const matchState = timelineStateFilter === '全部' || timelineStateFilter === allKey || s.location.state === timelineStateFilter;
      return matchState && s.admission_intake;
    });
  }, [displaySchools, timelineStateFilter, lang]);

  // Toggle comparison
  const toggleCompare = (school: School) => {
    if (compareList.some(s => s.school_id === school.school_id)) {
      setCompareList(compareList.filter(s => s.school_id !== school.school_id));
    } else {
      if (compareList.length >= 4) {
        alert(t('对比器最多同时支持比较 4 所学校。请先移除一所后再添加。'));
        return;
      }
      setCompareList([...compareList, school]);
    }
  };

  // Active compare list synced with language
  const activeCompareList = useMemo(() => {
    return compareList.map(sch => displaySchools.find(s => s.school_id === sch.school_id) || sch);
  }, [compareList, displaySchools]);

  // Calculator selected school
  const calcSchool = useMemo(() => {
    return displaySchools.find(s => s.school_id === calcSchoolId) || displaySchools[0];
  }, [calcSchoolId, displaySchools]);

  // Active modal school synced with language
  const modalSchool = useMemo(() => {
    if (!activeModalSchool) return null;
    return displaySchools.find(s => s.school_id === activeModalSchool.school_id) || activeModalSchool;
  }, [activeModalSchool, displaySchools]);

  // Total cost estimate
  const calcResults = useMemo(() => {
    const baseJunior = calcSchool.costs_and_fees.tuition_junior_yearly || 4000;
    const baseSenior = calcSchool.costs_and_fees.tuition_senior_yearly || (baseJunior * 1.15);
    const dormAnnual = (calcSchool.dormitory_and_boarding.dorm_fee_monthly || 400) * 11;
    const transportAnnual = calcMonthlyTransport * 11;

    const yearlyCostJunior = baseJunior + (calcIsBoarder ? dormAnnual : transportAnnual) + 800;
    const yearlyCostSenior = baseSenior + (calcIsBoarder ? dormAnnual : transportAnnual) + 900;

    const total6Years = (yearlyCostJunior * 3) + (yearlyCostSenior * 3);

    return {
      yearlyJunior: Math.round(yearlyCostJunior),
      yearlySenior: Math.round(yearlyCostSenior),
      total6Years: Math.round(total6Years)
    };
  }, [calcSchool, calcIsBoarder, calcMonthlyTransport]);

  return (
    <div className="space-y-16 pb-24 relative">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-amber-50 via-white to-slate-50 pt-16 pb-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-amber-100 text-amber-900 text-xs sm:text-sm font-semibold mb-6 border border-amber-300">
            <ShieldCheck className="w-4 h-4 text-amber-700" />
            <span>拒绝粗暴排名 · 倡导因材施教 · 赋能华文教育</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight sm:leading-none">
            马来西亚全国 <span className="text-red-700">63所华文独中</span><br className="hidden sm:inline" /> 择校与升学情报平台
          </h1>

          <p className="mt-6 text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            告别分散繁杂的简章与社群传闻。独中通为家长与学生提供全马独中统一结构化档案、多校横向对比、外州寄宿生活指南、首年真实总开支测算与 UEC 统考全球升学路径。
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => setIsUASAOpen(true)}
              className="w-full sm:w-auto px-5 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-700 text-white font-bold text-sm shadow-md hover:shadow-lg transition transform hover:-translate-y-0.5 flex items-center justify-center space-x-2"
            >
              <Award className="w-4 h-4 text-amber-300" />
              <span>{t('UASA 成绩免试保送自测')}</span>
              <span className="px-1.5 py-0.5 rounded bg-emerald-800/60 text-[10px] font-bold">HOT</span>
            </button>
            <button
              onClick={() => setIsExamPrepOpen(true)}
              className="w-full sm:w-auto px-5 py-3.5 rounded-2xl bg-gradient-to-r from-red-600 to-rose-700 text-white font-bold text-sm shadow-md hover:shadow-lg transition transform hover:-translate-y-0.5 flex items-center justify-center space-x-2"
            >
              <BookOpen className="w-4 h-4 text-amber-300" />
              <span>{t('入学考真题与备考全指南')}</span>
              <span className="px-1.5 py-0.5 rounded bg-red-800/60 text-[10px] font-bold">NEW</span>
            </button>
            <button
              onClick={() => {
                setBoardingSchoolId(undefined);
                setIsBoardingOpen(true);
              }}
              className="w-full sm:w-auto px-5 py-3.5 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-bold text-sm shadow-md hover:shadow-lg transition transform hover:-translate-y-0.5 flex items-center justify-center space-x-2"
            >
              <BedDouble className="w-4 h-4 text-amber-300" />
              <span>{t('寄宿生活与外州专线')}</span>
              <span className="px-1.5 py-0.5 rounded bg-blue-800/60 text-[10px] font-bold">安心</span>
            </button>
            <button
              onClick={() => setIsHallOfFameOpen(true)}
              className="w-full sm:w-auto px-5 py-3.5 rounded-2xl bg-gradient-to-r from-amber-600 to-orange-700 text-white font-bold text-sm shadow-md hover:shadow-lg transition transform hover:-translate-y-0.5 flex items-center justify-center space-x-2"
            >
              <Trophy className="w-4 h-4 text-amber-300" />
              <span>{t('UEC 顶尖名校录取榜')}</span>
              <span className="px-1.5 py-0.5 rounded bg-amber-800/60 text-[10px] font-bold">殿堂</span>
            </button>
            <button
              onClick={() => setIsBudgetOpen(true)}
              className="w-full sm:w-auto px-5 py-3.5 rounded-2xl bg-white text-slate-800 border border-slate-300 font-bold text-sm hover:bg-slate-50 transition shadow-sm flex items-center justify-center space-x-2"
            >
              <Calculator className="w-4 h-4 text-emerald-600" />
              <span>{t('学费生活费自选测算')}</span>
            </button>
            <button
              onClick={() => setIsQuizOpen(true)}
              className="w-full sm:w-auto px-5 py-3.5 rounded-2xl bg-white text-slate-800 border border-slate-300 font-bold text-sm hover:bg-slate-50 transition shadow-sm flex items-center justify-center space-x-2"
            >
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span>{t('5题测评选校')}</span>
            </button>
            <a
              href="#timeline"
              className="w-full sm:w-auto px-5 py-3.5 rounded-2xl bg-white text-slate-800 border border-slate-300 font-bold text-sm hover:bg-slate-50 transition shadow-sm flex items-center justify-center space-x-2"
            >
              <Clock className="w-4 h-4 text-red-700" />
              <span>{t('2026 招生日历与保送')}</span>
            </a>
            <a
              href="#uec-guide"
              className="w-full sm:w-auto px-5 py-3.5 rounded-2xl bg-white text-slate-800 border border-slate-300 font-bold text-sm hover:bg-slate-50 transition shadow-sm flex items-center justify-center space-x-2"
            >
              <GraduationCap className="w-4 h-4 text-blue-700" />
              <span>{t('UEC 全球名校升学')}</span>
            </a>
          </div>

          {/* Quick Stat Cards */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-200">
              <div className="text-2xl sm:text-3xl font-black text-red-700">63 所</div>
              <div className="text-xs sm:text-sm font-medium text-slate-500 mt-1">全国独中全收录 (含分校/关中)</div>
            </div>
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-200">
              <div className="text-2xl sm:text-3xl font-black text-amber-600">12 州属</div>
              <div className="text-xs sm:text-sm font-medium text-slate-500 mt-1">西马与东马全域检索</div>
            </div>
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-200">
              <div className="text-2xl sm:text-3xl font-black text-emerald-700">&gt;85%</div>
              <div className="text-xs sm:text-sm font-medium text-slate-500 mt-1">学校设有规范学生宿舍</div>
            </div>
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-200">
              <div className="text-2xl sm:text-3xl font-black text-sky-700">TCO</div>
              <div className="text-xs sm:text-sm font-medium text-slate-500 mt-1">6年真实总成本透明测算</div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SCHOOL DIRECTORY & FILTER SECTION */}
      <section id="directory" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 flex items-center space-x-2">
              <Building2 className="w-8 h-8 text-red-700" />
              <span>全国独中资料库</span>
            </h2>
            <p className="text-slate-500 text-sm mt-1">
              当前展示 <span className="font-semibold text-slate-900">{filteredSchools.length}</span> 所符合条件的华文独中
            </p>
          </div>

          {/* Quick Search */}
          <div className="relative w-full md:w-80">
            <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="搜索校名、城市、特色标签..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-11 pr-4 py-2.5 rounded-xl border border-slate-300 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600 text-sm"
            />
            {searchTerm && (
              <button 
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* State Distribution Visualizer */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-4 mb-8">
          <div>
            <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
              按州属快速定位 (附各州独中数量)：
            </label>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {states.map((st) => (
                <button
                  key={st}
                  onClick={() => setSelectedState(st)}
                  className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition flex items-center space-x-1.5 ${
                    selectedState === st
                      ? 'bg-red-700 text-white shadow-sm'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  <span>{st}</span>
                  <span className={`text-[11px] px-1.5 py-0.2 rounded-full ${
                    selectedState === st ? 'bg-red-900/50 text-white' : 'bg-slate-200 text-slate-600'
                  }`}>
                    {stateCounts[st] || 0}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-2 border-t border-slate-100">
            {/* Dorm Filter */}
            <div>
              <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">住宿条件：</label>
              <div className="flex space-x-2">
                {['全部', '有宿舍', '走读校'].map((d) => (
                  <button
                    key={d}
                    onClick={() => setSelectedDorm(d)}
                    className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-medium border text-center transition ${
                      selectedDorm === d
                        ? 'border-amber-600 bg-amber-50 text-amber-900 font-semibold'
                        : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>

            {/* Track Filter */}
            <div>
              <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">教学体制：</label>
              <div className="flex space-x-2">
                {['全部', '单轨', '双轨', '三轨'].map((t) => (
                  <button
                    key={t}
                    onClick={() => setSelectedTrack(t)}
                    className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-medium border text-center transition ${
                      selectedTrack === t
                        ? 'border-red-600 bg-red-50 text-red-900 font-semibold'
                        : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Reset Filters */}
            <div className="flex items-end">
              <button
                onClick={() => {
                  setSelectedState('全部');
                  setSelectedDorm('全部');
                  setSelectedTrack('全部');
                  setSelectedTag('');
                  setSearchTerm('');
                }}
                className="w-full py-1.5 px-4 rounded-lg text-xs font-medium bg-slate-100 text-slate-600 hover:bg-slate-200 transition"
              >
                重置所有筛选条件
              </button>
            </div>
          </div>
        </div>

        {/* School Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSchools.map((school) => {
            const isCompared = compareList.some(s => s.school_id === school.school_id);
            const culture = getSchoolCulture(school.school_id);
            return (
              <div
                key={school.school_id}
                className={`bg-white rounded-3xl border transition duration-200 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-lg ${
                  isCompared ? 'border-red-500 ring-2 ring-red-100' : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                {/* School Campus Photo Banner */}
                <div className="relative cursor-pointer" onClick={() => setActiveModalSchool(school)}>
                  <SchoolImage
                    src={culture.hero_image}
                    alt={school.name_zh}
                    caption={culture.caption}
                    motto={culture.school_motto}
                    foundingYear={school.founding_year}
                    state={t(school.location.state)}
                    aspectRatio="video"
                    className="rounded-t-3xl rounded-b-none"
                  />
                  {school.verification_status.is_verified && (
                    <span title={t('官方档案已核实')} className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-full bg-emerald-600/90 text-white text-[10px] font-bold backdrop-blur-xs flex items-center space-x-1 shadow-xs">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>{t('官方认证')}</span>
                    </span>
                  )}
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <div className="flex items-center space-x-2">
                          <h3 
                            onClick={() => setActiveModalSchool(school)}
                            className="font-black text-lg text-slate-900 hover:text-red-700 transition cursor-pointer"
                          >
                            {school.name_zh}
                          </h3>
                        </div>
                        <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">{school.name_en}</p>
                      </div>
                      <span className="shrink-0 px-2 py-0.5 text-xs font-bold rounded-lg bg-amber-50 text-amber-900 border border-amber-200">
                        {culture.school_motto}
                      </span>
                    </div>

                    {/* Badges / Highlights */}
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      <span className="px-2 py-0.5 text-xs font-medium rounded-md bg-blue-50 text-blue-700 border border-blue-100">
                        {t(school.academics.track_type.split(' ')[0])}
                      </span>
                      <span className={`px-2 py-0.5 text-xs font-medium rounded-md border ${
                        school.dormitory_and_boarding.has_dormitory
                          ? 'bg-emerald-50 text-emerald-800 border-emerald-100'
                          : 'bg-slate-50 text-slate-600 border-slate-200'
                      }`}>
                        {school.dormitory_and_boarding.has_dormitory ? t('设有宿舍') : t('全走读')}
                      </span>
                      {culture.flagship_features.slice(0, 2).map((feat, idx) => (
                        <span key={idx} className="px-2 py-0.5 text-xs text-slate-700 bg-slate-100 rounded-md">
                          {t(feat)}
                        </span>
                      ))}
                    </div>

                    {/* School Ethos & Highlights Description */}
                    <p className="mt-2.5 text-xs text-slate-600 leading-relaxed line-clamp-2">
                      {t(culture.ethos_and_spirit)}
                    </p>
                  </div>

                  {/* Cost Summary Box */}
                  <div className="mt-4 p-3 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-500">走读首年初估：</span>
                      <span className="font-semibold text-slate-900">
                        RM {school.costs_and_fees.first_year_est_day_student.toLocaleString()}
                      </span>
                    </div>
                    {school.costs_and_fees.first_year_est_boarder && (
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-slate-500">住宿生首年初估：</span>
                        <span className="font-semibold text-amber-700">
                          RM {school.costs_and_fees.first_year_est_boarder.toLocaleString()}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Admission Quick Info Pill */}
                  {school.admission_intake && (
                    <div className="mt-3 p-2 rounded-lg bg-red-50/70 border border-red-100 text-[11px] text-red-900 flex items-center justify-between">
                      <span className="truncate">
                        考试日：<strong>{school.admission_intake.entrance_exam_date || '9-10月'}</strong>
                      </span>
                      {school.admission_intake.direct_admission_criteria && (
                        <span className="font-bold text-emerald-700 bg-white px-1.5 py-0.5 rounded border border-emerald-200 shrink-0 ml-1">
                          可保送免试
                        </span>
                      )}
                    </div>
                  )}

                  {/* Tags */}
                  <div className="mt-3 flex flex-wrap gap-1">
                    {school.fit_tags.slice(0, 3).map((tag) => (
                      <span 
                        key={tag}
                        onClick={() => setSelectedTag(tag === selectedTag ? '' : tag)}
                        className={`text-[11px] px-2 py-0.5 rounded cursor-pointer transition ${
                          selectedTag === tag 
                            ? 'bg-amber-600 text-white' 
                            : 'bg-amber-50 text-amber-800 hover:bg-amber-100'
                        }`}
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="p-4 bg-slate-50/70 border-t border-slate-100 flex items-center justify-between gap-2">
                  <button
                    onClick={() => toggleCompare(school)}
                    className={`text-xs font-semibold px-3 py-2 rounded-xl transition flex items-center space-x-1.5 ${
                      isCompared
                        ? 'bg-red-700 text-white'
                        : 'bg-white text-slate-700 border border-slate-300 hover:bg-slate-100'
                    }`}
                  >
                    <span>{isCompared ? '已加入对比' : '+ 加入对比'}</span>
                  </button>

                  <button
                    onClick={() => setActiveModalSchool(school)}
                    className="text-xs font-semibold px-3.5 py-2 rounded-xl bg-slate-900 text-white hover:bg-slate-800 transition"
                  >
                    详细档案
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. MULTI-SCHOOL COMPARATOR SECTION */}
      <section id="comparator" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20">
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 flex items-center space-x-2">
                <Filter className="w-8 h-8 text-amber-600" />
                <span>多校横向对比器 (已选 {compareList.length}/4)</span>
              </h2>
              <p className="text-slate-500 text-sm mt-1">
                选择 2–4 所心仪学校，客观横向对比保送条件、招考日程、学费总投入与寄宿管理。
              </p>
            </div>

            {compareList.length > 0 && (
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => setIsShareOpen(true)}
                  className="px-4 py-2 rounded-xl bg-red-50 text-red-700 font-semibold text-xs border border-red-200 hover:bg-red-100 transition flex items-center space-x-1.5"
                >
                  <Share2 className="w-4 h-4" />
                  <span>导出 / 分享对比简报</span>
                </button>
                <button
                  onClick={() => setCompareList([])}
                  className="text-xs font-medium text-slate-400 hover:text-red-700 underline"
                >
                  清空
                </button>
              </div>
            )}
          </div>

          {compareList.length === 0 ? (
            <div className="p-12 text-center border-2 border-dashed border-slate-200 rounded-2xl">
              <Building2 className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <p className="text-slate-600 font-medium">暂未选择对比学校</p>
              <p className="text-slate-400 text-xs mt-1">
                请在上方学校库中点击“+ 加入对比”，即可在此处一览各校保送、招考与费用差异。
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="p-3 bg-slate-50 font-semibold text-slate-600 w-36">比较项目</th>
                    {activeCompareList.map((sch) => (
                      <th key={sch.school_id} className="p-3 min-w-[220px] bg-white border-l border-slate-100">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-slate-900 text-base">{sch.name_zh}</span>
                          <button
                            onClick={() => toggleCompare(sch)}
                            className="text-slate-400 hover:text-red-600 p-1 rounded"
                            title="移除"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                        <span className="text-xs text-slate-500">{sch.location.state} · {sch.location.city}</span>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {/* DIRECT ADMISSION ROW */}
                  <tr className="bg-emerald-50/30">
                    <td className="p-3 bg-emerald-50/70 font-bold text-emerald-900 text-xs flex items-center space-x-1">
                      <Award className="w-3.5 h-3.5 text-emerald-700 inline" />
                      <span>保送与免试直录条件</span>
                    </td>
                    {activeCompareList.map((sch) => (
                      <td key={sch.school_id} className="p-3 border-l border-slate-100 text-xs">
                        {sch.admission_intake?.direct_admission_criteria && sch.admission_intake.direct_admission_criteria.length > 0 ? (
                          <div className="space-y-1">
                            {sch.admission_intake.direct_admission_criteria.map((c, i) => (
                              <div key={i} className="flex items-start space-x-1.5 text-slate-700">
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                                <span className="leading-tight">{c}</span>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <span className="text-slate-400">常规全员参加入学甄拔考试</span>
                        )}
                      </td>
                    ))}
                  </tr>

                  {/* EXAM DATES ROW */}
                  <tr className="bg-red-50/20">
                    <td className="p-3 bg-red-50/50 font-bold text-red-900 text-xs">
                      招考关键日程
                    </td>
                    {activeCompareList.map((sch) => (
                      <td key={sch.school_id} className="p-3 border-l border-slate-100 text-xs">
                        {sch.admission_intake ? (
                          <div className="space-y-1">
                            <div>报名截止：<strong>{sch.admission_intake.registration_deadline || '9月'}</strong></div>
                            <div className="text-red-700 font-bold">考试日期：{sch.admission_intake.entrance_exam_date || '待公布'}</div>
                            <div className="text-slate-500">放榜日期：{sch.admission_intake.result_release_date || '考后公布'}</div>
                            <div className="text-slate-600">注册确认：{sch.admission_intake.registration_payment_deadline || '放榜后10日'}</div>
                          </div>
                        ) : (
                          <span className="text-slate-400">详询校方招生处</span>
                        )}
                      </td>
                    ))}
                  </tr>

                  <tr>
                    <td className="p-3 bg-slate-50 font-medium text-slate-500 text-xs">学制轨道</td>
                    {activeCompareList.map((sch) => (
                      <td key={sch.school_id} className="p-3 border-l border-slate-100 text-xs font-semibold text-slate-800">
                        {sch.academics.track_type}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-3 bg-slate-50 font-medium text-slate-500 text-xs">高中分流科系</td>
                    {activeCompareList.map((sch) => (
                      <td key={sch.school_id} className="p-3 border-l border-slate-100 text-xs text-slate-600">
                        {sch.academics.senior_tracks.join('、')}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-3 bg-slate-50 font-medium text-slate-500 text-xs">初中走读首年预估</td>
                    {activeCompareList.map((sch) => (
                      <td key={sch.school_id} className="p-3 border-l border-slate-100 text-xs font-bold text-slate-900">
                        RM {sch.costs_and_fees.first_year_est_day_student.toLocaleString()}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-3 bg-slate-50 font-medium text-slate-500 text-xs">宿舍与住宿首年</td>
                    {activeCompareList.map((sch) => (
                      <td key={sch.school_id} className="p-3 border-l border-slate-100 text-xs">
                        {sch.dormitory_and_boarding.has_dormitory ? (
                          <span className="font-bold text-amber-700">
                            RM {sch.costs_and_fees.first_year_est_boarder?.toLocaleString() || '详询校方'}
                            <span className="block font-normal text-slate-500 text-[11px] mt-0.5">
                              {sch.dormitory_and_boarding.air_conditioned || '备有宿舍'} ({sch.dormitory_and_boarding.dorm_gender})
                            </span>
                          </span>
                        ) : (
                          <span className="text-slate-400">无宿舍 (纯走读)</span>
                        )}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-3 bg-slate-50 font-medium text-slate-500 text-xs">晚自习与手机管理</td>
                    {activeCompareList.map((sch) => (
                      <td key={sch.school_id} className="p-3 border-l border-slate-100 text-xs text-slate-600">
                        {sch.dormitory_and_boarding.study_hall_rules || '遵照各校宿管条例统一执行'}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-3 bg-slate-50 font-medium text-slate-500 text-xs">特色适合度标签</td>
                    {activeCompareList.map((sch) => (
                      <td key={sch.school_id} className="p-3 border-l border-slate-100 text-xs">
                        <div className="flex flex-wrap gap-1">
                          {sch.fit_tags.map(t => (
                            <span key={t} className="px-1.5 py-0.5 bg-amber-50 text-amber-900 rounded text-[10px]">
                              {t}
                            </span>
                          ))}
                        </div>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
      </section>

      {/* 4. TCO FEE CALCULATOR SECTION */}
      <section id="calculator" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20">
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-6 sm:p-10 text-white shadow-xl">
          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold mb-3">
              <Calculator className="w-4 h-4" />
              <span>独中6年教育总投入 (TCO) 测算</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              学杂费与生活成本测算器
            </h2>
            <p className="text-slate-300 text-sm mt-2">
              不仅看表面月学费，综合考量注册费、杂费、校车交通或寄宿伙食，让家庭教育规划心中有数。
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Input Controls */}
            <div className="lg:col-span-6 space-y-5 bg-white/5 p-6 rounded-2xl border border-white/10">
              {/* Select School */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  选择目标独中：
                </label>
                <select
                  value={calcSchoolId}
                  onChange={(e) => setCalcSchoolId(e.target.value)}
                  className="w-full py-2.5 px-3.5 rounded-xl bg-slate-800 border border-slate-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                >
                  {displaySchools.map(s => (
                    <option key={s.school_id} value={s.school_id}>
                      [{s.location.state}] {s.name_zh}
                    </option>
                  ))}
                </select>
              </div>

              {/* Boarder vs Day Student */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  就读模式：
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setCalcIsBoarder(false)}
                    className={`py-2 px-4 rounded-xl text-xs font-semibold transition border ${
                      !calcIsBoarder
                        ? 'bg-amber-600 border-amber-500 text-white shadow-md'
                        : 'bg-slate-800 border-slate-700 text-slate-400 hover:text-white'
                    }`}
                  >
                    走读生 (每日往返)
                  </button>
                  <button
                    type="button"
                    disabled={!calcSchool.dormitory_and_boarding.has_dormitory}
                    onClick={() => setCalcIsBoarder(true)}
                    className={`py-2 px-4 rounded-xl text-xs font-semibold transition border ${
                      calcIsBoarder
                        ? 'bg-amber-600 border-amber-500 text-white shadow-md'
                        : !calcSchool.dormitory_and_boarding.has_dormitory
                        ? 'opacity-40 cursor-not-allowed bg-slate-800 border-slate-700 text-slate-500'
                        : 'bg-slate-800 border-slate-700 text-slate-400 hover:text-white'
                    }`}
                  >
                    寄宿生 (外州/住宿)
                    {!calcSchool.dormitory_and_boarding.has_dormitory && ' (该校无宿舍)'}
                  </button>
                </div>
              </div>

              {/* Monthly Transport / Allowance */}
              {!calcIsBoarder && (
                <div>
                  <div className="flex justify-between text-xs text-slate-300 mb-1.5">
                    <span>预估月校车/交通费 (令吉)：</span>
                    <span className="font-bold text-amber-400">RM {calcMonthlyTransport}</span>
                  </div>
                  <input
                    type="range"
                    min="50"
                    max="600"
                    step="25"
                    value={calcMonthlyTransport}
                    onChange={(e) => setCalcMonthlyTransport(Number(e.target.value))}
                    className="w-full accent-amber-500 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                    <span>RM 50 (自接送)</span>
                    <span>RM 600 (远途校车)</span>
                  </div>
                </div>
              )}
            </div>

            {/* Output Display */}
            <div className="lg:col-span-6 bg-gradient-to-tr from-amber-900/40 via-red-950/30 to-slate-800/80 p-6 rounded-2xl border border-amber-500/30">
              <div className="text-xs font-semibold uppercase tracking-wider text-amber-400 mb-4">
                【{calcSchool.name_zh}】{calcIsBoarder ? '寄宿生' : '走读生'} 投入预估
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-slate-900/60 p-4 rounded-xl border border-white/5">
                  <div className="text-xs text-slate-400">初中阶段年平均开销</div>
                  <div className="text-xl sm:text-2xl font-black text-white mt-1">
                    RM {calcResults.yearlyJunior.toLocaleString()}
                  </div>
                  <div className="text-[10px] text-slate-400 mt-0.5">含学费+杂费+{calcIsBoarder ? '宿舍伙食' : '校车交通'}</div>
                </div>

                <div className="bg-slate-900/60 p-4 rounded-xl border border-white/5">
                  <div className="text-xs text-slate-400">高中阶段年平均开销</div>
                  <div className="text-xl sm:text-2xl font-black text-white mt-1">
                    RM {calcResults.yearlySenior.toLocaleString()}
                  </div>
                  <div className="text-[10px] text-slate-400 mt-0.5">高中学费略有上调</div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div>
                  <div className="text-xs text-slate-400">独中 6 年累计总投入估算 (TCO)</div>
                  <div className="text-3xl font-black text-amber-400">
                    RM {calcResults.total6Years.toLocaleString()}
                  </div>
                </div>
                <div className="text-right sm:text-right">
                  <span className="inline-block text-[11px] px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-300 font-medium border border-emerald-500/30">
                    约为国际学校的 1/4 - 1/6
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. 2026 ADMISSION TIMELINE & POLICY MATRIX */}
      <section id="timeline" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 flex items-center justify-center space-x-2">
            <Calendar className="w-8 h-8 text-red-700" />
            <span>2026 全马独中招生日历与保送条件总汇</span>
          </h2>
          <p className="text-slate-500 text-sm mt-2">
            独中招考季通常从每年 6 月持续到 11 月。各校【免试保送】与【入学考日期】如下，谨防考试撞期！
          </p>
        </div>

        {/* 4 Stage Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden">
            <div className="w-1.5 h-full bg-blue-600 absolute left-0 top-0"></div>
            <div className="text-xs font-bold text-blue-600 tracking-wider">阶段一：6月 - 8月</div>
            <h4 className="font-bold text-slate-900 text-base mt-1">简章发布与保送申请</h4>
            <p className="text-xs text-slate-500 mt-2 leading-relaxed">
              各校官网开放报名，提交华小五年级/六年级在校成绩单申请【免试保送直录】。名校陆续举办开放日。
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden">
            <div className="w-1.5 h-full bg-amber-500 absolute left-0 top-0"></div>
            <div className="text-xs font-bold text-amber-600 tracking-wider">阶段二：9月 - 10月</div>
            <h4 className="font-bold text-slate-900 text-base mt-1">入学资格甄拔考试</h4>
            <p className="text-xs text-slate-500 mt-2 leading-relaxed">
              全马入学试最高峰！四科联考（华、国、英、数）。考生按成绩竞争普通班录取或前数十名免学杂费奖学金。
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden">
            <div className="w-1.5 h-full bg-emerald-600 absolute left-0 top-0"></div>
            <div className="text-xs font-bold text-emerald-600 tracking-wider">阶段三：10月 - 11月</div>
            <h4 className="font-bold text-slate-900 text-base mt-1">放榜与注册缴费锁定</h4>
            <p className="text-xs text-slate-500 mt-2 leading-relaxed">
              公布正取与备取名单。家长须在截止日前缴费确认学籍，外州寄宿生同步提交宿舍申请与体检报告。
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden">
            <div className="w-1.5 h-full bg-purple-600 absolute left-0 top-0"></div>
            <div className="text-xs font-bold text-purple-600 tracking-wider">阶段四：12月 - 次年1月</div>
            <h4 className="font-bold text-slate-900 text-base mt-1">迎新入宿与新学年</h4>
            <p className="text-xs text-slate-500 mt-2 leading-relaxed">
              购置校服、领新课本、参加入宿说明会及迎新营。新学年于每年 1 月正式开学（与全马学年同步）。
            </p>
          </div>
        </div>

        {/* Detailed Intake & Direct Admission Table */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-red-700" />
                <h3 className="text-xl font-bold text-slate-900">
                  全马 63 所独中招考日程与保送免试条件对照表
                </h3>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold">
                  已收录 {timelineSchools.length} 所
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-1">
                涵盖全国 12 州属全部 63 所独中；支持按州筛选快速核对报名截止、入学考日（红色高亮）及保送免试录取门槛。
              </p>
            </div>

            {/* Controls: UASA test, State filter & Calendar export */}
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => setIsUASAOpen(true)}
                className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-semibold hover:bg-emerald-100 transition shadow-xs"
              >
                <Award className="w-3.5 h-3.5 text-emerald-600" />
                <span>{t('UASA保送资格测算')}</span>
              </button>

              <button
                onClick={() => setIsExamPrepOpen(true)}
                className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-red-50 text-red-800 border border-red-200 text-xs font-semibold hover:bg-red-100 transition shadow-xs"
              >
                <BookOpen className="w-3.5 h-3.5 text-red-600" />
                <span>{t('入学考真题与大纲')}</span>
              </button>

              <button
                onClick={handleDownloadAllCalendar}
                className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 transition shadow-xs"
                title={t('一键导出全马独中 2026 入学考试日历到手机 (.ics)')}
              >
                <Calendar className="w-3.5 h-3.5 text-amber-400" />
                <span>{t('导出考程到日历 (.ics)')}</span>
              </button>

              <div className="flex items-center space-x-1.5 pl-1">
                <span className="text-xs text-slate-500">{t('州属：')}</span>
                <select
                  value={timelineStateFilter}
                  onChange={(e) => setTimelineStateFilter(e.target.value)}
                  className="text-xs py-1.5 px-3 rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-1 focus:ring-red-600 font-medium"
                >
                  {states.map(st => (
                    <option key={st} value={st}>{t(st)}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left text-xs">
              <thead>
                <tr className="bg-slate-100 border-b border-slate-200">
                  <th className="p-3 font-bold text-slate-700 w-44">学校名称 (州属)</th>
                  <th className="p-3 font-bold text-slate-700 w-28">报名截止日</th>
                  <th className="p-3 font-bold text-red-700 w-32">入学考试日</th>
                  <th className="p-3 font-bold text-emerald-800">保送与免试直录条件</th>
                  <th className="p-3 font-bold text-slate-700 w-28">放榜/注册确认</th>
                  <th className="p-3 font-bold text-slate-700 w-24 text-center">操作</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {timelineSchools.map(sch => (
                  <tr key={sch.school_id} className="hover:bg-slate-50/70 transition">
                    <td className="p-3">
                      <div className="font-bold text-slate-900 text-sm">{sch.name_zh}</div>
                      <div className="text-[11px] text-slate-500">{sch.location.state} · {sch.location.city}</div>
                    </td>
                    <td className="p-3 text-slate-700 font-medium">
                      {sch.admission_intake?.registration_deadline || '9月'}
                    </td>
                    <td className="p-3">
                      <span className="inline-block px-2 py-1 rounded bg-red-100 text-red-800 font-bold">
                        {sch.admission_intake?.entrance_exam_date || '9-10月'}
                      </span>
                    </td>
                    <td className="p-3">
                      {sch.admission_intake?.direct_admission_criteria && sch.admission_intake.direct_admission_criteria.length > 0 ? (
                        <div className="space-y-1">
                          {sch.admission_intake.direct_admission_criteria.slice(0, 2).map((c, i) => (
                            <div key={i} className="flex items-start space-x-1 text-slate-700 text-[11px]">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                              <span className="line-clamp-1">{c}</span>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <span className="text-slate-400">统一参加入学甄拔试录取</span>
                      )}
                    </td>
                    <td className="p-3 text-slate-600">
                      <div>放榜：{sch.admission_intake?.result_release_date || '考后'}</div>
                      <div className="text-[10px] text-slate-400">截止：{sch.admission_intake?.registration_payment_deadline || '放榜后10天'}</div>
                    </td>
                    <td className="p-3 text-center">
                      <button
                        onClick={() => setActiveModalSchool(sch)}
                        className="px-2.5 py-1.5 rounded-lg bg-slate-900 text-white font-medium text-[11px] hover:bg-slate-800 transition"
                      >
                        详情
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 6. UEC & HIGHER-ED INTELLIGENCE */}
      <section id="uec-guide" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20">
        <UECGlobalHub />
      </section>

      {/* FLOATING COMPARISON BAR (When schools are selected) */}
      {compareList.length > 0 && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 bg-slate-900/95 backdrop-blur-md text-white px-5 py-3.5 rounded-2xl shadow-2xl border border-slate-700 flex items-center space-x-4 animate-bounce-short">
          <div className="flex items-center space-x-2">
            <Layers className="w-5 h-5 text-amber-400" />
            <span className="text-xs sm:text-sm font-semibold">
              已选 <span className="text-amber-400 font-bold">{compareList.length}</span>/4 所学校
            </span>
          </div>
          <div className="h-4 w-px bg-slate-700"></div>
          <a
            href="#comparator"
            className="px-3.5 py-1.5 rounded-xl bg-red-700 hover:bg-red-800 text-xs font-bold transition flex items-center space-x-1"
          >
            <span>立即对比</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
          <button
            onClick={() => setCompareList([])}
            className="text-xs text-slate-400 hover:text-white"
          >
            清空
          </button>
        </div>
      )}

      {/* MODAL: FIT QUIZ */}
      <FitQuizModal
        isOpen={isQuizOpen}
        onClose={() => setIsQuizOpen(false)}
        onSelectSchoolForDetail={(s) => setActiveModalSchool(s)}
        onAddToCompare={(s) => toggleCompare(s)}
      />

      {/* MODAL: SHARE COMPARISON */}
      <ShareComparisonModal
        isOpen={isShareOpen}
        onClose={() => setIsShareOpen(false)}
        schools={activeCompareList}
      />

      {/* MODAL: UASA CHECKER */}
      <UASACheckerModal
        isOpen={isUASAOpen}
        onClose={() => setIsUASAOpen(false)}
        schools={displaySchools}
        onSelectSchool={(s) => setActiveModalSchool(s)}
        onAddToCompare={(s) => toggleCompare(s)}
      />

      {/* MODAL: EXAM PREP & PAST PAPERS */}
      <ExamPrepModal
        isOpen={isExamPrepOpen}
        onClose={() => setIsExamPrepOpen(false)}
        initialSchoolId={examPrepSchoolId}
        onSelectSchoolDetail={(sName) => {
          const found = displaySchools.find(s => s.name_zh.includes(sName) || sName.includes(s.name_zh));
          if (found) setActiveModalSchool(found);
        }}
        onOpenUASAChecker={() => setIsUASAOpen(true)}
      />

      {/* MODAL: BUDGET CALCULATOR */}
      <BudgetCalculatorModal
        isOpen={isBudgetOpen}
        onClose={() => setIsBudgetOpen(false)}
        schools={displaySchools}
        initialSchool={budgetSelectedSchool}
        onSelectSchoolDetail={(s) => setActiveModalSchool(s)}
      />

      {/* MODAL: BOARDING LIFE GUIDE */}
      <BoardingLifeModal
        isOpen={isBoardingOpen}
        onClose={() => setIsBoardingOpen(false)}
        schools={displaySchools}
        initialSchoolId={boardingSchoolId}
        onSelectSchoolDetail={(s) => setActiveModalSchool(s)}
      />

      {/* MODAL: UEC HALL OF FAME */}
      <UECHallOfFameModal
        isOpen={isHallOfFameOpen}
        onClose={() => setIsHallOfFameOpen(false)}
        schools={displaySchools}
        onSelectSchoolDetail={(s) => setActiveModalSchool(s)}
      />

      {/* MODAL: SCHOOL DETAIL VIEW */}
      {modalSchool && (() => {
        const culture = getSchoolCulture(modalSchool.school_id);
        return (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
            <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[92vh] overflow-y-auto p-5 sm:p-8 shadow-2xl relative">
              <button
                onClick={() => setActiveModalSchool(null)}
                className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 p-2 rounded-full hover:bg-slate-100 z-20"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Campus Photo Hero Banner */}
              <div className="mb-4">
                <SchoolImage
                  src={culture.hero_image}
                  alt={modalSchool.name_zh}
                  caption={culture.caption}
                  motto={culture.school_motto}
                  foundingYear={modalSchool.founding_year}
                  state={t(modalSchool.location.state)}
                  aspectRatio="banner"
                />
              </div>

              {/* Title & Badges */}
              <div className="pr-8">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-md bg-red-100 text-red-800 text-xs font-bold">
                    {t(modalSchool.location.state)}
                  </span>
                  <span className="text-xs text-slate-400">{t('创办于')} {modalSchool.founding_year} {t('年')}</span>
                  <span className="px-2.5 py-0.5 rounded-md bg-amber-100 text-amber-900 text-xs font-bold border border-amber-200">
                    {t('校训：')}{culture.school_motto}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">{modalSchool.name_zh}</h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">{modalSchool.name_en}</p>
              </div>

              <div className="mt-6 space-y-6 text-sm text-slate-700">

                {/* 🌟 1. 校风传承与办学精神 (NEW ETHOS & SPIRIT SECTION) */}
                <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-amber-50/80 via-white to-orange-50/40 border border-amber-200/80 space-y-3 shadow-xs">
                  <div className="flex items-center space-x-2 font-bold text-amber-950 text-xs sm:text-sm">
                    <Sparkles className="w-4 h-4 text-amber-600" />
                    <span>{t('校风与精神内核 (School Ethos & Spirit)')}</span>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    {t(culture.ethos_and_spirit)}
                  </p>
                  
                  {/* Flagship Feature Badges */}
                  <div className="pt-2 border-t border-amber-100">
                    <span className="text-[10px] font-bold text-amber-800 block mb-1.5">{t('办学核心特色与优势：')}</span>
                    <div className="flex flex-wrap gap-1.5">
                      {culture.flagship_features.map((feat, idx) => (
                        <span key={idx} className="px-2.5 py-1 rounded-lg bg-white border border-amber-200 text-amber-950 text-xs font-medium shadow-xs">
                          ✦ {t(feat)}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* 🌟 2. 王牌社团、标志性设施与杰出校友 (NEW CHARACTERISTICS & CLUBS) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs">
                  {/* Flagship Clubs */}
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                    <div className="flex items-center space-x-1.5 font-bold text-slate-900">
                      <Music className="w-4 h-4 text-red-600" />
                      <span>{t('王牌社团与特色联课 (Signature CCAs)')}</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {culture.flagship_clubs.map((club, idx) => (
                        <span key={idx} className="px-2 py-0.5 rounded-md bg-white border border-slate-200 text-slate-700 text-[11px]">
                          {t(club)}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Campus Facilities */}
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                    <div className="flex items-center space-x-1.5 font-bold text-slate-900">
                      <Landmark className="w-4 h-4 text-blue-600" />
                      <span>{t('标志性校园设施 (Campus Facilities)')}</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {culture.campus_facilities.map((fac, idx) => (
                        <span key={idx} className="px-2 py-0.5 rounded-md bg-white border border-slate-200 text-slate-700 text-[11px]">
                          🏛️ {t(fac)}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Notable Alumni */}
                  {culture.notable_alumni && culture.notable_alumni.length > 0 && (
                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5 sm:col-span-2">
                      <div className="flex items-center space-x-1.5 font-bold text-slate-900">
                        <Trophy className="w-4 h-4 text-amber-500" />
                        <span>{t('知名校友与社会影响力 (Notable Alumni)')}</span>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {culture.notable_alumni.map(a => t(a)).join(' · ')}
                      </p>
                    </div>
                  )}

                  {/* Matriculation Highlights */}
                  {culture.matriculation_highlights && (
                    <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200 space-y-2 sm:col-span-2">
                      <div className="flex items-center space-x-1.5 font-bold text-emerald-900">
                        <GraduationCap className="w-4 h-4 text-emerald-700" />
                        <span>{t('升学去向与学术优势 (Global Matriculation)')}</span>
                      </div>
                      <p className="text-xs text-emerald-800 leading-relaxed">
                        {t(culture.matriculation_highlights)}
                      </p>
                      <button
                        onClick={() => setIsHallOfFameOpen(true)}
                        className="w-full mt-1 py-2 px-3 rounded-xl bg-white hover:bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold transition flex items-center justify-center space-x-1.5 shadow-2xs"
                      >
                        <Trophy className="w-3.5 h-3.5 text-amber-600" />
                        <span>{t('查阅历年 UEC 全国顶尖考生世界名校录取案例库 (Hall of Fame)')}</span>
                      </button>
                    </div>
                  )}
                </div>
              {/* 🌟 2026 初一招生与保送直录全指南 (NEW HIGH-VALUE SECTION) */}
              <div className="p-4 rounded-2xl bg-gradient-to-br from-red-50/80 via-white to-amber-50/50 border border-red-200/80 space-y-4 shadow-sm">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-red-100 pb-2.5">
                  <div className="flex items-center space-x-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse"></span>
                    <h5 className="font-bold text-slate-900 text-sm">{t('2026 初一新生招考与保送直录全指南')}</h5>
                  </div>
                  <div className="flex flex-wrap items-center gap-1.5">
                    <button
                      onClick={() => {
                        setExamPrepSchoolId(modalSchool.school_id);
                        setIsExamPrepOpen(true);
                      }}
                      className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-lg bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200 text-[11px] font-semibold transition shadow-xs"
                      title={t('查看该校考题与大纲')}
                    >
                      <BookOpen className="w-3 h-3 text-amber-600" />
                      <span>{t('真题与大纲')}</span>
                    </button>
                    <button
                      onClick={() => handleDownloadSchoolCalendar(modalSchool)}
                      className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-lg bg-red-700 hover:bg-red-800 text-white text-[11px] font-semibold transition shadow-xs"
                      title={t('导出该校日程到手机日历 (.ics)')}
                    >
                      <Calendar className="w-3 h-3 text-amber-300" />
                      <span>{t('添加到日历 (.ics)')}</span>
                    </button>
                    <span className="text-[11px] font-semibold text-red-700 bg-red-100/70 px-2 py-0.5 rounded-md">
                      {modalSchool.admission_intake?.admission_mode || '入学考试遴选'}
                    </span>
                  </div>
                </div>

                {/* Direct Admission / Guaranteed Criteria */}
                <div>
                  <div className="flex items-center space-x-1.5 text-xs font-bold text-emerald-800 mb-2">
                    <Award className="w-4 h-4 text-emerald-600" />
                    <span>{t('免试保送 / 绿色直录条件 (Direct Admission)：')}</span>
                  </div>
                  {modalSchool.admission_intake?.direct_admission_criteria && modalSchool.admission_intake.direct_admission_criteria.length > 0 ? (
                    <div className="space-y-1.5">
                      {modalSchool.admission_intake.direct_admission_criteria.map((crit, idx) => (
                        <div key={idx} className="flex items-start space-x-2 text-xs text-slate-700 bg-white/90 p-2.5 rounded-xl border border-slate-200">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="leading-snug">{t(crit)}</span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-xs text-slate-500 bg-white/60 p-2.5 rounded-xl border border-slate-200">
                      {t('该校主要依据华小五、六年级在校学业成绩评估或统一入学甄拔考试成绩择优录取，详见招生章程。')}
                    </p>
                  )}
                </div>

                {/* Timeline Milestones Grid */}
                <div>
                  <div className="text-xs font-bold text-slate-700 mb-2">{t('关键招考日程节点：')}</div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs">
                    <div className="bg-white p-2.5 rounded-xl border border-slate-200">
                      <span className="text-[10px] text-slate-400 block">{t('报名起止时间')}</span>
                      <span className="font-semibold text-slate-900 block mt-0.5">
                        {modalSchool.admission_intake?.registration_start || '6月'} ~ {modalSchool.admission_intake?.registration_deadline || '9月'}
                      </span>
                    </div>
                    <div className="bg-white p-2.5 rounded-xl border border-red-300 bg-red-50/30">
                      <span className="text-[10px] text-red-600 font-bold block">{t('新生入学甄拔考试日')}</span>
                      <span className="font-black text-red-700 block mt-0.5">
                        {modalSchool.admission_intake?.entrance_exam_date || '9月 - 10月'}
                      </span>
                    </div>
                    <div className="bg-white p-2.5 rounded-xl border border-slate-200">
                      <span className="text-[10px] text-slate-400 block">{t('录取放榜日')}</span>
                      <span className="font-semibold text-slate-900 block mt-0.5">
                        {modalSchool.admission_intake?.result_release_date || '考后 1-2 周'}
                      </span>
                    </div>
                    <div className="bg-white p-2.5 rounded-xl border border-slate-200">
                      <span className="text-[10px] text-slate-400 block">{t('注册缴费确认截止')}</span>
                      <span className="font-semibold text-slate-900 block mt-0.5">
                        {modalSchool.admission_intake?.registration_payment_deadline || '放榜后10日内'}
                      </span>
                    </div>
                    <div className="bg-white p-2.5 rounded-xl border border-amber-300 bg-amber-50/30 sm:col-span-2">
                      <span className="text-[10px] text-amber-800 font-bold block">{t('外州生宿舍申请截止')}</span>
                      <span className="font-semibold text-slate-900 block mt-0.5">
                        {modalSchool.admission_intake?.dorm_application_deadline || (modalSchool.dormitory_and_boarding.has_dormitory ? t('注册缴费时同步提交申请') : t('该校无宿舍 (全走读)'))}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Exam details & Scholarships */}
                <div className="space-y-1.5 text-xs text-slate-600 bg-white/70 p-3 rounded-xl border border-slate-200">
                  {modalSchool.admission_intake?.exam_subjects && (
                    <div>• <strong>{t('考试科目')}</strong>：{modalSchool.admission_intake.exam_subjects.map(s => t(s)).join('、')} {t('(按华小六年级大纲命题)')}</div>
                  )}
                  {modalSchool.admission_intake?.exam_format && (
                    <div>• <strong>{t('考务形式')}</strong>：{t(modalSchool.admission_intake.exam_format)}</div>
                  )}
                  {modalSchool.admission_intake?.scholarship_quota && (
                    <div className="text-amber-800 font-semibold">• <strong>{t('优异新生奖学金')}</strong>：{t(modalSchool.admission_intake.scholarship_quota)}</div>
                  )}
                </div>
              </div>

              {/* Highlights */}
              <div>
                <h5 className="font-bold text-slate-900 mb-1 text-xs uppercase tracking-wider text-slate-500">{t('办学理念与特色')}</h5>
                <p className="bg-slate-50 p-3.5 rounded-xl text-slate-600 text-xs leading-relaxed">
                  {t(modalSchool.academics.academic_highlights || '坚持母语教学与三语并重，弘扬中华传统文化，注重学术成绩与全人品格培养。')}
                </p>
              </div>

              {/* Academics & Fees */}
              <div className="space-y-2">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="text-xs text-slate-400 block">{t('教学体制')}</span>
                    <span className="font-semibold text-slate-900 text-xs mt-1 block">
                      {t(modalSchool.academics.track_type)}
                    </span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="text-xs text-slate-400 block">{t('初中走读首年费用')}</span>
                    <span className="font-bold text-slate-900 text-xs mt-1 block">
                      RM {modalSchool.costs_and_fees.first_year_est_day_student.toLocaleString()}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => {
                    setBudgetSelectedSchool(modalSchool);
                    setIsBudgetOpen(true);
                  }}
                  className="w-full py-2.5 px-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-900 text-xs font-bold transition flex items-center justify-center space-x-1.5 shadow-xs"
                >
                  <Calculator className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{t('自选测算该校 1年/3年/6年 完整教育预算')}</span>
                </button>
              </div>

              {/* Dormitory Details */}
              <div>
                <h5 className="font-bold text-slate-900 mb-2 text-xs uppercase tracking-wider text-slate-500">{t('住宿生活与管理')}</h5>
                <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200/60 space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-slate-600">{t('是否有宿舍：')}</span>
                    <span className="font-bold text-slate-900">
                      {modalSchool.dormitory_and_boarding.has_dormitory ? t('设有学生宿舍') : t('无宿舍 (纯走读校)')}
                    </span>
                  </div>
                  {modalSchool.dormitory_and_boarding.has_dormitory && (
                    <>
                      <div className="flex justify-between">
                        <span className="text-slate-600">{t('冷气配置：')}</span>
                        <span className="font-medium text-slate-900">{t(modalSchool.dormitory_and_boarding.air_conditioned || '全冷气/部分冷气')}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">{t('管理规则：')}</span>
                        <span className="font-medium text-slate-900">{t(modalSchool.dormitory_and_boarding.study_hall_rules || '统一晚自习')}</span>
                      </div>
                      <button
                        onClick={() => {
                          setBoardingSchoolId(modalSchool.school_id);
                          setIsBoardingOpen(true);
                        }}
                        className="w-full mt-2 py-2 px-3 rounded-xl bg-blue-50 hover:bg-blue-100 border border-blue-200 text-blue-900 text-xs font-bold transition flex items-center justify-center space-x-1.5 shadow-2xs"
                      >
                        <BedDouble className="w-3.5 h-3.5 text-blue-600" />
                        <span>{t('查看独中寄宿全景指南 · 24h作息 · 手机管控 · 外州校车专线')}</span>
                      </button>
                    </>
                  )}
                </div>
              </div>

              {/* Contact info */}
              <div>
                <h5 className="font-bold text-slate-900 mb-2 text-xs uppercase tracking-wider text-slate-500">{t('联系与官网')}</h5>
                <div className="space-y-1.5 text-xs text-slate-600">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-slate-400" />
                    <span>{modalSchool.location.address}</span>
                  </div>
                  {modalSchool.contact.phone && (
                    <div className="flex items-center space-x-2">
                      <Phone className="w-4 h-4 text-slate-400" />
                      <span>{modalSchool.contact.phone}</span>
                    </div>
                  )}
                  {modalSchool.contact.website_url && (
                    <div className="flex items-center space-x-2">
                      <Globe className="w-4 h-4 text-slate-400" />
                      <a 
                        href={modalSchool.contact.website_url} 
                        target="_blank" 
                        rel="noreferrer"
                        className="text-red-700 hover:underline flex items-center space-x-1"
                      >
                        <span>{t('访问学校官网')}</span>
                        <ExternalLink className="w-3 h-3 inline" />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => setActiveModalSchool(null)}
                className="px-5 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 transition"
              >
                {t('关闭档案')}
              </button>
            </div>
          </div>
        </div>
        );
      })()}
    </div>
  );
}
