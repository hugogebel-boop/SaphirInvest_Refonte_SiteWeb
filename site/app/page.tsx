import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="flex min-h-[70vh] items-center bg-saphir-blue/20">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center md:px-6 lg:px-8">
          <p className="mb-6 text-xl font-medium text-saphir-dark md:text-2xl">
            Une gestion de convictions
          </p>
          <hr className="mx-auto mb-8 w-24 border-saphir-teal" />
          <blockquote className="text-lg text-saphir-dark/90 md:text-xl">
            « La bourse demande que l&apos;on ait des convictions.
            <br />
            Ceux qui n&apos;en n&apos;ont pas deviennent ses victimes. »
          </blockquote>
          <p className="mt-4 text-right text-sm">
            <a
              href="https://en.wikipedia.org/wiki/Peter_Lynch"
              target="_blank"
              rel="noopener noreferrer"
              className="text-saphir-dark hover:underline"
            >
              Peter Lynch
            </a>
          </p>
          <div className="mt-8 flex justify-center">
            <a
              href="/en/welcome/"
              className="inline-block rounded border border-saphir-blue px-4 py-2 text-sm font-medium text-saphir-blue transition hover:bg-saphir-blue hover:text-white"
            >
              English version
            </a>
          </div>
        </div>
      </section>

      {/* Approche et Valeurs */}
      <section className="section-min-h flex min-h-screen items-center bg-white/70">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-16 md:grid-cols-2 md:px-6 lg:px-8">
          <div className="hidden md:block" aria-hidden />
          <div className="flex flex-col justify-center space-y-6">
            <p className="text-sm font-semibold uppercase tracking-wider text-saphir-blue">
              Approche et valeurs
            </p>
            <blockquote className="text-saphir-dark/90">
              « Le risque n&apos;est pas inhérent à un investissement;
              <br />
              il est toujours relatif au prix payé.
              <br />
              L&apos;incertitude n&apos;est pas la même chose que le risque.
              <br />
              En effet, lorsqu&apos;une grande incertitude – comme à l&apos;automne 2008 – pousse les prix des titres à
              des niveaux particulièrement bas, ils deviennent souvent des investissements moins risqués. »
            </blockquote>
            <p className="text-right text-sm">
              <a
                href="https://en.wikipedia.org/wiki/Seth_Klarman"
                target="_blank"
                rel="noopener noreferrer"
                className="text-saphir-dark hover:underline"
              >
                Seth Klarman
              </a>
            </p>
            <div className="flex justify-center md:justify-start">
              <Link
                href="/valeurs/"
                className="inline-flex items-center gap-2 rounded border border-saphir-blue px-4 py-2 text-sm font-medium text-saphir-blue transition hover:bg-saphir-blue hover:text-white"
              >
                Plus d&apos;informations
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Qui sommes-nous */}
      <section className="section-min-h flex min-h-screen items-center bg-saphir-blue/15">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-16 md:grid-cols-2 md:px-6 lg:px-8">
          <div className="flex flex-col justify-center space-y-6">
            <p className="text-sm font-semibold uppercase tracking-wider text-saphir-blue">
              Qui sommes-nous ?
            </p>
            <p className="text-center text-lg text-saphir-dark md:text-left">
              Une équipe dévouée et motivée à protéger
              <br />
              et accroître le patrimoine de notre clientèle.
            </p>
            <div className="flex justify-center md:justify-start">
              <Link
                href="/equipe/"
                className="inline-flex items-center gap-2 rounded border border-saphir-blue px-4 py-2 text-sm font-medium text-saphir-blue transition hover:bg-saphir-blue hover:text-white"
              >
                Équipe
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
          <div className="hidden md:block" aria-hidden />
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section-min-h flex min-h-screen items-center bg-white/70">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-16 md:grid-cols-2 md:px-6 lg:px-8">
          <div className="hidden md:block" aria-hidden />
          <div className="flex flex-col justify-center space-y-6">
            <p className="text-sm font-semibold uppercase tracking-wider text-saphir-blue">
              Contact
            </p>
            <blockquote className="text-saphir-dark/90">
              « L&apos;investisseur intelligent est un réaliste
              <br />
              qui vend aux optimistes et achète aux pessimistes. »
            </blockquote>
            <p className="text-right text-sm">
              <a
                href="https://fr.wikipedia.org/wiki/Benjamin_Graham"
                target="_blank"
                rel="noopener noreferrer"
                className="text-saphir-dark hover:underline"
              >
                Benjamin Graham
              </a>
            </p>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="flex items-start gap-3">
                <span className="text-saphir-blue" aria-hidden>
                  📞
                </span>
                <div>
                  <p className="font-semibold text-saphir-dark">+41 21 648 00 16</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-saphir-blue" aria-hidden>
                  🏢
                </span>
                <div>
                  <p className="font-semibold text-saphir-dark">Saphir Invest SA</p>
                  <p className="text-sm text-saphir-dark/90">
                    Rue du Grand-Chêne 6
                    <br />
                    1003 Lausanne
                    <br />
                    Suisse
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center md:justify-start">
              <Link
                href="/nous-contacter/"
                className="inline-flex items-center gap-2 rounded border border-saphir-blue px-4 py-2 text-sm font-medium text-saphir-blue transition hover:bg-saphir-blue hover:text-white"
              >
                Localisation
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
