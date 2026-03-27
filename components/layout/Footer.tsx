import Link from "next/link";
import Image from "next/image";

const programs = [
  { href: "/programs?type=dpo", label: "Программы ДПО" },
  { href: "/programs?type=online", label: "Онлайн-курсы" },
  { href: "/programs?type=ai-personal", label: "ИИ для специалистов" },
  { href: "/corporate", label: "Корпоративное обучение" },
  { href: "/corporate#ai", label: "Обучение ИИ для команд" },
];

const company = [
  { href: "/about", label: "О нас" },
  { href: "/experts", label: "Эксперты" },
  { href: "/svedeniya", label: "Сведения об организации" },
  { href: "/about#contacts", label: "Контакты" },
];

const legal = [
  { href: "/svedeniya", label: "Сведения об образовательной организации" },
  { href: "/svedeniya#documents", label: "Документы" },
  { href: "/svedeniya#license", label: "Лицензия" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image
                src="/logo.png"
                alt="АНКИИ"
                width={40}
                height={40}
                className="rounded-lg"
              />
              <div>
                <div
                  className="text-lg font-bold tracking-wide"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  АНКИИ
                </div>
                <div className="text-xs text-[#b2beb2]">by Skillfolio</div>
              </div>
            </Link>
            <p className="text-sm text-white/60 leading-relaxed mb-6">
              Академия надпрофессиональных компетенций и искусственного интеллекта.
              Лицензированное ДПО-обучение.
            </p>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#80ff46]" />
              <span className="text-xs text-white/50">Резидент Сколково</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#80ff46]" />
              <span className="text-xs text-white/50">Резидент Сириус</span>
            </div>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
              Программы
            </h3>
            <ul className="space-y-3">
              {programs.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
              Компания
            </h3>
            <ul className="space-y-3">
              {company.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
              Контакты
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:info@ankii.ru"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  info@ankii.ru
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/softskills21"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  Telegram
                </a>
              </li>
              <li>
                <a
                  href="https://vk.com/skillfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  ВКонтакте
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} АНКИИ by Skillfolio. Все права защищены.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {legal.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-xs text-white/40 hover:text-white/70 transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
