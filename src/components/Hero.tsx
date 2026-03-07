"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (el) el.classList.add("animate-fade-in-up");
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20"
    >
      {/* Background decorations */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-emerald-400/15 to-teal-500/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-amber-400/8 to-emerald-400/5 blur-3xl" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[700px] w-[700px] rounded-full bg-sky-400/[0.03] blur-3xl" />
      </div>

      {/* Subtle dot pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(16,185,129,0.8) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        {/* Badges */}
        <div className="mb-8 flex flex-wrap items-center justify-center gap-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200/60 bg-emerald-50/80 px-4 py-2 backdrop-blur-sm dark:border-emerald-700/50 dark:bg-emerald-900/30">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-sm font-medium text-emerald-700 dark:text-emerald-300">
              웹사이트 외주 전문 파트너
            </span>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-200/60 bg-amber-50/80 px-4 py-2 backdrop-blur-sm dark:border-amber-600/30 dark:bg-amber-900/20">
            <svg className="h-3.5 w-3.5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm font-bold text-amber-700 dark:text-amber-400">
              최단 당일 완성 · 최장 7일
            </span>
          </div>
        </div>

        {/* Heading */}
        <h1 className="mb-6 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-7xl">
          당신의 비즈니스를
          <br />
          <span className="gradient-text">디지털로 완성</span>합니다
        </h1>

        {/* Subheading */}
        <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-slate-500 dark:text-emerald-200/60 sm:mb-10 sm:text-xl">
          기획부터 디자인, 개발, 운영까지.
          <br className="hidden sm:block" />
          OOi는 비즈니스에 최적화된 <strong className="text-emerald-600 dark:text-emerald-400">맞춤형 웹 솔루션</strong>을
          제공합니다.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href={process.env.NEXT_PUBLIC_SOOMGO_URL || "#contact"}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2 rounded-full bg-emerald-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-emerald-600/25 transition-all hover:bg-emerald-700 hover:shadow-emerald-600/35 hover:scale-105"
          >
            무료 상담 신청
            <svg
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#portfolio"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-8 py-4 text-base font-semibold text-slate-700 shadow-sm backdrop-blur-sm transition-all hover:border-emerald-300 hover:bg-emerald-50/50 hover:shadow-md dark:border-emerald-800/50 dark:bg-emerald-900/20 dark:text-emerald-100 dark:hover:border-emerald-600"
          >
            포트폴리오 보기
          </a>
        </div>

        {/* Stats */}
        <div className="mt-14 grid grid-cols-3 gap-4 sm:mt-20 sm:gap-8">
          {[
            { value: "당일", label: "최단 납기", color: "text-amber-500" },
            { value: "10+", label: "완료 프로젝트", color: "text-emerald-600 dark:text-emerald-400" },
            { value: "98%", label: "고객 만족도", color: "text-sky-500" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className={`text-2xl font-bold sm:text-4xl ${stat.color}`}>
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-slate-400 dark:text-emerald-300/50">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-emerald-300/40 p-1">
          <div className="h-2 w-1 rounded-full bg-emerald-500/70 animate-pulse" />
        </div>
      </div>
    </section>
  );
}
