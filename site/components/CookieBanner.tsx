"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();
  const isEnglish = pathname.startsWith("/en");

  useEffect(() => {
    // Vérifier si l'utilisateur a déjà accepté les cookies
    const cookiesAccepted = localStorage.getItem("cookiesAccepted");
    if (!cookiesAccepted) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-saphir-blue/10 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <p className="text-center text-sm text-saphir-dark/80 sm:text-left">
            {isEnglish ? (
              <>
                We use cookies to speed up the display of our pages. These cookies will disappear on their own after one month.
                We also count the number of visitors, anonymously. If you continue your visit, we assume you accept this count.
              </>
            ) : (
              <>
                Nous utilisons des cookies pour accélérer l&apos;affichage de nos pages. Ces cookies disparaîtront d&apos;eux-mêmes après un mois.
                Nous relevons également le nombre de visiteurs, anonymement. Si vous poursuivez votre visite, nous assumons que vous acceptez ce décompte.
              </>
            )}
          </p>
          <button
            onClick={acceptCookies}
            className="shrink-0 rounded border border-saphir-blue px-4 py-2 text-sm font-medium text-saphir-blue transition hover:bg-saphir-blue hover:text-white"
          >
            {isEnglish ? "Accept" : "Accepter"}
          </button>
        </div>
      </div>
    </div>
  );
}
