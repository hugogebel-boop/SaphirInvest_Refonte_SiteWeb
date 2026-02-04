import type { Metadata } from "next";
import { AnimatedQuote } from "@/components/AnimatedQuote";

export const metadata: Metadata = {
  title: "Approach and Values",
  description:
    "Our value investing philosophy in Lausanne, Switzerland. Open partnership with clients, we invest our own money in our ideas. Conviction-based management.",
  alternates: {
    canonical: "https://saphir-invest.ch/en/values/",
    languages: {
      "fr-CH": "https://saphir-invest.ch/valeurs/",
      "en": "https://saphir-invest.ch/en/values/",
    },
  },
  openGraph: {
    title: "Approach and Values | Saphir Invest SA",
    description:
      "Our value investing philosophy. Open partnership with clients, we invest our own money in our investment ideas.",
    url: "https://saphir-invest.ch/en/values/",
    type: "website",
  },
};

const charterItems = [
  {
    title: "We act with integrity and prudence.",
    text: "As a rule, we do not invest in funds or products but through direct positions. We do not receive any retrocessions.",
  },
  {
    title: "We treat your investment as our own investment.",
    text: "We also invest our own money in our investment ideas.",
  },
  {
    title: "We focus our energy on portfolios, not on marketing/sales.",
    text: "",
  },
  {
    title: "We strive to keep fees and other transaction costs low.",
    text: "",
  },
  {
    title: "We communicate with our partners as transparently as possible.",
    text: "",
  },
  {
    title: "We manage our clients' portfolios according to our long-term, value-oriented and research-based investment philosophy.",
    text: "",
  },
];

const banks = [
  { name: "BCV", logo: "/Banque depositaire/BCV_logo-web.webp", alt: "BCV" },
  {
    name: "Lombard Odier",
    logo: "/Banque depositaire/Lombard_Odier_logo-web.webp",
    alt: "Lombard Odier",
  },
  {
    name: "Swissquote",
    logo: "/Banque depositaire/logo swissquote.webp",
    alt: "Swissquote",
  },
  {
    name: "UBP",
    logo: "/Banque depositaire/logo UBP (1).webp",
    alt: "Union Bancaire Privée",
  },
  { name: "UBS", logo: "/Banque depositaire/UBS_Logo-web.webp", alt: "UBS" },
];

export default function ValuesPage() {
  return (
    <div className="bg-[#fafcff]">
      {/* Approach and values */}
      <section className="py-12 md:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-12 md:px-32 lg:px-44">
          <h1 className="mb-8 font-heading text-2xl font-semibold uppercase tracking-wider text-saphir-blue md:text-3xl">
            Approach and Values
          </h1>
          <div className="space-y-4 text-lg text-saphir-dark md:text-xl">
            <p>
              Our goal is to establish an open and committed partnership with our clients.
            </p>
            <p>
              We seek investors who believe in our value philosophy, our rigorous fundamental
              investment process and who want to invest as long-term business owners.
            </p>
            <p>
              We are influenced by great investors such as{" "}
              <a
                href="https://en.wikipedia.org/wiki/Benjamin_Graham"
                target="_blank"
                rel="noopener noreferrer"
                className="text-saphir-blue"
              >
                Benjamin Graham
              </a>
              ,{" "}
              <a
                href="https://en.wikipedia.org/wiki/Warren_Buffett"
                target="_blank"
                rel="noopener noreferrer"
                className="text-saphir-blue"
              >
                Warren Buffett
              </a>
              ,{" "}
              <a
                href="https://en.wikipedia.org/wiki/Seth_Klarman"
                target="_blank"
                rel="noopener noreferrer"
                className="text-saphir-blue"
              >
                Seth Klarman
              </a>{" "}
              or{" "}
              <a
                href="https://en.wikipedia.org/wiki/Joel_Greenblatt"
                target="_blank"
                rel="noopener noreferrer"
                className="text-saphir-blue"
              >
                Joel Greenblatt
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Charter */}
      <section className="py-12 md:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-12 md:px-32 lg:px-44">
          <div className="rounded-lg bg-white p-6 shadow-lg sm:p-8 md:p-12">
            <h2 className="mb-10 font-heading text-xl font-semibold uppercase tracking-wider text-saphir-blue md:text-2xl">
              Our Charter
            </h2>
            
            <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
              {charterItems.map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-saphir-blue/20 bg-saphir-blue/5 text-xs font-semibold text-saphir-blue">
                    {i + 1}
                  </div>
                  <div>
                    <p className="font-medium text-saphir-dark">{item.title}</p>
                    {item.text && (
                      <p className="mt-1 text-sm text-saphir-dark/60">{item.text}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Custodian Banks & Quote */}
      <section className="py-12 md:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-12 md:px-32 lg:px-44">
          <div className="rounded-lg bg-white p-6 shadow-lg sm:p-8 md:p-12">
            <h2 className="mb-10 font-heading text-xl font-semibold uppercase tracking-wider text-saphir-blue md:text-2xl">
              Custodian Banks
            </h2>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 md:grid-cols-5">
              {banks.map((b) => (
                <div
                  key={b.name}
                  className="flex items-center justify-center p-4"
                >
                  <img
                    src={b.logo}
                    alt={b.alt}
                    className="max-h-20 w-full object-contain"
                    width={150}
                    height={80}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              ))}
            </div>

            <div className="mt-12">
              <AnimatedQuote
                text="Risk is not inherent in an investment; it is always relative to the price paid. Uncertainty is not the same as risk. Indeed, when great uncertainty – as in the autumn of 2008 – drives security prices to particularly low levels, they often become less risky investments."
                author="Seth Klarman"
                authorUrl="https://en.wikipedia.org/wiki/Seth_Klarman"
                speed={80}
                noBackground
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
