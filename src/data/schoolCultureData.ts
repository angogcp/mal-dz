export interface SchoolCulture {
  school_motto: string;
  ethos_and_spirit: string;
  flagship_features: string[];
  flagship_clubs: string[];
  campus_facilities: string[];
  notable_alumni: string[];
  matriculation_highlights: string;
  hero_image?: string;
  caption?: string;
}

export const SCHOOL_CULTURE_MAP: Record<string, SchoolCulture> = {
  // ===================== 1. 柔佛州 (10所) =====================
  'foonyew-jb': {
    school_motto: '礼、义、廉、耻',
    ethos_and_spirit: '爱我宽柔，造福人群。全马规模最大之华文学府，校风严谨肃穆，敬师爱友，学生自治自律传统深厚，乃华教万里长城最坚固之基石。',
    flagship_features: ['全马学生规模最大独立中学', '纯统考单轨制旗帜名校', '海内外庞大校友互助网络', '新马华社公立办学典范', '多元化奖助学金覆盖'],
    flagship_clubs: ['二十四节令鼓队 (发源摇篮之一)', '宽中管乐团 (国际交响大赛金奖)', '华乐团', '弦乐团', '红新月会', '武术团', '戏剧社', '合唱团'],
    campus_facilities: ['宽柔大礼堂', '校史与宽柔文物馆', '陈徽崇音乐活动中心', '现代化冷气综合图书馆', '标准400米跑道田径场', '冷气多媒体多功能课室'],
    notable_alumni: ['陈徽崇 (国家文化人物、二十四节令鼓创办人之一)', '郭鹤年家族母校渊源', '各界国州议员、科学家、大学教授及跨国企业家'],
    matriculation_highlights: '统考成绩常年名列全国前茅，毕业生广泛保送或直升新加坡国立大学 (NUS)、南洋理工 (NTU)、清华北大、台湾台成清交及欧美英澳名校。',
    hero_image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Foon_Yew_High_School_Library.jpg?width=800',
    caption: '新山宽柔中学校本部宏伟图书馆与滨海校区建筑'
  },
  'foonyew-kulai': {
    school_motto: '礼、义、廉、耻',
    ethos_and_spirit: '传承宽柔百年薪火，弘扬自强不息精神。校园占地广袤依山傍翠，学风质朴踏实，重视科学探究、人文关怀与体育强身。',
    flagship_features: ['占地宽广之花园式现代化校园', '三语并重与理科探究强项', '纪律严明与寄宿生活自立', '宽柔联考同等优质教学质量'],
    flagship_clubs: ['古来宽中管乐团', '二十四节令鼓队', '华乐团', '童军团', '机器人创客社', '舞蹈团'],
    campus_facilities: ['大型多功能冷气礼堂', '综合体育馆与室内羽球馆', '冷气标准化学生男女宿舍大楼', '科技大楼与数理实验室', '多功能学术报告厅'],
    notable_alumni: ['各界医学、工程及数码科技领军人才', '新马知名企业家与教育工作者'],
    matriculation_highlights: '单轨制统考学业优异，历届优秀生深受中国、台湾、新加坡及澳洲顶尖大学争相录用并获丰厚奖学金。',
    hero_image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Foon_Yew_High_School_Library.jpg?width=800',
    caption: '宽柔中学现代化教学楼与林荫大道'
  },
  'foonyew-bsa': {
    school_motto: '礼、义、廉、耻',
    ethos_and_spirit: '宽柔第三校区，融合现代智慧科技与百年人文底蕴。崇尚求实创新，打造绿色数码学习生态。',
    flagship_features: ['全智能数字多媒体教室', '全冷气绿色环保现代化校舍', '高起点师资与宽柔统一教务', '紧密对接柔南科技与工业走廊'],
    flagship_clubs: ['智能机器人科创社', '华乐团', '管乐团', '二十四节令鼓队', '辩论社', '美术与设计学会'],
    campus_facilities: ['智慧教学综合大楼', '现代综合大礼堂', '标准化室内运动场馆', '智能数字化智慧图书馆', '科技创新中心'],
    notable_alumni: ['新一代科创新锐青年与杰出学子'],
    matriculation_highlights: '承继新山校本部优质课程传统，三语水平全面均衡，直通全球顶尖高校。',
    hero_image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Foon_Yew_High_School_Library.jpg?width=800',
    caption: '宽柔中学至达城分校高科技智慧建筑全貌'
  },
  'chonghwa-kluang': {
    school_motto: '礼、义、廉、耻',
    ethos_and_spirit: '敦品励学，居安思危。居銮华社精神堡垒，兼收中西文化精华，重视全人品格陶冶与艺体全面发展。',
    flagship_features: ['柔中历史悠久名校', '文理商美术技职多轨并蓄', '美工科与电工科技艺享誉全国', '寄宿生自治关怀管理到位'],
    flagship_clubs: ['銮中二十四节令鼓', '华乐团', '管乐团', '美术学会', '扯铃社', '武术醒狮团'],
    campus_facilities: ['光前教学大楼', '艺术馆与美术设计展厅', '多功能冷气大礼堂', '大型学生男女宿舍楼', '标准大操场'],
    notable_alumni: ['国际知名艺术家、建筑设计师', '政商两界杰出侨领与学术专家'],
    matriculation_highlights: '学术统考与技职统考双双名列全国前列，美术与电工毕业生在台湾、新加坡及海外高等学府深受欢迎。'
  },
  'chunghwa-muar': {
    school_motto: '礼、义、廉、耻',
    ethos_and_spirit: '麻坡文化城明珠，百年树人芬芳桃李。重视中华礼仪，推行三语并重，人文气息醇厚。',
    flagship_features: ['逾百年办学深厚底蕴', '麻河畔人文标志学府', '统考数理与商科稳健优异', '华社支持与丰富奖助学金'],
    flagship_clubs: ['中化二十四节令鼓', '华乐团', '管乐团', '戏剧社', '辩论社', '童军团'],
    campus_facilities: ['中化大礼堂', '世纪演艺厅', '文物校史馆', '多媒体科技教学中心', '全冷气图书馆'],
    notable_alumni: ['新马各界商界翘楚、文化学者及慈善贤达'],
    matriculation_highlights: '历年众多毕业生直升中台新欧顶尖学府，学术声誉响彻柔北。'
  },
  'peichun-pontian': {
    school_motto: '礼、义、廉、耻',
    ethos_and_spirit: '笨珍华教中流砥柱，自强弘毅。依傍生态红树林水乡，环境静谧适宜求学，师生互爱亲睦如家。',
    flagship_features: ['生态花园式寄宿校园', '关怀小班化师资辅导', '纯朴踏实校风', '住宿生活自律规范'],
    flagship_clubs: ['培群鼓队', '华乐团', '扯铃社', '红新月会', '美术学会'],
    campus_facilities: ['吴如思综合大楼', '现代化男女学生宿舍', '冷气大礼堂', '图书资讯大楼', '生态园'],
    notable_alumni: ['工程、农科、商业各领域骨干英才'],
    matriculation_highlights: '毕业生升学率连年提升，为大马各界输送大量踏实有为的专业青年。'
  },
  'chsbp-batupahat': {
    school_motto: '礼、义、廉、耻',
    ethos_and_spirit: '仁者不忧，勇者不惧。华仁中学植根峇株巴辖伏龙山下，学风自由宽容，重视哲学思辨、艺术美育与文学创作。',
    flagship_features: ['独树一帜之人文艺术沃土', '重视自主探究思辨精神', '山峦掩映之优美自然生态校园', '优质传统美工与设计班'],
    flagship_clubs: ['华仁华乐团', '管乐团', '二十四节令鼓', '戏剧社 (常年全国赛大奖)', '吉他社', '舞蹈团'],
    campus_facilities: ['一力厅与伏龙山露天剧场', '校史艺术馆', '综合多媒体图书馆', '标准大礼堂', '男女宿舍楼'],
    notable_alumni: ['著名马华文学作家、诗人、导演与文化学者', '海内外资深建筑师与商业领袖'],
    matriculation_highlights: '学术与艺术双轨开花，毕业生广泛升向欧美两岸三地顶尖文理大学。'
  },
  'peihwa-tangkak': {
    school_motto: '礼、义、廉、耻',
    ethos_and_spirit: '地处柔北利丰港，校风敦厚坚韧。在华社爱护下一砖一瓦建立现代化校舍，培养勤劳质朴有社会担当之青年。',
    flagship_features: ['淳朴踏实的乡镇大爱学府', '小班关怀育人模式', '住宿生生活全面照拂', '积极引入数码现代教育'],
    flagship_clubs: ['醒狮与武术团', '二十四节令鼓', '华乐团', '电脑创客社'],
    campus_facilities: ['综合教学大楼', '冷气综合礼堂', '学生宿舍楼', '电脑室与科学实验室'],
    notable_alumni: ['柔北工商业界中坚力量及杰出教育工作者'],
    matriculation_highlights: '坚持三语并重与实用技能，海内外大学升学通路顺畅。'
  },
  'sinhwa-rengit': {
    school_motto: '礼、义、廉、耻',
    ethos_and_spirit: '小而精、小而美。立足新加兰渔米之乡，坚守母语教育灯火，关怀每位学生潜能发展。',
    flagship_features: ['紧密关怀型师生关系', '注重品德礼节养成', '丰富的社区服务与乡土体验'],
    flagship_clubs: ['中华醒狮团', '节令鼓队', '羽球社', '童军团'],
    campus_facilities: ['行政教学楼', '冷气礼堂', '图书馆与多媒体教室'],
    notable_alumni: ['地方社区商业贤达与专业人士'],
    matriculation_highlights: '毕业生升学及就业表现优良，深得本地及海外友好大学关照。'
  },
  'yongpeng-high': {
    school_motto: '勤、勇、忠、信',
    ethos_and_spirit: '永平精神，力争上游。近年来积极推进数字化转型与国际接轨，校园焕然一新，学风朝气蓬勃。',
    flagship_features: ['积极推展国际语言与科技课程', '校舍全面升级现代化冷气环境', '小班互动多媒体教学', '全额保送与奖助学金制度完善'],
    flagship_clubs: ['科技创新社', '节令鼓队', '华乐团', '舞蹈社', '戏剧社'],
    campus_facilities: ['全新智慧教学大厦', '现代化综合礼堂', '数码图书馆', '学生公寓宿舍'],
    notable_alumni: ['新一代海内外留学青年与创新创业企业家'],
    matriculation_highlights: '广泛开拓台湾、中国大陆、新加坡及英国大学直接对接升学途径。'
  },

  // ===================== 2. 吉隆坡 (4所) =====================
  'chonghwa-kl': {
    school_motto: '礼、义、廉、耻',
    ethos_and_spirit: '做人讲诚信，做事重创新，做学问求严谨。隆中华校风庄严大气，学风深厚，文理兼备，高思维学术实力享誉全马，是全国独中教育一面鲜明的旗帜。',
    flagship_features: ['全马统考成绩与全国名次常年居冠', '双轨制学术卓越标杆 (UEC + SPM 双修双赢)', '高思维理科实验班与创新实验课', '光前堂百年名校宏伟气象', '保送清华北大及全球Top 50名校名列前茅'],
    flagship_clubs: ['二十四节令鼓队 (声震全国名团)', '中华华乐团 (常年全国金奖)', '管乐团', '机器人创客社 (国际金牌)', '辩论社 (精英殿堂)', '弦乐团', '女童军/男童军'],
    campus_facilities: ['宏伟光前堂大礼堂', '国字型现代化综合教学楼群', '中华联课科技活动中心', '全冷气智慧多媒体教室', '标准塑胶跑道大运动场', '大型藏书综合图书馆'],
    notable_alumni: ['海鸥集团创办人陈凯希', '各界学术界顶级学者、国际科研科学家、著名医师与政商领袖'],
    matriculation_highlights: '每年大量毕业生获清华大学、北京大学、复旦、台大、新国大(NUS)、南大(NTU)、香港大学、英国帝国理工与爱丁堡大学全奖/优录。',
    hero_image: 'https://commons.wikimedia.org/wiki/Special:FilePath/%E5%90%89%E9%9A%86%E5%9D%A1%E4%B8%AD%E5%8D%8E%E7%8B%AC%E7%AB%8B%E4%B8%AD%E5%AD%A6.jpg?width=800',
    caption: '吉隆坡中华独立中学光前堂与现代化综合校区'
  },
  'kuencheng-kl': {
    school_motto: '德、智、体、群、美',
    ethos_and_spirit: '温雅独立，自信从容。百年名校转型现代化卓越学府，倡导探究式自主学习与全人素养。三语环境浓厚，兼具国际开阔视野与中华传统美德。',
    flagship_features: ['全马领先之全冷气现代高规格智慧校园', '浓郁优越之英语学习与国际交流环境', '全人素养与审美艺术浸润', '双轨教育成果丰硕 (统考与SPM兼优)', '升学英美澳加等国际顶尖名校比率极高'],
    flagship_clubs: ['坤成弦乐团 (享誉海内外)', '华乐团', '坤成合唱团', '模拟联合国社 (Model UN)', '辩论社', '环保科技社', '舞蹈团'],
    campus_facilities: ['现代化高规格全冷气教学综合楼群', '多功能现代化大礼堂', '大型数字化藏书阅览中心', '现代化室内体育综合馆', '先进科学与生物探究实验室'],
    notable_alumni: ['国际著名医学专家、跨国法律界翘楚、著名企业高管及海内外杰出女性领袖'],
    matriculation_highlights: '除中台新顶尖大学外，坤成毕业生广泛受到英国罗素集团 (剑桥/IC/UCL/LSE)、澳洲八大 (墨尔本/悉尼) 及北美顶尖高校青睐。',
    hero_image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Kuen_Cheng_High_School_(211030).jpg?width=800',
    caption: '吉隆坡坤成中学现代化教学楼群与综合建筑'
  },
  'tsunjin-kl': {
    school_motto: '公、诚、勤、毅',
    ethos_and_spirit: '严谨治学，修己善群。循人中学坐落市中心皇宫坡旁，学风谨严扎实，数理逻辑底蕴深厚，礼仪与自律教育名闻遐迩，师生关系亲密融洽。',
    flagship_features: ['数理思维与电子计算机教育传统强项', '标准化智能考务与信息化教学先锋', '礼仪品格养成与学生日常自律标杆', '双轨制统考成绩名列全国前列'],
    flagship_clubs: ['循人华乐团', '管乐团', '二十四节令鼓队', '电脑科技研习社', '戏剧白话社', '辩论社', '少年警察团'],
    campus_facilities: ['循人大礼堂', '数码化多媒体演艺厅', '冷气全覆盖教学大楼', '高标准电脑与科技教室', '全功能图书与阅览中心'],
    notable_alumni: ['科技互联网领域技术大咖、高科技创业领军人物、金融精算名师'],
    matriculation_highlights: '毕业生学术严谨受广泛赞誉，直升新马两岸三地及欧美大学理工科、商科表现极为亮眼。',
    hero_image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Tsun_Jin_High_School_Main_Building.jpg?width=800',
    caption: '吉隆坡循人中学教学主楼与校园全景'
  },
  'confucian-kl': {
    school_motto: '勤、朴、勇、毅',
    ethos_and_spirit: '承续孔子“有教无类”办学理念，百年风骨历久弥坚。矗立于茨厂街中华文化发祥地，崇尚思想自由、包容多元与人文关怀，注重扶持弱小与社会责任。',
    flagship_features: ['1906年创校，大马最古老独中之一', '新综合大楼落成，硬件环境全面飞跃', '高思维特理班与技职美术班兼容并蓄', '深植历史底蕴与强烈族群文化担当'],
    flagship_clubs: ['尊孔二十四节令鼓队', '华乐团', '戏剧社', '醒狮团', '美术与陶艺学会', '辩论社'],
    campus_facilities: ['全新落成现代化综合教学大楼', '尊孔百年校史馆', '多功能大礼堂', '美术设计专科教室', '冷气图书馆'],
    notable_alumni: ['大马政界、文化界、艺术设计界及华社历史重要领军人物'],
    matriculation_highlights: '学术与技职升学双轨畅通，众多美术班学子赴中台英澳顶尖设计艺术院校深造。',
    hero_image: 'https://commons.wikimedia.org/wiki/Special:FilePath/ChineseIndependentHighSchool003.jpg?width=800',
    caption: '吉隆坡尊孔独立中学百年校舍建筑与崭新综合大楼'
  },

  // ===================== 3. 雪兰莪州 (4所) =====================
  'hinhua-klang': {
    school_motto: '礼、义、廉、耻',
    ethos_and_spirit: '弘毅自强，开拓创新。以科技与人文并重为办学特色，推行学生自主自律成长计划。校园现代设施齐备，充满探索与思辨活力。',
    flagship_features: ['十层现代人文科技大楼与专业天文台', '全马统考顶尖学术梯队名校', '三语并重与扎实思辨素养', '管乐、华乐与节令鼓享誉国际'],
    flagship_clubs: ['兴华管乐团 (国际金奖名团)', '华乐团', '二十四节令鼓队', '天文科创社 (全国独一无二校内专业天文台)', '舞蹈团', '辩论社'],
    campus_facilities: ['十层人文科技大楼', '校内专业天文台与数字星象馆', '全冷气多功能大礼堂', '室内温水游泳池与综合球场', '现代化男女学生宿舍楼群'],
    notable_alumni: ['杨忠礼机构 (YTL) 创办人丹斯里杨忠礼', '各界科创企业家、知名医生及大学教授'],
    matriculation_highlights: '每年百余位毕业生直录世界排名前百顶尖大学，清华、北大、新加坡NUS/NTU录用人数稳居全国前列。',
    hero_image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Exterior_of_Hin_Hua_high_school%2C_Malaysia.jpg?width=800',
    caption: '巴生兴华中学十层人文科技大楼与现代校区'
  },
  'pinhua-klang': {
    school_motto: '勤、勇、忠、信',
    ethos_and_spirit: '全面贯彻“7个习惯领导力”理念 (The 7 Habits)。校园现代化程度极高，注重英语浸润、国际视野与未来领导力培育。',
    flagship_features: ['全马首所引入7个习惯高效能领导力体系独中', '全校冷气现代化智慧校舍与五星宿舍', '英语综合应用与国际课程对接走在前列', '统考与国际升学双向丰硕'],
    flagship_clubs: ['滨华管乐团', '华乐团', '二十四节令鼓', '领导力培育研习社', '辩论社', '机器人与编程社'],
    campus_facilities: ['现代化李平福综合大楼', '高星级标准学生男女宿舍楼', '室内全冷气体育馆', '数码化多功能报告厅', '松木风雅图书馆'],
    notable_alumni: ['海内外跨国商界领袖、科技创新精英与杰出金融专家'],
    matriculation_highlights: '毕业生兼具扎实三语能力与领导风范，在欧美、澳洲、新加坡及两岸三地大学表现亮丽。'
  },
  'chunghua-klang': {
    school_motto: '公、诚、勤、毅',
    ethos_and_spirit: '平实务实，砥砺前行。立足巴生皇城，推行小班制关怀关爱教学，重视师生互动与全人品格培养。',
    flagship_features: ['历史悠久之皇城文化学府', '推行双轨升学体系 (统考 + SPM)', '扎实有温度之学生辅导关怀机制', '外州寄宿生温馨大家庭文化'],
    flagship_clubs: ['中华二十四节令鼓', '华乐团', '醒狮团', '童军团', '红新月会', '美术学会'],
    campus_facilities: ['综合教学大楼', '冷气大礼堂', '冷气学生宿舍楼', '物理化学生物实验室', '大操场'],
    notable_alumni: ['雪隆工商业骨干、资深工程师与文化教育工作者'],
    matriculation_highlights: '升学途径通畅，受大马华裔家庭长期信赖。'
  },
  'kwanghua-klang': {
    school_motto: '诚、毅',
    ethos_and_spirit: '光华常照，自强不息。依傍巴生河畔，校舍现代巍峨。重视科学教育与文化体育活动，学生淳朴上进。',
    flagship_features: ['现代高耸教学大楼与开阔视野', '双轨制教学质量稳健', '重视体育精神与强健体魄', '学费亲民与华社资助充足'],
    flagship_clubs: ['光华二十四节令鼓', '管乐团', '华乐团', '篮球校队 (全州冠亚军常客)', '舞蹈社', '科学学会'],
    campus_facilities: ['新落成宏伟教学大楼', '现代化大礼堂', '室内综合体育馆', '现代化科技实验室', '学生自习室'],
    notable_alumni: ['商业实业家、专业建筑工程师与体育名将'],
    matriculation_highlights: '各科统考成绩扎实，历届毕业生普遍升入台湾、中国大陆、新加坡及本地顶尖大专。'
  },

  // ===================== 4. 森美兰州 (2所) =====================
  'chunghua-seremban': {
    school_motto: '礼、义、廉、耻',
    ethos_and_spirit: '依山筑梦，傲骨迎风。百年学府矗立芙蓉半山，风景秀丽空气清新。校风质朴坚毅，寄宿管理经验超半世纪，是全马最具代表性的寄宿制名校之一。',
    flagship_features: ['百年名校依山而建，全马著名寄宿学府', '容纳超千名外州寄宿生之现代化公寓宿舍', '多轨制因材施教 (理科/商科/文科/技职艺术)', '华乐与节令鼓名扬四海'],
    flagship_clubs: ['芙中二十四节令鼓队', '华乐团 (大型交响名团)', '管乐团', '弦乐团', '紫竹戏剧社', '天文社', '舞蹈团'],
    campus_facilities: ['半山依山而建之壮丽校园', '李光前现代化大礼堂', '多栋现代化冷气男女宿舍楼', '标准大田径操场', '天文观测台与天象室', '中华文物馆'],
    notable_alumni: ['政商界重要领袖、国际知名科学家、名医与学者'],
    matriculation_highlights: '深受雪隆、柔佛及外州家庭青睐，毕业生直升海内外顶尖高校比例极高。'
  },
  'chunghua-pd': {
    school_motto: '礼、义、廉、耻',
    ethos_and_spirit: '滨海学府，面朝大海春暖花开。以海洋胸襟育人，重视环境教育与全人品格。',
    flagship_features: ['滨海花园式精致校园', '小班关怀制与亲密师生关系', '注重生态与海洋环保课程', '安全温馨之寄宿环境'],
    flagship_clubs: ['海潮节令鼓队', '华乐团', '环保社', '羽球社', '童军团'],
    campus_facilities: ['滨海教学楼', '冷气大礼堂', '学生宿舍大楼', '海洋生态科普角', '多媒体阅览室'],
    notable_alumni: ['地方建设功臣、商业新秀与海洋工程人才'],
    matriculation_highlights: '历年毕业生踏实稳重，深获台湾及中国大陆友好高校重点保送支持。'
  },

  // ===================== 5. 马六甲州 (1所) =====================
  'payfong-melaka': {
    school_motto: '公、忠、勤、毅',
    ethos_and_spirit: '培风一家亲，情义重如山。马六甲州唯一华文独中，立校逾一百一十年。深植马六甲世界文化遗产人文沃土，爱校护教传统深入全城华社骨髓，敦厚博雅。',
    flagship_features: ['马六甲州唯一独中，全城华社精神圣殿', '思源楼与现代化综合设施齐备', '百年人文美育与华教历史沉淀深厚', '工读助学金体系完善 (不让任何孩子失学)', '两岸三地及新加坡大学高额全额保送名额'],
    flagship_clubs: ['培风华乐团', '管乐团', '弦乐团', '二十四节令鼓队', '扯铃社', '传统醒狮团', '戏剧社', '武术社'],
    campus_facilities: ['思源楼现代化综合大楼', '培风大礼堂', '百年校史馆与校友文物展厅', '冷气男女学生宿舍楼群', '数字化天象与多媒体科技中心'],
    notable_alumni: ['大马文化界巨擘、资深汉学学者、海内外知名企业家与慈善家'],
    matriculation_highlights: '两岸三地顶尖大学长期设立“培风专属校长推荐全免奖学金”，毕业生在文史、理工、商业皆有杰出造诣。',
    hero_image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Pay_Fong_Middle_School.jpg?width=800',
    caption: '马六甲培风中学百年历史校舍与思源楼全景'
  },

  // ===================== 6. 霹雳州 (9所) =====================
  'shenjai-ipoh': {
    school_motto: '自强不息',
    ethos_and_spirit: '严谨求真，开拓进取。怡保名校，校风整肃，数理与商科兼备，重视现代科技技能与外语表达。',
    flagship_features: ['花园式现代化幽静校园', '双轨并重与高升学率', '全面数码化多媒体教学', '寄宿设施完善舒适'],
    flagship_clubs: ['深斋二十四节令鼓', '华乐团', '管乐团', '科技与机器人社', '扯铃社'],
    campus_facilities: ['胡曰皆大礼堂', '现代化教学大楼群', '学生冷气宿舍大厦', '多功能科技实验室', '大草场'],
    notable_alumni: ['矿业与工商业领袖、资深医学家与科技工程师'],
    matriculation_highlights: '统考与SPM成绩优异，毕业生大量就读于新马两地大专及中台英澳名校。'
  },
  'poilam-ipoh': {
    school_motto: '冲风破浪',
    ethos_and_spirit: '崇尚拼搏坚毅，勇于创新。全面推行国际剑桥 IGCSE 与统考双轨课程，在霹雳州英语教学走在前沿。',
    flagship_features: ['国际剑桥 (IGCSE) 课程经验成熟丰富', '英语与母语教学齐头并进', '寄宿管理规范有序', '多元化国际升学通道'],
    flagship_clubs: ['培南二十四节令鼓', '管乐团', '华乐团', '模联英语辩论社', '醒狮团'],
    campus_facilities: ['培南大礼堂', '冷气综合教学楼', '现代化男女宿舍楼', '科学实验室群', '国际标准球场'],
    notable_alumni: ['跨国企业管理层、国际涉外法律人才与商贸英才'],
    matriculation_highlights: 'IGCSE 与统考双成绩单，直通英联邦顶尖大学及中国大陆一流大学。'
  },
  'yukchoy-ipoh': {
    school_motto: '自强不息',
    ethos_and_spirit: '弘扬母语教育旗帜，坚贞不移。独中文教历史重镇，崇尚刻苦拼搏，文理与汽车技职班各展所长。',
    flagship_features: ['百年名校，母语教育坚定守护者', '特色汽车维修与机械电子技职班 (全马闻名)', '文理商工多元化升学轨道', '深厚华教情怀'],
    flagship_clubs: ['育才二十四节令鼓队', '华乐团', '管乐团', '汽车工程社', '童军团', '武术团'],
    campus_facilities: ['育才大礼堂', '汽车修护与机械实训中心', '冷气学生宿舍大楼', '图书大厦', '综合田径场'],
    notable_alumni: ['各界工程实业巨擘、汽车工业领军人物及文化名家'],
    matriculation_highlights: '学术与技能两翼齐飞，技职生直升台湾及海外科技大学就业率几近100%。'
  },
  'hualian-taiping': {
    school_motto: '礼、义、廉、耻',
    ethos_and_spirit: '百年雨城华联，学风醇厚质朴。在太平湖畔润泽成长，注重全人博雅与体育健康。',
    flagship_features: ['百年历史底蕴与雨城文化', '现代化综合教学新大楼', '双轨教学升学稳健', '关怀和谐校园'],
    flagship_clubs: ['华联二十四节令鼓', '华乐团', '管乐团', '戏剧社', '羽球社'],
    campus_facilities: ['新落成现代化综合教学大楼', '华联大礼堂', '冷气学生宿舍', '综合图书馆'],
    notable_alumni: ['太平华社领袖、专业医学与工程精英'],
    matriculation_highlights: '毕业生学术素养扎实，深受海内外大学欢迎。'
  },
  'sanmin-telukintan': {
    school_motto: '公、诚、勤、毅',
    ethos_and_spirit: '立足下霹雳斜塔之乡，坚韧弘毅。现代化转型大获成功，校舍硬件焕然一新，吸引众多外州学子寄宿。',
    flagship_features: ['全马独中现代化转型成功典范', '高品质四星标准学生男女冷气宿舍', '外州寄宿生比例高，管理关怀极佳', '统考成绩连续突破跃升'],
    flagship_clubs: ['三民二十四节令鼓队', '管乐团', '华乐团', '龙狮团', '科技创客社', '扯铃社'],
    campus_facilities: ['现代化宏伟新校舍', '四星级学生冷气公寓宿舍', '全冷气宏伟礼堂', '塑胶跑道大操场', '数码阅览室'],
    notable_alumni: ['下霹雳商业翘楚与政经界新一代青年领袖'],
    matriculation_highlights: '众多雪隆、霹雳外州家长争相报读，毕业生直通中台新欧美著名学府。'
  },
  'yikching-pantai': {
    school_motto: '礼、义、廉、耻',
    ethos_and_spirit: '班台渔乡文化灯塔。坚持小班精细化关怀，培育感恩淳朴有社会担当之青年。',
    flagship_features: ['渔米水乡温情人文学府', '精致小班化个别辅导', '寄宿生活家庭式照料'],
    flagship_clubs: ['节令鼓队', '醒狮社', '球类运动队', '美术社'],
    campus_facilities: ['综合教学楼', '冷气礼堂', '学生宿舍', '电脑室'],
    notable_alumni: ['地方工商领袖及教育工作者'],
    matriculation_highlights: '稳健升学，深受台湾及中国高校优录通道支持。'
  },
  'tsungwah-kk': {
    school_motto: '礼、义、廉、耻',
    ethos_and_spirit: '皇城江沙崇华，文风鼎盛。依山傍水，校风纯洁朴实，注重传统美德养成。',
    flagship_features: ['皇城静谧环境适于专心治学', '小班特色教学与品德养成', '奖助学金覆盖广泛'],
    flagship_clubs: ['崇华节令鼓队', '华乐团', '童军团', '书画社'],
    campus_facilities: ['教学主楼', '综合礼堂', '图书馆与科学室', '学生宿舍'],
    notable_alumni: ['江沙各界杰出英才与学术界前辈'],
    matriculation_highlights: '毕业生作风踏实勤勉，各大专深受欢迎。'
  },
  'nanhwa-manjung': {
    school_motto: '公、诚、勤、毅',
    ethos_and_spirit: '曼绒福州垦场华教堡垒，百年树人。学风严谨求实，数理与商业课程齐头并进。',
    flagship_features: ['曼绒县重点华文独立中学', '现代化综合教学与运动设施', '全冷气舒适宿舍环境', '双轨教学优良学风'],
    flagship_clubs: ['南华二十四节令鼓', '华乐团', '管乐团', '醒狮团', '排球社'],
    campus_facilities: ['现代化综合教学楼群', '冷气多功能礼堂', '标准化学生宿舍楼', '室内体育馆', '图书馆'],
    notable_alumni: ['曼绒工商业巨头、跨国海产与种植界实业家'],
    matriculation_highlights: '统考与SPM综合升学率达95%以上，海内外大学无缝衔接。'
  },
  'peiyuan-kampar': {
    school_motto: '自强不息',
    ethos_and_spirit: '金宝锡矿历史名校，弦歌不辍逾百年。崇尚诚实勤奋，文体与学术协调发展。',
    flagship_features: ['百年老校历史积淀', '学费极为亲民', '纯朴敬师学风', '与优大 (UTAR) 金宝校区紧密邻近学术联动'],
    flagship_clubs: ['培元二十四节令鼓', '管乐团', '华乐团', '戏剧社', '童军团'],
    campus_facilities: ['培元大礼堂', '综合教学楼', '图书馆与电脑多媒体室', '科学实验室'],
    notable_alumni: ['金宝与霹雳各界实业先驱及杰出校友'],
    matriculation_highlights: '地利邻近拉曼大学等多所高校，毕业生升学深造极为便利。'
  },

  // ===================== 7. 槟城州 (5所) =====================
  'chungling-penang': {
    school_motto: '爱吾锺灵',
    ethos_and_spirit: '公、诚、勤、毅。理科传统全国霸主，百年英才辈出。“爱吾锺灵”精神凝结全球校友，学术治学极度严谨，领导力与拼搏精神铸就金牌声誉。',
    flagship_features: ['全马传统理科第一学府，奥数与数理竞赛奖牌无数', '同时开设统考班与国际剑桥 (IGCSE) 精英班', '全球最庞大紧密之锺灵校友网络之一', '深厚文化底蕴与严苛学术选拔'],
    flagship_clubs: ['锺灵管弦乐团 (新马名牌乐团)', '华乐团', '锺灵童军团 (百年荣誉)', '国际辩论队 (全国冠军殿堂)', '奥数与数理精英研习社', '戏剧社'],
    campus_facilities: ['怀泽堂宏伟历史大礼堂', '现代化科技大楼与先进数理实验室群', '锺灵校史博物馆', '大型冷气现代化图书馆', '标准大操场与室内体育中心'],
    notable_alumni: ['多国科学院院士、国际顶尖物理/化学/医学科学家、政界首长及跨国巨头CEO'],
    matriculation_highlights: '每年直升中国清华北大、英国剑桥牛津、新加坡NUS/NTU、美国常春藤盟校及澳纽医科理科，学术口碑誉满全球。',
    hero_image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Chung_Ling_Private_High_School_front_view.jpg?width=800',
    caption: '槟城锺灵独立中学校舍正门与宏伟教学主楼'
  },
  'hanchiang-penang': {
    school_motto: '诚、毅',
    ethos_and_spirit: '敢为人先，开拓进取。全马最早引入国际剑桥课程与创新科技的独中之一。倡导三语并重，文理兼修，充满前沿国际视野。',
    flagship_features: ['国际剑桥 (IGCSE) 与统考双轨课程深度融合', '多媒体科技与新闻传播实践传统', '全校冷气现代化多功能教学楼', '升读欧美英澳与中国名校捷径'],
    flagship_clubs: ['韩江二十四节令鼓', '华乐团', '管乐团', '新闻与多媒体创播社', '机器人与人工智能社', '舞蹈团'],
    campus_facilities: ['韩江大礼堂', '连登综合大楼', '专业新闻播报演播室', '数字化图书馆', '现代男女学生公寓宿舍'],
    notable_alumni: ['国际新闻媒体行业高管、著名影视导演、传媒学者及商业翘楚'],
    matriculation_highlights: '涵盖统考文凭与剑桥 IGCSE 双认证，全球英联邦名校及亚洲顶尖大学录取率极高。',
    hero_image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Han_Chiang_High_School.jpg?width=800',
    caption: '槟城韩江中学校园综合建筑全景'
  },
  'pcg-penang': {
    school_motto: '庄敬自强',
    ethos_and_spirit: '槟华女子，内外兼修。全马仅存之纯女子独中之一，校风端庄优雅、坚韧独立。注重女性领导力、艺术审美与学术品格。',
    flagship_features: ['全马珍罕之优质纯女子独中', '典雅端庄校风与女子领导力培养', '艺术美育、音乐与文理双全', '安全温馨高规格女生寄宿公寓'],
    flagship_clubs: ['槟华华乐团', '弦乐团', '二十四节令女子鼓队', '女童军团', '舞蹈团 (全国金奖)', '辩论社'],
    campus_facilities: ['槟华大礼堂', '女子艺术馆与练琴房', '多功能现代化教学楼', '现代化女生公寓宿舍', '生态植物园'],
    notable_alumni: ['杰出女性科学家、国际医学专家、跨国法律合伙人及著名艺术家'],
    matriculation_highlights: '毕业生知书达礼、逻辑严密，在欧美、新马与中台名校皆有杰出成就。'
  },
  'phortay-penang': {
    school_motto: '慈、悲、喜、舍',
    ethos_and_spirit: '佛教精神立校，崇尚慈悲博爱。注重心灵环保、道德修养与全人教育，氛围祥和宁静。',
    flagship_features: ['全马唯一佛教背景华文独中', '注重心性涵养与感恩教育', '小班关怀与宁静学风', '学费极为亲民'],
    flagship_clubs: ['菩提手语佛曲社', '节令鼓队', '华乐团', '素食烹饪学会', '红新月会'],
    campus_facilities: ['菩提大礼堂', '禅修与多功能活动室', '冷气教学楼', '图书室与电脑室'],
    notable_alumni: ['慈济与慈善公益领军者、人文教育家与专业人才'],
    matriculation_highlights: '以端正品格立世，毕业生在台湾、中国大陆及本地高校深受欢迎。'
  },
  'jitsin-bm': {
    school_motto: '敬爱勤朴',
    ethos_and_spirit: '日新又新，坚毅刚强。威省大山脚华教中流砥柱，学风极为严谨质朴，学生拼搏刻苦，学术成绩与威省华社凝聚力盛名远播。',
    flagship_features: ['威省最具代表性之顶尖独立中学', '统考数理商科成绩名列全国前列', '敬爱勤朴之刚健淳朴校风', '高规格寄宿公寓管理经验丰富'],
    flagship_clubs: ['日新二十四节令鼓队 (声名赫赫)', '管乐团', '华乐团 (常年全国金牌)', '童军团', '红新月会', '辩论社', '武术醒狮团'],
    campus_facilities: ['怀德综合大礼堂', '现代化科技教学大楼', '高品质冷气男女学生宿舍楼', '标准大型田径运动场', '现代化多功能图书馆'],
    notable_alumni: ['马来西亚各界政经文教栋梁、知名工程院士及商界领军企业家'],
    matriculation_highlights: '历届统考优等生众多，大批录取新加坡NUS/NTU、中国清华北大、台大及欧美名牌大学。'
  },

  // ===================== 8. 吉打州 (3所) =====================
  'keathwa-as': {
    school_motto: '礼、义、廉、耻',
    ethos_and_spirit: '稻米之乡吉华精神，朴实坚毅。立足米都亚罗士打，全面贯彻关爱育人理念，文理艺体并重。',
    flagship_features: ['吉打州旗舰独中名校', '统考成绩稳居北马前列', '华乐与节令鼓享誉北马', '外州寄宿生照护细致'],
    flagship_clubs: ['吉华二十四节令鼓队', '吉华华乐团 (大型交响名团)', '管乐团', '行进铜乐操', '童军团', '戏剧社'],
    campus_facilities: ['现代化综合教学大楼', '大型冷气大礼堂', '冷气男女学生宿舍楼', '科技大楼与数理实验室', '塑胶跑道运动场'],
    notable_alumni: ['北马工商业界领袖、杰出医生与科研教授'],
    matriculation_highlights: '毕业生深具朴实专注特质，直升中台新顶尖大学成绩亮眼。'
  },
  'sinmin-as': {
    school_motto: '明德、正己、修身',
    ethos_and_spirit: '亚罗士打新民独中，以德育为先。倡导博雅精专，小班教学精细入微。',
    flagship_features: ['小班精细化辅导', '注重中华文化与书法传统', '亲切有温度之师生关系'],
    flagship_clubs: ['新民醒狮团', '节令鼓队', '书法学会', '华乐团'],
    campus_facilities: ['教学主楼', '冷气大礼堂', '图书馆与电脑多媒体室'],
    notable_alumni: ['本地工商业骨干与教育人才'],
    matriculation_highlights: '稳健对接中台及新马各大专院校。'
  },
  'sinmin-sp': {
    school_motto: '公、诚、勤、朴',
    ethos_and_spirit: '双溪大年华社支柱，弘扬三语兼优。近年来教学硬件大举跃进，学术与课外活动蓬勃发展。',
    flagship_features: ['中吉打州唯一独立中学', '全面升级之现代化校舍', '双轨课程兼顾统考与SPM', '丰富社团与体育特长培养'],
    flagship_clubs: ['新民二十四节令鼓', '管乐团', '华乐团', '扯铃社', '篮球校队'],
    campus_facilities: ['新落成现代化教学综合大楼', '大礼堂', '多功能数码图书馆', '学生自修室'],
    notable_alumni: ['吉中区工商领袖、专业工程与医药人才'],
    matriculation_highlights: '深受吉中家庭信赖，各学科统考优良率稳步提升。'
  },

  // ===================== 9. 吉兰丹州 (1所) =====================
  'chunghwa-kelantan': {
    school_motto: '礼、义、廉、耻',
    ethos_and_spirit: '东海岸华教孤岛之明灯，坚忍不拔。立足丹州近郊，是全马极少数实行“全校全寄宿制”之典范学府，师生全天候同吃同住，情感宛若骨肉同胞。',
    flagship_features: ['东海岸唯一华文独立中学', '全校全封闭规范寄宿制名校', '家庭式温馨照护与严格作息自律', '学费与宿费极为亲民实惠'],
    flagship_clubs: ['丹中二十四节令鼓', '华乐团', '铜管乐团', '扯铃社', '醒狮团', '传统书法与水墨画社'],
    campus_facilities: ['占地广阔之生态园林校区', '全冷气男女学生宿舍楼群', '丹中综合大礼堂', '大型体育场与综合球类场馆', '马达教学大厦与图书馆'],
    notable_alumni: ['东海岸华社领袖、专业科技英才与海内外创业家'],
    matriculation_highlights: '独立自主生活能力极强，深得中台新大学教授与招生办特别青睐赞赏。'
  },

  // ===================== 10. 彭亨州 (1所) =====================
  'chonghwa-kuantan': {
    school_motto: '礼、义、廉、耻',
    ethos_and_spirit: '东海岸华社历尽艰辛申办之崭新学府。融汇传统华校精髓与现代私立中学管理模式，校舍恢弘大气，倡导全人博雅。',
    flagship_features: ['全马最年轻充满朝气之华文独中模式学府', '双轨制教学 (统考 + SPM 双赢格局)', '高规格五星标准寄宿公寓与生态校园', '东海岸现代化智慧教育新高地'],
    flagship_clubs: ['关中二十四节令鼓队', '华乐团', '管弦乐团', '机器人编程社', '演讲与辩论社', '羽球俱乐部'],
    campus_facilities: ['宏伟现代化行政综合大楼', '高星级冷气学生男女公寓宿舍', '大型综合冷气礼堂', '标准塑胶跑道运动场', '数码化多媒体图书馆'],
    notable_alumni: ['新一代东海岸科创英才、涉外商贸新星与拔尖学子'],
    matriculation_highlights: '毕业生兼具扎实国语、英语及华文素养，在各大统考及海内外名牌大学录取中崭露头角。'
  },

  // ===================== 11. 沙巴州 (9所) =====================
  'tshungtsin-kk': {
    school_motto: '笃信、健美、敏学、守纪',
    ethos_and_spirit: '东马华教领航旗舰。崇尚自律、卓越与坚毅精神，校风严谨肃穆。三语兼优浸润，数理与国际课程独占鳌头，是婆罗洲最负盛名之学府。',
    flagship_features: ['东马规模最大、学术成绩最强独中', '双轨教学卓越，统考与SPM全马名列前茅', '高水准英语教学与国际视野', '现代化综合教学与实验环境'],
    flagship_clubs: ['崇正管乐团 (国际大赛金奖)', '二十四节令鼓队', '崇正华乐团', '模拟联合国社 (Model UN)', '机器人创客社', '弦乐团', '少年军团'],
    campus_facilities: ['树惠现代化综合大礼堂', '科技综合教学大楼', '标准室内冷气体育中心', '数字化现代图书馆', '数理专业实验楼'],
    notable_alumni: ['沙巴政商界重要领军人物、国际知名医学博士、硅谷科技精英'],
    matriculation_highlights: '毕业生大批直录新加坡国立大学 (NUS)、南洋理工 (NTU)、英国帝国理工、澳洲八大及清华北大台大。'
  },
  'kiankok-kk': {
    school_motto: '公、忠、勤、毅',
    ethos_and_spirit: '建国自强，傲立风下之乡。崇尚求真务实，注重学生动手实践能力、艺术创意与体育风采。',
    flagship_features: ['亚庇市中心交通枢纽名校', '文理商美术多元化课程体系', '注重英语与中华文化并举', '完善之冷气学生宿舍'],
    flagship_clubs: ['建国二十四节令鼓', '管乐团', '华乐团', '美术设计学会', '龙狮团', '篮球社'],
    campus_facilities: ['综合教学大楼', '大型综合大礼堂', '冷气男女学生宿舍楼', '美术设计专业工坊', '电脑多媒体室'],
    notable_alumni: ['沙巴建筑工程界骨干、工商翘楚及艺术名家'],
    matriculation_highlights: '学术与文创技职并重，直通海内外各类高等专业学府。'
  },
  'bahua-tawau': {
    school_motto: '自强不息',
    ethos_and_spirit: '斗湖华社明珠，百年树人。重视学生生活技能、自律品格与三语表达，校园绿意盎然。',
    flagship_features: ['沙巴东海岸旗舰独立中学', '全面推行现代化智慧教室', '寄宿管理制度成熟温馨', '数理与商科基础扎实'],
    flagship_clubs: ['巴华二十四节令鼓队', '华乐团', '管乐团', '童军团', '排球校队'],
    campus_facilities: ['巴华大礼堂', '综合教学大厦', '现代化学生冷气宿舍', '科学实验室', '图书阅览中心'],
    notable_alumni: ['斗湖各大种植业、商业领袖及杰出专业人才'],
    matriculation_highlights: '毕业生勤劳朴实，深受中台新澳高校欢迎。'
  },
  'yuyuan-sandakan': {
    school_motto: '公、诚、勤、朴',
    ethos_and_spirit: '山打根小香港华教殿堂。以全人教育为旨归，培养兼具本土情怀与国际胸襟之栋梁。',
    flagship_features: ['山打根唯一独立中学', '双轨并重之优良学术传统', '自然优美之坡地校园', '关怀外区寄宿生成长'],
    flagship_clubs: ['育源二十四节令鼓', '管乐团', '华乐团', '戏剧社', '红新月会'],
    campus_facilities: ['综合大礼堂', '科技教学大楼', '学生男女宿舍', '图书资讯大厦', '球类场馆'],
    notable_alumni: ['沙巴东海岸政经工商各界核心人物'],
    matriculation_highlights: '学术统考与SPM表现稳健，直升海内外高校。'
  },
  'lahaddatu-ms': {
    school_motto: '自强不息',
    ethos_and_spirit: '拿笃华教中流砥柱。在多元文化共存的土地上，坚守母语教育与中华传统文化传承。',
    flagship_features: ['小班个性化悉心关怀', '踏实朴素校风', '温暖大家庭式寄宿生活'],
    flagship_clubs: ['节令鼓队', '醒狮社', '羽球社', '美术学会'],
    campus_facilities: ['教学主楼', '综合礼堂', '学生宿舍', '科学实验室'],
    notable_alumni: ['地方种植与商业中坚力量'],
    matriculation_highlights: '毕业生朴实肯干，多赴中台及西马深造。'
  },
  'tenom-ttss': {
    school_motto: '笃信、健美、敏学、守纪',
    ethos_and_spirit: '内陆咖啡之乡丹南文化明灯。客家人文底蕴厚重，尊师重道，学风朴茂。',
    flagship_features: ['内陆山区客家风情独中', '师生情深如家人', '低廉亲民之求学成本'],
    flagship_clubs: ['节令鼓队', '华乐团', '农业实践社', '童军团'],
    campus_facilities: ['崇正教学大厦', '礼堂', '学生宿舍大楼', '生态种植园'],
    notable_alumni: ['沙巴内陆地区政商与文教人才'],
    matriculation_highlights: '毕业生吃苦耐劳，海内外升学顺利。'
  },
  'beaufort-ms': {
    school_motto: '公、忠、勤、毅',
    ethos_and_spirit: '保佛小镇坚韧之光。以微校之力，聚华社之爱，办好每一堂课，护好每一名学子。',
    flagship_features: ['微型独中爱心精细教育', '师生一对一深度辅导', '纯朴无暇校风'],
    flagship_clubs: ['醒狮与武术', '球类社', '书法社'],
    campus_facilities: ['综合教学楼', '多功能活动室', '电脑图书室'],
    notable_alumni: ['地方工商英才'],
    matriculation_highlights: '直通台湾与西马大专院校。'
  },
  'papar-ms': {
    school_motto: '勤、俭、忠、诚',
    ethos_and_spirit: '吧巴河畔华文书香。小而坚韧，重视中华品德与环保生活实践。',
    flagship_features: ['小班制温情关怀', '推行绿色环保理念', '重视道德修养与基本功'],
    flagship_clubs: ['节令鼓队', '环保手工社', '羽球社'],
    campus_facilities: ['教学楼', '礼堂', '电脑室'],
    notable_alumni: ['社区工商中坚力量'],
    matriculation_highlights: '稳定向国内外友好高校输送毕业生。'
  },
  'peitsin-kudat': {
    school_motto: '自强不息',
    ethos_and_spirit: '北端天涯海角古达华教灯塔。百折不挠，坚守最偏远之母语堡垒，情怀感人。',
    flagship_features: ['全马最北端独立中学', '百年客家垦殖坚韧传统', '淳朴温馨寄宿'],
    flagship_clubs: ['醒狮团', '节令鼓队', '客家文化研习社'],
    campus_facilities: ['培正综合教学楼', '礼堂', '学生宿舍'],
    notable_alumni: ['沙巴北区侨领与工商业精英'],
    matriculation_highlights: '踏实求学，获多所大学定向奖助学金资助。'
  },

  // ===================== 12. 砂拉越州 (14所) =====================
  'chms1-kuching': {
    school_motto: '公、忠、勤、毅',
    ethos_and_spirit: '婆罗洲砂拉越华教第一学府。七十余年栉风沐雨，学风浩大端严。数理学术功底扎实，三语并重，文体社团威震东马。',
    flagship_features: ['砂拉越首府历史最悠久旗舰独中', '统考数理商科综合实力东马翘楚', '二十四节令鼓与华乐享誉国际', '现代化全功能综合智慧校园'],
    flagship_clubs: ['一中二十四节令鼓队 (东马王者名团)', '一中华乐团 (全国大型交响乐团)', '管乐团', '舞蹈团', '辩论社', '机器人创客社', '童军团'],
    campus_facilities: ['宏伟一中大礼堂', '现代化科技教学大楼', '大型数字化阅览大厦', '冷气多功能会议报告厅', '标准田径操场与室内体育中心'],
    notable_alumni: ['砂拉越内阁要员、国州议员、国际工程大师、著名医学专家及商界巨子'],
    matriculation_highlights: '统考成绩优异，毕业生大量直升新加坡NUS/NTU、清华北大、台成清交、澳洲八大及欧美名校。'
  },
  'chms3-kuching': {
    school_motto: '公、忠、勤、毅',
    ethos_and_spirit: '自强开拓，以生为本。积极推行特色技职与多元升学路径，充满人文关怀。',
    flagship_features: ['多元特色办学模式', '技职美术与设计专业优势', '小班关爱与亲和校风'],
    flagship_clubs: ['节令鼓队', '华乐团', '美术创意学会', '烘焙与烹饪社'],
    campus_facilities: ['教学综合楼', '三中大礼堂', '烹饪烘焙专业实训室', '图书馆'],
    notable_alumni: ['本地餐饮创意实业家、设计界精英'],
    matriculation_highlights: '学术与技能兼备，升学去向宽广。'
  },
  'chms4-kuching': {
    school_motto: '公、忠、勤、毅',
    ethos_and_spirit: '赏识教育，温暖童心。首倡“行行出状元”之赏识教育理念，发现每个孩子的闪光点，校风明朗阳光。',
    flagship_features: ['全马独中“赏识教育”实验典范学府', '小班制零放弃教育理念', '师生如友，校园充满赞赏与笑声'],
    flagship_clubs: ['四中醒狮团', '节令鼓队', '手语舞蹈社', '戏剧社'],
    campus_facilities: ['教学主楼', '冷气活动中心', '多媒体阅览室'],
    notable_alumni: ['充满社会关怀之创新创业青年与教育工作者'],
    matriculation_highlights: '毕业生充满自信，深受中台及本地高校喜爱。'
  },
  'minlit-batukawa': {
    school_motto: '自强不息',
    ethos_and_spirit: '石角河畔华文书香。深耕本土，注重品德与基本技能培养，朴实无华。',
    flagship_features: ['郊区小班爱心办学', '注重品德生活自理', '学费极为低廉'],
    flagship_clubs: ['醒狮队', '节令鼓', '羽球社'],
    campus_facilities: ['教学楼', '礼堂', '电脑室'],
    notable_alumni: ['地方工商骨干'],
    matriculation_highlights: '升学稳固，受华社长青支持。'
  },
  'public-serian': {
    school_motto: '礼、义、廉、耻',
    ethos_and_spirit: '西连山区华教堡垒。汇聚多元族群共融，华族与土著生友好共处，体现大马和谐缩影。',
    flagship_features: ['多元文化融合典范', '小班关怀制', '注重基础三语沟通'],
    flagship_clubs: ['醒狮团', '土著传统文化社', '球类社'],
    campus_facilities: ['综合教学楼', '礼堂', '电脑室'],
    notable_alumni: ['西连社区贤达与商业中坚'],
    matriculation_highlights: '毕业生直通本地及台湾科技大专。'
  },
  'catholic-sibu': {
    school_motto: '真、善、美',
    ethos_and_spirit: '公教精神，知行合一。圣母昆仲会修士创办之名校，严谨自律，数理根底极其扎实，在诗巫享有崇高学术声誉。',
    flagship_features: ['全马著名天主教背景华文独中名校', '数理逻辑传统强校，全马奥数常胜军', '极其严谨之校纪与品格养成', '三语学术全面开花'],
    flagship_clubs: ['公教华乐团', '管乐团', '公教二十四节令鼓', '少年军团', '数理奥数社', '辩论社'],
    campus_facilities: ['圣母昆仲教学大楼', '公教多功能大礼堂', '冷气学生宿舍楼', '现代化物理化学实验室', '图书阅览中心'],
    notable_alumni: ['国际顶尖数学家、海内外医学专科名医、工程巨擘及各界学术权威'],
    matriculation_highlights: '统考数理成绩常居全国首屈一指，毕业生直录欧美新中台世界一流名牌大学。'
  },
  'wns-sibu': {
    school_motto: '忠、信、勤、勇',
    ethos_and_spirit: '纪念诗巫开埠先驱黄乃裳之名校。传承开拓进取的垦殖精神，注重全人博雅与体育健美。',
    flagship_features: ['纪念历史先贤之文化学府', '双轨课程与三语并重', '排球与体育项目东马闻名', '优质现代化冷气教学楼'],
    flagship_clubs: ['乃裳二十四节令鼓队', '华乐团', '排球校队 (东马冠军常客)', '童军团', '扯铃社'],
    campus_facilities: ['黄乃裳综合教学大楼', '大型冷气大礼堂', '现代化学生宿舍', '室内排球与体育综合馆'],
    notable_alumni: ['诗巫工商界领袖、排球国手名将与专业精英'],
    matriculation_highlights: '学术与体魄兼优，海外留学通路极广。'
  },
  'guongming-sibu': {
    school_motto: '诚、勤、朴、勇',
    ethos_and_spirit: '光明常照，自强不息。依水而建，学风淳朴，重视环境与实际技能。',
    flagship_features: ['小班互动教学', '温馨寄宿照料', '注重生活自理能力'],
    flagship_clubs: ['节令鼓队', '醒狮社', '羽球社'],
    campus_facilities: ['教学楼', '光民大礼堂', '学生宿舍'],
    notable_alumni: ['地方工商英才'],
    matriculation_highlights: '稳步对接中台各大专院校。'
  },
  'citizen-sibu': {
    school_motto: '公、忠、信、勇',
    ethos_and_spirit: '公民立校，回馈乡里。小班细致照护，学生敦厚有礼。',
    flagship_features: ['小班家庭化教学', '亲切师生互动', '费用极其亲民'],
    flagship_clubs: ['节令鼓队', '书法社', '乒乓社'],
    campus_facilities: ['教学楼', '礼堂', '电脑图书室'],
    notable_alumni: ['拉让江流域工商业中坚'],
    matriculation_highlights: '毕业生踏实好学，深得各大学青睐。'
  },
  'kianghin-sibu': {
    school_motto: '自强不息',
    ethos_and_spirit: '建兴精神，脚踏实地。注重务实应用能力与中华传统美德培育。',
    flagship_features: ['小班制教学', '注重生活实践技能', '敦厚校风'],
    flagship_clubs: ['节令鼓队', '醒狮团', '球类社'],
    campus_facilities: ['综合教学楼', '礼堂', '学生宿舍'],
    notable_alumni: ['地方实业英才'],
    matriculation_highlights: '顺畅直升台湾及本地大专。'
  },
  'minglik-sarikei': {
    school_motto: '自强不息',
    ethos_and_spirit: '黄梨之乡泗里街华教灯塔。坚守拉让江流域母语教育灯火，关怀每个乡村孩子。',
    flagship_features: ['乡村小班温馨学府', '极富爱心之教师团队', '亲民学费与宿舍支持'],
    flagship_clubs: ['醒狮队', '节令鼓', '羽球社'],
    campus_facilities: ['教学楼', '礼堂', '图书室'],
    notable_alumni: ['泗里街工商贤达'],
    matriculation_highlights: '稳健升学，深受各界赞誉。'
  },
  'riam-miri': {
    school_motto: '德、智、体、群、美',
    ethos_and_spirit: '油城美里现代名校。办学理念极富前瞻性，积极推展数理、英语、国际课程及多元技职教育，充满活力与朝气。',
    flagship_features: ['砂拉越北部现代化标杆学府', '统考与剑桥英语并重', '兼办特色技职与工程专业先修', '体育与联课全国拔尖'],
    flagship_clubs: ['廉律二十四节令鼓队', '管乐团', '华乐团', '武术团 (常年全国武术冠军)', '机器人编程社', '舞蹈团'],
    campus_facilities: ['现代化宏伟大礼堂', '科技实验综合楼', '现代化男女学生冷气宿舍', '标准运动跑道', '数字化图书馆'],
    notable_alumni: ['国际武术冠军、石油工程专业人才、跨国企业高管'],
    matriculation_highlights: '学术与文体双优，直升欧美、新中台顶尖学府。'
  },
  'peimin-miri': {
    school_motto: '礼、义、廉、耻',
    ethos_and_spirit: '培民强国，自立立人。美里历史名校，兼收并蓄，注重三语扎实功夫与全人素质养成。',
    flagship_features: ['砂北历史悠久之华文独中', '双轨并进教学成果显著', '新综合教学大楼设施齐备', '温馨寄宿生管理'],
    flagship_clubs: ['培民二十四节令鼓', '管乐团', '华乐团', '幼狮团', '辩论社', '美术学会'],
    campus_facilities: ['新落成宏伟新教学大厦', '现代化培民大礼堂', '冷气学生男女宿舍楼', '图书资讯中心'],
    notable_alumni: ['美里各界商业巨擘、资深工程师与医学专业人士'],
    matriculation_highlights: '学术成绩稳健，升读新中台英澳名牌大学途径通畅。'
  },
  'kaidee-bintulu': {
    school_motto: '勤、毅、诚、勇',
    ethos_and_spirit: '白手起家，从诗巫迁至工业重镇民都鲁破土重生。体现大马华社“明知不可为而为之”的硬骨头精神，校舍宏伟现代，朝气蓬勃。',
    flagship_features: ['全马独中迁校重生并取得辉煌发展之传奇范例', '民都鲁能源工业重镇唯一华文独中', '全新落成现代化五星级校舍与冷气宿舍', '双轨制教学蓬勃发展'],
    flagship_clubs: ['开智二十四节令鼓队', '华乐团', '管乐团', '醒狮团', '机器人创客社', '舞蹈社'],
    campus_facilities: ['民都鲁现代化标志性校舍群', '冷气宏伟大礼堂', '现代化男女学生冷气宿舍大厦', '室内标准综合体育馆', '全冷气大图书馆'],
    notable_alumni: ['重工业与石化工程新星、新一代年轻商业企业家'],
    matriculation_highlights: '紧密契合砂拉越能源走廊发展，毕业生海内外升学与就业前景一片广阔。'
  }
};

/**
 * Returns complete culture, ethos, motto, flagship features, and photos for any given school ID.
 */
export function getSchoolCulture(school_id: string): SchoolCulture {
  if (SCHOOL_CULTURE_MAP[school_id]) {
    return SCHOOL_CULTURE_MAP[school_id];
  }

  // Fallback for any school not explicitly mapped
  return {
    school_motto: '礼、义、廉、耻',
    ethos_and_spirit: '坚持母语教学与三语并重，弘扬中华优良传统文化，注重学术成绩与全人品格培养，服务社会造福人群。',
    flagship_features: ['三语并重浸润教学', '全人品德礼仪教育', '统考与多元升学网络', '奖助学金制度健全'],
    flagship_clubs: ['二十四节令鼓队', '华乐团', '管乐团', '辩论社', '童军团'],
    campus_facilities: ['综合大礼堂', '多功能教学大楼', '数理科学实验室', '图书阅览室', '多媒体电脑室'],
    notable_alumni: ['海内外各界商业翘楚、教育工作者与专业工程师'],
    matriculation_highlights: '统考文凭获全球上千所大专院校普遍认可，直升中台新欧英美澳大学无缝衔接。'
  };
}
