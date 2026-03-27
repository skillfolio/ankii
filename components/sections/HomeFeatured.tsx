import Link from "next/link";

const featured = [
  {
    badge: "ДПО",
    badgeColor: "bg-purple-100 text-purple-700",
    title: "Коучинговые инструменты в индивидуальной и групповой работе",
    desc: "Практические инструменты коучинга для психологов, HR и тренеров.",
    audience: "Психологи · Коучи · HR",
    format: "Онлайн",
    hours: null,
    certificate: "Удостоверение ДПО",
    href: "/programs/dpo/coaching-tools",
    price: null,
  },
  {
    badge: "ДПО",
    badgeColor: "bg-purple-100 text-purple-700",
    title: "Эмоциональный интеллект и развитие личности",
    desc: "Практикум ЭИ для специалистов помогающих профессий и педагогов.",
    audience: "Педагоги · Психологи",
    format: "Онлайн",
    hours: null,
    certificate: "Удостоверение ДПО",
    href: "/programs/dpo/emotional-intelligence-practicum",
    price: null,
  },
  {
    badge: "Онлайн-курс",
    badgeColor: "bg-blue-100 text-blue-700",
    title: "Эмоциональный интеллект как ключевой ресурс руководителя",
    desc: "Управляйте командой через понимание эмоций — своих и сотрудников.",
    audience: "Руководители · Менеджеры",
    format: "Онлайн",
    hours: null,
    certificate: "Сертификат",
    href: "/programs/online/eq-rukovoditel",
    price: "9 900 ₽",
  },
  {
    badge: "ИИ для специалистов",
    badgeColor: "bg-green-100 text-green-700",
    title: "Цифровой ИИ помощник психолога",
    desc: "Освободите 10 часов в неделю с помощью ИИ-инструментов. Тариф Профессионал включает удостоверение ДПО.",
    audience: "Психологи · Коучи · Педагоги",
    format: "Онлайн · 5 недель",
    hours: 72,
    certificate: "Удостоверение ДПО",
    href: "/programs/ai-personal",
    price: "от 25 000 ₽",
  },
];

export default function HomeFeatured() {
  return (
    <section className="py-24 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 mb-4">
              <span className="text-sm font-medium text-[#64748b]">Популярные программы</span>
            </div>
            <h2
              className="text-3xl sm:text-4xl font-bold text-[#0f172a]"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              С чего начать
            </h2>
          </div>
          <Link
            href="/programs"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#2563eb] hover:text-[#1d4ed8] transition-colors flex-shrink-0"
          >
            Все программы
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map(({ badge, badgeColor, title, desc, audience, format, hours, certificate, href, price }) => (
            <Link
              key={href}
              href={href}
              className="group flex flex-col bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-md hover:border-slate-300 transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${badgeColor}`}>
                  {badge}
                </span>
                {price && (
                  <span className="text-xs font-bold text-[#0f172a]">{price}</span>
                )}
              </div>

              <h3
                className="text-base font-semibold text-[#0f172a] mb-2 flex-1 leading-snug group-hover:text-[#2563eb] transition-colors"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                {title}
              </h3>
              <p className="text-xs text-[#64748b] mb-4 leading-relaxed">{desc}</p>

              <div className="mt-auto space-y-2">
                <div className="flex items-center gap-1.5 text-xs text-[#64748b]">
                  <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {audience}
                </div>
                <div className="flex items-center gap-1.5 text-xs text-[#64748b]">
                  <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {format}{hours ? ` · ${hours} ч` : ""}
                </div>
                <div className="flex items-center gap-1.5 text-xs font-medium text-[#166534]">
                  <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                  {certificate}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
