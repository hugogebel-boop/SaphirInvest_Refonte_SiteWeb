import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // trailingSlash pour des URLs propres
  trailingSlash: true,
  // Évite que Next.js prenne un lockfile parent comme racine
  outputFileTracingRoot: path.resolve(process.cwd()),
  // Images optimisées par Vercel automatiquement
  images: {
    remotePatterns: [],
  },
};

export default nextConfig;
