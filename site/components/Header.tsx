"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef, useCallback } from "react";
import { navLinks, navLinksEN, site } from "@/lib/site";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const taglineRef = useRef<HTMLDivElement>(null);
  
  // L'effet grand header uniquement sur la page d'accueil (FR ou EN)
  const isHomePage = pathname === "/" || pathname === "/en" || pathname === "/en/";
  const isEnglish = pathname.startsWith("/en");

  // Animation 100% liée au scroll avec transform (GPU accelerated, pas de vibrations)
  const updateAnimation = useCallback(() => {
    if (!taglineRef.current) return;
    
    // Sur les autres pages, toujours en mode compact
    if (!isHomePage) {
      taglineRef.current.style.transform = "scaleY(0)";
      taglineRef.current.style.opacity = "0";
      taglineRef.current.style.maxHeight = "0px";
      taglineRef.current.style.marginTop = "0px";
      return;
    }

    const scrollY = Math.max(0, window.scrollY);
    // Animation sur les premiers 200px de scroll
    const scrollThreshold = 300;
    // Progress de 0 (en haut) à 1 (scrollé)
    const progress = Math.min(1, scrollY / scrollThreshold);
    
    // Tagline: transform + opacity (GPU accelerated, pas de reflow)
    const taglineScale = 1 - progress;
    const taglineOpacity = 1 - progress;
    taglineRef.current.style.transform = `scaleY(${taglineScale})`;
    taglineRef.current.style.opacity = `${taglineOpacity}`;
    taglineRef.current.style.maxHeight = `${(1 - progress) * 52}px`;
    taglineRef.current.style.marginTop = `${(1 - progress) * 16}px`;
  }, [isHomePage]);

  useEffect(() => {
    updateAnimation();

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateAnimation();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [updateAnimation]);

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
        className="sticky top-0 z-40 border-b border-saphir-blue/10 bg-[#fafcff]/95 backdrop-blur supports-[backdrop-filter]:bg-[#fafcff]/85"
      >
        <div 
          className="relative mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:flex-col sm:justify-center sm:px-6 lg:px-8"
        >
          {/* Logo + Tagline */}
          <Link href={isEnglish ? "/en/" : "/"} className="flex flex-col items-start sm:items-center group" aria-label={`${site.name} - ${isEnglish ? "Home" : "Accueil"}`}>
            <div className="h-8 sm:h-9 md:h-10 lg:h-12">
              <img
                src="/logo/logo Saphir Invest.webp"
                alt={site.name}
                className="h-full w-auto object-contain object-left sm:object-center"
                width={400}
                height={68}
                decoding="async"
                fetchPriority="high"
              />
            </div>
            
            {/* Tagline - animation liée au scroll */}
            <div 
              ref={taglineRef}
              className="origin-top will-change-[transform,opacity] overflow-hidden"
              style={{ maxHeight: "52px", opacity: 1, marginTop: "16px", transform: "scaleY(1)" }}
            >
              <span className="block text-left sm:text-center font-light uppercase tracking-[0.2em] text-saphir-blue sm:tracking-[0.25em] text-lg sm:text-xl md:text-2xl lg:text-3xl whitespace-nowrap">
                {isEnglish ? "Asset management" : "Gestion de patrimoine"}
              </span>
            </div>
          </Link>

          {/* Bouton hamburger - positionné à droite */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 lg:h-14 lg:w-14 flex-col items-center justify-center gap-1 lg:gap-1.5 rounded-md text-saphir-blue hover:bg-saphir-blue/10 sm:absolute sm:right-4 sm:top-1/2 sm:-translate-y-1/2 lg:right-8"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? (isEnglish ? "Close menu" : "Fermer le menu") : (isEnglish ? "Open menu" : "Ouvrir le menu")}
          >
            <span
              className={`block h-0.5 w-5 lg:h-[3px] lg:w-7 bg-saphir-blue transition-all duration-300 ${
                menuOpen ? "translate-y-1.5 rotate-45 lg:translate-y-[9px]" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 lg:h-[3px] lg:w-7 bg-saphir-blue transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 lg:h-[3px] lg:w-7 bg-saphir-blue transition-all duration-300 ${
                menuOpen ? "-translate-y-1.5 -rotate-45 lg:-translate-y-[9px]" : ""
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
        className={`fixed right-0 top-0 z-50 flex h-full w-[85vw] max-w-80 flex-col bg-saphir-blue shadow-2xl transition-transform duration-300 ease-in-out ${
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
            aria-label={isEnglish ? "Close menu" : "Fermer le menu"}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Liens de navigation */}
        <nav className="flex flex-1 flex-col gap-2 px-4 py-8" aria-label="Menu de navigation">
          {(isEnglish ? navLinksEN : navLinks).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 rounded-lg px-4 py-4 text-lg font-medium text-white transition-colors hover:bg-white/10"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
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