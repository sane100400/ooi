"use client";

import { useEffect, useRef } from "react";

const steps = [
  {
    number: "01",
    title: "상담 & 기획",
    description:
      "프로젝트 목표, 타겟 고객, 필요 기능을 분석하고 최적의 전략을 수립합니다.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    ),
    gradient: "from-emerald-500 to-emerald-600",
    shadow: "shadow-emerald-500/20",
    stepColor: "text-emerald-600 dark:text-emerald-400",
  },
  {
    number: "02",
    title: "디자인",
    description:
      "브랜드에 맞는 UI/UX 디자인을 시안으로 제작하고 고객 피드백을 반영합니다.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
    gradient: "from-sky-500 to-sky-600",
    shadow: "shadow-sky-500/20",
    stepColor: "text-sky-600 dark:text-sky-400",
  },
  {
    number: "03",
    title: "개발",
    description:
      "확정된 디자인을 기반으로 최신 기술 스택으로 개발하며 중간 리뷰를 진행합니다.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
    gradient: "from-teal-500 to-teal-600",
    shadow: "shadow-teal-500/20",
    stepColor: "text-teal-600 dark:text-teal-400",
  },
  {
    number: "04",
    title: "테스트 & 배포",
    description:
      "크로스 브라우저 테스트, 성능 최적화 후 안정적으로 배포합니다.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
      </svg>
    ),
    gradient: "from-amber-500 to-amber-600",
    shadow: "shadow-amber-500/20",
    stepColor: "text-amber-600 dark:text-amber-400",
  },
  {
    number: "05",
    title: "유지보수",
    description:
      "지속적인 모니터링과 업데이트로 사이트의 안정적인 운영을 보장합니다.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    gradient: "from-emerald-500 to-teal-600",
    shadow: "shadow-emerald-500/20",
    stepColor: "text-emerald-600 dark:text-emerald-400",
  },
];

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
          }
        });
      },
      { threshold: 0.1 }
    );
    const items = sectionRef.current?.querySelectorAll(".process-step");
    items?.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="process" ref={sectionRef} className="relative py-16 px-6 sm:py-28">
      <div className="mx-auto max-w-5xl">
        {/* Section header */}
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full border border-emerald-200/60 bg-emerald-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:border-emerald-700/50 dark:bg-emerald-900/30 dark:text-emerald-400">
            Process
          </span>
          <h2 className="mb-4 text-3xl font-bold text-slate-900 dark:text-white sm:text-5xl">
            작업 <span className="gradient-text">프로세스</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-500 dark:text-emerald-200/60">
            체계적인 5단계 프로세스로 완성도 높은 결과물을 보장합니다
          </p>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-amber-200/60 bg-amber-50/80 px-5 py-2.5 dark:border-amber-600/30 dark:bg-amber-900/20">
            <svg className="h-4 w-4 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm font-bold text-amber-700 dark:text-amber-400">
              최단 당일 · 최장 7일 이내
            </span>
          </div>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 hidden h-full w-px bg-gradient-to-b from-emerald-200 via-sky-300 to-amber-200 dark:from-emerald-800 dark:via-sky-800 dark:to-amber-800 md:block" />

          <div className="space-y-8">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className="process-step flex items-start gap-4 opacity-0 sm:gap-6 md:gap-8"
                style={{ animationDelay: `${i * 150}ms` }}
              >
                {/* Number circle */}
                <div className={`relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br sm:h-16 sm:w-16 sm:rounded-2xl ${step.gradient} text-white shadow-md ${step.shadow}`}>
                  {step.icon}
                </div>

                {/* Content */}
                <div className="flex-1 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-emerald-800/20 dark:bg-emerald-900/10">
                  <div className="mb-1 flex items-center gap-3">
                    <span className={`text-sm font-bold ${step.stepColor}`}>
                      STEP {step.number}
                    </span>
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-500 dark:text-emerald-200/60">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
