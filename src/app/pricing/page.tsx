"use client";

import { useState } from "react";
import Link from "next/link";

interface Feature {
  name: string;
  price: number; // 만원 단위
  note?: string;
}

interface FeatureCategory {
  category: string;
  icon: string;
  gradient: string;
  features: Feature[];
}

const featureMenu: FeatureCategory[] = [
  {
    category: "기본 구성",
    icon: "🏗️",
    gradient: "from-emerald-500 to-teal-600",
    features: [
      { name: "기본 홈페이지 (5페이지 이내)", price: 30 },
      { name: "추가 페이지 (1페이지당)", price: 3 },
      { name: "반응형 디자인 (모바일 대응)", price: 10 },
      { name: "도메인 & SSL 세팅", price: 5 },
      { name: "기본 SEO 설정", price: 5 },
    ],
  },
  {
    category: "기능 모듈",
    icon: "⚙️",
    gradient: "from-blue-500 to-indigo-600",
    features: [
      { name: "게시판", price: 5 },
      { name: "문의 폼 (이메일 발송)", price: 3 },
      { name: "예약 시스템", price: 15 },
      { name: "검색 기능", price: 5 },
      { name: "다국어 지원 (2개 언어)", price: 10 },
      { name: "채팅 위젯 (실시간)", price: 12 },
    ],
  },
  {
    category: "회원 & 인증",
    icon: "🔐",
    gradient: "from-indigo-500 to-violet-600",
    features: [
      { name: "회원가입 / 로그인", price: 8 },
      { name: "소셜로그인 풀패키지 (구글+카카오+네이버+트위터)", price: 10 },
      { name: "소셜로그인 (구글만)", price: 3 },
      { name: "소셜로그인 (카카오만)", price: 3 },
      { name: "마이페이지", price: 5 },
      { name: "관리자 페이지", price: 10 },
    ],
  },
  {
    category: "쇼핑몰 & 결제",
    icon: "🛒",
    gradient: "from-cyan-500 to-blue-600",
    features: [
      { name: "상품 등록/관리", price: 10 },
      { name: "결제 시스템 (PG 연동)", price: 10 },
      { name: "장바구니", price: 5 },
      { name: "주문/배송 관리", price: 8 },
      { name: "쿠폰 / 할인 기능", price: 5 },
      { name: "리뷰 시스템", price: 5 },
    ],
  },
  {
    category: "AI & 챗봇",
    icon: "🤖",
    gradient: "from-violet-500 to-purple-600",
    features: [
      { name: "AI 챗봇 (기본)", price: 20 },
      { name: "FAQ 자동 응답", price: 8 },
      { name: "맞춤 학습 데이터 적용", price: 15 },
      { name: "상담 내역 관리", price: 5 },
    ],
  },
  {
    category: "모바일 앱",
    icon: "📱",
    gradient: "from-teal-500 to-emerald-600",
    features: [
      { name: "크로스 플랫폼 앱 (Android+iOS)", price: 80 },
      { name: "푸시 알림", price: 8 },
      { name: "앱스토어 출시 대행", price: 10 },
    ],
  },
];

const maintenancePlans = [
  { name: "라이트", price: 5, features: ["버그 수정", "보안 업데이트"] },
  { name: "스탠다드", price: 10, features: ["버그 수정", "보안 업데이트", "콘텐츠 수정", "서버 관리"] },
  { name: "프리미엄", price: 20, features: ["버그 수정", "보안 업데이트", "콘텐츠 수정", "서버 관리", "기능 추가/개선", "월간 리포트"] },
];

export default function PricingPage() {
  const [formOpen, setFormOpen] = useState(false);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [budget, setBudget] = useState("");
  const [description, setDescription] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const toggleFeature = (featureName: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(featureName)
        ? prev.filter((f) => f !== featureName)
        : [...prev, featureName]
    );
  };

  const totalPrice = featureMenu
    .flatMap((c) => c.features)
    .filter((f) => selectedFeatures.includes(f.name))
    .reduce((sum, f) => sum + f.price, 0);

  const openForm = () => {
    setFormOpen(true);
    setSubmitted(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    const res = await fetch("/api/quotes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        contact,
        service: selectedFeatures.join(", ") || "상담 요청",
        budget: totalPrice > 0 ? `${totalPrice}만원 (선택 기능 기준)` : budget,
        description,
      }),
    });

    if (res.ok) {
      setSubmitted(true);
      setName("");
      setContact("");
      setBudget("");
      setDescription("");
    }

    setSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#021a0f]">
      {/* Header */}
      <header className="border-b border-slate-100 dark:border-emerald-800/30">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-2xl font-bold text-slate-900 dark:text-white">
            OO<span className="text-emerald-500">i</span>
          </Link>
          <Link
            href="/"
            className="text-sm text-slate-500 hover:text-emerald-600 transition-colors"
          >
            메인으로
          </Link>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-6 py-20">
        {/* Hero */}
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-300 bg-blue-50 px-4 py-2 dark:border-blue-600 dark:bg-blue-900/30">
            <svg className="h-4 w-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm font-bold text-blue-700 dark:text-blue-300">
              업계 평균 대비 75% 절감
            </span>
          </div>
          <h1 className="mb-4 text-4xl font-extrabold text-slate-900 dark:text-white sm:text-5xl">
            기능별 <span className="gradient-text">맞춤 견적</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-500 dark:text-emerald-200/60">
            필요한 기능만 골라서 합리적인 가격에.
            <br className="hidden sm:block" />
            고려대 보안 전공 개발팀이 직접 만들어서 가능한 가격입니다.
          </p>
        </div>

        {/* Feature selector */}
        <div className="mb-8 grid gap-8 lg:grid-cols-2">
          {featureMenu.map((cat) => (
            <div
              key={cat.category}
              className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm dark:border-emerald-800/30 dark:bg-emerald-900/20"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${cat.gradient} text-lg shadow-md`}>
                  {cat.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {cat.category}
                </h3>
              </div>
              <div className="space-y-2">
                {cat.features.map((f) => {
                  const selected = selectedFeatures.includes(f.name);
                  return (
                    <button
                      key={f.name}
                      onClick={() => toggleFeature(f.name)}
                      className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-left transition-all ${
                        selected
                          ? "bg-emerald-50 border border-emerald-300 dark:bg-emerald-800/30 dark:border-emerald-600"
                          : "bg-slate-50 border border-transparent hover:bg-slate-100 dark:bg-emerald-900/10 dark:hover:bg-emerald-900/20"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md border-2 transition-colors ${
                            selected
                              ? "border-emerald-500 bg-emerald-500"
                              : "border-slate-300 dark:border-emerald-700"
                          }`}
                        >
                          {selected && (
                            <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                          )}
                        </div>
                        <span className={`text-sm font-medium ${selected ? "text-emerald-800 dark:text-emerald-200" : "text-slate-700 dark:text-emerald-200/70"}`}>
                          {f.name}
                        </span>
                      </div>
                      <span className={`text-sm font-bold ${selected ? "text-emerald-600 dark:text-emerald-400" : "text-slate-500 dark:text-emerald-200/50"}`}>
                        {f.price}만원
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Sticky total bar */}
        <div className="sticky bottom-6 z-40 mx-auto max-w-2xl">
          <div className="rounded-2xl border border-slate-200 bg-white/95 p-5 shadow-2xl backdrop-blur-md dark:border-emerald-800/50 dark:bg-slate-900/95">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs text-slate-500 dark:text-emerald-200/50">
                  {selectedFeatures.length}개 기능 선택
                </p>
                <p className="text-2xl font-extrabold text-slate-900 dark:text-white">
                  {totalPrice > 0 ? `${totalPrice}만원` : "기능을 선택하세요"}
                </p>
              </div>
              <button
                onClick={openForm}
                className="rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/30 transition-all hover:scale-105 disabled:opacity-50"
              >
                견적 신청하기
              </button>
            </div>
          </div>
        </div>

        {/* Maintenance section */}
        <div className="mb-16 mt-16">
          <h2 className="mb-8 text-center text-2xl font-extrabold text-slate-900 dark:text-white">
            유지보수 플랜
          </h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {maintenancePlans.map((plan) => (
              <div
                key={plan.name}
                className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-emerald-800/30 dark:bg-emerald-900/20"
              >
                <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">
                  {plan.name}
                </h3>
                <div className="mb-4">
                  <span className="text-3xl font-extrabold text-slate-900 dark:text-white">
                    {plan.price}만원
                  </span>
                  <span className="text-sm text-slate-500 dark:text-emerald-200/50">/월</span>
                </div>
                <ul className="space-y-2">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-slate-600 dark:text-emerald-200/60">
                      <svg className="h-4 w-4 shrink-0 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Note */}
        <div className="text-center text-sm text-slate-400 dark:text-emerald-200/40">
          * 모든 가격은 프로젝트 규모에 따라 달라질 수 있습니다. 정확한 견적은 상담 후 안내드립니다.
          <br />
          * 위 가격은 업계 평균의 약 1/4 수준입니다.
        </div>
      </div>

      {/* Quote request modal */}
      {formOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="relative w-full max-w-lg rounded-2xl bg-white p-8 shadow-2xl dark:bg-slate-900">
            <button
              onClick={() => setFormOpen(false)}
              className="absolute right-4 top-4 text-slate-400 hover:text-slate-600"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {submitted ? (
              <div className="py-8 text-center">
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">견적 신청 완료!</h3>
                <p className="text-sm text-slate-500 dark:text-emerald-200/60">빠른 시간 내에 연락드리겠습니다.</p>
                <button
                  onClick={() => setFormOpen(false)}
                  className="mt-6 rounded-lg bg-emerald-600 px-6 py-2.5 text-sm font-semibold text-white"
                >
                  닫기
                </button>
              </div>
            ) : (
              <>
                <h3 className="mb-1 text-xl font-bold text-slate-900 dark:text-white">
                  견적 신청
                </h3>
                {selectedFeatures.length > 0 && (
                  <div className="mb-4 rounded-lg bg-emerald-50 p-3 dark:bg-emerald-900/30">
                    <p className="mb-1 text-xs font-medium text-emerald-700 dark:text-emerald-300">선택한 기능</p>
                    <div className="flex flex-wrap gap-1">
                      {selectedFeatures.map((f) => (
                        <span key={f} className="rounded-full bg-emerald-100 px-2 py-0.5 text-xs text-emerald-700 dark:bg-emerald-800 dark:text-emerald-200">
                          {f}
                        </span>
                      ))}
                    </div>
                    <p className="mt-2 text-sm font-bold text-emerald-800 dark:text-emerald-200">
                      예상 금액: {totalPrice}만원
                    </p>
                  </div>
                )}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-1 block text-xs font-medium text-slate-600 dark:text-slate-400">이름 / 회사명 *</label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                        placeholder="홍길동 / OO회사"
                      />
                    </div>
                    <div>
                      <label className="mb-1 block text-xs font-medium text-slate-600 dark:text-slate-400">연락처 (전화 or 이메일) *</label>
                      <input
                        type="text"
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}
                        required
                        className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                        placeholder="010-0000-0000"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="mb-1 block text-xs font-medium text-slate-600 dark:text-slate-400">프로젝트 설명</label>
                    <textarea
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      rows={3}
                      className="w-full resize-none rounded-lg border border-slate-200 px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                      placeholder="어떤 사이트/앱을 만들고 싶으신지 간단히 알려주세요"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full rounded-lg bg-gradient-to-r from-emerald-500 to-teal-600 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/30 transition-all hover:scale-[1.02] disabled:opacity-50"
                  >
                    {submitting ? "신청 중..." : "견적 신청하기"}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
