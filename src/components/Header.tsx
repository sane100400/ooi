"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navItems = [
  { label: "서비스", href: "#services" },
  { label: "포트폴리오", href: "#portfolio" },
  { label: "프로세스", href: "#process" },
  { label: "회사 소개", href: "#about" },
  { label: "견적 보기", href: "/pricing" },
  { label: "문의하기", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-emerald-900/90 backdrop-blur-md shadow-lg shadow-emerald-900/5"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <span className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            OO<span className="text-emerald-500">i</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-emerald-600 dark:text-emerald-100 dark:hover:text-emerald-400"
            >
              {item.label}
            </a>
          ))}
          <a
            href={process.env.NEXT_PUBLIC_SOOMGO_URL || "#contact"}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-emerald-500/30 transition-all hover:shadow-emerald-500/50 hover:scale-105"
          >
            프로젝트 의뢰
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="메뉴 열기"
        >
          <span
            className={`block h-0.5 w-6 bg-slate-700 dark:bg-white transition-transform ${mobileOpen ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-slate-700 dark:bg-white transition-opacity ${mobileOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-slate-700 dark:bg-white transition-transform ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="border-t border-emerald-100 bg-white/95 dark:bg-emerald-900/95 backdrop-blur-md md:hidden animate-fade-in">
          <nav className="flex flex-col gap-1 px-6 py-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-emerald-50 hover:text-emerald-600 dark:text-emerald-100 dark:hover:bg-emerald-800"
              >
                {item.label}
              </a>
            ))}
            <a
              href={process.env.NEXT_PUBLIC_SOOMGO_URL || "#contact"}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="mt-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 px-6 py-3 text-center text-sm font-semibold text-white"
            >
              프로젝트 의뢰
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
