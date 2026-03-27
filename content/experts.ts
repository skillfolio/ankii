/**
 * Эксперты и преподаватели
 * Источник: skillfolio.ru/expert_skillfolio
 */

export type ExpertSpecialization =
  | "psychology"
  | "coaching"
  | "pedagogy"
  | "hr"
  | "business"
  | "eq"
  | "ai"
  | "career";

export interface Expert {
  id: string;
  slug: string;
  name: string;
  position: string;
  specializations: ExpertSpecialization[];
  bio: string;
  experience?: string;
  education?: string;
  photo?: string;
  /** Для экспертов, доступных для личных консультаций */
  consultationAvailable?: boolean;
}

/** Стоимость консультаций с экспертами (единая тарификация) */
export const consultationPricing = [
  { sessions: 1, price: 8000, label: "1 сессия" },
  { sessions: 2, price: 14000, label: "2 сессии", savings: 2000 },
  { sessions: 5, price: 32700, label: "5 сессий", savings: 7300 },
  { sessions: 10, price: 56000, label: "10 сессий", savings: 24000 },
] as const;

export const experts: Expert[] = [
  {
    id: "shimanskaya-victoria",
    slug: "viktoriya-shimanskaya",
    name: "Виктория Шиманская",
    position: "Научный руководитель АНКИИ, доктор психологических наук",
    specializations: ["psychology", "eq", "coaching"],
    bio: "Ведущий российский эксперт в области эмоционального интеллекта и развития личности. Автор книг и образовательных программ по ЭИ, признанных в России и за рубежом.",
    experience: "20+ лет",
    consultationAvailable: true,
  },
  {
    id: "shimanskiy-aleksey",
    slug: "aleksey-shimanskiy",
    name: "Алексей Шиманский",
    position: "Co-founder АНКИИ, MBA, эксперт по ИИ",
    specializations: ["ai", "business", "coaching"],
    bio: "Резидент Сколково и Сириус. 20 лет в ИТ-индустрии. Внедряет ИИ-решения в корпоративное обучение и автоматизацию бизнес-процессов.",
    experience: "20 лет в ИТ",
    consultationAvailable: true,
  },
  {
    id: "expert-coach-1",
    slug: "ekspert-kouching-1",
    name: "Эксперт по коучингу",
    position: "Сертифицированный коуч ICF",
    specializations: ["coaching", "psychology"],
    bio: "Практикующий коуч с опытом индивидуальной и групповой работы. Специализация: карьерный коучинг, коучинг лидерства.",
    consultationAvailable: true,
  },
  {
    id: "expert-pedagogy-1",
    slug: "ekspert-pedagogika-1",
    name: "Эксперт по педагогике",
    position: "Методист, тьютор",
    specializations: ["pedagogy", "career"],
    bio: "Специалист в области современных образовательных технологий и тьюторского сопровождения.",
    consultationAvailable: true,
  },
  {
    id: "expert-hr-1",
    slug: "ekspert-hr-1",
    name: "Эксперт по HR",
    position: "HR-директор, бизнес-тренер",
    specializations: ["hr", "coaching"],
    bio: "Опыт в управлении персоналом в крупных компаниях. Специализация: оценка и развитие компетенций, корпоративное обучение.",
    consultationAvailable: true,
  },
  {
    id: "expert-eq-1",
    slug: "ekspert-eq-1",
    name: "Эксперт по эмоциональному интеллекту",
    position: "Психолог, тренер ЭИ",
    specializations: ["eq", "psychology"],
    bio: "Сертифицированный тренер программ развития эмоционального интеллекта. Работает с командами и индивидуальными клиентами.",
    consultationAvailable: true,
  },
  {
    id: "expert-career-1",
    slug: "ekspert-kariera-1",
    name: "Карьерный консультант",
    position: "Карьерный коуч, профориентолог",
    specializations: ["career", "coaching"],
    bio: "Помогает специалистам найти своё призвание и выстроить осознанную карьерную траекторию.",
    consultationAvailable: true,
  },
  {
    id: "expert-business-1",
    slug: "ekspert-biznes-1",
    name: "Бизнес-консультант",
    position: "Бизнес-тренер, предприниматель",
    specializations: ["business", "coaching"],
    bio: "Практикующий предприниматель и бизнес-тренер. Специализация: запуск частной практики, предпринимательство для специалистов.",
    consultationAvailable: true,
  },
];

/** Полный список специализаций для фильтрации */
export const expertSpecializationLabels: Record<ExpertSpecialization, string> = {
  psychology: "Психология",
  coaching: "Коучинг",
  pedagogy: "Педагогика",
  hr: "HR",
  business: "Бизнес",
  eq: "Эмоциональный интеллект",
  ai: "Искусственный интеллект",
  career: "Карьера",
};
