import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/lib/site";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
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
  themeColor: "#1c5fb1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={montserrat.variable}>
      <body className="min-h-screen flex flex-col font-sans antialiased">
        <a href="#main" className="skip-link">
          Aller au contenu
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
