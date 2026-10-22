export interface BoardingScheduleItem {
  time: string;
  activity: string;
  category: 'routine' | 'study' | 'activity' | 'rest';
  details: string;
}

export interface TransitRoute {
  destination: string;
  pickup_dropoff: string;
  frequency: string;
  est_duration: string;
  notes: string;
}

export interface BoardingSchoolProfile {
  school_id: string;
  school_name: string;
  state: string;
  capacity: string;
  room_types: string;
  air_conditioned: string;
  phone_policy: string;
  study_hall: string;
  laundry_service: string;
  dining_plan: string;
  medical_facility: string;
  transit_routes: TransitRoute[];
}

export const BOARDING_DAILY_SCHEDULE: BoardingScheduleItem[] = [
  {
    time: '06:00 - 06:40',
    activity: '晨起洗漱与内务整理',
    category: 'routine',
    details: '宿舍广播轻音乐唤醒，学生整理床铺被褥、洗漱更衣，舍监检查宿舍整洁卫生。'
  },
  {
    time: '06:45 - 07:15',
    activity: '宿舍/食堂全员营养早餐',
    category: 'routine',
    details: '集中在学生餐厅享用中西式温热早餐（炒面、烤面包、荷包蛋、热豆浆/美禄、包点）。'
  },
  {
    time: '07:20 - 07:45',
    activity: '晨读或晨会朝会',
    category: 'study',
    details: '步入教学楼教室进行早自习、三语经典晨读或参加全校升旗朝会。'
  },
  {
    time: '07:45 - 15:30',
    activity: '正规教学课程',
    category: 'study',
    details: '全天上课与实验操作，午休在校内食堂享用午餐，走读生与寄宿生同步上课。'
  },
  {
    time: '15:45 - 17:30',
    activity: '联课活动、社团或体育锻炼',
    category: 'activity',
    details: '参加管乐、华乐、二十四节令鼓、球类校队集训，或在田径场、健身房运动强身。'
  },
  {
    time: '17:45 - 18:45',
    activity: '洗澡洗涤与晚膳时间',
    category: 'routine',
    details: '返回宿舍洗澡、投放衣物至洗衣房烘洗，并在餐厅享用四菜一汤营养晚餐与水果。'
  },
  {
    time: '19:00 - 21:30',
    activity: '统一晚自习 (Study Hall)',
    category: 'study',
    details: '所有寄宿生在全冷气晚自习大厅或指定课室由轮值教师与舍监全程督导，专心复习课业、完成作业，杜绝手机干扰。'
  },
  {
    time: '21:30 - 22:15',
    activity: '宵夜点心与亲子联络时间',
    category: 'routine',
    details: '宿舍提供热粥、包点或麦片宵夜。开放指定生活区与家长通电话、交流谈心。'
  },
  {
    time: '22:15 - 22:30',
    activity: '晚点名与熄灯安寝',
    category: 'rest',
    details: '各楼层舍监清点人数，锁闭楼层大门，宿舍统一熄灯断电，确保充足 8 小时深度睡眠。'
  }
];

export const BOARDING_POLICY_HIGHLIGHTS = [
  {
    title: '📱 电子设备与手机规范管理',
    summary: '周日返校集中入库，周末定点开放亲子通话',
    rules: [
      '周日晚上入舍前，全体学生须将手机、智能手表等带通讯设备交由舍监统一封存进个人专用密码保密箱。',
      '周一至周五晚自习与就寝期间严禁私藏手机，确保学生免除网络游戏、短视频与社交软件的夜间诱惑。',
      '周五放学后或周六日指定自由时段，学生可领取手机向父母汇报学业生活；遇紧急事宜，家长可 24 小时随时拨打宿舍专线直达舍监。'
    ]
  },
  {
    title: '🥗 膳食营养与食堂安全把控',
    summary: '四菜一汤荤素搭配，定期清真与卫生抽检',
    rules: [
      '寄宿生每日专供三餐加宵夜，菜单由营养师与膳食委员会每月轮换，荤素搭配均衡，每日提供新鲜水果与无限量热饮。',
      '校方食堂严格通过马来西亚卫生局 (KKM) 食品安全甲级评估，严禁过期食材，定期举行寄宿生满意度问卷反馈。',
      '针对患病或不适学生，餐厅专设“病患清淡餐饮服务”，送餐至宿舍隔离休养室。'
    ]
  },
  {
    title: '🧺 洗衣与生活卫生保障',
    summary: '商用工业洗衣机烘干机，杜绝雨季衣物潮湿',
    rules: [
      '宿舍配有大型商业投币式或集中托管洗衣房，配有大容量烘干机，彻底解决热带雨林气候连日暴雨衣物发霉问题。',
      '初一新生入校首月由高年级学长及舍监专门指导内务整理（套被套、折叠衣物、鞋履摆放），培养独立自主生活习惯。'
    ]
  },
  {
    title: '🏥 24小时保安、医务室与就医绿色通道',
    summary: '全封闭门禁与专业医护驻校，医院绿色救助通道',
    rules: [
      '宿舍区实行严格电子门禁刷卡考勤系统，24 小时专业保安巡逻，外来访客非开放日严禁进入宿舍楼层。',
      '校内设有常设医务室，常驻合格校护。若学生突发高烧或急症，舍监立即出动校车护送至邻近大型专科医院并即时通报家长。'
    ]
  }
];

export const BOARDING_SCHOOL_PROFILES: BoardingSchoolProfile[] = [
  {
    school_id: 'chunghua-seremban',
    school_name: '芙蓉中华中学',
    state: '森美兰',
    capacity: '逾 1,200 名寄宿生 (全马最大寄宿群之一)',
    room_types: '4 - 6 人间，个人独立衣柜、书桌与分体冷气',
    air_conditioned: '全冷气配置 (夜间与午休定时开放)',
    phone_policy: '平日集中保管于保密箱，周五傍晚至周日晚开放使用',
    study_hall: '全冷气大礼堂晚自习，专业教师值班答疑解惑',
    laundry_service: '各楼层配商业洗衣机与烘干机，设有手洗晒衣区',
    dining_plan: '全包餐模式：早、午、晚三餐及晚自习后温热宵夜',
    medical_facility: '校内设立医务急救室，专车对接芙蓉端姑惹化中央医院 (Hospital Tuanku Jaafar)',
    transit_routes: [
      {
        destination: '吉隆坡 / 雪兰莪 (KL & Selangor)',
        pickup_dropoff: '吉隆坡蕉赖利双广场 (Leisure Mall) / 八打灵再也 (PJ) / 梳邦再也 (Subang)',
        frequency: '每周五放学发车，周日傍晚返校',
        est_duration: '约 50 - 75 分钟',
        notes: '学校家协签约正规空调冷气巴士专线，定点专人接送点名。'
      },
      {
        destination: '马六甲 / 柔佛北部 (Melaka & North Johor)',
        pickup_dropoff: '马六甲爱极乐高速收费站 / 麻坡 / 居銮',
        frequency: '长周末及学校假期专线',
        est_duration: '约 70 - 120 分钟',
        notes: '假期前统一定票发车。'
      }
    ]
  },
  {
    school_id: 'chonghwa-kluang',
    school_name: '居銮中华中学',
    state: '柔佛',
    capacity: '逾 800 名寄宿生',
    room_types: '4 - 6 人间，宽敞通透，高规格卫生间配置',
    air_conditioned: '全冷气与强力吊扇结合',
    phone_policy: '严格收存保管，周六日定时与家人视频通话',
    study_hall: '分年级设立晚自习室，初一至初三专职教师督导',
    laundry_service: '校内工业洗衣烘干服务中心，配有个人洗衣袋代洗',
    dining_plan: '居銮华社口碑食堂，四菜一汤营养均衡，常年新鲜海产果品',
    medical_facility: '校医护室驻守，邻近居銮中央医院 (Hospital Enche\' Besar)',
    transit_routes: [
      {
        destination: '新山 / 新加坡边境关口 (Johor Bahru & SG Border)',
        pickup_dropoff: '新山百灵广场 / 柔佛再也 / 笨珍',
        frequency: '双周五放学及长假专车',
        est_duration: '约 75 分钟',
        notes: '极大便利柔南及新加坡外派家庭学子往返。'
      },
      {
        destination: '雪隆方向 (Kuala Lumpur)',
        pickup_dropoff: 'TBS 综合交通客运总站',
        frequency: '学校假期直通往返',
        est_duration: '约 2.5 小时',
        notes: '专车直达，免除转车劳顿。'
      }
    ]
  },
  {
    school_id: 'payfong-melaka',
    school_name: '马六甲培风中学',
    state: '马六甲',
    capacity: '约 400 名寄宿生',
    room_types: '全新思源楼宿舍 4 人间，舒适明亮，个人学习储物柜',
    air_conditioned: '全新分体变频冷气',
    phone_policy: '周日入宿统一入柜，周六日指定时段发放',
    study_hall: '思源楼多媒体阅览晚自习中心',
    laundry_service: '智慧投币洗衣机与干衣设备',
    dining_plan: '培风综合食堂包餐，每日荤素三餐及晚间爱心甜汤',
    medical_facility: '常驻校医护，邻近东方医院与中央医院',
    transit_routes: [
      {
        destination: '雪兰莪 / 吉隆坡 (Selangor & KL)',
        pickup_dropoff: '吉隆坡南湖镇综合车站 (TBS) / 蒲种 (Puchong)',
        frequency: '长周末及学期假日前夕直通校巴',
        est_duration: '约 90 分钟',
        notes: '舍监统一登记购票，安全可靠。'
      },
      {
        destination: '柔佛麻坡 / 峇株巴辖 (Muar & Batu Pahat)',
        pickup_dropoff: '麻坡车站 / 峇株市区',
        frequency: '双周专线',
        est_duration: '约 45 - 60 分钟',
        notes: '邻州学子通勤极为便利。'
      }
    ]
  },
  {
    school_id: 'sanmin-telukintan',
    school_name: '安顺三民独立中学',
    state: '霹雳',
    capacity: '约 600 名寄宿生 (外州生占比全马最高之一)',
    room_types: '四星级标准学生冷气公寓，4人房带独立卫浴',
    air_conditioned: '全天候冷气公寓标准',
    phone_policy: '平时严加看管，周末固定与父母亲情连线',
    study_hall: '高规格全冷气晚自习自习大厅，专人点名监管',
    laundry_service: '全套现代化自动洗衣烘干服务',
    dining_plan: '现代化卫生餐厅承包，三餐四菜一汤营养可口',
    medical_facility: '医务专室，直通安顺专科医院',
    transit_routes: [
      {
        destination: '吉隆坡 / 八打灵再也 (Kuala Lumpur & PJ)',
        pickup_dropoff: '甲洞 (Kepong) / 万达广场 (1 Utama) / 梳邦',
        frequency: '每周五放学发车，周日下午返校',
        est_duration: '约 1 小时 45 分钟',
        notes: '雪隆外州家长首选，每周定点豪华空调专车接送。'
      },
      {
        destination: '怡保市区 (Ipoh)',
        pickup_dropoff: '怡保美丹务边车站',
        frequency: '周末往返专线',
        est_duration: '约 50 分钟',
        notes: '车次密集准时。'
      }
    ]
  },
  {
    school_id: 'chunghwa-kelantan',
    school_name: '吉兰丹中华独立中学',
    state: '吉兰丹',
    capacity: '逾 450 名寄宿生 (全校全寄宿模式)',
    room_types: '4 - 6 人间，生态园林采光通透',
    air_conditioned: '冷气与自然通风双模',
    phone_policy: '全校全封闭式管理，无干扰专注求学',
    study_hall: '全校集中统一晚自习，师生全天同在',
    laundry_service: '专业洗衣房代洗被单校服',
    dining_plan: '丹中公营有机食堂，自给自足新鲜绿色食材',
    medical_facility: '校医护室与常备急救车辆',
    transit_routes: [
      {
        destination: '登嘉楼 / 关丹 (Terengganu & Kuantan)',
        pickup_dropoff: '瓜拉登嘉楼 / 关丹市区',
        frequency: '学校假期直通专线',
        est_duration: '约 2 - 3 小时',
        notes: '东海岸学子统一包车返乡。'
      },
      {
        destination: '吉隆坡 (Kuala Lumpur)',
        pickup_dropoff: '哥打峇鲁机场接送 / TBS 直达长途客车',
        frequency: '长假及学期末',
        est_duration: '飞机 50 分钟 / 巴士 7 小时',
        notes: '学校专车往返机场接送西马航班学子。'
      }
    ]
  }
];

export const OUTSTATION_PARENT_CHECKLIST = [
  {
    category: '必备生活行装 (Clothing & Bedding)',
    items: [
      '正规华小学生校服 3-4 套、纯白短袜 5 双、黑色/白色校鞋各 2 双',
      '舒适便服短袖 T 恤 4-5 件、长裤 2 条、运动短裤及睡衣',
      '标准单人床单套件（床单、枕头套、薄被/空调毯）2 套备换',
      '防滑洗澡拖鞋、个人衣架 15-20 个、夹子及轻便脏衣篮'
    ]
  },
  {
    category: '个人盥洗与药品 (Toiletries & Medical)',
    items: [
      '洗发水、沐浴露、牙膏牙刷装入透水塑料盥洗篮',
      '个人常备非处方轻微药物（风油精、止痛退烧药、创口贴、维他命C）交舍监报备登记',
      '防蚊液、驱蚊贴及防晒乳（热带雨林早晚防蚊必备）'
    ]
  },
  {
    category: '学业与文具 (Study & Essentials)',
    items: [
      '便携式静音护眼台灯（充电式，晚自习后宿舍书桌专用）',
      '标准 2B 铅笔、黑色/蓝色中性笔多支、尺子套件及透明笔袋',
      '带密码锁之个人贵重物品收纳箱（存放零用钱、身份证件副本）'
    ]
  },
  {
    category: '心理调适与亲子约定 (Mindset & Guidance)',
    items: [
      '入校前与孩子约定每周通话时间（如周三晚及周六日），不频繁查岗给孩子建立同伴圈空间',
      '前两周出现轻微想家（Homesick）为正常适应期，鼓励孩子多参与社团活动建立友谊',
      '保存舍监办工室电话、宿舍楼层管理员及班导师 WhatsApp 直联方式'
    ]
  }
];
