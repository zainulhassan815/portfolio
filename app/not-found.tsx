import Link from "next/link";

export const metadata = { title: "Not found" };

export default function NotFound() {
  return (
    <main className="wrap" id="main" style={{ minHeight: "70vh", display: "grid", alignContent: "center", padding: "140px 0" }}>
      <p className="block-label"><span className="idx">404</span><span className="name">Not found</span></p>
      <h1 className="display display-xl shout" style={{ maxWidth: "14ch", margin: "0 0 24px" }}>
        Nothing here yet.
      </h1>
      <p className="hero-dek" style={{ maxWidth: "46ch" }}>
        That page has not been built yet, or it moved. The work and the way to reach me are both on
        the home page.
      </p>
      <div className="cta-row" style={{ marginTop: 34 }}>
        <Link className="btn-primary" href="/"><span>Back to the start</span><span className="arrow" aria-hidden="true">&rarr;</span></Link>
        <Link className="btn-ghost" href="/#contact"><span>Start a project</span><span className="arrow" aria-hidden="true">&rarr;</span></Link>
      </div>
    </main>
  );
}
