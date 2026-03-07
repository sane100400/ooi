import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "블로그 - 웹사이트 제작 가이드",
  description:
    "홈페이지 제작 비용, 웹사이트 외주 팁, 랜딩페이지 가이드 등 웹 개발에 대한 유용한 정보를 제공합니다.",
  alternates: {
    canonical: "https://oois.app/blog",
  },
};

const posts = [
  {
    slug: "homepage-cost-guide",
    title: "2026년 홈페이지 제작 비용, 얼마가 적정할까?",
    description:
      "홈페이지 제작을 처음 의뢰할 때 가장 궁금한 비용 문제. 규모별, 기능별 현실적인 가격 가이드를 정리했습니다.",
    date: "2026-03-07",
    readTime: "5분",
    tags: ["홈페이지 제작 비용", "웹사이트 외주"],
    emoji: "💰",
    gradient: "from-amber-400 to-orange-500",
    bgLight: "bg-amber-50",
  },
  {
    slug: "landing-page-vs-homepage",
    title: "랜딩페이지 vs 홈페이지, 내 사업에 맞는 선택은?",
    description:
      "사업 초기에 랜딩페이지와 홈페이지 중 무엇을 먼저 만들어야 할까요? 각각의 장단점과 적합한 상황을 비교합니다.",
    date: "2026-03-06",
    readTime: "4분",
    tags: ["랜딩페이지", "홈페이지 제작"],
    emoji: "⚡",
    gradient: "from-violet-500 to-purple-600",
    bgLight: "bg-violet-50",
  },
  {
    slug: "website-must-have-features",
    title: "소규모 사업자 웹사이트, 이 기능만은 꼭 넣으세요",
    description:
      "예산이 한정된 소규모 사업자를 위한 웹사이트 필수 기능 체크리스트. 불필요한 비용 없이 효과적인 홈페이지를 만드는 방법.",
    date: "2026-03-05",
    readTime: "6분",
    tags: ["웹사이트 기능", "소규모 사업자"],
    emoji: "✅",
    gradient: "from-emerald-400 to-teal-500",
    bgLight: "bg-emerald-50",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-xl border-b border-slate-100 dark:bg-slate-950/80 dark:border-slate-800">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
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
              href="/pricing"
              className="text-sm text-slate-500 hover:text-emerald-600 dark:text-slate-400"
            >
              견적
            </Link>
            <Link
              href="/blog"
              className="text-sm font-semibold text-emerald-600 dark:text-emerald-400"
            >
              블로그
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-50 via-transparent to-transparent dark:from-emerald-950/30" />
        <div className="relative mx-auto max-w-6xl px-6 py-20 sm:py-24">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-1.5 text-sm font-medium text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 mb-6">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            OOi 블로그
          </div>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
            웹사이트 제작,
            <br />
            <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
              제대로 알고 시작하세요
            </span>
          </h1>
          <p className="max-w-lg text-lg leading-relaxed text-slate-500 dark:text-slate-400">
            비용, 기능, 전략까지. 웹사이트 외주 전에 꼭 알아야 할 실전 가이드.
          </p>
        </div>
      </section>

      {/* Posts */}
      <main className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-100 transition-all hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1 dark:bg-slate-900 dark:ring-slate-800 dark:hover:shadow-slate-900/50"
            >
              {/* Card top gradient bar */}
              <div className={`h-48 bg-gradient-to-br ${post.gradient} flex items-center justify-center relative overflow-hidden`}>
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.15),transparent)]" />
                <span className="text-6xl drop-shadow-lg">{post.emoji}</span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="mb-3 flex items-center gap-3 text-xs text-slate-400 dark:text-slate-500">
                  <time>{post.date}</time>
                  <span className="h-1 w-1 rounded-full bg-slate-300 dark:bg-slate-600" />
                  <span>{post.readTime} 읽기</span>
                </div>

                <h2 className="mb-3 text-lg font-bold leading-snug text-slate-900 transition-colors group-hover:text-emerald-600 dark:text-white dark:group-hover:text-emerald-400">
                  {post.title}
                </h2>

                <p className="mb-5 flex-1 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                  {post.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`rounded-full ${post.bgLight} px-3 py-1 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-400`}
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>

      {/* CTA */}
      <section className="relative overflow-hidden border-t border-slate-100 dark:border-slate-800">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 to-teal-700" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.1),transparent)]" />
        <div className="relative mx-auto max-w-6xl px-6 py-20 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white">
            웹사이트 제작이 필요하신가요?
          </h2>
          <p className="mb-8 text-emerald-100/80">
            OOi에서 합리적인 가격으로 고퀄리티 웹사이트를 만들어 드립니다.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/pricing"
              className="rounded-full bg-white px-8 py-3.5 text-sm font-bold text-emerald-700 shadow-lg shadow-emerald-900/20 transition-all hover:shadow-xl hover:scale-105"
            >
              맞춤 견적 받기
            </Link>
            <Link
              href="/#portfolio"
              className="rounded-full border border-white/30 px-8 py-3.5 text-sm font-medium text-white backdrop-blur-sm transition-all hover:bg-white/10"
            >
              포트폴리오 보기
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
