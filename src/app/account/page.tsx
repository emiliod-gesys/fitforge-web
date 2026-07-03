import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { playerLevelFromXp } from "@/lib/format";
import type { UserProfile } from "@/lib/types";

export const metadata = {
  title: "Resumen",
};

export default async function AccountPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login?redirect=/account");
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .maybeSingle<UserProfile>();

  const displayName =
    profile?.display_name ??
    user.user_metadata?.display_name ??
    user.email?.split("@")[0] ??
    "Usuario";

  const level = playerLevelFromXp(profile?.total_xp ?? 0);

  return (
    <div className="space-y-6">
      <div>
        <p className="text-forge-muted">Hola, {displayName}</p>
        <p className="mt-1 text-sm text-forge-muted">
          Gestiona tu perfil y tu suscripción desde aquí.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-forge-border bg-forge-card p-5">
          <p className="text-sm text-forge-muted">Nivel</p>
          <p className="mt-1 text-2xl font-bold text-forge-orange">{level}</p>
          <p className="mt-1 text-xs text-forge-muted">
            {(profile?.total_xp ?? 0).toLocaleString("es")} XP total
          </p>
        </div>
        <div className="rounded-2xl border border-forge-border bg-forge-card p-5">
          <p className="text-sm text-forge-muted">Plan</p>
          <p className="mt-1 text-2xl font-bold">Free</p>
          <p className="mt-1 text-xs text-forge-muted">Stripe próximamente</p>
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <Link
          href="/account/profile"
          className="rounded-xl border border-forge-border bg-forge-card p-5 transition hover:border-forge-orange/50"
        >
          <p className="font-semibold">Configuración del perfil</p>
          <p className="mt-1 text-sm text-forge-muted">
            Nombre, objetivos, unidades y datos personales.
          </p>
        </Link>
        <Link
          href="/account/subscription"
          className="rounded-xl border border-forge-border bg-forge-card p-5 transition hover:border-forge-orange/50"
        >
          <p className="font-semibold">Suscripción</p>
          <p className="mt-1 text-sm text-forge-muted">
            Ver plan actual y opciones Pro / Pro+.
          </p>
        </Link>
      </div>
    </div>
  );
}
