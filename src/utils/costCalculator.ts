import { School } from '../types/school';

export interface BudgetOptions {
  isBoarder: boolean;
  timeHorizon?: 'year1' | 'junior3' | 'full6';
  transportMonthly?: number; // 校车/交通 (default 220 for day students)
  pocketMoneyMonthly?: number; // 伙食零用 (default 350 for day students)
  boarderMealMonthly?: number; // 寄宿生全天三餐 (default 650 for boarders)
  ccaAnnual?: number; // 课外活动与社团 (default 400)
  hasScholarship?: boolean;
  scholarshipDeductionPercent?: number; // 50 or 100
}

export interface BudgetResult {
  regFee: number;
  uniformAndBooksInitial: number;
  devFundAnnual: number;
  miscFeeAnnual: number;
  juniorTuitionAnnual: number;
  seniorTuitionAnnual: number;
  dormAnnual: number;
  boarderMealsAnnual: number;
  dayTransportAnnual: number;
  dayMealsAnnual: number;
  
  // Period Totals
  year1Total: number;
  junior3Total: number;
  senior3Total: number;
  full6Total: number;

  // Active Horizon selection (for modal / customizable views)
  activeTotal: number;
  monthlyAverage: number;

  // Averages
  yearlyAverageJunior: number;
  yearlyAverageSenior: number;
  monthlyAverageJunior: number;
  monthlyAverageSenior: number;
  
  isActuallyBoarder: boolean;
}

/**
 * Standard realistic Malaysian Chinese Independent High School budget calculation.
 * Covers 10 school months per academic year.
 */
export function calculateSchoolBudget(school: School, options: BudgetOptions): BudgetResult {
  const isActuallyBoarder = options.isBoarder && school.dormitory_and_boarding.has_dormitory;

  const transportMonthly = options.transportMonthly ?? 220;
  const pocketMoneyMonthly = options.pocketMoneyMonthly ?? 350;
  const boarderMealMonthly = options.boarderMealMonthly ?? 650;
  const ccaAnnual = options.ccaAnnual ?? 400;
  const hasScholarship = options.hasScholarship ?? false;
  const scholarshipDeductionPercent = options.scholarshipDeductionPercent ?? 50;
  const timeHorizon = options.timeHorizon ?? 'junior3';

  const regFee = school.costs_and_fees.registration_fee || 350;
  const uniformAndBooksInitial = 800; // 初一首年校服、校徽、书本、基础配件
  const devFundAnnual = school.costs_and_fees.development_fund_annual || 250;
  const miscFeeAnnual = school.costs_and_fees.misc_fee_annual || 300;

  const juniorTuitionAnnual = school.costs_and_fees.tuition_junior_yearly || 4500;
  const seniorTuitionAnnual = school.costs_and_fees.tuition_senior_yearly || Math.round(juniorTuitionAnnual * 1.15);

  const dormMonthly = school.dormitory_and_boarding.dorm_fee_monthly || 450;
  const dormAnnual = isActuallyBoarder ? (dormMonthly * 10) : 0; // 10 school months
  const boarderMealsAnnual = isActuallyBoarder ? (boarderMealMonthly * 10) : 0;

  const dayTransportAnnual = !isActuallyBoarder ? (transportMonthly * 10) : 0;
  const dayMealsAnnual = !isActuallyBoarder ? (pocketMoneyMonthly * 10) : 0;

  // Scholarship discount factor applied to tuition
  const discountMultiplier = hasScholarship ? (1 - scholarshipDeductionPercent / 100) : 1;

  // Year 1 (初一首年)
  const year1Tuition = juniorTuitionAnnual * discountMultiplier;
  const year1Living = isActuallyBoarder 
    ? (dormAnnual + boarderMealsAnnual)
    : (dayTransportAnnual + dayMealsAnnual);
  const year1Total = regFee + uniformAndBooksInitial + devFundAnnual + miscFeeAnnual + year1Tuition + year1Living + ccaAnnual;

  // Junior 3 Years (初中三年总计)
  let junior3Total = 0;
  for (let yr = 1; yr <= 3; yr++) {
    const isYr1 = yr === 1;
    const initialOneOff = isYr1 ? (regFee + uniformAndBooksInitial) : 250; // Year 2/3 textbook renewal
    const tuition = juniorTuitionAnnual * discountMultiplier;
    const living = isActuallyBoarder
      ? (dormAnnual + boarderMealsAnnual)
      : (dayTransportAnnual + dayMealsAnnual);
    junior3Total += (initialOneOff + devFundAnnual + miscFeeAnnual + tuition + living + ccaAnnual);
  }

  // Senior 3 Years (高中三年总计)
  let senior3Total = 0;
  for (let yr = 4; yr <= 6; yr++) {
    const bookRenewal = 350; // Senior stage textbook renewal
    const tuition = seniorTuitionAnnual * discountMultiplier;
    const living = isActuallyBoarder
      ? (dormAnnual + boarderMealsAnnual)
      : (dayTransportAnnual + dayMealsAnnual);
    senior3Total += (bookRenewal + devFundAnnual + miscFeeAnnual + tuition + living + ccaAnnual);
  }

  const full6Total = junior3Total + senior3Total;
  const yearlyAverageJunior = Math.round(junior3Total / 3);
  const yearlyAverageSenior = Math.round(senior3Total / 3);
  const monthlyAverageJunior = Math.round(junior3Total / 30); // 30 academic months across 3 years
  const monthlyAverageSenior = Math.round(senior3Total / 30);

  // Active Horizon selection
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
    boarderMealsAnnual,
    dayTransportAnnual,
    dayMealsAnnual,
    year1Total,
    junior3Total,
    senior3Total,
    full6Total,
    activeTotal,
    monthlyAverage,
    yearlyAverageJunior,
    yearlyAverageSenior,
    monthlyAverageJunior,
    monthlyAverageSenior,
    isActuallyBoarder
  };
}
