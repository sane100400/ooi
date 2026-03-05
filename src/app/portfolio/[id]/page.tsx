import Link from "next/link";
import { readPortfolio } from "@/lib/portfolio";
import { notFound } from "next/navigation";

/* ── Shared overlays only ── */
function BackButton() {
  return (
    <div className="fixed top-4 left-4 z-50">
      <Link href="/#portfolio" className="inline-flex items-center gap-2 rounded-full bg-black/70 px-4 py-2 text-sm font-medium text-white backdrop-blur-md hover:bg-black/90">
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
        포트폴리오
      </Link>
    </div>
  );
}
function Badge() {
  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="rounded-full bg-emerald-500/90 px-4 py-2 text-xs font-bold text-white backdrop-blur-md shadow-lg">OOi 제작</div>
    </div>
  );
}
function Credit({ brand, dark }: { brand: string; dark?: boolean }) {
  return (
    <footer className={`py-10 px-6 text-center ${dark ? "bg-slate-950 border-t border-white/5" : "border-t border-slate-100"}`}>
      <p className={`text-sm ${dark ? "text-slate-500" : "text-slate-400"}`}>&copy; 2025 {brand}</p>
      <p className={`mt-1 text-xs ${dark ? "text-slate-600" : "text-slate-300"}`}>
        Designed &amp; Built by <Link href="/" className="font-semibold text-emerald-500 hover:underline">OOi</Link>
      </p>
    </footer>
  );
}

/* ════════════════════════════════════════════
   1. NeuralX — 사이버펑크 / 터미널 AI 기업
   ════════════════════════════════════════════ */
function Site1() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-green-300" style={{ fontFamily: "'Courier New', monospace" }}>
      <BackButton /><Badge />

      {/* Scanline overlay */}
      <div className="pointer-events-none fixed inset-0 z-40 opacity-[0.03]" style={{
        background: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,100,0.1) 2px, rgba(0,255,100,0.1) 4px)",
      }} />

      {/* Nav — terminal style */}
      <nav className="border-b border-green-900/40 bg-black/60 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
            <span className="text-lg font-bold tracking-wider text-green-400">NEURAL<span className="text-cyan-400">X</span></span>
          </div>
          <div className="hidden items-center gap-6 md:flex">
            {["제품","솔루션","리소스","API_DOCS"].map(l => (
              <span key={l} className="text-xs tracking-widest text-green-600 cursor-default hover:text-green-400 transition-colors">
                {`> ${l}`}
              </span>
            ))}
            <span className="rounded border border-cyan-500/50 bg-cyan-500/10 px-4 py-1.5 text-xs font-bold text-cyan-400 cursor-default">
              DEMO_ACCESS
            </span>
          </div>
        </div>
      </nav>

      {/* Hero — code/matrix themed */}
      <section className="relative overflow-hidden px-6 py-28 sm:py-40">
        {/* Animated grid background */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: "linear-gradient(rgba(0,255,100,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,100,0.8) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }} />
        {/* Glowing orbs */}
        <div className="pointer-events-none absolute -top-20 left-1/3 h-[500px] w-[500px] rounded-full bg-green-500/5 blur-[150px]" />
        <div className="pointer-events-none absolute bottom-0 right-1/4 h-[300px] w-[300px] rounded-full bg-cyan-500/5 blur-[100px]" />

        <div className="relative mx-auto max-w-5xl">
          {/* Terminal-style status bar */}
          <div className="mb-8 inline-flex items-center gap-3 rounded border border-green-800/50 bg-green-950/50 px-5 py-2.5 font-mono">
            <span className="text-[10px] text-green-700">[STATUS]</span>
            <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs text-green-500">SYSTEM ONLINE — v4.2.1 — LATENCY: 12ms</span>
          </div>

          <h1 className="mb-8 text-5xl font-extrabold leading-tight tracking-tight sm:text-7xl">
            <span className="text-green-500">데이터에서</span> <span className="text-cyan-400">인사이트</span>를,
            <br />인사이트에서 <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-cyan-400 to-green-300">성장</span>
              <span className="absolute -bottom-1 left-0 h-px w-full bg-gradient-to-r from-green-400 to-cyan-400" />
            </span>을
          </h1>

          <p className="mb-10 max-w-2xl text-base leading-relaxed text-green-700" style={{ fontFamily: "system-ui, sans-serif" }}>
            차세대 인공지능 솔루션으로 비즈니스 의사결정을 자동화하세요.
            실시간 데이터 처리부터 예측 분석까지, 올인원 AI 플랫폼을 제공합니다.
          </p>

          <div className="flex gap-4">
            <span className="rounded border border-green-500 bg-green-500/10 px-8 py-3.5 text-sm font-bold text-green-400 shadow-[0_0_20px_rgba(34,197,94,0.15)] cursor-default">
              $ initialize --demo
            </span>
            <span className="rounded border border-green-900/50 px-8 py-3.5 text-sm text-green-600 cursor-default">
              docs --api →
            </span>
          </div>
        </div>
      </section>

      {/* Live terminal output section */}
      <section className="border-y border-green-900/30 bg-black/40 py-16 px-6">
        <div className="mx-auto max-w-4xl">
          <div className="overflow-hidden rounded-lg border border-green-900/40 bg-black">
            {/* Terminal header */}
            <div className="flex items-center gap-2 border-b border-green-900/30 px-4 py-2.5 bg-green-950/20">
              <div className="flex gap-1.5">
                <div className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
                <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
                <div className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
              </div>
              <span className="ml-3 text-[10px] text-green-700">neuralx@analytics:~/dashboard</span>
            </div>
            {/* Terminal body */}
            <div className="p-5 text-xs leading-relaxed">
              <p className="text-green-700">$ neuralx analyze --source=production --model=v4</p>
              <p className="mt-2 text-green-600">[INFO] Connecting to data pipeline...</p>
              <p className="text-green-600">[INFO] Loading model weights (2.4GB)...</p>
              <p className="text-cyan-500">[DONE] Model loaded in 0.8s</p>
              <p className="mt-2 text-green-600">[PROCESS] Analyzing 10,847,291 records...</p>
              <p className="text-cyan-400">[RESULT] Accuracy: 99.2% | Anomalies detected: 47</p>
              <p className="text-cyan-400">[RESULT] Revenue prediction: +23.4% (confidence: 97.1%)</p>
              <p className="mt-2 text-green-500">$ <span className="animate-pulse">█</span></p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature grid — hexagonal / data-node style */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12">
            <span className="text-[10px] uppercase tracking-[0.3em] text-green-700">[CAPABILITIES]</span>
            <h2 className="mt-2 text-3xl font-bold text-green-400" style={{ fontFamily: "system-ui, sans-serif" }}>핵심 모듈</h2>
          </div>
          <div className="grid gap-px bg-green-900/20 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: "🧠", code: "AI_CORE", title: "딥러닝 엔진", desc: "자체 개발 AI 모델로 99.2% 정확도를 달성합니다.", stat: "99.2%" },
              { icon: "⚡", code: "RT_PROC", title: "실시간 처리", desc: "밀리초 단위 응답으로 즉각적인 인사이트를 확인하세요.", stat: "<50ms" },
              { icon: "🔒", code: "SEC_MOD", title: "엔터프라이즈 보안", desc: "SOC2, ISO27001 인증 보안 체계를 갖추고 있습니다.", stat: "SOC2" },
              { icon: "📊", code: "VIS_DAT", title: "시각화 대시보드", desc: "복잡한 데이터를 직관적인 차트로 한눈에 파악하세요.", stat: "100+" },
              { icon: "🔗", code: "API_INT", title: "API 연동", desc: "RESTful API로 기존 시스템과 빠르게 통합합니다.", stat: "REST" },
              { icon: "☁️", code: "CLD_DEP", title: "멀티 클라우드", desc: "AWS, GCP, Azure 등 원하는 클라우드에 배포합니다.", stat: "3+" },
            ].map(f => (
              <div key={f.code} className="group bg-[#0a0a0f] p-8 transition-all hover:bg-green-500/[0.03]">
                <div className="mb-4 flex items-center gap-3">
                  <span className="text-2xl">{f.icon}</span>
                  <span className="rounded bg-green-950/50 px-2 py-0.5 text-[9px] tracking-wider text-green-700 border border-green-900/30">{f.code}</span>
                </div>
                <h3 className="mb-2 text-lg font-bold text-green-300" style={{ fontFamily: "system-ui, sans-serif" }}>{f.title}</h3>
                <p className="text-sm leading-relaxed text-green-800" style={{ fontFamily: "system-ui, sans-serif" }}>{f.desc}</p>
                <div className="mt-4 text-2xl font-extrabold text-cyan-400/70">{f.stat}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats — holographic style */}
      <section className="border-y border-green-900/30 py-20 px-6">
        <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-12">
          {[
            { v: "99.2%", l: "모델 정확도", c: "text-green-400" },
            { v: "<50ms", l: "평균 응답 속도", c: "text-cyan-400" },
            { v: "10M+", l: "일일 처리 건수", c: "text-green-400" },
            { v: "99.99%", l: "가동률", c: "text-cyan-400" },
          ].map(s => (
            <div key={s.l} className="text-center">
              <div className={`text-4xl font-extrabold ${s.c}`} style={{ textShadow: "0 0 30px currentColor" }}>{s.v}</div>
              <div className="mt-2 text-xs tracking-wider text-green-800">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center">
        <div className="mx-auto max-w-2xl">
          <p className="mb-4 text-xs tracking-[0.3em] text-green-700">[DEPLOYMENT_READY]</p>
          <h2 className="mb-4 text-3xl font-bold text-green-400" style={{ fontFamily: "system-ui, sans-serif" }}>지금 바로 시작하세요</h2>
          <p className="mb-8 text-sm text-green-800" style={{ fontFamily: "system-ui, sans-serif" }}>
            14일 무료 체험. 카드 등록 없음. 즉시 배포 가능.
          </p>
          <span className="inline-block rounded border border-cyan-500 bg-cyan-500/10 px-10 py-4 text-sm font-bold text-cyan-400 shadow-[0_0_30px_rgba(6,182,212,0.15)] cursor-default">
            $ neuralx init --free-trial
          </span>
        </div>
      </section>
      <Credit brand="NeuralX" dark />
    </div>
  );
}

/* ════════════════════════════════════════════
   2. MAISON ÉLITE — 하이패션 에디토리얼 쇼핑몰
   ════════════════════════════════════════════ */
function Site2() {
  const products = [
    { img: "https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?w=400&h=600&fit=crop", name: "캐시미어 오버코트", price: "₩890,000", tag: "NEW" },
    { img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400&h=600&fit=crop", name: "실크 블라우스", price: "₩320,000", tag: null },
    { img: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&h=600&fit=crop", name: "테일러드 재킷", price: "₩580,000", tag: "BEST" },
    { img: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&h=600&fit=crop", name: "플리츠 스커트", price: "₩270,000", tag: null },
  ];
  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white">
      <BackButton /><Badge />

      {/* Nav — ultra minimal, contrast */}
      <nav className="border-b border-white/5">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-10 py-8">
          <span className="text-[28px] font-extralight tracking-[0.4em] text-white" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
            MAISON ÉLITE
          </span>
          <div className="hidden items-center gap-12 md:flex">
            {["COLLECTION","LOOKBOOK","ABOUT"].map(l => (
              <span key={l} className="text-[10px] font-light tracking-[0.25em] text-white/40 cursor-default hover:text-white transition-colors duration-500">{l}</span>
            ))}
            <span className="text-[10px] tracking-[0.15em] text-white/60 cursor-default">BAG (0)</span>
          </div>
        </div>
      </nav>

      {/* Hero — full bleed cinematic */}
      <section className="relative h-screen max-h-[900px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1200&h=900&fit=crop"
          alt="" className="h-full w-full object-cover scale-105" loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-black/40 to-transparent" />

        {/* Oversized title */}
        <div className="absolute bottom-20 left-10 right-10 sm:left-16">
          <p className="mb-4 text-[10px] font-light tracking-[0.4em] text-white/50">2025 SPRING / SUMMER</p>
          <h1 className="text-6xl font-extralight leading-[0.95] tracking-tight sm:text-8xl lg:text-[120px]" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
            Eternal
            <br />
            <span className="italic font-light">Elegance</span>
          </h1>
          <div className="mt-8 flex items-center gap-6">
            <span className="border-b border-white/50 pb-1 text-[11px] tracking-[0.2em] text-white/70 cursor-default">EXPLORE COLLECTION</span>
            <span className="text-[11px] text-white/30">—</span>
            <span className="text-[11px] tracking-[0.15em] text-white/40">SS25</span>
          </div>
        </div>
      </section>

      {/* Statement text */}
      <section className="py-32 px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-3xl font-extralight leading-relaxed text-white/70 sm:text-4xl" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
            &ldquo;시간이 지나도<br />변하지 않는 가치를<br />추구합니다&rdquo;
          </p>
          <div className="mx-auto mt-10 h-px w-12 bg-white/20" />
        </div>
      </section>

      {/* Product grid — editorial layout */}
      <section className="px-6 pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 flex items-center justify-between px-4">
            <span className="text-[10px] tracking-[0.3em] text-white/30">EDITOR&apos;S PICK</span>
            <span className="text-[10px] tracking-[0.2em] text-white/30 cursor-default">VIEW ALL →</span>
          </div>
          {/* Asymmetric grid */}
          <div className="grid gap-6 sm:grid-cols-12">
            {/* Large item */}
            <div className="group sm:col-span-7">
              <div className="relative aspect-[3/4] overflow-hidden">
                <img src={products[0].img} alt="" className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-[1.03]" loading="lazy" />
                <div className="absolute inset-0 bg-black/0 transition-colors duration-700 group-hover:bg-black/20" />
                {products[0].tag && <span className="absolute top-6 left-6 text-[9px] tracking-[0.3em] text-white/80">{products[0].tag}</span>}
              </div>
              <div className="mt-5 flex items-baseline justify-between px-1">
                <span className="text-sm font-light tracking-wide text-white/60">{products[0].name}</span>
                <span className="text-sm text-white/40">{products[0].price}</span>
              </div>
            </div>
            {/* Stacked small items */}
            <div className="flex flex-col gap-6 sm:col-span-5">
              {products.slice(1, 3).map((p, i) => (
                <div key={i} className="group flex-1">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img src={p.img} alt="" className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-[1.03]" loading="lazy" />
                    <div className="absolute inset-0 bg-black/0 transition-colors duration-700 group-hover:bg-black/20" />
                    {p.tag && <span className="absolute top-4 left-4 text-[9px] tracking-[0.3em] text-white/80">{p.tag}</span>}
                  </div>
                  <div className="mt-4 flex items-baseline justify-between px-1">
                    <span className="text-xs font-light tracking-wide text-white/60">{p.name}</span>
                    <span className="text-xs text-white/40">{p.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Full-width lookbook — overlapping text */}
      <section className="relative">
        <img src="https://images.unsplash.com/photo-1445205170230-053b83016050?w=1200&h=500&fit=crop" alt="" className="h-[70vh] w-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <span className="text-[9px] font-light tracking-[0.5em] text-white/50">LOOKBOOK</span>
            <h2 className="mt-3 text-6xl font-extralight italic tracking-tight text-white sm:text-7xl" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
              The Art of Dressing
            </h2>
          </div>
        </div>
      </section>

      {/* Service strip — minimal dark */}
      <section className="py-20 px-8">
        <div className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-4">
          {[
            { t: "무료 배송", d: "10만원 이상 구매 시" },
            { t: "정품 보증", d: "100% 정품만 취급" },
            { t: "무료 반품", d: "14일 이내 무료" },
            { t: "VIP 혜택", d: "멤버십 전용 세일" },
          ].map(s => (
            <div key={s.t} className="text-center">
              <h3 className="text-[11px] font-light tracking-[0.2em] text-white/60">{s.t}</h3>
              <p className="mt-2 text-[10px] text-white/25">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="border-t border-white/5 py-24 px-6 text-center">
        <p className="text-[10px] tracking-[0.4em] text-white/30">NEWSLETTER</p>
        <h2 className="mt-4 text-2xl font-extralight text-white/70" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
          컬렉션 소식을 가장 먼저 받아보세요
        </h2>
        <div className="mx-auto mt-8 flex max-w-sm gap-0 border-b border-white/10">
          <div className="flex-1 pb-3 text-left text-sm text-white/20">이메일 주소</div>
          <span className="pb-3 text-[11px] tracking-[0.15em] text-white/50 cursor-default">SUBSCRIBE →</span>
        </div>
      </section>

      <Credit brand="MAISON ÉLITE" dark />
    </div>
  );
}

/* ════════════════════════════════════════════
   3. FlowDesk — 글래스모피즘 / 3D SaaS 프로덕트
   ════════════════════════════════════════════ */
function Site3() {
  return (
    <div className="min-h-screen bg-[#0f0720] text-white overflow-hidden">
      <BackButton /><Badge />

      {/* Mesh gradient background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute top-0 left-1/4 h-[600px] w-[600px] rounded-full bg-violet-600/20 blur-[150px]" />
        <div className="absolute top-1/3 right-0 h-[500px] w-[500px] rounded-full bg-indigo-500/15 blur-[150px]" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-fuchsia-500/10 blur-[150px]" />
      </div>

      {/* Nav — glass */}
      <nav className="sticky top-0 z-30 border-b border-white/5 bg-white/5 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-lg bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center text-xs font-bold">F</div>
            <span className="text-lg font-bold">FlowDesk</span>
          </div>
          <div className="hidden items-center gap-6 md:flex">
            {["기능","가격","고객사","블로그"].map(l => <span key={l} className="text-sm text-white/50 cursor-default hover:text-white/80 transition-colors">{l}</span>)}
            <span className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-white/70 cursor-default backdrop-blur">로그인</span>
            <span className="rounded-full bg-gradient-to-r from-violet-500 to-indigo-600 px-6 py-2 text-sm font-semibold cursor-default shadow-lg shadow-violet-500/25">무료 시작</span>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative px-6 pt-24 pb-32">
        <div className="mx-auto max-w-5xl text-center">
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 backdrop-blur">
            <div className="flex -space-x-1.5">
              {["from-violet-400 to-pink-500", "from-blue-400 to-indigo-500", "from-emerald-400 to-teal-500", "from-amber-400 to-orange-500"].map((g, i) => (
                <div key={i} className={`h-6 w-6 rounded-full border-2 border-[#0f0720] bg-gradient-to-br ${g}`} />
              ))}
            </div>
            <span className="text-sm text-white/60"><strong className="text-white">2,000+</strong> 팀이 사용 중</span>
          </div>

          <h1 className="mb-6 text-5xl font-extrabold leading-tight sm:text-7xl">
            흩어진 업무를
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-indigo-400">하나로 모으세요</span>
          </h1>

          <p className="mx-auto mb-10 max-w-xl text-lg text-white/40">
            프로젝트 관리, 실시간 소통, 문서 협업까지 하나의 워크스페이스에서 해결하세요.
          </p>

          <div className="flex justify-center gap-4">
            <span className="rounded-2xl bg-gradient-to-r from-violet-500 to-indigo-600 px-10 py-4 text-base font-bold shadow-2xl shadow-violet-500/30 cursor-default">14일 무료 체험</span>
            <span className="rounded-2xl border border-white/10 bg-white/5 px-10 py-4 text-base font-medium text-white/70 backdrop-blur cursor-default">데모 보기 →</span>
          </div>

          {/* Floating app mockup */}
          <div className="mx-auto mt-20 max-w-4xl">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-1.5 backdrop-blur shadow-2xl shadow-violet-500/10" style={{ transform: "perspective(1200px) rotateX(5deg)" }}>
              <div className="rounded-xl overflow-hidden border border-white/5">
                <div className="flex items-center gap-2 border-b border-white/5 bg-white/5 px-4 py-2.5">
                  <div className="flex gap-1.5">
                    <div className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                    <div className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                    <div className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
                  </div>
                  <div className="ml-4 flex-1 rounded-md bg-white/5 px-3 py-1 text-[10px] text-white/30">app.flowdesk.io/workspace</div>
                </div>
                <img src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&h=400&fit=crop" alt="" className="w-full" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature grid — glass cards */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-center text-3xl font-extrabold">하나의 플랫폼, 모든 기능</h2>
          <p className="mx-auto mb-16 max-w-xl text-center text-white/40">더 이상 여러 도구를 오가지 마세요.</p>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: "📋", title: "프로젝트 관리", desc: "칸반, 타임라인, 캘린더 뷰를 자유롭게 전환하세요.", grad: "from-violet-500/20 to-indigo-500/20" },
              { icon: "💬", title: "팀 메시징", desc: "채널별 실시간 메시지로 빠르게 소통하세요.", grad: "from-fuchsia-500/20 to-pink-500/20" },
              { icon: "📄", title: "문서 협업", desc: "팀 위키를 만들고 실시간으로 함께 편집하세요.", grad: "from-blue-500/20 to-cyan-500/20" },
              { icon: "📈", title: "분석 리포트", desc: "팀 생산성과 프로젝트 진행률을 자동으로 측정합니다.", grad: "from-emerald-500/20 to-teal-500/20" },
              { icon: "🔗", title: "500+ 연동", desc: "Slack, GitHub, Figma 등 기존 도구와 바로 연결됩니다.", grad: "from-amber-500/20 to-orange-500/20" },
              { icon: "🛡️", title: "엔터프라이즈 보안", desc: "암호화와 접근 권한 관리로 데이터를 보호합니다.", grad: "from-rose-500/20 to-red-500/20" },
            ].map(f => (
              <div key={f.title} className="group rounded-2xl border border-white/5 bg-white/[0.03] p-8 backdrop-blur transition-all hover:border-white/10 hover:bg-white/[0.06]">
                <div className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${f.grad} text-2xl`}>
                  {f.icon}
                </div>
                <h3 className="mb-2 text-lg font-bold">{f.title}</h3>
                <p className="text-sm leading-relaxed text-white/40">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social proof — notification cards */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-center text-3xl font-extrabold">팀들이 말하는 FlowDesk</h2>
          <div className="grid gap-5 sm:grid-cols-2">
            {[
              { name: "김서진", role: "PM, 테크스타트업", quote: "도구 10개를 하나로 줄였습니다. 팀 생산성이 40% 올랐어요." },
              { name: "이현우", role: "CTO, SaaS 기업", quote: "온보딩이 정말 쉬웠고, 개발팀이 바로 적응했습니다." },
              { name: "박지민", role: "디자인 리드", quote: "Figma 연동이 완벽해서 디자인 핸드오프가 매끄러워요." },
              { name: "최유나", role: "마케팅 매니저", quote: "캠페인 관리를 FlowDesk 하나로 끝내고 있어요." },
            ].map(t => (
              <div key={t.name} className="rounded-2xl border border-white/5 bg-white/[0.03] p-7 backdrop-blur">
                <p className="mb-5 text-sm leading-relaxed text-white/60">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-full bg-gradient-to-br from-violet-400 to-indigo-500" />
                  <div>
                    <p className="text-sm font-semibold">{t.name}</p>
                    <p className="text-xs text-white/40">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing — glass cards */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-4 text-center text-3xl font-extrabold">심플한 가격 정책</h2>
          <p className="mb-12 text-center text-white/40">팀 규모에 맞는 플랜을 선택하세요.</p>
          <div className="grid gap-5 sm:grid-cols-3">
            {[
              { name: "Free", price: "₩0", desc: "5명까지 무료", features: ["기본 프로젝트 관리","팀 채팅","1GB 저장소"], pop: false },
              { name: "Pro", price: "₩15,000", desc: "사용자당/월", features: ["무제한 프로젝트","문서 협업","분석 리포트","100GB 저장소"], pop: true },
              { name: "Enterprise", price: "별도 문의", desc: "대기업 전용", features: ["전용 지원 매니저","SSO/SAML","감사 로그","무제한 저장소"], pop: false },
            ].map(p => (
              <div key={p.name} className={`relative flex flex-col rounded-2xl border p-8 backdrop-blur ${p.pop ? "border-violet-500/50 bg-violet-500/10 shadow-2xl shadow-violet-500/20" : "border-white/5 bg-white/[0.03]"}`}>
                {p.pop && <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-violet-500 to-indigo-600 px-4 py-1 text-[10px] font-bold">추천</span>}
                <h3 className="text-lg font-bold">{p.name}</h3>
                <div className="mt-2 text-3xl font-extrabold">{p.price}</div>
                <p className="mb-6 text-sm text-white/40">{p.desc}</p>
                <ul className="mb-8 flex-1 space-y-2.5">
                  {p.features.map(f => <li key={f} className="flex items-center gap-2 text-sm text-white/60"><span className="text-violet-400">✓</span>{f}</li>)}
                </ul>
                <span className={`block rounded-xl py-3.5 text-center text-sm font-semibold cursor-default ${p.pop ? "bg-gradient-to-r from-violet-500 to-indigo-600 shadow-lg shadow-violet-500/25" : "bg-white/5 border border-white/10 text-white/60"}`}>
                  시작하기
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center">
        <h2 className="mb-4 text-3xl font-extrabold">팀의 생산성을 바꿀 준비가 되셨나요?</h2>
        <p className="mx-auto mb-8 max-w-md text-white/40">지금 무료로 시작하고, 팀과 함께 성장하세요.</p>
        <span className="inline-block rounded-2xl bg-gradient-to-r from-violet-500 to-indigo-600 px-12 py-4 text-base font-bold shadow-2xl shadow-violet-500/30 cursor-default">무료로 시작하기</span>
      </section>
      <Credit brand="FlowDesk" dark />
    </div>
  );
}

/* ════════════════════════════════════════════
   4. VitaTrack — Apple-스타일 그라데이션 헬스 앱
   ════════════════════════════════════════════ */
function Site4() {
  return (
    <div className="min-h-screen bg-white">
      <BackButton /><Badge />

      {/* Nav — clean Apple-like */}
      <nav className="sticky top-0 z-30 bg-white/80 backdrop-blur-xl border-b border-slate-100">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
              <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
            </div>
            <span className="text-lg font-bold text-slate-900">VitaTrack</span>
          </div>
          <div className="hidden items-center gap-8 md:flex">
            {["기능","요금","후기","도움말"].map(l => <span key={l} className="text-sm text-slate-500 cursor-default">{l}</span>)}
            <span className="rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 px-6 py-2 text-sm font-semibold text-white cursor-default shadow-lg shadow-blue-500/20">다운로드</span>
          </div>
        </div>
      </nav>

      {/* Hero — bold gradient background */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-600 px-6 py-32">
        {/* Floating circles */}
        <div className="pointer-events-none absolute top-20 left-10 h-72 w-72 rounded-full bg-white/5 blur-[2px]" />
        <div className="pointer-events-none absolute bottom-10 right-20 h-48 w-48 rounded-full bg-white/5 blur-[2px]" />

        <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 backdrop-blur">
              <span className="text-xs font-semibold text-white/80">앱스토어 건강 부문 1위</span>
              <span className="text-yellow-300 text-xs">★ 4.9</span>
            </div>
            <h1 className="mb-6 text-5xl font-extrabold leading-tight text-white sm:text-6xl">
              내 몸의 데이터를
              <br />한눈에
            </h1>
            <p className="mb-10 max-w-md text-lg leading-relaxed text-white/70">
              심박수, 수면, 운동, 영양까지. 웨어러블 기기와 자동 연동되는
              올인원 헬스케어 대시보드.
            </p>
            <div className="flex items-center gap-4">
              <span className="rounded-2xl bg-white px-8 py-4 text-sm font-bold text-indigo-600 shadow-xl cursor-default">App Store</span>
              <span className="rounded-2xl bg-white/10 border border-white/20 px-8 py-4 text-sm font-semibold text-white backdrop-blur cursor-default">Google Play</span>
            </div>
          </div>

          {/* Phone mockup — floating */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute -inset-6 rounded-[3rem] bg-white/10 blur-xl" />
              <div className="relative w-[280px] rounded-[2.5rem] border-[8px] border-slate-900 bg-slate-900 shadow-2xl">
                <div className="mx-auto mt-2 h-5 w-20 rounded-full bg-slate-800" />
                <div className="mt-1 overflow-hidden rounded-[2rem]">
                  <img src="https://images.unsplash.com/photo-1559757175-5700dde675bc?w=400&h=600&fit=crop" alt="" className="w-full" loading="lazy" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metric cards — colorful rounded */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-center text-3xl font-extrabold text-slate-900">오늘의 건강 요약</h2>
          <p className="mb-12 text-center text-slate-400">실시간으로 업데이트되는 나만의 건강 대시보드</p>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: "❤️", val: "72", unit: "BPM", label: "심박수", grad: "from-red-500 to-pink-500", bg: "bg-red-50" },
              { icon: "😴", val: "7.5", unit: "시간", label: "수면", grad: "from-indigo-500 to-violet-500", bg: "bg-indigo-50" },
              { icon: "🏃", val: "8,420", unit: "걸음", label: "활동량", grad: "from-emerald-500 to-teal-500", bg: "bg-emerald-50" },
              { icon: "🍎", val: "1,850", unit: "kcal", label: "칼로리", grad: "from-amber-500 to-orange-500", bg: "bg-amber-50" },
            ].map(m => (
              <div key={m.label} className={`${m.bg} rounded-3xl p-7`}>
                <div className="mb-4 text-3xl">{m.icon}</div>
                <div className="flex items-baseline gap-1.5">
                  <span className={`text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r ${m.grad}`}>{m.val}</span>
                  <span className="text-sm font-medium text-slate-400">{m.unit}</span>
                </div>
                <p className="mt-2 text-sm font-semibold text-slate-600">{m.label}</p>
                {/* Mini bar chart mock */}
                <div className="mt-4 flex items-end gap-1 h-8">
                  {[40, 65, 45, 80, 60, 90, 70].map((h, i) => (
                    <div key={i} className={`flex-1 rounded-full bg-gradient-to-t ${m.grad} opacity-40`} style={{ height: `${h}%` }} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature showcase — alternating sections */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-6xl space-y-32">
          {[
            {
              tag: "AI HEALTH REPORT",
              title: "AI가 분석하는\n맞춤 건강 리포트",
              desc: "축적된 건강 데이터를 AI가 종합 분석하여 주간 리포트를 자동 생성합니다.",
              img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
              features: ["주간/월간 건강 트렌드 자동 분석", "맞춤 운동 계획 추천", "수면 패턴 최적화 가이드"],
              grad: "from-blue-500 to-cyan-500",
              reverse: false,
            },
            {
              tag: "SMART TRACKING",
              title: "하루를 기록하고\n패턴을 발견하세요",
              desc: "식사, 운동, 수면을 자동으로 기록하고 AI가 개선점을 찾아드립니다.",
              img: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=600&h=400&fit=crop",
              features: ["사진 한 장으로 자동 칼로리 계산", "운동 자동 감지 및 기록", "이상 징후 조기 알림"],
              grad: "from-violet-500 to-purple-500",
              reverse: true,
            },
          ].map((s, si) => (
            <div key={si} className={`grid items-center gap-16 lg:grid-cols-2 ${s.reverse ? "direction-rtl" : ""}`}>
              <div className={s.reverse ? "lg:order-2" : ""}>
                <span className={`mb-3 inline-block text-xs font-bold uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r ${s.grad}`}>{s.tag}</span>
                <h2 className="mb-6 text-3xl font-extrabold text-slate-900 sm:text-4xl whitespace-pre-line">{s.title}</h2>
                <p className="mb-8 text-slate-500 leading-relaxed">{s.desc}</p>
                {s.features.map(f => (
                  <div key={f} className="mb-3 flex items-center gap-3">
                    <div className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${s.grad}`}>
                      <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                    </div>
                    <span className="text-sm text-slate-700">{f}</span>
                  </div>
                ))}
              </div>
              <div className={s.reverse ? "lg:order-1" : ""}>
                <div className="overflow-hidden rounded-3xl shadow-2xl">
                  <img src={s.img} alt="" className="w-full" loading="lazy" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Download CTA — gradient */}
      <section className="mx-6 mb-20 overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-600 py-20 px-8 text-center">
        <h2 className="mb-4 text-3xl font-extrabold text-white sm:text-4xl">건강한 습관, 오늘부터</h2>
        <p className="mx-auto mb-10 max-w-md text-white/70">무료로 다운로드하고, 오늘부터 건강 데이터를 기록하세요.</p>
        <div className="flex justify-center gap-4">
          <span className="rounded-2xl bg-white px-8 py-4 text-sm font-bold text-indigo-600 shadow-xl cursor-default">App Store</span>
          <span className="rounded-2xl bg-white/10 border border-white/20 px-8 py-4 text-sm font-bold text-white cursor-default">Google Play</span>
        </div>
      </section>
      <Credit brand="VitaTrack" />
    </div>
  );
}

/* ════════════════════════════════════════════
   5. ARCHI STUDIO — 브루탈리스트 / 스위스 건축 갤러리
   ════════════════════════════════════════════ */
function Site5() {
  const projects = [
    { img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop", name: "청담 레지던스", cat: "주거", area: "320㎡", year: "2024" },
    { img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop", name: "한남 갤러리 카페", cat: "상업", area: "180㎡", year: "2024" },
    { img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&h=400&fit=crop", name: "판교 단독주택", cat: "주거", area: "450㎡", year: "2023" },
    { img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&h=400&fit=crop", name: "제주 풀빌라", cat: "리조트", area: "280㎡", year: "2023" },
    { img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop", name: "성수 복합문화공간", cat: "복합", area: "520㎡", year: "2023" },
    { img: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&h=400&fit=crop", name: "양평 세컨드하우스", cat: "주거", area: "200㎡", year: "2022" },
  ];
  return (
    <div className="min-h-screen bg-[#f5f5f0]">
      <BackButton /><Badge />

      {/* Nav — brutalist exposed */}
      <nav className="border-b-2 border-black">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">
          <span className="text-2xl font-black uppercase tracking-[-0.02em] text-black">ARCHI<br/>STUDIO</span>
          <div className="hidden items-center gap-8 md:flex">
            {["Projects","About","Awards","Contact"].map(l => (
              <span key={l} className="text-sm font-medium uppercase text-black/50 cursor-default hover:text-black transition-colors">{l}</span>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero — oversized type with exposed grid */}
      <section className="relative border-b-2 border-black">
        <div className="grid lg:grid-cols-12">
          {/* Text block */}
          <div className="lg:col-span-5 border-r-0 lg:border-r-2 border-black px-8 py-20 lg:py-32 flex flex-col justify-between">
            <div>
              <div className="mb-8 flex items-center gap-4">
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-black/30">Est. 2004</span>
                <div className="h-px flex-1 bg-black/10" />
              </div>
              <h1 className="text-6xl font-black leading-[0.9] tracking-[-0.04em] text-black sm:text-7xl lg:text-8xl">
                공간에
                <br />이야기를
                <br />담다
              </h1>
            </div>
            <p className="mt-12 max-w-sm text-sm leading-relaxed text-black/40">
              주거, 상업, 공공 건축까지. 20년간 축적된 설계 노하우로 당신만의 공간을 완성합니다.
            </p>
          </div>
          {/* Hero image */}
          <div className="lg:col-span-7">
            <img src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=900&h=600&fit=crop" alt="" className="h-full w-full object-cover min-h-[400px]" loading="lazy" />
          </div>
        </div>
      </section>

      {/* Stats bar — exposed */}
      <section className="border-b-2 border-black">
        <div className="mx-auto grid max-w-7xl grid-cols-2 sm:grid-cols-4 divide-x-2 divide-black">
          {[
            { n: "120+", l: "완성된 프로젝트" },
            { n: "20", l: "년 경력" },
            { n: "15", l: "수상 이력" },
            { n: "98%", l: "고객 만족도" },
          ].map(s => (
            <div key={s.l} className="px-8 py-8 sm:py-10">
              <div className="text-4xl font-black tracking-tight text-black sm:text-5xl">{s.n}</div>
              <div className="mt-2 text-xs font-medium uppercase tracking-wider text-black/30">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Project gallery — grid with exposed borders */}
      <section className="px-8 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-black/30">Selected Works</span>
              <h2 className="mt-2 text-4xl font-black tracking-tight text-black">프로젝트</h2>
            </div>
            <span className="text-sm font-bold uppercase text-black/30 cursor-default">All ({projects.length})</span>
          </div>

          <div className="space-y-0">
            {projects.map((p, i) => (
              <div key={i} className="group grid gap-0 border-t-2 border-black lg:grid-cols-12 items-stretch">
                {/* Info */}
                <div className="lg:col-span-4 border-r-0 lg:border-r-2 border-black p-6 lg:p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-5xl font-black text-black/[0.06]">{String(i + 1).padStart(2, "0")}</span>
                      <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-black/30 border border-black/10 px-2 py-0.5">{p.cat}</span>
                    </div>
                    <h3 className="text-2xl font-black text-black">{p.name}</h3>
                  </div>
                  <div className="mt-4 flex gap-6 text-xs text-black/30">
                    <span>{p.area}</span>
                    <span>{p.year}</span>
                    <span className="font-bold text-black cursor-default group-hover:underline">View →</span>
                  </div>
                </div>
                {/* Image */}
                <div className="lg:col-span-8 overflow-hidden">
                  <img src={p.img} alt="" className="h-full w-full object-cover min-h-[250px] transition-transform duration-700 group-hover:scale-[1.02]" loading="lazy" />
                </div>
              </div>
            ))}
            <div className="border-t-2 border-black" />
          </div>
        </div>
      </section>

      {/* Process — numbered brutalist */}
      <section className="bg-black py-24 px-8 text-white">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-16 text-center text-4xl font-black tracking-tight">작업 프로세스</h2>
          <div className="grid gap-0 sm:grid-cols-4 divide-x divide-white/10">
            {[
              { n: "01", t: "상담", d: "고객의 라이프스타일과 요구사항을 깊이 이해합니다." },
              { n: "02", t: "설계", d: "컨셉부터 실시공 도면까지 정밀하게 설계합니다." },
              { n: "03", t: "시공", d: "검증된 시공 파트너와 함께 품질을 관리합니다." },
              { n: "04", t: "완성", d: "세밀한 마감 점검 후 공간을 인도합니다." },
            ].map(s => (
              <div key={s.n} className="px-6 py-8 sm:px-8">
                <span className="text-6xl font-black text-white/5">{s.n}</span>
                <h3 className="mt-2 text-xl font-black">{s.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/40">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="border-b-2 border-black py-20 px-8">
        <div className="mx-auto max-w-5xl">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-black/30">Recognition</span>
          <div className="mt-8 space-y-0">
            {[
              { award: "건축문화대상", org: "대한건축학회", year: "2024" },
              { award: "Good Design Award", org: "Japan Institute of Design", year: "2023" },
              { award: "Green Building 인증", org: "한국환경건축연구원", year: "2023" },
            ].map((a, i) => (
              <div key={a.award} className="flex items-center justify-between border-t border-black/10 py-5">
                <div className="flex items-center gap-6">
                  <span className="text-3xl font-black text-black/[0.06]">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <p className="text-lg font-bold text-black">{a.award}</p>
                    <p className="text-xs text-black/40">{a.org}</p>
                  </div>
                </div>
                <span className="text-sm font-bold text-black/20">{a.year}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 px-8 text-center">
        <h2 className="text-5xl font-black tracking-tight text-black sm:text-6xl">
          프로젝트를<br/>의뢰하세요
        </h2>
        <p className="mt-4 text-sm text-black/30">상담은 무료입니다.</p>
        <span className="mt-8 inline-block border-2 border-black bg-black px-10 py-4 text-sm font-bold uppercase tracking-wider text-white cursor-default hover:bg-transparent hover:text-black transition-colors">
          상담 예약
        </span>
      </section>
      <Credit brand="ARCHI STUDIO" />
    </div>
  );
}

/* ════════════════════════════════════════════
   6. 그린마켓 — 유기농/웜 / 핸드크래프트 식품 쇼핑몰
   ════════════════════════════════════════════ */
function Site6() {
  const products = [
    { img: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&h=400&fit=crop", name: "유기농 방울토마토", price: "4,900", badge: "인기", origin: "충남 부여" },
    { img: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=400&h=400&fit=crop", name: "무농약 바나나", price: "5,500", badge: null, origin: "필리핀" },
    { img: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=400&h=400&fit=crop", name: "제주 당근", price: "3,200", badge: "제철", origin: "제주 서귀포" },
    { img: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=400&h=400&fit=crop", name: "유기농 블루베리", price: "7,200", badge: null, origin: "전남 담양" },
  ];
  return (
    <div className="min-h-screen bg-[#fffdf7]">
      <BackButton /><Badge />

      {/* Wavy separator component */}

      {/* Nav — warm & friendly */}
      <nav className="bg-[#fffdf7] border-b border-[#e8e0d0]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-2.5">
            <div className="h-9 w-9 rounded-full bg-[#2d5016] flex items-center justify-center text-lg">🌿</div>
            <span className="text-xl font-extrabold text-[#2d5016]">그린마켓</span>
          </div>
          <div className="hidden items-center gap-8 md:flex">
            {["신선 식품","정기 구독","레시피","이벤트"].map(l => <span key={l} className="text-sm text-[#8b7355] cursor-default">{l}</span>)}
            <span className="rounded-full bg-[#2d5016] px-6 py-2.5 text-sm font-bold text-white cursor-default">장보기</span>
          </div>
        </div>
      </nav>

      {/* Hero — warm with organic shapes */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#f0e6d0] via-[#e8f0e0] to-[#f5efe0]" />
        {/* Organic blob shapes */}
        <div className="pointer-events-none absolute top-10 right-10 h-64 w-64 rounded-full bg-[#c5e1a5]/30 blur-[60px]" />
        <div className="pointer-events-none absolute bottom-10 left-10 h-48 w-48 rounded-full bg-[#ffe0b2]/40 blur-[60px]" />

        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:py-28">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#2d5016]/20 bg-white/60 px-5 py-2.5 backdrop-blur-sm">
              <span className="text-lg">🌱</span>
              <span className="text-sm font-bold text-[#2d5016]">100% 유기농 인증 식품</span>
            </div>
            <h1 className="mb-6 text-5xl font-extrabold leading-tight text-[#1a1a0e] sm:text-6xl">
              자연 그대로,
              <br /><span className="text-[#2d5016]">식탁</span> 위로
            </h1>
            <p className="mb-8 max-w-md text-base leading-relaxed text-[#8b7355]">
              농장에서 식탁까지 48시간. 전국 200곳 이상의 인증 농장에서
              엄선한 신선한 식재료를 새벽 배송합니다.
            </p>
            <div className="flex items-center gap-4">
              <span className="rounded-full bg-[#2d5016] px-8 py-4 text-base font-bold text-white shadow-lg shadow-[#2d5016]/20 cursor-default">
                첫 주문 30% 할인
              </span>
              <span className="text-sm font-semibold text-[#2d5016] cursor-default">자세히 보기 →</span>
            </div>
          </div>
          {/* Hero image with organic frame */}
          <div className="relative flex justify-center">
            <div className="relative">
              <div className="absolute -inset-3 rounded-[2rem] bg-[#2d5016]/5 rotate-3" />
              <img
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=500&h=500&fit=crop"
                alt="" className="relative rounded-[1.5rem] shadow-xl w-full max-w-[420px]" loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Wavy divider */}
      <div className="relative h-16 -mt-1 overflow-hidden">
        <svg className="absolute bottom-0 w-full" viewBox="0 0 1440 60" preserveAspectRatio="none" fill="#fffdf7">
          <path d="M0,60 L0,20 Q180,60 360,20 Q540,-20 720,20 Q900,60 1080,20 Q1260,-20 1440,20 L1440,60 Z" />
        </svg>
      </div>

      {/* Product grid — card with farm info */}
      <section className="py-16 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <span className="text-sm font-bold text-[#e67e22]">🥬 이번 주 추천</span>
              <h2 className="mt-1 text-3xl font-extrabold text-[#1a1a0e]">제철 신선 식품</h2>
            </div>
            <span className="text-sm font-bold text-[#2d5016] cursor-default">전체 보기 →</span>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((p, i) => (
              <div key={i} className="group overflow-hidden rounded-2xl bg-white border border-[#e8e0d0] shadow-sm transition-all hover:shadow-lg hover:-translate-y-1">
                <div className="relative aspect-square overflow-hidden bg-[#f5f0e8]">
                  <img src={p.img} alt="" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                  {p.badge && (
                    <span className="absolute top-3 left-3 rounded-full bg-[#e67e22] px-3 py-1 text-[11px] font-bold text-white shadow-sm">
                      {p.badge}
                    </span>
                  )}
                </div>
                <div className="p-5">
                  <div className="mb-2 flex items-center gap-2">
                    <span className="text-[10px] font-medium text-[#8b7355] bg-[#f5f0e8] px-2 py-0.5 rounded-full">📍 {p.origin}</span>
                  </div>
                  <h3 className="text-base font-bold text-[#1a1a0e]">{p.name}</h3>
                  <div className="mt-2 flex items-baseline gap-1">
                    <span className="text-xl font-extrabold text-[#2d5016]">₩{p.price}</span>
                  </div>
                  <div className="mt-3">
                    <span className="block w-full rounded-xl bg-[#2d5016] py-2.5 text-center text-sm font-bold text-white cursor-default">담기</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Farm to table — illustrated steps */}
      <section className="bg-[#f5f0e8] py-20 px-6">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-4 text-center text-3xl font-extrabold text-[#1a1a0e]">농장에서 식탁까지</h2>
          <p className="mb-12 text-center text-[#8b7355]">가장 신선한 상태로 배송됩니다</p>
          <div className="grid gap-6 sm:grid-cols-4">
            {[
              { icon: "🌾", step: "수확", desc: "인증 농장에서 당일 수확", time: "Day 1 AM" },
              { icon: "✅", step: "검수", desc: "전문 검수팀이 품질 확인", time: "Day 1 PM" },
              { icon: "📦", step: "포장", desc: "친환경 보냉 패키지에 포장", time: "Day 1 PM" },
              { icon: "🚛", step: "배송", desc: "새벽 배송으로 아침에 도착", time: "Day 2 AM" },
            ].map((s, i) => (
              <div key={s.step} className="relative text-center">
                {i < 3 && <div className="absolute top-8 left-[60%] hidden h-0.5 w-[80%] border-t-2 border-dashed border-[#2d5016]/20 lg:block" />}
                <div className="relative mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-3xl shadow-sm border border-[#e8e0d0]">
                  {s.icon}
                </div>
                <h3 className="mb-1 text-lg font-bold text-[#1a1a0e]">{s.step}</h3>
                <p className="text-sm text-[#8b7355]">{s.desc}</p>
                <span className="mt-2 inline-block text-[10px] font-bold text-[#2d5016]/50">{s.time}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscription — warm card style */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-[#2d5016] to-[#1a3a0a]">
            <div className="grid lg:grid-cols-2">
              <div className="p-10 lg:p-14">
                <span className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm font-bold text-white/80">🥬 정기 구독</span>
                <h2 className="mb-4 text-3xl font-extrabold text-white sm:text-4xl">
                  매주 새로운
                  <br />제철 식재료를
                </h2>
                <p className="mb-8 text-white/60 leading-relaxed">
                  매주 또는 격주로 엄선된 제철 식재료가 문 앞에 배송됩니다.
                  언제든지 건너뛰기나 해지가 가능합니다.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {[
                    { t: "주 1회 박스", p: "₩29,900/주", items: "8~10가지" },
                    { t: "주 2회 박스", p: "₩49,900/주", items: "15~18가지" },
                  ].map(b => (
                    <div key={b.t} className="rounded-2xl bg-white/10 p-5 text-center backdrop-blur border border-white/5">
                      <p className="text-sm font-bold text-white">{b.t}</p>
                      <p className="mt-1 text-xl font-extrabold text-white">{b.p}</p>
                      <p className="mt-1 text-xs text-white/50">{b.items}</p>
                    </div>
                  ))}
                </div>
                <span className="inline-block rounded-full bg-white px-8 py-3.5 text-sm font-bold text-[#2d5016] shadow-lg cursor-default">
                  구독 시작하기 →
                </span>
              </div>
              <div className="relative hidden lg:block">
                <img src="https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=600&h=600&fit=crop" alt="" className="h-full w-full object-cover" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews — warm style */}
      <section className="bg-[#f5f0e8] py-20 px-6">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-12 text-center text-2xl font-extrabold text-[#1a1a0e]">고객 후기</h2>
          <div className="grid gap-5 sm:grid-cols-3">
            {[
              { name: "김서연", review: "진짜 마트에서 사는 것과 완전 다릅니다. 토마토가 이렇게 맛있을 수가!", rating: 5 },
              { name: "이준혁", review: "아이 이유식 재료로 쓰기에 안심이 됩니다. 유기농 인증이 확실해요.", rating: 5 },
              { name: "박민지", review: "구독 박스가 매주 설레요. 뭐가 올지 모르는 재미도 있고!", rating: 5 },
            ].map(r => (
              <div key={r.name} className="rounded-2xl bg-white p-6 border border-[#e8e0d0]">
                <div className="mb-3 text-yellow-500 text-sm">{"★".repeat(r.rating)}</div>
                <p className="mb-4 text-sm leading-relaxed text-[#5a4a32]">&ldquo;{r.review}&rdquo;</p>
                <p className="text-sm font-bold text-[#1a1a0e]">{r.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Farm stats */}
      <section className="py-20 px-6 text-center">
        <h2 className="mb-10 text-2xl font-extrabold text-[#1a1a0e]">그린마켓이 만드는 변화</h2>
        <div className="mx-auto flex max-w-3xl flex-wrap justify-center gap-12">
          {[
            { v: "200+", l: "파트너 농장", icon: "🌿" },
            { v: "48h", l: "수확→배송", icon: "⏰" },
            { v: "4.9", l: "고객 만족도", icon: "⭐" },
            { v: "50만+", l: "누적 주문", icon: "📦" },
          ].map(s => (
            <div key={s.l}>
              <div className="text-3xl mb-2">{s.icon}</div>
              <div className="text-4xl font-extrabold text-[#2d5016]">{s.v}</div>
              <div className="mt-1 text-sm text-[#8b7355]">{s.l}</div>
            </div>
          ))}
        </div>
      </section>
      <Credit brand="그린마켓" />
    </div>
  );
}

/* ══ Main ══ */
export default async function PortfolioDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const items = await readPortfolio();
  const item = items.find((i) => i.id === id);
  const validIds = ["1", "2", "3", "4", "5", "6"];
  if (!item || !validIds.includes(id)) return notFound();

  switch (id) {
    case "1": return <Site1 />;
    case "2": return <Site2 />;
    case "3": return <Site3 />;
    case "4": return <Site4 />;
    case "5": return <Site5 />;
    case "6": return <Site6 />;
    default: return notFound();
  }
}
