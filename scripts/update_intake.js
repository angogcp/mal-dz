const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, '../src/data/schoolsData.ts');
let code = fs.readFileSync(targetFile, 'utf8');

// Update foonyew-jb
code = code.replace(/admission_intake: \{[\s\S]*?result_release_date: "2026-09-28"\s*\}/, 
`admission_intake: {
      intake_year: 2026,
      registration_start: "2026-06-01",
      registration_deadline: "2026-08-30",
      entrance_exam_date: "2026-09-19",
      exam_subjects: ["华文", "国文", "英文", "数学"],
      exam_format: "四科各占100分，依据华小高年段课程标准出题，闭卷笔试",
      exam_venue: "新山宽中本部、古来分校、至达城分校三校同步",
      admission_mode: "宽柔三校联合初一甄拔考试（按总分择优录取，不设公开免试）",
      direct_admission_criteria: [
        "不设校外无条件免试直录（全员统一参加入学甄拔考试）",
        "宽柔直属华小特定品学兼优保送推荐名额",
        "华小全级第一名且入学试达标者特颁新生荣誉奖"
      ],
      result_release_date: "2026-09-28",
      registration_payment_deadline: "2026-10-08",
      scholarship_quota: "入学考成绩第1至10名免初一至高三全额学费；第11至50名免初一全年学费"
    }`);

// Update chonghwa-kl
code = code.replace(/admission_intake: \{[\s\S]*?result_release_date: "2026-10-12"\s*\}/,
`admission_intake: {
      intake_year: 2026,
      registration_start: "2026-06-01",
      registration_deadline: "2026-09-15",
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
    }`);

// Update kuencheng-kl
code = code.replace(/school_id: "kuencheng-kl"[\s\S]*?admission_intake: \{[\s\S]*?exam_subjects: \["华文", "国文", "英文", "数学"\]\s*\}/, (match) => {
  return match.replace(/admission_intake: \{[\s\S]*?\}/, `admission_intake: {
      intake_year: 2026,
      registration_start: "2026-06-01",
      registration_deadline: "2026-09-10",
      entrance_exam_date: "2026-09-26",
      exam_subjects: ["华文", "国文", "英文", "数学"],
      exam_format: "四科联考，英文与数学设深度应用题，注重国际视野",
      admission_mode: "成绩达标免试保送 + 入学甄拔考试",
      direct_admission_criteria: [
        "华小五年级全年及六年级上半年四科总平均达 85 分以上免试直录",
        "华小学校长具函保送推荐的优秀模范毕业生（限额审核）",
        "全国数理竞赛金奖、三语演讲或国际机器人赛优胜者保送"
      ],
      result_release_date: "2026-10-06",
      registration_payment_deadline: "2026-10-16",
      dorm_application_deadline: "2026-10-15 (限女生及外州优异男生申请)",
      scholarship_quota: "入学试排名前 20 名获初一年学费全免奖学金"
    }`);
});

// Update tsunjin-kl
code = code.replace(/school_id: "tsunjin-kl"[\s\S]*?fit_tags:/, (match) => {
  if (match.includes('admission_intake:')) {
    return match.replace(/admission_intake: \{[\s\S]*?\}/, `admission_intake: {
      intake_year: 2026,
      registration_start: "2026-06-01",
      registration_deadline: "2026-09-12",
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
    }`);
  } else {
    return match.replace(/fit_tags:/, `admission_intake: {
      intake_year: 2026,
      registration_start: "2026-06-01",
      registration_deadline: "2026-09-12",
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
    fit_tags:`);
  }
});

// Update hinhua-klang
code = code.replace(/school_id: "hinhua-klang"[\s\S]*?admission_intake: \{[\s\S]*?exam_subjects: \["华文", "国文", "英文", "数学"\]\s*\}/, (match) => {
  return match.replace(/admission_intake: \{[\s\S]*?\}/, `admission_intake: {
      intake_year: 2026,
      registration_start: "2026-06-01",
      registration_deadline: "2026-09-12",
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
    }`);
});

// Update chunghua-seremban
code = code.replace(/school_id: "chunghua-seremban"[\s\S]*?admission_intake: \{[\s\S]*?exam_subjects: \["华文", "国文", "英文", "数学"\]\s*\}/, (match) => {
  return match.replace(/admission_intake: \{[\s\S]*?\}/, `admission_intake: {
      intake_year: 2026,
      registration_start: "2026-06-01",
      registration_deadline: "2026-09-20",
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
    }`);
});

// Update chungling-penang
code = code.replace(/school_id: "chungling-penang"[\s\S]*?admission_intake: \{[\s\S]*?exam_subjects: \["华文", "国文", "英文", "数学"\]\s*\}/, (match) => {
  return match.replace(/admission_intake: \{[\s\S]*?\}/, `admission_intake: {
      intake_year: 2026,
      registration_start: "2026-06-01",
      registration_deadline: "2026-09-15",
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
    }`);
});

// Update sanmin-telukintan
code = code.replace(/school_id: "sanmin-telukintan"[\s\S]*?admission_intake: \{[\s\S]*?exam_subjects: \["华文", "国文", "英文", "数学"\]\s*\}/, (match) => {
  return match.replace(/admission_intake: \{[\s\S]*?\}/, `admission_intake: {
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
    }`);
});

// Update tshungtsin-kk
code = code.replace(/school_id: "tshungtsin-kk"[\s\S]*?admission_intake: \{[\s\S]*?exam_subjects: \["华文", "国文", "英文", "数学"\]\s*\}/, (match) => {
  return match.replace(/admission_intake: \{[\s\S]*?\}/, `admission_intake: {
      intake_year: 2026,
      registration_start: "2026-06-01",
      registration_deadline: "2026-09-15",
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
      scholarship_quota: "入学考前 15 名获初一学费全免奖励"
    }`);
});

// Update chms1-kuching
code = code.replace(/school_id: "chms1-kuching"[\s\S]*?academic_highlights:[\s\S]*?fit_tags:/, (match) => {
  if (match.includes('admission_intake:')) {
    return match;
  }
  return match.replace(/fit_tags:/, `admission_intake: {
      intake_year: 2026,
      registration_start: "2026-06-01",
      registration_deadline: "2026-09-30",
      entrance_exam_date: "2026-10-10",
      exam_subjects: ["华文", "国文", "英文", "数学"],
      admission_mode: "校长保送直通 + 统一评估试",
      direct_admission_criteria: [
        "古晋属下华小校长推荐信直接保送免试录取",
        "华小五、六年级各科平均达标者免试直录",
        "享有砂拉越州政府特别奖助学金资助"
      ],
      result_release_date: "2026-10-20",
      registration_payment_deadline: "2026-10-31"
    },
    fit_tags:`);
});

// Update chonghwa-kuantan
code = code.replace(/school_id: "chonghwa-kuantan"[\s\S]*?admission_intake: \{[\s\S]*?exam_subjects: \["华文", "国文", "英文", "数学"\]\s*\}/, (match) => {
  return match.replace(/admission_intake: \{[\s\S]*?\}/, `admission_intake: {
      intake_year: 2026,
      registration_start: "2026-06-01",
      registration_deadline: "2026-09-30",
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
      dorm_application_deadline: "2026-10-28"
    }`);
});

fs.writeFileSync(targetFile, code, 'utf8');
console.log('Successfully updated schoolsData.ts with detailed admission & direct criteria!');
