"use client";

import { useEffect, useRef } from "react";

const services = [
  {
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582" />
      </svg>
    ),
    title: "홈페이지 제작",
    description:
      "회사 소개, 포트폴리오, 예약 페이지 등 비즈니스에 꼭 필요한 홈페이지를 깔끔하게 만들어 드립니다. 어려운 건 저희가 다 알아서 해드릴게요.",
    iconBg: "bg-emerald-50 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400",
    hoverIconBg: "group-hover:bg-emerald-600 group-hover:text-white group-hover:shadow-emerald-600/20",
    borderHover: "hover:border-emerald-200",
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
      </svg>
    ),
    title: "AI 챗봇 개발",
    description:
      "고객 문의 자동 응답, 상담 예약, FAQ 안내까지. 24시간 일하는 AI 챗봇을 홈페이지에 달아드립니다. 인건비 줄이고, 고객 만족은 높이세요.",
    iconBg: "bg-sky-50 text-sky-600 dark:bg-sky-900/20 dark:text-sky-400",
    hoverIconBg: "group-hover:bg-sky-600 group-hover:text-white group-hover:shadow-sky-600/20",
    borderHover: "hover:border-sky-200",
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
    title: "모바일 앱 개발",
    description:
      "안드로이드, iOS 모두 지원하는 앱을 한 번에 만들어 드립니다. 매장 앱, 예약 앱, 커뮤니티 앱 등 원하시는 기능을 쉽게 구현해 드려요.",
    iconBg: "bg-teal-50 text-teal-600 dark:bg-teal-900/20 dark:text-teal-400",
    hoverIconBg: "group-hover:bg-teal-600 group-hover:text-white group-hover:shadow-teal-600/20",
    borderHover: "hover:border-teal-200",
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016A3.001 3.001 0 0021 9.349m-18 0a2.999 2.999 0 002.25-1.016A2.993 2.993 0 007.5 9.35m13.5 0a2.999 2.999 0 00-2.25-1.016M7.5 9.35v0A2.986 2.986 0 005.25 8.33m13.5 1.02v0A2.986 2.986 0 0016.5 8.33m-9 0V6.169a3 3 0 013-2.919h3a3 3 0 013 2.919V8.33m-9 0h9" />
      </svg>
    ),
    title: "쇼핑몰 제작",
    description:
      "상품 등록, 결제, 주문 관리까지 한 번에. 스마트스토어 말고 나만의 브랜드 쇼핑몰을 갖고 싶으시다면 맡겨주세요.",
    iconBg: "bg-amber-50 text-amber-600 dark:bg-amber-900/20 dark:text-amber-400",
    hoverIconBg: "group-hover:bg-amber-500 group-hover:text-white group-hover:shadow-amber-500/20",
    borderHover: "hover:border-amber-200",
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "유지보수 & 관리",
    description:
      "만들고 끝이 아닙니다. 내용 수정, 오류 수정, 서버 관리까지 월 단위로 편하게 맡기세요. 사장님은 본업에만 집중하시면 됩니다.",
    iconBg: "bg-slate-100 text-slate-600 dark:bg-slate-800/30 dark:text-slate-400",
    hoverIconBg: "group-hover:bg-slate-700 group-hover:text-white group-hover:shadow-slate-700/20",
    borderHover: "hover:border-slate-300",
  },
];

export default function Services() {
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

    const cards = sectionRef.current?.querySelectorAll(".service-card");
    cards?.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="relative py-28 px-6">
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full border border-emerald-200/60 bg-emerald-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:border-emerald-700/50 dark:bg-emerald-900/30 dark:text-emerald-400">
            Services
          </span>
          <h2 className="mb-4 text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl">
            제공 <span className="gradient-text">서비스</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-500 dark:text-emerald-200/60">
            복잡한 건 몰라도 됩니다. 홈페이지부터 챗봇까지, 다 알아서 해드립니다
          </p>
        </div>

        {/* Service cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`service-card group rounded-2xl border border-slate-100 bg-white p-8 opacity-0 shadow-sm transition-all duration-300 ${service.borderHover} hover:shadow-lg hover:-translate-y-1 dark:border-emerald-800/20 dark:bg-emerald-900/10 dark:hover:border-emerald-700/50`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl ${service.iconBg} transition-all ${service.hoverIconBg} group-hover:shadow-md`}>
                {service.icon}
              </div>
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed text-slate-500 dark:text-emerald-200/60">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
