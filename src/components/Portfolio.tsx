"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import type { PortfolioItem } from "@/types/portfolio";

const categories = ["전체", "기업 사이트", "쇼핑몰", "랜딩페이지", "웹 앱"];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("전체");
  const [projects, setProjects] = useState<PortfolioItem[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    fetch("/api/portfolio")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch(() => {});
  }, []);

  const filtered =
    activeCategory === "전체"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

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
    const el = sectionRef.current?.querySelector(".portfolio-header");
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="relative bg-slate-50 py-28 px-6 dark:bg-emerald-950/30"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <div className="portfolio-header mb-16 text-center opacity-0">
          <span className="mb-4 inline-block rounded-full bg-emerald-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300">
            Portfolio
          </span>
          <h2 className="mb-4 text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl">
            프로젝트 <span className="gradient-text">포트폴리오</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-500 dark:text-emerald-200/60">
            다양한 산업군의 클라이언트와 함께한 대표 프로젝트를 소개합니다
          </p>
        </div>

        {/* Category filter */}
        <div className="mb-12 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg shadow-emerald-500/30"
                  : "bg-white text-slate-600 hover:bg-emerald-50 hover:text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-200 dark:hover:bg-emerald-800/50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => (
            <Link
              key={project.id}
              href={`/portfolio/${project.id}`}
              className="group overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/10 hover:-translate-y-1 dark:border-emerald-800/30 dark:bg-emerald-900/20"
            >
              {/* Project preview area */}
              <div
                className={`flex h-48 items-center justify-center bg-gradient-to-br ${project.color} p-6`}
              >
                <div className="flex h-full w-full items-center justify-center rounded-lg bg-white/10 backdrop-blur-sm">
                  <svg
                    className="h-12 w-12 text-white/80 transition-transform group-hover:scale-110"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
                    />
                  </svg>
                </div>
              </div>

              {/* Project info */}
              <div className="p-6">
                <span className="mb-2 inline-block text-xs font-medium text-emerald-600 dark:text-emerald-400">
                  {project.category}
                </span>
                <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="mb-4 text-sm text-slate-500 dark:text-emerald-200/60">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 dark:bg-emerald-800/40 dark:text-emerald-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex items-center gap-1 text-sm font-medium text-emerald-600 opacity-0 transition-opacity group-hover:opacity-100">
                  사이트 보기
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
