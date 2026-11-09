import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { SITE } from "../lib/site";

export const metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: `${SITE.name}: ${SITE.tagline}`, template: `%s | ${SITE.name}` },
  description: SITE.description,
  alternates: { canonical: "/" },
  openGraph: { type: "website", siteName: SITE.name, url: SITE.url, title: `${SITE.name}: ${SITE.tagline}`, description: SITE.description },
  twitter: { card: "summary", site: "@samvllaco", creator: "@samvllaco" },
  robots: { index: true, follow: true },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE.url}/#service`,
  name: SITE.name,
  url: SITE.url,
  description: SITE.description,
  email: SITE.email,
  founder: { "@type": "Person", name: SITE.person, url: SITE.main },
  areaServed: "Worldwide",
  sameAs: [SITE.links.dribbble, SITE.links.x, SITE.links.medium, SITE.main],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <a className="skip" href="#main">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </body>
    </html>
  );
}
