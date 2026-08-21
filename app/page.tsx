import Image from "next/image";
import { JotformEmbed } from "./components/jotform-embed";
import { PortfolioRotator } from "./components/portfolio-rotator";
import { PricingSection } from "./components/pricing-section";
import { SiteFooter, SiteHeader } from "./components/site-chrome";
import { business, packages, portfolio } from "./site-data";
import { faqItems } from "./seo-data";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": `${business.siteUrl}/#business`,
      name: business.name,
      url: business.siteUrl,
      logo: `${business.siteUrl}/marketmy-logo.webp`,
      image: `${business.siteUrl}/og.png`,
      email: business.email,
      sameAs: [business.instagramUrl],
      areaServed: ["San Diego County, California", "Riverside County, California"],
      description: "Real estate photography, drone, video, 3D tours and listing media with straightforward package pricing.",
      knowsAbout: ["Real estate photography", "Real estate videography", "Drone photography", "Twilight photography", "Matterport", "Zillow 3D Home", "CubiCasa floor plans"],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Real estate media packages",
        itemListElement: packages.map((item) => ({
          "@type": "Offer",
          name: item.name,
          description: item.description,
          priceCurrency: "USD",
          price: item.amount,
          url: `${business.siteUrl}/#pricing`,
          availability: "https://schema.org/InStock",
        })),
      },
    },
    {
      "@type": "WebSite",
      "@id": `${business.siteUrl}/#website`,
      url: business.siteUrl,
      name: business.name,
      publisher: { "@id": `${business.siteUrl}/#business` },
      inLanguage: "en-US",
    },
  ],
};

export default function Home() {
  return (
    <main>
      <a className="skip-link" href="#content">Skip to content</a>
      <SiteHeader />

      <div id="content">
        <section className="hero" id="top">
          <div className="hero-copy">
            <p className="eyebrow">SAN DIEGO REAL ESTATE MEDIA</p>
            <h1 className="hero-title">REAL ESTATE MEDIA.<br /><span>PRICED UPFRONT.</span></h1>
            <p className="lede">Pick a package. Add what the listing needs. Book the shoot. No mystery quotes.</p>
            <div className="hero-actions"><a className="button primary" href="#pricing">See Pricing</a><a className="button secondary" href="#work">See Our Work</a></div>
            <div className="starting-row"><span><strong>$250</strong> Photography</span><span><strong>$125</strong> Reels</span><span><strong>$325</strong> Tours</span></div>
          </div>
          <PortfolioRotator />
        </section>

        <section className="trust-strip" aria-label="Service highlights"><span>24-HOUR PHOTO DELIVERY</span><span>ZILLOW PHOTOGRAPHER + SHOWCASE CERTIFIED</span><span>FAA PART 107 PILOT ON TEAM</span><span>SAN DIEGO COUNTY TRAVEL INCLUDED</span></section>

        <PricingSection />

        <section className="work" id="work">
          <div className="work-heading"><div><p className="eyebrow">SEE THE STANDARD</p><h2>Clean lines.<br />Real color.<br /><span>More attention.</span></h2></div><p>Temporary licensed preview imagery is shown while the original MarketMy.Property portfolio is being prepared. No placeholder is represented as completed client work.</p></div>
          <div className="work-grid">
            {portfolio.map((item, index) => <figure className={index === 0 ? "wide" : ""} key={item.src}><Image src={item.src} alt={item.alt} fill sizes={index === 0 ? "100vw" : "(max-width: 680px) 100vw, 50vw"} /><figcaption><span>{index === 0 ? "EXTERIOR / TWILIGHT" : item.label}</span><span>PREVIEW {item.number}</span></figcaption></figure>)}
          </div>
        </section>

        <section className="services-band" aria-label="Services">
          <a href="/services/real-estate-photography"><strong>PHOTO</strong><span>MLS-ready coverage</span></a>
          <a href="/services/drone-photography"><strong>DRONE</strong><span>Part 107 operations</span></a>
          <a href="/services/real-estate-video"><strong>VIDEO</strong><span>Tours, reels, agent-led</span></a>
          <a href="/services/3d-tours"><strong>3D</strong><span>Matterport + Zillow</span></a>
          <a href="/agent-branding"><strong>BRAND</strong><span>Agent strategy + content</span></a>
        </section>

        <section className="about" id="about">
          <div className="about-art"><Image src="/marketmy-logo.webp" alt="MarketMy.Property logo" width="420" height="420" /></div>
          <div className="about-copy"><p className="eyebrow">THE TEAM BEHIND THE CAMERA</p><h2>Built for agents who need the listing done right.</h2><p>MarketMy.Property is a San Diego real estate media team led by Wes, Owner and Lead Photographer. We combine straightforward pricing, reliable delivery and a full media stack so agents can book what they need without wasting time.</p><a className="team-link" href="/team">Meet the team <span aria-hidden="true">↗</span></a><div className="credential-grid"><div><strong>ZILLOW</strong><span>Photographer certified</span></div><div><strong>SHOWCASE</strong><span>Certified media provider</span></div><div><strong>FAA PART 107</strong><span>Certified pilot on team</span></div><div><strong>24 HOURS</strong><span>Standard photo delivery</span></div></div></div>
        </section>

        <section className="process section-light" id="process">
          <div className="section-heading compact"><p className="eyebrow dark">FROM BOOKED TO DELIVERED</p><h2>Simple on purpose.</h2></div>
          <div className="process-grid"><article><span>01</span><h3>Pick it</h3><p>Choose a package or build the listing à la carte.</p></article><article><span>02</span><h3>Book it</h3><p>Send the address, size, date and any add-ons.</p></article><article><span>03</span><h3>We shoot it</h3><p>We arrive ready, capture the property and keep the day moving.</p></article><article><span>04</span><h3>You launch it</h3><p>Photos within 24 hours. Video draft within 48.</p></article></div>
        </section>

        <section className="home-faq" aria-labelledby="home-faq-title">
          <div className="home-faq-heading"><p className="eyebrow">ANSWERS BEFORE THE SALES CALL</p><h2 id="home-faq-title">What agents ask first.</h2><a href="/faq">See every answer <span aria-hidden="true">→</span></a></div>
          <div className="home-faq-grid">{faqItems.slice(0, 4).map((item, index) => <article key={item.question}><span>0{index + 1}</span><h3>{item.question}</h3><p>{item.answer}</p></article>)}</div>
        </section>

        <section className="details">
          <div className="details-heading"><p className="eyebrow">THE FINE PRINT. IN PLAIN ENGLISH.</p><h2>Clear expectations.<br /><span>No surprises.</span></h2></div>
          <div className="details-grid">
            <article><h3>Delivery</h3><p>Photos are delivered within 24 hours from the end of the shoot. Video first draft is delivered for review within 48 hours, with final delivery within 72 hours when feedback is received on time. Rush service is availability-only.</p></article>
            <article><h3>Booking window</h3><p>48 hours&apos; notice is standard. 24-hour and same-day appointments are availability-only for non-Luxury packages, with a $75–$150 rush fee depending on scope. Luxury Campaigns are planned, not rushed.</p></article>
            <article><h3>Revisions</h3><p>Video includes one major revision and one follow-up pass of minor tweaks. Additional edits are $25 each. A new direction or major additional re-edit is custom quoted.</p></article>
            <article><h3>Payment</h3><p>À-la-carte services are paid in full to book. Packages require 50% down and the balance before final delivery. Luxury Campaigns reserve with $300 down; the balance is due before final delivery.</p></article>
            <article><h3>Rescheduling</h3><p>One free reschedule with at least 24 hours&apos; notice, subject to availability. Inside 24 hours, the booking payment is forfeited. Weather-driven drone or twilight changes are rescheduled at no charge.</p></article>
            <article><h3>Travel</h3><p>Travel throughout San Diego County is included. Riverside County is available for a flat $25 travel fee.</p></article>
            <article><h3>Property readiness</h3><p>The property must be photo-ready. We may make minor adjustments at our discretion, but cleaning, staging, decluttering and moving heavy or personal items are not included. A return visit outside our control is $75; our mistake is corrected free.</p></article>
            <article><h3>Proof + payment</h3><p>Preview media may be watermarked until the remaining balance is paid. Clean, MLS-ready files are then delivered by email download link. Your property prep guide is sent after booking.</p></article>
            <article className="license"><h3>Media license</h3><p>The paying Realtor receives a broad license for MLS, property portals, brokerage sites, social media, print and self-promotion. A buyer&apos;s agent may not reuse the listing media for their own marketing without written permission and a $50 additional-agent license. Unless the client opts out in writing, MarketMy.Property may use captured media in its portfolio and marketing.</p></article>
          </div>
        </section>

        <section className="book" id="book">
          <div className="book-copy"><p className="eyebrow">READY TO GET IT ON THE CALENDAR?</p><h2>Bring us<br />the address.</h2><p>Send the basics. We&apos;ll confirm the scope, availability and next step.</p><a href={`mailto:${business.email}`}>{business.email}</a><a href={business.instagramUrl}>{business.instagramLabel}</a></div>
          <JotformEmbed />
        </section>
      </div>

      <SiteFooter />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
    </main>
  );
}
