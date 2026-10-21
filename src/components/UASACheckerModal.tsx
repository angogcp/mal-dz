'use client';

import React, { useState, useMemo } from 'react';
import { School } from '../types/school';
import { useLanguage } from '../contexts/LanguageContext';
import { 
  X, CheckCircle2, AlertCircle, Award, Sparkles, 
  ChevronRight, ArrowRight, Check, RotateCcw, Filter,
  Building2, GraduationCap, ShieldCheck, HelpCircle
} from 'lucide-react';

interface UASACheckerModalProps {
  isOpen: boolean;
  onClose: () => void;
  schools: School[];
  onSelectSchool: (school: School) => void;
  onAddToCompare: (school: School) => void;
}

export default function UASACheckerModal({
  isOpen,
  onClose,
  schools,
  onSelectSchool,
  onAddToCompare,
}: UASACheckerModalProps) {
  const { t, lang } = useLanguage();

  // Mode: TP rating (standard UASA) vs Percentage Marks
  const [inputMode, setInputMode] = useState<'tp' | 'marks'>('tp');

  // TP Ratings (1-6)
  const [tpScores, setTpScores] = useState({
    bc: 5, // 华文
    bm: 5, // 国文
    bi: 5, // 英文
    math: 5, // 数学
    science: 5, // 科学
  });

  // Marks Percentage (0-100)
  const [averageMark, setAverageMark] = useState(82);

  // Conduct grade (操行)
  const [conduct, setConduct] = useState<'A' | 'B' | 'C'>('A');

  // Talents / Honors
  const [isTopStudent, setIsTopStudent] = useState(false); // 全级排名前5名
  const [hasStateSports, setHasStateSports] = useState(false); // 州手/全国学联赛代表
  const [hasOlympiad, setHasOlympiad] = useState(false); // 奥数/数理创客奖牌

  // State filter for results
  const [filterState, setFilterState] = useState('全部');

  if (!isOpen) return null;

  // Calculate total TP & estimated percentage
  const totalTP = tpScores.bc + tpScores.bm + tpScores.bi + tpScores.math + tpScores.science;
  
  // Convert TP to estimated marks: TP6=92, TP5=80, TP4=68, TP3=55
  const estimatedMarks = inputMode === 'marks' 
    ? averageMark 
    : Math.round((tpScores.bc * 16 + tpScores.bm * 16 + tpScores.bi * 16 + tpScores.math * 16 + tpScores.science * 16) / 5) + 4;

  const states = ['全部', '柔佛', '吉隆坡', '雪兰莪', '森美兰', '马六甲', '霹雳', '槟城', '吉打', '吉兰丹', '彭亨', '沙巴', '砂拉越'];

  // Categorize schools based on realistic rules
  const { directAdmission, talentOrRec, examOnly } = useMemo(() => {
    const direct: { school: School; matchReason: string }[] = [];
    const talent: { school: School; matchReason: string }[] = [];
    const exam: { school: School; matchReason: string }[] = [];

    schools.forEach((sch) => {
      const id = sch.school_id;
      const conductOk = conduct === 'A' || conduct === 'B';

      // 1. Schools that NEVER offer open direct admission without exam (宽柔三校, 日新)
      if (['foonyew-jb', 'foonyew-kulai', 'foonyew-bsa'].includes(id)) {
        if (isTopStudent) {
          talent.push({
            school: sch,
            matchReason: '直属华小全级第一名或品学兼优模范生荣誉保送名额（仍须参加入学考编班）',
          });
        } else {
          exam.push({
            school: sch,
            matchReason: '宽柔三校章程统一规定：全员必须参加9月19日甄拔考，按四科总分择优录取',
          });
        }
        return;
      }

      if (id === 'jitsin-bm') {
        if (isTopStudent || hasOlympiad) {
          talent.push({
            school: sch,
            matchReason: '威中友好华小校长保送推荐/特长生审核，享有分流加分优势（全员须参加统一入学试）',
          });
        } else {
          exam.push({
            school: sch,
            matchReason: '全员参加入学考（必考四科+选考科学/美术），依总分竞录',
          });
        }
        return;
      }

      // 2. Specific Direct Admission Thresholds
      // 吉隆坡中华: TP >= 23 or Marks >= 80 (400/500) and Conduct >= B
      if (id === 'chonghwa-kl') {
        if (conductOk && (totalTP >= 23 || estimatedMarks >= 80)) {
          direct.push({
            school: sch,
            matchReason: `达标免试直录：UASA 5科TP达到 ${totalTP}分 (标准≥23分) / 平均分 ${estimatedMarks}分 (标准≥80分)，操行${conduct}等合格！`,
          });
        } else if (isTopStudent || hasOlympiad) {
          talent.push({
            school: sch,
            matchReason: '华小学校长保送名额 / 数理奥林匹克州代表特别直录通道',
          });
        } else {
          exam.push({
            school: sch,
            matchReason: '未达保送免试门槛，可通过10月3日报考生入学考试竞争录取',
          });
        }
        return;
      }

      // 坤成中学: 平均 >= 85分，主科TP5以上
      if (id === 'kuencheng-kl') {
        if (conductOk && estimatedMarks >= 85 && tpScores.bc >= 5 && tpScores.bi >= 5 && tpScores.math >= 5) {
          direct.push({
            school: sch,
            matchReason: `达标免试保送：校考总平均 ${estimatedMarks}分 (门槛≥85分)，语数外核心主科皆达优等！`,
          });
        } else if (isTopStudent || hasOlympiad) {
          talent.push({
            school: sch,
            matchReason: '原校校长特别保送推荐生 / 创客奥数优异生优先审核通道',
          });
        } else {
          exam.push({
            school: sch,
            matchReason: '可参加9月26日全员入学甄拔联考，择优录取前列考生',
          });
        }
        return;
      }

      // 芙蓉中华: TP >= 23 或 六年级总平均 >= 70分，或森篮总/州队代表 (TP>=18)
      if (id === 'chunghua-seremban') {
        if (conductOk && (totalTP >= 23 || estimatedMarks >= 70)) {
          direct.push({
            school: sch,
            matchReason: `优先注册直录：五科TP总和 ${totalTP}分 (门槛≥23分) 或总平均 ${estimatedMarks}分 (门槛≥70分)，可直接免试办理注册！`,
          });
        } else if (hasStateSports && totalTP >= 18) {
          direct.push({
            school: sch,
            matchReason: '体育优异保送直录：具备州队学联赛代表资格，且5科TP达到18分以上！',
          });
        } else {
          exam.push({
            school: sch,
            matchReason: '可参加10月18日芙中新生入学考（芙中本部及雪隆分考场），依考分常态编班',
          });
        }
        return;
      }

      // 巴生滨华: TP >= 23 直接免试直录
      if (id === 'pinhua-klang') {
        if (conductOk && (totalTP >= 23 || estimatedMarks >= 78)) {
          direct.push({
            school: sch,
            matchReason: `免试直录合格：小学五/六年级五科TP达到 ${totalTP}分 (门槛≥23分)，直接免试办理注册并参加10月编班考！`,
          });
        } else if (isTopStudent) {
          talent.push({
            school: sch,
            matchReason: '华小学校长保送领导力杰出模范生优先配额通道',
          });
        } else {
          exam.push({
            school: sch,
            matchReason: '参加8月下旬统一入学测试，依笔试成绩择优录取',
          });
        }
        return;
      }

      // 巴生兴华: TP 高分免试直录 (TP >= 24 或 成绩优异)，或田径球类州代表
      if (id === 'hinhua-klang') {
        if (conductOk && (totalTP >= 24 || estimatedMarks >= 80)) {
          direct.push({
            school: sch,
            matchReason: `学业优异免试保送：五科TP总和 ${totalTP}分 / 平均估分 ${estimatedMarks}分，符合直接保送标准！`,
          });
        } else if (hasStateSports) {
          direct.push({
            school: sch,
            matchReason: '特长保送直录：具备州手及以上运动荣誉，学业成绩达及格线！',
          });
        } else {
          exam.push({
            school: sch,
            matchReason: '参加9月12日五科入学考试，竞逐初一正取与优异新生学杂费奖学金',
          });
        }
        return;
      }

      // 尊孔独中: TP >= 23 或 平均 >= 75分免试；若成绩较弱可考虑四年制特辅班
      if (id === 'confucian-kl') {
        if (conductOk && (totalTP >= 23 || estimatedMarks >= 75)) {
          direct.push({
            school: sch,
            matchReason: `保送免试直录：五科TP总和 ${totalTP}分 (门槛≥23分)，操行${conduct}等，直接保送免试录取！`,
          });
        } else if (hasStateSports && totalTP >= 18) {
          direct.push({
            school: sch,
            matchReason: '体育特长保送：州代表且五科TP达18分以上保送直接录取',
          });
        } else if (totalTP <= 18 || estimatedMarks < 65) {
          talent.push({
            school: sch,
            matchReason: '【尊孔特色特辅班】：专为学术基础相对薄弱者设立四年制初中课程，精细化因材施教',
          });
        } else {
          exam.push({
            school: sch,
            matchReason: '参加10月10日入学考（华国英数科五科），按考分编入普通班',
          });
        }
        return;
      }

      // 循人中学: 策略联盟华小保送优先
      if (id === 'tsunjin-kl') {
        if (isTopStudent && conductOk) {
          talent.push({
            school: sch,
            matchReason: '策略联盟华小学校长保送通道（符合学保资格可免试直接入学）',
          });
        } else {
          exam.push({
            school: sch,
            matchReason: '纯走读名校，全员参加10月4日五科闭卷入学考，依考分正取录取与编班',
          });
        }
        return;
      }

      // 钟灵独中 / 培风 / 居銮 / 廉律 / 崇正 / 一中 等北马/南马/东马名校
      if (['chungling-penang', 'payfong-melaka', 'chonghwa-kluang', 'riam-miri', 'tshungtsin-kk', 'chms1-kuching', 'chsbp-batupahat'].includes(id)) {
        if (conductOk && (estimatedMarks >= 78 || totalTP >= 23 || hasOlympiad)) {
          direct.push({
            school: sch,
            matchReason: `免试保送符合：在校总成绩估分 ${estimatedMarks}分 (校定门槛≥75-80分)${hasOlympiad ? ' / 数理竞赛特长优免' : ''}，可申请免试直录！`,
          });
        } else if (isTopStudent) {
          talent.push({
            school: sch,
            matchReason: '华小学校长保送名额 / 领养华小优秀毕业生直接保送',
          });
        } else {
          exam.push({
            school: sch,
            matchReason: '可通过参加入学甄拔考试按考分竞录，并争取初中三年优异新生奖学金',
          });
        }
        return;
      }

      // General default for other schools (majority allow direct admission with reasonable passes or principal recommendation)
      if (conductOk && (totalTP >= 20 || estimatedMarks >= 70)) {
        direct.push({
          school: sch,
          matchReason: `成绩达标直接录取：在校成绩良好 (${estimatedMarks}分)，备有外区寄宿生提前预审绿色直录通道`,
        });
      } else if (isTopStudent || hasStateSports || hasOlympiad) {
        talent.push({
          school: sch,
          matchReason: '校长具函保送推荐信 / 才艺特长保送直接录取',
        });
      } else {
        exam.push({
          school: sch,
          matchReason: '建议参加入学测试或凭小六毕业证申请面试录取',
        });
      }
    });

    return { directAdmission: direct, talentOrRec: talent, examOnly: exam };
  }, [schools, totalTP, estimatedMarks, conduct, isTopStudent, hasStateSports, hasOlympiad, tpScores]);

  // Apply State Filter to result lists
  const filterByState = (list: { school: School; matchReason: string }[]) => {
    if (filterState === '全部' || filterState === t('全部')) return list;
    return list.filter(item => item.school.location.state === filterState);
  };

  const filteredDirect = filterByState(directAdmission);
  const filteredTalent = filterByState(talentOrRec);
  const filteredExam = filterByState(examOnly);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/70 backdrop-blur-md animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-hidden flex flex-col shadow-2xl relative border border-slate-200">
        
        {/* Modal Header */}
        <div className="p-5 sm:p-6 bg-gradient-to-r from-red-800 via-red-700 to-amber-700 text-white flex items-center justify-between shrink-0">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-amber-300">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h3 className="text-lg sm:text-xl font-bold tracking-tight">
                  {t('小五/小六 UASA 成绩保送与免试直录自测')}
                </h3>
                <span className="hidden sm:inline-block px-2 py-0.5 rounded-full bg-amber-400 text-slate-900 text-[10px] font-black uppercase">
                  2026 最新标竿
                </span>
              </div>
              <p className="text-xs text-red-100 mt-0.5">
                {t('输入孩子的各科 TP 等级或校考总分，一键匹配全马 63 所独中保送与考试政策')}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-white/80 hover:text-white p-2 rounded-full hover:bg-white/10 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body: Two column layout on desktop */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 bg-slate-50/50">
          
          {/* Left Column: Input Form (4 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              
              {/* Input Mode Selector */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <span className="text-xs font-bold text-slate-700">{t('成绩评估方式：')}</span>
                <div className="inline-flex rounded-lg bg-slate-100 p-0.5 text-xs font-semibold">
                  <button
                    onClick={() => setInputMode('tp')}
                    className={`px-3 py-1 rounded-md transition ${inputMode === 'tp' ? 'bg-white text-red-700 shadow-sm' : 'text-slate-600'}`}
                  >
                    UASA (TP1-TP6)
                  </button>
                  <button
                    onClick={() => setInputMode('marks')}
                    className={`px-3 py-1 rounded-md transition ${inputMode === 'marks' ? 'bg-white text-red-700 shadow-sm' : 'text-slate-600'}`}
                  >
                    {t('百分制 (%)')}
                  </button>
                </div>
              </div>

              {/* Mode 1: UASA TP Selectors */}
              {inputMode === 'tp' ? (
                <div className="space-y-3">
                  <div className="text-[11px] text-slate-500">
                    {t('请根据小学高年段成绩单选择各科目 Tahap Penguasaan (TP)：')}
                  </div>
                  {[
                    { key: 'bc', label: '华文 (Bahasa Cina)' },
                    { key: 'bm', label: '国文 (Bahasa Melayu)' },
                    { key: 'bi', label: '英文 (English)' },
                    { key: 'math', label: '数学 (Matematik)' },
                    { key: 'science', label: '科学 (Sains)' },
                  ].map((sub) => (
                    <div key={sub.key} className="flex items-center justify-between text-xs">
                      <span className="font-medium text-slate-700">{t(sub.label)}</span>
                      <div className="flex space-x-1">
                        {[3, 4, 5, 6].map((tp) => (
                          <button
                            key={tp}
                            type="button"
                            onClick={() => setTpScores(prev => ({ ...prev, [sub.key]: tp }))}
                            className={`w-7 h-7 rounded-lg text-xs font-bold transition flex items-center justify-center ${
                              tpScores[sub.key as keyof typeof tpScores] === tp
                                ? 'bg-red-700 text-white shadow'
                                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                            }`}
                          >
                            {tp}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                /* Mode 2: Raw Marks */
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-600 font-medium">{t('五年级/六年级五科总平均分：')}</span>
                    <span className="text-lg font-black text-red-700">{averageMark} {t('分')}</span>
                  </div>
                  <input
                    type="range"
                    min="50"
                    max="98"
                    value={averageMark}
                    onChange={(e) => setAverageMark(Number(e.target.value))}
                    className="w-full accent-red-600 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400">
                    <span>50分 (基础及格)</span>
                    <span>75分 (独中保送线)</span>
                    <span>90分+ (特优生)</span>
                  </div>
                </div>
              )}

              {/* Conduct Selector */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="font-medium text-slate-700">{t('在校操行等级：')}</span>
                <div className="inline-flex space-x-1.5">
                  {(['A', 'B', 'C'] as const).map((g) => (
                    <button
                      key={g}
                      type="button"
                      onClick={() => setConduct(g)}
                      className={`px-3 py-1 rounded-lg text-xs font-bold transition ${
                        conduct === g
                          ? 'bg-slate-900 text-white'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      {g} 等 {g === 'A' ? '(甲)' : g === 'B' ? '(乙)' : '(丙)'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Special Talents */}
              <div className="pt-3 border-t border-slate-100 space-y-2">
                <div className="text-xs font-bold text-slate-700">{t('特殊加分项 / 荣誉特长：')}</div>
                <label className="flex items-center space-x-2 text-xs text-slate-600 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={isTopStudent}
                    onChange={(e) => setIsTopStudent(e.target.checked)}
                    className="rounded text-red-600 focus:ring-red-500"
                  />
                  <span>{t('原华小校内全级排名前 5% (校长保送潜力)')}</span>
                </label>

                <label className="flex items-center space-x-2 text-xs text-slate-600 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={hasStateSports}
                    onChange={(e) => setHasStateSports(e.target.checked)}
                    className="rounded text-red-600 focus:ring-red-500"
                  />
                  <span>{t('曾代表州队参加全国球类/田径学联赛 (MSSM)')}</span>
                </label>

                <label className="flex items-center space-x-2 text-xs text-slate-600 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={hasOlympiad}
                    onChange={(e) => setHasOlympiad(e.target.checked)}
                    className="rounded text-red-600 focus:ring-red-500"
                  />
                  <span>{t('全国/州级数理奥林匹克或科技创客赛得奖者')}</span>
                </label>
              </div>

            </div>

            {/* Calculated Badge Card */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white p-4 rounded-2xl shadow-md space-y-2">
              <div className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">
                {t('当前测算评估档案')}
              </div>
              <div className="flex items-baseline justify-between">
                <div>
                  <span className="text-3xl font-black text-amber-400">{inputMode === 'tp' ? `${totalTP} TP` : `${averageMark}%`}</span>
                  <span className="text-xs text-slate-400 ml-2">
                    {inputMode === 'tp' ? `(满分 30 / 折合估分 ~${estimatedMarks}%)` : `(五科平均)`}
                  </span>
                </div>
                <div className="text-right">
                  <span className="inline-block px-2 py-0.5 rounded text-[11px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    操行 {conduct} 等
                  </span>
                </div>
              </div>
              <p className="text-[11px] text-slate-300 pt-1 border-t border-white/10 leading-relaxed">
                {totalTP >= 23 || estimatedMarks >= 78 
                  ? t('🎉 恭喜！当前成绩已达到全马多数顶尖名校【免试保送直录】门槛，可省去入学考直接锁定名额！') 
                  : t('当前成绩处于全马独中主流水平，可通过参加入学考竞争正取或报考关怀/小班精品校。')}
              </p>
            </div>
          </div>

          {/* Right Column: Categorized School Matching Results (7 cols) */}
          <div className="lg:col-span-7 flex flex-col space-y-4">
            
            {/* Filter by state */}
            <div className="flex items-center justify-between pb-2 border-b border-slate-200">
              <div className="text-xs text-slate-600">
                {t('匹配结果（共')} <span className="font-bold text-slate-900">{schools.length}</span> {t('所独中）：')}
              </div>
              <div className="flex items-center space-x-1 text-xs">
                <span className="text-slate-500">{t('筛选州属：')}</span>
                <select
                  value={filterState}
                  onChange={(e) => setFilterState(e.target.value)}
                  className="py-1 px-2.5 rounded-lg border border-slate-300 bg-white text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-red-600"
                >
                  {states.map(s => (
                    <option key={s} value={s}>{t(s)}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Results Group 1: DIRECT ADMISSION (GREEN) */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-1.5 text-xs font-bold text-emerald-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>{t('🟢 高度契合 · 符合免试保送直录条件 (')} {filteredDirect.length} {t('所)')}</span>
                </div>
                <span className="text-[10px] text-emerald-700 font-semibold bg-emerald-100 px-2 py-0.5 rounded-full">
                  {t('直接免考 / 提前锁定学籍')}
                </span>
              </div>

              {filteredDirect.length > 0 ? (
                <div className="space-y-2 max-h-56 overflow-y-auto pr-1">
                  {filteredDirect.map(({ school, matchReason }) => (
                    <div
                      key={school.school_id}
                      className="p-3 bg-white rounded-xl border border-emerald-200 shadow-xs hover:border-emerald-400 transition flex items-center justify-between gap-3"
                    >
                      <div className="flex-1">
                        <div className="flex items-center space-x-2">
                          <span className="font-bold text-slate-900 text-sm">{school.name_zh}</span>
                          <span className="text-[10px] px-1.5 py-0.2 rounded bg-slate-100 text-slate-600">
                            {school.location.state}
                          </span>
                        </div>
                        <p className="text-[11px] text-emerald-800 font-medium mt-1 leading-snug">
                          {t(matchReason)}
                        </p>
                      </div>

                      <div className="flex items-center space-x-1.5 shrink-0">
                        <button
                          onClick={() => onAddToCompare(school)}
                          className="px-2 py-1 rounded-lg text-[11px] font-semibold bg-slate-100 text-slate-700 hover:bg-slate-200 transition"
                        >
                          + {t('对比')}
                        </button>
                        <button
                          onClick={() => {
                            onClose();
                            onSelectSchool(school);
                          }}
                          className="px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-emerald-700 text-white hover:bg-emerald-800 transition"
                        >
                          {t('查看')}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-3 rounded-xl bg-slate-100 text-slate-500 text-xs text-center">
                  {t('当前成绩在所选区域暂未匹配到免试直录名校，可查看下方校长保送通道或参加入学考。')}
                </div>
              )}
            </div>

            {/* Results Group 2: TALENT / RECOMMENDATION (YELLOW) */}
            <div className="space-y-2 pt-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-1.5 text-xs font-bold text-amber-800">
                  <Sparkles className="w-4 h-4 text-amber-600" />
                  <span>{t('🟡 校长保送推荐 / 特长与特辅通道 (')} {filteredTalent.length} {t('所)')}</span>
                </div>
                <span className="text-[10px] text-amber-800 font-semibold bg-amber-100 px-2 py-0.5 rounded-full">
                  {t('需校长推荐函或专项审核')}
                </span>
              </div>

              {filteredTalent.length > 0 && (
                <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                  {filteredTalent.map(({ school, matchReason }) => (
                    <div
                      key={school.school_id}
                      className="p-3 bg-white rounded-xl border border-amber-200 shadow-xs hover:border-amber-400 transition flex items-center justify-between gap-3"
                    >
                      <div className="flex-1">
                        <div className="flex items-center space-x-2">
                          <span className="font-bold text-slate-900 text-sm">{school.name_zh}</span>
                          <span className="text-[10px] px-1.5 py-0.2 rounded bg-slate-100 text-slate-600">
                            {school.location.state}
                          </span>
                        </div>
                        <p className="text-[11px] text-amber-900 font-medium mt-1 leading-snug">
                          {t(matchReason)}
                        </p>
                      </div>

                      <div className="flex items-center space-x-1.5 shrink-0">
                        <button
                          onClick={() => onAddToCompare(school)}
                          className="px-2 py-1 rounded-lg text-[11px] font-semibold bg-slate-100 text-slate-700 hover:bg-slate-200 transition"
                        >
                          + {t('对比')}
                        </button>
                        <button
                          onClick={() => {
                            onClose();
                            onSelectSchool(school);
                          }}
                          className="px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-slate-900 text-white hover:bg-slate-800 transition"
                        >
                          {t('查看')}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Results Group 3: ENTRANCE EXAM REQUIRED (RED / GRAY) */}
            <div className="space-y-2 pt-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-1.5 text-xs font-bold text-slate-700">
                  <AlertCircle className="w-4 h-4 text-red-600" />
                  <span>{t('🔴 须参加入学甄拔考试学校 (')} {filteredExam.length} {t('所)')}</span>
                </div>
                <span className="text-[10px] text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">
                  {t('统一按考试总分择优录取')}
                </span>
              </div>

              {filteredExam.length > 0 && (
                <div className="space-y-1.5 max-h-40 overflow-y-auto pr-1">
                  {filteredExam.slice(0, 10).map(({ school, matchReason }) => (
                    <div
                      key={school.school_id}
                      className="p-2.5 bg-slate-50 rounded-xl border border-slate-200 text-xs flex items-center justify-between gap-2"
                    >
                      <div className="flex-1 truncate">
                        <span className="font-bold text-slate-800 mr-2">{school.name_zh}</span>
                        <span className="text-[11px] text-slate-500">{t(matchReason)}</span>
                      </div>
                      <button
                        onClick={() => {
                          onClose();
                          onSelectSchool(school);
                        }}
                        className="text-[11px] text-red-700 font-semibold hover:underline shrink-0"
                      >
                        {t('考试日程')}
                      </button>
                    </div>
                  ))}
                  {filteredExam.length > 10 && (
                    <div className="text-center text-[10px] text-slate-400 py-1">
                      {t('其余学校均提供公开入学试，可查看完整招生日历')}
                    </div>
                  )}
                </div>
              )}
            </div>

          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-white border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div className="text-[11px] text-slate-500 flex items-center space-x-1">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>{t('规则依据各校 2026/2027 招生简章测算，具体申请请以各校教务处公布名额为准。')}</span>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => {
                setTpScores({ bc: 5, bm: 5, bi: 5, math: 5, science: 5 });
                setAverageMark(82);
                setConduct('A');
                setIsTopStudent(false);
                setHasStateSports(false);
                setHasOlympiad(false);
              }}
              className="px-3 py-1.5 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 text-xs font-semibold flex items-center space-x-1 transition"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>{t('重置数据')}</span>
            </button>
            <button
              onClick={onClose}
              className="px-4 py-1.5 rounded-xl bg-slate-900 text-white hover:bg-slate-800 text-xs font-bold transition"
            >
              {t('完成自测')}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
