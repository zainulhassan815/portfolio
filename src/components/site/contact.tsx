"use client";

import { useActionState, useEffect, useRef } from "react";
import { sendMessage, type ContactState } from "@/lib/actions";
import { EMAIL, upwork } from "@/lib/content";

const INITIAL: ContactState = { ok: false, message: "" };

export function Contact() {
  const [state, action, pending] = useActionState(sendMessage, INITIAL);
  const form = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (!state.message) return;
    if (state.ok) {
      form.current?.reset();
      return;
    }
    // Move focus to the first field the server rejected, so the error is
    // reachable without hunting for it.
    const first = state.errors && Object.keys(state.errors)[0];
    if (first) form.current?.querySelector<HTMLElement>(`#${first}`)?.focus();
  }, [state]);

  const err = (f: string) => state.errors?.[f];

  return (
    <section className="block block-tint" id="contact" aria-labelledby="h-contact">
      <h2 className="block-label" data-reveal><span className="idx">VI.</span><span className="name">Start here</span></h2>
      <div className="contact-grid">
        <div className="contact-copy" data-reveal>
          <h2 id="h-contact">Have a project in mind?</h2>
          <p className="copy">
            Tell me what you&rsquo;re building. I reply within one business day, and I&rsquo;ll say
            directly if it&rsquo;s not a fit.
          </p>

          <ol className="next-steps">
            <li><b>You send this form</b><span>I read it myself and reply within one business day.</span></li>
            <li><b>We talk for 30 minutes</b><span>Your problem, not my r&eacute;sum&eacute;. No charge, no obligation.</span></li>
            <li><b>You get a fixed scope and price</b><span>In writing, before any work starts.</span></li>
          </ol>

          <ul className="assurances">
            <li>NDA on request. You own the code and the accounts.</li>
            <li>GMT+5, overlapping the US morning and the whole EU day.</li>
            <li>Contract and escrow through Upwork.</li>
          </ul>

          <div className="trust-strip">
            <span className="t-mint"><b>100%</b>Job success</span>
            <span className="t-sky"><b>{upwork.jobs}</b>Contracts</span>
            <span className="t-lilac"><b>{upwork.disputes}</b>Disputes</span>
          </div>

          <div className="direct-line">
            or write directly &rarr; <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          </div>
        </div>

        <div className="clipboard" data-reveal>
          <span className="clip" aria-hidden="true">
            <svg viewBox="0 0 132 60" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="steel" x1="0" y1="0" x2="0" y2="60" gradientUnits="userSpaceOnUse">
                  <stop offset="0" stopColor="#f2f4f6" /><stop offset=".26" stopColor="#b9c0c7" />
                  <stop offset=".5" stopColor="#8d959d" /><stop offset=".74" stopColor="#cfd5db" />
                  <stop offset="1" stopColor="#7d858d" />
                </linearGradient>
                <linearGradient id="steelBar" x1="0" y1="0" x2="0" y2="26" gradientUnits="userSpaceOnUse">
                  <stop offset="0" stopColor="#fbfcfd" /><stop offset=".55" stopColor="#c4cbd2" />
                  <stop offset="1" stopColor="#98a0a8" />
                </linearGradient>
              </defs>
              <rect x="6" y="20" width="120" height="34" rx="5" fill="url(#steel)" />
              <rect x="22" y="6" width="88" height="24" rx="9" fill="url(#steelBar)" />
              <rect x="30" y="12" width="72" height="4" rx="2" fill="#ffffff" opacity=".55" />
              <circle cx="20" cy="37" r="3.4" fill="#6f777e" />
              <circle cx="112" cy="37" r="3.4" fill="#6f777e" />
            </svg>
          </span>

          <form id="contact-form" ref={form} action={action} aria-labelledby="h-contact">
            <p className="form-note">
              <span className="req" aria-hidden="true">*</span> Required. Everything else helps me answer properly.
            </p>

            {/* bots fill this, humans never see it */}
            <div aria-hidden="true" style={{ position: "absolute", left: "-9999px" }}>
              <label htmlFor="company">Company</label>
              <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
            </div>

            <div className="two-col">
              <div className={`field${err("name") ? " invalid" : ""}`}>
                <label htmlFor="name">Name <span className="req" aria-hidden="true">*</span></label>
                <input type="text" id="name" name="name" placeholder="Jordan Lee" autoComplete="name"
                       required aria-required="true" aria-describedby="name-err"
                       aria-invalid={err("name") ? true : undefined} />
                <span className="error" id="name-err">{err("name") ?? "Please enter your name."}</span>
              </div>
              <div className={`field${err("email") ? " invalid" : ""}`}>
                <label htmlFor="email">Email <span className="req" aria-hidden="true">*</span></label>
                <input type="email" id="email" name="email" placeholder="jordan@company.com" autoComplete="email"
                       required aria-required="true" aria-describedby="email-err"
                       aria-invalid={err("email") ? true : undefined} />
                <span className="error" id="email-err">{err("email") ?? "Please enter a valid email address."}</span>
              </div>
            </div>

            <div className="two-col">
              <div className="field">
                <label htmlFor="type">Project type</label>
                <select id="type" name="type" defaultValue="">
                  <option value="">Select one</option>
                  <option>Web or SaaS application</option>
                  <option>AI features in an existing product</option>
                  <option>Mobile app</option>
                  <option>Audit or rescue of an existing codebase</option>
                  <option>Something else</option>
                </select>
              </div>
              <div className="field">
                <label htmlFor="budget">Budget range</label>
                <select id="budget" name="budget" defaultValue="">
                  <option value="">Select a range</option>
                  <option>Not sure yet</option>
                  <option>Under $5k</option>
                  <option>$5k&ndash;$15k</option>
                  <option>$15k&ndash;$40k</option>
                  <option>$40k+</option>
                </select>
              </div>
            </div>

            <div className={`field${err("message") ? " invalid" : ""}`}>
              <label htmlFor="message">What are you building? <span className="req" aria-hidden="true">*</span></label>
              <textarea id="message" name="message" rows={4}
                        placeholder="A quick summary of the project and roughly when you need it."
                        required aria-required="true" aria-describedby="message-err"
                        aria-invalid={err("message") ? true : undefined} />
              <span className="error" id="message-err">{err("message") ?? "Please tell me about your project."}</span>
            </div>

            <button type="submit" className="btn-primary" disabled={pending}>
              <span>{pending ? "Sending…" : "Send it over"}</span>
              <span className="arrow" aria-hidden="true">&rarr;</span>
            </button>

            <div className={`form-status${state.message ? " show" : ""}${state.message ? (state.ok ? " success" : " error") : ""}`}
                 id="form-status" role="status" aria-live="polite">
              {state.message}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
