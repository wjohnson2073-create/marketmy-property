import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "../components/site-chrome";
import { business } from "../site-data";
import { faqItems } from "../seo-data";

const title = "Real Estate Media FAQ & Pricing Answers | MarketMy.Property";
const description = "Direct answers about MarketMy.Property pricing, delivery, drone certification, Zillow 3D, Matterport, licensing, travel and booking.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/faq" },
  openGraph: { title, description, url: "/faq", images: [] },
  twitter: { title, description, images: [] },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${business.siteUrl}/faq#faq`,
  mainEntity: faqItems.map((item) => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })),
};

export default function FaqPage() {
  return (
    <main className="faq-page">
      <a className="skip-link" href="#faq-content">Skip to content</a>
      <SiteHeader innerPage />
      <section className="directory-hero" id="faq-content">
        <p className="eyebrow">STRAIGHT ANSWERS</p>
        <h1>No mystery.<br /><span>No sales call required.</span></h1>
        <p>Pricing, timing, coverage and usage—answered before you book.</p>
      </section>
      <section className="faq-directory section-light">
        {faqItems.map((item, index) => <article key={item.question}><span>{String(index + 1).padStart(2, "0")}</span><div><h2>{item.question}</h2><p>{item.answer}</p></div></article>)}
      </section>
      <section className="directory-cta"><p>READY TO GET THE LISTING COVERED?</p><Link href="/#book">Book your shoot <span aria-hidden="true">→</span></Link></section>
      <SiteFooter innerPage />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c") }} />
    </main>
  );
}
