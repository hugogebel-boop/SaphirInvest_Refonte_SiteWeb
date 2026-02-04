"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site, navLinks, navLinksEN } from "@/lib/site";

export function Footer() {
  const { footer, address, phone } = site;
  const pathname = usePathname();
  const isEnglish = pathname.startsWith("/en");
  
  return (
    <footer className="mt-auto bg-saphir-blue text-white">
      {/* Section principale */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:px-12 md:py-16 lg:px-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 lg:grid-cols-4">
          
          {/* Logo et description */}
          <div className="lg:col-span-1">
            <Link href={isEnglish ? "/en/" : "/"} className="inline-block">
              <img
                src="/logo/logo Saphir Invest.webp"
                alt={site.name}
                width={200}
                height={34}
                loading="lazy"
                decoding="async"
                className="h-8 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-white/80">
              {isEnglish ? "Asset management" : site.tagline}. {isEnglish ? "Conviction-based management at the service of your assets since 2013." : "Une gestion de convictions au service de votre patrimoine depuis 2013."}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Navigation
            </h3>
            <ul className="mt-4 space-y-3">
              {(isEnglish ? navLinksEN : navLinks).slice(0, 4).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={`tel:${phone.replace(/\s/g, "")}`}
                  className="text-sm text-white/70 transition-colors hover:text-white"
                >
                  {phone}
                </a>
              </li>
              <li className="text-sm text-white/70">
                {address.street}
                <br />
                {address.postal}
                <br />
                {isEnglish ? "Switzerland" : address.country}
              </li>
            </ul>
          </div>

          {/* Légal */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              {isEnglish ? "Legal information" : "Informations légales"}
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  href={footer.impressumFr}
                  className="text-sm text-white/70 transition-colors hover:text-white"
                >
                  Mentions légales (FR)
                </Link>
              </li>
              <li>
                <Link
                  href={footer.impressumEn}
                  className="text-sm text-white/70 transition-colors hover:text-white"
                >
                  Impressum (EN)
                </Link>
              </li>
              <li>
                <Link
                  href={isEnglish ? "/" : "/en/"}
                  className="text-sm text-white/70 transition-colors hover:text-white"
                >
                  {isEnglish ? "Version française" : "English version"}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Barre inférieure */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 md:px-12 lg:px-16">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-xs text-white/60">
              {footer.copyright}
            </p>
            <p className="text-xs text-white/60">
              Art : &ldquo;Times Square&rdquo; {isEnglish ? "by" : "par"}{" "}
              <a
                href={footer.artUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline transition-colors hover:text-white"
              >
                Louis Magre
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
