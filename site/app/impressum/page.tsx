import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum - Saphir Invest SA",
};

export default function ImpressumPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="mb-8 text-3xl font-semibold text-saphir-blue">Impressum</h1>
      <div className="prose prose-saphir-dark max-w-none text-saphir-dark">
        <p>
          Saphir Invest SA
          <br />
          Rue du Grand-Chêne 6
          <br />
          1003 Lausanne
          <br />
          Switzerland
        </p>
        <p className="mt-6">
          This website is the property of Saphir Invest SA. For any questions regarding the impressum, please
          contact us.
        </p>
      </div>
    </div>
  );
}
