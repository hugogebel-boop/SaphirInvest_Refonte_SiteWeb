"use client";

import Link from "next/link";
import Image from "next/image";
import { RevealText, RevealTextOnScroll } from "@/components/Typewriter";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-screen">
        <div className="sticky top-32 md:top-40 lg:top-48 mx-auto max-w-3xl px-4 py-16 text-center md:px-8 lg:px-12">
          <h1 className="mb-10 font-heading text-3xl font-medium text-saphir-blue md:text-4xl lg:text-5xl">
            <span
              style={{
                textShadow: `
                  0 0 40px rgba(0,0,0,1),
                  0 0 80px rgba(0,0,0,1),
                  0 0 140px rgba(0,0,0,0.98),
                  0 0 220px rgba(0,0,0,0.95),
                  0 0 320px rgba(0,0,0,0.9),
                  0 0 450px rgba(0,0,0,0.85),
                  0 0 600px rgba(0,0,0,0.75),
                  0 0 800px rgba(0,0,0,0.6),
                  0 0 1000px rgba(0,0,0,0.4)
                `
              }}
            >Une gestion </span>
            <span
              style={{
                textShadow: `
                  0 0 50px rgba(255,255,255,1),
                  0 0 100px rgba(255,255,255,0.95),
                  0 0 180px rgba(255,255,255,0.85),
                  0 0 280px rgba(255,255,255,0.7),
                  0 0 400px rgba(255,255,255,0.5),
                  0 0 550px rgba(255,255,255,0.3)
                `
              }}
            >de convictions</span>
          </h1>
          <blockquote className="font-quote text-xl italic md:text-2xl">
            « <RevealText 
              text="La bourse demande que l'on ait des convictions. Ceux qui n'en n'ont pas deviennent ses victimes."
              speed={120}
            /> »
          </blockquote>
          <p className="mt-4 text-right text-sm">
            <a
              href="https://en.wikipedia.org/wiki/Peter_Lynch"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="text-white/80 hover:text-white"
            >
              Peter Lynch
            </a>
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              href="/valeurs/"
              className="inline-block rounded border border-white px-4 py-2 text-sm font-medium text-white transition hover:bg-white hover:text-saphir-blue"
            >
              Notre approche
            </Link>
          </div>
        </div>
      </section>

      {/* Approche et Valeurs */}
      <section className="flex items-center bg-[#fafcff] py-12 md:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-stretch gap-6 px-4 py-8 sm:px-6 md:grid-cols-2 md:gap-8 md:px-12 md:py-16 lg:px-16">
          <div className="order-2 md:order-1">
            <Image
              src="/Tableau/tableauzoom-web1.webp"
              alt="Détail du tableau Times Square de Louis Magre - tons dorés et lumière urbaine"
              width={600}
              height={400}
              className="h-48 w-full rounded-lg object-cover shadow-xl sm:h-64 md:h-full"
            />
          </div>
          <div className="order-1 flex flex-col justify-center space-y-6 md:order-2">
            <h2 className="font-heading text-xl font-semibold uppercase tracking-wider text-saphir-blue sm:text-2xl md:text-xl">
              Approche et valeurs
            </h2>
            <blockquote className="font-quote text-base italic sm:text-lg md:text-xl">
              <span className="text-saphir-dark">«</span> <RevealTextOnScroll 
                text="Le risque n'est pas inhérent à un investissement; il est toujours relatif au prix payé. L'incertitude n'est pas la même chose que le risque. En effet, lorsqu'une grande incertitude – comme à l'automne 2008 – pousse les prix des titres à des niveaux particulièrement bas, ils deviennent souvent des investissements moins risqués."
                speed={80}
                darkMode
              /> <span className="text-saphir-dark">»</span>
            </blockquote>
            <p className="text-right text-sm">
              <a
                href="https://en.wikipedia.org/wiki/Seth_Klarman"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="text-saphir-dark/70 hover:text-saphir-dark"
              >
                Seth Klarman
              </a>
            </p>
            <div className="flex justify-center md:justify-start">
              <Link
                href="/valeurs/"
                className="inline-block rounded border border-saphir-blue px-4 py-2 text-sm font-medium text-saphir-blue transition hover:bg-saphir-blue hover:text-white"
              >
                Plus d&apos;informations
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Qui sommes-nous */}
      <section className="flex items-center bg-[#fafcff] py-12 md:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-stretch gap-6 px-4 py-8 sm:px-6 md:grid-cols-2 md:gap-8 md:px-12 md:py-16 lg:px-16">
          <div className="flex flex-col justify-center space-y-6">
            <h2 className="font-heading text-xl font-semibold uppercase tracking-wider text-saphir-blue sm:text-2xl md:text-xl">
              Équipe
            </h2>
            <p className="text-base text-saphir-dark sm:text-lg md:text-xl">
              Une équipe dévouée et motivée à protéger
              <br />
              et accroître le patrimoine de notre clientèle.
            </p>
            <div className="flex justify-center md:justify-start">
              <Link
                href="/equipe/"
                className="inline-block rounded border border-saphir-blue px-4 py-2 text-sm font-medium text-saphir-blue transition hover:bg-saphir-blue hover:text-white"
              >
                Découvrir
              </Link>
            </div>
          </div>
          <div>
            <Image
              src="/Tableau/tableauzoom-web2.webp"
              alt="Détail du tableau Times Square de Louis Magre - silhouettes et atmosphère nocturne"
              width={600}
              height={400}
              className="h-48 w-full rounded-lg object-cover shadow-xl sm:h-64 md:h-full"
            />
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="flex items-center bg-[#fafcff] py-12 md:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-stretch gap-6 px-4 py-8 sm:px-6 md:grid-cols-2 md:gap-8 md:px-12 md:py-16 lg:px-16">
          <div className="order-2 md:order-1">
            <Image
              src="/Tableau/tableauzoom-web3.webp"
              alt="Détail du tableau Times Square de Louis Magre - reflets et profondeur"
              width={600}
              height={400}
              className="h-48 w-full rounded-lg object-cover shadow-xl sm:h-64 md:h-full"
            />
          </div>
          <div className="order-1 flex flex-col justify-center space-y-6 md:order-2">
            <h2 className="font-heading text-xl font-semibold uppercase tracking-wider text-saphir-blue sm:text-2xl md:text-xl">
              Contact
            </h2>
            <blockquote className="font-quote text-base italic sm:text-lg md:text-xl">
              <span className="text-saphir-dark">«</span> <RevealTextOnScroll 
                text="L'investisseur intelligent est un réaliste qui vend aux optimistes et achète aux pessimistes."
                speed={100}
                darkMode
              /> <span className="text-saphir-dark">»</span>
            </blockquote>
            <p className="text-right text-sm">
              <a
                href="https://fr.wikipedia.org/wiki/Benjamin_Graham"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="text-saphir-dark/70 hover:text-saphir-dark"
              >
                Benjamin Graham
              </a>
            </p>
            <div className="mt-12 grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div className="flex items-start gap-3">
                <svg className="h-5 w-5 shrink-0 text-saphir-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
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
              <div className="flex items-start gap-3">
                <svg className="h-5 w-5 shrink-0 text-saphir-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
                <div>
                  <a 
                    href="tel:+41216480016" 
                    className="font-semibold text-saphir-dark hover:text-saphir-blue transition-colors"
                  >
                    +41 21 648 00 16
                  </a>
                </div>
              </div>
            </div>
            <div className="flex justify-center md:justify-start">
              <Link
                href="/nous-contacter/"
                className="inline-block rounded border border-saphir-blue px-4 py-2 text-sm font-medium text-saphir-blue transition hover:bg-saphir-blue hover:text-white"
              >
                Nous trouver
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
