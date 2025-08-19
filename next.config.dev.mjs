import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

// Initialize OpenNext Cloudflare for development
initOpenNextCloudflareForDev();

// Export the same config as the main file
export default {
  basePath: "/app",
  assetPrefix: "https://prashantdasari.webflow.io/app",
};
