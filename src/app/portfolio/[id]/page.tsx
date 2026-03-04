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
   1. NeuralX — 다크 AI 테크 기업
   ════════════════════════════════════════════ */
function Site1() {
  return (
    <div className="min-h-screen bg-[#08090f] text-white">
      <BackButton /><Badge />
      {/* Nav */}
      <nav className="border-b border-white/5">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <span className="text-xl font-bold tracking-tight">Neural<span className="text-cyan-400">X</span></span>
          <div className="hidden items-center gap-8 md:flex">
            {["제품","솔루션","리소스","회사 소개"].map(l => <span key={l} className="text-sm text-slate-400 cursor-default">{l}</span>)}
            <span className="rounded-lg bg-cyan-500 px-5 py-2 text-sm font-semibold text-black cursor-default">데모 신청</span>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden px-6 py-32 sm:py-40">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 left-1/4 h-[600px] w-[600px] rounded-full bg-cyan-500/8 blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 h-[400px] w-[400px] rounded-full bg-indigo-500/8 blur-[100px]" />
        </div>
        <div className="pointer-events-none absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: "linear-gradient(rgba(34,211,238,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.6) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }} />
        <div className="relative mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-800/40 bg-cyan-950/40 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-xs font-medium text-cyan-300">Enterprise AI Platform</span>
          </div>
          <h1 className="mb-6 text-5xl font-extrabold leading-tight tracking-tight sm:text-7xl">
            데이터에서 인사이트를,<br />인사이트에서 <span className="text-cyan-400">성장</span>을
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-slate-400">
            차세대 인공지능 솔루션으로 비즈니스 의사결정을 자동화하세요.
            실시간 데이터 처리부터 예측 분석까지, 올인원 AI 플랫폼을 제공합니다.
          </p>
          <div className="flex justify-center gap-4">
            <span className="rounded-lg bg-cyan-500 px-8 py-4 text-base font-bold text-black cursor-default">무료 데모 시작</span>
            <span className="rounded-lg border border-slate-700 px-8 py-4 text-base font-medium text-slate-300 cursor-default">기술 문서 →</span>
          </div>
        </div>
      </section>

      {/* Trusted by — 로고 대신 텍스트 */}
      <section className="border-y border-white/5 py-8 px-6">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-x-12 gap-y-4">
          <span className="text-xs uppercase tracking-widest text-slate-600">Trusted by</span>
          {["Fortune 500 기업","국내 대형 은행","글로벌 이커머스","헬스케어 그룹"].map(c => (
            <span key={c} className="text-sm font-medium text-slate-500">{c}</span>
          ))}
        </div>
      </section>

      {/* Bento feature grid */}
      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: "🧠", title: "딥러닝 엔진", desc: "자체 개발 AI 모델로 99.2% 정확도를 달성합니다. 학습 데이터가 쌓일수록 더 똑똑해집니다.", large: true },
            { icon: "⚡", title: "실시간 처리", desc: "밀리초 단위 응답으로 즉각적인 비즈니스 인사이트를 확인하세요." },
            { icon: "🔒", title: "엔터프라이즈 보안", desc: "SOC2, ISO27001 인증 보안 체계를 갖추고 있습니다." },
            { icon: "📊", title: "시각화 대시보드", desc: "복잡한 데이터를 직관적인 차트와 그래프로 한눈에 파악하세요." },
            { icon: "🔗", title: "API 연동", desc: "RESTful API로 기존 시스템과 빠르게 통합 가능합니다." },
            { icon: "☁️", title: "멀티 클라우드", desc: "AWS, GCP, Azure 등 원하는 클라우드에 배포할 수 있습니다." },
          ].map((f, i) => (
            <div key={f.title} className={`rounded-2xl border border-white/5 bg-white/[0.02] p-8 transition-all hover:border-cyan-500/30 hover:bg-cyan-500/5 ${f.large ? "lg:col-span-2 lg:row-span-1" : ""}`}>
              <div className="mb-4 text-3xl">{f.icon}</div>
              <h3 className="mb-2 text-lg font-bold">{f.title}</h3>
              <p className="text-sm leading-relaxed text-slate-400">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 데이터 시각화 섹션 */}
      <section className="border-y border-white/5 bg-white/[0.01] py-24 px-6">
        <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-2">
          <div>
            <span className="mb-4 inline-block text-xs font-bold uppercase tracking-widest text-cyan-500">Real-time Analytics</span>
            <h2 className="mb-6 text-3xl font-extrabold sm:text-4xl">데이터를 실시간으로 시각화합니다</h2>
            <p className="mb-8 text-slate-400 leading-relaxed">
              수백만 건의 데이터를 밀리초 안에 처리하고, 직관적인 대시보드로 표현합니다.
              이상 징후 탐지, 트렌드 예측, 자동 리포팅까지 모두 자동으로 수행됩니다.
            </p>
            <div className="grid grid-cols-3 gap-4">
              {[{ v: "99.2%", l: "정확도" }, { v: "<50ms", l: "응답 속도" }, { v: "10M+", l: "일일 처리" }].map(s => (
                <div key={s.l} className="rounded-xl border border-white/5 bg-white/[0.02] p-4 text-center">
                  <div className="text-2xl font-bold text-cyan-400">{s.v}</div>
                  <div className="mt-1 text-xs text-slate-500">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6">
            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop" alt="" className="w-full rounded-xl" loading="lazy" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center">
        <h2 className="mb-4 text-3xl font-extrabold sm:text-4xl">지금 바로 시작하세요</h2>
        <p className="mx-auto mb-8 max-w-xl text-slate-400">14일 무료 체험으로 NeuralX의 AI 분석 플랫폼을 경험해 보세요. 카드 등록이 필요 없습니다.</p>
        <span className="inline-block rounded-lg bg-cyan-500 px-10 py-4 text-base font-bold text-black cursor-default">무료 데모 신청</span>
      </section>
      <Credit brand="NeuralX" dark />
    </div>
  );
}

/* ════════════════════════════════════════════
   2. MAISON ÉLITE — 럭셔리 패션 쇼핑몰
   ════════════════════════════════════════════ */
function Site2() {
  const products = [
    { img: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=800&fit=crop", name: "캐시미어 오버코트", price: "₩890,000", tag: "NEW" },
    { img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&h=800&fit=crop", name: "실크 블라우스", price: "₩320,000", tag: null },
    { img: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&h=800&fit=crop", name: "테일러드 재킷", price: "₩580,000", tag: "BEST" },
    { img: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=600&h=800&fit=crop", name: "플리츠 스커트", price: "₩270,000", tag: null },
  ];
  return (
    <div className="min-h-screen bg-[#faf8f5]">
      <BackButton /><Badge />
      {/* Nav */}
      <nav className="border-b border-stone-200/50">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-6">
          <span className="font-serif text-2xl font-light tracking-[0.2em] text-stone-900">MAISON ÉLITE</span>
          <div className="hidden items-center gap-10 md:flex">
            {["NEW IN","WOMEN","MEN","ACCESSORIES","SALE"].map(l => <span key={l} className="text-[11px] font-medium uppercase tracking-[0.15em] text-stone-500 cursor-default">{l}</span>)}
          </div>
        </div>
      </nav>

      {/* Hero — split layout */}
      <section className="grid lg:grid-cols-2">
        <div className="flex items-center px-8 py-24 lg:px-16 lg:py-32">
          <div>
            <span className="mb-6 inline-block text-[10px] font-medium uppercase tracking-[0.25em] text-rose-400">2025 Spring/Summer</span>
            <h1 className="mb-6 font-serif text-5xl font-light leading-[1.15] text-stone-900 lg:text-6xl">
              시간이 지나도<br />변하지 않는 가치
            </h1>
            <p className="mb-10 max-w-md text-base leading-relaxed text-stone-500">
              전 세계 프리미엄 브랜드를 한곳에서 만나보세요.
              감각적인 큐레이션으로 특별한 쇼핑 경험을 선사합니다.
            </p>
            <span className="inline-block border-b-2 border-stone-900 pb-1 text-sm font-medium uppercase tracking-[0.15em] text-stone-900 cursor-default">
              컬렉션 보기 →
            </span>
          </div>
        </div>
        <div className="relative min-h-[500px]">
          <img src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=900&h=900&fit=crop" alt="" className="h-full w-full object-cover" />
        </div>
      </section>

      {/* Marquee */}
      <div className="overflow-hidden border-y border-stone-200/50 bg-white py-4">
        <div className="flex animate-[marquee_20s_linear_infinite] gap-12 whitespace-nowrap">
          {[...Array(2)].flatMap(() => ["FREE SHIPPING","WORLDWIDE DELIVERY","100% AUTHENTIC","VIP MEMBERSHIP","PERSONAL STYLING","FREE RETURNS"]).map((t, i) => (
            <span key={i} className="text-[11px] font-medium uppercase tracking-[0.2em] text-stone-400">{t}</span>
          ))}
        </div>
      </div>

      {/* Editorial grid */}
      <section className="px-8 py-20 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-rose-400">Editor&apos;s Pick</span>
              <h2 className="mt-2 font-serif text-3xl font-light text-stone-900">이번 시즌 추천</h2>
            </div>
            <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-stone-400 cursor-default">View All →</span>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((p, i) => (
              <div key={i} className="group">
                <div className="relative aspect-[3/4] overflow-hidden bg-stone-100">
                  <img src={p.img} alt="" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                  {p.tag && <span className="absolute top-3 left-3 bg-stone-900 px-2.5 py-1 text-[10px] font-bold text-white">{p.tag}</span>}
                </div>
                <div className="mt-4">
                  <h3 className="text-sm font-medium text-stone-900">{p.name}</h3>
                  <p className="mt-1 text-sm text-stone-500">{p.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full-width lookbook image */}
      <section className="relative h-[60vh] overflow-hidden">
        <img src="https://images.unsplash.com/photo-1445205170230-053b83016050?w=1600&h=800&fit=crop" alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
          <div className="text-center">
            <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-white/70">Lookbook</span>
            <h2 className="mt-2 font-serif text-4xl font-light text-white sm:text-5xl">The Art of Dressing</h2>
          </div>
        </div>
      </section>

      {/* Service strip */}
      <section className="border-y border-stone-200/50 bg-white">
        <div className="mx-auto grid max-w-7xl divide-y divide-stone-100 sm:grid-cols-4 sm:divide-x sm:divide-y-0">
          {[
            { icon: "✦", t: "무료 배송", d: "10만원 이상 구매 시" },
            { icon: "◇", t: "정품 보증", d: "100% 정품만 취급" },
            { icon: "↻", t: "무료 반품", d: "14일 이내 무료" },
            { icon: "♔", t: "VIP 혜택", d: "멤버십 전용 세일" },
          ].map(s => (
            <div key={s.t} className="px-8 py-10 text-center">
              <div className="mb-3 text-lg text-stone-400">{s.icon}</div>
              <h3 className="text-sm font-semibold text-stone-900">{s.t}</h3>
              <p className="mt-1 text-xs text-stone-400">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Press section instead of testimonial */}
      <section className="py-20 px-8 text-center">
        <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-stone-400">Press</span>
        <p className="mx-auto mt-6 max-w-2xl font-serif text-2xl font-light leading-relaxed text-stone-700">
          &ldquo;국내 프리미엄 편집숍의 새로운 기준을 제시하는 플랫폼&rdquo;
        </p>
        <p className="mt-4 text-xs uppercase tracking-widest text-stone-400">— Fashion Magazine Korea</p>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-stone-900 py-20 px-6 text-center">
        <h2 className="mb-3 font-serif text-2xl font-light text-white">뉴스레터 구독</h2>
        <p className="mb-8 text-sm text-stone-400">새로운 컬렉션과 시크릿 세일 정보를 가장 먼저 받아보세요.</p>
        <div className="mx-auto flex max-w-md gap-2">
          <div className="flex-1 rounded-lg border border-stone-700 bg-stone-800 px-4 py-3 text-sm text-stone-500">이메일 주소</div>
          <span className="rounded-lg bg-white px-6 py-3 text-sm font-semibold text-stone-900 cursor-default">구독</span>
        </div>
      </section>
      <Credit brand="MAISON ÉLITE" />
    </div>
  );
}

/* ════════════════════════════════════════════
   3. FlowDesk — SaaS 프로덕트
   ════════════════════════════════════════════ */
function Site3() {
  return (
    <div className="min-h-screen bg-white">
      <BackButton /><Badge />
      {/* Nav */}
      <nav className="border-b border-slate-100">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <span className="text-xl font-extrabold text-indigo-600">FlowDesk</span>
          <div className="hidden items-center gap-6 md:flex">
            {["기능","가격","고객사","블로그"].map(l => <span key={l} className="text-sm text-slate-500 cursor-default">{l}</span>)}
            <span className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 cursor-default">로그인</span>
            <span className="rounded-lg bg-indigo-600 px-5 py-2 text-sm font-semibold text-white cursor-default">무료 시작</span>
          </div>
        </div>
      </nav>

      {/* Hero with browser mockup */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-violet-50 px-6 py-24">
        <div className="mx-auto max-w-6xl text-center">
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-indigo-100 bg-white px-5 py-2 shadow-sm">
            <div className="flex -space-x-2">
              {[...Array(4)].map((_, i) => <div key={i} className="h-6 w-6 rounded-full border-2 border-white bg-gradient-to-br from-indigo-400 to-violet-500" />)}
            </div>
            <span className="text-sm text-slate-600"><strong className="text-indigo-600">2,000+</strong> 팀이 사용 중</span>
          </div>
          <h1 className="mb-6 text-5xl font-extrabold leading-tight text-slate-900 sm:text-6xl">
            흩어진 업무를<br />하나로 모으세요
          </h1>
          <p className="mx-auto mb-10 max-w-xl text-lg text-slate-500">
            프로젝트 관리, 실시간 소통, 문서 협업까지 하나의 워크스페이스에서 해결하세요.
          </p>
          <div className="flex justify-center gap-4">
            <span className="rounded-xl bg-indigo-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-indigo-500/25 cursor-default">14일 무료 체험</span>
            <span className="rounded-xl border border-slate-200 bg-white px-8 py-4 text-base font-semibold text-slate-700 cursor-default">데모 보기 →</span>
          </div>
          {/* Browser mockup */}
          <div className="mx-auto mt-16 max-w-4xl overflow-hidden rounded-2xl border border-slate-200 shadow-2xl shadow-indigo-500/10">
            <div className="flex items-center gap-2 border-b border-slate-100 bg-slate-50 px-4 py-3">
              <div className="flex gap-1.5"><div className="h-3 w-3 rounded-full bg-red-400" /><div className="h-3 w-3 rounded-full bg-yellow-400" /><div className="h-3 w-3 rounded-full bg-green-400" /></div>
              <div className="ml-4 flex-1 rounded-md bg-white px-3 py-1 text-xs text-slate-400">app.flowdesk.io/workspace</div>
            </div>
            <img src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=1200&h=600&fit=crop" alt="" className="w-full" loading="lazy" />
          </div>
        </div>
      </section>

      {/* Feature grid */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-center text-3xl font-extrabold text-slate-900">하나의 플랫폼, 모든 기능</h2>
          <p className="mx-auto mb-16 max-w-xl text-center text-slate-500">더 이상 여러 도구를 오가지 마세요.</p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: "📋", title: "프로젝트 관리", desc: "칸반, 타임라인, 캘린더 뷰를 자유롭게 전환하며 프로젝트를 관리하세요.", color: "bg-indigo-50 border-indigo-100" },
              { icon: "💬", title: "팀 메시징", desc: "채널별 실시간 메시지로 이메일 없이 빠르게 소통할 수 있습니다.", color: "bg-violet-50 border-violet-100" },
              { icon: "📄", title: "문서 협업", desc: "팀 위키를 만들고, 실시간으로 함께 편집하세요.", color: "bg-blue-50 border-blue-100" },
              { icon: "📈", title: "분석 리포트", desc: "팀 생산성과 프로젝트 진행률을 자동으로 측정합니다.", color: "bg-emerald-50 border-emerald-100" },
              { icon: "🔗", title: "500+ 연동", desc: "Slack, GitHub, Figma, Google Drive 등 기존 도구와 바로 연결됩니다.", color: "bg-amber-50 border-amber-100" },
              { icon: "🛡️", title: "보안", desc: "엔터프라이즈급 암호화와 접근 권한 관리로 데이터를 보호합니다.", color: "bg-rose-50 border-rose-100" },
            ].map(f => (
              <div key={f.title} className={`rounded-2xl border p-8 ${f.color} transition-all hover:shadow-lg`}>
                <div className="mb-4 text-3xl">{f.icon}</div>
                <h3 className="mb-2 text-lg font-bold text-slate-900">{f.title}</h3>
                <p className="text-sm leading-relaxed text-slate-500">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="border-y border-slate-100 bg-slate-50 py-24 px-6">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-12 text-center text-3xl font-extrabold text-slate-900">왜 FlowDesk인가요?</h2>
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-100 bg-slate-50">
                  <th className="px-6 py-4 text-left font-medium text-slate-500">기능</th>
                  <th className="px-6 py-4 text-center font-bold text-indigo-600">FlowDesk</th>
                  <th className="px-6 py-4 text-center font-medium text-slate-400">기존 도구</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["올인원 워크스페이스", true, false],
                  ["실시간 협업 편집", true, false],
                  ["내장 메시징", true, false],
                  ["자동 분석 리포트", true, false],
                  ["무료 플랜", true, true],
                ].map(([label, a, b], i) => (
                  <tr key={i} className="border-b border-slate-50">
                    <td className="px-6 py-3.5 text-slate-700">{label as string}</td>
                    <td className="px-6 py-3.5 text-center">{a ? <span className="text-indigo-600 font-bold">✓</span> : <span className="text-slate-300">—</span>}</td>
                    <td className="px-6 py-3.5 text-center">{b ? <span className="text-slate-400">✓</span> : <span className="text-slate-300">—</span>}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-center text-3xl font-extrabold text-slate-900">심플한 가격 정책</h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              { name: "Free", price: "₩0", desc: "5명까지 무료", features: ["기본 프로젝트 관리","팀 채팅","1GB 저장소"] },
              { name: "Pro", price: "₩15,000", desc: "사용자당/월", features: ["무제한 프로젝트","문서 협업","분석 리포트","100GB 저장소"], pop: true },
              { name: "Enterprise", price: "별도 문의", desc: "대기업 전용", features: ["전용 지원 매니저","SSO/SAML","감사 로그","무제한 저장소"] },
            ].map(p => (
              <div key={p.name} className={`flex flex-col rounded-2xl border p-8 ${p.pop ? "border-indigo-300 shadow-xl relative" : "border-slate-200"}`}>
                {p.pop && <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-indigo-600 px-3 py-0.5 text-[10px] font-bold text-white">추천</span>}
                <h3 className="text-lg font-bold text-slate-900">{p.name}</h3>
                <div className="mt-2 text-3xl font-extrabold text-slate-900">{p.price}</div>
                <p className="mb-6 text-sm text-slate-400">{p.desc}</p>
                <ul className="mb-8 flex-1 space-y-2">
                  {p.features.map(f => <li key={f} className="flex items-center gap-2 text-sm text-slate-600"><span className="text-indigo-500">✓</span>{f}</li>)}
                </ul>
                <span className={`block rounded-xl py-3 text-center text-sm font-semibold cursor-default ${p.pop ? "bg-indigo-600 text-white" : "bg-slate-100 text-slate-700"}`}>
                  시작하기
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Credit brand="FlowDesk" />
    </div>
  );
}

/* ════════════════════════════════════════════
   4. VitaTrack — 헬스케어 앱
   ════════════════════════════════════════════ */
function Site4() {
  return (
    <div className="min-h-screen bg-blue-50/30">
      <BackButton /><Badge />
      {/* Nav */}
      <nav className="bg-white/80 backdrop-blur border-b border-blue-100/50">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <span className="text-xl font-extrabold text-blue-600">VitaTrack</span>
          <div className="hidden items-center gap-6 md:flex">
            {["기능","요금","후기"].map(l => <span key={l} className="text-sm text-slate-500 cursor-default">{l}</span>)}
            <span className="rounded-full bg-blue-600 px-6 py-2 text-sm font-semibold text-white cursor-default">다운로드</span>
          </div>
        </div>
      </nav>

      {/* Hero — phone mockup */}
      <section className="py-20 px-6">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-1.5">
              <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-xs font-semibold text-blue-700">건강 관리의 새로운 방법</span>
            </div>
            <h1 className="mb-6 text-4xl font-extrabold text-slate-900 sm:text-5xl">
              내 몸의 데이터를<br />한눈에 관리하세요
            </h1>
            <p className="mb-8 max-w-md text-lg leading-relaxed text-slate-500">
              심박수, 수면, 운동, 영양까지. 웨어러블 기기와 자동 연동되는
              올인원 헬스케어 대시보드입니다.
            </p>
            <div className="flex items-center gap-3">
              <span className="rounded-full bg-blue-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 cursor-default">무료로 시작</span>
              <span className="rounded-full border border-slate-200 bg-white px-8 py-3.5 text-sm font-semibold text-slate-700 cursor-default">영상 보기 →</span>
            </div>
            {/* Rating */}
            <div className="mt-8 flex items-center gap-3">
              <div className="flex text-yellow-400">{"★★★★★"}</div>
              <span className="text-sm text-slate-500">앱스토어 평점 4.9</span>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-[280px] rounded-[2.5rem] border-[10px] border-slate-800 bg-white shadow-2xl">
              <div className="mx-auto mt-3 mb-2 h-5 w-20 rounded-full bg-slate-800" />
              <img src="https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600&h=900&fit=crop" alt="" className="w-full rounded-b-[1.8rem]" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* Metric cards */}
      <section className="py-16 px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-10 text-center text-2xl font-extrabold text-slate-900">오늘의 건강 요약</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: "❤️", val: "72", unit: "BPM", label: "심박수", bg: "bg-red-50 border-red-100" },
              { icon: "😴", val: "7.5", unit: "시간", label: "수면", bg: "bg-indigo-50 border-indigo-100" },
              { icon: "🏃", val: "8,420", unit: "걸음", label: "활동량", bg: "bg-emerald-50 border-emerald-100" },
              { icon: "🍎", val: "1,850", unit: "kcal", label: "칼로리", bg: "bg-amber-50 border-amber-100" },
            ].map(m => (
              <div key={m.label} className={`rounded-3xl border p-6 ${m.bg}`}>
                <div className="mb-3 text-2xl">{m.icon}</div>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-3xl font-extrabold text-slate-900">{m.val}</span>
                  <span className="text-sm font-medium text-slate-500">{m.unit}</span>
                </div>
                <p className="mt-1 text-sm font-medium text-slate-600">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Report section */}
      <section className="py-20 px-6">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop" alt="" className="rounded-3xl shadow-xl" loading="lazy" />
          <div>
            <span className="mb-3 inline-block text-xs font-bold uppercase tracking-wider text-blue-600">AI Health Report</span>
            <h2 className="mb-6 text-3xl font-extrabold text-slate-900">AI가 분석하는 맞춤 건강 리포트</h2>
            <p className="mb-8 text-slate-500 leading-relaxed">
              축적된 건강 데이터를 AI가 종합 분석하여 주간 리포트를 자동 생성합니다.
              개인에게 최적화된 운동 계획과 수면 개선 방안을 제안해 드립니다.
            </p>
            {["주간/월간 건강 트렌드 자동 분석", "맞춤 운동 계획 추천", "수면 패턴 최적화 가이드", "이상 징후 조기 알림"].map(t => (
              <div key={t} className="mb-3 flex items-center gap-3">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100">
                  <svg className="h-3.5 w-3.5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                </div>
                <span className="text-sm text-slate-700">{t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline daily tracking */}
      <section className="bg-white py-20 px-6 border-y border-blue-100/50">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-10 text-center text-2xl font-extrabold text-slate-900">하루를 기록하세요</h2>
          <div className="relative ml-6 border-l-2 border-blue-200 pl-8 space-y-10">
            {[
              { time: "07:00", title: "기상 & 수면 분석", desc: "어젯밤 수면 점수 85점. 깊은 수면 2시간 40분." },
              { time: "08:30", title: "아침 식사 기록", desc: "촬영 한 장으로 자동 칼로리 계산. 420kcal." },
              { time: "12:00", title: "점심 운동", desc: "30분 러닝 자동 감지. 심박수 평균 135 BPM." },
              { time: "22:00", title: "하루 요약 리포트", desc: "목표 달성률 92%. 내일은 스트레칭을 추천합니다." },
            ].map(t => (
              <div key={t.time} className="relative">
                <div className="absolute -left-[2.6rem] top-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-500 ring-4 ring-white">
                  <div className="h-2 w-2 rounded-full bg-white" />
                </div>
                <span className="text-xs font-bold text-blue-500">{t.time}</span>
                <h3 className="mt-1 text-base font-bold text-slate-900">{t.title}</h3>
                <p className="mt-1 text-sm text-slate-500">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section className="py-20 px-6 text-center">
        <h2 className="mb-4 text-3xl font-extrabold text-slate-900">지금 시작하세요</h2>
        <p className="mx-auto mb-8 max-w-md text-slate-500">무료로 다운로드하고, 오늘부터 건강 데이터를 기록하세요.</p>
        <div className="flex justify-center gap-3">
          <span className="rounded-xl bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white cursor-default">App Store</span>
          <span className="rounded-xl bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white cursor-default">Google Play</span>
        </div>
      </section>
      <Credit brand="VitaTrack" />
    </div>
  );
}

/* ════════════════════════════════════════════
   5. ARCHI STUDIO — 미니멀 건축 갤러리
   ════════════════════════════════════════════ */
function Site5() {
  const projects = [
    { img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop", name: "청담 레지던스", area: "320㎡", year: "2024" },
    { img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop", name: "한남 갤러리 카페", area: "180㎡", year: "2024" },
    { img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop", name: "판교 단독주택", area: "450㎡", year: "2023" },
    { img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop", name: "제주 풀빌라", area: "280㎡", year: "2023" },
    { img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop", name: "성수 복합문화공간", area: "520㎡", year: "2023" },
    { img: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop", name: "양평 세컨드하우스", area: "200㎡", year: "2022" },
  ];
  return (
    <div className="min-h-screen bg-white">
      <BackButton /><Badge />
      {/* Nav */}
      <nav className="border-b border-stone-100">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-6">
          <span className="text-sm font-bold uppercase tracking-[0.3em] text-stone-900">ARCHI STUDIO</span>
          <div className="hidden items-center gap-10 md:flex">
            {["PROJECTS","ABOUT","AWARDS","CONTACT"].map(l => <span key={l} className="text-[11px] uppercase tracking-[0.15em] text-stone-400 cursor-default">{l}</span>)}
          </div>
        </div>
      </nav>

      {/* Hero — full bleed image, then text */}
      <section>
        <div className="relative h-[75vh] overflow-hidden">
          <img src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1600&h=900&fit=crop" alt="" className="h-full w-full object-cover" />
        </div>
        <div className="mx-auto max-w-5xl px-8 py-16">
          <div className="grid gap-8 lg:grid-cols-2">
            <h1 className="text-4xl font-light text-stone-900 leading-tight sm:text-5xl">공간에<br />이야기를 담다</h1>
            <p className="self-end text-base leading-relaxed text-stone-500">
              주거, 상업, 공공 건축까지. 20년간 축적된 설계 노하우로
              당신만의 공간을 완성합니다. 자연과 도시가 공존하는 건축,
              사용자의 삶을 담는 공간을 추구합니다.
            </p>
          </div>
        </div>
      </section>

      {/* Project gallery */}
      <section className="px-8 pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex items-end justify-between border-b border-stone-100 pb-4">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-stone-400">Selected Works</span>
            <span className="text-[11px] uppercase tracking-[0.15em] text-stone-400 cursor-default">{projects.length} Projects</span>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p, i) => (
              <div key={i} className={`group ${i === 0 ? "sm:col-span-2 sm:row-span-2" : ""}`}>
                <div className={`relative overflow-hidden bg-stone-100 ${i === 0 ? "aspect-[4/3]" : "aspect-[3/2]"}`}>
                  <img src={p.img} alt="" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                  <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/30" />
                  <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-5 opacity-0 transition-opacity group-hover:opacity-100">
                    <span className="text-sm font-medium text-white">{p.name}</span>
                    <span className="text-xs text-white/70">{p.area}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Numbered process */}
      <section className="border-y border-stone-100 bg-stone-50 py-24 px-8">
        <div className="mx-auto max-w-5xl">
          <div className="mb-16 text-center">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-stone-400">How We Work</span>
          </div>
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { n: "01", t: "상담", d: "고객의 라이프스타일과 요구사항을 깊이 이해합니다." },
              { n: "02", t: "설계", d: "컨셉부터 실시공 도면까지 정밀하게 설계합니다." },
              { n: "03", t: "시공", d: "검증된 시공 파트너와 함께 품질을 관리합니다." },
              { n: "04", t: "완성", d: "세밀한 마감 점검 후 공간을 인도합니다." },
            ].map(s => (
              <div key={s.n}>
                <span className="text-4xl font-extralight text-stone-200">{s.n}</span>
                <h3 className="mt-3 text-lg font-bold text-stone-900">{s.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-500">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-20 px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-stone-400">Recognition</span>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {[
              { award: "건축문화대상", org: "대한건축학회", year: "2024" },
              { award: "Good Design Award", org: "Japan Institute of Design", year: "2023" },
              { award: "Green Building 인증", org: "한국환경건축연구원", year: "2023" },
            ].map(a => (
              <div key={a.award} className="rounded-xl border border-stone-100 p-6">
                <p className="text-sm font-bold text-stone-900">{a.award}</p>
                <p className="mt-1 text-xs text-stone-400">{a.org}</p>
                <p className="mt-1 text-xs text-stone-300">{a.year}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-stone-900 py-20 px-8 text-center">
        <h2 className="mb-3 text-2xl font-light text-white">프로젝트를 의뢰하고 싶으신가요?</h2>
        <p className="mb-8 text-sm text-stone-400">상담은 무료입니다. 편하게 연락주세요.</p>
        <span className="inline-block border border-white/30 px-8 py-3.5 text-sm font-medium text-white cursor-default">
          상담 예약 →
        </span>
      </section>
      <Credit brand="ARCHI STUDIO" />
    </div>
  );
}

/* ════════════════════════════════════════════
   6. 그린마켓 — 유기농 식품 쇼핑몰
   ════════════════════════════════════════════ */
function Site6() {
  const products = [
    { img: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600&h=600&fit=crop", name: "유기농 방울토마토", price: "4,900", badge: "인기" },
    { img: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=600&h=600&fit=crop", name: "무농약 바나나", price: "5,500", badge: null },
    { img: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=600&h=600&fit=crop", name: "제주 당근", price: "3,200", badge: "제철" },
    { img: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=600&h=600&fit=crop", name: "유기농 블루베리", price: "7,200", badge: null },
  ];
  return (
    <div className="min-h-screen bg-[#fefcf3]">
      <BackButton /><Badge />
      {/* Nav */}
      <nav className="border-b border-green-100/60 bg-white/60 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <span className="text-xl font-extrabold text-green-700">그린마켓</span>
          <div className="hidden items-center gap-6 md:flex">
            {["신선 식품","정기 구독","레시피","이벤트"].map(l => <span key={l} className="text-sm text-stone-500 cursor-default">{l}</span>)}
            <span className="rounded-full bg-green-600 px-5 py-2 text-sm font-semibold text-white cursor-default">장보기</span>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=1400&h=700&fit=crop" alt="" className="h-[520px] w-full object-cover sm:h-[600px]" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#fefcf3] via-[#fefcf3]/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 px-6 pb-14 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2">
            <span className="text-sm font-bold text-green-700">🌱 100% 유기농 인증 식품</span>
          </div>
          <h1 className="mb-4 text-4xl font-extrabold text-stone-900 sm:text-5xl">자연 그대로, 식탁 위로</h1>
          <p className="mx-auto mb-8 max-w-lg text-base text-stone-600">
            농장에서 식탁까지 48시간. 전국 200곳 이상의 인증 농장에서 엄선한 식재료를 배송합니다.
          </p>
          <span className="inline-block rounded-full bg-green-600 px-8 py-4 text-base font-bold text-white shadow-lg shadow-green-500/25 cursor-default">
            첫 주문 30% 할인 →
          </span>
        </div>
      </section>

      {/* Product grid */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <span className="text-xs font-bold text-green-600">🥬 이번 주 추천</span>
              <h2 className="mt-1 text-2xl font-extrabold text-stone-900">제철 신선 식품</h2>
            </div>
            <span className="text-sm font-medium text-green-600 cursor-default">전체 보기 →</span>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((p, i) => (
              <div key={i} className="group overflow-hidden rounded-3xl border border-green-100/50 bg-white shadow-sm transition-all hover:shadow-md">
                <div className="relative aspect-square overflow-hidden bg-green-50">
                  <img src={p.img} alt="" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                  {p.badge && <span className="absolute top-3 left-3 rounded-full bg-green-600 px-2.5 py-0.5 text-[10px] font-bold text-white">{p.badge}</span>}
                </div>
                <div className="p-5">
                  <h3 className="text-sm font-bold text-stone-900">{p.name}</h3>
                  <p className="mt-1 text-lg font-extrabold text-green-700">₩{p.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="border-y border-green-100/60 bg-white py-20 px-6">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-12 text-center text-2xl font-extrabold text-stone-900">농장에서 식탁까지</h2>
          <div className="grid gap-8 sm:grid-cols-4">
            {[
              { icon: "🌾", step: "수확", desc: "인증 농장에서 당일 수확" },
              { icon: "✅", step: "검수", desc: "전문 검수팀이 품질 확인" },
              { icon: "📦", step: "포장", desc: "친환경 보냉 패키지에 포장" },
              { icon: "🚛", step: "배송", desc: "새벽 배송으로 아침에 도착" },
            ].map((s, i) => (
              <div key={s.step} className="relative text-center">
                {i < 3 && <div className="absolute top-6 left-[55%] hidden h-px w-[90%] bg-green-200 lg:block" />}
                <div className="relative mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-2xl">
                  {s.icon}
                </div>
                <h3 className="mb-1 text-base font-bold text-stone-900">{s.step}</h3>
                <p className="text-sm text-stone-500">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscription promo */}
      <section className="py-20 px-6">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
          <img src="https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=800&h=600&fit=crop" alt="" className="rounded-3xl shadow-lg" loading="lazy" />
          <div>
            <span className="mb-3 inline-block rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-700">🥬 정기 구독</span>
            <h2 className="mb-4 text-3xl font-extrabold text-stone-900">
              매주 새로운 제철 식재료를<br />문 앞에서 만나세요
            </h2>
            <p className="mb-6 text-stone-500 leading-relaxed">
              매주 또는 격주로 엄선된 제철 식재료가 배송됩니다. 식단 고민 없이
              건강한 식탁을 차릴 수 있어요. 언제든지 건너뛰기나 해지가 가능합니다.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {[
                { t: "주 1회 박스", p: "₩29,900/주" },
                { t: "주 2회 박스", p: "₩49,900/주" },
              ].map(b => (
                <div key={b.t} className="rounded-2xl border border-green-200 bg-green-50 p-4 text-center">
                  <p className="text-sm font-bold text-stone-900">{b.t}</p>
                  <p className="mt-1 text-lg font-extrabold text-green-700">{b.p}</p>
                </div>
              ))}
            </div>
            <span className="mt-6 inline-block rounded-full bg-green-600 px-6 py-3 text-sm font-bold text-white cursor-default">구독 시작하기</span>
          </div>
        </div>
      </section>

      {/* Farm story */}
      <section className="bg-green-900 py-20 px-6 text-center">
        <span className="text-xs font-bold uppercase tracking-wider text-green-400">Our Farms</span>
        <h2 className="mt-4 mb-4 text-3xl font-extrabold text-white">전국 200+ 인증 농장과 직거래</h2>
        <p className="mx-auto mb-10 max-w-xl text-green-200/70">
          그린마켓은 유기농·무농약 인증을 받은 농장만 직접 선별하여 계약합니다.
          중간 유통 없이 농장에서 소비자에게 직접 배송하여 신선도와 가격 모두를 잡았습니다.
        </p>
        <div className="flex justify-center gap-8">
          {[{ v: "200+", l: "파트너 농장" }, { v: "48h", l: "수확→배송" }, { v: "4.9", l: "고객 만족도" }].map(s => (
            <div key={s.l}>
              <div className="text-3xl font-extrabold text-white">{s.v}</div>
              <div className="mt-1 text-xs text-green-300">{s.l}</div>
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
