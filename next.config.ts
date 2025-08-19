import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/app",
  assetPrefix: "/app",  // Staging/Development (uses current domain)
  async rewrites() {
    return [
      {
        source: "/:slug*",
        destination: "/app/:slug*",
      },
    ];
  },
};

export default nextConfig;
// added by create cloudflare to enable calling `getCloudflareContext()` in `next dev`
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
initOpenNextCloudflareForDev();
