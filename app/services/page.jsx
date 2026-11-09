import Link from "next/link";
import Crumbs from "../../components/Crumbs";

export const metadata = {
  title: "UI/UX Design Services",
  description: "Product UI/UX, dashboard, website and design handoff services from a designer with 10 years of experience.",
  alternates: { canonical: "/services/" },
};

const list = [
  ["Product UI/UX design", "Mobile and web apps. User flows, wireframes, high-fidelity screens and clickable prototypes in Figma."],
  ["Dashboard design", "Tables, charts and filters for data-heavy products, with clear hierarchy and states for empty, loading and error."],
  ["Website design", "Landing pages and multi-page sites with a clear message, one main action per section and a layout that works on phones."],
  ["Design review", "A written review of your existing screens with a prioritized list of fixes."],
  ["Design handoff", "Organized Figma files, components and spacing notes so developers can build without guessing."],
];

export default function Services() {
  return (
    <div className="wrap page stack-lg">
      <Crumbs items={[{ name: "Services", href: "/services/" }]} />
      <div className="stack prose">
        <h1>Services</h1>
        <p className="lede">Focused design work for products that need to look finished and be easy to use.</p>
      </div>
      <div className="grid">
        {list.map(([t, d]) => (
          <article className="card" key={t}><h2 style={{ fontSize: "1.25rem" }}>{t}</h2><p>{d}</p></article>
        ))}
      </div>
      <div className="btn-row"><Link className="btn btn-primary" href="/contact/">Start a project</Link></div>
    </div>
  );
}
