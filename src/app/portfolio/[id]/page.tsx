import Link from "next/link";
import { readPortfolio } from "@/lib/portfolio";
import { notFound } from "next/navigation";

/* ── Shared overlays ── */
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
   1. NeuralX — Cyberpunk Data Lab
   ════════════════════════════════════════════ */
function Site1() {
  const C = 97.39; // circumference for r=15.5
  return (
    <div className="min-h-screen bg-[#07080d] text-white" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
      <BackButton /><Badge />
      {/* Dot grid bg */}
      <div className="pointer-events-none fixed inset-0 z-0 opacity-[0.12]" style={{
        backgroundImage: "radial-gradient(circle, rgba(0,255,140,0.35) 1px, transparent 1px)",
        backgroundSize: "24px 24px",
      }} />
      {/* Scan line */}
      <div className="pointer-events-none fixed inset-x-0 z-40 h-px bg-gradient-to-r from-transparent via-green-400/30 to-transparent" style={{ animation: "scan-line 4s linear infinite" }} />

      {/* Nav */}
      <nav className="relative z-10 border-b border-green-900/30 bg-black/50 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="h-2.5 w-2.5 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.6)]" style={{ animation: "pulse-glow 2s ease-in-out infinite" }} />
            <span className="text-lg font-bold tracking-wider">NEURAL<span className="text-cyan-400">X</span></span>
          </div>
          <div className="hidden items-center gap-6 md:flex">
            {["제품","솔루션","API_DOCS","회사소개"].map(l => <span key={l} className="text-xs text-green-700 cursor-default hover:text-green-400 transition-colors">{`> ${l}`}</span>)}
            <span className="rounded border border-cyan-500/40 bg-cyan-500/10 px-4 py-1.5 text-xs font-bold text-cyan-400 cursor-default">DEMO</span>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative z-10 overflow-hidden px-6 py-28 sm:py-36">
        <div className="pointer-events-none absolute -top-20 left-1/3 h-[500px] w-[500px] rounded-full bg-green-500/[0.04] blur-[150px]" />
        <div className="pointer-events-none absolute bottom-0 right-1/4 h-[300px] w-[300px] rounded-full bg-cyan-500/[0.04] blur-[100px]" />
        <div className="relative mx-auto max-w-5xl">
          <div className="mb-8 inline-flex items-center gap-3 rounded border border-green-800/50 bg-green-950/50 px-5 py-2.5">
            <span className="text-[10px] text-green-700">[STATUS]</span>
            <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs text-green-500">SYSTEM ONLINE — v4.2.1</span>
          </div>
          <h1 className="mb-8 text-5xl font-extrabold leading-tight tracking-tight sm:text-7xl" style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}>
            <span className="text-green-400">데이터</span>에서 <span className="text-cyan-400">인사이트</span>를,
            <br />인사이트에서 <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">성장</span>을
          </h1>
          <p className="mb-10 max-w-2xl text-base leading-relaxed text-green-800" style={{ fontFamily: "system-ui, sans-serif" }}>
            차세대 인공지능 솔루션으로 비즈니스 의사결정을 자동화하세요. 실시간 데이터 처리부터 예측 분석까지.
          </p>
          <div className="flex gap-4">
            <span className="rounded border border-green-500 bg-green-500/10 px-8 py-3.5 text-sm font-bold text-green-400 shadow-[0_0_20px_rgba(34,197,94,0.12)] cursor-default">$ init --demo</span>
            <span className="rounded border border-green-900/40 px-8 py-3.5 text-sm text-green-700 cursor-default">docs →</span>
          </div>
        </div>
      </section>

      {/* Live Dashboard Mockup */}
      <section className="relative z-10 px-6 py-16">
        <div className="mx-auto max-w-5xl rounded-xl border border-green-900/30 bg-black/60 backdrop-blur overflow-hidden">
          <div className="flex items-center justify-between border-b border-green-900/20 px-6 py-3">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[10px] text-green-700">LIVE DASHBOARD</span>
            </div>
            <span className="text-[10px] text-green-900">Updated 2s ago</span>
          </div>
          {/* Ring Charts */}
          <div className="grid grid-cols-2 gap-px bg-green-900/10 p-px sm:grid-cols-4">
            {[
              { label: "모델 정확도", value: 99.2, color: "#00ff8c" },
              { label: "시스템 가동률", value: 99.9, color: "#00d4ff" },
              { label: "처리 효율", value: 94.7, color: "#a855f7" },
              { label: "보안 점수", value: 98.1, color: "#f59e0b" },
            ].map(m => (
              <div key={m.label} className="bg-[#07080d] p-6 text-center">
                <svg className="mx-auto h-20 w-20" viewBox="0 0 36 36">
                  <circle cx="18" cy="18" r="15.5" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="2" />
                  <circle cx="18" cy="18" r="15.5" fill="none" stroke={m.color} strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeDasharray={C.toString()}
                    strokeDashoffset={(C * (1 - m.value / 100)).toString()}
                    style={{ transform: "rotate(-90deg)", transformOrigin: "center", filter: `drop-shadow(0 0 6px ${m.color})` }}
                  />
                  <text x="18" y="17" textAnchor="middle" dominantBaseline="middle" fill="white" style={{ fontSize: "6.5px", fontWeight: 700, fontFamily: "'JetBrains Mono', monospace" }}>{m.value}%</text>
                </svg>
                <p className="mt-3 text-[10px] text-green-700">{m.label}</p>
              </div>
            ))}
          </div>
          {/* Bar chart */}
          <div className="border-t border-green-900/20 p-6">
            <p className="mb-3 text-[10px] text-green-800">일일 처리량 (백만 건)</p>
            <div className="flex items-end gap-1 h-20">
              {[45,62,78,55,90,72,85,93,68,88,95,82,70,91,87,76,94,89,73,96,84,79,92,88].map((h, i) => (
                <div key={i} className="flex-1 rounded-t transition-all" style={{
                  height: `${h}%`,
                  background: `linear-gradient(to top, rgba(0,255,140,0.15), rgba(0,255,140,${h / 130}))`,
                  boxShadow: h > 90 ? "0 0 8px rgba(0,255,140,0.25)" : "none",
                }} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Terminal */}
      <section className="relative z-10 px-6 py-12">
        <div className="mx-auto max-w-4xl rounded-lg border border-green-900/30 bg-black overflow-hidden">
          <div className="flex items-center gap-2 border-b border-green-900/20 px-4 py-2.5 bg-green-950/20">
            <div className="flex gap-1.5"><div className="h-2.5 w-2.5 rounded-full bg-red-500/60" /><div className="h-2.5 w-2.5 rounded-full bg-yellow-500/60" /><div className="h-2.5 w-2.5 rounded-full bg-green-500/60" /></div>
            <span className="ml-3 text-[10px] text-green-800">neuralx@prod:~/analytics</span>
          </div>
          <div className="p-5 text-xs leading-loose">
            <p><span className="text-green-600">$</span> <span className="text-white">neuralx analyze</span> <span className="text-cyan-600">--source</span>=prod <span className="text-cyan-600">--model</span>=v4</p>
            <p className="text-green-800">[INFO] Connecting to pipeline...</p>
            <p className="text-green-800">[INFO] Loading model weights <span className="text-yellow-600/60">(2.4GB)</span>...</p>
            <p className="text-cyan-600">[DONE] Model loaded in <span className="text-white">0.8s</span></p>
            <p className="text-green-800">[PROC] Analyzing <span className="text-white">10,847,291</span> records...</p>
            <p className="text-cyan-500">[OK] Accuracy: <span className="text-green-400 font-bold">99.2%</span> | Anomalies: <span className="text-yellow-500">47</span></p>
            <p className="text-cyan-500">[OK] Revenue forecast: <span className="text-green-400 font-bold">+23.4%</span> <span className="text-green-800">(conf: 97.1%)</span></p>
            <p className="mt-1"><span className="text-green-600">$</span> <span style={{ animation: "blink-cursor 1s step-end infinite" }}>█</span></p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="relative z-10 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <span className="text-[10px] uppercase tracking-[0.3em] text-green-800">[CAPABILITIES]</span>
          <h2 className="mt-2 mb-12 text-3xl font-bold text-green-400" style={{ fontFamily: "'Outfit', sans-serif" }}>핵심 모듈</h2>
          <div className="grid gap-px bg-green-900/15 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: "🧠", code: "AI_CORE", title: "딥러닝 엔진", desc: "자체 AI 모델 99.2% 정확도. 데이터가 쌓일수록 더 똑똑해집니다.", stat: "99.2%" },
              { icon: "⚡", code: "RT_PROC", title: "실시간 처리", desc: "밀리초 단위 응답. 즉각적인 비즈니스 인사이트.", stat: "<50ms" },
              { icon: "🔒", code: "SEC_MOD", title: "엔터프라이즈 보안", desc: "SOC2, ISO27001 인증 보안 체계.", stat: "SOC2" },
              { icon: "📊", code: "VIS_DAT", title: "시각화 대시보드", desc: "복잡한 데이터를 직관적 차트로.", stat: "100+" },
              { icon: "🔗", code: "API_INT", title: "API 연동", desc: "RESTful API로 기존 시스템과 빠른 통합.", stat: "REST" },
              { icon: "☁️", code: "CLD_DEP", title: "멀티 클라우드", desc: "AWS, GCP, Azure 원하는 곳에 배포.", stat: "3+" },
            ].map(f => (
              <div key={f.code} className="group bg-[#07080d] p-8 transition-all hover:bg-green-500/[0.03]">
                <div className="mb-4 flex items-center gap-3">
                  <span className="text-2xl">{f.icon}</span>
                  <span className="rounded bg-green-950/60 px-2 py-0.5 text-[9px] tracking-wider text-green-700 border border-green-900/30">{f.code}</span>
                </div>
                <h3 className="mb-2 text-base font-bold text-green-300" style={{ fontFamily: "system-ui" }}>{f.title}</h3>
                <p className="text-sm leading-relaxed text-green-900" style={{ fontFamily: "system-ui" }}>{f.desc}</p>
                <div className="mt-4 text-2xl font-extrabold text-cyan-500/60">{f.stat}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 py-24 px-6 text-center">
        <p className="mb-3 text-[10px] tracking-[0.3em] text-green-800">[DEPLOYMENT_READY]</p>
        <h2 className="mb-4 text-3xl font-bold text-green-400" style={{ fontFamily: "'Outfit', sans-serif" }}>지금 바로 시작하세요</h2>
        <p className="mb-8 text-sm text-green-900" style={{ fontFamily: "system-ui" }}>14일 무료 체험. 카드 등록 없음.</p>
        <span className="inline-block rounded border border-cyan-500 bg-cyan-500/10 px-10 py-4 text-sm font-bold text-cyan-400 shadow-[0_0_25px_rgba(6,182,212,0.12)] cursor-default">$ neuralx init --free-trial</span>
      </section>
      <Credit brand="NeuralX" dark />
    </div>
  );
}

/* ════════════════════════════════════════════
   2. MAISON ÉLITE — Cinematic Fashion Editorial
   ════════════════════════════════════════════ */
function Site2() {
  const products = [
    { img: "https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?w=500&h=700&fit=crop", name: "캐시미어 오버코트", price: "₩890,000", tag: "NEW" },
    { img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=500&h=700&fit=crop", name: "실크 블라우스", price: "₩320,000", tag: null },
    { img: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=500&h=700&fit=crop", name: "테일러드 재킷", price: "₩580,000", tag: "BEST" },
    { img: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=500&h=700&fit=crop", name: "플리츠 스커트", price: "₩270,000", tag: null },
    { img: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=500&h=700&fit=crop", name: "새틴 이브닝 드레스", price: "₩1,250,000", tag: "EXCLUSIVE" },
    { img: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=500&h=700&fit=crop", name: "울 케이프 코트", price: "₩720,000", tag: null },
  ];
  const serif = { fontFamily: "'Cormorant Garamond', Georgia, serif" };
  return (
    <div className="min-h-screen bg-[#0b0b0b] text-white">
      <BackButton /><Badge />

      {/* Nav */}
      <nav className="border-b border-white/[0.04]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-10 py-8">
          <span className="text-[26px] font-light tracking-[0.35em] text-white/90" style={serif}>MAISON ÉLITE</span>
          <div className="hidden items-center gap-12 md:flex">
            {["COLLECTION","LOOKBOOK","ABOUT"].map(l => <span key={l} className="text-[10px] font-light tracking-[0.25em] text-white/30 cursor-default hover:text-white/70 transition-colors duration-500">{l}</span>)}
            <span className="text-[10px] tracking-[0.15em] text-white/40 cursor-default">BAG (0)</span>
          </div>
        </div>
      </nav>

      {/* Hero — cinematic full bleed */}
      <section className="relative h-screen max-h-[920px] overflow-hidden">
        <img src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1200&h=900&fit=crop" alt="" className="h-full w-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0b] via-black/30 to-transparent" />
        <div className="absolute bottom-16 left-8 right-8 sm:left-14">
          <p className="mb-5 text-[10px] font-light tracking-[0.5em] text-white/40">2025 SPRING / SUMMER</p>
          <h1 className="text-6xl font-light leading-[0.92] tracking-tight sm:text-8xl lg:text-[112px]" style={serif}>
            Eternal
            <br /><em className="font-light">Elegance</em>
          </h1>
          <div className="mt-8 flex items-center gap-6">
            <span className="border-b border-white/40 pb-1 text-[11px] tracking-[0.2em] text-white/60 cursor-default">EXPLORE →</span>
            <span className="text-[11px] text-white/20">SS25</span>
          </div>
        </div>
        {/* Scroll hint */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2" style={{ animation: "scroll-hint-bounce 2s ease-in-out infinite" }}>
          <div className="h-8 w-[1px] bg-gradient-to-b from-transparent to-white/30" />
        </div>
      </section>

      {/* Statement */}
      <section className="py-32 px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-3xl font-light leading-relaxed text-white/50 sm:text-4xl" style={serif}>
            &ldquo;시간이 지나도<br />변하지 않는 가치를<br />추구합니다&rdquo;
          </p>
          <div className="mx-auto mt-10 h-px w-12 bg-white/10" />
        </div>
      </section>

      {/* Horizontal scroll products */}
      <section className="pb-28">
        <div className="mb-10 flex items-center justify-between px-10">
          <span className="text-[10px] tracking-[0.3em] text-white/25">EDITOR&apos;S PICK</span>
          <span className="text-[10px] tracking-[0.2em] text-white/25 cursor-default">SCROLL →</span>
        </div>
        <div className="flex gap-5 overflow-x-auto scrollbar-hide px-10 pb-4" style={{ scrollSnapType: "x mandatory" }}>
          {products.map((p, i) => (
            <div key={i} className="group w-[300px] shrink-0 sm:w-[340px]" style={{ scrollSnapAlign: "start" }}>
              <div className="relative aspect-[3/4] overflow-hidden">
                <img src={p.img} alt="" className="h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-[1.04]" loading="lazy" />
                <div className="absolute inset-0 bg-black/0 transition-colors duration-700 group-hover:bg-black/20" />
                {p.tag && <span className="absolute top-5 left-5 text-[9px] tracking-[0.3em] text-white/70">{p.tag}</span>}
                {/* Hover reveal */}
                <div className="absolute bottom-0 left-0 right-0 translate-y-full transition-transform duration-500 group-hover:translate-y-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <span className="text-[10px] tracking-[0.15em] text-white/80 cursor-default">+ ADD TO BAG</span>
                </div>
              </div>
              <div className="mt-4 flex items-baseline justify-between px-1">
                <span className="text-xs font-light tracking-wide text-white/50">{p.name}</span>
                <span className="text-xs text-white/30">{p.price}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Editorial numbered section */}
      <section className="border-t border-white/[0.04] py-28 px-10">
        <div className="mx-auto max-w-6xl">
          {[
            { n: "01", title: "Curated Selection", desc: "전 세계 프리미엄 브랜드를 한곳에서. 200개 이상의 럭셔리 브랜드를 큐레이션합니다.", img: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=400&fit=crop" },
            { n: "02", title: "Personal Styling", desc: "전담 스타일리스트가 고객의 취향과 라이프스타일에 맞는 아이템을 추천합니다.", img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&h=400&fit=crop" },
          ].map((s, i) => (
            <div key={s.n} className={`grid gap-10 lg:grid-cols-2 items-center ${i > 0 ? "mt-24" : ""}`}>
              <div className={i % 2 ? "lg:order-2" : ""}>
                <span className="text-[80px] font-extralight leading-none text-white/[0.04]" style={serif}>{s.n}</span>
                <h3 className="mt-2 text-2xl font-light text-white/70" style={serif}>{s.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-white/30" style={{ fontFamily: "system-ui" }}>{s.desc}</p>
              </div>
              <div className={i % 2 ? "lg:order-1" : ""}>
                <div className="aspect-[3/2] overflow-hidden">
                  <img src={s.img} alt="" className="h-full w-full object-cover" loading="lazy" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lookbook full bleed */}
      <section className="relative h-[70vh]">
        <img src="https://images.unsplash.com/photo-1445205170230-053b83016050?w=1200&h=500&fit=crop" alt="" className="h-full w-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <div className="text-center">
            <span className="text-[9px] tracking-[0.5em] text-white/40">LOOKBOOK</span>
            <h2 className="mt-3 text-5xl font-light italic text-white sm:text-7xl" style={serif}>The Art of Dressing</h2>
          </div>
        </div>
      </section>

      {/* Services + Newsletter */}
      <section className="py-20 px-8">
        <div className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-4">
          {[{ t: "무료 배송", d: "10만원 이상" },{ t: "정품 보증", d: "100% 정품" },{ t: "무료 반품", d: "14일 이내" },{ t: "VIP 혜택", d: "멤버십 전용" }].map(s => (
            <div key={s.t} className="text-center">
              <h3 className="text-[11px] tracking-[0.2em] text-white/40">{s.t}</h3>
              <p className="mt-1 text-[10px] text-white/15">{s.d}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="border-t border-white/[0.04] py-24 px-6 text-center">
        <p className="text-[10px] tracking-[0.4em] text-white/20">NEWSLETTER</p>
        <h2 className="mt-4 text-2xl font-light text-white/50" style={serif}>컬렉션 소식을 가장 먼저</h2>
        <div className="mx-auto mt-8 flex max-w-sm border-b border-white/10">
          <div className="flex-1 pb-3 text-sm text-white/15">이메일 주소</div>
          <span className="pb-3 text-[11px] tracking-[0.15em] text-white/40 cursor-default">→</span>
        </div>
      </section>
      <Credit brand="MAISON ÉLITE" dark />
    </div>
  );
}

/* ════════════════════════════════════════════
   3. FlowDesk — Glassmorphism Bento SaaS
   ════════════════════════════════════════════ */
function Site3() {
  return (
    <div className="min-h-screen bg-[#0c0618] text-white overflow-hidden" style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}>
      <BackButton /><Badge />
      {/* Mesh gradient bg */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute top-[-10%] left-[20%] h-[600px] w-[600px] rounded-full bg-violet-600/20 blur-[150px]" />
        <div className="absolute top-[30%] right-[-5%] h-[500px] w-[500px] rounded-full bg-indigo-500/15 blur-[140px]" />
        <div className="absolute bottom-[-10%] left-[-5%] h-[400px] w-[400px] rounded-full bg-fuchsia-500/10 blur-[130px]" />
        <div className="absolute top-[60%] left-[40%] h-[300px] w-[300px] rounded-full bg-blue-500/10 blur-[120px]" />
      </div>

      {/* Nav */}
      <nav className="sticky top-0 z-30 border-b border-white/[0.04] bg-white/[0.03] backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2.5">
            <div className="h-7 w-7 rounded-lg bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center text-xs font-bold">F</div>
            <span className="text-lg font-bold">FlowDesk</span>
          </div>
          <div className="hidden items-center gap-6 md:flex">
            {["기능","가격","고객사","블로그"].map(l => <span key={l} className="text-sm text-white/40 cursor-default">{l}</span>)}
            <span className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-white/60 cursor-default">로그인</span>
            <span className="rounded-full bg-gradient-to-r from-violet-500 to-indigo-600 px-6 py-2 text-sm font-semibold cursor-default shadow-lg shadow-violet-500/20">무료 시작</span>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="px-6 pt-24 pb-16">
        <div className="mx-auto max-w-5xl text-center">
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 backdrop-blur">
            <div className="flex -space-x-1.5">
              {["from-violet-400 to-pink-500","from-blue-400 to-indigo-500","from-emerald-400 to-teal-500","from-amber-400 to-orange-500"].map((g, i) => <div key={i} className={`h-6 w-6 rounded-full border-2 border-[#0c0618] bg-gradient-to-br ${g}`} />)}
            </div>
            <span className="text-sm text-white/50"><strong className="text-white">2,000+</strong> 팀이 사용 중</span>
          </div>
          <h1 className="mb-6 text-5xl font-extrabold leading-tight sm:text-7xl">
            흩어진 업무를<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-indigo-400">하나로 모으세요</span>
          </h1>
          <p className="mx-auto mb-10 max-w-xl text-lg text-white/35">프로젝트 관리, 실시간 소통, 문서 협업까지 하나의 워크스페이스에서.</p>
          <div className="flex justify-center gap-4">
            <span className="rounded-2xl bg-gradient-to-r from-violet-500 to-indigo-600 px-10 py-4 font-bold shadow-2xl shadow-violet-500/25 cursor-default">14일 무료 체험</span>
            <span className="rounded-2xl border border-white/10 bg-white/5 px-10 py-4 font-medium text-white/60 backdrop-blur cursor-default">데모 보기 →</span>
          </div>
        </div>
      </section>

      {/* Bento Grid with UI mocks */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-center text-3xl font-extrabold">모든 기능, 하나의 플랫폼</h2>
          <p className="mb-12 text-center text-white/35">더 이상 여러 도구를 오가지 마세요.</p>
          <div className="grid gap-4 sm:grid-cols-3 sm:grid-rows-3">
            {/* Kanban — large card */}
            <div className="sm:col-span-2 sm:row-span-2 rounded-2xl border border-white/[0.06] bg-white/[0.03] p-6 backdrop-blur overflow-hidden">
              <div className="mb-4 flex items-center gap-2"><span className="text-xl">📋</span><span className="font-bold">프로젝트 관리</span></div>
              <p className="mb-5 text-sm text-white/35">칸반, 타임라인, 캘린더 뷰를 자유롭게 전환하세요.</p>
              {/* Kanban mock */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  { title: "To Do", color: "bg-violet-500/20 border-violet-500/30", items: ["UI 디자인 리뷰","API 문서 작성","성능 테스트"] },
                  { title: "In Progress", color: "bg-blue-500/20 border-blue-500/30", items: ["결제 모듈 개발","대시보드 UI"] },
                  { title: "Done", color: "bg-emerald-500/20 border-emerald-500/30", items: ["로그인 구현","DB 설계","와이어프레임"] },
                ].map(col => (
                  <div key={col.title}>
                    <p className="mb-2 text-[10px] font-bold text-white/40">{col.title}</p>
                    <div className="space-y-2">
                      {col.items.map(item => (
                        <div key={item} className={`rounded-lg border ${col.color} px-3 py-2 text-[11px] text-white/60`}>{item}</div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Chat mock */}
            <div className="rounded-2xl border border-white/[0.06] bg-white/[0.03] p-6 backdrop-blur">
              <div className="mb-4 flex items-center gap-2"><span className="text-xl">💬</span><span className="font-bold">팀 메시징</span></div>
              <div className="space-y-3">
                <div className="flex gap-2"><div className="h-6 w-6 shrink-0 rounded-full bg-gradient-to-br from-pink-400 to-rose-500" /><div className="rounded-lg rounded-tl-none bg-white/5 px-3 py-2 text-[11px] text-white/50">디자인 시안 확인해주세요 🎨</div></div>
                <div className="flex gap-2 justify-end"><div className="rounded-lg rounded-tr-none bg-violet-500/20 px-3 py-2 text-[11px] text-white/60">확인했어요! 2안으로 가죠 👍</div><div className="h-6 w-6 shrink-0 rounded-full bg-gradient-to-br from-violet-400 to-indigo-500" /></div>
                <div className="flex gap-2"><div className="h-6 w-6 shrink-0 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500" /><div className="rounded-lg rounded-tl-none bg-white/5 px-3 py-2 text-[11px] text-white/50">API 연동 완료! 🚀</div></div>
              </div>
            </div>
            {/* Analytics mock */}
            <div className="rounded-2xl border border-white/[0.06] bg-white/[0.03] p-6 backdrop-blur">
              <div className="mb-4 flex items-center gap-2"><span className="text-xl">📈</span><span className="font-bold">분석 리포트</span></div>
              <div className="flex items-end gap-1.5 h-20">
                {[30,45,35,60,50,75,65,85,70,90,80,95].map((h, i) => (
                  <div key={i} className="flex-1 rounded-t bg-gradient-to-t from-violet-500/30 to-violet-400/60" style={{ height: `${h}%` }} />
                ))}
              </div>
              <p className="mt-3 text-[10px] text-white/30">팀 생산성 +34% ↑</p>
            </div>
            {/* Docs */}
            <div className="rounded-2xl border border-white/[0.06] bg-white/[0.03] p-6 backdrop-blur">
              <div className="mb-4 flex items-center gap-2"><span className="text-xl">📄</span><span className="font-bold">문서 협업</span></div>
              <div className="space-y-2">
                {[85, 70, 55, 40, 65].map((w, i) => <div key={i} className="h-2 rounded-full bg-white/[0.06]"><div className="h-full rounded-full bg-gradient-to-r from-indigo-500/30 to-violet-500/30" style={{ width: `${w}%` }} /></div>)}
              </div>
              <p className="mt-3 text-[10px] text-white/30">실시간 동시 편집</p>
            </div>
            {/* Integrations */}
            <div className="rounded-2xl border border-white/[0.06] bg-white/[0.03] p-6 backdrop-blur">
              <div className="mb-4 flex items-center gap-2"><span className="text-xl">🔗</span><span className="font-bold">500+ 연동</span></div>
              <div className="grid grid-cols-4 gap-2">
                {["S","G","F","N","J","D","L","Z"].map((l, i) => (
                  <div key={i} className="flex h-9 w-full items-center justify-center rounded-lg bg-white/5 text-[10px] font-bold text-white/30">{l}</div>
                ))}
              </div>
            </div>
            {/* Security */}
            <div className="rounded-2xl border border-white/[0.06] bg-white/[0.03] p-6 backdrop-blur">
              <div className="mb-4 flex items-center gap-2"><span className="text-xl">🛡️</span><span className="font-bold">보안</span></div>
              <p className="text-sm text-white/35">엔터프라이즈급 암호화와 접근 권한 관리로 데이터를 보호합니다.</p>
              <div className="mt-3 flex gap-2">
                {["SOC2","GDPR","SSO"].map(b => <span key={b} className="rounded bg-emerald-500/10 px-2 py-0.5 text-[9px] font-bold text-emerald-400/60">{b}</span>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-center text-3xl font-extrabold">팀들이 말하는 FlowDesk</h2>
          <div className="grid gap-5 sm:grid-cols-2">
            {[
              { name: "김서진", role: "PM, 테크스타트업", q: "도구 10개를 하나로 줄였습니다. 생산성이 40% 올랐어요." },
              { name: "이현우", role: "CTO, SaaS 기업", q: "온보딩이 쉬웠고, 개발팀이 바로 적응했습니다." },
              { name: "박지민", role: "디자인 리드", q: "Figma 연동이 완벽해서 핸드오프가 매끄러워요." },
              { name: "최유나", role: "마케팅 매니저", q: "캠페인 관리를 FlowDesk 하나로 끝내고 있어요." },
            ].map(t => (
              <div key={t.name} className="rounded-2xl border border-white/5 bg-white/[0.03] p-7 backdrop-blur">
                <p className="mb-5 text-sm leading-relaxed text-white/50">&ldquo;{t.q}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-full bg-gradient-to-br from-violet-400 to-indigo-500" />
                  <div><p className="text-sm font-semibold">{t.name}</p><p className="text-xs text-white/35">{t.role}</p></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-center text-3xl font-extrabold">심플한 가격 정책</h2>
          <div className="grid gap-5 sm:grid-cols-3">
            {[
              { name: "Free", price: "₩0", desc: "5명까지", features: ["기본 프로젝트 관리","팀 채팅","1GB 저장소"], pop: false },
              { name: "Pro", price: "₩15,000", desc: "사용자당/월", features: ["무제한 프로젝트","문서 협업","분석 리포트","100GB"], pop: true },
              { name: "Enterprise", price: "별도 문의", desc: "대기업 전용", features: ["전용 매니저","SSO/SAML","감사 로그","무제한"], pop: false },
            ].map(p => (
              <div key={p.name} className={`relative flex flex-col rounded-2xl border p-8 backdrop-blur ${p.pop ? "border-violet-500/40 bg-violet-500/[0.08] shadow-2xl shadow-violet-500/15" : "border-white/5 bg-white/[0.03]"}`}>
                {p.pop && <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-violet-500 to-indigo-600 px-4 py-1 text-[10px] font-bold">추천</span>}
                <h3 className="text-lg font-bold">{p.name}</h3>
                <div className="mt-2 text-3xl font-extrabold">{p.price}</div>
                <p className="mb-6 text-sm text-white/35">{p.desc}</p>
                <ul className="mb-8 flex-1 space-y-2.5">{p.features.map(f => <li key={f} className="flex items-center gap-2 text-sm text-white/50"><span className="text-violet-400">✓</span>{f}</li>)}</ul>
                <span className={`block rounded-xl py-3.5 text-center text-sm font-semibold cursor-default ${p.pop ? "bg-gradient-to-r from-violet-500 to-indigo-600 shadow-lg shadow-violet-500/20" : "bg-white/5 border border-white/10 text-white/50"}`}>시작하기</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Credit brand="FlowDesk" dark />
    </div>
  );
}

/* ════════════════════════════════════════════
   4. VitaTrack — Apple-Style Health Dashboard
   ════════════════════════════════════════════ */
function Site4() {
  const R = 54; // ring radius
  const C = 2 * Math.PI * R; // ~339.29
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}>
      <BackButton /><Badge />

      {/* Nav */}
      <nav className="sticky top-0 z-30 bg-white/80 backdrop-blur-xl border-b border-slate-100">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
              <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
            </div>
            <span className="text-lg font-bold text-slate-900">VitaTrack</span>
          </div>
          <div className="hidden items-center gap-8 md:flex">
            {["기능","요금","후기"].map(l => <span key={l} className="text-sm text-slate-400 cursor-default">{l}</span>)}
            <span className="rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 px-6 py-2 text-sm font-semibold text-white cursor-default shadow-lg shadow-blue-500/15">다운로드</span>
          </div>
        </div>
      </nav>

      {/* Hero — gradient + devices */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-600 px-6 py-28 sm:py-36">
        <div className="pointer-events-none absolute top-16 left-10 h-64 w-64 rounded-full bg-white/5" />
        <div className="pointer-events-none absolute bottom-10 right-16 h-48 w-48 rounded-full bg-white/5" />
        {/* Heartbeat SVG */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 overflow-hidden opacity-10">
          <svg className="h-full" viewBox="0 0 2400 100" preserveAspectRatio="none" style={{ width: "200%", animation: "heartbeat-scroll 4s linear infinite" }}>
            <path d="M0,50 L100,50 L120,50 L140,20 L160,80 L180,35 L200,65 L220,50 L300,50 L400,50 L420,50 L440,20 L460,80 L480,35 L500,65 L520,50 L600,50 L700,50 L720,50 L740,20 L760,80 L780,35 L800,65 L820,50 L900,50 L1000,50 L1020,50 L1040,20 L1060,80 L1080,35 L1100,65 L1120,50 L1200,50" fill="none" stroke="white" strokeWidth="2" />
          </svg>
        </div>

        <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 backdrop-blur">
              <span className="text-xs font-semibold text-white/80">앱스토어 건강 부문 1위</span>
              <span className="text-yellow-300 text-xs">★ 4.9</span>
            </div>
            <h1 className="mb-6 text-5xl font-extrabold leading-tight text-white sm:text-6xl">내 몸의 데이터를<br />한눈에</h1>
            <p className="mb-10 max-w-md text-lg leading-relaxed text-white/60">심박수, 수면, 운동, 영양까지. 웨어러블 기기와 자동 연동되는 올인원 헬스케어 대시보드.</p>
            <div className="flex items-center gap-4">
              <span className="rounded-2xl bg-white px-8 py-4 text-sm font-bold text-indigo-600 shadow-xl cursor-default">App Store</span>
              <span className="rounded-2xl bg-white/10 border border-white/20 px-8 py-4 text-sm font-bold text-white cursor-default">Google Play</span>
            </div>
          </div>
          {/* Phone + Watch mockup */}
          <div className="flex items-end justify-center gap-4">
            {/* Watch */}
            <div className="relative mb-8">
              <div className="w-[100px] rounded-[1.2rem] border-[5px] border-slate-800 bg-slate-900 p-2 shadow-xl">
                <div className="rounded-[0.7rem] bg-gradient-to-br from-blue-500 to-indigo-600 p-3 text-center">
                  <p className="text-[8px] font-bold text-white/50">HEART</p>
                  <p className="text-xl font-extrabold text-white leading-none">72</p>
                  <p className="text-[7px] text-white/50">BPM</p>
                </div>
              </div>
            </div>
            {/* Phone */}
            <div className="relative">
              <div className="absolute -inset-4 rounded-[3rem] bg-white/10 blur-xl" />
              <div className="relative w-[240px] rounded-[2.2rem] border-[7px] border-slate-900 bg-slate-900 shadow-2xl sm:w-[260px]">
                <div className="mx-auto mt-2 h-4 w-16 rounded-full bg-slate-800" />
                <div className="mt-1 overflow-hidden rounded-b-[1.6rem]">
                  <img src="https://images.unsplash.com/photo-1559757175-5700dde675bc?w=400&h=550&fit=crop" alt="" className="w-full" loading="lazy" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Health Metrics — SVG Ring Progress */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-4 text-center text-3xl font-extrabold text-slate-900">오늘의 건강 요약</h2>
          <p className="mb-12 text-center text-slate-400">실시간으로 업데이트되는 나만의 대시보드</p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: "❤️", val: "72", unit: "BPM", label: "심박수", pct: 72, color: "#ef4444", bg: "bg-red-50" },
              { icon: "😴", val: "7.5", unit: "시간", label: "수면", pct: 94, color: "#6366f1", bg: "bg-indigo-50" },
              { icon: "🏃", val: "8,420", unit: "걸음", label: "활동량", pct: 84, color: "#10b981", bg: "bg-emerald-50" },
              { icon: "🍎", val: "1,850", unit: "kcal", label: "칼로리", pct: 77, color: "#f59e0b", bg: "bg-amber-50" },
            ].map(m => (
              <div key={m.label} className={`${m.bg} rounded-3xl p-6 text-center`}>
                <svg className="mx-auto h-28 w-28" viewBox="0 0 120 120">
                  <circle cx="60" cy="60" r={R} fill="none" stroke="rgba(0,0,0,0.04)" strokeWidth="8" />
                  <circle cx="60" cy="60" r={R} fill="none" stroke={m.color} strokeWidth="8"
                    strokeLinecap="round"
                    strokeDasharray={C.toString()}
                    strokeDashoffset={(C * (1 - m.pct / 100)).toString()}
                    style={{ transform: "rotate(-90deg)", transformOrigin: "center" }}
                  />
                  <text x="60" y="55" textAnchor="middle" dominantBaseline="middle" fill="#0f172a" style={{ fontSize: "22px", fontWeight: 800, fontFamily: "'Outfit', sans-serif" }}>{m.val}</text>
                  <text x="60" y="73" textAnchor="middle" fill="#94a3b8" style={{ fontSize: "10px" }}>{m.unit}</text>
                </svg>
                <p className="mt-2 text-sm font-bold text-slate-700">{m.label}</p>
                <p className="text-xs text-slate-400">{m.pct}% 목표 달성</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature sections */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-6xl space-y-28">
          {[
            { tag: "AI HEALTH REPORT", title: "AI가 분석하는\n맞춤 건강 리포트", desc: "축적된 건강 데이터를 AI가 종합 분석하여 주간 리포트를 자동 생성합니다.", img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop", items: ["주간/월간 건강 트렌드 분석","맞춤 운동 계획 추천","수면 패턴 최적화 가이드","이상 징후 조기 알림"], grad: "from-blue-500 to-cyan-500", rev: false },
            { tag: "SMART TRACKING", title: "하루를 기록하고\n패턴을 발견하세요", desc: "식사, 운동, 수면을 자동 기록하고 AI가 개선점을 찾아드립니다.", img: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=600&h=400&fit=crop", items: ["사진으로 자동 칼로리 계산","운동 자동 감지 및 기록","이상 징후 조기 알림"], grad: "from-violet-500 to-purple-500", rev: true },
          ].map((s, i) => (
            <div key={i} className="grid items-center gap-16 lg:grid-cols-2">
              <div className={s.rev ? "lg:order-2" : ""}>
                <span className={`mb-3 inline-block text-xs font-bold uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r ${s.grad}`}>{s.tag}</span>
                <h2 className="mb-6 text-3xl font-extrabold text-slate-900 sm:text-4xl whitespace-pre-line">{s.title}</h2>
                <p className="mb-8 text-slate-500 leading-relaxed">{s.desc}</p>
                {s.items.map(f => (
                  <div key={f} className="mb-3 flex items-center gap-3">
                    <div className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${s.grad}`}>
                      <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                    </div>
                    <span className="text-sm text-slate-700">{f}</span>
                  </div>
                ))}
              </div>
              <div className={s.rev ? "lg:order-1" : ""}><div className="overflow-hidden rounded-3xl shadow-2xl"><img src={s.img} alt="" className="w-full" loading="lazy" /></div></div>
            </div>
          ))}
        </div>
      </section>

      {/* Download CTA */}
      <section className="mx-6 mb-20 rounded-3xl bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-600 py-20 px-8 text-center overflow-hidden relative">
        <div className="pointer-events-none absolute top-0 right-0 h-40 w-40 rounded-full bg-white/5" />
        <h2 className="relative mb-4 text-3xl font-extrabold text-white sm:text-4xl">건강한 습관, 오늘부터</h2>
        <p className="relative mx-auto mb-10 max-w-md text-white/60">무료로 다운로드하고 오늘부터 기록하세요.</p>
        <div className="relative flex justify-center gap-4">
          <span className="rounded-2xl bg-white px-8 py-4 text-sm font-bold text-indigo-600 shadow-xl cursor-default">App Store</span>
          <span className="rounded-2xl bg-white/10 border border-white/20 px-8 py-4 text-sm font-bold text-white cursor-default">Google Play</span>
        </div>
      </section>
      <Credit brand="VitaTrack" />
    </div>
  );
}

/* ════════════════════════════════════════════
   5. ARCHI STUDIO — Brutalist Blueprint
   ════════════════════════════════════════════ */
function Site5() {
  const projects = [
    { img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=700&h=500&fit=crop", name: "청담 레지던스", cat: "주거", area: "320㎡", year: "2024" },
    { img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=700&h=500&fit=crop", name: "한남 갤러리 카페", cat: "상업", area: "180㎡", year: "2024" },
    { img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=700&h=500&fit=crop", name: "판교 단독주택", cat: "주거", area: "450㎡", year: "2023" },
    { img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=700&h=500&fit=crop", name: "제주 풀빌라", cat: "리조트", area: "280㎡", year: "2023" },
    { img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=700&h=500&fit=crop", name: "성수 복합문화", cat: "복합", area: "520㎡", year: "2023" },
    { img: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=700&h=500&fit=crop", name: "양평 세컨드하우스", cat: "주거", area: "200㎡", year: "2022" },
  ];
  return (
    <div className="min-h-screen bg-[#f3f1ec]">
      <BackButton /><Badge />

      {/* Nav */}
      <nav className="border-b-2 border-black">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">
          <span className="text-3xl font-black uppercase leading-none tracking-tight" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>ARCHI<span className="text-red-600">.</span>STUDIO</span>
          <div className="hidden items-center gap-8 md:flex">
            {["Projects","About","Awards","Contact"].map(l => <span key={l} className="text-sm font-medium uppercase text-black/40 cursor-default hover:text-black transition-colors">{l}</span>)}
          </div>
        </div>
      </nav>

      {/* Hero — split with massive type */}
      <section className="border-b-2 border-black">
        <div className="grid lg:grid-cols-12">
          <div className="lg:col-span-5 lg:border-r-2 border-black px-8 py-20 lg:py-28 flex flex-col justify-between">
            <div>
              <div className="mb-6 flex items-center gap-4">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/25">Est. 2004</span>
                <div className="h-px flex-1 bg-black/10" />
                <span className="h-2.5 w-2.5 rounded-full bg-red-600" />
              </div>
              <h1 className="text-7xl font-black leading-[0.85] tracking-[-0.03em] text-black sm:text-8xl lg:text-[100px]" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                공간에<br />이야기를<br />담다
              </h1>
            </div>
            <p className="mt-12 max-w-sm text-sm leading-relaxed text-black/35">
              주거, 상업, 공공 건축까지. 20년간 축적된 설계 노하우로 당신만의 공간을 완성합니다.
            </p>
          </div>
          <div className="lg:col-span-7">
            <img src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=900&h=600&fit=crop" alt="" className="h-full w-full object-cover min-h-[400px]" loading="lazy" />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b-2 border-black">
        <div className="mx-auto grid max-w-7xl grid-cols-2 sm:grid-cols-4">
          {[{ n: "120+", l: "프로젝트" },{ n: "20", l: "년 경력" },{ n: "15", l: "수상" },{ n: "98%", l: "만족도" }].map((s, i) => (
            <div key={s.l} className={`px-8 py-8 sm:py-10 ${i < 3 ? "border-r-2 border-black" : ""}`}>
              <div className="text-4xl font-black tracking-tight text-black sm:text-5xl" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>{s.n}</div>
              <div className="mt-1 text-[10px] font-medium uppercase tracking-wider text-black/25">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Horizontal Scroll Projects */}
      <section className="py-20 px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/25">Selected Works</span>
              <h2 className="mt-1 text-4xl font-black tracking-tight" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>프로젝트</h2>
            </div>
            <span className="text-sm text-black/25 cursor-default">SCROLL →</span>
          </div>
          <div className="flex gap-5 overflow-x-auto scrollbar-hide pb-4" style={{ scrollSnapType: "x mandatory" }}>
            {projects.map((p, i) => (
              <div key={i} className="group w-[75vw] shrink-0 sm:w-[50vw] lg:w-[38vw]" style={{ scrollSnapAlign: "start" }}>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={p.img} alt="" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" loading="lazy" />
                  <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/40" />
                  <div className="absolute inset-0 flex items-end p-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/60">{p.cat}</span>
                      <h3 className="text-xl font-black text-white" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>{p.name}</h3>
                    </div>
                  </div>
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl font-black text-black/[0.06]" style={{ fontFamily: "'Bebas Neue'" }}>{String(i + 1).padStart(2, "0")}</span>
                    <span className="text-sm font-bold text-black">{p.name}</span>
                  </div>
                  <div className="flex gap-4 text-xs text-black/25">
                    <span>{p.area}</span><span>{p.year}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-black py-24 px-8 text-white">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-16 text-center text-5xl font-black tracking-tight" style={{ fontFamily: "'Bebas Neue'" }}>작업 프로세스</h2>
          <div className="grid gap-0 sm:grid-cols-4">
            {[{ n: "01", t: "상담", d: "라이프스타일과 요구사항을 깊이 이해합니다." },{ n: "02", t: "설계", d: "컨셉부터 실시공 도면까지 정밀하게." },{ n: "03", t: "시공", d: "검증된 파트너와 함께 품질 관리." },{ n: "04", t: "완성", d: "세밀한 마감 점검 후 인도." }].map((s, i) => (
              <div key={s.n} className={`px-6 py-8 ${i < 3 ? "sm:border-r border-white/10" : ""}`}>
                <span className="text-5xl font-black text-white/[0.04]" style={{ fontFamily: "'Bebas Neue'" }}>{s.n}</span>
                <h3 className="mt-2 text-xl font-black" style={{ fontFamily: "'Bebas Neue'" }}>{s.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/35">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="border-b-2 border-black py-20 px-8">
        <div className="mx-auto max-w-5xl">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/25">Recognition</span>
          <div className="mt-8">
            {[{ award: "건축문화대상", org: "대한건축학회", year: "2024" },{ award: "Good Design Award", org: "Japan Institute of Design", year: "2023" },{ award: "Green Building 인증", org: "한국환경건축연구원", year: "2023" }].map((a, i) => (
              <div key={a.award} className="flex items-center justify-between border-t border-black/10 py-5">
                <div className="flex items-center gap-6">
                  <span className="text-3xl font-black text-black/[0.05]" style={{ fontFamily: "'Bebas Neue'" }}>{String(i + 1).padStart(2, "0")}</span>
                  <div><p className="text-lg font-bold text-black">{a.award}</p><p className="text-xs text-black/35">{a.org}</p></div>
                </div>
                <span className="text-sm font-bold text-black/15">{a.year}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-8 text-center">
        <h2 className="text-6xl font-black tracking-tight text-black sm:text-7xl" style={{ fontFamily: "'Bebas Neue'" }}>프로젝트를<span className="text-red-600">.</span><br />의뢰하세요</h2>
        <p className="mt-4 text-sm text-black/25">상담은 무료입니다.</p>
        <span className="mt-8 inline-block border-2 border-black bg-black px-10 py-4 text-sm font-bold uppercase tracking-wider text-white cursor-default">상담 예약</span>
      </section>
      <Credit brand="ARCHI STUDIO" />
    </div>
  );
}

/* ════════════════════════════════════════════
   6. 그린마켓 — Organic Warmth
   ════════════════════════════════════════════ */
function Site6() {
  const products = [
    { img: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&h=400&fit=crop", name: "유기농 방울토마토", price: "4,900", badge: "인기", origin: "충남 부여" },
    { img: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=400&h=400&fit=crop", name: "무농약 바나나", price: "5,500", badge: null, origin: "필리핀" },
    { img: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=400&h=400&fit=crop", name: "제주 당근", price: "3,200", badge: "제철", origin: "제주 서귀포" },
    { img: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=400&h=400&fit=crop", name: "유기농 블루베리", price: "7,200", badge: null, origin: "전남 담양" },
  ];
  return (
    <div className="min-h-screen bg-[#fffdf7]" style={{ fontFamily: "system-ui, sans-serif" }}>
      <BackButton /><Badge />

      {/* Nav */}
      <nav className="border-b border-[#e8e0d0] bg-[#fffdf7]">
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

      {/* Hero with organic blobs */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#f0e6d0] via-[#e8f0e0] to-[#f5efe0]" />
        {/* Morphing blobs */}
        <div className="pointer-events-none absolute top-0 right-[-5%] h-72 w-72 bg-[#c5e1a5]/25 blur-[40px]" style={{ animation: "morph-blob 8s ease-in-out infinite" }} />
        <div className="pointer-events-none absolute bottom-0 left-[-5%] h-56 w-56 bg-[#ffe0b2]/30 blur-[40px]" style={{ animation: "morph-blob 10s ease-in-out infinite reverse" }} />

        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:py-28">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#2d5016]/20 bg-white/60 px-5 py-2.5 backdrop-blur-sm">
              <span className="text-lg">🌱</span>
              <span className="text-sm font-bold text-[#2d5016]">100% 유기농 인증 식품</span>
            </div>
            <h1 className="mb-6 text-5xl font-extrabold leading-tight text-[#1a1a0e] sm:text-6xl">자연 그대로,<br /><span className="text-[#2d5016]">식탁</span> 위로</h1>
            <p className="mb-8 max-w-md text-base leading-relaxed text-[#8b7355]">농장에서 식탁까지 48시간. 전국 200곳 이상의 인증 농장에서 엄선한 신선 식재료를 새벽 배송합니다.</p>
            <div className="flex items-center gap-4">
              <span className="rounded-full bg-[#2d5016] px-8 py-4 text-base font-bold text-white shadow-lg shadow-[#2d5016]/15 cursor-default">첫 주문 30% 할인</span>
              <span className="text-sm font-semibold text-[#2d5016] cursor-default">자세히 →</span>
            </div>
          </div>
          <div className="relative flex justify-center">
            <div className="relative">
              <div className="absolute -inset-3 rounded-[2rem] bg-[#2d5016]/[0.04] rotate-3" />
              <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=500&h=500&fit=crop" alt="" className="relative rounded-[1.5rem] shadow-xl w-full max-w-[400px]" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* Wavy divider */}
      <div className="relative h-12 -mt-1"><svg className="absolute bottom-0 w-full" viewBox="0 0 1440 48" preserveAspectRatio="none" fill="#fffdf7"><path d="M0,48 L0,16 Q180,48 360,16 Q540,-16 720,16 Q900,48 1080,16 Q1260,-16 1440,16 L1440,48Z" /></svg></div>

      {/* Products */}
      <section className="py-16 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex items-end justify-between">
            <div><span className="text-sm font-bold text-[#e67e22]">🥬 이번 주 추천</span><h2 className="mt-1 text-3xl font-extrabold text-[#1a1a0e]">제철 신선 식품</h2></div>
            <span className="text-sm font-bold text-[#2d5016] cursor-default">전체 보기 →</span>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((p, i) => (
              <div key={i} className="group overflow-hidden rounded-2xl bg-white border border-[#e8e0d0] shadow-sm transition-all hover:shadow-lg hover:-translate-y-1">
                <div className="relative aspect-square overflow-hidden bg-[#f5f0e8]">
                  <img src={p.img} alt="" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                  {p.badge && <span className="absolute top-3 left-3 rounded-full bg-[#e67e22] px-3 py-1 text-[11px] font-bold text-white">{p.badge}</span>}
                </div>
                <div className="p-5">
                  <span className="text-[10px] font-medium text-[#8b7355] bg-[#f5f0e8] px-2 py-0.5 rounded-full">📍 {p.origin}</span>
                  <h3 className="mt-2 text-base font-bold text-[#1a1a0e]">{p.name}</h3>
                  <div className="mt-1 flex items-baseline gap-1"><span className="text-xl font-extrabold text-[#2d5016]">₩{p.price}</span></div>
                  <span className="mt-3 block w-full rounded-xl bg-[#2d5016] py-2.5 text-center text-sm font-bold text-white cursor-default">담기</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Farm to Table */}
      <section className="bg-[#f5f0e8] py-20 px-6">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-4 text-center text-3xl font-extrabold text-[#1a1a0e]">농장에서 식탁까지</h2>
          <p className="mb-12 text-center text-[#8b7355]">가장 신선한 상태로 배송됩니다</p>
          <div className="grid gap-6 sm:grid-cols-4">
            {[{ icon: "🌾", step: "수확", desc: "인증 농장에서 당일 수확", time: "Day 1 AM" },{ icon: "✅", step: "검수", desc: "전문 검수팀 품질 확인", time: "Day 1 PM" },{ icon: "📦", step: "포장", desc: "친환경 보냉 패키지", time: "Day 1 PM" },{ icon: "🚛", step: "배송", desc: "새벽 배송 아침 도착", time: "Day 2 AM" }].map((s, i) => (
              <div key={s.step} className="relative text-center">
                {i < 3 && <div className="absolute top-8 left-[60%] hidden h-0.5 w-[80%] border-t-2 border-dashed border-[#2d5016]/15 lg:block" />}
                <div className="relative mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-3xl shadow-sm border border-[#e8e0d0]">{s.icon}</div>
                <h3 className="mb-1 text-lg font-bold text-[#1a1a0e]">{s.step}</h3>
                <p className="text-sm text-[#8b7355]">{s.desc}</p>
                <span className="mt-2 inline-block text-[10px] font-bold text-[#2d5016]/40">{s.time}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recipe Card */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-10 text-center text-2xl font-extrabold text-[#1a1a0e]">이번 주 레시피</h2>
          <div className="overflow-hidden rounded-3xl bg-white border border-[#e8e0d0] shadow-sm">
            <div className="grid lg:grid-cols-2">
              <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&h=500&fit=crop" alt="" className="h-full w-full object-cover min-h-[300px]" loading="lazy" />
              <div className="p-8 lg:p-10">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#e67e22]">WEEKLY RECIPE</span>
                <h3 className="mt-2 text-2xl font-extrabold text-[#1a1a0e]">유기농 토마토 카프레제</h3>
                <p className="mt-3 text-sm text-[#8b7355] leading-relaxed">신선한 유기농 방울토마토와 모짜렐라, 바질로 만드는 간단하고 맛있는 샐러드.</p>
                <div className="mt-5 flex gap-2 flex-wrap">
                  {["방울토마토","모짜렐라","바질","올리브오일","발사믹"].map(t => (
                    <span key={t} className="rounded-full bg-[#f5f0e8] px-3 py-1 text-xs font-medium text-[#5a4a32] border border-[#e8e0d0]">{t}</span>
                  ))}
                </div>
                <div className="mt-6 space-y-3">
                  {["토마토를 반으로 자릅니다","모짜렐라를 슬라이스합니다","바질과 함께 플레이팅","올리브오일과 발사믹을 뿌립니다"].map((s, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#2d5016] text-[10px] font-bold text-white">{i + 1}</span>
                      <span className="text-sm text-[#5a4a32] pt-0.5">{s}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subscription */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl bg-gradient-to-br from-[#2d5016] to-[#1a3a0a]">
          <div className="grid lg:grid-cols-2">
            <div className="p-10 lg:p-14">
              <span className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm font-bold text-white/80">🥬 정기 구독</span>
              <h2 className="mb-4 text-3xl font-extrabold text-white sm:text-4xl">매주 새로운<br />제철 식재료를</h2>
              <p className="mb-8 text-white/50 leading-relaxed">매주 또는 격주로 엄선된 제철 식재료가 문 앞에 도착합니다. 언제든 건너뛰기 · 해지 가능.</p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[{ t: "주 1회 박스", p: "₩29,900/주", items: "8~10가지" },{ t: "주 2회 박스", p: "₩49,900/주", items: "15~18가지" }].map(b => (
                  <div key={b.t} className="rounded-2xl bg-white/10 p-5 text-center border border-white/5">
                    <p className="text-sm font-bold text-white">{b.t}</p>
                    <p className="mt-1 text-xl font-extrabold text-white">{b.p}</p>
                    <p className="mt-1 text-xs text-white/40">{b.items}</p>
                  </div>
                ))}
              </div>
              <span className="inline-block rounded-full bg-white px-8 py-3.5 text-sm font-bold text-[#2d5016] shadow-lg cursor-default">구독 시작하기 →</span>
            </div>
            <div className="relative hidden lg:block"><img src="https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=600&h=600&fit=crop" alt="" className="h-full w-full object-cover" loading="lazy" /></div>
          </div>
        </div>
      </section>

      {/* Farmer Profiles */}
      <section className="bg-[#f5f0e8] py-20 px-6">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-10 text-center text-2xl font-extrabold text-[#1a1a0e]">파트너 농장</h2>
          <div className="grid gap-5 sm:grid-cols-3">
            {[
              { name: "김재호 농부", farm: "부여 해오름 농장", desc: "30년간 유기농 토마토를 재배하고 있습니다.", emoji: "🧑‍🌾" },
              { name: "이수진 농부", farm: "담양 초록빛 농원", desc: "무농약 블루베리와 딸기를 정성껏 키웁니다.", emoji: "👩‍🌾" },
              { name: "박영수 농부", farm: "제주 하늘농장", desc: "제주 화산토에서 자란 당근, 감귤을 생산합니다.", emoji: "🧑‍🌾" },
            ].map(f => (
              <div key={f.name} className="rounded-2xl bg-white p-6 border border-[#e8e0d0] text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#f5f0e8] text-3xl">{f.emoji}</div>
                <p className="font-bold text-[#1a1a0e]">{f.name}</p>
                <p className="text-xs font-medium text-[#2d5016]">{f.farm}</p>
                <p className="mt-3 text-sm text-[#8b7355] leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-6 text-center">
        <div className="mx-auto flex max-w-3xl flex-wrap justify-center gap-12">
          {[{ v: "200+", l: "파트너 농장", i: "🌿" },{ v: "48h", l: "수확→배송", i: "⏰" },{ v: "4.9", l: "고객 만족도", i: "⭐" },{ v: "50만+", l: "누적 주문", i: "📦" }].map(s => (
            <div key={s.l}><div className="text-3xl mb-2">{s.i}</div><div className="text-4xl font-extrabold text-[#2d5016]">{s.v}</div><div className="mt-1 text-sm text-[#8b7355]">{s.l}</div></div>
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
