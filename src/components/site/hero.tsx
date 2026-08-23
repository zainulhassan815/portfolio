import { UPWORK_PROFILE, upwork } from "@/lib/content";

export function Hero() {
  return (
    <section className="hero" id="top" aria-label="Introduction">
      <div className="wrap hero-grid">
        <div className="hero-content">
          <div className="status-line rise"><span className="dot" />AVAILABLE FOR NEW WORK</div>
          <h1 className="rise">
            I build <em className="pop-mark">fullstack</em> products, end to end.
          </h1>
          <p className="hero-dek rise" style={{ ["--rise-delay" as string]: "0.12s" }}>
            Web apps, APIs, AI features, and the payments and data behind them. For founders who
            need one engineer to own the whole thing.
          </p>
          <div className="cta-row rise" style={{ ["--rise-delay" as string]: "0.2s" }}>
            <a className="btn-primary" href="#contact" data-cursor="Let&rsquo;s go">
              <span>Start a project</span><span className="arrow" aria-hidden="true">&rarr;</span>
            </a>
            <a className="btn-ghost" href="#work" data-cursor="Look">
              <span>See the work</span><span className="arrow" aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>

        <div className="proof-card-wrap">
          <div className="proof-card" role="note" aria-label="Upwork track record">
            <span className="nail" aria-hidden="true">
              <svg viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 30 L15.5 19.5 L18.7 22.5 Z" fill="#cfd8dc" />
                <ellipse cx="17" cy="18" rx="8.6" ry="8" fill="#d32f2f" transform="rotate(-42 17 18)" />
                <ellipse cx="22.3" cy="11.5" rx="6.6" ry="9.2" fill="#f4433e" transform="rotate(-42 22.3 11.5)" />
                <ellipse cx="27" cy="7.3" rx="5.6" ry="4.3" fill="#c62828" transform="rotate(-42 27 7.3)" />
                <ellipse cx="26" cy="6.3" rx="4.8" ry="3.6" fill="#ff5c52" transform="rotate(-42 26 6.3)" />
              </svg>
            </span>
            <div className="proof-head">
              <div className="proof-avatar-wrap">
                <div className="proof-avatar">ZU</div>
                <span className="live-dot" />
              </div>
              <div>
                <div className="proof-name">
                  Zain U.{" "}
                  <span className="check">
                    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
                <div className="proof-meta">Lahore, Pakistan<div className="avail">Available now</div></div>
              </div>
            </div>
            <div className="proof-badges">
              <span className="proof-badge">
                <span className="icon-circle">
                  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M3 8l4 3 5-6 5 6 4-3-2 11H5L3 8z" fill="currentColor" /></svg>
                </span>
                100% Job Success
              </span>
              <span className="proof-badge"><span className="icon-hex">&#9733;</span>Top Rated</span>
            </div>
            <div className="proof-stats">
              <div><b>{upwork.earnings}</b><span>Total earnings</span></div>
              <div><b>{upwork.jobs}</b><span>Total jobs</span></div>
              <div><b>{upwork.hours}</b><span>Total hours</span></div>
            </div>
            <div className="proof-rating">
              <span className="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</span> <b>{upwork.rating}</b>{" "}
              <span className="dim">&middot; {upwork.reviews} reviews</span>
            </div>
            <a className="proof-link" href={UPWORK_PROFILE} target="_blank" rel="noopener" data-cursor="Verify">
              View full profile on Upwork &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
