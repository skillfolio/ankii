import Link from "next/link";

const directions = [
  {
    emoji: "🧠",
    audience: "Психологи и коучи",
    headline: "Станьте экспертом нового поколения",
    description:
      "Освойте ИИ-инструменты для консультирования, автоматизируйте рутину и получите государственное удостоверение о повышении квалификации.",
    tags: ["Программы ДПО", "ИИ-помощник", "Карьерный коучинг"],
    href: "/programs?audience=psychology",
    cta: "Программы для психологов",
    accent: "#a78bfa",
    bg: "from-purple-50 to-white",
  },
  {
    emoji: "📚",
    audience: "Педагоги и преподаватели",
    headline: "Современные методики и тьюторские компетенции",
    description:
      "Развивайте эмоциональный интеллект учеников, освойте цифровые технологии и получите документ о повышении квалификации для карьерного роста.",
    tags: ["Тьюторские компетенции", "ЭИ в образовании", "4К-методики"],
    href: "/programs?audience=pedagogy",
    cta: "Программы для педагогов",
    accent: "#3b82f6",
    bg: "from-blue-50 to-white",
  },
  {
    emoji: "🏢",
    audience: "Руководители и HR",
    headline: "Развитие команд и внедрение ИИ",
    description:
      "Корпоративные тренинги Soft Skills, ИИ-трансформация отделов и ассессмент компетенций. Под запрос, с измеримым результатом.",
    tags: ["Корпоративные тренинги", "ИИ для команд", "Ассессмент"],
    href: "/corporate",
    cta: "Корпоративные программы",
    accent: "#80ff46",
    bg: "from-green-50 to-white",
  },
];

export default function HomeDirections() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f0fdf4] border border-[#80ff46]/40 mb-4">
            <span className="text-sm font-medium text-[#166534]">Направления обучения</span>
          </div>
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#0f172a] mb-4"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Найдите своё направление
          </h2>
          <p className="text-lg text-[#64748b] max-w-2xl mx-auto">
            Программы для специалистов помогающих профессий и корпоративных команд
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {directions.map(({ emoji, audience, headline, description, tags, href, cta, accent, bg }) => (
            <div
              key={audience}
              className={`flex flex-col rounded-2xl bg-gradient-to-b ${bg} border border-slate-100 p-8 hover:shadow-lg transition-shadow`}
            >
              <div className="text-4xl mb-4">{emoji}</div>
              <div
                className="text-xs font-semibold uppercase tracking-widest mb-2"
                style={{ color: accent }}
              >
                {audience}
              </div>
              <h3
                className="text-xl font-bold text-[#0f172a] mb-3"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                {headline}
              </h3>
              <p className="text-sm text-[#64748b] leading-relaxed mb-6 flex-1">
                {description}
              </p>
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full bg-slate-100 text-[#64748b]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                href={href}
                className="inline-flex items-center justify-center w-full px-5 py-2.5 rounded-xl text-sm font-semibold transition-colors"
                style={{
                  backgroundColor: accent,
                  color: accent === "#80ff46" ? "#0f172a" : "white",
                }}
              >
                {cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
