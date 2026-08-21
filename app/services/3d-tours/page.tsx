import { ServicePage } from "../../components/service-page";
import { createServiceMetadata } from "../../seo-data";

export const metadata = createServiceMetadata("3d-tours");

export default function ThreeDToursPage() {
  return <ServicePage slug="3d-tours" />;
}
