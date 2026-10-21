export interface SubjectSyllabus {
  id: string;
  name: string;
  code: string;
  total_score: number;
  duration_minutes: number;
  description: string;
  weightage_analysis: {
    category: string;
    percentage: number;
    description: string;
    topics: string[];
  }[];
  high_yield_kbat_points: {
    title: string;
    frequency: '极高频' | '高频' | '中频';
    tips: string;
    sample_question?: string;
    sample_answer?: string;
  }[];
  common_pitfalls: string[];
}

export interface SchoolExamProfile {
  school_id: string;
  school_name: string;
  state: string;
  exam_fee: string;
  past_papers_availability: {
    status: '有官方历届试卷合订本' | '官网提供样题下载' | '现场报名提供历届试题' | '无公开真题，提供考核大纲';
    acquisition_method: string;
    price_info?: string;
    official_download_url?: string;
  };
  exam_characteristics: {
    chinese_focus: string;
    math_focus: string;
    english_focus: string;
    bm_focus: string;
  };
  special_tracks_tested?: string; // 例如: 经典班、特理班、双轨/单轨分班考
  prep_advice: string;
}

export const EXAM_SUBJECT_SYLLABUSES: SubjectSyllabus[] = [
  {
    id: 'math',
    name: '数学 (Mathematics)',
    code: 'MATH',
    total_score: 100,
    duration_minutes: 60,
    description: '以华小四年级至六年级 KSSR Semakan 数学课程标准为基底，重点考查数理逻辑演算与高思维能力 (KBAT / 奥数初阶应用)。全马名牌独中拉开录取差距的关键科目。',
    weightage_analysis: [
      {
        category: '数与运算 & 分数小数百分比',
        percentage: 35,
        description: '整数四则混合运算、分数加减乘除与带分数化简、小数与百分比转换及应用题。',
        topics: ['多步骤四则运算与速算巧算', '分数除法与倒数应用', '百分率、折扣与折旧计算', '质数、公因数与最小公倍数 (HCF/LCM)']
      },
      {
        category: '高思维应用题 (KBAT) & 启发式解题',
        percentage: 30,
        description: '独中命题最具杀伤力的部分，要求学生不拘泥死算，运用图解法 (Model Drawing) 或列方程思维解题。',
        topics: ['鸡兔同笼与假设法', '相遇与追及行程问题 (速度、时间与距离)', '植树与封闭图形间距问题', '工程进度与工作效率', '盈亏问题与年龄推算']
      },
      {
        category: '度量衡、几何与空间',
        percentage: 20,
        description: '周长、面积、表面积与体积计算，组合图形分析与单位进率换算。',
        topics: ['正方形/长方形/三角形/圆面积应用', '长方体与正方体容积与注水时间', '时间加减与跨时区换算', '千克与克、公里与米换算应用']
      },
      {
        category: '数据处理、比与比率',
        percentage: 15,
        description: '统计图表理解、平均数、中位数与比率混合问题。',
        topics: ['条形统计图与饼图百分比解析', '平均数逆算 (已知新平均求原数值)', '连比计算与分配比率']
      }
    ],
    high_yield_kbat_points: [
      {
        title: '相遇与追及行程问题 (Distance, Speed & Time)',
        frequency: '极高频',
        tips: '隆中华、坤成、宽柔常考两车相对而行或同向追及。牢记核心公式：相遇时间 = 总路程 ÷ 速度和；追及时间 = 路程差 ÷ 速度差。解题时善用画线段图辅助。',
        sample_question: '例题：甲、乙两镇相距 240 公里。汽车 A 从甲镇以每小时 70 公里出发开往乙镇，同时汽车 B 从乙镇以每小时 50 公里开往甲镇。两车在途中何处相遇？出发后几小时相遇？',
        sample_answer: '解析：相遇时间 = 240 ÷ (70 + 50) = 240 ÷ 120 = 2 小时。相遇点距甲镇 = 70 × 2 = 140 公里，距乙镇 100 公里。'
      },
      {
        title: '鸡兔同笼与假设替换法 (Assumption Method)',
        frequency: '极高频',
        tips: '不仅考动物脚数，常变型为“大纸箱与小纸箱装罐头”、“对得 5 分错扣 2 分的抢答赛”。统一使用假设法：假设全部是其中一种，求出差距再除以单件差额。',
        sample_question: '例题：数学竞赛共有 20 道选择题，做对一题得 5 分，做错或未做一题不仅不得分反扣 2 分。小华最终得了 72 分，他做对了多少题？',
        sample_answer: '解析：假设 20 题全对，应得 20 × 5 = 100 分。实际得分 72 分，少得了 100 - 72 = 28 分。每错一题与全对相差 5 - (-2) = 7 分。做错题数 = 28 ÷ 7 = 4 题。做对题数 = 20 - 4 = 16 题。验证：16×5 - 4×2 = 80 - 8 = 72 分，完全符合。'
      },
      {
        title: '分数比率“抓不变量”与图解法 (Model Method)',
        frequency: '高频',
        tips: '应用题中两人互给弹珠或买书花钱，重点寻找“总量不变”、“差额不变”或“某一人数量不变”，以此统一份数比例。',
        sample_question: '例题：小明有的邮票是小华的 3 倍。如果小明送给小华 20 枚邮票后，两人的邮票数量正好相等。请问两人共有多少枚邮票？',
        sample_answer: '解析：画图法：小明原有 3 份，小华原有 1 份，总数共 4 份。两人相差 2 份。小明给小华 1 份后两人各得 2 份即相等。因此 1 份就是 20 枚。总共有 4 份 = 4 × 20 = 80 枚。'
      }
    ],
    common_pitfalls: [
      '单位陷阱：题目混合使用米 (m) 与厘米 (cm)、小时与分钟，未先统一单位便进行乘除运算。',
      '计算过程粗心：四则运算未按照“先乘除后加减、有括号先算括号”法则，或分数除法忘记将除数颠倒相乘。',
      '忽略简写验算：求解方程或假设法得出答案后，未代回原题验证总数或条件是否合理。'
    ]
  },
  {
    id: 'chinese',
    name: '华文 (Chinese Language)',
    code: 'BC',
    total_score: 100,
    duration_minutes: 60,
    description: '考查华文语言综合能力，包含语文知识基础、现代文阅读理解、古诗文积累及命题/情境写作。独中注重母语文学素养与真情实感。',
    weightage_analysis: [
      {
        category: '语文基础知识与修辞',
        percentage: 25,
        description: '字音辨析、同音错别字订正、成语理解与填空、关联词语搭配、修辞手法 (比喻/拟人/排比/夸张) 与病句修改。',
        topics: ['形似字与多音字辨析', '成语含义与语境应用', '复句关联词逻辑匹配', '常见修辞辨认与改写', '修改病句 (语序不当/成分残缺)']
      },
      {
        category: '现代文阅读与理解 (含说明文与记叙文)',
        percentage: 35,
        description: '2 篇短文阅读（通常 1 篇哲理抒情/叙事散文，1 篇科普说明文）。考查字词深层语境义、段落主旨概括、作者思想情感推断及高阶思维问答。',
        topics: ['词语语境义推敲', '概括段意与文章中心思想', '人物性格与心理活动剖析', 'KBAT 评价性问答 (联系自身生活体验谈看法)']
      },
      {
        category: '作文写作 (命题 / 半命题 / 材料作文)',
        percentage: 40,
        description: '通常提供 2 至 3 题供考生任选一题。字数要求 300 - 450 字。考查审题立意、段落结构、描写技巧与情感表达。',
        topics: ['记叙文 (那一刻，我长大了 / 难忘的背影 / 一件让我感悟的事)', '半命题作文 (我渴望____ / 带着____出发)', '读后感或情境感悟短文']
      }
    ],
    high_yield_kbat_points: [
      {
        title: '阅读理解深层推断题与“代入原文”法则',
        frequency: '极高频',
        tips: '阅读题切忌空泛抄袭全文。标准得分结构：【明确观点】+【引述文章对应关键细节】+【结合现实或自身启示】。',
        sample_question: '例题：请结合第 ④ 段作者的举动，说说为什么他会感到“羞愧而温暖”？',
        sample_answer: '得分要点：分层回答——① 羞愧是因为自己一开始误会了老人的好意，内心感到自责内疚；② 温暖是因为感受到了老人无私关怀的善意与人间真情。'
      },
      {
        title: '高分作文三段论与“以小见大”选材法',
        frequency: '极高频',
        tips: '避免流水账叙述。开头 60 字切入主题（排比或倒叙）；中间重点详写“一个核心细节场景”（动作、神态、对话细致描写）；结尾由具体事件升华到人生感悟或亲情师恩。'
      }
    ],
    common_pitfalls: [
      '作文审题偏题：例如题目是《那一双温暖的手》，全篇写旅游风景，仅在最后一句提及“妈妈牵着我的手”，主次颠倒严重失分。',
      '成语滥用与错别字：常用成语字形易错，如“走投无路”误写作“走投无路”或“名列前茅”写成“名列前茅”。',
      '阅读主观题作答过于简略：仅用两三个字作答，未形成完整句子，未能阐明前因后果。'
    ]
  },
  {
    id: 'english',
    name: '英文 (English Language)',
    code: 'ENG',
    total_score: 100,
    duration_minutes: 60,
    description: '测评小学高年级英语综合素养，涵盖 Grammar & Vocabulary、Reading Comprehension（信息检索与推断题）以及 Guided Writing 写作。坤成、兴华、锺灵等校对英语词汇量和行文流畅度要求较高。',
    weightage_analysis: [
      {
        category: 'Grammar & Vocabulary Usage',
        percentage: 30,
        description: 'Tenses (Simple Present, Past, Continuous, Perfect), Prepositions, Subject-Verb Agreement, Pronouns, Phrasal Verbs & Vocabulary in context.',
        topics: ['Tense consistency & irregular verbs', 'Subject-Verb Agreement traps', 'Prepositions of time & place', 'Forming antonyms & synonyms', 'Conjunctions & transition words']
      },
      {
        category: 'Reading Comprehension & Critical Analysis',
        percentage: 35,
        description: 'Linear and non-linear texts (articles, advertisements, dialogues, narrative stories). Inferential, contextual vocabulary, and factual questions.',
        topics: ['Factual recall from brochures/schedules', 'Inferring writer’s attitude/tone', 'Contextual word meaning (find words from passage)', 'KBAT / Higher-order opinion questions']
      },
      {
        category: 'Guided Writing & Composition',
        percentage: 35,
        description: 'Short communicative message (email/postcard) or guided narrative story based on picture prompts / series of points (80 - 150 words).',
        topics: ['Informal email / letter to a friend', 'Story writing with given beginning/ending sentences', 'Report on school events or sports day', 'Descriptive essay based on pictures']
      }
    ],
    high_yield_kbat_points: [
      {
        title: 'Subject-Verb Agreement (主谓一致易混陷阱)',
        frequency: '极高频',
        tips: '独中常考含有插入语的主语，如 "The teacher, together with her students, (is/are) going to the museum." 主语是 The teacher 单数，正确动词为 is。',
        sample_question: 'Choose the correct option: "Either the players or the coach (has / have) to attend the meeting."',
        sample_answer: 'Explanation: When using "either... or...", the verb agrees with the closer subject ("the coach" -> singular), so the correct answer is "has".'
      },
      {
        title: 'Reading Comprehension Vocabulary Hunt (原文词汇定位技巧)',
        frequency: '高频',
        tips: "题目通常要求 'Find a word in paragraph 3 that has the same meaning as relieved'。答题技巧：先判断词性（动词/形容词/名词），再看上下文的情感色彩锁定词汇。"
      }
    ],
    common_pitfalls: [
      'Tense Inconsistency (时态混乱)：故事写作开头用过去时 (Once upon a time, Ali walked...)，中途突然跳入现在时 (He sees a bird...)，失分严重。',
      'Punctuation & Capitalization：标点符号混乱，I 未大写，专有名词（如 Malaysian, Sunday）未大写。',
      'Word count deficiency：写作未能达到最低字数要求（如少于 80 字），导致内容分被扣。'
    ]
  },
  {
    id: 'bm',
    name: '国文 (Bahasa Melayu)',
    code: 'BM',
    total_score: 100,
    duration_minutes: 60,
    description: '依据华小 KSSR Semakan 国文课程大纲命题，考查 Sistem Bahasa (语法词法)、Pemahaman Petikan (阅读理解) 以及 Penulisan (造句/看图短文/作文)。',
    weightage_analysis: [
      {
        category: 'Sistem Bahasa & Tatabahasa',
        percentage: 35,
        description: 'Kata Ganda, Kata Majmuk, Imbuhan (awalan, akhiran, apitan), Kata Sendi Nama, Peribahasa / Simpulan Bahasa, Kata Hubung.',
        topics: ['Penggunaan Imbuhan apitan (meN-...-kan vs meN-...-i)', 'Simpulan bahasa & peribahasa sekolah rendah', 'Kata ganda separa & penuh', 'Kata pemeri (ialah vs adalah)', 'Penjodoh bilangan']
      },
      {
        category: 'Pemahaman Teks & Maklumat',
        percentage: 30,
        description: 'Petikan naratif, dialog, dan poster maklumat. Soalan objektif dan subjektif bertumpu serta KBAT (kemahiran berfikir aras tinggi).',
        topics: ['Maklumat tersurat & tersirat', 'Nilai murni / pengajaran daripada petikan', 'Soalan KBAT cadangan tindakan (Apakah tindakan anda jika...)']
      },
      {
        category: 'Penulisan (Bina Ayat / Ulasan / Karangan)',
        percentage: 35,
        description: 'Membina 5 ayat lengkap berdasarkan gambar (teknik SALAK/SKOP), menulis ulasan ringkas (tersurat & tersirat), atau karangan berformat.',
        topics: ['Bina ayat aktiviti gotong-royong / sukaneka', 'Ulasan cara-cara menjaga kesihatan / faedah membaca', 'Karangan surat tidak rasmi / catatan harian']
      }
    ],
    high_yield_kbat_points: [
      {
        title: 'Teknik SKOP / SALAK untuk Bina Ayat Mantap',
        frequency: '极高频',
        tips: '造句切勿过简。利用 SKOP 法则：S (Subjek 人物) + K (Kata Kerja 动词) + O (Objek 宾语) + P (Penerangan 时间/地点/工具/目的)。',
        sample_question: 'Bina satu ayat berdasarkan kata kerja "menggali tanah".',
        sample_answer: 'Contoh terbaik: "Encik Tan menggali tanah dengan menggunakan sebatang cangkul untuk menanam anak pokok durian di belakang rumahnya." (S + K + O + P lengkap)'
      },
      {
        title: 'Perbezaan "ialah" dan "adalah" (易混谓词)',
        frequency: '高频',
        tips: '"Ialah" 用于后面跟 Kata Nama (名词短语)，例如: "Beliau ialah seorang guru."；"Adalah" 用于后面跟 Kata Adjektif (形容词) 或 Kata Sendi Nama (介词)，例如: "Keputusan itu adalah sangat tepat." / "Tujuan lawatan adalah untuk menambah ilmu."'
      }
    ],
    common_pitfalls: [
      'Imbuhan 拼写错误：例如 memasakkan 与 memasuki，mengotori 与 mengotorkan 混淆。',
      'Ulasan 缺少 Nilai Murni (道德价值观)：写 Ulasan 时只抄原文内容，没有提炼 Isi Tersirat 和 Nilai Murni。',
      'Tatabahasa Bahasa Melayu Pasar：夹带英语思维直译，如 "saya punya kawan"（正确应为 "kawan saya"）。'
    ]
  }
];

export const SCHOOL_EXAM_PROFILES: SchoolExamProfile[] = [
  {
    school_id: 'ch-kl',
    school_name: '吉隆坡中华独立中学',
    state: '吉隆坡',
    exam_fee: 'RM 50',
    past_papers_availability: {
      status: '有官方历届试卷合订本',
      acquisition_method: '每年 6 月起在隆中华光前堂招生柜台或学校贩卖部公开发售，亦可在报名入学考试时在线勾选加购邮寄。',
      price_info: 'RM 15 / 套 (包含过去 3 年华、英、数、国 4 科完整考卷与参考答案)',
      official_download_url: 'https://www.chonghwakl.edu.my'
    },
    exam_characteristics: {
      chinese_focus: '注重文言断句基础、修辞与现代文学阅读，作文题偏向探讨生活哲理与独立品格。',
      math_focus: '全马独中数学标杆之一，含 15~20% 奥数思维题 (KBAT)，考查逻辑严谨性，计分分步给分。',
      english_focus: '词汇量要求较高，含较长篇幅阅读理解与情景应用作文，重视语法主谓一致。',
      bm_focus: '严格考察 KSSR 语法造句与 Ulasan 提炼能力，阅读理解含国家时事与环保主题。'
    },
    special_tracks_tested: '依据初一入学考试总成绩遴选前列优秀生进入高思维精英班/中华实验班。',
    prep_advice: '建议至少提前 2 个月精做近 3 年真题合订本，重点突破数学后 5 道大题的时间分配，保持作答整洁。'
  },
  {
    school_id: 'kc-kl',
    school_name: '吉隆坡坤成中学',
    state: '吉隆坡',
    exam_fee: 'RM 50',
    past_papers_availability: {
      status: '官网提供样题下载',
      acquisition_method: '每年开放日与网上报名系统开放时，坤成官网招生专区提供各科考试样题及大纲下载，贩卖部亦有历年题精编。',
      price_info: '官网免费下载样卷，现场售卖真题约 RM 15',
      official_download_url: 'https://www.kuencheng.edu.my'
    },
    exam_characteristics: {
      chinese_focus: '注重阅读理解深层推论题与文字组织表达，作文选题开阔，偏重抒情叙事。',
      math_focus: '着重解题步骤完整性，应用题注重现实生活情境应用，陷阱题较少，但步骤不完整会扣分。',
      english_focus: '坤成重视英语浸润，阅读题材广泛（科普、自然、小说摘录），词汇难度略高于华小平均。',
      bm_focus: '注重规范语法与格式，Karangan 写作切忌口语化，看图造句需细节生动。'
    },
    special_tracks_tested: '所有录取新生统一编班，各班配有高水平英语分流教学。',
    prep_advice: '坤成录取看重综合四科平均分与品行操行，切忌单科偏废。英语与数学阅读速度是关键。'
  },
  {
    school_id: 'fy-jb',
    school_name: '新山宽柔中学 (含古来分校/至达城分校)',
    state: '柔佛',
    exam_fee: 'RM 35',
    past_papers_availability: {
      status: '有官方历届试卷合订本',
      acquisition_method: '每年 7 月起于新山校本部、古来分校、至达城分校教务处与贩卖部同步公开发售，三校统一入学考试题。',
      price_info: 'RM 10 / 册 (附附录答案，非常畅销，建议尽早购买)',
      official_download_url: 'https://www.foonyew.edu.my'
    },
    exam_characteristics: {
      chinese_focus: '题型标准化，选择题涂卡 (OMR) 与简答相结合，考查范围覆盖小学五六年级完整字词。',
      math_focus: '三校数千人联考，题量较大（约 35~40 题），难度梯次分布清晰，前 70% 为标准基础题，后 30% 为高思维拔高题。',
      english_focus: '题型侧重客观题与语法纠错，阅读理解包含实用图表与广告。',
      bm_focus: '重点测试 Tatabahasa 基础选择与理解，题型与华小 UASA 衔接紧密。'
    },
    special_tracks_tested: '依总分划定新山校本部、古来分校、至达城分校录取线，并作为全免/半免优异新生奖学金选拔基准。',
    prep_advice: '宽柔考试人数最多、考场纪律极严。考生考前应多练习 OMR 涂卡速度与准确度，先易后难作答。'
  },
  {
    school_id: 'hh-klang',
    school_name: '巴生兴华中学',
    state: '雪兰莪',
    exam_fee: 'RM 50',
    past_papers_availability: {
      status: '现场报名提供历届试题',
      acquisition_method: '家长在兴华中学现场或网上提交入学申请后，可于综合大楼教务处购买近 3 年历届真题解析集。',
      price_info: 'RM 12 / 册',
      official_download_url: 'https://www.hinhua.edu.my'
    },
    exam_characteristics: {
      chinese_focus: '现代文阅读选文文学性强，重在考查思想启示与概括能力。',
      math_focus: '数学注重模型画图法与逻辑推断，常有巧妙的几何组合与数字规律题。',
      english_focus: '兴华注重自主学习与国际视野，阅读理解篇幅长，含批判性思考问题。',
      bm_focus: '词法搭配考查严细，重视 Peribahasa 及成语在日常句子中的贴切运用。'
    },
    prep_advice: '兴华提倡全人素养，入学考特别看重数理与英语的分析思辨能力，历年报考生众多，务必注意准时赴考。'
  },
  {
    school_id: 'cl-penang',
    school_name: '槟城锺灵独立中学',
    state: '槟城',
    exam_fee: 'RM 40',
    past_papers_availability: {
      status: '有官方历届试卷合订本',
      acquisition_method: '每年 6 月起在锺灵独中贩卖部或教务处开放购买，亦提供邮购服务。',
      price_info: 'RM 15 / 套',
      official_download_url: 'https://clphs.edu.my'
    },
    exam_characteristics: {
      chinese_focus: '考查三语并重，华文文学素养与成语底蕴深厚，设小篇文言阅读。',
      math_focus: '数理传统强校，数学要求高，设有多题具挑战性的计算与证明题，计算精度要求极高。',
      english_focus: '锺灵独中开办国际剑桥课程 (IGCSE)，英语考试难度较高，包括词汇辨析与综合写作。',
      bm_focus: '符合全国华小大纲标准，注重系统语法与实用书信写作。'
    },
    special_tracks_tested: '入学考优异者可选拔进入国际班 (IGCSE) 或统考双轨精英班。',
    prep_advice: '意向进入理科或 IGCSE 班的学生，需强化英语词汇储备与数学奥数初阶题的日常训练。'
  },
  {
    school_id: 'tj-kl',
    school_name: '吉隆坡循人中学',
    state: '吉隆坡',
    exam_fee: 'RM 40',
    past_papers_availability: {
      status: '官网提供样题下载',
      acquisition_method: '循人中学每年新生招考系统内提供考试形式指南与各科样题，定期举办线上备考说明会。',
      price_info: '官网免费提供样题指引',
      official_download_url: 'https://www.tsunjin.edu.my'
    },
    exam_characteristics: {
      chinese_focus: '阅读理解涵盖叙事与哲理短文，强调抓住细节分析作者心理。',
      math_focus: '注重应用算理，善用方程与图解法。题型层次分明，杜绝偏题怪题。',
      english_focus: '语法和阅读理解并重，题型与华小及国际初中英语标准衔接。',
      bm_focus: '重视语法基础 (Imbuhan) 与实用造句，题量适中。'
    },
    prep_advice: '循人注重学生自律自主学习能力，备考以梳理课本知识脉络为主，按部就班即可取得优异成绩。'
  },
  {
    school_id: 'pf-melaka',
    school_name: '马六甲培风中学',
    state: '马六甲',
    exam_fee: 'RM 30',
    past_papers_availability: {
      status: '有官方历届试卷合订本',
      acquisition_method: '每年 7 月中旬起在培风中学综合大楼教务处及书局专柜发售。',
      price_info: 'RM 10 / 套',
      official_download_url: 'https://www.payfong.edu.my'
    },
    exam_characteristics: {
      chinese_focus: '注重古今人文底蕴，阅读理解选材富含中华文化与乡土情怀。',
      math_focus: '考查基础牢固度与运算准确性，兼顾 2-3 题启发式高思维大题。',
      english_focus: '日常生活英语应用为主，包含听读理解与情境造句。',
      bm_focus: '注重国家语言的日常交流与写作规范。'
    },
    prep_advice: '甲州百年名校，外州寄宿生名额竞争较大，建议外州考生尽早完成报名并兼顾宿舍申请流程。'
  },
  {
    school_id: 'st-sabah',
    school_name: '沙巴崇正中学',
    state: '沙巴',
    exam_fee: 'RM 30',
    past_papers_availability: {
      status: '现场报名提供历届试题',
      acquisition_method: '崇正中学报名处常设往届试题集供家长购买，考前亦有招考说明会剖析考纲。',
      price_info: 'RM 10 / 册',
      official_download_url: 'https://www.st-peter.edu.my'
    },
    exam_characteristics: {
      chinese_focus: '注重基础字词与短文概括，作文注重真情实感。',
      math_focus: '考查数理推理，注重四则混合与空间体积计算。',
      english_focus: '崇正以英语见长，设有双语教学班，英语阅读与词汇考查较为深入。',
      bm_focus: '标准 KSSR 题型，注重看图作文与语法正确性。'
    },
    prep_advice: '东马旗舰名校，招考竞争激烈，建议考生在 8 月前系统梳理五、六年级各科重点笔记。'
  },
  {
    school_id: 'ch-kuching',
    school_name: '古晋中华第一中学',
    state: '砂拉越',
    exam_fee: 'RM 30',
    past_papers_availability: {
      status: '无公开真题，提供考核大纲',
      acquisition_method: '一中通过官网及新生报名单提供考纲说明，不单独售卖考卷，提倡学生回归日常课堂积累。',
      price_info: '大纲免费查阅',
      official_download_url: 'https://www.chms1.edu.my'
    },
    exam_characteristics: {
      chinese_focus: '考查阅读理解与常用语法成语，题量适中。',
      math_focus: '侧重华小日常课本核心计算，不超纲，注重算理步骤清晰。',
      english_focus: '涵盖基本语法与记叙文阅读。',
      bm_focus: '基础语法为主，注重看图造句。'
    },
    prep_advice: '砂拉越首府名校，注重学生全面发展，日常学业成绩表现良好的学生皆能从容应对。'
  }
];

export const EXAM_SPRINT_CHECKLIST = [
  {
    period: '考前 30 - 15 天 (基础系统梳理期)',
    tasks: [
      '全面梳理华小五年级与六年级 UASA 核心科目词汇与语法大纲，扫除多音字、成语及易错字盲点。',
      '完成至少 2 套报考学校的历年真题，严格限时 60 分钟闭卷模拟，统计失分点。',
      '建立错题本，归纳相遇行程、鸡兔同笼及分数比率等高频 KBAT 题型的典型解题框架。'
    ]
  },
  {
    period: '考前 14 - 7 天 (查漏补缺与限时冲刺)',
    tasks: [
      '集中攻克薄弱学科，针对阅读理解与英语写作准备 3 篇经典句型与开篇段落模板。',
      '熟悉 2B 铅笔 OMR 答题卡规范填涂技巧，避免涂写过浅或修改后涂擦不干净。',
      '调整作息时间，将生物钟调整至早晨 8:00 头脑处于最清晰兴奋的应试状态。'
    ]
  },
  {
    period: '考前 1 - 2 天 (考前准备与心态调整)',
    tasks: [
      '备齐准考证（或报名收据）、学生身份证/报生纸影印本、2B 铅笔 3 支、优质橡皮擦、尺子及透明文具袋。',
      '确认考场具体交通路线与停车地点，至少预留 40 分钟交通缓冲时间，避免早晨塞车迟到。',
      '清淡饮食，保证 8 小时充足睡眠，以平稳自信的心态迎战考试。'
    ]
  }
];
