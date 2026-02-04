import type { Metadata } from "next";
import { Montserrat, Raleway, Syne } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";
import { site } from "@/lib/site";

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

export const metadata: Metadata = {
  title: {
    default: "Bienvenue | Saphir Invest SA",
    template: "%s | Saphir Invest SA",
  },
  description: "Gestion de patrimoine. Une gestion de convictions.",
  openGraph: {
    siteName: `${site.name} | Gestion de patrimoine`,
    locale: "fr_FR",
  },
  metadataBase: new URL("https://saphir-invest.ch"),
  themeColor: "#1b5bac",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/icon/apple-touch-icon.png",
    other: [
      { rel: "manifest", url: "/icon/site.webmanifest" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${montserrat.variable} ${raleway.variable} ${syne.variable}`}>
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
