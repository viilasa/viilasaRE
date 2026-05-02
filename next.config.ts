import type { NextConfig } from "next";

/** Default output (no `output: "export"`) — required for Vercel’s Next.js runtime, middleware, OG routes. */
const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
