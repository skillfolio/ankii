import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { experts, consultationPricing, expertSpecializationLabels } from "@/content/experts";

export const metadata: Metadata = {
  title: "Эксперты",
  description:
    "Преподаватели и эксперты АНКИИ: психологи, коучи ICF, педагоги, HR-директора. Запись на персональную консультацию.",
};

export default function ExpertsPage() {
  return (
    <>
      <Header />
      <main className="pt-16 md:pt-18">
        {/* Hero */}
        <section className="bg-[#0f172a] py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 mb-6">
              <span className="text-sm text-white/60">Наша команда</span>
            </div>
            <h1
              className="text-3xl sm:text-4xl font-bold text-white mb-4"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Учитесь у лучших практиков
            </h1>
            <p className="text-white/60 text-lg max-w-2xl">
              Каждый эксперт — практикующий специалист с реальными кейсами.
              Доступны для личных консультаций.
            </p>
          </div>
        </section>

        {/* Experts grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {experts.map((expert) => (
                <div
                  key={expert.id}
                  className="flex flex-col bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-md hover:border-[#80ff46]/30 transition-all"
                >
                  {/* Avatar */}
                  <div className="w-16 h-16 rounded-2xl bg-[#0f172a] flex items-center justify-center text-3xl mb-4 flex-shrink-0">
                    {expert.specializations.includes("ai") ? "🤖" :
                     expert.specializations.includes("eq") ? "💡" :
                     expert.specializations.includes("coaching") ? "🎯" :
                     expert.specializations.includes("pedagogy") ? "📚" :
                     expert.specializations.includes("hr") ? "👥" :
                     expert.specializations.includes("career") ? "🗺️" : "🧠"}
                  </div>

                  <h3
                    className="text-base font-bold text-[#0f172a] mb-0.5"
                    style={{ fontFamily: "var(--font-montserrat)" }}
                  >
                    {expert.name}
                  </h3>
                  <p className="text-sm text-[#80ff46] font-medium mb-2">{expert.position}</p>
                  <p className="text-sm text-[#64748b] leading-relaxed mb-4 flex-1">{expert.bio}</p>

                  {/* Specializations */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {expert.specializations.slice(0, 3).map((s) => (
                      <span
                        key={s}
                        className="text-xs px-2 py-1 rounded-full bg-[#f8fafc] border border-slate-200 text-[#64748b]"
                      >
                        {expertSpecializationLabels[s]}
                      </span>
                    ))}
                  </div>

                  {expert.consultationAvailable && (
                    <a
                      href="mailto:info@ankii.ru?subject=Запись на консультацию"
                      className="block w-full text-center py-2.5 rounded-xl bg-[#0f172a] text-white text-sm font-semibold hover:bg-[#1e293b] transition-colors"
                    >
                      Записаться на консультацию
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Consultation pricing */}
        <section id="consultation" className="py-16 bg-[#0f172a]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2
              className="text-2xl sm:text-3xl font-bold text-white mb-4"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Стоимость консультаций
            </h2>
            <p className="text-white/60 mb-10">
              Персональная работа с экспертом АНКИИ. Онлайн, в удобное время.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {consultationPricing.map((pkg) => (
                <div
                  key={pkg.sessions}
                  className={`rounded-2xl p-6 border ${
                    pkg.sessions === 5
                      ? "bg-white/10 border-[#80ff46]/40"
                      : "bg-white/5 border-white/10"
                  }`}
                >
                  <div
                    className="text-2xl font-bold text-white mb-1"
                    style={{ fontFamily: "var(--font-montserrat)" }}
                  >
                    {pkg.price.toLocaleString("ru-RU")} ₽
                  </div>
                  <div className="text-sm text-white/70">{pkg.label}</div>
                  {"savings" in pkg && pkg.savings > 0 && (
                    <div className="text-xs text-[#80ff46] font-semibold mt-1">
                      Экономия {pkg.savings.toLocaleString("ru-RU")} ₽
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-8">
              <a
                href="mailto:info@ankii.ru?subject=Запись на консультацию"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#80ff46] text-[#0f172a] font-bold hover:bg-[#6be038] transition-colors"
              >
                Записаться на консультацию
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
