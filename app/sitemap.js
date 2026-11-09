export const dynamic = "force-static";
const base = "https://design.samvllaco.com";
const paths = ["/", "/services/", "/work/", "/process/", "/contact/"];
export default function sitemap() {
  const lastModified = new Date();
  return paths.map((p) => ({ url: `${base}${p}`, lastModified, changeFrequency: "monthly", priority: p === "/" ? 1 : 0.7 }));
}
