import Link from "next/link";

export default function HomeHero() {
  return (
    <section className="relative bg-[#0f172a] min-h-screen flex items-center overflow-hidden">
      {/* Background grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(128,255,70,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(128,255,70,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* Glow */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#80ff46]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-[#2563eb]/8 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#80ff46]/30 bg-[#80ff46]/10 mb-8">
          <span className="w-2 h-2 rounded-full bg-[#80ff46] animate-pulse" />
          <span className="text-sm font-medium text-[#80ff46]">
            Резидент Сколково и Сириус · Лицензия ДПО
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Академия для тех,{" "}
              <span className="text-[#80ff46]">кто обучает,</span>{" "}
              управляет и развивает людей
            </h1>

            <p className="text-lg text-white/70 leading-relaxed mb-10 max-w-xl">
              Лицензированные программы ДПО, онлайн-курсы Soft Skills и
              корпоративное обучение ИИ. Для психологов, педагогов, коучей и
              команд по всей России.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/programs"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl bg-[#80ff46] text-[#0f172a] font-semibold text-base hover:bg-[#6be038] transition-colors shadow-lg shadow-[#80ff46]/20"
              >
                Выбрать программу
              </Link>
              <Link
                href="/corporate"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl border border-white/20 text-white font-semibold text-base hover:bg-white/10 transition-colors"
              >
                Для компаний
              </Link>
            </div>
          </div>

          {/* Right: audience cards */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {[
              {
                icon: "🧠",
                title: "Психологи и коучи",
                desc: "ДПО-программы, ИИ-помощник, карьерный рост",
                href: "/programs?audience=psychology",
                color: "from-purple-500/20 to-transparent",
              },
              {
                icon: "📚",
                title: "Педагоги",
                desc: "Тьюторские компетенции, ЭИ, современные методики",
                href: "/programs?audience=pedagogy",
                color: "from-blue-500/20 to-transparent",
              },
              {
                icon: "🏢",
                title: "Корпоративные команды",
                desc: "ИИ-трансформация, Soft Skills, ассессмент",
                href: "/corporate",
                color: "from-[#80ff46]/20 to-transparent",
              },
            ].map(({ icon, title, desc, href, color }) => (
              <Link
                key={href}
                href={href}
                className={`group flex items-center gap-4 p-4 rounded-2xl border border-white/10 bg-gradient-to-r ${color} hover:border-white/20 transition-all`}
              >
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-2xl flex-shrink-0">
                  {icon}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{title}</div>
                  <div className="text-white/50 text-xs mt-0.5">{desc}</div>
                </div>
                <svg
                  className="ml-auto w-4 h-4 text-white/30 group-hover:text-white/60 transition-colors flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
