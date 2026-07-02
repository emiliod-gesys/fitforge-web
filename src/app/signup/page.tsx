import Link from "next/link";
import { AuthPlaceholder } from "@/components/auth-placeholder";

export const metadata = {
  title: "Crear cuenta",
};

type Props = {
  searchParams: Promise<{ plan?: string }>;
};

export default async function SignupPage({ searchParams }: Props) {
  const { plan } = await searchParams;
  const planLabel =
    plan === "pro" ? "Pro" : plan === "pro_plus" ? "Pro+" : "Free";

  return (
    <AuthPlaceholder
      title="Crear cuenta"
      subtitle={`Registro para plan ${planLabel}. La misma cuenta funcionará en web y app.`}
      alternate={
        <>
          ¿Ya tienes cuenta?{" "}
          <Link href="/login" className="text-forge-orange hover:underline">
            Inicia sesión
          </Link>
        </>
      }
      primaryCta="Crear cuenta"
      note="Próximo paso: Supabase signUp + verificación de email si la activas."
    />
  );
}
