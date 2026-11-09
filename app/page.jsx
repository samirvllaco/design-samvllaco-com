import Link from "next/link";
import { SITE } from "../lib/site";

export const metadata = {
  title: { absolute: `${SITE.name}: ${SITE.tagline}` },
  alternates: { canonical: "/" },
};

const services = [
  ["Product UI/UX", "Apps and SaaS products, from flows to final screens."],
  ["Dashboards", "Dense data made clear, for teams that use it every day."],
  ["Websites", "Clear, fast marketing and product sites."],
  ["Design handoff", "Organized Figma files and specs your developers can build from."],
];

export default function Home() {
  return (
    <div className="wrap page">
      <section className="stack-lg">
        <div className="stack">
          <p className="eyebrow">Product designer, 10 years in</p>
          <h1>{SITE.tagline}</h1>
          <p className="lede">
            I help founders and teams ship products that look finished and are easy to use. Clear
            hierarchy, plain words and one main action per screen.
          </p>
          <div className="btn-row">
            <Link className="btn btn-primary" href="/contact/">Start a project</Link>
            <Link className="btn btn-ghost" href="/work/">See the work</Link>
          </div>
        </div>
        <div className="stats" aria-label="Experience">
          <div className="stat"><b>10</b><span>years designing products</span></div>
          <div className="stat"><b>10,000+</b><span>screens designed</span></div>
          <div className="stat"><b>50+</b><span>clients served</span></div>
        </div>
      </section>

      <section className="section stack">
        <h2>What I design</h2>
        <div className="grid">
          {services.map(([t, d]) => (
            <article className="card" key={t}><h3>{t}</h3><p>{d}</p></article>
          ))}
        </div>
        <p><Link href="/services/">All services</Link></p>
      </section>

      <section className="section stack">
        <h2>Industries</h2>
        <p className="lede">SaaS, dashboards, LegalTech, cybersecurity, fintech, healthcare, editorial and eCommerce.</p>
      </section>

      <section className="section stack">
        <h2>Have a project?</h2>
        <p className="lede">Tell me what you are building and when you need it. I reply with a clear plan.</p>
        <div className="btn-row"><Link className="btn btn-primary" href="/contact/">Start a project</Link></div>
      </section>
    </div>
  );
}
