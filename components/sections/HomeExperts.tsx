import Link from "next/link";

const featured = [
  {
    name: "Виктория Шиманская",
    role: "Научный руководитель АНКИИ",
    specialization: "Доктор психологических наук, эксперт по ЭИ",
    emoji: "🎓",
  },
  {
    name: "Алексей Шиманский",
    role: "Co-founder АНКИИ, MBA",
    specialization: "20 лет в ИТ, эксперт по ИИ, резидент Сколково",
    emoji: "🤖",
  },
  {
    name: "Эксперты-практики",
    role: "25+ сертифицированных специалистов",
    specialization: "Коучи ICF, психологи, педагоги, HR-директора",
    emoji: "💡",
  },
];

export default function HomeExperts() {
  return (
    <section className="py-24 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 mb-6">
              <span className="text-sm font-medium text-[#64748b]">Наши эксперты</span>
            </div>
            <h2
              className="text-3xl sm:text-4xl font-bold text-[#0f172a] mb-4"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Учитесь у лучших практиков России
            </h2>
            <p className="text-[#64748b] mb-8 leading-relaxed">
              Каждый преподаватель — практикующий специалист с реальными
              кейсами. Никаких академических лекторов без опыта в поле.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/experts"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#0f172a] text-white font-semibold hover:bg-[#1e293b] transition-colors"
              >
                Все эксперты
              </Link>
              <Link
                href="/experts#consultation"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-slate-300 text-[#0f172a] font-semibold hover:bg-white transition-colors"
              >
                Записаться на консультацию
              </Link>
            </div>
          </div>

          {/* Right: cards */}
          <div className="flex flex-col gap-4">
            {featured.map(({ name, role, specialization, emoji }) => (
              <div
                key={name}
                className="flex items-center gap-5 p-5 rounded-2xl bg-white border border-slate-200 hover:border-[#80ff46]/40 transition-colors"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#0f172a] flex items-center justify-center text-2xl flex-shrink-0">
                  {emoji}
                </div>
                <div>
                  <div
                    className="font-bold text-[#0f172a]"
                    style={{ fontFamily: "var(--font-montserrat)" }}
                  >
                    {name}
                  </div>
                  <div className="text-sm text-[#80ff46] font-medium">{role}</div>
                  <div className="text-xs text-[#64748b] mt-0.5">{specialization}</div>
                </div>
              </div>
            ))}

            {/* Pricing teaser */}
            <div className="p-5 rounded-2xl bg-[#0f172a] border border-white/10">
              <div className="text-white font-semibold mb-2" style={{ fontFamily: "var(--font-montserrat)" }}>
                Личная консультация
              </div>
              <div className="flex items-center gap-4">
                <div>
                  <div className="text-2xl font-bold text-[#80ff46]">8 000 ₽</div>
                  <div className="text-xs text-white/50">1 сессия</div>
                </div>
                <div className="text-white/30">→</div>
                <div>
                  <div className="text-lg font-bold text-white">56 000 ₽</div>
                  <div className="text-xs text-white/50">10 сессий</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
