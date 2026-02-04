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
    image: "/Portrait/Pierre.png",
    alt: "Pierre Unternährer",
    bio: "Master of Science HEC Lausanne, Diplôme d'expert en finance et investissements CFPI. Avant de créer Saphir Invest en 2013, Pierre Unternährer a travaillé chez UBS en tant qu'économiste puis portfolio manager. Il possède une expérience de plus de 25 ans dans la gestion de patrimoine.",
    linkedin: "https://www.linkedin.com/mwlite/in/pierre-unternährer-4399046a/",
  },
  {
    name: "Yves Diserens",
    role: "Administrateur et gestionnaire de fortune chez DM Invest SA",
    image: "/Portrait/Yves.png",
    alt: "Yves Diserens",
    bio: "Yves Diserens possède plus de 25 ans d'expérience dans la gestion de patrimoine.",
    linkedin: "https://www.linkedin.com/in/yves-diserens-a454b012/",
    companyUrl: "https://www.dminvest.ch/",
  },
  {
    name: "Patrick Germanier",
    role: "Gestionnaire de fortune",
    image: "/Portrait/Portrait-P.Germanier-web.jpg",
    alt: "Patrick Germanier",
    bio: "Patrick Germanier possède plus de 25 ans d'expérience dans la gestion de patrimoine.",
    linkedin: "https://www.linkedin.com/in/patrick-germanier-6220715/",
  },
  {
    name: "Fred Gysler",
    role: "Gestionnaire de fortune",
    image: "/Portrait/Photo-Fred-noir_blanc.jpg",
    alt: "Fred Gysler",
    bio: "Fred Gysler possède plus de 25 ans d'expérience dans la gestion de patrimoine.",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Sandrine Lavanchy",
    role: "Assistante de gestion",
    image: "/Portrait/Sandrine.png",
    alt: "Sandrine Lavanchy",
    bio: "",
    linkedin: "https://www.linkedin.com/in/sandrine-lavanchy-a91b3b192/",
  },
];

export default function EquipePage() {
  return (
    <div className="bg-[#fafcff]">
      {/* Intro */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-20 md:px-32 lg:px-48">
          <h1 className="mb-8 font-heading text-2xl font-semibold uppercase tracking-wider text-saphir-blue md:text-3xl">
            Équipe
          </h1>
          <div className="space-y-4 text-lg text-saphir-dark md:text-xl">
            <p className="text-xl font-medium text-saphir-dark md:text-2xl">
              Une équipe dévouée et motivée à protéger et accroître le patrimoine de notre clientèle
            </p>
            <p>
              Basée au cœur de Lausanne, Saphir Invest SA est une société indépendante de gestion de patrimoine.
            </p>
            <p>
              La société est entièrement détenue par l&apos;équipe de direction qui a une longue expérience des marchés
              financiers et du conseil en investissement. Saphir Invest SA est membre de l&apos;
              <a href="https://www.vsv-asg.ch/fr/home" target="_blank" rel="noopener noreferrer" className="text-saphir-blue">
                Association Suisse des Gestionnaires de fortune
              </a>
              , ainsi qu&apos;affilié à{" "}
              <a href="https://www.aoos.ch/?lang=fr" target="_blank" rel="noopener noreferrer" className="text-saphir-blue">
                AOOS
              </a>
              , organisme de surveillance impliquant notamment le respect de son Code de Conduite.
            </p>
            <p>
              Avec une structure légère et flexible, la société se consacre exclusivement à l&apos;analyse des
              opportunités d&apos;investissement ainsi qu&apos;au service à la clientèle, en s&apos;appuyant sur deux
              aspects clés:
            </p>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <strong className="text-saphir-blue">Un engagement actif</strong>
                <p className="mt-2">
                  Gérer activement l&apos;épargne des clients avec une approche fondée sur des convictions. Nous croyons
                  fermement à la puissance du bon sens et de la perspicacité.
                </p>
              </div>
              <div>
                <strong className="text-saphir-blue">Un esprit entrepreneurial et indépendant</strong>
                <p className="mt-2">
                  Une équipe capable de réaliser des analyses indépendantes et, le cas échéant, à s&apos;associer avec des
                  spécialistes dans différents domaines.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pierre Unternährer - featured */}
      <section className="pt-12 pb-4 md:pt-16 md:pb-4">
        <div className="mx-auto max-w-7xl px-20 md:px-32 lg:px-48">
          <div className="rounded-lg bg-white p-8 shadow-lg md:p-10">
            <div className="flex flex-col items-center gap-8 md:flex-row md:items-start">
              <img
                src={teamMembers[0].image}
                alt={teamMembers[0].alt}
                width={220}
                height={300}
                className="rounded-lg object-cover"
              />
              <div className="flex-1">
                <h2 className="font-heading text-xl font-semibold uppercase tracking-wider text-saphir-blue md:text-2xl">
                  <a
                    href={teamMembers[0].linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Pierre Unternährer"
                  >
                    {teamMembers[0].name}
                  </a>
                </h2>
                <p className="mt-3 text-lg text-saphir-dark/80">{teamMembers[0].role}</p>
                <p className="mt-4 text-lg text-saphir-dark">{teamMembers[0].bio}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rest of team - grid */}
      <section className="pt-4 pb-8 md:pt-4 md:pb-12">
        <div className="mx-auto max-w-7xl px-20 md:px-32 lg:px-48">
          <div className="grid gap-8 sm:grid-cols-2">
            {teamMembers.slice(1).map((member) => (
              <div key={member.name} className="rounded-lg bg-white p-6 shadow-lg">
                <img
                  src={member.image}
                  alt={member.alt}
                  width={188}
                  height={250}
                  className="mx-auto rounded-lg object-cover"
                />
                <h3 className="mt-4 font-heading text-lg font-semibold text-saphir-blue md:text-xl">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`LinkedIn ${member.name}`}
                  >
                    {member.name}
                  </a>
                </h3>
                <p className="mt-2 text-base text-saphir-dark/80 md:text-lg">{member.role}</p>
                {member.bio && <p className="mt-3 text-base text-saphir-dark md:text-lg">{member.bio}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Distinctions & Affiliations */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-20 md:px-32 lg:px-48">
          <div className="rounded-lg bg-white p-8 shadow-lg md:p-12">
            {/* Distinctions */}
            <h2 className="mb-8 font-heading text-xl font-semibold uppercase tracking-wider text-saphir-blue md:text-2xl">
              Distinctions
            </h2>
            <a
              href="https://www.performance-watcher.ch/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <img
                src="/Certifications/BestManagerPW2019MidVol.jpg"
                alt="Best Manager Performance Watcher 2019 Mid Vol"
                width={300}
                height={77}
                className="rounded-lg hover:opacity-90"
              />
            </a>

            {/* Affiliations */}
            <h2 className="mb-8 mt-12 font-heading text-xl font-semibold uppercase tracking-wider text-saphir-blue md:text-2xl">
              Affiliations
            </h2>
            <div className="space-y-4 text-lg text-saphir-dark">
              <p>
                Selon les exigences légales découlant de la Loi fédérale sur les services financiers (
                <a
                  href="https://www.admin.ch/opc/fr/classified-compilation/20152661/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-saphir-blue"
                >
                  LSFin
                </a>
                ), Saphir Invest est affilié à l&apos;
                <a href="https://ombudfinance.ch/accueil/" target="_blank" rel="noopener noreferrer" className="text-saphir-blue">
                  OFS Ombud Finance Suisse
                </a>
                .
              </p>
              <p>
                Saphir Invest a obtenu auprès de la{" "}
                <a
                  href="https://www.finma.ch/fr/finma-public/etablissements-personnes-et-produits-autorises/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-saphir-blue"
                >
                  FINMA
                </a>{" "}
                sa licence de gestionnaire de fortune durant l&apos;été 2022.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
              <a
                href="https://www.vsv-asg.ch/fr/home"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center p-4 transition hover:opacity-70"
              >
                <img src="/Certifications/Logo-VSV-ASG.png" alt="VSG ASG" className="max-h-16 w-full object-contain" />
              </a>
              <a
                href="https://www.aoos.ch/?lang=fr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center p-4 transition hover:opacity-70"
              >
                <img src="/Certifications/Logo-AOOS.png" alt="AOOS" className="max-h-16 w-full object-contain" />
              </a>
              <a
                href="https://ombudfinance.ch/accueil/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center p-4 transition hover:opacity-70"
              >
                <img src="/Certifications/Logo-OFS.png" alt="OFS Ombud Finance Suisse" className="max-h-16 w-full object-contain" />
              </a>
              <a
                href="https://www.finma.ch/fr/finma-public/etablissements-personnes-et-produits-autorises/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center p-4 transition hover:opacity-70"
              >
                <img src="/Certifications/logo-finma.png" alt="FINMA" className="max-h-16 w-full object-contain" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
