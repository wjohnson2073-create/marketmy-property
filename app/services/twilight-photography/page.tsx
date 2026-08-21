import { ServicePage } from "../../components/service-page";
import { createServiceMetadata } from "../../seo-data";

export const metadata = createServiceMetadata("twilight-photography");

export default function TwilightPhotographyPage() {
  return <ServicePage slug="twilight-photography" />;
}
