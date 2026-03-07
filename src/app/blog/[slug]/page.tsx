import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

/* ── Reusable visual components ── */

function PriceCard({
  title,
  price,
  features,
  accent,
}: {
  title: string;
  price: string;
  features: string[];
  accent: string;
}) {
  return (
    <div className={`rounded-2xl border p-6 ${accent}`}>
      <h3 className="text-lg font-bold text-slate-900 dark:text-white">
        {title}
      </h3>
      <p className="mt-1 text-2xl font-extrabold text-slate-900 dark:text-white">
        {price}
      </p>
      <ul className="mt-4 space-y-2">
        {features.map((f) => (
          <li
            key={f}
            className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300"
          >
            <svg
              className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
            {f}
          </li>
        ))}
      </ul>
    </div>
  );
}

function TipBox({
  icon,
  title,
  children,
}: {
  icon: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="my-8 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 p-6 ring-1 ring-emerald-100 dark:from-emerald-950/30 dark:to-teal-950/20 dark:ring-emerald-800/30">
      <div className="mb-2 flex items-center gap-2">
        <span className="text-xl">{icon}</span>
        <h3 className="text-base font-bold text-slate-900 dark:text-white">
          {title}
        </h3>
      </div>
      <div className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
        {children}
      </div>
    </div>
  );
}

function WarningBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-8 rounded-2xl bg-amber-50 p-6 ring-1 ring-amber-200 dark:bg-amber-950/20 dark:ring-amber-800/30">
      <div className="mb-2 flex items-center gap-2">
        <span className="text-xl">⚠️</span>
        <h3 className="text-base font-bold text-amber-800 dark:text-amber-300">
          주의하세요
        </h3>
      </div>
      <div className="text-sm leading-relaxed text-amber-700 dark:text-amber-200/80">
        {children}
      </div>
    </div>
  );
}

function NumberStep({
  num,
  title,
  children,
}: {
  num: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="my-8 flex gap-5">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-lg font-extrabold text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-400">
        {num}
      </div>
      <div className="flex-1">
        <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">
          {title}
        </h3>
        <div className="text-[15px] leading-relaxed text-slate-600 dark:text-slate-300">
          {children}
        </div>
      </div>
    </div>
  );
}

function VsCard({
  leftTitle,
  leftItems,
  rightTitle,
  rightItems,
  leftColor,
  rightColor,
}: {
  leftTitle: string;
  leftItems: string[];
  rightTitle: string;
  rightItems: string[];
  leftColor: string;
  rightColor: string;
}) {
  return (
    <div className="my-8 grid gap-4 sm:grid-cols-2">
      <div
        className={`rounded-2xl p-6 ${leftColor}`}
      >
        <h3 className="mb-4 text-lg font-bold text-slate-900 dark:text-white">
          {leftTitle}
        </h3>
        <ul className="space-y-2.5">
          {leftItems.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300"
            >
              <svg
                className="mt-0.5 h-4 w-4 shrink-0 text-violet-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div
        className={`rounded-2xl p-6 ${rightColor}`}
      >
        <h3 className="mb-4 text-lg font-bold text-slate-900 dark:text-white">
          {rightTitle}
        </h3>
        <ul className="space-y-2.5">
          {rightItems.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300"
            >
              <svg
                className="mt-0.5 h-4 w-4 shrink-0 text-blue-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function CheckList({
  items,
}: {
  items: { label: string; checked: boolean }[];
}) {
  return (
    <div className="my-8 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100 dark:bg-slate-900 dark:ring-slate-800">
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item.label} className="flex items-center gap-3">
            {item.checked ? (
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/40">
                <svg
                  className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={3}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            ) : (
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800">
                <svg
                  className="h-3.5 w-3.5 text-slate-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={3}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
            )}
            <span
              className={`text-sm ${
                item.checked
                  ? "font-medium text-slate-900 dark:text-white"
                  : "text-slate-400 line-through dark:text-slate-500"
              }`}
            >
              {item.label}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function StatBar({
  label,
  value,
  color,
}: {
  label: string;
  value: string;
  color: string;
}) {
  return (
    <div className="flex items-center justify-between rounded-xl bg-slate-50 px-5 py-4 dark:bg-slate-800/50">
      <span className="text-sm font-medium text-slate-600 dark:text-slate-300">
        {label}
      </span>
      <span className={`text-lg font-extrabold ${color}`}>{value}</span>
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-5 mt-14 flex items-center gap-3 text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white">
      <div className="h-7 w-1.5 rounded-full bg-emerald-500" />
      {children}
    </h2>
  );
}

function Paragraph({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-5 text-[15px] leading-[1.8] text-slate-600 dark:text-slate-300">
      {children}
    </p>
  );
}

/* ── Post data ── */

interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  tags: string[];
  emoji: string;
  gradient: string;
  content: React.ReactNode;
}

const posts: Record<string, BlogPost> = {
  "homepage-cost-guide": {
    slug: "homepage-cost-guide",
    title: "2026년 홈페이지 제작 비용, 얼마가 적정할까?",
    description:
      "홈페이지 제작을 처음 의뢰할 때 가장 궁금한 비용 문제. 규모별, 기능별 현실적인 가격 가이드를 정리했습니다.",
    date: "2026-03-07",
    readTime: "5분",
    tags: ["홈페이지 제작 비용", "웹사이트 외주"],
    emoji: "💰",
    gradient: "from-amber-400 to-orange-500",
    content: (
      <>
        <Paragraph>
          홈페이지 제작을 처음 알아보시면 가격이 천차만별이라 혼란스러우실
          겁니다. 프리랜서에게 맡기면 50만 원부터, 대형 에이전시는 수천만 원을
          부르기도 하죠. 이 글에서는{" "}
          <strong className="text-slate-900 dark:text-white">
            2026년 기준 현실적인 홈페이지 제작 비용
          </strong>
          을 정리해 드리겠습니다.
        </Paragraph>

        <SectionTitle>규모별 홈페이지 제작 비용</SectionTitle>

        <div className="my-8 grid gap-4 sm:grid-cols-3">
          <PriceCard
            title="소개 사이트"
            price="30~80만원"
            accent="border-emerald-200 bg-emerald-50/50 dark:border-emerald-800/30 dark:bg-emerald-950/20"
            features={[
              "3~5페이지",
              "회사 소개 + 연락처",
              "반응형 디자인",
              "기본 SEO 설정",
            ]}
          />
          <PriceCard
            title="비즈니스 사이트"
            price="80~200만원"
            accent="border-blue-200 bg-blue-50/50 dark:border-blue-800/30 dark:bg-blue-950/20"
            features={[
              "5~15페이지",
              "게시판 + 문의 폼",
              "갤러리 기능",
              "관리자 페이지",
            ]}
          />
          <PriceCard
            title="쇼핑몰 / 예약"
            price="200~500만원+"
            accent="border-violet-200 bg-violet-50/50 dark:border-violet-800/30 dark:bg-violet-950/20"
            features={[
              "결제 시스템",
              "회원 관리",
              "주문/예약 처리",
              "통계 대시보드",
            ]}
          />
        </div>

        <SectionTitle>비용을 절약하는 3가지 방법</SectionTitle>

        <NumberStep num={1} title="필수 기능부터 시작하세요">
          <p>
            처음부터 모든 기능을 넣으려 하면 비용이 급증합니다.{" "}
            <strong className="text-slate-900 dark:text-white">
              핵심 기능만으로 시작
            </strong>
            하고, 사업이 성장하면서 기능을 추가하는 것이 현명한 전략입니다.
          </p>
        </NumberStep>

        <NumberStep num={2} title="유지보수 비용도 미리 계획하세요">
          <p>
            홈페이지는 만들고 끝이 아닙니다. 서버 비용, 도메인 갱신, 보안
            업데이트, 콘텐츠 수정 등이 필요합니다.
          </p>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <StatBar
              label="서버 + 도메인"
              value="월 2~5만원"
              color="text-emerald-600 dark:text-emerald-400"
            />
            <StatBar
              label="유지보수"
              value="월 5~20만원"
              color="text-blue-600 dark:text-blue-400"
            />
          </div>
        </NumberStep>

        <NumberStep num={3} title="포트폴리오를 꼭 확인하세요">
          <p>
            가격만 보고 결정하면 안 됩니다. 제작 업체의 포트폴리오를 확인하고,
            실제 운영 중인 사이트를 방문해 보세요. 디자인 퀄리티, 로딩 속도,
            모바일 대응 여부를 직접 확인하는 것이 중요합니다.
          </p>
        </NumberStep>

        <WarningBox>
          너무 저렴한 견적은 주의하세요. 템플릿 복사 후 로고만 바꾸는 경우가
          많습니다. 맞춤 디자인인지, 소스 코드 소유권은 어떻게 되는지 꼭
          확인하세요.
        </WarningBox>

        <TipBox icon="💡" title="OOi에서는?">
          고려대학교 보안전공 출신 개발팀이 합리적인 가격으로 고퀄리티 웹사이트를
          제작합니다.{" "}
          <strong className="text-slate-900 dark:text-white">
            기본 홈페이지 30만 원부터
          </strong>
          , 필요한 기능만 골라서{" "}
          <Link
            href="/pricing"
            className="font-semibold text-emerald-600 underline decoration-emerald-300 hover:text-emerald-700 dark:text-emerald-400"
          >
            맞춤 견적
          </Link>
          을 받아보실 수 있습니다.
        </TipBox>
      </>
    ),
  },

  "landing-page-vs-homepage": {
    slug: "landing-page-vs-homepage",
    title: "랜딩페이지 vs 홈페이지, 내 사업에 맞는 선택은?",
    description:
      "사업 초기에 랜딩페이지와 홈페이지 중 무엇을 먼저 만들어야 할까요? 각각의 장단점과 적합한 상황을 비교합니다.",
    date: "2026-03-06",
    readTime: "4분",
    tags: ["랜딩페이지", "홈페이지 제작"],
    emoji: "⚡",
    gradient: "from-violet-500 to-purple-600",
    content: (
      <>
        <Paragraph>
          &quot;사업을 시작하는데 웹사이트가 필요해요&quot;라고 하면, 보통 두 가지
          선택지가 있습니다.{" "}
          <strong className="text-slate-900 dark:text-white">랜딩페이지</strong>
          와{" "}
          <strong className="text-slate-900 dark:text-white">홈페이지</strong>.
          비슷해 보이지만 목적과 구조가 완전히 다릅니다.
        </Paragraph>

        <SectionTitle>한눈에 비교</SectionTitle>

        <VsCard
          leftTitle="⚡ 랜딩페이지"
          leftItems={[
            "단일 페이지 구성",
            "하나의 목표에 집중",
            "제작 비용: 30~50만원",
            "제작 기간: 1~3일",
            "광고 캠페인에 최적",
            "전환율이 높음",
          ]}
          rightTitle="🏢 홈페이지"
          rightItems={[
            "여러 페이지 구성",
            "종합적인 정보 전달",
            "제작 비용: 80~200만원",
            "제작 기간: 1~3주",
            "SEO 검색 유입에 강함",
            "장기 브랜딩에 유리",
          ]}
          leftColor="bg-violet-50 ring-1 ring-violet-100 dark:bg-violet-950/20 dark:ring-violet-800/30"
          rightColor="bg-blue-50 ring-1 ring-blue-100 dark:bg-blue-950/20 dark:ring-blue-800/30"
        />

        <SectionTitle>어떤 걸 선택해야 할까?</SectionTitle>

        <div className="my-8 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl bg-violet-50 p-6 ring-1 ring-violet-100 dark:bg-violet-950/20 dark:ring-violet-800/30">
            <h3 className="mb-3 text-base font-bold text-violet-800 dark:text-violet-300">
              랜딩페이지가 맞는 경우
            </h3>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
              <li>🚀 사업 초기, 빠르게 반응 테스트</li>
              <li>🎯 특정 제품이나 이벤트 홍보</li>
              <li>💸 예산이 제한적일 때</li>
              <li>📱 SNS/광고로 유입 계획</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-blue-50 p-6 ring-1 ring-blue-100 dark:bg-blue-950/20 dark:ring-blue-800/30">
            <h3 className="mb-3 text-base font-bold text-blue-800 dark:text-blue-300">
              홈페이지가 맞는 경우
            </h3>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
              <li>🏢 사업이 안정적으로 운영 중</li>
              <li>📦 다양한 서비스/제품 보유</li>
              <li>🔍 검색 엔진 유입이 중요</li>
              <li>✨ 브랜드 이미지 구축 목적</li>
            </ul>
          </div>
        </div>

        <TipBox icon="🎯" title="가장 좋은 전략">
          사실 정답은 <strong className="text-slate-900 dark:text-white">둘 다</strong>
          입니다. 랜딩페이지로 빠르게 시작하고, 사업이 성장하면 홈페이지로
          확장하는 것이 가장 효율적인 전략입니다. OOi에서는 랜딩페이지부터 풀
          홈페이지까지, 사업 단계에 맞는 웹사이트를 제작해 드립니다.
        </TipBox>
      </>
    ),
  },

  "website-must-have-features": {
    slug: "website-must-have-features",
    title: "소규모 사업자 웹사이트, 이 기능만은 꼭 넣으세요",
    description:
      "예산이 한정된 소규모 사업자를 위한 웹사이트 필수 기능 체크리스트. 불필요한 비용 없이 효과적인 홈페이지를 만드는 방법.",
    date: "2026-03-05",
    readTime: "6분",
    tags: ["웹사이트 기능", "소규모 사업자"],
    emoji: "✅",
    gradient: "from-emerald-400 to-teal-500",
    content: (
      <>
        <Paragraph>
          소규모 사업자에게 웹사이트는{" "}
          <strong className="text-slate-900 dark:text-white">
            온라인 명함이자 24시간 영업 사원
          </strong>
          입니다. 하지만 예산이 한정되어 있으니, 꼭 필요한 기능에 집중하는 것이
          중요합니다.
        </Paragraph>

        <SectionTitle>필수 기능 5가지</SectionTitle>

        <NumberStep num={1} title="반응형 디자인 (모바일 대응)">
          <p>
            2026년 기준 웹 트래픽의 약 70%가 모바일에서 발생합니다. 모바일에서
            깨지거나 사용하기 불편한 사이트는 고객을 잃는 가장 큰 원인입니다.
          </p>
          <div className="mt-3 grid grid-cols-2 gap-3">
            <StatBar
              label="모바일 트래픽"
              value="약 70%"
              color="text-emerald-600 dark:text-emerald-400"
            />
            <StatBar
              label="데스크톱"
              value="약 30%"
              color="text-slate-500"
            />
          </div>
        </NumberStep>

        <NumberStep num={2} title="문의 폼 (Call to Action)">
          <p>
            웹사이트의 궁극적인 목적은 고객이 행동하게 만드는 것입니다. 전화번호와
            이메일만 적어두는 것보다, 간단한 문의 폼을 넣어두면{" "}
            <strong className="text-slate-900 dark:text-white">
              문의율이 2~3배
            </strong>{" "}
            올라갑니다.
          </p>
        </NumberStep>

        <NumberStep num={3} title="기본 SEO 설정">
          <p>
            검색엔진에서 찾을 수 없는 웹사이트는 존재하지 않는 것과 같습니다.
            페이지별 메타 태그, sitemap 제출, 적절한 heading 구조만 갖춰도
            기본적인 검색 노출이 가능합니다.
          </p>
        </NumberStep>

        <NumberStep num={4} title="SSL 인증서 (HTTPS)">
          <p>
            주소창에 &quot;안전하지 않음&quot;이 뜨면 고객 신뢰도가 급락합니다.
            SSL 인증서는 보안뿐 아니라 SEO 순위에도 영향을 미칩니다.
          </p>
        </NumberStep>

        <NumberStep num={5} title="빠른 로딩 속도">
          <p>
            페이지 로딩이 3초 이상 걸리면 방문자의{" "}
            <strong className="text-slate-900 dark:text-white">53%가 이탈</strong>
            합니다. 화려한 애니메이션보다 빠른 속도가 훨씬 중요합니다.
          </p>
        </NumberStep>

        <SectionTitle>필수 vs 불필요 체크리스트</SectionTitle>

        <CheckList
          items={[
            { label: "반응형 디자인 (모바일 대응)", checked: true },
            { label: "문의 폼 / CTA 버튼", checked: true },
            { label: "기본 SEO (메타태그, sitemap)", checked: true },
            { label: "SSL 인증서 (HTTPS)", checked: true },
            { label: "빠른 로딩 속도 (3초 이내)", checked: true },
            { label: "회원가입/로그인 (B2B라면 불필요)", checked: false },
            { label: "실시간 채팅 (문의 폼으로 충분)", checked: false },
            { label: "복잡한 애니메이션 (속도만 느려짐)", checked: false },
            { label: "다국어 지원 (해외 고객 없다면)", checked: false },
          ]}
        />

        <TipBox icon="💡" title="OOi는 이 모든 기능을 기본 포함합니다">
          반응형 디자인, 문의 폼, SEO 설정, SSL, 속도 최적화까지.{" "}
          <strong className="text-slate-900 dark:text-white">
            추가 비용 없이 기본 제공
          </strong>
          합니다.{" "}
          <Link
            href="/pricing"
            className="font-semibold text-emerald-600 underline decoration-emerald-300 hover:text-emerald-700 dark:text-emerald-400"
          >
            견적 확인하기 →
          </Link>
        </TipBox>
      </>
    ),
  },
};

/* ── Static generation ── */

export function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  return params.then(({ slug }) => {
    const post = posts[slug];
    if (!post) return {};
    return {
      title: post.title,
      description: post.description,
      alternates: {
        canonical: `https://oois.app/blog/${post.slug}`,
      },
      openGraph: {
        title: post.title,
        description: post.description,
        type: "article",
        publishedTime: post.date,
        locale: "ko_KR",
      },
    };
  });
}

/* ── Page component ── */

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) notFound();

  const otherPosts = Object.values(posts).filter((p) => p.slug !== slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: {
      "@type": "Organization",
      name: "OOi",
      url: "https://oois.app",
    },
    publisher: {
      "@type": "Organization",
      name: "OOi",
    },
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-xl border-b border-slate-100 dark:bg-slate-950/80 dark:border-slate-800">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
          <Link
            href="/"
            className="text-xl font-bold text-slate-900 dark:text-white"
          >
            OO<span className="text-emerald-500">i</span>
          </Link>
          <nav className="flex items-center gap-6">
            <Link
              href="/"
              className="text-sm text-slate-500 hover:text-emerald-600 dark:text-slate-400"
            >
              홈
            </Link>
            <Link
              href="/blog"
              className="text-sm text-slate-500 hover:text-emerald-600 dark:text-slate-400"
            >
              블로그
            </Link>
            <Link
              href="/pricing"
              className="rounded-full bg-emerald-600 px-4 py-1.5 text-sm font-semibold text-white hover:bg-emerald-700"
            >
              견적 보기
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Banner */}
      <div
        className={`relative overflow-hidden bg-gradient-to-br ${post.gradient}`}
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.15),transparent)]" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        <div className="relative mx-auto max-w-4xl px-6 py-16 sm:py-20">
          <div className="mb-4 flex items-center gap-3 text-sm text-white/70">
            <Link href="/blog" className="hover:text-white transition-colors">
              블로그
            </Link>
            <span>/</span>
            <span className="text-white/50">글</span>
          </div>
          <h1 className="mb-4 text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-sm text-white/70">
            <div className="flex items-center gap-2">
              <div className="h-7 w-7 rounded-full bg-white/20 flex items-center justify-center text-xs font-bold text-white">
                OOi
              </div>
              <span>OOi 팀</span>
            </div>
            <span className="h-1 w-1 rounded-full bg-white/40" />
            <time>{post.date}</time>
            <span className="h-1 w-1 rounded-full bg-white/40" />
            <span>{post.readTime} 읽기</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <article className="mx-auto max-w-3xl px-6 py-12">
        <div className="mb-6 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-white px-3 py-1 text-xs font-medium text-slate-600 ring-1 ring-slate-100 dark:bg-slate-900 dark:text-slate-400 dark:ring-slate-800"
            >
              #{tag}
            </span>
          ))}
        </div>

        {post.content}
      </article>

      {/* Related Posts */}
      <section className="border-t border-slate-200 bg-white px-6 py-16 dark:border-slate-800 dark:bg-slate-900">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-xl font-bold text-slate-900 dark:text-white">
            다른 글도 읽어보세요
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {otherPosts.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="group rounded-2xl bg-slate-50 p-6 ring-1 ring-slate-100 transition-all hover:ring-emerald-200 hover:shadow-lg dark:bg-slate-800/50 dark:ring-slate-700 dark:hover:ring-emerald-800"
              >
                <span className="mb-3 block text-2xl">{p.emoji}</span>
                <h3 className="mb-2 font-bold text-slate-900 transition-colors group-hover:text-emerald-600 dark:text-white dark:group-hover:text-emerald-400">
                  {p.title}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {p.readTime} 읽기
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 to-teal-700" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.1),transparent)]" />
        <div className="relative mx-auto max-w-4xl px-6 py-20 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white">
            웹사이트 제작, OOi에 맡겨보세요
          </h2>
          <p className="mb-8 text-emerald-100/80">
            합리적인 가격, 빠른 제작, 확실한 퀄리티.
          </p>
          <Link
            href="/pricing"
            className="inline-block rounded-full bg-white px-8 py-3.5 text-sm font-bold text-emerald-700 shadow-lg shadow-emerald-900/20 transition-all hover:shadow-xl hover:scale-105"
          >
            맞춤 견적 받기
          </Link>
        </div>
      </section>
    </div>
  );
}
