'use client'

import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-baseline gap-2">
            <span
              className={`text-2xl font-bold transition-colors ${scrolled ? "text-[#2563eb]" : "text-white"}`}
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              ANKII
            </span>
            <span className={`text-xs font-medium hidden sm:inline transition-colors ${scrolled ? "text-[#64748b]" : "text-white/50"}`}>
              by Skillfolio
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {[
              { href: "#programs", label: "Программы" },
              { href: "#departments", label: "Отделы" },
              { href: "#pricing", label: "Цены" },
              { href: "#about", label: "О нас" },
            ].map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className={`text-sm font-medium transition-colors hover:text-[#2563eb] ${
                  scrolled ? "text-[#0f172a]" : "text-white/80"
                }`}
              >
                {label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <a
            href="#contact"
            className="inline-flex items-center px-5 py-2.5 rounded-xl bg-[#2563eb] text-white text-sm font-semibold hover:bg-[#1d4ed8] transition-colors shadow-sm"
          >
            Оставить заявку
          </a>
        </div>
      </div>
    </header>
  );
}
