import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Export statique pour hébergement mutualisé (Infomaniak, etc.)
  output: "export",
  // trailingSlash pour des URLs propres
  trailingSlash: true,
  // Évite que Next.js prenne un lockfile parent comme racine
  outputFileTracingRoot: path.resolve(process.cwd()),
  // Images non optimisées (requis pour export statique)
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
