"use client";

import { useEffect, useRef } from "react";

const strengths = [
  {
    title: "보안 전공 출신",
    description: "고려대학교 정보보호 및 컴퓨터 관련 전공생 5명이 직접 개발합니다. 보안은 기본입니다.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    iconBg: "bg-emerald-600",
    shadow: "shadow-emerald-600/20",
  },
  {
    title: "해커톤 수상 경력",
    description: "다수의 해커톤 수상 경험으로 검증된 실력. 빠르게, 정확하게 만들어 드립니다.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-4.5A3.375 3.375 0 0012.75 11h-1.5A3.375 3.375 0 007.5 14.25v4.5m9 0H7.5m4.5-12V3.375c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875V6.75" />
      </svg>
    ),
    iconBg: "bg-amber-500",
    shadow: "shadow-amber-500/20",
  },
  {
    title: "자체 코드 개발",
    description: "템플릿 복붙이 아닙니다. 처음부터 직접 코드를 짜서 원하는 기능을 정확히 구현합니다.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
    iconBg: "bg-sky-600",
    shadow: "shadow-sky-600/20",
  },
  {
    title: "끝까지 유지보수",
    description: "만들고 끝이 아닙니다. 수정, 업데이트, 서버 관리까지 책임지고 케어합니다.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1 3.04.97-5.69L3.2 8.6l5.7-.83L11.42 3l2.52 4.77 5.7.83-4.09 3.92.97 5.69-5.1-3.04z" />
      </svg>
    ),
    iconBg: "bg-teal-600",
    shadow: "shadow-teal-600/20",
  },
];

const memberColors = [
  "bg-emerald-600",
  "bg-teal-600",
  "bg-sky-600",
  "bg-amber-500",
  "bg-slate-700",
];

const members = [
  { role: "풀스택 개발" },
  { role: "풀스택 개발" },
  { role: "프론트엔드 개발" },
  { role: "백엔드 개발" },
  { role: "AI / 챗봇 개발" },
];

export default function About() {
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
    const items = sectionRef.current?.querySelectorAll(".about-item");
    items?.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative bg-slate-50/70 py-28 px-6 dark:bg-emerald-950/20"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <div className="about-item mb-16 text-center opacity-0">
          <span className="mb-4 inline-block rounded-full border border-emerald-200/60 bg-emerald-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:border-emerald-700/50 dark:bg-emerald-900/30 dark:text-emerald-400">
            About Us
          </span>
          <h2 className="mb-4 text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl">
            <span className="gradient-text">OOi</span>는 이런 팀입니다
          </h2>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-slate-500 dark:text-emerald-200/60">
            고려대학교 컴퓨터 관련 전공, 보안 전공 학생 5명이 모였습니다.
            <br className="hidden sm:block" />
            해커톤 수상 경력으로 검증된 실력, 자체 코드 기반 개발, 그리고 끝까지 책임지는 유지보수.
          </p>
        </div>

        {/* Team members */}
        <div className="about-item mb-16 opacity-0">
          <div className="flex flex-wrap items-center justify-center gap-4">
            {members.map((member, i) => (
              <div
                key={i}
                className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-white px-5 py-4 shadow-sm dark:border-emerald-800/20 dark:bg-emerald-900/10"
              >
                <div className={`flex h-10 w-10 items-center justify-center rounded-full ${memberColors[i]} text-white text-sm font-bold shadow-sm`}>
                  {i + 1}
                </div>
                <div>
                  <div className="text-xs text-slate-400 dark:text-emerald-300/40">고려대학교</div>
                  <div className="text-sm font-semibold text-slate-900 dark:text-white">{member.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Strengths grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {strengths.map((item, i) => (
            <div
              key={item.title}
              className="about-item rounded-2xl border border-slate-100 bg-white p-6 opacity-0 shadow-sm transition-all hover:shadow-md dark:border-emerald-800/20 dark:bg-emerald-900/10"
              style={{ animationDelay: `${i * 100 + 200}ms` }}
            >
              <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${item.iconBg} text-white shadow-md ${item.shadow}`}>
                {item.icon}
              </div>
              <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-slate-500 dark:text-emerald-200/60">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="about-item mt-12 text-center opacity-0">
          <a
            href={process.env.NEXT_PUBLIC_SOOMGO_URL || "#contact"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-full bg-emerald-600 px-8 py-3.5 text-sm font-semibold text-white shadow-md shadow-emerald-600/20 transition-all hover:bg-emerald-700 hover:shadow-emerald-600/30 hover:scale-105"
          >
            함께 시작하기
          </a>
        </div>
      </div>
    </section>
  );
}
