/**
 * Лицензированные программы ДПО (повышение квалификации)
 * Выдаётся удостоверение государственного образца
 * Источник: Программы обучения Скиллфолио.xlsx
 */

export type DpoCategory =
  | "coaching"
  | "pedagogy"
  | "psychology"
  | "communication"
  | "entrepreneurship"
  | "teamwork"
  | "competencies"
  | "ai";

export interface DpoProgram {
  id: number;
  slug: string;
  title: string;
  category: DpoCategory;
  /** Область профессиональной деятельности */
  professionalArea: string;
  /** Целевая аудитория */
  audience: string;
  /** Объём в часах */
  hours?: number;
  /** Форма обучения */
  format: "online" | "offline" | "blended";
  price?: number;
  /** Документ по окончании */
  certificate: "udostoverenie" | "sertifikat";
}

export const dpoPrograms: DpoProgram[] = [
  {
    id: 1,
    slug: "tutoring-skillfolio",
    title: "Развитие тьюторских компетенций современного педагога средствами цифровой платформы Скиллфолио",
    category: "pedagogy",
    professionalArea: "Деятельность по психолого-педагогическому сопровождению образовательного процесса",
    audience: "Педагоги, тьюторы, специалисты сопровождения",
    format: "online",
    certificate: "udostoverenie",
  },
  {
    id: 2,
    slug: "social-emotional-learning",
    title: "Социально-эмоциональное обучение. Как научить учиться: эмоциональное развитие и современные подходы в образовании",
    category: "pedagogy",
    professionalArea: "Деятельность по психолого-педагогическому сопровождению образовательного процесса",
    audience: "Педагоги, психологи, специалисты по развитию детей",
    format: "online",
    certificate: "udostoverenie",
  },
  {
    id: 3,
    slug: "career-counseling-skillfolio",
    title: "Практические навыки консультирования в современной профориентации по технологии Скиллфолио",
    category: "psychology",
    professionalArea: "Деятельность по психолого-педагогическому сопровождению образовательного процесса",
    audience: "Психологи, карьерные консультанты, педагоги-навигаторы",
    format: "online",
    certificate: "udostoverenie",
  },
  {
    id: 4,
    slug: "coaching-tools",
    title: "Коучинговые инструменты в индивидуальной и групповой работе",
    category: "coaching",
    professionalArea: "Педагогическая деятельность в дополнительном образовании детей и взрослых",
    audience: "Коучи, психологи, HR-специалисты, тренеры",
    format: "online",
    certificate: "udostoverenie",
  },
  {
    id: 5,
    slug: "coaching-management",
    title: "Коучинговые подходы в управлении для руководителей",
    category: "coaching",
    professionalArea: "Педагогическая деятельность в дополнительном образовании детей и взрослых",
    audience: "Руководители, менеджеры, директора",
    format: "online",
    certificate: "udostoverenie",
  },
  {
    id: 6,
    slug: "formative-assessment",
    title: "Формирующее оценивание учебных достижений обучающихся как средство повышения качества образования",
    category: "pedagogy",
    professionalArea: "Деятельность по психолого-педагогическому сопровождению образовательного процесса",
    audience: "Педагоги, методисты, завучи",
    format: "online",
    certificate: "udostoverenie",
  },
  {
    id: 7,
    slug: "communication-negotiation",
    title: "Коммуникация и ведение переговоров",
    category: "communication",
    professionalArea: "Педагогическая деятельность в дополнительном образовании детей и взрослых",
    audience: "Специалисты любого профиля",
    format: "online",
    certificate: "udostoverenie",
  },
  {
    id: 8,
    slug: "coaching-personal-development",
    title: "Коучинговые подходы для личностного и профессионального развития",
    category: "coaching",
    professionalArea: "Педагогическая деятельность в дополнительном образовании детей и взрослых",
    audience: "Коучи, психологи, специалисты помогающих профессий",
    format: "online",
    certificate: "udostoverenie",
  },
  {
    id: 9,
    slug: "entrepreneurship-basics",
    title: "Основы предпринимательства",
    category: "entrepreneurship",
    professionalArea: "Педагогическая деятельность в дополнительном образовании детей и взрослых",
    audience: "Специалисты, желающие развить предпринимательские навыки",
    format: "online",
    certificate: "udostoverenie",
  },
  {
    id: 10,
    slug: "team-building",
    title: "Практические навыки по формированию команды",
    category: "teamwork",
    professionalArea: "Педагогическая деятельность в дополнительном образовании детей и взрослых",
    audience: "Руководители, HR-специалисты, тимлиды",
    format: "online",
    certificate: "udostoverenie",
  },
  {
    id: 11,
    slug: "universal-competencies-expert",
    title: "Эксперт развития универсальных компетенций",
    category: "competencies",
    professionalArea: "Педагогическая деятельность в дополнительном образовании детей и взрослых",
    audience: "Коучи, тренеры, специалисты развития персонала",
    format: "online",
    certificate: "udostoverenie",
  },
  {
    id: 12,
    slug: "emotional-intelligence-practicum",
    title: "Практикум развития эмоционального интеллекта",
    category: "psychology",
    professionalArea: "Педагогическая деятельность в дополнительном образовании детей и взрослых",
    audience: "Специалисты любого профиля",
    format: "online",
    certificate: "udostoverenie",
  },
  {
    id: 13,
    slug: "team-4k-competencies",
    title: "Практические навыки по формированию команды и развитию 4К (коммуникация, кооперация, критическое и креативное мышление)",
    category: "teamwork",
    professionalArea: "Деятельность по психолого-педагогическому сопровождению образовательного процесса",
    audience: "Педагоги, HR, руководители команд",
    format: "online",
    certificate: "udostoverenie",
  },
  {
    id: 14,
    slug: "teacher-parents-proforientation",
    title: "Формы работы и актуальные вопросы во взаимодействии педагога начальной школы с родителями в контексте ранней профилизации",
    category: "pedagogy",
    professionalArea: "Деятельность по психолого-педагогическому сопровождению образовательного процесса",
    audience: "Педагоги начальной школы, школьные психологи",
    format: "online",
    certificate: "udostoverenie",
  },
  {
    id: 15,
    slug: "communication-expert",
    title: "Эксперт развития коммуникации",
    category: "communication",
    professionalArea: "Педагогическая деятельность в дополнительном образовании детей и взрослых",
    audience: "Коучи, тренеры, специалисты по коммуникациям",
    format: "online",
    certificate: "udostoverenie",
  },
  {
    id: 16,
    slug: "universal-competencies-digital",
    title: "Развитие универсальных компетенций c применением цифровых технологий Скиллфолио",
    category: "competencies",
    professionalArea: "Педагогическая деятельность в дополнительном образовании детей и взрослых",
    audience: "Педагоги, HR, специалисты развития персонала",
    format: "online",
    certificate: "udostoverenie",
  },
  {
    id: 17,
    slug: "psychology-coaching-entrepreneurship",
    title: "Предпринимательская деятельность в сфере предоставления психологических консультаций и коучинга",
    category: "entrepreneurship",
    professionalArea: "Педагогическая деятельность в дополнительном образовании детей и взрослых",
    audience: "Психологи и коучи, развивающие частную практику",
    format: "online",
    certificate: "udostoverenie",
  },
];
