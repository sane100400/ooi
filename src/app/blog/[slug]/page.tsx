import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  tags: string[];
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
    content: (
      <>
        <p>
          홈페이지 제작을 처음 알아보시면 가격이 천차만별이라 혼란스러우실 겁니다.
          프리랜서에게 맡기면 50만 원부터, 대형 에이전시는 수천만 원을 부르기도 하죠.
          이 글에서는 2026년 기준 현실적인 홈페이지 제작 비용을 정리해 드리겠습니다.
        </p>

        <h2>규모별 홈페이지 제작 비용</h2>

        <h3>1. 간단한 소개 사이트 (3~5페이지)</h3>
        <p>
          회사 소개, 서비스 안내, 연락처 정도만 있는 기본적인 사이트입니다.
          반응형 디자인과 기본 SEO 설정을 포함하면 <strong>30~80만 원</strong> 정도가
          적정한 가격대입니다. 템플릿 기반이 아닌 맞춤 디자인이라면 상단 범위에
          가깝습니다.
        </p>

        <h3>2. 비즈니스 홈페이지 (5~15페이지)</h3>
        <p>
          게시판, 문의 폼, 갤러리 등 기능이 추가된 사이트입니다.
          <strong>80~200만 원</strong> 선이 일반적이며, 관리자 페이지가 필요하면
          추가 비용이 발생합니다.
        </p>

        <h3>3. 쇼핑몰 / 예약 시스템</h3>
        <p>
          결제 시스템, 회원 관리, 주문 처리 등 복잡한 기능이 필요합니다.
          <strong>200~500만 원</strong> 이상이 일반적이며, 상품 수와 기능 범위에
          따라 크게 달라집니다.
        </p>

        <h2>비용을 절약하는 방법</h2>

        <h3>필수 기능부터 시작하세요</h3>
        <p>
          처음부터 모든 기능을 넣으려 하면 비용이 급증합니다. 핵심 기능만으로
          시작하고, 사업이 성장하면서 기능을 추가하는 것이 현명한 전략입니다.
        </p>

        <h3>유지보수 비용도 고려하세요</h3>
        <p>
          홈페이지는 만들고 끝이 아닙니다. 서버 비용, 도메인 갱신, 보안 업데이트,
          콘텐츠 수정 등 월 5~20만 원의 유지보수 비용이 발생할 수 있습니다.
          이를 미리 계획에 포함하는 것이 좋습니다.
        </p>

        <h3>포트폴리오를 꼭 확인하세요</h3>
        <p>
          가격만 보고 결정하면 안 됩니다. 제작 업체의 포트폴리오를 확인하고,
          실제 운영 중인 사이트를 방문해 보세요. 디자인 퀄리티와 로딩 속도,
          모바일 대응 여부를 직접 확인하는 것이 중요합니다.
        </p>

        <h2>OOi에서는?</h2>
        <p>
          OOi는 고려대학교 보안전공 출신 개발팀이 합리적인 가격으로 고퀄리티
          웹사이트를 제작합니다. 기본 홈페이지 30만 원부터, 필요한 기능만 골라서
          맞춤 견적을 받아보실 수 있습니다.
        </p>
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
    content: (
      <>
        <p>
          &quot;사업을 시작하는데 웹사이트가 필요해요&quot;라고 하면, 보통 두 가지 선택지가
          있습니다. 랜딩페이지와 홈페이지. 비슷해 보이지만 목적과 구조가 완전히
          다릅니다.
        </p>

        <h2>랜딩페이지란?</h2>
        <p>
          랜딩페이지는 <strong>하나의 목표</strong>에 집중하는 단일 페이지입니다.
          &quot;문의하기&quot;, &quot;구매하기&quot;, &quot;가입하기&quot; 같은 특정 행동을 유도하는 데 최적화되어
          있습니다.
        </p>
        <ul>
          <li>제작 비용이 저렴 (30~50만 원)</li>
          <li>제작 기간이 짧음 (1~3일)</li>
          <li>광고 캠페인과 연동하기 좋음</li>
          <li>전환율이 높음</li>
        </ul>

        <h2>홈페이지란?</h2>
        <p>
          홈페이지는 여러 페이지로 구성된 <strong>종합적인 웹사이트</strong>입니다.
          회사 소개, 서비스, 포트폴리오, 블로그 등 다양한 정보를 담을 수 있습니다.
        </p>
        <ul>
          <li>신뢰도와 전문성을 보여줄 수 있음</li>
          <li>SEO를 통한 자연 검색 유입 가능</li>
          <li>다양한 정보를 체계적으로 전달</li>
          <li>장기적인 브랜딩에 유리</li>
        </ul>

        <h2>어떤 걸 선택해야 할까?</h2>

        <h3>랜딩페이지가 맞는 경우</h3>
        <ul>
          <li>사업 초기라 빠르게 고객 반응을 테스트하고 싶을 때</li>
          <li>특정 제품이나 이벤트를 홍보할 때</li>
          <li>예산이 제한적일 때</li>
          <li>SNS/광고로 유입을 만들 계획일 때</li>
        </ul>

        <h3>홈페이지가 맞는 경우</h3>
        <ul>
          <li>이미 사업이 안정적으로 운영되고 있을 때</li>
          <li>다양한 서비스나 제품이 있을 때</li>
          <li>검색 엔진을 통한 유입이 중요할 때</li>
          <li>브랜드 이미지를 체계적으로 구축하고 싶을 때</li>
        </ul>

        <h2>가장 좋은 전략</h2>
        <p>
          사실 정답은 <strong>둘 다</strong>입니다. 랜딩페이지로 빠르게 시작하고,
          사업이 성장하면 홈페이지로 확장하는 것이 가장 효율적인 전략입니다.
          OOi에서는 랜딩페이지부터 풀 홈페이지까지, 사업 단계에 맞는 웹사이트를
          제작해 드립니다.
        </p>
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
    content: (
      <>
        <p>
          소규모 사업자에게 웹사이트는 온라인 명함이자 영업 사원입니다. 하지만 예산이
          한정되어 있으니, 꼭 필요한 기능에 집중하는 것이 중요합니다. 아래 5가지
          기능은 비용 대비 효과가 가장 좋은 필수 항목입니다.
        </p>

        <h2>1. 반응형 디자인 (모바일 대응)</h2>
        <p>
          2026년 기준 웹 트래픽의 약 70%가 모바일에서 발생합니다. 모바일에서
          깨지거나 사용하기 불편한 사이트는 고객을 잃는 가장 큰 원인입니다.
          반응형 디자인은 선택이 아니라 <strong>필수</strong>입니다.
        </p>

        <h2>2. 문의 폼 (Call to Action)</h2>
        <p>
          웹사이트의 궁극적인 목적은 고객이 행동하게 만드는 것입니다. 전화번호와
          이메일만 적어두는 것보다, 간단한 문의 폼을 넣어두면 문의율이 2~3배
          올라갑니다. 이름, 연락처, 문의 내용 정도만 받으면 됩니다.
        </p>

        <h2>3. 기본 SEO 설정</h2>
        <p>
          검색엔진에서 찾을 수 없는 웹사이트는 존재하지 않는 것과 같습니다.
          페이지별 메타 태그, sitemap 제출, 적절한 heading 구조만 갖춰도
          기본적인 검색 노출이 가능합니다.
        </p>

        <h2>4. SSL 인증서 (HTTPS)</h2>
        <p>
          주소창에 &quot;안전하지 않음&quot;이 뜨면 고객 신뢰도가 급락합니다. SSL 인증서는
          보안뿐 아니라 SEO 순위에도 영향을 미칩니다. 무료 SSL(Let&apos;s Encrypt)도
          있으니 반드시 적용하세요.
        </p>

        <h2>5. 빠른 로딩 속도</h2>
        <p>
          페이지 로딩이 3초 이상 걸리면 방문자의 53%가 이탈합니다. 이미지 최적화,
          적절한 호스팅, 깔끔한 코드가 핵심입니다. 화려한 애니메이션보다 빠른
          속도가 훨씬 중요합니다.
        </p>

        <h2>없어도 되는 기능들</h2>
        <p>반대로, 초기에 굳이 넣지 않아도 되는 기능들도 있습니다:</p>
        <ul>
          <li>회원가입/로그인 (B2B라면 대부분 불필요)</li>
          <li>실시간 채팅 (문의 폼으로 충분)</li>
          <li>복잡한 애니메이션 (속도만 느려짐)</li>
          <li>다국어 지원 (해외 고객이 없다면)</li>
        </ul>

        <h2>정리</h2>
        <p>
          핵심은 <strong>&quot;적은 비용으로 최대 효과&quot;</strong>입니다. 위 5가지 기능만
          제대로 갖추면 소규모 사업자도 충분히 경쟁력 있는 웹사이트를 가질 수
          있습니다. OOi에서는 이 모든 기능을 기본 포함하여 합리적인 가격으로
          제작해 드립니다.
        </p>
      </>
    ),
  },
};

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

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) notFound();

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
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header */}
      <header className="border-b border-slate-100 dark:border-slate-800">
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
          </nav>
        </div>
      </header>

      <article className="mx-auto max-w-3xl px-6 py-16">
        {/* Meta */}
        <div className="mb-4 flex items-center gap-3 text-sm text-slate-400 dark:text-slate-500">
          <time>{post.date}</time>
          <span>·</span>
          <span>{post.readTime} 읽기</span>
        </div>

        <h1 className="mb-6 text-3xl font-bold leading-tight text-slate-900 dark:text-white sm:text-4xl">
          {post.title}
        </h1>

        <div className="mb-8 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Content */}
        <div className="prose prose-slate max-w-none dark:prose-invert prose-headings:font-bold prose-h2:mt-10 prose-h2:mb-4 prose-h2:text-2xl prose-h3:mt-6 prose-h3:mb-3 prose-h3:text-lg prose-p:leading-relaxed prose-p:text-slate-600 dark:prose-p:text-slate-300 prose-li:text-slate-600 dark:prose-li:text-slate-300 prose-strong:text-slate-900 dark:prose-strong:text-white prose-ul:my-4">
          {post.content}
        </div>

        {/* Back to blog */}
        <div className="mt-16 border-t border-slate-100 pt-8 dark:border-slate-800">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-emerald-600 hover:text-emerald-700 dark:text-emerald-400"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            블로그 목록으로
          </Link>
        </div>
      </article>

      {/* CTA */}
      <section className="border-t border-slate-100 bg-slate-50 px-6 py-16 dark:border-slate-800 dark:bg-slate-900">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
            웹사이트 제작, OOi에 맡겨보세요
          </h2>
          <p className="mb-8 text-slate-500 dark:text-slate-400">
            합리적인 가격, 빠른 제작, 확실한 퀄리티.
          </p>
          <Link
            href="/pricing"
            className="inline-block rounded-full bg-emerald-600 px-8 py-3 text-sm font-semibold text-white hover:bg-emerald-700"
          >
            맞춤 견적 받기
          </Link>
        </div>
      </section>
    </div>
  );
}
