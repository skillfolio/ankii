'use client'

import { useState } from "react";

const departments = [
  {
    id: "sales",
    label: "Продажи",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    tasks: [
      "Автоматизация CRM-переписки и follow-up",
      "Генерация коммерческих предложений под клиента",
      "Скрипты отработки возражений с помощью ИИ",
      "Подготовка к переговорам и брифингам",
    ],
    result: "Менеджер ведёт на 5 клиентов больше без потери качества",
    resultColor: "text-green-600",
    resultBg: "bg-green-50",
  },
  {
    id: "marketing",
    label: "Маркетинг",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
        />
      </svg>
    ),
    tasks: [
      "Создание контент-планов за минуты вместо часов",
      "Генерация постов, рекламных текстов, сценариев",
      "Анализ конкурентов и трендов с помощью ИИ",
      "SMM-автоматизация и планирование публикаций",
    ],
    result: "70% времени на рутину освобождается для стратегии",
    resultColor: "text-blue-600",
    resultBg: "bg-blue-50",
  },
  {
    id: "hr",
    label: "HR",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
    tasks: [
      "Написание вакансий и описаний должностей",
      "Автоматизация онбординга новых сотрудников",
      "Создание обучающих материалов и тестов",
      "Анализ резюме и первичный скрининг кандидатов",
    ],
    result: "Экономия до 40% рабочего времени HR-специалиста",
    resultColor: "text-purple-600",
    resultBg: "bg-purple-50",
  },
  {
    id: "analytics",
    label: "Аналитика",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
    tasks: [
      "Автоматическое построение дашбордов и отчётов",
      "Анализ данных в Excel и Google Sheets с ИИ",
      "Финансовое планирование и прогнозирование",
      "Интерпретация данных и формулировка инсайтов",
    ],
    result: "Отчёты, которые раньше занимали день, готовятся за час",
    resultColor: "text-orange-600",
    resultBg: "bg-orange-50",
  },
  {
    id: "legal",
    label: "Юристы / Операции",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
    tasks: [
      "Анализ договоров и выявление рисков",
      "Составление регламентов и инструкций",
      "Автоматизация документооборота",
      "Подготовка типовых правовых документов",
    ],
    result: "Обработка документов в 3–5 раз быстрее",
    resultColor: "text-slate-600",
    resultBg: "bg-slate-100",
  },
];

export default function Departments() {
  const [active, setActive] = useState("sales");
  const current = departments.find((d) => d.id === active) ?? departments[0];

  return (
    <section
      id="departments"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-[#f8fafc]"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#0f172a] mb-4"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            ИИ для каждого отдела
          </h2>
          <p className="text-lg text-[#64748b] max-w-2xl mx-auto">
            Программы адаптированы под реальные задачи вашей команды
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {departments.map((dept) => (
            <button
              key={dept.id}
              onClick={() => setActive(dept.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                active === dept.id
                  ? "bg-[#2563eb] text-white shadow-md"
                  : "bg-white text-[#64748b] border border-slate-200 hover:border-[#2563eb] hover:text-[#2563eb]"
              }`}
            >
              <span
                className={active === dept.id ? "text-white" : "text-[#64748b]"}
              >
                {dept.icon}
              </span>
              {dept.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 md:p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3
                className="text-2xl font-bold text-[#0f172a] mb-2"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                {current.label}
              </h3>
              <p className="text-[#64748b] mb-6">
                Что умеют сотрудники после обучения:
              </p>
              <ul className="space-y-3">
                {current.tasks.map((task) => (
                  <li key={task} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#2563eb] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-[#0f172a] text-sm leading-relaxed">
                      {task}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col justify-between">
              <div
                className={`${current.resultBg} rounded-2xl p-8 flex flex-col items-center justify-center text-center`}
              >
                <div className="text-4xl mb-4">
                  <svg
                    className={`w-14 h-14 ${current.resultColor} mx-auto`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                </div>
                <p
                  className={`text-lg font-bold ${current.resultColor}`}
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  {current.result}
                </p>
              </div>
              <div className="mt-6">
                <a
                  href="#contact"
                  className="block w-full text-center px-6 py-3 rounded-xl bg-[#2563eb] text-white font-semibold text-sm hover:bg-[#1d4ed8] transition-colors"
                >
                  Обсудить программу для {current.label.toLowerCase()}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
