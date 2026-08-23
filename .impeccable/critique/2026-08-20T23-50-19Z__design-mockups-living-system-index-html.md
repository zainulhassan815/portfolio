---
target: living-system landing page, re-critique after revamp
total_score: 28
max_score: 40
na_heuristics: 
p0_count: 1
p1_count: 3
timestamp: 2026-08-20T23-50-19Z
slug: design-mockups-living-system-index-html
---
Method: dual-agent (A design review · B detector + measured browser evidence), isolated until synthesis.
Re-critique of the same target after a full section-by-section revamp. Previous run: 21/40.

## Design Health Score: 28/40 (was 21/40, +7) — Good

| # | Heuristic | Was | Now | Key issue |
|---|-----------|-----|-----|-----------|
| 1 | Visibility of System Status | 3 | 3 | Nav indicator wrong ~30% of scroll; no submit pending state |
| 2 | Match System / Real World | 2 | 3 | "236 automated tests" still poster-scale on the landing page |
| 3 | User Control and Freedom | 2 | 3 | Marquee now stoppable; cursor:none still overrides OS pointer settings |
| 4 | Consistency and Standards | 2 | 3 | Three sections lack headings; case page contradicts index structure |
| 5 | Error Prevention | 1 | 2 | noscript closes the P0, but form prints "Message received" for a discarded message |
| 6 | Recognition Rather Than Recall | 2 | 2 | Price signal went from wrong to absent |
| 7 | Flexibility and Efficiency | 2 | 3 | No way to book the 30-minute call the page promises |
| 8 | Aesthetic and Minimalist | 3 | 3 | Sub-12px type pervasive; 14 near-identical rows flatten the middle |
| 9 | Error Recovery | 2 | 3 | ARIA wiring + focus move verified by real submits |
| 10 | Help and Documentation | 2 | 3 | No pricing guidance, no availability date |

## Verified fixes (9 of 11 claims)
- Accent retune: #047857 = 5.48:1 light, #34d399 = 10.29:1 dark. Zero accent-as-text failures.
- Form a11y: real submits confirm aria-invalid, aria-describedby, focus moves to first bad field, live region names the field.
- noscript: 27/27 revealed elements visible with scripts stripped.
- Touch fallback: coarse branch isolated (coarse:true, reduce:false) — animation none, overflow auto, snap active, scrolls, 8 duplicates display:none.
- All keyframe animations covered by reduced-motion, both pages.
- All six tint pairs pass both themes (7.9:1 to 10.5:1).
- Sections reordered, prices removed, selects de-anchored, zero href="#" remaining.
- Detector 66 -> 147, but 98 are undersized-ui-text from ~7 declarations counted per instance; side-tab, dark-glow x2 and tight-leading x3 are false positives.

## REGRESSIONS introduced by the revamp
1. work/lynxsta.html loads only cursor.js — no theme.js (dark preference lost on navigation, white flash) and no chrome.js (.scrolled never fires, header CTA permanently ghost).
2. <footer> inside <main> on the case page, contradicting the index fix.
3. #contact-form panel is dead CSS: contact.css:19 sets border+shadow, contact.css:208 re-declares with border:0. Later rule wins.
4. Recent projects section has no id, so the active-nav indicator is wrong for ~2000px.
5. Price signal absent entirely; buyer asked for a budget with no anchor.
6. Dark mode clipboard inverted: --paper #17181b is darker than --board #3c4148.
7. Case page's first screen duplicates the teaser (same meta, title, lede, empty slot, same 4/20min/236 triad).

## Priority Issues
1. [P0] Form fabricates success. No action/method; prints "Message received" and resets. Worse now that noscript makes it visible without JS. Fix: form relay endpoint, or mailto with honest copy.
2. [P1] work/lynxsta.html is a conversion dead end: no nav, no theme persistence, ghost CTA, 3700px before the only exit.
3. [P1] No price anchor and no booking link despite step 2 promising a 30-minute call.
4. [P1] h1->h3 skips twice; #testimonials has no heading at all; 3 of 13 landmarks named on index, 0 of 3 on lynxsta.
5. [P2] Focus rings compute to 1px nearly everywhere (sections.css:57 declares 1.5px); .skip-link has outline:none at (0,2,0) beating a:focus-visible.

## Still outstanding from the previous run
- --ink-faint 4.48:1 light / 3.93:1 dark (AA fail), carrying .wk-yr on all 14 rows, .block-label .idx, footer.
- Proof card stars 2.04:1, captions 3.57:1 — the wall cards fixed this with one larger SVG star; the proof card did not.
- js/chrome.js:25 window.scrollTo({behavior:'smooth'}) unguarded — proven: scrollY read 3000 immediately after click under the reduce flag.
- h3.case-title clamps larger than every h2.
- Touch targets at 390px: 7 elements under 24px, 16 under 44px, including #menu-toggle at 34x34 (the sole mobile nav control).
- Decorative SVGs missing aria-hidden: .check and .icon-circle in the proof card.

## Biggest win
Peak-end inverted. Previous run: two peaks in the top third, flattest moment at the end. Now the contact block is the most authored composition on either page and sits exactly where the decision happens. It fails only at the click.
