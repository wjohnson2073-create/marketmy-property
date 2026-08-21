import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "../components/site-chrome";
import { business } from "../site-data";
import { serviceOrder, servicePages, serviceUrl } from "../seo-data";

const title = "San Diego County Real Estate Media | MarketMy.Property";
const description = "Upfront-priced real estate photography, video, drone, twilight and 3D tours throughout San Diego County, with Riverside County service available.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/san-diego-real-estate-media" },
  openGraph: { title, description, url: "/san-diego-real-estate-media", images: [] },
  twitter: { title, description, images: [] },
};

const areaSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "San Diego County Real Estate Media",
  url: `${business.siteUrl}/san-diego-real-estate-media`,
  description,
  about: { "@id": `${business.siteUrl}/#business` },
};

export default function SanDiegoServiceAreaPage() {
  return (
    <main className="area-page">
      <a className="skip-link" href="#area-content">Skip to content</a>
      <SiteHeader innerPage />
      <section className="directory-hero" id="area-content">
        <p className="eyebrow">SAN DIEGO COUNTY COVERAGE</p>
        <h1>One media team.<br /><span>Countywide reach.</span></h1>
        <p>Photography, video, aerial, twilight and 3D listing media throughout San Diego County—with the prices visible before you contact us.</p>
      </section>
      <section className="area-answer section-light">
        <div><p className="eyebrow dark">WHERE WE WORK</p><h2>San Diego County travel is included.</h2></div>
        <div><p>We serve listings across San Diego County, including central San Diego, coastal communities, North County, South County and East County. Riverside County bookings are also available for a flat $25 travel fee.</p><p>Appointment availability, legal drone airspace, weather and the selected service determine the final schedule—not a hidden travel quote.</p></div>
      </section>
      <section className="area-services">
        <p className="eyebrow">SERVICES AVAILABLE ACROSS THE COUNTY</p>
        <div>{serviceOrder.map((slug) => <Link href={serviceUrl(slug)} key={slug}><span>{servicePages[slug].shortName}</span><strong>{servicePages[slug].price}+</strong></Link>)}</div>
      </section>
      <section className="directory-cta"><p>HAVE AN ADDRESS AND A TARGET DATE?</p><Link href="/#book">Check availability <span aria-hidden="true">→</span></Link></section>
      <SiteFooter innerPage />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(areaSchema).replace(/</g, "\\u003c") }} />
    </main>
  );
}
