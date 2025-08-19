import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Temporarily removed basePath and assetPrefix to test dynamic routing
  // basePath: "/app",
  // assetPrefix: "/app",
};

export default nextConfig;
// added by create cloudflare to enable calling `getCloudflareContext()` in `next dev`
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
initOpenNextCloudflareForDev();
