import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const serviceUrls = [
    "real-estate-photography",
    "real-estate-video",
    "drone-photography",
    "twilight-photography",
    "3d-tours",
  ].map((slug) => ({ url: `https://marketmy.property/services/${slug}`, changeFrequency: "monthly" as const, priority: 0.85 }));

  return [
    { url: "https://marketmy.property", changeFrequency: "monthly", priority: 1 },
    { url: "https://marketmy.property/services", changeFrequency: "monthly", priority: 0.9 },
    ...serviceUrls,
    { url: "https://marketmy.property/faq", changeFrequency: "monthly", priority: 0.8 },
    { url: "https://marketmy.property/san-diego-real-estate-media", changeFrequency: "monthly", priority: 0.9 },
    { url: "https://marketmy.property/team", changeFrequency: "monthly", priority: 0.6 },
    { url: "https://marketmy.property/agent-branding", changeFrequency: "monthly", priority: 0.7 },
  ];
}
