import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Welcome",
  description: "Wealth management. A conviction-based approach.",
};

export default function EnglishWelcomePage() {
  return (
    <>
      {/* Hero */}
      <section className="section-min-h flex min-h-screen items-center bg-saphir-blue/20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-16 md:grid-cols-2 md:px-6 lg:px-8">
          <div className="flex flex-col justify-center space-y-6">
            <img
              src="https://saphir-invest.ch/wp-content/uploads/2020/02/Saphir-Invest-logo-1024x87.png"
              alt="Saphir Invest"
              width={1024}
              height={87}
              className="hidden h-auto w-full max-w-md object-contain md:block"
            />
            <img
              src="https://saphir-invest.ch/wp-content/uploads/2020/02/Saphir-Invest-logo-vert.png"
              alt="Saphir Invest"
              width={600}
              height={170}
              className="block w-full max-w-sm object-contain md:hidden"
            />
            <p className="text-sm font-semibold uppercase tracking-wider text-saphir-blue">
              Wealth management
            </p>
            <hr className="hidden w-24 border-saphir-teal md:block" />
            <p className="text-center text-lg font-medium text-saphir-dark md:text-left">
              A conviction-based approach
            </p>
            <blockquote className="text-saphir-dark/90">
              &ldquo;The stock market demands that you have convictions. Those who don&apos;t become its victims.&rdquo;
            </blockquote>
            <p className="text-right text-sm">
              <a
                href="https://en.wikipedia.org/wiki/Peter_Lynch"
                target="_blank"
                rel="noopener noreferrer"
                className="text-saphir-dark hover:underline"
              >
                Peter Lynch
              </a>
            </p>
            <div className="flex justify-center gap-4 md:justify-start">
              <Link
                href="/"
                className="rounded border border-saphir-blue px-4 py-2 text-sm font-medium text-saphir-blue transition hover:bg-saphir-blue hover:text-white"
              >
                Version française
              </Link>
            </div>
          </div>
          <div className="hidden md:block" aria-hidden />
        </div>
      </section>

      {/* Approach and Values */}
      <section className="section-min-h flex min-h-screen items-center bg-white/70">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-16 md:grid-cols-2 md:px-6 lg:px-8">
          <div className="hidden md:block" aria-hidden />
          <div className="flex flex-col justify-center space-y-6">
            <p className="text-sm font-semibold uppercase tracking-wider text-saphir-blue">
              Approach and values
            </p>
            <blockquote className="text-saphir-dark/90">
              &ldquo;Risk is not inherent in an investment; it is always relative to the price paid. Uncertainty is not the same as risk. Indeed, when great uncertainty – as in the autumn of 2008 – drives security prices to particularly low levels, they often become less risky investments.&rdquo;
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
                More information
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Who we are */}
      <section className="section-min-h flex min-h-screen items-center bg-saphir-blue/15">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-16 md:grid-cols-2 md:px-6 lg:px-8">
          <div className="flex flex-col justify-center space-y-6">
            <p className="text-sm font-semibold uppercase tracking-wider text-saphir-blue">
              Who we are
            </p>
            <p className="text-center text-lg text-saphir-dark md:text-left">
              A dedicated team committed to protecting and growing our clients&apos; wealth.
            </p>
            <div className="flex justify-center md:justify-start">
              <Link
                href="/equipe/"
                className="inline-flex items-center gap-2 rounded border border-saphir-blue px-4 py-2 text-sm font-medium text-saphir-blue transition hover:bg-saphir-blue hover:text-white"
              >
                Team
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
              &ldquo;The intelligent investor is a realist who sells to optimists and buys from pessimists.&rdquo;
            </blockquote>
            <p className="text-right text-sm">
              <a
                href="https://en.wikipedia.org/wiki/Benjamin_Graham"
                target="_blank"
                rel="noopener noreferrer"
                className="text-saphir-dark hover:underline"
              >
                Benjamin Graham
              </a>
            </p>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="flex items-start gap-3">
                <span className="text-saphir-blue" aria-hidden>📞</span>
                <div>
                  <p className="font-semibold text-saphir-dark">+41 21 648 00 16</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-saphir-blue" aria-hidden>🏢</span>
                <div>
                  <p className="font-semibold text-saphir-dark">Saphir Invest SA</p>
                  <p className="text-sm text-saphir-dark/90">
                    Rue du Grand-Chêne 6
                    <br />
                    1003 Lausanne
                    <br />
                    Switzerland
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center md:justify-start">
              <Link
                href="/nous-contacter/"
                className="inline-flex items-center gap-2 rounded border border-saphir-blue px-4 py-2 text-sm font-medium text-saphir-blue transition hover:bg-saphir-blue hover:text-white"
              >
                Location
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
