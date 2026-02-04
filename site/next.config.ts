import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  // Évite que Next.js prenne un lockfile parent (ex. C:\Users\hugog\) comme racine
  outputFileTracingRoot: path.resolve(process.cwd()),
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
