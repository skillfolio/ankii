'use client'

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/programs", label: "Программы" },
  { href: "/corporate", label: "Для компаний" },
  { href: "/experts", label: "Эксперты" },
  { href: "/about", label: "О нас" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const transparent = isHomePage && !scrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        transparent
          ? "bg-transparent"
          : "bg-[#0f172a]/95 backdrop-blur-md shadow-lg"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <Image
              src="/logo.png"
              alt="АНКИИ"
              width={36}
              height={36}
              className="rounded-lg"
            />
            <div className="flex flex-col leading-none">
              <span
                className="text-lg font-bold text-white tracking-wide"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                АНКИИ
              </span>
              <span className="text-[10px] text-[#b2beb2] hidden sm:block">
                by Skillfolio
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`text-sm font-medium transition-colors ${
                  pathname.startsWith(href)
                    ? "text-[#80ff46]"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/programs"
              className="inline-flex items-center px-4 py-2 rounded-lg bg-[#80ff46] text-[#0f172a] text-sm font-semibold hover:bg-[#6be038] transition-colors"
            >
              Выбрать программу
            </Link>
          </div>

          {/* Mobile burger */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Меню"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0f172a] border-t border-white/10">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="block text-white/80 hover:text-white text-sm font-medium py-2"
              >
                {label}
              </Link>
            ))}
            <Link
              href="/programs"
              className="block w-full text-center px-4 py-2.5 rounded-lg bg-[#80ff46] text-[#0f172a] text-sm font-semibold mt-2"
            >
              Выбрать программу
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
