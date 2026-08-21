import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), "utf8");

test("keeps business content centralized and pricing consistent", async () => {
  const [page, data] = await Promise.all([read("app/page.tsx"), read("app/site-data.ts")]);

  assert.doesNotMatch(page, /^"use client"/);
  assert.match(page, /import \{ PricingSection \}/);
  assert.match(data, /name: "Listing Essentials"[\s\S]*?price: "\$425"/);
  assert.match(data, /name: "Luxury Campaign"[\s\S]*?price: "\$1,495"/);
  assert.match(data, /\["Same-day rush", "\+\$75–\$150"\]/);
  assert.doesNotMatch(`${page}\n${data}`, /Same-day photo delivery[\s\S]{0,20}\+\$40/);
  assert.match(data, /email: "info@marketmy\.property"/);
});

test("includes keyboard, motion, image, and intake accessibility safeguards", async () => {
  const [page, pricing, rotator, intake, css] = await Promise.all([
    read("app/page.tsx"), read("app/components/pricing-section.tsx"),
    read("app/components/portfolio-rotator.tsx"), read("app/components/jotform-embed.tsx"),
    read("app/globals.css"),
  ]);

  assert.match(page, /className="skip-link"/);
  assert.match(pricing, /aria-pressed=/);
  assert.match(rotator, /prefers-reduced-motion: reduce/);
  assert.match(rotator, /sizes="\(max-width: 1040px\) 100vw, 44vw"/);
  assert.match(intake, /form\.jotform\.com\/\$\{formId\}/);
  assert.match(intake, /title="MarketMy\.Property new client inquiry"/);
  assert.match(intake, /window\.addEventListener\("message", resizeFrame\)/);
  assert.match(pricing, /bookingSelectionEvent/);
  assert.match(css, /:focus-visible/);
  assert.match(css, /@media\(prefers-reduced-motion:reduce\)/);
});

test("publishes complete search and route metadata", async () => {
  const [layout, team, branding, chrome, robots, sitemap, seoData, servicePage, faqPage, areaPage] = await Promise.all([
    read("app/layout.tsx"), read("app/team/page.tsx"),
    read("app/agent-branding/page.tsx"), read("app/components/site-chrome.tsx"),
    read("app/robots.ts"), read("app/sitemap.ts"), read("app/seo-data.ts"),
    read("app/components/service-page.tsx"), read("app/faq/page.tsx"),
    read("app/san-diego-real-estate-media/page.tsx"),
  ]);

  assert.match(layout, /metadataBase: new URL\("https:\/\/marketmy\.property"\)/);
  assert.match(team, /alternates: \{ canonical: "\/team" \}/);
  assert.match(branding, /alternates: \{ canonical: "\/agent-branding" \}/);
  assert.match(chrome, /© 2026 MARKETMY\.PROPERTY/);
  assert.match(chrome, /className="brand-logo"/);
  assert.match(robots, /sitemap\.xml/);
  assert.match(sitemap, /marketmy\.property\/team/);
  assert.match(sitemap, /marketmy\.property\/agent-branding/);
  assert.match(sitemap, /marketmy\.property\/services\/\$\{slug\}/);
  assert.match(sitemap, /marketmy\.property\/faq/);
  assert.match(sitemap, /marketmy\.property\/san-diego-real-estate-media/);
  assert.match(seoData, /"@type": "Service"/);
  assert.match(servicePage, /application\/ld\+json/);
  assert.match(faqPage, /"@type": "FAQPage"/);
  assert.match(areaPage, /SAN DIEGO COUNTY COVERAGE/);
  assert.match(chrome, /href="\/services"/);
  assert.match(chrome, /href="\/faq"/);
});
