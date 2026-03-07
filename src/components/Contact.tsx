"use client";

import { useEffect, useRef } from "react";

export default function Contact() {
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
    const el = sectionRef.current?.querySelector(".contact-inner");
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const soomgoUrl = process.env.NEXT_PUBLIC_SOOMGO_URL || "#";

  return (
    <section id="contact" ref={sectionRef} className="relative py-28 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="contact-inner opacity-0">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-600 via-emerald-700 to-teal-700 p-12 shadow-xl shadow-emerald-600/15 sm:p-16">
            {/* Background decoration */}
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-white/[0.06] blur-2xl" />
              <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-emerald-400/15 blur-2xl" />
            </div>

            <div className="relative z-10 flex flex-col items-center text-center">
              <h2 className="mb-4 text-4xl font-bold text-white sm:text-5xl">
                프로젝트를
                <br />
                시작해 볼까요?
              </h2>
              <p className="mb-8 max-w-xl text-lg leading-relaxed text-emerald-100/70">
                아이디어만 있어도 괜찮습니다. 숨고에서 간편하게 상담을 신청하시면,
                기획 단계부터 함께 고민하고 최적의 솔루션을 찾아드립니다.
              </p>

              <a
                href={soomgoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-2xl bg-white px-10 py-5 text-lg font-bold text-emerald-700 shadow-lg transition-all hover:bg-emerald-50 hover:shadow-xl hover:scale-[1.02]"
              >
                숨고에서 무료 상담 신청하기
                <svg
                  className="h-5 w-5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>

              <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:gap-8">
                <div className="flex items-center gap-3 text-emerald-100/70">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  <span className="text-sm">contact@ooi.kr</span>
                </div>
                <div className="flex items-center gap-3 text-emerald-100/70">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  <span className="text-sm">02-1234-5678</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
