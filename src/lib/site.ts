/**
 * Canonical origin. Wrong values here silently break OG tags, canonicals and
 * the sitemap, so it is derived rather than hardcoded:
 *   1. NEXT_PUBLIC_SITE_URL, once a real domain is pointed at the app
 *   2. the Vercel deployment URL, so previews are self-consistent
 *   3. localhost for `next dev`
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000")
).replace(/\/$/, "");
