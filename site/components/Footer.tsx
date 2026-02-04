import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  const { footer } = site;
  return (
    <footer className="mt-auto border-t border-white/10 bg-saphir-blue/90 text-white">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-white/90">
            {footer.art}{" "}
            <a
              href={footer.artUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white"
            >
              Louis Magre
            </a>
          </p>
          <p className="text-sm text-white/90">
            {footer.copyright}
            <br />
            Impressum{" "}
            <Link href={footer.impressumFr} className="underline hover:text-white">
              (FR)
            </Link>{" "}
            |{" "}
            <Link href={footer.impressumEn} className="underline hover:text-white">
              (EN)
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
