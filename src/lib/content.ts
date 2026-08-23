/**
 * Every claim on the landing page, in one place.
 *
 * Sources of truth, do not edit these from memory:
 *  - Upwork figures: the Upwork MCP (`get_profile`), not hand-maintained.
 *  - Review quotes: ~/Documents/upwork/reviews/reviews.md. Verbatim excerpts
 *    only, never fragments from different sentences stitched together, and a
 *    star rating only where a contract review actually carries one.
 *  - Naming a client requires `public: true` on their entry in that file.
 */

export const UPWORK_PROFILE = "https://upwork.com/freelancers/zainu205";
export const GITHUB = "https://github.com/zainulhassan815";
export const LINKEDIN = "https://www.linkedin.com/in/zainulhassan815";
export const EMAIL = "dreamerslabdev@gmail.com";

/** Verified via the Upwork API. `hours` is the one figure the API does not expose. */
export const upwork = {
  earnings: "$22K+",
  jobs: "16",
  hours: "1000+",
  rating: "5.0",
  reviews: 7,
  disputes: 0,
};

export const services = [
  {
    n: "01",
    tint: "t-mint",
    title: "Web & SaaS apps",
    blurb: "Products built to hand over, not to keep me on retainer.",
    stack: ["Next.js", "Supabase", "Postgres", "Stripe", "TypeScript"],
  },
  {
    n: "02",
    tint: "t-lilac",
    title: "AI in live products",
    blurb: "Retrieval, assistants and extraction. FastAPI behind a product that already works.",
    stack: ["FastAPI", "Python", "Claude", "RAG", "pgvector"],
  },
  {
    n: "03",
    tint: "t-sky",
    title: "Mobile apps",
    blurb: "Store-ready builds, architected to extend. Not demos.",
    stack: ["Kotlin", "Compose", "React Native", "Flutter", "Material 3"],
  },
];

/** Under contract, so no links and no client names. */
export const clientWork = [
  {
    year: "2026",
    title: "LLM app taken to market",
    desc: "Agent workflows moved from prototype into a product that shipped.",
    tags: ["LLM agents", "Svelte", "Supabase", "TypeScript", "Python"],
  },
  {
    year: "2026",
    title: "Real-time data pipeline, verified and documented",
    desc: "Establishing what the pipeline actually does, then writing it down.",
    tags: ["Next.js", "Prisma", "Supabase", "Realtime"],
  },
  {
    year: "2026",
    title: "QR peer-matching MVP with real-time sync",
    desc: "Two devices held in step, under GDPR and safeguarding rules.",
    tags: ["React", "Supabase Realtime", "RLS", "Postgres"],
  },
  {
    year: "2025-26",
    title: "Telemedicine platform MVP",
    desc: "Auth, doctor directory, booking flow and admin panel, end to end.",
    tags: ["Next.js", "Supabase", "Auth", "Booking"],
  },
  {
    year: "2026",
    title: "Pre-launch RLS and edge-function audit",
    desc: "Row-level security, IDOR and webhook verification before the flag came off.",
    tags: ["Supabase", "RLS", "Edge Functions", "Stripe webhooks"],
  },
  {
    year: "2026",
    title: "Workshop booking and payments on GoHighLevel",
    desc: "Custom objects and the LeadConnector API, no hard-coded dates or links.",
    tags: ["GoHighLevel", "Stripe", "Bun", "Webhooks"],
  },
];

/** Every URL here was verified to return 200. */
export const publicWork = [
  {
    kind: "AI",
    title: "Hireflow",
    href: `${GITHUB}/hireflow`,
    cursor: "Code",
    desc: "Hybrid search and reranking, with every answer cited back to its source.",
    tags: ["RAG", "Hybrid search", "FastAPI", "ChromaDB", "Python"],
    dest: "GitHub",
  },
  {
    kind: "Product",
    title: "Teams Transcript Copier",
    href: "https://chromewebstore.google.com/detail/transcript-copier-for-mic/aapgpbmldlmbkgcffjopahhcjeanpmgb",
    cursor: "Install",
    desc: "Turns Microsoft Teams chat into clean, AI-ready transcripts.",
    tags: ["Chrome MV3", "Vanilla JS", "No dependencies"],
    dest: "Web Store",
  },
  {
    kind: "Automation",
    title: "MLS lead bot",
    href: `${GITHUB}/mls-bot`,
    cursor: "Code",
    desc: "Authenticated scraping of a listings portal, delivered to a CRM by webhook.",
    tags: ["Selenium", "Docker", "Podio", "Python"],
    dest: "GitHub",
  },
  {
    kind: "Mobile",
    title: "NewsLayer",
    href: `${GITHUB}/newslayer`,
    cursor: "Code",
    desc: "Modular news reader with offline persistence and functional error handling.",
    tags: ["Kotlin", "Compose", "Hilt", "Retrofit"],
    dest: "GitHub",
  },
];

/** Dates and URLs come from the Medium RSS feed, not from memory. */
export const writing = [
  {
    date: "Aug 2025",
    title: "How to design better UI/UX as an indie developer",
    href: "https://zainulhassan815.medium.com/how-to-design-better-ui-ux-as-an-indie-developer-4c150a06bec3",
    desc: "Planning and shipping interfaces that work, without a design team.",
    tags: ["UI/UX", "Figma", "Product"],
  },
  {
    date: "Jul 2025",
    title: "Minimal Docker setup for Flask web scrapers",
    href: "https://zainulhassan815.medium.com/minimal-docker-setup-for-flask-web-scrapers-using-headless-chrome-19614fe494fe",
    desc: "Running headless Chrome in a container without it falling over in production.",
    tags: ["Python", "Docker", "Headless Chrome"],
  },
  {
    date: "Apr 2025",
    title: "Modelling state in Kotlin",
    href: "https://zainulhassan815.medium.com/modelling-state-in-kotlin-ef131693e044",
    desc: "Making every state an app can be in something the compiler knows about.",
    tags: ["Kotlin", "Compose", "Architecture"],
  },
  {
    date: "Mar 2025",
    title: "Formz-Kotlin: multiplatform form validation",
    href: "https://zainulhassan815.medium.com/formz-kotlin-a-multiplatform-form-validation-library-3af42d4f58e9",
    desc: "Porting Formz from Dart, and publishing it as a library.",
    tags: ["Kotlin Multiplatform", "Open source"],
  },
];

/**
 * `rating: null` means a profile testimonial, which carries no star rating on
 * Upwork. Never attach one — see the note at the top of reviews.md.
 */
export const reviews = [
  {
    quote: "a true systems thinker… someone who sees how the whole thing fits together before he writes a line",
    who: "Verified Upwork client",
    what: "LLM app, Supabase / Svelte / TypeScript",
    rating: "5",
  },
  {
    quote: "The authentication system, doctor directory, booking flow, and admin panel were all delivered on time and exceeded my expectations.",
    who: "Oussama G., Tunisia",
    what: "Telemedicine platform MVP, Next.js + Supabase",
    rating: "5",
  },
  {
    quote: "Great experience. Very intuitive and willing to cover all bases for MVP. Will definitely recommend.",
    who: "BuddySpark Ltd, UK",
    what: "EdTech MVP, shipped in 6 days",
    rating: "5",
  },
  {
    quote: "He did an audit of our website in thorough detail and came up with strong suggestions on how to overcome them.",
    who: "Verified Upwork client",
    what: "Code and platform audit, EdTech",
    rating: "5",
  },
  {
    quote: "He not only delivered exceptional design work, but also provided thoughtful architectural guidance which helped shape the overall product direction.",
    who: "Ekjot S., Founder & CEO at StepToStem",
    what: "Mobile app UI/UX and architecture consultation",
    rating: null,
  },
  {
    quote: "Talented, prompt and result oriented consultant. I highly recommend Zain for his technical skills.",
    who: "Verified Upwork client",
    what: "GoHighLevel workshop booking system",
    rating: "5",
  },
  {
    quote: "delivered a production-ready MVP that brings together lead management, scheduling, payments, communication, and automated follow-ups",
    who: "Abu Bakar N., CRM & Automations Expert",
    what: "Business automation platform, Next.js + FastAPI + Supabase",
    rating: null,
  },
  {
    quote: "Zain completed the technical test task successfully and on time. His communication was clear and professional.",
    who: "Oussama G., Tunisia",
    what: "Paid test task, which became the MVP contract",
    rating: "5",
  },
];

export const heroQuote = {
  before: "I’ve hired a bunch of engineers off of Upwork over the years, and ",
  mark: "none of them are in his league.",
  attr: "Verified Upwork client",
  detail: "LLM app, Supabase / Svelte / TypeScript · Jan to Jul 2026 · rated 5.0",
};
