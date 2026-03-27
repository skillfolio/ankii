const testimonials = [
  {
    name: "Алексей",
    role: "Руководитель отдела продаж",
    company: "Производственная компания",
    text: "После обучения наши менеджеры ведут на 5 клиентов больше каждый — без найма новых людей. ИИ-агенты под наш отдел продаж реально работают.",
    initial: "А",
    color: "bg-blue-500",
  },
  {
    name: "Марина",
    role: "Маркетолог",
    company: "E-commerce",
    text: "Посты и тексты теперь делаем за 20 минут вместо 2 часов. Нам дали прямо готовых ИИ-помощников под нашу нишу — не пришлось ничего настраивать самим.",
    initial: "М",
    color: "bg-purple-500",
  },
  {
    name: "Елена",
    role: "HRD",
    company: "IT-компания, 200+ сотрудников",
    text: "За первый месяц сэкономили более 40 часов ручной работы по всему HR-отделу. Онбординг, вакансии, обучающие материалы — всё стало быстрее и качественнее.",
    initial: "Е",
    color: "bg-green-500",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#0f172a] mb-4"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Что говорят клиенты
          </h2>
          <p className="text-lg text-[#64748b] max-w-2xl mx-auto">
            Реальные результаты от компаний, которые уже прошли обучение
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-[#f8fafc] rounded-2xl p-8 border border-slate-100 hover:shadow-md transition-shadow flex flex-col"
            >
              {/* Quote */}
              <div className="mb-6 flex-1">
                <svg
                  className="w-8 h-8 text-[#2563eb] opacity-30 mb-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-[#0f172a] leading-relaxed text-sm">
                  {testimonial.text}
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-6 border-t border-slate-200">
                <div
                  className={`w-10 h-10 rounded-full ${testimonial.color} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}
                >
                  {testimonial.initial}
                </div>
                <div>
                  <div className="font-semibold text-[#0f172a] text-sm">
                    {testimonial.name}
                  </div>
                  <div className="text-xs text-[#64748b]">
                    {testimonial.role}
                  </div>
                  <div className="text-xs text-[#64748b]">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
