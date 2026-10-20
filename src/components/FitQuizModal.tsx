'use client';

import React, { useState } from 'react';
import { School } from '../types/school';
import { ALL_SCHOOLS } from '../data/schoolsData';
import { useLanguage } from '../contexts/LanguageContext';
import { Sparkles, Check, ArrowRight, RotateCcw, X, Building2, Award } from 'lucide-react';

interface FitQuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectSchoolForDetail: (school: School) => void;
  onAddToCompare: (school: School) => void;
}

interface Answers {
  region: string;
  boarding: string;
  track: string;
  budget: string;
  character: string;
}

export default function FitQuizModal({
  isOpen,
  onClose,
  onSelectSchoolForDetail,
  onAddToCompare,
}: FitQuizModalProps) {
  const { t } = useLanguage();
  const [currentStep, setCurrentStep] = useState(1);
  const [answers, setAnswers] = useState<Answers>({
    region: 'any',
    boarding: 'any',
    track: 'any',
    budget: 'any',
    character: 'academic',
  });
  const [isCalculated, setIsCalculated] = useState(false);

  if (!isOpen) return null;

  const totalSteps = 5;

  const handleOptionSelect = (field: keyof Answers, value: string) => {
    setAnswers(prev => ({ ...prev, [field]: value }));
    if (currentStep < totalSteps) {
      setCurrentStep(prev => prev + 1);
    } else {
      setIsCalculated(true);
    }
  };

  const resetQuiz = () => {
    setCurrentStep(1);
    setIsCalculated(false);
    setAnswers({
      region: 'any',
      boarding: 'any',
      track: 'any',
      budget: 'any',
      character: 'academic',
    });
  };

  // Matching algorithm based on answers
  const scoredSchools = ALL_SCHOOLS.map(school => {
    let score = 50; // base score
    let reasons: string[] = [];

    // 1. Region
    if (answers.region === 'kl_selangor') {
      if (school.location.state === '吉隆坡' || school.location.state === '雪兰莪') {
        score += 25;
        reasons.push('符合雪隆黄金教育圈定位');
      } else if (school.location.state === '森美兰' && school.dormitory_and_boarding.has_dormitory) {
        score += 15;
        reasons.push('邻近雪隆外溢寄宿名校');
      }
    } else if (answers.region === 'johor') {
      if (school.location.state === '柔佛') {
        score += 25;
        reasons.push('柔佛本土优质学府');
      }
    } else if (answers.region === 'north') {
      if (['槟城', '霹雳', '吉打'].includes(school.location.state)) {
        score += 25;
        reasons.push('北马重镇学府');
      }
    } else if (answers.region === 'east_msia') {
      if (['沙巴', '砂拉越'].includes(school.location.state)) {
        score += 25;
        reasons.push('东马本土重点华校');
      }
    } else {
      score += 15;
    }

    // 2. Boarding
    if (answers.boarding === 'need_dorm') {
      if (school.dormitory_and_boarding.has_dormitory) {
        score += 25;
        reasons.push('设有成熟学生宿舍与晚自习');
      } else {
        score -= 40;
      }
    } else if (answers.boarding === 'day_only') {
      if (!school.dormitory_and_boarding.has_dormitory) {
        score += 20;
        reasons.push('纯走读优质名校');
      } else {
        score += 10;
      }
    } else {
      score += 15;
    }

    // 3. Track
    if (answers.track === 'dual') {
      if (school.academics.track_type.includes('双轨')) {
        score += 20;
        reasons.push('双轨并重，兼顾统考与SPM');
      }
    } else if (answers.track === 'single') {
      if (school.academics.track_type.includes('单轨')) {
        score += 25;
        reasons.push('传统纯统考(UEC)学术深厚');
      }
    } else if (answers.track === 'triple') {
      if (school.academics.track_type.includes('三轨') || school.academics.track_type.includes('自选')) {
        score += 25;
        reasons.push('多元多轨课程设置');
      }
    }

    // 4. Budget
    const dayCost = school.costs_and_fees.first_year_est_day_student;
    if (answers.budget === 'low') {
      if (dayCost <= 4500) {
        score += 20;
        reasons.push('学杂费亲民实惠');
      }
    } else if (answers.budget === 'medium') {
      if (dayCost > 4500 && dayCost <= 6500) {
        score += 20;
        reasons.push('中档性价比极佳');
      }
    } else if (answers.budget === 'high') {
      if (dayCost > 6500) {
        score += 20;
        reasons.push('顶尖现代化设施高标准投入');
      }
    }

    // 5. Character
    if (answers.character === 'academic') {
      if (school.fit_tags.some(t => t.includes('学术') || t.includes('数理') || t.includes('顶尖'))) {
        score += 20;
        reasons.push('数理与学术竞赛氛围浓厚');
      }
    } else if (answers.character === 'discipline') {
      if (school.fit_tags.some(t => t.includes('严谨') || t.includes('纪律') || t.includes('自律'))) {
        score += 20;
        reasons.push('校风严谨、注重品行与自律养成');
      }
    } else if (answers.character === 'holistic') {
      if (school.fit_tags.some(t => t.includes('全人') || t.includes('艺术') || t.includes('关怀') || t.includes('小班'))) {
        score += 20;
        reasons.push('重视全人教育、艺术与个性关怀');
      }
    } else if (answers.character === 'vocational') {
      if (school.academics.senior_tracks.some(t => t.includes('技职') || t.includes('餐饮') || t.includes('美术') || t.includes('电机'))) {
        score += 25;
        reasons.push('开办丰富多元的技职专业科系');
      }
    }

    return {
      school,
      score: Math.min(score, 99),
      reasons: reasons.slice(0, 3)
    };
  }).sort((a, b) => b.score - a.score).slice(0, 4);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 p-2 rounded-full hover:bg-slate-100"
        >
          <X className="w-5 h-5" />
        </button>

        {!isCalculated ? (
          <div>
            <div className="flex items-center space-x-2 text-amber-600 mb-2">
              <Sparkles className="w-5 h-5" />
              <span className="text-xs font-bold uppercase tracking-wider">适合度智能测评</span>
            </div>
            <h3 className="text-2xl font-black text-slate-900">
              为孩子寻找最适合的独中
            </h3>
            <p className="text-slate-500 text-xs mt-1">
              只需 5 道题，基于办学特色、寄宿需求、预算与性格多维契合度，拒绝单一粗暴排名。
            </p>

            {/* Progress Bar */}
            <div className="mt-6 flex items-center space-x-2">
              <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-amber-600 transition-all duration-300"
                  style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                ></div>
              </div>
              <span className="text-xs font-semibold text-slate-400">
                {currentStep} / {totalSteps}
              </span>
            </div>

            {/* Step Questions */}
            <div className="mt-8 space-y-4">
              {currentStep === 1 && (
                <div>
                  <h4 className="text-base font-bold text-slate-900 mb-3">
                    1. 目标求学区域偏好？
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { id: 'kl_selangor', label: '雪隆黄金区 (吉隆坡/雪兰莪)', desc: '名校集聚、竞争浓厚' },
                      { id: 'johor', label: '柔佛州 (新山/居銮/麻坡等)', desc: '独中大省、学村规模庞大' },
                      { id: 'north', label: '北马区 (槟城/霹雳/吉打)', desc: '传统深厚、数理与寄宿强项' },
                      { id: 'east_msia', label: '东马区 (沙巴/砂拉越)', desc: '政府支持承认、本土资源丰富' },
                      { id: 'any', label: '不限区域 (以外州寄宿为主)', desc: '全马筛选最适合的寄宿学校' },
                    ].map(opt => (
                      <button
                        key={opt.id}
                        onClick={() => handleOptionSelect('region', opt.id)}
                        className={`p-4 rounded-2xl border text-left transition hover:border-amber-500 hover:bg-amber-50/50 ${
                          answers.region === opt.id ? 'border-amber-600 bg-amber-50' : 'border-slate-200'
                        }`}
                      >
                        <div className="font-bold text-sm text-slate-900">{opt.label}</div>
                        <div className="text-xs text-slate-500 mt-1">{opt.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {currentStep === 2 && (
                <div>
                  <h4 className="text-base font-bold text-slate-900 mb-3">
                    2. 孩子是否需要寄宿（住校）？
                  </h4>
                  <div className="grid grid-cols-1 gap-3">
                    {[
                      { id: 'need_dorm', label: '必须有学生宿舍 (外州/远距离家庭)', desc: '需要健全的宿管体系、晚自习督导及安全照料' },
                      { id: 'day_only', label: '主要考虑走读校 (每日家长或校车接送)', desc: '就近入学，不考虑寄宿' },
                      { id: 'any', label: '都可以，视学校综合实力而定', desc: '走读与寄宿皆可接受' },
                    ].map(opt => (
                      <button
                        key={opt.id}
                        onClick={() => handleOptionSelect('boarding', opt.id)}
                        className="p-4 rounded-2xl border border-slate-200 text-left transition hover:border-amber-500 hover:bg-amber-50/50"
                      >
                        <div className="font-bold text-sm text-slate-900">{opt.label}</div>
                        <div className="text-xs text-slate-500 mt-1">{opt.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {currentStep === 3 && (
                <div>
                  <h4 className="text-base font-bold text-slate-900 mb-3">
                    3. 对学制与考试轨道的期望？
                  </h4>
                  <div className="grid grid-cols-1 gap-3">
                    {[
                      { id: 'dual', label: '双轨并重 (UEC统考 + SPM政府考试)', desc: '绝大多数独中体制，进可攻海外名校，退可衔接本地国立/私立' },
                      { id: 'single', label: '纯单轨 (专注董总 UEC 统考体系)', desc: '如新山宽柔等校，不分散精力，统考学术底子扎实' },
                      { id: 'triple', label: '三轨 / 国际多元轨 (兼顾 IGCSE 剑桥)', desc: '如培南、韩江、廉律等，兼顾欧美直接升学' },
                      { id: 'any', label: '无特定偏好，看重孩子实际学业适应', desc: '遵从校方安排与分流' },
                    ].map(opt => (
                      <button
                        key={opt.id}
                        onClick={() => handleOptionSelect('track', opt.id)}
                        className="p-4 rounded-2xl border border-slate-200 text-left transition hover:border-amber-500 hover:bg-amber-50/50"
                      >
                        <div className="font-bold text-sm text-slate-900">{opt.label}</div>
                        <div className="text-xs text-slate-500 mt-1">{opt.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {currentStep === 4 && (
                <div>
                  <h4 className="text-base font-bold text-slate-900 mb-3">
                    4. 初中首年学杂费心理预算区间？
                  </h4>
                  <div className="grid grid-cols-1 gap-3">
                    {[
                      { id: 'low', label: '平价亲民型 (RM 3,000 - RM 4,500 / 年)', desc: '经济无压力，偏向二三线城镇与东马关怀独中' },
                      { id: 'medium', label: '适中主流型 (RM 4,500 - RM 6,500 / 年)', desc: '全马主流独中水平，软硬件设施均衡' },
                      { id: 'high', label: '高标准投入 (RM 6,500 以上 / 年)', desc: '雪隆核心大校、高星级冷气校舍及现代科技设施' },
                      { id: 'any', label: '预算宽裕，最看重学校综合素质', desc: '费用不是主要制约因素' },
                    ].map(opt => (
                      <button
                        key={opt.id}
                        onClick={() => handleOptionSelect('budget', opt.id)}
                        className="p-4 rounded-2xl border border-slate-200 text-left transition hover:border-amber-500 hover:bg-amber-50/50"
                      >
                        <div className="font-bold text-sm text-slate-900">{opt.label}</div>
                        <div className="text-xs text-slate-500 mt-1">{opt.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {currentStep === 5 && (
                <div>
                  <h4 className="text-base font-bold text-slate-900 mb-3">
                    5. 您更看重学校哪项核心校风？
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { id: 'academic', label: '学术数理拔尖', desc: '适合自律性强、喜好竞赛、目标清北港星顶大' },
                      { id: 'discipline', label: '纪律严格守正', desc: '严格手机管制、规范作息、适合需督促的孩子' },
                      { id: 'holistic', label: '全人教育与艺术', desc: '师生关怀度高、联课活动丰富、激发创造力' },
                      { id: 'vocational', label: '多元技职科系', desc: '开办美工、餐饮、电工、商科等实用技能' },
                    ].map(opt => (
                      <button
                        key={opt.id}
                        onClick={() => handleOptionSelect('character', opt.id)}
                        className="p-4 rounded-2xl border border-slate-200 text-left transition hover:border-amber-500 hover:bg-amber-50/50"
                      >
                        <div className="font-bold text-sm text-slate-900">{opt.label}</div>
                        <div className="text-xs text-slate-500 mt-1">{opt.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div>
            <div className="text-center mb-6">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-2">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-black text-slate-900">{t('为您定制的契合度推荐')}</h3>
              <p className="text-slate-500 text-xs mt-1">
                {t('基于您的 5 项偏好综合匹配，呈现最符合孩子潜能与家庭规划的独中：')}
              </p>
            </div>

            <div className="space-y-4">
              {scoredSchools.map((item, idx) => (
                <div
                  key={item.school.school_id}
                  className="p-4 rounded-2xl border border-slate-200 bg-white shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 hover:border-amber-400 transition"
                >
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <span className="w-5 h-5 rounded-full bg-amber-600 text-white font-bold text-xs flex items-center justify-center">
                        {idx + 1}
                      </span>
                      <h4 className="font-bold text-base text-slate-900">{t(item.school.name_zh)}</h4>
                      <span className="text-xs text-slate-500">({t(item.school.location.state)})</span>
                    </div>

                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {item.reasons.map((r, i) => (
                        <span key={i} className="text-[11px] px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-800 font-medium border border-emerald-100 flex items-center space-x-1">
                          <Check className="w-3 h-3 text-emerald-600 inline" />
                          <span>{t(r)}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 w-full sm:w-auto justify-end pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-100">
                    <div className="text-right mr-2 hidden sm:block">
                      <div className="text-xs text-slate-400">{t('契合度')}</div>
                      <div className="text-lg font-black text-amber-600">{item.score}%</div>
                    </div>
                    <button
                      onClick={() => onAddToCompare(item.school)}
                      className="px-3 py-1.5 text-xs font-semibold rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 transition"
                    >
                      + {t('加入对比')}
                    </button>
                    <button
                      onClick={() => {
                        onClose();
                        onSelectSchoolForDetail(item.school);
                      }}
                      className="px-3.5 py-1.5 text-xs font-semibold rounded-xl bg-slate-900 text-white hover:bg-slate-800 transition"
                    >
                      {t('查看档案')}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex justify-between items-center">
              <button
                onClick={resetQuiz}
                className="text-xs font-medium text-slate-500 hover:text-slate-800 flex items-center space-x-1"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>{t('重新测试')}</span>
              </button>
              <button
                onClick={onClose}
                className="px-5 py-2 rounded-xl bg-amber-600 text-white font-semibold text-xs hover:bg-amber-700 transition"
              >
                完成浏览
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
