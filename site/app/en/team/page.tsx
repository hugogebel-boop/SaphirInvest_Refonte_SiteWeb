import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "A dedicated team committed to protecting and growing our clients' wealth. With a lean and flexible structure, Saphir Invest focuses exclusively on analyzing investment opportunities.",
};

const teamMembers = [
  {
    name: "Pierre Unternährer",
    role: "Founder",
    image: "/Portrait/Pierre.png",
    alt: "Pierre Unternährer",
    bio: "Master of Science HEC Lausanne, Certified Financial Planner and Investment Expert CFPI. Before founding Saphir Invest in 2013, Pierre Unternährer worked at UBS as an economist and then portfolio manager. He has more than 25 years of experience in wealth management.",
    linkedin: "https://www.linkedin.com/mwlite/in/pierre-unternährer-4399046a/",
  },
  {
    name: "Yves Diserens",
    role: "Director and wealth manager at DM Invest SA",
    image: "/Portrait/Yves.png",
    alt: "Yves Diserens",
    bio: "Yves Diserens has more than 25 years of experience in wealth management.",
    linkedin: "https://www.linkedin.com/in/yves-diserens-a454b012/",
    companyUrl: "https://www.dminvest.ch/",
  },
  {
    name: "Patrick Germanier",
    role: "Wealth Manager",
    image: "/Portrait/Portrait-P.Germanier-web.jpg",
    alt: "Patrick Germanier",
    bio: "Patrick Germanier has more than 25 years of experience in wealth management.",
    linkedin: "https://www.linkedin.com/in/patrick-germanier-6220715/",
  },
  {
    name: "Fred Gysler",
    role: "Wealth Manager",
    image: "/Portrait/Photo-Fred-noir_blanc.jpg",
    alt: "Fred Gysler",
    bio: "Fred Gysler has more than 25 years of experience in wealth management.",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Sandrine Lavanchy",
    role: "Management Assistant",
    image: "/Portrait/Sandrine.png",
    alt: "Sandrine Lavanchy",
    bio: "",
    linkedin: "https://www.linkedin.com/in/sandrine-lavanchy-a91b3b192/",
  },
];

export default function TeamPage() {
  return (
    <div className="bg-[#fafcff]">
      {/* Intro */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-20 md:px-32 lg:px-48">
          <h1 className="mb-8 font-heading text-2xl font-semibold uppercase tracking-wider text-saphir-blue md:text-3xl">
            Team
          </h1>
          <div className="space-y-4 text-lg text-saphir-dark md:text-xl">
            <p className="text-xl font-medium text-saphir-dark md:text-2xl">
              A dedicated team committed to protecting and growing our clients&apos; wealth
            </p>
            <p>
              Based in the heart of Lausanne, Saphir Invest SA is an independent wealth management company.
            </p>
            <p>
              The company is entirely owned by the management team, which has extensive experience in financial
              markets and investment advice. Saphir Invest SA is a member of the{" "}
              <a href="https://www.vsv-asg.ch/en/home" target="_blank" rel="noopener noreferrer" className="text-saphir-blue">
                Swiss Association of Asset Managers
              </a>
              , and is affiliated with{" "}
              <a href="https://www.aoos.ch/?lang=en" target="_blank" rel="noopener noreferrer" className="text-saphir-blue">
                AOOS
              </a>
              , a supervisory body that requires compliance with its Code of Conduct.
            </p>
            <p>
              With a lean and flexible structure, the company focuses exclusively on analyzing
              investment opportunities and customer service, based on two key aspects:
            </p>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <strong className="text-saphir-blue">Active commitment</strong>
                <p className="mt-2">
                  Actively managing clients&apos; savings with a conviction-based approach. We firmly believe
                  in the power of common sense and insight.
                </p>
              </div>
              <div>
                <strong className="text-saphir-blue">An entrepreneurial and independent spirit</strong>
                <p className="mt-2">
                  A team capable of conducting independent analyses and, where appropriate, partnering with
                  specialists in different fields.
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

      {/* Awards & Affiliations */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-20 md:px-32 lg:px-48">
          <div className="rounded-lg bg-white p-8 shadow-lg md:p-12">
            {/* Awards */}
            <h2 className="mb-8 font-heading text-xl font-semibold uppercase tracking-wider text-saphir-blue md:text-2xl">
              Awards
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
                In accordance with the legal requirements of the Federal Act on Financial Services (
                <a
                  href="https://www.admin.ch/opc/en/classified-compilation/20152661/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-saphir-blue"
                >
                  FinSA
                </a>
                ), Saphir Invest is affiliated with{" "}
                <a href="https://ombudfinance.ch/en/home/" target="_blank" rel="noopener noreferrer" className="text-saphir-blue">
                  OFS Ombud Finance Switzerland
                </a>
                .
              </p>
              <p>
                Saphir Invest obtained its asset manager license from{" "}
                <a
                  href="https://www.finma.ch/en/finma-public/authorised-institutions-individuals-and-products/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-saphir-blue"
                >
                  FINMA
                </a>{" "}
                in summer 2022.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
              <a
                href="https://www.vsv-asg.ch/en/home"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center p-4 transition hover:opacity-70"
              >
                <img src="/Certifications/Logo-VSV-ASG.png" alt="VSG ASG" className="max-h-16 w-full object-contain" />
              </a>
              <a
                href="https://www.aoos.ch/?lang=en"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center p-4 transition hover:opacity-70"
              >
                <img src="/Certifications/Logo-AOOS.png" alt="AOOS" className="max-h-16 w-full object-contain" />
              </a>
              <a
                href="https://ombudfinance.ch/en/home/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center p-4 transition hover:opacity-70"
              >
                <img src="/Certifications/Logo-OFS.png" alt="OFS Ombud Finance Switzerland" className="max-h-16 w-full object-contain" />
              </a>
              <a
                href="https://www.finma.ch/en/finma-public/authorised-institutions-individuals-and-products/"
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
