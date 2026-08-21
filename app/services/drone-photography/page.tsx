import { ServicePage } from "../../components/service-page";
import { createServiceMetadata } from "../../seo-data";

export const metadata = createServiceMetadata("drone-photography");

export default function DronePhotographyPage() {
  return <ServicePage slug="drone-photography" />;
}
