"use client";

import Link from "next/link";

type Props = {
  title: string;
  subtitle: string;
  alternate: React.ReactNode;
  primaryCta: string;
  note: string;
};

export function AuthPlaceholder({ title, subtitle, alternate, primaryCta, note }: Props) {
  return (
    <div className="mx-auto max-w-md px-6 py-16">
      <Link href="/" className="text-sm text-forge-muted hover:text-forge-orange">
        ← Inicio
      </Link>
      <h1 className="mt-6 text-3xl font-bold">{title}</h1>
      <p className="mt-2 text-forge-muted">{subtitle}</p>

      <form className="mt-8 space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label className="mb-1.5 block text-sm font-medium" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            className="w-full rounded-xl border border-forge-border bg-forge-card px-4 py-3 outline-none ring-forge-orange focus:ring-2"
            placeholder="tu@email.com"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium" htmlFor="password">
            Contraseña
          </label>
          <input
            id="password"
            type="password"
            autoComplete="current-password"
            className="w-full rounded-xl border border-forge-border bg-forge-card px-4 py-3 outline-none ring-forge-orange focus:ring-2"
          />
        </div>
        <button
          type="submit"
          className="w-full rounded-xl bg-forge-orange py-3 font-semibold text-white hover:bg-forge-orange-dark"
        >
          {primaryCta}
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-forge-muted">{alternate}</p>
      <p className="mt-8 rounded-lg border border-dashed border-forge-border bg-forge-surface p-4 text-xs text-forge-muted">
        {note}
      </p>
    </div>
  );
}
