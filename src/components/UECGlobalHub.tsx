'use client';

import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { 
  DESTINATION_COUNTRIES, 
  UEC_SCORE_TIERS, 
  QUALIFICATION_COMPARISONS,
  DestinationCountry,
  ScoreTierMatch 
} from '../data/uecMatriculationData';
import { 
  GraduationCap, Globe, Award, Sparkles, CheckCircle2, 
  ChevronRight, ArrowRight, DollarSign, Clock, BookOpen, 
  Layers, ExternalLink, Printer, Compass, ShieldCheck,
  Building2, School, Landmark, Check, Star
} from 'lucide-react';

export default function UECGlobalHub() {
  const { t } = useLanguage();

  // Active Country Tab
  const [selectedCountryId, setSelectedCountryId] = useState<string>('china');

  // Interactive Score Tier Selector (index 0, 1, 2, 3)
  const [activeScoreTierIdx, setActiveScoreTierIdx] = useState<number>(0);

  // Active View Mode inside Global Hub: 'destinations' | 'evaluator' | 'comparison'
  const [activeView, setActiveView] = useState<'destinations' | 'evaluator' | 'comparison'>('destinations');

  const selectedCountry = DESTINATION_COUNTRIES.find(c => c.id === selectedCountryId) || DESTINATION_COUNTRIES[0];
  const activeScoreTier = UEC_SCORE_TIERS[activeScoreTierIdx];

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
      
      {/* Hero Header Banner */}
      <div className="p-6 sm:p-10 bg-gradient-to-br from-slate-900 via-slate-800 to-red-950 text-white relative overflow-hidden">
        <div className="absolute right-0 top-0 translate-x-12 -translate-y-12 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute left-1/3 bottom-0 w-80 h-80 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-white/10 text-amber-300 border border-white/10 text-xs font-bold mb-4 backdrop-blur-xs">
            <GraduationCap className="w-4 h-4 text-amber-400" />
            <span>{t('UEC 华文独中高级统考 · 全球升学综合枢纽')}</span>
            <span className="bg-red-600 text-white px-2 py-0.2 rounded-full text-[10px] font-black uppercase tracking-wider">
              2026 权威版
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black tracking-tight leading-tight text-white">
            {t('一纸文凭直通全球千所名校：免读预科、直升大一、高额奖学金')}
          </h2>

          <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
            {t('马来西亚华文独立中学高级统考证书 (Senior UEC) 获英国国家学术认证中心 (UK ENIC / NARIC) 评定等同英国 GCE A-Level 及国际文凭 (IB)。高三毕业直接免除 1 年预科，直录中国、台湾、新加坡、英联邦及澳洲名牌大学本科大一。')}
          </p>

          {/* Quick Metrics Badges */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            <div className="p-3.5 rounded-2xl bg-white/10 backdrop-blur-xs border border-white/10">
              <div className="text-xl sm:text-2xl font-black text-amber-400">&gt; 1,000 所</div>
              <div className="text-xs text-slate-300 mt-0.5">{t('全球直接承认大学')}</div>
            </div>
            <div className="p-3.5 rounded-2xl bg-white/10 backdrop-blur-xs border border-white/10">
              <div className="text-xl sm:text-2xl font-black text-emerald-400">UK ENIC = A-Level</div>
              <div className="text-xs text-slate-300 mt-0.5">{t('英国官方认证等值')}</div>
            </div>
            <div className="p-3.5 rounded-2xl bg-white/10 backdrop-blur-xs border border-white/10">
              <div className="text-xl sm:text-2xl font-black text-blue-400">{t('省 1~2 年')}</div>
              <div className="text-xs text-slate-300 mt-0.5">{t('免昂贵预科直接读大一')}</div>
            </div>
            <div className="p-3.5 rounded-2xl bg-white/10 backdrop-blur-xs border border-white/10">
              <div className="text-xl sm:text-2xl font-black text-rose-400">{t('省 RM 10~25万')}</div>
              <div className="text-xs text-slate-300 mt-0.5">{t('节约预科学费生活费')}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Interactive Navigation Bar */}
      <div className="px-6 border-b border-slate-200 bg-slate-50 flex flex-wrap items-center justify-between gap-3 py-3">
        <div className="flex space-x-2 overflow-x-auto">
          <button
            onClick={() => setActiveView('destinations')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition flex items-center space-x-2 shrink-0 ${
              activeView === 'destinations'
                ? 'bg-red-700 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-200/70'
            }`}
          >
            <Globe className="w-4 h-4" />
            <span>{t('七大热门升学国家与地区')}</span>
          </button>

          <button
            onClick={() => setActiveView('evaluator')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition flex items-center space-x-2 shrink-0 ${
              activeView === 'evaluator'
                ? 'bg-red-700 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-200/70'
            }`}
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>{t('统考积分名校智能测算器')}</span>
          </button>

          <button
            onClick={() => setActiveView('comparison')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition flex items-center space-x-2 shrink-0 ${
              activeView === 'comparison'
                ? 'bg-red-700 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-200/70'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>{t('UEC vs A-Level vs IB 性价比大比拼')}</span>
          </button>
        </div>

        <button
          onClick={handlePrint}
          className="hidden md:inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl border border-slate-300 bg-white text-xs font-semibold text-slate-700 hover:bg-slate-50 transition shadow-xs"
        >
          <Printer className="w-3.5 h-3.5 text-slate-500" />
          <span>{t('打印升学手册')}</span>
        </button>
      </div>

      {/* Content Area */}
      <div className="p-6 sm:p-10 space-y-8">

        {/* ================= VIEW 1: DESTINATIONS EXPLORER ================= */}
        {activeView === 'destinations' && (
          <div className="space-y-8">
            
            {/* Country Selector Pills */}
            <div className="flex space-x-2 overflow-x-auto pb-2 scrollbar-thin">
              {DESTINATION_COUNTRIES.map((country) => {
                const isSelected = country.id === selectedCountryId;
                return (
                  <button
                    key={country.id}
                    onClick={() => setSelectedCountryId(country.id)}
                    className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition shrink-0 flex items-center space-x-2 border ${
                      isSelected
                        ? 'border-red-600 bg-red-50 text-red-900 shadow-xs'
                        : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    <span className="text-base">{country.flag_emoji}</span>
                    <span>{t(country.country_name)}</span>
                  </button>
                );
              })}
            </div>

            {/* Selected Country Deep Dive Profile */}
            <div className="space-y-6">
              
              {/* Header Card */}
              <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center space-x-3">
                    <span className="text-3xl sm:text-4xl">{selectedCountry.flag_emoji}</span>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                        {t(selectedCountry.country_name)}
                      </h3>
                      <p className="text-xs text-red-700 font-bold mt-0.5">
                        {t(selectedCountry.tagline)}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <span className="px-3 py-1 rounded-xl bg-emerald-100 text-emerald-900 text-xs font-bold border border-emerald-200">
                      ✓ {t('免预科直录大一')}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-slate-200 text-xs">
                  <div className="p-3 rounded-xl bg-white border border-slate-200">
                    <span className="text-slate-400 block text-[10px] uppercase font-bold">{t('统考学术地位')}</span>
                    <span className="font-semibold text-slate-900 block mt-1">{t(selectedCountry.naric_level)}</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white border border-slate-200">
                    <span className="text-slate-400 block text-[10px] uppercase font-bold">{t('年均学费预算')}</span>
                    <span className="font-bold text-slate-900 block mt-1">{selectedCountry.annual_tuition_range_rm}</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white border border-slate-200">
                    <span className="text-slate-400 block text-[10px] uppercase font-bold">{t('年均生活费预算')}</span>
                    <span className="font-bold text-slate-900 block mt-1">{selectedCountry.annual_living_range_rm}</span>
                  </div>
                </div>
              </div>

              {/* Core Advantages List */}
              <div className="p-6 rounded-3xl bg-white border border-slate-200 space-y-3">
                <h4 className="font-black text-slate-900 text-sm flex items-center space-x-2">
                  <Sparkles className="w-4 h-4 text-amber-500" />
                  <span>{t('独中生升读核心竞争优势 (Strategic Advantages)')}</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedCountry.key_advantages.map((adv, idx) => (
                    <div key={idx} className="flex items-start space-x-2.5 text-xs text-slate-700 p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{t(adv)}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Top Universities & Entry Requirements Grid */}
              <div className="space-y-3">
                <h4 className="font-black text-slate-900 text-sm flex items-center space-x-2">
                  <Building2 className="w-4 h-4 text-red-600" />
                  <span>{t('顶尖直录大学、统考门槛与热门专业')}</span>
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedCountry.top_universities.map((uni, idx) => (
                    <div key={idx} className="p-5 rounded-2xl border border-slate-200 bg-white hover:shadow-md transition space-y-3 flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <h5 className="font-black text-slate-900 text-sm sm:text-base">
                              {t(uni.chinese_name)}
                            </h5>
                            <span className="text-[11px] text-slate-400 font-medium block mt-0.5">
                              {uni.name}
                            </span>
                          </div>
                        </div>

                        {/* Requirement badge */}
                        <div className="mt-3 p-2.5 rounded-xl bg-amber-50/70 border border-amber-200 text-xs">
                          <span className="font-bold text-amber-900 block text-[10px] uppercase">{t('统考录取参考要求：')}</span>
                          <span className="text-amber-950 font-black mt-0.5 block">{t(uni.typical_uec_requirement)}</span>
                        </div>

                        {/* Popular Majors */}
                        <div className="mt-2.5">
                          <span className="text-[10px] font-bold text-slate-400 block mb-1">{t('热门招考专业方向：')}</span>
                          <div className="flex flex-wrap gap-1">
                            {uni.popular_majors.map((m, mIdx) => (
                              <span key={mIdx} className="text-[10px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md font-medium">
                                {t(m)}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Scholarship footnote */}
                      <div className="pt-2.5 border-t border-slate-100 text-[11px] text-emerald-800 font-semibold flex items-center space-x-1.5">
                        <Award className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span className="line-clamp-1">{t(uni.scholarship_availability)}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Scholarships & Application Timeline Split */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Scholarship breakdown */}
                <div className="p-6 rounded-3xl bg-amber-50/60 border border-amber-200 space-y-4">
                  <div className="flex items-center space-x-2 font-bold text-amber-950 text-sm">
                    <Award className="w-4 h-4 text-amber-700" />
                    <span>{t('专属奖学金与学费补贴政策')}</span>
                  </div>
                  <div className="space-y-3">
                    {selectedCountry.scholarship_opportunities.map((sch, idx) => (
                      <div key={idx} className="p-3.5 rounded-2xl bg-white border border-amber-200/80 text-xs space-y-1">
                        <strong className="text-slate-900 font-bold block">{t(sch.name)}</strong>
                        <p className="text-emerald-800 font-semibold text-[11px]">• 资助：{t(sch.coverage)}</p>
                        <p className="text-slate-500 text-[11px]">• 条件：{t(sch.eligibility)}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Application Timeline */}
                <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-4">
                  <div className="flex items-center space-x-2 font-bold text-slate-900 text-sm">
                    <Clock className="w-4 h-4 text-red-600" />
                    <span>{t('高三海外保送与申请时间线')}</span>
                  </div>
                  <div className="space-y-2.5">
                    {selectedCountry.application_timeline.map((step, idx) => (
                      <div key={idx} className="flex items-start space-x-3 text-xs">
                        <span className="px-2 py-0.5 rounded-lg bg-slate-900 text-white font-bold text-[10px] shrink-0 mt-0.5">
                          {t(step.period)}
                        </span>
                        <span className="text-slate-700 leading-snug">{t(step.milestone)}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-[11px] text-slate-400 pt-2 border-t border-slate-200">
                    💡 <strong>{t('特别提醒：')}</strong> {t(selectedCountry.special_notes)}
                  </p>
                </div>

              </div>

            </div>
          </div>
        )}

        {/* ================= VIEW 2: INTERACTIVE SCORE EVALUATOR ================= */}
        {activeView === 'evaluator' && (
          <div className="space-y-8">
            <div className="max-w-2xl">
              <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                {t('统考积分全球名校匹配测算器')}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed">
                {t('在独中统考中，大学依据“最佳 5 科总积分 (Best 5 Subjects Points)”进行考核评定（A1=1点，A2=2点，B3=3点...以此类推，积分越少越拔尖）。请点击选择您的预估统考成绩档位：')}
              </p>
            </div>

            {/* Score Tier Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
              {UEC_SCORE_TIERS.map((tier, idx) => {
                const isSelected = activeScoreTierIdx === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveScoreTierIdx(idx)}
                    className={`p-4 rounded-2xl border text-left transition flex flex-col justify-between ${
                      isSelected
                        ? 'border-red-600 bg-red-50/70 shadow-sm ring-2 ring-red-100'
                        : 'border-slate-200 bg-white hover:border-slate-300'
                    }`}
                  >
                    <div>
                      <span className={`px-2 py-0.5 rounded-md text-[10px] font-black border block w-fit mb-2 ${tier.badge_color}`}>
                        {tier.points_range}
                      </span>
                      <h4 className="font-bold text-xs sm:text-sm text-slate-900 leading-snug">
                        {t(tier.tier_name)}
                      </h4>
                    </div>
                    <div className="mt-3 flex items-center text-xs font-semibold text-red-700">
                      <span>{isSelected ? t('当前选中档位') : t('点击查看匹配')}</span>
                      <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Matching Result Display */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 text-white space-y-6 shadow-xl">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-700 pb-4">
                <div>
                  <span className="text-xs font-bold text-amber-400 block uppercase tracking-wider">
                    {activeScoreTier.points_range} · {t(activeScoreTier.tier_name)}
                  </span>
                  <h4 className="text-xl sm:text-2xl font-black text-white mt-1">
                    {t('直接录取的全球名校匹配清单')}
                  </h4>
                </div>
                <span className="px-3 py-1 rounded-full bg-white/10 text-slate-200 text-xs font-semibold">
                  {t('免预科直升大一')}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {t(activeScoreTier.description)}
              </p>

              {/* Matched Regions Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {activeScoreTier.matched_destinations.map((dest, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-white/10 border border-white/10 space-y-2.5">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-amber-300 text-sm">
                        {t(dest.region)}
                      </span>
                      <span className="text-[10px] text-emerald-300 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                        奖学金概率：{t(dest.scholarship_chances.split('（')[0])}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {dest.institutions.map((inst, iIdx) => (
                        <span key={iIdx} className="px-2.5 py-1 rounded-lg bg-white/10 text-white text-xs font-medium border border-white/5">
                          🏛️ {t(inst)}
                        </span>
                      ))}
                    </div>

                    <p className="text-[11px] text-slate-300 pt-1 leading-snug">
                      • {t(dest.scholarship_chances)}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* ================= VIEW 3: QUALIFICATION COMPARISON MATRIX ================= */}
        {activeView === 'comparison' && (
          <div className="space-y-6">
            <div className="max-w-2xl">
              <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                {t('四大主流高中升学文凭深度横向比拼')}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed">
                {t('对比独中高级统考证书 (UEC)、英国剑桥 A-Level、国际文凭 (IBDP) 及大马政府中六高级教育文凭 (STPM) 的学制年限、留学费用与顶尖大学录用优势：')}
              </p>
            </div>

            <div className="overflow-x-auto border border-slate-200 rounded-3xl shadow-xs">
              <table className="w-full text-xs text-left">
                <thead>
                  <tr className="bg-slate-100 text-slate-700 font-black border-b border-slate-200">
                    <th className="p-3.5 sm:p-4 w-32">{t('考核维度')}</th>
                    <th className="p-3.5 sm:p-4 bg-red-50 text-red-950 font-black w-56 border-x border-red-200">
                      ★ UEC 高级统考文凭
                    </th>
                    <th className="p-3.5 sm:p-4 w-48">英国 A-Level</th>
                    <th className="p-3.5 sm:p-4 w-48">国际文凭 IBDP</th>
                    <th className="p-3.5 sm:p-4 w-44">政府中六 STPM</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {QUALIFICATION_COMPARISONS.map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 1 ? 'bg-slate-50/50' : 'bg-white'}>
                      <td className="p-3.5 sm:p-4 font-bold text-slate-900">{t(row.criteria)}</td>
                      <td className="p-3.5 sm:p-4 bg-red-50/60 font-bold text-red-950 border-x border-red-200">
                        {t(row.uec)}
                      </td>
                      <td className="p-3.5 sm:p-4">{t(row.alevel)}</td>
                      <td className="p-3.5 sm:p-4">{t(row.ib)}</td>
                      <td className="p-3.5 sm:p-4">{t(row.stpm)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Bottom summary highlight card */}
            <div className="p-5 rounded-3xl bg-amber-50 border border-amber-200 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div>
                <h5 className="font-bold text-amber-950 text-sm">
                  {t('独中文凭的核心性价比总结')}
                </h5>
                <p className="text-xs text-amber-900 mt-0.5">
                  {t('高三统考毕业后直接进入大一，免除了其他体系必须经过的 1~2 年昂贵大学预科（Foundation/A-Level），不仅让孩子提早 1 年大学毕业进入职场，而且直接为家庭节省下马币 10万~25万 的高额预科开销！')}
                </p>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
