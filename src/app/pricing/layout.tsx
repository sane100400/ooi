import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "가격 안내 - 웹사이트 제작 비용",
  description:
    "OOi 웹사이트 제작 비용을 확인하세요. 기본 홈페이지부터 예약 시스템, 쇼핑몰까지 합리적인 가격의 맞춤형 웹 개발 서비스.",
  alternates: {
    canonical: "https://oois.app/pricing",
  },
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
