const programs = [
  {
    id: "A",
    title: "Базовый",
    price: "39 000 ₽/модуль",
    hours: "16 часов",
    capacity: "до 30 чел",
    recommended: false,
    modules: [
      { code: "A0", name: "Основы ИИ", hours: "7 ч" },
      { code: "A1", name: "Нейросети для задач", hours: "4 ч" },
      { code: "A2", name: "Автоматизация", hours: "4 ч" },
    ],
    outcome: "Удостоверение о повышении квалификации",
    color: "border-slate-200",
    badgeColor: "bg-slate-100 text-slate-600",
    ctaColor: "bg-[#0f172a] hover:bg-slate-800",
  },
  {
    id: "B",
    title: "По отделам",
    price: "49 000 ₽/модуль",
    hours: "36 часов",
    capacity: "до 30 чел",
    recommended: true,
    modules: [
      { code: "B1", name: "Маркетинг / PR", hours: "" },
      { code: "B2", name: "Продажи", hours: "" },
      { code: "B3", name: "HR", hours: "" },
      { code: "B4", name: "Аналитика", hours: "" },
      { code: "B5", name: "Операции / Юристы", hours: "" },
    ],
    outcome: "Удостоверение + готовые ИИ-агенты",
    color: "border-[#2563eb]",
    badgeColor: "bg-[#2563eb] text-white",
    ctaColor: "bg-[#2563eb] hover:bg-[#1d4ed8]",
  },
  {
    id: "C",
    title: "Автоматизация под ключ",
    price: "59 000 ₽/модуль",
    hours: "72 часа",
    capacity: "до 30 чел",
    recommended: false,
    modules: [
      { code: "C1", name: "No-code (Make, n8n, Zapier)", hours: "" },
      { code: "C2", name: "RAG-агенты", hours: "" },
      { code: "C3", name: "Полная программа", hours: "" },
    ],
    outcome: "Регламенты + настроенные ИИ-агенты",
    color: "border-slate-200",
    badgeColor: "bg-slate-100 text-slate-600",
    ctaColor: "bg-[#0f172a] hover:bg-slate-800",
  },
];

export default function Programs() {
  return (
    <section
      id="programs"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#0f172a] mb-4"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Программы обучения
          </h2>
          <p className="text-lg text-[#64748b] max-w-2xl mx-auto">
            Три уровня глубины — выберите подходящий формат для вашей команды
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {programs.map((program) => (
            <div
              key={program.id}
              className={`relative rounded-2xl border-2 ${program.color} bg-white p-8 shadow-sm flex flex-col h-full`}
            >
              {program.recommended && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="bg-[#2563eb] text-white text-xs font-semibold px-4 py-1.5 rounded-full shadow-md whitespace-nowrap">
                    Рекомендуем
                  </span>
                </div>
              )}

              {/* Header */}
              <div className="mb-6">
                <span
                  className={`text-xs font-bold px-2.5 py-1 rounded-md ${program.badgeColor} uppercase tracking-wide`}
                >
                  Уровень {program.id}
                </span>
                <h3
                  className="text-xl font-bold text-[#0f172a] mt-3 mb-2"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  {program.title}
                </h3>
                <div className="text-2xl font-bold text-[#2563eb] mb-1">
                  {program.price}
                </div>
                <div className="flex gap-3 text-sm text-[#64748b]">
                  <span className="flex items-center gap-1">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    {program.hours}
                  </span>
                  <span className="flex items-center gap-1">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    {program.capacity}
                  </span>
                </div>
              </div>

              {/* Modules */}
              <div className="flex-1 mb-6">
                <h4 className="text-xs font-semibold text-[#64748b] uppercase tracking-wide mb-3">
                  Модули
                </h4>
                <ul className="space-y-2">
                  {program.modules.map((module) => (
                    <li
                      key={module.code}
                      className="flex items-center gap-2 text-sm text-[#0f172a]"
                    >
                      <span className="w-8 h-6 rounded bg-[#f8fafc] border border-slate-200 text-xs font-mono font-bold text-[#64748b] flex items-center justify-center flex-shrink-0">
                        {module.code}
                      </span>
                      <span>{module.name}</span>
                      {module.hours && (
                        <span className="ml-auto text-xs text-[#64748b] whitespace-nowrap">
                          {module.hours}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Outcome */}
              <div className="bg-[#f8fafc] rounded-xl px-4 py-3 mb-6 flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-[#2563eb] flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
                <span className="text-sm font-medium text-[#0f172a]">
                  {program.outcome}
                </span>
              </div>

              {/* CTA */}
              <a
                href="#contact"
                className={`w-full text-center px-6 py-3 rounded-xl text-white font-semibold text-sm transition-colors ${program.ctaColor}`}
              >
                Записаться
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-[#64748b] mt-6">
          * Цены указаны за модуль для группы до 30 человек. Возможно составить
          индивидуальную программу.
        </p>
      </div>
    </section>
  );
}
