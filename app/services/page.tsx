import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "../components/site-chrome";
import { serviceOrder, servicePages, serviceUrl } from "../seo-data";

const title = "Real Estate Media Services in San Diego | MarketMy.Property";
const description = "Compare San Diego real estate photography, video, drone, twilight, Matterport, Zillow 3D and floor-plan services with upfront pricing.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/services" },
  openGraph: { title, description, url: "/services", images: [] },
  twitter: { title, description, images: [] },
};

export default function ServicesPage() {
  return (
    <main className="services-page">
      <a className="skip-link" href="#services-content">Skip to content</a>
      <SiteHeader innerPage />
      <section className="directory-hero" id="services-content">
        <p className="eyebrow">SAN DIEGO REAL ESTATE MEDIA</p>
        <h1>Pick the media.<br /><span>Know the price.</span></h1>
        <p>Start with the service the listing needs. Add coverage or choose a package when the complete combination makes more sense.</p>
      </section>
      <section className="service-directory section-light">
        {serviceOrder.map((slug, index) => {
          const service = servicePages[slug];
          return <article key={slug}><span>0{index + 1}</span><h2>{service.shortName}</h2><p>{service.answer}</p><strong>{service.price} <small>starting</small></strong><Link href={serviceUrl(slug)}>See service details <b aria-hidden="true">→</b></Link></article>;
        })}
        <article className="branding-directory"><span>06</span><h2>Agent Branding</h2><p>Personal brand strategy and content direction for independent agents and teams. Packages are coming soon; consulting is available now.</p><strong>CONSULTING <small>available</small></strong><Link href="/agent-branding">Explore agent branding <b aria-hidden="true">→</b></Link></article>
      </section>
      <section className="directory-cta"><p>NOT SURE WHETHER À LA CARTE OR A PACKAGE FITS BEST?</p><Link href="/#pricing">Compare all pricing <span aria-hidden="true">→</span></Link></section>
      <SiteFooter innerPage />
    </main>
  );
}
