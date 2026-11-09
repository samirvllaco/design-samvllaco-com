import Crumbs from "../../components/Crumbs";
import { SITE } from "../../lib/site";

export const metadata = {
  title: "Start a Project",
  description: "Tell Sam Vllaco what you are building and when you need it. Replies come with a clear plan.",
  alternates: { canonical: "/contact/" },
};

export default function Contact() {
  const subject = encodeURIComponent("New design project");
  const body = encodeURIComponent("What are you building:\nWho it is for:\nWhen you need it:\nBudget range:\n");
  return (
    <div className="wrap page stack-lg">
      <Crumbs items={[{ name: "Contact", href: "/contact/" }]} />
      <div className="stack prose">
        <h1>Start a project</h1>
        <p className="lede">Send four things: what you are building, who it is for, when you need it and your budget range.</p>
        <div className="btn-row">
          <a className="btn btn-primary" href={`mailto:${SITE.email}?subject=${subject}&body=${body}`}>Email {SITE.email}</a>
        </div>
        <p>
          You can also reach me on <a href={SITE.links.x} rel="me noopener">X</a> or see my profile on{" "}
          <a href={SITE.links.dribbble} rel="me noopener">Dribbble</a>.
        </p>
      </div>
    </div>
  );
}
