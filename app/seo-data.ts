import type { Metadata } from "next";
import { business } from "./site-data";

export type ServiceSlug =
  | "real-estate-photography"
  | "real-estate-video"
  | "drone-photography"
  | "twilight-photography"
  | "3d-tours";

export type ServicePageData = {
  slug: ServiceSlug;
  shortName: string;
  title: string;
  description: string;
  eyebrow: string;
  headline: string;
  answer: string;
  price: string;
  priceAmount: number;
  unitText: string;
  deliverables: readonly string[];
  reasons: readonly string[];
  related: readonly ServiceSlug[];
};

export const serviceOrder: readonly ServiceSlug[] = [
  "real-estate-photography",
  "real-estate-video",
  "drone-photography",
  "twilight-photography",
  "3d-tours",
];

export const servicePages: Record<ServiceSlug, ServicePageData> = {
  "real-estate-photography": {
    slug: "real-estate-photography",
    shortName: "Photography",
    title: "San Diego Real Estate Photography | MarketMy.Property",
    description: "Professional San Diego real estate photography with upfront pricing, 25–30 MLS-ready images and 24-hour standard delivery.",
    eyebrow: "SAN DIEGO REAL ESTATE PHOTOGRAPHY",
    headline: "Clean, accurate photos that make the listing easy to trust.",
    answer: "Real estate photography starts at $250 for properties up to 2,500 square feet and includes 25 MLS-ready images—typically 20 interior and 5 exterior. When the property has relevant amenities, delivery may include up to 30 images.",
    price: "$250",
    priceAmount: 250,
    unitText: "properties up to 2,500 square feet",
    deliverables: ["25–30 professionally edited images", "Interior and exterior coverage", "MLS-ready branded-agent delivery", "Standard delivery within 24 hours of the completed shoot"],
    reasons: ["Natural color and clean vertical lines", "Upfront square-footage tiers", "Photos licensed to the paying listing Realtor", "Drone, twilight, floor plan and video add-ons available"],
    related: ["drone-photography", "twilight-photography", "3d-tours"],
  },
  "real-estate-video": {
    slug: "real-estate-video",
    shortName: "Video",
    title: "San Diego Real Estate Video Tours & Reels | MarketMy.Property",
    description: "San Diego property reels, real estate video tours and agent-led listing videos with branded and unbranded delivery.",
    eyebrow: "SAN DIEGO REAL ESTATE VIDEO",
    headline: "Give the property movement—and give the agent a voice.",
    answer: "Property reels start at $125 for a 15–30 second vertical video. Full property tours start at $325, while talking-head tours with an agent introduction and talking point start at $450.",
    price: "$125",
    priceAmount: 125,
    unitText: "15–30 second property reel",
    deliverables: ["15–30 second vertical property reels", "60–90 second standard property tours", "Agent-led tours up to 2.5 minutes", "Branded and unbranded video delivery"],
    reasons: ["Subtitles included on talking-head tours", "One major revision plus one minor-tweak pass", "Video draft within 48 hours", "AI-enhanced editing available as an upgrade"],
    related: ["real-estate-photography", "drone-photography", "twilight-photography"],
  },
  "drone-photography": {
    slug: "drone-photography",
    shortName: "Drone",
    title: "San Diego Real Estate Drone Photography | MarketMy.Property",
    description: "FAA-compliant San Diego real estate drone photography with up to 10 aerial images and clear upfront pricing.",
    eyebrow: "SAN DIEGO REAL ESTATE DRONE MEDIA",
    headline: "Show the lot, the setting and the location in one frame.",
    answer: "Standalone drone photography is $150 for up to 10 aerial photos. Select video packages may include exterior drone clips, and raw-capture bookings can add drone work for $100.",
    price: "$150",
    priceAmount: 150,
    unitText: "up to 10 aerial photographs",
    deliverables: ["Up to 10 edited aerial photographs", "Exterior, lot and neighborhood context", "MLS-ready image delivery", "Exterior video clips when included in a qualifying package"],
    reasons: ["FAA Part 107 certified pilot on the team", "Flight decisions based on legal airspace, weather and property conditions", "Straightforward standalone pricing", "Works naturally with photo, twilight and video coverage"],
    related: ["real-estate-photography", "real-estate-video", "twilight-photography"],
  },
  "twilight-photography": {
    slug: "twilight-photography",
    shortName: "Twilight",
    title: "San Diego Twilight Real Estate Photography | MarketMy.Property",
    description: "Actual and digital twilight real estate photography in San Diego with upfront pricing and planned on-site coverage.",
    eyebrow: "SAN DIEGO TWILIGHT PHOTOGRAPHY",
    headline: "Make the exterior feel like the moment buyers remember.",
    answer: "Actual on-site twilight coverage is $300 for up to 10 images. Digital twilight conversions are $15 per image and can add sunset impact without a separate evening appointment.",
    price: "$300",
    priceAmount: 300,
    unitText: "actual twilight coverage up to 10 images",
    deliverables: ["Up to 10 actual twilight photographs", "Exterior lighting and sunset-window coverage", "Digital twilight conversions at $15 per image", "MLS-ready final files"],
    reasons: ["Actual twilight is planned around light and weather", "Digital twilight is the budget-friendly alternative", "Luxury Campaigns include actual twilight coverage", "Weather-driven twilight changes are rescheduled without a fee"],
    related: ["real-estate-photography", "drone-photography", "real-estate-video"],
  },
  "3d-tours": {
    slug: "3d-tours",
    shortName: "3D Tours",
    title: "Matterport, Zillow 3D & CubiCasa San Diego | MarketMy.Property",
    description: "Matterport or Zillow 3D Home tours with a CubiCasa floor plan for San Diego listings, starting at $75.",
    eyebrow: "SAN DIEGO 3D TOURS + FLOOR PLANS",
    headline: "Let buyers understand the layout before they arrive.",
    answer: "A standalone Matterport or Zillow 3D tour is $75 and includes a CubiCasa floor plan for properties up to 2,500 square feet. Matterport hosting is $5 per month à la carte and included in qualifying packages.",
    price: "$75",
    priceAmount: 75,
    unitText: "3D tour plus CubiCasa floor plan",
    deliverables: ["Matterport or Zillow 3D Home tour", "CubiCasa floor plan included", "Shareable tour link", "Matterport hosting included in qualifying packages"],
    reasons: ["Zillow photographer and Showcase certified", "One visit can capture the tour and floor plan", "Clear standalone and package pricing", "Properties above 2,500 square feet are custom quoted"],
    related: ["real-estate-photography", "real-estate-video", "drone-photography"],
  },
};

export const faqItems = [
  { question: "How much does real estate photography cost in San Diego?", answer: "Photography starts at $250 for a property up to 2,500 square feet. Properties from 2,501–3,500 square feet are $300, properties from 3,501–4,500 square feet are $350, and larger properties receive custom pricing." },
  { question: "How many listing photos are included?", answer: "Standard photography includes 25 images—typically 20 interior and 5 exterior. When a property has relevant amenities, delivery may include up to 30 total images." },
  { question: "When will my media be delivered?", answer: "Photos are delivered within 24 hours from the end of the shoot. Video is delivered for review within 48 hours and completed within 72 hours when feedback is received on time." },
  { question: "Can I book a same-day or next-day shoot?", answer: "Standard notice is 48 hours. Next-day and same-day appointments are availability-only for non-Luxury packages and carry a $75–$150 rush fee depending on scope. Luxury Campaigns are planned and are not available as rush bookings." },
  { question: "Where does MarketMy.Property travel?", answer: "Travel throughout San Diego County is included. Riverside County bookings are available with a flat $25 travel fee." },
  { question: "Do you offer Matterport, Zillow 3D and floor plans?", answer: "Yes. A Matterport or Zillow 3D tour with a CubiCasa floor plan starts at $75 for properties up to 2,500 square feet. Matterport hosting is $5 per month à la carte and is included in qualifying packages." },
  { question: "Are you certified for Zillow and drone work?", answer: "MarketMy.Property is a Zillow photographer and Showcase certified media provider. An FAA Part 107 certified pilot is available on the team for legal, weather-permitting drone operations." },
  { question: "What is the difference between actual and digital twilight?", answer: "Actual twilight is photographed on location during the evening light window and costs $300 for up to 10 images. Digital twilight converts a daytime exterior into a sunset-style image for $15 per image." },
  { question: "Who may use the delivered listing media?", answer: "The paying Realtor receives a broad license for the listing and their own marketing. Another agent, including a buyer's agent, may not reuse the media for self-promotion without written permission and a $50 additional-agent license." },
  { question: "How do payments work?", answer: "À-la-carte work is paid in full to book. Packages require 50% down, while Luxury Campaigns reserve with a $300 deposit. Remaining balances are due before final delivery." },
] as const;

export function serviceUrl(slug: ServiceSlug) {
  return `/services/${slug}`;
}

export function createServiceMetadata(slug: ServiceSlug): Metadata {
  const service = servicePages[slug];
  const url = serviceUrl(slug);
  return {
    title: service.title,
    description: service.description,
    alternates: { canonical: url },
    openGraph: { title: service.title, description: service.description, url, images: [] },
    twitter: { title: service.title, description: service.description, images: [] },
  };
}

export function serviceStructuredData(service: ServicePageData) {
  const pageUrl = `${business.siteUrl}${serviceUrl(service.slug)}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: service.shortName,
        serviceType: service.eyebrow,
        description: service.description,
        url: pageUrl,
        provider: { "@id": `${business.siteUrl}/#business` },
        areaServed: ["San Diego County, California", "Riverside County, California"],
        offers: { "@type": "Offer", priceCurrency: "USD", price: service.priceAmount, description: service.unitText, availability: "https://schema.org/InStock", url: `${business.siteUrl}/#book` },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: business.siteUrl },
          { "@type": "ListItem", position: 2, name: "Services", item: `${business.siteUrl}/services` },
          { "@type": "ListItem", position: 3, name: service.shortName, item: pageUrl },
        ],
      },
    ],
  };
}
