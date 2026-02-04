import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Welcome | Saphir Invest SA",
    template: "%s | Saphir Invest SA",
  },
  description: "Asset management. Conviction-based management.",
  openGraph: {
    siteName: "Saphir Invest SA | Asset Management",
    locale: "en_US",
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
