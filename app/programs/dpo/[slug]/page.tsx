import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { dpoPrograms } from "@/content/courses/dpo";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return dpoPrograms.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const program = dpoPrograms.find((p) => p.slug === slug);
  if (!program) return {};
  return {
    title: program.title,
    description: `Программа повышения квалификации: ${program.title}. Удостоверение государственного образца. ${program.audience}.`,
  };
}

export default async function DpoProgramPage({ params }: Props) {
  const { slug } = await params;
  const program = dpoPrograms.find((p) => p.slug === slug);
  if (!program) notFound();

  const categoryLabels: Record<string, string> = {
    coaching: "Коучинг",
    pedagogy: "Педагогика",
    psychology: "Психология",
    communication: "Коммуникации",
    entrepreneurship: "Предпринимательство",
    teamwork: "Командная работа",
    competencies: "Компетенции",
    ai: "Искусственный интеллект",
  };

  return (
    <>
      <Header />
      <main className="pt-16 md:pt-18">
        {/* Breadcrumb */}
        <div className="bg-[#f8fafc] border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <nav className="flex items-center gap-2 text-sm text-[#64748b]">
              <Link href="/" className="hover:text-[#0f172a]">Главная</Link>
              <span>›</span>
              <Link href="/programs" className="hover:text-[#0f172a]">Программы</Link>
              <span>›</span>
              <Link href="/programs#dpo" className="hover:text-[#0f172a]">ДПО</Link>
              <span>›</span>
              <span className="text-[#0f172a] truncate max-w-xs">{program.title}</span>
            </nav>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="lg:col-span-2">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-purple-100 text-purple-700">
                  ДПО — Повышение квалификации
                </span>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-[#64748b]">
                  {categoryLabels[program.category] ?? program.category}
                </span>
              </div>

              <h1
                className="text-2xl sm:text-3xl font-bold text-[#0f172a] mb-6 leading-tight"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                {program.title}
              </h1>

              {/* Key details */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
                {[
                  { label: "Формат", value: program.format === "online" ? "Онлайн" : "Очно" },
                  { label: "Документ", value: "Удостоверение ДПО" },
                  { label: "Аудитория", value: program.audience },
                ].map(({ label, value }) => (
                  <div key={label} className="bg-[#f8fafc] rounded-xl p-4">
                    <div className="text-xs text-[#64748b] mb-1">{label}</div>
                    <div className="text-sm font-semibold text-[#0f172a]">{value}</div>
                  </div>
                ))}
              </div>

              {/* Area */}
              <div className="mb-8">
                <h2 className="text-lg font-bold text-[#0f172a] mb-3"
                  style={{ fontFamily: "var(--font-montserrat)" }}>
                  Область профессиональной деятельности
                </h2>
                <p className="text-[#64748b] leading-relaxed">{program.professionalArea}</p>
              </div>

              {/* For whom */}
              <div className="mb-8">
                <h2 className="text-lg font-bold text-[#0f172a] mb-3"
                  style={{ fontFamily: "var(--font-montserrat)" }}>
                  Для кого эта программа
                </h2>
                <p className="text-[#64748b] leading-relaxed">{program.audience}</p>
              </div>

              {/* Document */}
              <div className="bg-purple-50 border border-purple-200 rounded-2xl p-6 mb-8">
                <div className="flex items-center gap-3 mb-2">
                  <svg className="w-5 h-5 text-purple-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                  <span className="font-bold text-purple-700">Документ по окончании</span>
                </div>
                <p className="text-sm text-[#64748b]">
                  Удостоверение о повышении квалификации государственного образца,
                  выдаётся на основании лицензии на образовательную деятельность.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-20">
                <div className="bg-[#0f172a] rounded-2xl p-6 text-white">
                  <div className="text-[#80ff46] text-sm font-semibold mb-1">Программа ДПО</div>
                  <h3 className="font-bold text-lg mb-4"
                    style={{ fontFamily: "var(--font-montserrat)" }}>
                    Записаться на программу
                  </h3>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2 text-sm text-white/70">
                      <svg className="w-4 h-4 text-[#80ff46]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Онлайн, в удобное время
                    </div>
                    <div className="flex items-center gap-2 text-sm text-white/70">
                      <svg className="w-4 h-4 text-[#80ff46]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Удостоверение государственного образца
                    </div>
                    <div className="flex items-center gap-2 text-sm text-white/70">
                      <svg className="w-4 h-4 text-[#80ff46]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Куратор сопровождает весь курс
                    </div>
                  </div>

                  <a
                    href="mailto:info@ankii.ru?subject=Запись на программу ДПО"
                    className="block w-full text-center px-5 py-3 rounded-xl bg-[#80ff46] text-[#0f172a] font-bold hover:bg-[#6be038] transition-colors mb-3"
                  >
                    Записаться
                  </a>
                  <a
                    href="mailto:info@ankii.ru"
                    className="block w-full text-center px-5 py-3 rounded-xl border border-white/20 text-white font-medium hover:bg-white/10 transition-colors text-sm"
                  >
                    Задать вопрос
                  </a>
                </div>

                <div className="mt-4 p-4 rounded-xl bg-[#f8fafc] border border-slate-200">
                  <p className="text-xs text-[#64748b] leading-relaxed">
                    Стоимость программы уточняется при записи.
                    Возможна корпоративная скидка от 5 участников.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
