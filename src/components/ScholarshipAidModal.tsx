'use client';

import React, { useState, useMemo } from 'react';
import { School } from '../types/school';
import { useLanguage } from '../contexts/LanguageContext';
import {
  SCHOLARSHIP_CATEGORIES,
  SCHOOL_FUND_PROFILES,
  EXTERNAL_FOUNDATIONS,
  FINANCIAL_AID_APPLICATION_STEPS,
  SchoolFundProfile
} from '../data/scholarshipAidData';
import {
  X, HeartHandshake, Award, DollarSign, BookOpen,
  Calculator, CheckCircle2, ChevronRight, Printer, Sparkles,
  Building2, Users, FileText, ExternalLink, HelpCircle,
  AlertCircle, ShieldCheck, ArrowRight, Heart
} from 'lucide-react';

interface ScholarshipAidModalProps {
  isOpen: boolean;
  onClose: () => void;
  schools: School[];
  initialSchoolId?: string;
  onSelectSchoolDetail?: (school: School) => void;
}

export default function ScholarshipAidModal({
  isOpen,
  onClose,
  schools,
  initialSchoolId,
  onSelectSchoolDetail
}: ScholarshipAidModalProps) {
  const { t } = useLanguage();

  // Active Tab: 'categories' | 'simulator' | 'school_funds' | 'external_foundations' | 'checklist'
  const [activeTab, setActiveTab] = useState<'categories' | 'simulator' | 'school_funds' | 'external_foundations' | 'checklist'>('simulator');

  // Selected School Profile inside School Funds tab
  const [selectedSchoolFundId, setSelectedSchoolFundId] = useState<string>(
    initialSchoolId || SCHOOL_FUND_PROFILES[0].school_id
  );

  // Simulator Inputs
  const [incomeTier, setIncomeTier] = useState<string>('under_4000');
  const [academicTier, setAcademicTier] = useState<string>('top_merit');
  const [specialCategory, setSpecialCategory] = useState<string>('none');
  const [isBoarder, setIsBoarder] = useState<boolean>(false);

  const activeSchoolFund = useMemo(() => {
    return SCHOOL_FUND_PROFILES.find(f => f.school_id === selectedSchoolFundId) || SCHOOL_FUND_PROFILES[0];
  }, [selectedSchoolFundId]);

  // Simulator Result Calculation
  const simulationResult = useMemo(() => {
    let waiverPercent = 0;
    const qualifiedSchemes: string[] = [];
    const estimatedSavingsAnnual = { min: 0, max: 0 };
    const tips: string[] = [];

    // 1. Merit based check
    if (academicTier === 'top_merit') {
      waiverPercent = Math.max(waiverPercent, 100);
      qualifiedSchemes.push('新生入学甄选优异奖学金 (全免初一学杂费)');
      tips.push('考入全校前 20-50 名可直接全额免除初一学杂费，无需资产审核。');
    } else if (academicTier === 'top_honor') {
      waiverPercent = Math.max(waiverPercent, 50);
      qualifiedSchemes.push('新生入学甄选优等奖学金 (半免学费)');
      tips.push('通常名列全校前 30-80 名可获得半免学费优惠。');
    }

    // 2. Need based check
    if (incomeTier === 'under_3000') {
      waiverPercent = Math.max(waiverPercent, 100);
      qualifiedSchemes.push('独中董事会清寒子弟全免学杂费助学金');
      qualifiedSchemes.push('爱心课本免费借贷计划 (全年教科书免购买)');
      qualifiedSchemes.push('郭氏基金 (Kuok Foundation) / 董总清寒助学金');
      if (isBoarder) {
        qualifiedSchemes.push('外州清寒学生宿舍专项津贴 (如芙中李典和基金等)');
      }
      tips.push('家庭总收入低于 RM 3,000 属于重点保障梯队，可同时申请校内全免与外界郭氏基金。');
    } else if (incomeTier === 'under_4000' || incomeTier === 'under_5500') {
      const needWaiver = incomeTier === 'under_4000' ? 75 : 50;
      waiverPercent = Math.max(waiverPercent, needWaiver);
      qualifiedSchemes.push(`校内清寒半免/大部免除学费助学金 (${needWaiver}% 减免)`);
      qualifiedSchemes.push('清寒学生教科书免租借贷计划');
      qualifiedSchemes.push('同乡会/地缘会馆会员子女奖助学金');
    }

    // 3. Special category check
    if (specialCategory === 'teacher_child') {
      waiverPercent = Math.max(waiverPercent, 75);
      qualifiedSchemes.push('华小/独中在职教职员子女学杂费特别减免 (50%~100%)');
      tips.push('凭父母华小/独中在职教师公函即可直接获批，免资产繁杂审核。');
    } else if (specialCategory === 'sports_arts') {
      waiverPercent = Math.max(waiverPercent, 75);
      qualifiedSchemes.push('州际/国家级体艺拔尖卓越人才奖学金');
      tips.push('凭借 MSSM 学联代表或国际管乐/二十四节令鼓奖项可申请特长生学费优免。');
    } else if (specialCategory === 'single_parent') {
      qualifiedSchemes.push('单亲家庭与抚养多子女特困专项救济金');
      tips.push('多数独中对单亲抚养或同校两名以上子女就读者提供专项叠加补助。');
    }

    // Calculate approximate ringgit savings
    const baseJuniorTuition = 4800; // Average annual independent school fee
    const textbookSavings = qualifiedSchemes.some(s => s.includes('课本')) ? 650 : 0;
    const hostelSavings = isBoarder && qualifiedSchemes.some(s => s.includes('宿舍')) ? 2400 : 0;

    const minSavings = Math.round((baseJuniorTuition * (waiverPercent / 100)) + textbookSavings);
    const maxSavings = Math.round(minSavings + hostelSavings + (waiverPercent >= 100 ? 800 : 0)); // dev funds etc.

    estimatedSavingsAnnual.min = minSavings;
    estimatedSavingsAnnual.max = Math.max(minSavings, maxSavings);

    return {
      waiverPercent,
      qualifiedSchemes,
      estimatedSavingsAnnual,
      tips
    };
  }, [incomeTier, academicTier, specialCategory, isBoarder]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-5 bg-slate-900/60 backdrop-blur-md animate-fadeIn overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-5xl w-full max-h-[92vh] flex flex-col shadow-2xl border border-slate-100 overflow-hidden relative">
        
        {/* Header */}
        <div className="px-5 sm:px-8 py-5 border-b border-slate-100 bg-gradient-to-r from-emerald-950 via-teal-900 to-slate-900 text-white flex items-center justify-between shrink-0">
          <div className="flex items-center space-x-3.5">
            <div className="p-2.5 rounded-2xl bg-emerald-500/20 border border-emerald-400/30 text-amber-300 shadow-inner">
              <HeartHandshake className="w-6 h-6 text-emerald-400" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h3 className="text-lg sm:text-2xl font-black text-white tracking-tight">
                  {t('独中奖助学金与清寒子弟免学费申请指南')}
                </h3>
                <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-200 border border-emerald-400/30 text-xs font-bold">
                  初心 · 助学
                </span>
              </div>
              <p className="text-xs sm:text-sm text-emerald-100/80 mt-0.5">
                {t('不让任何一个华裔子弟因贫失学 · 董事会助学金 · 入学考全免奖金 · 郭氏基金 · 爱心借书')}
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => window.print()}
              className="hidden sm:inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl border border-white/20 bg-white/10 text-xs font-semibold text-white hover:bg-white/20 transition backdrop-blur-xs"
              title={t('打印助学金指南')}
            >
              <Printer className="w-3.5 h-3.5 text-emerald-300" />
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
            onClick={() => setActiveTab('simulator')}
            className={`px-3.5 py-2 rounded-xl font-bold transition flex items-center space-x-1.5 shrink-0 ${
              activeTab === 'simulator'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-200/70 hover:text-slate-900'
            }`}
          >
            <Calculator className="w-4 h-4" />
            <span>{t('智能奖助资格自测器')}</span>
          </button>

          <button
            onClick={() => setActiveTab('categories')}
            className={`px-3.5 py-2 rounded-xl font-bold transition flex items-center space-x-1.5 shrink-0 ${
              activeTab === 'categories'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-200/70 hover:text-slate-900'
            }`}
          >
            <DollarSign className="w-4 h-4" />
            <span>{t('四大奖助体系详解')}</span>
          </button>

          <button
            onClick={() => setActiveTab('school_funds')}
            className={`px-3.5 py-2 rounded-xl font-bold transition flex items-center space-x-1.5 shrink-0 ${
              activeTab === 'school_funds'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-200/70 hover:text-slate-900'
            }`}
          >
            <Building2 className="w-4 h-4" />
            <span>{t('各校专项信托基金档案')}</span>
          </button>

          <button
            onClick={() => setActiveTab('external_foundations')}
            className={`px-3.5 py-2 rounded-xl font-bold transition flex items-center space-x-1.5 shrink-0 ${
              activeTab === 'external_foundations'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-200/70 hover:text-slate-900'
            }`}
          >
            <Heart className="w-4 h-4" />
            <span>{t('郭氏基金与外界慈善渠道')}</span>
          </button>

          <button
            onClick={() => setActiveTab('checklist')}
            className={`px-3.5 py-2 rounded-xl font-bold transition flex items-center space-x-1.5 shrink-0 ${
              activeTab === 'checklist'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-200/70 hover:text-slate-900'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>{t('申请材料与审核流程')}</span>
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-8 space-y-6">

          {/* TAB 1: 智能奖助资格自测器 (SIMULATOR) */}
          {activeTab === 'simulator' && (
            <div className="space-y-6">
              <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-emerald-50 via-teal-50 to-blue-50 border border-emerald-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center space-x-2 text-emerald-950 font-black text-base sm:text-lg">
                    <Sparkles className="w-5 h-5 text-amber-500" />
                    <span>{t('独中奖助学金智能自测匹配器')}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {t('只需选择家庭收入水平、考生学业特长与背景，系统即时测算可获减免幅度及可申报的专项助学金通道。')}
                  </p>
                </div>

                <div className="shrink-0 bg-white px-4 py-2 rounded-xl border border-emerald-300 shadow-2xs text-center sm:text-right">
                  <span className="text-[10px] text-slate-400 font-semibold block">{t('预估最高学费减免')}</span>
                  <span className="text-xl sm:text-2xl font-black text-emerald-700">
                    {simulationResult.waiverPercent}% {t('免除')}
                  </span>
                </div>
              </div>

              {/* Input Form Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* 1. Household Income */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <label className="text-xs font-bold text-slate-700 block">
                    {t('1. 家庭每月总收入 (Household Monthly Income)：')}
                  </label>
                  <select
                    value={incomeTier}
                    onChange={(e) => setIncomeTier(e.target.value)}
                    className="w-full text-xs py-2 px-3 rounded-xl border border-slate-300 bg-white font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                  >
                    <option value="under_3000">{t('低于 RM 3,000 / 月 (清寒特困保障梯队)')}</option>
                    <option value="under_4000">{t('RM 3,000 - RM 4,500 / 月 (清寒半免/全免资格)')}</option>
                    <option value="under_5500">{t('RM 4,500 - RM 6,000 / 月 (多子女家庭助学津贴)')}</option>
                    <option value="above_6000">{t('RM 6,000 以上 (以学术优异奖学金为主)')}</option>
                  </select>
                  <p className="text-[11px] text-slate-500">
                    {t('注：独中审核清寒助学金亦参考抚养老人及同校就学子女数量。')}
                  </p>
                </div>

                {/* 2. Academic / Intake Standing */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <label className="text-xs font-bold text-slate-700 block">
                    {t('2. 考生预估入学考成绩 / 华小在校水平：')}
                  </label>
                  <select
                    value={academicTier}
                    onChange={(e) => setAcademicTier(e.target.value)}
                    className="w-full text-xs py-2 px-3 rounded-xl border border-slate-300 bg-white font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                  >
                    <option value="top_merit">{t('拔尖全优 (入学试前 20-30 名 / UASA 全特优保送)')}</option>
                    <option value="top_honor">{t('前列优等 (入学试前 31-80 名 / 华小前 5 名)')}</option>
                    <option value="moderate">{t('普通及格 (正常录取分数线，以品格稳定为主)')}</option>
                    <option value="borderline">{t('备取压线 (自律品行端正，需助学金托底)')}</option>
                  </select>
                  <p className="text-[11px] text-slate-500">
                    {t('优异新生奖学金无需资产核查，完全依据入学考名次发放。')}
                  </p>
                </div>

                {/* 3. Special Family Background */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <label className="text-xs font-bold text-slate-700 block">
                    {t('3. 特殊身份与家庭背景：')}
                  </label>
                  <select
                    value={specialCategory}
                    onChange={(e) => setSpecialCategory(e.target.value)}
                    className="w-full text-xs py-2 px-3 rounded-xl border border-slate-300 bg-white font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                  >
                    <option value="none">{t('一般华小毕业家庭')}</option>
                    <option value="teacher_child">{t('父母为华小正式在职教师或独中教职员')}</option>
                    <option value="sports_arts">{t('体育运动 (MSSM) 或音乐艺术州级特长生')}</option>
                    <option value="single_parent">{t('单亲家庭 / 遭遇突发意外重大变故')}</option>
                  </select>
                  <p className="text-[11px] text-slate-500">
                    {t('华小教师子女在绝大部分独中享有 50% - 100% 直系优免。')}
                  </p>
                </div>

                {/* 4. Boarder or Day Student */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <label className="text-xs font-bold text-slate-700 block">
                    {t('4. 是否需要外州寄宿：')}
                  </label>
                  <div className="flex items-center space-x-4 pt-1">
                    <label className="inline-flex items-center space-x-2 text-xs font-bold text-slate-800 cursor-pointer">
                      <input
                        type="radio"
                        checked={!isBoarder}
                        onChange={() => setIsBoarder(false)}
                        className="text-emerald-600"
                      />
                      <span>{t('日常走读生')}</span>
                    </label>
                    <label className="inline-flex items-center space-x-2 text-xs font-bold text-slate-800 cursor-pointer">
                      <input
                        type="radio"
                        checked={isBoarder}
                        onChange={() => setIsBoarder(true)}
                        className="text-emerald-600"
                      />
                      <span>{t('外州寄宿生 (需要申请宿舍助学金)')}</span>
                    </label>
                  </div>
                  <p className="text-[11px] text-slate-500">
                    {t('部分寄宿独中（如芙中、銮中）特设“清寒宿舍专项资助基金”。')}
                  </p>
                </div>
              </div>

              {/* Simulation Result Presentation Card */}
              <div className="p-5 sm:p-7 rounded-3xl bg-white border border-emerald-200 shadow-md space-y-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
                  <div>
                    <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider block">
                      {t('测算结果评估与匹配方案')}
                    </span>
                    <h4 className="text-xl sm:text-2xl font-black text-slate-900 mt-0.5">
                      {t('可申请减免幅度')}：
                      <span className="text-emerald-700 ml-1">
                        {simulationResult.waiverPercent}% {t('学杂费免除')}
                      </span>
                    </h4>
                  </div>

                  <div className="bg-emerald-50 px-4 py-2.5 rounded-2xl border border-emerald-200 text-center sm:text-right">
                    <span className="text-xs text-emerald-800 block">{t('预估初一首年直接节约')}</span>
                    <span className="text-xl sm:text-2xl font-black text-emerald-900">
                      RM {simulationResult.estimatedSavingsAnnual.min.toLocaleString()} ~ RM {simulationResult.estimatedSavingsAnnual.max.toLocaleString()}
                    </span>
                  </div>
                </div>

                {/* Matched Schemes List */}
                <div className="space-y-2">
                  <div className="text-xs font-bold text-slate-700">{t('您符合申请资格的奖助学金通道：')}</div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {simulationResult.qualifiedSchemes.map((scheme, sIdx) => (
                      <div key={sIdx} className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-start space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="text-xs font-bold text-slate-800 leading-snug">{t(scheme)}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Practical Advice */}
                <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 space-y-1.5 text-xs text-slate-700 leading-relaxed">
                  <div className="flex items-center space-x-1.5 font-bold text-amber-900">
                    <AlertCircle className="w-4 h-4 text-amber-600" />
                    <span>{t('助学申请黄金法则')}</span>
                  </div>
                  <ul className="space-y-1 list-disc list-inside">
                    {simulationResult.tips.map((tip, tIdx) => (
                      <li key={tIdx}>{t(tip)}</li>
                    ))}
                    <li>{t('注册缴费时请务必主动向教务处领取《清寒助学金申请表》，切勿因费用踌躇而错过注册截止日期！')}</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: 四大奖助体系详解 (CATEGORIES) */}
          {activeTab === 'categories' && (
            <div className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {SCHOLARSHIP_CATEGORIES.map(cat => (
                  <div key={cat.id} className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs hover:border-emerald-300 transition flex flex-col justify-between space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-black">
                          {t(cat.badge)}
                        </span>
                      </div>
                      <h4 className="text-base sm:text-lg font-black text-slate-900">
                        {t(cat.title)}
                      </h4>
                      <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                        {t(cat.summary)}
                      </p>

                      <div className="mt-3.5 space-y-2 text-xs">
                        <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                          <strong className="text-slate-800">{t('资助范围')}：</strong>
                          <span className="text-emerald-800 font-bold ml-1">{t(cat.coverage)}</span>
                        </div>
                        <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                          <strong className="text-slate-800">{t('申报门槛')}：</strong>
                          <span className="text-slate-600 ml-1">{t(cat.eligibility)}</span>
                        </div>
                        <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                          <strong className="text-slate-800">{t('延展标准')}：</strong>
                          <span className="text-slate-600 ml-1">{t(cat.maintenance_rule)}</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-slate-100">
                      <div className="text-[11px] font-bold text-slate-700 mb-1">{t('制度亮点：')}</div>
                      <ul className="space-y-1 text-xs text-slate-600">
                        {cat.highlights.map((h, hIdx) => (
                          <li key={hIdx} className="flex items-start space-x-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0 mt-1.5" />
                            <span className="leading-snug">{t(h)}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: 各校专项信托基金档案 (SCHOOL FUNDS) */}
          {activeTab === 'school_funds' && (
            <div className="space-y-6">
              {/* School Switcher Tabs */}
              <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-none">
                {SCHOOL_FUND_PROFILES.map(fund => (
                  <button
                    key={fund.school_id}
                    onClick={() => setSelectedSchoolFundId(fund.school_id)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition flex items-center space-x-1.5 ${
                      selectedSchoolFundId === fund.school_id
                        ? 'bg-emerald-700 text-white shadow-xs'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    <span>{t(fund.school_name)}</span>
                    <span className="text-[10px] opacity-80">({fund.state})</span>
                  </button>
                ))}
              </div>

              {/* Selected School Profile Card */}
              <div className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="px-2.5 py-0.5 rounded-lg bg-emerald-100 text-emerald-800 text-xs font-bold">
                        {t(activeSchoolFund.state)}
                      </span>
                      <h4 className="text-xl sm:text-2xl font-black text-slate-900">
                        {t(activeSchoolFund.school_name)}
                      </h4>
                    </div>
                    <p className="text-xs text-slate-500 mt-1">
                      {t('年度总发放额')}：<strong className="text-emerald-700 font-bold">{t(activeSchoolFund.annual_disbursement)}</strong> · {t('受惠群体')}：{t(activeSchoolFund.beneficiary_count)}
                    </p>
                  </div>

                  {onSelectSchoolDetail && (
                    <button
                      onClick={() => {
                        const target = schools.find(s => s.school_id === activeSchoolFund.school_id);
                        if (target) {
                          onClose();
                          onSelectSchoolDetail(target);
                        }
                      }}
                      className="inline-flex items-center space-x-1 px-3.5 py-1.5 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 transition"
                    >
                      <span>{t('查看母校完整简章')}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

                {/* Flagship Funds Pills */}
                <div>
                  <div className="text-xs font-bold text-slate-700 mb-2">{t('核心设立基金与校友捐资专案：')}</div>
                  <div className="flex flex-wrap gap-2">
                    {activeSchoolFund.flagship_funds.map((f, fIdx) => (
                      <span key={fIdx} className="px-3 py-1 rounded-xl bg-emerald-50 text-emerald-900 border border-emerald-200 text-xs font-medium">
                        🏛️ {t(f)}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Policy Specs Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                    <span className="font-bold text-slate-800 block">{t('新生优异奖学金分配：')}</span>
                    <p className="text-slate-600 leading-relaxed">{t(activeSchoolFund.merit_intake_quota)}</p>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                    <span className="font-bold text-slate-800 block">{t('清寒助学金审批条件：')}</span>
                    <p className="text-slate-600 leading-relaxed">{t(activeSchoolFund.need_based_quota)}</p>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                    <span className="font-bold text-slate-800 block">{t('爱心借书计划：')}</span>
                    <p className="text-slate-600 leading-relaxed">{t(activeSchoolFund.textbook_loan_scheme)}</p>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                    <span className="font-bold text-slate-800 block">{t('寄宿生宿费补贴：')}</span>
                    <p className="text-slate-600 leading-relaxed">{t(activeSchoolFund.hostel_subsidy)}</p>
                  </div>
                </div>

                {/* Special Notes */}
                <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 text-xs text-slate-700 leading-relaxed">
                  <strong className="text-amber-900 font-bold mr-1">{t('该校助学传统与特点：')}</strong>
                  {t(activeSchoolFund.special_notes)}
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: 郭氏基金等外界外部助学金指南 (EXTERNAL FOUNDATIONS) */}
          {activeTab === 'external_foundations' && (
            <div className="space-y-5">
              <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 text-xs sm:text-sm text-slate-700 leading-relaxed">
                {t('除独中校内董事会基金外，马来西亚华人社会各大著名慈善信托基金、全国董总及各地宗乡会馆每年为独中在校生提供海量外部资助，可与校内助学金互补叠加申报。')}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {EXTERNAL_FOUNDATIONS.map((found, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-3 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between text-xs mb-1">
                        <span className="px-2 py-0.5 rounded-md bg-blue-50 text-blue-700 font-bold">
                          {t(found.founder_or_org)}
                        </span>
                      </div>
                      <h4 className="text-base sm:text-lg font-black text-slate-900">
                        {t(found.name)}
                      </h4>
                      <p className="text-xs text-emerald-700 font-bold mt-1">
                        {t('资助额度')}：{t(found.coverage_amount)}
                      </p>

                      <div className="mt-3 space-y-1.5 text-xs text-slate-600">
                        <div>
                          <strong className="text-slate-800">{t('申请窗口')}：</strong>
                          {t(found.application_window)}
                        </div>
                        <div>
                          <strong className="text-slate-800">{t('申请要求')}：</strong>
                          <ul className="space-y-1 mt-1 pl-3 list-disc text-slate-600">
                            {found.official_criteria.map((cr, cIdx) => (
                              <li key={cIdx}>{t(cr)}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                      <span className="text-slate-500">{t('申报通道')}</span>
                      {found.contact_or_apply_link.startsWith('http') ? (
                        <a
                          href={found.contact_or_apply_link}
                          target="_blank"
                          rel="noreferrer"
                          className="text-blue-600 hover:underline font-bold flex items-center space-x-1"
                        >
                          <span>{t('访问官网申请')}</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      ) : (
                        <span className="font-bold text-slate-800">{t(found.contact_or_apply_link)}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: 申请材料与审核流程 (CHECKLIST) */}
          {activeTab === 'checklist' && (
            <div className="space-y-6">
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-600">
                {t('申请独中清寒助学金并不繁琐。按照以下 5 个关键步骤准备相应材料，并在新生注册或开学初如期提交至校方教务处或学生福利委员会。')}
              </div>

              <div className="space-y-4">
                {FINANCIAL_AID_APPLICATION_STEPS.map(st => (
                  <div key={st.step} className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-2xl bg-emerald-600 text-white font-black text-base flex items-center justify-center shrink-0 shadow-xs">
                      {st.step}
                    </div>
                    <div className="space-y-1">
                      <h5 className="font-black text-slate-900 text-sm sm:text-base">
                        {t(st.title)}
                      </h5>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {t(st.details)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Confidentiality & Dignity Pledge Box */}
              <div className="p-5 rounded-2xl bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-300 flex items-start space-x-3.5">
                <ShieldCheck className="w-6 h-6 text-emerald-700 shrink-0 mt-0.5" />
                <div className="space-y-1 text-xs sm:text-sm text-slate-700">
                  <div className="font-black text-emerald-950 text-sm sm:text-base">
                    {t('全马独中“爱心尊严保密”承诺')}
                  </div>
                  <p className="leading-relaxed">
                    {t('所有奖助学金申请受惠学生名单均由校方学生福利处严格保密。受助学子在校正常就读、无任何公开标识，保障每一位华裔学子在阳光、平等与尊严的校园氛围中自信成才。')}
                  </p>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between shrink-0">
          <div className="text-xs text-slate-500 hidden sm:block">
            {t('提示：如遇家庭突发重疾、失业等变故，可在学年中随时向校方辅导处申请“紧急援助金”。')}
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
