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
        <div className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-emerald-400/20 to-teal-500/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-emerald-500/15 to-emerald-300/10 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[800px] w-[800px] rounded-full bg-emerald-500/5 blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(16,185,129,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        {/* Badges */}
        <div className="mb-8 flex flex-wrap items-center justify-center gap-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 dark:border-emerald-700 dark:bg-emerald-900/50">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-sm font-medium text-emerald-700 dark:text-emerald-300">
              웹사이트 외주 전문 파트너
            </span>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-300 bg-blue-50 px-4 py-2 dark:border-blue-600 dark:bg-blue-900/30">
            <svg className="h-4 w-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm font-bold text-blue-700 dark:text-blue-300">
              최단 당일 완성 · 최장 7일
            </span>
          </div>
        </div>

        {/* Heading */}
        <h1 className="mb-6 text-5xl font-extrabold leading-tight tracking-tight text-slate-900 dark:text-white sm:text-6xl lg:text-7xl">
          당신의 비즈니스를
          <br />
          <span className="gradient-text">디지털로 완성</span>합니다
        </h1>

        {/* Subheading */}
        <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-emerald-200/70 sm:text-xl">
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
            className="group relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-emerald-500/30 transition-all hover:shadow-emerald-500/50 hover:scale-105"
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
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-8 py-4 text-base font-semibold text-slate-700 shadow-sm transition-all hover:border-emerald-300 hover:shadow-md dark:border-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-100 dark:hover:border-emerald-500"
          >
            포트폴리오 보기
          </a>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-3 gap-8">
          {[
            { value: "당일", label: "최단 납기", highlight: true },
            { value: "10+", label: "완료 프로젝트", highlight: false },
            { value: "98%", label: "고객 만족도", highlight: false },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className={`text-3xl font-bold sm:text-4xl ${stat.highlight ? "text-blue-500" : "text-emerald-600 dark:text-emerald-400"}`}>
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-slate-500 dark:text-emerald-300/60">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-emerald-400/50 p-1">
          <div className="h-2 w-1 rounded-full bg-emerald-500 animate-pulse" />
        </div>
      </div>
    </section>
  );
}
