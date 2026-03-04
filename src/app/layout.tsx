import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OOi | 웹사이트 외주 전문",
  description:
    "비즈니스에 최적화된 웹사이트를 기획부터 개발, 운영까지. OOi는 고객 맞춤형 웹 솔루션을 제공합니다.",
  keywords: ["웹사이트 외주", "홈페이지 제작", "웹 개발", "OOi", "웹 에이전시"],
  openGraph: {
    title: "OOi | 웹사이트 외주 전문",
    description:
      "비즈니스에 최적화된 웹사이트를 기획부터 개발, 운영까지.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
