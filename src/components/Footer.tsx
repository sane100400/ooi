import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white py-12 px-6 dark:border-emerald-800/30 dark:bg-emerald-950/50">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="mb-4 inline-block">
              <span className="text-xl font-bold text-slate-900 dark:text-white">
                OO<span className="text-emerald-500">i</span>
              </span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-slate-500 dark:text-emerald-200/50">
              비즈니스에 최적화된 웹사이트를
              <br />
              기획부터 개발, 운영까지.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-slate-900 dark:text-white">
              서비스
            </h4>
            <ul className="space-y-2.5">
              {["홈페이지 제작", "AI 챗봇 개발", "모바일 앱 개발", "쇼핑몰 제작"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#services"
                      className="text-sm text-slate-500 transition-colors hover:text-emerald-600 dark:text-emerald-200/50 dark:hover:text-emerald-400"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-slate-900 dark:text-white">
              회사
            </h4>
            <ul className="space-y-2.5">
              {["회사 소개", "포트폴리오", "작업 프로세스", "블로그"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#about"
                      className="text-sm text-slate-500 transition-colors hover:text-emerald-600 dark:text-emerald-200/50 dark:hover:text-emerald-400"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-100 pt-8 dark:border-emerald-800/30 sm:flex-row">
          <p className="text-sm text-slate-400 dark:text-emerald-200/40">
            &copy; {new Date().getFullYear()} OOi. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-400 dark:text-emerald-200/40">
            <a href="#" className="transition-colors hover:text-emerald-500">
              개인정보처리방침
            </a>
            <a href="#" className="transition-colors hover:text-emerald-500">
              이용약관
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
