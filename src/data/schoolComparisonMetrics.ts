import { School } from '../types/school';
import { getSchoolCulture } from './schoolCultureData';

export interface SchoolDimensionScore {
  dimension_key: 'academic' | 'cca' | 'affordability' | 'global' | 'infrastructure' | 'pastoral';
  name_zh: string;
  name_en: string;
  score: number; // 0 - 100
  weight: number; // percentage
  description: string;
}

export interface SchoolRadarMetrics {
  school_id: string;
  school_name: string;
  overall_score: number;
  dimensions: {
    academic: number;      // 学术严谨与统考 (Academic Rigor & UEC)
    cca: number;           // 联课社团与体育 (CCA & Leadership)
    affordability: number; // 学费性价比与助学金 (Value & Affordability)
    global: number;        // 国际升学与海外名校 (Global Matriculation)
    infrastructure: number;// 硬件设施与寄宿环境 (Infrastructure & Dormitory)
    pastoral: number;      // 师资师生比与品格关怀 (Pastoral Care & Mentorship)
  };
  key_strengths: string[];
  recommended_student_profile: string;
}

// Manually curated calibrated benchmark data for prominent schools
const CURATED_METRICS: Record<string, {
  academic: number;
  cca: number;
  affordability: number;
  global: number;
  infrastructure: number;
  pastoral: number;
  strengths: string[];
  recommendation: string;
}> = {
  'chong-hwa-kl': {
    academic: 97,
    cca: 94,
    affordability: 82,
    global: 96,
    infrastructure: 95,
    pastoral: 91,
    strengths: ['双轨教学全马学术前茅', '清北与全球顶尖名校录取人数极高', '二十四节令鼓与管乐团全国王牌'],
    recommendation: '适合抗压能力强、数理扎实、渴望冲刺世界顶尖名校的学术型学子。'
  },
  'foonyew-jb': {
    academic: 96,
    cca: 96,
    affordability: 86,
    global: 94,
    infrastructure: 93,
    pastoral: 90,
    strengths: ['全马规模最大华人独中', '社团与联课活动生态极为完备丰富', '柔南深厚华教校友网络'],
    recommendation: '适合性格开朗、喜欢多元社团生活、全面发展的活跃型学生。'
  },
  'chung-ling': {
    academic: 98,
    cca: 93,
    affordability: 84,
    global: 97,
    infrastructure: 94,
    pastoral: 92,
    strengths: ['数理奥赛与统考拔尖', '英国新加坡顶尖名校校友网络强大', '全冷气科技校园与创新实验室'],
    recommendation: '适合数理逻辑严密、自我驱动力极强的高要求学术冲刺型学子。'
  },
  'kuen-cheng': {
    academic: 96,
    cca: 92,
    affordability: 80,
    global: 95,
    infrastructure: 96,
    pastoral: 93,
    strengths: ['全英语数理与双语沉浸教学', '地处吉隆坡市中心优质现代化硬件', '国际名校保送直录率极高'],
    recommendation: '适合英语表达能力突出、重视国际视野与学术规范的学生。'
  },
  'hin-hua': {
    academic: 95,
    cca: 94,
    affordability: 81,
    global: 94,
    infrastructure: 98,
    pastoral: 92,
    strengths: ['十层科技大楼与智慧数字化校园', '全方位人本教育理念', '商科与理科竞赛成绩卓越'],
    recommendation: '适合偏好科技智能学习环境、注重全面自主探究学习能力的学生。'
  },
  'chunghua-seremban': {
    academic: 93,
    cca: 93,
    affordability: 88,
    global: 92,
    infrastructure: 96,
    pastoral: 95,
    strengths: ['全马最完善现代化寄宿体系之一', '封闭式晚自习与严格电子设备管控', '外州直通校车专线网络成熟'],
    recommendation: '强烈推荐外州及海外学子，希望在纪律严明又充满温情的寄宿集体中健康自立成长。'
  },
  'kluang-chonghwa': {
    academic: 92,
    cca: 92,
    affordability: 89,
    global: 91,
    infrastructure: 94,
    pastoral: 94,
    strengths: ['大型花园式校区与规范寄宿制', '理科实验与文史修养底蕴兼具', '柔中枢纽交通与淳朴学风'],
    recommendation: '适合希望避开大都市喧嚣、在书香田园校园中踏实求学的寄宿或走读学子。'
  },
  'pay-fong': {
    academic: 93,
    cca: 93,
    affordability: 87,
    global: 92,
    infrastructure: 92,
    pastoral: 93,
    strengths: ['百年古城名校华教文化底蕴深厚', '台湾及两岸知名高校升学直通', '综合大楼与绿色智慧校园'],
    recommendation: '适合重视传统文化熏陶、文理均衡、志向两岸及全球名校发展的学生。'
  },
  'tsung-tsin': {
    academic: 95,
    cca: 93,
    affordability: 86,
    global: 94,
    infrastructure: 93,
    pastoral: 92,
    strengths: ['东马独中学术统考标杆', '英语与数理水平享誉东马', '直升新加坡国大南洋理工名额丰厚'],
    recommendation: '适合东马及外州志在新加坡、欧美顶尖学府的高潜力优秀学子。'
  },
  'ch-kuching1': {
    academic: 93,
    cca: 92,
    affordability: 88,
    global: 92,
    infrastructure: 92,
    pastoral: 93,
    strengths: ['砂拉越华教领航旗舰名校', '艺术美工与理科实验教学并重', '砂州政府大力支持资助'],
    recommendation: '适合重视母语教育、期望在全方位艺术与学术环境中探索特长的学子。'
  }
};

/**
 * Dynamically compute or retrieve radar metrics for any of the 63 schools
 */
export function getSchoolRadarMetrics(school: School): SchoolRadarMetrics {
  const curated = CURATED_METRICS[school.school_id];
  if (curated) {
    const overall = Math.round(
      (curated.academic * 0.25) +
      (curated.cca * 0.15) +
      (curated.affordability * 0.15) +
      (curated.global * 0.20) +
      (curated.infrastructure * 0.15) +
      (curated.pastoral * 0.10)
    );
    return {
      school_id: school.school_id,
      school_name: school.name_zh,
      overall_score: overall,
      dimensions: {
        academic: curated.academic,
        cca: curated.cca,
        affordability: curated.affordability,
        global: curated.global,
        infrastructure: curated.infrastructure,
        pastoral: curated.pastoral
      },
      key_strengths: curated.strengths,
      recommended_student_profile: curated.recommendation
    };
  }

  // Algorithmic evaluation engine based on authentic school data
  const culture = getSchoolCulture(school.school_id);
  const tuition = school.costs_and_fees.tuition_junior_yearly;
  const hasDorm = school.dormitory_and_boarding.has_dormitory;
  const track = school.academics.track_type;
  
  // 1. Academic Rigor: dual track (88-94), single track focus (82-90), base on reputation & syllabus
  let academicScore = 84;
  if (track.includes('双轨') || track.includes('三轨')) academicScore += 5;
  if (school.admission_intake?.direct_admission_criteria && school.admission_intake.direct_admission_criteria.length > 2) {
    academicScore += 3;
  }
  if (culture.notable_alumni.length > 2) academicScore += 2;
  academicScore = Math.min(96, Math.max(76, academicScore));

  // 2. CCA & Sports: based on flagship clubs count & culture
  let ccaScore = 80 + Math.min(14, culture.flagship_clubs.length * 2);
  ccaScore = Math.min(95, Math.max(75, ccaScore));

  // 3. Affordability & Scholarships: lower tuition = higher score; plus scholarship generousness
  let affordScore = 85;
  if (tuition < 3500) affordScore += 8;
  else if (tuition < 4500) affordScore += 4;
  else if (tuition > 6500) affordScore -= 5;
  if (school.costs_and_fees.scholarship_info) affordScore += 3;
  affordScore = Math.min(95, Math.max(72, affordScore));

  // 4. Global Matriculation: based on matriculation highlights & overseas ties
  let globalScore = 82;
  if (culture.matriculation_highlights.includes('清华') || culture.matriculation_highlights.includes('新加坡')) {
    globalScore += 8;
  } else if (culture.matriculation_highlights.includes('台湾') || culture.matriculation_highlights.includes('海外')) {
    globalScore += 5;
  }
  globalScore = Math.min(95, Math.max(74, globalScore));

  // 5. Infrastructure & Boarding: air-conditioned, dorm capacity, facilities
  let infraScore = 80;
  if (hasDorm) infraScore += 6;
  if (school.dormitory_and_boarding.air_conditioned?.includes('全冷气')) infraScore += 4;
  if (culture.campus_facilities.length >= 3) infraScore += 3;
  infraScore = Math.min(96, Math.max(74, infraScore));

  // 6. Pastoral Care & Mentorship: boarding discipline, student community, teacher dedication
  let pastoralScore = 86;
  if (hasDorm && school.dormitory_and_boarding.study_hall_rules) pastoralScore += 4;
  if (culture.ethos_and_spirit) pastoralScore += 2;
  pastoralScore = Math.min(95, Math.max(78, pastoralScore));

  const overall = Math.round(
    (academicScore * 0.25) +
    (ccaScore * 0.15) +
    (affordScore * 0.15) +
    (globalScore * 0.20) +
    (infraScore * 0.15) +
    (pastoralScore * 0.10)
  );

  const defaultStrengths = [
    `${culture.flagship_features[0] || '三语教学扎实底蕴'}`,
    hasDorm ? '健全寄宿生活保障与独立生活习惯培养' : '优质走读与社区华教深厚亲和力',
    `${culture.flagship_clubs[0] || '丰富社团联课体验'}`
  ];

  const defaultRecommendation = hasDorm
    ? '适合注重自立自律、希望在充实晚自习与集体环境中稳步提升的走读或外州学子。'
    : '适合就近走读、重视中华文化熏陶与扎实三语素质的广大学子。';

  return {
    school_id: school.school_id,
    school_name: school.name_zh,
    overall_score: overall,
    dimensions: {
      academic: academicScore,
      cca: ccaScore,
      affordability: affordScore,
      global: globalScore,
      infrastructure: infraScore,
      pastoral: pastoralScore
    },
    key_strengths: defaultStrengths,
    recommended_student_profile: defaultRecommendation
  };
}

export const RADAR_DIMENSION_LABELS: Record<string, { label: string; full_label: string; color: string; desc: string }> = {
  academic: {
    label: '学术与统考',
    full_label: '学术严谨与统考实力 (Academic Rigor)',
    color: '#3B82F6',
    desc: '课程体系深度、数理科技奥赛、统考学科特优率及双轨制升学保障。'
  },
  cca: {
    label: '联课与活动',
    full_label: '联课社团与领袖素养 (CCA & Leadership)',
    color: '#10B981',
    desc: '管乐团、华乐团、二十四节令鼓、球类校队、学术研究及学生自治会丰富度。'
  },
  affordability: {
    label: '性价比与助学',
    full_label: '学费性价比与奖助学金 (Value & Affordability)',
    color: '#F59E0B',
    desc: '学费亲民度、初中首年总预算透明度、清寒助学金与新生全额免试奖学金力度。'
  },
  global: {
    label: '全球名校升学',
    full_label: '全球名校与海外升学 (Global Matriculation)',
    color: '#8B5CF6',
    desc: '中国 985/双一流、新加坡公立、英国澳洲名牌大学及台湾顶尖科系免预科录取通道。'
  },
  infrastructure: {
    label: '硬件与住宿',
    full_label: '校园硬件与宿舍环境 (Infrastructure & Dorm)',
    color: '#EC4899',
    desc: '全冷气大楼、科学实验大楼、数字化智慧黑板、高规格学生寄宿公寓与安保。'
  },
  pastoral: {
    label: '品格与师生关怀',
    full_label: '师资配置与品格关怀 (Pastoral Care)',
    color: '#06B6D4',
    desc: '师生比、班导师与住校舍监悉心呵护、心理辅导机制及优良纯正校风。'
  }
};
