import Link from "next/link";
import { readPortfolio } from "@/lib/portfolio";
import { notFound } from "next/navigation";

/* ──────────────────────────────────────────
   Shared data for each mock site
   ────────────────────────────────────────── */
const mockData: Record<string, {
  heroImg: string;
  brandName: string;
  tagline: string;
  heroDesc: string;
  imgs: string[];
  features: { icon: string; title: string; desc: string }[];
  testimonial: { quote: string; name: string; role: string };
}> = {
  "1": {
    heroImg: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1400&h=700&fit=crop",
    brandName: "NeuralX",
    tagline: "AI가 비즈니스를 바꿉니다",
    heroDesc: "차세대 인공지능 솔루션으로 데이터에서 인사이트를, 인사이트에서 성장을 이끌어냅니다.",
    imgs: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=500&fit=crop",
    ],
    features: [
      { icon: "🧠", title: "딥러닝 엔진", desc: "자체 개발 AI 모델로 99.2% 정확도" },
      { icon: "⚡", title: "실시간 처리", desc: "밀리초 단위 응답, 즉각 인사이트" },
      { icon: "🔒", title: "엔터프라이즈 보안", desc: "SOC2, ISO27001 인증 체계" },
      { icon: "📊", title: "대시보드", desc: "직관적 시각화, 한눈에 파악" },
      { icon: "🔗", title: "API 연동", desc: "RESTful API로 기존 시스템 통합" },
      { icon: "☁️", title: "클라우드 네이티브", desc: "AWS/GCP 멀티 클라우드 지원" },
    ],
    testimonial: {
      quote: "NeuralX 도입 후 매출 분석 시간이 80% 줄었습니다.",
      name: "김태현",
      role: "ABC 커머스 CTO",
    },
  },
  "2": {
    heroImg: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1400&h=700&fit=crop",
    brandName: "MAISON ÉLITE",
    tagline: "당신만의 스타일을 완성하세요",
    heroDesc: "전 세계 프리미엄 브랜드를 한곳에서. 감각적인 큐레이션으로 특별한 쇼핑 경험을 선사합니다.",
    imgs: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&h=600&fit=crop",
    ],
    features: [
      { icon: "👗", title: "200+ 브랜드", desc: "전 세계 럭셔리 브랜드 입점" },
      { icon: "🚀", title: "당일 배송", desc: "서울/경기 주문 시 당일 도착" },
      { icon: "💎", title: "정품 보증", desc: "100% 정품 보증 및 무료 반품" },
      { icon: "🎁", title: "VIP 혜택", desc: "멤버십 전용 시크릿 세일" },
    ],
    testimonial: {
      quote: "다른 편집숍과는 차원이 다른 큐레이션. MAISON ÉLITE에서만 구매합니다.",
      name: "박서연",
      role: "패션 블로거",
    },
  },
  "3": {
    heroImg: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400&h=700&fit=crop",
    brandName: "FlowDesk",
    tagline: "팀 생산성의 새로운 기준",
    heroDesc: "프로젝트 관리, 커뮤니케이션, 문서 협업을 하나의 플랫폼에서.",
    imgs: [
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=500&fit=crop",
    ],
    features: [
      { icon: "📋", title: "프로젝트 관리", desc: "칸반, 타임라인, 캘린더 뷰" },
      { icon: "💬", title: "팀 채팅", desc: "채널별 실시간 메시징" },
      { icon: "📄", title: "문서 협업", desc: "노션처럼 쓰는 팀 위키" },
      { icon: "🔗", title: "500+ 연동", desc: "Slack, GitHub, Figma 등" },
      { icon: "📈", title: "분석 리포트", desc: "팀 생산성 자동 측정" },
      { icon: "🛡️", title: "보안", desc: "엔터프라이즈급 데이터 보호" },
    ],
    testimonial: {
      quote: "FlowDesk 도입 후 회의 시간이 40% 줄고, 프로젝트 완료율이 2배 올랐습니다.",
      name: "이준호",
      role: "스타트업 PM",
    },
  },
  "4": {
    heroImg: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1400&h=700&fit=crop",
    brandName: "VitaTrack",
    tagline: "건강을 데이터로 관리하세요",
    heroDesc: "심박수, 수면, 운동, 영양까지. 웨어러블 연동 올인원 헬스케어 대시보드.",
    imgs: [
      "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=500&fit=crop",
    ],
    features: [
      { icon: "❤️", title: "심박 모니터링", desc: "24시간 실시간 추적" },
      { icon: "😴", title: "수면 분석", desc: "수면 패턴 개선 제안" },
      { icon: "🏃", title: "운동 추적", desc: "50+ 종목 자동 인식" },
      { icon: "🍎", title: "영양 관리", desc: "칼로리 자동 계산" },
    ],
    testimonial: {
      quote: "VitaTrack 덕분에 수면의 질이 확실히 좋아졌어요.",
      name: "정민수",
      role: "헬스 트레이너",
    },
  },
  "5": {
    heroImg: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1400&h=700&fit=crop",
    brandName: "ARCHI STUDIO",
    tagline: "공간에 이야기를 담다",
    heroDesc: "주거, 상업, 공공 건축까지. 건축 전문가 그룹이 당신의 공간을 설계합니다.",
    imgs: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop",
    ],
    features: [
      { icon: "📐", title: "맞춤 설계", desc: "100% 커스텀 설계" },
      { icon: "🏗️", title: "시공 관리", desc: "원스톱 서비스" },
      { icon: "🌿", title: "친환경", desc: "에너지 효율 최적화" },
      { icon: "🖥️", title: "3D 시뮬레이션", desc: "완공 전 미리 체험" },
    ],
    testimonial: {
      quote: "처음 3D 렌더링을 봤을 때 소름이 돋았어요. 완공 후에는 렌더링 그대로였습니다.",
      name: "최영진",
      role: "판교 주택 건축주",
    },
  },
  "6": {
    heroImg: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=1400&h=700&fit=crop",
    brandName: "그린마켓",
    tagline: "자연 그대로, 식탁 위로",
    heroDesc: "농장에서 식탁까지 48시간. 유기농 인증 식품만 엄선하여 정기 배송합니다.",
    imgs: [
      "https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=600&h=600&fit=crop",
    ],
    features: [
      { icon: "🌱", title: "유기농 인증", desc: "100% 인증 식품만 취급" },
      { icon: "🚛", title: "새벽 배송", desc: "밤 12시 주문, 아침 7시 도착" },
      { icon: "📦", title: "정기 구독", desc: "주 1~2회 맞춤 배송" },
      { icon: "♻️", title: "친환경 포장", desc: "재사용 보냉 패키지" },
    ],
    testimonial: {
      quote: "아이들 먹거리는 무조건 그린마켓. 진짜 맛이 다르고 신선해요.",
      name: "한지은",
      role: "두 아이 엄마",
    },
  },
};

/* ──────────────────────────────────────────
   Shared overlay components
   ────────────────────────────────────────── */
function BackButton() {
  return (
    <div className="fixed top-4 left-4 z-50">
      <Link
        href="/#portfolio"
        className="inline-flex items-center gap-2 rounded-full bg-black/70 px-4 py-2 text-sm font-medium text-white backdrop-blur-md transition-all hover:bg-black/90"
      >
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        OOi 포트폴리오
      </Link>
    </div>
  );
}

function OOiBadge() {
  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="rounded-full bg-emerald-500/90 px-4 py-2 text-xs font-bold text-white backdrop-blur-md shadow-lg">
        OOi 제작
      </div>
    </div>
  );
}

function TechStackBar({ tags }: { tags: string[] }) {
  return (
    <div className="border-b border-slate-200/50 bg-slate-50/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center gap-4 overflow-x-auto px-6 py-3">
        <span className="shrink-0 text-xs font-semibold uppercase tracking-wider text-slate-400">Tech Stack</span>
        <div className="flex gap-2">
          {tags.map((tag) => (
            <span key={tag} className="shrink-0 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function TechFooter({ tags, brandName }: { tags: string[]; brandName: string }) {
  return (
    <>
      <section className="bg-slate-900 py-20 px-6">
        <div className="mx-auto max-w-5xl text-center">
          <span className="mb-4 inline-block rounded-full bg-emerald-500/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-400">
            Technology
          </span>
          <h2 className="mb-4 text-3xl font-extrabold text-white">사용된 기술 스택</h2>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            {tags.map((tag) => (
              <div key={tag} className="rounded-2xl border border-slate-700 bg-slate-800 px-6 py-4 transition-all hover:border-emerald-500/50">
                <span className="text-lg font-bold text-white">{tag}</span>
              </div>
            ))}
          </div>
          <div className="mt-10 inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800 px-5 py-2.5">
            <span className="text-xs text-slate-400">제작</span>
            <Link href="/" className="text-sm font-bold text-emerald-400 hover:text-emerald-300">OOi</Link>
          </div>
        </div>
      </section>
      <footer className="border-t border-slate-100 bg-white py-8 px-6 text-center">
        <p className="text-sm text-slate-400">&copy; 2025 {brandName}. All rights reserved.</p>
        <p className="mt-2 text-xs text-slate-300">
          이 사이트는 <Link href="/" className="font-semibold text-emerald-500 hover:underline">OOi</Link>에서 제작했습니다
        </p>
      </footer>
    </>
  );
}

/* ──────────────────────────────────────────
   1. NeuralX — Dark futuristic theme
   ────────────────────────────────────────── */
function Site1({ d, tags }: { d: typeof mockData["1"]; tags: string[] }) {
  return (
    <div className="min-h-screen bg-[#0a0e1a] text-white">
      <BackButton /><OOiBadge />
      {/* Dark tech stack bar */}
      <div className="border-b border-cyan-900/30 bg-[#0d1224]">
        <div className="mx-auto flex max-w-7xl items-center gap-4 overflow-x-auto px-6 py-3">
          <span className="shrink-0 text-xs font-semibold uppercase tracking-wider text-cyan-500/60">Tech Stack</span>
          <div className="flex gap-2">
            {tags.map((t) => <span key={t} className="shrink-0 rounded-full border border-cyan-800/50 bg-cyan-950/50 px-3 py-1 text-xs font-semibold text-cyan-300">{t}</span>)}
          </div>
        </div>
      </div>
      {/* Nav */}
      <nav className="border-b border-white/5">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <span className="text-xl font-bold tracking-tight">{d.brandName}<span className="text-cyan-400">.</span></span>
          <div className="hidden items-center gap-8 md:flex">
            {["제품","기술","고객사","문의"].map(l => <span key={l} className="text-sm text-slate-400 cursor-default hover:text-white transition-colors">{l}</span>)}
            <span className="rounded-lg bg-cyan-500 px-5 py-2 text-sm font-semibold text-black">데모 신청</span>
          </div>
        </div>
      </nav>
      {/* Hero — no image, abstract gradient */}
      <section className="relative overflow-hidden py-32 px-6">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 left-1/4 h-[600px] w-[600px] rounded-full bg-cyan-500/10 blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 h-[400px] w-[400px] rounded-full bg-indigo-500/10 blur-[100px]" />
        </div>
        {/* Grid overlay */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: "linear-gradient(rgba(34,211,238,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.6) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }} />
        <div className="relative mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-800/50 bg-cyan-950/50 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-xs font-medium text-cyan-300">AI-Powered Analytics Platform</span>
          </div>
          <h1 className="mb-6 text-5xl font-extrabold leading-tight tracking-tight sm:text-7xl">
            {d.tagline.split("").map((c, i) => <span key={i} className={c === "A" || c === "I" ? "text-cyan-400" : ""}>{c}</span>)}
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-slate-400">{d.heroDesc}</p>
          <div className="flex justify-center gap-4">
            <span className="rounded-lg bg-cyan-500 px-8 py-4 text-base font-bold text-black cursor-default">무료 데모 시작</span>
            <span className="rounded-lg border border-slate-700 px-8 py-4 text-base font-medium text-slate-300 cursor-default">기술 문서 보기</span>
          </div>
        </div>
      </section>
      {/* Bento grid features */}
      <section className="px-6 pb-24">
        <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {d.features.map((f, i) => (
            <div key={f.title} className={`group rounded-2xl border border-white/5 bg-white/[0.02] p-8 backdrop-blur transition-all hover:border-cyan-500/30 hover:bg-cyan-500/5 ${i === 0 ? "sm:col-span-2 lg:col-span-1" : ""}`}>
              <div className="mb-4 text-3xl">{f.icon}</div>
              <h3 className="mb-2 text-lg font-bold text-white">{f.title}</h3>
              <p className="text-sm text-slate-400">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>
      {/* Data visual section */}
      <section className="border-y border-white/5 bg-white/[0.01] py-24 px-6">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="mb-4 inline-block text-xs font-bold uppercase tracking-widest text-cyan-500">Real-time Analytics</span>
            <h2 className="mb-4 text-3xl font-extrabold">데이터를 실시간으로<br/>시각화합니다</h2>
            <p className="mb-8 text-slate-400">수백만 건의 데이터를 밀리초 안에 처리하고, 직관적인 대시보드로 표현합니다.</p>
            <div className="grid grid-cols-3 gap-4">
              {[{ v: "99.2%", l: "정확도" }, { v: "50ms", l: "응답속도" }, { v: "10M+", l: "일일 처리" }].map(s => (
                <div key={s.l} className="rounded-xl border border-white/5 bg-white/[0.02] p-4 text-center">
                  <div className="text-2xl font-bold text-cyan-400">{s.v}</div>
                  <div className="mt-1 text-xs text-slate-500">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
          <img src={d.imgs[0]} alt="" className="rounded-2xl border border-white/5" loading="lazy" />
        </div>
      </section>
      {/* Testimonial */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-3xl rounded-2xl border border-white/5 bg-white/[0.02] p-10 text-center">
          <p className="mb-6 text-xl font-medium text-slate-300">&ldquo;{d.testimonial.quote}&rdquo;</p>
          <p className="font-bold text-white">{d.testimonial.name}</p>
          <p className="text-sm text-slate-500">{d.testimonial.role}</p>
        </div>
      </section>
      {/* Dark tech footer */}
      <section className="border-t border-white/5 bg-[#060a14] py-20 px-6">
        <div className="mx-auto max-w-5xl text-center">
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-wider text-cyan-500/60">Technology</span>
          <h2 className="mb-8 text-2xl font-bold text-white">사용된 기술 스택</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {tags.map(t => <span key={t} className="rounded-xl border border-cyan-800/40 bg-cyan-950/30 px-5 py-3 text-sm font-bold text-cyan-300">{t}</span>)}
          </div>
          <div className="mt-10 text-xs text-slate-600">
            제작 <Link href="/" className="font-bold text-cyan-500 hover:underline">OOi</Link> &middot; &copy; 2025 {d.brandName}
          </div>
        </div>
      </section>
    </div>
  );
}

/* ──────────────────────────────────────────
   2. MAISON ÉLITE — Editorial luxury
   ────────────────────────────────────────── */
function Site2({ d, tags }: { d: typeof mockData["2"]; tags: string[] }) {
  return (
    <div className="min-h-screen bg-[#faf8f5]">
      <BackButton /><OOiBadge />
      <TechStackBar tags={tags} />
      {/* Nav — serif, elegant */}
      <nav className="border-b border-stone-200/60">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-6">
          <span className="font-serif text-2xl font-light tracking-[0.2em] text-stone-900">{d.brandName}</span>
          <div className="hidden items-center gap-10 md:flex">
            {["NEW IN","WOMEN","MEN","SALE"].map(l => <span key={l} className="text-[11px] font-medium uppercase tracking-[0.15em] text-stone-500 cursor-default hover:text-stone-900 transition-colors">{l}</span>)}
          </div>
        </div>
      </nav>
      {/* Hero — full bleed split */}
      <section className="grid lg:grid-cols-2">
        <div className="flex items-center px-8 py-20 lg:px-16 lg:py-32">
          <div>
            <span className="mb-4 inline-block text-[10px] font-medium uppercase tracking-[0.2em] text-rose-400">2025 Collection</span>
            <h1 className="mb-6 font-serif text-5xl font-light leading-tight text-stone-900 lg:text-6xl">
              {d.tagline}
            </h1>
            <p className="mb-10 max-w-md text-base leading-relaxed text-stone-500">{d.heroDesc}</p>
            <span className="inline-block border-b-2 border-stone-900 pb-1 text-sm font-medium uppercase tracking-[0.15em] text-stone-900 cursor-default">
              컬렉션 보기
            </span>
          </div>
        </div>
        <div className="relative min-h-[500px] lg:min-h-0">
          <img src={d.heroImg} alt="" className="h-full w-full object-cover" loading="lazy" />
        </div>
      </section>
      {/* Editorial image grid */}
      <section className="px-8 py-20 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-rose-400">Curated</span>
              <h2 className="mt-2 font-serif text-3xl font-light text-stone-900">에디터 픽</h2>
            </div>
            <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-stone-400 cursor-default">View All →</span>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {d.imgs.map((img, i) => (
              <div key={i} className="group overflow-hidden">
                <div className="aspect-[3/4] overflow-hidden bg-stone-100">
                  <img src={img} alt="" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                </div>
                <div className="mt-3">
                  <p className="text-xs text-stone-400">Premium Brand</p>
                  <p className="text-sm font-medium text-stone-900">시즌 컬렉션 아이템</p>
                  <p className="mt-1 text-sm text-rose-500">₩189,000</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Features — horizontal */}
      <section className="border-y border-stone-200/60 bg-white">
        <div className="mx-auto grid max-w-7xl divide-y divide-stone-100 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
          {d.features.map(f => (
            <div key={f.title} className="px-8 py-10 text-center">
              <div className="mb-3 text-2xl">{f.icon}</div>
              <h3 className="mb-1 text-sm font-semibold text-stone-900">{f.title}</h3>
              <p className="text-xs text-stone-400">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>
      {/* Testimonial */}
      <section className="py-24 px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-serif text-2xl font-light leading-relaxed text-stone-700">&ldquo;{d.testimonial.quote}&rdquo;</p>
          <div className="mt-6">
            <p className="text-sm font-medium text-stone-900">{d.testimonial.name}</p>
            <p className="text-xs text-stone-400">{d.testimonial.role}</p>
          </div>
        </div>
      </section>
      <TechFooter tags={tags} brandName={d.brandName} />
    </div>
  );
}

/* ──────────────────────────────────────────
   3. FlowDesk — Modern SaaS
   ────────────────────────────────────────── */
function Site3({ d, tags }: { d: typeof mockData["3"]; tags: string[] }) {
  return (
    <div className="min-h-screen bg-white">
      <BackButton /><OOiBadge />
      <TechStackBar tags={tags} />
      {/* Nav */}
      <nav className="border-b border-slate-100">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <span className="text-xl font-extrabold text-indigo-600">{d.brandName}</span>
          <div className="hidden items-center gap-6 md:flex">
            {["기능","가격","고객사","블로그"].map(l => <span key={l} className="text-sm text-slate-500 cursor-default">{l}</span>)}
            <span className="rounded-lg bg-indigo-600 px-5 py-2 text-sm font-semibold text-white">무료 시작</span>
          </div>
        </div>
      </nav>
      {/* Hero — gradient bg, browser mockup */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-violet-50 py-24 px-6">
        <div className="relative mx-auto max-w-6xl text-center">
          {/* Social proof */}
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-indigo-100 bg-white px-5 py-2 shadow-sm">
            <div className="flex -space-x-2">
              {[...Array(4)].map((_, i) => <div key={i} className="h-6 w-6 rounded-full border-2 border-white bg-gradient-to-br from-indigo-400 to-violet-500" />)}
            </div>
            <span className="text-sm text-slate-600"><strong className="text-indigo-600">2,000+</strong> 팀이 사용 중</span>
          </div>
          <h1 className="mb-6 text-5xl font-extrabold leading-tight text-slate-900 sm:text-6xl">
            {d.tagline}
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-slate-500">{d.heroDesc}</p>
          <div className="flex justify-center gap-4">
            <span className="rounded-xl bg-indigo-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-indigo-500/30 cursor-default">14일 무료 체험</span>
            <span className="rounded-xl border border-slate-200 px-8 py-4 text-base font-semibold text-slate-700 cursor-default">데모 보기</span>
          </div>
          {/* Browser mockup */}
          <div className="mx-auto mt-16 max-w-4xl overflow-hidden rounded-2xl border border-slate-200 shadow-2xl shadow-indigo-500/10">
            <div className="flex items-center gap-2 bg-slate-100 px-4 py-3">
              <div className="flex gap-1.5"><div className="h-3 w-3 rounded-full bg-red-400" /><div className="h-3 w-3 rounded-full bg-yellow-400" /><div className="h-3 w-3 rounded-full bg-green-400" /></div>
              <div className="ml-4 flex-1 rounded-md bg-white px-3 py-1 text-xs text-slate-400">app.flowdesk.io</div>
            </div>
            <img src={d.imgs[0]} alt="" className="w-full" loading="lazy" />
          </div>
        </div>
      </section>
      {/* Features grid */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-center text-3xl font-extrabold text-slate-900">올인원 워크스페이스</h2>
          <p className="mx-auto mb-16 max-w-xl text-center text-slate-500">흩어진 도구들을 하나로. 팀에 필요한 모든 것이 여기에.</p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {d.features.map(f => (
              <div key={f.title} className="rounded-2xl border border-slate-100 bg-slate-50 p-8 transition-all hover:border-indigo-200 hover:bg-indigo-50/50 hover:shadow-lg">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100 text-2xl">{f.icon}</div>
                <h3 className="mb-2 text-lg font-bold text-slate-900">{f.title}</h3>
                <p className="text-sm text-slate-500">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Pricing teaser */}
      <section className="border-y border-slate-100 bg-slate-50 py-24 px-6">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-center text-3xl font-extrabold text-slate-900">심플한 가격 정책</h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {[{ name: "Free", price: "₩0", desc: "5명까지 무료" }, { name: "Pro", price: "₩15,000", desc: "사용자당/월", pop: true }, { name: "Enterprise", price: "맞춤", desc: "대기업 전용" }].map(p => (
              <div key={p.name} className={`rounded-2xl border p-8 text-center ${p.pop ? "border-indigo-300 bg-white shadow-xl" : "border-slate-200 bg-white"}`}>
                {p.pop && <span className="mb-3 inline-block rounded-full bg-indigo-600 px-3 py-0.5 text-[10px] font-bold text-white">POPULAR</span>}
                <h3 className="mb-1 text-lg font-bold text-slate-900">{p.name}</h3>
                <div className="mb-2 text-3xl font-extrabold text-slate-900">{p.price}</div>
                <p className="text-sm text-slate-400">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Testimonial */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-3xl rounded-2xl bg-indigo-50 p-10 text-center">
          <p className="mb-6 text-xl font-medium text-slate-700">&ldquo;{d.testimonial.quote}&rdquo;</p>
          <p className="font-bold text-slate-900">{d.testimonial.name}</p>
          <p className="text-sm text-slate-500">{d.testimonial.role}</p>
        </div>
      </section>
      <TechFooter tags={tags} brandName={d.brandName} />
    </div>
  );
}

/* ──────────────────────────────────────────
   4. VitaTrack — Soft dashboard / health app
   ────────────────────────────────────────── */
function Site4({ d, tags }: { d: typeof mockData["4"]; tags: string[] }) {
  return (
    <div className="min-h-screen bg-blue-50/30">
      <BackButton /><OOiBadge />
      <TechStackBar tags={tags} />
      {/* Nav */}
      <nav className="bg-white/80 backdrop-blur border-b border-blue-100/50">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <span className="text-xl font-extrabold text-blue-600">{d.brandName}</span>
          <div className="hidden items-center gap-6 md:flex">
            {["기능","요금","후기","다운로드"].map(l => <span key={l} className="text-sm text-slate-500 cursor-default">{l}</span>)}
            <span className="rounded-full bg-blue-600 px-6 py-2 text-sm font-semibold text-white">시작하기</span>
          </div>
        </div>
      </nav>
      {/* Hero — split with phone mockup */}
      <section className="py-20 px-6">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-1.5">
              <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-xs font-semibold text-blue-700">건강 관리의 새로운 방법</span>
            </div>
            <h1 className="mb-6 text-4xl font-extrabold text-slate-900 sm:text-5xl">{d.tagline}</h1>
            <p className="mb-8 text-lg text-slate-500">{d.heroDesc}</p>
            <div className="flex gap-3">
              <span className="rounded-full bg-blue-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 cursor-default">무료로 시작</span>
              <span className="rounded-full border border-slate-200 bg-white px-8 py-3.5 text-sm font-semibold text-slate-700 cursor-default">영상 보기</span>
            </div>
          </div>
          {/* Phone mockup */}
          <div className="flex justify-center">
            <div className="w-[280px] rounded-[2.5rem] border-8 border-slate-800 bg-white p-4 shadow-2xl">
              <div className="mx-auto mb-4 h-5 w-20 rounded-full bg-slate-800" />
              <img src={d.imgs[0]} alt="" className="w-full rounded-2xl" loading="lazy" />
            </div>
          </div>
        </div>
      </section>
      {/* Health metric cards */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-3xl font-extrabold text-slate-900">한눈에 보는 내 건강</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {d.features.map((f, i) => {
              const colors = ["bg-red-50 border-red-100 text-red-500", "bg-indigo-50 border-indigo-100 text-indigo-500", "bg-emerald-50 border-emerald-100 text-emerald-500", "bg-amber-50 border-amber-100 text-amber-500"];
              const vals = ["72 BPM", "7.5시간", "45분", "1,850kcal"];
              return (
                <div key={f.title} className={`rounded-3xl border p-6 ${colors[i]}`}>
                  <div className="mb-3 text-3xl">{f.icon}</div>
                  <div className="mb-1 text-2xl font-extrabold text-slate-900">{vals[i]}</div>
                  <h3 className="mb-1 text-sm font-bold text-slate-700">{f.title}</h3>
                  <p className="text-xs text-slate-500">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* Image section */}
      <section className="py-20 px-6">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <img src={d.imgs[1]} alt="" className="rounded-3xl shadow-xl" loading="lazy" />
          <div>
            <h2 className="mb-4 text-3xl font-extrabold text-slate-900">AI가 분석하는<br/>맞춤 건강 리포트</h2>
            <p className="mb-6 text-slate-500">축적된 데이터를 AI가 분석하여 맞춤형 건강 리포트와 개선 방안을 제안합니다.</p>
            <div className="space-y-3">
              {["주간/월간 건강 트렌드 분석", "개인 맞춤 운동 추천", "수면 패턴 최적화 가이드"].map(t => (
                <div key={t} className="flex items-center gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100">
                    <svg className="h-3.5 w-3.5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                  </div>
                  <span className="text-sm text-slate-700">{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Testimonial */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-2xl rounded-3xl bg-white p-10 text-center shadow-sm border border-blue-100/50">
          <p className="mb-6 text-xl font-medium text-slate-700">&ldquo;{d.testimonial.quote}&rdquo;</p>
          <p className="font-bold text-slate-900">{d.testimonial.name}</p>
          <p className="text-sm text-slate-400">{d.testimonial.role}</p>
        </div>
      </section>
      <TechFooter tags={tags} brandName={d.brandName} />
    </div>
  );
}

/* ──────────────────────────────────────────
   5. ARCHI STUDIO — Minimal gallery
   ────────────────────────────────────────── */
function Site5({ d, tags }: { d: typeof mockData["5"]; tags: string[] }) {
  return (
    <div className="min-h-screen bg-white">
      <BackButton /><OOiBadge />
      <TechStackBar tags={tags} />
      {/* Nav — ultra minimal */}
      <nav className="border-b border-stone-100">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-6">
          <span className="text-sm font-bold uppercase tracking-[0.3em] text-stone-900">{d.brandName}</span>
          <div className="hidden items-center gap-10 md:flex">
            {["PROJECTS","ABOUT","CONTACT"].map(l => <span key={l} className="text-[11px] uppercase tracking-[0.15em] text-stone-400 cursor-default hover:text-stone-900 transition-colors">{l}</span>)}
          </div>
        </div>
      </nav>
      {/* Hero — full bleed image, text below */}
      <section>
        <div className="relative h-[70vh] overflow-hidden">
          <img src={d.heroImg} alt="" className="h-full w-full object-cover" loading="lazy" />
        </div>
        <div className="mx-auto max-w-5xl px-8 py-16">
          <h1 className="mb-4 text-4xl font-light text-stone-900 sm:text-5xl">{d.tagline}</h1>
          <p className="max-w-2xl text-lg text-stone-400">{d.heroDesc}</p>
        </div>
      </section>
      {/* Project gallery — masonry-like grid */}
      <section className="px-8 pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 border-b border-stone-100 pb-4">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-stone-400">Selected Projects</span>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {d.imgs.map((img, i) => {
              const labels = ["모던 레지던스","상업 공간","럭셔리 빌라","미니멀 하우스","펜트하우스","가든 하우스"];
              return (
                <div key={i} className={`group overflow-hidden ${i === 0 ? "sm:col-span-2 sm:row-span-2" : ""}`}>
                  <div className={`relative overflow-hidden bg-stone-100 ${i === 0 ? "aspect-square" : "aspect-[4/3]"}`}>
                    <img src={img} alt="" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                    <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/20" />
                    <div className="absolute bottom-0 left-0 right-0 translate-y-full p-6 transition-transform group-hover:translate-y-0">
                      <span className="text-sm font-medium text-white">{labels[i] || "프로젝트"}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* Services — horizontal strip */}
      <section className="border-y border-stone-100">
        <div className="mx-auto grid max-w-7xl sm:grid-cols-2 lg:grid-cols-4">
          {d.features.map((f, i) => (
            <div key={f.title} className={`px-8 py-12 ${i < 3 ? "border-r border-stone-100" : ""}`}>
              <span className="mb-4 block text-3xl text-stone-300">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mb-2 text-base font-bold text-stone-900">{f.title}</h3>
              <p className="text-sm text-stone-400">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>
      {/* Testimonial */}
      <section className="py-24 px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-8 text-2xl font-light leading-relaxed text-stone-700">&ldquo;{d.testimonial.quote}&rdquo;</p>
          <p className="text-sm font-medium text-stone-900">{d.testimonial.name}</p>
          <p className="text-xs text-stone-400">{d.testimonial.role}</p>
        </div>
      </section>
      <TechFooter tags={tags} brandName={d.brandName} />
    </div>
  );
}

/* ──────────────────────────────────────────
   6. 그린마켓 — Warm organic food
   ────────────────────────────────────────── */
function Site6({ d, tags }: { d: typeof mockData["6"]; tags: string[] }) {
  return (
    <div className="min-h-screen bg-[#fefcf3]">
      <BackButton /><OOiBadge />
      <TechStackBar tags={tags} />
      {/* Nav — warm, friendly */}
      <nav className="border-b border-green-100/60 bg-white/60 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <span className="text-xl font-extrabold text-green-700">{d.brandName} 🌿</span>
          <div className="hidden items-center gap-6 md:flex">
            {["신선 식품","정기 구독","레시피","이벤트"].map(l => <span key={l} className="text-sm text-stone-500 cursor-default hover:text-green-700 transition-colors">{l}</span>)}
            <span className="rounded-full bg-green-600 px-5 py-2 text-sm font-semibold text-white">장보기</span>
          </div>
        </div>
      </nav>
      {/* Hero — full image with curved bottom overlay */}
      <section className="relative overflow-hidden">
        <img src={d.heroImg} alt="" className="h-[500px] w-full object-cover sm:h-[600px]" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#fefcf3] via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 px-6 pb-12 pt-20 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2">
            <span className="text-sm font-bold text-green-700">🌱 유기농 인증 식품 전문</span>
          </div>
          <h1 className="mb-4 text-4xl font-extrabold text-stone-900 sm:text-5xl">{d.tagline}</h1>
          <p className="mx-auto mb-8 max-w-xl text-base text-stone-600">{d.heroDesc}</p>
          <span className="inline-block rounded-full bg-green-600 px-8 py-4 text-base font-bold text-white shadow-lg shadow-green-500/30 cursor-default">
            첫 주문 30% 할인 →
          </span>
        </div>
      </section>
      {/* Product grid */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-2 text-center text-2xl font-extrabold text-stone-900">이번 주 추천 상품</h2>
          <p className="mb-12 text-center text-sm text-stone-500">매주 화요일 업데이트</p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {d.imgs.slice(2).map((img, i) => {
              const products = [
                { name: "유기농 방울토마토", price: "4,900" },
                { name: "무농약 바나나", price: "5,500" },
                { name: "제주 감귤", price: "8,900" },
                { name: "유기농 블루베리", price: "7,200" },
              ];
              const p = products[i] || products[0];
              return (
                <div key={i} className="group overflow-hidden rounded-3xl bg-white shadow-sm border border-green-100/50 transition-all hover:shadow-md">
                  <div className="aspect-square overflow-hidden bg-green-50">
                    <img src={img} alt="" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                  </div>
                  <div className="p-5">
                    <div className="mb-1 inline-block rounded-full bg-green-100 px-2 py-0.5 text-[10px] font-bold text-green-700">유기농</div>
                    <h3 className="text-sm font-bold text-stone-900">{p.name}</h3>
                    <p className="mt-1 text-lg font-extrabold text-green-700">₩{p.price}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* How it works */}
      <section className="border-y border-green-100/60 bg-white py-20 px-6">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-12 text-center text-2xl font-extrabold text-stone-900">이렇게 배송됩니다</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {d.features.map((f, i) => (
              <div key={f.title} className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-3xl">
                  {f.icon}
                </div>
                <div className="mb-2 text-xs font-bold text-green-600">STEP {i + 1}</div>
                <h3 className="mb-1 text-base font-bold text-stone-900">{f.title}</h3>
                <p className="text-sm text-stone-500">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Large promo */}
      <section className="py-20 px-6">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
          <img src={d.imgs[1]} alt="" className="rounded-3xl shadow-lg" loading="lazy" />
          <div>
            <span className="mb-2 inline-block text-sm font-bold text-green-600">🥬 정기 구독 박스</span>
            <h2 className="mb-4 text-3xl font-extrabold text-stone-900">매주 신선한 제철 식재료를<br/>문 앞에서 만나세요</h2>
            <p className="mb-6 text-stone-500">매주/격주 단위로 엄선된 제철 식재료가 배송됩니다. 언제든 건너뛰기 가능.</p>
            <span className="inline-block rounded-full bg-green-600 px-6 py-3 text-sm font-bold text-white cursor-default">구독 시작하기</span>
          </div>
        </div>
      </section>
      {/* Testimonial */}
      <section className="py-16 px-6">
        <div className="mx-auto max-w-2xl rounded-3xl bg-green-50 p-10 text-center border border-green-100">
          <p className="mb-6 text-xl font-medium text-stone-700">&ldquo;{d.testimonial.quote}&rdquo;</p>
          <p className="font-bold text-stone-900">{d.testimonial.name}</p>
          <p className="text-sm text-stone-400">{d.testimonial.role}</p>
        </div>
      </section>
      <TechFooter tags={tags} brandName={d.brandName} />
    </div>
  );
}

/* ──────────────────────────────────────────
   Main page component
   ────────────────────────────────────────── */
export default async function PortfolioDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const items = await readPortfolio();
  const item = items.find((i) => i.id === id);
  const d = mockData[id];

  if (!item || !d) return notFound();

  const tags = item.tags;

  switch (id) {
    case "1": return <Site1 d={d} tags={tags} />;
    case "2": return <Site2 d={d} tags={tags} />;
    case "3": return <Site3 d={d} tags={tags} />;
    case "4": return <Site4 d={d} tags={tags} />;
    case "5": return <Site5 d={d} tags={tags} />;
    case "6": return <Site6 d={d} tags={tags} />;
    default: return notFound();
  }
}
