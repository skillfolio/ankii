import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { corporateAiModules, corporateAiDepartments, corporateTestimonials } from "@/content/courses/ai-corporate";
import { softCorporateTopics, corporateFormats } from "@/content/courses/soft-corporate";

export const metadata: Metadata = {
  title: "Корпоративное обучение",
  description:
    "Корпоративные программы АНКИИ: обучение ИИ для команд (A/B/C), тренинги Soft Skills, ассессмент компетенций. Результат через 1 неделю.",
};

export default function CorporatePage() {
  return (
    <>
      <Header />
      <main className="pt-16 md:pt-18">
        {/* Hero */}
        <section className="bg-[#0f172a] py-24 px-4 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
            style={{
              backgroundImage: "linear-gradient(rgba(128,255,70,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(128,255,70,0.5) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
          <div className="max-w-7xl mx-auto relative">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#80ff46]/30 bg-[#80ff46]/10 mb-8">
              <span className="text-sm font-medium text-[#80ff46]">Для компаний</span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1
                  className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  Ваша команда начнёт работать с ИИ{" "}
                  <span className="text-[#80ff46]">уже через неделю</span>
                </h1>
                <p className="text-white/70 text-lg leading-relaxed mb-8">
                  Три уровня обучения ИИ и корпоративные тренинги Soft Skills.
                  Готовые промты, ИИ-агенты под каждый отдел, измеримый результат.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="mailto:info@ankii.ru?subject=Корпоративное обучение"
                    className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl bg-[#80ff46] text-[#0f172a] font-bold hover:bg-[#6be038] transition-colors"
                  >
                    Запросить предложение
                  </a>
                  <a
                    href="#ai"
                    className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl border border-white/20 text-white font-semibold hover:bg-white/10 transition-colors"
                  >
                    Смотреть программы
                  </a>
                </div>
              </div>
              {/* Departments */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {corporateAiDepartments.map((dept) => (
                  <div key={dept.id} className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <div className="text-2xl mb-2">
                      {dept.id === "sales" ? "📈" : dept.id === "marketing" ? "📣" : dept.id === "hr" ? "👥" : dept.id === "analytics" ? "📊" : "⚖️"}
                    </div>
                    <div className="text-white text-sm font-semibold">{dept.name}</div>
                    <div className="text-[#80ff46] text-xs font-bold mt-1">{dept.result}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* AI Modules */}
        <section id="ai" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2
                className="text-3xl sm:text-4xl font-bold text-[#0f172a] mb-4"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                Корпоративное обучение ИИ
              </h2>
              <p className="text-[#64748b] max-w-2xl mx-auto">
                Три уровня — от базового до полной автоматизации. До 30 человек в группе.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {corporateAiModules.map((mod) => (
                <div
                  key={mod.id}
                  className={`flex flex-col rounded-2xl p-8 border ${
                    mod.isPopular
                      ? "bg-[#0f172a] border-[#80ff46]/40 shadow-xl"
                      : "bg-white border-slate-200"
                  }`}
                >
                  <div className="flex items-center justify-between mb-6">
                    <span
                      className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl font-bold ${
                        mod.isPopular ? "bg-[#80ff46] text-[#0f172a]" : "bg-[#f8fafc] text-[#0f172a]"
                      }`}
                      style={{ fontFamily: "var(--font-montserrat)" }}
                    >
                      {mod.level}
                    </span>
                    {mod.isPopular && (
                      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#80ff46]/20 text-[#80ff46]">
                        Популярный
                      </span>
                    )}
                  </div>
                  <h3
                    className={`text-xl font-bold mb-1 ${mod.isPopular ? "text-white" : "text-[#0f172a]"}`}
                    style={{ fontFamily: "var(--font-montserrat)" }}
                  >
                    {mod.title}
                  </h3>
                  <p className={`text-sm mb-2 ${mod.isPopular ? "text-[#80ff46]" : "text-[#64748b]"}`}>
                    {mod.subtitle}
                  </p>
                  <p className={`text-sm leading-relaxed mb-6 flex-1 ${mod.isPopular ? "text-white/70" : "text-[#64748b]"}`}>
                    {mod.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {mod.topics.slice(0, 4).map((topic) => (
                      <li key={topic} className="flex items-start gap-2 text-xs">
                        <span className={`mt-0.5 flex-shrink-0 ${mod.isPopular ? "text-[#80ff46]" : "text-[#64748b]"}`}>✓</span>
                        <span className={mod.isPopular ? "text-white/70" : "text-[#64748b]"}>{topic}</span>
                      </li>
                    ))}
                  </ul>
                  <div className={`flex items-end justify-between pt-4 border-t ${mod.isPopular ? "border-white/10" : "border-slate-100"}`}>
                    <div>
                      <div className={`text-2xl font-bold ${mod.isPopular ? "text-white" : "text-[#0f172a]"}`}
                        style={{ fontFamily: "var(--font-montserrat)" }}>
                        {mod.price.toLocaleString("ru-RU")} ₽
                      </div>
                      <div className={`text-xs ${mod.isPopular ? "text-white/50" : "text-[#64748b]"}`}>
                        {mod.hours} ч · до {mod.groupSize} чел.
                      </div>
                    </div>
                    <a
                      href="mailto:info@ankii.ru?subject=Корпоративное обучение ИИ"
                      className={`px-4 py-2 rounded-xl text-sm font-semibold transition-colors ${
                        mod.isPopular
                          ? "bg-[#80ff46] text-[#0f172a] hover:bg-[#6be038]"
                          : "bg-[#0f172a] text-white hover:bg-[#1e293b]"
                      }`}
                    >
                      Записаться
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Soft Skills */}
        <section id="soft" className="py-24 bg-[#f8fafc]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2
                className="text-3xl sm:text-4xl font-bold text-[#0f172a] mb-4"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                Корпоративные тренинги Soft Skills
              </h2>
              <p className="text-[#64748b] max-w-2xl mx-auto">
                Тренинги, воркшопы, коучинг и ассессмент. Под задачи вашей компании.
              </p>
            </div>

            {/* Formats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
              {corporateFormats.map((fmt) => (
                <div key={fmt.id} className="bg-white rounded-xl p-4 border border-slate-200 text-center">
                  <div className="text-sm font-bold text-[#0f172a] mb-1"
                    style={{ fontFamily: "var(--font-montserrat)" }}>
                    {fmt.name}
                  </div>
                  <div className="text-xs text-[#64748b]">{fmt.description}</div>
                </div>
              ))}
            </div>

            {/* Topics grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {softCorporateTopics.map((topic) => (
                <div key={topic.id} className="bg-white rounded-2xl border border-slate-200 p-5">
                  <h3
                    className="text-sm font-bold text-[#0f172a] mb-2"
                    style={{ fontFamily: "var(--font-montserrat)" }}
                  >
                    {topic.title}
                  </h3>
                  <p className="text-xs text-[#64748b] leading-relaxed mb-3">{topic.description}</p>
                  <div className="text-xs text-[#64748b]">
                    {topic.durationHours.join(" / ")} ч · {topic.groupSize[0]}–{topic.groupSize[1]} чел.
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <a
                href="mailto:info@ankii.ru?subject=Корпоративный тренинг Soft Skills"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#0f172a] text-white font-bold hover:bg-[#1e293b] transition-colors"
              >
                Обсудить программу для вашей команды
              </a>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="text-3xl font-bold text-[#0f172a] mb-12 text-center"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Результаты корпоративных клиентов
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {corporateTestimonials.map(({ name, position, text, result }) => (
                <div key={name + position} className="bg-[#f8fafc] rounded-2xl p-6 border border-slate-200">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0f172a] mb-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#80ff46]" />
                    <span className="text-xs font-semibold text-[#80ff46]">{result}</span>
                  </div>
                  <p className="text-sm text-[#64748b] leading-relaxed mb-4">«{text}»</p>
                  <div className="text-sm font-semibold text-[#0f172a]">{name}</div>
                  <div className="text-xs text-[#64748b]">{position}</div>
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
