import Link from "next/link";

const modules = [
  { level: "A", title: "ИИ-старт", desc: "Базовый уровень для всей команды", hours: 16, price: "39 000 ₽" },
  { level: "B", title: "ИИ по отделам", desc: "Специализация под маркетинг, продажи, HR", hours: 36, price: "49 000 ₽", highlight: true },
  { level: "C", title: "Автоматизация", desc: "No-code, RAG-агенты, регламенты под ключ", hours: 72, price: "59 000 ₽" },
];

const departments = [
  { icon: "📈", name: "Продажи", result: "+5 клиентов" },
  { icon: "📣", name: "Маркетинг", result: "Контент ×5" },
  { icon: "👥", name: "HR", result: "-40% рутины" },
  { icon: "📊", name: "Аналитика", result: "Отчёты ×10" },
  { icon: "⚖️", name: "Юристы", result: "Документы ×5" },
];

export default function HomeCorporate() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f0fdf4] border border-[#80ff46]/40 mb-6">
              <span className="text-sm font-medium text-[#166534]">Для компаний</span>
            </div>
            <h2
              className="text-3xl sm:text-4xl font-bold text-[#0f172a] mb-4"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Ваша команда начнёт экономить{" "}
              <span className="text-[#80ff46] bg-[#0f172a] px-1 rounded">1–3 часа в день</span>{" "}
              уже через неделю
            </h2>
            <p className="text-[#64748b] mb-8 leading-relaxed">
              Три уровня корпоративного обучения ИИ. От базовых навыков до
              полной автоматизации процессов с no-code агентами и регламентами.
            </p>

            {/* Departments */}
            <div className="flex flex-wrap gap-3 mb-8">
              {departments.map(({ icon, name, result }) => (
                <div
                  key={name}
                  className="flex items-center gap-2 px-3 py-2 rounded-xl bg-[#f8fafc] border border-slate-200"
                >
                  <span>{icon}</span>
                  <span className="text-sm font-medium text-[#0f172a]">{name}</span>
                  <span className="text-xs text-[#80ff46] font-bold">{result}</span>
                </div>
              ))}
            </div>

            <Link
              href="/corporate"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0f172a] text-white font-semibold hover:bg-[#1e293b] transition-colors"
            >
              Корпоративные программы
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Right: modules */}
          <div className="flex flex-col gap-4">
            {modules.map(({ level, title, desc, hours, price, highlight }) => (
              <div
                key={level}
                className={`flex items-center gap-6 p-6 rounded-2xl border transition-all ${
                  highlight
                    ? "border-[#80ff46]/60 bg-[#0f172a] shadow-lg"
                    : "border-slate-200 bg-white"
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl font-bold flex-shrink-0 ${
                    highlight ? "bg-[#80ff46] text-[#0f172a]" : "bg-[#f8fafc] text-[#0f172a]"
                  }`}
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  {level}
                </div>
                <div className="flex-1">
                  <div className={`font-bold text-base ${highlight ? "text-white" : "text-[#0f172a]"}`}
                    style={{ fontFamily: "var(--font-montserrat)" }}>
                    {title}
                    {highlight && (
                      <span className="ml-2 text-xs font-medium px-2 py-0.5 rounded-full bg-[#80ff46]/20 text-[#80ff46]">
                        Популярный
                      </span>
                    )}
                  </div>
                  <div className={`text-sm mt-0.5 ${highlight ? "text-white/60" : "text-[#64748b]"}`}>
                    {desc} · {hours} ч
                  </div>
                </div>
                <div
                  className={`text-base font-bold flex-shrink-0 ${highlight ? "text-[#80ff46]" : "text-[#0f172a]"}`}
                >
                  {price}
                </div>
              </div>
            ))}
            <p className="text-xs text-[#64748b] text-center mt-2">
              До 30 человек в группе · Под запрос компании
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
