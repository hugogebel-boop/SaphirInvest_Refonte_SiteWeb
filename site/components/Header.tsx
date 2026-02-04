"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { navLinks, site } from "@/lib/site";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  
  // L'effet grand header uniquement sur la page d'accueil (FR ou EN)
  const isHomePage = pathname === "/" || pathname === "/en" || pathname === "/en/";
  const isEnglish = pathname.startsWith("/en");

  // Détecter le scroll avec hysteresis pour éviter les oscillations (uniquement sur la home)
  useEffect(() => {
    // Si on n'est pas sur la page d'accueil, toujours en mode compact
    if (!isHomePage) {
      setIsScrolled(true);
      return;
    }

    const SCROLL_DOWN_THRESHOLD = 100; // Passer en mode compact après 100px
    const SCROLL_UP_THRESHOLD = 20;    // Revenir en mode grand seulement si < 20px
    
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      setIsScrolled((prev) => {
        // Si on est en mode compact, revenir en grand seulement si on remonte très haut
        if (prev) {
          return scrollY > SCROLL_UP_THRESHOLD;
        }
        // Si on est en mode grand, passer en compact après le seuil
        return scrollY > SCROLL_DOWN_THRESHOLD;
      });
    };
    
    // Vérifier la position initiale
    handleScroll();
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

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
            isScrolled ? "py-2" : "py-4 md:py-6"
          }`}
        >
          {/* Logo + Tagline centré */}
          <Link href="/" className="flex flex-col items-center" aria-label={`${site.name} - Accueil`}>
            <img
              src="/logo/logo Saphir Invest.png"
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
              {isEnglish ? "Asset management" : "Gestion de patrimoine"}
            </span>
          </Link>

          {/* Bouton hamburger - positionné à droite */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="absolute right-0 top-1/2 z-50 flex h-12 w-12 -translate-y-1/2 flex-col items-center justify-center gap-1.5 rounded-md text-saphir-blue hover:bg-saphir-blue/10 sm:right-1 lg:right-2"
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
          {navLinks.map((item, index) => {
            const labelsEN = ["Welcome", "Approach and Values", "Team", "Contact"];
            return (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-3 rounded-lg px-4 py-4 text-lg font-medium text-white transition-colors hover:bg-white/10"
                onClick={() => setMenuOpen(false)}
              >
                {isEnglish ? labelsEN[index] : item.label}
              </Link>
            );
          })}
          {/* Lien de changement de langue */}
          <Link
            href={isEnglish ? "/" : "/en/"}
            className="flex items-center gap-3 rounded-lg px-4 py-4 text-lg font-medium text-white/70 transition-colors hover:bg-white/10 hover:text-white"
            onClick={() => setMenuOpen(false)}
          >
            {isEnglish ? "Français" : "English"}
          </Link>
        </nav>

        {/* Footer du menu */}
        <div className="border-t border-white/10 px-6 py-5">
          <p className="text-sm text-white/70">{site.name}</p>
          <p className="text-sm text-white/70">{isEnglish ? "Asset management" : site.tagline}</p>
        </div>
      </div>
    </>
  );
}
