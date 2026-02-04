import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales - Saphir Invest SA",
};

export default function MentionsLegalesPage() {
  return (
    <div className="bg-[#fafcff]">
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-20 md:px-32 lg:px-48">
          <h1 className="mb-8 font-heading text-2xl font-semibold uppercase tracking-wider text-saphir-blue md:text-3xl">
            Mentions légales
          </h1>
          <div className="max-w-3xl space-y-6 text-lg text-saphir-dark">
            <div className="rounded-lg bg-white p-8 shadow-lg">
              <p className="text-saphir-dark">
                <strong className="text-saphir-blue">Saphir Invest SA</strong>
                <br />
                Rue du Grand-Chêne 6
                <br />
                1003 Lausanne
                <br />
                Suisse
              </p>
            </div>
            <p className="text-saphir-dark/80">
              Ce site est la propriété de Saphir Invest SA. Pour toute question relative aux mentions légales, veuillez
              nous contacter.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
