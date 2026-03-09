"use client";

import { useState, useRef } from "react";
import Link from "next/link";

interface Feature {
  name: string;
  price: number;
  quantifiable?: boolean;
  unit?: string;
  consultation?: boolean;
  discount?: boolean;
  subFeatures?: Feature[];
}

interface FeatureCategory {
  category: string;
  icon: React.ReactNode;
  iconColor: string;
  features: Feature[];
}

const BASE_PRICE = 30;

const SHOP_BUNDLE = [
  "관리자 페이지 (결제 시스템 선택 시 필수)",
  "주문 및 결제 시스템",
  "장바구니",
  "회원가입 / 로그인",
];

const SHOP_ADMIN = "관리자 페이지 (결제 시스템 선택 시 필수)";
const SHOP_ADMIN_DEPS = ["주문 및 결제 시스템", "장바구니", "리뷰 시스템", "쿠폰 / 할인 시스템", "배송 관리"];

const featureMenu: FeatureCategory[] = [
  {
    category: "추가 구성",
    iconColor: "bg-emerald-50 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582" />
      </svg>
    ),
    features: [
      { name: "추가 페이지 (기본)", price: 3, quantifiable: true, unit: "페이지" },
      { name: "추가 페이지 (고급 – 애니메이션/추가 디자인)", price: 5, quantifiable: true, unit: "페이지" },
      { name: "반응형 홈페이지 (모바일 환경 맞춤)", price: 15 },
    ],
  },
  {
    category: "기능",
    iconColor: "bg-teal-50 text-teal-600 dark:bg-teal-900/20 dark:text-teal-400",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 010 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 010-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    features: [
      { name: "게시판 기능", price: 5 },
      { name: "문의 폼 (이메일 발송)", price: 3 },
      { name: "검색 시스템", price: 3 },
      { name: "예약 시스템", price: 15 },
    ],
  },
  {
    category: "회원가입 & 인증",
    iconColor: "bg-sky-50 text-sky-600 dark:bg-sky-900/20 dark:text-sky-400",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    features: [
      { name: "회원가입 / 로그인", price: 10 },
      { name: "소셜 로그인 풀패키지 (구글+카카오+네이버+X)", price: 15 },
      {
        name: "소셜 로그인 단일",
        price: 5,
        subFeatures: [
          { name: "소셜 로그인 (구글)", price: 5 },
          { name: "소셜 로그인 (카카오)", price: 5 },
          { name: "소셜 로그인 (네이버)", price: 5 },
          { name: "소셜 로그인 (X)", price: 5 },
        ],
      },
      { name: "소셜 로그인 고급 (페이스북/인스타그램)", price: 10 },
      { name: "회원 개인 페이지", price: 5 },
      { name: "관리자 페이지 (회원·게시글 관리)", price: 5 },
    ],
  },
  {
    category: "쇼핑몰 & 결제",
    iconColor: "bg-amber-50 text-amber-600 dark:bg-amber-900/20 dark:text-amber-400",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121 0 2.09-.773 2.21-1.886L21 5.25H6.228" />
      </svg>
    ),
    features: [
      { name: "관리자 페이지 (결제 시스템 선택 시 필수)", price: 30 },
      { name: "주문 및 결제 시스템", price: 20 },
      { name: "장바구니", price: 3 },
      { name: "리뷰 시스템", price: 3 },
      { name: "쿠폰 / 할인 시스템", price: 3 },
      { name: "배송 관리", price: 5 },
    ],
  },
  {
    category: "기타",
    iconColor: "bg-slate-100 text-slate-600 dark:bg-slate-800/30 dark:text-slate-400",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
      </svg>
    ),
    features: [
      { name: "도메인 구매 및 관리", price: 5 },
      { name: "검색 노출 설정 (SEO)", price: 10 },
      { name: "기타 기능 요청", price: 0, consultation: true },
      { name: "직접 배포 및 호스팅", price: -10, discount: true },
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
  const [expandedGroups, setExpandedGroups] = useState<Set<string>>(new Set());
  const formRef = useRef<HTMLDivElement>(null);

  const toggleGroup = (name: string) => {
    setExpandedGroups((prev) => {
      const next = new Set(prev);
      next.has(name) ? next.delete(name) : next.add(name);
      return next;
    });
  };

  const toggleFeature = (featureName: string, quantifiable?: boolean) => {
    // Prevent manually deselecting admin if any dependent features are still selected
    if (featureName === SHOP_ADMIN) {
      const hasDeps = SHOP_ADMIN_DEPS.some((d) => d in selectedFeatures);
      if (hasDeps) return;
    }
    setSelectedFeatures((prev) => {
      const next = { ...prev };
      if (featureName in next) {
        delete next[featureName];
        // Auto-deselect admin if no more deps remain
        if (SHOP_ADMIN_DEPS.includes(featureName)) {
          const remaining = SHOP_ADMIN_DEPS.filter((d) => d !== featureName && d in next);
          if (remaining.length === 0) delete next[SHOP_ADMIN];
        }
      } else {
        next[featureName] = 1;
        // Auto-select admin when any dep is selected
        if (SHOP_ADMIN_DEPS.includes(featureName)) {
          next[SHOP_ADMIN] = 1;
        }
      }
      return next;
    });
  };

  const isShopBundleActive = SHOP_BUNDLE.every((name) => name in selectedFeatures);

  const toggleShopBundle = () => {
    setSelectedFeatures((prev) => {
      const next = { ...prev };
      if (isShopBundleActive) {
        SHOP_BUNDLE.forEach((name) => delete next[name]);
      } else {
        SHOP_BUNDLE.forEach((name) => { next[name] = 1; });
      }
      return next;
    });
  };

  const setQuantity = (featureName: string, qty: number) => {
    if (qty < 1) return;
    setSelectedFeatures((prev) => ({ ...prev, [featureName]: qty }));
  };

  const allFeatures = featureMenu.flatMap((c) =>
    c.features.flatMap((f) => (f.subFeatures ? f.subFeatures : [f]))
  );

  const totalPrice = BASE_PRICE + Object.entries(selectedFeatures).reduce((sum, [name, qty]) => {
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

    const addons = Object.entries(selectedFeatures)
      .map(([name, qty]) => {
        const f = allFeatures.find((feat) => feat.name === name);
        if (f?.quantifiable && qty > 1) return `${name} x${qty}`;
        return name;
      })
      .join(", ");

    const featureSummary = `기본 홈페이지 패키지 (3페이지+호스팅)${addons ? `, ${addons}` : ""}`;

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
          <h1 className="mb-4 text-3xl font-extrabold text-slate-900 dark:text-white sm:text-5xl">
            기능별 <span className="gradient-text">맞춤 견적</span>
          </h1>
          <p className="mx-auto max-w-2xl text-base text-slate-500 dark:text-emerald-200/60 sm:text-lg">
            필요한 기능만 골라서 합리적인 가격에.
            <br className="hidden sm:block" />
            고려대 보안 전공 개발팀이 직접 만들어서 가능한 가격입니다.
          </p>
        </div>

        {/* Base package (mandatory) */}
        <div className="mb-10">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-600 text-sm font-bold text-white">1</div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">기본 패키지 <span className="text-sm font-medium text-emerald-600 dark:text-emerald-400">(필수)</span></h2>
          </div>
          <div className="rounded-2xl border-2 border-emerald-400 bg-gradient-to-br from-emerald-50 to-teal-50 p-6 shadow-lg shadow-emerald-100/50 dark:border-emerald-500 dark:from-emerald-950/40 dark:to-teal-950/30 dark:shadow-emerald-900/20 sm:p-8">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-emerald-600 px-3 py-1 text-xs font-bold text-white">
                  필수 선택
                </div>
                <h3 className="mb-2 text-2xl font-extrabold text-slate-900 dark:text-white sm:text-3xl">
                  기본 홈페이지
                </h3>
                <p className="mb-4 text-sm text-slate-500 dark:text-emerald-200/60">
                  모든 프로젝트의 시작점. 호스팅까지 포함된 올인원 패키지.
                </p>
                <ul className="grid gap-2 sm:grid-cols-2">
                  {[
                    "메인 페이지 포함 3페이지 이내",
                    "웹 호스팅 제공",
                    "맞춤 디자인",
                    "소스 코드 제공",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-slate-600 dark:text-emerald-200/70">
                      <svg className="h-4 w-4 shrink-0 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="text-center sm:text-right">
                <div className="text-4xl font-extrabold text-emerald-600 dark:text-emerald-400 sm:text-5xl">
                  {BASE_PRICE}<span className="text-lg font-bold text-slate-400 dark:text-emerald-200/40">만원</span>
                </div>
                <p className="mt-1 text-xs text-slate-400 dark:text-emerald-200/30">기본 포함</p>
              </div>
            </div>
          </div>
        </div>

        {/* Step 2: Additional features */}
        <div className="mb-6">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-600 text-sm font-bold text-white">2</div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">추가 기능 선택 <span className="text-sm font-normal text-slate-400">(선택)</span></h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {featureMenu.map((cat) => (
              <div
                key={cat.category}
                className="rounded-2xl border border-slate-100 bg-white p-6 dark:border-emerald-800/20 dark:bg-emerald-900/10"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${cat.iconColor}`}>
                    {cat.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {cat.category}
                  </h3>
                </div>

                {/* Shop bundle preset — inside 쇼핑몰 & 결제 card */}
                {cat.category === "쇼핑몰 & 결제" && (
                  <div className={`mb-4 rounded-xl border-2 p-4 transition-all ${
                    isShopBundleActive
                      ? "border-amber-400 bg-amber-50/60 dark:border-amber-500/70 dark:bg-amber-900/15"
                      : "border-amber-200/70 bg-amber-50/40 dark:border-amber-700/40 dark:bg-amber-900/10"
                  }`}>
                    <div className="mb-3 flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-slate-900 dark:text-white">쇼핑몰 필수 세트</span>
                        <span className="rounded-full bg-amber-500 px-2 py-0.5 text-xs font-bold text-white">추천</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-base font-extrabold text-amber-600 dark:text-amber-400">
                          {allFeatures.filter((f) => SHOP_BUNDLE.includes(f.name)).reduce((s, f) => s + f.price, 0)}
                          <span className="text-xs font-bold text-slate-400">만원</span>
                        </span>
                        <button
                          onClick={toggleShopBundle}
                          className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-all hover:scale-105 ${
                            isShopBundleActive
                              ? "bg-slate-200 text-slate-600 hover:bg-slate-300 dark:bg-slate-700 dark:text-slate-300"
                              : "bg-amber-500 text-white shadow-sm shadow-amber-500/25 hover:bg-amber-600"
                          }`}
                        >
                          {isShopBundleActive ? "선택 해제" : "한 번에 선택"}
                        </button>
                      </div>
                    </div>
                    <p className="mb-2 text-xs text-slate-500 dark:text-amber-200/60">
                      쇼핑몰 구축 시 반드시 필요한 핵심 기능을 한 번에 선택합니다.
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {SHOP_BUNDLE.map((name) => (
                        <span key={name} className={`rounded-full px-2 py-0.5 text-xs font-medium transition-colors ${
                          name in selectedFeatures
                            ? "bg-amber-200 text-amber-800 dark:bg-amber-700/50 dark:text-amber-200"
                            : "bg-white/80 text-slate-400 dark:bg-slate-800/50 dark:text-slate-500"
                        }`}>
                          {name}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="space-y-2">
                  {cat.features.map((f) => {
                    // --- Dropdown group (e.g. 소셜 로그인 단일) ---
                    if (f.subFeatures) {
                      const isOpen = expandedGroups.has(f.name);
                      const selectedSubs = f.subFeatures.filter((s) => s.name in selectedFeatures);
                      const hasSelected = selectedSubs.length > 0;
                      return (
                        <div key={f.name}>
                          <button
                            onClick={() => toggleGroup(f.name)}
                            className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-left transition-all ${
                              hasSelected
                                ? "bg-emerald-50 border border-emerald-200 dark:bg-emerald-800/20 dark:border-emerald-700/50"
                                : "bg-slate-50 border border-transparent hover:bg-slate-100 dark:bg-emerald-900/5 dark:hover:bg-emerald-900/15"
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              <div className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md border-2 transition-colors ${
                                hasSelected ? "border-emerald-500 bg-emerald-500" : "border-slate-300 dark:border-emerald-700"
                              }`}>
                                {selectedSubs.length === f.subFeatures.length && (
                                  <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                  </svg>
                                )}
                                {hasSelected && selectedSubs.length < f.subFeatures.length && (
                                  <div className="h-2 w-2 rounded-sm bg-emerald-500" />
                                )}
                              </div>
                              <span className={`text-sm font-medium ${hasSelected ? "text-slate-800 dark:text-emerald-200" : "text-slate-600 dark:text-emerald-200/60"}`}>
                                {f.name}
                                {hasSelected && (
                                  <span className="ml-1.5 text-xs font-normal text-emerald-600 dark:text-emerald-400">
                                    ({selectedSubs.length}개 선택)
                                  </span>
                                )}
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className={`text-sm font-bold whitespace-nowrap ${hasSelected ? "text-emerald-600 dark:text-emerald-400" : "text-slate-400 dark:text-emerald-200/40"}`}>
                                {f.price}만원/개
                              </span>
                              <svg
                                className={`h-4 w-4 text-slate-400 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                              </svg>
                            </div>
                          </button>

                          {isOpen && (
                            <div className="ml-4 mt-1.5 space-y-1.5 border-l-2 border-emerald-100 pl-4 dark:border-emerald-800/40">
                              {f.subFeatures.map((sub) => {
                                const subSelected = sub.name in selectedFeatures;
                                return (
                                  <button
                                    key={sub.name}
                                    onClick={() => toggleFeature(sub.name)}
                                    className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left transition-all ${
                                      subSelected
                                        ? "bg-emerald-50 border border-emerald-200 dark:bg-emerald-800/20 dark:border-emerald-700/50"
                                        : "bg-slate-50 border border-transparent hover:bg-slate-100 dark:bg-emerald-900/5 dark:hover:bg-emerald-900/15"
                                    }`}
                                  >
                                    <div className="flex items-center gap-2.5">
                                      <div className={`flex h-4 w-4 shrink-0 items-center justify-center rounded border-2 transition-colors ${
                                        subSelected ? "border-emerald-500 bg-emerald-500" : "border-slate-300 dark:border-emerald-700"
                                      }`}>
                                        {subSelected && (
                                          <svg className="h-2.5 w-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                          </svg>
                                        )}
                                      </div>
                                      <span className={`text-sm ${subSelected ? "font-medium text-slate-800 dark:text-emerald-200" : "text-slate-500 dark:text-emerald-200/60"}`}>
                                        {sub.name.replace("소셜 로그인 ", "")}
                                      </span>
                                    </div>
                                    <span className={`text-xs font-bold ${subSelected ? "text-emerald-600 dark:text-emerald-400" : "text-slate-400 dark:text-emerald-200/40"}`}>
                                      {sub.price}만원
                                    </span>
                                  </button>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      );
                    }

                    // --- Normal feature ---
                    const selected = f.name in selectedFeatures;
                    const qty = selectedFeatures[f.name] || 1;
                    const isAutoSelected = f.name === SHOP_ADMIN && SHOP_ADMIN_DEPS.some((d) => d in selectedFeatures);
                    return (
                      <div key={f.name} className="flex items-center gap-2">
                        <button
                          onClick={() => toggleFeature(f.name, f.quantifiable)}
                          className={`flex flex-1 items-center justify-between rounded-xl px-4 py-3 text-left transition-all ${
                            selected
                              ? "bg-emerald-50 border border-emerald-200 dark:bg-emerald-800/20 dark:border-emerald-700/50"
                              : "bg-slate-50 border border-transparent hover:bg-slate-100 dark:bg-emerald-900/5 dark:hover:bg-emerald-900/15"
                          } ${isAutoSelected ? "cursor-default" : ""}`}
                        >
                          <div className="flex items-center gap-3">
                            <div className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md border-2 transition-colors ${
                              selected ? "border-emerald-500 bg-emerald-500" : "border-slate-300 dark:border-emerald-700"
                            }`}>
                              {selected && (
                                <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                              )}
                            </div>
                            <span className={`text-sm font-medium ${selected ? "text-slate-800 dark:text-emerald-200" : "text-slate-600 dark:text-emerald-200/60"}`}>
                              {f.quantifiable ? `${f.name} (1${f.unit}당)` : f.name}
                            </span>
                            {isAutoSelected && (
                              <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-semibold text-emerald-700 dark:bg-emerald-800/40 dark:text-emerald-300">
                                자동 선택
                              </span>
                            )}
                          </div>
                          <span className={`text-sm font-bold whitespace-nowrap ${
                            f.discount
                              ? selected ? "text-rose-500" : "text-rose-400/70"
                              : selected ? "text-emerald-600 dark:text-emerald-400" : "text-slate-400 dark:text-emerald-200/40"
                          }`}>
                            {f.consultation
                              ? "직접 상담"
                              : f.discount
                                ? `-${Math.abs(f.price)}만원`
                                : `${f.price}만원${f.quantifiable ? `/${f.unit}` : ""}`}
                          </span>
                        </button>

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
                  기본 패키지{selectedCount > 0 ? ` + ${selectedCount}개 추가 기능` : ""}
                </p>
                <p className="text-2xl font-extrabold text-slate-900 dark:text-white">
                  {totalPrice}<span className="text-base font-bold text-slate-500 dark:text-emerald-200/50">만원</span>
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
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-600 text-sm font-bold text-white">3</div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">유지보수 플랜 <span className="text-sm font-normal text-slate-400">(선택)</span></h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {maintenancePlans.map((plan) => {
              const isSelected = maintenancePlan === plan.name;
              return (
                <button
                  key={plan.name}
                  onClick={() => setMaintenancePlan(isSelected ? "" : plan.name)}
                  className={`relative rounded-2xl border-2 p-6 text-left transition-all hover:shadow-md ${
                    isSelected
                      ? "border-emerald-400 bg-emerald-50/60 shadow-md shadow-emerald-500/10 dark:border-emerald-500 dark:bg-emerald-900/20"
                      : "border-slate-200 bg-white hover:border-slate-300 dark:border-slate-700 dark:bg-emerald-900/10 dark:hover:border-slate-600"
                  }`}
                >
                  {plan.recommended && (
                    <span className="absolute -top-3 right-4 rounded-full bg-amber-500 px-3 py-1 text-xs font-bold text-white shadow-sm shadow-amber-500/30">
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
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-600 text-sm font-bold text-white">4</div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">견적 요청 정보 입력</h2>
          </div>

          <div className="rounded-2xl border border-slate-100 bg-white p-6 sm:p-8 dark:border-emerald-800/20 dark:bg-emerald-900/10">
            {/* Selected summary */}
            <div className="mb-6 rounded-xl bg-emerald-50/70 p-4 dark:bg-emerald-900/20">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">선택 요약</p>
              <div className="flex flex-wrap gap-1.5">
                <span className="rounded-full bg-emerald-200 px-3 py-1 text-xs font-bold text-emerald-800 dark:bg-emerald-700/40 dark:text-emerald-200">
                  기본 패키지 (3페이지+호스팅)
                </span>
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
                  <>견적 신청하기 (예상 {totalPrice}만원)</>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Note */}
        <div className="mx-auto max-w-3xl rounded-2xl border border-slate-100 bg-slate-50 p-6 dark:border-emerald-800/20 dark:bg-emerald-900/10 sm:p-8">
          <h3 className="mb-4 text-sm font-bold text-slate-700 dark:text-slate-300">
            안내사항
          </h3>
          <ul className="list-disc space-y-3 pl-5 text-sm leading-relaxed text-slate-500 dark:text-emerald-200/50">
            <li>
              기본 패키지에 포함된 호스팅은 최초 세팅 및 배포를 의미합니다. 이후 발생하는 월별 서버 운영 비용은 고객님께서 부담해 주시게 되며, 합리적인 서버 구성을 함께 안내해 드립니다.
            </li>
            <li>
              도메인은 종류에 따라 비용이 상이합니다. .com, .co.kr 등 인기 도메인이나 프리미엄 도메인의 경우 별도 비용이 발생할 수 있으며, 도메인 선택 시 상세히 안내드리겠습니다.
            </li>
            <li>
              모든 가격은 프로젝트 규모에 따라 달라질 수 있습니다. 정확한 견적은 상담 후 안내드립니다.
            </li>
            <li>
              위 가격은 업계 평균의 약 1/4 수준입니다.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
