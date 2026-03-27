import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { onlineCourses } from "@/content/courses/online";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return onlineCourses.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const course = onlineCourses.find((c) => c.slug === slug);
  if (!course) return {};
  return {
    title: course.title,
    description: `${course.description} Для: ${course.audience}. Цена: ${course.price.toLocaleString("ru-RU")} ₽.`,
  };
}

const categoryLabels: Record<string, string> = {
  eq: "Эмоциональный интеллект",
  thinking: "Мышление",
  leadership: "Лидерство",
  communication: "Коммуникации",
  "personal-brand": "Личный бренд",
  career: "Карьера",
  stress: "Стрессоустойчивость",
  kids: "Для детей и родителей",
  ai: "Искусственный интеллект",
};

export default async function OnlineCoursePage({ params }: Props) {
  const { slug } = await params;
  const course = onlineCourses.find((c) => c.slug === slug);
  if (!course) notFound();

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
              <Link href="/programs#online" className="hover:text-[#0f172a]">Онлайн-курсы</Link>
              <span>›</span>
              <span className="text-[#0f172a] truncate max-w-xs">{course.title}</span>
            </nav>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main */}
            <div className="lg:col-span-2">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-100 text-blue-700">
                  Онлайн-курс
                </span>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-[#64748b]">
                  {categoryLabels[course.category] ?? course.category}
                </span>
                {course.isBestseller && (
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-amber-100 text-amber-700">
                    Хит продаж
                  </span>
                )}
              </div>

              <h1
                className="text-2xl sm:text-3xl font-bold text-[#0f172a] mb-4 leading-tight"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                {course.title}
              </h1>

              <p className="text-lg text-[#64748b] leading-relaxed mb-8">{course.description}</p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { label: "Аудитория", value: course.audience },
                  { label: "Формат", value: "Онлайн, в удобное время" },
                  { label: "Документ", value: "Сертификат об окончании" },
                  { label: "Доступ", value: "Бессрочный после покупки" },
                ].map(({ label, value }) => (
                  <div key={label} className="bg-[#f8fafc] rounded-xl p-4">
                    <div className="text-xs text-[#64748b] mb-1">{label}</div>
                    <div className="text-sm font-semibold text-[#0f172a]">{value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-20 bg-[#0f172a] rounded-2xl p-6 text-white">
                <div className="text-3xl font-bold mb-1" style={{ fontFamily: "var(--font-montserrat)" }}>
                  {course.price.toLocaleString("ru-RU")} ₽
                </div>
                <div className="text-white/60 text-sm mb-6">Онлайн-курс · Сертификат</div>
                <div className="space-y-3 mb-6">
                  {["Доступ сразу после оплаты", "Сертификат об окончании", "Куратор поддерживает", "Практические задания"].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm text-white/70">
                      <svg className="w-4 h-4 text-[#80ff46] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </div>
                  ))}
                </div>
                <a
                  href="mailto:info@ankii.ru?subject=Запись на онлайн-курс"
                  className="block w-full text-center py-3 rounded-xl bg-[#80ff46] text-[#0f172a] font-bold hover:bg-[#6be038] transition-colors"
                >
                  Записаться
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
