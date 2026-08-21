import type { Metadata, Viewport } from "next";
import "./globals.css";

const title = "MarketMy.Property | Real Estate Media Priced Upfront";
const description = "San Diego real estate photography, drone, video, 3D tours and listing media with straightforward package pricing.";

export const metadata: Metadata = {
  metadataBase: new URL("https://marketmy.property"),
  title,
  description,
  alternates: { canonical: "/" },
  icons: { icon: "/marketmy-logo.webp", shortcut: "/marketmy-logo.webp" },
  openGraph: { title, description, type: "website", url: "/", images: [{ url: "/og.png", width: 1200, height: 630, alt: "MarketMy.Property — Real Estate Media. Priced Upfront." }] },
  twitter: { card: "summary_large_image", title, description, images: ["/og.png"] },
};

export const viewport: Viewport = { colorScheme: "dark", themeColor: "#05070a" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
