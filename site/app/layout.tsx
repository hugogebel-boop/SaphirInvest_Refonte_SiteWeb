import type { Metadata, Viewport } from "next";
import { Montserrat, Raleway, Syne } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";

// Police pour le texte courant
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

// Police pour les titres (sans-serif élégant)
const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

// Police pour les citations (sans-serif expérimentale, très originale)
const syne = Syne({
  subsets: ["latin"],
  variable: "--font-quote",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#1b5bac",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://saphir-invest.ch"),
  title: {
    default: "Saphir Invest SA | Gestion de patrimoine à Lausanne",
    template: "%s | Saphir Invest SA",
  },
  description:
    "Saphir Invest SA, gestionnaire de fortune indépendant à Lausanne. Gestion de patrimoine basée sur les convictions et le value investing. Autorisé FINMA, membre ASG.",
  keywords: [
    "gestion de patrimoine",
    "gestionnaire de fortune",
    "Lausanne",
    "Suisse",
    "value investing",
    "gestion de convictions",
    "FINMA",
    "ASG",
    "investissement",
    "wealth management",
  ],
  authors: [{ name: "Saphir Invest SA" }],
  creator: "Saphir Invest SA",
  publisher: "Saphir Invest SA",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://saphir-invest.ch/",
    languages: {
      "fr-CH": "https://saphir-invest.ch/",
      "en": "https://saphir-invest.ch/en/",
    },
  },
  openGraph: {
    type: "website",
    siteName: "Saphir Invest SA",
    title: "Saphir Invest SA | Gestion de patrimoine à Lausanne",
    description:
      "Gestionnaire de fortune indépendant à Lausanne. Gestion basée sur les convictions et le value investing. Autorisé FINMA.",
    url: "https://saphir-invest.ch/",
    locale: "fr_CH",
    alternateLocale: "en_US",
    images: [
      {
        url: "/logo/logo%20Saphir%20Invest.webp",
        width: 400,
        height: 68,
        alt: "Saphir Invest SA - Gestion de patrimoine",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Saphir Invest SA | Gestion de patrimoine à Lausanne",
    description:
      "Gestionnaire de fortune indépendant à Lausanne. Gestion basée sur les convictions et le value investing.",
    images: ["/logo/logo%20Saphir%20Invest.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/icon/apple-touch-icon.png",
    other: [{ rel: "manifest", url: "/icon/site.webmanifest" }],
  },
  verification: {
    // Ajouter ici les codes de vérification si nécessaire
    // google: "votre-code-google",
  },
  category: "finance",
};

// Données structurées JSON-LD pour le SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://saphir-invest.ch/#organization",
      name: "Saphir Invest SA",
      url: "https://saphir-invest.ch/",
      logo: {
        "@type": "ImageObject",
        url: "https://saphir-invest.ch/logo/logo%20Saphir%20Invest.webp",
        width: 400,
        height: 68,
      },
      description:
        "Gestionnaire de fortune indépendant à Lausanne, spécialisé dans la gestion de patrimoine basée sur les convictions et le value investing.",
      foundingDate: "2013",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Rue du Grand-Chêne 6",
        addressLocality: "Lausanne",
        postalCode: "1003",
        addressCountry: "CH",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+41216480016",
        contactType: "customer service",
        availableLanguage: ["French", "English"],
      },
      sameAs: [
        "https://www.linkedin.com/company/saphir-invest-sa",
      ],
    },
    {
      "@type": "FinancialService",
      "@id": "https://saphir-invest.ch/#business",
      name: "Saphir Invest SA",
      image: "https://saphir-invest.ch/logo/logo%20Saphir%20Invest.webp",
      url: "https://saphir-invest.ch/",
      telephone: "+41216480016",
      priceRange: "$$$$",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Rue du Grand-Chêne 6",
        addressLocality: "Lausanne",
        postalCode: "1003",
        addressCountry: "CH",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 46.5196,
        longitude: 6.6322,
      },
      areaServed: {
        "@type": "Country",
        name: "Switzerland",
      },
      serviceType: [
        "Gestion de patrimoine",
        "Gestion de fortune",
        "Conseil en investissement",
        "Wealth Management",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://saphir-invest.ch/#website",
      url: "https://saphir-invest.ch/",
      name: "Saphir Invest SA",
      description: "Gestion de patrimoine à Lausanne",
      publisher: {
        "@id": "https://saphir-invest.ch/#organization",
      },
      inLanguage: ["fr-CH", "en"],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${montserrat.variable} ${raleway.variable} ${syne.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans text-white antialiased">
        <a href="#main" className="skip-link">
          Aller au contenu
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
