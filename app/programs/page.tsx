import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { dpoPrograms } from "@/content/courses/dpo";
import { onlineCourses } from "@/content/courses/online";
import { corporateAiModules } from "@/content/courses/ai-corporate";
import { aiPersonalCourse } from "@/content/courses/ai-personal";

export const metadata: Metadata = {
  title: "Все программы",
  description:
    "Каталог программ АНКИИ: 17 программ ДПО с удостоверением, онлайн-курсы Soft Skills, обучение ИИ для специалистов и корпоративных команд.",
};

const tabs = [
  { id: "all", label: "Все", count: null },
  { id: "dpo", label: "ДПО", count: 17 },
  { id: "online", label: "Онлайн-курсы", count: 25 },
  { id: "ai-personal", label: "ИИ для специалистов", count: 1 },
  { id: "ai-corporate", label: "Корпоративный ИИ", count: 3 },
];

function DpoBadge() {
  return (
    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-purple-100 text-purple-700">
      ДПО
    </span>
  );
}

function OnlineBadge() {
  return (
    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-100 text-blue-700">
      Онлайн-курс
    </span>
  );
}

function AiBadge() {
  return (
    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-green-100 text-green-700">
      ИИ
    </span>
  );
}

export default function ProgramsPage() {
  return (
    <>
      <Header />
      <main className="pt-16 md:pt-18">
        {/* Hero */}
        <div className="bg-[#0f172a] py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 mb-6">
              <span className="text-sm text-white/60">Каталог программ</span>
            </div>
            <h1
              className="text-3xl sm:text-4xl font-bold text-white mb-4"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Все программы обучения
            </h1>
            <p className="text-white/60 text-lg max-w-2xl">
              17 лицензированных программ ДПО, 25+ онлайн-курсов и корпоративное
              обучение ИИ. Найдите подходящую программу.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Section: ДПО */}
          <section className="mb-16" id="dpo">
            <div className="flex items-center gap-3 mb-8">
              <h2
                className="text-2xl font-bold text-[#0f172a]"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                Программы ДПО
              </h2>
              <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-purple-100 text-purple-700">
                Удостоверение государственного образца
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {dpoPrograms.map((program) => (
                <Link
                  key={program.id}
                  href={`/programs/dpo/${program.slug}`}
                  className="group flex flex-col bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-md hover:border-purple-200 transition-all"
                >
                  <div className="flex items-start justify-between mb-3">
                    <DpoBadge />
                    <span className="text-xs text-[#64748b]">{program.format === "online" ? "Онлайн" : "Очно"}</span>
                  </div>
                  <h3
                    className="text-sm font-semibold text-[#0f172a] mb-2 flex-1 leading-snug group-hover:text-purple-700 transition-colors"
                    style={{ fontFamily: "var(--font-montserrat)" }}
                  >
                    {program.title}
                  </h3>
                  <p className="text-xs text-[#64748b] mb-4">{program.audience}</p>
                  <div className="flex items-center gap-1.5 text-xs font-medium text-purple-700 mt-auto">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                    Удостоверение ДПО
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Section: AI Personal */}
          <section className="mb-16" id="ai-personal">
            <div className="flex items-center gap-3 mb-8">
              <h2
                className="text-2xl font-bold text-[#0f172a]"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                ИИ для специалистов
              </h2>
              <AiBadge />
            </div>
            <div className="rounded-2xl bg-[#0f172a] border border-white/10 p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="text-[#80ff46] text-sm font-semibold mb-2">
                    Для психологов, коучей и педагогов
                  </div>
                  <h3
                    className="text-2xl font-bold text-white mb-3"
                    style={{ fontFamily: "var(--font-montserrat)" }}
                  >
                    {aiPersonalCourse.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-6">
                    {aiPersonalCourse.description}
                  </p>
                  <Link
                    href="/programs/ai-personal"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#80ff46] text-[#0f172a] font-semibold hover:bg-[#6be038] transition-colors"
                  >
                    Подробнее о программе
                  </Link>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {aiPersonalCourse.tiers.slice(0, 4).map((tier) => (
                    <div
                      key={tier.id}
                      className="p-4 rounded-xl bg-white/5 border border-white/10"
                    >
                      <div className="text-lg font-bold text-white">
                        {tier.price.toLocaleString("ru-RU")} ₽
                      </div>
                      <div className="text-xs text-white/60 mt-0.5">{tier.name}</div>
                      <div className="text-xs text-[#80ff46] mt-1">{tier.hours} часов</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Section: Online Courses */}
          <section className="mb-16" id="online">
            <div className="flex items-center gap-3 mb-8">
              <h2
                className="text-2xl font-bold text-[#0f172a]"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                Онлайн-курсы Soft Skills
              </h2>
              <OnlineBadge />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {onlineCourses.map((course) => (
                <Link
                  key={course.id}
                  href={`/programs/online/${course.slug}`}
                  className="group flex flex-col bg-white border border-slate-200 rounded-2xl p-5 hover:shadow-md hover:border-blue-200 transition-all"
                >
                  <div className="flex items-start justify-between mb-3">
                    <OnlineBadge />
                    <span className="text-sm font-bold text-[#0f172a]">
                      {course.price.toLocaleString("ru-RU")} ₽
                    </span>
                  </div>
                  <h3
                    className="text-sm font-semibold text-[#0f172a] flex-1 leading-snug group-hover:text-blue-700 transition-colors"
                    style={{ fontFamily: "var(--font-montserrat)" }}
                  >
                    {course.title}
                  </h3>
                  <p className="text-xs text-[#64748b] mt-2">{course.audience}</p>
                </Link>
              ))}
            </div>
          </section>

          {/* Section: Corporate AI */}
          <section id="ai-corporate">
            <div className="flex items-center gap-3 mb-8">
              <h2
                className="text-2xl font-bold text-[#0f172a]"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                Корпоративное обучение ИИ
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {corporateAiModules.map((mod) => (
                <Link
                  key={mod.id}
                  href="/corporate#ai"
                  className="group flex flex-col bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-md hover:border-[#80ff46]/40 transition-all"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-10 h-10 rounded-xl bg-[#0f172a] text-[#80ff46] font-bold text-lg flex items-center justify-center"
                      style={{ fontFamily: "var(--font-montserrat)" }}>
                      {mod.level}
                    </span>
                    <span className="text-sm font-bold text-[#0f172a]">
                      {mod.price.toLocaleString("ru-RU")} ₽
                    </span>
                  </div>
                  <h3
                    className="text-base font-bold text-[#0f172a] mb-1"
                    style={{ fontFamily: "var(--font-montserrat)" }}
                  >
                    {mod.title}
                  </h3>
                  <p className="text-xs text-[#64748b] mb-4 flex-1">{mod.description}</p>
                  <div className="text-xs text-[#64748b]">{mod.hours} ч · до {mod.groupSize} чел.</div>
                </Link>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link
                href="/corporate"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0f172a] text-white font-semibold hover:bg-[#1e293b] transition-colors"
              >
                Запросить корпоративное предложение
              </Link>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
