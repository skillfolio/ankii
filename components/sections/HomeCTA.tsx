import Link from "next/link";

export default function HomeCTA() {
  return (
    <section className="py-24 bg-[#0f172a]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#80ff46]/30 bg-[#80ff46]/10 mb-6">
          <span className="w-2 h-2 rounded-full bg-[#80ff46] animate-pulse" />
          <span className="text-sm font-medium text-[#80ff46]">
            Старт возможен уже в этом месяце
          </span>
        </div>

        <h2
          className="text-3xl sm:text-5xl font-bold text-white mb-6 leading-tight"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          Готовы сделать первый шаг?
        </h2>

        <p className="text-lg text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed">
          Выберите программу или получите бесплатную консультацию —
          поможем подобрать подходящий формат обучения для вас или вашей команды.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/programs"
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-[#80ff46] text-[#0f172a] font-bold text-base hover:bg-[#6be038] transition-colors shadow-lg shadow-[#80ff46]/20 w-full sm:w-auto"
          >
            Выбрать программу
          </Link>
          <a
            href="mailto:info@ankii.ru"
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl border border-white/20 text-white font-semibold text-base hover:bg-white/10 transition-colors w-full sm:w-auto"
          >
            Написать нам
          </a>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { icon: "🎓", text: "Государственное удостоверение о повышении квалификации" },
            { icon: "⚡", text: "Результат с первого занятия — готовые инструменты" },
            { icon: "🔒", text: "Безопасная работа с ИИ без утечки данных" },
          ].map(({ icon, text }) => (
            <div key={text} className="flex items-center gap-3 text-left">
              <span className="text-2xl flex-shrink-0">{icon}</span>
              <span className="text-sm text-white/60 leading-snug">{text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
