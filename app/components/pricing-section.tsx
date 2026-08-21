"use client";

import { useState } from "react";
import { alaCarte, bookingSelectionEvent, packages } from "../site-data";

export function PricingSection() {
  const [view, setView] = useState<"packages" | "ala-carte">("packages");

  function selectPackage(packageName: string) {
    window.dispatchEvent(new CustomEvent(bookingSelectionEvent, { detail: packageName }));
  }

  return (
    <section className="pricing section-light" id="pricing">
      <div className="section-heading"><p className="eyebrow dark">PRICING FIRST. ALWAYS.</p><h2>Pick the coverage.<br />Know the number.</h2><p>Package prices cover properties up to 2,500 square feet unless noted. No guessing and no forced quote call.</p></div>
      <div className="pricing-toggle" aria-label="Choose pricing type">
        <button type="button" aria-pressed={view === "packages"} className={view === "packages" ? "active" : ""} onClick={() => setView("packages")}>Packages</button>
        <button type="button" aria-pressed={view === "ala-carte"} className={view === "ala-carte" ? "active" : ""} onClick={() => setView("ala-carte")}>À La Carte</button>
      </div>

      {view === "packages" ? (
        <>
          <p className="mobile-swipe-hint">Swipe to compare packages →</p>
          <div className="package-grid">
            {packages.map((item, index) => (
              <article className={`${item.featured ? "featured" : ""} ${item.luxury ? "luxury" : ""}`} key={item.name}>
                <div className="card-top"><span>0{index + 1}</span><span>{item.tag}</span></div>
                <h3>{item.name}</h3><p className="package-description">{item.description}</p>
                <div className="package-price">{item.price}</div>
                <ul>{item.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
                <a className="package-cta" href="#book" onClick={() => selectPackage(item.name)}><span>Select package</span><strong aria-hidden="true">→</strong></a>
              </article>
            ))}
          </div>
          <div className="size-pricing"><strong>PROPERTY SIZE</strong><span>Through 2,500 sf — base price</span><span>2,501–3,500 sf — +$50</span><span>3,501–4,500 sf — +$100</span><span>Above 4,500 sf — custom</span></div>
        </>
      ) : (
        <div className="ala-grid">
          {alaCarte.map((section) => <article key={section.group}><h3>{section.group}</h3>{section.items.map(([name, price]) => <div className="ala-line" key={name}><span>{name}</span><strong>{price}</strong></div>)}</article>)}
          <article className="raw-card"><h3>ALREADY HAVE AN EDITOR?</h3><p>Hire our videographer for clean raw capture. You provide the memory card; we film on it. Editing not included.</p><div className="ala-line"><span>Hourly, 2-hour minimum</span><strong>$120/hr</strong></div><div className="ala-line"><span>Half day — up to 4 hours</span><strong>$400</strong></div><div className="ala-line"><span>Full day — up to 8 hours</span><strong>$700</strong></div><div className="ala-line"><span>Drone add-on</span><strong>$100</strong></div></article>
        </div>
      )}
    </section>
  );
}
