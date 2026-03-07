"use client";

import { useState, useRef } from "react";
import Link from "next/link";

interface Feature {
  name: string;
  price: number;
  quantifiable?: boolean;
  unit?: string;
}

interface FeatureCategory {
  category: string;
  icon: React.ReactNode;
  features: Feature[];
}

const featureMenu: FeatureCategory[] = [
  {
    category: "기본 구성",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582" />
      </svg>
    ),
    features: [
      { name: "기본 홈페이지 (5페이지 이내)", price: 30 },
      { name: "추가 페이지", price: 3, quantifiable: true, unit: "페이지" },
      { name: "반응형 디자인 (모바일 대응)", price: 10 },
      { name: "도메인 & SSL 세팅", price: 5 },
      { name: "기본 SEO 설정", price: 5 },
    ],
  },
  {
    category: "기능 모듈",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 010 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 010-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    features: [
      { name: "게시판", price: 5 },
      { name: "문의 폼 (이메일 발송)", price: 3 },
      { name: "예약 시스템", price: 15 },
      { name: "검색 기능", price: 5 },
      { name: "다국어 지원", price: 10, quantifiable: true, unit: "개 언어" },
      { name: "채팅 위젯 (실시간)", price: 12 },
    ],
  },
  {
    category: "회원 & 인증",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
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
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121 0 2.09-.773 2.21-1.886L21 5.25H6.228" />
      </svg>
    ),
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
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
      </svg>
    ),
    features: [
      { name: "AI 챗봇 (기본)", price: 20 },
      { name: "FAQ 자동 응답", price: 8 },
      { name: "맞춤 학습 데이터 적용", price: 15 },
      { name: "상담 내역 관리", price: 5 },
    ],
  },
  {
    category: "모바일 앱",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
    features: [
      { name: "크로스 플랫폼 앱 (Android+iOS)", price: 80 },
      { name: "푸시 알림", price: 8 },
      { name: "앱스토어 출시 대행", price: 10 },
    ],
  },
];

const maintenancePlans = [
  { name: "라이트", price: 5, features: ["버그 수정", "보안 업데이트"], recommended: false },
  { name: "스탠다드", price: 10, features: ["버그 수정", "보안 업데이트", "콘텐츠 수정", "서버 관리"], recommended: true },
  { name: "프리미엄", price: 20, features: ["버그 수정", "보안 업데이트", "콘텐츠 수정", "서버 관리", "기능 추가/개선", "월간 리포트"], recommended: false },
];

export default function PricingPage() {
  const [selectedFeatures, setSelectedFeatures] = useState<Record<string, number>>({});
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");
  const [maintenancePlan, setMaintenancePlan] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  const toggleFeature = (featureName: string, quantifiable?: boolean) => {
    setSelectedFeatures((prev) => {
      const next = { ...prev };
      if (featureName in next) {
        delete next[featureName];
      } else {
        next[featureName] = quantifiable ? 1 : 1;
      }
      return next;
    });
  };

  const setQuantity = (featureName: string, qty: number) => {
    if (qty < 1) return;
    setSelectedFeatures((prev) => ({ ...prev, [featureName]: qty }));
  };

  const allFeatures = featureMenu.flatMap((c) => c.features);

  const totalPrice = Object.entries(selectedFeatures).reduce((sum, [name, qty]) => {
    const f = allFeatures.find((feat) => feat.name === name);
    return sum + (f ? f.price * qty : 0);
  }, 0);

  const selectedCount = Object.keys(selectedFeatures).length;

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    const featureSummary = Object.entries(selectedFeatures)
      .map(([name, qty]) => {
        const f = allFeatures.find((feat) => feat.name === name);
        if (f?.quantifiable && qty > 1) return `${name} x${qty}`;
        return name;
      })
      .join(", ");

    const fullDescription = [
      description,
      deadline ? `희망 납기: ${deadline}` : "",
      maintenancePlan ? `유지보수: ${maintenancePlan}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    const res = await fetch("/api/quotes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: company ? `${name} (${company})` : name,
        contact: [phone, email].filter(Boolean).join(" / "),
        service: featureSummary || "상담 요청",
        budget: totalPrice > 0 ? `${totalPrice}만원 (선택 기능 기준)` : "미정",
        description: fullDescription,
      }),
    });

    if (res.ok) {
      setSubmitted(true);
    }

    setSubmitting(false);
  };

  if (submitted) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white px-6 dark:bg-[#021a0f]">
        <div className="max-w-md text-center">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-50 dark:bg-emerald-900/30">
            <svg className="h-10 w-10 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </div>
          <h1 className="mb-3 text-3xl font-bold text-slate-900 dark:text-white">
            견적 신청이 완료되었습니다
          </h1>
          <p className="mb-2 text-slate-500 dark:text-emerald-200/60">
            빠른 시간 내에 연락드리겠습니다.
          </p>
          <p className="mb-8 text-sm text-slate-400 dark:text-emerald-200/40">
            예상 견적: <strong className="text-emerald-600 dark:text-emerald-400">{totalPrice > 0 ? `${totalPrice}만원` : "상담 후 안내"}</strong>
          </p>
          <Link
            href="/"
            className="inline-flex rounded-full bg-emerald-600 px-8 py-3 text-sm font-semibold text-white shadow-md shadow-emerald-600/20 transition-all hover:bg-emerald-700"
          >
            메인으로 돌아가기
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-[#021a0f]">
      {/* Header */}
      <header className="border-b border-slate-100 dark:border-emerald-800/20">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-2xl font-bold text-slate-900 dark:text-white">
            OO<span className="text-emerald-500">i</span>
          </Link>
          <Link
            href="/"
            className="text-sm text-slate-400 hover:text-emerald-600 transition-colors"
          >
            메인으로
          </Link>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
        {/* Hero */}
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-200/60 bg-emerald-50/80 px-4 py-2 dark:border-emerald-700/50 dark:bg-emerald-900/30">
            <svg className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm font-semibold text-emerald-700 dark:text-emerald-300">
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

        {/* Step 1: Feature selector */}
        <div className="mb-6">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-600 text-sm font-bold text-white">1</div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">필요한 기능 선택</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {featureMenu.map((cat) => (
              <div
                key={cat.category}
                className="rounded-2xl border border-slate-100 bg-white p-6 dark:border-emerald-800/20 dark:bg-emerald-900/10"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400">
                    {cat.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {cat.category}
                  </h3>
                </div>
                <div className="space-y-2">
                  {cat.features.map((f) => {
                    const selected = f.name in selectedFeatures;
                    const qty = selectedFeatures[f.name] || 1;
                    return (
                      <div key={f.name} className="flex items-center gap-2">
                        <button
                          onClick={() => toggleFeature(f.name, f.quantifiable)}
                          className={`flex flex-1 items-center justify-between rounded-xl px-4 py-3 text-left transition-all ${
                            selected
                              ? "bg-emerald-50 border border-emerald-200 dark:bg-emerald-800/20 dark:border-emerald-700/50"
                              : "bg-slate-50 border border-transparent hover:bg-slate-100 dark:bg-emerald-900/5 dark:hover:bg-emerald-900/15"
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
                            <span className={`text-sm font-medium ${selected ? "text-slate-800 dark:text-emerald-200" : "text-slate-600 dark:text-emerald-200/60"}`}>
                              {f.quantifiable ? `${f.name} (1${f.unit}당)` : f.name}
                            </span>
                          </div>
                          <span className={`text-sm font-bold whitespace-nowrap ${selected ? "text-emerald-600 dark:text-emerald-400" : "text-slate-400 dark:text-emerald-200/40"}`}>
                            {f.price}만원{f.quantifiable ? `/${f.unit}` : ""}
                          </span>
                        </button>

                        {/* Quantity control */}
                        {selected && f.quantifiable && (
                          <div className="flex items-center gap-1 rounded-xl border border-emerald-200 bg-emerald-50 px-1 py-1 dark:border-emerald-700/50 dark:bg-emerald-900/20">
                            <button
                              onClick={() => setQuantity(f.name, qty - 1)}
                              className="flex h-7 w-7 items-center justify-center rounded-lg text-emerald-600 transition-colors hover:bg-emerald-100 disabled:opacity-30 dark:text-emerald-400 dark:hover:bg-emerald-800/50"
                              disabled={qty <= 1}
                            >
                              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                              </svg>
                            </button>
                            <span className="w-8 text-center text-sm font-bold text-emerald-700 dark:text-emerald-300">{qty}</span>
                            <button
                              onClick={() => setQuantity(f.name, qty + 1)}
                              className="flex h-7 w-7 items-center justify-center rounded-lg text-emerald-600 transition-colors hover:bg-emerald-100 dark:text-emerald-400 dark:hover:bg-emerald-800/50"
                            >
                              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                              </svg>
                            </button>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sticky total bar */}
        <div className="sticky bottom-4 z-40 mx-auto mb-16 max-w-2xl">
          <div className="rounded-2xl border border-slate-200/80 bg-white/90 p-4 shadow-xl backdrop-blur-xl dark:border-emerald-800/40 dark:bg-slate-900/90 sm:p-5">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs text-slate-400 dark:text-emerald-200/40">
                  {selectedCount}개 기능 선택
                </p>
                <p className="text-2xl font-extrabold text-slate-900 dark:text-white">
                  {totalPrice > 0 ? (
                    <>
                      {totalPrice}<span className="text-base font-bold text-slate-500 dark:text-emerald-200/50">만원</span>
                    </>
                  ) : (
                    <span className="text-lg text-slate-400">기능을 선택하세요</span>
                  )}
                </p>
              </div>
              <button
                onClick={scrollToForm}
                className="rounded-xl bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-emerald-600/20 transition-all hover:bg-emerald-700 hover:scale-105 sm:px-8"
              >
                견적 신청하기
              </button>
            </div>
          </div>
        </div>

        {/* Maintenance section */}
        <div className="mb-16">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-600 text-sm font-bold text-white">2</div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">유지보수 플랜 <span className="text-sm font-normal text-slate-400">(선택)</span></h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {maintenancePlans.map((plan) => {
              const isSelected = maintenancePlan === plan.name;
              return (
                <button
                  key={plan.name}
                  onClick={() => setMaintenancePlan(isSelected ? "" : plan.name)}
                  className={`relative rounded-2xl border p-6 text-left transition-all hover:shadow-md ${
                    isSelected
                      ? "border-emerald-300 bg-emerald-50/50 shadow-sm dark:border-emerald-600 dark:bg-emerald-900/20"
                      : "border-slate-100 bg-white dark:border-emerald-800/20 dark:bg-emerald-900/10"
                  }`}
                >
                  {plan.recommended && (
                    <span className="absolute -top-2.5 right-4 rounded-full bg-emerald-600 px-3 py-0.5 text-xs font-semibold text-white">
                      추천
                    </span>
                  )}
                  <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">
                    {plan.name}
                  </h3>
                  <div className="mb-4">
                    <span className="text-3xl font-extrabold text-slate-900 dark:text-white">
                      {plan.price}
                    </span>
                    <span className="text-base font-bold text-slate-400 dark:text-emerald-200/40">만원/월</span>
                  </div>
                  <ul className="space-y-2">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-slate-500 dark:text-emerald-200/60">
                        <svg className="h-4 w-4 shrink-0 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                </button>
              );
            })}
          </div>
        </div>

        {/* Step 3: Request form */}
        <div ref={formRef} className="mb-16 scroll-mt-8">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-600 text-sm font-bold text-white">3</div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">견적 요청 정보 입력</h2>
          </div>

          <div className="rounded-2xl border border-slate-100 bg-white p-6 sm:p-8 dark:border-emerald-800/20 dark:bg-emerald-900/10">
            {/* Selected summary */}
            {selectedCount > 0 && (
              <div className="mb-6 rounded-xl bg-emerald-50/70 p-4 dark:bg-emerald-900/20">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">선택한 기능</p>
                <div className="flex flex-wrap gap-1.5">
                  {Object.entries(selectedFeatures).map(([name, qty]) => {
                    const f = allFeatures.find((feat) => feat.name === name);
                    return (
                      <span key={name} className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700 dark:bg-emerald-800/40 dark:text-emerald-300">
                        {name}{f?.quantifiable && qty > 1 ? ` x${qty}` : ""}
                      </span>
                    );
                  })}
                </div>
                <p className="mt-3 text-lg font-bold text-emerald-700 dark:text-emerald-300">
                  예상 견적: {totalPrice}만원
                  {maintenancePlan && <span className="text-sm font-normal text-emerald-600/70 dark:text-emerald-400/70"> + 유지보수 {maintenancePlan}</span>}
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Contact info */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">
                    이름 <span className="text-emerald-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-colors focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 dark:border-emerald-800/30 dark:bg-emerald-900/10 dark:text-white dark:focus:border-emerald-500"
                    placeholder="홍길동"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">
                    회사명 / 단체명
                  </label>
                  <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-colors focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 dark:border-emerald-800/30 dark:bg-emerald-900/10 dark:text-white dark:focus:border-emerald-500"
                    placeholder="OO회사 (선택사항)"
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">
                    전화번호 <span className="text-emerald-500">*</span>
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-colors focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 dark:border-emerald-800/30 dark:bg-emerald-900/10 dark:text-white dark:focus:border-emerald-500"
                    placeholder="010-0000-0000"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">
                    이메일
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-colors focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 dark:border-emerald-800/30 dark:bg-emerald-900/10 dark:text-white dark:focus:border-emerald-500"
                    placeholder="example@email.com (선택사항)"
                  />
                </div>
              </div>

              {/* Deadline */}
              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">
                  희망 납기일
                </label>
                <div className="flex flex-wrap gap-2">
                  {["급해요 (1~3일)", "보통 (1주일)", "여유있어요 (2주 이상)", "상담 후 결정"].map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setDeadline(deadline === opt ? "" : opt)}
                      className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                        deadline === opt
                          ? "bg-emerald-600 text-white shadow-sm"
                          : "bg-slate-50 text-slate-500 hover:bg-slate-100 dark:bg-emerald-900/10 dark:text-emerald-200/60 dark:hover:bg-emerald-900/20"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">
                  프로젝트 상세 설명 <span className="text-emerald-500">*</span>
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                  rows={5}
                  className="w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-colors focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 dark:border-emerald-800/30 dark:bg-emerald-900/10 dark:text-white dark:focus:border-emerald-500"
                  placeholder={"어떤 사이트/앱을 만들고 싶으신가요?\n\n예시:\n- 카페 예약 + 메뉴 소개 홈페이지\n- 기존 사이트 리뉴얼\n- 참고하고 싶은 사이트 URL\n- 원하는 분위기, 색감 등"}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={submitting || !name || !phone || !description}
                className="w-full rounded-xl bg-emerald-600 py-4 text-base font-semibold text-white shadow-md shadow-emerald-600/20 transition-all hover:bg-emerald-700 hover:shadow-emerald-600/30 disabled:opacity-40 disabled:hover:bg-emerald-600 disabled:hover:scale-100"
              >
                {submitting ? (
                  <span className="inline-flex items-center gap-2">
                    <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    신청 중...
                  </span>
                ) : (
                  <>견적 신청하기{totalPrice > 0 ? ` (예상 ${totalPrice}만원)` : ""}</>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Note */}
        <div className="text-center text-sm text-slate-400 dark:text-emerald-200/40">
          * 모든 가격은 프로젝트 규모에 따라 달라질 수 있습니다. 정확한 견적은 상담 후 안내드립니다.
          <br />
          * 위 가격은 업계 평균의 약 1/4 수준입니다.
        </div>
      </div>
    </div>
  );
}
