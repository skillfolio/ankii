const stats = [
  { value: "17", label: "Программ ДПО", sub: "с удостоверением гос. образца" },
  { value: "25+", label: "Онлайн-курсов", sub: "Soft Skills для специалистов" },
  { value: "20+", label: "Компаний обучено", sub: "корпоративные программы" },
  { value: "10 ч", label: "Экономия в неделю", sub: "после внедрения ИИ" },
];

export default function HomeStats() {
  return (
    <section className="bg-[#0f172a] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map(({ value, label, sub }) => (
            <div key={label} className="text-center">
              <div
                className="text-3xl sm:text-4xl font-bold text-[#80ff46] mb-1"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                {value}
              </div>
              <div className="text-sm font-semibold text-white">{label}</div>
              <div className="text-xs text-white/50 mt-0.5">{sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
