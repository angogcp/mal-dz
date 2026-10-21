export interface DestinationCountry {
  id: string;
  country_name: string;
  flag_emoji: string;
  tagline: string;
  uec_recognition_status: string;
  naric_level: string;
  annual_tuition_range_rm: string;
  annual_living_range_rm: string;
  key_advantages: string[];
  top_universities: {
    name: string;
    chinese_name: string;
    typical_uec_requirement: string;
    scholarship_availability: string;
    popular_majors: string[];
  }[];
  scholarship_opportunities: {
    name: string;
    coverage: string;
    eligibility: string;
  }[];
  application_timeline: {
    period: string;
    milestone: string;
  }[];
  special_notes: string;
}

export interface ScoreTierMatch {
  points_range: string;
  tier_name: string;
  badge_color: string;
  description: string;
  matched_destinations: {
    region: string;
    institutions: string[];
    scholarship_chances: string;
  }[];
}

export const UEC_SCORE_TIERS: ScoreTierMatch[] = [
  {
    points_range: '5 - 8 点 (5科 A1/A2)',
    tier_name: '全球顶尖名校全额奖学金梯队',
    badge_color: 'bg-amber-100 text-amber-900 border-amber-300',
    description: 'UEC 顶尖卓越成绩，具备直冲世界排名前 50 超一流大学并争夺全额学杂费奖学金的强大竞争力。',
    matched_destinations: [
      {
        region: '中国大陆',
        institutions: ['清华大学', '北京大学', '复旦大学', '上海交通大学', '浙江大学'],
        scholarship_chances: '极高（中国政府全额奖学金、清北专属奖学金，免学费免住宿+每月补贴）'
      },
      {
        region: '新加坡',
        institutions: ['新加坡国立大学 (NUS)', '南洋理工大学 (NTU)', '新加坡管理大学 (SMU)'],
        scholarship_chances: '高（MOE Tuition Grant 学费减免 50-70%，东盟本科生全额奖学金）'
      },
      {
        region: '中国香港',
        institutions: ['香港大学 (HKU)', '香港中文大学 (CUHK)', '香港科技大学 (HKUST)'],
        scholarship_chances: '极高（全免学费甚至每年 18万~22万港币全包奖学金）'
      },
      {
        region: '英国',
        institutions: ['剑桥大学 (部分学院)', '牛津大学', '帝国理工 (IC)', '伦敦大学学院 (UCL)', '爱丁堡大学'],
        scholarship_chances: '中（直录大一省去 1 年预科，直通顶尖理工与文商科）'
      },
      {
        region: '台湾',
        institutions: ['台湾大学 (台大)', '清华大学', '阳明交通大学', '成功大学 (含医学/牙医/电机)'],
        scholarship_chances: '极高（海联会第一类分发直录，全额学杂费减免）'
      }
    ]
  },
  {
    points_range: '9 - 14 点 (5科 A2/B3/B4)',
    tier_name: '世界百强大学与名牌专业梯队',
    badge_color: 'bg-emerald-100 text-emerald-900 border-emerald-300',
    description: '优异学术水准，可稳健直录澳洲八大名校、中台新港一流学府主力热门专业（计算机、工程、商科、传媒等）。',
    matched_destinations: [
      {
        region: '澳洲与新西兰',
        institutions: ['墨尔本大学', '悉尼大学', '澳大利亚国立大学 (ANU)', '新南威尔士大学 (UNSW)', '莫纳什大学'],
        scholarship_chances: '中高（免预科直读大一，多校提供 20%~50% 国际生学术优秀奖学金）'
      },
      {
        region: '中国大陆',
        institutions: ['南京大学', '武汉大学', '同济大学', '中山大学', '厦门大学', '华侨大学'],
        scholarship_chances: '高（高校专属华裔奖学金、校长直推保送计划）'
      },
      {
        region: '中国香港与澳门',
        institutions: ['香港城市大学', '香港理工大学', '澳门大学', '澳门科技大学'],
        scholarship_chances: '中高（校长推荐保送免试录取，半免/全免学费）'
      },
      {
        region: '台湾',
        institutions: ['政治大学', '台湾师范大学', '中央大学', '中山大学', '中兴大学'],
        scholarship_chances: '高（第一志愿优先录取，公立大学实惠学费待遇）'
      },
      {
        region: '马来西亚本土顶尖',
        institutions: ['双威大学', '泰莱大学', '拉曼大学 (UTAR)', '厦门大学马来西亚分校', '莫纳什马来西亚分校'],
        scholarship_chances: '极高（直读本科大一，获 50%~100% 优异统考生学费减免）'
      }
    ]
  },
  {
    points_range: '15 - 20 点 (5科 B4/B5/B6)',
    tier_name: '海内外知名大学与特色应用型本科梯队',
    badge_color: 'bg-blue-100 text-blue-900 border-blue-300',
    description: '稳固合格成绩，免去任何预科衔接，直接入读中台英澳名牌大学本科学院，并可享有稳健的本土名校高性价比直升。',
    matched_destinations: [
      {
        region: '台湾',
        institutions: ['中原大学', '逢甲大学', '淡江大学', '东海大学', '辅仁大学', '国立台湾科技大学'],
        scholarship_chances: '中（公私立大学全面接受，各校侨生专项助学金）'
      },
      {
        region: '中国大陆',
        institutions: ['暨南大学', '华侨大学', '北京中医药大学', '中国传媒大学'],
        scholarship_chances: '高（免试直接保送入读本科热门专业）'
      },
      {
        region: '英国与爱尔兰',
        institutions: ['利兹大学', '谢菲尔德大学', '伯明翰大学', '诺丁汉大学', '爱尔兰圣三一学院'],
        scholarship_chances: '中（直接录入大学 Year 1，省时省费）'
      },
      {
        region: '马来西亚本土',
        institutions: ['拉曼大学 (UTAR)', '思特雅大学 (UCSI)', '多媒体大学 (MMU)', '亚太科技大学 (APU)'],
        scholarship_chances: '高（学费亲民，提供 20%~50% 统考学术优良助学金）'
      }
    ]
  },
  {
    points_range: '21 点及以上 (5科及格合格)',
    tier_name: '应用技能与多元本科升学梯队',
    badge_color: 'bg-slate-100 text-slate-800 border-slate-300',
    description: '只要 5 科合格（及格及以上），即可全面免读预科直接升入大马本土私立大学本科大一，或赴台科技大学专攻实战技职与工程。',
    matched_destinations: [
      {
        region: '马来西亚本土私立',
        institutions: ['拉曼理工大学 (TAR UMT)', '南方大学学院', '新纪元大学学院', '韩江传媒大学学院'],
        scholarship_chances: '中（华社大专学费亲民，直接大一就读）'
      },
      {
        region: '台湾技职体系',
        institutions: ['台北科技大学', '云林科技大学', '弘光科技大学', '明志科技大学'],
        scholarship_chances: '中（技职产学合作、实务实习与工读保障）'
      }
    ]
  }
];

export const DESTINATION_COUNTRIES: DestinationCountry[] = [
  {
    id: 'china',
    country_name: '中国大陆 (China)',
    flag_emoji: '🇨🇳',
    tagline: 'C9与985名校免试直录，国家级全额奖学金丰厚，紧密对接全球顶级高科技与前沿产业链',
    uec_recognition_status: '超一流大学全面免高考笔试，凭借统考成绩或校长推荐直接免试录取',
    naric_level: '直接认定为等同普通高中毕业并具备免试升读顶尖重点大学资格',
    annual_tuition_range_rm: 'RM 12,000 ~ RM 26,000 (文理医科标准学费，公立高校常年由政府资助)',
    annual_living_range_rm: 'RM 15,000 ~ RM 28,000 (校内留学生公寓条件优越，伙食亲民)',
    key_advantages: [
      '清华大学、北京大学每年通过董总推荐或自荐直接免笔试录取逾百位大马独中生',
      '复旦、上海交大、浙大、中科大等顶尖名校设立“独中校长实名推荐保送计划”',
      '中国政府全额奖学金 (CSC) 覆盖学费、住宿费，并每月发放约 RMB 2,500 本科生活津贴',
      '高科技（计算机/AI/新能源/生物医药）与新工科实验科研资源全球领先',
      '中文母语学习无语言壁垒，兼具庞大校友圈与全球跨国企业就业通道'
    ],
    top_universities: [
      {
        name: 'Tsinghua University',
        chinese_name: '清华大学 (北京)',
        typical_uec_requirement: '5科 5~8点 (理科数理化A1)，面试表现优异',
        scholarship_availability: '中国政府全额奖学金 / 北京市外国留学生全免奖学金',
        popular_majors: ['计算机科学与技术', '电子工程', '人工智能', '建筑学', '经济金融']
      },
      {
        name: 'Peking University',
        chinese_name: '北京大学 (北京)',
        typical_uec_requirement: '5科 5~8点 (文理科综合A1)，高三学术面试',
        scholarship_availability: '燕京全免学费奖学金 / 中国政府CSC全额奖学金',
        popular_majors: ['国际政治', '中国语言文学', '生命科学', '数学与应用数学', '光华管理']
      },
      {
        name: 'Fudan University',
        chinese_name: '复旦大学 (上海)',
        typical_uec_requirement: '5科 ≤ 10点，校长实名保送免笔试',
        scholarship_availability: '上海市政府留学生奖学金 (全免/半免)',
        popular_majors: ['临床医学 (六年制英语/中文授课)', '新闻传播', '微电子科学', '金融学']
      },
      {
        name: 'Zhejiang University',
        chinese_name: '浙江大学 (杭州)',
        typical_uec_requirement: '5科 ≤ 12点，董总校长推荐',
        scholarship_availability: '浙江大学全额留学生奖学金',
        popular_majors: ['软件工程', '机械工程', '控制科学', '数字经济']
      },
      {
        name: 'Xiamen University',
        chinese_name: '厦门大学 (厦门本部)',
        typical_uec_requirement: '5科 ≤ 15点，直接免试申请',
        scholarship_availability: '陈嘉庚奖学金 (学费+住宿+丰厚生活补贴)',
        popular_majors: ['会计学', '海洋科学', '化学化工', '法学']
      }
    ],
    scholarship_opportunities: [
      {
        name: '中国政府奖学金 (CSC 国奖)',
        coverage: '免全额学费 + 免校内留学生公寓住宿 + 每月发放生活补助 (约 RMB 2,500/月)',
        eligibility: 'UEC 5科成绩优异（通常 ≤ 10点），经中国驻马大使馆或董总遴选推荐'
      },
      {
        name: '陈嘉庚奖学金 (厦门各大高校)',
        coverage: '全免学费 + 免住宿费 + 每年发放约 RMB 30,000 ~ 50,000 生活津贴',
        eligibility: '马来西亚独中统考生，祖籍或认同陈嘉庚精神之品学兼优华裔学子'
      },
      {
        name: '高校专属留学生校长全免奖学金',
        coverage: '第一年免除全额学费，其后学年依在校成绩持续更新',
        eligibility: '获独中校长列入推荐名单前列之优秀应届毕业生'
      }
    ],
    application_timeline: [
      { period: '高三 3月 - 4月', milestone: '清华、北大、复旦等顶尖高校早期校长保送直推通道报名与材料初审' },
      { period: '高三 5月 - 6月', milestone: '线上面试试炼与提前批有条件预录取 (Conditional Offer) 放榜' },
      { period: '高三 11月 - 12月', milestone: '中国各省市重点大学常规批次开放申请及中国政府奖学金申报' },
      { period: '毕业次年 3月 - 5月', milestone: '提交 UEC 正式统考成绩单，换领正式录取通知书与留学签证 (JW202表)' }
    ],
    special_notes: '中国大学近年对大马独中生极为推崇，视独中三语与数理扎实功底为重要亮点，尤其新工科与医学专业性价比冠绝全球。'
  },
  {
    id: 'taiwan',
    country_name: '台湾 (Taiwan)',
    flag_emoji: '🇹🇼',
    tagline: '历史最悠久之独中升学大本营，医科、农科与高精尖半导体芯片重镇，公立学费实惠且生活文化相通',
    uec_recognition_status: '官方 100% 正式认证，可通过海外联招会 (海联会) 或各校独立自主招生免试分发录取',
    naric_level: '完全认定等同普通高中同等学历，享直接修读四年制本科或六至七年制医学牙医学位',
    annual_tuition_range_rm: 'RM 10,000 ~ RM 22,000 (公立大学比照当地生优惠，私立大学亦非常亲民)',
    annual_living_range_rm: 'RM 14,000 ~ RM 24,000 (校内宿舍充裕，便利兼职半工半读与侨生工读)',
    key_advantages: [
      '半世纪深厚历史渊源，全马独中师资与各行业栋梁大量毕业于台湾名校',
      '全马极少数允许以 UEC 成绩直接报读医学系、牙医系、药学系、兽医系的海外途径',
      '半导体、集成电路、电机电子工程（台大/阳明交大/成大/清华）处于全球芯片核心',
      '海联会“个人申请”一次可填报 4 所志愿大学，录取率与配额保障极高',
      '侨生专属健保体系、生活津贴、学杂费优待与校内外工读合法工时完备'
    ],
    top_universities: [
      {
        name: 'National Taiwan University (NTU)',
        chinese_name: '国立台湾大学 (台大)',
        typical_uec_requirement: '5科 5~10点 (医科/电机系要求数理A1)',
        scholarship_availability: '台大侨生奖学金、全免学杂费与助学金',
        popular_majors: ['电机工程', '医学系 (七年制)', '资讯工程 (CS)', '农艺与生命科学', '工商管理']
      },
      {
        name: 'National Tsing Hua University',
        chinese_name: '国立清华大学 (新竹)',
        typical_uec_requirement: '5科 ≤ 12点，数理扎实',
        scholarship_availability: '新竹清华留学生优秀全免奖学金',
        popular_majors: ['半导体与微电子', '动力机械', '材料科学', '人文社会']
      },
      {
        name: 'National Yang Ming Chiao Tung Univ',
        chinese_name: '国立阳明交通大学 (交大)',
        typical_uec_requirement: '5科 ≤ 12点，理工拔尖',
        scholarship_availability: '交大思源奖学金、侨生学术奖励金',
        popular_majors: ['芯片与电子工程', '生物医学工程', '医医学系', '光电工程']
      },
      {
        name: 'National Cheng Kung University',
        chinese_name: '国立成功大学 (台南成大)',
        typical_uec_requirement: '5科 ≤ 14点，工科大本营',
        scholarship_availability: '成大校友会全额奖学金、学杂费减免',
        popular_majors: ['机械与造船航空', '土木工程', '建筑设计', '化学化工']
      },
      {
        name: 'National Chengchi University',
        chinese_name: '国立政治大学 (政大)',
        typical_uec_requirement: '5科 ≤ 15点 (文商科擅长)',
        scholarship_availability: '政大国际新生优秀奖学金',
        popular_majors: ['新闻传播', '外交事务与国际法', '金融与会计', '企管']
      }
    ],
    scholarship_opportunities: [
      {
        name: '教育部留台侨生学杂费补助',
        coverage: '依公立或私立标准直接补贴学杂费差额，减免约 30%~50%',
        eligibility: '经海联会录取的全部正统大马独中统考侨生皆自动享有'
      },
      {
        name: '各大学侨生清寒助学金与优秀奖励金',
        coverage: '每月发放生活助学金 NT$ 3,000 ~ 8,000，保障学业安心',
        eligibility: '家庭经济中等或优良，学业成绩达到各系前列'
      },
      {
        name: '台湾高科技半导体企业产学奖学金',
        coverage: '全免大三大四学费 + 每月津贴 + 毕业直接留台进入台积电/联发科等大厂工作',
        eligibility: '就读电机、电子、物理、材料等理工关键科技科系学生'
      }
    ],
    application_timeline: [
      { period: '高三 11月 - 12月', milestone: '海联会 (海外联招会) 个人申请系统开放线上填报志愿 (可填4志愿)' },
      { period: '毕业次年 1月 - 3月', milestone: '海联会联合分发批次填报志愿与海外独招报名' },
      { period: '毕业次年 3月 - 4月', milestone: '个人申请第一阶段录取结果正式放榜' },
      { period: '毕业次年 8月 - 9月', milestone: '办理入台证件与健保登记，秋季班正式赴台开学' }
    ],
    special_notes: '台湾科技大学、台北科技大学等四年制科技大学亦面向独中工科、美工、商科考生开放高额配额，产学无缝对接。'
  },
  {
    id: 'singapore',
    country_name: '新加坡 (Singapore)',
    flag_emoji: '🇸🇬',
    tagline: '亚洲第1名校集群，国际金融科技中枢，毕业生起薪高居亚洲之首，邻近马来西亚地利亲近',
    uec_recognition_status: '新加坡国立大学 (NUS) 与南洋理工大学 (NTU) 官网明确列出 UEC 为直接认可之录取学术资格',
    naric_level: '直接等同新加坡-剑桥 GCE A-Level 顶尖水平',
    annual_tuition_range_rm: 'RM 55,000 ~ RM 95,000 (享有 MOE Tuition Grant 补贴后)',
    annual_living_range_rm: 'RM 35,000 ~ RM 55,000 (现代化花园城市，交通生活便利安全)',
    key_advantages: [
      'NUS (QS世界前8) 与 NTU (QS世界前15) 亚洲双子星顶尖学术殿堂',
      '享有新加坡教育部 Tuition Grant 学费补贴政策（资助约 50%~65% 学费，附带留新工作 3 年之就业合约）',
      '大学毕业后起薪高居新币 4,500 ~ 6,500 (约合马币 RM 15,000 ~ 22,000/月)',
      '跨国科技大厂（谷歌、微软、Meta、字节跳动、冬海集团）亚太总部聚集，实习与全职机会极为丰盛',
      '近在咫尺，家长往返柔佛/吉隆坡极速便捷，无时差及文化水土不服'
    ],
    top_universities: [
      {
        name: 'National University of Singapore (NUS)',
        chinese_name: '新加坡国立大学 (NUS)',
        typical_uec_requirement: '5科 5~8点 (要求包含高数、物理或相关专业先修科目 A1)',
        scholarship_availability: 'ASEAN Undergraduate Scholarship (全免学费+津贴)',
        popular_majors: ['计算机科学 (全球顶尖)', '商业分析', '机械与电气工程', '法学', '生物医学']
      },
      {
        name: 'Nanyang Technological University (NTU)',
        chinese_name: '南洋理工大学 (NTU)',
        typical_uec_requirement: '5科 ≤ 10点 (数理成绩卓越)',
        scholarship_availability: 'Nanyang Scholarship (全免学费+每年新币津贴)',
        popular_majors: ['人工智能与数据科学', '通信与电子', '南洋商学院商业与会计', '材料工程']
      },
      {
        name: 'Singapore Management University (SMU)',
        chinese_name: '新加坡管理大学 (SMU)',
        typical_uec_requirement: '5科 ≤ 12点，英语表达流畅',
        scholarship_availability: 'SMU Lee Kong Chian 全额学术奖学金',
        popular_majors: ['金融学', '经济学', '信息系统', '法学']
      },
      {
        name: 'Singapore University of Tech & Design (SUTD)',
        chinese_name: '新加坡科技设计大学 (SUTD - 麻省理工MIT联合创校)',
        typical_uec_requirement: '5科 ≤ 12点，创新思维面试',
        scholarship_availability: 'SUTD Global Excellence 全额奖学金',
        popular_majors: ['计算机与设计工程', '建筑与可持续系统', '智能系统']
      }
    ],
    scholarship_opportunities: [
      {
        name: 'MOE Tuition Grant (新加坡教育部学费津贴)',
        coverage: '直接减免 50% ~ 65% 本科学费，所有被录取的独中生均有资格自动申请',
        eligibility: '签署协议，承诺毕业后在新加坡注册之跨国或本土企业工作满 3 年'
      },
      {
        name: 'ASEAN Undergraduate Scholarship (东盟本科全额奖学金)',
        coverage: '免除全部剩余学费 + 每年发放新币 5,800 生活补贴 + 新币 3,000 电脑住宿津贴',
        eligibility: 'UEC 成绩顶尖（通常 5科 5~6点，全 A1），通过校方选拔面试'
      }
    ],
    application_timeline: [
      { period: '高三 10月 - 11月', milestone: 'NUS 与 NTU 官网开放新一学年国际生在线申请系统' },
      { period: '毕业次年 1月 - 2月', milestone: '申请截止并上传正式 UEC 统考成绩单与英文成绩证明' },
      { period: '毕业次年 3月 - 4月', milestone: '受邀参加线上入学与奖学金遴选面试' },
      { period: '毕业次年 5月 - 6月', milestone: '正式发放录取通知书并签约 Tuition Grant' }
    ],
    special_notes: '新加坡顶尖公立大学对独中高数（理科/商科）成绩极为看重。若统考英语达到 A1/A2，大部分专业可直接免考 IELTS/TOEFL。'
  },
  {
    id: 'hongkong_macau',
    country_name: '中国香港与澳门 (Hong Kong & Macau)',
    flag_emoji: '🇭🇰',
    tagline: '全英语国际化授课环境，高额入学全奖抢录优质生源，紧密联通大湾区与全球商业脉搏',
    uec_recognition_status: '香港八大公立高校与澳门综合大学全面认可 Senior UEC，直接作为大一入学凭证',
    naric_level: '等同英国 GCE A-Level 优等标准，直接入读 4 年制全日制本科学士学位',
    annual_tuition_range_rm: 'RM 75,000 ~ RM 110,000 (若未获奖学金之国际生学费；优秀生极易斩获全额学费减免)',
    annual_living_range_rm: 'RM 35,000 ~ RM 55,000 (校内宿舍优先保障前两年，住宿条件舒适)',
    key_advantages: [
      '全马独中顶尖尖子生奖学金待遇最丰厚地区：5科 5~8点极高概率获 Full Scholarship（每年 18万~22万港币，包揽学费+高额生活津贴）',
      'QS世界百强密集度最高（港大、港中文、港科大、城大、理工共5所世界百强）',
      '全英语专业授课，国际师资力量强大，与伦敦、纽约无缝接轨',
      '香港特区政府“非本地毕业生留港/回港就业安排 (IANG)”：毕业无条件续签 2 年留港工作',
      '澳门大学横琴新校区环境媲美欧美名校，设独中专属免试保送推介计划'
    ],
    top_universities: [
      {
        name: 'The University of Hong Kong (HKU)',
        chinese_name: '香港大学 (HKU)',
        typical_uec_requirement: '5科 5~8点 (相关科目A1)，雅思 6.5 或统考英文 A1',
        scholarship_availability: 'HKU Foundation 全免学费 + 每年生活津贴 (每年约20万港币)',
        popular_majors: ['金融商科', '计算机与数据科学', '建筑学', '牙医与医学', '法学']
      },
      {
        name: 'The Chinese Univ of Hong Kong (CUHK)',
        chinese_name: '香港中文大学 (CUHK)',
        typical_uec_requirement: '5科 ≤ 8点，文理兼备',
        scholarship_availability: '全免学费及全额住宿奖学金',
        popular_majors: ['环球商业学', '人工智能', '生物医学', '新闻传播']
      },
      {
        name: 'Hong Kong Univ of Science & Tech (HKUST)',
        chinese_name: '香港科技大学 (HKUST)',
        typical_uec_requirement: '5科 ≤ 10点 (数理强项)',
        scholarship_availability: 'HKUST Top Achievers 全免学费奖学金',
        popular_majors: ['电子与微电子', '机械工程', '金融工程', '理学前沿']
      },
      {
        name: 'University of Macau (UM)',
        chinese_name: '澳门大学 (澳大)',
        typical_uec_requirement: '5科 ≤ 15点，独中校长推荐免笔试',
        scholarship_availability: '澳门大专助学金、全免4年学费与住宿费奖学金',
        popular_majors: ['微电子与芯片', '中药质量研究', '旅游博彩与酒店管理', '土木工程']
      }
    ],
    scholarship_opportunities: [
      {
        name: '香港特区政府卓越留学生奖学金 (HKSAR Govt Scholarship)',
        coverage: '每年 80,000 港币学费补贴',
        eligibility: '在港大学术成绩名列前茅之独中生'
      },
      {
        name: '大学全额入学奖学金 (University Full Scholarship)',
        coverage: '全免 4 年学费 (每年约18万港币) + 每年约 5万港币生活补贴',
        eligibility: 'UEC 5科 5~8点，面试表现突出'
      }
    ],
    application_timeline: [
      { period: '高三 9月 - 11月', milestone: '香港各大学提前批 (Early Round) 申请启动，优先锁定全额奖学金名额' },
      { period: '高三 12月 - 次年1月', milestone: '参加线上综合英文面试并获取预先有条件奖学金 Offer' },
      { period: '毕业次年 2月 - 4月', milestone: '常规轮次放榜与确认奖学金学席' },
      { period: '毕业次年 8月', milestone: '抵港办理学生签证与迎新营' }
    ],
    special_notes: '港校非常看重独中生的活动领导力与英语表达能力。建议高二高三阶段多准备英文自荐陈述 (Personal Statement)。'
  },
  {
    id: 'uk_ireland',
    country_name: '英国与爱尔兰 (UK & Ireland)',
    flag_emoji: '🇬🇧',
    tagline: '英国国家学术机构 NARIC 官方认证等同 A-Level，免去 1 年预科直录本科 Year 1，三年极速完成荣誉学士',
    uec_recognition_status: '英国 UCAS 及绝大多数罗素大学集团成员官方承认，免预科直升大一',
    naric_level: 'UK ENIC / NARIC 官方评定等同于英国 GCE A-Level',
    annual_tuition_range_rm: 'RM 95,000 ~ RM 160,000 (英格兰/苏格兰/爱尔兰本科学费)',
    annual_living_range_rm: 'RM 55,000 ~ RM 85,000 (伦敦较昂贵，非伦敦地区如曼彻斯特/谢菲尔德更具性价比)',
    key_advantages: [
      '极大节约时间与金钱成本：英格兰本科学制仅需 3 年，免除 1 年预科，比读高中+预科直接省下约 RM 150,000',
      '罗素大学集团 (牛津、剑桥、IC、UCL、爱丁堡、曼大、布里斯托等) 招生主页明确列出 UEC 录取要求 (等同 AAA / AAB)',
      '爱尔兰科技与制药巨头欧洲总部林立，毕业生享有 2 年毕业后工作签证 (Graduate Visa)',
      '全英语母语国家深厚学术传统，文凭享誉全球，学风严谨推崇批判性独立思考'
    ],
    top_universities: [
      {
        name: 'University of Cambridge',
        chinese_name: '剑桥大学 (部分学院)',
        typical_uec_requirement: '5科 5点 (全A1)，附带面试与学院笔试',
        scholarship_availability: 'Cambridge Trust 国际学术资助',
        popular_majors: ['工程学', '自然科学', '经济学', '数学']
      },
      {
        name: 'University of Edinburgh',
        chinese_name: '爱丁堡大学 (苏格兰)',
        typical_uec_requirement: '5科 8~12点 (要求A1/A2)',
        scholarship_availability: 'Edinburgh Global 优秀奖学金',
        popular_majors: ['人工智能与计算机', '生物医学', '建筑设计', '商科']
      },
      {
        name: 'University of Manchester',
        chinese_name: '曼彻斯特大学',
        typical_uec_requirement: '5科 ≤ 12点 (等同 AAA / AAB)',
        scholarship_availability: '国际本科优秀奖学金 (每年减免约 £3,000 ~ £5,000)',
        popular_majors: ['化学工程', '材料科学', '会计金融', '计算机系统']
      },
      {
        name: 'Trinity College Dublin',
        chinese_name: '爱尔兰圣三一学院 (都柏林)',
        typical_uec_requirement: '5科 ≤ 14点，英语优异',
        scholarship_availability: '爱尔兰政府全球卓越奖学金',
        popular_majors: ['药学与生物制药', '计算机软件', '英文文学', '法律']
      }
    ],
    scholarship_opportunities: [
      {
        name: '各大学国际留学生学术优秀奖学金 (International Merit Scholarship)',
        coverage: '每年减免 £2,000 ~ £10,000 学费',
        eligibility: 'UEC 成绩达到该校最优等学术区间录取者自动评定'
      },
      {
        name: '英国志奋领 / 各类专项基金',
        coverage: '部分资助特殊专业（如环境科研、人文社科）学费差额',
        eligibility: '具备突出社会实践与领导力记录者'
      }
    ],
    application_timeline: [
      { period: '高三 9月 - 10月', milestone: '牛津、剑桥及医科专业 UCAS 统一系统提前申请截止' },
      { period: '高三 11月 - 次年1月', milestone: '全英各常规专业 UCAS 第一轮在线申请递交' },
      { period: '毕业次年 2月 - 5月', milestone: '各大学陆续发放条件录取通知 (Conditional Offer)' },
      { period: '毕业次年 7月 - 8月', milestone: '办理英国学生签证 (Tier 4 / Student Route) 并预订学生公寓' }
    ],
    special_notes: '大部分英国大学要求提供雅思 (IELTS 6.5~7.0)。若 UEC 英语取得 A1，部分罗素盟校（如谢菲尔德、利兹）可作为英语免考依据申请 Waiver。'
  },
  {
    id: 'australia_nz',
    country_name: '澳大利亚与新西兰 (Australia & New Zealand)',
    flag_emoji: '🇦🇺',
    tagline: '澳洲八大名校全员免预科直通大一，移民通道与毕业后工签政策友善，气候适宜时差仅2小时',
    uec_recognition_status: '澳洲八校联盟 (Go8) 及新西兰各大公立大学 100% 官方公开接受 UEC 换算 ATAR 直录大一',
    naric_level: '直接认定等同澳大利亚高中毕业证书 (Year 12 High School Certificate)',
    annual_tuition_range_rm: 'RM 90,000 ~ RM 150,000 (商科/工程/理科本科标准学费)',
    annual_living_range_rm: 'RM 50,000 ~ RM 75,000 (悉尼/墨尔本稍高，阿德莱德/布里斯班/珀斯更具性价比)',
    key_advantages: [
      '澳洲八大名校 (Group of Eight - Go8) 全员直接承认 UEC，无需读预科，高中毕业直接进大一',
      '时差仅 2~3 小时，气候宜人，多元包容，华裔社群庞大成熟',
      '澳大利亚大学普遍设立 20% ~ 50% 优秀国际生专属学费奖学金',
      '毕业后享有 2 ~ 4 年合法无限制工作签证 (Post-Study Work Visa / 485类)',
      '采矿、农业、可再生能源、护理、工程等专业在全球行业竞争力处于第一梯队'
    ],
    top_universities: [
      {
        name: 'The University of Melbourne',
        chinese_name: '墨尔本大学 (澳洲第1)',
        typical_uec_requirement: '5科 8~12点 (折合 ATAR 85~95分)',
        scholarship_availability: 'Melbourne International Undergraduate Scholarship (减免50%或全免)',
        popular_majors: ['商业与经济学', '计算机与软件工程', '生物医学科学', '建筑设计']
      },
      {
        name: 'The University of Sydney',
        chinese_name: '悉尼大学',
        typical_uec_requirement: '5科 ≤ 14点 (工程/商科要求对应数学)',
        scholarship_availability: 'Sydney International Student Award (每年减免20%学费)',
        popular_majors: ['软件工程', '会计与金融', '法学', '土木工程']
      },
      {
        name: 'Australian National University (ANU)',
        chinese_name: '澳大利亚国立大学 (堪培拉)',
        typical_uec_requirement: '5科 ≤ 12点，科研声誉卓越',
        scholarship_availability: 'ANU Chancellor’s International Scholarship (减免25%~50%)',
        popular_majors: ['物理科学', '政治学与国际关系', '计算机科学', '精算学']
      },
      {
        name: 'UNSW Sydney',
        chinese_name: '新南威尔士大学 (UNSW)',
        typical_uec_requirement: '5科 ≤ 14点 (工程类全球闻名)',
        scholarship_availability: 'UNSW International Scientific Award',
        popular_majors: ['光伏太阳能与清洁能源', '电子工程', '商学院金融', '矿业工程']
      }
    ],
    scholarship_opportunities: [
      {
        name: '澳洲大学专属卓越学术奖学金 (Dean’s Excellence Award)',
        coverage: '减免第一年或每年 20% ~ 50% 学费 (折合马币每年省 RM 20,000 ~ 50,000)',
        eligibility: 'UEC 5科成绩优于录取门槛者在递交申请时自动评估发放'
      },
      {
        name: '澳大利亚偏远地区留学津贴 (Regional Study Grant)',
        coverage: '生活津贴或每年 5,000 澳元补助，额外享有更多工签年限',
        eligibility: '就读阿德莱德、珀斯、卧龙岗、纽卡斯尔等指定校区学生'
      }
    ],
    application_timeline: [
      { period: '高三 7月 - 9月', milestone: '递交初审材料获取预录取通知 (Conditional Offer)' },
      { period: '毕业次年 1月', milestone: '补交正式 UEC 统考成绩单与雅思/托福成绩換发 Full Offer' },
      { period: '毕业次年 2月 或 7月', milestone: '澳洲每年 2月 (Semester 1 主开学季) 或 7月 (Semester 2) 双开学通道' }
    ],
    special_notes: '澳洲大学非常青睐大马独中生的数理功底。双开学期（2月与7月）让统考生毕业后时间安排极为灵活。'
  },
  {
    id: 'malaysia_local',
    country_name: '马来西亚本土顶尖大专 (Malaysia Local & Branch Campuses)',
    flag_emoji: '🇲🇾',
    tagline: '100% 认可直升大一，不出国门坐享国际名校同等文凭，学费最实惠且奖学金覆盖面最广',
    uec_recognition_status: '全马所有私立大学及国际名校大马分校 100% 正式认可并免读预科；砂拉越公立大学亦全面正式承认',
    naric_level: '直接录入 3~4 年制本科学士学位大一 (Degree Year 1)',
    annual_tuition_range_rm: 'RM 14,000 ~ RM 45,000 (私立大学) / RM 35,000 ~ RM 65,000 (国际名校大马分校)',
    annual_living_range_rm: 'RM 12,000 ~ RM 24,000 (生活成本极度亲民，常住自家或校内宿舍)',
    key_advantages: [
      '性价比之王：以欧美留学 1/4 的费用，获得中国厦门大学、英国诺丁汉/南安普顿、澳洲莫纳什大学母校同等正规学位文凭',
      '大马私立名校 (双威/泰莱/UTAR) 设有极丰厚的“独中统考全免奖学金 (100% Tuition Waiver)”',
      '拉曼大学 (UTAR) 是全马独中生就读人数最多的大本营，学风纯正，学术受两岸三地与英联邦全面认可',
      '砂拉越州政府已率先官方正式承认统考，统考生可直接就读砂拉越大学 (UNIMAS) 并可申请砂州公务员职位',
      '无需跨国颠簸，离家近，兼顾家庭照料，毕业在本地及东盟跨国企业就业无缝衔接'
    ],
    top_universities: [
      {
        name: 'Universiti Tunku Abdul Rahman (UTAR)',
        chinese_name: '拉曼大学 (优大 - 金宝/双溪龙)',
        typical_uec_requirement: '5科 及格 (特定医学/工程专业要求数理达标)',
        scholarship_availability: 'UTAR 统考优异生学费全免/半免奖学金、清寒子弟贷学金',
        popular_majors: ['中医学 (五年制正规学位)', '会计与精算', '土木与电机工程', '电脑科学', '大众传播']
      },
      {
        name: 'Sunway University',
        chinese_name: '双威大学 (雪兰莪)',
        typical_uec_requirement: '5科 ≤ 15点 (与英国兰卡斯特大学双学位)',
        scholarship_availability: '谢富年基金会独中优秀全额奖学金 (Jeffrey Cheah Foundation)',
        popular_majors: ['精算学 (全马拔尖)', '商科金融', '计算机信息', '生物医药']
      },
      {
        name: 'Xiamen University Malaysia',
        chinese_name: '厦门大学马来西亚分校 (雪邦)',
        typical_uec_requirement: '5科 ≤ 16点 (理科/商科)',
        scholarship_availability: '独中统考高额奖学金 (3科A或5科优等直接减免50%~100%学费)',
        popular_majors: ['中医学', '新能源科学', '海洋生物', '人工智能', '国际商务']
      },
      {
        name: 'Monash University Malaysia',
        chinese_name: '莫纳什大学马来西亚分校 (双威镇)',
        typical_uec_requirement: '5科 8~14点 (直接颁发澳洲八大本校文凭)',
        scholarship_availability: 'Monash High Achiever Award (每年发放奖学金)',
        popular_majors: ['医学外科学士 (MBBS 获大马与澳洲医学会双认证)', '药学', '心理学', '软件工程']
      }
    ],
    scholarship_opportunities: [
      {
        name: '董总与各大私立大学联合奖学金计划',
        coverage: '全免 3~4 年本科全部学杂费 (每年数十个名额)',
        eligibility: '经独中校长推荐，统考成绩达到该校最优档次'
      },
      {
        name: '各私立大专统考成绩专属自动减免 (Automated UEC Bursary)',
        coverage: '5科 A 减免 100% 第一年学费；4科 A 减免 75%；3科 A 减免 50%',
        eligibility: '凡持有 UEC 成绩单达标者，报名时直接在学费账单上抵扣减免'
      }
    ],
    application_timeline: [
      { period: '高三 11月 - 12月', milestone: '各大学大马分校与私立名校早鸟奖学金申请' },
      { period: '毕业次年 1月 - 2月', milestone: '第一学期 (Jan/Feb Intake) 正式开学入读大一' },
      { period: '毕业次年 5月 或 9月', milestone: '第二学期 (May/Sep Intake) 进阶入学通道' }
    ],
    special_notes: '本土升学最大优势在于零预科衔接 + 极致奖学金比例。家庭中等预算即可完成世界百强分校或优质本科教育。'
  }
];

export const QUALIFICATION_COMPARISONS = [
  {
    criteria: '学制年限',
    uec: '初中3年 + 高中3年 (高三毕业直接读大学大一)',
    alevel: '初中3年 + 高一高二(SPM) + A-Level预科 1.5~2年',
    ib: '初中 + 高中 + IBDP 国际文凭预科 2年',
    stpm: '初中 + 高中(SPM) + 中六预科 1.5年'
  },
  {
    criteria: '升读英美澳本科学制',
    uec: '免预科，直接入读大学 Year 1 (3年极速毕业)',
    alevel: '直接入读大学 Year 1',
    ib: '直接入读大学 Year 1 (部分大学可抵扣大学学分)',
    stpm: '直接入读大学 Year 1'
  },
  {
    criteria: '升读中台新高校优势',
    uec: '极高优势：清华、北大、NUS、NTU、台大免试直录并配高额全奖',
    alevel: '以普通国际生身份申请，名额配额有限且奖学金较稀缺',
    ib: '欧美高校适用，中台申请体系相对复杂',
    stpm: '主要针对大马本地公立大学，海外名牌大学保送通道少'
  },
  {
    criteria: '三年留学总花费对比',
    uec: '省去 1~2 年昂贵英美预科学杂费，直接节省马币 10万~25万',
    alevel: '需额外支付高昂 A-Level 学院学杂费 (RM 35,000 ~ 65,000)',
    ib: '国际学校学费高昂 (每年 RM 40,000 ~ 90,000)',
    stpm: '政府中六费用低，但备考周期长、分流压力大'
  },
  {
    criteria: '全球大学认可数量',
    uec: '全球逾 1,000 所顶尖大学直接承认 (英、美、澳、新、中、台、加、日等)',
    alevel: '全球广泛承认',
    ib: '全球广泛承认',
    stpm: '英联邦及大马公立大学承认'
  }
];
