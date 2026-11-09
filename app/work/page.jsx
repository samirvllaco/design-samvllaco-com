import Crumbs from "../../components/Crumbs";
import { SITE } from "../../lib/site";

export const metadata = {
  title: "Selected Work",
  description: "Selected product design work: Lingopie, Golf Live and more. 10,000+ screens designed for 50+ clients.",
  alternates: { canonical: "/work/" },
};

export default function Work() {
  return (
    <div className="wrap page stack-lg">
      <Crumbs items={[{ name: "Work", href: "/work/" }]} />
      <div className="stack prose">
        <h1>Selected work</h1>
        <p className="lede">
          Much of my client work is under NDA, so I share it in private on request. These are public products I worked on.
        </p>
      </div>
      <div className="grid">
        <article className="card">
          <h2 style={{ fontSize: "1.25rem" }}>Lingopie</h2>
          <p>Language learning product with 100k+ users. I did UI and UX for a year as a contractor while the team handled development.</p>
          <a href="https://lingopie.com">lingopie.com</a>
        </article>
        <article className="card">
          <h2 style={{ fontSize: "1.25rem" }}>Golf Live</h2>
          <p>A golf app and PGA Show award winner. I designed the main screens and helped with development as part of the team.</p>
          <a href="https://golfliveapp.com">golfliveapp.com</a>
        </article>
        <article className="card">
          <h2 style={{ fontSize: "1.25rem" }}>Ocufuse</h2>
          <p>My own product, designed and built end to end.</p>
          <a href="https://ocufuse.com">ocufuse.com</a>
        </article>
      </div>
      <p>
        More shots on <a href={SITE.links.dribbble} rel="me noopener">Dribbble</a> and in my{" "}
        <a href={SITE.links.figma} rel="noopener">Figma portfolio</a>.
      </p>
    </div>
  );
}
