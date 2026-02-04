import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Nous contacter",
  description:
    "Tous les moyens de contact : par e-mail, par téléphone, par courrier. Ainsi que la localisation de nos bureaux, à 2 pas de la célèbre Place des Banques : la place St-François à Lausanne.",
};

export default function ContactPage() {
  const { address, phone, mapUrl } = site;

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 id="contact" className="mb-8 text-3xl font-semibold uppercase text-saphir-blue md:text-4xl">
        Nous contacter
      </h1>

      {/* Map */}
      <section className="mb-12 overflow-hidden rounded-lg shadow-lg">
        <iframe
          src={mapUrl}
          title="Rue du Grand-Chêne 6, Lausanne, Suisse"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="min-h-[300px] w-full"
        />
      </section>

      {/* Contact info */}
      <section className="grid gap-8 sm:grid-cols-2">
        <div className="flex items-start gap-4 rounded-lg bg-white/80 p-6 shadow-sm">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-saphir-blue/10 text-saphir-blue" aria-hidden>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </span>
          <div>
            <h2 className="text-lg font-semibold text-saphir-dark">Téléphone</h2>
            <a href={`tel:${phone.replace(/\s/g, "")}`} className="mt-2 block text-saphir-blue hover:underline">
              {phone}
            </a>
          </div>
        </div>
        <div className="flex items-start gap-4 rounded-lg bg-white/80 p-6 shadow-sm">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-saphir-blue/10 text-saphir-blue" aria-hidden>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-1 4h1" />
            </svg>
          </span>
          <div>
            <h2 className="text-lg font-semibold text-saphir-dark">Saphir Invest SA</h2>
            <p className="mt-2 text-saphir-dark/90">
              {address.street}
              <br />
              {address.postal} {address.country}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
