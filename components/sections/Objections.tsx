const faqs = [
  {
    question: "Сотрудники не справятся — у нас не айтишники",
    answer:
      "Наши программы специально разработаны для нетехнических специалистов. Никакого программирования — только практические инструменты, которые применяются в ежедневной работе. Средний возраст участников — 35–45 лет, большинство до обучения вообще не работали с ИИ. После первого занятия уже применяют инструменты в работе.",
  },
  {
    question: "Зачем нам ИИ, если и так всё работает?",
    answer:
      "У ваших конкурентов тоже «всё работало» до того, как они начали экономить 1–3 часа на сотрудника в день. Это 20–60 часов в месяц на человека — время, которое можно потратить на рост, а не на рутину. При команде в 10 человек вы высвобождаете 200–600 часов ежемесячно.",
  },
  {
    question: "Боюсь сливов корпоративных данных",
    answer:
      "Это обоснованный страх, и именно поэтому мы уделяем безопасности отдельный модуль. Даём чёткие регламенты: какие данные можно передавать ИИ, какие нельзя, как настроить корпоративные инструменты. После обучения сотрудники работают с ИИ безопаснее, чем без него — потому что знают правила.",
  },
  {
    question: "Сложно согласовать бюджет",
    answer:
      "Мы подготовим для вас расчёт окупаемости в формате PDF: сколько часов экономит команда, во сколько обходится один час работы сотрудника, когда инвестиция окупится. Как правило, обучение окупается за 1–2 месяца. Напишите нам — пришлём шаблон расчёта для вашей команды.",
  },
];

export default function Objections() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#f8fafc]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#0f172a] mb-4"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Частые вопросы
          </h2>
          <p className="text-lg text-[#64748b]">
            Отвечаем на сомнения, которые возникают чаще всего
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden"
            >
              <summary className="flex items-center justify-between gap-4 p-6 cursor-pointer list-none select-none hover:bg-[#f8fafc] transition-colors">
                <span className="font-semibold text-[#0f172a] text-base pr-4">
                  {faq.question}
                </span>
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center transition-transform group-open:rotate-180">
                  <svg
                    className="w-4 h-4 text-[#2563eb]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-6">
                <div className="border-t border-slate-100 pt-4">
                  <p className="text-[#64748b] leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
