import Link from "next/link";
import { AuthFormShell } from "@/components/auth-form-shell";

export const metadata = {
  title: "Iniciar sesión",
};

type Props = {
  searchParams: Promise<{ redirect?: string }>;
};

export default async function LoginPage({ searchParams }: Props) {
  const { redirect } = await searchParams;

  return (
    <AuthFormShell
      mode="login"
      title="Iniciar sesión"
      subtitle="Usa el mismo email y contraseña que en la app móvil."
      alternate={
        <>
          ¿No tienes cuenta?{" "}
          <Link href="/signup" className="text-forge-orange hover:underline">
            Regístrate gratis
          </Link>
        </>
      }
      primaryCta="Iniciar sesión"
      redirectTo={redirect ?? "/account"}
    />
  );
}
