import { LegalPage } from "@/components/legal-page";

export const metadata = {
  title: "Eliminar cuenta",
  description:
    "Cómo solicitar el borrado de tu cuenta y datos en la app FORGEN.",
};

export default function DeleteAccountPage() {
  return <LegalPage doc="delete-account" />;
}
