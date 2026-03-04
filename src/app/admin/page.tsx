"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { PortfolioItem } from "@/types/portfolio";
import type { QuoteRequest } from "@/types/quote";
import { GRADIENT_PRESETS } from "@/lib/gradients";

const CATEGORIES = ["기업 사이트", "쇼핑몰", "랜딩페이지", "웹 앱", "기타"];

export default function AdminPage() {
  const [tab, setTab] = useState<"quotes" | "portfolio">("quotes");

  // Portfolio state
  const [items, setItems] = useState<PortfolioItem[]>([]);
  const [loadingItems, setLoadingItems] = useState(true);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState(CATEGORIES[0]);
  const [description, setDescription] = useState("");
  const [tagsInput, setTagsInput] = useState("");
  const [color, setColor] = useState<string>(GRADIENT_PRESETS[0].value);
  const [submitting, setSubmitting] = useState(false);

  // Quotes state
  const [quotes, setQuotes] = useState<QuoteRequest[]>([]);
  const [loadingQuotes, setLoadingQuotes] = useState(true);

  const fetchItems = async () => {
    const res = await fetch("/api/portfolio");
    const data = await res.json();
    setItems(data);
    setLoadingItems(false);
  };

  const fetchQuotes = async () => {
    const res = await fetch("/api/quotes");
    const data = await res.json();
    setQuotes(data);
    setLoadingQuotes(false);
  };

  useEffect(() => {
    fetchItems();
    fetchQuotes();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    const tags = tagsInput
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean);

    const res = await fetch("/api/portfolio", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, category, description, tags, color }),
    });

    if (res.ok) {
      setTitle("");
      setDescription("");
      setTagsInput("");
      setCategory(CATEGORIES[0]);
      setColor(GRADIENT_PRESETS[0].value);
      await fetchItems();
    }

    setSubmitting(false);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("정말 삭제하시겠습니까?")) return;
    const res = await fetch(`/api/portfolio/${id}`, { method: "DELETE" });
    if (res.ok) await fetchItems();
  };

  const unreadCount = quotes.filter((q) => !q.read).length;

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <h1 className="text-xl font-bold text-slate-900">
            OO<span className="text-emerald-500">i</span> Admin
          </h1>
          <Link
            href="/"
            className="text-sm text-slate-500 hover:text-emerald-600 transition-colors"
          >
            메인 페이지로
          </Link>
        </div>
      </header>

      {/* Tabs */}
      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-5xl px-6">
          <button
            onClick={() => setTab("quotes")}
            className={`relative px-5 py-3 text-sm font-medium transition-colors ${
              tab === "quotes"
                ? "border-b-2 border-emerald-500 text-emerald-600"
                : "text-slate-500 hover:text-slate-700"
            }`}
          >
            견적 신청
            {unreadCount > 0 && (
              <span className="ml-2 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-red-500 px-1.5 text-[10px] font-bold text-white">
                {unreadCount}
              </span>
            )}
          </button>
          <button
            onClick={() => setTab("portfolio")}
            className={`px-5 py-3 text-sm font-medium transition-colors ${
              tab === "portfolio"
                ? "border-b-2 border-emerald-500 text-emerald-600"
                : "text-slate-500 hover:text-slate-700"
            }`}
          >
            포트폴리오
          </button>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-6 py-10">
        {/* ======= QUOTES TAB ======= */}
        {tab === "quotes" && (
          <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="mb-6 text-lg font-bold text-slate-900">
              견적 신청 목록 ({quotes.length}건)
            </h2>

            {loadingQuotes ? (
              <p className="text-sm text-slate-500">불러오는 중...</p>
            ) : quotes.length === 0 ? (
              <p className="text-sm text-slate-500">
                아직 견적 신청이 없습니다.
              </p>
            ) : (
              <div className="space-y-4">
                {quotes.map((q) => (
                  <div
                    key={q.id}
                    className={`rounded-xl border p-5 transition-colors ${
                      q.read
                        ? "border-slate-100 bg-white"
                        : "border-emerald-200 bg-emerald-50/50"
                    }`}
                  >
                    <div className="mb-3 flex flex-wrap items-center gap-2">
                      {!q.read && (
                        <span className="rounded-full bg-red-500 px-2 py-0.5 text-[10px] font-bold text-white">
                          NEW
                        </span>
                      )}
                      <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-semibold text-emerald-700">
                        {q.service}
                      </span>
                      <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs text-slate-500">
                        {q.budget}
                      </span>
                      <span className="ml-auto text-xs text-slate-400">
                        {new Date(q.createdAt).toLocaleString("ko-KR")}
                      </span>
                    </div>
                    <div className="grid gap-2 sm:grid-cols-2">
                      <div>
                        <span className="text-xs text-slate-400">이름</span>
                        <p className="text-sm font-semibold text-slate-900">{q.name}</p>
                      </div>
                      <div>
                        <span className="text-xs text-slate-400">연락처</span>
                        <p className="text-sm font-semibold text-slate-900">{q.contact}</p>
                      </div>
                    </div>
                    {q.description && (
                      <div className="mt-3 rounded-lg bg-slate-50 p-3">
                        <p className="text-sm text-slate-600">{q.description}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </section>
        )}

        {/* ======= PORTFOLIO TAB ======= */}
        {tab === "portfolio" && (
          <>
            {/* Add Form */}
            <section className="mb-12 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="mb-6 text-lg font-bold text-slate-900">
                포트폴리오 등록
              </h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-700">
                      제목
                    </label>
                    <input
                      type="text"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      required
                      className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 outline-none transition-colors focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                      placeholder="프로젝트 제목"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-700">
                      카테고리
                    </label>
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 outline-none transition-colors focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                    >
                      {CATEGORIES.map((cat) => (
                        <option key={cat} value={cat}>
                          {cat}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-700">
                    설명
                  </label>
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                    rows={3}
                    className="w-full resize-none rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 outline-none transition-colors focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                    placeholder="프로젝트 설명"
                  />
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-700">
                      태그 (쉼표로 구분)
                    </label>
                    <input
                      type="text"
                      value={tagsInput}
                      onChange={(e) => setTagsInput(e.target.value)}
                      className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 outline-none transition-colors focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                      placeholder="Next.js, TypeScript, Tailwind"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-700">
                      색상 프리셋
                    </label>
                    <select
                      value={color}
                      onChange={(e) => setColor(e.target.value)}
                      className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 outline-none transition-colors focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                    >
                      {GRADIENT_PRESETS.map((preset) => (
                        <option key={preset.value} value={preset.value}>
                          {preset.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="rounded-lg bg-emerald-600 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-emerald-700 disabled:opacity-50"
                >
                  {submitting ? "등록 중..." : "등록하기"}
                </button>
              </form>
            </section>

            {/* Item List */}
            <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="mb-6 text-lg font-bold text-slate-900">
                등록된 포트폴리오 ({items.length}건)
              </h2>

              {loadingItems ? (
                <p className="text-sm text-slate-500">불러오는 중...</p>
              ) : items.length === 0 ? (
                <p className="text-sm text-slate-500">
                  등록된 포트폴리오가 없습니다.
                </p>
              ) : (
                <div className="space-y-4">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center gap-4 rounded-xl border border-slate-100 p-4 transition-colors hover:bg-slate-50"
                    >
                      <div
                        className={`h-12 w-12 shrink-0 rounded-lg bg-gradient-to-br ${item.color}`}
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <h3 className="truncate text-sm font-semibold text-slate-900">
                            {item.title}
                          </h3>
                          <span className="shrink-0 rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-600">
                            {item.category}
                          </span>
                        </div>
                        <p className="truncate text-xs text-slate-500">
                          {item.description}
                        </p>
                        {item.tags.length > 0 && (
                          <div className="mt-1 flex flex-wrap gap-1">
                            {item.tags.map((tag) => (
                              <span
                                key={tag}
                                className="rounded bg-emerald-50 px-1.5 py-0.5 text-[10px] font-medium text-emerald-700"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="shrink-0 rounded-lg px-3 py-1.5 text-xs font-medium text-red-600 transition-colors hover:bg-red-50"
                      >
                        삭제
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </section>
          </>
        )}
      </div>
    </div>
  );
}
