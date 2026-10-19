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
        "intake_year": 2026,
        "registration_start": "2026-04-06",
        "registration_deadline": "2026-07-17",
        "open_day_dates": [
            "2026-07-04"
        ],
        "entrance_exam_date": "2026-09-19",
        "exam_subjects": [
            "华文",
            "国文",
            "英文",
            "数学"
        ],
        "exam_format": "四科各占100分，依据华小高年段课程标准出题，客观选择题与作答题结合，闭卷笔试（补考日：9月26日）",
        "exam_venue": "新山宽柔中学校本部考场",
        "admission_mode": "宽柔三校联合初一甄拔考试（全员按四科总分择优录取，不设校外公开免试直录）",
        "direct_admission_criteria": [
            "不设校外无条件免试直录（全体小六考生必须参加入学考试）",
            "宽柔直属华小特定品学兼优保送推荐名额（仍须参加入学试）",
            "考生依考区分流，录取名单依总分成绩与学区公布"
        ],
        "result_release_date": "2026-09-29",
        "registration_payment_deadline": "2026-10-03 至 2026-10-10",
        "scholarship_quota": "入学考四科成绩第1至10名：免收初一至高三全额学费；第11至50名：免收初一全年学费（续领须达成绩门槛）"
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
        "intake_year": 2026,
        "registration_start": "2026-04-06",
        "registration_deadline": "2026-07-17",
        "open_day_dates": [
            "2026-07-11"
        ],
        "entrance_exam_date": "2026-09-19",
        "exam_subjects": [
            "华文",
            "国文",
            "英文",
            "数学"
        ],
        "exam_format": "宽柔三校统一命题同步笔试（补考日：9月26日）",
        "exam_venue": "宽柔中学古来分校考场",
        "admission_mode": "三校统一入学试（依古来与新山西北区生源学区录取）",
        "direct_admission_criteria": [
            "无校外免试通道，全员参加三校联合甄拔试",
            "古来区友好华小特优生荣誉推荐",
            "按各小学学区划分与成绩达标线录取"
        ],
        "result_release_date": "2026-09-29",
        "registration_payment_deadline": "2026-10-03 至 2026-10-10",
        "scholarship_quota": "古来考区入学考总成绩排名前20名获初一学费全免奖励"
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
    admission_intake: {
        "intake_year": 2026,
        "registration_start": "2026-04-06",
        "registration_deadline": "2026-07-17",
        "open_day_dates": [
            "2026-07-11"
        ],
        "entrance_exam_date": "2026-09-19",
        "exam_subjects": [
            "华文",
            "国文",
            "英文",
            "数学"
        ],
        "exam_format": "宽柔三校统一命题同步闭卷笔试（补考日：9月26日）",
        "exam_venue": "宽柔中学至达城分校考场",
        "admission_mode": "三校统一入学试（巴西古当及新山东区生源）",
        "direct_admission_criteria": [
            "按三校规程全员参加甄拔试，依序录取",
            "巴西古当区友好华小校长推荐资优生",
            "清寒子弟可随同递交学杂费特别援助金申请"
        ],
        "result_release_date": "2026-09-29",
        "registration_payment_deadline": "2026-10-03 至 2026-10-10",
        "scholarship_quota": "至达城考区成绩前20名获免除初一年全额学费"
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
        "intake_year": 2026,
        "registration_start": "2026-07-01",
        "registration_deadline": "2026-10-02",
        "open_day_dates": [
            "2026-08-15"
        ],
        "entrance_exam_date": "2026-10-03",
        "exam_subjects": [
            "数学",
            "马来文",
            "英文",
            "华文"
        ],
        "exam_format": "四科皆为客观选择题，每科考试时间1小时，上午8:00至中午12:50",
        "exam_venue": "居銮中华中学校本部及指定外区考场",
        "admission_mode": "统一入学选拔考试（四科总平均须达最低录取标准30分）",
        "direct_admission_criteria": [
            "所有报读初一新生皆须参加入学考（按考分决定录取与编班）",
            "华小六年级在籍生凭报生纸及报考费 RM 30 办理报名",
            "原区各华小成绩优秀生由校长保送推荐（考分达标享有早鸟优惠）",
            "外州寄宿生随报随审，千人冷气宿舍保障住宿配额"
        ],
        "result_release_date": "2026-10-08 开放查分，10-09 正式放榜",
        "registration_payment_deadline": "2026-10-09 至 2026-11-05（首周早鸟注册免缴学号费及辅导膳食费）",
        "dorm_application_deadline": "2026-10-25（外州生办理床位与伙食确认）",
        "scholarship_quota": "【叶协辉奖励金】：入学考前60名且四科平均80分以上：第1至30名免缴初中三年（每年9期）学费；第31至60名免缴初中三年（每年5期）学费"
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
    admission_intake: {
        "intake_year": 2026,
        "registration_start": "2026-06-01",
        "registration_deadline": "2026-09-19",
        "open_day_dates": [
            "2026-08-22"
        ],
        "entrance_exam_date": "2026-10-10",
        "exam_subjects": [
            "华文",
            "国文",
            "英文",
            "数学"
        ],
        "exam_format": "四科闭卷笔试",
        "exam_venue": "麻坡中化中学校本部礼堂",
        "admission_mode": "新生入学甄选试与华小特优生保送",
        "direct_admission_criteria": [
            "华小五、六年级各科成绩优异，获麻县及东甲县小学校长保送推荐",
            "全县或全州华小学生数理赛、三语演讲赛优胜代表保送直录",
            "参加入学考试四科平均达标者依序发榜录取"
        ],
        "result_release_date": "2026-10-17",
        "registration_payment_deadline": "2026-10-27（名额有限，额满即止）",
        "dorm_application_deadline": "2026-10-25（外区寄宿生宿舍申请）",
        "scholarship_quota": "入学试四科平均成绩前15名免除初中三年全额学费；第16至30名免除初中三年半额学费"
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
    admission_intake: {
        "intake_year": 2026,
        "registration_start": "2026-06-01",
        "registration_deadline": "2026-09-30",
        "entrance_exam_date": "2026-10-10",
        "exam_subjects": [
            "华文",
            "国文",
            "英文",
            "数学"
        ],
        "exam_format": "闭卷笔试，每科各1小时",
        "exam_venue": "笨珍培群独中校本部",
        "admission_mode": "华小校长保送免试录取 + 入学编班考试",
        "direct_admission_criteria": [
            "华小五、六年级期末总平均达 75 分以上可申请免试保送",
            "笨珍县各华小学校长具函保送推荐优等生直接录取",
            "柔南及新山外区寄宿生凭原校成绩单提前办理预录"
        ],
        "result_release_date": "2026-10-18",
        "registration_payment_deadline": "2026-10-28",
        "dorm_application_deadline": "2026-10-28（新建现代化冷气学生宿舍）",
        "scholarship_quota": "入学考成绩前 15 名免除初一年全年学费"
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
    admission_intake: {
        "intake_year": 2026,
        "registration_start": "2026-06-01",
        "registration_deadline": "2026-09-25",
        "open_day_dates": [
            "2026-08-15"
        ],
        "entrance_exam_date": "2026-10-03",
        "exam_subjects": [
            "华文",
            "国文",
            "英文",
            "数学"
        ],
        "exam_format": "四科闭卷笔试",
        "exam_venue": "华仁中学校本部考场",
        "admission_mode": "成绩达标免试保送 + 入学甄试",
        "direct_admission_criteria": [
            "华小五、六年级各学期总平均成绩达 80 分以上可免试直录",
            "峇株巴辖县各华小学校长具函特别推荐之品学兼优模范生",
            "全州数理竞赛、华语演讲比赛优胜代表直接保送"
        ],
        "result_release_date": "2026-10-12",
        "registration_payment_deadline": "2026-10-22",
        "scholarship_quota": "入学试前 20 名获特优奖学金（免缴初一年学费）"
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
    admission_intake: {
        "intake_year": 2026,
        "registration_start": "2026-06-01",
        "registration_deadline": "2026-10-10",
        "entrance_exam_date": "2026-10-17",
        "exam_subjects": [
            "华文",
            "国文",
            "英文",
            "数学"
        ],
        "admission_mode": "校长保送免试直通 + 新生素质评估",
        "direct_admission_criteria": [
            "华小毕业生凭校长推荐函可直接免试录取",
            "华小五年级及六年级成绩总及格以上",
            "东甲及麻北外区寄宿生设提前预审通道"
        ],
        "result_release_date": "2026-10-25",
        "registration_payment_deadline": "2026-11-05",
        "dorm_application_deadline": "2026-11-05",
        "scholarship_quota": "设清寒子弟助学金与新生学杂费扶助名额"
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
    admission_intake: {
        "intake_year": 2026,
        "registration_start": "2026-06-01",
        "registration_deadline": "2026-10-15",
        "entrance_exam_date": "2026-10-24",
        "exam_subjects": [
            "华文",
            "国文",
            "英文",
            "数学"
        ],
        "admission_mode": "全员免试保送直录（重在素质评估与分班）",
        "direct_admission_criteria": [
            "全马各华小毕业生态度良好，校长推荐信直接免试录取",
            "全寄宿生态校园，外州寄宿生全额保障床位",
            "生态农业与技职特色班优先录取"
        ],
        "result_release_date": "2026-10-30",
        "registration_payment_deadline": "2026-11-15",
        "scholarship_quota": "董事会全免与半免学费扶助名额充足"
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
    admission_intake: {
        "intake_year": 2026,
        "registration_start": "2026-06-01",
        "registration_deadline": "2026-10-15",
        "entrance_exam_date": "2026-10-17",
        "exam_subjects": [
            "华文",
            "国文",
            "英文",
            "数学"
        ],
        "admission_mode": "小班保送直接录取 + 编班测验",
        "direct_admission_criteria": [
            "华小毕业凭校长推荐免试直接录取",
            "柔中周边华小生直接保送",
            "小班制精细化教学优先席位"
        ],
        "result_release_date": "2026-10-26",
        "registration_payment_deadline": "2026-11-08",
        "scholarship_quota": "设董事会清寒助学金与新生鼓励金"
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
        "intake_year": 2026,
        "registration_start": "2026-06-01",
        "registration_deadline": "2026-09-15",
        "open_day_dates": [
            "2026-07-11",
            "2026-08-08"
        ],
        "entrance_exam_date": "2026-10-03",
        "exam_subjects": [
            "华文",
            "国文",
            "英文",
            "数学"
        ],
        "exam_format": "闭卷笔试，每科各1小时，注重高阶思维能力；保送生参加入学后分班测试",
        "exam_venue": "吉隆坡中华独中校本部及外州代考点",
        "admission_mode": "保送生免试直录、校长推荐资优生与报考生入学考并行遴选（校本部与艾美娜分校各自独立招生）",
        "direct_admission_criteria": [
            "【保送生标准】：小学五年级 UASA（或指定学期评估）华、国、英、数、科五科总分达 400分或以上，或达 3A2B 或以上，或 TP值总积分达 23分或以上，操行乙等（B）或以上可免试直录",
            "【华小学校长推荐资优生】：雪隆华小五年级学业成绩总平均名列全年级前五名（或前三名），且操行甲等（A）者经校长推荐直接录取",
            "全国/州级学术奥林匹克竞赛获前三名者直接保送",
            "外州住宿生须通过特别资格审核（宿舍名额极紧凑）"
        ],
        "result_release_date": "2026-10-12",
        "registration_payment_deadline": "2026-10-22",
        "dorm_application_deadline": "2026-10-20（外州生须随同注册缴费递交宿舍申请与体检报告）",
        "scholarship_quota": "入学考前 30 名特颁初一学杂费全免/半免奖学金；另设常年清寒子弟助学金"
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
        "intake_year": 2026,
        "registration_start": "2026-06-01",
        "registration_deadline": "2026-09-10",
        "open_day_dates": [
            "2026-07-25",
            "2026-08-15"
        ],
        "entrance_exam_date": "2026-09-26",
        "exam_subjects": [
            "华文",
            "英文",
            "马来文 (BM)",
            "数学"
        ],
        "exam_format": "四科闭卷联考（08:00-08:45华文，09:00-09:45英文，10:15-11:00国文，11:15-12:00数学；中休学校备早点）",
        "admission_mode": "全员线上报考甄拔（通过 FPX 缴交报考费 RM 100）",
        "direct_admission_criteria": [
            "华小五、六年级总成绩优良，操行良好",
            "多场线上与线下“办学与课程说明会”，注重三语并重与自主学习素养",
            "外国籍学生须事先通过电邮与校方联系预约单独面谈"
        ],
        "result_release_date": "2026-10-02（系统与官网公布榜单）",
        "registration_payment_deadline": "2026-10-09（公布后一周内完成线上注册与缴费）",
        "dorm_application_deadline": "2026-10-09（男女寄宿床位极紧张，外州生需同步申请）",
        "scholarship_quota": "入学考总成绩名列前 20 名者免除初一年全额学费"
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
    admission_intake: {
        "intake_year": 2026,
        "registration_start": "2026-06-15",
        "registration_deadline": "2026-09-20",
        "open_day_dates": [
            "2026-08-01"
        ],
        "entrance_exam_date": "2026-10-04",
        "exam_subjects": [
            "华文",
            "马来文",
            "英文",
            "数学",
            "科学"
        ],
        "exam_format": "五科闭卷考试，以小学六年级课程大纲命题，网上提供试题范例",
        "admission_mode": "策略联盟华小免试保送 + 新生入学考试（纯走读校制）",
        "direct_admission_criteria": [
            "【学业成绩特长生（学保）】：循人中学“策略联盟华小”六年级学生，校内总平均或 PBD 各科表现达标，经原校校长推荐可免试入学",
            "体育、艺术、学术竞赛优异之特长生保送推荐",
            "普通报考生参加入学考，按总分与各科成绩综合评定录取与初一编班"
        ],
        "result_release_date": "2026-10-12",
        "registration_payment_deadline": "2026-10-22",
        "scholarship_quota": "成绩前 15 名免除初一年全额学费"
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
    admission_intake: {
        "intake_year": 2026,
        "registration_start": "2026-07-01",
        "registration_deadline": "2026-09-30",
        "open_day_dates": [
            "2026-08-15"
        ],
        "entrance_exam_date": "2026-10-10",
        "exam_subjects": [
            "华文",
            "国文",
            "英文",
            "数学",
            "科学"
        ],
        "exam_format": "闭卷笔试五科，设普通班与特辅基础班分流综合评估",
        "admission_mode": "成绩达标免试保送 + 新生入学甄选试（特设四年制特辅班）",
        "direct_admission_criteria": [
            "【学业成绩保送】：小学五年级（全年）及六年级（上半年）五科成绩总和达 TP 23分或以上，操行良好者保送免试录取（仍须参加编班考）",
            "【体育表现保送】：曾代表州队参加全国篮球、排球、羽球、乒乓、田径学联赛，且五科 TP值达 18分或以上者直接保送",
            "【四年制初中特辅班】：专为学术底子较薄弱但情智健全的小六毕业生设立，四年充裕节奏夯实基础、融入读经与艺术辅导，初三毕业顺利对接高中主流科",
            "华小学校长具函保送推荐信"
        ],
        "result_release_date": "2026-10-17",
        "registration_payment_deadline": "2026-10-28",
        "dorm_application_deadline": "2026-10-28（新建现代化冷气宿舍，外州生优先保障）",
        "scholarship_quota": "保送资格且入学考前 20 名注册者免除首年学费；特设常年清寒子弟助学金"
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
        "intake_year": 2026,
        "registration_start": "2026-06-01",
        "registration_deadline": "2026-09-05",
        "open_day_dates": [
            "2026-07-18",
            "2026-08-08"
        ],
        "entrance_exam_date": "2026-09-12",
        "exam_subjects": [
            "华文",
            "国文 (BM)",
            "英文",
            "数学",
            "科学"
        ],
        "exam_format": "五科闭卷考试，上午8:00至下午1:00，报考费 RM 50",
        "admission_mode": "保送生审核优先直录 + 新生入学考试",
        "direct_admission_criteria": [
            "【学业保送】：小学六年级第一学期期末成绩五科（华、国、英、数、科）TP值总和达到指定高分标准直接免试保送",
            "【特长保送】：在田径或球类运动领域具备州手或以上资格，且五科学业成绩达基本门槛者直接保送",
            "华小校长签署保送推荐函之杰出品学兼优生",
            "保送生仍须参加入学考作为大数据常态分班参考"
        ],
        "result_release_date": "2026-09-19",
        "registration_payment_deadline": "2026-09-30",
        "dorm_application_deadline": "2026-09-28（现代化公寓式冷气宿舍，外州寄宿生优先保留）",
        "scholarship_quota": "入学考前 20 名获全免或半免学费优异奖学金"
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
    admission_intake: {
        "intake_year": 2026,
        "registration_start": "2026-06-01",
        "registration_deadline": "2026-08-15",
        "open_day_dates": [
            "2026-07-25",
            "2026-08-08"
        ],
        "entrance_exam_date": "2026-08-22",
        "exam_subjects": [
            "华文",
            "国文",
            "英文",
            "数学",
            "科学"
        ],
        "exam_format": "五科闭卷笔试；编班考试统一于 10月上旬举行",
        "admission_mode": "免试入学（保送直录）与入学测试双通道遴选",
        "direct_admission_criteria": [
            "【免试直录】：小学五年级全年评估测试五科（华、国、英、数、科）TP值总和达 23分或以上，可免试直接申请入学并办理注册手续",
            "未达免试门槛学生参加 8月下旬统一入学测试，依笔试成绩择优录取",
            "华小学校长保送之领导力模范生 / 学长团团长优先审核",
            "所有录取新生（含免试生）须参加 10月上旬初一编班考试"
        ],
        "result_release_date": "2026-08-29",
        "registration_payment_deadline": "2026-09-10",
        "dorm_application_deadline": "2026-09-10（高层现代化宿舍，外州生优先）",
        "scholarship_quota": "入学考成绩前 20 名免收首年学费；设领导力优异奖学金"
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
    admission_intake: {
        "intake_year": 2026,
        "registration_start": "2026-06-01",
        "registration_deadline": "2026-09-25",
        "entrance_exam_date": "2026-10-10",
        "exam_subjects": [
            "华文",
            "国文",
            "英文",
            "数学"
        ],
        "admission_mode": "华小保送优先 + 入学甄拔考试",
        "direct_admission_criteria": [
            "华小五、六年级各科平均达 75 分以上免试直录",
            "巴生县及邻近华小学校长具函保送推荐信",
            "艺术、管乐或体育特长生加分免试录取"
        ],
        "result_release_date": "2026-10-18",
        "registration_payment_deadline": "2026-10-28",
        "dorm_application_deadline": "2026-10-28",
        "scholarship_quota": "入学考前 15 名免除初一学费"
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
    admission_intake: {
        "intake_year": 2026,
        "registration_start": "2026-06-01",
        "registration_deadline": "2026-09-25",
        "open_day_dates": [
            "2026-08-15"
        ],
        "entrance_exam_date": "2026-10-10",
        "exam_subjects": [
            "华文",
            "国文",
            "英文",
            "数学"
        ],
        "admission_mode": "成绩达标免试保送 + 新生入学甄选试",
        "direct_admission_criteria": [
            "华小五、六年级校考平均成绩达 75 分以上免试直录",
            "华小学校长特别推荐品学兼优保送生",
            "三轨国际班与统考班按英文数理特长分流面试"
        ],
        "result_release_date": "2026-10-18",
        "registration_payment_deadline": "2026-10-28",
        "dorm_application_deadline": "2026-10-28",
        "scholarship_quota": "入学试优异生特颁奖学金"
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
        "intake_year": 2026,
        "registration_start": "2026-07-01",
        "registration_deadline": "2026-10-15",
        "open_day_dates": [
            "2026-08-08"
        ],
        "entrance_exam_date": "2026-10-18",
        "exam_subjects": [
            "华文",
            "国文",
            "英文",
            "数学",
            "科学"
        ],
        "exam_format": "闭卷笔试五科，设芙中本部考场，考分结合常态分段编班",
        "exam_venue": "芙蓉中华中学校本部及指定考场",
        "admission_mode": "成绩/体育优异优先注册保送 + 统一入学考试（超千人寄宿大校）",
        "direct_admission_criteria": [
            "【成绩优异优先注册】：小学五年级全年评估五科（华、国、英、数、科）TP值总和达 23分或以上；或六年级上半年三语两数科总平均达 70分或以上，可免试直接办理入学注册",
            "【体育表现优异优先】：五或六年级曾代表州队参加全国篮球、排球、羽球、乒乓、田径学联赛，且五年级全年前述五科 TP值达 18分以上（或六年级上半年平均达 55分以上）直接优先录取",
            "【篮球项目体育保送】：经由森美兰州篮球总会遴选推荐者",
            "外州住宿生专设提前审核通道，宿位随注册同步保障"
        ],
        "result_release_date": "2026-10-23",
        "registration_payment_deadline": "2026-11-05",
        "dorm_application_deadline": "2026-11-05（超千人冷气宿舍，外州生优先办理）",
        "scholarship_quota": "入学考前 30 名享有初一年学杂费减免奖学金"
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
    admission_intake: {
        "intake_year": 2026,
        "registration_start": "2026-06-01",
        "registration_deadline": "2026-10-15",
        "entrance_exam_date": "2026-10-24",
        "exam_subjects": [
            "华文",
            "国文",
            "英文",
            "数学"
        ],
        "admission_mode": "校长保送免试录取 + 编班能力测验",
        "direct_admission_criteria": [
            "华小毕业生凭校长推荐函可直接保送录取",
            "雪隆森外区寄宿生凭在校成绩单提前预审直录",
            "海洋与人文特色研学优先录取"
        ],
        "result_release_date": "2026-10-31",
        "registration_payment_deadline": "2026-11-10",
        "dorm_application_deadline": "2026-11-10（温馨小班寄宿保障）",
        "scholarship_quota": "提供学杂费全免与半免名额"
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
    admission_intake: {
        "intake_year": 2026,
        "registration_start": "2026-06-01",
        "registration_deadline": "2026-10-05",
        "open_day_dates": [
            "2026-10-11（当天办家长座谈会与社团嘉年华）"
        ],
        "entrance_exam_date": "2026-10-11",
        "exam_subjects": [
            "华文",
            "英文",
            "数学",
            "国文"
        ],
        "exam_format": "闭卷笔试，报考费 RM 50（内含手续费及附送历届考题）",
        "exam_venue": "马六甲培风中学校本部大礼堂",
        "admission_mode": "统一新生入学考试竞录（考后隔天正式放榜）",
        "direct_admission_criteria": [
            "华小六年级应届毕业生均可报考，依考试总分成绩择优录取",
            "【初中三年成绩优秀新生奖学金】：第一梯次入学考总成绩前 30 名马来西亚籍新生免缴初中三年学费",
            "【特殊才能奖学金】：才艺或运动领域表现特出的小六毕业生可提早递交专案保送申请",
            "马六甲州华小在籍教师之子女可申请学杂费优惠津贴"
        ],
        "result_release_date": "2026-10-12（考试隔日即放榜）",
        "registration_payment_deadline": "2026-10-19（公布后一周内完成注册）",
        "dorm_application_deadline": "2026-10-19（外州生冷气宿舍申请通道）",
        "scholarship_quota": "入学考总成绩前 30 名享初中三年学费全免奖励；另设第一梯次清寒新生助学金"
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
    admission_intake: {
        "intake_year": 2026,
        "registration_start": "2026-06-01",
        "registration_deadline": "2026-09-30",
        "entrance_exam_date": "2026-10-10",
        "exam_subjects": [
            "华文",
            "国文",
            "英文",
            "数学"
        ],
        "admission_mode": "校长保送免试录取 + 新生资格甄试",
        "direct_admission_criteria": [
            "华小五、六年级各科平均达 75 分以上免试直录",
            "怡保及霹雳州各华小学校长具函保送推荐信",
            "商科强校与学术优异保送"
        ],
        "result_release_date": "2026-10-19",
        "registration_payment_deadline": "2026-10-30",
        "dorm_application_deadline": "2026-10-30",
        "scholarship_quota": "入学试前 15 名免交初一学费"
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
    admission_intake: {
        "intake_year": 2026,
        "registration_start": "2026-06-01",
        "registration_deadline": "2026-10-25",
        "open_day_dates": [
            "2026-08-15"
        ],
        "entrance_exam_date": "2026-10-17（另增设 10-24 与 10-31 考试梯次）",
        "exam_subjects": [
            "华文",
            "国文",
            "英文",
            "数学"
        ],
        "exam_format": "闭卷笔试，上午9时至下午1时；多轨制教学（统考 UEC、剑桥 IGCSE、SPM、A-Level）",
        "admission_mode": "华小特优保送直录 + 多场次入学选拔考试",
        "direct_admission_criteria": [
            "华小五、六年级校内成绩优异经校长推荐免试直录",
            "全国英文能力或数理竞赛得奖生免试保送剑桥 IGCSE 班",
            "全新现代化宿舍大楼（冷气、电梯、健身房、独立卫浴），外州生随报随配"
        ],
        "result_release_date": "各梯次考后 5 天内放榜",
        "registration_payment_deadline": "放榜后两周内办理注册",
        "dorm_application_deadline": "名额有限，随注册同步申请",
        "scholarship_quota": "设初一优秀新生全免/半免学杂费奖励金与清寒助学金"
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
    admission_intake: {
        "intake_year": 2026,
        "registration_start": "2026-06-01",
        "registration_deadline": "2026-10-15",
        "entrance_exam_date": "2026-10-24",
        "exam_subjects": [
            "华文",
            "国文",
            "英文",
            "数学"
        ],
        "admission_mode": "华小保送优先 + 编班入学考试",
        "direct_admission_criteria": [
            "华小毕业生凭校长推荐函免试直接录取",
            "汽车维修、美工技职班专设特长免试直录",
            "外州寄宿生优先安排冷气宿舍"
        ],
        "result_release_date": "2026-10-31",
        "registration_payment_deadline": "2026-11-10",
        "dorm_application_deadline": "2026-11-10",
        "scholarship_quota": "设清寒子弟助学金与技职专修奖励金"
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
    admission_intake: {
        "intake_year": 2026,
        "registration_start": "2026-06-01",
        "registration_deadline": "2026-10-10",
        "entrance_exam_date": "2026-10-17",
        "exam_subjects": [
            "华文",
            "国文",
            "英文",
            "数学"
        ],
        "admission_mode": "华小保送免试录取 + 入学考",
        "direct_admission_criteria": [
            "太平及北霹雳华小成绩优异生免试直录",
            "华小学校长具函保送推荐信",
            "外区寄宿生凭在校成绩单提前审核预录"
        ],
        "result_release_date": "2026-10-25",
        "registration_payment_deadline": "2026-11-05",
        "dorm_application_deadline": "2026-11-05",
        "scholarship_quota": "入学考前 15 名免除首年学费"
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
        "intake_year": 2026,
        "registration_start": "2026-06-15",
        "registration_deadline": "2026-10-15",
        "entrance_exam_date": "2026-10-24",
        "exam_subjects": [
            "华文",
            "国文",
            "英文",
            "数学"
        ],
        "admission_mode": "华小保送优先 + 入学甄拔试（严格纪律寄宿标杆）",
        "direct_admission_criteria": [
            "华小学校长具函推荐信即可直接保送免试录取",
            "外州寄宿生凭华小校考成绩单提前免试预录并保障宿舍床位",
            "操行品格达乙等以上合格"
        ],
        "result_release_date": "2026-10-30",
        "registration_payment_deadline": "2026-11-10",
        "dorm_application_deadline": "2026-11-10（严格纪律寄宿，须签署宿舍生活守则）",
        "scholarship_quota": "提供清寒子弟助学金与优秀寄宿生学费减免"
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
    admission_intake: {
        "intake_year": 2026,
        "registration_start": "2026-06-01",
        "registration_deadline": "2026-10-30",
        "entrance_exam_date": "2026-11-07",
        "exam_subjects": [
            "华文",
            "国文",
            "英文",
            "数学"
        ],
        "admission_mode": "全员免试直录保送（重在爱心关怀）",
        "direct_admission_criteria": [
            "全马华小毕业生态度端正校长保送免试全收",
            "提供平价爱心寄宿保障",
            "关怀型小班教学直通"
        ],
        "result_release_date": "2026-11-15",
        "registration_payment_deadline": "2026-11-30",
        "scholarship_quota": "清寒家庭全免学费支持计划"
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
    admission_intake: {
        "intake_year": 2026,
        "registration_start": "2026-06-01",
        "registration_deadline": "2026-10-31",
        "entrance_exam_date": "2026-11-07",
        "exam_subjects": [
            "华文",
            "国文",
            "英文",
            "数学"
        ],
        "admission_mode": "校长保送免试直通 + 农艺特长直录",
        "direct_admission_criteria": [
            "华小毕业校长推荐免试直录",
            "热爱自然农艺与生态教育学生优先录取",
            "外区寄宿生免费/低额住宿津贴"
        ],
        "result_release_date": "2026-11-15",
        "registration_payment_deadline": "2026-11-30",
        "scholarship_quota": "农艺专修与学业优异全免学费名额"
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
    admission_intake: {
        "intake_year": 2026,
        "registration_start": "2026-06-01",
        "registration_deadline": "2026-10-15",
        "entrance_exam_date": "2026-10-24",
        "exam_subjects": [
            "华文",
            "国文",
            "英文",
            "数学"
        ],
        "admission_mode": "华小保送免试录取 + 入学考",
        "direct_admission_criteria": [
            "曼绒县及外区华小成绩良好免试直录",
            "华小学校长保送具函推荐生免考",
            "全人教育特长生保送"
        ],
        "result_release_date": "2026-10-31",
        "registration_payment_deadline": "2026-11-10",
        "dorm_application_deadline": "2026-11-10",
        "scholarship_quota": "入学考前 15 名免除学费"
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
    admission_intake: {
        "intake_year": 2026,
        "registration_start": "2026-06-01",
        "registration_deadline": "2026-10-15",
        "entrance_exam_date": "2026-10-24",
        "exam_subjects": [
            "华文",
            "国文",
            "英文",
            "数学"
        ],
        "admission_mode": "校长保送直通 + 编班测验",
        "direct_admission_criteria": [
            "华小毕业生凭校长推荐免试直接录取",
            "金宝周边华小保送优先",
            "纯朴学风小班精细辅导"
        ],
        "result_release_date": "2026-10-31",
        "registration_payment_deadline": "2026-11-10",
        "dorm_application_deadline": "2026-11-10",
        "scholarship_quota": "设清寒学杂费减免基金"
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
        "intake_year": 2026,
        "registration_start": "2026-06-01",
        "registration_deadline": "2026-08-15",
        "open_day_dates": [
            "2026-07-05（办学理念说明会暨校园开放日）"
        ],
        "entrance_exam_date": "2026-08-23",
        "exam_subjects": [
            "华文",
            "国文",
            "英文",
            "数学",
            "科学"
        ],
        "exam_format": "五科闭卷考试，数学与科学双语出题，依据 KSSR 课程标准，不论选统考或国际课程考卷相同",
        "admission_mode": "统考课程 (UEC 6年制) 与国际课程 (IGCSE 4.5年制) 入学试选拔，支持兼报双选",
        "direct_admission_criteria": [
            "华小六年级应届毕业生，年满12周岁均可报考",
            "双选兼报者若两者皆达标可自选其一；未达 IGCSE 线者自动分流统考班",
            "国际/全国数理奥林匹克优胜代表经审核可享特别学术保送",
            "外籍生须具备至少华小四年级华语水准"
        ],
        "result_release_date": "2026-08-30",
        "registration_payment_deadline": "2026-09-10",
        "scholarship_quota": "入学考前 10 名获免交初一至高三全额学费荣誉奖；备数理特优生奖励基金"
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
    admission_intake: {
        "intake_year": 2026,
        "registration_start": "2026-06-01",
        "registration_deadline": "2026-08-14 中午1时",
        "open_day_dates": [
            "2026-07-18"
        ],
        "entrance_exam_date": "2026-08-22",
        "exam_subjects": [
            "华文",
            "国文",
            "英文",
            "数学"
        ],
        "exam_format": "闭卷笔试，上午8时举行，报考费 RM 50（需上传五年级评估成绩表）",
        "admission_mode": "线上注册报名 + 新生入学考试择优录取（注重创客科技与双语能力）",
        "direct_admission_criteria": [
            "小学六年级在籍生凭小五成绩单办理线上报考",
            "全国/全州机器人比赛、创客科技比赛获奖代表直接保送优先录取",
            "各华小品学兼优毕业生经校长推荐直录"
        ],
        "result_release_date": "2026-08-29",
        "registration_payment_deadline": "2026-09-08",
        "dorm_application_deadline": "2026-09-08（现代学生宿舍设施）",
        "scholarship_quota": "入学试排名前 15 名免收初一年学费"
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
    admission_intake: {
        "intake_year": 2026,
        "registration_start": "2026-06-01",
        "registration_deadline": "2026-09-30",
        "entrance_exam_date": "2026-10-10",
        "exam_subjects": [
            "华文",
            "国文",
            "英文",
            "数学"
        ],
        "admission_mode": "全马唯一纯女校独中，华小女毕业生校长保送免试直录 + 入学考",
        "direct_admission_criteria": [
            "华小女毕业生校考总平均 75 分以上免试直录",
            "各华小学校长具函保送推荐女生免试",
            "艺术、舞蹈或管乐特长保送录取"
        ],
        "result_release_date": "2026-10-18",
        "registration_payment_deadline": "2026-10-28",
        "dorm_application_deadline": "2026-10-28（全女校安全寄宿楼）",
        "scholarship_quota": "女校优秀新生奖学金"
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
    admission_intake: {
        "intake_year": 2026,
        "registration_start": "2026-06-01",
        "registration_deadline": "2026-10-15",
        "entrance_exam_date": "2026-10-24",
        "exam_subjects": [
            "华文",
            "国文",
            "英文",
            "数学"
        ],
        "admission_mode": "佛化全人关怀全员保送免试",
        "direct_admission_criteria": [
            "全马华小毕业凭校长推荐信免试直接录取",
            "注重品行端正与慈悲利他品格",
            "小班制关怀全走读"
        ],
        "result_release_date": "2026-10-31",
        "registration_payment_deadline": "2026-11-10",
        "scholarship_quota": "佛学与清寒助学金"
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
        "intake_year": 2026,
        "registration_start": "2026-06-01",
        "registration_deadline": "2026-09-10 下午4时",
        "open_day_dates": [
            "2026-08-08"
        ],
        "entrance_exam_date": "2026-09-12",
        "exam_subjects": [
            "华文",
            "国文",
            "英文",
            "数学",
            "科学 或 美术（选考）"
        ],
        "exam_format": "必考四科+选考一科，上午8:00至下午2:00/3:00，报考费 RM 50",
        "admission_mode": "全员统一参加入学考试（按总分达标竞录）",
        "direct_admission_criteria": [
            "所有报读初一新生皆须参加新生入学考，成绩达标方可获录取",
            "威中及邻近华小成绩优异生由校长保送推荐（享有优先加分权）",
            "选考美术科达标者可分流至设计艺术特长班"
        ],
        "result_release_date": "2026-09-16 中午12时（官网及 WhatsApp 通告）",
        "registration_payment_deadline": "放榜后两周内办理注册",
        "dorm_application_deadline": "放榜后两周内（学生宿舍床位保障）",
        "scholarship_quota": "入学考成绩名列前茅者特颁优秀新生奖学金"
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
    admission_intake: {
        "intake_year": 2026,
        "registration_start": "2026-06-01",
        "registration_deadline": "2026-09-30",
        "entrance_exam_date": "2026-10-10",
        "exam_subjects": [
            "华文",
            "国文",
            "英文",
            "数学"
        ],
        "admission_mode": "保送免试直通 + 新生甄选考",
        "direct_admission_criteria": [
            "吉华属下及吉打州各华小成绩排名前 15% 直接免试直录",
            "华小学校长保送推荐信",
            "华乐、管乐、体育校队州代表保送"
        ],
        "result_release_date": "2026-10-18",
        "registration_payment_deadline": "2026-10-28",
        "dorm_application_deadline": "2026-10-28",
        "scholarship_quota": "前 15 名免初一学费"
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
    admission_intake: {
        "intake_year": 2026,
        "registration_start": "2026-06-01",
        "registration_deadline": "2026-10-15",
        "entrance_exam_date": "2026-10-24",
        "exam_subjects": [
            "华文",
            "国文",
            "英文",
            "数学"
        ],
        "admission_mode": "校长保送免试直录 + 入学测验",
        "direct_admission_criteria": [
            "华小毕业成绩合格或校长推荐信免试录取",
            "吉打周边华小优先保送",
            "小班关怀制"
        ],
        "result_release_date": "2026-10-31",
        "registration_payment_deadline": "2026-11-10",
        "scholarship_quota": "清寒与优秀助学金"
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
    admission_intake: {
        "intake_year": 2026,
        "registration_start": "2026-06-01",
        "registration_deadline": "2026-10-10",
        "entrance_exam_date": "2026-10-17",
        "exam_subjects": [
            "华文",
            "国文",
            "英文",
            "数学"
        ],
        "admission_mode": "优等保送直录 + 统一入学选拔考",
        "direct_admission_criteria": [
            "华小五、六年级各科平均 75 分以上免试直录",
            "双溪大年及邻近华小学校长保送名额",
            "稳健学术双轨直录"
        ],
        "result_release_date": "2026-10-25",
        "registration_payment_deadline": "2026-11-05",
        "dorm_application_deadline": "2026-11-05",
        "scholarship_quota": "考获前 15 名免学费"
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
    admission_intake: {
        "intake_year": 2026,
        "registration_start": "2026-06-01",
        "registration_deadline": "2026-10-31",
        "entrance_exam_date": "2026-11-07",
        "exam_subjects": [
            "华文",
            "国文",
            "英文",
            "数学"
        ],
        "admission_mode": "全马免试直录保送 + 迎新适应性评估",
        "direct_admission_criteria": [
            "全马各州华小毕业生凭校长推荐函直接免试录取",
            "全寄宿特色校园，外州生优先安排床位与生活导师督导",
            "东海岸华教前哨保送计划全免学杂费"
        ],
        "result_release_date": "2026-11-15",
        "registration_payment_deadline": "2026-11-30",
        "dorm_application_deadline": "2026-11-30（全寄宿保障，男女冷气宿舍）",
        "scholarship_quota": "丹中特别奖助学金与领养计划"
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
        "intake_year": 2026,
        "registration_start": "2026-06-01",
        "registration_deadline": "2026-10-31",
        "open_day_dates": [
            "2026-08-22"
        ],
        "entrance_exam_date": "2026-10-31",
        "exam_subjects": [
            "华文",
            "国文",
            "英文",
            "数学"
        ],
        "exam_format": "统一命题闭卷考试，招收约 140 人，学额采先注册先配给制",
        "admission_mode": "东海岸华小保送 + 新生入学试",
        "direct_admission_criteria": [
            "小学毕业生操行须达 70 分或 B 等以上",
            "彭亨州及东海岸华小五年级/六年级总成绩达 75 分以上免试直录",
            "华小学校长具函保送推荐信",
            "外州寄宿生优先安排全冷气宿舍"
        ],
        "result_release_date": "2026-11-03",
        "registration_payment_deadline": "2026-11-15（额满即止）",
        "dorm_application_deadline": "2026-11-15（现代化冷气宿舍）",
        "scholarship_quota": "东海岸特优生奖学金与常年清寒助学金"
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
        "intake_year": 2026,
        "registration_start": "2026-06-15",
        "registration_deadline": "2026-09-18",
        "open_day_dates": [
            "2026-07-25"
        ],
        "entrance_exam_date": "2026-09-26",
        "exam_subjects": [
            "华文",
            "马来文 (国文)",
            "英文",
            "数学",
            "科学"
        ],
        "exam_format": "五科闭卷考试，以小六课程大纲命题，报考费约 RM 30（含午餐）",
        "admission_mode": "全员参加入学考取得录取资格，隔天放榜现场注册",
        "direct_admission_criteria": [
            "应届小六生皆须通过入学考依序录取",
            "沙巴各华小五年级及六年级总平均达 80 分以上可申请优秀生直录通道",
            "全州数理竞赛、三语演讲优胜代表直接保送"
        ],
        "result_release_date": "2026-09-27（考试隔天星期日放榜）",
        "registration_payment_deadline": "2026-09-27 至 2026-10-05（放榜即日开放现场注册）",
        "dorm_application_deadline": "2026-10-05（外区寄宿生宿舍申请）",
        "scholarship_quota": "入学考试表现优异者特颁初中三年学费全免 A1 或半免 A2 荣誉奖学金"
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
    admission_intake: {
        "intake_year": 2026,
        "registration_start": "2026-06-01",
        "registration_deadline": "2026-09-30",
        "entrance_exam_date": "2026-10-10",
        "exam_subjects": [
            "华文",
            "国文",
            "英文",
            "数学"
        ],
        "admission_mode": "校长保送免试录取 + 新生资格甄拔试",
        "direct_admission_criteria": [
            "华小五、六年级各科平均 75 分以上免试直录",
            "亚庇周边华小学校长具函保送推荐信",
            "全人与科学创客特长保送"
        ],
        "result_release_date": "2026-10-18",
        "registration_payment_deadline": "2026-10-28",
        "dorm_application_deadline": "2026-10-28",
        "scholarship_quota": "前 15 名免除学费"
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
    admission_intake: {
        "intake_year": 2026,
        "registration_start": "2026-06-01",
        "registration_deadline": "2026-10-15",
        "entrance_exam_date": "2026-10-24",
        "exam_subjects": [
            "华文",
            "国文",
            "英文",
            "数学"
        ],
        "admission_mode": "特优保送 + 入学甄试",
        "direct_admission_criteria": [
            "斗湖各华小成绩达 75 分以上免试直录",
            "华小学校长保送优等生",
            "备有现代化冷气学生宿舍"
        ],
        "result_release_date": "2026-10-31",
        "registration_payment_deadline": "2026-11-10",
        "dorm_application_deadline": "2026-11-10",
        "scholarship_quota": "设新生全免学费奖"
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
    admission_intake: {
        "intake_year": 2026,
        "registration_start": "2026-06-01",
        "registration_deadline": "2026-10-10",
        "entrance_exam_date": "2026-10-17",
        "exam_subjects": [
            "华文",
            "国文",
            "英文",
            "数学"
        ],
        "admission_mode": "华小保送优先 + 资讯科技特优甄试",
        "direct_admission_criteria": [
            "山打根各华小校内排名前列免试直录",
            "校长保送推荐信",
            "资讯科技与电脑特长保送"
        ],
        "result_release_date": "2026-10-25",
        "registration_payment_deadline": "2026-11-05",
        "dorm_application_deadline": "2026-11-05",
        "scholarship_quota": "优异新生奖学金"
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
    admission_intake: {
        "intake_year": 2026,
        "registration_start": "2026-06-01",
        "registration_deadline": "2026-11-15",
        "admission_mode": "社区保送全员免试录取",
        "direct_admission_criteria": [
            "拿笃及周边华小毕业生凭校长推荐免试直录",
            "小班社区精细关怀",
            "提供寄宿与交通补贴"
        ],
        "result_release_date": "2026-11-25",
        "registration_payment_deadline": "2026-12-05",
        "scholarship_quota": "清寒助学金全额覆盖"
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
    admission_intake: {
        "intake_year": 2026,
        "registration_start": "2026-06-01",
        "registration_deadline": "2026-11-15",
        "admission_mode": "全员校长保送免试录取",
        "direct_admission_criteria": [
            "内陆省华小毕业生凭校长推荐免试直录",
            "纯朴校风与生态农业特色保送",
            "提供免费住宿与清寒膳食津贴"
        ],
        "result_release_date": "2026-11-25",
        "registration_payment_deadline": "2026-12-05",
        "scholarship_quota": "全免学费名额充足"
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
    admission_intake: {
        "intake_year": 2026,
        "registration_start": "2026-06-01",
        "registration_deadline": "2026-11-15",
        "admission_mode": "小班保送免试录取",
        "direct_admission_criteria": [
            "保佛及周边华小毕业生校长保送直录",
            "小班制爱心教育与课后督导",
            "外埠生备有宿舍"
        ],
        "result_release_date": "2026-11-25",
        "registration_payment_deadline": "2026-12-05",
        "scholarship_quota": "清寒助学金"
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
    admission_intake: {
        "intake_year": 2026,
        "registration_start": "2026-06-01",
        "registration_deadline": "2026-11-15",
        "admission_mode": "温馨校园保送免试直录",
        "direct_admission_criteria": [
            "吧巴各华小毕业生凭校长推荐免试直接录取",
            "注重品德与母语文化传承",
            "提供外区寄宿关怀"
        ],
        "result_release_date": "2026-11-25",
        "registration_payment_deadline": "2026-12-05",
        "scholarship_quota": "设学业优良奖励金"
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
    admission_intake: {
        "intake_year": 2026,
        "registration_start": "2026-06-01",
        "registration_deadline": "2026-11-15",
        "admission_mode": "最北端华教前哨保送免试直录",
        "direct_admission_criteria": [
            "全马各华小毕业生凭推荐信免试直接录取",
            "全免学费与宿舍费特别资助计划",
            "小班一对一关怀引导"
        ],
        "result_release_date": "2026-11-25",
        "registration_payment_deadline": "2026-12-05",
        "scholarship_quota": "全额奖助学金资助计划"
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
    admission_intake: {
        "intake_year": 2026,
        "registration_start": "2026-07-20",
        "registration_deadline": "2026-08-30",
        "open_day_dates": [
            "2026-08-15"
        ],
        "entrance_exam_date": "2026-10-10",
        "exam_subjects": [
            "华文",
            "国文",
            "英文",
            "数学"
        ],
        "admission_mode": "报名注册制与华小校长保送推荐并行（享有砂拉越州政府常年拔款资助）",
        "direct_admission_criteria": [
            "凡就读华小六年级学生凭报生纸副本即可办理初一新生报名",
            "报名注册费约 RM 380 - RM 400（含注册费、学生证、个人照、名牌制作、体育基金及首期学费）",
            "古晋一中属下华小校长推荐信直接免试保送录取",
            "享有砂拉越独中董总与州政府专属奖助学金支持"
        ],
        "result_release_date": "2026-10-20",
        "registration_payment_deadline": "2026-10-31",
        "dorm_application_deadline": "2026-10-31",
        "scholarship_quota": "设砂拉越州政府资助优秀生奖学金与董总清寒助学金"
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
    admission_intake: {
        "intake_year": 2026,
        "registration_start": "2026-06-01",
        "registration_deadline": "2026-10-31",
        "admission_mode": "技职特色保送免试录取",
        "direct_admission_criteria": [
            "古晋及周边华小毕业校长推荐免试直录",
            "美术设计、烘焙与技职专修特长保送",
            "享有砂拉越独中统筹津贴资助"
        ],
        "result_release_date": "2026-11-15",
        "registration_payment_deadline": "2026-11-30",
        "scholarship_quota": "技职专修奖励金"
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
    admission_intake: {
        "intake_year": 2026,
        "registration_start": "2026-06-01",
        "registration_deadline": "2026-10-31",
        "admission_mode": "赏识教育小班精品保送免试直录",
        "direct_admission_criteria": [
            "华小毕业凭校长推荐信免试直接录取",
            "行知赏识教育无门槛爱心接纳",
            "纯走读精品小班"
        ],
        "result_release_date": "2026-11-15",
        "registration_payment_deadline": "2026-11-30",
        "scholarship_quota": "赏识好孩子奖学金"
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
    admission_intake: {
        "intake_year": 2026,
        "registration_start": "2026-06-01",
        "registration_deadline": "2026-11-15",
        "admission_mode": "社区华小保送免试直录",
        "direct_admission_criteria": [
            "石角区各华小毕业生校长保送直接录取",
            "小班关怀制与课后作业辅导",
            "提供外区宿舍"
        ],
        "result_release_date": "2026-11-25",
        "registration_payment_deadline": "2026-12-05",
        "scholarship_quota": "清寒助学金"
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
    admission_intake: {
        "intake_year": 2026,
        "registration_start": "2026-06-01",
        "registration_deadline": "2026-11-15",
        "admission_mode": "郊区保送免试录取",
        "direct_admission_criteria": [
            "西连省各华小毕业生校长推荐直接保送录取",
            "乡村寄宿爱心学校保障",
            "学杂费极其普惠平价"
        ],
        "result_release_date": "2026-11-25",
        "registration_payment_deadline": "2026-12-05",
        "scholarship_quota": "州政府拨款清寒援助"
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
    admission_intake: {
        "intake_year": 2026,
        "registration_start": "2026-06-01",
        "registration_deadline": "2026-09-30",
        "open_day_dates": [
            "2026-08-22"
        ],
        "entrance_exam_date": "2026-10-10",
        "exam_subjects": [
            "华文",
            "国文",
            "英文",
            "数学"
        ],
        "admission_mode": "修士严谨办学保送直录 + 入学甄试",
        "direct_admission_criteria": [
            "诗巫及中区各华小五、六年级各科平均 75 分以上免试直录",
            "各华小学校长具函保送推荐品学兼优生",
            "全砂数理奥林匹克得奖者保送"
        ],
        "result_release_date": "2026-10-18",
        "registration_payment_deadline": "2026-10-28",
        "dorm_application_deadline": "2026-10-28（修士督导严格管理宿舍）",
        "scholarship_quota": "入学考前 20 名免收首年学费"
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
    admission_intake: {
        "intake_year": 2026,
        "registration_start": "2026-06-01",
        "registration_deadline": "2026-10-20",
        "entrance_exam_date": "2026-10-24",
        "exam_subjects": [
            "华文",
            "国文",
            "英文",
            "数学"
        ],
        "admission_mode": "校长保送免试录取 + 入学能力考",
        "direct_admission_criteria": [
            "华小毕业成绩合格或校长推荐信免试直录",
            "诗巫友好华小优等生直接保送",
            "纪念先贤黄乃裳精神特别助学金"
        ],
        "result_release_date": "2026-10-31",
        "registration_payment_deadline": "2026-11-10",
        "dorm_application_deadline": "2026-11-10",
        "scholarship_quota": "先贤纪念奖助学金"
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
    admission_intake: {
        "intake_year": 2026,
        "registration_start": "2026-06-01",
        "registration_deadline": "2026-11-10",
        "admission_mode": "生态农耕环保保送免试录取",
        "direct_admission_criteria": [
            "华小毕业凭校长推荐信直接免试录取",
            "生态环保农耕教育特色全人关怀",
            "提供平价寄宿宿舍"
        ],
        "result_release_date": "2026-11-20",
        "registration_payment_deadline": "2026-11-30",
        "scholarship_quota": "清寒助学金全免"
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
    admission_intake: {
        "intake_year": 2026,
        "registration_start": "2026-06-01",
        "registration_deadline": "2026-11-10",
        "admission_mode": "家庭式小班关怀免试直录",
        "direct_admission_criteria": [
            "华小毕业生凭校长推荐免试直录",
            "家庭式生活陪伴与品德熏陶",
            "寄宿床位全额保障"
        ],
        "result_release_date": "2026-11-20",
        "registration_payment_deadline": "2026-11-30",
        "scholarship_quota": "爱心助学扶助金"
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
    admission_intake: {
        "intake_year": 2026,
        "registration_start": "2026-06-01",
        "registration_deadline": "2026-11-10",
        "admission_mode": "纯朴校风校长保送免试直录",
        "direct_admission_criteria": [
            "华小毕业生态度端正由校长保送免试直录",
            "传统纯朴校风与三语基础强化",
            "提供外埠学生宿舍"
        ],
        "result_release_date": "2026-11-20",
        "registration_payment_deadline": "2026-11-30",
        "scholarship_quota": "清寒助学金"
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
    admission_intake: {
        "intake_year": 2026,
        "registration_start": "2026-06-01",
        "registration_deadline": "2026-11-15",
        "admission_mode": "乡村坚守保送免试直接录取",
        "direct_admission_criteria": [
            "泗里街及周边华小毕业生直接保送免试录取",
            "小班精细陪伴辅导",
            "乡村寄宿全方位关怀"
        ],
        "result_release_date": "2026-11-25",
        "registration_payment_deadline": "2026-12-05",
        "scholarship_quota": "免除全额学费助学计划"
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
    admission_intake: {
        "intake_year": 2026,
        "registration_start": "2026-06-01",
        "registration_deadline": "2026-09-30",
        "open_day_dates": [
            "2026-08-08"
        ],
        "entrance_exam_date": "2026-10-10",
        "exam_subjects": [
            "华文",
            "国文",
            "英文",
            "数学"
        ],
        "exam_format": "三轨国际评估闭卷试，注重数理英语高阶应用",
        "admission_mode": "三轨保送直录 + 入学甄选试",
        "direct_admission_criteria": [
            "华小五、六年级各科平均达 80 分以上直接免试直录",
            "美里及砂北各华小学校长特别推荐品学兼优保送生",
            "全国/全砂数理奥林匹克或科技赛前三名直录并颁优异奖学金",
            "五星级现代化冷气学生公寓，外地寄宿生专线审核"
        ],
        "result_release_date": "2026-10-18",
        "registration_payment_deadline": "2026-10-28",
        "dorm_application_deadline": "2026-10-28（五星级冷气学生公寓）",
        "scholarship_quota": "入学试考获前 15 名免除初一年全额学费"
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
    admission_intake: {
        "intake_year": 2026,
        "registration_start": "2026-06-01",
        "registration_deadline": "2026-10-15",
        "entrance_exam_date": "2026-10-24",
        "exam_subjects": [
            "华文",
            "国文",
            "英文",
            "数学"
        ],
        "admission_mode": "数理底蕴保送直录 + 入学甄拔考试",
        "direct_admission_criteria": [
            "美里及邻近华小排名前 15% 优异生免试保送",
            "华小学校长具函保送推荐信",
            "数理学术传统强项生免试录取"
        ],
        "result_release_date": "2026-10-31",
        "registration_payment_deadline": "2026-11-10",
        "dorm_application_deadline": "2026-11-10",
        "scholarship_quota": "前 15 名免除学费优异生奖"
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
    admission_intake: {
        "intake_year": 2026,
        "registration_start": "2026-06-01",
        "registration_deadline": "2026-10-15",
        "open_day_dates": [
            "2026-08-29"
        ],
        "entrance_exam_date": "2026-10-24",
        "exam_subjects": [
            "华文",
            "国文",
            "英文",
            "数学"
        ],
        "admission_mode": "现代化寄宿名校保送免试 + 入学试",
        "direct_admission_criteria": [
            "民都鲁各华小毕业由校长推荐免试直录",
            "五、六年级各科成绩平均达 75 分以上免试直录",
            "跨州迁校成功典范，现代化冷气宿舍保障外地生"
        ],
        "result_release_date": "2026-10-31",
        "registration_payment_deadline": "2026-11-10",
        "dorm_application_deadline": "2026-11-10（现代化寄宿大楼）",
        "scholarship_quota": "设开智优秀新生奖学金与常年清寒助学金"
    },
    fit_tags: ["迁校重生典范", "现代高规格校园", "双轨并重", "冷气寄宿大楼"],
    verification_status: {
      source_level: "official_school_verified",
      is_verified: true,
      last_updated: "2026-03-01"
    }
  }
];
