/**
 * sypher-tool-hello — next.config.ts
 *
 * Tool repo. All routes live under /hello/* to match the shell's rewrite.
 * Bare URL (sypher-tool-hello.vercel.app/) redirects to /hello via app/page.tsx.
 */

import type { NextConfig } from "next";

const config: NextConfig = {
  reactStrictMode: true,

  async headers() {
    return [
      {
        // Demo tool — keep it out of search results.
        source: "/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
    ];
  },
};

export default config;
