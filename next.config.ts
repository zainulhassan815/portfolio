import type { NextConfig } from "next";

/**
 * More than one hostname resolves to this app. Serving the same page on both
 * splits search ranking and analytics between them, so everything that is not
 * the canonical host is permanently redirected to it.
 *
 * The canonical host is derived from NEXT_PUBLIC_SITE_URL, which is also what
 * the <link rel="canonical"> and sitemap use, so the three can never disagree.
 * To switch which hostname is primary, change that one env var and move the
 * other into ALT_HOSTS.
 */
const CANONICAL_HOST = new URL(
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://dreamerslab.dev"
).host;

const ALT_HOSTS = (process.env.ALT_HOSTS ?? "zainulhassan.dreamerslab.dev")
  .split(",")
  .map((h) => h.trim())
  .filter((h) => h && h !== CANONICAL_HOST);

const nextConfig: NextConfig = {
  async redirects() {
    return ALT_HOSTS.map((host) => ({
      source: "/:path*",
      has: [{ type: "host" as const, value: host }],
      destination: `https://${CANONICAL_HOST}/:path*`,
      permanent: true,
    }));
  },
};

export default nextConfig;
