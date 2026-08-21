// Webmaster editing guide:
// Update prices, package inclusions, team members, and contact details here.
// Layout and interaction code lives in app/components; visual tokens live in globals.css.

export const business = {
  name: "MarketMy.Property",
  email: "info@marketmy.property",
  brandingEmail: "Mike@marketmy.property",
  instagramLabel: "@marketmy.property",
  instagramUrl: "https://instagram.com/marketmy.property",
  siteUrl: "https://marketmy.property",
} as const;

export const bookingSelectionEvent = "marketmy:package-selected";

export type Package = {
  name: string;
  price: string;
  amount: number;
  tag: string;
  description: string;
  features: readonly string[];
  featured?: boolean;
  luxury?: boolean;
};

export const packages: readonly Package[] = [
  {
    name: "Listing Essentials",
    price: "$425",
    amount: 425,
    tag: "THE CLEAN START",
    description: "Everything a standard listing needs to launch professionally.",
    features: ["25–30 listing photos", "Up to 10 drone photos", "Matterport or Zillow 3D", "CubiCasa floor plan", "Matterport hosting if selected", "Single-sided listing flyer"],
  },
  {
    name: "Listing Social",
    price: "$550",
    amount: 550,
    tag: "MOST POPULAR",
    description: "The essential listing package, built to move on social.",
    features: ["Everything in Essentials", "15–30 second property reel", "2 digital twilight images", "Vertical social delivery", "AI reel upgrade available +$75"],
    featured: true,
  },
  {
    name: "Complete Listing",
    price: "$795",
    amount: 795,
    tag: "FULL PROPERTY STORY",
    description: "A complete photo, video and 3D launch for the listing.",
    features: ["Everything in Essentials", "60–90 second property tour", "Separate 15-second vertical reel", "2 digital twilight images", "Branded + unbranded videos", "Single-sided listing flyer"],
  },
  {
    name: "Agent-Led Listing",
    price: "$925",
    amount: 925,
    tag: "PUT THE AGENT ON CAMERA",
    description: "A polished agent-led story with the listing at the center.",
    features: ["Everything in Essentials", "1–2.5 minute talking-head tour", "Intro + one talking point", "Light scripting and coaching", "Subtitles included", "Separate 15-second reel", "Branded + unbranded videos"],
  },
  {
    name: "Luxury Campaign",
    price: "$1,495",
    amount: 1495,
    tag: "FROM",
    description: "High-touch coverage for a listing that needs the full campaign.",
    features: ["40–45 premium photos", "Up to 10 drone photos", "Actual twilight coverage", "1.5–2.5 minute luxury tour", "Separate property reel", "Matterport or Zillow 3D + floor plan", "Flyer format of your choice", "AI content by custom quote"],
    luxury: true,
  },
] as const;

export const alaCarte = [
  { group: "PHOTOGRAPHY", items: [["Photos up to 2,500 sf", "$250"], ["Photos 2,501–3,500 sf", "$300"], ["Photos 3,501–4,500 sf", "$350"], ["Drone — up to 10 photos", "$150"], ["Actual twilight — up to 10", "$300"], ["Digital twilight", "$15 / image"]] },
  { group: "3D + FLOOR PLANS", items: [["Matterport or Zillow 3D + CubiCasa", "$75"], ["Matterport hosting", "$5 / month"], ["Above 2,500 sf", "Custom"]] },
  { group: "VIDEO", items: [["15–30 sec property reel", "$125"], ["AI-enhanced property reel", "$200"], ["Regular property tour", "$325"], ["Talking-head property tour", "$450"], ["Talking-head tour + 15-sec reel", "$500"], ["Luxury property tour", "$895"]] },
  { group: "DESIGN + EXTRAS", items: [["Single-sided flyer", "$10"], ["Double-sided flyer", "$15"], ["Luxury magazine design", "$70"], ["Same-day rush", "+$75–$150"], ["Additional Realtor license", "$50"]] },
] as const;

export const portfolio = [
  { src: "/media/exterior.jpg", label: "EXTERIOR", number: "01", alt: "Temporary portfolio preview of a modern home exterior" },
  { src: "/media/living-room.jpg", label: "INTERIOR", number: "02", alt: "Temporary portfolio preview of a modern living room" },
  { src: "/media/kitchen.jpg", label: "DETAIL", number: "03", alt: "Temporary portfolio preview of a modern kitchen" },
] as const;

export const team = [
  { initial: "W", name: "WES", role: "OWNER / LEAD PHOTOGRAPHER", bio: "The eye behind the photos and the person accountable for the final result." },
  { initial: "D", name: "DRONE PILOT", role: "FAA PART 107 / AERIAL MEDIA", bio: "Licensed flight operations when the property, weather and airspace allow." },
  { initial: "V", name: "VIDEO TEAM", role: "TOURS / REELS / PRODUCTION", bio: "The people keeping the motion side as sharp as the stills." },
] as const;
