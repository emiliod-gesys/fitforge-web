import Link from "next/link";
import { redirect } from "next/navigation";
import { SignOutButton } from "@/components/sign-out-button";
import { PLANS } from "@/lib/plans";
import { createClient } from "@/lib/supabase/server";

export const metadata = {
  title: "Mi suscripción",
};

type Profile = {
  display_name: string | null;
  email: string | null;
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
    .select("display_name, email")
    .eq("id", user.id)
    .maybeSingle<Profile>();

  const displayName =
    profile?.display_name ??
    user.user_metadata?.display_name ??
    user.email?.split("@")[0] ??
    "Usuario";

  return (
    <div className="mx-auto max-w-2xl px-6 py-16">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Mi cuenta</h1>
          <p className="mt-2 text-forge-muted">
            Hola, {displayName}. Gestiona tu plan Free, Pro o Pro+.
          </p>
        </div>
        <SignOutButton />
      </div>

      <div className="mt-10 rounded-2xl border border-forge-border bg-forge-card p-6">
        <p className="text-sm font-medium text-forge-muted">Sesión activa</p>
        <p className="mt-1 text-lg font-semibold">{user.email}</p>
        <p className="mt-4 text-sm text-forge-muted">
          Plan actual: <span className="font-medium text-forge-text">Free</span>{" "}
          (Stripe en la siguiente fase)
        </p>
      </div>

      <div className="mt-10">
        <h2 className="text-lg font-semibold">Planes disponibles</h2>
        <ul className="mt-4 space-y-3">
          {PLANS.map((plan) => (
            <li
              key={plan.id}
              className="flex items-center justify-between rounded-xl border border-forge-border px-4 py-3 text-sm"
            >
              <span className="font-medium">{plan.name}</span>
              <span className="text-forge-muted">{plan.price}</span>
            </li>
          ))}
        </ul>
        <Link
          href="/#pricing"
          className="mt-6 inline-block text-sm text-forge-orange hover:underline"
        >
          Ver detalles de planes →
        </Link>
      </div>
    </div>
  );
}
