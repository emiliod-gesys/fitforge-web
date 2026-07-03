import Link from "next/link";
import { PLANS } from "@/lib/plans";

export const metadata = {
  title: "Suscripción",
};

export default function AccountSubscriptionPage() {
  const currentPlanId = "free";

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-bold">Tu suscripción</h2>
        <p className="mt-2 text-sm text-forge-muted">
          Administra tu plan FitForge. Los pagos con Stripe llegarán en la siguiente fase.
        </p>
      </div>

      <div className="rounded-2xl border border-forge-orange/40 bg-forge-orange/10 p-6">
        <p className="text-sm font-medium text-forge-muted">Plan actual</p>
        <p className="mt-1 text-2xl font-bold">
          {PLANS.find((p) => p.id === currentPlanId)?.name ?? "Free"}
        </p>
        <p className="mt-2 text-sm text-forge-muted">
          Acceso a entrenos, progreso y comunidad. Sin costo.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold">Planes disponibles</h3>
        <ul className="mt-4 space-y-3">
          {PLANS.map((plan) => {
            const isCurrent = plan.id === currentPlanId;

            return (
              <li
                key={plan.id}
                className={`rounded-xl border px-4 py-4 ${
                  isCurrent
                    ? "border-forge-orange/50 bg-forge-orange/5"
                    : "border-forge-border bg-forge-card"
                }`}
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="font-semibold">
                      {plan.name}
                      {isCurrent && (
                        <span className="ml-2 text-xs font-normal text-forge-orange">
                          (actual)
                        </span>
                      )}
                    </p>
                    <p className="mt-1 text-sm text-forge-muted">{plan.description}</p>
                  </div>
                  <p className="shrink-0 font-bold text-forge-orange">
                    {plan.price}
                    <span className="text-sm font-normal text-forge-muted">
                      {" "}
                      {plan.period}
                    </span>
                  </p>
                </div>
                {!isCurrent && plan.id !== "free" && (
                  <button
                    type="button"
                    disabled
                    className="mt-4 rounded-lg border border-forge-border px-4 py-2 text-sm font-medium text-forge-muted"
                    title="Próximamente con Stripe"
                  >
                    {plan.cta} — próximamente
                  </button>
                )}
              </li>
            );
          })}
        </ul>
      </div>

      <Link
        href="/#pricing"
        className="inline-block text-sm text-forge-orange hover:underline"
      >
        Comparar planes en la landing →
      </Link>
    </div>
  );
}
