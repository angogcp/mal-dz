export interface YearCutoffRecord {
  year: string;
  applicants: number;
  seats_available: number;
  cutoff_score: number;       // e.g. 248/400 or 65/100
  cutoff_percentage: string;  // e.g. "62.0%"
  scholarship_cutoff: number; // score for Top 30-50 Full Scholarship
  reserve_list_cutoff: number;// 备取补录底线
  acceptance_rate: string;    // e.g. "58%"
}

export interface SchoolCutoffProfile {
  school_id: string;
  school_name: string;
  state: string;
  total_annual_seats: number;
  estimated_applicants: number;
  admission_ratio: string;
  competitiveness_level: '极高 (Very High)' | '高 (High)' | '稳健 (Moderate)';
  scoring_system: string; // e.g. "4科联考总分 400分制 (华、国、英、数各100分)"
  max_score: number;
  historical_trends: YearCutoffRecord[];
  direct_admission_quota: string; // e.g. "约 25% 名额由 UASA 全 A 保送锁定"
  cut_off_summary: string;
  borderline_advice: string;
}

export const SCHOOL_CUTOFF_PROFILES: SchoolCutoffProfile[] = [
  {
    school_id: 'chong-hwa-kl',
    school_name: '吉隆坡中华独立中学',
    state: '吉隆坡',
    total_annual_seats: 950,
    estimated_applicants: 1650,
    admission_ratio: '1.74 : 1 (录取率约 57%)',
    competitiveness_level: '极高 (Very High)',
    scoring_system: '4科联考总分 400分制 (华、国、英、数各100分)',
    max_score: 400,
    historical_trends: [
      {
        year: '2022',
        applicants: 1520,
        seats_available: 900,
        cutoff_score: 242,
        cutoff_percentage: '60.5%',
        scholarship_cutoff: 348,
        reserve_list_cutoff: 232,
        acceptance_rate: '59.2%'
      },
      {
        year: '2023',
        applicants: 1580,
        seats_available: 920,
        cutoff_score: 248,
        cutoff_percentage: '62.0%',
        scholarship_cutoff: 352,
        reserve_list_cutoff: 238,
        acceptance_rate: '58.2%'
      },
      {
        year: '2024',
        applicants: 1620,
        seats_available: 950,
        cutoff_score: 254,
        cutoff_percentage: '63.5%',
        scholarship_cutoff: 356,
        reserve_list_cutoff: 244,
        acceptance_rate: '58.6%'
      },
      {
        year: '2025',
        applicants: 1680,
        seats_available: 950,
        cutoff_score: 258,
        cutoff_percentage: '64.5%',
        scholarship_cutoff: 360,
        reserve_list_cutoff: 248,
        acceptance_rate: '56.5%'
      },
      {
        year: '2026 (预估)',
        applicants: 1700,
        seats_available: 950,
        cutoff_score: 260,
        cutoff_percentage: '65.0%',
        scholarship_cutoff: 362,
        reserve_list_cutoff: 250,
        acceptance_rate: '55.9%'
      }
    ],
    direct_admission_quota: '约 30% 新生名额由雪隆华小五六年级优秀在校生及 UASA 全特优免试直录',
    cut_off_summary: '雪隆竞争最激烈学校之一。考卷数理科具奥数与初一拔高拓展题，通常四科总分须达 255-260 分方能稳操胜券。',
    borderline_advice: '若成绩位于 245-255 分备取区间，建议放榜当日即时向教务处提交替补登记，并同步报名雪兰莪巴生四校作为双保险。'
  },
  {
    school_id: 'foonyew-jb',
    school_name: '新山宽柔中学 (含古来/至达城分校统招)',
    state: '柔佛',
    total_annual_seats: 2600,
    estimated_applicants: 4800,
    admission_ratio: '1.85 : 1 (全柔统招总录取率约 54%)',
    competitiveness_level: '极高 (Very High)',
    scoring_system: '4科联考总分 400分制 (华文100、国文100、英文100、数学100)',
    max_score: 400,
    historical_trends: [
      {
        year: '2022',
        applicants: 4400,
        seats_available: 2500,
        cutoff_score: 205,
        cutoff_percentage: '51.3%',
        scholarship_cutoff: 335,
        reserve_list_cutoff: 198,
        acceptance_rate: '56.8%'
      },
      {
        year: '2023',
        applicants: 4600,
        seats_available: 2550,
        cutoff_score: 212,
        cutoff_percentage: '53.0%',
        scholarship_cutoff: 340,
        reserve_list_cutoff: 204,
        acceptance_rate: '55.4%'
      },
      {
        year: '2024',
        applicants: 4750,
        seats_available: 2600,
        cutoff_score: 218,
        cutoff_percentage: '54.5%',
        scholarship_cutoff: 345,
        reserve_list_cutoff: 210,
        acceptance_rate: '54.7%'
      },
      {
        year: '2025',
        applicants: 4850,
        seats_available: 2600,
        cutoff_score: 222,
        cutoff_percentage: '55.5%',
        scholarship_cutoff: 348,
        reserve_list_cutoff: 214,
        acceptance_rate: '53.6%'
      },
      {
        year: '2026 (预估)',
        applicants: 4900,
        seats_available: 2600,
        cutoff_score: 225,
        cutoff_percentage: '56.3%',
        scholarship_cutoff: 350,
        reserve_list_cutoff: 218,
        acceptance_rate: '53.1%'
      }
    ],
    direct_admission_quota: '严守全员入学甄试制，不设免试保送，以单一大考总分排序分配校区',
    cut_off_summary: '新山校本部、古来分校、至达城分校采取三校联考统一切分。校本部切分线通常略高于分校 8-12 分。',
    borderline_advice: '若总分达 200-215 分未达校本部，可优先选择第二志愿古来或至达城分校分流就读，三校统考大纲与师资培训完全一致。'
  },
  {
    school_id: 'chung-ling',
    school_name: '槟城锺灵独立中学',
    state: '槟城',
    total_annual_seats: 380,
    estimated_applicants: 780,
    admission_ratio: '2.05 : 1 (北马选拔最严苛，录取率约 48%)',
    competitiveness_level: '极高 (Very High)',
    scoring_system: '4科联考总分 400分制 (华文、国文、英文、高级算术各100分)',
    max_score: 400,
    historical_trends: [
      {
        year: '2022',
        applicants: 720,
        seats_available: 360,
        cutoff_score: 250,
        cutoff_percentage: '62.5%',
        scholarship_cutoff: 355,
        reserve_list_cutoff: 240,
        acceptance_rate: '50.0%'
      },
      {
        year: '2023',
        applicants: 750,
        seats_available: 360,
        cutoff_score: 258,
        cutoff_percentage: '64.5%',
        scholarship_cutoff: 358,
        reserve_list_cutoff: 248,
        acceptance_rate: '48.0%'
      },
      {
        year: '2024',
        applicants: 770,
        seats_available: 380,
        cutoff_score: 264,
        cutoff_percentage: '66.0%',
        scholarship_cutoff: 362,
        reserve_list_cutoff: 254,
        acceptance_rate: '49.3%'
      },
      {
        year: '2025',
        applicants: 790,
        seats_available: 380,
        cutoff_score: 268,
        cutoff_percentage: '67.0%',
        scholarship_cutoff: 365,
        reserve_list_cutoff: 258,
        acceptance_rate: '48.1%'
      },
      {
        year: '2026 (预估)',
        applicants: 800,
        seats_available: 380,
        cutoff_score: 270,
        cutoff_percentage: '67.5%',
        scholarship_cutoff: 368,
        reserve_list_cutoff: 260,
        acceptance_rate: '47.5%'
      }
    ],
    direct_admission_quota: '约 35% 名额供北马各华小品学兼优前两名保送保全',
    cut_off_summary: '招收名额精炼（仅约 380 人），数理与英语科试题深度对标剑桥预科及高级统考，切分线高达 67% 以上。',
    borderline_advice: '槟城考生务必同时报考韩江中学或槟华女中作为稳妥后备组合，防范数理单科失常。'
  },
  {
    school_id: 'kuen-cheng',
    school_name: '坤成中学',
    state: '吉隆坡',
    total_annual_seats: 850,
    estimated_applicants: 1550,
    admission_ratio: '1.82 : 1 (录取率约 55%)',
    competitiveness_level: '极高 (Very High)',
    scoring_system: '4科联考总分 400分制 (华文、国文、英文、数学各100分)',
    max_score: 400,
    historical_trends: [
      {
        year: '2022',
        applicants: 1420,
        seats_available: 800,
        cutoff_score: 246,
        cutoff_percentage: '61.5%',
        scholarship_cutoff: 350,
        reserve_list_cutoff: 236,
        acceptance_rate: '56.3%'
      },
      {
        year: '2023',
        applicants: 1480,
        seats_available: 820,
        cutoff_score: 252,
        cutoff_percentage: '63.0%',
        scholarship_cutoff: 354,
        reserve_list_cutoff: 242,
        acceptance_rate: '55.4%'
      },
      {
        year: '2024',
        applicants: 1520,
        seats_available: 850,
        cutoff_score: 258,
        cutoff_percentage: '64.5%',
        scholarship_cutoff: 358,
        reserve_list_cutoff: 248,
        acceptance_rate: '55.9%'
      },
      {
        year: '2025',
        applicants: 1560,
        seats_available: 850,
        cutoff_score: 262,
        cutoff_percentage: '65.5%',
        scholarship_cutoff: 362,
        reserve_list_cutoff: 252,
        acceptance_rate: '54.5%'
      },
      {
        year: '2026 (预估)',
        applicants: 1600,
        seats_available: 850,
        cutoff_score: 265,
        cutoff_percentage: '66.3%',
        scholarship_cutoff: 365,
        reserve_list_cutoff: 255,
        acceptance_rate: '53.1%'
      }
    ],
    direct_admission_quota: '约 30% 由华小学生模范生、UASA 全特优免试保送',
    cut_off_summary: '英语及数学科比重权重高，近年来由于校舍全面翻新升级与双轨卓越表现，报考人数连年递增。',
    borderline_advice: '女生可同时考虑尊孔或吉隆坡中华；男生亦可在巴生四校预留志愿通道。'
  },
  {
    school_id: 'hin-hua',
    school_name: '巴生兴华中学',
    state: '雪兰莪',
    total_annual_seats: 600,
    estimated_applicants: 1250,
    admission_ratio: '2.08 : 1 (巴生四校最热门之一，录取率约 48%)',
    competitiveness_level: '极高 (Very High)',
    scoring_system: '4科联考总分 400分制 (华文、国文、英文、数学各100分)',
    max_score: 400,
    historical_trends: [
      {
        year: '2022',
        applicants: 1150,
        seats_available: 580,
        cutoff_score: 248,
        cutoff_percentage: '62.0%',
        scholarship_cutoff: 350,
        reserve_list_cutoff: 238,
        acceptance_rate: '50.4%'
      },
      {
        year: '2023',
        applicants: 1190,
        seats_available: 580,
        cutoff_score: 255,
        cutoff_percentage: '63.8%',
        scholarship_cutoff: 355,
        reserve_list_cutoff: 245,
        acceptance_rate: '48.7%'
      },
      {
        year: '2024',
        applicants: 1220,
        seats_available: 600,
        cutoff_score: 260,
        cutoff_percentage: '65.0%',
        scholarship_cutoff: 358,
        reserve_list_cutoff: 250,
        acceptance_rate: '49.2%'
      },
      {
        year: '2025',
        applicants: 1260,
        seats_available: 600,
        cutoff_score: 265,
        cutoff_percentage: '66.3%',
        scholarship_cutoff: 362,
        reserve_list_cutoff: 255,
        acceptance_rate: '47.6%'
      },
      {
        year: '2026 (预估)',
        applicants: 1280,
        seats_available: 600,
        cutoff_score: 268,
        cutoff_percentage: '67.0%',
        scholarship_cutoff: 365,
        reserve_list_cutoff: 258,
        acceptance_rate: '46.9%'
      }
    ],
    direct_admission_quota: '约 30% 由华小学生在校考前三名免试提前锁定',
    cut_off_summary: '以十层科技大楼、人文素养与统考拔尖成绩闻名，每年巴生及雪州外区学子报考极其踊跃。',
    borderline_advice: '巴生滨华、巴生光华及巴生中华与兴华考试时间错开，建议备考家庭做好联报准备。'
  },
  {
    school_id: 'chunghua-seremban',
    school_name: '芙蓉中华中学',
    state: '森美兰',
    total_annual_seats: 850,
    estimated_applicants: 1400,
    admission_ratio: '1.65 : 1 (寄宿生床位极其紧俏，录取率约 60%)',
    competitiveness_level: '高 (High)',
    scoring_system: '4科联考总分 400分制 (华文、国文、英文、数学各100分)',
    max_score: 400,
    historical_trends: [
      {
        year: '2022',
        applicants: 1250,
        seats_available: 800,
        cutoff_score: 220,
        cutoff_percentage: '55.0%',
        scholarship_cutoff: 330,
        reserve_list_cutoff: 210,
        acceptance_rate: '64.0%'
      },
      {
        year: '2023',
        applicants: 1300,
        seats_available: 820,
        cutoff_score: 228,
        cutoff_percentage: '57.0%',
        scholarship_cutoff: 335,
        reserve_list_cutoff: 218,
        acceptance_rate: '63.1%'
      },
      {
        year: '2024',
        applicants: 1360,
        seats_available: 850,
        cutoff_score: 235,
        cutoff_percentage: '58.8%',
        scholarship_cutoff: 340,
        reserve_list_cutoff: 225,
        acceptance_rate: '62.5%'
      },
      {
        year: '2025',
        applicants: 1420,
        seats_available: 850,
        cutoff_score: 240,
        cutoff_percentage: '60.0%',
        scholarship_cutoff: 345,
        reserve_list_cutoff: 230,
        acceptance_rate: '59.9%'
      },
      {
        year: '2026 (预估)',
        applicants: 1450,
        seats_available: 850,
        cutoff_score: 242,
        cutoff_percentage: '60.5%',
        scholarship_cutoff: 348,
        reserve_list_cutoff: 232,
        acceptance_rate: '58.6%'
      }
    ],
    direct_admission_quota: '约 25% 成绩全优生免试保送，外州寄宿生按入学考高分优先分配宿舍',
    cut_off_summary: '全马最大规模寄宿名校之一，雪隆及外州报考者逾 40%。外州生宿舍配额通常要求考分达 245 分以上以确保稳拿床位。',
    borderline_advice: '走读生与寄宿生分批次审核；若考分在 230-240 之间，建议先办妥学籍注册再申请第二批次退宿补位。'
  },
  {
    school_id: 'pay-fong',
    school_name: '马六甲培风中学',
    state: '马六甲',
    total_annual_seats: 520,
    estimated_applicants: 850,
    admission_ratio: '1.63 : 1 (古城唯一独中，录取率约 61%)',
    competitiveness_level: '高 (High)',
    scoring_system: '4科联考总分 400分制 (华文、国文、英文、数学各100分)',
    max_score: 400,
    historical_trends: [
      {
        year: '2022',
        applicants: 780,
        seats_available: 500,
        cutoff_score: 215,
        cutoff_percentage: '53.8%',
        scholarship_cutoff: 330,
        reserve_list_cutoff: 205,
        acceptance_rate: '64.1%'
      },
      {
        year: '2023',
        applicants: 810,
        seats_available: 500,
        cutoff_score: 222,
        cutoff_percentage: '55.5%',
        scholarship_cutoff: 335,
        reserve_list_cutoff: 212,
        acceptance_rate: '61.7%'
      },
      {
        year: '2024',
        applicants: 840,
        seats_available: 520,
        cutoff_score: 228,
        cutoff_percentage: '57.0%',
        scholarship_cutoff: 340,
        reserve_list_cutoff: 218,
        acceptance_rate: '61.9%'
      },
      {
        year: '2025',
        applicants: 870,
        seats_available: 520,
        cutoff_score: 232,
        cutoff_percentage: '58.0%',
        scholarship_cutoff: 342,
        reserve_list_cutoff: 222,
        acceptance_rate: '59.8%'
      },
      {
        year: '2026 (预估)',
        applicants: 890,
        seats_available: 520,
        cutoff_score: 235,
        cutoff_percentage: '58.8%',
        scholarship_cutoff: 345,
        reserve_list_cutoff: 225,
        acceptance_rate: '58.4%'
      }
    ],
    direct_admission_quota: '约 20% 华小校长推荐全免全额保送生',
    cut_off_summary: '甲州华教百年最高学府，海外两岸升学通道顺畅，综合大楼竣工后吸引不少柔北（麻坡/东甲）寄宿生报考。',
    borderline_advice: '备取生一般可在放榜后 7 天内获递补通知。'
  },
  {
    school_id: 'tsung-tsin',
    school_name: '沙巴崇正中学',
    state: '沙巴',
    total_annual_seats: 480,
    estimated_applicants: 800,
    admission_ratio: '1.67 : 1 (东马旗舰独中，录取率约 60%)',
    competitiveness_level: '高 (High)',
    scoring_system: '4科联考总分 400分制 (华文、国文、英文、数学各100分)',
    max_score: 400,
    historical_trends: [
      {
        year: '2022',
        applicants: 740,
        seats_available: 460,
        cutoff_score: 225,
        cutoff_percentage: '56.3%',
        scholarship_cutoff: 338,
        reserve_list_cutoff: 215,
        acceptance_rate: '62.2%'
      },
      {
        year: '2023',
        applicants: 770,
        seats_available: 460,
        cutoff_score: 232,
        cutoff_percentage: '58.0%',
        scholarship_cutoff: 342,
        reserve_list_cutoff: 222,
        acceptance_rate: '59.7%'
      },
      {
        year: '2024',
        applicants: 790,
        seats_available: 480,
        cutoff_score: 238,
        cutoff_percentage: '59.5%',
        scholarship_cutoff: 346,
        reserve_list_cutoff: 228,
        acceptance_rate: '60.8%'
      },
      {
        year: '2025',
        applicants: 820,
        seats_available: 480,
        cutoff_score: 242,
        cutoff_percentage: '60.5%',
        scholarship_cutoff: 350,
        reserve_list_cutoff: 232,
        acceptance_rate: '58.5%'
      },
      {
        year: '2026 (预估)',
        applicants: 840,
        seats_available: 480,
        cutoff_score: 245,
        cutoff_percentage: '61.3%',
        scholarship_cutoff: 352,
        reserve_list_cutoff: 235,
        acceptance_rate: '57.1%'
      }
    ],
    direct_admission_quota: '约 25% 供沙巴州华小学生品学兼优前三名免试直接锁定',
    cut_off_summary: '崇正学术风气鼎盛，英语和数理在东马具极高声誉，直通新加坡国大南洋理工名额多，竞争激烈度东马首位。',
    borderline_advice: '亚庇区考生可同时报考沙巴建国中学，建国与崇正师资各有特色，可构成极佳互补保险梯队。'
  }
];

export const BACKUP_SCHOOL_STRATEGIES = [
  {
    title: '黄金组合 1：冲刺一类 + 稳妥二类双保',
    description: '报名 1 所顶尖高竞争学校（如隆中华、宽柔、锺灵、兴华、坤成）的同时，务必平行报考 1 所第二梯次名校（如尊孔、巴生滨华、居銮中华、韩江），两校考试日程通常错开，避免单校失利。'
  },
  {
    title: '策略 2：利用 UASA 保送锁定底牌，零压力冲刺名校考',
    description: '6 月至 8 月间先使用华小五、六年级 UASA 成绩直接递交免试保送（Direct Admission），提前锁定一所心仪独中学位底牌；9 月至 10 月再以轻松心态参加第一志愿的入学奖学金甄拔考试。'
  },
  {
    title: '策略 3：备取补录关键 7 天黄金窗口',
    description: '各大独中正取生缴费确认学籍通常在放榜后 7 至 10 天截止。由于跨区学子经常多校联考并放弃替补名额，放榜后第 8 至 12 天为大规模备取补录期，家长务必主动与校方教务处保持联络。'
  }
];
