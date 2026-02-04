import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum",
  description:
    "Legal information and impressum for Saphir Invest SA, wealth management company in Lausanne, Switzerland.",
  alternates: {
    canonical: "https://saphir-invest.ch/impressum/",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function ImpressumPage() {
  return (
    <div className="bg-[#fafcff]">
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-20 md:px-32 lg:px-48">
          <h1 className="mb-8 font-heading text-2xl font-semibold uppercase tracking-wider text-saphir-blue md:text-3xl">
            Impressum
          </h1>
          <div className="max-w-3xl space-y-6 text-lg text-saphir-dark">
            <div className="rounded-lg bg-white p-8 shadow-lg">
              <p className="text-saphir-dark">
                <strong className="text-saphir-blue">Saphir Invest SA</strong>
                <br />
                Rue du Grand-Chêne 6
                <br />
                1003 Lausanne
                <br />
                Switzerland
              </p>
            </div>
            <p className="text-saphir-dark/80">
              This website is the property of Saphir Invest SA. For any questions regarding the impressum, please
              contact us.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
