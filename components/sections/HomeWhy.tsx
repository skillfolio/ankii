const reasons = [
  {
    icon: "🏛️",
    title: "Лицензия ДПО",
    desc: "Государственная лицензия на образовательную деятельность. Удостоверения о повышении квалификации государственного образца.",
  },
  {
    icon: "🌍",
    title: "Эксперты мирового уровня",
    desc: "Научный руководитель — Виктория Шиманская, ведущий эксперт России по эмоциональному интеллекту. 25+ преподавателей-практиков.",
  },
  {
    icon: "🤖",
    title: "ИИ-компетенции",
    desc: "Единственная академия, где ИИ-обучение интегрировано в программы для психологов, педагогов и корпоративных команд.",
  },
  {
    icon: "⚡",
    title: "Реальная практика",
    desc: "Никакой теории ради теории. Инструменты, которые работают с первого занятия. Измеримый результат через 2 недели.",
  },
  {
    icon: "🏆",
    title: "Резидент Сколково и Сириус",
    desc: "Входим в число лучших образовательных проектов России, признанных ведущими инновационными центрами страны.",
  },
  {
    icon: "🔒",
    title: "Безопасное обучение ИИ",
    desc: "Обучаем работе с ИИ без рисков: политика безопасности данных, корпоративные регламенты, защита конфиденциальной информации.",
  },
];

export default function HomeWhy() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0f172a] mb-4">
            <span className="text-sm font-medium text-[#80ff46]">Почему АНКИИ</span>
          </div>
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#0f172a]"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Не просто обучение —<br />трансформация профессионала
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map(({ icon, title, desc }) => (
            <div
              key={title}
              className="flex gap-4 p-6 rounded-2xl bg-[#f8fafc] border border-slate-100 hover:border-[#80ff46]/40 transition-colors"
            >
              <div className="text-3xl flex-shrink-0 mt-0.5">{icon}</div>
              <div>
                <h3
                  className="text-base font-bold text-[#0f172a] mb-2"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  {title}
                </h3>
                <p className="text-sm text-[#64748b] leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
