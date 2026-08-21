import Link from "next/link";
import { SiteFooter, SiteHeader } from "./site-chrome";
import { servicePages, serviceStructuredData, serviceUrl, type ServiceSlug } from "../seo-data";

export function ServicePage({ slug }: { slug: ServiceSlug }) {
  const service = servicePages[slug];
  const schema = serviceStructuredData(service);

  return (
    <main className="service-page">
      <a className="skip-link" href="#service-content">Skip to content</a>
      <SiteHeader innerPage />
      <section className="service-hero" id="service-content">
        <div>
          <p className="eyebrow">{service.eyebrow}</p>
          <h1>{service.headline}</h1>
        </div>
        <aside aria-label="Starting price">
          <span>STARTING AT</span>
          <strong>{service.price}</strong>
          <p>{service.unitText}</p>
          <Link href="/#book">Book this service <span aria-hidden="true">→</span></Link>
        </aside>
      </section>

      <section className="service-answer section-light" aria-labelledby="quick-answer">
        <p className="eyebrow dark">THE QUICK ANSWER</p>
        <h2 id="quick-answer">What you get.</h2>
        <p>{service.answer}</p>
      </section>

      <section className="service-detail-grid">
        <article><span>01</span><h2>Deliverables</h2><ul>{service.deliverables.map((item) => <li key={item}>{item}</li>)}</ul></article>
        <article><span>02</span><h2>Why agents book it</h2><ul>{service.reasons.map((item) => <li key={item}>{item}</li>)}</ul></article>
      </section>

      <section className="related-services section-light">
        <div><p className="eyebrow dark">BUILD THE RIGHT COVERAGE</p><h2>Pair it with.</h2></div>
        <div>{service.related.map((relatedSlug) => {
          const related = servicePages[relatedSlug];
          return <Link key={relatedSlug} href={serviceUrl(relatedSlug)}><span>{related.shortName}</span><strong aria-hidden="true">↗</strong></Link>;
        })}</div>
      </section>

      <section className="service-cta"><p>READY TO PUT THE LISTING ON THE CALENDAR?</p><Link href="/#book">Book your shoot <span aria-hidden="true">→</span></Link></section>
      <SiteFooter innerPage />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
    </main>
  );
}
