import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/app",
  assetPrefix: process.env.NODE_ENV === 'production' 
    ? "https://prashantdasari.webflow.io/app"  // Production
    : "/app",  // Staging/Development (uses current domain)
};

export default nextConfig;
// added by create cloudflare to enable calling `getCloudflareContext()` in `next dev`
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
initOpenNextCloudflareForDev();
