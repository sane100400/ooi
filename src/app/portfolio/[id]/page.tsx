import Link from "next/link";
import { readPortfolio } from "@/lib/portfolio";
import { notFound } from "next/navigation";

/* Unsplash direct URLs for free stock images */
const mockSites: Record<
  string,
  {
    heroImg: string;
    accent: string;
    accentBg: string;
    accentText: string;
    brandName: string;
    tagline: string;
    heroDesc: string;
    sections: {
      title: string;
      desc: string;
      img: string;
    }[];
    features: { icon: string; title: string; desc: string }[];
    ctaText: string;
    testimonial?: { quote: string; name: string; role: string };
  }
> = {
  /* 1. 테크 스타트업 기업 사이트 */
  "1": {
    heroImg:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1400&h=700&fit=crop",
    accent: "from-cyan-500 to-blue-600",
    accentBg: "bg-cyan-500",
    accentText: "text-cyan-600",
    brandName: "NeuralX",
    tagline: "AI가 비즈니스를 바꿉니다",
    heroDesc:
      "차세대 인공지능 솔루션으로 데이터에서 인사이트를, 인사이트에서 성장을 이끌어냅니다.",
    sections: [
      {
        title: "데이터 분석 플랫폼",
        desc: "실시간 데이터 수집부터 AI 기반 예측 분석까지, 올인원 플랫폼을 제공합니다.",
        img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
      },
      {
        title: "자동화 워크플로우",
        desc: "반복적인 업무를 AI가 자동으로 처리합니다. 업무 효율을 300% 향상시키세요.",
        img: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&h=500&fit=crop",
      },
    ],
    features: [
      { icon: "🧠", title: "딥러닝 엔진", desc: "자체 개발 AI 모델로 99.2% 정확도 달성" },
      { icon: "⚡", title: "실시간 처리", desc: "밀리초 단위 응답으로 즉각적인 인사이트" },
      { icon: "🔒", title: "엔터프라이즈 보안", desc: "SOC2, ISO27001 인증 보안 체계" },
      { icon: "📊", title: "대시보드", desc: "직관적인 시각화로 복잡한 데이터를 한눈에" },
    ],
    ctaText: "무료 데모 신청",
    testimonial: {
      quote: "NeuralX 도입 후 매출 분석 시간이 80% 줄었습니다. 데이터 기반 의사결정이 정말 쉬워졌어요.",
      name: "김태현",
      role: "ABC 커머스 CTO",
    },
  },

  /* 2. 프리미엄 패션 쇼핑몰 */
  "2": {
    heroImg:
      "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1400&h=700&fit=crop",
    accent: "from-rose-500 to-pink-600",
    accentBg: "bg-rose-500",
    accentText: "text-rose-600",
    brandName: "MAISON ÉLITE",
    tagline: "당신만의 스타일을 완성하세요",
    heroDesc:
      "전 세계 프리미엄 브랜드를 한곳에서. 감각적인 큐레이션으로 특별한 쇼핑 경험을 선사합니다.",
    sections: [
      {
        title: "2025 S/S 컬렉션",
        desc: "이번 시즌 가장 트렌디한 아이템들을 만나보세요. 글로벌 디자이너 브랜드 신상품을 매주 업데이트합니다.",
        img: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&h=500&fit=crop",
      },
      {
        title: "퍼스널 스타일링",
        desc: "전문 스타일리스트가 당신의 체형과 취향에 맞는 완벽한 코디를 제안해 드립니다.",
        img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&h=500&fit=crop",
      },
    ],
    features: [
      { icon: "👗", title: "프리미엄 브랜드", desc: "전 세계 200+ 럭셔리 브랜드 입점" },
      { icon: "🚀", title: "당일 배송", desc: "서울/경기 주문 시 당일 도착" },
      { icon: "💎", title: "정품 보증", desc: "100% 정품 보증 및 무료 반품" },
      { icon: "🎁", title: "멤버십 혜택", desc: "VIP 회원 전용 시크릿 세일" },
    ],
    ctaText: "지금 쇼핑하기",
    testimonial: {
      quote: "다른 편집숍과는 차원이 다른 큐레이션. MAISON ÉLITE에서만 구매합니다.",
      name: "박서연",
      role: "패션 블로거",
    },
  },

  /* 3. SaaS 제품 랜딩페이지 */
  "3": {
    heroImg:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400&h=700&fit=crop",
    accent: "from-emerald-500 to-teal-600",
    accentBg: "bg-emerald-500",
    accentText: "text-emerald-600",
    brandName: "FlowDesk",
    tagline: "팀 생산성의 새로운 기준",
    heroDesc:
      "프로젝트 관리, 커뮤니케이션, 문서 협업을 하나의 플랫폼에서. 흩어진 업무를 한곳으로 모으세요.",
    sections: [
      {
        title: "올인원 워크스페이스",
        desc: "칸반보드, 타임라인, 스프린트 관리를 하나의 뷰에서 전환하며 사용하세요.",
        img: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&h=500&fit=crop",
      },
      {
        title: "실시간 협업",
        desc: "팀원들과 동시에 문서를 편집하고, 댓글과 멘션으로 빠르게 소통하세요.",
        img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=500&fit=crop",
      },
    ],
    features: [
      { icon: "📋", title: "프로젝트 관리", desc: "칸반, 타임라인, 캘린더 뷰 지원" },
      { icon: "💬", title: "팀 채팅", desc: "채널별 실시간 메시징 내장" },
      { icon: "📄", title: "문서 협업", desc: "노션처럼 쓰는 팀 위키" },
      { icon: "🔗", title: "500+ 연동", desc: "Slack, GitHub, Figma 등 연동" },
    ],
    ctaText: "14일 무료 체험",
    testimonial: {
      quote: "FlowDesk 도입 후 회의 시간이 40% 줄고, 프로젝트 완료율이 2배 올랐습니다.",
      name: "이준호",
      role: "스타트업 PM",
    },
  },

  /* 4. 헬스케어 대시보드 */
  "4": {
    heroImg:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1400&h=700&fit=crop",
    accent: "from-blue-500 to-indigo-600",
    accentBg: "bg-blue-500",
    accentText: "text-blue-600",
    brandName: "VitaTrack",
    tagline: "건강을 데이터로 관리하세요",
    heroDesc:
      "심박수, 수면, 운동, 영양까지. 웨어러블 기기와 연동되는 올인원 헬스케어 대시보드입니다.",
    sections: [
      {
        title: "실시간 건강 모니터링",
        desc: "Apple Watch, Galaxy Watch 등 주요 웨어러블과 자동 연동. 실시간으로 건강 데이터를 확인하세요.",
        img: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&h=500&fit=crop",
      },
      {
        title: "AI 건강 리포트",
        desc: "축적된 데이터를 AI가 분석하여 맞춤형 건강 리포트와 개선 방안을 제안합니다.",
        img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=500&fit=crop",
      },
    ],
    features: [
      { icon: "❤️", title: "심박 모니터링", desc: "24시간 실시간 심박수 추적" },
      { icon: "😴", title: "수면 분석", desc: "수면 패턴 분석 및 개선 제안" },
      { icon: "🏃", title: "운동 추적", desc: "50+ 운동 종목 자동 인식" },
      { icon: "🍎", title: "영양 관리", desc: "식단 기록 및 칼로리 자동 계산" },
    ],
    ctaText: "무료로 시작하기",
    testimonial: {
      quote: "VitaTrack 덕분에 수면의 질이 확실히 좋아졌어요. 데이터로 보니까 실천하게 됩니다.",
      name: "정민수",
      role: "헬스 트레이너",
    },
  },

  /* 5. 건축 사무소 포트폴리오 */
  "5": {
    heroImg:
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1400&h=700&fit=crop",
    accent: "from-stone-600 to-stone-800",
    accentBg: "bg-stone-700",
    accentText: "text-stone-700",
    brandName: "ARCHI STUDIO",
    tagline: "공간에 이야기를 담다",
    heroDesc:
      "주거, 상업, 공공 건축까지. 20년 경력의 건축 전문가 그룹이 당신의 공간을 설계합니다.",
    sections: [
      {
        title: "모던 레지던스",
        desc: "자연과 도시가 공존하는 주거 공간. 채광, 동선, 프라이버시를 완벽하게 설계합니다.",
        img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=500&fit=crop",
      },
      {
        title: "상업 공간 디자인",
        desc: "카페, 레스토랑, 오피스까지. 브랜드 아이덴티티를 공간으로 표현합니다.",
        img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=500&fit=crop",
      },
    ],
    features: [
      { icon: "📐", title: "맞춤 설계", desc: "고객 요구에 100% 맞춘 커스텀 설계" },
      { icon: "🏗️", title: "시공 관리", desc: "설계부터 시공까지 원스톱 서비스" },
      { icon: "🌿", title: "친환경 건축", desc: "에너지 효율 최적화 친환경 소재 사용" },
      { icon: "🖥️", title: "3D 시뮬레이션", desc: "완공 전 3D로 공간을 미리 체험" },
    ],
    ctaText: "상담 예약하기",
    testimonial: {
      quote: "처음 3D 렌더링을 봤을 때 소름이 돋았어요. 완공 후에는 렌더링 그대로였습니다.",
      name: "최영진",
      role: "판교 주택 건축주",
    },
  },

  /* 6. 유기농 식품 쇼핑몰 */
  "6": {
    heroImg:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?w=1400&h=700&fit=crop",
    accent: "from-green-500 to-lime-600",
    accentBg: "bg-green-500",
    accentText: "text-green-600",
    brandName: "그린마켓",
    tagline: "자연 그대로, 식탁 위로",
    heroDesc:
      "농장에서 식탁까지 48시간. 무농약, 유기농 인증 식품만 엄선하여 정기 배송해 드립니다.",
    sections: [
      {
        title: "산지 직송 신선 식품",
        desc: "전국 200+ 인증 농장과 직거래. 수확 당일 발송으로 최상의 신선도를 보장합니다.",
        img: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=800&h=500&fit=crop",
      },
      {
        title: "정기 구독 박스",
        desc: "매주/격주 단위로 엄선된 제철 식재료가 배송됩니다. 언제든 건너뛰기 가능.",
        img: "https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=800&h=500&fit=crop",
      },
    ],
    features: [
      { icon: "🌱", title: "유기농 인증", desc: "100% 유기농·무농약 인증 식품만 취급" },
      { icon: "🚛", title: "새벽 배송", desc: "밤 12시 주문, 아침 7시 도착" },
      { icon: "📦", title: "정기 구독", desc: "주 1회/2회 맞춤 정기배송" },
      { icon: "♻️", title: "친환경 포장", desc: "재사용 가능한 보냉 패키지" },
    ],
    ctaText: "첫 주문 30% 할인",
    testimonial: {
      quote: "아이들 먹거리는 무조건 그린마켓. 진짜 맛이 다르고 신선해요.",
      name: "한지은",
      role: "두 아이 엄마",
    },
  },
};

export default async function PortfolioDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const items = await readPortfolio();
  const item = items.find((i) => i.id === id);
  const mock = mockSites[id];

  if (!item || !mock) return notFound();

  return (
    <div className="min-h-screen bg-white">
      {/* Back to OOi overlay */}
      <div className="fixed top-4 left-4 z-50">
        <Link
          href="/#portfolio"
          className="inline-flex items-center gap-2 rounded-full bg-black/70 px-4 py-2 text-sm font-medium text-white backdrop-blur-md transition-all hover:bg-black/90"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          OOi 포트폴리오로 돌아가기
        </Link>
      </div>

      {/* Badge: mock site */}
      <div className="fixed top-4 right-4 z-50">
        <div className="rounded-full bg-emerald-500/90 px-4 py-2 text-xs font-bold text-white backdrop-blur-md shadow-lg">
          OOi 제작 사이트
        </div>
      </div>

      {/* ===== MOCK SITE START ===== */}

      {/* Nav */}
      <nav className="border-b border-slate-100">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <span className="text-xl font-bold text-slate-900">{mock.brandName}</span>
          <div className="hidden items-center gap-6 md:flex">
            <span className="text-sm text-slate-500 cursor-default">서비스</span>
            <span className="text-sm text-slate-500 cursor-default">소개</span>
            <span className="text-sm text-slate-500 cursor-default">후기</span>
            <span className={`rounded-full bg-gradient-to-r ${mock.accent} px-5 py-2 text-sm font-semibold text-white`}>
              {mock.ctaText}
            </span>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${mock.heroImg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 sm:py-40">
          <div className="max-w-2xl">
            <h1 className="mb-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
              {mock.tagline}
            </h1>
            <p className="mb-8 text-lg leading-relaxed text-white/80">
              {mock.heroDesc}
            </p>
            <div className="flex flex-wrap gap-4">
              <span className={`rounded-full bg-gradient-to-r ${mock.accent} px-8 py-4 text-base font-semibold text-white shadow-xl cursor-default`}>
                {mock.ctaText}
              </span>
              <span className="rounded-full border border-white/30 px-8 py-4 text-base font-semibold text-white cursor-default">
                자세히 보기
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-4 text-center text-3xl font-extrabold text-slate-900 sm:text-4xl">
            주요 기능
          </h2>
          <p className="mx-auto mb-16 max-w-2xl text-center text-lg text-slate-500">
            {mock.brandName}이 제공하는 핵심 서비스를 만나보세요
          </p>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {mock.features.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-slate-100 p-8 text-center transition-all hover:shadow-lg hover:-translate-y-1"
              >
                <div className="mb-4 text-4xl">{f.icon}</div>
                <h3 className="mb-2 text-lg font-bold text-slate-900">{f.title}</h3>
                <p className="text-sm text-slate-500">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content sections */}
      {mock.sections.map((sec, i) => (
        <section
          key={sec.title}
          className={`py-24 px-6 ${i % 2 === 1 ? "bg-slate-50" : ""}`}
        >
          <div className={`mx-auto flex max-w-7xl flex-col items-center gap-12 lg:flex-row ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
            <div className="flex-1">
              <h2 className="mb-4 text-3xl font-extrabold text-slate-900">
                {sec.title}
              </h2>
              <p className="mb-6 text-lg leading-relaxed text-slate-500">
                {sec.desc}
              </p>
              <span className={`inline-flex rounded-full bg-gradient-to-r ${mock.accent} px-6 py-3 text-sm font-semibold text-white cursor-default`}>
                더 알아보기
              </span>
            </div>
            <div className="flex-1">
              <img
                src={sec.img}
                alt={sec.title}
                className="w-full rounded-2xl shadow-xl"
                loading="lazy"
              />
            </div>
          </div>
        </section>
      ))}

      {/* Testimonial */}
      {mock.testimonial && (
        <section className="py-24 px-6 bg-slate-50">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 text-5xl text-slate-200">&ldquo;</div>
            <p className="mb-8 text-xl font-medium leading-relaxed text-slate-700 sm:text-2xl">
              {mock.testimonial.quote}
            </p>
            <div>
              <p className="font-bold text-slate-900">{mock.testimonial.name}</p>
              <p className="text-sm text-slate-500">{mock.testimonial.role}</p>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-24 px-6">
        <div className={`mx-auto max-w-4xl rounded-3xl bg-gradient-to-r ${mock.accent} p-12 text-center shadow-2xl sm:p-16`}>
          <h2 className="mb-4 text-3xl font-extrabold text-white sm:text-4xl">
            지금 시작하세요
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-lg text-white/80">
            {mock.brandName}과 함께 새로운 경험을 만들어보세요.
          </p>
          <span className="inline-flex rounded-full bg-white px-8 py-4 text-base font-bold text-slate-900 shadow-lg cursor-default">
            {mock.ctaText}
          </span>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-100 py-12 px-6">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
          <span className="text-lg font-bold text-slate-900">{mock.brandName}</span>
          <p className="text-sm text-slate-400">
            &copy; 2025 {mock.brandName}. All rights reserved.
          </p>
        </div>
        <div className="mx-auto mt-8 max-w-7xl border-t border-slate-100 pt-6 text-center">
          <p className="text-xs text-slate-400">
            이 사이트는{" "}
            <Link href="/" className="font-semibold text-emerald-500 hover:underline">
              OOi
            </Link>
            에서 제작했습니다
          </p>
        </div>
      </footer>
    </div>
  );
}
