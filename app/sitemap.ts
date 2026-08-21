import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://marketmy.property", changeFrequency: "monthly", priority: 1 },
    { url: "https://marketmy.property/team", changeFrequency: "monthly", priority: 0.6 },
    { url: "https://marketmy.property/agent-branding", changeFrequency: "monthly", priority: 0.7 },
  ];
}
