import Link from "next/link";
import { SITE } from "../lib/site";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <p>{SITE.person}. Product designer.</p>
        <div className="foot-links">
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
          <a href={SITE.links.dribbble} rel="me noopener">Dribbble</a>
          <a href={SITE.links.figma} rel="noopener">Figma</a>
          <a href={SITE.main}>samvllaco.com</a>
          <Link href="/contact/">Start a project</Link>
        </div>
      </div>
    </footer>
  );
}
