import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-20 pt-16 md:pb-28 md:pt-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,102,34,0.18)_0%,_transparent_55%)]" />
      <div className="relative mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="mb-4 inline-flex rounded-full border border-forge-orange/30 bg-forge-orange/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-forge-orange">
            Entrena · Progresa · Compite
          </p>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
            Forja tu mejor versión con{" "}
            <span className="text-forge-orange">FitForge</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-forge-muted md:text-xl">
            Rutinas inteligentes, coach con IA, mapa de recuperación muscular y comunidad
            para mantenerte consistente.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/download"
              className="rounded-xl bg-forge-orange px-6 py-3.5 font-semibold text-white shadow-glow transition hover:bg-forge-orange-dark"
            >
              Descargar app
            </Link>
            <Link
              href="/signup"
              className="rounded-xl border border-forge-border bg-forge-card px-6 py-3.5 font-semibold transition hover:border-forge-orange/50"
            >
              Crear cuenta web
            </Link>
          </div>
        </div>
        <div className="mt-16 grid gap-4 sm:grid-cols-3">
          {[
            { value: "200+", label: "Ejercicios" },
            { value: "IA", label: "Coach personal" },
            { value: "XP", label: "Sistema de niveles" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-forge-border bg-forge-card/80 p-6 backdrop-blur"
            >
              <p className="text-3xl font-extrabold text-forge-orange">{stat.value}</p>
              <p className="mt-1 text-sm text-forge-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
