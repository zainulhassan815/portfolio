import type { Metadata, Viewport } from "next";
import { Archivo } from "next/font/google";

/* Order matters: tokens, then base, then per-section. Mirrors the <link>
   order the mockup shipped with. */
import "@/styles/tokens.css";
import "@/styles/base.css";
import "@/styles/chrome.css";
import "@/styles/cursor.css";
import "@/styles/header.css";
import "@/styles/hero.css";
import "@/styles/proof-card.css";
import "@/styles/sections.css";
import "@/styles/services.css";
import "@/styles/work.css";
import "@/styles/testimonials.css";
import "@/styles/writing.css";
import "@/styles/contact.css";

/* Self-hosted, so there is no Google Fonts request and no FOUT. --display in
   tokens.css points at this variable. */
const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-archivo",
  display: "swap",
});

const SITE = "https://dreamerslab.dev";
const DESCRIPTION =
  "Zain Ul Hassan, full-stack developer. Web and SaaS products, AI features and the payments and data behind them, for founders who need one engineer to own the whole thing.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "Zain Ul Hassan · Full-stack developer",
    template: "%s · Zain Ul Hassan",
  },
  description: DESCRIPTION,
  openGraph: {
    title: "Zain Ul Hassan · Full-stack developer",
    description: DESCRIPTION,
    url: SITE,
    siteName: "Dreamers Lab",
    locale: "en_GB",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Zain Ul Hassan · Full-stack developer", description: DESCRIPTION },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0c" },
  ],
};

/* Runs before first paint. Without it a stored dark preference paints light
   and then flips, which the design review flagged on the mockup. */
const THEME_BOOT = `try{var t=localStorage.getItem("zh-theme-v2");if(t==="dark"||t==="light")document.documentElement.setAttribute("data-theme",t)}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={archivo.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_BOOT }} />
        {/* Without JS every [data-reveal] stays at opacity 0 and the page
            below the hero renders blank. */}
        <noscript>
          <style>{`[data-reveal],.rise{opacity:1!important;transform:none!important;animation:none!important}`}</style>
        </noscript>
      </head>
      <body>{children}</body>
    </html>
  );
}
