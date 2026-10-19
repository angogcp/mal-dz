# 马来西亚 63 所华文独中全名录与数据标准通鉴

> **文件说明**：本文件是“独中通”选校库与对比系统的核心元数据资产，收录了马来西亚全国 63 所华文独立中学（含 60 所传统独中、宽柔古来分校、宽柔至达城分校，以及关丹中华中学）的标准化档案与州属分布。

---

## 一、 数据架构与设计原则

为实现 PRD 中“去粗暴排名、重多维契合度、支持 TCO 费用计算与日历提醒”的要求，所有学校数据均遵循 [`data_schema.json`](file:///D:/apps2/mal-dz/data_schema.json) 标准，核心维度包括：

1. **基础建制**：官方全称（中/英/马）、创校年份、办学类型（传统/分校/特许）；
2. **教学体制（Track Type）**：
   * **单轨制**：以董总华文独中统考（UEC）为主；
   * **双轨制**：兼顾 UEC 统考与马来西亚政府 SPM 考试；
   * **三轨/自选制**：涵盖 UEC、SPM 及英国剑桥 IGCSE 国际课程，或按成绩分流班级；
3. **寄宿生活（Boarding）**：外州生核心决策项，详细记录宿舍容量、冷气条件、晚自习与电子产品管制；
4. **费用模型（TCO）**：拆解“学费 + 杂费 + 发展基金 + 宿舍伙食”，支撑一键测算首年总投入；
5. **适合度标签（Fit Tags）**：摒弃星级打分，使用“学术竞争/全人关怀/技职见长/小班教学”等多维特征标签。

---

## 二、 全国 63 所华文独中全名录（按州属划分）

### 1. 柔佛州（Johor）— 10 所（8所传统校 + 2所宽柔分校）
柔佛是全马独中生源与规模最大的州属，以单校逾万人的“宽柔学村”为代表。

| 序号 | 学校代码 (ID) | 学校中文全称 | 英文/马来文名称 | 城市/县区 | 学制类型 | 寄宿条件 | 官方网站 / 主页 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | `foonyew-jb` | 新山宽柔中学 | Foon Yew High School, Johor Bahru | 新山 (Johor Bahru) | 单轨为主 (UEC) | 无宿舍 (走读) | https://www.foonyew.edu.my |
| 2 | `foonyew-kulai` | 宽柔中学古来分校 | Foon Yew High School - Kulai | 古来 (Kulai) | 单轨为主 (UEC) | 无宿舍 (走读) | https://www.fyk.edu.my |
| 3 | `foonyew-bsa` | 宽柔中学至达城分校 | Foon Yew High School - Bandar Seri Alam | 巴西古当 (Pasir Gudang) | 单轨为主 (UEC) | 无宿舍 (走读) | https://www.foonyewsa.edu.my |
| 4 | `chonghwa-kluang` | 居銮中华中学 | Chong Hwa High School Kluang | 居銮 (Kluang) | 双轨并重 | 有宿舍 (寄宿大校) | https://www.chonghwa.edu.my |
| 5 | `chunghwa-muar` | 麻坡中化中学 | Chung Hwa High School Muar | 麻坡 (Muar) | 双轨并重 | 有宿舍 | https://www.chhs.edu.my |
| 6 | `peichun-pontian` | 笨珍培群独立中学 | Pei Chun High School Pontian | 笨珍 (Pontian) | 双轨并重 | 有宿舍 | https://peichunhs.edu.my |
| 7 | `chsbp-batupahat` | 峇株巴辖华仁中学 | Chinese High School Batu Pahat | 峇株巴辖 (Batu Pahat) | 双轨并重 | 有宿舍 | https://www.chsbp.edu.my |
| 8 | `peihwa-tangkak` | 利丰港培华独立中学 | Pei Hwa High School Sungai Mati | 东甲/利丰港 (Tangkak) | 双轨并重 | 有宿舍 | https://peihwa.edu.my |
| 9 | `sinhwa-rengit` | 龙引新文龙中华中学 | Sin Hwa High School Rengit | 龙引 (Rengit) | 双轨制/技职特色 | 有宿舍 (生态校园) | https://sblchs.edu.my |
| 10 | `yongpeng-high` | 永平独立中学 | Yong Peng High School | 永平 (Yong Peng) | 双轨制/小班 | 有宿舍 | https://yphs.edu.my |

---

### 2. 吉隆坡联邦直辖区（Kuala Lumpur）— 4 所
首都四大名校，常年入学试报名爆满，录取率低，以学术严格与升学表现著称。

| 序号 | 学校代码 (ID) | 学校中文全称 | 英文/马来文名称 | 所在区域 | 学制类型 | 寄宿条件 | 官方网站 / 主页 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 11 | `chonghwa-kl` | 吉隆坡中华独立中学 | Chong Hwa Independent High School, KL | 怡保路 (Jalan Ipoh) | 双轨制 (全员兼修) | 有宿舍 (外州生名额紧) | https://www.chonghwakl.edu.my |
| 12 | `kuencheng-kl` | 坤成中学 | Kuen Cheng High School | 赛布特拉路 (Jalan Syed Putra) | 双轨并重 | 有宿舍 (男女寄宿) | https://www.kuencheng.edu.my |
| 13 | `tsunjin-kl` | 循人中学 | Tsun Jin High School | 陆佑路 (Jalan Loke Yew) | 双轨制/严谨自律 | 无宿舍 (全走读) | https://www.tsunjin.edu.my |
| 14 | `confucian-kl` | 尊孔独立中学 | Confucian Private Secondary School | 汉惹拔路 (Hang Jebat) | 双轨/特辅与关怀班 | 有宿舍 (新建现代化宿舍) | https://www.confucian.edu.my |

---

### 3. 雪兰莪州（Selangor）— 4 所
雪兰莪独中全部坐落于巴生（华社重镇），被称为“巴生四大独中”，设施现代，校友与财团支持雄厚。

| 序号 | 学校代码 (ID) | 学校中文全称 | 英文/马来文名称 | 城市/县区 | 学制类型 | 寄宿条件 | 官方网站 / 主页 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 15 | `hinhua-klang` | 巴生兴华中学 | Hin Hua High School Klang | 巴生 (Klang) | 双轨制/科技自主学习 | 有宿舍 (全冷气公寓式) | https://www.hinhua.edu.my |
| 16 | `pinhua-klang` | 巴生滨华中学 | Pin Hwa High School Klang | 巴生 (Klang) | 双轨/领导力教育 | 有宿舍 (高层现代化宿舍) | https://www.pinhwa.edu.my |
| 17 | `chunghua-klang` | 巴生中华独立中学 | Chung Hua Independent High School Klang | 巴生 (Klang) | 双轨制/艺术特色 | 有宿舍 | https://chunghuaklang.edu.my |
| 18 | `kwanghua-klang` | 巴生光华独立中学 | Kwang Hua Private High School Klang | 巴生 (Klang) | 双轨/三轨并存 | 有宿舍 | https://kwanghua.edu.my |

---

### 4. 森美兰州（Negeri Sembilan）— 2 所
承接大量雪隆地区外溢生源的寄宿大校聚集地。

| 序号 | 学校代码 (ID) | 学校中文全称 | 英文/马来文名称 | 城市/县区 | 学制类型 | 寄宿条件 | 官方网站 / 主页 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 19 | `chunghua-seremban`| 芙蓉中华中学 | Chung Hua High School Seremban | 芙蓉 (Seremban) | 双轨/单轨可选班级 | 有宿舍 (超千人寄宿大校) | https://www.chhsban.edu.my |
| 20 | `chunghua-pd` | 波德申中华中学 | Chung Hua Middle School Port Dickson | 波德申 (Port Dickson) | 双轨制/海洋人文特色 | 有宿舍 (温馨小班寄宿) | https://chms.edu.my |

---

### 5. 马六甲州（Melaka）— 1 所
马六甲华社精神灯塔，百年名校。

| 序号 | 学校代码 (ID) | 学校中文全称 | 英文/马来文名称 | 城市/县区 | 学制类型 | 寄宿条件 | 官方网站 / 主页 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 21 | `payfong-melaka` | 马六甲培风中学 | Pay Fong High School Melaka | 马六甲市 (Melaka City) | 综合统考与自编教材 | 有宿舍 (外州生寄宿) | https://www.payfong.edu.my |

---

### 6. 霹雳州（Perak）— 9 所
全马独中数量第二多的州属，怡保三大校名闻遐迩，多所郊区独中深耕技职教育与平价普惠寄宿。

| 序号 | 学校代码 (ID) | 学校中文全称 | 英文/马来文名称 | 城市/县区 | 学制类型 | 寄宿条件 | 官方网站 / 主页 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 22 | `shenjai-ipoh` | 怡保深斋中学 | Shen Jai High School Ipoh | 怡保 (Ipoh) | 双轨并重/商科强项 | 有宿舍 | https://shenjai.edu.my |
| 23 | `poilam-ipoh` | 怡保培南独立中学 | Poi Lam High School Ipoh | 怡保 (Ipoh) | 剑桥IGCSE+统考三轨 | 有宿舍 (设施完备寄宿) | https://poilam.edu.my |
| 24 | `yukchoy-ipoh` | 怡保育才独立中学 | Yuk Choy High School Ipoh | 怡保 (Ipoh) | 汽车/美工技职与学术并重 | 有宿舍 (外州生友好) | https://www.yukchoy.edu.my |
| 25 | `hualian-taiping` | 太平华联中学 | Hua Lian High School Taiping | 太平 (Taiping) | 双轨制 | 有宿舍 | https://hualian.edu.my |
| 26 | `sanmin-telukintan`| 安顺三民独立中学 | San Min Independent High School | 安顺 (Teluk Intan) | 双轨制/纪律严明 | 有宿舍 (管理严格著名) | https://sanmin.edu.my |
| 27 | `yikching-pantai` | 班台育青中学 | Yik Ching High School Pantai Remis | 班台 (Pantai Remis) | 双轨/关怀型小班 | 有宿舍 | https://yikching.edu.my |
| 28 | `tsungwah-kk` | 江沙崇华独立中学 | Tsung Wah Private High School | 江沙 (Kuala Kangsar) | 农艺技职与普通学术 | 有宿舍 (生态特色) | https://tsungwah.edu.my |
| 29 | `nanhwa-manjung` | 曼绒南华独立中学 | Nan Hwa High School Manjung | 实兆远 (Sitiawan) | 双轨制/全人教育 | 有宿舍 | https://nanhwa.edu.my |
| 30 | `peiyuan-kampar` | 金宝培元独立中学 | Pei Yuan High School Kampar | 金宝 (Kampar) | 双轨制/学风纯朴 | 有宿舍 | https://peiyuan.edu.my |

---

### 7. 槟城州（Penang）— 5 所
涵盖全马最顶尖的学府（钟灵、日新、韩江），科技与海外升学实力极强。

| 序号 | 学校代码 (ID) | 学校中文全称 | 英文/马来文名称 | 城市/县区 | 学制类型 | 寄宿条件 | 官方网站 / 主页 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 31 | `chungling-penang`| 槟城钟灵独立中学 | Chung Ling Private High School | 乔治市 (George Town) | 双轨制/数理科技顶尖 | 有宿舍 (外州生青睐) | https://clphs.edu.my |
| 32 | `hanchiang-penang`| 槟城韩江中学 | Han Chiang High School Penang | 乔治市 (George Town) | 双轨+IGCSE三轨/创客中心 | 有宿舍 | https://hanchiang.edu.my |
| 33 | `pcg-penang` | 槟城槟华女子独立中学| Penang Chinese Girls' Private High School | 乔治市 (George Town) | 全马唯一纯女校独中 | 有宿舍 (女生寄宿) | https://binhua.edu.my |
| 34 | `phortay-penang` | 槟城菩提独立中学 | Phor Tay Private High School | 乔治市 (George Town) | 佛化教育/小班全人关怀 | 无宿舍 | https://phortay.edu.my |
| 35 | `jitsin-bm` | 大山脚日新独立中学 | Jit Sin Independent High School | 大山脚 (Bukit Mertajam) | 双轨并重/学术与纪律大校 | 有宿舍 | https://jitsin-ind.edu.my |

---

### 8. 吉打州（Kedah）— 3 所

| 序号 | 学校代码 (ID) | 学校中文全称 | 英文/马来文名称 | 城市/县区 | 学制类型 | 寄宿条件 | 官方网站 / 主页 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 36 | `keathwa-as` | 亚罗士打吉华独立中学 | Keat Hwa Private High School | 亚罗士打 (Alor Setar) | 双轨制/联课与管乐闻名 | 有宿舍 | https://keathwa.edu.my |
| 37 | `sinmin-as` | 亚罗士打新民独立中学 | Sin Min Private High School Alor Setar | 亚罗士打 (Alor Setar) | 双轨制/小班 | 有宿舍 | https://sinminas.edu.my |
| 38 | `sinmin-sp` | 双溪大年新民独立中学 | Sin Min Private High School Sungai Petani| 双溪大年 (Sungai Petani) | 双轨制/稳健学术 | 有宿舍 | https://sinmin.edu.my |

---

### 9. 吉兰丹州（Kelantan）— 1 所
东海岸华教前哨堡垒。

| 序号 | 学校代码 (ID) | 学校中文全称 | 英文/马来文名称 | 城市/县区 | 学制类型 | 寄宿条件 | 官方网站 / 主页 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 39 | `chunghwa-kelantan`| 吉兰丹中华独立中学 | Chung Hwa Independent High School Kelantan| 柯拉娜 (Kok Lanas) | 双轨制/全寄宿特色校园 | 有宿舍 (高比例寄宿) | https://chsk.edu.my |

---

### 10. 彭亨州（Pahang）— 1 所
复办历史曲折，现已全面融入统考与中马教育体系。

| 序号 | 学校代码 (ID) | 学校中文全称 | 英文/马来文名称 | 城市/县区 | 学制类型 | 寄宿条件 | 官方网站 / 主页 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 40 | `chonghwa-kuantan`| 关丹中华中学 | Chong Hwa High School Kuantan | 关丹 (Kuantan) | 双轨制/现代化寄宿 | 有宿舍 (冷气宿舍) | https://chhs.edu.my/kuantan |

---

### 11. 沙巴州（Sabah）— 9 所
东马沙巴独中体系完整，崇正与建国为亚庇龙头，其余分布在山打根、斗湖等主要城镇。

| 序号 | 学校代码 (ID) | 学校中文全称 | 英文/马来文名称 | 城市/县区 | 学制类型 | 寄宿条件 | 官方网站 / 主页 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 41 | `tshungtsin-kk` | 沙巴崇正中学 | Sabah Tshung Tsin Secondary School | 亚庇 (Kota Kinabalu) | 双轨并重/东马学术龙头 | 有宿舍 (外区生寄宿) | https://sttss.edu.my |
| 42 | `kiankok-kk` | 亚庇建国中学 | Kian Kok Middle School | 亚庇 (Kota Kinabalu) | 双轨制/注重全人与科学 | 有宿舍 | https://kiankok.edu.my |
| 43 | `bahua-tawau` | 斗湖巴华中学 | Tawau Chinese Secondary School | 斗湖 (Tawau) | 双轨制/三语教学 | 有宿舍 | https://bahua.edu.my |
| 44 | `yuyuan-sandakan`| 山打根育源中学 | Yu Yuan Secondary School | 山打根 (Sandakan) | 双轨制/资讯科技教育 | 有宿舍 | https://yuyuan.edu.my |
| 45 | `lahaddatu-ms` | 拿笃中学 | Lahad Datu Middle School | 拿笃 (Lahad Datu) | 双轨/社区微型关怀 | 有宿舍 | https://ldms.edu.my |
| 46 | `tenom-ttss` | 丹南崇正中学 | Tenom Tshung Tsin Secondary School | 丹南 (Tenom) | 双轨/农业与纯朴校风 | 有宿舍 | https://tenomttss.edu.my |
| 47 | `beaufort-ms` | 保佛中学 | Beaufort Middle School | 保佛 (Beaufort) | 双轨/小班制 | 有宿舍 | https://beaufortms.edu.my |
| 48 | `papar-ms` | 吧巴中学 | Papar Middle School | 吧巴 (Papar) | 双轨制/温馨学府 | 有宿舍 | https://paparms.edu.my |
| 49 | `peitsin-kudat` | 古达培正中学 | Pei Tsin High School | 古达 (Kudat) | 双轨/最北端华教灯塔 | 有宿舍 | https://peitsin.edu.my |

---

### 12. 砂拉越州（Sarawak）— 14 所
全马独中数量最多的州属，由砂拉越独中董总统一统筹，获得砂拉越州政府官方常年拔款与土地支持。

| 序号 | 学校代码 (ID) | 学校中文全称 | 英文/马来文名称 | 城市/县区 | 学制类型 | 寄宿条件 | 官方网站 / 主页 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 50 | `chms1-kuching` | 古晋中华第一中学 | Chung Hua Middle School No. 1 | 古晋 (Kuching) | 单双轨兼设/砂州旗舰名校 | 有宿舍 | https://chms1.edu.my |
| 51 | `chms3-kuching` | 古晋中华第三中学 | Chung Hua Middle School No. 3 | 古晋 (Kuching) | 双轨/技职与全人教育 | 有宿舍 | https://chms3.edu.my |
| 52 | `chms4-kuching` | 古晋中华第四中学 | Chung Hua Middle School No. 4 | 古晋 (Kuching) | 赏识教育/小班精品 | 无宿舍 | https://chms4.edu.my |
| 53 | `minlit-batukawa`| 石角民立中学 | Min Lit Secondary School Batu Kawa | 石角 (Batu Kawa) | 双轨/小班关怀 | 有宿舍 | https://minlit.edu.my |
| 54 | `public-serian` | 西连民众中学 | Public Secondary School Serian | 西连 (Serian) | 双轨/郊区关怀 | 有宿舍 | https://serianpublic.edu.my |
| 55 | `catholic-sibu` | 诗巫公教中学 | Catholic High School Sibu | 诗巫 (Sibu) | 双轨并重/严谨修士办学 | 有宿舍 | https://chs-sibu.edu.my |
| 56 | `wns-sibu` | 诗巫黄乃裳中学 | Wong Nai Siong Secondary School | 诗巫 (Sibu) | 双轨制/纪念先贤精神 | 有宿舍 | https://wns.edu.my |
| 57 | `guongming-sibu` | 诗巫光民中学 | Guong Ming Middle School Sibu | 诗巫 (Sibu) | 双轨/环保与生态农耕 | 有宿舍 | https://guongming.edu.my |
| 58 | `citizen-sibu` | 诗巫公民中学 | Citizen Middle School Sibu | 诗巫 (Sibu) | 双轨/小班关怀制 | 有宿舍 | https://citizen.edu.my |
| 59 | `kianghin-sibu` | 诗巫建兴中学 | Kiang Hin Middle School Sibu | 诗巫 (Sibu) | 双轨制/学风纯朴 | 有宿舍 | https://kianghin.edu.my |
| 60 | `minglik-sarikei`| 泗里街民立中学 | Ming Lik Secondary School Sarikei | 泗里街 (Sarikei) | 双轨制/乡村坚守 | 有宿舍 | https://minglik.edu.my |
| 61 | `riam-miri` | 美里廉律中学 | Riam Road Secondary School Miri | 美里 (Miri) | 三轨制(UEC+SPM+剑桥) | 有宿舍 (五星级宿舍设施) | https://riamroad.edu.my |
| 62 | `peimin-miri` | 美里培民中学 | Pei Min Middle School Miri | 美里 (Miri) | 双轨制/数理学术底蕴 | 有宿舍 | https://peimin.edu.my |
| 63 | `kaidee-bintulu` | 民都鲁开智中学 | Kai Dee Middle School Bintulu | 民都鲁 (Bintulu) | 跨州迁校成功典范/现代设施 | 有宿舍 (现代化寄宿大楼) | https://kaidee.edu.my |

---

## 三、 数据洞察与产品功能映射

1. **寄宿率分布洞察**：
   * 吉隆坡、新山四大名校（如宽柔三校全走读，隆循人全走读，隆中华/坤成名额极度紧张）；
   * 反之，**森美兰（芙中）、霹雳（三民、育才、深斋）、东马各校**拥有充足床位和成熟的生活督导体系。
   * **产品映射**：在首页和列表页突出“外州寄宿生友好专区”，这是雪隆中产家庭退而求其次或外州家长的最高频痛点。

2. **双轨 vs 单轨分布**：
   * 超过 85% 的独中已采取“双轨制（UEC + SPM 并重）”，仅少数传统大校（如宽柔、部分古晋一中班级）保持纯 UEC 单轨特色。
   * **产品映射**：比较器中必须设“考试轨道对比栏”，帮助家长直观理解孩子未来走“本地国立大学预科”还是“海外直录”。

3. **下一步工程对接**：
   本目录已同步生成为机读 JSON 文件 [`malaysia_63_duzhong_seed.json`](file:///D:/apps2/mal-dz/malaysia_63_duzhong_seed.json)，前端开发时可直接用作 Mock 数据或数据库初始种子（Database Seeder）。
