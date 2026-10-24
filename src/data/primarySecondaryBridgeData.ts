export interface SubjectTransitionGuide {
  subject_id: string;
  subject_name: string;
  icon: string;
  primary_status: string; // 华小阶段现状
  secondary_shock: string; // 初一断层与冲击
  core_topics: string[]; // 初一核心重难点
  bridge_strategies: string[]; // 假期与衔接备考策略
  recommended_resources: string[]; // 推荐预习资源/学习习惯
}

export interface PrimaryVsSecondaryDiff {
  id: string;
  dimension: string;
  icon: string;
  primary_system: string; // 华小系统
  secondary_system: string; // 独中初一系统
  impact_level: 'high' | 'medium' | 'critical';
  advice_for_parents: string; // 给家长的调适对策
}

export interface GlossaryTerm {
  category: 'math' | 'science' | 'geography';
  chinese: string;
  english: string;
  malay: string;
  definition: string;
}

export interface RemoveClassFaq {
  question: string;
  answer: string;
  highlight: string;
}

export interface ReadinessQuestion {
  id: number;
  question: string;
  dimension: 'time_management' | 'language_adaptability' | 'psychological_resilience' | 'self_care';
  options: {
    label: string;
    score: number; // 1 - 3
    interpretation: string;
  }[];
}

// 华小 vs 独中 6 大关键断层对比
export const PRIMARY_VS_SECONDARY_DIFFERENCES: PrimaryVsSecondaryDiff[] = [
  {
    id: 'schedule',
    dimension: '作息时间与全日制生活',
    icon: 'Clock',
    primary_system: '半日制为主（通常 7:30 - 13:00/13:30 放学），下午多为安亲班、自由补习或在家休息。',
    secondary_system: '标准全日制（通常 7:30 - 15:30/16:00），联课活动（CCA）留校经常延至 17:30 - 18:00，部分学校隔周六上半天课。',
    impact_level: 'critical',
    advice_for_parents: '开学前 1 个月开始提前调整作息，禁止熬夜；培养孩子在长达 8-10 小时的留校时间里保持充沛体能的体魄，备足健康水瓶与午后轻食点心。'
  },
  {
    id: 'subjects',
    dimension: '学习科目与课业体量',
    icon: 'BookOpen',
    primary_system: '仅 5-6 门主科（华文、国文、英文、数学、科学、历史），课业量相对集中，作业模式多为巩固型练习。',
    secondary_system: '扩展至 9-11 门学科！新增初中独立历史（马史+中史+世史）、独立地理、代数与几何分化、综合科学、电脑/编程、美术及德育联课。',
    impact_level: 'critical',
    advice_for_parents: '学会使用“学生日程本（手帐）”记录每日 10 科作业交齐死线；不要在初一开学立即报满 6-7 科补习，先给孩子 2-3 个月建立自修节奏。'
  },
  {
    id: 'assessment',
    dimension: '考核机制与留级淘汰制',
    icon: 'AlertTriangle',
    primary_system: '华小实施 UASA 校本评估（TP1-TP6 等级制），取消统一会考，不存在“留级”淘汰机制，心理压力相对平缓。',
    secondary_system: '严格百分制或绩点制！每学期均有统一测验、期中考、期末考；绝大多数独中明文规定：总平均未达 60 分或主要科目不及格须“留级重读”，留级 2 次须劝退转校。',
    impact_level: 'high',
    advice_for_parents: '打破“小学没考过大试”的轻敌心理，定期查看校方网上教务系统（E-School），关注小考失分弱项，及早止血，切忌拖到年底算总账。'
  },
  {
    id: 'languages',
    dimension: '三语要求与术语切换',
    icon: 'Languages',
    primary_system: '以华语为主要思维媒介，国文与英文主要停留在日常对话、语法基础与浅层短文填空。',
    secondary_system: '三语全面加深！初中英文词汇量几何级增长（对接剑桥/SPM/统考高标准），国文注重长文理解与议论书信，部分独中数理科全面英化或双语化，生词量暴增。',
    impact_level: 'high',
    advice_for_parents: '小六升初一的假期是积累数理中英词汇的关键期；鼓励孩子每天坚持阅读 15 分钟中英文课外书籍，克服对长篇外文的抵触感。'
  },
  {
    id: 'cca',
    dimension: '联课活动（CCA）与学分必修',
    icon: 'Users',
    primary_system: '多为课余兴趣普及性质，参与深度有限，大部分课外活动不直接决定升学与学籍评审。',
    secondary_system: '联课活动是独中“全人教育”的核心支柱，计入正式成绩册与毕业学分！各大管乐团、华乐团、二十四节令鼓、校队要求严格纪律与高强度集训。',
    impact_level: 'medium',
    advice_for_parents: '社团是孩子建立青春期深厚友谊、抗挫能力和领导力的绝佳平台，切勿以“功课退步”为由强行勒令孩子退社，应引导其学习时间管理（Time Management）。'
  },
  {
    id: 'discipline',
    dimension: '校纪校规与电子设备管控',
    icon: 'ShieldCheck',
    primary_system: '老师与家长联系紧密，孩子日常行为多由家长和小学班主任全方位提醒包办。',
    secondary_system: '步入“大孩子”半自理阶段，各校教导处对仪容发禁、手机入校保管、出勤请假手续有极其严格的记过与扣分制度，强调契约精神。',
    impact_level: 'medium',
    advice_for_parents: '尊重学校的手机管理条例；在家也要逐步建立孩子“为自己的书包、作业、出勤全权负责”的责任心，不过度越俎代庖。'
  }
];

// 6 大核心学科初一衔接攻坚指南
export const SUBJECT_TRANSITION_GUIDES: SubjectTransitionGuide[] = [
  {
    subject_id: 'math',
    subject_name: '数学（代数与几何初阶）',
    icon: 'Calculator',
    primary_status: '以具体的“算术”为主（加减乘除、四则运算、分数小数、简易百分比），解题多依赖直观的生活情境模型。',
    secondary_shock: '思维方式从“具象算术”骤变为“抽象代数与逻辑推理”。引入负数、相反数、整式加减、一元一次方程、同位角/内错角几何定理证明，学生极易出现“字母代替数字转不过弯”的挫败感。',
    core_topics: [
      '有理数四则运算与负数运算法则（负负得正的本质）',
      '代数式化简、整式合并同类项',
      '一元一次方程（移项、去括号、去分母与应用题建模）',
      '几何图形初步：线段、角度相交、平行线与三线八角证明'
    ],
    bridge_strategies: [
      '在小六升初一假期，重点专攻“正负数混合四则运算”，确保运算不马虎、符号不出错。',
      '强化应用题用“设未知数 x”的代数思维解题，逐步摆脱小学的画图和逆向倒推法。',
      '准备一本专用的“错题本”，初中数学强调“错题复盘”，理清每一步代数推导逻辑。'
    ],
    recommended_resources: [
      '董总编纂《初中初一适用数学》上册前两章',
      '可汗学院（Khan Academy）初级代数（Pre-Algebra）互动练习',
      '熟记三语常用数学词汇表（Variable, Term, Equation, Angle, Degree）'
    ]
  },
  {
    subject_id: 'english',
    subject_name: '英语（English Language）',
    icon: 'Languages',
    primary_status: '华小偏重基础 Grammar、词汇填空及简短书信/故事写作（50-80字），阅读理解短小直白。',
    secondary_shock: '独中英文课标直接对标剑桥 IGCSE、初中统考高标准。阅读文章篇幅翻倍，生词密度高，语法考查更注重语境应用；写作字数跃升至 120-180 字，强调逻辑连贯与多变句式。',
    core_topics: [
      '12 大核心时态精准运用（特别是 Present Perfect vs Past Simple）',
      '复杂句式构建：定语从句（Relative Clauses）、状语从句与过渡连接词（Linking Words）',
      '长篇记叙文与书信/电邮写作文体规范（150 字以上）',
      '学术与科普类说明文的快速略读（Skimming）与扫读（Scanning）技巧'
    ],
    bridge_strategies: [
      '每天背诵 8-10 个剑桥 A2/B1 核心词汇，结合例句记忆，不要死记拼写。',
      '每周阅读一篇原版英文少年读物或新闻简讯（如 Scholastic、BBC News Review），边读边圈出动词与搭配。',
      '练习用英语口语复述当天的生活小事，打破“哑巴英语”和不敢开口的心理障碍。'
    ],
    recommended_resources: [
      '《English Grammar in Use》（Raymond Murphy 经典语法书初中级版）',
      'ReadTheory.org 在线自适应英文分级阅读平台',
      'Duolingo 多邻国日常词汇打卡积累'
    ]
  },
  {
    subject_id: 'bm',
    subject_name: '国文（Bahasa Melayu）',
    icon: 'BookMarked',
    primary_status: '华小以理解卷与简易作文为主，部分学生在小学阶段靠背诵模版应付考试，对马来语缺乏语感与自信。',
    secondary_shock: '初一直接面对系统化的 Tatabahasa（Imbuhan 词缀变化极其繁杂，如 meN-...-kan, per-...-an, di-...-i），Karangan（文章写作）要求 150-200 词且论点必须深刻，文言文/谚语（Peribahasa）考察比重显著上升。',
    core_topics: [
      'Imbuhan（前缀、后缀、双重词缀）在不同词根下的形态音变规则',
      'Ayat Aktif（主动句）与 Ayat Pasif（被动句）的互换推导',
      'Karangan Format：Surat Kiriman Rasmi（公函）、Laporan（报告）及 Fakta（论说文）',
      '常用 Peribahasa（成语谚语）在作文中的巧妙点睛应用'
    ],
    bridge_strategies: [
      '不要放弃国文！国文在独中不仅关系到能否考好 SPM BM（拿证书必备），更关系到初中统考及格率。',
      '从初一开始整理一本“Peribahasa 谚语与生词金句手账”，分类整理团结、环保、孝道、刻苦等高频母题。',
      '多阅读 Berita Harian 或 Dewan Siswa 等青少年读物，积累地道马来语表达。'
    ],
    recommended_resources: [
      'Dewan Bahasa dan Pustaka (DBP) 官方初中词典与语法指南',
      '董总独中国文初中教科书（Buku Teks Bahasa Melayu Tingkatan 1）',
      'ASTRO Tutor TV SPM / PT3 经典 Tatabahasa 教学短视频'
    ]
  },
  {
    subject_id: 'science',
    subject_name: '综合科学（Integrated Science）',
    icon: 'FlaskConical',
    primary_status: '以生活常识为主（动物分类、植物各部分、磁铁、光和水蒸发），题型多为配对、选择和简答。',
    secondary_shock: '进入严谨的实验科学时代！分为物理初阶（测量、密度、力的种类）、化学初阶（原子分子、物质状态、溶液与溶解度、酸碱性）与生物初阶（动植物细胞结构、显微镜操作、生态系统），涉及大量数学换算与实验报告书写。',
    core_topics: [
      '国际单位制（SI Unit）换算与科学测量工具（游标卡尺、量筒读数及误差分析）',
      '物质的物理性质与化学性质、密度的计算公式与应用（$\\rho = m / V$）',
      '细胞的构造与功能：动植物细胞显微观察与光合/呼吸作用机理',
      '科学探究实验报告的五大规范步骤：假设、变量控制、过程记录、数据图表与结论'
    ],
    bridge_strategies: [
      '熟悉科学实验室安全守则与常见器材名称（Bunsen Burner, Beaker, Test Tube, Meniscus）。',
      '数理逻辑与科学紧密挂钩，加强公式变形计算能力（如根据质量与体积求密度）。',
      '若入读数理英化学校（如坤成、吉隆坡中华、循人、巴生兴华等），务必提前熟悉常用科学英文术语！'
    ],
    recommended_resources: [
      '董总编纂《初中初一适用科学》上册',
      'CrashCourse Kids / CrashCourse Science YouTube 频道趣味科普',
      'PhET Interactive Simulations 在线互动物理与化学虚拟实验室'
    ]
  },
  {
    subject_id: 'history',
    subject_name: '初中历史（History / Sejarah）',
    icon: 'Hourglass',
    primary_status: '华小只接触浅显的马来西亚通史小故事（马六甲王朝传奇人物、国家象征等），缺乏整体时空宏观框架。',
    secondary_shock: '独中历史格局极为宏大！初中统考历史课程采用“三重视角”：马来西亚与东南亚史 + 中国古代与近代史 + 世界古文明与近代史。时间线跨度千年，因果逻辑繁复，需记忆大量朝代演进、历史事件与国际地缘影响。',
    core_topics: [
      '史前时代与四大文明古国发源（美索不达米亚、尼罗河、印度河、黄河流域）',
      '中国先秦至秦汉大一统帝国的建立与中央集权制度',
      '马来半岛早期印度化王国与马六甲苏丹王朝的辉煌与制度',
      '历史年表的绘制与多角度因果分析（而非死记硬背年份）'
    ],
    bridge_strategies: [
      '改变“死记年份”的旧观念，学会画“历史时序发展导图（Timeline）”。',
      '假期可陪孩子观看优质历史纪录片（如《河西走廊》、《大国崛起》、《中国通史》），点燃对历史脉络的求知欲。',
      '理解“历史因果链”：为什么会爆发？过程转折点是什么？对后世带来了什么影响？'
    ],
    recommended_resources: [
      '董总独中《初中历史》第一册（教材印刷精美、图文并茂）',
      '央视纪录片《中国通史》精选集萃',
      '历史地图集与时代变迁时间轴工具'
    ]
  },
  {
    subject_id: 'geography',
    subject_name: '初中地理（Geography）',
    icon: 'Globe',
    primary_status: '小学阶段没有独立设立地理学科，知识点零散分布在科学与常识课中，几乎没有系统的读图和空间测绘训练。',
    secondary_shock: '初一全新设立的独立重头学科！学生必须掌握地图学基础（等高线地形图判读、比例尺换算、八大方向与经纬度座标定位）、地球的公转自转与四季昼夜形成、气候类型与马来西亚自然资源分布。很多孩子因为看不懂等高线而失分惨重。',
    core_topics: [
      '地图三要素（图例、比例尺、方向）与等高线地形特征判读（鞍部、山脊、山谷、峭壁）',
      '经纬网格与时区推算（地方时与世界协调时计算）',
      '地球内部构造与板块构造学说（地震、火山、褶曲山脉形成原因）',
      '马来西亚地形与水文特征（半岛主干山脉、主要河流流域与经济价值）'
    ],
    bridge_strategies: [
      '为孩子书桌添置一个标准的地球仪和马来西亚/世界地形图，从小培养空间感。',
      '专项攻克“等高线剖面图”，找规律理解“线密代表坡陡，线疏代表坡缓”。',
      '关注现实生活中的天气预报、季候风变化（东北季候风与西南季候风）与水灾地理成因。'
    ],
    recommended_resources: [
      '董总独中《初中地理》第一册及配套填充作业',
      'Google Earth 谷歌地球互动实景观察板块与地形',
      '国家地理（National Geographic）地理探索图集'
    ]
  }
];

// 三语数理与关键学科术语对照库（华 / 英 / 马对照，支持搜索过滤）
export const TRANSITION_GLOSSARY: GlossaryTerm[] = [
  // 数学类 (Math)
  { category: 'math', chinese: '代数', english: 'Algebra', malay: 'Algebra', definition: '用字母和符号来代表未知数并研究其运算规律的数学分支。' },
  { category: 'math', chinese: '方程式', english: 'Equation', malay: 'Persamaan', definition: '含有未知数的等式，如 2x + 5 = 15。' },
  { category: 'math', chinese: '未知数/变量', english: 'Variable', malay: 'Pemboleh ubah', definition: '在代数式中用来表示不固定或未知数值的字母（如 x, y）。' },
  { category: 'math', chinese: '负数', english: 'Negative Number', malay: 'Nombor Negatif', definition: '小于零的数，在数轴上位于原点左侧，带有负号（-）。' },
  { category: 'math', chinese: '绝对值', english: 'Absolute Value', malay: 'Nilai Mutlak', definition: '一个数在数轴上所对应的点到原点的距离，始终非负（如 |-5| = 5）。' },
  { category: 'math', chinese: '合并同类项', english: 'Combining Like Terms', malay: 'Menggabungkan Sebutan Serupa', definition: '将所含字母相同且相同字母指数也相同的项进行加减化简。' },
  { category: 'math', chinese: '角平分线', english: 'Angle Bisector', malay: 'Pembahagi Dua Sama Sudut', definition: '从一个角的顶点引出的一条射线，把这个角分成两个相等的角。' },
  { category: 'math', chinese: '平行线', english: 'Parallel Lines', malay: 'Garis Selari', definition: '在同一平面内向两端无限延长且永远不会相交的两条直线。' },
  { category: 'math', chinese: '同位角', english: 'Corresponding Angles', malay: 'Sudut Sepadan', definition: '两条直线被第三条直线所截时，位置相同的一对角（两线平行时同位角相等）。' },
  { category: 'math', chinese: '内错角', english: 'Alternate Angles', malay: 'Sudut Berselang-seli', definition: '两条直线被第三条直线所截时，交错位于截线两侧内部的一对角（平行时相等，呈Z字形）。' },

  // 科学类 (Science)
  { category: 'science', chinese: '密度', english: 'Density', malay: 'Ketumpatan', definition: '物质单位体积内所含的质量，公式为 密度 = 质量 ÷ 体积。' },
  { category: 'science', chinese: '重力/引力', english: 'Gravity', malay: 'Graviti', definition: '物体由于地球吸引而受到的向下的力。' },
  { category: 'science', chinese: '细胞核', english: 'Nucleus', malay: 'Nukleus', definition: '细胞的控制中心，内含遗传物质 DNA。' },
  { category: 'science', chinese: '光合作用', english: 'Photosynthesis', malay: 'Fotosintesis', definition: '绿色植物利用光能，将水和二氧化碳转化为葡萄糖并释放氧气的过程。' },
  { category: 'science', chinese: '呼吸作用', english: 'Respiration', malay: 'Respirasi', definition: '生物细胞吸收氧气分解有机物释放能量并产生二氧化碳的代谢过程。' },
  { category: 'science', chinese: '蒸腾作用', english: 'Transpiration', malay: 'Transpirasi', definition: '水分从活的植物体表面（主要是叶片气孔）以水蒸气状态散失到大气中的过程。' },
  { category: 'science', chinese: '溶解度', english: 'Solubility', malay: 'Keterlarutan', definition: '在一定温度下，某固态物质在 100g 溶剂里达到饱和状态时所溶解的质量。' },
  { category: 'science', chinese: '游标卡尺', english: 'Vernier Calipers', malay: 'Angkup Vernier', definition: '测量长度、内外径和深度的高精度物理测量工具。' },
  { category: 'science', chinese: '本生灯', english: 'Bunsen Burner', malay: 'Penunu Bunsen', definition: '化学实验室中利用可燃气体作为燃料的高温加热仪器。' },

  // 地理类 (Geography)
  { category: 'geography', chinese: '等高线', english: 'Contour Line', malay: 'Garisan Kontur', definition: '地图上将地面上海拔高度相同各点连接而成的闭合曲线。' },
  { category: 'geography', chinese: '比例尺', english: 'Scale', malay: 'Skala', definition: '地图上的图上距离与地面实际距离之间的比率。' },
  { category: 'geography', chinese: '经纬度', english: 'Latitude and Longitude', malay: 'Latitud dan Longitud', definition: '利用经线和纬线构成的坐标网确定地球表面任意位置的方法。' },
  { category: 'geography', chinese: '赤道', english: 'Equator', malay: 'Khatulistiwa', definition: '地球表面距离南北两极距离相等的假想大圆圈，纬度为 0 度。' },
  { category: 'geography', chinese: '季候风', english: 'Monsoon', malay: 'Angin Monsun', definition: '随着季节变化而在大范围内有规律改变风向的大规模风系（如西南季风与东北季风）。' },
  { category: 'geography', chinese: '对流雨', english: 'Convectional Rain', malay: 'Hujan Perolakan', definition: '赤道热带地区因近地面空气受强热剧烈上升、水汽冷却凝结而形成的午后雷阵雨。' }
];

// “初中预备班 (Remove Class)” 全景答疑与政策解析
export const REMOVE_CLASS_FAQS: RemoveClassFaq[] = [
  {
    question: '独中为什么要设立“初中预备班”？',
    highlight: '为三语或基础数理暂时脱节的小学毕业生搭建的一年缓冲跑道。',
    answer: '不同于政府国中的预备班（主要针对国文不达标学生），独中预备班的设立初衷是“因材施教与保底兜底”。华小学生在小六升学时，由于小学三语教学差异或入学试临场发挥失常，未能达到初一直升标准，但其整体潜能值得培育。独中设立预备班，让学生用一整年时间强化语言、养成自律生活习惯，避免直接进入初一遭遇全科溃败而失去自信。'
  },
  {
    question: '读预备班是不是代表孩子被贴上了“差生”标签？',
    highlight: '绝对不是！它是起跑前的“深蹲蓄力”，历届逆袭成才案例数不胜数。',
    answer: '这是很多家长最大的心理负担和面子顾虑。实际上，独中预备班更像是一个“一年制适应学院”。学生在此阶段压力相对平缓，有更多机会被老师细致关注。根据全马多所重点独中（如宽柔中学、尊孔独中、波德申中华等）的长期跟踪统计，高达 35%-40% 的预备班学生在升入高中后名列前茅，并在 UEC 统考中斩获 5A-8A，甚至最终考取新加坡国立大学、台湾顶尖大学和欧美学府。及早补齐短板，远好过勉强直升却连年垫底留级。'
  },
  {
    question: '预备班的一整年课程到底在学些什么？',
    highlight: '重兵集结于三语强化（国文、英文、华文）与实用数学。',
    answer: '预备班的课程结构经过特殊轻量化设计：通常不开设复杂的初中独立历史、地理或高深理科，而是将 60% 以上的课时投入到国文强化班、英文口语与阅读理解、华文精读，以及以基础运算和应用题为主的衔接数学。同时，预备班学生与初一学生完全平等地参与全校联课社团、运动会及校内各种文娱活动，全面融入独中校园文化。'
  },
  {
    question: '读完预备班后，如何顺利升入初一？',
    highlight: '期末校内总平均及格（通常为 60 分）即可顺利直升初一正轨。',
    answer: '预备班学生在年底只需达到校方规定的考评标准（大部分学校要求四主科三语和数学及格，全科总平均满 60 分）。绝大多数认真就读的学生均能 100% 顺利直升初一，并且因为已经熟悉了全日制作息、校规纪律与任课老师的教法，升入初一后往往比刚从小六直升的新生展现出更强的环境适应力和心理韧性。'
  },
  {
    question: '哪些孩子最适合或应该主动考虑申请预备班？',
    highlight: '国英文底子较薄弱、自理能力慢热、性格内向易受挫的学生。',
    answer: '① 华小阶段国文或英文长期处于 TP2-TP3 水平，对写外文句子感到恐惧的孩子；② 入学试成绩刚好处在录用边缘（备取生）；③ 心智成熟度较慢热、小学阶段依赖家长提醒监督的孩子。对于这类孩子，多给一年时间缓冲，是给他们青春期最温柔的保护伞。'
  }
];

// 家长陪跑与心理建设指南
export const PARENTING_RULES = {
  must_do: [
    {
      title: '允许孩子在开学前三个月出现“成绩震荡期”',
      desc: '从华小班级前五名掉到独中班级中游甚至后半段是极其普遍的现象。独中汇聚了各校的精英，考试难度与评分标准截然不同。家长切忌在第一次月考后大发雷霆，而应多关注“错题订正”而非“排名跌落”。'
    },
    {
      title: '建立每日 15 分钟“无压倾听”睡前通道',
      desc: '每天接孩子放学或睡前，少问“今天听写几分？做完作业没有？”，多问“今天新同学有哪些有趣的事？今天哪个老师讲课好玩？中午在食堂吃了什么好吃的？”帮助孩子释放一整天高压留校的紧绷情绪。'
    },
    {
      title: '鼓励孩子全心投入一门真正喜爱的联课社团',
      desc: '社团不是浪费时间，而是独中华校文化的灵魂。管乐团集训、制服团体行军、辩论队破题，是培养孩子在挫折中爬起来、结交一辈子挚友的最佳土壤。'
    },
    {
      title: '逐步移交生活与学业的“责任权”',
      desc: '让孩子自己收拾次日书包、调校闹钟起床、给校服烫熨折叠、自行登录学校 Portal 查询作业。家长越早放手，孩子在面对初中繁杂学业时越有独立作战的能力。'
    }
  ],
  dont_do: [
    {
      title: '切忌拿孩子的初中成绩与华小 UPSR / UASA 时期横向对比',
      desc: '小学满分容易，独中初一考核具有学术选拔性，平均分 70 分已属良好。用小学的 90 分标准要求独中，会瞬间击垮孩子的自信心。'
    },
    {
      title: '切忌一发现某一科退步就“病急乱投医”报满补习班',
      desc: '独中下午三点半放学加上留校活动，如果周一到周六天天被塞满补习班，孩子根本没有自主消化思考的时间，极易导致厌学与深度脑疲劳。'
    },
    {
      title: '切忌在孩子面前非议学校老师的严格纪律或校规',
      desc: '独中强调尊师重道与纪律严明。若家长在孩子面前贬低校方规定，孩子在校内就会藐视规章制度，容易演变成违纪甚至教导处记过处分。'
    },
    {
      title: '切忌对孩子的手机与社交网络采取“粗暴没收”断崖手段',
      desc: '初中生在班级群讨论功课、社团分工均离不开电子工具。应通过民主协议（如做完功课才可用 45 分钟，晚上 10:30 统一将手机放在客厅充电）建立界限。'
    }
  ]
};

// 交互式升中适应力自测题（6 道综合诊断题）
export const READINESS_QUIZ_QUESTIONS: ReadinessQuestion[] = [
  {
    id: 1,
    dimension: 'time_management',
    question: '对于每天的作业与第二天的书包整理，孩子目前的习惯是：',
    options: [
      { label: '必须由家长在旁全程督促提醒，甚至需要父母帮忙检查收拾书包', score: 1, interpretation: '时间自主性较弱，步入初中全日制后可能面临作业拖延和物品遗漏。' },
      { label: '有时需要提醒，但基本能按时完成，能自己抄写记事本', score: 2, interpretation: '具备基础自律性，给予一定指导后能较快适应初中的日程节奏。' },
      { label: '完全独立自主，做完作业会对照课表收拾书包，有明确的轻重缓急安排', score: 3, interpretation: '自律习惯优秀，完全能胜任初中全天候多科目切换的学习节奏。' }
    ]
  },
  {
    id: 2,
    dimension: 'language_adaptability',
    question: '面对长篇的英文或马来文材料（如故事书、科普小文章），孩子的真实反应是：',
    options: [
      { label: '感到极度抗拒或头疼，生词多一点就完全不想看，依赖翻译工具', score: 1, interpretation: '对非母语存在恐惧心理，开学前亟需积累高频词汇并进行分级过渡阅读。' },
      { label: '可以勉强读懂大意，遇到生词会查词典，能完成基础阅读理解题', score: 2, interpretation: '具备中等双语基础，经过初一一学期的熏陶后通常能顺利跟上。' },
      { label: '阅读顺畅，平时喜欢看英文读物、YouTube 英语视频或与他人双语交流', score: 3, interpretation: '语言适应力极佳，在独中三语教学甚至数理英化教学中将占据明显优势。' }
    ]
  },
  {
    id: 3,
    dimension: 'psychological_resilience',
    question: '如果某次数学小考只拿了 50-60 分（在小学从未发生过），孩子通常会表现为：',
    options: [
      { label: '情绪极度崩溃、自我否定，或者干脆破罐破摔说“我不是读书的料”', score: 1, interpretation: '抗挫心理韧性需重点呵护，家长要提前给予心理预防针，淡化一次失误。' },
      { label: '会难过沮丧一两天，但在家长或老师鼓励下能重新去订正错题', score: 2, interpretation: '拥有正常的心理修复机制，能够通过正面鼓励重拾学习斗志。' },
      { label: '能理性看待失分，会主动向老师同学请教解题逻辑，越挫越勇', score: 3, interpretation: '心理抗压能力强，成长型思维模式（Growth Mindset）突出，不怕高手竞争。' }
    ]
  },
  {
    id: 4,
    dimension: 'time_management',
    question: '面对从“半日制”到“全日制（留校至下午 4 点甚至 6 点）”的体能考验：',
    options: [
      { label: '经常午睡依赖严重，下午容易昏昏欲睡，平时较少参与体育运动', score: 1, interpretation: '体能与精力储备不足，需要在开学前增强户外运动与作息规律调校。' },
      { label: '体能一般，偶有疲劳，但有喜欢的兴趣活动时能保持专注', score: 2, interpretation: '属于正常体魄，注意营养早餐与午餐搭配，1-2个月内能建立体能生物钟。' },
      { label: '精力旺盛充沛，热爱球类或户外运动，适应长时间高强度集体生活', score: 3, interpretation: '体魄强健，精力充沛，能够完美兼顾高强度学术课程与社团大联课。' }
    ]
  },
  {
    id: 5,
    dimension: 'self_care',
    question: '在电子设备（智能手机、平板、电脑游戏）的使用上：',
    options: [
      { label: '一旦拿到手机就停不下来，家长催促容易引发争吵，甚至偷偷带进房间玩', score: 1, interpretation: '对电子产品黏性过高，必须在初一前共同制定明确的屏幕时间契约。' },
      { label: '有使用欲望，但在家长约定的时间限制下基本能主动归还手机', score: 2, interpretation: '具备基本的契约意识，进入独中严格手机管理规定后易于规范引导。' },
      { label: '自制力强，手机主要用于查资料和联系，能主动控制游戏与短视频时间', score: 3, interpretation: '数字自律能力优秀，独中严格的校纪发禁对该类学生毫无适应压力。' }
    ]
  },
  {
    id: 6,
    dimension: 'psychological_resilience',
    question: '面对进入一个新环境、身边没有几个熟悉小学同学的情况：',
    options: [
      { label: '性格极其内向敏感，害怕主动和陌生人打招呼，容易产生强烈的孤独感', score: 1, interpretation: '社交慢热型，家长需鼓励其通过参加中小型社团作为破冰切入点。' },
      { label: '刚开始会有些拘谨，但 1-2 周内能找到一两位合得来的伙伴结伴同行', score: 2, interpretation: '正常的社交节奏，能在班级与社团活动中自然建立自己的同伴圈子。' },
      { label: '开朗大方，喜欢主动结交新朋友，乐于参与班级公共事务与竞选班干', score: 3, interpretation: '社交适应力与领导潜质突出，将迅速成为班级和社团的核心活跃分子。' }
    ]
  }
];
