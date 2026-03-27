/**
 * Онлайн-курсы без удостоверения ДПО (сертификат об окончании)
 * Источник: skillfolio.ru/skillfolio_courses
 * Soft Skills для специалистов любого профиля
 */

export type OnlineCourseCategory =
  | "eq"           // Эмоциональный интеллект
  | "thinking"     // Мышление
  | "leadership"   // Лидерство
  | "communication"
  | "personal-brand"
  | "career"
  | "stress"
  | "kids"         // Для детей / родителей
  | "ai";

export interface OnlineCourse {
  id: string;
  slug: string;
  title: string;
  category: OnlineCourseCategory;
  description: string;
  audience: string;
  price: number;
  format: "online" | "offline" | "blended";
  certificate: "sertifikat" | "none";
  isNew?: boolean;
  isBestseller?: boolean;
}

export const onlineCourses: OnlineCourse[] = [
  // Эмоциональный интеллект
  {
    id: "eq-leader",
    slug: "eq-rukovoditel",
    title: "Эмоциональный интеллект как ключевой ресурс руководителя",
    category: "eq",
    description: "Научитесь управлять эмоциями, принимать взвешенные решения и создавать мотивирующую атмосферу в команде.",
    audience: "Руководители, менеджеры",
    price: 9900,
    format: "online",
    certificate: "sertifikat",
    isBestseller: true,
  },
  {
    id: "eq-practical",
    slug: "eq-praktikum",
    title: "Практикум развития эмоционального интеллекта",
    category: "eq",
    description: "Практические техники распознавания и управления эмоциями для повседневной жизни и работы.",
    audience: "Специалисты любого профиля",
    price: 6900,
    format: "online",
    certificate: "sertifikat",
  },
  {
    id: "eq-children",
    slug: "eq-deti",
    title: "Эмоциональный интеллект у детей",
    category: "kids",
    description: "Как развивать эмоциональный интеллект у ребёнка: инструменты для родителей и педагогов.",
    audience: "Родители, педагоги",
    price: 4900,
    format: "online",
    certificate: "sertifikat",
  },

  // Мышление
  {
    id: "critical-thinking",
    slug: "kriticheskoe-myshlenie",
    title: "Критическое мышление",
    category: "thinking",
    description: "Развивайте навыки анализа, оценки информации и принятия обоснованных решений.",
    audience: "Специалисты любого профиля",
    price: 7900,
    format: "online",
    certificate: "sertifikat",
    isBestseller: true,
  },
  {
    id: "creative-thinking",
    slug: "kreativnoe-myshlenie",
    title: "Креативное мышление",
    category: "thinking",
    description: "Методы генерации идей, нестандартного подхода к задачам и развития творческого потенциала.",
    audience: "Специалисты любого профиля",
    price: 7900,
    format: "online",
    certificate: "sertifikat",
  },
  {
    id: "systems-thinking",
    slug: "sistemnoe-myshlenie",
    title: "Системное мышление",
    category: "thinking",
    description: "Научитесь видеть целое, находить причинно-следственные связи и решать сложные задачи.",
    audience: "Руководители, аналитики, специалисты",
    price: 8900,
    format: "online",
    certificate: "sertifikat",
  },

  // Лидерство
  {
    id: "leadership-foundations",
    slug: "osnovy-liderstva",
    title: "Основы лидерства",
    category: "leadership",
    description: "Ключевые компетенции лидера: видение, вдохновение, управление изменениями.",
    audience: "Руководители, потенциальные лидеры",
    price: 9900,
    format: "online",
    certificate: "sertifikat",
  },
  {
    id: "coaching-management",
    slug: "kouching-v-upravlenii",
    title: "Коучинговые подходы в управлении",
    category: "leadership",
    description: "Инструменты коучинга для руководителей: развивающие беседы, постановка целей, обратная связь.",
    audience: "Руководители, HR-директора",
    price: 9900,
    format: "online",
    certificate: "sertifikat",
  },
  {
    id: "team-management",
    slug: "upravlenie-komandoy",
    title: "Управление командой",
    category: "leadership",
    description: "Как формировать высокоэффективные команды, распределять роли и управлять конфликтами.",
    audience: "Руководители, тимлиды",
    price: 9900,
    format: "online",
    certificate: "sertifikat",
  },

  // Коммуникации
  {
    id: "communication-basics",
    slug: "effektivnye-kommunikacii",
    title: "Эффективные коммуникации",
    category: "communication",
    description: "Навыки чёткой, убедительной и экологичной коммуникации в профессиональной среде.",
    audience: "Специалисты любого профиля",
    price: 6900,
    format: "online",
    certificate: "sertifikat",
  },
  {
    id: "public-speaking",
    slug: "publichnye-vystupleniya",
    title: "Публичные выступления",
    category: "communication",
    description: "Уверенность на сцене, структурирование речи, управление аудиторией и волнением.",
    audience: "Специалисты, руководители",
    price: 8900,
    format: "online",
    certificate: "sertifikat",
  },
  {
    id: "negotiations",
    slug: "vedeniye-peregovorov",
    title: "Ведение переговоров",
    category: "communication",
    description: "Стратегии и тактики переговоров, работа с возражениями, достижение win-win результатов.",
    audience: "Менеджеры, руководители, специалисты по продажам",
    price: 9900,
    format: "online",
    certificate: "sertifikat",
  },

  // Личный бренд
  {
    id: "personal-brand",
    slug: "lichnyy-brend",
    title: "Личный бренд специалиста",
    category: "personal-brand",
    description: "Как создать и развить профессиональный личный бренд в онлайн и офлайн пространстве.",
    audience: "Специалисты, предприниматели",
    price: 8900,
    format: "online",
    certificate: "sertifikat",
  },
  {
    id: "social-media-expert",
    slug: "ekspert-v-socsetyah",
    title: "Продвижение в социальных сетях",
    category: "personal-brand",
    description: "Стратегия ведения профессионального аккаунта: контент, охваты, монетизация.",
    audience: "Специалисты, эксперты, предприниматели",
    price: 7900,
    format: "online",
    certificate: "sertifikat",
  },

  // Карьера
  {
    id: "career-navigation",
    slug: "karernaya-navigaciya",
    title: "Карьерная навигация",
    category: "career",
    description: "Как осознанно управлять карьерой, находить свой путь и принимать карьерные решения.",
    audience: "Специалисты на карьерном перекрёстке",
    price: 7900,
    format: "online",
    certificate: "sertifikat",
  },
  {
    id: "proforientation",
    slug: "proforientaciya",
    title: "Современная профориентация",
    category: "career",
    description: "Инструменты для определения профессионального призвания и выбора направления развития.",
    audience: "Специалисты, студенты, педагоги",
    price: 5900,
    format: "online",
    certificate: "sertifikat",
  },

  // Стресс и устойчивость
  {
    id: "stress-resilience",
    slug: "stressoustoychivost",
    title: "Стрессоустойчивость и эмоциональная устойчивость",
    category: "stress",
    description: "Как справляться с профессиональным выгоранием, стрессом и сохранять ресурсное состояние.",
    audience: "Специалисты помогающих профессий, менеджеры",
    price: 6900,
    format: "online",
    certificate: "sertifikat",
  },
  {
    id: "burnout-prevention",
    slug: "profilaktika-vygoraniya",
    title: "Профилактика профессионального выгорания",
    category: "stress",
    description: "Диагностика и практические инструменты для восстановления и поддержания профессионального ресурса.",
    audience: "Педагоги, психологи, врачи, руководители",
    price: 5900,
    format: "online",
    certificate: "sertifikat",
  },

  // Для детей / родителей
  {
    id: "4k-school",
    slug: "4k-dlya-shkolnikov",
    title: "4К для школьников: коммуникация, кооперация, критическое и креативное мышление",
    category: "kids",
    description: "Развитие ключевых навыков 21 века у детей школьного возраста.",
    audience: "Педагоги, родители, школьники",
    price: 4900,
    format: "online",
    certificate: "sertifikat",
  },

  // Дополнительные мягкие навыки
  {
    id: "entrepreneurship",
    slug: "predprinimatelstvo",
    title: "Основы предпринимательства",
    category: "career",
    description: "Как запустить и развить собственное дело: от идеи до первых клиентов.",
    audience: "Специалисты, желающие открыть практику или бизнес",
    price: 9900,
    format: "online",
    certificate: "sertifikat",
  },
  {
    id: "time-management",
    slug: "tajm-menedzhment",
    title: "Управление временем и продуктивность",
    category: "thinking",
    description: "Системы тайм-менеджмента, расстановка приоритетов, борьба с прокрастинацией.",
    audience: "Специалисты любого профиля",
    price: 5900,
    format: "online",
    certificate: "sertifikat",
  },
  {
    id: "decision-making",
    slug: "prinyatiye-resheniy",
    title: "Принятие решений в условиях неопределённости",
    category: "thinking",
    description: "Модели и инструменты для принятия качественных решений при недостатке информации.",
    audience: "Руководители, менеджеры",
    price: 8900,
    format: "online",
    certificate: "sertifikat",
  },
  {
    id: "feedback-culture",
    slug: "kultura-obratnoy-svyazi",
    title: "Культура обратной связи",
    category: "communication",
    description: "Как давать и получать развивающую обратную связь: инструменты для команды и личного роста.",
    audience: "Руководители, HR-специалисты, тренеры",
    price: 5900,
    format: "online",
    certificate: "sertifikat",
  },
  {
    id: "conflict-resolution",
    slug: "razresheniye-konfliktov",
    title: "Управление конфликтами",
    category: "communication",
    description: "Стратегии конструктивного разрешения конфликтов в коллективе и с клиентами.",
    audience: "Руководители, HR, педагоги",
    price: 6900,
    format: "online",
    certificate: "sertifikat",
  },
];
