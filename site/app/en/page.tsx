"use client";

import Link from "next/link";
import { RevealText, RevealTextOnScroll } from "@/components/Typewriter";

export default function HomePageEN() {
  return (
    <>
      {/* Hero */}
      <section className="flex min-h-screen items-start pt-24 md:pt-32 lg:pt-40">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center md:px-8 lg:px-12">
          <h1 className="mb-10 font-heading text-3xl font-medium text-saphir-blue md:text-4xl lg:text-5xl" style={{ textShadow: '0 0 30px rgba(0, 0, 0, 0.5), 0 0 60px rgba(0, 0, 0, 0.3), 0 0 90px rgba(0, 0, 0, 0.2)' }}>
            Conviction-based management
          </h1>
          <blockquote className="font-quote text-xl italic md:text-2xl">
            « <RevealText 
              text="The stock market demands that you have convictions. Those who don't become its victims."
              speed={120}
            /> »
          </blockquote>
          <p className="mt-4 text-right text-sm">
            <a
              href="https://en.wikipedia.org/wiki/Peter_Lynch"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white"
            >
              Peter Lynch
            </a>
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              href="/en/values/"
              className="inline-block rounded border border-white px-4 py-2 text-sm font-medium text-white transition hover:bg-white hover:text-saphir-blue"
            >
              Our approach
            </Link>
          </div>
        </div>
      </section>

      {/* Approach and Values */}
      <section className="flex items-center bg-[#fafcff] py-12 md:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-stretch gap-6 px-4 py-8 sm:px-6 md:grid-cols-2 md:gap-8 md:px-12 md:py-16 lg:px-16">
          <div className="order-2 md:order-1">
            <img
              src="/Tableau/tableauzoom-web1.webp"
              alt="Painting"
              width={600}
              height={400}
              loading="lazy"
              decoding="async"
              className="h-48 w-full rounded-lg object-cover shadow-xl sm:h-64 md:h-full"
            />
          </div>
          <div className="order-1 flex flex-col justify-center space-y-6 md:order-2">
            <h2 className="font-heading text-lg font-semibold uppercase tracking-wider text-saphir-blue md:text-xl">
              Approach and values
            </h2>
            <blockquote className="font-quote text-base italic sm:text-lg md:text-xl">
              <span className="text-saphir-dark">«</span> <RevealTextOnScroll 
                text="Risk is not inherent in an investment; it is always relative to the price paid. Uncertainty is not the same as risk. Indeed, when great uncertainty – as in the autumn of 2008 – drives security prices to particularly low levels, they often become less risky investments."
                speed={80}
                darkMode
              /> <span className="text-saphir-dark">»</span>
            </blockquote>
            <p className="text-right text-sm">
              <a
                href="https://en.wikipedia.org/wiki/Seth_Klarman"
                target="_blank"
                rel="noopener noreferrer"
                className="text-saphir-dark/70 hover:text-saphir-dark"
              >
                Seth Klarman
              </a>
            </p>
            <div className="flex justify-center md:justify-start">
              <Link
                href="/en/values/"
                className="inline-block rounded border border-saphir-blue px-4 py-2 text-sm font-medium text-saphir-blue transition hover:bg-saphir-blue hover:text-white"
              >
                More information
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="flex items-center bg-[#fafcff] py-12 md:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-stretch gap-6 px-4 py-8 sm:px-6 md:grid-cols-2 md:gap-8 md:px-12 md:py-16 lg:px-16">
          <div className="flex flex-col justify-center space-y-6">
            <h2 className="font-heading text-lg font-semibold uppercase tracking-wider text-saphir-blue md:text-xl">
              Team
            </h2>
            <p className="text-base text-saphir-dark sm:text-lg md:text-xl">
              A dedicated team committed to protecting
              <br />
              and growing our clients&apos; wealth.
            </p>
            <div className="flex justify-center md:justify-start">
              <Link
                href="/en/team/"
                className="inline-block rounded border border-saphir-blue px-4 py-2 text-sm font-medium text-saphir-blue transition hover:bg-saphir-blue hover:text-white"
              >
                Discover
              </Link>
            </div>
          </div>
          <div>
            <img
              src="/Tableau/tableauzoom-web2.webp"
              alt="Painting"
              width={600}
              height={400}
              loading="lazy"
              decoding="async"
              className="h-48 w-full rounded-lg object-cover shadow-xl sm:h-64 md:h-full"
            />
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="flex items-center bg-[#fafcff] py-12 md:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-stretch gap-6 px-4 py-8 sm:px-6 md:grid-cols-2 md:gap-8 md:px-12 md:py-16 lg:px-16">
          <div className="order-2 md:order-1">
            <img
              src="/Tableau/tableauzoom-web3.webp"
              alt="Painting"
              width={600}
              height={400}
              loading="lazy"
              decoding="async"
              className="h-48 w-full rounded-lg object-cover shadow-xl sm:h-64 md:h-full"
            />
          </div>
          <div className="order-1 flex flex-col justify-center space-y-6 md:order-2">
            <h2 className="font-heading text-lg font-semibold uppercase tracking-wider text-saphir-blue md:text-xl">
              Contact
            </h2>
            <blockquote className="font-quote text-base italic sm:text-lg md:text-xl">
              <span className="text-saphir-dark">«</span> <RevealTextOnScroll 
                text="The intelligent investor is a realist who sells to optimists and buys from pessimists."
                speed={100}
                darkMode
              /> <span className="text-saphir-dark">»</span>
            </blockquote>
            <p className="text-right text-sm">
              <a
                href="https://en.wikipedia.org/wiki/Benjamin_Graham"
                target="_blank"
                rel="noopener noreferrer"
                className="text-saphir-dark/70 hover:text-saphir-dark"
              >
                Benjamin Graham
              </a>
            </p>
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div className="flex items-start gap-3">
                <svg className="h-5 w-5 shrink-0 text-saphir-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
                <div>
                  <p className="font-semibold text-saphir-dark">+41 21 648 00 16</p>
                </div>
              </div>
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
                    Switzerland
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center md:justify-start">
              <Link
                href="/en/contact/"
                className="inline-block rounded border border-saphir-blue px-4 py-2 text-sm font-medium text-saphir-blue transition hover:bg-saphir-blue hover:text-white"
              >
                Find us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
