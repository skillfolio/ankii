/**
 * Корпоративные тренинги по Soft Skills
 * Программы формируются на основе ДПО-курсов и онлайн-курсов Skillfolio
 * Под заказ под конкретную компанию
 */

export interface SoftCorporateTopic {
  id: string;
  slug: string;
  title: string;
  category: "eq" | "communication" | "leadership" | "teamwork" | "thinking" | "stress";
  description: string;
  outcomes: string[];
  formats: ("workshop" | "training" | "coaching" | "assessment")[];
  durationHours: number[];  // варианты длительности: [4, 8, 16]
  groupSize: [number, number]; // [min, max]
  audienceRoles: string[];
}

export const softCorporateTopics: SoftCorporateTopic[] = [
  {
    id: "eq-team",
    slug: "eq-dlya-komandy",
    title: "Эмоциональный интеллект для команды",
    category: "eq",
    description: "Развитие эмоциональной компетентности сотрудников — основы устойчивых отношений в коллективе и эффективного взаимодействия.",
    outcomes: [
      "Улучшение психологического климата в команде",
      "Снижение конфликтов и недопонимания",
      "Повышение вовлечённости и удержание сотрудников",
    ],
    formats: ["training", "workshop"],
    durationHours: [8, 16],
    groupSize: [8, 30],
    audienceRoles: ["Все сотрудники", "Руководители", "HR"],
  },
  {
    id: "eq-leaders",
    slug: "eq-dlya-rukovoditeley",
    title: "ЭИ для руководителей",
    category: "eq",
    description: "Лидерство на основе эмоционального интеллекта: как управлять командой через понимание эмоций, а не только задачи.",
    outcomes: [
      "Рост вовлечённости команды",
      "Снижение текучести кадров",
      "Развитие лидерского присутствия",
    ],
    formats: ["training", "coaching"],
    durationHours: [8, 16, 24],
    groupSize: [6, 20],
    audienceRoles: ["Руководители высшего и среднего звена"],
  },
  {
    id: "communication-corp",
    slug: "kommunikacii-v-komande",
    title: "Эффективные коммуникации в команде",
    category: "communication",
    description: "Инструменты для чёткой, уважительной и результативной коммуникации внутри компании и с клиентами.",
    outcomes: [
      "Сокращение времени на совещания",
      "Устранение недопонимания в задачах",
      "Улучшение клиентского сервиса",
    ],
    formats: ["training", "workshop"],
    durationHours: [8, 16],
    groupSize: [10, 30],
    audienceRoles: ["Все сотрудники", "Менеджеры", "Специалисты по продажам"],
  },
  {
    id: "negotiations-corp",
    slug: "peregovory-dlya-biznesa",
    title: "Переговоры для бизнеса",
    category: "communication",
    description: "Практические стратегии ведения сложных переговоров с клиентами, партнёрами и внутри компании.",
    outcomes: [
      "Увеличение конверсии переговоров",
      "Снижение дисконтирования при продажах",
      "Развитие переговорной уверенности",
    ],
    formats: ["training", "workshop"],
    durationHours: [8, 16],
    groupSize: [8, 20],
    audienceRoles: ["Менеджеры по продажам", "Руководители", "Закупщики"],
  },
  {
    id: "leadership-corp",
    slug: "liderstvo-v-komande",
    title: "Лидерство и управление командой",
    category: "leadership",
    description: "Программа развития лидерских компетенций: постановка целей, мотивация, делегирование, обратная связь.",
    outcomes: [
      "Рост управленческой эффективности",
      "Улучшение командных показателей",
      "Развитие преемников и Hi-Po сотрудников",
    ],
    formats: ["training", "coaching", "assessment"],
    durationHours: [16, 24, 40],
    groupSize: [6, 20],
    audienceRoles: ["Руководители всех уровней"],
  },
  {
    id: "teambuilding",
    slug: "sozdanie-komandy",
    title: "Формирование и развитие команды",
    category: "teamwork",
    description: "Инструменты командообразования: роли в команде, психологическая безопасность, синхронизация ценностей.",
    outcomes: [
      "Повышение сплочённости команды",
      "Ускорение адаптации новых сотрудников",
      "Снижение внутренних конфликтов",
    ],
    formats: ["workshop", "training"],
    durationHours: [8, 16],
    groupSize: [8, 30],
    audienceRoles: ["Команды", "Новые подразделения"],
  },
  {
    id: "critical-thinking-corp",
    slug: "kriticheskoe-myshlenie-korporativ",
    title: "Критическое и системное мышление",
    category: "thinking",
    description: "Развитие аналитических навыков для принятия качественных решений и работы со сложными задачами.",
    outcomes: [
      "Ускорение принятия решений",
      "Снижение ошибок из-за когнитивных искажений",
      "Развитие стратегического мышления",
    ],
    formats: ["training", "workshop"],
    durationHours: [8, 16],
    groupSize: [8, 25],
    audienceRoles: ["Аналитики", "Руководители", "Специалисты"],
  },
  {
    id: "stress-resilience-corp",
    slug: "stressoustoychivost-korporativ",
    title: "Стрессоустойчивость и профилактика выгорания",
    category: "stress",
    description: "Практические инструменты управления стрессом, поддержания ресурсного состояния и профилактики выгорания.",
    outcomes: [
      "Снижение уровня стресса в команде",
      "Профилактика профессионального выгорания",
      "Повышение продуктивности и энергии",
    ],
    formats: ["training", "workshop"],
    durationHours: [4, 8],
    groupSize: [8, 30],
    audienceRoles: ["Все сотрудники", "Педагоги", "Специалисты помогающих профессий"],
  },
];

export const corporateFormats = [
  {
    id: "training",
    name: "Тренинг",
    description: "Интенсивное обучение с практическими упражнениями и кейсами",
    icon: "academic-cap",
  },
  {
    id: "workshop",
    name: "Воркшоп",
    description: "Практическая работа над реальными задачами компании",
    icon: "puzzle",
  },
  {
    id: "coaching",
    name: "Командный коучинг",
    description: "Серия сессий с командой для достижения конкретных целей",
    icon: "users",
  },
  {
    id: "assessment",
    name: "Ассессмент компетенций",
    description: "Диагностика компетенций команды с развивающей обратной связью",
    icon: "chart-bar",
  },
] as const;
