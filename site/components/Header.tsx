"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { navLinks, site } from "@/lib/site";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Détecter le scroll pour changer l'apparence du header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    // Vérifier la position initiale
    handleScroll();
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Empêcher le scroll quand le menu est ouvert
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header 
        className={`sticky top-0 z-40 border-b border-saphir-blue/10 backdrop-blur transition-all duration-500 ${
          isScrolled 
            ? "bg-[#fafcff]/95 supports-[backdrop-filter]:bg-[#fafcff]/80" 
            : "bg-[#fafcff]"
        }`}
      >
        <div 
          className={`relative mx-auto flex max-w-7xl flex-col items-center justify-center px-4 transition-all duration-500 sm:px-6 lg:px-8 ${
            isScrolled ? "py-3" : "py-8 md:py-12"
          }`}
        >
          {/* Logo + Tagline centré */}
          <Link href="/" className="flex flex-col items-center" aria-label={`${site.name} - Accueil`}>
            <img
              src="https://saphir-invest.ch/wp-content/uploads/2020/02/cropped-Saphir-Invest-logo.png"
              alt={site.name}
              width={400}
              height={68}
              className={`w-auto object-contain transition-all duration-500 ${
                isScrolled ? "h-6 md:h-8" : "h-8 md:h-10 lg:h-12"
              }`}
            />
            {/* Tagline - visible seulement quand pas scrollé */}
            <span 
              className={`mt-3 text-center font-light uppercase tracking-[0.25em] text-saphir-blue transition-all duration-500 ${
                isScrolled 
                  ? "h-0 opacity-0 overflow-hidden" 
                  : "h-auto opacity-100 text-xl md:text-2xl lg:text-3xl"
              }`}
            >
              Gestion de patrimoine
            </span>
          </Link>

          {/* Bouton hamburger - positionné à droite */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="absolute right-4 top-1/2 z-50 flex h-12 w-12 -translate-y-1/2 flex-col items-center justify-center gap-1.5 rounded-md text-saphir-blue hover:bg-saphir-blue/10 sm:right-6 lg:right-8"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            <span
              className={`block h-0.5 w-7 bg-saphir-blue transition-all duration-300 ${
                menuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-7 bg-saphir-blue transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-7 bg-saphir-blue transition-all duration-300 ${
                menuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </header>

      {/* Overlay fond sombre */}
      <div
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 ${
          menuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Menu glissant depuis la droite */}
      <div
        id="mobile-menu"
        className={`fixed right-0 top-0 z-50 flex h-full w-80 flex-col bg-saphir-blue shadow-2xl transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!menuOpen}
      >
        {/* Header du menu */}
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
          <span className="text-xl font-semibold text-white">Menu</span>
          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            className="flex h-10 w-10 items-center justify-center rounded-md text-white hover:bg-white/10"
            aria-label="Fermer le menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Liens de navigation */}
        <nav className="flex flex-1 flex-col gap-2 px-4 py-8" aria-label="Menu de navigation">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 rounded-lg px-4 py-4 text-lg font-medium text-white transition-colors hover:bg-white/10"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Footer du menu */}
        <div className="border-t border-white/10 px-6 py-5">
          <p className="text-sm text-white/70">{site.name}</p>
          <p className="text-sm text-white/70">{site.tagline}</p>
        </div>
      </div>
    </>
  );
}
