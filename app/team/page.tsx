import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "../components/site-chrome";
import { team } from "../site-data";

export const metadata: Metadata = {
  title: "Meet the Team | MarketMy.Property",
  description: "The MarketMy.Property San Diego real estate media team.",
  alternates: { canonical: "/team" },
  openGraph: { title: "Meet the Team | MarketMy.Property", description: "The MarketMy.Property San Diego real estate media team.", url: "/team", images: [] },
  twitter: { title: "Meet the Team | MarketMy.Property", description: "The MarketMy.Property San Diego real estate media team.", images: [] },
};

export default function TeamPage() {
  return <main className="team-page">
    <a className="skip-link" href="#team-content">Skip to content</a>
    <SiteHeader innerPage />
    <section className="team-hero" id="team-content">
      <p className="eyebrow">MEET THE TEAM</p>
      <h1>THE PEOPLE<br />BEHIND THE <span>LISTING.</span></h1>
      <p>Small team. Clear standards. No random handoff between people who have never seen the property.</p>
    </section>
    <section className="team-grid">
      {team.map((member, index) => <article key={member.name}>
        <div className="headshot-placeholder" role="img" aria-label={`${member.name} headshot placeholder`}><span>{member.initial}</span><i /><b>PHOTO COMING SOON</b></div>
        <div className="team-card-copy"><span>0{index + 1}</span><h2>{member.name}</h2><strong>{member.role}</strong><p>{member.bio}</p></div>
      </article>)}
    </section>
    <section className="team-statement"><p>WE SHOW UP PREPARED. WE DELIVER ON TIME. WE MAKE THE LISTING LOOK LIKE IT MATTERS.</p><Link href="/#book">Book your shoot <span aria-hidden="true">↗</span></Link></section>
    <SiteFooter innerPage />
  </main>;
}
