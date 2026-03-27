import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "О нас",
  description:
    "АНКИИ — Академия надпрофессиональных компетенций и искусственного интеллекта. Резидент Сколково и Сириус. Научный руководитель — Виктория Шиманская.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-16 md:pt-18">
        {/* Hero */}
        <section className="bg-[#0f172a] py-24 px-4 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#80ff46]/5 rounded-full blur-3xl pointer-events-none" />
          <div className="max-w-7xl mx-auto relative">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#80ff46]/30 bg-[#80ff46]/10 mb-6">
              <span className="text-sm font-medium text-[#80ff46]">О нас</span>
            </div>
            <h1
              className="text-3xl sm:text-5xl font-bold text-white mb-6 max-w-3xl leading-tight"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Академия нового поколения для специалистов и команд
            </h1>
            <p className="text-white/70 text-lg max-w-2xl leading-relaxed">
              АНКИИ — Академия надпрофессиональных компетенций и искусственного интеллекта.
              Мы создаём профессионалов нового уровня: с развитыми Soft Skills и владеющих
              инструментами ИИ.
            </p>
          </div>
        </section>

        {/* Mission */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2
                  className="text-3xl font-bold text-[#0f172a] mb-6"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  Миссия
                </h2>
                <p className="text-[#64748b] leading-relaxed text-lg mb-6">
                  Мы развиваем надпрофессиональные компетенции — те, что делают любого
                  специалиста эффективным независимо от отрасли: эмоциональный интеллект,
                  коммуникацию, лидерство, критическое мышление и владение ИИ-инструментами.
                </p>
                <p className="text-[#64748b] leading-relaxed">
                  Наши программы основаны на доказательных подходах, подкреплены лицензией ДПО
                  и дают практический результат с первых занятий.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: "🏛️", label: "Лицензия ДПО", value: "Гос. образца" },
                  { icon: "🌍", label: "Резидент", value: "Сколково и Сириус" },
                  { icon: "🎓", label: "Программ", value: "17 ДПО + 25 онлайн" },
                  { icon: "🏢", label: "Компаний обучено", value: "20+" },
                ].map(({ icon, label, value }) => (
                  <div key={label} className="bg-[#f8fafc] rounded-2xl p-5 border border-slate-100">
                    <div className="text-3xl mb-3">{icon}</div>
                    <div className="text-xs text-[#64748b] mb-1">{label}</div>
                    <div
                      className="text-sm font-bold text-[#0f172a]"
                      style={{ fontFamily: "var(--font-montserrat)" }}
                    >
                      {value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Scientific Director */}
        <section className="py-20 bg-[#f8fafc]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="text-2xl font-bold text-[#0f172a] mb-10 text-center"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Основатели и руководство
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  name: "Виктория Шиманская",
                  role: "Научный руководитель",
                  bio: "Доктор психологических наук, ведущий российский эксперт в области эмоционального интеллекта. Автор книг и образовательных программ по ЭИ. Создатель методологии Skillfolio.",
                  emoji: "🎓",
                },
                {
                  name: "Алексей Шиманский",
                  role: "Co-founder, CEO",
                  bio: "MBA, 20 лет в ИТ-индустрии. Эксперт по внедрению ИИ в образование и бизнес. Резидент Сколково и Сириус. Строит мост между технологиями и человеческим развитием.",
                  emoji: "🚀",
                },
              ].map(({ name, role, bio, emoji }) => (
                <div key={name} className="flex gap-6 bg-white rounded-2xl p-8 border border-slate-200">
                  <div className="w-16 h-16 rounded-2xl bg-[#0f172a] flex items-center justify-center text-3xl flex-shrink-0">
                    {emoji}
                  </div>
                  <div>
                    <div
                      className="text-lg font-bold text-[#0f172a] mb-0.5"
                      style={{ fontFamily: "var(--font-montserrat)" }}
                    >
                      {name}
                    </div>
                    <div className="text-sm text-[#80ff46] font-semibold mb-3">{role}</div>
                    <p className="text-sm text-[#64748b] leading-relaxed">{bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contacts */}
        <section id="contacts" className="py-20 bg-[#0f172a]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2
              className="text-2xl sm:text-3xl font-bold text-white mb-4"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Свяжитесь с нами
            </h2>
            <p className="text-white/60 mb-10">
              Напишите — ответим в течение рабочего дня
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { label: "Email", value: "info@ankii.ru", href: "mailto:info@ankii.ru" },
                { label: "Telegram", value: "t.me/softskills21", href: "https://t.me/softskills21" },
                { label: "ВКонтакте", value: "vk.com/skillfolio", href: "https://vk.com/skillfolio" },
              ].map(({ label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="block bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors"
                >
                  <div className="text-xs text-white/40 mb-1">{label}</div>
                  <div className="text-white font-semibold">{value}</div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
