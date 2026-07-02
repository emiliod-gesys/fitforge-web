import Link from "next/link";
import { PLANS } from "@/lib/plans";

export function PricingSection() {
  return (
    <section id="pricing" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold md:text-4xl">Elige tu plan</h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-forge-muted">
          Empieza gratis. Sube a Pro o Pro+ cuando quieras más potencia.
        </p>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {PLANS.map((plan) => (
            <article
              key={plan.id}
              className={`relative flex flex-col rounded-2xl border p-6 ${
                plan.highlighted
                  ? "border-forge-orange bg-gradient-to-b from-forge-orange/10 to-forge-card shadow-glow"
                  : "border-forge-border bg-forge-card"
              }`}
            >
              {plan.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-forge-orange px-3 py-0.5 text-xs font-bold text-white">
                  Popular
                </span>
              )}
              <h3 className="text-xl font-bold">{plan.name}</h3>
              <p className="mt-2 text-sm text-forge-muted">{plan.description}</p>
              <p className="mt-6">
                <span className="text-3xl font-extrabold">{plan.price}</span>
                <span className="text-forge-muted"> {plan.period}</span>
              </p>
              <ul className="mt-6 flex-1 space-y-3 text-sm text-forge-muted">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-2">
                    <span className="text-forge-orange">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={plan.id === "free" ? "/signup" : "/signup?plan=" + plan.id}
                className={`mt-8 block rounded-xl py-3 text-center text-sm font-semibold transition ${
                  plan.highlighted
                    ? "bg-forge-orange text-white hover:bg-forge-orange-dark"
                    : "border border-forge-border hover:border-forge-orange hover:text-forge-orange"
                }`}
              >
                {plan.cta}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
