# Living System, working mockup

Split out of `../archive/mockup-d-living-system-v2.html`. Same page, same
behaviour, no build step. Open `index.html` straight off disk.

## Where to change what

| Want to change | Edit |
|---|---|
| Accent, ink, greys, radii, easing, dark theme | `css/tokens.css` |
| The lime pop, the hard button edge, the display font | `css/tokens.css` (`--pop`, `--edge`, `--display`) |
| Resets, type scale, `.serif` / `.mono`, `.wrap`, skip link | `css/base.css` |
| Theme toggle, scroll progress, back-to-top | `css/chrome.css`, `js/theme.js`, `js/chrome.js` |
| Floating cursor, its ring, its hover word | `css/cursor.css`, `js/cursor.js` |
| Header, nav, mobile menu | `css/header.css`, `js/chrome.js` |
| Hero layout, headline, retro buttons, load-in | `css/hero.css` |
| Where the hero stacks, where the card drops below | `css/hero.css` (1040px), `css/proof-card.css` |
| Upwork proof card | `css/proof-card.css` |
| Section scaffolding, numbered labels, tint bands, reveal, `tbd` markers | `css/sections.css`, `js/reveal.js` |
| Services / featured teaser / project cards / writing | `css/services.css`, `css/work.css`, `css/writing.css` |
| A case study detail page | `work/<slug>.html` + `css/case.css` |
| Testimonial scoreboard, hero quote, scrolling wall | `css/testimonials.css` (CSS only, no JS) |
| Contact form and footer | `css/contact.css`, `js/contact-form.js` |
| Any markup or copy | `index.html` |

## Rules that carry over from the brief

- No em dashes in visible copy. No emoji as decoration.
- Real content only. Anything unconfirmed gets a `tbd` / `tbd-stat` class so it
  reads visibly as a placeholder, never as fact.
- Light theme is the default; dark is a bonus, not a requirement.
- Everything respects `prefers-reduced-motion`.

## The bold pass

- **Type** is Archivo variable, heavy and slightly narrowed. Headlines are
  uppercase at `wght 900`. Everything routes through `--display`, so one token
  swaps the whole page to another face.
- **The accent is green and it is fixed.** The four-swatch palette switcher is
  gone. `--accent-rgb` is defined twice: `4,120,87` (#047857) in light and
  `52,211,153` (#34d399) in dark. Two values, not one, because the accent
  carries text: the old single moss #059669 measured 3.77:1 on white, an AA
  fail. These measure 5.48:1 light and 10.29:1 dark. **If you change the green,
  check both, and check white-on-accent too, since the skip link inverts it.**
- **`--pop`** is lime, and it is a *fill*, never a text colour on white. Dark
  text sits on it. `--accent` stays the readable ink colour for links and small
  type. Do not mix the two up, lime text on white is unreadable.
- **Buttons** are `.btn-primary` (filled) and `.btn-ghost` (unfilled). Flat
  colour, hard `--edge` border, hard offset shadow, and a press that moves the
  button into its own shadow. No gradients, no blur.
- **Testimonials** are one quote at poster scale plus a two-row wall that
  loops. Pure CSS, hover to pause. Every quote is a **verbatim excerpt**, never
  fragments from different sentences stitched into one, and a rating chip only
  appears on contract reviews. Profile testimonials carry no star rating and
  inventing one would be a fabrication. See `reviews/reviews.md` in the proposal
  repo before editing any of them.
- **Semantic tints** are six pastels in `css/tokens.css`, applied by putting a
  modifier class on an element (`t-mint`, `t-lilac`, `t-sky`, `t-peach`,
  `t-butter`, `t-blush`). The component then reads `--tint` / `--tint-ink`, so
  the colour decision stays out of the component. Each one means something:

  | Class | Means | Used on |
  |---|---|---|
  | `t-mint` | payments, money moving | Stripe/booking work, 5.0 review chips |
  | `t-lilac` | AI and LLM | AI cards, the AI service |
  | `t-sky` | data, infra, backend | EdTech/Supabase cards, verified-testimonial chips |
  | `t-peach` | security, audits, risk | audit and CRM work |
  | `t-butter` | unconfirmed | every `.tbd` placeholder on the page |
  | `t-blush` | design, UX, product | mobile and health work |

  They invert on dark: deep desaturated grounds with light ink, so nothing
  glows. Keep them small. Chips, underlines and marks, never a whole section
  background, that is what `--bg-raise` is for.

  **One deliberate exception:** the three service cards use `t-mint`,
  `t-lilac` and `t-sky` as a *decorative* sequence, not semantically. Same
  tokens, different job. The semantic map above still governs the project-card
  chips and the `.tbd` placeholders, which is where a reader learns what a
  colour means. A card filling itself with a tint sets `color: var(--tint-ink)`
  and lets its children inherit, so it stays legible in both themes.
- **The cursor** hides the native one on fine pointers only. Coarse pointers and
  `prefers-reduced-motion` get the system cursor back, and text inputs always
  keep a real caret. Add `data-cursor="Word"` to any element to print a word
  inside the ring on hover.

One network dependency now: Archivo from Google Fonts. It degrades to the system
sans in `--display`, so the page is still readable with no network.

## Responsive

Breakpoints are per-component rather than global, so check the component file
first. The ones that carry real layout changes:

| Width | What happens |
|---|---|
| 1150px | proof card narrows |
| 1040px | hero stacks, card drops under the copy, scroll hint hidden |
| 840px | services intro, contact and writing go single column |
| 800px | case-study columns and project grid go single column |
| 760px | nav collapses to the menu button |
| 700px | section padding down, stats become 2-up grids, toolbar moves |
| 600px | service price chip drops below its heading, card loses its pin |
| 560px | contact form fields go single column |

**Testing mobile headlessly:** Chrome clamps `--window-size` to a 500px minimum,
so a `--window-size=390` screenshot is really a 500px layout cropped to 390 and
will show phantom clipping. Load the page in a 390px-wide `<iframe>` inside a
500px window instead, which gives the iframe a genuine 390px viewport.

## Pages

`index.html` is the landing page. Case studies live in `work/`, one file each,
and the landing page carries only the teaser: meta, title, one-paragraph hook,
one image, three numbers, and a link. Everything else belongs on the detail page.

A detail page reuses the shared CSS with `../` paths and adds `css/case.css` for
what only it needs. `css/work.css` owns everything both pages share, so
`case-meta`, `case-lede`, `case-cols`, `big-stats` and `shot-slot` are defined
once. To add another, copy `work/lynxsta.html` and change the content.

Note that `case.css` re-shows `.nav-contact` under 760px: `header.css` hides it
there because the landing page swaps in a hamburger, and a detail page has none.

## Load order

`index.html` lists every file explicitly. Tokens first, then base, then sections.
Scripts are classic `<script src>`, not modules, so `file://` still works.
`js/theme.js` must stay before `js/network.js`, the canvas reads the resolved
accent it sets. `css/cursor.css` loads right after `css/chrome.css`.
