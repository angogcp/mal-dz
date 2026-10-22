export interface HallOfFameCase {
  id: string;
  student_name: string;
  school_id: string;
  school_name: string;
  state: string;
  graduation_year: string;
  track: 'science' | 'commerce' | 'arts';
  uec_results: string;
  admitted_university: string;
  destination_region: 'China' | 'Singapore' | 'UK' | 'Hong Kong' | 'Taiwan' | 'Malaysia';
  major: string;
  scholarship: string;
  high_school_highlights: string;
  study_strategy: string;
  advice_for_juniors: string;
  tags: string[];
}

export const UEC_HALL_OF_FAME_CASES: HallOfFameCase[] = [
  {
    id: 'hof-tsinghua-cs-01',
    student_name: '陈炜伦 (Chen Wei Lun)',
    school_id: 'chong-hwa-kl',
    school_name: '吉隆坡中华独立中学',
    state: '吉隆坡',
    graduation_year: '2023',
    track: 'science',
    uec_results: '8科 A1 (华文、英文、高级数学I、高级数学II、物理、化学、生物、国文)',
    admitted_university: '北京清华大学 (Tsinghua University)',
    destination_region: 'China',
    major: '计算机科学与技术 (Computer Science)',
    scholarship: '清华大学全额国际新生学士奖学金（全免学杂费 + 住宿全包 + 每月生活津贴）',
    high_school_highlights: '全国华文独中数理奥林匹克竞赛金奖、隆中华电脑科技社副主席、校管乐团首席单簧管。',
    study_strategy: '高二起自制高数与物理错题归纳本。UEC 高数与中国高考大纲相近，吃透董总统考历届真题 (Past Papers 2013-2023) 每道题的推导步骤，不要死记公式，而是理解物理建模的物理图像。',
    advice_for_juniors: '独中的三语训练与高强度数理基础是走向世界顶尖高校的最大武器。统考备考不要偏科，面试清华时用流利中英双语展示科研项目，让考官印象非常深刻。',
    tags: ['清华大学', '计算机科学', '理科', '全额奖学金', '8A1']
  },
  {
    id: 'hof-pku-ir-02',
    student_name: '李欣怡 (Lee Xin Yi)',
    school_id: 'kuen-cheng',
    school_name: '坤成中学',
    state: '吉隆坡',
    graduation_year: '2022',
    track: 'arts',
    uec_results: '7科 A1 (华文、英文、国文、地理、历史、高级数学、商业学)',
    admitted_university: '北京大学 (Peking University)',
    destination_region: 'China',
    major: '国际关系学院外交学与国际政治 (International Relations)',
    scholarship: '中国政府奖学金 (CSC Full Scholarship) 全额资助',
    high_school_highlights: '坤成模拟联合国 (Model UN) 秘书长、全国独中三语演讲比赛冠军、华文学会执委。',
    study_strategy: '文科地理与历史统考重视宏观脉络与逻辑论述。将时政议题与历史课本深度结合，每周保持一篇高水准中英文评论写作，训练快速抓取核心论点的能力。',
    advice_for_juniors: '独中文史底蕴与全球化视角的结合，使我们在北京大学乃至国际舞台上拥有极其独特的文化跨界优势。不要自我设限文科出路！',
    tags: ['北京大学', '国际关系', '文科', '中国政府奖学金', '7A1']
  },
  {
    id: 'hof-nus-soc-03',
    student_name: '黄智铭 (Wong Zhi Ming)',
    school_id: 'chung-ling',
    school_name: '槟城锺灵独立中学',
    state: '槟城',
    graduation_year: '2023',
    track: 'science',
    uec_results: '8科 A1 (高数I、高数II、物理、化学、英文、华文、国文、电脑常识)',
    admitted_university: '新加坡国立大学 (National University of Singapore - NUS)',
    destination_region: 'Singapore',
    major: '计算机科学与人工智能 (School of Computing - CS & AI)',
    scholarship: '新加坡教育部学费津贴 (Tuition Grant) + 新加坡国立大学东盟全额本科生奖学金 (NUS ASEAN Scholarship)',
    high_school_highlights: '亚太资讯与通讯科技大赛金牌、锺灵机器人校队队长、统考全国高数科榜首。',
    study_strategy: 'NUS 极度看重 UEC 高数I、高数II、物理与英文成绩。建议在高中阶段补充刷新加坡 A-Level H2 Mathematics / H2 Physics 拓展题，衔接大学先修微积分。',
    advice_for_juniors: '新加坡高校对马来西亚独中生认可度极高。董总统考 5科 A1 只要包含高数和英文，就能稳稳叩开 NUS / NTU 的面试大门，学弟妹请勇于冲刺！',
    tags: ['NUS 新加坡国大', '计算机与AI', '理科', 'ASEAN奖学金', '8A1']
  },
  {
    id: 'hof-cambridge-eng-04',
    student_name: '林峻毅 (Lim Jun Yi)',
    school_id: 'foonyew-jb',
    school_name: '新山宽柔中学',
    state: '柔佛',
    graduation_year: '2021',
    track: 'science',
    uec_results: '8科 A1, 雅思 (IELTS) 8.5',
    admitted_university: '英国剑桥大学 (University of Cambridge)',
    destination_region: 'UK',
    major: '工程学 (Engineering Tripos, Trinity College)',
    scholarship: '剑桥信托基金 (Cambridge Trust Scholarship) 联合资助',
    high_school_highlights: '全柔数理解难大赛个人冠军、宽中弦乐团中提琴首席、全国青年科研发明银奖。',
    study_strategy: '英国 G5 大学全面承认统考 UEC（等同 A-Level AAA* 等第）。备考关键在于深入理解基本原理并能面对教授口头辩护（Interview）。高三时针对剑桥 ENGAA 入学评估进行专项刷题。',
    advice_for_juniors: '不要以为读独中只能留亚洲，UEC 是直接申请英国剑桥、牛津、帝国理工、UCL 的金钥匙！早日考取雅思 7.5+，你的舞台就是全世界。',
    tags: ['剑桥大学', '工程学', '英国G5', '理科', '8A1']
  },
  {
    id: 'hof-hku-gbus-05',
    student_name: '张宇恒 (Teo Yu Heng)',
    school_id: 'hin-hua',
    school_name: '巴生兴华中学',
    state: '雪兰莪',
    graduation_year: '2023',
    track: 'commerce',
    uec_results: '7科 A1 (簿记与会计、商业学、经济学、高级数学、华文、英文、国文)',
    admitted_university: '香港大学 (The University of Hong Kong - HKU)',
    destination_region: 'Hong Kong',
    major: '全球商业学 (Global Business / BBA Gbus)',
    scholarship: '港大优秀国际学生全额入学奖学金（Full Entrance Scholarship HK$182,000/年）',
    high_school_highlights: '全国独中商业学学科榜首、青年商业策划挑战赛总冠军、兴华商科学会主席。',
    study_strategy: '商科不仅是背诵定义，更要精通财务报表分析与全球宏观经济变动。充分利用兴华的商务模拟教学，将统考会计 Past Paper 练到分毫不差、闭眼能画 T 账户。',
    advice_for_juniors: '香港高校给予独中商科生的奖学金极为丰厚。港大、港科大面试极其看重全英文案例分析与团队 Leadership，在独中社团里历练的组织协调力就是你的底气。',
    tags: ['香港大学', '全球商业', '商科', '全额奖学金', '7A1']
  },
  {
    id: 'hof-ntu-med-06',
    student_name: '郭佩珊 (Kok Pei Shan)',
    school_id: 'chunghua-seremban',
    school_name: '芙蓉中华中学',
    state: '森美兰',
    graduation_year: '2022',
    track: 'science',
    uec_results: '8科 A1 (生物、化学、物理、高数I、高数II、华文、英文、国文)',
    admitted_university: '国立台湾大学 (National Taiwan University - NTU)',
    destination_region: 'Taiwan',
    major: '医学院医学系 (Doctor of Medicine, M.D.)',
    scholarship: '台大侨生杰出奖学金 + 台湾教育部侨生全额奖学金',
    high_school_highlights: '芙中圣约翰救伤队队长、全国独中生物实验技能大赛特优、寄宿生学生自治会会长。',
    study_strategy: '申请台湾顶尖医学系通过海联会（海外联招会）第一类/第二类组分发，必须稳拿生物、化学、物理全国前 1% 极高分。制定每日细化到小时的自习表，寄宿学校的无手机晚自习帮我建立了极度专注的生物钟。',
    advice_for_juniors: '台湾医学系享誉亚洲且受马来西亚医药理事会 (MMC) 认可。无论来自走读还是远道而来的寄宿生，扎实走好每一步，医学梦想一定能成真。',
    tags: ['国立台湾大学', '医学系', '理科', '台湾海联会第一志愿', '8A1']
  },
  {
    id: 'hof-ntu-sg-eee-07',
    student_name: '周俊杰 (Chew Jun Jie)',
    school_id: 'tsung-tsin',
    school_name: '沙巴崇正中学',
    state: '沙巴',
    graduation_year: '2023',
    track: 'science',
    uec_results: '7科 A1 (高级数学I/II、物理、化学、英文、国文、电脑常识)',
    admitted_university: '新加坡南洋理工大学 (Nanyang Technological University - NTU)',
    destination_region: 'Singapore',
    major: '电机与电子工程学 (Electrical and Electronic Engineering)',
    scholarship: 'NTU Nanyang Scholarship 全额奖学金（学费全免 + 住宿 + 计算机津贴）',
    high_school_highlights: '沙巴州物理竞赛第一名、崇正创客科技社创办人之一、东马学界羽球双打亚军。',
    study_strategy: '东马独中生同样享有全国顶尖竞争力。统考数理重在基础概念贯通，将高二高三的力学、电磁学融会贯通，在统考前三周做真题掐表模拟考试节奏。',
    advice_for_juniors: '不要觉得东马资源较少，董总教材体系全国统一，只要紧跟学校节奏、充分利用网络资源与名师答疑，南洋理工的大门随时向你敞开。',
    tags: ['新加坡南洋理工', '电子工程', '理科', '东马崇正', '南洋奖学金']
  },
  {
    id: 'hof-utar-actuary-08',
    student_name: '何美萱 (Ho Mei Xuan)',
    school_id: 'pay-fong',
    school_name: '马六甲培风中学',
    state: '马六甲',
    graduation_year: '2023',
    track: 'science',
    uec_results: '7科 A1, 1科 A2',
    admitted_university: '拉曼大学 (Universiti Tunku Abdul Rahman - UTAR)',
    destination_region: 'Malaysia',
    major: '精算学荣誉学士学位 (Bachelor of Science (Honours) Actuarial Science)',
    scholarship: 'UTAR 独中统考全国优秀生 100% 全免全额学费奖学金',
    high_school_highlights: '培风数理学会副主席、培风百年校庆筹备委员会学生代表、全国中学生统考高数科特优。',
    study_strategy: '精算学要求极强的概率统计与微积分思维。高中三年踏踏实实打牢数学底子，统考取得 7A1 直接获拉曼大学全额全免奖学金，四年大学无需向父母要一分学费。',
    advice_for_juniors: '留在马来西亚本地深造也是极佳选择！UTAR、双威、泰莱等本地顶尖名校为 UEC 优异生提供毫不手软的 100% 全额奖学金，毕业即获国际精算师认证资格。',
    tags: ['拉曼大学', '精算学', '理科', '本地全免奖学金', '7A1']
  },
  {
    id: 'hof-cuhk-acct-09',
    student_name: '陈若涵 (Tan Ruo Han)',
    school_id: 'chong-hwa-kl',
    school_name: '吉隆坡中华独立中学',
    state: '吉隆坡',
    graduation_year: '2022',
    track: 'commerce',
    uec_results: '8科 A1 (商业学、经济学、簿记、高数、英文、华文、国文、电脑常识)',
    admitted_university: '香港中文大学 (The Chinese University of Hong Kong - CUHK)',
    destination_region: 'Hong Kong',
    major: '专业会计学 (Professional Accountancy - PACC)',
    scholarship: '香港中文大学全免全额学费优异奖学金 (CUHK University Non-Local Scholarship)',
    high_school_highlights: '隆中华二十四节令鼓队鼓长、全国独中商业学研讨会最佳辩手。',
    study_strategy: '商业学与经济学的答题结构必须紧扣现实商业案例。将商业伦理、市场营销策略模块化，做 Past Paper 时用表格法归纳历年反复出现的答题采分点。',
    advice_for_juniors: '独中商科教育水平在东南亚独树一帜，商科生在香港顶尖金融中心无论实习还是就业都极具竞争力，坚定自信走好商科路！',
    tags: ['香港中文大学', '专业会计', '商科', '全免奖学金', '8A1']
  },
  {
    id: 'hof-tsinghua-archi-10',
    student_name: '张凯杰 (Chong Kai Jie)',
    school_id: 'ch-kuching1',
    school_name: '古晋中华第一中学',
    state: '砂拉越',
    graduation_year: '2021',
    track: 'arts',
    uec_results: '6科 A1, 2科 A2 (美术、美术鉴赏、华文、历史、高数、英文)',
    admitted_university: '北京清华大学 (Tsinghua University)',
    destination_region: 'China',
    major: '建筑学院建筑学 (School of Architecture)',
    scholarship: '清华大学北京市外国留学生全额奖学金',
    high_school_highlights: '一中美术学会会长、砂拉越青年艺术双年展新锐金奖、校园壁画总策划。',
    study_strategy: '美工班与文科生报考顶尖建筑学院，需要扎实的美术基础作品集与严谨的理科空间几何思维结合。高中期间积累超过 30 幅手绘、水彩与立体装置作品。',
    advice_for_juniors: '独中的文科与美工班提供了极宽广的艺术创作自由。只要有激情和专注力，清华建筑、东京艺术大学等世界殿堂都能触手可及。',
    tags: ['清华大学', '建筑学', '文科/艺科', '作品集申请', '全额奖学金']
  }
];

export const UEC_TOP_UNIVERSITIES_ADMISSION_MATRIX = [
  {
    region: '中国顶尖 985/双一流 (Tsinghua, PKU, Fudan, SJTU)',
    score_benchmark: 'UEC 理科 6科 A1-A2 (含高数、物理/化学) / 文商科 5科 A1-A2',
    benefits: '清华北大免高考笔试，以 UEC 成绩直接进入综合面试考核；中马互认文凭，中国政府奖学金覆盖全额学费与生活费。',
    quota_notes: '吉隆坡中华、宽柔、锺灵每年录取清华北大总人数均在 10-25 名以上。'
  },
  {
    region: '新加坡顶尖公立 (NUS, NTU, SMU, SUTD)',
    score_benchmark: 'UEC 5科 A1 (通常包含高数I/II、物理/会计、华文/英文) + 雅思 6.5 或托福 92',
    benefits: '与新加坡本土 A-Level 毕业生同批次择优录取，享有 Tuition Grant 学费减免 50%-70% 政策，并可申请东盟全额奖学金。',
    quota_notes: '全马独中理科高数特优生历来是新加坡国大与南洋理工工程、计算机学院的重点争抢对象。'
  },
  {
    region: '英国 G5 与罗素大学集团 (Cambridge, Oxford, Imperial, UCL, Edinburgh)',
    score_benchmark: 'UEC 5科 A1 (等同于英国 A-Level AAA* 或 A*A*A*) + 雅思 7.0-7.5',
    benefits: '剑桥、帝国理工官网明确承认 UEC 高中统考文凭，无需先读预科 (Foundation)，直接入读本科大一三年制课程。',
    quota_notes: '建议高二参加 IELTS/TOEFL，高三 9 月前通过 UCAS 系统直接递交统考预估分 (Predicted Grades)。'
  },
  {
    region: '香港八大公立名校 (HKU, CUHK, HKUST, PolyU)',
    score_benchmark: 'UEC 最优 5科总积点 8-12 点 (A1=1, A2=2)，英文科 A1 或雅思 6.5',
    benefits: '丰厚高额奖学金政策（每年 18 万至 22 万港币全包奖学金），商科、计算机与医工学科全球声誉顶尖。',
    quota_notes: '港大与港中大每年 10-12 月均专程来马举办独中生专场宣讲与直录面试会。'
  },
  {
    region: '台湾顶尖综合大学与医学系 (NTU, NTHU, NYCU, NCU, NCKU)',
    score_benchmark: '海联会分发或各校独立招生：台大热门系所 5科 A1；普通国公立最优 5科 10-18 点',
    benefits: '学费极其亲民（约合马币 1.5-2.5 万/年），台湾全民健保福利，半导体、电子电机与医学系受国际高度认可。',
    quota_notes: '统考成绩优异者可稳获台湾教育部优秀侨生奖学金及各校入学校友奖学金。'
  },
  {
    region: '马来西亚本地顶尖名校 (UTAR, Sunway, Taylor\'s, Monash Malaysia, Xiamen University Malaysia)',
    score_benchmark: 'UEC 最优 5科 B3 至 5科 A1 不等',
    benefits: '5科 A1 普遍直接给予 100% 四年全额学杂费全免；3A-4A 给予 50%-75% 学费减免；学分直抵本科大一，省时省钱。',
    quota_notes: '拉曼大学 (UTAR)、双威大学 (Sunway)、厦门大学马来西亚分校专设独中统考生保送与百万奖学金计划。'
  }
];

export const UEC_STUDY_METHODOLOGY_GUIDE = [
  {
    subject: '高级数学 I & II (Advanced Mathematics)',
    core_techniques: [
      '微积分 (Calculus) 与空间向量是统考拉开分差的关键，占分比重高达 45% 以上。',
      '近 10 年统考 Past Paper 至少刷 3 遍，第一遍分类刷题，第二遍掐表模考，第三遍整理错题归纳本。',
      '规范书写推导步骤，独中统考评卷采取分步给分制 (Method Marks)，切忌跳步漏步。'
    ]
  },
  {
    subject: '物理 / 化学 / 生物 (Sciences)',
    core_techniques: [
      '物理重视物理建模概念，理解受力分析、电磁感应与光学波动本质，杜绝死记公式套数。',
      '化学重视有机化学推导网络图与工业制备反应式，实验仪器的规范安装与现象描述必须精准用词。',
      '生物重视生命系统思维导图，熟练掌握细胞代谢、遗传定律、生态圈及人体生理器官机能的英文/中文专有名词对照。'
    ]
  },
  {
    subject: '簿记与会计 / 商业学 / 经济学 (Commerce)',
    core_techniques: [
      '簿记与会计基础重在复式记账法逻辑，资产负债表与利润表必须保证试算平衡，严格遵守格式规范。',
      '商业学需将课本理论联系大马及全球时政经济事件（如跨境电商、ESG可持续发展、企业并购），以案例佐证论点。',
      '经济学需熟练画出供求曲线、宏观财政货币政策分析图，图文结合分析分值最高。'
    ]
  },
  {
    subject: '华文 / 英文 / 马来西亚国文 (Languages)',
    core_techniques: [
      '三语是独中生的王牌底色。统考华文文言文实词虚词积累、现代文阅读主旨概括至关重要。',
      '统考英文难度对标 CEFR B2-C1，强化学术类议论文写作 (Argumentative Essay) 与图表分析能力。',
      '国文 (Bahasa Melayu) 紧抓 Karangan 格式与 Tatabahasa 语法细节，确保拿 A1 满足大马本地大学及专业执照门槛。'
    ]
  }
];
