const testimonials = [
  {
    name: "Алексей",
    role: "Руководитель отдела продаж",
    text: "Менеджеры теперь ведут на 5 клиентов больше каждый. ИИ берёт на себя рутину с письмами и подготовкой КП.",
    result: "+5 клиентов на менеджера",
    type: "corporate",
  },
  {
    name: "Марина",
    role: "Маркетолог, e-commerce",
    text: "Раньше пост занимал 2 часа. Теперь 20 минут с ИИ. Успеваем выпускать в 5 раз больше контента.",
    result: "Контент ×5 быстрее",
    type: "corporate",
  },
  {
    name: "Елена",
    role: "HRD",
    text: "За первый месяц сэкономили более 40 часов ручной работы — скрининг резюме, вакансии, онбординг.",
    result: "40+ часов в месяц",
    type: "corporate",
  },
  {
    name: "Игорь Сапрыкин",
    role: "Директор по маркетингу",
    text: "Копирайтеры работают в 4 раза быстрее. ИИ убрал рутину и дал время на стратегию.",
    result: "Скорость ×4",
    type: "corporate",
  },
  {
    name: "Анна Козлова",
    role: "HRD",
    text: "Рекрутеры начали использовать ИИ уже после первого занятия. Инструменты простые и реально работают.",
    result: "Результат с 1-го занятия",
    type: "corporate",
  },
  {
    name: "Татьяна Н.",
    role: "РОП, IT-компания",
    text: "Часть задач по письмам и презентациям теперь на ИИ. Команда довольна — меньше стресса, больше встреч.",
    result: "Снижение рутины на 60%",
    type: "corporate",
  },
];

export default function HomeTestimonials() {
  return (
    <section className="py-24 bg-[#0f172a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 mb-4">
            <span className="text-sm font-medium text-white/70">Результаты выпускников</span>
          </div>
          <h2
            className="text-3xl sm:text-4xl font-bold text-white"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Что говорят те, кто уже учился
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map(({ name, role, text, result }) => (
            <div
              key={name + role}
              className="flex flex-col bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/8 transition-colors"
            >
              {/* Result badge */}
              <div className="inline-flex self-start items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#80ff46]/15 border border-[#80ff46]/30 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#80ff46]" />
                <span className="text-xs font-semibold text-[#80ff46]">{result}</span>
              </div>

              {/* Quote */}
              <p className="text-sm text-white/80 leading-relaxed flex-1 mb-4">
                «{text}»
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#80ff46]/60 to-[#2563eb]/60 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                  {name[0]}
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">{name}</div>
                  <div className="text-xs text-white/50">{role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
