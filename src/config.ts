export interface SiteConfig {
  language: string
  title: string
  description: string
  brandName: string
}

export interface HeroConfig {
  titleText: string
  subtitleLines: string[]
  ctaLabel: string
  ctaLabel2?: string
  roomLabel: string
  /** Path from public/, e.g. "/images/hero.webp". Empty → black background. */
  fluidImagePath: string
}

export interface WorkItem {
  id: string
  title: string
  category: "painting" | "graphics"
  type: string
  status: string
  metrics: string
  /** Path from public/, e.g. "/images/work-1.webp". */
  image: string
  artist: string
  location: string
  medium: string
  article: string
}

export interface GalleryConfig {
  eyebrowLabel: string
  titleLines: string[]
  stats: { label: string; value: string }[]
  sideLabel: string
  works: WorkItem[]
}

export interface InstantConfig {
  /** 3 text lines animated in sequence. Index 0 big serif, 1 assembly, 2 caption. */
  textLines: [string, string, string] | string[]
  /** Path from public/, e.g. "/videos/ambient.mp4". Empty → black background. */
  videoPath: string
  roomLabel: string
}

export interface NavLink {
  label: string
  href?: string
}

export interface FooterConfig {
  brandText: string
  taglineLines: string[]
  navigationHeading: string
  navigationLinks: NavLink[]
  contactHeading: string
  contactLinks: NavLink[]
  copyright: string
  creditText: string
}

export interface WorkDetailConfig {
  backLabel: string
  artistLabel: string
  locationLabel: string
  mediumLabel: string
  backToGalleryLabel: string
  metaRoomSuffix: string
  footerNote: string
  notFoundTitle: string
  notFoundLink: string
}

export const siteConfig: SiteConfig = {
  language: "ru",
  title: "Andrey Vebov — Художник",
  description: "Портфолио художника Андрея Вебова. Живопись маслом, темпера, акварель и графика карандашом.",
  brandName: "Andrey Vebov",
}

export const heroConfig: HeroConfig = {
  titleText: "Andrey Vebov",
  subtitleLines: [
    "Художник, работающий в традиционных техниках:",
    "масло, темпера, акварель, карандаш.",
    "Каждая работа — это застывшее мгновение, увиденное и прочувствованное.",
  ],
  ctaLabel: "Живопись",
  ctaLabel2: "Графика",
  roomLabel: "Портфолио",
  fluidImagePath: "/images/hero-painting.webp",
}

export const paintingConfig: GalleryConfig = {
  eyebrowLabel: "СЕКЦИЯ 01",
  titleLines: ["Живопись"],
  stats: [
    { label: "Техники", value: "Масло, Темпера, Акварель" },
    { label: "Работ", value: "33" },
    { label: "Годы", value: "2015 — 2026" },
  ],
  sideLabel: "МАСЛО · ТЕМПЕРА · АКВАРЕЛЬ",
  works: [
    {
      id: "P-001",
      title: "ВЕЧЕРНИЙ_ЛОВ",
      category: "painting",
      type: "пейзаж",
      status: "2026",
      metrics: "100 × 50 см",
      image: "/images/work-01.webp",
      artist: "Andrey Vebov",
      location: "Испания",
      medium: "Масло, холст",
      article:
        "В путешествии по Испании впервые увидел, как рыбаки ловят скатов. Это зрелище заворожило моё воображение — сумерки, мерцание воды, силуэты людей на берегу. Впечатления от той встречи я перенёс в эту картину.\n\nЗакатный свет, отражения на влажном песке, фигура рыбака, замершего в ожидании — всё это сложилось в образ, который хотелось запечатлеть. Работа написана в один сеанс, пока эмоции были свежи.",
    },
    {
      id: "P-002",
      title: "КАБАНЧИКИ",
      category: "painting",
      type: "анималистика",
      status: "2026",
      metrics: "50 × 60 см",
      image: "/images/work-02.webp",
      artist: "Andrey Vebov",
      location: "Лес",
      medium: "Масло, холст",
      article:
        "Неожиданная встреча в лесу с двумя дикими кабанами. На моё счастье, они пробежали мимо, но впечатление от этой встречи осталось надолго.\n\nВ картине я постарался передать динамику момента, напряжение и красоту дикой природы. Контраст тёмных силуэтов животных и светлого лесного фона создаёт ощущение внезапности и естественной гармонии.",
    },
    {
      id: "P-003",
      title: "ПИНСК_В_СНЕГУ",
      category: "painting",
      type: "пейзаж",
      status: "2024",
      metrics: "50 × 60 см",
      image: "/images/work-03.webp",
      artist: "Andrey Vebov",
      location: "Пинск",
      medium: "Масло, холст",
      article:
        "Зимний Пинск — город, знакомый до последней улицы. Снег ложится мягко, укутывая дома и деревья, превращая привычный пейзаж в тихую зимнюю сказку.\n\nВ этой работе я стремился передать не столько детали, сколько ощущение морозного утра — приглушённый свет, голубоватые тени, хрупкую красоту первого снега.",
    },
    {
      id: "P-004",
      title: "ВЕЧЕРНИЙ_ПИТЕР",
      category: "painting",
      type: "городской пейзаж",
      status: "2019",
      metrics: "50 × 40 см",
      image: "/images/work-11.webp",
      artist: "Andrey Vebov",
      location: "Санкт-Петербург",
      medium: "Масло, холст",
      article:
        "Вечерний Санкт-Петербург — город белых ночей и отражений. В этой работе я попытался поймать то особое питерское настроение, когда закатное небо встречается с тёмной водой каналов.\n\nМягкий свет фонарей, силуэты мостов, влажные камни набережных — всё это создаёт атмосферу, которую хочется возвращать снова и снова.",
    },
    {
      id: "P-005",
      title: "УТРО_В_ПИНСКЕ",
      category: "painting",
      type: "пейзаж",
      status: "2019",
      metrics: "50 × 40 см",
      image: "/images/work-08.webp",
      artist: "Andrey Vebov",
      location: "Пинск",
      medium: "Масло, холст",
      article:
        "Раннее утро в Пинске — тишина и свежесть нового дня. Город только просыпается, солнце золотит крыши домов, а над рекой поднимается лёгкий туман.\n\nВ этом этюде я стремился передать ощущение покоя и умиротворения, которое бывает только в первые часы наступающего дня.",
    },
    {
      id: "P-006",
      title: "НАБЕРЕЖНАЯ_В_ПИНСКЕ",
      category: "painting",
      type: "пейзаж",
      status: "2019",
      metrics: "50 × 40 см",
      image: "/images/work-06.webp",
      artist: "Andrey Vebov",
      location: "Пинск",
      medium: "Масло, холст",
      article:
        "Набережная Пинска — место, где течение реки задаёт ритм городской жизни. В этой работе я сосредоточился на игре света на водной глади и отражениях прибрежных домов.\n\nЗнакомый с детства пейзаж открывается по-новому, когда смотришь на него сквозь призму художественного восприятия.",
    },
    {
      id: "P-007",
      title: "УТРО_НА_ПЛЯЖЕ",
      category: "painting",
      type: "пейзаж",
      status: "2015",
      metrics: "30 × 40 см",
      image: "/images/work-09.webp",
      artist: "Andrey Vebov",
      location: "Пляж",
      medium: "Масло, холст",
      article:
        "Раннее утро на пляже — пустой берег, прохладный песок и первые лучи солнца, окрашивающие небо в розовые тона. Море дышит спокойно, волны лениво набегают на берег.\n\nВ этой работе я старался передать то особое утреннее чувство, когда весь мир только начинается и принадлежит только тебе.",
    },
    {
      id: "P-008",
      title: "МОРЕ_ЖДЁТ",
      category: "painting",
      type: "марина",
      status: "2021",
      metrics: "40 × 50 см",
      image: "/images/work-13.webp",
      artist: "Andrey Vebov",
      location: "Побережье",
      medium: "Масло, холст",
      article:
        "Море в предвкушении — так можно описать этот сюжет. Неспокойная водная гладь, облака, собирающиеся в грозовые тучи, и одинокий парус на горизонте.\n\nКонтраст тёмного неба и светлой полосы на горизонте создаёт напряжение, которое делает этот пейзаж особенно выразительным.",
    },
    {
      id: "P-009",
      title: "ГРОЗДЬ",
      category: "painting",
      type: "натюрморт",
      status: "2023",
      metrics: "40 × 50 см",
      image: "/images/work-12.webp",
      artist: "Andrey Vebov",
      location: "Испания",
      medium: "Масло, холст",
      article:
        "Гроздь винограда в солнечном луче явдохновился на экскурсии на винограднике в Испани и попытался изобразить в импрессионистком стиле.",
    },
    {
      id: "P-010",
      title: "БУКЕТ",
      category: "painting",
      type: "натюрморт",
      status: "2017",
      metrics: "22 × 30 см",
      image: "/images/work-10.webp",
      artist: "Andrey Vebov",
      location: "Мастерская",
      medium: "Масло, холст",
      article:
        "Скромный букет полевых цветов — простая, но вдохновляющая натура. Каждый цветок уникален: свои лепестки, свой изгиб стебля, свой оттенок.\n\nВ этом натюрморте я стремился передать свежесть и хрупкость живых цветов, их недолгую, но яркую красоту.",
    },
    {
      id: "P-011",
      title: "НАТЮРМОРТ_С_ГРУШАМИ",
      category: "painting",
      type: "натюрморт",
      status: "2017",
      metrics: "30 × 30 см",
      image: "/images/work-07.webp",
      artist: "Andrey Vebov",
      location: "Мастерская",
      medium: "Масло, холст",
      article:
        "Натюрморт с грушами — классическая постановка, в которой важно передать не только форму и цвет предметов, но и их материальность, фактуру.\n\nТёплые жёлто-зелёные тона груш в сочетании с нейтральным фоном создают гармоничную композицию. Особое внимание уделено светотеневой моделировке объёмов.",
    },
    {
      id: "P-012",
      title: "ОТРАЖЕНИЕ_В_ПРУДУ",
      category: "painting",
      type: "пейзаж",
      status: "2020",
      metrics: "70 × 40 см",
      image: "/images/work-17.webp",
      artist: "Andrey Vebov",
      location: "Пруд",
      medium: "Масло, холст",
      article:
        "Отражение в пруду — сюжет, который притягивает взгляд. Неподвижная водная гладь становится зеркалом, удваивая прибрежные деревья и небо.\n\nВ этой работе я сосредоточился на игре отражений, на том, как вода искажает и одновременно уточняет формы. Каждый мазок ложится в направлении отражённого света.",
    },
    {
      id: "P-013",
      title: "ПИНСКИЕ_БОЛОТА",
      category: "painting",
      type: "пейзаж",
      status: "2018",
      metrics: "30 × 20 см",
      image: "/images/work-18.webp",
      artist: "Andrey Vebov",
      location: "Пинск",
      medium: "Масло, холст",
      article:
        "Пинские болота — уникальный ландшафт Полесья. Бескрайние водные просторы, поросшие камышом и осокой, создают особый, немного суровый, но величественный пейзаж.\n\nВ этой работе я попытался передать атмосферу этого края: приглушённый свет, высокое небо, бесконечную линию горизонта.",
    },
    {
      id: "P-014",
      title: "СКВЕРИК_В_БАРСЕЛОНЕ",
      category: "painting",
      type: "городской пейзаж",
      status: "2020",
      metrics: "60 × 50 см",
      image: "/images/work-19.webp",
      artist: "Andrey Vebov",
      location: "Барселона",
      medium: "Масло, холст",
      article:
        "Уютный скверик в Барселоне — тенистые аллеи, мозаичные скамейки, игра солнечных пятен на листве. Городской пейзаж, полный жизни и южного колорита.\n\nЯркие краски Средиземноморья, контраст света и тени — в этой работе я старался передать атмосферу неторопливого испанского дня.",
    },
    {
      id: "P-015",
      title: "СКОРО_ВЕЧЕР",
      category: "painting",
      type: "городской пейзаж",
      status: "2018",
      metrics: "30 × 40 см",
      image: "/images/work-20.webp",
      artist: "Andrey Vebov",
      location: "",
      medium: "Масло, холст",
      article:
        "Вечерний городской пейзаж — мягкий свет заката, силуэты домов, тихая атмосфера уходящего дня. \n\nВ этой работе я стремился передать переходное состояние природы, когда день уступает место вечерним сумеркам.",
    },
    {
      id: "P-016",
      title: "В_ОЖИДАНИИ_ВОЛНЫ",
      category: "painting",
      type: "маринистика",
      status: "2020",
      metrics: "30 × 30 см",
      image: "/images/work-21.webp",
      artist: "Andrey Vebov",
      location: "",
      medium: "Масло, холст",
      article:
        "Морской пейзаж в ожидании волны — спокойная гладь воды, лёгкий бриз, предвкушение движения стихии.\n\nЛаконичная композиция, сдержанная цветовая гамма — работа о моменте тишины перед переменами.",
    },
    {
      id: "P-017",
      title: "БЕРЕГА",
      category: "painting",
      type: "пейзаж",
      status: "2022",
      metrics: "50 × 60 см",
      image: "/images/work-24.webp",
      artist: "Andrey Vebov",
      location: "",
      medium: "Масло, холст",
      article:
        "Берега — размышление о линии соприкосновения стихий, о границе между водой и сушей, о вечном движении волн.",
    },
    {
      id: "P-018",
      title: "ДЕВУШКА_ПЕРЕОСМЫСЛЕНИЕ",
      category: "painting",
      type: "портрет",
      status: "2025",
      metrics: "40 × 50 см",
      image: "/images/work-25.webp",
      artist: "Andrey Vebov",
      location: "",
      medium: "Холст на арголите",
      article:
        "Переосмысление женского образа — попытка увидеть знакомое в новом свете, найти свежее прочтение классической темы.",
    },
    {
      id: "P-019",
      title: "БЕСЕДА",
      category: "painting",
      type: "жанровая сцена",
      status: "2025",
      metrics: "40 × 50 см",
      image: "/images/work-26.webp",
      artist: "Andrey Vebov",
      location: "",
      medium: "Масло, холст",
      article:
        "Непринуждённый разговор в тёплой атмосфере. Работа о моменте общения, когда слова не так важны, как само присутствие.",
    },
    {
      id: "P-020",
      title: "А_ДОЖДЬ_ИДЁТ",
      category: "painting",
      type: "пейзаж",
      status: "2025",
      metrics: "40 × 50 см",
      image: "/images/work-27.webp",
      artist: "Andrey Vebov",
      location: "",
      medium: "Масло, холст",
      article:
        "Дождливый день — особое состояние природы, когда мир словно замирает, слышен только шум капель и запах влажной земли.",
    },
    {
      id: "P-021",
      title: "СОЛНЦЕ_НА_СОСНАХ",
      category: "painting",
      type: "пейзаж",
      status: "2016",
      metrics: "30 × 20 см",
      image: "/images/work-28.webp",
      artist: "Andrey Vebov",
      location: "",
      medium: "Холст на оргалите",
      article:
        "Солнечный свет, пробивающийся сквозь сосновые ветви — игра теней и бликов на стволах и лесной подстилке.",
    },
    {
      id: "P-022",
      title: "КРАСНЫЕ_ДОМИКИ_В_СОЛИГОРСКЕ",
      category: "painting",
      type: "городской пейзаж",
      status: "2021",
      metrics: "40 × 30 см",
      image: "/images/work-29.webp",
      artist: "Andrey Vebov",
      location: "Солигорск",
      medium: "Масло, холст",
      article:
        "Яркие красные домики в Солигорске — городской пейзаж с характерным колоритом белорусского провинциального города.",
    },
    {
      id: "P-023",
      title: "УТРО_НА_МОРЕ",
      category: "painting",
      type: "марина",
      status: "2023",
      metrics: "30 × 30 см",
      image: "/images/work-30.webp",
      artist: "Andrey Vebov",
      location: "",
      medium: "Холст на оргалите",
      article:
        "Раннее утро на море — тишина и покой, первые лучи солнца окрашивают небо и воду в нежные пастельные тона.",
    },
    {
      id: "P-024",
      title: "ВЕСНА",
      category: "painting",
      type: "пейзаж",
      status: "2023",
      metrics: "40 × 30 см",
      image: "/images/work-31.webp",
      artist: "Andrey Vebov",
      location: "",
      medium: "Масло, холст",
      article:
        "Весеннее настроение — пробуждение природы, первая зелень, свежий ветер и ощущение обновления жизни.",
    },
    {
      id: "P-025",
      title: "НАРЦИССЫ",
      category: "painting",
      type: "натюрморт",
      status: "2024",
      metrics: "30 × 40 см",
      image: "/images/work-36.webp",
      artist: "Andrey Vebov",
      location: "Мастерская",
      medium: "Масло, холст на оргалите",
      article:
        "Яркие весенние нарциссы — словно маленькие солнца на тёмном фоне. В этом натюрморте я стремился передать свежесть и жизненную силу первых весенних цветов, их хрупкую, но уверенную красоту.\n\nКонтраст жёлтых лепестков и глубокого тёмного фона создаёт ощущение света, исходящего изнутри самих цветов.",
    },
    {
      id: "P-026",
      title: "ЗНАКОМЫЙ_ПИТЕР",
      category: "painting",
      type: "городской пейзаж",
      status: "2020",
      metrics: "50 × 40 см",
      image: "/images/work-37.webp",
      artist: "Andrey Vebov",
      location: "Санкт-Петербург",
      medium: "Масло, холст",
      article:
        "Знакомый Питер — город, который узнаёшь с первого взгляда. В этой работе я попытался передать атмосферу северной столицы: особый свет, архитектурные силуэты, настроение улиц и набережных.\n\nКаждый уголок этого города хранит свою историю, и моя задача была — остановить одно из таких узнаваемых мгновений.",
    },
    {
      id: "P-027",
      title: "ЛИМОНЫ",
      category: "painting",
      type: "натюрморт",
      status: "2024",
      metrics: "40 × 30 см",
      image: "/images/work-38.webp",
      artist: "Andrey Vebov",
      location: "Мастерская",
      medium: "Масло, холст на оргалите",
      article:
        "Цитрусовые в ракурсе сверху — неожиданный взгляд на привычные формы. Композиция строится на ритме кругов и овалов, на игре жёлтых оттенков и зелёных теней.",
    },
    {
      id: "P-028",
      title: "ЯБЛОКИ",
      category: "painting",
      type: "натюрморт",
      status: "2024",
      metrics: "40 × 30 см",
      image: "/images/work-40.webp",
      artist: "Andrey Vebov",
      location: "Мастерская",
      medium: "Масло, холст на оргалите",
      article:
        "Яблоки, увиденные сверху — классический натюрморт в необычном ракурсе. Каждый плод уникален по форме и цвету, а вместе они создают гармоничную композицию.",
    },
    {
      id: "P-029",
      title: "ВИНОГРАД",
      category: "painting",
      type: "натюрморт",
      status: "2024",
      metrics: "40 × 30 см",
      image: "/images/work-41.webp",
      artist: "Andrey Vebov",
      location: "Мастерская",
      medium: "Масло, холст на оргалите",
      article:
        "Виноград в ракурсе сверху — игра света на глянцевых ягодах, переплетение веточек и листьев. Каждая ягода — отдельный объём, вместе создающий богатую фактурой поверхность.",
    },
    {
      id: "P-030",
      title: "УТРЕННИЙ_КОФЕ",
      category: "painting",
      type: "натюрморт",
      status: "2023",
      metrics: "30 × 40 см",
      image: "/images/work-39.webp",
      artist: "Andrey Vebov",
      location: "Мастерская",
      medium: "Масло, холст на оргалите",
      article:
        "Утренний кофе — ритуал, с которого начинается день. Тёплые тона, мягкий свет, уютная атмосфера утреннего мгновения.",
    },
    {
      id: "P-031",
      title: "ДОМИК_В_ДЕРЕВНЕ",
      category: "painting",
      type: "пейзаж",
      status: "2021",
      metrics: "50 × 40 см",
      image: "/images/work-42.webp",
      artist: "Andrey Vebov",
      location: "Деревня",
      medium: "Масло, холст",
      article:
        "Домик в деревне — простой и уютный пейзаж, напоминающий о тихой жизни вдали от городской суеты. Тёплые тона, зелень, умиротворение.",
    },
    {
      id: "P-032",
      title: "ИСПАНСКИЙ_ЭТЮД",
      category: "painting",
      type: "пейзаж",
      status: "2020",
      metrics: "40 × 30 см",
      image: "/images/work-43.webp",
      artist: "Andrey Vebov",
      location: "Испания",
      medium: "Масло, холст на оргалите",
      article:
        "Испанский этюд — быстрая работа на пленэре, в которой старался передать атмосферу южного солнца, тёплый свет и колорит Испании.",
    },
    {
      id: "P-033",
      title: "ГАВАНЬ_СУМЕРКИ",
      category: "painting",
      type: "марина",
      status: "2019",
      metrics: "40 × 30 см",
      image: "/images/work-50.webp",
      artist: "Andrey Vebov",
      location: "Гавань",
      medium: "Масло, грунтованная бумага",
      article: "Сумерки в гавани — тихий вечер, отражения огней на воде, силуэты кораблей у причала. Атмосфера покоя и уходящего дня.",
    },
  ],
}

export const graphicsConfig: GalleryConfig = {
  eyebrowLabel: "СЕКЦИЯ 02",
  titleLines: ["Графика"],
  stats: [
    { label: "Техники", value: "Карандаш, Акварель, Пастель" },
    { label: "Работ", value: "17" },
    { label: "Годы", value: "2015 — 2026" },
  ],
  sideLabel: "КАРАНДАШ · АКВАРЕЛЬ",
  works: [
    {
      id: "G-001",
      title: "ОБЪЁМНЫЕ_ФИГУРЫ",
      category: "graphics",
      type: "учебный рисунок",
      status: "2018",
      metrics: "",
      image: "/images/work-14.webp",
      artist: "Andrey Vebov",
      location: "Мастерская",
      medium: "Карандаш, бумага",
      article:
        "Учебная работа по построению геометрических форм. В рисунке исследуется взаимодействие света и тени на объёмных телах.\n\nШтриховка разной плотности позволяет передать фактуру поверхностей — от гладкого шара до шероховатого куба. Такие упражнения — основа академического рисунка, они помогают чувствовать форму и объём.",
    },
    {
      id: "G-002",
      title: "ЛОШАДЬ",
      category: "graphics",
      type: "рисунок",
      status: "2017",
      metrics: "",
      image: "/images/work-16.webp",
      artist: "Andrey Vebov",
      location: "Мастерская",
      medium: "Карандаш, бумага",
      article:
        "Рисунок лошади — одна из любимых тем в графике. Пластика и грация этого животного даёт бесконечные возможности для изучения анатомии и движения.\n\nВ этой работе я сосредоточился на силуэте и мускулатуре, стараясь передать мощь и красоту контура минимальными средствами.",
    },
    {
      id: "G-003",
      title: "РИСУНОК",
      category: "graphics",
      type: "рисунок",
      status: "2017",
      metrics: "",
      image: "/images/work-15.webp",
      artist: "Andrey Vebov",
      location: "Мастерская",
      medium: "Карандаш, бумага",
      article:
        "Набросок с натуры — быстрый рисунок, в котором важно поймать главное: характер, пропорции, настроение. Минимум деталей, максимум выразительности.",
    },
    {
      id: "G-004",
      title: "ЗАКАТ_В_COMA_RUGA",
      category: "graphics",
      type: "акварель",
      status: "2015",
      metrics: "17 × 12 см",
      image: "/images/water-01.webp",
      artist: "Andrey Vebov",
      location: "Coma-ruga",
      medium: "Акварель",
      article:
        "Закат на пляже Coma-ruga в Испании. Акварель позволяет передать прозрачность неба и мягкость вечернего света лучше всего.\n\nФормат 17×112 см — панорамный вид, растянувшийся вдоль береговой линии. В этой работе я экспериментировал с мокрым по мокрому, чтобы добиться плавных переходов цвета.",
    },
    {
      id: "G-005",
      title: "ПИТЕР",
      category: "graphics",
      type: "акварель",
      status: "2015",
      metrics: "17 × 12 см",
      image: "/images/water-02.webp",
      artist: "Andrey Vebov",
      location: "Санкт-Петербург",
      medium: "Акварель",
      article:
        "Питерская акварель — город дождей и отражений. Панорамный вид на Неву, разводные мосты и классические фасады.\n\nАкварельная техника идеально подходит для передачи влажной атмосферы Петербурга, его особого световоздушного настроения.",
    },
    {
      id: "G-006",
      title: "ЯЩЕРИЦА",
      category: "graphics",
      type: "акварель",
      status: "2015",
      metrics: "17 × 12 см",
      image: "/images/water-03.webp",
      artist: "Andrey Vebov",
      location: "Coma-ruga",
      medium: "Акварель",
      article:
        "Ящерица на камнях — сюжет, подсказанный самой природой. Акварель позволяет проработать тонкие переходы цвета на чешуе и фактуру камня.\n\nРабота выполнена в панорамном формате, что добавляет сцене пространственности.",
    },
    {
      id: "G-007",
      title: "ОДИНОКАЯ_РОЗА",
      category: "graphics",
      type: "пастель",
      status: "2018",
      metrics: "",
      image: "/images/work-23.webp",
      artist: "Andrey Vebov",
      location: "Мастерская",
      medium: "Пастель, бумага",
      article:
        "Одинокая роза — нежный и хрупкий образ. Пастель позволяет передать бархатистость лепестков и мягкие переходы цвета.\n\nВ этой работе я сосредоточился на тонких тональных переходах, используя пастель за её способность создавать воздушные, дышащие изображения.",
    },
    {
      id: "G-008",
      title: "ОТТЕНКИ_УВЯДАЮЩИХ_ЦВЕТОВ",
      category: "graphics",
      type: "акварель",
      status: "2016",
      metrics: "17 × 12 см",
      image: "/images/work-22.webp",
      artist: "Andrey Vebov",
      location: "Мастерская",
      medium: "Акварель, бумага",
      article:
        "Увядающие цветы — особенная красота. В них есть меланхолия и достоинство, они напоминают о быстротечности времени.\n\nАкварель идеально подходит для этой темы: прозрачные слои краски, плавные переходы от цвета к цвету передают хрупкость увядающих лепестков.",
    },
    {
      id: "G-009",
      title: "ГИПС_В_ФОРМЕ",
      category: "graphics",
      type: "учебный рисунок",
      status: "2026",
      metrics: "30 × 40 см",
      image: "/images/work-32.webp",
      artist: "Andrey Vebov",
      location: "Мастерская",
      medium: "Карандаш, бумага",
      article:
        "Гипсовая форма — учебная постановка для изучения светотени и объёмов. Штриховка передаёт фактуру гипса, плавные переходы от света к тени.",
    },
    {
      id: "G-010",
      title: "ФОРМА",
      category: "graphics",
      type: "учебный рисунок",
      status: "2026",
      metrics: "30 × 40 см",
      image: "/images/work-33.webp",
      artist: "Andrey Vebov",
      location: "Мастерская",
      medium: "Карандаш, бумага",
      article:
        "Учебный рисунок геометрической формы. Изучение построения, перспективы и тональных отношений в академическом рисунке.",
    },
    {
      id: "G-011",
      title: "УХО_В_ГИПСЕ",
      category: "graphics",
      type: "учебный рисунок",
      status: "2026",
      metrics: "30 × 40 см",
      image: "/images/work-34.webp",
      artist: "Andrey Vebov",
      location: "Мастерская",
      medium: "Карандаш, бумага",
      article:
        "Гипсовое ухо — классическая учебная постановка для изучения анатомии и пластики формы. Детальная проработка светотени.",
    },
    {
      id: "G-012",
      title: "УЧЕБНЫЙ_РИСУНОК",
      category: "graphics",
      type: "учебный рисунок",
      status: "2026",
      metrics: "30 × 40 см",
      image: "/images/work-35.webp",
      artist: "Andrey Vebov",
      location: "Мастерская",
      medium: "Карандаш, бумага",
      article:
        "Академический рисунок гипсовой головы — изучение пропорций, анатомического строения и тональной моделировки объёма.",
    },
    {
      id: "G-013",
      title: "ГИПСОВАЯ_ФОРМА",
      category: "graphics",
      type: "учебный рисунок",
      status: "2018",
      metrics: "",
      image: "/images/work-44.webp",
      artist: "Andrey Vebov",
      location: "Мастерская",
      medium: "Карандаш, бумага",
      article: "Учебный рисунок гипсовой формы — отработка тональных отношений и объёмов в академическом рисунке.",
    },
    {
      id: "G-014",
      title: "ГОЛОВА_ГИПСОВАЯ",
      category: "graphics",
      type: "учебный рисунок",
      status: "2018",
      metrics: "",
      image: "/images/work-45.webp",
      artist: "Andrey Vebov",
      location: "Мастерская",
      medium: "Карандаш, бумага",
      article: "Учебная работа — гипсовая голова. Изучение пропорций лица и тональной моделировки объёмов.",
    },
    {
      id: "G-015",
      title: "НОС",
      category: "graphics",
      type: "учебный рисунок",
      status: "2018",
      metrics: "",
      image: "/images/work-46.webp",
      artist: "Andrey Vebov",
      location: "Мастерская",
      medium: "Карандаш, бумага",
      article: "Фрагмент гипсовой головы — нос. Детальная проработка формы, светотени и анатомии.",
    },
    {
      id: "G-016",
      title: "ТОРС",
      category: "graphics",
      type: "учебный рисунок",
      status: "2018",
      metrics: "",
      image: "/images/work-47.webp",
      artist: "Andrey Vebov",
      location: "Мастерская",
      medium: "Карандаш, бумага",
      article: "Рисунок гипсового торса — изучение пластики человеческого тела, мускулатуры и тональных переходов.",
    },
    {
      id: "G-017",
      title: "ГЛАЗА",
      category: "graphics",
      type: "учебный рисунок",
      status: "2018",
      metrics: "",
      image: "/images/work-48.webp",
      artist: "Andrey Vebov",
      location: "Мастерская",
      medium: "Карандаш, бумага",
      article: "Фрагмент гипсовой головы — глаза. Детальное изучение формы и тональной проработки.",
    },
    {
      id: "G-018",
      title: "ГОЛОВА_РЕБЁНКА",
      category: "graphics",
      type: "учебный рисунок",
      status: "2016",
      metrics: "",
      image: "/images/work-49.webp",
      artist: "Andrey Vebov",
      location: "Мастерская",
      medium: "Карандаш, бумага",
      article: "Рисунок головы ребёнка — изучение пропорций детского лица, мягкость линий и тональных переходов.",
    },
  ],
}

export const allWorks: WorkItem[] = [
  ...paintingConfig.works,
  ...graphicsConfig.works,
]

export const instantConfig: InstantConfig = {
  textLines: ["Кисть", "останавливает мгновение, которое иначе исчезло бы навсегда", "Каждая работа — это диалог между замыслом и материалом."],
  videoPath: "/videos/ambient.mp4",
  roomLabel: "Мастерская",
}

export const footerConfig: FooterConfig = {
  brandText: "Andrey Vebov",
  taglineLines: [
    "ХУДОЖНИК",
    "МАСЛО · ТЕМПЕРА · КАРАНДАШ",
    "ЖИВОПИСЬ И ГРАФИКА",
  ],
  navigationHeading: "РАЗДЕЛЫ",
  navigationLinks: [
    { label: "Главная", href: "#" },
    { label: "Живопись", href: "#painting" },
    { label: "Графика", href: "#graphics" },
  ],
  contactHeading: "КОНТАКТЫ",
  contactLinks: [
    { label: "Instagram", href: "https://instagram.com/andrey_vebov" },
    { label: "ArtHelper", href: "https://www.arthelper.com/andreyvebov" },
    { label: "Email", href: "mailto:andreyvebov@gmail.com" },
  ],
  copyright: "© 2026 Andrey Vebov",
  creditText: "СДЕЛАНО С ЛЮБОВЬЮ К ИСКУССТВУ",
}

export const workDetailConfig: WorkDetailConfig = {
  backLabel: "← НАЗАД",
  artistLabel: "Художник",
  locationLabel: "Место",
  mediumLabel: "Материал",
  backToGalleryLabel: "← В галерею",
  metaRoomSuffix: "",
  footerNote: "Andrey Vebov",
  notFoundTitle: "404 · Работа не найдена",
  notFoundLink: "← НА ГЛАВНУЮ",
}

// Helper map for WorkDetail lookups
export const worksById: Record<string, WorkItem> = Object.fromEntries(
  allWorks.map((w) => [w.id.toLowerCase(), w]),
)
