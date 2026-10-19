import { School } from '../types/school';

export const ALL_SCHOOLS: School[] = [
  // ===================== 1. 柔佛州 (10所) =====================
  {
    school_id: "foonyew-jb",
    name_zh: "新山宽柔中学",
    name_en: "Foon Yew High School, Johor Bahru",
    name_ms: "Sekolah Menengah Foon Yew Johor Bahru",
    abbreviation: "新山宽中",
    founding_year: 1913,
    school_category: "traditional_60",
    location: {
      state: "柔佛",
      city: "新山",
      address: "59-C, Jalan Ibrahim Sultan, 80300 Johor Bahru, Johor",
      postcode: "80300",
      latitude: 1.4682,
      longitude: 103.7749,
      google_map_url: "https://maps.google.com/?q=Foon+Yew+High+School"
    },
    contact: {
      phone: "+60-7-2224446",
      email: "admin@foonyew.edu.my",
      website_url: "https://www.foonyew.edu.my"
    },
    academics: {
      track_type: "单轨制 (纯UEC统考)",
      secondary_levels: ["初一", "初二", "初三", "高一", "高二", "高三"],
      senior_tracks: ["理科", "纯商科", "文商科"],
      academic_highlights: "全马学生人数最多学府之一，单轨制学术深厚，统考成绩斐然"
    },
    costs_and_fees: {
      currency: "MYR",
      registration_fee: 50,
      tuition_junior_monthly: 450,
      tuition_junior_yearly: 4500,
      tuition_senior_yearly: 5200,
      misc_fee_annual: 600,
      first_year_est_day_student: 5800,
      scholarship_info: "提供清寒子弟助学金与优秀新生学杂费全免奖励"
    },
    dormitory_and_boarding: {
      has_dormitory: false,
      dorm_gender: "无宿舍"
    },
    admission_intake: {
      intake_year: 2026,
      registration_start: "2026-06-01",
      registration_deadline: "2026-08-30",
      entrance_exam_date: "2026-09-19",
      exam_subjects: ["华文", "国文", "英文", "数学"],
      admission_mode: "必须参加入学试按成绩择优录取",
      result_release_date: "2026-09-28"
    },
    fit_tags: ["万人超级大校", "纯单轨UEC", "学术数理强校", "全走读", "校友网络庞大"],
    verification_status: {
      source_level: "official_school_verified",
      is_verified: true,
      last_updated: "2026-03-01"
    }
  },
  {
    school_id: "foonyew-kulai",
    name_zh: "宽柔中学古来分校",
    name_en: "Foon Yew High School - Kulai",
    name_ms: "Sekolah Menengah Foon Yew Kulai",
    abbreviation: "古来宽中",
    founding_year: 2004,
    school_category: "branch_campus",
    location: {
      state: "柔佛",
      city: "古来",
      address: "Lot 1856, Jalan Persiaran Indahpura 1, 81000 Kulai, Johor",
      postcode: "81000",
      latitude: 1.6375,
      longitude: 103.6062
    },
    contact: {
      phone: "+60-7-6636479",
      website_url: "https://www.fyk.edu.my"
    },
    academics: {
      track_type: "单轨制 (纯UEC统考)",
      secondary_levels: ["初一", "初二", "初三", "高一", "高二", "高三"],
      senior_tracks: ["理科", "商科", "文商科", "餐饮管理技职科", "电机电子技职科"],
      academic_highlights: "兼顾传统学术与技职科系，校园宽敞现代化"
    },
    costs_and_fees: {
      currency: "MYR",
      tuition_junior_yearly: 4500,
      first_year_est_day_student: 5800
    },
    dormitory_and_boarding: {
      has_dormitory: false,
      dorm_gender: "无宿舍"
    },
    admission_intake: {
      intake_year: 2026,
      registration_start: "2026-06-01",
      registration_deadline: "2026-08-30",
      entrance_exam_date: "2026-09-19",
      exam_subjects: ["华文", "国文", "英文", "数学"]
    },
    fit_tags: ["现代大型校园", "单轨UEC", "设有技职科", "全走读"],
    verification_status: {
      source_level: "public_brochure",
      is_verified: true,
      last_updated: "2026-03-01"
    }
  },
  {
    school_id: "foonyew-bsa",
    name_zh: "宽柔中学至达城分校",
    name_en: "Foon Yew High School - Bandar Seri Alam",
    name_ms: "Sekolah Menengah Foon Yew Bandar Seri Alam",
    abbreviation: "至达城宽中",
    founding_year: 2020,
    school_category: "branch_campus",
    location: {
      state: "柔佛",
      city: "巴西古当",
      address: "Jalan Persiaran Seri Alam, Bandar Seri Alam, 81750 Masai, Johor",
      postcode: "81750"
    },
    contact: {
      phone: "+60-7-2133522",
      website_url: "https://www.foonyewsa.edu.my"
    },
    academics: {
      track_type: "单轨制 (纯UEC统考)",
      secondary_levels: ["初一", "初二", "初三", "高一", "高二", "高三"],
      senior_tracks: ["理科", "纯商科", "文商科"]
    },
    costs_and_fees: {
      currency: "MYR",
      tuition_junior_yearly: 4600,
      first_year_est_day_student: 5900
    },
    dormitory_and_boarding: {
      has_dormitory: false,
      dorm_gender: "无宿舍"
    },
    fit_tags: ["新锐智慧校园", "单轨UEC", "设备极新", "全走读"],
    verification_status: {
      source_level: "public_brochure",
      is_verified: true,
      last_updated: "2026-03-01"
    }
  },
  {
    school_id: "chonghwa-kluang",
    name_zh: "居銮中华中学",
    name_en: "Chong Hwa High School Kluang",
    name_ms: "Sekolah Menengah Chong Hwa Kluang",
    abbreviation: "銮中",
    founding_year: 1918,
    school_category: "traditional_60",
    location: {
      state: "柔佛",
      city: "居銮",
      address: "Jalan Sekolah Chong Hwa, 86000 Kluang, Johor"
    },
    contact: {
      phone: "+60-7-7724021",
      website_url: "https://www.chonghwa.edu.my"
    },
    academics: {
      track_type: "双轨制 (UEC统考 + SPM政府考试)",
      secondary_levels: ["初一", "初二", "初三", "高一", "高二", "高三"],
      senior_tracks: ["理科", "纯商科", "文商科", "美术设计技职科", "资讯与电脑技职科"],
      academic_highlights: "柔中核心学府，美术与电科技职教育历史悠久"
    },
    costs_and_fees: {
      currency: "MYR",
      tuition_junior_yearly: 3800,
      first_year_est_day_student: 4800,
      first_year_est_boarder: 9800
    },
    dormitory_and_boarding: {
      has_dormitory: true,
      dorm_gender: "男女宿舍兼备",
      dorm_capacity: 600,
      air_conditioned: "部分冷气",
      dorm_fee_monthly: 380,
      meal_plan: "包早晚两餐"
    },
    admission_intake: {
      intake_year: 2026,
      registration_start: "2026-06-15",
      registration_deadline: "2026-09-10",
      entrance_exam_date: "2026-09-26",
      exam_subjects: ["华文", "国文", "英文", "数学"]
    },
    fit_tags: ["寄宿大校", "双轨制", "美术美工强项", "柔中枢纽", "适合外州生"],
    verification_status: {
      source_level: "official_school_verified",
      is_verified: true,
      last_updated: "2026-03-01"
    }
  },
  {
    school_id: "chunghwa-muar",
    name_zh: "麻坡中化中学",
    name_en: "Chung Hwa High School Muar",
    name_ms: "Sekolah Menengah Chung Hwa Muar",
    abbreviation: "中化中学",
    founding_year: 1912,
    school_category: "traditional_60",
    location: {
      state: "柔佛",
      city: "麻坡",
      address: "Jalan Junid, 84000 Muar, Johor"
    },
    contact: {
      phone: "+60-6-9522632",
      website_url: "https://www.chhs.edu.my"
    },
    academics: {
      track_type: "双轨制 (UEC统考 + SPM政府考试)",
      secondary_levels: ["初一", "初二", "初三", "高一", "高二", "高三"],
      senior_tracks: ["理科", "纯商科", "文商科"]
    },
    costs_and_fees: {
      currency: "MYR",
      tuition_junior_yearly: 3600,
      first_year_est_day_student: 4600,
      first_year_est_boarder: 9600
    },
    dormitory_and_boarding: {
      has_dormitory: true,
      dorm_gender: "男女宿舍兼备"
    },
    fit_tags: ["百年名校", "人文底蕴", "双轨制", "设施完善寄宿"],
    verification_status: {
      source_level: "dongzong_report",
      is_verified: true,
      last_updated: "2026-03-01"
    }
  },
  {
    school_id: "peichun-pontian",
    name_zh: "笨珍培群独立中学",
    name_en: "Pei Chun High School Pontian",
    name_ms: "Sekolah Menengah Pei Chun Pontian",
    abbreviation: "培群独中",
    founding_year: 1922,
    school_category: "traditional_60",
    location: {
      state: "柔佛",
      city: "笨珍",
      address: "Jalan Parit Mesjid, 82000 Pontian, Johor"
    },
    contact: {
      phone: "+60-7-6873980",
      website_url: "https://peichunhs.edu.my"
    },
    academics: {
      track_type: "双轨制 (UEC统考 + SPM政府考试)",
      secondary_levels: ["初一", "初二", "初三", "高一", "高二", "高三"],
      senior_tracks: ["理科", "商科"]
    },
    costs_and_fees: {
      currency: "MYR",
      tuition_junior_yearly: 3500,
      first_year_est_day_student: 4500,
      first_year_est_boarder: 9400
    },
    dormitory_and_boarding: {
      has_dormitory: true,
      dorm_gender: "男女宿舍兼备"
    },
    fit_tags: ["双轨制", "近新山走廊", "寄宿温馨", "学风纯朴"],
    verification_status: {
      source_level: "dongzong_report",
      is_verified: true,
      last_updated: "2026-03-01"
    }
  },
  {
    school_id: "chsbp-batupahat",
    name_zh: "峇株巴辖华仁中学",
    name_en: "Chinese High School Batu Pahat",
    name_ms: "Sekolah Menengah Cina Batu Pahat",
    abbreviation: "华仁中学",
    founding_year: 1940,
    school_category: "traditional_60",
    location: {
      state: "柔佛",
      city: "峇株巴辖",
      address: "241, Jalan Tanjung Laboh, 83000 Batu Pahat, Johor"
    },
    contact: {
      phone: "+60-7-4341108",
      website_url: "https://www.chsbp.edu.my"
    },
    academics: {
      track_type: "双轨制 (UEC统考 + SPM政府考试)",
      secondary_levels: ["初一", "初二", "初三", "高一", "高二", "高三"],
      senior_tracks: ["理科", "文商科", "美术设计技职科", "服装设计技职科"]
    },
    costs_and_fees: {
      currency: "MYR",
      tuition_junior_yearly: 3700,
      first_year_est_day_student: 4700,
      first_year_est_boarder: 9800
    },
    dormitory_and_boarding: {
      has_dormitory: true,
      dorm_gender: "男女宿舍兼备"
    },
    fit_tags: ["人文艺术特色", "服装美术强项", "双轨制", "柔北名校"],
    verification_status: {
      source_level: "dongzong_report",
      is_verified: true,
      last_updated: "2026-03-01"
    }
  },
  {
    school_id: "peihwa-tangkak",
    name_zh: "利丰港培华独立中学",
    name_en: "Pei Hwa High School Sungai Mati",
    name_ms: "Sekolah Menengah Pei Hwa",
    abbreviation: "培华独中",
    founding_year: 1929,
    school_category: "traditional_60",
    location: {
      state: "柔佛",
      city: "东甲",
      address: "Sungai Mati, 84400 Tangkak, Johor"
    },
    contact: {
      phone: "+60-6-9751032",
      website_url: "https://peihwa.edu.my"
    },
    academics: {
      track_type: "双轨制 (UEC统考 + SPM政府考试)",
      secondary_levels: ["初一", "初二", "初三", "高一", "高二", "高三"],
      senior_tracks: ["理科", "文商科"]
    },
    costs_and_fees: {
      currency: "MYR",
      tuition_junior_yearly: 3200,
      first_year_est_day_student: 4200,
      first_year_est_boarder: 8900
    },
    dormitory_and_boarding: {
      has_dormitory: true,
      dorm_gender: "男女宿舍兼备"
    },
    fit_tags: ["小班关怀", "亲民学费", "双轨制", "寄宿便利"],
    verification_status: {
      source_level: "dongzong_report",
      is_verified: true,
      last_updated: "2026-03-01"
    }
  },
  {
    school_id: "sinhwa-rengit",
    name_zh: "龙引新文龙中华中学",
    name_en: "Sin Hwa High School Rengit",
    name_ms: "Sekolah Menengah Sin Hwa Rengit",
    abbreviation: "新文龙中华",
    founding_year: 1957,
    school_category: "traditional_60",
    location: {
      state: "柔佛",
      city: "龙引",
      address: "Jalan Rengit, 83100 Rengit, Johor"
    },
    contact: {
      phone: "+60-7-4241148",
      website_url: "https://sblchs.edu.my"
    },
    academics: {
      track_type: "双轨制 (UEC统考 + SPM政府考试)",
      secondary_levels: ["初一", "初二", "初三", "高一", "高二", "高三"],
      senior_tracks: ["理科", "文商科", "生态农艺技职科"]
    },
    costs_and_fees: {
      currency: "MYR",
      tuition_junior_yearly: 3100,
      first_year_est_day_student: 4000,
      first_year_est_boarder: 8600
    },
    dormitory_and_boarding: {
      has_dormitory: true,
      dorm_gender: "男女宿舍兼备"
    },
    fit_tags: ["生态农业特色", "平价寄宿", "民风纯朴", "小班教学"],
    verification_status: {
      source_level: "dongzong_report",
      is_verified: true,
      last_updated: "2026-03-01"
    }
  },
  {
    school_id: "yongpeng-high",
    name_zh: "永平独立中学",
    name_en: "Yong Peng High School",
    name_ms: "Sekolah Menengah Yong Peng",
    abbreviation: "永平独中",
    founding_year: 1960,
    school_category: "traditional_60",
    location: {
      state: "柔佛",
      city: "永平",
      address: "Jalan Sekolah Cina, 83700 Yong Peng, Johor"
    },
    contact: {
      phone: "+60-7-4671611",
      website_url: "https://yphs.edu.my"
    },
    academics: {
      track_type: "双轨制 (UEC统考 + SPM政府考试)",
      secondary_levels: ["初一", "初二", "初三", "高一", "高二", "高三"],
      senior_tracks: ["理科", "文商科"]
    },
    costs_and_fees: {
      currency: "MYR",
      tuition_junior_yearly: 3200,
      first_year_est_day_student: 4100,
      first_year_est_boarder: 8800
    },
    dormitory_and_boarding: {
      has_dormitory: true,
      dorm_gender: "男女宿舍兼备"
    },
    fit_tags: ["关怀型小班", "双轨制", "学费实惠", "外州寄宿友好"],
    verification_status: {
      source_level: "dongzong_report",
      is_verified: true,
      last_updated: "2026-03-01"
    }
  },

  // ===================== 2. 吉隆坡 (4所) =====================
  {
    school_id: "chonghwa-kl",
    name_zh: "吉隆坡中华独立中学",
    name_en: "Chong Hwa Independent High School, KL",
    name_ms: "Sekolah Menengah Persendirian Chong Hwa Kuala Lumpur",
    abbreviation: "隆中华",
    founding_year: 1919,
    school_category: "traditional_60",
    location: {
      state: "吉隆坡",
      city: "吉隆坡",
      address: "Jalan Ipoh, 51100 Kuala Lumpur",
      postcode: "51100",
      latitude: 3.1973,
      longitude: 101.6845,
      google_map_url: "https://maps.google.com/?q=Chong+Hwa+Independent+High+School+Kuala+Lumpur"
    },
    contact: {
      phone: "+60-3-62587935",
      email: "chonghwa@chonghwakl.edu.my",
      website_url: "https://www.chonghwakl.edu.my"
    },
    academics: {
      track_type: "双轨制 (UEC统考 + SPM政府考试)",
      secondary_levels: ["初一", "初二", "初三", "高一", "高二", "高三"],
      senior_tracks: ["理科", "纯商科", "文商科"],
      academic_highlights: "全员双轨强制修读，学术竞赛与海外名校（北大清华英澳）直录战绩拔尖"
    },
    costs_and_fees: {
      currency: "MYR",
      registration_fee: 100,
      tuition_junior_monthly: 650,
      tuition_junior_yearly: 6500,
      tuition_senior_yearly: 7200,
      misc_fee_annual: 800,
      first_year_est_day_student: 8200,
      first_year_est_boarder: 16500,
      scholarship_info: "学业优异者提供高额奖学金，清寒生可申请助学金"
    },
    dormitory_and_boarding: {
      has_dormitory: true,
      dorm_gender: "男女宿舍兼备",
      dorm_capacity: 400,
      room_types: ["4人间"],
      air_conditioned: "全冷气",
      study_hall_rules: "晚自习制度极其严格，禁止任何游戏电子产品",
      electronics_policy: "周一至周五手机由舍监统一封存锁柜保管"
    },
    admission_intake: {
      intake_year: 2026,
      registration_start: "2026-06-01",
      registration_deadline: "2026-09-15",
      entrance_exam_date: "2026-10-03",
      exam_subjects: ["华文", "国文", "英文", "数学"],
      admission_mode: "必须参加入学试按成绩择优录取",
      result_release_date: "2026-10-12"
    },
    fit_tags: ["顶尖学术", "严谨治学", "双轨全修", "名校录取率高", "竞争氛围浓厚", "外州生寄宿紧张"],
    verification_status: {
      source_level: "official_school_verified",
      is_verified: true,
      last_updated: "2026-03-01"
    }
  },
  {
    school_id: "kuencheng-kl",
    name_zh: "坤成中学",
    name_en: "Kuen Cheng High School",
    name_ms: "Sekolah Menengah Kuen Cheng",
    abbreviation: "坤成",
    founding_year: 1908,
    school_category: "traditional_60",
    location: {
      state: "吉隆坡",
      city: "吉隆坡",
      address: "Jalan Syed Putra, 50460 Kuala Lumpur",
      postcode: "50460",
      latitude: 3.1298,
      longitude: 101.6902
    },
    contact: {
      phone: "+60-3-22763288",
      website_url: "https://www.kuencheng.edu.my"
    },
    academics: {
      track_type: "双轨制 (UEC统考 + SPM政府考试)",
      secondary_levels: ["初一", "初二", "初三", "高一", "高二", "高三"],
      senior_tracks: ["理科", "纯商科", "文商科"],
      academic_highlights: "百年老校转合校典范，英语氛围极浓，设施一流"
    },
    costs_and_fees: {
      currency: "MYR",
      tuition_junior_yearly: 6200,
      first_year_est_day_student: 7800,
      first_year_est_boarder: 15800
    },
    dormitory_and_boarding: {
      has_dormitory: true,
      dorm_gender: "男女宿舍兼备",
      air_conditioned: "全冷气"
    },
    admission_intake: {
      intake_year: 2026,
      registration_start: "2026-06-01",
      registration_deadline: "2026-09-10",
      entrance_exam_date: "2026-09-26",
      exam_subjects: ["华文", "国文", "英文", "数学"]
    },
    fit_tags: ["百年名校", "英语环境突出", "全人教育", "设施顶尖", "高升学率"],
    verification_status: {
      source_level: "official_school_verified",
      is_verified: true,
      last_updated: "2026-03-01"
    }
  },
  {
    school_id: "tsunjin-kl",
    name_zh: "循人中学",
    name_en: "Tsun Jin High School",
    name_ms: "Sekolah Menengah Tsun Jin",
    abbreviation: "循人",
    founding_year: 1913,
    school_category: "traditional_60",
    location: {
      state: "吉隆坡",
      city: "吉隆坡",
      address: "6, Jalan Loke Yew, 55200 Kuala Lumpur",
      postcode: "55200",
      latitude: 3.1332,
      longitude: 101.7088
    },
    contact: {
      phone: "+60-3-92214368",
      website_url: "https://www.tsunjin.edu.my"
    },
    academics: {
      track_type: "双轨制 (UEC统考 + SPM政府考试)",
      secondary_levels: ["初一", "初二", "初三", "高一", "高二", "高三"],
      senior_tracks: ["理科", "纯商科", "文商科"],
      academic_highlights: "以校风严谨、自律规矩、学生纪律与团队精神闻名，科技数码教学领先"
    },
    costs_and_fees: {
      currency: "MYR",
      tuition_junior_yearly: 6500,
      first_year_est_day_student: 8000
    },
    dormitory_and_boarding: {
      has_dormitory: false,
      dorm_gender: "无宿舍"
    },
    fit_tags: ["纪律严谨", "学术过硬", "全走读", "数码教学典范", "吉隆坡四大校"],
    verification_status: {
      source_level: "official_school_verified",
      is_verified: true,
      last_updated: "2026-03-01"
    }
  },
  {
    school_id: "confucian-kl",
    name_zh: "尊孔独立中学",
    name_en: "Confucian Private Secondary School",
    name_ms: "Sekolah Menengah Persendirian Confucian",
    abbreviation: "尊孔独中",
    founding_year: 1906,
    school_category: "traditional_60",
    location: {
      state: "吉隆坡",
      city: "吉隆坡",
      address: "Lorong Hang Jebat, 50150 Kuala Lumpur",
      postcode: "50150",
      latitude: 3.1415,
      longitude: 101.7005
    },
    contact: {
      phone: "+60-3-20726321",
      website_url: "https://www.confucian.edu.my"
    },
    academics: {
      track_type: "并存/自选单双轨 (学生按班别自选)",
      secondary_levels: ["初一", "初二", "初三", "高一", "高二", "高三"],
      senior_tracks: ["理科", "文商科", "餐饮管理技职科", "美术设计技职科"],
      academic_highlights: "华教源流发祥地之一，特辅班关怀基础较弱学生，新综合大楼宿舍极具特色"
    },
    costs_and_fees: {
      currency: "MYR",
      tuition_junior_yearly: 5500,
      first_year_est_day_student: 6800,
      first_year_est_boarder: 13800
    },
    dormitory_and_boarding: {
      has_dormitory: true,
      dorm_gender: "男女宿舍兼备",
      air_conditioned: "全冷气"
    },
    fit_tags: ["百年古校", "多元包容", "特辅班关怀", "设有餐饮美术技职", "新落成现代化宿舍"],
    verification_status: {
      source_level: "official_school_verified",
      is_verified: true,
      last_updated: "2026-03-01"
    }
  },

  // ===================== 3. 雪兰莪 (4所) =====================
  {
    school_id: "hinhua-klang",
    name_zh: "巴生兴华中学",
    name_en: "Hin Hua High School Klang",
    name_ms: "Sekolah Menengah Hin Hua Klang",
    abbreviation: "兴华中学",
    founding_year: 1947,
    school_category: "traditional_60",
    location: {
      state: "雪兰莪",
      city: "巴生",
      address: "141, Persiaran Raja Muda Musa, 41200 Klang, Selangor",
      postcode: "41200",
      latitude: 3.0315,
      longitude: 101.4402
    },
    contact: {
      phone: "+60-3-33714241",
      website_url: "https://www.hinhua.edu.my"
    },
    academics: {
      track_type: "双轨制 (UEC统考 + SPM政府考试)",
      secondary_levels: ["初一", "初二", "初三", "高一", "高二", "高三"],
      senior_tracks: ["理科", "纯商科", "文商科"],
      academic_highlights: "自主学习模式全国典范，科技人文并重，天文台与现代科创中心完备"
    },
    costs_and_fees: {
      currency: "MYR",
      tuition_junior_yearly: 6000,
      first_year_est_day_student: 7500,
      first_year_est_boarder: 14500
    },
    dormitory_and_boarding: {
      has_dormitory: true,
      dorm_gender: "男女宿舍兼备",
      air_conditioned: "全冷气"
    },
    admission_intake: {
      intake_year: 2026,
      registration_start: "2026-06-01",
      registration_deadline: "2026-09-12",
      entrance_exam_date: "2026-10-03",
      exam_subjects: ["华文", "国文", "英文", "数学"]
    },
    fit_tags: ["雪州名校龙头", "现代高科技校园", "自主学习典范", "宿舍设施高档", "双轨并重"],
    verification_status: {
      source_level: "official_school_verified",
      is_verified: true,
      last_updated: "2026-03-01"
    }
  },
  {
    school_id: "pinhua-klang",
    name_zh: "巴生滨华中学",
    name_en: "Pin Hwa High School Klang",
    name_ms: "Sekolah Menengah Pin Hwa Klang",
    abbreviation: "滨华中学",
    founding_year: 1923,
    school_category: "traditional_60",
    location: {
      state: "雪兰莪",
      city: "巴生",
      address: "13, Jalan Goh Hock Huat, 41400 Klang, Selangor",
      postcode: "41400"
    },
    contact: {
      phone: "+60-3-33426388",
      website_url: "https://www.pinhwa.edu.my"
    },
    academics: {
      track_type: "双轨制 (UEC统考 + SPM政府考试)",
      secondary_levels: ["初一", "初二", "初三", "高一", "高二", "高三"],
      senior_tracks: ["理科", "纯商科", "文商科"],
      academic_highlights: "7个习惯领导力教育标杆，全冷气教学楼与高星级宿舍"
    },
    costs_and_fees: {
      currency: "MYR",
      tuition_junior_yearly: 5800,
      first_year_est_day_student: 7200,
      first_year_est_boarder: 14200
    },
    dormitory_and_boarding: {
      has_dormitory: true,
      dorm_gender: "男女宿舍兼备",
      air_conditioned: "全冷气"
    },
    fit_tags: ["7个习惯领导力", "五星级校舍", "现代化寄宿", "双轨并重"],
    verification_status: {
      source_level: "official_school_verified",
      is_verified: true,
      last_updated: "2026-03-01"
    }
  },
  {
    school_id: "chunghua-klang",
    name_zh: "巴生中华独立中学",
    name_en: "Chung Hua Independent High School Klang",
    name_ms: "Sekolah Menengah Persendirian Chung Hua Klang",
    abbreviation: "巴生中华",
    founding_year: 1911,
    school_category: "traditional_60",
    location: {
      state: "雪兰莪",
      city: "巴生",
      address: "Jalan Kota Raja, 41000 Klang, Selangor"
    },
    contact: {
      phone: "+60-3-33728632",
      website_url: "https://chunghuaklang.edu.my"
    },
    academics: {
      track_type: "双轨制 (UEC统考 + SPM政府考试)",
      secondary_levels: ["初一", "初二", "初三", "高一", "高二", "高三"],
      senior_tracks: ["理科", "商科", "艺术设计科"]
    },
    costs_and_fees: {
      currency: "MYR",
      tuition_junior_yearly: 4800,
      first_year_est_day_student: 6000,
      first_year_est_boarder: 12000
    },
    dormitory_and_boarding: {
      has_dormitory: true,
      dorm_gender: "男女宿舍兼备"
    },
    fit_tags: ["百年老校", "艺术文创特色", "双轨并重", "关怀寄宿"],
    verification_status: {
      source_level: "dongzong_report",
      is_verified: true,
      last_updated: "2026-03-01"
    }
  },
  {
    school_id: "kwanghua-klang",
    name_zh: "巴生光华独立中学",
    name_en: "Kwang Hua Private High School Klang",
    name_ms: "Sekolah Menengah Persendirian Kwang Hua",
    abbreviation: "巴生光华",
    founding_year: 1954,
    school_category: "traditional_60",
    location: {
      state: "雪兰莪",
      city: "巴生",
      address: "Taman Eng Ann, 41150 Klang, Selangor"
    },
    contact: {
      phone: "+60-3-33416651",
      website_url: "https://kwanghua.edu.my"
    },
    academics: {
      track_type: "双轨制 (UEC统考 + SPM政府考试)",
      secondary_levels: ["初一", "初二", "初三", "高一", "高二", "高三"],
      senior_tracks: ["理科", "商科"]
    },
    costs_and_fees: {
      currency: "MYR",
      tuition_junior_yearly: 4800,
      first_year_est_day_student: 6000,
      first_year_est_boarder: 12000
    },
    dormitory_and_boarding: {
      has_dormitory: true,
      dorm_gender: "男女宿舍兼备"
    },
    fit_tags: ["数理与科技", "学风稳健", "双轨制", "寄宿完备"],
    verification_status: {
      source_level: "dongzong_report",
      is_verified: true,
      last_updated: "2026-03-01"
    }
  },

  // ===================== 4. 森美兰 (2所) =====================
  {
    school_id: "chunghua-seremban",
    name_zh: "芙蓉中华中学",
    name_en: "Chung Hua High School Seremban",
    name_ms: "Sekolah Menengah Chung Hua Seremban",
    abbreviation: "芙中",
    founding_year: 1913,
    school_category: "traditional_60",
    location: {
      state: "森美兰",
      city: "芙蓉",
      address: "Jalan Temiang, 70200 Seremban, Negeri Sembilan",
      postcode: "70200",
      latitude: 2.7369,
      longitude: 101.9385,
      google_map_url: "https://maps.google.com/?q=Chung+Hua+High+School+Seremban"
    },
    contact: {
      phone: "+60-6-7612782",
      website_url: "https://www.chhsban.edu.my"
    },
    academics: {
      track_type: "并存/自选单双轨 (学生按班别自选)",
      secondary_levels: ["初一", "初二", "初三", "高一", "高二", "高三"],
      senior_tracks: ["理科", "商科", "文科", "美术设计技职科"],
      academic_highlights: "全马规模最大的寄宿独中之一，依山而建环境优美，天文天象馆全国闻名"
    },
    costs_and_fees: {
      currency: "MYR",
      tuition_junior_yearly: 4800,
      first_year_est_day_student: 6000,
      first_year_est_boarder: 12500
    },
    dormitory_and_boarding: {
      has_dormitory: true,
      dorm_gender: "男女宿舍兼备",
      dorm_capacity: 1200,
      room_types: ["4人间", "6人间"],
      air_conditioned: "部分冷气",
      meal_plan: "包早晚两餐",
      study_hall_rules: "千人晚自习，宿舍生活自治会管理成熟"
    },
    admission_intake: {
      intake_year: 2026,
      registration_start: "2026-06-01",
      registration_deadline: "2026-09-20",
      entrance_exam_date: "2026-10-04",
      exam_subjects: ["华文", "国文", "英文", "数学"]
    },
    fit_tags: ["全马寄宿标杆", "外州生首选", "校园依山傍水", "单双轨兼设", "生活独立能力培养"],
    verification_status: {
      source_level: "official_school_verified",
      is_verified: true,
      last_updated: "2026-03-01"
    }
  },
  {
    school_id: "chunghua-pd",
    name_zh: "波德申中华中学",
    name_en: "Chung Hua Middle School Port Dickson",
    name_ms: "Sekolah Menengah Chung Hua Port Dickson",
    abbreviation: "波中",
    founding_year: 1914,
    school_category: "traditional_60",
    location: {
      state: "森美兰",
      city: "波德申",
      address: "Jalan Si Rusa, 71050 Port Dickson, Negeri Sembilan"
    },
    contact: {
      phone: "+60-6-6471282",
      website_url: "https://chms.edu.my"
    },
    academics: {
      track_type: "双轨制 (UEC统考 + SPM政府考试)",
      secondary_levels: ["初一", "初二", "初三", "高一", "高二", "高三"],
      senior_tracks: ["理科", "文商科"]
    },
    costs_and_fees: {
      currency: "MYR",
      tuition_junior_yearly: 3500,
      first_year_est_day_student: 4500,
      first_year_est_boarder: 9600
    },
    dormitory_and_boarding: {
      has_dormitory: true,
      dorm_gender: "男女宿舍兼备"
    },
    fit_tags: ["海滨小班学府", "温馨关怀", "双轨制", "平价寄宿"],
    verification_status: {
      source_level: "dongzong_report",
      is_verified: true,
      last_updated: "2026-03-01"
    }
  },

  // ===================== 5. 马六甲 (1所) =====================
  {
    school_id: "payfong-melaka",
    name_zh: "马六甲培风中学",
    name_en: "Pay Fong High School Melaka",
    name_ms: "Sekolah Menengah Pay Fong Melaka",
    abbreviation: "培风中学",
    founding_year: 1913,
    school_category: "traditional_60",
    location: {
      state: "马六甲",
      city: "马六甲市",
      address: "40, Jalan Tan Chay Yan, 75300 Melaka",
      postcode: "75300",
      latitude: 2.2038,
      longitude: 102.2471
    },
    contact: {
      phone: "+60-6-2824217",
      website_url: "https://www.payfong.edu.my"
    },
    academics: {
      track_type: "单轨制 (纯UEC统考)",
      secondary_levels: ["初一", "初二", "初三", "高一", "高二", "高三"],
      senior_tracks: ["理科", "商科", "电机电子技职科"],
      academic_highlights: "马六甲唯一独中，华社爱护如眼珠，自编综合校本教材体系，校风纯正"
    },
    costs_and_fees: {
      currency: "MYR",
      tuition_junior_yearly: 4200,
      first_year_est_day_student: 5200,
      first_year_est_boarder: 11000
    },
    dormitory_and_boarding: {
      has_dormitory: true,
      dorm_gender: "男女宿舍兼备"
    },
    fit_tags: ["古城唯一独中", "校风极纯", "百年爱校情怀", "纯单轨统考"],
    verification_status: {
      source_level: "official_school_verified",
      is_verified: true,
      last_updated: "2026-03-01"
    }
  },

  // ===================== 6. 霹雳 (9所) =====================
  {
    school_id: "shenjai-ipoh",
    name_zh: "怡保深斋中学",
    name_en: "Shen Jai High School Ipoh",
    name_ms: "Sekolah Menengah Shen Jai",
    abbreviation: "深斋中学",
    founding_year: 1959,
    school_category: "traditional_60",
    location: {
      state: "霹雳",
      city: "怡保",
      address: "Jalan Gopeng, 31300 Ipoh, Perak"
    },
    contact: {
      phone: "+60-5-3126612",
      website_url: "https://shenjai.edu.my"
    },
    academics: {
      track_type: "双轨制 (UEC统考 + SPM政府考试)",
      secondary_levels: ["初一", "初二", "初三", "高一", "高二", "高三"],
      senior_tracks: ["理科", "纯商科", "文商科"]
    },
    costs_and_fees: {
      currency: "MYR",
      tuition_junior_yearly: 3600,
      first_year_est_day_student: 4600,
      first_year_est_boarder: 9800
    },
    dormitory_and_boarding: {
      has_dormitory: true,
      dorm_gender: "男女宿舍兼备"
    },
    fit_tags: ["怡保核心学府", "商科优势", "双轨并重", "外州寄宿生多"],
    verification_status: {
      source_level: "official_school_verified",
      is_verified: true,
      last_updated: "2026-03-01"
    }
  },
  {
    school_id: "poilam-ipoh",
    name_zh: "怡保培南独立中学",
    name_en: "Poi Lam High School Ipoh",
    name_ms: "Sekolah Menengah Poi Lam (SUWA)",
    abbreviation: "培南独中",
    founding_year: 1955,
    school_category: "traditional_60",
    location: {
      state: "霹雳",
      city: "怡保",
      address: "Pengkalan Barat, 31650 Ipoh, Perak"
    },
    contact: {
      phone: "+60-5-3218120",
      website_url: "https://poilam.edu.my"
    },
    academics: {
      track_type: "三轨制 (UEC + SPM + IGCSE国际课程)",
      secondary_levels: ["初一", "初二", "初三", "高一", "高二", "高三"],
      senior_tracks: ["理科", "商科"]
    },
    costs_and_fees: {
      currency: "MYR",
      tuition_junior_yearly: 4200,
      first_year_est_day_student: 5300,
      first_year_est_boarder: 11000
    },
    dormitory_and_boarding: {
      has_dormitory: true,
      dorm_gender: "男女宿舍兼备"
    },
    fit_tags: ["三轨办学", "剑桥IGCSE考点", "外州及国际生友好", "高标准宿舍"],
    verification_status: {
      source_level: "official_school_verified",
      is_verified: true,
      last_updated: "2026-03-01"
    }
  },
  {
    school_id: "yukchoy-ipoh",
    name_zh: "怡保育才独立中学",
    name_en: "Yuk Choy High School Ipoh",
    name_ms: "Sekolah Menengah Yuk Choy",
    abbreviation: "育才独中",
    founding_year: 1908,
    school_category: "traditional_60",
    location: {
      state: "霹雳",
      city: "怡保",
      address: "Jalan Kuala Kangsar, 30010 Ipoh, Perak"
    },
    contact: {
      phone: "+60-5-5260963",
      website_url: "https://www.yukchoy.edu.my"
    },
    academics: {
      track_type: "并存/自选单双轨 (学生按班别自选)",
      secondary_levels: ["初一", "初二", "初三", "高一", "高二", "高三"],
      senior_tracks: ["理科", "商科", "汽车修护技职科", "美术设计技职科"]
    },
    costs_and_fees: {
      currency: "MYR",
      tuition_junior_yearly: 3600,
      first_year_est_day_student: 4600,
      first_year_est_boarder: 9600
    },
    dormitory_and_boarding: {
      has_dormitory: true,
      dorm_gender: "男女宿舍兼备"
    },
    fit_tags: ["百年工运传统", "汽修技职全马标杆", "美术科著名", "寄宿大楼完善"],
    verification_status: {
      source_level: "official_school_verified",
      is_verified: true,
      last_updated: "2026-03-01"
    }
  },
  {
    school_id: "hualian-taiping",
    name_zh: "太平华联中学",
    name_en: "Hua Lian High School Taiping",
    name_ms: "Sekolah Menengah Hua Lian Taiping",
    abbreviation: "华联中学",
    founding_year: 1913,
    school_category: "traditional_60",
    location: {
      state: "霹雳",
      city: "太平",
      address: "Jalan Tokong, 34000 Taiping, Perak"
    },
    contact: {
      phone: "+60-5-8072208",
      website_url: "https://hualian.edu.my"
    },
    academics: {
      track_type: "双轨制 (UEC统考 + SPM政府考试)",
      secondary_levels: ["初一", "初二", "初三", "高一", "高二", "高三"],
      senior_tracks: ["理科", "商科"]
    },
    costs_and_fees: {
      currency: "MYR",
      tuition_junior_yearly: 3300,
      first_year_est_day_student: 4200,
      first_year_est_boarder: 9000
    },
    dormitory_and_boarding: {
      has_dormitory: true,
      dorm_gender: "男女宿舍兼备"
    },
    fit_tags: ["雨城百年名校", "学风恬静", "双轨制", "寄宿便利"],
    verification_status: {
      source_level: "dongzong_report",
      is_verified: true,
      last_updated: "2026-03-01"
    }
  },
  {
    school_id: "sanmin-telukintan",
    name_zh: "安顺三民独立中学",
    name_en: "San Min Independent High School Teluk Intan",
    name_ms: "Sekolah Menengah San Min Persendirian",
    abbreviation: "三民独中",
    founding_year: 1929,
    school_category: "traditional_60",
    location: {
      state: "霹雳",
      city: "安顺",
      address: "Jalan Abdul Rahman, 36000 Teluk Intan, Perak",
      postcode: "36000",
      latitude: 4.0152,
      longitude: 101.0205
    },
    contact: {
      phone: "+60-5-6221622",
      website_url: "https://sanmin.edu.my"
    },
    academics: {
      track_type: "双轨制 (UEC统考 + SPM政府考试)",
      secondary_levels: ["初一", "初二", "初三", "高一", "高二", "高三"],
      senior_tracks: ["理科", "商科"],
      academic_highlights: "以军事化/半军事化严格品德管理著称，深受雪隆外州家长信赖"
    },
    costs_and_fees: {
      currency: "MYR",
      tuition_junior_yearly: 3200,
      first_year_est_day_student: 4200,
      first_year_est_boarder: 9500
    },
    dormitory_and_boarding: {
      has_dormitory: true,
      dorm_gender: "男女宿舍兼备",
      dorm_capacity: 500,
      study_hall_rules: "晚自习纪律严明，严禁电子娱乐"
    },
    admission_intake: {
      intake_year: 2026,
      registration_start: "2026-06-15",
      registration_deadline: "2026-10-15",
      entrance_exam_date: "2026-10-24",
      exam_subjects: ["华文", "国文", "英文", "数学"]
    },
    fit_tags: ["纪律严管典范", "雪隆外派寄宿首选", "品格教育", "性价比较高"],
    verification_status: {
      source_level: "official_school_verified",
      is_verified: true,
      last_updated: "2026-03-01"
    }
  },
  {
    school_id: "yikching-pantai",
    name_zh: "班台育青中学",
    name_en: "Yik Ching High School Pantai Remis",
    name_ms: "Sekolah Menengah Yik Ching",
    abbreviation: "育青中学",
    founding_year: 1962,
    school_category: "traditional_60",
    location: {
      state: "霹雳",
      city: "班台",
      address: "Pantai Remis, 34900 Perak"
    },
    contact: {
      phone: "+60-5-6771343",
      website_url: "https://yikching.edu.my"
    },
    academics: {
      track_type: "双轨制 (UEC统考 + SPM政府考试)",
      secondary_levels: ["初一", "初二", "初三", "高一", "高二", "高三"],
      senior_tracks: ["文商科"]
    },
    costs_and_fees: {
      currency: "MYR",
      tuition_junior_yearly: 2800,
      first_year_est_day_student: 3600,
      first_year_est_boarder: 8000
    },
    dormitory_and_boarding: {
      has_dormitory: true,
      dorm_gender: "男女宿舍兼备"
    },
    fit_tags: ["渔村关怀学府", "小班师生比极高", "低学费", "温暖寄宿"],
    verification_status: {
      source_level: "dongzong_report",
      is_verified: true,
      last_updated: "2026-03-01"
    }
  },
  {
    school_id: "tsungwah-kk",
    name_zh: "江沙崇华独立中学",
    name_en: "Tsung Wah Private High School",
    name_ms: "Sekolah Menengah Tsung Wah",
    abbreviation: "崇华独中",
    founding_year: 1957,
    school_category: "traditional_60",
    location: {
      state: "霹雳",
      city: "江沙",
      address: "33000 Kuala Kangsar, Perak"
    },
    contact: {
      phone: "+60-5-7761484",
      website_url: "https://tsungwah.edu.my"
    },
    academics: {
      track_type: "双轨制 (UEC统考 + SPM政府考试)",
      secondary_levels: ["初一", "初二", "初三", "高一", "高二", "高三"],
      senior_tracks: ["商科", "农艺技职科"]
    },
    costs_and_fees: {
      currency: "MYR",
      tuition_junior_yearly: 2900,
      first_year_est_day_student: 3800,
      first_year_est_boarder: 8200
    },
    dormitory_and_boarding: {
      has_dormitory: true,
      dorm_gender: "男女宿舍兼备"
    },
    fit_tags: ["王城绿色独中", "精致小班", "农艺特色", "学风恬静"],
    verification_status: {
      source_level: "dongzong_report",
      is_verified: true,
      last_updated: "2026-03-01"
    }
  },
  {
    school_id: "nanhwa-manjung",
    name_zh: "曼绒南华独立中学",
    name_en: "Nan Hwa High School Manjung",
    name_ms: "Sekolah Menengah Nan Hwa",
    abbreviation: "南华独中",
    founding_year: 1936,
    school_category: "traditional_60",
    location: {
      state: "霹雳",
      city: "实兆远",
      address: "Kampung Koh, 32000 Sitiawan, Perak"
    },
    contact: {
      phone: "+60-5-6911365",
      website_url: "https://nanhwa.edu.my"
    },
    academics: {
      track_type: "双轨制 (UEC统考 + SPM政府考试)",
      secondary_levels: ["初一", "初二", "初三", "高一", "高二", "高三"],
      senior_tracks: ["理科", "商科"]
    },
    costs_and_fees: {
      currency: "MYR",
      tuition_junior_yearly: 3200,
      first_year_est_day_student: 4100,
      first_year_est_boarder: 8900
    },
    dormitory_and_boarding: {
      has_dormitory: true,
      dorm_gender: "男女宿舍兼备"
    },
    fit_tags: ["福州小福州文化", "全人关怀", "双轨并重", "寄宿温馨"],
    verification_status: {
      source_level: "dongzong_report",
      is_verified: true,
      last_updated: "2026-03-01"
    }
  },
  {
    school_id: "peiyuan-kampar",
    name_zh: "金宝培元独立中学",
    name_en: "Pei Yuan High School Kampar",
    name_ms: "Sekolah Menengah Pei Yuan",
    abbreviation: "培元独中",
    founding_year: 1912,
    school_category: "traditional_60",
    location: {
      state: "霹雳",
      city: "金宝",
      address: "Jalan Kuala Dipang, 31900 Kampar, Perak"
    },
    contact: {
      phone: "+60-5-4651343",
      website_url: "https://peiyuan.edu.my"
    },
    academics: {
      track_type: "双轨制 (UEC统考 + SPM政府考试)",
      secondary_levels: ["初一", "初二", "初三", "高一", "高二", "高三"],
      senior_tracks: ["理科", "商科"]
    },
    costs_and_fees: {
      currency: "MYR",
      tuition_junior_yearly: 3100,
      first_year_est_day_student: 4000,
      first_year_est_boarder: 8800
    },
    dormitory_and_boarding: {
      has_dormitory: true,
      dorm_gender: "男女宿舍兼备"
    },
    fit_tags: ["大学城近邻", "纯朴百年学府", "双轨制", "低生活成本"],
    verification_status: {
      source_level: "dongzong_report",
      is_verified: true,
      last_updated: "2026-03-01"
    }
  },

  // ===================== 7. 槟城 (5所) =====================
  {
    school_id: "chungling-penang",
    name_zh: "槟城钟灵独立中学",
    name_en: "Chung Ling Private High School Penang",
    name_ms: "Sekolah Menengah Persendirian Chung Ling",
    abbreviation: "钟灵独中",
    founding_year: 1962,
    school_category: "traditional_60",
    location: {
      state: "槟城",
      city: "乔治市",
      address: "Jalan Air Itam, 11400 George Town, Penang",
      postcode: "11400",
      latitude: 5.4042,
      longitude: 100.2952
    },
    contact: {
      phone: "+60-4-8282636",
      website_url: "https://clphs.edu.my"
    },
    academics: {
      track_type: "双轨制 (UEC统考 + SPM政府考试)",
      secondary_levels: ["初一", "初二", "初三", "高一", "高二", "高三"],
      senior_tracks: ["理科", "纯商科"],
      academic_highlights: "北马学术殿堂，国际数理与发明展金牌大户，全马五星级卓越私立学校"
    },
    costs_and_fees: {
      currency: "MYR",
      tuition_junior_yearly: 5200,
      first_year_est_day_student: 6600,
      first_year_est_boarder: 13500
    },
    dormitory_and_boarding: {
      has_dormitory: true,
      dorm_gender: "男女宿舍兼备",
      air_conditioned: "全冷气"
    },
    admission_intake: {
      intake_year: 2026,
      registration_start: "2026-06-01",
      registration_deadline: "2026-09-15",
      entrance_exam_date: "2026-10-03",
      exam_subjects: ["华文", "国文", "英文", "数学"]
    },
    fit_tags: ["北马学术第一校", "国际数理强校", "发明创新典范", "双轨顶尖", "外州生青睐"],
    verification_status: {
      source_level: "official_school_verified",
      is_verified: true,
      last_updated: "2026-03-01"
    }
  },
  {
    school_id: "hanchiang-penang",
    name_zh: "槟城韩江中学",
    name_en: "Han Chiang High School Penang",
    name_ms: "Sekolah Menengah Han Chiang",
    abbreviation: "韩江中学",
    founding_year: 1950,
    school_category: "traditional_60",
    location: {
      state: "槟城",
      city: "乔治市",
      address: "Lim Lean Teng Road, 11600 George Town, Penang",
      postcode: "11600"
    },
    contact: {
      phone: "+60-4-2811533",
      website_url: "https://hanchiang.edu.my"
    },
    academics: {
      track_type: "三轨制 (UEC + SPM + IGCSE国际课程)",
      secondary_levels: ["初一", "初二", "初三", "高一", "高二", "高三"],
      senior_tracks: ["理科", "纯商科"],
      academic_highlights: "创客空间（Maker Space）与机器人教育闻名，开办剑桥IGCSE与统考多轨"
    },
    costs_and_fees: {
      currency: "MYR",
      tuition_junior_yearly: 5500,
      first_year_est_day_student: 6900
    },
    dormitory_and_boarding: {
      has_dormitory: true,
      dorm_gender: "男女宿舍兼备"
    },
    fit_tags: ["三轨国际化", "创客与STEAM", "机器人全国冠军", "设施先进"],
    verification_status: {
      source_level: "official_school_verified",
      is_verified: true,
      last_updated: "2026-03-01"
    }
  },
  {
    school_id: "pcg-penang",
    name_zh: "槟城槟华女子独立中学",
    name_en: "Penang Chinese Girls' Private High School",
    name_ms: "Sekolah Menengah Perempuan Cina Persendirian",
    abbreviation: "槟华独中",
    founding_year: 1919,
    school_category: "traditional_60",
    location: {
      state: "槟城",
      city: "乔治市",
      address: "Jalan Gottlieb, 10350 George Town, Penang"
    },
    contact: {
      phone: "+60-4-2265603",
      website_url: "https://binhua.edu.my"
    },
    academics: {
      track_type: "双轨制 (UEC统考 + SPM政府考试)",
      secondary_levels: ["初一", "初二", "初三", "高一", "高二", "高三"],
      senior_tracks: ["理科", "商科"]
    },
    costs_and_fees: {
      currency: "MYR",
      tuition_junior_yearly: 4500,
      first_year_est_day_student: 5600,
      first_year_est_boarder: 11500
    },
    dormitory_and_boarding: {
      has_dormitory: true,
      dorm_gender: "仅限女宿"
    },
    fit_tags: ["全马唯一纯女校独中", "淑女品格培养", "双轨并重", "女宿规范"],
    verification_status: {
      source_level: "official_school_verified",
      is_verified: true,
      last_updated: "2026-03-01"
    }
  },
  {
    school_id: "phortay-penang",
    name_zh: "槟城菩提独立中学",
    name_en: "Phor Tay Private High School",
    name_ms: "Sekolah Menengah Persendirian Phor Tay",
    abbreviation: "菩提独中",
    founding_year: 1940,
    school_category: "traditional_60",
    location: {
      state: "槟城",
      city: "乔治市",
      address: "Jalan Bagan Jermal, 10250 George Town, Penang"
    },
    contact: {
      phone: "+60-4-2271469",
      website_url: "https://phortay.edu.my"
    },
    academics: {
      track_type: "双轨制 (UEC统考 + SPM政府考试)",
      secondary_levels: ["初一", "初二", "初三", "高一", "高二", "高三"],
      senior_tracks: ["文商科"]
    },
    costs_and_fees: {
      currency: "MYR",
      tuition_junior_yearly: 3600,
      first_year_est_day_student: 4600
    },
    dormitory_and_boarding: {
      has_dormitory: false,
      dorm_gender: "无宿舍"
    },
    fit_tags: ["佛化教育", "慈悲关怀", "小班教学", "品格涵养"],
    verification_status: {
      source_level: "dongzong_report",
      is_verified: true,
      last_updated: "2026-03-01"
    }
  },
  {
    school_id: "jitsin-bm",
    name_zh: "大山脚日新独立中学",
    name_en: "Jit Sin Independent High School",
    name_ms: "Sekolah Menengah Persendirian Jit Sin",
    abbreviation: "日新独中",
    founding_year: 1918,
    school_category: "traditional_60",
    location: {
      state: "槟城",
      city: "大山脚",
      address: "Aston Road, 14000 Bukit Mertajam, Penang"
    },
    contact: {
      phone: "+60-4-5396023",
      website_url: "https://jitsin-ind.edu.my"
    },
    academics: {
      track_type: "双轨制 (UEC统考 + SPM政府考试)",
      secondary_levels: ["初一", "初二", "初三", "高一", "高二", "高三"],
      senior_tracks: ["理科", "商科", "美术设计技职科"],
      academic_highlights: "威省第一学府，学业成绩极为优异，校风严谨注重传统道德"
    },
    costs_and_fees: {
      currency: "MYR",
      tuition_junior_yearly: 4200,
      first_year_est_day_student: 5300,
      first_year_est_boarder: 11200
    },
    dormitory_and_boarding: {
      has_dormitory: true,
      dorm_gender: "男女宿舍兼备"
    },
    admission_intake: {
      intake_year: 2026,
      registration_start: "2026-06-01",
      registration_deadline: "2026-09-20",
      entrance_exam_date: "2026-10-10",
      exam_subjects: ["华文", "国文", "英文", "数学"]
    },
    fit_tags: ["威省名校龙头", "双轨顶尖", "严谨自律", "美术科优异", "高性价比"],
    verification_status: {
      source_level: "official_school_verified",
      is_verified: true,
      last_updated: "2026-03-01"
    }
  },

  // ===================== 8. 吉打 (3所) =====================
  {
    school_id: "keathwa-as",
    name_zh: "亚罗士打吉华独立中学",
    name_en: "Keat Hwa Private High School",
    name_ms: "Sekolah Menengah Keat Hwa (Persendirian)",
    abbreviation: "吉华独中",
    founding_year: 1911,
    school_category: "traditional_60",
    location: {
      state: "吉打",
      city: "亚罗士打",
      address: "Jalan Pegawai, 05050 Alor Setar, Kedah"
    },
    contact: {
      phone: "+60-4-7711053",
      website_url: "https://keathwa.edu.my"
    },
    academics: {
      track_type: "双轨制 (UEC统考 + SPM政府考试)",
      secondary_levels: ["初一", "初二", "初三", "高一", "高二", "高三"],
      senior_tracks: ["理科", "纯商科", "文商科"]
    },
    costs_and_fees: {
      currency: "MYR",
      tuition_junior_yearly: 3600,
      first_year_est_day_student: 4600,
      first_year_est_boarder: 9800
    },
    dormitory_and_boarding: {
      has_dormitory: true,
      dorm_gender: "男女宿舍兼备"
    },
    fit_tags: ["米都名校", "管乐华乐全国拔尖", "双轨制", "寄宿大楼完善"],
    verification_status: {
      source_level: "official_school_verified",
      is_verified: true,
      last_updated: "2026-03-01"
    }
  },
  {
    school_id: "sinmin-as",
    name_zh: "亚罗士打新民独立中学",
    name_en: "Sin Min Private High School Alor Setar",
    name_ms: "Sekolah Menengah Sin Min (Persendirian)",
    abbreviation: "吉打新民独中",
    founding_year: 1957,
    school_category: "traditional_60",
    location: {
      state: "吉打",
      city: "亚罗士打",
      address: "Jalan Tambang Badak, 05100 Alor Setar, Kedah"
    },
    contact: {
      phone: "+60-4-7323817",
      website_url: "https://sinminas.edu.my"
    },
    academics: {
      track_type: "双轨制 (UEC统考 + SPM政府考试)",
      secondary_levels: ["初一", "初二", "初三", "高一", "高二", "高三"],
      senior_tracks: ["文商科"]
    },
    costs_and_fees: {
      currency: "MYR",
      tuition_junior_yearly: 3100,
      first_year_est_day_student: 4000,
      first_year_est_boarder: 8800
    },
    dormitory_and_boarding: {
      has_dormitory: true,
      dorm_gender: "男女宿舍兼备"
    },
    fit_tags: ["小班关怀", "亲切师生关系", "双轨制", "平价寄宿"],
    verification_status: {
      source_level: "dongzong_report",
      is_verified: true,
      last_updated: "2026-03-01"
    }
  },
  {
    school_id: "sinmin-sp",
    name_zh: "双溪大年新民独立中学",
    name_en: "Sin Min Private High School Sungai Petani",
    name_ms: "Sekolah Menengah Sin Min (Persendirian) SP",
    abbreviation: "大年新民独中",
    founding_year: 1957,
    school_category: "traditional_60",
    location: {
      state: "吉打",
      city: "双溪大年",
      address: "Jalan Pengkalan, 08000 Sungai Petani, Kedah"
    },
    contact: {
      phone: "+60-4-4212574",
      website_url: "https://sinmin.edu.my"
    },
    academics: {
      track_type: "双轨制 (UEC统考 + SPM政府考试)",
      secondary_levels: ["初一", "初二", "初三", "高一", "高二", "高三"],
      senior_tracks: ["理科", "商科"]
    },
    costs_and_fees: {
      currency: "MYR",
      tuition_junior_yearly: 3400,
      first_year_est_day_student: 4400,
      first_year_est_boarder: 9400
    },
    dormitory_and_boarding: {
      has_dormitory: true,
      dorm_gender: "男女宿舍兼备"
    },
    fit_tags: ["吉南核心独中", "稳健双轨", "寄宿设施齐备", "性价比高"],
    verification_status: {
      source_level: "dongzong_report",
      is_verified: true,
      last_updated: "2026-03-01"
    }
  },

  // ===================== 9. 吉兰丹 (1所) =====================
  {
    school_id: "chunghwa-kelantan",
    name_zh: "吉兰丹中华独立中学",
    name_en: "Chung Hwa Independent High School Kelantan",
    name_ms: "Sekolah Menengah Persendirian Chung Hwa Kelantan",
    abbreviation: "丹中",
    founding_year: 1918,
    school_category: "traditional_60",
    location: {
      state: "吉兰丹",
      city: "柯拉娜",
      address: "Kok Lanas, 16400 Ketereh, Kelantan",
      postcode: "16400"
    },
    contact: {
      phone: "+60-9-7886221",
      website_url: "https://chsk.edu.my"
    },
    academics: {
      track_type: "双轨制 (UEC统考 + SPM政府考试)",
      secondary_levels: ["初一", "初二", "初三", "高一", "高二", "高三"],
      senior_tracks: ["理科", "文商科"],
      academic_highlights: "全马全寄宿比例最高的独中之一，学分制自主选课，生态自然校园"
    },
    costs_and_fees: {
      currency: "MYR",
      tuition_junior_yearly: 3200,
      first_year_est_day_student: 4200,
      first_year_est_boarder: 9200
    },
    dormitory_and_boarding: {
      has_dormitory: true,
      dorm_gender: "男女宿舍兼备",
      dorm_capacity: 400,
      meal_plan: "包一日三餐"
    },
    fit_tags: ["全寄宿制特色", "学分制选课先驱", "东海岸华教灯塔", "独立自理能力强化"],
    verification_status: {
      source_level: "official_school_verified",
      is_verified: true,
      last_updated: "2026-03-01"
    }
  },

  // ===================== 10. 彭亨 (1所) =====================
  {
    school_id: "chonghwa-kuantan",
    name_zh: "关丹中华中学",
    name_en: "Chong Hwa High School Kuantan",
    name_ms: "Sekolah Menengah Chong Hwa Kuantan",
    abbreviation: "关中",
    founding_year: 2012,
    school_category: "conforming_private_kuantan",
    location: {
      state: "彭亨",
      city: "关丹",
      address: "Lot 8798, Tanjung Lumpur, 26060 Kuantan, Pahang",
      postcode: "26060",
      latitude: 3.7651,
      longitude: 103.3289
    },
    contact: {
      phone: "+60-9-5343628",
      website_url: "https://chhs.edu.my/kuantan"
    },
    academics: {
      track_type: "双轨制 (UEC统考 + SPM政府考试)",
      secondary_levels: ["初一", "初二", "初三", "高一", "高二", "高三"],
      senior_tracks: ["理科", "商科"],
      academic_highlights: "东海岸现代化独中，复办获批报考统考，高标准寄宿与全冷气校舍"
    },
    costs_and_fees: {
      currency: "MYR",
      tuition_junior_yearly: 4800,
      first_year_est_day_student: 6000,
      first_year_est_boarder: 12500
    },
    dormitory_and_boarding: {
      has_dormitory: true,
      dorm_gender: "男女宿舍兼备",
      air_conditioned: "全冷气"
    },
    admission_intake: {
      intake_year: 2026,
      registration_start: "2026-06-01",
      registration_deadline: "2026-09-30",
      entrance_exam_date: "2026-10-10",
      exam_subjects: ["华文", "国文", "英文", "数学"]
    },
    fit_tags: ["东海岸现代化独中", "双轨制", "全冷气宿舍", "寄宿管理规范"],
    verification_status: {
      source_level: "official_school_verified",
      is_verified: true,
      last_updated: "2026-03-01"
    }
  },

  // ===================== 11. 沙巴 (9所) =====================
  {
    school_id: "tshungtsin-kk",
    name_zh: "沙巴崇正中学",
    name_en: "Sabah Tshung Tsin Secondary School",
    name_ms: "Sekolah Menengah Tshung Tsin Sabah",
    abbreviation: "沙巴崇正",
    founding_year: 1965,
    school_category: "traditional_60",
    location: {
      state: "沙巴",
      city: "亚庇",
      address: "Jalan Damai, Luyang, 88300 Kota Kinabalu, Sabah",
      postcode: "88300",
      latitude: 5.9612,
      longitude: 116.0963
    },
    contact: {
      phone: "+60-88-254154",
      website_url: "https://sttss.edu.my"
    },
    academics: {
      track_type: "双轨制 (UEC统考 + SPM政府考试)",
      secondary_levels: ["初一", "初二", "初三", "高一", "高二", "高三"],
      senior_tracks: ["理科", "商科"],
      academic_highlights: "东马独中学术龙头，全马学术与统考表现排头兵，软硬件一流"
    },
    costs_and_fees: {
      currency: "MYR",
      tuition_junior_yearly: 4800,
      first_year_est_day_student: 6000,
      first_year_est_boarder: 12800
    },
    dormitory_and_boarding: {
      has_dormitory: true,
      dorm_gender: "男女宿舍兼备"
    },
    admission_intake: {
      intake_year: 2026,
      registration_start: "2026-06-01",
      registration_deadline: "2026-09-15",
      entrance_exam_date: "2026-09-26",
      exam_subjects: ["华文", "国文", "英文", "数学"]
    },
    fit_tags: ["东马学术龙头", "双轨强校", "沙巴第一学府", "寄宿设施齐全"],
    verification_status: {
      source_level: "official_school_verified",
      is_verified: true,
      last_updated: "2026-03-01"
    }
  },
  {
    school_id: "kiankok-kk",
    name_zh: "亚庇建国中学",
    name_en: "Kian Kok Middle School",
    name_ms: "Sekolah Menengah Kian Kok",
    abbreviation: "建国中学",
    founding_year: 1963,
    school_category: "traditional_60",
    location: {
      state: "沙巴",
      city: "亚庇",
      address: "Jalan Tuaran, 88810 Kota Kinabalu, Sabah"
    },
    contact: {
      phone: "+60-88-254924",
      website_url: "https://kiankok.edu.my"
    },
    academics: {
      track_type: "双轨制 (UEC统考 + SPM政府考试)",
      secondary_levels: ["初一", "初二", "初三", "高一", "高二", "高三"],
      senior_tracks: ["理科", "商科"]
    },
    costs_and_fees: {
      currency: "MYR",
      tuition_junior_yearly: 4400,
      first_year_est_day_student: 5500,
      first_year_est_boarder: 11800
    },
    dormitory_and_boarding: {
      has_dormitory: true,
      dorm_gender: "男女宿舍兼备"
    },
    fit_tags: ["科学创客特色", "现代教学楼", "双轨制", "亚庇核心校"],
    verification_status: {
      source_level: "dongzong_report",
      is_verified: true,
      last_updated: "2026-03-01"
    }
  },
  {
    school_id: "bahua-tawau",
    name_zh: "斗湖巴华中学",
    name_en: "Tawau Chinese Secondary School",
    name_ms: "Sekolah Menengah Cina Sabah Tawau",
    abbreviation: "巴华中学",
    founding_year: 1964,
    school_category: "traditional_60",
    location: {
      state: "沙巴",
      city: "斗湖",
      address: "Jalan Kuhara, 91007 Tawau, Sabah"
    },
    contact: {
      phone: "+60-89-772975",
      website_url: "https://bahua.edu.my"
    },
    academics: {
      track_type: "双轨制 (UEC统考 + SPM政府考试)",
      secondary_levels: ["初一", "初二", "初三", "高一", "高二", "高三"],
      senior_tracks: ["理科", "商科"]
    },
    costs_and_fees: {
      currency: "MYR",
      tuition_junior_yearly: 3600,
      first_year_est_day_student: 4600,
      first_year_est_boarder: 9800
    },
    dormitory_and_boarding: {
      has_dormitory: true,
      dorm_gender: "男女宿舍兼备"
    },
    fit_tags: ["沙巴东海岸名校", "三语并重", "双轨制", "寄宿完善"],
    verification_status: {
      source_level: "dongzong_report",
      is_verified: true,
      last_updated: "2026-03-01"
    }
  },
  {
    school_id: "yuyuan-sandakan",
    name_zh: "山打根育源中学",
    name_en: "Yu Yuan Secondary School Sandakan",
    name_ms: "Sekolah Menengah Yu Yuan",
    abbreviation: "育源中学",
    founding_year: 1962,
    school_category: "traditional_60",
    location: {
      state: "沙巴",
      city: "山打根",
      address: "Batu 4, Jalan Sibuga, 90000 Sandakan, Sabah"
    },
    contact: {
      phone: "+60-89-631070",
      website_url: "https://yuyuan.edu.my"
    },
    academics: {
      track_type: "双轨制 (UEC统考 + SPM政府考试)",
      secondary_levels: ["初一", "初二", "初三", "高一", "高二", "高三"],
      senior_tracks: ["理科", "商科"]
    },
    costs_and_fees: {
      currency: "MYR",
      tuition_junior_yearly: 3600,
      first_year_est_day_student: 4600,
      first_year_est_boarder: 9800
    },
    dormitory_and_boarding: {
      has_dormitory: true,
      dorm_gender: "男女宿舍兼备"
    },
    fit_tags: ["资讯科技先行", "山打根最高学府", "双轨制", "寄宿大楼"],
    verification_status: {
      source_level: "dongzong_report",
      is_verified: true,
      last_updated: "2026-03-01"
    }
  },
  {
    school_id: "lahaddatu-ms",
    name_zh: "拿笃中学",
    name_en: "Lahad Datu Middle School",
    name_ms: "Sekolah Menengah Lahad Datu",
    abbreviation: "笃中",
    founding_year: 1969,
    school_category: "traditional_60",
    location: {
      state: "沙巴",
      city: "拿笃",
      address: "Jalan Tengah Nipah, 91100 Lahad Datu, Sabah"
    },
    contact: {
      phone: "+60-89-881502",
      website_url: "https://ldms.edu.my"
    },
    academics: {
      track_type: "双轨制 (UEC统考 + SPM政府考试)",
      secondary_levels: ["初一", "初二", "初三", "高一", "高二", "高三"],
      senior_tracks: ["商科"]
    },
    costs_and_fees: {
      currency: "MYR",
      tuition_junior_yearly: 3000,
      first_year_est_day_student: 3900,
      first_year_est_boarder: 8500
    },
    dormitory_and_boarding: {
      has_dormitory: true,
      dorm_gender: "男女宿舍兼备"
    },
    fit_tags: ["社区温暖学府", "小班教学", "双轨制", "关怀寄宿"],
    verification_status: {
      source_level: "dongzong_report",
      is_verified: true,
      last_updated: "2026-03-01"
    }
  },
  {
    school_id: "tenom-ttss",
    name_zh: "丹南崇正中学",
    name_en: "Tenom Tshung Tsin Secondary School",
    name_ms: "Sekolah Menengah Tshung Tsin Tenom",
    abbreviation: "丹南崇正",
    founding_year: 1965,
    school_category: "traditional_60",
    location: {
      state: "沙巴",
      city: "丹南",
      address: "89907 Tenom, Sabah"
    },
    contact: {
      phone: "+60-87-735414",
      website_url: "https://tenomttss.edu.my"
    },
    academics: {
      track_type: "双轨制 (UEC统考 + SPM政府考试)",
      secondary_levels: ["初一", "初二", "初三", "高一", "高二", "高三"],
      senior_tracks: ["商科"]
    },
    costs_and_fees: {
      currency: "MYR",
      tuition_junior_yearly: 2600,
      first_year_est_day_student: 3400,
      first_year_est_boarder: 7800
    },
    dormitory_and_boarding: {
      has_dormitory: true,
      dorm_gender: "男女宿舍兼备"
    },
    fit_tags: ["咖啡之乡学府", "纯朴校风", "高性价比", "小班教育"],
    verification_status: {
      source_level: "dongzong_report",
      is_verified: true,
      last_updated: "2026-03-01"
    }
  },
  {
    school_id: "beaufort-ms",
    name_zh: "保佛中学",
    name_en: "Beaufort Middle School",
    name_ms: "Sekolah Menengah Beaufort",
    abbreviation: "保佛中学",
    founding_year: 1970,
    school_category: "traditional_60",
    location: {
      state: "沙巴",
      city: "保佛",
      address: "89807 Beaufort, Sabah"
    },
    contact: {
      phone: "+60-87-211516",
      website_url: "https://beaufortms.edu.my"
    },
    academics: {
      track_type: "双轨制 (UEC统考 + SPM政府考试)",
      secondary_levels: ["初一", "初二", "初三", "高一", "高二", "高三"],
      senior_tracks: ["商科"]
    },
    costs_and_fees: {
      currency: "MYR",
      tuition_junior_yearly: 2600,
      first_year_est_day_student: 3400,
      first_year_est_boarder: 7800
    },
    dormitory_and_boarding: {
      has_dormitory: true,
      dorm_gender: "男女宿舍兼备"
    },
    fit_tags: ["微型关怀独中", "平价亲民", "师生如家人", "寄宿安全"],
    verification_status: {
      source_level: "dongzong_report",
      is_verified: true,
      last_updated: "2026-03-01"
    }
  },
  {
    school_id: "papar-ms",
    name_zh: "吧巴中学",
    name_en: "Papar Middle School",
    name_ms: "Sekolah Menengah Papar",
    abbreviation: "吧中",
    founding_year: 1965,
    school_category: "traditional_60",
    location: {
      state: "沙巴",
      city: "吧巴",
      address: "89600 Papar, Sabah"
    },
    contact: {
      phone: "+60-88-913437",
      website_url: "https://paparms.edu.my"
    },
    academics: {
      track_type: "双轨制 (UEC统考 + SPM政府考试)",
      secondary_levels: ["初一", "初二", "初三", "高一", "高二", "高三"],
      senior_tracks: ["商科"]
    },
    costs_and_fees: {
      currency: "MYR",
      tuition_junior_yearly: 2600,
      first_year_est_day_student: 3400,
      first_year_est_boarder: 7800
    },
    dormitory_and_boarding: {
      has_dormitory: true,
      dorm_gender: "男女宿舍兼备"
    },
    fit_tags: ["小班温馨学府", "双轨制", "生活能力培养", "低学费"],
    verification_status: {
      source_level: "dongzong_report",
      is_verified: true,
      last_updated: "2026-03-01"
    }
  },
  {
    school_id: "peitsin-kudat",
    name_zh: "古达培正中学",
    name_en: "Pei Tsin High School Kudat",
    name_ms: "Sekolah Menengah Pei Tsin Kudat",
    abbreviation: "培正独中",
    founding_year: 1970,
    school_category: "traditional_60",
    location: {
      state: "沙巴",
      city: "古达",
      address: "89057 Kudat, Sabah"
    },
    contact: {
      phone: "+60-88-611425",
      website_url: "https://peitsin.edu.my"
    },
    academics: {
      track_type: "双轨制 (UEC统考 + SPM政府考试)",
      secondary_levels: ["初一", "初二", "初三", "高一", "高二", "高三"],
      senior_tracks: ["商科"]
    },
    costs_and_fees: {
      currency: "MYR",
      tuition_junior_yearly: 2500,
      first_year_est_day_student: 3300,
      first_year_est_boarder: 7600
    },
    dormitory_and_boarding: {
      has_dormitory: true,
      dorm_gender: "男女宿舍兼备"
    },
    fit_tags: ["沙巴最北端华教灯塔", "微型关怀", "亲民费用", "寄宿温馨"],
    verification_status: {
      source_level: "dongzong_report",
      is_verified: true,
      last_updated: "2026-03-01"
    }
  },

  // ===================== 12. 砂拉越 (14所) =====================
  {
    school_id: "chms1-kuching",
    name_zh: "古晋中华第一中学",
    name_en: "Chung Hua Middle School No. 1",
    name_ms: "Sekolah Menengah Chung Hua No. 1 Kuching",
    abbreviation: "古晋一中",
    founding_year: 1958,
    school_category: "traditional_60",
    location: {
      state: "砂拉越",
      city: "古晋",
      address: "Jalan Pending, 93450 Kuching, Sarawak",
      postcode: "93450",
      latitude: 1.5541,
      longitude: 110.3708
    },
    contact: {
      phone: "+60-82-331599",
      website_url: "https://chms1.edu.my"
    },
    academics: {
      track_type: "并存/自选单双轨 (学生按班别自选)",
      secondary_levels: ["初一", "初二", "初三", "高一", "高二", "高三"],
      senior_tracks: ["理科", "文商科"],
      academic_highlights: "砂拉越旗舰独中，获砂拉越政府常年大额拔款与统考官方承认支持"
    },
    costs_and_fees: {
      currency: "MYR",
      tuition_junior_yearly: 3500,
      first_year_est_day_student: 4500,
      first_year_est_boarder: 9500
    },
    dormitory_and_boarding: {
      has_dormitory: true,
      dorm_gender: "男女宿舍兼备"
    },
    fit_tags: ["砂拉越旗舰名校", "受州政府支持承认", "全人与学术兼备", "性价比较高"],
    verification_status: {
      source_level: "official_school_verified",
      is_verified: true,
      last_updated: "2026-03-01"
    }
  },
  {
    school_id: "chms3-kuching",
    name_zh: "古晋中华第三中学",
    name_en: "Chung Hua Middle School No. 3",
    name_ms: "Sekolah Menengah Chung Hua No. 3 Kuching",
    abbreviation: "古晋三中",
    founding_year: 1958,
    school_category: "traditional_60",
    location: {
      state: "砂拉越",
      city: "古晋",
      address: "Jalan Tan Sri Datuk William Tan, 93450 Kuching, Sarawak"
    },
    contact: {
      phone: "+60-82-331566",
      website_url: "https://chms3.edu.my"
    },
    academics: {
      track_type: "双轨制 (UEC统考 + SPM政府考试)",
      secondary_levels: ["初一", "初二", "初三", "高一", "高二", "高三"],
      senior_tracks: ["商科", "资讯与电脑技职科"]
    },
    costs_and_fees: {
      currency: "MYR",
      tuition_junior_yearly: 3200,
      first_year_est_day_student: 4100,
      first_year_est_boarder: 9000
    },
    dormitory_and_boarding: {
      has_dormitory: true,
      dorm_gender: "男女宿舍兼备"
    },
    fit_tags: ["技职与商科见长", "双轨并重", "关怀寄宿", "古晋核心校"],
    verification_status: {
      source_level: "dongzong_report",
      is_verified: true,
      last_updated: "2026-03-01"
    }
  },
  {
    school_id: "chms4-kuching",
    name_zh: "古晋中华第四中学",
    name_en: "Chung Hua Middle School No. 4",
    name_ms: "Sekolah Menengah Chung Hua No. 4 Kuching",
    abbreviation: "古晋四中",
    founding_year: 1960,
    school_category: "traditional_60",
    location: {
      state: "砂拉越",
      city: "古晋",
      address: "Jalan Haji Taha, 93400 Kuching, Sarawak"
    },
    contact: {
      phone: "+60-82-243860",
      website_url: "https://chms4.edu.my"
    },
    academics: {
      track_type: "双轨制 (UEC统考 + SPM政府考试)",
      secondary_levels: ["初一", "初二", "初三", "高一", "高二", "高三"],
      senior_tracks: ["商科"]
    },
    costs_and_fees: {
      currency: "MYR",
      tuition_junior_yearly: 3200,
      first_year_est_day_student: 4100
    },
    dormitory_and_boarding: {
      has_dormitory: false,
      dorm_gender: "无宿舍"
    },
    fit_tags: ["赏识教育典范", "行知赏识文化", "精品小班", "充满爱与正能量"],
    verification_status: {
      source_level: "official_school_verified",
      is_verified: true,
      last_updated: "2026-03-01"
    }
  },
  {
    school_id: "minlit-batukawa",
    name_zh: "石角民立中学",
    name_en: "Min Lit Secondary School Batu Kawa",
    name_ms: "Sekolah Menengah Min Lit Batu Kawa",
    abbreviation: "民立中学",
    founding_year: 1967,
    school_category: "traditional_60",
    location: {
      state: "砂拉越",
      city: "石角",
      address: "Batu Kawa, 93250 Kuching, Sarawak"
    },
    contact: {
      phone: "+60-82-682788",
      website_url: "https://minlit.edu.my"
    },
    academics: {
      track_type: "双轨制 (UEC统考 + SPM政府考试)",
      secondary_levels: ["初一", "初二", "初三", "高一", "高二", "高三"],
      senior_tracks: ["商科"]
    },
    costs_and_fees: {
      currency: "MYR",
      tuition_junior_yearly: 2800,
      first_year_est_day_student: 3600,
      first_year_est_boarder: 8200
    },
    dormitory_and_boarding: {
      has_dormitory: true,
      dorm_gender: "男女宿舍兼备"
    },
    fit_tags: ["郊区坚守学府", "平价亲民", "温馨关怀", "小班教学"],
    verification_status: {
      source_level: "dongzong_report",
      is_verified: true,
      last_updated: "2026-03-01"
    }
  },
  {
    school_id: "public-serian",
    name_zh: "西连民众中学",
    name_en: "Public Secondary School Serian",
    name_ms: "Sekolah Menengah Awam Serian",
    abbreviation: "西连民众",
    founding_year: 1968,
    school_category: "traditional_60",
    location: {
      state: "砂拉越",
      city: "西连",
      address: "94700 Serian, Sarawak"
    },
    contact: {
      phone: "+60-82-874288",
      website_url: "https://serianpublic.edu.my"
    },
    academics: {
      track_type: "双轨制 (UEC统考 + SPM政府考试)",
      secondary_levels: ["初一", "初二", "初三", "高一", "高二", "高三"],
      senior_tracks: ["商科"]
    },
    costs_and_fees: {
      currency: "MYR",
      tuition_junior_yearly: 2600,
      first_year_est_day_student: 3400,
      first_year_est_boarder: 7800
    },
    dormitory_and_boarding: {
      has_dormitory: true,
      dorm_gender: "男女宿舍兼备"
    },
    fit_tags: ["乡村微型独中", "土著生融合典范", "学费低廉", "关怀寄宿"],
    verification_status: {
      source_level: "dongzong_report",
      is_verified: true,
      last_updated: "2026-03-01"
    }
  },
  {
    school_id: "catholic-sibu",
    name_zh: "诗巫公教中学",
    name_en: "Catholic High School Sibu",
    name_ms: "Sekolah Menengah Katolik Sibu",
    abbreviation: "诗巫公教",
    founding_year: 1960,
    school_category: "traditional_60",
    location: {
      state: "砂拉越",
      city: "诗巫",
      address: "Jalan Lanang, 96000 Sibu, Sarawak"
    },
    contact: {
      phone: "+60-84-322327",
      website_url: "https://chs-sibu.edu.my"
    },
    academics: {
      track_type: "双轨制 (UEC统考 + SPM政府考试)",
      secondary_levels: ["初一", "初二", "初三", "高一", "高二", "高三"],
      senior_tracks: ["理科", "纯商科"],
      academic_highlights: "修士创办严谨治学，诗巫独中学术龙头，统考与SPM屡创佳绩"
    },
    costs_and_fees: {
      currency: "MYR",
      tuition_junior_yearly: 3600,
      first_year_est_day_student: 4600,
      first_year_est_boarder: 9600
    },
    dormitory_and_boarding: {
      has_dormitory: true,
      dorm_gender: "男女宿舍兼备"
    },
    fit_tags: ["诗巫学术第一校", "纪律严谨", "修士治学传统", "双轨顶尖"],
    verification_status: {
      source_level: "official_school_verified",
      is_verified: true,
      last_updated: "2026-03-01"
    }
  },
  {
    school_id: "wns-sibu",
    name_zh: "诗巫黄乃裳中学",
    name_en: "Wong Nai Siong Secondary School",
    name_ms: "Sekolah Menengah Wong Nai Siong",
    abbreviation: "黄中",
    founding_year: 1967,
    school_category: "traditional_60",
    location: {
      state: "砂拉越",
      city: "诗巫",
      address: "Jalan Wong Nai Siong, 96000 Sibu, Sarawak"
    },
    contact: {
      phone: "+60-84-323605",
      website_url: "https://wns.edu.my"
    },
    academics: {
      track_type: "双轨制 (UEC统考 + SPM政府考试)",
      secondary_levels: ["初一", "初二", "初三", "高一", "高二", "高三"],
      senior_tracks: ["理科", "商科"]
    },
    costs_and_fees: {
      currency: "MYR",
      tuition_junior_yearly: 3200,
      first_year_est_day_student: 4100,
      first_year_est_boarder: 8900
    },
    dormitory_and_boarding: {
      has_dormitory: true,
      dorm_gender: "男女宿舍兼备"
    },
    fit_tags: ["纪念垦场港主", "福州文化底蕴", "双轨并重", "设施现代"],
    verification_status: {
      source_level: "dongzong_report",
      is_verified: true,
      last_updated: "2026-03-01"
    }
  },
  {
    school_id: "guongming-sibu",
    name_zh: "诗巫光民中学",
    name_en: "Guong Ming Middle School Sibu",
    name_ms: "Sekolah Menengah Guong Ming Sibu",
    abbreviation: "光民中学",
    founding_year: 1952,
    school_category: "traditional_60",
    location: {
      state: "砂拉越",
      city: "诗巫",
      address: "Sungai Bidut, 96000 Sibu, Sarawak"
    },
    contact: {
      phone: "+60-84-319565",
      website_url: "https://guongming.edu.my"
    },
    academics: {
      track_type: "双轨制 (UEC统考 + SPM政府考试)",
      secondary_levels: ["初一", "初二", "初三", "高一", "高二", "高三"],
      senior_tracks: ["商科"]
    },
    costs_and_fees: {
      currency: "MYR",
      tuition_junior_yearly: 2600,
      first_year_est_day_student: 3400,
      first_year_est_boarder: 7800
    },
    dormitory_and_boarding: {
      has_dormitory: true,
      dorm_gender: "男女宿舍兼备"
    },
    fit_tags: ["拉让江畔学府", "农耕生态实践", "微型关怀", "低学费"],
    verification_status: {
      source_level: "dongzong_report",
      is_verified: true,
      last_updated: "2026-03-01"
    }
  },
  {
    school_id: "citizen-sibu",
    name_zh: "诗巫公民中学",
    name_en: "Citizen Middle School Sibu",
    name_ms: "Sekolah Menengah Citizen Sibu",
    abbreviation: "公民中学",
    founding_year: 1960,
    school_category: "traditional_60",
    location: {
      state: "砂拉越",
      city: "诗巫",
      address: "96000 Sibu, Sarawak"
    },
    contact: {
      phone: "+60-84-332387",
      website_url: "https://citizen.edu.my"
    },
    academics: {
      track_type: "双轨制 (UEC统考 + SPM政府考试)",
      secondary_levels: ["初一", "初二", "初三", "高一", "高二", "高三"],
      senior_tracks: ["商科"]
    },
    costs_and_fees: {
      currency: "MYR",
      tuition_junior_yearly: 2500,
      first_year_est_day_student: 3300,
      first_year_est_boarder: 7600
    },
    dormitory_and_boarding: {
      has_dormitory: true,
      dorm_gender: "男女宿舍兼备"
    },
    fit_tags: ["平价微型独中", "生活自律教育", "温馨寄宿", "注重品德"],
    verification_status: {
      source_level: "dongzong_report",
      is_verified: true,
      last_updated: "2026-03-01"
    }
  },
  {
    school_id: "kianghin-sibu",
    name_zh: "诗巫建兴中学",
    name_en: "Kiang Hin Middle School Sibu",
    name_ms: "Sekolah Menengah Kiang Hin Sibu",
    abbreviation: "建兴中学",
    founding_year: 1946,
    school_category: "traditional_60",
    location: {
      state: "砂拉越",
      city: "诗巫",
      address: "96000 Sibu, Sarawak"
    },
    contact: {
      phone: "+60-84-320219",
      website_url: "https://kianghin.edu.my"
    },
    academics: {
      track_type: "双轨制 (UEC统考 + SPM政府考试)",
      secondary_levels: ["初一", "初二", "初三", "高一", "高二", "高三"],
      senior_tracks: ["商科"]
    },
    costs_and_fees: {
      currency: "MYR",
      tuition_junior_yearly: 2500,
      first_year_est_day_student: 3300,
      first_year_est_boarder: 7600
    },
    dormitory_and_boarding: {
      has_dormitory: true,
      dorm_gender: "男女宿舍兼备"
    },
    fit_tags: ["乡村质朴独中", "小班师生互动", "双轨制", "低费用"],
    verification_status: {
      source_level: "dongzong_report",
      is_verified: true,
      last_updated: "2026-03-01"
    }
  },
  {
    school_id: "minglik-sarikei",
    name_zh: "泗里街民立中学",
    name_en: "Ming Lik Secondary School Sarikei",
    name_ms: "Sekolah Menengah Ming Lik Sarikei",
    abbreviation: "泗里街民立",
    founding_year: 1966,
    school_category: "traditional_60",
    location: {
      state: "砂拉越",
      city: "泗里街",
      address: "96100 Sarikei, Sarawak"
    },
    contact: {
      phone: "+60-84-651137",
      website_url: "https://minglik.edu.my"
    },
    academics: {
      track_type: "双轨制 (UEC统考 + SPM政府考试)",
      secondary_levels: ["初一", "初二", "初三", "高一", "高二", "高三"],
      senior_tracks: ["商科"]
    },
    costs_and_fees: {
      currency: "MYR",
      tuition_junior_yearly: 2600,
      first_year_est_day_student: 3400,
      first_year_est_boarder: 7800
    },
    dormitory_and_boarding: {
      has_dormitory: true,
      dorm_gender: "男女宿舍兼备"
    },
    fit_tags: ["胡椒之乡独中", "平民坚守学府", "小班全人", "寄宿温馨"],
    verification_status: {
      source_level: "dongzong_report",
      is_verified: true,
      last_updated: "2026-03-01"
    }
  },
  {
    school_id: "riam-miri",
    name_zh: "美里廉律中学",
    name_en: "Riam Road Secondary School Miri",
    name_ms: "Sekolah Menengah Riam Road Miri",
    abbreviation: "廉律中学",
    founding_year: 1968,
    school_category: "traditional_60",
    location: {
      state: "砂拉越",
      city: "美里",
      address: "Jalan Riam, 98000 Miri, Sarawak"
    },
    contact: {
      phone: "+60-85-612423",
      website_url: "https://riamroad.edu.my"
    },
    academics: {
      track_type: "三轨制 (UEC + SPM + IGCSE国际课程)",
      secondary_levels: ["初一", "初二", "初三", "高一", "高二", "高三"],
      senior_tracks: ["理科", "纯商科"],
      academic_highlights: "五星级现代化私立学府，三轨国际化，体育与舞蹈艺术享誉全国"
    },
    costs_and_fees: {
      currency: "MYR",
      tuition_junior_yearly: 4500,
      first_year_est_day_student: 5800,
      first_year_est_boarder: 12500
    },
    dormitory_and_boarding: {
      has_dormitory: true,
      dorm_gender: "男女宿舍兼备",
      air_conditioned: "全冷气"
    },
    fit_tags: ["三轨办学", "现代五星级设施", "文体全面开花", "国际化视野"],
    verification_status: {
      source_level: "official_school_verified",
      is_verified: true,
      last_updated: "2026-03-01"
    }
  },
  {
    school_id: "peimin-miri",
    name_zh: "美里培民中学",
    name_en: "Pei Min Middle School Miri",
    name_ms: "Sekolah Menengah Pei Min Miri",
    abbreviation: "培民中学",
    founding_year: 1961,
    school_category: "traditional_60",
    location: {
      state: "砂拉越",
      city: "美里",
      address: "Jalan Jee Foh 8, 98000 Miri, Sarawak"
    },
    contact: {
      phone: "+60-85-432448",
      website_url: "https://peimin.edu.my"
    },
    academics: {
      track_type: "双轨制 (UEC统考 + SPM政府考试)",
      secondary_levels: ["初一", "初二", "初三", "高一", "高二", "高三"],
      senior_tracks: ["理科", "商科"]
    },
    costs_and_fees: {
      currency: "MYR",
      tuition_junior_yearly: 3800,
      first_year_est_day_student: 4800,
      first_year_est_boarder: 10500
    },
    dormitory_and_boarding: {
      has_dormitory: true,
      dorm_gender: "男女宿舍兼备"
    },
    fit_tags: ["油城数理名校", "统考成绩卓著", "双轨并重", "寄宿大楼新颖"],
    verification_status: {
      source_level: "dongzong_report",
      is_verified: true,
      last_updated: "2026-03-01"
    }
  },
  {
    school_id: "kaidee-bintulu",
    name_zh: "民都鲁开智中学",
    name_en: "Kai Dee Middle School Bintulu",
    name_ms: "Sekolah Menengah Kai Dee Bintulu",
    abbreviation: "开智中学",
    founding_year: 1952,
    school_category: "traditional_60",
    location: {
      state: "砂拉越",
      city: "民都鲁",
      address: "Batu 5, Jalan Sultan Iskandar, 97000 Bintulu, Sarawak"
    },
    contact: {
      phone: "+60-86-335606",
      website_url: "https://kaidee.edu.my"
    },
    academics: {
      track_type: "双轨制 (UEC统考 + SPM政府考试)",
      secondary_levels: ["初一", "初二", "初三", "高一", "高二", "高三"],
      senior_tracks: ["理科", "商科"],
      academic_highlights: "全马成功跨州迁校典范，现代工业城市新锐独中，校舍壮观"
    },
    costs_and_fees: {
      currency: "MYR",
      tuition_junior_yearly: 4000,
      first_year_est_day_student: 5000,
      first_year_est_boarder: 11000
    },
    dormitory_and_boarding: {
      has_dormitory: true,
      dorm_gender: "男女宿舍兼备",
      air_conditioned: "全冷气"
    },
    fit_tags: ["迁校重生典范", "现代高规格校园", "双轨并重", "冷气寄宿大楼"],
    verification_status: {
      source_level: "official_school_verified",
      is_verified: true,
      last_updated: "2026-03-01"
    }
  }
];
