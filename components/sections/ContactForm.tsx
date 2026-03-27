'use client'

import { useState } from "react";

type FormState = {
  name: string;
  phone: string;
  company: string;
  comment: string;
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    phone: "",
    company: "",
    comment: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate async submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0f172a]"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side */}
          <div>
            <h2
              className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Оставьте заявку — обсудим вашу ситуацию
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              Расскажите о вашей команде, и мы предложим оптимальную программу
              под задачи каждого отдела.
            </p>
            <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl px-5 py-4 flex items-start gap-3">
              <svg
                className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="text-amber-300 text-sm font-medium">
                Берём не более 3 компаний в месяц для сохранения качества
                обучения
              </p>
            </div>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3 text-slate-400 text-sm">
                <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
                  <svg
                    className="w-3 h-3 text-green-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                Бесплатная консультация без обязательств
              </div>
              <div className="flex items-center gap-3 text-slate-400 text-sm">
                <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
                  <svg
                    className="w-3 h-3 text-green-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                Программа под ваши задачи — не шаблон
              </div>
              <div className="flex items-center gap-3 text-slate-400 text-sm">
                <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
                  <svg
                    className="w-3 h-3 text-green-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                Расчёт окупаемости в PDF
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-8 h-8 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3
                  className="text-xl font-bold text-[#0f172a] mb-2"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  Заявка отправлена!
                </h3>
                <p className="text-[#64748b]">
                  Свяжемся с вами в течение рабочего дня для обсуждения
                  программы.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-[#0f172a] mb-1.5"
                  >
                    Имя <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Алексей"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-[#0f172a] text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:border-transparent transition"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-[#0f172a] mb-1.5"
                  >
                    Телефон <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+7 (999) 000-00-00"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-[#0f172a] text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:border-transparent transition"
                  />
                </div>
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-semibold text-[#0f172a] mb-1.5"
                  >
                    Компания <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    required
                    value={form.company}
                    onChange={handleChange}
                    placeholder="ООО «Ваша Компания»"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-[#0f172a] text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:border-transparent transition"
                  />
                </div>
                <div>
                  <label
                    htmlFor="comment"
                    className="block text-sm font-semibold text-[#0f172a] mb-1.5"
                  >
                    Комментарий
                    <span className="text-[#64748b] font-normal ml-1">
                      (необязательно)
                    </span>
                  </label>
                  <textarea
                    id="comment"
                    name="comment"
                    rows={3}
                    value={form.comment}
                    onChange={handleChange}
                    placeholder="Расскажите о вашей команде или задачах..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-[#0f172a] text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:border-transparent transition resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 rounded-xl bg-[#2563eb] text-white font-semibold text-base hover:bg-[#1d4ed8] transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <svg
                        className="animate-spin w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v8z"
                        />
                      </svg>
                      Отправляем...
                    </>
                  ) : (
                    "Отправить заявку"
                  )}
                </button>
                <p className="text-xs text-[#64748b] text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
