import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales - Saphir Invest SA",
};

export default function MentionsLegalesPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="mb-8 text-3xl font-semibold text-saphir-blue">Mentions légales</h1>
      <div className="prose prose-saphir-dark max-w-none text-saphir-dark">
        <p>
          Saphir Invest SA
          <br />
          Rue du Grand-Chêne 6
          <br />
          1003 Lausanne
          <br />
          Suisse
        </p>
        <p className="mt-6">
          Ce site est la propriété de Saphir Invest SA. Pour toute question relative aux mentions légales, veuillez
          nous contacter.
        </p>
      </div>
    </div>
  );
}
