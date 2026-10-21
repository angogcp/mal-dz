'use client';

import React, { useState, useMemo } from 'react';
import { School } from '../types/school';
import { useLanguage } from '../contexts/LanguageContext';
import { 
  X, Calculator, DollarSign, Wallet, Building2, 
  BedDouble, Bus, Utensils, BookOpen, Sparkles, 
  Printer, ArrowRight, CheckCircle2, AlertCircle, 
  HelpCircle, ChevronRight, Sliders, RefreshCw
} from 'lucide-react';

interface BudgetCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  schools: School[];
  initialSchool?: School | null;
  onSelectSchoolDetail?: (school: School) => void;
}

export default function BudgetCalculatorModal({
  isOpen,
  onClose,
  schools,
  initialSchool,
  onSelectSchoolDetail
}: BudgetCalculatorModalProps) {
  const { t } = useLanguage();

  // Selected Primary School for Calculation
  const [selectedSchoolId, setSelectedSchoolId] = useState<string>(
    initialSchool?.school_id || (schools.length > 0 ? schools[0].school_id : '')
  );

  // Optional Second School for Comparison
  const [compareSchoolId, setCompareSchoolId] = useState<string>('');

  // Parameters
  const [studentType, setStudentType] = useState<'day' | 'boarder'>('day');
  const [timeHorizon, setTimeHorizon] = useState<'year1' | 'junior3' | 'full6'>('junior3');
  
  // Custom Expense Add-ons (Sliders)
  const [transportMonthly, setTransportMonthly] = useState<number>(220); // 校车/交通
  const [pocketMoneyMonthly, setPocketMoneyMonthly] = useState<number>(350); // 伙食零用 (走读生日常午餐)
  const [boarderMealMonthly, setBoarderMealMonthly] = useState<number>(650); // 寄宿生全天三餐
  const [ccaAnnual, setCcaAnnual] = useState<number>(400); // 课外活动与社团
  const [hasScholarship, setHasScholarship] = useState<boolean>(false);
  const [scholarshipDeductionPercent, setScholarshipDeductionPercent] = useState<number>(50); // 50% or 100%

  const selectedSchool = useMemo(() => {
    return schools.find(s => s.school_id === selectedSchoolId) || schools[0];
  }, [schools, selectedSchoolId]);

  const compareSchool = useMemo(() => {
    return schools.find(s => s.school_id === compareSchoolId) || null;
  }, [schools, compareSchoolId]);

  // Sync if initialSchool changes
  React.useEffect(() => {
    if (initialSchool) {
      setSelectedSchoolId(initialSchool.school_id);
      if (!initialSchool.dormitory_and_boarding.has_dormitory && studentType === 'boarder') {
        setStudentType('day');
      }
    }
  }, [initialSchool]);

  // If school has no dormitory, force day student
  const isDormAvailable = selectedSchool?.dormitory_and_boarding.has_dormitory ?? false;

  // Calculation function
  const calculateBudget = (school: School, isBoarder: boolean) => {
    const isActuallyBoarder = isBoarder && school.dormitory_and_boarding.has_dormitory;
    
    const regFee = school.costs_and_fees.registration_fee || 350;
    const uniformAndBooksInitial = 800; // Uniform, badge, textbooks upfront
    const devFundAnnual = school.costs_and_fees.development_fund_annual || 250;
    const miscFeeAnnual = school.costs_and_fees.misc_fee_annual || 300;
    
    const juniorTuitionAnnual = school.costs_and_fees.tuition_junior_yearly;
    const seniorTuitionAnnual = school.costs_and_fees.tuition_senior_yearly || (juniorTuitionAnnual * 1.15);
    
    const dormMonthly = school.dormitory_and_boarding.dorm_fee_monthly || 450;
    const dormAnnual = isActuallyBoarder ? (dormMonthly * 10) : 0; // 10 school months

    // Scholarship discount factor applied to tuition
    const discountMultiplier = hasScholarship ? (1 - scholarshipDeductionPercent / 100) : 1;

    // Year 1 (初一首年)
    const year1Tuition = juniorTuitionAnnual * discountMultiplier;
    const year1TransportOrDorm = isActuallyBoarder 
      ? (dormAnnual + boarderMealMonthly * 10)
      : (transportMonthly * 10 + pocketMoneyMonthly * 10);
    const year1Total = regFee + uniformAndBooksInitial + devFundAnnual + miscFeeAnnual + year1Tuition + year1TransportOrDorm + ccaAnnual;

    // Junior 3 Years (初中三年总计)
    let junior3Total = 0;
    for (let yr = 1; yr <= 3; yr++) {
      const isYr1 = yr === 1;
      const initialOneOff = isYr1 ? (regFee + uniformAndBooksInitial) : 250; // extra book renewal
      const tuition = juniorTuitionAnnual * discountMultiplier;
      const living = isActuallyBoarder
        ? (dormAnnual + boarderMealMonthly * 10)
        : (transportMonthly * 10 + pocketMoneyMonthly * 10);
      junior3Total += (initialOneOff + devFundAnnual + miscFeeAnnual + tuition + living + ccaAnnual);
    }

    // Full 6 Years (初中三年 + 高中三年总计)
    let full6Total = junior3Total;
    for (let yr = 4; yr <= 6; yr++) {
      const bookRenewal = 350;
      const tuition = seniorTuitionAnnual * discountMultiplier;
      const living = isActuallyBoarder
        ? (dormAnnual + boarderMealMonthly * 10)
        : (transportMonthly * 10 + pocketMoneyMonthly * 10);
      full6Total += (bookRenewal + devFundAnnual + miscFeeAnnual + tuition + living + ccaAnnual);
    }

    // Selected Horizon Output
    let activeTotal = year1Total;
    let monthsInPeriod = 10;
    if (timeHorizon === 'junior3') {
      activeTotal = junior3Total;
      monthsInPeriod = 30;
    } else if (timeHorizon === 'full6') {
      activeTotal = full6Total;
      monthsInPeriod = 60;
    }

    const monthlyAverage = Math.round(activeTotal / monthsInPeriod);

    return {
      regFee,
      uniformAndBooksInitial,
      devFundAnnual,
      miscFeeAnnual,
      juniorTuitionAnnual,
      seniorTuitionAnnual,
      dormAnnual,
      year1Total,
      junior3Total,
      full6Total,
      activeTotal,
      monthlyAverage,
      isActuallyBoarder
    };
  };

  const primaryBudget = useMemo(() => {
    return calculateBudget(selectedSchool, studentType === 'boarder');
  }, [
    selectedSchool, studentType, timeHorizon, transportMonthly, 
    pocketMoneyMonthly, boarderMealMonthly, ccaAnnual, 
    hasScholarship, scholarshipDeductionPercent
  ]);

  const secondaryBudget = useMemo(() => {
    if (!compareSchool) return null;
    return calculateBudget(compareSchool, studentType === 'boarder');
  }, [
    compareSchool, studentType, timeHorizon, transportMonthly, 
    pocketMoneyMonthly, boarderMealMonthly, ccaAnnual, 
    hasScholarship, scholarshipDeductionPercent
  ]);

  if (!isOpen || !selectedSchool) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-900/60 backdrop-blur-md animate-fadeIn overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[92vh] flex flex-col shadow-2xl border border-slate-100 overflow-hidden relative">
        
        {/* Header */}
        <div className="px-6 py-5 border-b border-slate-100 bg-gradient-to-r from-emerald-50 via-white to-teal-50 flex items-center justify-between shrink-0">
          <div className="flex items-center space-x-3">
            <div className="p-2.5 rounded-2xl bg-emerald-600 text-white shadow-md shadow-emerald-200">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h3 className="text-lg sm:text-xl font-black text-slate-900">
                  {t('独中学费与生活预算自选测算器')}
                </h3>
                <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold">
                  2026 预算版
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-0.5">
                {t('自选走读/住宿、年级跨度与交通伙食，一键测算 1年/3年/6年 完整教育现金流')}
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => window.print()}
              className="hidden sm:inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl border border-slate-200 bg-white text-xs font-semibold text-slate-700 hover:bg-slate-50 transition shadow-xs"
              title={t('打印预算单')}
            >
              <Printer className="w-3.5 h-3.5 text-slate-500" />
              <span>{t('打印预算')}</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Body Content */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-7 space-y-6">

          {/* School Selector & Student Type Mode */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 bg-slate-50 p-4 rounded-2xl border border-slate-200">
            {/* Primary School */}
            <div className="sm:col-span-1 space-y-1.5">
              <label className="text-xs font-bold text-slate-700 block">
                {t('目标测算独中：')}
              </label>
              <select
                value={selectedSchoolId}
                onChange={(e) => setSelectedSchoolId(e.target.value)}
                className="w-full text-xs py-2 px-3 rounded-xl border border-slate-300 bg-white font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-600"
              >
                {schools.map(s => (
                  <option key={s.school_id} value={s.school_id}>
                    [{s.location.state}] {s.name_zh}
                  </option>
                ))}
              </select>
            </div>

            {/* Compare School (Optional) */}
            <div className="sm:col-span-1 space-y-1.5">
              <label className="text-xs font-bold text-slate-700 block">
                {t('横向对比第二所 (可选)：')}
              </label>
              <select
                value={compareSchoolId}
                onChange={(e) => setCompareSchoolId(e.target.value)}
                className="w-full text-xs py-2 px-3 rounded-xl border border-slate-300 bg-white font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-600"
              >
                <option value="">-- {t('不对比 / 单校详细测算')} --</option>
                {schools.filter(s => s.school_id !== selectedSchoolId).map(s => (
                  <option key={s.school_id} value={s.school_id}>
                    [{s.location.state}] {s.name_zh}
                  </option>
                ))}
              </select>
            </div>

            {/* Student Mode: Day vs Boarder */}
            <div className="sm:col-span-1 space-y-1.5">
              <label className="text-xs font-bold text-slate-700 block">
                {t('就读形式：')}
              </label>
              <div className="grid grid-cols-2 gap-1.5">
                <button
                  type="button"
                  onClick={() => setStudentType('day')}
                  className={`py-2 px-3 rounded-xl text-xs font-bold transition flex items-center justify-center space-x-1 ${
                    studentType === 'day'
                      ? 'bg-emerald-700 text-white shadow-xs'
                      : 'bg-white border border-slate-300 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <Bus className="w-3.5 h-3.5" />
                  <span>{t('走读生')}</span>
                </button>
                <button
                  type="button"
                  disabled={!isDormAvailable}
                  onClick={() => isDormAvailable && setStudentType('boarder')}
                  className={`py-2 px-3 rounded-xl text-xs font-bold transition flex items-center justify-center space-x-1 ${
                    !isDormAvailable
                      ? 'bg-slate-100 text-slate-400 border border-slate-200 cursor-not-allowed'
                      : studentType === 'boarder'
                      ? 'bg-emerald-700 text-white shadow-xs'
                      : 'bg-white border border-slate-300 text-slate-700 hover:bg-slate-100'
                  }`}
                  title={!isDormAvailable ? t('该校无宿舍') : ''}
                >
                  <BedDouble className="w-3.5 h-3.5" />
                  <span>{t('寄宿生')}</span>
                  {!isDormAvailable && <span className="text-[9px] block">({t('无宿')})</span>}
                </button>
              </div>
            </div>
          </div>

          {/* Time Horizon Selector */}
          <div className="flex items-center justify-between bg-white border border-slate-200 p-2 rounded-2xl">
            <span className="text-xs font-bold text-slate-600 pl-3">
              {t('规划周期：')}
            </span>
            <div className="flex space-x-1 sm:space-x-2">
              <button
                onClick={() => setTimeHorizon('year1')}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition ${
                  timeHorizon === 'year1'
                    ? 'bg-slate-900 text-white'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                {t('初一首年 (含注册制服)')}
              </button>
              <button
                onClick={() => setTimeHorizon('junior3')}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition ${
                  timeHorizon === 'junior3'
                    ? 'bg-slate-900 text-white'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                {t('初中三年总计 (J1 - J3)')}
              </button>
              <button
                onClick={() => setTimeHorizon('full6')}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition ${
                  timeHorizon === 'full6'
                    ? 'bg-slate-900 text-white'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                {t('完整初高中六年 (J1 - S3)')}
              </button>
            </div>
          </div>

          {/* Budget Grand Total Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Primary School Total Card */}
            <div className="p-5 rounded-3xl bg-gradient-to-br from-emerald-600 to-teal-800 text-white shadow-xl space-y-4 relative overflow-hidden">
              <div className="absolute right-0 top-0 translate-x-4 -translate-y-4 w-32 h-32 bg-white/10 rounded-full blur-xl pointer-events-none" />
              <div className="flex items-center justify-between border-b border-emerald-500/50 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-emerald-200 uppercase tracking-wider block">
                    {t(selectedSchool.location.state)} · {studentType === 'boarder' ? t('寄宿就读') : t('走读就读')}
                  </span>
                  <h4 className="text-xl font-black text-white mt-0.5">
                    {selectedSchool.name_zh}
                  </h4>
                </div>
                <span className="px-2.5 py-1 rounded-xl bg-white/20 text-white text-xs font-bold backdrop-blur-xs">
                  {timeHorizon === 'year1' ? t('首年总支出') : timeHorizon === 'junior3' ? t('初中 3 年预算') : t('初高中 6 年总预算')}
                </span>
              </div>

              <div>
                <span className="text-xs text-emerald-100 block">{t('预估总预算 (Estimated Total Budget)')}</span>
                <div className="flex items-baseline space-x-1 mt-1">
                  <span className="text-lg font-bold text-emerald-200">RM</span>
                  <span className="text-3xl sm:text-4xl font-black tracking-tight text-white">
                    {primaryBudget.activeTotal.toLocaleString()}
                  </span>
                </div>
                <div className="mt-2 text-xs text-emerald-200 flex items-center space-x-1.5 bg-black/15 p-2 rounded-xl">
                  <Wallet className="w-3.5 h-3.5 text-emerald-300 shrink-0" />
                  <span>
                    {t('平均在校月度支出：')} <strong>RM {primaryBudget.monthlyAverage.toLocaleString()}</strong> / {t('月 (按学年10个月计)')}
                  </span>
                </div>
              </div>

              {/* Sub-item quick breakdown */}
              <div className="grid grid-cols-3 gap-2 text-center text-xs pt-2 border-t border-emerald-500/40">
                <div className="bg-white/10 p-2 rounded-xl">
                  <span className="text-[10px] text-emerald-200 block">{t('年均学费')}</span>
                  <span className="font-bold text-white block mt-0.5">
                    RM {Math.round(primaryBudget.juniorTuitionAnnual).toLocaleString()}
                  </span>
                </div>
                <div className="bg-white/10 p-2 rounded-xl">
                  <span className="text-[10px] text-emerald-200 block">{studentType === 'boarder' ? t('年均宿费') : t('月校车费')}</span>
                  <span className="font-bold text-white block mt-0.5">
                    RM {studentType === 'boarder' ? primaryBudget.dormAnnual.toLocaleString() : transportMonthly}
                  </span>
                </div>
                <div className="bg-white/10 p-2 rounded-xl">
                  <span className="text-[10px] text-emerald-200 block">{t('首年杂费制服')}</span>
                  <span className="font-bold text-white block mt-0.5">
                    RM {(primaryBudget.regFee + primaryBudget.uniformAndBooksInitial).toLocaleString()}
                  </span>
                </div>
              </div>
            </div>

            {/* Compare School Card (if selected) or Quick Highlights */}
            {compareSchool && secondaryBudget ? (
              <div className="p-5 rounded-3xl bg-slate-900 text-white shadow-xl space-y-4 relative overflow-hidden">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                      {t(compareSchool.location.state)} · {secondaryBudget.isActuallyBoarder ? t('寄宿就读') : t('走读就读')}
                    </span>
                    <h4 className="text-xl font-black text-white mt-0.5">
                      {compareSchool.name_zh}
                    </h4>
                  </div>
                  <span className="px-2.5 py-1 rounded-xl bg-slate-800 text-slate-300 text-xs font-bold">
                    {t('对比校')}
                  </span>
                </div>

                <div>
                  <span className="text-xs text-slate-400 block">{t('预估总预算 (Estimated Total)')}</span>
                  <div className="flex items-baseline space-x-1 mt-1">
                    <span className="text-lg font-bold text-slate-400">RM</span>
                    <span className="text-3xl sm:text-4xl font-black tracking-tight text-white">
                      {secondaryBudget.activeTotal.toLocaleString()}
                    </span>
                  </div>
                  
                  {/* Difference comparison badge */}
                  <div className="mt-2 text-xs flex items-center justify-between bg-white/5 p-2 rounded-xl">
                    <span className="text-slate-300">
                      {t('平均每月：')} <strong>RM {secondaryBudget.monthlyAverage.toLocaleString()}</strong>
                    </span>
                    <span className={`px-2 py-0.5 rounded font-black text-[10px] ${
                      primaryBudget.activeTotal <= secondaryBudget.activeTotal
                        ? 'bg-emerald-500/20 text-emerald-400'
                        : 'bg-amber-500/20 text-amber-300'
                    }`}>
                      {primaryBudget.activeTotal <= secondaryBudget.activeTotal
                        ? `${selectedSchool.name_zh} 省 RM ${(secondaryBudget.activeTotal - primaryBudget.activeTotal).toLocaleString()}`
                        : `${selectedSchool.name_zh} 多 RM ${(primaryBudget.activeTotal - secondaryBudget.activeTotal).toLocaleString()}`}
                    </span>
                  </div>
                </div>

                {/* Sub-item quick breakdown */}
                <div className="grid grid-cols-3 gap-2 text-center text-xs pt-2 border-t border-slate-800">
                  <div className="bg-white/5 p-2 rounded-xl">
                    <span className="text-[10px] text-slate-400 block">{t('年均学费')}</span>
                    <span className="font-bold text-white block mt-0.5">
                      RM {Math.round(secondaryBudget.juniorTuitionAnnual).toLocaleString()}
                    </span>
                  </div>
                  <div className="bg-white/5 p-2 rounded-xl">
                    <span className="text-[10px] text-slate-400 block">{studentType === 'boarder' ? t('年均宿费') : t('月校车费')}</span>
                    <span className="font-bold text-white block mt-0.5">
                      RM {secondaryBudget.isActuallyBoarder ? secondaryBudget.dormAnnual.toLocaleString() : transportMonthly}
                    </span>
                  </div>
                  <div className="bg-white/5 p-2 rounded-xl">
                    <span className="text-[10px] text-slate-400 block">{t('首年杂费制服')}</span>
                    <span className="font-bold text-white block mt-0.5">
                      RM {(secondaryBudget.regFee + secondaryBudget.uniformAndBooksInitial).toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            ) : (
              /* Educational value summary when not comparing */
              <div className="p-5 rounded-3xl bg-slate-50 border border-slate-200 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-xs font-black text-slate-800">
                    <Sparkles className="w-4 h-4 text-amber-500" />
                    <span>{t('独中家庭教育投资性价比分析')}</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {t('相比私立国际学校每年动辄 RM 20,000 ~ 50,000 的学费，马来西亚独中属于非营利华社民办体制。每名学生的实际办学成本通常高出学费 30% 以上，差额由董总及各校董事会华社善款长期补贴。')}
                  </p>
                </div>

                <div className="p-3 bg-white rounded-2xl border border-slate-200 text-xs text-slate-700 space-y-1">
                  <div className="font-bold text-slate-900 flex items-center justify-between">
                    <span>{t('奖助学金与助学金政策')}</span>
                    <span className="text-emerald-700 text-[10px] bg-emerald-50 px-2 py-0.5 rounded">
                      {selectedSchool.admission_intake?.scholarship_quota ? t('优异生全免/半免') : t('设清寒助学金')}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500">
                    {t(selectedSchool.costs_and_fees.scholarship_info || '各独中董事会均设有品学兼优全免/半免学费奖学金，以及清寒子弟助学金与借书计划，确保华裔子弟不因家境贫寒而失学。')}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Interactive Sliders: Customizable Living Costs & Financial Aid */}
          <div className="p-5 rounded-3xl border border-slate-200 bg-white space-y-5">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center space-x-2 font-black text-slate-900 text-sm">
                <Sliders className="w-4 h-4 text-emerald-600" />
                <span>{t('自定义家庭个性化支出与奖学金调整')}</span>
              </div>
              <button
                onClick={() => {
                  setTransportMonthly(220);
                  setPocketMoneyMonthly(350);
                  setBoarderMealMonthly(650);
                  setCcaAnnual(400);
                  setHasScholarship(false);
                }}
                className="text-xs text-slate-500 hover:text-slate-800 flex items-center space-x-1"
              >
                <RefreshCw className="w-3 h-3" />
                <span>{t('重置默认值')}</span>
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
              
              {/* Transport slider (for day student) */}
              {studentType === 'day' ? (
                <div className="space-y-1.5 p-3 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="flex justify-between font-bold text-slate-800">
                    <span>{t('每月校车 / 交通津贴：')}</span>
                    <span className="text-emerald-700 font-black">RM {transportMonthly}</span>
                  </div>
                  <input
                    type="range"
                    min="50"
                    max="600"
                    step="10"
                    value={transportMonthly}
                    onChange={(e) => setTransportMonthly(Number(e.target.value))}
                    className="w-full accent-emerald-600 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400">
                    <span>RM 50 (近邻步行/自接)</span>
                    <span>RM 600 (跨区长途)</span>
                  </div>
                </div>
              ) : (
                /* Boarder meal plan slider */
                <div className="space-y-1.5 p-3 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="flex justify-between font-bold text-slate-800">
                    <span>{t('寄宿生全天三餐膳食费：')}</span>
                    <span className="text-emerald-700 font-black">RM {boarderMealMonthly}</span>
                  </div>
                  <input
                    type="range"
                    min="400"
                    max="1000"
                    step="20"
                    value={boarderMealMonthly}
                    onChange={(e) => setBoarderMealMonthly(Number(e.target.value))}
                    className="w-full accent-emerald-600 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400">
                    <span>RM 400 (食堂经济餐)</span>
                    <span>RM 1000 (充裕)</span>
                  </div>
                </div>
              )}

              {/* Day Pocket Money */}
              {studentType === 'day' && (
                <div className="space-y-1.5 p-3 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="flex justify-between font-bold text-slate-800">
                    <span>{t('走读生月度伙食零用钱：')}</span>
                    <span className="text-emerald-700 font-black">RM {pocketMoneyMonthly}</span>
                  </div>
                  <input
                    type="range"
                    min="150"
                    max="800"
                    step="20"
                    value={pocketMoneyMonthly}
                    onChange={(e) => setPocketMoneyMonthly(Number(e.target.value))}
                    className="w-full accent-emerald-600 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400">
                    <span>RM 150 (~RM7/天)</span>
                    <span>RM 800 (~RM35/天)</span>
                  </div>
                </div>
              )}

              {/* CCA and Clubs Annual */}
              <div className="space-y-1.5 p-3 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="flex justify-between font-bold text-slate-800">
                  <span>{t('社团课外活动 / 乐团专项费：')}</span>
                  <span className="text-emerald-700 font-black">RM {ccaAnnual} / {t('年')}</span>
                </div>
                <input
                  type="range"
                  min="100"
                  max="1500"
                  step="50"
                  value={ccaAnnual}
                  onChange={(e) => setCcaAnnual(Number(e.target.value))}
                  className="w-full accent-emerald-600 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-400">
                  <span>RM 100 (普通学会)</span>
                  <span>RM 1,500 (管弦乐/军乐/武术)</span>
                </div>
              </div>

              {/* Scholarship Toggle */}
              <div className="space-y-2 p-3 rounded-2xl bg-amber-50/70 border border-amber-200">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-amber-950">{t('获得学费奖学金减免')}</span>
                  <input
                    type="checkbox"
                    checked={hasScholarship}
                    onChange={(e) => setHasScholarship(e.target.checked)}
                    className="w-4 h-4 accent-amber-600 cursor-pointer rounded"
                  />
                </div>
                {hasScholarship ? (
                  <div className="space-y-1 pt-1">
                    <div className="flex justify-between text-[11px] text-amber-800">
                      <span>{t('学费减免比例：')}</span>
                      <strong>{scholarshipDeductionPercent}%</strong>
                    </div>
                    <div className="flex space-x-2">
                      <button
                        type="button"
                        onClick={() => setScholarshipDeductionPercent(50)}
                        className={`flex-1 py-1 rounded-lg text-[10px] font-bold ${
                          scholarshipDeductionPercent === 50 ? 'bg-amber-600 text-white' : 'bg-white text-slate-700 border border-slate-200'
                        }`}
                      >
                        {t('半免 (50%)')}
                      </button>
                      <button
                        type="button"
                        onClick={() => setScholarshipDeductionPercent(100)}
                        className={`flex-1 py-1 rounded-lg text-[10px] font-bold ${
                          scholarshipDeductionPercent === 100 ? 'bg-amber-600 text-white' : 'bg-white text-slate-700 border border-slate-200'
                        }`}
                      >
                        {t('全免 (100%)')}
                      </button>
                    </div>
                  </div>
                ) : (
                  <p className="text-[10px] text-amber-800">
                    {t('勾选后可测算考取新生前名次或免试保送生获得奖学金后的净预算')}
                  </p>
                )}
              </div>

            </div>
          </div>

          {/* Full Itemized Cost Breakdown Table */}
          <div className="p-5 rounded-3xl border border-slate-200 bg-white space-y-3">
            <h4 className="font-black text-slate-900 text-sm flex items-center space-x-2">
              <DollarSign className="w-4 h-4 text-emerald-600" />
              <span>{t('费用明细清单与收据结构 (Itemized Financial Structure)')}</span>
            </h4>

            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left">
                <thead>
                  <tr className="border-b border-slate-200 text-slate-400 font-bold">
                    <th className="py-2">{t('费用类别')}</th>
                    <th className="py-2">{t('计费频次')}</th>
                    <th className="py-2 text-right">{selectedSchool.name_zh}</th>
                    {compareSchool && <th className="py-2 text-right">{compareSchool.name_zh}</th>}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  <tr>
                    <td className="py-2.5 font-medium">{t('新生注册费与考试确认金')}</td>
                    <td className="py-2.5 text-slate-400">{t('首年一次性')}</td>
                    <td className="py-2.5 text-right font-bold text-slate-900">RM {primaryBudget.regFee}</td>
                    {compareSchool && secondaryBudget && <td className="py-2.5 text-right font-bold text-slate-900">RM {secondaryBudget.regFee}</td>}
                  </tr>
                  <tr>
                    <td className="py-2.5 font-medium">{t('全套校服、运动服与课本首期采购')}</td>
                    <td className="py-2.5 text-slate-400">{t('首年一次性')}</td>
                    <td className="py-2.5 text-right font-bold text-slate-900">RM {primaryBudget.uniformAndBooksInitial}</td>
                    {compareSchool && secondaryBudget && <td className="py-2.5 text-right font-bold text-slate-900">RM {secondaryBudget.uniformAndBooksInitial}</td>}
                  </tr>
                  <tr>
                    <td className="py-2.5 font-medium">{t('每年学费 (初中部)')}</td>
                    <td className="py-2.5 text-slate-400">{t('按年/分期缴纳')}</td>
                    <td className="py-2.5 text-right font-bold text-emerald-700">
                      RM {Math.round(primaryBudget.juniorTuitionAnnual * (hasScholarship ? (1 - scholarshipDeductionPercent / 100) : 1)).toLocaleString()}
                    </td>
                    {compareSchool && secondaryBudget && (
                      <td className="py-2.5 text-right font-bold text-emerald-700">
                        RM {Math.round(secondaryBudget.juniorTuitionAnnual * (hasScholarship ? (1 - scholarshipDeductionPercent / 100) : 1)).toLocaleString()}
                      </td>
                    )}
                  </tr>
                  <tr>
                    <td className="py-2.5 font-medium">{t('建校基金与综合发展费')}</td>
                    <td className="py-2.5 text-slate-400">{t('每年')}</td>
                    <td className="py-2.5 text-right font-bold text-slate-900">RM {primaryBudget.devFundAnnual}</td>
                    {compareSchool && secondaryBudget && <td className="py-2.5 text-right font-bold text-slate-900">RM {secondaryBudget.devFundAnnual}</td>}
                  </tr>
                  <tr>
                    <td className="py-2.5 font-medium">{t('电脑班、实验与冷气杂费')}</td>
                    <td className="py-2.5 text-slate-400">{t('每年')}</td>
                    <td className="py-2.5 text-right font-bold text-slate-900">RM {primaryBudget.miscFeeAnnual}</td>
                    {compareSchool && secondaryBudget && <td className="py-2.5 text-right font-bold text-slate-900">RM {secondaryBudget.miscFeeAnnual}</td>}
                  </tr>
                  {studentType === 'boarder' && primaryBudget.isActuallyBoarder && (
                    <tr className="bg-amber-50/50">
                      <td className="py-2.5 font-bold text-amber-900">{t('学生宿舍住宿费 (含水电/晚自习管理)')}</td>
                      <td className="py-2.5 text-amber-800">{t('每年 (10个月)')}</td>
                      <td className="py-2.5 text-right font-bold text-amber-900">RM {primaryBudget.dormAnnual.toLocaleString()}</td>
                      {compareSchool && secondaryBudget && (
                        <td className="py-2.5 text-right font-bold text-amber-900">
                          {secondaryBudget.isActuallyBoarder ? `RM ${secondaryBudget.dormAnnual.toLocaleString()}` : t('无宿舍')}
                        </td>
                      )}
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-slate-100 bg-slate-50 flex items-center justify-between shrink-0">
          <div className="flex items-center space-x-2">
            {onSelectSchoolDetail && (
              <button
                onClick={() => {
                  onClose();
                  onSelectSchoolDetail(selectedSchool);
                }}
                className="text-xs font-bold text-emerald-800 hover:text-emerald-950 flex items-center space-x-1"
              >
                <span>{t('查看该校完整招生档案')}</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 transition"
          >
            {t('完成测算')}
          </button>
        </div>

      </div>
    </div>
  );
}
