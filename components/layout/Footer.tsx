export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and description */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-baseline gap-2 mb-3">
              <span
                className="text-2xl font-bold text-[#2563eb]"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                ANKII
              </span>
              <span className="text-xs text-[#64748b] font-medium">
                by Skillfolio
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Обучаем сотрудников работать с ИИ эффективно и без рисков.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold text-slate-300 mb-4 uppercase tracking-wide">
              Документы
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-sm text-slate-400 hover:text-white transition-colors"
                >
                  Политика конфиденциальности
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-slate-400 hover:text-white transition-colors"
                >
                  Оферта
                </a>
              </li>
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="text-sm font-semibold text-slate-300 mb-4 uppercase tracking-wide">
              Контакты
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:info@ankii.ru"
                  className="text-sm text-slate-400 hover:text-white transition-colors"
                >
                  info@ankii.ru
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            &copy; 2025 Skillfolio. Все права защищены.
          </p>
          <p className="text-xs text-slate-600">
            Резидент ИНТЦ Сколково и Сириус
          </p>
        </div>
      </div>
    </footer>
  );
}
