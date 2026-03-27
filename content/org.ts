/**
 * Сведения об образовательной организации
 * Обязательный раздел по 273-ФЗ и требованиям Минобрнауки РФ
 * Заполнить реальными данными перед публикацией
 */

export const org = {
  // Основные сведения
  fullName: "Академия надпрофессиональных компетенций и искусственного интеллекта",
  shortName: "АНКИИ",
  legalForm: "", // ООО / АНО / ЧОУ и т.д.
  inn: "",
  ogrn: "",
  kpp: "",

  // Адреса
  legalAddress: "",
  actualAddress: "",

  // Контакты
  phone: "",
  email: "info@ankii.ru",
  website: "https://ankii.ru",

  // Лицензия
  license: {
    number: "",
    issuedBy: "",
    issuedDate: "",
    series: "",
  },

  // Руководство
  director: {
    name: "Шиманский Алексей",
    position: "Co-founder",
    email: "",
    phone: "",
    receptionHours: "",
  },

  // Структура и органы управления
  structure: "",

  // Режим работы
  workingHours: "Пн–Пт 9:00–18:00",

  // Год основания
  foundedYear: 2023,

  // Резидентства
  residents: ["Сколково", "Сириус"],

  // Платные образовательные услуги
  paidServicesInfo: "Все образовательные программы являются платными. Стоимость указана на страницах программ.",

  // Финансовый орган
  financialBody: "",

  // Вакантные места
  vacantPlaces: {
    budget: 0,
    paid: 0, // обновлять ежегодно
  },
} as const;
