import type { Metadata } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import DeliveryBanner from "@/components/DeliveryBanner";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "OOi | 웹사이트 외주 전문 - 홈페이지 제작, 웹 개발",
  description:
    "합리적인 가격으로 고퀄리티 웹사이트를 제작해 드립니다. 기획부터 디자인, 개발, 운영까지 올인원 웹 솔루션. 포트폴리오를 확인하세요.",
  alternates: {
    canonical: "https://oois.app",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "OOi",
  url: "https://oois.app",
  description:
    "비즈니스에 최적화된 웹사이트를 기획부터 개발, 운영까지 제공하는 웹 에이전시",
  serviceType: "웹사이트 제작",
  areaServed: {
    "@type": "Country",
    name: "KR",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "웹사이트 제작 서비스",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "홈페이지 제작",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "반응형 웹사이트 개발",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "랜딩페이지 제작",
        },
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Process />
        <DeliveryBanner />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
