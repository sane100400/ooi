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

interface Post {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  tags: string[];
}

const posts: Post[] = [
  {
    slug: "homepage-cost-guide",
    title: "2026년 홈페이지 제작 비용, 얼마가 적정할까?",
    description:
      "홈페이지 제작을 처음 의뢰할 때 가장 궁금한 비용 문제. 규모별, 기능별 현실적인 가격 가이드를 정리했습니다.",
    date: "2026-03-07",
    readTime: "5분",
    tags: ["홈페이지 제작 비용", "웹사이트 외주"],
  },
  {
    slug: "landing-page-vs-homepage",
    title: "랜딩페이지 vs 홈페이지, 내 사업에 맞는 선택은?",
    description:
      "사업 초기에 랜딩페이지와 홈페이지 중 무엇을 먼저 만들어야 할까요? 각각의 장단점과 적합한 상황을 비교합니다.",
    date: "2026-03-06",
    readTime: "4분",
    tags: ["랜딩페이지", "홈페이지 제작"],
  },
  {
    slug: "website-must-have-features",
    title: "소규모 사업자 웹사이트, 이 기능만은 꼭 넣으세요",
    description:
      "예산이 한정된 소규모 사업자를 위한 웹사이트 필수 기능 체크리스트. 불필요한 비용 없이 효과적인 홈페이지를 만드는 방법.",
    date: "2026-03-05",
    readTime: "6분",
    tags: ["웹사이트 기능", "소규모 사업자"],
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
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

      <main className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="mb-3 text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
          블로그
        </h1>
        <p className="mb-12 text-lg text-slate-500 dark:text-slate-400">
          웹사이트 제작에 대한 실용적인 가이드와 팁
        </p>

        <div className="space-y-8">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block rounded-2xl border border-slate-100 p-6 transition-all hover:border-emerald-200 hover:shadow-lg hover:shadow-emerald-50 dark:border-slate-800 dark:hover:border-emerald-800 dark:hover:shadow-emerald-950/50 sm:p-8"
            >
              <div className="mb-3 flex items-center gap-3 text-sm text-slate-400 dark:text-slate-500">
                <time>{post.date}</time>
                <span>·</span>
                <span>{post.readTime} 읽기</span>
              </div>
              <h2 className="mb-2 text-xl font-bold text-slate-900 transition-colors group-hover:text-emerald-600 dark:text-white dark:group-hover:text-emerald-400 sm:text-2xl">
                {post.title}
              </h2>
              <p className="mb-4 leading-relaxed text-slate-500 dark:text-slate-400">
                {post.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </main>

      {/* CTA */}
      <section className="border-t border-slate-100 bg-slate-50 px-6 py-16 dark:border-slate-800 dark:bg-slate-900">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
            웹사이트 제작이 필요하신가요?
          </h2>
          <p className="mb-8 text-slate-500 dark:text-slate-400">
            OOi에서 합리적인 가격으로 고퀄리티 웹사이트를 만들어 드립니다.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/pricing"
              className="rounded-full bg-emerald-600 px-8 py-3 text-sm font-semibold text-white hover:bg-emerald-700"
            >
              견적 확인하기
            </Link>
            <Link
              href="/#portfolio"
              className="rounded-full border border-slate-200 px-8 py-3 text-sm font-medium text-slate-600 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300"
            >
              포트폴리오 보기
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
