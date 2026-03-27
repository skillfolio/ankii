'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';

export default function FluidHero() {
  const scriptLoaded = useRef(false);

  useEffect(() => {
    if (scriptLoaded.current) return;
    scriptLoaded.current = true;

    const script = document.createElement('script');
    script.src = '/fluid.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // cleanup: script stays, simulation stops when canvas unmounts
    };
  }, []);

  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden bg-[#050510]">
      {/* WebGL canvas — full section background */}
      <canvas
        id="fluid-canvas"
        className="absolute inset-0 w-full h-full"
        style={{ display: 'block' }}
      />

      {/* Dark gradient overlay at bottom for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050510]/80 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-8">
          <span className="w-2 h-2 rounded-full bg-blue-400 inline-block animate-pulse" />
          <span className="text-sm font-medium text-white/90">
            Резидент Сколково и Сириус
          </span>
        </div>

        <div className="max-w-3xl">
          <h1
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
            style={{ fontFamily: 'var(--font-montserrat)', letterSpacing: '-0.02em' }}
          >
            Ваша команда начнёт экономить{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              1–3 часа в день
            </span>{' '}
            уже через неделю
          </h1>

          <p className="text-lg sm:text-xl text-white/70 leading-relaxed mb-10 max-w-2xl">
            Обучаем сотрудников работать с ИИ эффективно и без рисков.
            Готовые промты, ИИ-агенты под каждый отдел,
            удостоверения государственного образца.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-[#2563eb] text-white font-semibold hover:bg-[#1d4ed8] transition-colors shadow-lg shadow-blue-500/25 text-base"
            >
              Получить бесплатную консультацию
            </a>
            <a
              href="#programs"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl border border-white/30 text-white font-semibold hover:bg-white/10 backdrop-blur-sm transition-colors text-base"
            >
              Смотреть программы
            </a>
          </div>

          {/* Trust stats */}
          <div className="flex flex-wrap gap-8">
            <div>
              <div
                className="text-3xl font-bold text-white mb-1"
                style={{ fontFamily: 'var(--font-montserrat)' }}
              >
                20+
              </div>
              <div className="text-sm text-white/50">команд обучено</div>
            </div>
            <div className="w-px bg-white/10" />
            <div>
              <div
                className="text-3xl font-bold text-white mb-1"
                style={{ fontFamily: 'var(--font-montserrat)' }}
              >
                1–3 ч
              </div>
              <div className="text-sm text-white/50">экономии в день</div>
            </div>
            <div className="w-px bg-white/10" />
            <div>
              <div
                className="text-3xl font-bold text-white mb-1"
                style={{ fontFamily: 'var(--font-montserrat)' }}
              >
                3
              </div>
              <div className="text-sm text-white/50">уровня глубины</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 text-xs animate-bounce">
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
