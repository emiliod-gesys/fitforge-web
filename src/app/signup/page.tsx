import Link from "next/link";
import { AuthFormShell } from "@/components/auth-form-shell";

export const metadata = {
  title: "Crear cuenta",
};

type Props = {
  searchParams: Promise<{ plan?: string; redirect?: string }>;
};

export default async function SignupPage({ searchParams }: Props) {
  const { plan, redirect } = await searchParams;
  const planLabel =
    plan === "pro" ? "Pro" : plan === "pro_plus" ? "Pro+" : "Free";

  return (
    <AuthFormShell
      mode="signup"
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
      redirectTo={redirect ?? "/account"}
    />
  );
}
