import Link from "next/link";
import { AuthPlaceholder } from "@/components/auth-placeholder";

export const metadata = {
  title: "Iniciar sesión",
};

export default function LoginPage() {
  return (
    <AuthPlaceholder
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
      note="Próximo paso: conectar Supabase Auth (mismo proyecto que la app Flutter)."
    />
  );
}
