export default function About() {
  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#0f172a] mb-4"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            О нас
          </h2>
          <p className="text-lg text-[#64748b] max-w-2xl mx-auto">
            Команда практиков с реальным опытом внедрения ИИ в бизнес
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Avatar and name */}
          <div className="flex flex-col items-center lg:items-start">
            <div className="relative mb-6">
              <div className="w-40 h-40 rounded-2xl bg-gradient-to-br from-blue-400 to-blue-700 flex items-center justify-center shadow-lg">
                <span
                  className="text-5xl font-bold text-white"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  АШ
                </span>
              </div>
              <div className="absolute -bottom-3 -right-3 bg-[#2563eb] text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-md">
                Co-founder
              </div>
            </div>
            <h3
              className="text-2xl font-bold text-[#0f172a] mb-1 mt-4"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Алексей Шиманский
            </h3>
            <p className="text-[#64748b] text-sm mb-6">
              Co-founder, Skillfolio / ANKII
            </p>

            {/* Badges */}
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1.5 bg-blue-50 text-[#2563eb] text-xs font-semibold rounded-lg border border-blue-100">
                Резидент ИНТЦ Сколково
              </span>
              <span className="px-3 py-1.5 bg-blue-50 text-[#2563eb] text-xs font-semibold rounded-lg border border-blue-100">
                Резидент ИНТЦ Сириус
              </span>
              <span className="px-3 py-1.5 bg-slate-100 text-slate-600 text-xs font-semibold rounded-lg">
                ИИ и когнитивные исследования
              </span>
            </div>
          </div>

          {/* Stats and bio */}
          <div>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-[#f8fafc] rounded-2xl p-5 border border-slate-100">
                <div
                  className="text-3xl font-bold text-[#2563eb] mb-1"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  20+
                </div>
                <div className="text-sm text-[#64748b]">
                  лет опыта в ИТ-проектах
                </div>
              </div>
              <div className="bg-[#f8fafc] rounded-2xl p-5 border border-slate-100">
                <div
                  className="text-3xl font-bold text-[#2563eb] mb-1"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  7
                </div>
                <div className="text-sm text-[#64748b]">
                  лет создания ИТ-сервисов с ИИ
                </div>
              </div>
              <div className="bg-[#f8fafc] rounded-2xl p-5 border border-slate-100">
                <div
                  className="text-3xl font-bold text-[#2563eb] mb-1"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  15+
                </div>
                <div className="text-sm text-[#64748b]">
                  научных статей по ИИ
                </div>
              </div>
              <div className="bg-[#f8fafc] rounded-2xl p-5 border border-slate-100">
                <div
                  className="text-3xl font-bold text-[#2563eb] mb-1"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  MBA
                </div>
                <div className="text-sm text-[#64748b]">
                  управление бизнесом
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg
                    className="w-3.5 h-3.5 text-[#2563eb]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="text-[#64748b] text-sm leading-relaxed">
                  Резидент инновационного научно-технологического центра ИНТЦ
                  Сколково и ИНТЦ Сириус по направлению «ИИ и когнитивные
                  исследования»
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg
                    className="w-3.5 h-3.5 text-[#2563eb]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="text-[#64748b] text-sm leading-relaxed">
                  Более 20 лет опыта в реализации ИТ-проектов для среднего и
                  крупного бизнеса
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg
                    className="w-3.5 h-3.5 text-[#2563eb]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="text-[#64748b] text-sm leading-relaxed">
                  Автор 15+ научных статей по применению ИИ в бизнес-процессах
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
