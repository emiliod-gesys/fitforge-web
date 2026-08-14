import { LegalPage } from "@/components/legal-page";

export const metadata = {
  title: "Términos del servicio",
  description: "Condiciones de uso de la app y el sitio web FORGEN.",
};

export default function TermsPage() {
  return <LegalPage doc="terms" />;
}
