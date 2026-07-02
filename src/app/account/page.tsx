import Link from "next/link";
import { AuthPlaceholder } from "@/components/auth-placeholder";
import { PLANS } from "@/lib/plans";

export const metadata = {
  title: "Mi suscripción",
};

export default function AccountPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-16">
      <h1 className="text-3xl font-bold">Mi suscripción</h1>
      <p className="mt-2 text-forge-muted">
        Gestiona tu plan Free, Pro o Pro+. (Stripe + Supabase en la siguiente fase.)
      </p>

      <div className="mt-10 rounded-2xl border border-forge-border bg-forge-card p-6">
        <p className="text-sm font-medium text-forge-muted">Plan actual</p>
        <p className="mt-1 text-2xl font-bold">Free</p>
        <p className="mt-4 text-sm text-forge-muted">
          Inicia sesión para ver y cambiar tu plan.
        </p>
        <Link
          href="/login"
          className="mt-6 inline-block rounded-xl bg-forge-orange px-5 py-2.5 text-sm font-semibold text-white"
        >
          Iniciar sesión
        </Link>
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
      </div>
    </div>
  );
}
