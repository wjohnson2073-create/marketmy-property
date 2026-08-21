import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../components/site-chrome";
import { business } from "../site-data";

export const metadata: Metadata = {
  title: "Agent Branding | MarketMy.Property",
  description: "Personal brand consulting and content direction for San Diego real estate agents and teams.",
  alternates: { canonical: "/agent-branding" },
  openGraph: { title: "Agent Branding | MarketMy.Property", description: "Personal brand consulting and content direction for real estate agents and teams.", url: "/agent-branding", images: [] },
  twitter: { title: "Agent Branding | MarketMy.Property", description: "Personal brand consulting and content direction for real estate agents and teams.", images: [] },
};

export default function AgentBrandingPage() {
  return (
    <main className="branding-page">
      <a className="skip-link" href="#branding-content">Skip to content</a>
      <SiteHeader innerPage />
      <section className="branding-hero" id="branding-content">
        <p className="eyebrow">AGENT BRANDING / COMING SOON</p>
        <h1>YOUR NAME IS<br />PART OF THE <span>LISTING.</span></h1>
        <div className="branding-intro">
          <p>Every agent needs a clear brand—whether you work independently or lead a team. Every showing, post, listing and conversation shapes how people remember you.</p>
          <p>MarketMy.Property helps turn your voice, expertise and vision into a brand people recognize on paper, on camera and across social media. Whatever the goal, we build around what makes you worth hiring.</p>
        </div>
      </section>
      <section className="branding-consult">
        <div><span>AVAILABLE NOW</span><h2>Personal brand consulting.</h2></div>
        <div><p>Full branding packages are coming soon. Until then, strategy, creative direction and custom content planning are available on a personal consulting basis.</p><a href={`mailto:${business.brandingEmail}`}>Ask Mike about agent branding <span aria-hidden="true">↗</span></a></div>
      </section>
      <SiteFooter innerPage />
    </main>
  );
}
