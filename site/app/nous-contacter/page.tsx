import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez Saphir Invest SA à Lausanne. Rue du Grand-Chêne 6, près de la Place St-François. Téléphone: +41 21 648 00 16. Gestionnaire de fortune indépendant en Suisse.",
  alternates: {
    canonical: "https://saphir-invest.ch/nous-contacter/",
    languages: {
      "fr-CH": "https://saphir-invest.ch/nous-contacter/",
      "en": "https://saphir-invest.ch/en/contact/",
    },
  },
  openGraph: {
    title: "Contact | Saphir Invest SA",
    description:
      "Contactez Saphir Invest SA à Lausanne. Rue du Grand-Chêne 6, près de la Place St-François.",
    url: "https://saphir-invest.ch/nous-contacter/",
    type: "website",
  },
};

export default function ContactPage() {
  const { address, phone, mapUrl } = site;

  return (
    <div className="bg-[#fafcff]">
      {/* Header */}
      <section className="pt-12 pb-4 md:pt-24 md:pb-6">
        <div className="mx-auto max-w-7xl px-6 sm:px-12 md:px-32 lg:px-44">
          <h1 id="contact" className="font-heading text-2xl font-semibold uppercase tracking-wider text-saphir-blue md:text-3xl">
            Contact
          </h1>
        </div>
      </section>

      {/* Map */}
      <section className="py-4 md:py-6">
        <div className="mx-auto max-w-7xl px-6 sm:px-12 md:px-32 lg:px-44">
          <div className="overflow-hidden rounded-lg shadow-lg">
            <iframe
              src={mapUrl}
              title="Rue du Grand-Chêne 6, Lausanne, Suisse"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[280px] w-full sm:h-[350px] md:h-[450px]"
            />
          </div>
        </div>
      </section>

      {/* Contact info */}
      <section className="py-12 md:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-12 md:px-32 lg:px-44">
          <div className="grid gap-6 sm:grid-cols-2 sm:gap-8">
            <div className="flex items-start gap-4 rounded-lg bg-white p-6 shadow-lg sm:p-8">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-saphir-blue/10 text-saphir-blue sm:h-14 sm:w-14" aria-hidden>
                <svg className="h-6 w-6 sm:h-7 sm:w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
              </span>
              <div>
                <h2 className="font-heading text-base font-semibold uppercase tracking-wider text-saphir-blue sm:text-lg">Téléphone</h2>
                <a href={`tel:${phone.replace(/\s/g, "")}`} className="mt-3 block text-lg text-saphir-dark hover:text-saphir-blue">
                  {phone}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-lg bg-white p-6 shadow-lg sm:p-8">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-saphir-blue/10 text-saphir-blue sm:h-14 sm:w-14" aria-hidden>
                <svg className="h-6 w-6 sm:h-7 sm:w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
              </span>
              <div>
                <h2 className="font-heading text-base font-semibold uppercase tracking-wider text-saphir-blue sm:text-lg">Adresse</h2>
                <p className="mt-3 text-lg text-saphir-dark">
                  <strong>Saphir Invest SA</strong>
                </p>
                <p className="mt-1 text-saphir-dark/80">
                  {address.street}
                  <br />
                  {address.postal} {address.country}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
