---
target: living-system landing page mockup
total_score: 21
max_score: 40
na_heuristics: 
p0_count: 1
p1_count: 5
timestamp: 2026-08-20T18-01-05Z
slug: design-mockups-living-system-index-html
---
Method: dual-agent (A: design review · B: detector + measured browser evidence), isolated until synthesis.

## Tooling finding
Impeccable detector returns a FALSE CLEAN BILL as installed: exits 0 with [] plus a DEGRADED banner because htmlparser2, css-select, css-tree, domutils are unresolvable from the plugin path, and detect-html.mjs uses bare dynamic import() so NODE_PATH cannot fix it. With parsers installed: exit 2, 66 findings, all warning severity.

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | aria-live status present; submit has no pending state |
| 2 | Match System / Real World | 2 | Engineering jargon at the founder's decision moment |
| 3 | User Control and Freedom | 2 | Marquee pauses on :hover only (no touch); cursor:none document-wide |
| 4 | Consistency and Standards | 2 | Nav order contradicts page order; 4 sections have no heading element |
| 5 | Error Prevention | 1 | JS off: form has no action/method, silently discards the message |
| 6 | Recognition Rather Than Recall | 2 | Budget select requires recalling prices six screens up |
| 7 | Flexibility and Efficiency | 2 | No call-booking path; mobile loses header CTA |
| 8 | Aesthetic and Minimalist Design | 3 | Dead column in services; empty hero right half 760-1040px |
| 9 | Error Recovery | 2 | Errors unwired to AT; focus never moves to bad field |
| 10 | Help and Documentation | 2 | One clause of process disclosure on the page |
| **Total** | | **21/40** | **Acceptable** |

## Design Specificity Verdict
Authored at the artifact level, category-interchangeable at the composition level. ~70% could carry an unrelated agency. Authored: the pinned Upwork proof card (keeps Upwork's own colours/fonts, refuses --edge in dark mode, pivots from the pinhead), the 236/5/1 stat triad, the CSS-enforced rule that profile testimonials never get invented stars. Interchangeable: the neo-brutalist shell, the scrolling testimonial wall, the lagging-ring cursor, the 3-service list, the 6-card grid, the split contact block.

Deterministic scan: 66 findings. 17 tight-leading, 15 tiny-text, 13 undersized-ui-text, 8 low-contrast, 3 cramped-padding, 2 each dark-glow/layout-transition/all-caps-body, 1 each marquee/pulsing-dot/side-tab/clipped-overflow-container. All line:0.
False positives: clipped-overflow-container (no transformed ancestor; all 7 fixed children measured unclipped), side-tab (placeholder underline on inline text, not a card border), dark-glow (one instance double-counted; other 0 0 0 shadows are the retro press collapse).

Verified sound: all six tint pairs pass 4.5:1 in both themes; .pop-mark 13.86:1; zero horizontal overflow at 1440/768/true-390; no skipped heading levels, one h1; Google Fonts fallback engages (~2% shrink, no breakage).

## Priority Issues

1. [P1] Contact section has no reassurance and no proof. Left column is a heading, two sentences and a personal Gmail with ~400px of white below. Success message fails AA at 3.51:1. Fix: reassurance stack (job-success strip, 3-step what-happens-next, NDA/IP line, overlap hours), add call booking, fix contrast, replace personal Gmail.
2. [P1] Dead affordances. Six .work-card articles hover-lift, cast the retro shadow and swell the cursor ring but are not links; footer Upwork/GitHub/LinkedIn/Email and all 3 writing links are href="#". Destroys credibility of adjacent real proof.
3. [P1] The poster quote (largest type after h1) is anonymous; 4 of 8 wall cards likewise. Link it to the Upwork review or promote a named quote.
4. [P1] Testimonial marquee unreadable and unpausable on touch (74s/92s, :hover-only pause). At 390px ~1 card visible, sliding mid-sentence. The prefers-reduced-motion block already implements the correct fallback; promote it to the touch default.
5. [P1, one P0 inside] Accessibility and robustness cluster: [P0] JS off leaves 15/15 reveal blocks at opacity 0 including the contact form, which silently discards submissions (no action/method). All 5 form controls have outline:none. Errors have no id/role/aria-live/aria-describedby/aria-invalid, no focus move. 22 of 30 touch targets under 44x44 at 390px including the 34x34 menu toggle. 5 invisible elements in the tab order. 20 animated declarations ignore prefers-reduced-motion including a JS smooth scroll. --ink-faint fails AA everywhere (4.48 light / 3.93 dark); default moss accent fails as text (3.77). Inputs at 15.68px trigger iOS zoom.
6. [P2] Services leads with price before any evidence. Move the case study above services so the scroll reads claim -> proof -> offer.

## Persona Red Flags
- Non-technical founder: quoted before she knows the deliverable; big-stats read as "he changed my spec" and "he shipped a payment bypass"; ZERO product imagery anywhere; budget preselected below two of three service floors.
- Technical lead: case study earns his attention, then GitHub is "#", all writing links are "#", no repo/diagram/live URL; project-type select has no option matching audit or takeover work.
- Keyboard/AT user: 4 invisible menu links in tab order; cannot navigate by heading to Featured work, Recent projects, Testimonials or Writing (block-label divs, not headings); only 1 of 7 sections has an accessible name; cursor:none overrides OS pointer settings.

## Minor Observations
- Tint semantics violated on first use: mobile=t-blush (documented design/UX), web=t-sky (documented data/infra); t-butter (documented "unconfirmed placeholder") colours the confirmed 5.0 rating.
- h3.case-title at 57.6px renders larger than both h2s at 56px.
- section.block-tint 100vw shifts ~8px off-centre with a classic scrollbar.
- #cur-ring.hot is an opaque 76px lime disc occluding ~40% of the primary CTA at click time.
- No noscript. Verified-check SVG has no text equivalent. Stars are bare characters, 2.04:1 on the proof card.
- Scoreboard says 7 reviews; wall shows 8 cards.
- .field input uses a truncated -apple-system stack; form renders in a different face on Windows/Android.

## Questions to Consider
1. If the pinned card is the most persuasive object, why does it appear once? What if the whole language were pinned evidence?
2. Why does a page selling interfaces contain zero interfaces?
3. Who is this for? Case study written for a CTO, reassurance gaps belong to a founder. Both at half strength.
4. Would one more real case study beat all six project cards?
