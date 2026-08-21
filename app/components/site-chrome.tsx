import Image from "next/image";
import { business } from "../site-data";

type SiteChromeProps = { innerPage?: boolean };

export function SiteHeader({ innerPage = false }: SiteChromeProps) {
  const prefix = innerPage ? "/" : "";
  return (
    <header className="site-header">
      <a className="brand" href={innerPage ? "/" : "#top"} aria-label={`${business.name} home`}>
        <Image className="brand-logo" src="/marketmy-logo.webp" alt="" width="38" height="38" priority />
        <span>MARKETMY<span className="blue">.PROPERTY</span></span>
      </a>
      <nav aria-label="Primary navigation">
        <a href={`${prefix}#pricing`}>Pricing</a>
        <a href={`${prefix}#work`}>Our Work</a>
        <a href="/team">Team</a>
        <a className="branding-nav" href="/agent-branding"><span>Agent Branding</span><em>NEW</em></a>
        <a className="nav-cta" href={`${prefix}#book`}>Book a Shoot</a>
      </nav>
    </header>
  );
}

export function SiteFooter({ innerPage = false }: SiteChromeProps) {
  const prefix = innerPage ? "/" : "";
  return (
    <footer>
      <a className="brand" href={innerPage ? "/" : "#top"} aria-label={`${business.name} home`}>
        <Image className="brand-logo" src="/marketmy-logo.webp" alt="" width="38" height="38" />
        <span>MARKETMY<span className="blue">.PROPERTY</span></span>
      </a>
      <p>© 2026 MARKETMY.PROPERTY</p>
      <div><a href={`${prefix}#pricing`}>Pricing</a><a href={`${prefix}#work`}>Work</a><a href="/team">Team</a><a href="/agent-branding">Branding</a><a href={`${prefix}#book`}>Book</a></div>
    </footer>
  );
}
