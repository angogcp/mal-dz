'use client';

import React, { useState, useMemo } from 'react';
import { ALL_SCHOOLS } from '../data/schoolsData';
import { School } from '../types/school';
import FitQuizModal from '../components/FitQuizModal';
import ShareComparisonModal from '../components/ShareComparisonModal';
import { 
  Search, Filter, MapPin, Building2, BedDouble, 
  BookOpen, Calculator, Calendar, ExternalLink, 
  CheckCircle2, X, Plus, ArrowRight, ShieldCheck,
  GraduationCap, HelpCircle, Phone, Globe, DollarSign,
  Sparkles, Share2, Layers, Check
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

  // Calculator state
  const [calcSchoolId, setCalcSchoolId] = useState<string>('foonyew-jb');
  const [calcIsBoarder, setCalcIsBoarder] = useState<boolean>(false);
  const [calcMonthlyTransport, setCalcMonthlyTransport] = useState<number>(200);

  const states = [
    '全部', '柔佛', '吉隆坡', '雪兰莪', '森美兰', '马六甲', 
    '霹雳', '槟城', '吉打', '吉兰丹', '彭亨', '沙巴', '砂拉越'
  ];

  // State school count map
  const stateCounts = useMemo(() => {
    const counts: Record<string, number> = { '全部': ALL_SCHOOLS.length };
    ALL_SCHOOLS.forEach(s => {
      counts[s.location.state] = (counts[s.location.state] || 0) + 1;
    });
    return counts;
  }, []);

  // Filter logic
  const filteredSchools = useMemo(() => {
    return ALL_SCHOOLS.filter((school) => {
      // Keyword search
      const matchesSearch = 
        school.name_zh.toLowerCase().includes(searchTerm.toLowerCase()) ||
        school.name_en.toLowerCase().includes(searchTerm.toLowerCase()) ||
        school.location.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
        school.abbreviation.toLowerCase().includes(searchTerm.toLowerCase()) ||
        school.fit_tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));

      // State filter
      const matchesState = selectedState === '全部' || school.location.state === selectedState;

      // Dorm filter
      const matchesDorm = 
        selectedDorm === '全部' ||
        (selectedDorm === '有宿舍' && school.dormitory_and_boarding.has_dormitory) ||
        (selectedDorm === '走读校' && !school.dormitory_and_boarding.has_dormitory);

      // Track filter
      const matchesTrack = 
        selectedTrack === '全部' ||
        (selectedTrack === '单轨' && school.academics.track_type.includes('单轨')) ||
        (selectedTrack === '双轨' && school.academics.track_type.includes('双轨')) ||
        (selectedTrack === '三轨' && school.academics.track_type.includes('三轨'));

      // Tag filter
      const matchesTag = !selectedTag || school.fit_tags.includes(selectedTag);

      return matchesSearch && matchesState && matchesDorm && matchesTrack && matchesTag;
    });
  }, [searchTerm, selectedState, selectedDorm, selectedTrack, selectedTag]);

  // Toggle comparison
  const toggleCompare = (school: School) => {
    if (compareList.some(s => s.school_id === school.school_id)) {
      setCompareList(compareList.filter(s => s.school_id !== school.school_id));
    } else {
      if (compareList.length >= 4) {
        alert('对比器最多同时支持比较 4 所学校。请先移除一所后再添加。');
        return;
      }
      setCompareList([...compareList, school]);
    }
  };

  // Calculator selected school
  const calcSchool = useMemo(() => {
    return ALL_SCHOOLS.find(s => s.school_id === calcSchoolId) || ALL_SCHOOLS[0];
  }, [calcSchoolId]);

  // Total cost estimate
  const calcResults = useMemo(() => {
    const baseJunior = calcSchool.costs_and_fees.tuition_junior_yearly || 4000;
    const baseSenior = calcSchool.costs_and_fees.tuition_senior_yearly || (baseJunior * 1.15);
    const dormAnnual = (calcSchool.dormitory_and_boarding.dorm_fee_monthly || 400) * 11;
    const transportAnnual = calcMonthlyTransport * 11;

    const yearlyCostJunior = baseJunior + (calcIsBoarder ? dormAnnual : transportAnnual) + 800; // 800 misc
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
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <button
              onClick={() => setIsQuizOpen(true)}
              className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-gradient-to-r from-amber-600 to-red-600 text-white font-bold text-sm shadow-lg hover:shadow-xl transition transform hover:-translate-y-0.5 flex items-center justify-center space-x-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>智能匹配：5题测评最适合哪所独中</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="#directory"
              className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-white text-slate-800 border border-slate-300 font-bold text-sm hover:bg-slate-50 transition shadow-sm"
            >
              浏览 63 所独中全名单
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

        {/* State Distribution Visualizer (Pills with Counts) */}
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
            return (
              <div
                key={school.school_id}
                className={`bg-white rounded-2xl border transition duration-200 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-md ${
                  isCompared ? 'border-red-500 ring-2 ring-red-100' : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="p-5">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <div className="flex items-center space-x-2">
                        <h3 className="font-bold text-lg text-slate-900">{school.name_zh}</h3>
                        {school.verification_status.is_verified && (
                          <span title="官方档案已核实" className="text-emerald-600">
                            <CheckCircle2 className="w-4 h-4 inline" />
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">{school.name_en}</p>
                    </div>
                    <span className="shrink-0 px-2.5 py-1 text-xs font-bold rounded-lg bg-slate-100 text-slate-700">
                      {school.location.state}
                    </span>
                  </div>

                  {/* Badges / Highlights */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    <span className="px-2 py-0.5 text-xs font-medium rounded-md bg-blue-50 text-blue-700 border border-blue-100">
                      {school.academics.track_type.split(' ')[0]}
                    </span>
                    <span className={`px-2 py-0.5 text-xs font-medium rounded-md border ${
                      school.dormitory_and_boarding.has_dormitory
                        ? 'bg-emerald-50 text-emerald-800 border-emerald-100'
                        : 'bg-slate-50 text-slate-600 border-slate-200'
                    }`}>
                      {school.dormitory_and_boarding.has_dormitory ? '设有宿舍' : '全走读'}
                    </span>
                    <span className="px-2 py-0.5 text-xs text-slate-600 bg-slate-100 rounded-md">
                      创校 {school.founding_year}
                    </span>
                  </div>

                  {/* Highlights Description */}
                  <p className="mt-3 text-xs text-slate-600 leading-relaxed line-clamp-2">
                    {school.academics.academic_highlights || `坐落于${school.location.city}，坚持华文独中全人办学，学风端正。`}
                  </p>

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
                选择 2–4 所心仪学校，客观横向对比学费总投入、住宿规则与升学分流。
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
                请在上方学校库中点击“+ 加入对比”，即可在此处一览各校详细差异。
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="p-3 bg-slate-50 font-semibold text-slate-600 w-36">比较项目</th>
                    {compareList.map((sch) => (
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
                  <tr>
                    <td className="p-3 bg-slate-50 font-medium text-slate-500 text-xs">学制轨道</td>
                    {compareList.map((sch) => (
                      <td key={sch.school_id} className="p-3 border-l border-slate-100 text-xs font-semibold text-slate-800">
                        {sch.academics.track_type}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-3 bg-slate-50 font-medium text-slate-500 text-xs">高中分流科系</td>
                    {compareList.map((sch) => (
                      <td key={sch.school_id} className="p-3 border-l border-slate-100 text-xs text-slate-600">
                        {sch.academics.senior_tracks.join('、')}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-3 bg-slate-50 font-medium text-slate-500 text-xs">初中走读首年预估</td>
                    {compareList.map((sch) => (
                      <td key={sch.school_id} className="p-3 border-l border-slate-100 text-xs font-bold text-slate-900">
                        RM {sch.costs_and_fees.first_year_est_day_student.toLocaleString()}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-3 bg-slate-50 font-medium text-slate-500 text-xs">宿舍与住宿首年</td>
                    {compareList.map((sch) => (
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
                    {compareList.map((sch) => (
                      <td key={sch.school_id} className="p-3 border-l border-slate-100 text-xs text-slate-600">
                        {sch.dormitory_and_boarding.study_hall_rules || '遵照各校宿管条例统一执行'}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-3 bg-slate-50 font-medium text-slate-500 text-xs">特色适合度标签</td>
                    {compareList.map((sch) => (
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
                  {ALL_SCHOOLS.map(s => (
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

      {/* 5. 2026 ADMISSION TIMELINE */}
      <section id="timeline" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 flex items-center justify-center space-x-2">
            <Calendar className="w-8 h-8 text-red-700" />
            <span>2026 全马独中招生日历总表</span>
          </h2>
          <p className="text-slate-500 text-sm mt-2">
            独中招考季通常从每年 6 月持续到 11 月，提前锁定报名与考试节点，避免错过心仪学校。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden">
            <div className="w-1.5 h-full bg-blue-600 absolute left-0 top-0"></div>
            <div className="text-xs font-bold text-blue-600 tracking-wider">阶段一：6月 - 8月</div>
            <h4 className="font-bold text-slate-900 text-base mt-1">简章发布与线上报名</h4>
            <p className="text-xs text-slate-500 mt-2 leading-relaxed">
              各独中陆续发布初一新生简章，开放官网报名，名校（宽柔、隆中华、坤成、日新）启动报名并举办开放日。
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden">
            <div className="w-1.5 h-full bg-amber-500 absolute left-0 top-0"></div>
            <div className="text-xs font-bold text-amber-600 tracking-wider">阶段二：9月 - 10月</div>
            <h4 className="font-bold text-slate-900 text-base mt-1">新生入学资格考试</h4>
            <p className="text-xs text-slate-500 mt-2 leading-relaxed">
              全马入学试最高峰！四科联考（华、国、英、数）。考生凭成绩单获得普通班、特辅班录取或免除学费奖学金。
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden">
            <div className="w-1.5 h-full bg-emerald-600 absolute left-0 top-0"></div>
            <div className="text-xs font-bold text-emerald-600 tracking-wider">阶段三：10月 - 11月</div>
            <h4 className="font-bold text-slate-900 text-base mt-1">放榜与注册缴费</h4>
            <p className="text-xs text-slate-500 mt-2 leading-relaxed">
              公布录取名单与候补名单。家长须在指定期限内完成注册并缴付新生学杂费，外州生提交宿舍申请。
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden">
            <div className="w-1.5 h-full bg-purple-600 absolute left-0 top-0"></div>
            <div className="text-xs font-bold text-purple-600 tracking-wider">阶段四：12月 - 次年1月</div>
            <h4 className="font-bold text-slate-900 text-base mt-1">新生迎新与入舍入住</h4>
            <p className="text-xs text-slate-500 mt-2 leading-relaxed">
              购买校服、领课本、参加入宿说明会及迎新营。新学年通常于每年 1 月正式开学（与全国学年同步）。
            </p>
          </div>
        </div>
      </section>

      {/* 6. UEC & HIGHER-ED INTELLIGENCE */}
      <section id="uec-guide" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20">
        <div className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-sm">
          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-red-100 text-red-900 text-xs font-semibold mb-3">
              <GraduationCap className="w-4 h-4" />
              <span>UEC 统考全球升学枢纽</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              读独中，未来能升入哪些国内外名牌大学？
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              华文独中统考（UEC）受全球数百所顶尖大学认可，具有学术深厚、直接衔接大学一年级本科的国际认可优势。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100">
              <h4 className="font-bold text-slate-900 flex items-center space-x-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-600"></span>
                <span>中国大陆与台湾地区</span>
              </h4>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                <strong>中国大陆</strong>：清华、北大、浙大、复旦、上海交大等 985/双一流大学对 UEC 成绩免高考直接面试录取，常设高额奖学金。<br />
                <strong>台湾地区</strong>：海外联招会传统主要去向，台大、清大、交大、成大免预科直录本科大一。
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100">
              <h4 className="font-bold text-slate-900 flex items-center space-x-2">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span>
                <span>新加坡、英澳美加</span>
              </h4>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                <strong>新加坡</strong>：国大 (NUS)、南大 (NTU) 认可高中统考成绩直接申请大一；五所理工学院接受初三/高二成绩。<br />
                <strong>英澳美加</strong>：澳洲八大名校（墨大、悉尼大）、英国罗素集团多数大学认可 UEC 相当于 A-Level，可直录本科。
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100">
              <h4 className="font-bold text-slate-900 flex items-center space-x-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-600"></span>
                <span>马来西亚本地私立名校</span>
              </h4>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                全马私立大专 100% 承认 UEC。拉曼大学 (UTAR)、双威大学 (Sunway)、泰莱大学 (Taylor&apos;s)、厦门大学马来西亚分校等，提供学费全免或半免奖学金，5科合格即可直接修读大一本科。
              </p>
            </div>
          </div>
        </div>
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
        schools={compareList}
      />

      {/* MODAL: SCHOOL DETAIL VIEW */}
      {activeModalSchool && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative">
            <button
              onClick={() => setActiveModalSchool(null)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 p-2 rounded-full hover:bg-slate-100"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="pr-8">
              <div className="flex items-center space-x-2">
                <span className="px-2.5 py-0.5 rounded-md bg-red-100 text-red-800 text-xs font-bold">
                  {activeModalSchool.location.state}
                </span>
                <span className="text-xs text-slate-400">创办于 {activeModalSchool.founding_year} 年</span>
              </div>
              <h3 className="text-2xl font-black text-slate-900 mt-1">{activeModalSchool.name_zh}</h3>
              <p className="text-xs text-slate-500 mt-0.5">{activeModalSchool.name_en}</p>
            </div>

            <div className="mt-6 space-y-6 text-sm text-slate-700">
              {/* Highlights */}
              <div>
                <h5 className="font-bold text-slate-900 mb-1 text-xs uppercase tracking-wider text-slate-500">办学理念与特色</h5>
                <p className="bg-slate-50 p-3.5 rounded-xl text-slate-600 text-xs leading-relaxed">
                  {activeModalSchool.academics.academic_highlights || '坚持母语教学与三语并重，弘扬中华传统文化，注重学术成绩与全人品格培养。'}
                </p>
              </div>

              {/* Academics & Fees */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="text-xs text-slate-400 block">教学体制</span>
                  <span className="font-semibold text-slate-900 text-xs mt-1 block">
                    {activeModalSchool.academics.track_type}
                  </span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="text-xs text-slate-400 block">初中走读首年费用</span>
                  <span className="font-bold text-slate-900 text-xs mt-1 block">
                    RM {activeModalSchool.costs_and_fees.first_year_est_day_student.toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Dormitory Details */}
              <div>
                <h5 className="font-bold text-slate-900 mb-2 text-xs uppercase tracking-wider text-slate-500">住宿生活与管理</h5>
                <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200/60 space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-slate-600">是否有宿舍：</span>
                    <span className="font-bold text-slate-900">
                      {activeModalSchool.dormitory_and_boarding.has_dormitory ? '设有学生宿舍' : '无宿舍 (纯走读校)'}
                    </span>
                  </div>
                  {activeModalSchool.dormitory_and_boarding.has_dormitory && (
                    <>
                      <div className="flex justify-between">
                        <span className="text-slate-600">冷气配置：</span>
                        <span className="font-medium text-slate-900">{activeModalSchool.dormitory_and_boarding.air_conditioned || '全冷气/部分冷气'}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">管理规则：</span>
                        <span className="font-medium text-slate-900">{activeModalSchool.dormitory_and_boarding.study_hall_rules || '统一晚自习'}</span>
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Contact info */}
              <div>
                <h5 className="font-bold text-slate-900 mb-2 text-xs uppercase tracking-wider text-slate-500">联系与官网</h5>
                <div className="space-y-1.5 text-xs text-slate-600">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-slate-400" />
                    <span>{activeModalSchool.location.address}</span>
                  </div>
                  {activeModalSchool.contact.phone && (
                    <div className="flex items-center space-x-2">
                      <Phone className="w-4 h-4 text-slate-400" />
                      <span>{activeModalSchool.contact.phone}</span>
                    </div>
                  )}
                  {activeModalSchool.contact.website_url && (
                    <div className="flex items-center space-x-2">
                      <Globe className="w-4 h-4 text-slate-400" />
                      <a 
                        href={activeModalSchool.contact.website_url} 
                        target="_blank" 
                        rel="noreferrer"
                        className="text-red-700 hover:underline flex items-center space-x-1"
                      >
                        <span>访问学校官网</span>
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
                关闭档案
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
