import type { Metadata } from "next";
import { AnimatedQuote } from "@/components/AnimatedQuote";

export const metadata: Metadata = {
  title: "Approche et Valeurs",
  description:
    "Notre philosophie d'investissement value investing à Lausanne. Partenariat ouvert avec nos clients, nous investissons notre propre argent dans nos idées. Gestion de convictions.",
  alternates: {
    canonical: "https://saphir-invest.ch/valeurs/",
    languages: {
      "fr-CH": "https://saphir-invest.ch/valeurs/",
      "en": "https://saphir-invest.ch/en/values/",
    },
  },
  openGraph: {
    title: "Approche et Valeurs | Saphir Invest SA",
    description:
      "Notre philosophie d'investissement value investing. Partenariat ouvert, nous investissons notre propre argent dans nos idées.",
    url: "https://saphir-invest.ch/valeurs/",
    type: "website",
  },
};

const charteItems = [
  {
    title: "Nous agissons avec intégrité et prudence.",
    text: "En règle générale, nous n'investissons pas dans des fonds ou dans des produits mais à travers des positions directes. Nous ne touchons aucune rétrocession.",
  },
  {
    title: "Nous traitons votre investissement comme notre propre investissement",
    text: "Nous investissons également notre propre argent dans nos idées de placement.",
  },
  {
    title: "Nous concentrons notre énergie sur les portefeuilles et non sur la commercialisation/vente.",
    text: "",
  },
  {
    title: "Nous nous efforçons de maintenir les frais et autres coûts de transaction à un faible niveau.",
    text: "",
  },
  {
    title: "Nous communiquons avec nos partenaires de la manière la plus transparente possible.",
    text: "",
  },
  {
    title: "Nous gérons les portefeuilles de nos clients selon notre philosophie d'investissement à long terme, axée sur la valeur et la recherche.",
    text: "",
  },
];

const banques = [
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

export default function ValeursPage() {
  return (
    <div className="bg-[#fafcff]">
      {/* Approche et valeurs */}
      <section className="py-12 md:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-12 md:px-32 lg:px-44">
          <h1 className="mb-8 font-heading text-2xl font-semibold uppercase tracking-wider text-saphir-blue md:text-3xl">
            Approche et valeurs
          </h1>
          <div className="space-y-4 text-lg text-saphir-dark md:text-xl">
            <p>
              Notre objectif est d&apos;établir un partenariat ouvert et impliqué avec nos clients.
            </p>
            <p>
              Nous recherchons des investisseurs qui croient en notre philosophie de valeur, en notre processus
              d&apos;investissement fondamental rigoureux et qui veulent investir comme des propriétaires
              d&apos;entreprises à long terme.
            </p>
            <p>
              Nous sommes influencés par de grands investisseurs tels que{" "}
              <a
                href="https://fr.wikipedia.org/wiki/Benjamin_Graham"
                target="_blank"
                rel="noopener noreferrer"
                className="text-saphir-blue"
              >
                Benjamin Graham
              </a>
              ,{" "}
              <a
                href="https://fr.wikipedia.org/wiki/Warren_Buffett"
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
              ou{" "}
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

      {/* Charte */}
      <section className="py-12 md:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-12 md:px-32 lg:px-44">
          <div className="rounded-lg bg-white p-6 shadow-lg sm:p-8 md:p-12">
            <h2 className="mb-10 font-heading text-xl font-semibold uppercase tracking-wider text-saphir-blue md:text-2xl">
              Notre charte
            </h2>
            
            <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
              {charteItems.map((item, i) => (
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

      {/* Banques dépositaires & Citation */}
      <section className="py-12 md:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-12 md:px-32 lg:px-44">
          <div className="rounded-lg bg-white p-6 shadow-lg sm:p-8 md:p-12">
            <h2 className="mb-10 font-heading text-xl font-semibold uppercase tracking-wider text-saphir-blue md:text-2xl">
              Banques dépositaires
            </h2>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 md:grid-cols-5">
              {banques.map((b) => (
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
                text="Le risque n'est pas inhérent à un investissement; il est toujours relatif au prix payé. L'incertitude n'est pas la même chose que le risque. En effet, lorsqu'une grande incertitude – comme à l'automne 2008 – pousse les prix des titres à des niveaux particulièrement bas, ils deviennent souvent des investissements moins risqués."
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
