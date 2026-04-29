/**
 * sypher-tool-hello — next.config.ts
 *
 * basePath: '/hello' makes Next.js serve EVERYTHING under /hello — pages,
 * static assets (/_next/static/...), API routes. This is critical: without
 * basePath, asset URLs in the HTML start with /, the browser fetches them
 * from sypher.in/_next/... (the shell), which 404s — CSS/JS never loads.
 *
 * With basePath the shell's /hello/:path+ rewrite catches asset requests
 * too, and the tool serves them. Pages live at app/page.tsx (basePath
 * adds /hello automatically) — DO NOT nest under app/hello/.
 */

import type { NextConfig } from "next";

const config: NextConfig = {
  basePath: "/hello",
  reactStrictMode: true,

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
    ];
  },
};

export default config;
