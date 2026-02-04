import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Valeurs et Charte",
  description:
    "Notre objectif est d'établir un partenariat ouvert et impliqué avec nos clients. Nous investissons également notre propre argent dans nos idées d'investissement.",
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
  { name: "BCV", logo: "https://saphir-invest.ch/wp-content/uploads/2020/03/BCV_logo-web.png", alt: "BCV" },
  {
    name: "Credit Suisse",
    logo: "https://saphir-invest.ch/wp-content/uploads/2020/03/Credit_Suisse_Logo-web.png",
    alt: "Credit Suisse",
  },
  {
    name: "Lombard Odier",
    logo: "https://saphir-invest.ch/wp-content/uploads/2020/03/Lombard_Odier_logo-web.png",
    alt: "Lombard Odier",
  },
  {
    name: "Swissquote",
    logo: "https://saphir-invest.ch/wp-content/uploads/2022/09/logo-swissquote-claim-swiss-leader-en-002.png",
    alt: "Swissquote",
  },
  {
    name: "UBP",
    logo: "https://saphir-invest.ch/wp-content/uploads/2020/03/Union_Bancaire_Privée_logo-web.png",
    alt: "Union Bancaire Privée",
  },
  { name: "UBS", logo: "https://saphir-invest.ch/wp-content/uploads/2020/03/UBS_Logo-web.png", alt: "UBS" },
];

export default function ValeursPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Approche et valeurs */}
      <section className="mb-16">
        <h1 className="mb-6 text-3xl font-semibold text-saphir-blue md:text-4xl">
          approche et valeurs
        </h1>
        <div className="prose prose-saphir-dark max-w-none text-saphir-dark">
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
              className="text-saphir-blue hover:underline"
            >
              Benjamin Graham
            </a>
            ,{" "}
            <a
              href="https://fr.wikipedia.org/wiki/Warren_Buffett"
              target="_blank"
              rel="noopener noreferrer"
              className="text-saphir-blue hover:underline"
            >
              Warren Buffett
            </a>
            ,{" "}
            <a
              href="https://en.wikipedia.org/wiki/Seth_Klarman"
              target="_blank"
              rel="noopener noreferrer"
              className="text-saphir-blue hover:underline"
            >
              Seth Klarman
            </a>{" "}
            ou{" "}
            <a
              href="https://en.wikipedia.org/wiki/Joel_Greenblatt"
              target="_blank"
              rel="noopener noreferrer"
              className="text-saphir-blue hover:underline"
            >
              Joel Greenblatt
            </a>
            .
          </p>
        </div>
      </section>

      {/* Charte */}
      <section className="mb-16 rounded-lg bg-white/80 p-8 shadow-sm">
        <h2 className="mb-8 text-2xl font-semibold text-saphir-blue">charte</h2>
        <div className="space-y-8">
          {charteItems.map((item, i) => (
            <div key={i} className="text-center">
              <p>
                <strong>{item.title}</strong>
                {item.text && (
                  <>
                    <br />
                    {item.text}
                  </>
                )}
              </p>
              {i < charteItems.length - 1 && <p className="mt-4 text-saphir-blue">***</p>}
            </div>
          ))}
        </div>
      </section>

      {/* Banques dépositaires */}
      <section className="mb-16">
        <h2 className="mb-8 text-2xl font-semibold uppercase text-saphir-blue">
          banques dépositaires
        </h2>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-6">
          {banques.map((b) => (
            <div
              key={b.name}
              className="flex items-center justify-center rounded bg-white/80 p-4 shadow-sm"
            >
              <img
                src={b.logo}
                alt={b.alt}
                className="max-h-16 w-full object-contain"
                width={120}
                height={60}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Citation Seth Klarman */}
      <section className="rounded-lg bg-white/80 p-8 shadow-sm">
        <blockquote className="text-saphir-dark/90">
          « Le risque n&apos;est pas inhérent à un investissement; il est toujours relatif au prix payé.
          <br />
          L&apos;incertitude n&apos;est pas la même chose que le risque.
          <br />
          En effet, lorsqu&apos;une grande incertitude – comme à l&apos;automne 2008 – pousse les prix des titres à des
          niveaux particulièrement bas, ils deviennent souvent des investissements moins risqués. »
        </blockquote>
        <p className="mt-4 text-right">
          <a
            href="https://en.wikipedia.org/wiki/Seth_Klarman"
            target="_blank"
            rel="noopener noreferrer"
            className="text-saphir-dark hover:underline"
          >
            Seth Klarman
          </a>
        </p>
      </section>
    </div>
  );
}
