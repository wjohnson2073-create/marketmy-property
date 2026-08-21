import { ServicePage } from "../../components/service-page";
import { createServiceMetadata } from "../../seo-data";

export const metadata = createServiceMetadata("real-estate-video");

export default function RealEstateVideoPage() {
  return <ServicePage slug="real-estate-video" />;
}
