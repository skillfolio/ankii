export default function Hero() {
  return (
    <section className="relative bg-white pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background decoration */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-blue-50 to-transparent opacity-60" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-100 rounded-full opacity-20 blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-8">
          <span className="w-2 h-2 rounded-full bg-[#2563eb] inline-block" />
          <span className="text-sm font-medium text-[#2563eb]">
            Резидент Сколково и Сириус
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1
              className="text-4xl sm:text-5xl font-bold text-[#0f172a] leading-tight mb-6"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Ваша команда начнёт экономить{" "}
              <span className="text-[#2563eb]">1–3 часа в день</span> уже через
              неделю
            </h1>

            <p className="text-lg text-[#64748b] leading-relaxed mb-8">
              Обучаем сотрудников работать с ИИ эффективно и без рисков. Готовые
              промты, ИИ-агенты под каждый отдел, удостоверения государственного
              образца.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-[#2563eb] text-white font-semibold hover:bg-[#1d4ed8] transition-colors shadow-md text-base"
              >
                Получить бесплатную консультацию
              </a>
              <a
                href="#programs"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl border-2 border-[#2563eb] text-[#2563eb] font-semibold hover:bg-blue-50 transition-colors text-base"
              >
                Смотреть программы
              </a>
            </div>

            {/* Trust stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center sm:text-left">
                <div
                  className="text-2xl font-bold text-[#0f172a] mb-1"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  20+
                </div>
                <div className="text-sm text-[#64748b]">команд обучено</div>
              </div>
              <div className="text-center sm:text-left">
                <div
                  className="text-2xl font-bold text-[#0f172a] mb-1"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  1–3 ч
                </div>
                <div className="text-sm text-[#64748b]">экономии в день</div>
              </div>
              <div className="text-center sm:text-left">
                <div
                  className="text-2xl font-bold text-[#0f172a] mb-1"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  3
                </div>
                <div className="text-sm text-[#64748b]">уровня глубины</div>
              </div>
            </div>
          </div>

          {/* Right side visual */}
          <div className="hidden lg:flex justify-end">
            <div className="relative w-full max-w-md">
              <div className="bg-[#f8fafc] rounded-2xl border border-slate-200 p-8 shadow-sm">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-5 h-5 text-[#2563eb]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-[#0f172a]">
                        Маркетинг
                      </div>
                      <div className="text-xs text-[#64748b]">
                        Контент за 20 мин вместо 2 часов
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-5 h-5 text-green-600"
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
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-[#0f172a]">
                        Продажи
                      </div>
                      <div className="text-xs text-[#64748b]">
                        +5 клиентов на каждого менеджера
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-5 h-5 text-purple-600"
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
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-[#0f172a]">
                        HR
                      </div>
                      <div className="text-xs text-[#64748b]">
                        Экономия до 40% рабочего времени
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-slate-200">
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                      {[0, 1, 2, 3].map((i) => (
                        <div
                          key={i}
                          className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-white"
                        />
                      ))}
                    </div>
                    <span className="text-sm text-[#64748b]">
                      20+ команд уже обучились
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
