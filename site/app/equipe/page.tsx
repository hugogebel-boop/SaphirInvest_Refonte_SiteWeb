import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "À Propos",
  description:
    "Une équipe dévouée et motivée à protéger et accroître le patrimoine de notre clientèle. Avec une structure légère et flexible, Saphir Invest se consacre exclusivement à l'analyse des opportunités d'investissement.",
};

const teamMembers = [
  {
    name: "Pierre Unternährer",
    role: "Fondateur",
    image: "https://saphir-invest.ch/wp-content/uploads/2020/06/portrait-P.Unternaehrer-e1592331692256.jpg",
    alt: "Pierre Unternährer",
    bio: "Master of Science HEC Lausanne, Diplôme d'expert en finance et investissements CFPI. Avant de créer Saphir Invest en 2013, Pierre Unternährer a travaillé chez UBS en tant qu'économiste puis portfolio manager. Il possède une expérience de plus de 25 ans dans la gestion de patrimoine.",
    linkedin: "https://www.linkedin.com/mwlite/in/pierre-unternährer-4399046a/",
  },
  {
    name: "Yves Diserens",
    role: "Administrateur et gestionnaire de fortune chez DM Invest SA",
    image: "https://saphir-invest.ch/wp-content/uploads/2025/09/Yves-WEB.jpg",
    alt: "Yves Diserens",
    bio: "Yves Diserens possède plus de 25 ans d'expérience dans la gestion de patrimoine.",
    linkedin: "https://www.linkedin.com/in/yves-diserens-a454b012/",
    companyUrl: "https://www.dminvest.ch/",
  },
  {
    name: "Patrick Germanier",
    role: "Gestionnaire de fortune",
    image: "https://saphir-invest.ch/wp-content/uploads/2020/06/Portrait-P.Germanier-web-e1592332422460.jpg",
    alt: "Patrick Germanier",
    bio: "Patrick Germanier possède plus de 25 ans d'expérience dans la gestion de patrimoine.",
    linkedin: "https://www.linkedin.com/in/patrick-germanier-6220715/",
  },
  {
    name: "Fred Gysler",
    role: "Gestionnaire de fortune",
    image: "https://saphir-invest.ch/wp-content/uploads/2021/01/Photo-Fred-noir_blanc.jpg",
    alt: "Fred Gysler",
    bio: "Fred Gysler possède plus de 25 ans d'expérience dans la gestion de patrimoine.",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Sandrine Lavanchy",
    role: "Assistante de gestion",
    image: "https://saphir-invest.ch/wp-content/uploads/2020/06/portrait-S.Lavanchy-web-e1592332445693.jpg",
    alt: "Sandrine Lavanchy",
    bio: "",
    linkedin: "https://www.linkedin.com/in/sandrine-lavanchy-a91b3b192/",
  },
];

const affiliations = [
  { name: "VSG ASG", url: "https://www.vsv-asg.ch/fr/home" },
  { name: "AOOS", url: "https://www.aoos.ch/?lang=fr" },
  { name: "OFS Ombud Finance Suisse", url: "https://ombudfinance.ch/accueil/" },
  { name: "SFAA", url: "https://www.sfaa.ch/fr/welcome.asp" },
];

export default function EquipePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Intro */}
      <section className="mb-16">
        <h1 className="mb-6 text-3xl font-semibold text-saphir-dark md:text-4xl">
          Une équipe dévouée et motivée à protéger et accroître le patrimoine de notre clientèle
        </h1>
        <div className="prose max-w-none text-saphir-dark">
          <p>
            Basée au cœur de Lausanne, Saphir Invest SA est une société indépendante de gestion de patrimoine.
          </p>
          <p>
            La société est entièrement détenue par l&apos;équipe de direction qui a une longue expérience des marchés
            financiers et du conseil en investissement. Saphir Invest SA est membre de l&apos;
            <a href="https://www.vsv-asg.ch/fr/home" target="_blank" rel="noopener noreferrer" className="text-saphir-blue hover:underline">
              Association Suisse des Gestionnaires de fortune
            </a>
            , ainsi qu&apos;affilié à{" "}
            <a href="https://www.aoos.ch/?lang=fr" target="_blank" rel="noopener noreferrer" className="text-saphir-blue hover:underline">
              AOOS
            </a>
            , organisme de surveillance impliquant notamment le respect de son Code de Conduite.
          </p>
          <p>
            Avec une structure légère et flexible, la société se consacre exclusivement à l&apos;analyse des
            opportunités d&apos;investissement ainsi qu&apos;au service à la clientèle, en s&apos;appuyant sur deux
            aspects clés:
          </p>
          <p>
            <strong>Un engagement actif</strong>
            <br />
            Gérer activement l&apos;épargne des clients avec une approche fondée sur des convictions. Nous croyons
            fermement à la puissance du bon sens et de la perspicacité.
          </p>
          <p>
            <strong>Un esprit entrepreneurial et indépendant</strong>
            <br />
            Une équipe capable de réaliser des analyses indépendantes et, le cas échéant, à s&apos;associer avec des
            spécialistes dans différents domaines.
          </p>
        </div>
      </section>

      {/* Pierre Unternährer - featured */}
      <section className="mb-16 flex flex-col items-center gap-6 md:flex-row md:items-start">
        <img
          src={teamMembers[0].image}
          alt={teamMembers[0].alt}
          width={180}
          height={250}
          className="rounded-lg object-cover shadow-md"
        />
        <div className="flex-1">
          <h2 className="text-xl font-semibold text-saphir-blue">{teamMembers[0].name}</h2>
          <p className="mt-2 text-sm text-saphir-dark/90">{teamMembers[0].role}</p>
          <p className="mt-4 text-saphir-dark">{teamMembers[0].bio}</p>
          <a
            href={teamMembers[0].linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-saphir-blue hover:underline"
            aria-label="LinkedIn Pierre Unternährer"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            LinkedIn
          </a>
        </div>
      </section>

      {/* Rest of team - grid */}
      <section className="mb-16 grid gap-12 sm:grid-cols-2">
        {teamMembers.slice(1).map((member) => (
          <div key={member.name} className="rounded-lg bg-white/80 p-6 shadow-sm">
            <img
              src={member.image}
              alt={member.alt}
              width={188}
              height={250}
              className="mx-auto rounded-lg object-cover shadow-md"
            />
            <h3 className="mt-4 text-lg font-semibold text-saphir-blue">
              {member.companyUrl ? (
                <a href={member.companyUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  {member.name}
                </a>
              ) : (
                member.name
              )}
            </h3>
            <p className="mt-2 text-sm text-saphir-dark/90">{member.role}</p>
            {member.bio && <p className="mt-4 text-saphir-dark">{member.bio}</p>}
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-saphir-blue hover:underline"
              aria-label={`LinkedIn ${member.name}`}
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
          </div>
        ))}
      </section>

      {/* Distinctions */}
      <section className="mb-16">
        <h2 className="mb-6 text-2xl font-semibold text-saphir-blue">distinctions</h2>
        <a
          href="https://www.performance-watcher.ch/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block"
        >
          <img
            src="https://saphir-invest.ch/wp-content/uploads/2020/02/BestManagerPW2019MidVol-300x77.jpg"
            alt="Best Manager Performance Watcher 2019 Mid Vol"
            width={300}
            height={77}
            className="rounded shadow-sm hover:opacity-90"
          />
        </a>
      </section>

      {/* Affiliations */}
      <section className="rounded-lg bg-white/80 p-8 shadow-sm">
        <h2 className="mb-6 text-2xl font-semibold text-saphir-blue">affiliations</h2>
        <p className="mb-6 text-saphir-dark">
          Selon les exigences légales découlant de la Loi fédérale sur les services financiers (
          <a
            href="https://www.admin.ch/opc/fr/classified-compilation/20152661/index.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-saphir-blue hover:underline"
          >
            LSFin
          </a>
          ), Saphir Invest est affilié à l&apos;
          <a href="https://ombudfinance.ch/accueil/" target="_blank" rel="noopener noreferrer" className="text-saphir-blue hover:underline">
            OFS Ombud Finance Suisse
          </a>
          .
        </p>
        <p className="mb-8 text-saphir-dark">
          Saphir Invest a obtenu auprès de la{" "}
          <a
            href="https://www.finma.ch/fr/finma-public/etablissements-personnes-et-produits-autorises/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-saphir-blue hover:underline"
          >
            FINMA
          </a>{" "}
          sa licence de gestionnaire de fortune durant l&apos;été 2022.
        </p>
        <div className="flex flex-wrap gap-6">
          {affiliations.map((a) => (
            <a
              key={a.name}
              href={a.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-saphir-blue hover:underline"
            >
              {a.name}
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
