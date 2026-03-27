import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
});

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Обучение ИИ для компаний | Skillfolio",
  description:
    "Обучаем сотрудников работать с ИИ эффективно и без рисков. Готовые промты, ИИ-агенты под каждый отдел, удостоверения государственного образца. Резидент Сколково и Сириус.",
  openGraph: {
    title: "Обучение ИИ для компаний | Skillfolio",
    description:
      "Обучаем сотрудников работать с ИИ эффективно и без рисков. Готовые промты, ИИ-агенты под каждый отдел, удостоверения государственного образца.",
    locale: "ru_RU",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${inter.variable} ${montserrat.variable}`}
    >
      <body className="min-h-full flex flex-col font-[var(--font-inter)] antialiased">
        {children}
      </body>
    </html>
  );
}
