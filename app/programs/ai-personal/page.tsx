import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { aiPersonalCourse } from "@/content/courses/ai-personal";

export const metadata: Metadata = {
  title: "Цифровой ИИ помощник психолога",
  description:
    "Практический курс по ИИ для психологов, коучей и педагогов. Освободите 10 часов в неделю. Тариф Профессионал включает удостоверение ДПО (72 ч).",
};

export default function AiPersonalPage() {
  const course = aiPersonalCourse;

  return (
    <>
      <Header />
      <main className="pt-16 md:pt-18">
        {/* Hero */}
        <section className="bg-[#0f172a] py-20 px-4 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#80ff46]/5 rounded-full blur-3xl pointer-events-none" />
          <div className="max-w-7xl mx-auto relative">
            <nav className="flex items-center gap-2 text-sm text-white/40 mb-8">
              <Link href="/" className="hover:text-white/70">Главная</Link>
              <span>›</span>
              <Link href="/programs" className="hover:text-white/70">Программы</Link>
              <span>›</span>
              <span className="text-white/70">ИИ для специалистов</span>
            </nav>

            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-[#80ff46]/20 text-[#80ff46]">
                Для психологов и коучей
              </span>
              <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-white/10 text-white/60">
                Онлайн
              </span>
            </div>

            <h1
              className="text-3xl sm:text-5xl font-bold text-white mb-4 max-w-3xl leading-tight"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              {course.title}
            </h1>
            <p className="text-xl text-[#80ff46] font-medium mb-6 max-w-2xl">
              {course.subtitle}
            </p>
            <p className="text-white/60 text-lg max-w-2xl leading-relaxed">
              {course.description}
            </p>
          </div>
        </section>

        {/* Benefits */}
        <section className="bg-[#f8fafc] py-12 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {course.benefits.map((b) => (
                <div key={b.title} className="bg-white rounded-xl p-4 border border-slate-200">
                  <div className="text-sm font-bold text-[#0f172a] mb-1"
                    style={{ fontFamily: "var(--font-montserrat)" }}>
                    {b.title}
                  </div>
                  <div className="text-xs text-[#64748b] leading-relaxed">{b.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing tiers */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2
              className="text-2xl sm:text-3xl font-bold text-[#0f172a] mb-10 text-center"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Выберите тариф
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {course.tiers.map((tier) => (
                <div
                  key={tier.id}
                  className={`flex flex-col rounded-2xl p-7 border ${
                    tier.isPopular
                      ? "bg-[#0f172a] border-[#80ff46]/40 shadow-xl"
                      : "bg-white border-slate-200"
                  }`}
                >
                  {tier.isPopular && (
                    <div className="inline-flex self-start items-center gap-1 px-3 py-1 rounded-full bg-[#80ff46]/20 text-[#80ff46] text-xs font-semibold mb-4">
                      ⭐ Популярный
                    </div>
                  )}
                  <div className={`text-3xl font-bold mb-1 ${tier.isPopular ? "text-white" : "text-[#0f172a]"}`}
                    style={{ fontFamily: "var(--font-montserrat)" }}>
                    {tier.price.toLocaleString("ru-RU")} ₽
                    {tier.originalPrice && (
                      <span className={`text-base font-normal line-through ml-2 ${tier.isPopular ? "text-white/40" : "text-[#64748b]"}`}>
                        {tier.originalPrice.toLocaleString("ru-RU")} ₽
                      </span>
                    )}
                  </div>
                  <div className={`text-xl font-bold mb-1 ${tier.isPopular ? "text-[#80ff46]" : "text-[#0f172a]"}`}
                    style={{ fontFamily: "var(--font-montserrat)" }}>
                    {tier.name}
                  </div>
                  <div className={`text-sm mb-4 ${tier.isPopular ? "text-white/60" : "text-[#64748b]"}`}>
                    {tier.level} · {tier.hours} ч · {tier.durationWeeks} нед.
                  </div>

                  {tier.certificate && (
                    <div className={`flex items-center gap-2 text-xs font-medium mb-4 px-3 py-2 rounded-lg ${tier.isPopular ? "bg-[#80ff46]/20 text-[#80ff46]" : "bg-purple-50 text-purple-700"}`}>
                      <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                      {tier.certificate}
                    </div>
                  )}

                  <p className={`text-sm leading-relaxed flex-1 mb-6 ${tier.isPopular ? "text-white/70" : "text-[#64748b]"}`}>
                    {tier.result}
                  </p>

                  {tier.modules && (
                    <ul className="space-y-1.5 mb-6">
                      {tier.modules.map((m) => (
                        <li key={m} className="flex items-start gap-2 text-xs">
                          <span className={`mt-0.5 flex-shrink-0 ${tier.isPopular ? "text-[#80ff46]" : "text-[#64748b]"}`}>✓</span>
                          <span className={tier.isPopular ? "text-white/70" : "text-[#64748b]"}>{m}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  <a
                    href="mailto:info@ankii.ru?subject=Запись на курс ИИ-помощник"
                    className={`block w-full text-center py-3 rounded-xl font-semibold transition-colors ${
                      tier.isPopular
                        ? "bg-[#80ff46] text-[#0f172a] hover:bg-[#6be038]"
                        : "bg-[#0f172a] text-white hover:bg-[#1e293b]"
                    }`}
                  >
                    Записаться
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
