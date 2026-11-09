import Link from "next/link";
import Crumbs from "../../components/Crumbs";

export const metadata = {
  title: "Design Process",
  description: "How a design project runs: brief, concepts, revisions and a final delivery in Figma.",
  alternates: { canonical: "/process/" },
};

const steps = [
  ["Brief", "You tell me the goal, the users and the deadline. I ask only what I need."],
  ["Plan", "I send a short plan with scope, timeline and what you will get."],
  ["Concepts", "A typical project includes 3 concepts so you can choose a direction."],
  ["Revisions", "A typical project includes 3 rounds of revisions on the chosen direction."],
  ["Delivery", "Final screens and components in Figma, organized for your developers."],
];

export default function Process() {
  return (
    <div className="wrap page stack-lg">
      <Crumbs items={[{ name: "Process", href: "/process/" }]} />
      <div className="stack prose">
        <h1>Process</h1>
        <p className="lede">Simple and predictable. Scope and timing are agreed before any work starts.</p>
      </div>
      <ol className="stack prose" style={{ paddingLeft: 20 }}>
        {steps.map(([t, d]) => (<li key={t}><b>{t}.</b> {d}</li>))}
      </ol>
      <div className="btn-row"><Link className="btn btn-primary" href="/contact/">Start a project</Link></div>
    </div>
  );
}
