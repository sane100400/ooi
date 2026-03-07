"use client";

import { useEffect, useRef } from "react";

export default function DeliveryBanner() {
  const bannerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
          }
        });
      },
      { threshold: 0.2 }
    );
    const el = bannerRef.current;
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const soomgoUrl = process.env.NEXT_PUBLIC_SOOMGO_URL || "#";

  return (
    <section ref={bannerRef} className="relative py-20 px-6 opacity-0">
      <div className="mx-auto max-w-5xl">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-800 to-slate-900 p-10 shadow-xl sm:p-14">
          {/* Background decoration */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -right-10 -top-10 h-60 w-60 rounded-full bg-emerald-500/15 blur-2xl" />
            <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-amber-500/10 blur-2xl" />
          </div>

          <div className="relative z-10 flex flex-col items-center gap-6 text-center md:flex-row md:text-left">
            {/* Icon */}
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-amber-500/15 backdrop-blur-sm">
              <svg className="h-10 w-10 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>

            {/* Text */}
            <div className="flex-1">
              <h3 className="mb-2 text-3xl font-extrabold text-white sm:text-4xl">
                최단 당일, 최장 7일
              </h3>
              <p className="text-base leading-relaxed text-slate-300 sm:text-lg">
                빠른 납기가 필요하신가요? OOi는 체계적인 프로세스로 당일 완성도 가능하며,
                어떤 프로젝트든 일주일을 넘기지 않습니다.
              </p>
            </div>

            {/* CTA */}
            <a
              href={soomgoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 rounded-full bg-emerald-500 px-8 py-4 text-base font-bold text-white shadow-lg shadow-emerald-500/25 transition-all hover:bg-emerald-600 hover:shadow-xl hover:scale-105"
            >
              지금 시작하기
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
