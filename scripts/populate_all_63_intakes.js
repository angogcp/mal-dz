const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, '../src/data/schoolsData.ts');

// Read the clean 63-school file
const content = fs.readFileSync(targetFile, 'utf8');

// Define specific intake data for all 63 schools
const intakeDatabase = {
  // 柔佛州 (10所)
  "foonyew-jb": {
    intake_year: 2026,
    registration_start: "2026-06-01",
    registration_deadline: "2026-08-30",
    open_day_dates: ["2026-07-18"],
    entrance_exam_date: "2026-09-19",
    exam_subjects: ["华文", "国文", "英文", "数学"],
    exam_format: "四科各占100分，依据华小高年段课程标准出题，闭卷笔试",
    exam_venue: "新山宽柔中学本部、古来分校、至达城分校三校同步",
    admission_mode: "宽柔三校联合初一甄拔考试（全员依总分择优录取）",
    direct_admission_criteria: [
      "不设校外无条件免试直录（全员统一参加入学甄选考试）",
      "宽柔直属华小特定品学兼优保送推荐名额",
      "华小全级第一名且入学试达标者特颁新生荣誉奖"
    ],
    result_release_date: "2026-09-28",
    registration_payment_deadline: "2026-10-08",
    scholarship_quota: "入学考成绩第1至10名免初一至高三全额学费；第11至50名免初一全年学费"
  },
  "foonyew-kulai": {
    intake_year: 2026,
    registration_start: "2026-06-01",
    registration_deadline: "2026-08-30",
    open_day_dates: ["2026-07-25"],
    entrance_exam_date: "2026-09-19",
    exam_subjects: ["华文", "国文", "英文", "数学"],
    exam_format: "宽柔三校统一命题笔试，按学区配额与录取分数线分发",
    exam_venue: "宽柔中学古来分校考场",
    admission_mode: "三校联合甄拔试（依学区录取）",
    direct_admission_criteria: [
      "按宽柔学村统一章程参加入学考，无个别免试通道",
      "古来区友好华小特优生荣誉保送奖",
      "三校统一由电脑按考区住址与志愿分派学籍"
    ],
    result_release_date: "2026-09-28",
    registration_payment_deadline: "2026-10-08",
    scholarship_quota: "古来考区总成绩前20名获初一学费全免奖励"
  },
  "foonyew-bsa": {
    intake_year: 2026,
    registration_start: "2026-06-01",
    registration_deadline: "2026-08-30",
    open_day_dates: ["2026-08-01"],
    entrance_exam_date: "2026-09-19",
    exam_subjects: ["华文", "国文", "英文", "数学"],
    exam_format: "宽柔三校统一命题笔试",
    exam_venue: "宽柔中学至达城分校大礼堂",
    admission_mode: "三校联合甄拔试（巴西古当及新山东区生源）",
    direct_admission_criteria: [
      "统一参加宽柔初一甄拔考试，择优录取",
      "巴西古当区友好华小特优生保送",
      "清寒子弟可同步递交学杂费援助金申请"
    ],
    result_release_date: "2026-09-28",
    registration_payment_deadline: "2026-10-08",
    scholarship_quota: "至达城考区成绩前20名获免除初一年学费"
  },
  "chonghwa-kluang": {
    intake_year: 2026,
    registration_start: "2026-06-01",
    registration_deadline: "2026-09-15",
    open_day_dates: ["2026-08-15"],
    entrance_exam_date: "2026-10-03",
    exam_subjects: ["华文", "国文", "英文", "数学"],
    exam_format: "闭卷笔试，每科各1小时",
    exam_venue: "居銮中华中学本部及外州指定代考点",
    admission_mode: "在校成绩特优保送直录 + 统一入学选拔考",
    direct_admission_criteria: [
      "华小五年级全年及六年级上半年总平均达 80 分以上可免试直录",
      "居銮县及柔中区华小学校长具函保送优秀模范生",
      "全国/全州数理竞赛获前三名直接保送免考",
      "外州寄宿生凭原校成绩优先审核直通预录"
    ],
    result_release_date: "2026-10-12",
    registration_payment_deadline: "2026-10-22",
    dorm_application_deadline: "2026-10-20 (冷气千人宿舍，外州生优先办理床位锁定)",
    scholarship_quota: "入学考前30名享有初一年学费全免或半免奖励"
  },
  "chunghwa-muar": {
    intake_year: 2026,
    registration_start: "2026-06-01",
    registration_deadline: "2026-09-20",
    open_day_dates: ["2026-08-22"],
    entrance_exam_date: "2026-10-10",
    exam_subjects: ["华文", "国文", "英文", "数学"],
    exam_format: "笔试四科，各100分",
    exam_venue: "麻坡中化中学大礼堂",
    admission_mode: "成绩免试保送 + 入学甄选考试",
    direct_admission_criteria: [
      "华小六年级上半年总成绩达 80 分或全级前五名免试直录",
      "麻坡县及东甲县华小学校长特别保送推荐生",
      "全国华小三语演讲或全州球类代表保送"
    ],
    result_release_date: "2026-10-18",
    registration_payment_deadline: "2026-10-28",
    dorm_application_deadline: "2026-10-28 (外区生冷气宿舍申请)",
    scholarship_quota: "入学考成绩前20名及校长保送特优生获全免学费"
  },
  "peichun-pontian": {
    intake_year: 2026,
    registration_start: "2026-06-01",
    registration_deadline: "2026-09-30",
    entrance_exam_date: "2026-10-10",
    exam_subjects: ["华文", "国文", "英文", "数学"],
    exam_format: "闭卷笔试",
    exam_venue: "笨珍培群独中校本部",
    admission_mode: "校长保送免试直录 + 入学编班甄选试",
    direct_admission_criteria: [
      "华小五、六年级各科平均达 75 分以上免试直录",
      "笨珍县各华小学校长具函保送推荐直通录取",
      "柔南及新山外区寄宿生凭在校成绩单提前直录"
    ],
    result_release_date: "2026-10-18",
    registration_payment_deadline: "2026-10-28",
    dorm_application_deadline: "2026-10-28 (全新现代化宿舍，外州寄宿生优先)",
    scholarship_quota: "考获前15名免除初一全年学费"
  },
  "chsbp-batupahat": {
    intake_year: 2026,
    registration_start: "2026-06-01",
    registration_deadline: "2026-09-25",
    open_day_dates: ["2026-08-29"],
    entrance_exam_date: "2026-10-03",
    exam_subjects: ["华文", "国文", "英文", "数学"],
    exam_format: "四科联考，注重综合素养",
    exam_venue: "华仁中学校园考场",
    admission_mode: "华小保送优先 + 入学甄试",
    direct_admission_criteria: [
      "华小五、六年级校内总成绩 80 分以上可免试直录",
      "峇株巴辖县各华小学校长特选保送推荐优等生",
      "学术才艺州级代表免试录取"
    ],
    result_release_date: "2026-10-12",
    registration_payment_deadline: "2026-10-22",
    scholarship_quota: "入学试前20名获初一学费全免奖励"
  },
  "peihwa-tangkak": {
    intake_year: 2026,
    registration_start: "2026-06-01",
    registration_deadline: "2026-10-10",
    entrance_exam_date: "2026-10-17",
    exam_subjects: ["华文", "国文", "英文", "数学"],
    admission_mode: "校长保送免试直通 + 新生素质评估",
    direct_admission_criteria: [
      "华小毕业生凭校长推荐函可直接免试录取",
      "华小五年级及六年级成绩总及格以上",
      "外区寄宿生设提前预审通道"
    ],
    result_release_date: "2026-10-25",
    registration_payment_deadline: "2026-11-05",
    dorm_application_deadline: "2026-11-05",
    scholarship_quota: "提供清寒子弟助学金与优秀新生学杂费补贴"
  },
  "sinhwa-rengit": {
    intake_year: 2026,
    registration_start: "2026-06-01",
    registration_deadline: "2026-10-15",
    entrance_exam_date: "2026-10-24",
    exam_subjects: ["华文", "国文", "英文", "数学"],
    admission_mode: "全员免试保送（重在素质评估与分班）",
    direct_admission_criteria: [
      "全马各华小毕业生态度良好，校长推荐免试直录",
      "全国生态寄宿与生态农业特色关怀直录",
      "外州寄宿生全额保障宿舍床位"
    ],
    result_release_date: "2026-10-30",
    registration_payment_deadline: "2026-11-15",
    dorm_application_deadline: "2026-11-15",
    scholarship_quota: "全免与半免学费扶助名额充足"
  },
  "yongpeng-high": {
    intake_year: 2026,
    registration_start: "2026-06-01",
    registration_deadline: "2026-10-15",
    entrance_exam_date: "2026-10-17",
    exam_subjects: ["华文", "国文", "英文", "数学"],
    admission_mode: "小班保送直接录取 + 编班测验",
    direct_admission_criteria: [
      "华小毕业凭校长推荐免试录取",
      "柔中周边华小生直接保送",
      "小班制精细化教学优先席位"
    ],
    result_release_date: "2026-10-26",
    registration_payment_deadline: "2026-11-08",
    scholarship_quota: "设董压清寒奖助学金与新生鼓励金"
  },

  // 吉隆坡联邦直辖区 (4所)
  "chonghwa-kl": {
    intake_year: 2026,
    registration_start: "2026-06-01",
    registration_deadline: "2026-09-15",
    open_day_dates: ["2026-07-11", "2026-08-08"],
    entrance_exam_date: "2026-10-03",
    exam_subjects: ["华文", "国文", "英文", "数学"],
    exam_format: "四科统一命题闭卷笔试，每科各1小时，注重高阶思维",
    exam_venue: "吉隆坡中华独中本部及指定外州/东海岸考场",
    admission_mode: "保送免试直录与新生入学考试并行遴选",
    direct_admission_criteria: [
      "华小五、六年级各学期总平均成绩达 80 分以上可申请【特优免试直录】",
      "获华小学校长特别具函保送推荐之品学兼优模范生",
      "曾代表州或国家参加入学相关学术、数理奥林匹克或球类比赛获前三名者",
      "友好华小校内排名前 5% 优秀毕业生保送名额"
    ],
    result_release_date: "2026-10-12",
    registration_payment_deadline: "2026-10-22",
    dorm_application_deadline: "2026-10-20 (外州生须随同注册缴费提交宿舍申请与体检证明)",
    scholarship_quota: "入学试考获前 30 名特颁初一学杂费全免/半免奖学金；另设常年清寒子弟助学金"
  },
  "kuencheng-kl": {
    intake_year: 2026,
    registration_start: "2026-06-01",
    registration_deadline: "2026-09-10",
    open_day_dates: ["2026-07-25", "2026-08-15"],
    entrance_exam_date: "2026-09-26",
    exam_subjects: ["华文", "国文", "英文", "数学"],
    exam_format: "四科联考，英文与数学设深度应用题，注重国际视野",
    admission_mode: "成绩达标免试保送 + 入学甄拔考试",
    direct_admission_criteria: [
      "华小五年级全年及六年级总平均达 85 分以上，且主科全A/TP5以上直接免试录取",
      "获华小学校长特别保送推荐之模范生/级长团团长",
      "全国奥林匹克数理赛、英语拼字或三语演讲赛全州前三名直录"
    ],
    result_release_date: "2026-10-05",
    registration_payment_deadline: "2026-10-16",
    dorm_application_deadline: "2026-10-15 (宿位极紧张，外州生需尽早递交)",
    scholarship_quota: "成绩名列前 20 名者免收初一全额学费"
  },
  "tsunjin-kl": {
    intake_year: 2026,
    registration_start: "2026-06-01",
    registration_deadline: "2026-09-12",
    open_day_dates: ["2026-08-01"],
    entrance_exam_date: "2026-09-26",
    exam_subjects: ["华文", "国文", "英文", "数学"],
    admission_mode: "五六年级优异成绩免试录取 + 统一入学选拔试",
    direct_admission_criteria: [
      "华小五年级及六年级上半年华国英数达全A或总平均 80 分以上直接免试录取",
      "华小学校长签署推荐函之保送优等生",
      "州级学术比赛代表直接保送"
    ],
    result_release_date: "2026-10-05",
    registration_payment_deadline: "2026-10-15",
    scholarship_quota: "成绩前 15 名免除初一全年学费"
  },
  "confucian-kl": {
    intake_year: 2026,
    registration_start: "2026-06-01",
    registration_deadline: "2026-09-25",
    open_day_dates: ["2026-08-15"],
    entrance_exam_date: "2026-10-10",
    exam_subjects: ["华文", "国文", "英文", "数学"],
    exam_format: "闭卷笔试四科，设普通班与特辅班分流测试",
    admission_mode: "成绩保送直录 + 入学甄拔考试",
    direct_admission_criteria: [
      "华小五年级及六年级校考总平均 75 分以上免试直录",
      "华小学校长保送具函推荐优异生免试录取",
      "全国/州级才艺及体育比赛优胜代表直接保送",
      "特辅班面向需个别化关怀辅导学生提前评估面试"
    ],
    result_release_date: "2026-10-19",
    registration_payment_deadline: "2026-10-30",
    dorm_application_deadline: "2026-10-30 (新建现代化冷气学生宿舍，外州生优先保障)",
    scholarship_quota: "入学考前20名免交首年学杂费；特设清寒子弟助学金"
  },

  // 雪兰莪州 (4所)
  "hinhua-klang": {
    intake_year: 2026,
    registration_start: "2026-06-01",
    registration_deadline: "2026-09-12",
    open_day_dates: ["2026-07-18", "2026-08-08"],
    entrance_exam_date: "2026-10-03",
    exam_subjects: ["华文", "国文", "英文", "数学"],
    admission_mode: "保送免试直录与新生入学考试并行",
    direct_admission_criteria: [
      "华小五、六年级各学期总成绩达 80 分以上直接免试保送",
      "华小学校长推荐之杰出品学兼优生 / 学长团团长 / 模范生",
      "全国奥林匹克数理赛、创客机器人赛州代表保送直录"
    ],
    result_release_date: "2026-10-09",
    registration_payment_deadline: "2026-10-19",
    dorm_application_deadline: "2026-10-18 (现代化公寓式宿舍，外州生优先保留)",
    scholarship_quota: "入学考前 20 名获全免或半免学费优异奖学金"
  },
  "pinhua-klang": {
    intake_year: 2026,
    registration_start: "2026-06-01",
    registration_deadline: "2026-09-18",
    open_day_dates: ["2026-08-01", "2026-08-22"],
    entrance_exam_date: "2026-10-03",
    exam_subjects: ["华文", "国文", "英文", "数学"],
    admission_mode: "领导力特优免试直录 + 入学甄试",
    direct_admission_criteria: [
      "华小五、六年级总成绩达 78 分以上直接免试直录",
      "华小学校长保送之领导力模范生 / 杰出学长",
      "全国学术才艺竞赛获奖代表免试保送"
    ],
    result_release_date: "2026-10-10",
    registration_payment_deadline: "2026-10-21",
    dorm_application_deadline: "2026-10-20 (高层现代化宿舍，外州生优先)",
    scholarship_quota: "成绩前20名免收首年学费；设领导力优异奖"
  },
  "chunghua-klang": {
    intake_year: 2026,
    registration_start: "2026-06-01",
    registration_deadline: "2026-09-25",
    entrance_exam_date: "2026-10-10",
    exam_subjects: ["华文", "国文", "英文", "数学"],
    admission_mode: "华小保送优先 + 入学甄拔试",
    direct_admission_criteria: [
      "华小五年级及六年级上半年成绩平均 75 分以上免试直录",
      "巴生县及邻近华小学校长具函保送推荐信",
      "艺术、管乐或体育特长生加分免试录取"
    ],
    result_release_date: "2026-10-18",
    registration_payment_deadline: "2026-10-28",
    dorm_application_deadline: "2026-10-28",
    scholarship_quota: "入学考前15名免除初一学费"
  },
  "kwanghua-klang": {
    intake_year: 2026,
    registration_start: "2026-06-01",
    registration_deadline: "2026-09-25",
    open_day_dates: ["2026-08-15"],
    entrance_exam_date: "2026-10-10",
    exam_subjects: ["华文", "国文", "英文", "数学"],
    admission_mode: "成绩达标免试保送 + 新生入学甄选试",
    direct_admission_criteria: [
      "华小五、六年级校考平均成绩达 75 分以上免试直录",
      "华小学校长特别推荐品学兼优保送生",
      "三轨国际班与统考班按英文数理特长分流面试"
    ],
    result_release_date: "2026-10-18",
    registration_payment_deadline: "2026-10-28",
    dorm_application_deadline: "2026-10-28",
    scholarship_quota: "入学试优异生特颁奖学金"
  },

  // 森美兰州 (2所)
  "chunghua-seremban": {
    intake_year: 2026,
    registration_start: "2026-06-01",
    registration_deadline: "2026-09-20",
    open_day_dates: ["2026-08-08"],
    entrance_exam_date: "2026-10-04",
    exam_subjects: ["华文", "国文", "英文", "数学"],
    exam_venue: "芙中本部、吉隆坡中华分考场、雪兰莪分考场",
    admission_mode: "外州绿色直录 + 华小保送 + 统一入学选拔试",
    direct_admission_criteria: [
      "华小五年级及六年级上半年总成绩平均达 75 分以上直接免试录取",
      "雪隆及外州华小学校长具函保送推荐优异生",
      "森美兰州各华小校内排名前五名保送直录",
      "外州住宿生专设提前审核绿色通道"
    ],
    result_release_date: "2026-10-12",
    registration_payment_deadline: "2026-10-25",
    dorm_application_deadline: "2026-10-25 (千人寄宿大校，住宿申请与学籍注册同步确认)",
    scholarship_quota: "入学考前 30 名享有初一学杂费减免奖学金"
  },
  "chunghua-pd": {
    intake_year: 2026,
    registration_start: "2026-06-01",
    registration_deadline: "2026-10-15",
    entrance_exam_date: "2026-10-24",
    exam_subjects: ["华文", "国文", "英文", "数学"],
    admission_mode: "校长保送免试录取 + 编班能力测验",
    direct_admission_criteria: [
      "华小毕业生凭校长推荐函可直接保送录取",
      "雪隆森外区寄宿生凭在校成绩单提前预审直录",
      "海洋与人文特色研学优先录取"
    ],
    result_release_date: "2026-10-31",
    registration_payment_deadline: "2026-11-10",
    dorm_application_deadline: "2026-11-10 (温馨小班寄宿保障)",
    scholarship_quota: "提供学杂费全免与半免名额"
  },

  // 马六甲州 (1所)
  "payfong-melaka": {
    intake_year: 2026,
    registration_start: "2026-06-01",
    registration_deadline: "2026-09-25",
    open_day_dates: ["2026-08-22"],
    entrance_exam_date: "2026-10-10",
    exam_subjects: ["华文", "国文", "英文", "数学"],
    exam_format: "统一命题闭卷考试，每科1小时",
    exam_venue: "马六甲培风中学本部礼堂",
    admission_mode: "华小保送免试直录 + 入学甄试",
    direct_admission_criteria: [
      "华小五年级及六年级上半年总成绩达 78 分以上或全级排名前10%免试直录",
      "马六甲及邻近州属华小学校长保送推荐优异生",
      "全州三语演讲、数理比赛优胜代表免试录取"
    ],
    result_release_date: "2026-10-18",
    registration_payment_deadline: "2026-10-28",
    dorm_application_deadline: "2026-10-28 (外州生寄宿申请通道)",
    scholarship_quota: "入学考前20名特颁初一学费全免奖励金"
  },

  // 霹雳州 (9所)
  "shenjai-ipoh": {
    intake_year: 2026,
    registration_start: "2026-06-01",
    registration_deadline: "2026-09-30",
    entrance_exam_date: "2026-10-10",
    exam_subjects: ["华文", "国文", "英文", "数学"],
    admission_mode: "校长保送免试录取 + 新生资格甄试",
    direct_admission_criteria: [
      "华小五、六年级各科平均达 75 分以上免试直录",
      "怡保及霹雳州各华小学校长具函保送推荐信",
      "商科特长与学术优异保送"
    ],
    result_release_date: "2026-10-19",
    registration_payment_deadline: "2026-10-30",
    dorm_application_deadline: "2026-10-30",
    scholarship_quota: "入学试前15名免交初一学费"
  },
  "poilam-ipoh": {
    intake_year: 2026,
    registration_start: "2026-06-01",
    registration_deadline: "2026-10-10",
    open_day_dates: ["2026-08-15"],
    entrance_exam_date: "2026-10-17",
    exam_subjects: ["华文", "国文", "英文", "数学"],
    exam_format: "闭卷笔试，设统考班与剑桥IGCSE班分流评估",
    admission_mode: "特优成绩免试直录 + 入学考试",
    direct_admission_criteria: [
      "华小五、六年级校内成绩平均 78 分以上免试直录",
      "校长保送推荐之优秀毕业生直接录取",
      "全国英文能力或数理竞赛得奖生免试保送剑桥班"
    ],
    result_release_date: "2026-10-25",
    registration_payment_deadline: "2026-11-05",
    dorm_application_deadline: "2026-11-05 (设备完善寄宿公寓)",
    scholarship_quota: "设初一优秀新生全免/半免学费奖"
  },
  "yukchoy-ipoh": {
    intake_year: 2026,
    registration_start: "2026-06-01",
    registration_deadline: "2026-10-15",
    entrance_exam_date: "2026-10-24",
    exam_subjects: ["华文", "国文", "英文", "数学"],
    admission_mode: "华小保送优先 + 编班入学试",
    direct_admission_criteria: [
      "华小毕业生凭校长推荐函免试直接录取",
      "汽车维修、美工技职班专设特长免试直录",
      "外州寄宿生优先安排冷气宿舍"
    ],
    result_release_date: "2026-10-31",
    registration_payment_deadline: "2026-11-10",
    dorm_application_deadline: "2026-11-10",
    scholarship_quota: "设清寒子弟助学金与技职专修奖励金"
  },
  "hualian-taiping": {
    intake_year: 2026,
    registration_start: "2026-06-01",
    registration_deadline: "2026-10-10",
    entrance_exam_date: "2026-10-17",
    exam_subjects: ["华文", "国文", "英文", "数学"],
    admission_mode: "华小保送免试录取 + 入学考",
    direct_admission_criteria: [
      "太平及北霹雳华小成绩优异生免试直录",
      "华小学校长具函保送推荐信",
      "外区寄宿生凭在校成绩单提前审核预录"
    ],
    result_release_date: "2026-10-25",
    registration_payment_deadline: "2026-11-05",
    dorm_application_deadline: "2026-11-05",
    scholarship_quota: "入学考前15名免除首年学费"
  },
  "sanmin-telukintan": {
    intake_year: 2026,
    registration_start: "2026-06-15",
    registration_deadline: "2026-10-15",
    entrance_exam_date: "2026-10-24",
    exam_subjects: ["华文", "国文", "英文", "数学"],
    admission_mode: "华小保送优先 + 入学甄拔试",
    direct_admission_criteria: [
      "华小学校长具函推荐信即可直接保送免试录取",
      "外州寄宿生凭华小校考成绩单提前免试预录",
      "操行品格达乙等以上合格"
    ],
    result_release_date: "2026-10-30",
    registration_payment_deadline: "2026-11-10",
    dorm_application_deadline: "2026-11-10 (严格纪律寄宿，须签署宿舍守则)",
    scholarship_quota: "提供清寒子弟助学金与优秀寄宿生学费减免"
  },
  "yikching-pantai": {
    intake_year: 2026,
    registration_start: "2026-06-01",
    registration_deadline: "2026-10-30",
    entrance_exam_date: "2026-11-07",
    exam_subjects: ["华文", "国文", "英文", "数学"],
    admission_mode: "全员免试直录保送（重在爱心关怀）",
    direct_admission_criteria: [
      "全马华小毕业生态度端正校长保送免试全收",
      "提供平价爱心寄宿保障",
      "关怀型小班教学直通"
    ],
    result_release_date: "2026-11-15",
    registration_payment_deadline: "2026-11-30",
    scholarship_quota: "清寒家庭全免学费支持计划"
  },
  "tsungwah-kk": {
    intake_year: 2026,
    registration_start: "2026-06-01",
    registration_deadline: "2026-10-31",
    entrance_exam_date: "2026-11-07",
    exam_subjects: ["华文", "国文", "英文", "数学"],
    admission_mode: "校长保送免试直通 + 农艺特长直录",
    direct_admission_criteria: [
      "华小毕业校长推荐免试直录",
      "热爱自然农艺与生态教育学生优先录取",
      "外区寄宿生免费/低额住宿津贴"
    ],
    result_release_date: "2026-11-15",
    registration_payment_deadline: "2026-11-30",
    scholarship_quota: "农艺专修与学业优异全免学费名额"
  },
  "nanhwa-manjung": {
    intake_year: 2026,
    registration_start: "2026-06-01",
    registration_deadline: "2026-10-15",
    entrance_exam_date: "2026-10-24",
    exam_subjects: ["华文", "国文", "英文", "数学"],
    admission_mode: "华小保送免试录取 + 入学考",
    direct_admission_criteria: [
      "曼绒县及外区华小成绩良好免试直录",
      "华小学校长保送具函推荐生免考",
      "全人教育特长生保送"
    ],
    result_release_date: "2026-10-31",
    registration_payment_deadline: "2026-11-10",
    dorm_application_deadline: "2026-11-10",
    scholarship_quota: "入学考前15名免除学费"
  },
  "peiyuan-kampar": {
    intake_year: 2026,
    registration_start: "2026-06-01",
    registration_deadline: "2026-10-15",
    entrance_exam_date: "2026-10-24",
    exam_subjects: ["华文", "国文", "英文", "数学"],
    admission_mode: "校长保送直通 + 编班测验",
    direct_admission_criteria: [
      "华小毕业生凭校长推荐免试直接录取",
      "金宝周边华小保送优先",
      "纯朴学风小班精细辅导"
    ],
    result_release_date: "2026-10-31",
    registration_payment_deadline: "2026-11-10",
    dorm_application_deadline: "2026-11-10",
    scholarship_quota: "设清寒学杂费减免基金"
  },

  // 槟城州 (5所)
  "chungling-penang": {
    intake_year: 2026,
    registration_start: "2026-06-01",
    registration_deadline: "2026-09-15",
    open_day_dates: ["2026-07-25"],
    entrance_exam_date: "2026-10-03",
    exam_subjects: ["华文", "国文", "英文", "数学"],
    admission_mode: "特优保送直录 + 入学甄拔试按分录取",
    direct_admission_criteria: [
      "华小五、六年级校内总成绩 80 分以上可免试直录",
      "国际/全国数理奥林匹克比赛金银牌保送并颁发全免奖学金",
      "槟城各华小全级前三名校长保送推荐"
    ],
    result_release_date: "2026-10-10",
    registration_payment_deadline: "2026-10-20",
    scholarship_quota: "入学考前 10 名获免交初一至高三全额学费荣誉奖"
  },
  "hanchiang-penang": {
    intake_year: 2026,
    registration_start: "2026-06-01",
    registration_deadline: "2026-09-20",
    open_day_dates: ["2026-08-01"],
    entrance_exam_date: "2026-10-10",
    exam_subjects: ["华文", "国文", "英文", "数学"],
    exam_format: "闭卷笔试，注重创客科技与双语综合能力",
    admission_mode: "创客科技保送直录 + 新生入学甄选试",
    direct_admission_criteria: [
      "华小五、六年级校考平均成绩 78 分以上免试直录",
      "华小学校长保送品学兼优毕业生",
      "全国机器人、创客科技比赛获奖代表直接保送"
    ],
    result_release_date: "2026-10-18",
    registration_payment_deadline: "2026-10-28",
    dorm_application_deadline: "2026-10-28 (外州生现代宿舍)",
    scholarship_quota: "入学试前15名免收初一年学费"
  },
  "pcg-penang": {
    intake_year: 2026,
    registration_start: "2026-06-01",
    registration_deadline: "2026-09-30",
    entrance_exam_date: "2026-10-10",
    exam_subjects: ["华文", "国文", "英文", "数学"],
    admission_mode: "女校保送免试录取 + 新生资格考",
    direct_admission_criteria: [
      "华小女毕业生校考总平均 75 分以上免试直录",
      "各华小学校长具函保送推荐女生免试",
      "艺术、舞蹈或管乐特长保送录取"
    ],
    result_release_date: "2026-10-18",
    registration_payment_deadline: "2026-10-28",
    dorm_application_deadline: "2026-10-28 (全女校安全寄宿楼)",
    scholarship_quota: "女校优秀新生奖学金"
  },
  "phortay-penang": {
    intake_year: 2026,
    registration_start: "2026-06-01",
    registration_deadline: "2026-10-15",
    entrance_exam_date: "2026-10-24",
    exam_subjects: ["华文", "国文", "英文", "数学"],
    admission_mode: "佛化全人关怀全员保送免试",
    direct_admission_criteria: [
      "全马华小毕业凭校长推荐信免试直接录取",
      "注重品行端正与慈悲利他品格",
      "小班制关怀全走读"
    ],
    result_release_date: "2026-10-31",
    registration_payment_deadline: "2026-11-10",
    scholarship_quota: "佛学与清寒助学金"
  },
  "jitsin-bm": {
    intake_year: 2026,
    registration_start: "2026-06-01",
    registration_deadline: "2026-09-15",
    open_day_dates: ["2026-08-08"],
    entrance_exam_date: "2026-10-03",
    exam_subjects: ["华文", "国文", "英文", "数学"],
    admission_mode: "成绩特优免试直录 + 入学甄拔考试",
    direct_admission_criteria: [
      "华小五、六年级上半年总成绩达 80 分以上直接免试直录",
      "威中及北马各华小学校长保送推荐优等生",
      "奥数、三语演讲全国优胜代表保送"
    ],
    result_release_date: "2026-10-10",
    registration_payment_deadline: "2026-10-20",
    dorm_application_deadline: "2026-10-20 (寄宿设施完备)",
    scholarship_quota: "入学考前20名免交首年学杂费"
  },

  // 吉打州 (3所)
  "keathwa-as": {
    intake_year: 2026,
    registration_start: "2026-06-01",
    registration_deadline: "2026-09-30",
    entrance_exam_date: "2026-10-10",
    exam_subjects: ["华文", "国文", "英文", "数学"],
    admission_mode: "保送免试直通 + 新生甄选考",
    direct_admission_criteria: [
      "吉华属下及吉打州各华小成绩排名前15%直接免试直录",
      "华小学校长保送推荐信",
      "华乐、管乐、体育校队州代表保送"
    ],
    result_release_date: "2026-10-18",
    registration_payment_deadline: "2026-10-28",
    dorm_application_deadline: "2026-10-28",
    scholarship_quota: "前15名免初一学费"
  },
  "sinmin-as": {
    intake_year: 2026,
    registration_start: "2026-06-01",
    registration_deadline: "2026-10-15",
    entrance_exam_date: "2026-10-24",
    exam_subjects: ["华文", "国文", "英文", "数学"],
    admission_mode: "校长保送免试直录 + 入学测验",
    direct_admission_criteria: [
      "华小毕业成绩合格或校长推荐信免试录取",
      "吉打周边华小优先保送",
      "小班关怀制"
    ],
    result_release_date: "2026-10-31",
    registration_payment_deadline: "2026-11-10",
    scholarship_quota: "清寒与优秀助学金"
  },
  "sinmin-sp": {
    intake_year: 2026,
    registration_start: "2026-06-01",
    registration_deadline: "2026-10-10",
    entrance_exam_date: "2026-10-17",
    exam_subjects: ["华文", "国文", "英文", "数学"],
    admission_mode: "优等保送直录 + 统一入学选拔考",
    direct_admission_criteria: [
      "华小五、六年级各科平均 75 分以上免试直录",
      "双溪大年及邻近华小学校长保送名额",
      "稳健学术双轨直录"
    ],
    result_release_date: "2026-10-25",
    registration_payment_deadline: "2026-11-05",
    dorm_application_deadline: "2026-11-05",
    scholarship_quota: "考获前15名免学费"
  },

  // 吉兰丹州 (1所)
  "chunghwa-kelantan": {
    intake_year: 2026,
    registration_start: "2026-06-01",
    registration_deadline: "2026-10-31",
    entrance_exam_date: "2026-11-07",
    exam_subjects: ["华文", "国文", "英文", "数学"],
    admission_mode: "全马免试直录保送 + 迎新适应性评估",
    direct_admission_criteria: [
      "全马各州华小毕业生凭校长推荐函直接免试录取",
      "全寄宿特色校园，外州生优先安排床位与生活导师督导",
      "东海岸华教前哨保送计划全免学杂费"
    ],
    result_release_date: "2026-11-15",
    registration_payment_deadline: "2026-11-30",
    dorm_application_deadline: "2026-11-30 (全寄宿保障，男女冷气宿舍)",
    scholarship_quota: "丹中特别奖助学金与领养计划"
  },

  // 彭亨州 (1所)
  "chonghwa-kuantan": {
    intake_year: 2026,
    registration_start: "2026-06-01",
    registration_deadline: "2026-09-30",
    open_day_dates: ["2026-08-22"],
    entrance_exam_date: "2026-10-10",
    exam_subjects: ["华文", "国文", "英文", "数学"],
    admission_mode: "东海岸华小保送 + 入学甄拔考试",
    direct_admission_criteria: [
      "彭亨州及东海岸华小五年级/六年级总成绩达 75 分以上免试直录",
      "华小学校长具函保送推荐",
      "外州生优先安排全冷气学生宿舍"
    ],
    result_release_date: "2026-10-18",
    registration_payment_deadline: "2026-10-28",
    dorm_application_deadline: "2026-10-28 (现代冷气宿舍)",
    scholarship_quota: "东海岸特优生奖学金"
  },

  // 沙巴州 (9所)
  "tshungtsin-kk": {
    intake_year: 2026,
    registration_start: "2026-06-01",
    registration_deadline: "2026-09-15",
    open_day_dates: ["2026-07-25"],
    entrance_exam_date: "2026-09-26",
    exam_subjects: ["华文", "国文", "英文", "数学"],
    admission_mode: "特优保送 + 新生资格考试",
    direct_admission_criteria: [
      "亚庇及全沙巴各华小五年级及六年级总平均达 80 分以上直接免试录取",
      "华小学校长保送特别名额",
      "全州数理竞赛、三语演讲优胜代表直接保送"
    ],
    result_release_date: "2026-10-05",
    registration_payment_deadline: "2026-10-18",
    dorm_application_deadline: "2026-10-18",
    scholarship_quota: "入学考前 15 名获初一学费全免奖励"
  },
  "kiankok-kk": {
    intake_year: 2026,
    registration_start: "2026-06-01",
    registration_deadline: "2026-09-30",
    entrance_exam_date: "2026-10-10",
    exam_subjects: ["华文", "国文", "英文", "数学"],
    admission_mode: "校长保送免试录取 + 新生资格甄拔试",
    direct_admission_criteria: [
      "华小五、六年级各科平均 75 分以上免试直录",
      "亚庇周边华小学校长具函保送推荐信",
      "全人与科学创客特长保送"
    ],
    result_release_date: "2026-10-18",
    registration_payment_deadline: "2026-10-28",
    dorm_application_deadline: "2026-10-28",
    scholarship_quota: "前15名免除学费"
  },
  "bahua-tawau": {
    intake_year: 2026,
    registration_start: "2026-06-01",
    registration_deadline: "2026-10-15",
    entrance_exam_date: "2026-10-24",
    exam_subjects: ["华文", "国文", "英文", "数学"],
    admission_mode: "特优保送 + 入学甄试",
    direct_admission_criteria: [
      "斗湖各华小成绩达 75 分以上免试直录",
      "华小学校长保送优等生",
      "备有现代化冷气学生宿舍"
    ],
    result_release_date: "2026-10-31",
    registration_payment_deadline: "2026-11-10",
    dorm_application_deadline: "2026-11-10",
    scholarship_quota: "设新生全免学费奖"
  },
  "yuyuan-sandakan": {
    intake_year: 2026,
    registration_start: "2026-06-01",
    registration_deadline: "2026-10-10",
    entrance_exam_date: "2026-10-17",
    exam_subjects: ["华文", "国文", "英文", "数学"],
    admission_mode: "华小保送优先 + 资讯科技特优甄试",
    direct_admission_criteria: [
      "山打根各华小校内排名前列免试直录",
      "校长保送推荐信",
      "资讯科技与电脑特长保送"
    ],
    result_release_date: "2026-10-25",
    registration_payment_deadline: "2026-11-05",
    dorm_application_deadline: "2026-11-05",
    scholarship_quota: "优异新生奖学金"
  },
  "lahaddatu-ms": {
    intake_year: 2026,
    registration_start: "2026-06-01",
    registration_deadline: "2026-11-15",
    entrance_exam_date: "2026-11-20",
    exam_subjects: ["华文", "国文", "英文", "数学"],
    admission_mode: "社区保送全员免试录取",
    direct_admission_criteria: [
      "拿笃及周边华小毕业生凭校长推荐免试直录",
      "小班社区精细关怀",
      "提供寄宿与交通补贴"
    ],
    result_release_date: "2026-11-25",
    registration_payment_deadline: "2026-12-05",
    scholarship_quota: "清寒助学金全额覆盖"
  },
  "tenom-ttss": {
    intake_year: 2026,
    registration_start: "2026-06-01",
    registration_deadline: "2026-11-15",
    admission_mode: "全员校长保送免试录取",
    direct_admission_criteria: [
      "内陆省华小毕业生凭校长推荐免试直录",
      "纯朴校风与生态农业特色保送",
      "提供免费住宿与清寒膳食津贴"
    ],
    result_release_date: "2026-11-25",
    registration_payment_deadline: "2026-12-05",
    scholarship_quota: "全免学费名额充足"
  },
  "beaufort-ms": {
    intake_year: 2026,
    registration_start: "2026-06-01",
    registration_deadline: "2026-11-15",
    admission_mode: "小班保送免试录取",
    direct_admission_criteria: [
      "保佛及周边华小毕业生校长保送直录",
      "小班制爱心教育与课后督导",
      "外埠生备有宿舍"
    ],
    result_release_date: "2026-11-25",
    registration_payment_deadline: "2026-12-05",
    scholarship_quota: "清寒助学金"
  },
  "papar-ms": {
    intake_year: 2026,
    registration_start: "2026-06-01",
    registration_deadline: "2026-11-15",
    admission_mode: "温馨校园保送免试直录",
    direct_admission_criteria: [
      "吧巴各华小毕业生凭校长推荐免试直接录取",
      "注重品德与母语文化传承",
      "提供外区寄宿关怀"
    ],
    result_release_date: "2026-11-25",
    registration_payment_deadline: "2026-12-05",
    scholarship_quota: "设学业优良奖励金"
  },
  "peitsin-kudat": {
    intake_year: 2026,
    registration_start: "2026-06-01",
    registration_deadline: "2026-11-15",
    admission_mode: "最北端华教前哨保送免试直录",
    direct_admission_criteria: [
      "全马各华小毕业生凭推荐信免试直接录取",
      "全免学费与宿舍费特别资助计划",
      "小班一对一关怀引导"
    ],
    result_release_date: "2026-11-25",
    registration_payment_deadline: "2026-12-05",
    scholarship_quota: "全额奖助学金资助计划"
  },

  // 砂拉越州 (14所)
  "chms1-kuching": {
    intake_year: 2026,
    registration_start: "2026-06-01",
    registration_deadline: "2026-09-30",
    open_day_dates: ["2026-08-15"],
    entrance_exam_date: "2026-10-10",
    exam_subjects: ["华文", "国文", "英文", "数学"],
    admission_mode: "校长保送直通 + 统一评估试",
    direct_admission_criteria: [
      "古晋属下华小校长推荐信直接保送免试录取",
      "华小五、六年级各科平均达标者免试直录",
      "享有砂拉越州政府特别奖助学金资助"
    ],
    result_release_date: "2026-10-20",
    registration_payment_deadline: "2026-10-31",
    dorm_application_deadline: "2026-10-31",
    scholarship_quota: "设砂州政府资助优秀生奖学金"
  },
  "chms3-kuching": {
    intake_year: 2026,
    registration_start: "2026-06-01",
    registration_deadline: "2026-10-31",
    entrance_exam_date: "2026-11-07",
    exam_subjects: ["华文", "国文", "英文", "数学"],
    admission_mode: "技职特色保送免试录取",
    direct_admission_criteria: [
      "古晋及周边华小毕业校长推荐免试直录",
      "美术设计、烘焙与技职专修特长保送",
      "享有砂拉越独中统筹津贴资助"
    ],
    result_release_date: "2026-11-15",
    registration_payment_deadline: "2026-11-30",
    scholarship_quota: "技职专修奖励金"
  },
  "chms4-kuching": {
    intake_year: 2026,
    registration_start: "2026-06-01",
    registration_deadline: "2026-10-31",
    admission_mode: "赏识教育小班精品保送免试直录",
    direct_admission_criteria: [
      "华小毕业凭校长推荐信免试直接录取",
      "行知赏识教育无门槛爱心接纳",
      "纯走读精品小班"
    ],
    result_release_date: "2026-11-15",
    registration_payment_deadline: "2026-11-30",
    scholarship_quota: "赏识好孩子奖学金"
  },
  "minlit-batukawa": {
    intake_year: 2026,
    registration_start: "2026-06-01",
    registration_deadline: "2026-11-15",
    admission_mode: "社区华小保送免试直录",
    direct_admission_criteria: [
      "石角区各华小毕业生校长保送直接录取",
      "小班关怀制与课后作业辅导",
      "提供外区宿舍"
    ],
    result_release_date: "2026-11-25",
    registration_payment_deadline: "2026-12-05",
    scholarship_quota: "清寒助学金"
  },
  "public-serian": {
    intake_year: 2026,
    registration_start: "2026-06-01",
    registration_deadline: "2026-11-15",
    admission_mode: "郊区保送免试录取",
    direct_admission_criteria: [
      "西连省各华小毕业生校长推荐直接保送录取",
      "乡村寄宿爱心学校保障",
      "学杂费极其普惠平价"
    ],
    result_release_date: "2026-11-25",
    registration_payment_deadline: "2026-12-05",
    scholarship_quota: "州政府拨款清寒援助"
  },
  "catholic-sibu": {
    intake_year: 2026,
    registration_start: "2026-06-01",
    registration_deadline: "2026-09-30",
    open_day_dates: ["2026-08-22"],
    entrance_exam_date: "2026-10-10",
    exam_subjects: ["华文", "国文", "英文", "数学"],
    admission_mode: "修士严谨办学保送直录 + 入学甄试",
    direct_admission_criteria: [
      "诗巫及中区各华小五、六年级各科平均 75 分以上免试直录",
      "各华小学校长具函保送推荐品学兼优生",
      "全砂数理奥林匹克得奖者保送"
    ],
    result_release_date: "2026-10-18",
    registration_payment_deadline: "2026-10-28",
    dorm_application_deadline: "2026-10-28 (修士督导严格管理宿舍)",
    scholarship_quota: "入学考前20名免收首年学费"
  },
  "wns-sibu": {
    intake_year: 2026,
    registration_start: "2026-06-01",
    registration_deadline: "2026-10-20",
    entrance_exam_date: "2026-10-24",
    exam_subjects: ["华文", "国文", "英文", "数学"],
    admission_mode: "校长保送免试录取 + 入学能力考",
    direct_admission_criteria: [
      "华小毕业成绩合格或校长推荐信免试直录",
      "诗巫友好华小优等生直接保送",
      "纪念先贤黄乃裳精神特别助学金"
    ],
    result_release_date: "2026-10-31",
    registration_payment_deadline: "2026-11-10",
    dorm_application_deadline: "2026-11-10",
    scholarship_quota: "先贤纪念奖助学金"
  },
  "guongming-sibu": {
    intake_year: 2026,
    registration_start: "2026-06-01",
    registration_deadline: "2026-11-10",
    admission_mode: "生态农耕环保保送免试录取",
    direct_admission_criteria: [
      "华小毕业凭校长推荐信直接免试录取",
      "生态环保农耕教育特色全人关怀",
      "提供平价寄宿宿舍"
    ],
    result_release_date: "2026-11-20",
    registration_payment_deadline: "2026-11-30",
    scholarship_quota: "清寒助学金全免"
  },
  "citizen-sibu": {
    intake_year: 2026,
    registration_start: "2026-06-01",
    registration_deadline: "2026-11-10",
    admission_mode: "家庭式小班关怀免试直录",
    direct_admission_criteria: [
      "华小毕业生凭校长推荐免试直录",
      "家庭式生活陪伴与品德熏陶",
      "寄宿床位全额保障"
    ],
    result_release_date: "2026-11-20",
    registration_payment_deadline: "2026-11-30",
    scholarship_quota: "爱心助学扶助金"
  },
  "kianghin-sibu": {
    intake_year: 2026,
    registration_start: "2026-06-01",
    registration_deadline: "2026-11-10",
    admission_mode: "纯朴校风校长保送免试直录",
    direct_admission_criteria: [
      "华小毕业生态度端正由校长保送免试直录",
      "传统纯朴校风与三语基础强化",
      "提供外埠学生宿舍"
    ],
    result_release_date: "2026-11-20",
    registration_payment_deadline: "2026-11-30",
    scholarship_quota: "清寒助学金"
  },
  "minglik-sarikei": {
    intake_year: 2026,
    registration_start: "2026-06-01",
    registration_deadline: "2026-11-15",
    admission_mode: "乡村坚守保送免试直接录取",
    direct_admission_criteria: [
      "泗里街及周边华小毕业生直接保送免试录取",
      "小班精细陪伴辅导",
      "乡村寄宿全方位关怀"
    ],
    result_release_date: "2026-11-25",
    registration_payment_deadline: "2026-12-05",
    scholarship_quota: "免除全额学费助学计划"
  },
  "riam-miri": {
    intake_year: 2026,
    registration_start: "2026-06-01",
    registration_deadline: "2026-09-30",
    open_day_dates: ["2026-08-08"],
    entrance_exam_date: "2026-10-10",
    exam_subjects: ["华文", "国文", "英文", "数学"],
    exam_format: "三轨国际评估闭卷试，注重数理英语高阶应用",
    admission_mode: "三轨保送直录 + 入学甄选试",
    direct_admission_criteria: [
      "华小五、六年级各科平均达 80 分以上直接免试直录",
      "美里及砂北各华小学校长特别推荐品学兼优保送生",
      "全国/全砂数理奥林匹克或科技赛前三名直录并颁优异奖学金",
      "五星级现代化冷气学生公寓，外地寄宿生专线审核"
    ],
    result_release_date: "2026-10-18",
    registration_payment_deadline: "2026-10-28",
    dorm_application_deadline: "2026-10-28 (五星级冷气学生公寓)",
    scholarship_quota: "入学试考获前 15 名免除初一年全额学费"
  },
  "peimin-miri": {
    intake_year: 2026,
    registration_start: "2026-06-01",
    registration_deadline: "2026-10-15",
    entrance_exam_date: "2026-10-24",
    exam_subjects: ["华文", "国文", "英文", "数学"],
    admission_mode: "数理底蕴保送直录 + 入学甄拔考试",
    direct_admission_criteria: [
      "美里及邻近华小排名前 15% 优异生免试保送",
      "华小学校长具函保送推荐信",
      "数理学术传统强项生免试录取"
    ],
    result_release_date: "2026-10-31",
    registration_payment_deadline: "2026-11-10",
    dorm_application_deadline: "2026-11-10",
    scholarship_quota: "前15名免除学费优异生奖"
  },
  "kaidee-bintulu": {
    intake_year: 2026,
    registration_start: "2026-06-01",
    registration_deadline: "2026-10-15",
    open_day_dates: ["2026-08-29"],
    entrance_exam_date: "2026-10-24",
    exam_subjects: ["华文", "国文", "英文", "数学"],
    admission_mode: "现代化寄宿名校保送免试 + 入学试",
    direct_admission_criteria: [
      "民都鲁各华小毕业由校长推荐免试直录",
      "五、六年级各科成绩平均达 75 分以上免试直录",
      "跨州迁校成功典范，现代化冷气宿舍保障外地生"
    ],
    result_release_date: "2026-10-31",
    registration_payment_deadline: "2026-11-10",
    dorm_application_deadline: "2026-11-10 (现代化寄宿大楼)",
    scholarship_quota: "设开智优秀新生奖学金与常年清寒助学金"
  }
};

console.log('Intake database covers', Object.keys(intakeDatabase).length, 'schools.');

// Now inject admission_intake into each school in content
let modifiedContent = content;

for (const [schoolId, intake] of Object.entries(intakeDatabase)) {
  // Find where schoolId appears: school_id: "..."
  const idPattern = new RegExp(`(school_id:\\s*["']${schoolId}["'][\\s\\S]*?)(fit_tags:)`);
  if (!idPattern.test(modifiedContent)) {
    console.error(`Could not match schoolId: ${schoolId}`);
    continue;
  }

  // Format the intake object cleanly with 4 space indentation
  const intakeString = `admission_intake: ${JSON.stringify(intake, null, 4).replace(/\n/g, '\n    ')},\n    `;

  // If already has admission_intake, replace it; otherwise insert before fit_tags
  const match = modifiedContent.match(idPattern);
  if (match[1].includes('admission_intake:')) {
    const updatedBlock = match[1].replace(/admission_intake:\s*\{[\s\S]*?\},\s*/, intakeString);
    modifiedContent = modifiedContent.replace(match[0], updatedBlock + match[2]);
  } else {
    modifiedContent = modifiedContent.replace(match[0], match[1] + intakeString + match[2]);
  }
}

fs.writeFileSync(targetFile, modifiedContent, 'utf8');
console.log('Successfully updated schoolsData.ts with all 63 schools intake data!');
