"use client";

import Link from "next/link";
import { useDictionary } from "@/components/locale-provider";

export function PricingSection() {
  const dict = useDictionary();
  const plans = [
    { id: "free" as const, ...dict.pricing.plans.free, soon: false },
    { id: "pro" as const, ...dict.pricing.plans.pro, soon: true },
    { id: "pro_plus" as const, ...dict.pricing.plans.proPlus, soon: true },
  ];

  return (
    <section id="pricing" className="border-t border-forge-border px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold md:text-4xl">
          {dict.pricing.title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-forge-muted">
          {dict.pricing.subtitle}
        </p>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.id}
              className="relative flex flex-col rounded-2xl border border-forge-border bg-forge-card p-6"
            >
              {plan.soon ? (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-forge-gold px-3 py-0.5 text-xs font-bold text-forge-black">
                  {dict.pricing.soon}
                </span>
              ) : null}
              <h3 className="text-xl font-bold">{plan.name}</h3>
              <p className="mt-2 text-sm text-forge-muted">{plan.description}</p>
              {plan.soon ? (
                <p className="mt-6">
                  <span className="text-xs font-semibold uppercase tracking-wide text-forge-muted">
                    {dict.pricing.reference}
                  </span>
                  <span className="mt-1 block text-2xl font-bold text-forge-text">
                    {plan.price}
                    <span className="text-base font-medium text-forge-muted">
                      {" "}
                      {plan.period}
                    </span>
                  </span>
                </p>
              ) : (
                <p className="mt-6">
                  <span className="text-3xl font-extrabold">{plan.price}</span>
                  <span className="text-forge-muted"> {plan.period}</span>
                </p>
              )}
              <ul className="mt-6 flex-1 space-y-3 text-sm text-forge-muted">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-2">
                    <span className="text-forge-blue">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              {plan.soon ? (
                <p className="mt-8 rounded-xl border border-forge-border py-3 text-center text-sm font-semibold text-forge-muted">
                  {plan.cta}
                </p>
              ) : (
                <Link
                  href="/signup"
                  className="mt-8 block rounded-xl bg-forge-blue py-3 text-center text-sm font-semibold text-white transition hover:bg-forge-blue-dark"
                >
                  {plan.cta}
                </Link>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
