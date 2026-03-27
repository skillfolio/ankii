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
  title: {
    default: "АНКИИ — Академия надпрофессиональных компетенций и ИИ",
    template: "%s | АНКИИ",
  },
  description:
    "Лицензированное дополнительное профессиональное образование. 17 программ ДПО, онлайн-курсы Soft Skills и корпоративное обучение ИИ. Резидент Сколково и Сириус.",
  openGraph: {
    title: "АНКИИ — Академия надпрофессиональных компетенций и ИИ",
    description:
      "Лицензированное ДПО, онлайн-курсы Soft Skills и корпоративное обучение ИИ для психологов, педагогов и команд.",
    locale: "ru_RU",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${inter.variable} ${montserrat.variable}`}>
      <body className="min-h-full flex flex-col antialiased">
        {children}
      </body>
    </html>
  );
}
