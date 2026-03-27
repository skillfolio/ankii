const benefits = [
  {
    icon: (
      <svg
        className="w-6 h-6 text-[#2563eb]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
        />
      </svg>
    ),
    bg: "bg-blue-50",
    title: "Эффективность",
    description:
      "Команда делает больше без найма новых сотрудников. Каждый сотрудник экономит 1–3 часа в день за счёт автоматизации рутинных задач с помощью ИИ.",
    stat: "+30% производительности",
  },
  {
    icon: (
      <svg
        className="w-6 h-6 text-green-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
    bg: "bg-green-50",
    title: "Безопасность",
    description:
      "Сотрудники работают с ИИ по чётким регламентам, которые предотвращают утечки корпоративных данных. Обучаем работе с конфиденциальной информацией безопасно.",
    stat: "0 утечек данных",
  },
  {
    icon: (
      <svg
        className="w-6 h-6 text-purple-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
        />
      </svg>
    ),
    bg: "bg-purple-50",
    title: "Готовые инструменты",
    description:
      "Не просто теория — каждый отдел получает библиотеку готовых промтов и настроенных ИИ-агентов под свои задачи. Начинаете применять с первого дня обучения.",
    stat: "50+ готовых промтов",
  },
];

export default function Benefits() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#f8fafc]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#0f172a] mb-4"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Почему компании выбирают нас
          </h2>
          <p className="text-lg text-[#64748b] max-w-2xl mx-auto">
            Три ключевых результата, которые получает каждая команда
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
            >
              <div
                className={`w-12 h-12 rounded-xl ${benefit.bg} flex items-center justify-center mb-6`}
              >
                {benefit.icon}
              </div>
              <h3
                className="text-xl font-bold text-[#0f172a] mb-3"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                {benefit.title}
              </h3>
              <p className="text-[#64748b] leading-relaxed mb-4">
                {benefit.description}
              </p>
              <div className="text-sm font-semibold text-[#2563eb] bg-blue-50 px-3 py-1.5 rounded-lg inline-block">
                {benefit.stat}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
