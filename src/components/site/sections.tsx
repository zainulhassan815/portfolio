import Image from "next/image";
import {
  services, clientWork, publicWork, reviews, heroQuote, upwork,
  UPWORK_PROFILE, GITHUB, LINKEDIN, EMAIL,
} from "@/lib/content";

/* The case study page is not ported yet. Point at the route it will live on. */
const CASE_HREF = "/work/lynxsta";

export function FeaturedWork() {
  return (
    <section className="block block-dark" id="work" aria-labelledby="h-work">
      <div className="wrap">
      <h2 className="block-label" id="h-work" data-reveal><span className="idx">I.</span><span className="name">Featured work</span></h2>
      <div data-reveal>
        <div className="case-meta">
          <span>Web app</span><span className="sep">/</span><span>Payments &amp; booking</span>
          <span className="sep">&middot;</span><span>Shipped, in daily use</span>
        </div>
        <h3 className="case-title"><a href={CASE_HREF}>Lynxsta: a booking that is real because it is paid for.</a></h3>
        <p className="case-lede">
          A booking tool for independent stylists. The stylist sends a link, the client reads the
          terms and pays a deposit, and the slot is theirs. Nothing is confirmed until the money moves.
        </p>

        <a className="case-shot" href={CASE_HREF} data-cursor="Open">
          <Image src="/lynxsta-thumb.webp" width={2000} height={1125} priority={false}
                 alt="Lynxsta on two phones: the stylist dashboard listing today's appointments, each marked Deposit Paid, beside the month calendar view." />
        </a>

        <div className="big-stats">
          <div className="s"><b>4</b><span>Steps from link to confirmed</span></div>
          <div className="s"><b>20 min</b><span>The slot is held while they pay</span></div>
          <div className="s"><b>236</b><span>Automated tests behind it</span></div>
        </div>

        <a className="btn-primary" href={CASE_HREF} data-cursor="Read">
          <span>Read the case study</span><span className="arrow" aria-hidden="true">&rarr;</span>
        </a>
      </div>
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section className="block" id="services" aria-labelledby="h-services">
      <div className="wrap">
      <div className="block-label" data-reveal><span className="idx">II.</span><span className="name">Services</span></div>
      <div className="svc-head" data-reveal>
        <h2 id="h-services">What I take on</h2>
        <p>One engineer, the whole stack.</p>
      </div>
      <div className="svc-grid" data-reveal>
        {services.map((s) => (
          <div className={`svc ${s.tint}`} key={s.n}>
            <span className="svc-n">{s.n}</span>
            <h3>{s.title}</h3>
            <p>{s.blurb}</p>
            <ul className="svc-stack">{s.stack.map((t) => <li key={t}>{t}</li>)}</ul>
          </div>
        ))}
      </div>
      <p className="svc-terms">Fixed price and scope in writing, after a 30 minute call.</p>
      </div>
    </section>
  );
}

export function Projects() {
  return (
    <section className="block" id="projects" aria-labelledby="h-projects">
      <div className="wrap">
      <h2 className="block-label" id="h-projects" data-reveal><span className="idx">III.</span><span className="name">Recent projects</span></h2>

      <h3 className="work-subhead" data-reveal>Client work <span>Under contract, so the code is not mine to show</span></h3>
      <ol className="work-list" data-reveal>
        {clientWork.map((w) => (
          <li className="wk" key={w.title}>
            <span className="wk-yr">{w.year}</span>
            <span className="wk-main">
              <span className="wk-title">{w.title}</span>
              <span className="wk-desc">{w.desc}</span>
              <span className="wk-tags">{w.tags.map((t) => <span className="tg" key={t}>{t}</span>)}</span>
            </span>
          </li>
        ))}
      </ol>

      <h3 className="work-subhead" data-reveal>Open source and products <span>Public, and you can open every one</span></h3>
      <ol className="work-list work-list--pub" data-reveal>
        {publicWork.map((w) => (
          <li className="wk wk--pub" key={w.title}>
            <span className="wk-yr">{w.kind}</span>
            <span className="wk-main">
              <a className="wk-title" href={w.href} target="_blank" rel="noopener" data-cursor={w.cursor}>{w.title}</a>
              <span className="wk-desc">{w.desc}</span>
              <span className="wk-tags">
                {w.tags.map((t) => <span className="tg" key={t}>{t}</span>)}
                <span className="tg tg--dest">{w.dest}</span>
              </span>
            </span>
          </li>
        ))}
      </ol>

      <div className="work-out" data-reveal>
        <a className="btn-ghost btn-ghost--sm" href={UPWORK_PROFILE} target="_blank" rel="noopener" data-cursor="Verify">
          <span>Contracts and reviews on Upwork</span><span className="arrow" aria-hidden="true">&rarr;</span>
        </a>
        <a className="btn-ghost btn-ghost--sm" href={GITHUB} target="_blank" rel="noopener" data-cursor="Code">
          <span>Code on GitHub</span><span className="arrow" aria-hidden="true">&rarr;</span>
        </a>
      </div>
      </div>
    </section>
  );
}

const Star = () => (
  <svg className="star" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 1.8l3.1 6.3 7 1-5 4.9 1.2 6.9-6.3-3.3-6.3 3.3 1.2-6.9-5-4.9 7-1z" />
  </svg>
);

function ReviewCard({ r, dup }: { r: (typeof reviews)[number]; dup?: boolean }) {
  return (
    <article className="wall-card" {...(dup && { "aria-hidden": true })}>
      <p>&ldquo;{r.quote}&rdquo;</p>
      <div>
        {r.rating
          ? <span className="rate"><Star />{r.rating}</span>
          : <span className="rate verified">Verified testimonial</span>}
        <div className="attr"><b>{r.who}</b>{r.what}</div>
      </div>
    </article>
  );
}

export function Testimonials() {
  const rows = [reviews.slice(0, 4), reviews.slice(4)];
  return (
    <section className="block" id="testimonials" aria-labelledby="h-reviews">
      <div className="wrap">
      <h2 className="block-label" id="h-reviews" data-reveal><span className="idx">IV.</span><span className="name">Testimonials</span></h2>

      <div className="proof-line" data-reveal>
        <span className="n t-mint">{upwork.reviews}<small>Reviews</small></span>
        <span className="n t-butter">{upwork.rating}<small>Average rating</small></span>
        <span className="n t-sky">{upwork.jobs}<small>Contracts</small></span>
        <span className="n t-lilac">{upwork.disputes}<small>Disputes</small></span>
      </div>

      <blockquote className="quote-hero" data-reveal>
        <p>&ldquo;{heroQuote.before}<span className="pop-mark">{heroQuote.mark}</span>&rdquo;</p>
        <div className="attr">
          <b>{heroQuote.attr}</b> &middot; {heroQuote.detail}
          <a className="attr-verify" href={UPWORK_PROFILE} target="_blank" rel="noopener" data-cursor="Verify">
            Read it on Upwork &rarr;
          </a>
        </div>
      </blockquote>

      <div className="wall" data-reveal>
        {rows.map((row, i) => (
          <div className="wall-row" key={i} tabIndex={0} role="group"
               aria-label={`Client reviews, row ${i + 1} of 2. Scrollable.`}>
            {row.map((r) => <ReviewCard r={r} key={r.quote} />)}
            {/* duplicated so translateX(-50%) wraps seamlessly; hidden from AT */}
            {row.map((r) => <ReviewCard r={r} dup key={`${r.quote}-dup`} />)}
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}

const Ico = ({ children }: { children: React.ReactNode }) => <span className="ico">{children}</span>;

export function Footer() {
  return (
    <footer className="foot" aria-label="Footer">
      <div className="wrap">
        <div className="foot-top">
          <div className="foot-cta">
            <p className="foot-ask">Still reading? Tell me what you&rsquo;re building.</p>
            <a className="btn-primary btn-primary--sm" href="#contact" data-cursor="Let&rsquo;s go">
              <span>Start a project</span><span className="arrow" aria-hidden="true">&rarr;</span>
            </a>
          </div>
          <div className="foot-reach">
            <a className="foot-mail" href={`mailto:${EMAIL}`}>{EMAIL}</a>
            <span className="foot-avail"><span className="dot" aria-hidden="true" />Available for new work</span>
          </div>
        </div>

        <div className="foot-row">
          <span>&copy; {new Date().getFullYear()} Zain Ul Hassan &middot; Dreamers Lab &middot; Lahore, Pakistan</span>
          <div className="foot-links">
            <a href={UPWORK_PROFILE} target="_blank" rel="noopener">
              <Ico><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.6 5.6c-2.3 0-4 1.5-4.7 3.9-.7-1.1-1.3-2.4-1.7-3.5H9.4v5c0 1.4-.8 2.4-2 2.4s-2-1-2-2.4V6H2.7v5c0 1.5.5 2.8 1.4 3.7.9.9 2 1.3 3.3 1.3 2.7 0 4.4-2 4.4-4.9V9.5c.4.9.9 1.8 1.5 2.7l-1.3 6.2h2.8l.9-4.4c.8.5 1.8.8 2.9.8 2.7 0 4.9-2.2 4.9-5.1 0-2.8-2.2-5.1-4.9-5.1zm0 7.5c-.9 0-1.7-.4-2.4-1l.2-.9c.3-1.6 1.1-2.9 2.2-2.9 1.2 0 2.2 1 2.2 2.4 0 1.3-1 2.4-2.2 2.4z" /></svg></Ico>Upwork
            </a>
            <a href={GITHUB} target="_blank" rel="noopener">
              <Ico><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5C5.4.5 0 5.9 0 12.5c0 5.3 3.4 9.8 8.2 11.4.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.7 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.8-1.6 8.2-6.1 8.2-11.4C24 5.9 18.6.5 12 .5z" /></svg></Ico>GitHub
            </a>
            <a href={LINKEDIN} target="_blank" rel="noopener">
              <Ico><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.4 20.4h-3.6v-5.6c0-1.3 0-3-1.9-3-1.8 0-2.1 1.4-2.1 2.9v5.7H9.3V9h3.4v1.6h.1c.5-.9 1.7-1.9 3.4-1.9 3.6 0 4.3 2.4 4.3 5.5v6.2zM5.3 7.4a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2zm1.8 13H3.5V9h3.6v11.4zM22.2 0H1.8C.8 0 0 .8 0 1.7v20.6c0 1 .8 1.7 1.8 1.7h20.4c1 0 1.8-.8 1.8-1.7V1.7c0-1-.8-1.7-1.8-1.7z" /></svg></Ico>LinkedIn
            </a>
            <a href={`mailto:${EMAIL}`}>
              <Ico><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="1" /><path d="m2.5 5.5 9.5 7 9.5-7" /></svg></Ico>Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
