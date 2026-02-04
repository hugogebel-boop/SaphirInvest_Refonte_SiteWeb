import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Saphir Invest SA | Wealth Management in Lausanne",
    template: "%s | Saphir Invest SA",
  },
  description:
    "Saphir Invest SA, independent asset manager in Lausanne, Switzerland. Conviction-based wealth management and value investing. FINMA authorized, ASG member.",
  keywords: [
    "wealth management",
    "asset management",
    "Lausanne",
    "Switzerland",
    "value investing",
    "conviction-based investing",
    "FINMA",
    "independent wealth manager",
    "portfolio management",
  ],
  alternates: {
    canonical: "https://saphir-invest.ch/en/",
    languages: {
      "fr-CH": "https://saphir-invest.ch/",
      "en": "https://saphir-invest.ch/en/",
    },
  },
  openGraph: {
    type: "website",
    siteName: "Saphir Invest SA",
    title: "Saphir Invest SA | Wealth Management in Lausanne",
    description:
      "Independent asset manager in Lausanne, Switzerland. Conviction-based wealth management and value investing. FINMA authorized.",
    url: "https://saphir-invest.ch/en/",
    locale: "en_US",
    alternateLocale: "fr_CH",
    images: [
      {
        url: "/logo/logo%20Saphir%20Invest.webp",
        width: 400,
        height: 68,
        alt: "Saphir Invest SA - Wealth Management",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Saphir Invest SA | Wealth Management in Lausanne",
    description:
      "Independent asset manager in Lausanne. Conviction-based wealth management and value investing.",
    images: ["/logo/logo%20Saphir%20Invest.webp"],
  },
};

export default function EnglishLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div lang="en">
      {children}
    </div>
  );
}
