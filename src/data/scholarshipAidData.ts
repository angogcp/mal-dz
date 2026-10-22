export interface ScholarshipCategory {
  id: string;
  title: string;
  badge: string;
  summary: string;
  coverage: string;
  eligibility: string;
  maintenance_rule: string;
  highlights: string[];
}

export interface SchoolFundProfile {
  school_id: string;
  school_name: string;
  state: string;
  annual_disbursement: string;
  beneficiary_count: string;
  flagship_funds: string[];
  merit_intake_quota: string;
  need_based_quota: string;
  textbook_loan_scheme: string;
  hostel_subsidy: string;
  special_notes: string;
}

export interface ExternalFoundation {
  name: string;
  founder_or_org: string;
  coverage_amount: string;
  target_beneficiaries: string;
  application_window: string;
  official_criteria: string[];
  contact_or_apply_link: string;
}

export const SCHOLARSHIP_CATEGORIES: ScholarshipCategory[] = [
  {
    id: 'merit_scholarship',
    title: '新生入学考与学术优异全免奖学金 (Merit Scholarships)',
    badge: '学术拔尖 · 全免学杂费',
    summary: '专门为华小拔尖优等生、UASA 全特优生及独中入学考名列前茅者设立，无需资产审查，全凭考绩择优录取。',
    coverage: '100% 或 50% 免除初一全年在校学费与发展基金（部分名校覆盖初中 3 年甚至 6 年完整学杂费）。',
    eligibility: '在各独中新生入学甄拔考名列全校前 10名 / 前 30名 / 前 50名，或华小五年级/六年级在校学业成绩前 3 名保送生。',
    maintenance_rule: '学年末各科平均成绩维持在 75%~80% 以上，操行评定维持在“甲等”或“乙上”，方可续领次年奖学金。',
    highlights: [
      '入学考放榜同步公布获奖名单，无需另行提交繁杂清寒材料。',
      '名校前 10 名通常包含全免学费、常年发展基金及电脑杂费。',
      '外州拔尖学子部分学校额外加码赠送第一年免收宿舍住宿费。'
    ]
  },
  {
    id: 'need_based_aid',
    title: '清寒子弟助学金与学杂费全免援助 (Need-Based Financial Aid)',
    badge: '华教初心 · 不让一人因贫失学',
    summary: '马来西亚华文独中核心立校宗旨：“不让任何一个华裔子弟因清寒而失学”。由董事会、校友会及善心人士专项信托基金设立。',
    coverage: '根据家庭经济情况资助 50% 至 100% 学费、常年发展基金、电脑费及午餐津贴，最高可达全免学杂费。',
    eligibility: '家庭月总收入在 RM 4,500 ~ 6,000 以下（视家庭抚养人口及特殊突发重症调整），品行良好，单亲或多子女在读优先。',
    maintenance_rule: '每学年考核一次，在校期间操行等第须达“乙等”以上，学期总平均成绩及格（通常 60% 以上）。',
    highlights: [
      '学校绝对严格保密申请人名单，杜绝任何标签化，全力保护学生自尊心。',
      '若家庭遭遇突发重大变故（如主要劳力失业、重疾或身故），可随时启动“紧急助学金机制”。',
      '全国每年有数以千计的独中学子受惠于董事会助学金顺利完成 6 年中学生涯。'
    ]
  },
  {
    id: 'textbook_loan_scheme',
    title: '清寒课本借贷计划 (Textbook Loan Scheme / SPBT 独中版)',
    badge: '节约教材开支 · 循环爱心',
    summary: '由校方图书馆或学生福利部主持，统筹回收上一届高年级整洁课本，统一免费借贷给清寒学子，全年免购新书。',
    coverage: '免费借用初中或高中全学年董总正版教科书、实验手册与参考书，每年直接为家庭节约 RM 450 ~ RM 850 课本开销。',
    eligibility: '成功获批清寒助学金之在校生，或家庭经济拮据且品行端正之学生。',
    maintenance_rule: '爱护图书，不得涂污毁损，学年末完整归还图书馆，以便传承给下一批初一学弟妹。',
    highlights: [
      '每年 12 月新学年迎新期间与助学金同步发放。',
      '极大减轻初一新生一次性购书负担。',
      '培养学子珍惜华教公共资源、知恩感恩与低碳环保的美德。'
    ]
  },
  {
    id: 'teacher_child_concession',
    title: '华小教师与独中教职员子女学杂费优惠 (Educator Family Concession)',
    badge: '尊师重道 · 惠泽杏坛',
    summary: '为感恩华小与华文独中一线教职员长期奉献华教，全国绝大部分独中均设有教职员子女就读学费优免条例。',
    coverage: '减免 50% 至 100% 教学学费（按各校董教条例），部分独中直系在职员工子女直接全免学杂费。',
    eligibility: '父母一方为马来西亚华小在职正式教师、独中在职教职员或全职华教机构工作者。',
    maintenance_rule: '学生在校守纪律、操行良好，每年提交父母学校任教证明信函即可直接延展。',
    highlights: [
      '极大降低华校教师家庭育儿成本，吸引优质教育人才投身母语教育。',
      '跨校通用：吉隆坡中华、宽柔、锺灵等均承认全马各州正规华小之在职教师证明。'
    ]
  },
  {
    id: 'sports_arts_scholarship',
    title: '体艺拔尖与领袖素养特长奖学金 (Sports & Arts Excellence)',
    badge: '全人素养 · 特长免试',
    summary: '鼓励在体育运动（球类、田径、武术）、音乐艺术（管乐、华乐、二十四节令鼓）或创客科技中斩获州际/国际大奖的卓越学子。',
    coverage: '减免 50% ~ 100% 学费，并优先入选校队特训营与国际出访交流资助。',
    eligibility: '在小学高年级代表州属参加全国 MSSM 学联运动会获前三名、国际青少年管乐比赛金奖或全国数理机器人竞赛冠军。',
    maintenance_rule: '在校期间积极代表学校出战各项全国独中球赛及校际汇演，持续保持优良训练风气。',
    highlights: [
      '让文武双全、才艺超群的学子不必担心因经济压力放弃特长发展。',
      '直通校队队长与学生领袖发展通道。'
    ]
  }
];

export const SCHOOL_FUND_PROFILES: SchoolFundProfile[] = [
  {
    school_id: 'chong-hwa-kl',
    school_name: '吉隆坡中华独立中学',
    state: '吉隆坡',
    annual_disbursement: '每年超过 RM 2,000,000 (二百万令吉)',
    beneficiary_count: '逾 450 名学子受惠',
    flagship_funds: ['中华光前堂信托基金', '李氏基金清寒奖助金', '隆中华雪隆校友会清寒助学金', '丹斯里林景清卓越新生奖学金'],
    merit_intake_quota: '入学试排名前 30 名全免初一全额学杂费，第 31-60 名减免半额学费。',
    need_based_quota: '家庭总收入低于 RM 5,000 可申请全免或半免学费；特困户另发每月伙食津贴。',
    textbook_loan_scheme: '中华图书馆特设“爱心课本贷书库”，为清寒生提供全套初中董总课本借贷。',
    hostel_subsidy: '外州清寒优异生可申请寄宿费专项津贴（每年最高 RM 2,400）。',
    special_notes: '吉隆坡中华建校百余年，校友捐款极为慷慨，校内任何因突发家庭变故的学生均可获即时免除当年学费。'
  },
  {
    school_id: 'foonyew-jb',
    school_name: '新山宽柔中学 (本部/古来/至达城三校)',
    state: '柔佛',
    annual_disbursement: '每年超过 RM 3,500,000 (三百五十万令吉)',
    beneficiary_count: '逾 800 名学子受惠',
    flagship_funds: ['宽柔清寒子弟助学金信托委员会', '黄羲初奖助学金', '新山宽柔校友会清寒基金', '宽中教职员子女福利金'],
    merit_intake_quota: '三校入学考试总分前 20 名获三年初中全免全额学杂费，第 21-50 名免除第一年全额学费。',
    need_based_quota: '半免及全免学费覆盖率居全马第一；针对柔南单亲家庭或多子女就读者特设梯度补助。',
    textbook_loan_scheme: '三校图书馆均设大型“爱心借书计划”，每年受惠学生逾 350 人。',
    hostel_subsidy: '古来及至达城分校配有清寒寄宿生膳宿特别扶持金。',
    special_notes: '宽柔中学拥有全马规模最大之华社助学信托网络，严格贯彻“不放弃任何一个孩子”之宽柔精神。'
  },
  {
    school_id: 'chung-ling',
    school_name: '槟城锺灵独立中学',
    state: '槟城',
    annual_disbursement: '每年约 RM 1,500,000 (一百五十万令吉)',
    beneficiary_count: '逾 220 名学子受惠',
    flagship_funds: ['锺灵百年校庆奖助基金', '中马锺灵校友会助学金', '槟城锺灵董事会清寒助学金', '北美及全球锺灵校友联谊奖学金'],
    merit_intake_quota: '新生入学甄选前 15 名免初一全免学杂费，数理单科全国冠军另发高额竞赛奖学金。',
    need_based_quota: '资助额度涵盖 50% 至 100% 学杂费，全马或海外校友会定点定向结对资助。',
    textbook_loan_scheme: '全套中学教材借贷，连带免除实验室仪器使用费。',
    hostel_subsidy: '为外州及东马远道求学拔尖清寒生特设“全免宿舍床位金”。',
    special_notes: '锺灵校友凝聚力享誉全球，海外学长姐设立专项 Endowment Fund 永续支持母校清寒子弟。'
  },
  {
    school_id: 'kuen-cheng',
    school_name: '坤成中学',
    state: '吉隆坡',
    annual_disbursement: '每年超过 RM 1,800,000 (一百八十万令吉)',
    beneficiary_count: '逾 260 名学子受惠',
    flagship_funds: ['坤成百年校庆助学基金', '丹斯里李深静纪念助学金', '坤成校友会爱心清寒基金'],
    merit_intake_quota: '入学试排名前 20 名优胜者，获免初一全年学费。',
    need_based_quota: '家庭人均月收入低于 RM 1,200 者可申请全额学费免除。',
    textbook_loan_scheme: '提供英语理科高阶教材与董总课本借书支援。',
    hostel_subsidy: '无宿舍（全走读）。提供公共交通（LRT/MRT）学生车资交通补贴。',
    special_notes: '坐落吉隆坡市中心，坤成校友与董事会资助体系完善，特别关注单亲妈妈家庭助学。'
  },
  {
    school_id: 'hin-hua',
    school_name: '巴生兴华中学',
    state: '雪兰莪',
    annual_disbursement: '每年超过 RM 1,600,000 (一百六十万令吉)',
    beneficiary_count: '逾 280 名学子受惠',
    flagship_funds: ['李成智清寒助学金', '巴生兴华董事会教育基金', '兴华校友会励志清寒奖金'],
    merit_intake_quota: '入学考总排名前 20 名直接全免初一全额学杂费。',
    need_based_quota: '清寒生获资助 50% 至 100% 学费，并获免缴高科技数字化校园管理费。',
    textbook_loan_scheme: '校内义工团统筹正版二手课本发放计划。',
    hostel_subsidy: '特困寄宿生享有学生公寓宿费半免优惠。',
    special_notes: '兴华办学透明，资助流程公开严密，资助金受惠生在校学术表现极为优异。'
  },
  {
    school_id: 'chunghua-seremban',
    school_name: '芙蓉中华中学',
    state: '森美兰',
    annual_disbursement: '每年超过 RM 2,200,000 (二百二十万令吉)',
    beneficiary_count: '逾 350 名学子受惠 (含大量寄宿生)',
    flagship_funds: ['李典和校友清寒学费及宿舍基金', '芙中董事会奖助金', '校友会全球芙中人助学网'],
    merit_intake_quota: '入学试成绩前 30 名全免初一学杂费，前 10 名加码免除一年宿舍冷气房宿费。',
    need_based_quota: '针对外州清寒学子特别提供“学费全免 + 宿舍全免 + 食堂包餐”全包式重磅助学金！',
    textbook_loan_scheme: '图书馆全套教科书免费出借，优先面向外州寄宿生。',
    hostel_subsidy: '外州寄宿清寒补贴力度居全国独中前列，李典和先生专项基金长期兜底。',
    special_notes: '外州家庭经济有困难但孩子渴望自立寄宿求学的首选名校！'
  },
  {
    school_id: 'pay-fong',
    school_name: '马六甲培风中学',
    state: '马六甲',
    annual_disbursement: '每年约 RM 1,300,000 (一百三十万令吉)',
    beneficiary_count: '逾 200 名学子受惠',
    flagship_funds: ['培风百年鹏飞清寒助学金', '培风董事会仁爱基金', '马六甲华社各宗乡会助学团'],
    merit_intake_quota: '入学考前 15 名免初一学杂费，华小模范生推荐全免。',
    need_based_quota: '分半免与全免两档，并专设单亲家庭与多子女同校就读折扣。',
    textbook_loan_scheme: '培风书坊设立爱心图书漂流与教科书免费借调通道。',
    hostel_subsidy: '提供综合大楼宿舍清寒补贴。',
    special_notes: '培风为古城华教摇篮，历年受到甲州及柔北（麻坡、东甲）华社广泛捐助。'
  },
  {
    school_id: 'tsung-tsin',
    school_name: '沙巴崇正中学',
    state: '沙巴',
    annual_disbursement: '每年约 RM 1,200,000 (一百二十万令吉)',
    beneficiary_count: '逾 180 名学子受惠',
    flagship_funds: ['刘玉波基金清寒助学金', '沙巴崇正董事会关怀基金', '亚庇客家公会学业奖金'],
    merit_intake_quota: '沙巴州华小学生前三名免试保送并享全额学费免除。',
    need_based_quota: '覆盖沙巴各小镇及原住民华侨清寒生全额学费及电脑费。',
    textbook_loan_scheme: '沙巴崇正学长团设立全套免租借书库。',
    hostel_subsidy: '内陆小镇学生专享宿舍资助计划。',
    special_notes: '东马旗舰名校，深受亚庇客家公会与慈善财团支持。'
  }
];

export const EXTERNAL_FOUNDATIONS: ExternalFoundation[] = [
  {
    name: '郭氏基金 (Kuok Foundation)',
    founder_or_org: '马来西亚糖王郭鹤年家族慈善信托',
    coverage_amount: '每年提供高达 RM 3,000 ~ RM 6,000 助学金，覆盖全额学费与生活补贴',
    target_beneficiaries: '马来西亚各独中清寒初高中生、家境贫困但品学兼优者',
    application_window: '每年 6 月至 8 月通过各独中教务处或郭氏基金官网申报',
    official_criteria: [
      '家庭月总收入在 RM 5,000 以下（多抚养人口家庭优先考虑）。',
      '上一学年考试平均成绩不低于 65 分，操行等级须在“乙等”以上。',
      '受资助学生毕业后无任何绑定服役条件，仅倡导心怀感恩、回馈社会。'
    ],
    contact_or_apply_link: 'https://kuokfoundation.com'
  },
  {
    name: '董总清寒学生助学金 (Dong Zong Financial Aid)',
    founder_or_org: '马来西亚华校董事联合会总会 (董总)',
    coverage_amount: '每年每人补助 RM 2,000 ~ RM 3,500',
    target_beneficiaries: '全国 63 所华文独中正式注册在籍清寒学生',
    application_window: '每年 7 月至 9 月由各校校长室统一审核后呈交董总秘书处',
    official_criteria: [
      '家境清寒，父母无固定经济收入或遭遇意外伤害失去劳动能力。',
      '学生品行良好、尊敬师长、在校无重大违纪处分记录。',
      '经由所在独中校方核实家访情况后出具正式保荐函。'
    ],
    contact_or_apply_link: 'https://www.dongzong.my'
  },
  {
    name: '公益金 (The Community Chest)',
    founder_or_org: '马来西亚多位华人企业家与企业联合慈善平台',
    coverage_amount: '专项资助学校软硬件改善及特困家庭子女学杂费托底',
    target_beneficiaries: '全国各源流华校与华文独中',
    application_window: '常年通过校方董事会专案申请',
    official_criteria: [
      '优先资助乡村型或中小型独中资源匮乏地区学生。',
      '确保每一分善款直接划拨至学校学生学费账目，透明合规。'
    ],
    contact_or_apply_link: 'https://tcc.org.my'
  },
  {
    name: '全国各大华人会馆与姓氏宗亲会 (Clan Associations)',
    founder_or_org: '雪隆福建会馆、柔佛潮州八邑会馆、客家公会、广东会馆及各姓氏宗亲会',
    coverage_amount: '每年颁发 RM 500 ~ RM 2,000 会员子女奖助学金',
    target_beneficiaries: '会员及同乡子女就读独中者',
    application_window: '每年 7 月至 11 月按各会馆春祭/秋祭或周年庆典前开放',
    official_criteria: [
      '父母一方为所属会馆/宗亲会正式会员。',
      '学生统考或在校成绩优异，或家庭突遭变故需清寒救济。',
      '会馆遍布全马各地城镇，申请门槛亲切，是独中生极佳的补充资助来源。'
    ],
    contact_or_apply_link: '向居住地所属会馆直接咨询'
  }
];

export const FINANCIAL_AID_APPLICATION_STEPS = [
  {
    step: '01',
    title: '查阅各校助学金简章与截止日期',
    details: '每年新生注册缴费期间（通常在放榜后 7-14 天内，或开学首月 1 月中旬），各校教务处或学生福利处会发布清寒助学金申请通告。'
  },
  {
    step: '02',
    title: '准备家庭收入与资产证明材料',
    details: '父母近 3 个月工资单 (Payslip)、所得税申报表 (EA Form / Borang B/BE)、无固定收入者由村长/华小校长签署之宣誓证明信，以及近 2 个月家庭水电费账单。'
  },
  {
    step: '03',
    title: '提交正式申请表与品行证明',
    details: '填写校方标准《清寒子弟助学金申请书》，附上华小毕业证书、在校六年级成绩单副本及操行评定表。'
  },
  {
    step: '04',
    title: '校方审核与家访/面谈核实',
    details: '各独中学生福利委员会或舍监进行材料审核。针对特困案例，校方辅导老师或家协执委会进行温情家访或电话面谈。'
  },
  {
    step: '05',
    title: '批准公示与学杂费直接冲抵',
    details: '审核通过后，获批金额直接在每个月的学杂费缴费通知单中抵扣，学生无须垫付学费，全程高度保密。'
  }
];
