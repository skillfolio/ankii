import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { org } from "@/content/org";
import { dpoPrograms } from "@/content/courses/dpo";

export const metadata: Metadata = {
  title: "Сведения об образовательной организации",
  description:
    "Обязательный раздел по 273-ФЗ. Сведения об АНКИИ: лицензия, документы, программы, состав, контакты.",
};

const sections = [
  { id: "basic", label: "Основные сведения" },
  { id: "structure", label: "Структура и органы управления" },
  { id: "documents", label: "Документы" },
  { id: "education", label: "Образование" },
  { id: "standards", label: "Образовательные стандарты" },
  { id: "staff", label: "Руководство. Педагогический состав" },
  { id: "infrastructure", label: "Материально-техническое обеспечение" },
  { id: "scholarships", label: "Стипендии и меры поддержки" },
  { id: "paid", label: "Платные образовательные услуги" },
  { id: "financial", label: "Финансово-хозяйственная деятельность" },
  { id: "vacancies", label: "Вакантные места для приёма" },
  { id: "international", label: "Международное сотрудничество" },
];

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col sm:flex-row py-3 border-b border-slate-100 last:border-0 gap-1">
      <dt className="text-sm text-[#64748b] sm:w-64 flex-shrink-0">{label}</dt>
      <dd className="text-sm text-[#0f172a] font-medium">{value || "—"}</dd>
    </div>
  );
}

export default function SvedeniyaPage() {
  return (
    <>
      <Header />
      <main className="pt-16 md:pt-18">
        {/* Header */}
        <div className="bg-[#0f172a] py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <p className="text-[#80ff46] text-sm font-medium mb-2">273-ФЗ · Минобрнауки РФ</p>
            <h1
              className="text-2xl sm:text-3xl font-bold text-white"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Сведения об образовательной организации
            </h1>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Navigation */}
            <aside className="lg:col-span-1">
              <nav className="sticky top-20 space-y-1">
                {sections.map(({ id, label }) => (
                  <a
                    key={id}
                    href={`#${id}`}
                    className="block px-3 py-2 rounded-lg text-sm text-[#64748b] hover:bg-[#f8fafc] hover:text-[#0f172a] transition-colors"
                  >
                    {label}
                  </a>
                ))}
              </nav>
            </aside>

            {/* Content */}
            <div className="lg:col-span-3 space-y-12">
              {/* Basic */}
              <section id="basic">
                <h2 className="text-xl font-bold text-[#0f172a] mb-4"
                  style={{ fontFamily: "var(--font-montserrat)" }}>
                  1. Основные сведения
                </h2>
                <dl>
                  <InfoRow label="Полное наименование" value={org.fullName} />
                  <InfoRow label="Краткое наименование" value={org.shortName} />
                  <InfoRow label="ИНН" value={org.inn} />
                  <InfoRow label="ОГРН" value={org.ogrn} />
                  <InfoRow label="Юридический адрес" value={org.legalAddress} />
                  <InfoRow label="Фактический адрес" value={org.actualAddress} />
                  <InfoRow label="Телефон" value={org.phone} />
                  <InfoRow label="Email" value={org.email} />
                  <InfoRow label="Сайт" value={org.website} />
                  <InfoRow label="Режим работы" value={org.workingHours} />
                </dl>
              </section>

              {/* Structure */}
              <section id="structure">
                <h2 className="text-xl font-bold text-[#0f172a] mb-4"
                  style={{ fontFamily: "var(--font-montserrat)" }}>
                  2. Структура и органы управления
                </h2>
                <div className="bg-[#f8fafc] rounded-xl p-6 border border-slate-200">
                  <p className="text-sm text-[#64748b]">
                    {org.structure || "Сведения о структуре организации размещаются здесь."}
                  </p>
                </div>
              </section>

              {/* Documents */}
              <section id="documents">
                <h2 className="text-xl font-bold text-[#0f172a] mb-4"
                  style={{ fontFamily: "var(--font-montserrat)" }}>
                  3. Документы
                </h2>
                <div className="space-y-3">
                  {[
                    "Устав организации",
                    "Лицензия на образовательную деятельность",
                    "Правила приёма",
                    "Учебные планы",
                    "Политика конфиденциальности",
                    "Публичный договор-оферта",
                  ].map((doc) => (
                    <div key={doc} className="flex items-center gap-3 p-3 rounded-lg border border-slate-200 bg-white">
                      <svg className="w-5 h-5 text-[#64748b]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      <span className="text-sm text-[#0f172a]">{doc}</span>
                      <span className="ml-auto text-xs text-[#64748b]">В процессе размещения</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Education */}
              <section id="education">
                <h2 className="text-xl font-bold text-[#0f172a] mb-4"
                  style={{ fontFamily: "var(--font-montserrat)" }}>
                  4. Образование
                </h2>
                <p className="text-sm text-[#64748b] mb-6">
                  Реализуемые образовательные программы дополнительного профессионального образования
                  (повышение квалификации):
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-[#f8fafc]">
                        <th className="text-left p-3 border border-slate-200 font-semibold text-[#0f172a]">№</th>
                        <th className="text-left p-3 border border-slate-200 font-semibold text-[#0f172a]">Наименование программы</th>
                        <th className="text-left p-3 border border-slate-200 font-semibold text-[#0f172a]">Форма</th>
                        <th className="text-left p-3 border border-slate-200 font-semibold text-[#0f172a]">Документ</th>
                      </tr>
                    </thead>
                    <tbody>
                      {dpoPrograms.map((program) => (
                        <tr key={program.id} className="hover:bg-[#f8fafc]">
                          <td className="p-3 border border-slate-200 text-[#64748b]">{program.id}</td>
                          <td className="p-3 border border-slate-200 text-[#0f172a]">{program.title}</td>
                          <td className="p-3 border border-slate-200 text-[#64748b]">Онлайн</td>
                          <td className="p-3 border border-slate-200 text-[#64748b]">Удостоверение о ПК</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Standards */}
              <section id="standards">
                <h2 className="text-xl font-bold text-[#0f172a] mb-4"
                  style={{ fontFamily: "var(--font-montserrat)" }}>
                  5. Образовательные стандарты
                </h2>
                <div className="bg-[#f8fafc] rounded-xl p-6 border border-slate-200">
                  <p className="text-sm text-[#64748b]">
                    Программы разработаны в соответствии с требованиями Федерального закона
                    от 29.12.2012 № 273-ФЗ «Об образовании в Российской Федерации»,
                    Приказа Минобрнауки России от 01.07.2013 № 499.
                  </p>
                </div>
              </section>

              {/* Staff */}
              <section id="staff">
                <h2 className="text-xl font-bold text-[#0f172a] mb-4"
                  style={{ fontFamily: "var(--font-montserrat)" }}>
                  6. Руководство. Педагогический состав
                </h2>
                <dl>
                  <InfoRow label="Руководитель" value={org.director.name} />
                  <InfoRow label="Должность" value={org.director.position} />
                  <InfoRow label="Email руководителя" value={org.director.email} />
                  <InfoRow label="Приёмные часы" value={org.director.receptionHours} />
                </dl>
                <div className="mt-4 p-4 bg-[#f8fafc] rounded-xl border border-slate-200">
                  <p className="text-sm text-[#64748b]">
                    Полный список педагогического состава и сведения о квалификации
                    размещаются в разделе{" "}
                    <Link href="/experts" className="text-[#2563eb] hover:underline">
                      Эксперты
                    </Link>.
                  </p>
                </div>
              </section>

              {/* Infrastructure */}
              <section id="infrastructure">
                <h2 className="text-xl font-bold text-[#0f172a] mb-4"
                  style={{ fontFamily: "var(--font-montserrat)" }}>
                  7. Материально-техническое обеспечение
                </h2>
                <div className="bg-[#f8fafc] rounded-xl p-6 border border-slate-200">
                  <p className="text-sm text-[#64748b]">
                    Обучение осуществляется в дистанционном (онлайн) формате с использованием
                    собственной LMS-платформы. Специальные условия для обучения лиц с
                    ограниченными возможностями здоровья обеспечиваются по запросу.
                  </p>
                </div>
              </section>

              {/* Scholarships */}
              <section id="scholarships">
                <h2 className="text-xl font-bold text-[#0f172a] mb-4"
                  style={{ fontFamily: "var(--font-montserrat)" }}>
                  8. Стипендии и меры поддержки
                </h2>
                <div className="bg-[#f8fafc] rounded-xl p-6 border border-slate-200">
                  <p className="text-sm text-[#64748b]">
                    Стипендии и иные формы материальной поддержки не предусмотрены.
                    Корпоративные скидки при обучении группы от 5 человек — по запросу.
                  </p>
                </div>
              </section>

              {/* Paid services */}
              <section id="paid">
                <h2 className="text-xl font-bold text-[#0f172a] mb-4"
                  style={{ fontFamily: "var(--font-montserrat)" }}>
                  9. Платные образовательные услуги
                </h2>
                <div className="bg-[#f8fafc] rounded-xl p-6 border border-slate-200">
                  <p className="text-sm text-[#64748b]">
                    {org.paidServicesInfo}
                  </p>
                  <p className="text-sm text-[#64748b] mt-3">
                    Оплата производится на основании договора об оказании образовательных услуг.
                    Возможна оплата через эквайринг Т-Банка.
                  </p>
                </div>
              </section>

              {/* Financial */}
              <section id="financial">
                <h2 className="text-xl font-bold text-[#0f172a] mb-4"
                  style={{ fontFamily: "var(--font-montserrat)" }}>
                  10. Финансово-хозяйственная деятельность
                </h2>
                <div className="bg-[#f8fafc] rounded-xl p-6 border border-slate-200">
                  <p className="text-sm text-[#64748b]">
                    Сведения о финансово-хозяйственной деятельности размещаются в соответствии
                    с требованиями законодательства.
                  </p>
                </div>
              </section>

              {/* Vacancies */}
              <section id="vacancies">
                <h2 className="text-xl font-bold text-[#0f172a] mb-4"
                  style={{ fontFamily: "var(--font-montserrat)" }}>
                  11. Вакантные места для приёма
                </h2>
                <dl>
                  <InfoRow label="Бюджетных мест" value="0 (обучение платное)" />
                  <InfoRow label="Платных мест" value="Без ограничений (по запросу)" />
                </dl>
              </section>

              {/* International */}
              <section id="international">
                <h2 className="text-xl font-bold text-[#0f172a] mb-4"
                  style={{ fontFamily: "var(--font-montserrat)" }}>
                  12. Международное сотрудничество
                </h2>
                <div className="bg-[#f8fafc] rounded-xl p-6 border border-slate-200">
                  <p className="text-sm text-[#64748b]">
                    Международное сотрудничество не осуществляется.
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
