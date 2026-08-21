import { ServicePage } from "../../components/service-page";
import { createServiceMetadata } from "../../seo-data";

export const metadata = createServiceMetadata("real-estate-photography");

export default function RealEstatePhotographyPage() {
  return <ServicePage slug="real-estate-photography" />;
}
