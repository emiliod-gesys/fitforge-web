import { LegalPage } from "@/components/legal-page";

export const metadata = {
  title: "Política de privacidad",
  description:
    "Cómo FORGEN trata datos personales en la app y en forgen.app.",
};

export default function PrivacyPage() {
  return <LegalPage doc="privacy" />;
}
