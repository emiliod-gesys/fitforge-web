import Link from "next/link";
import { Logo } from "./logo";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-24 pt-14 md:pb-32 md:pt-20">
      <div
        className="pointer-events-none absolute inset-0 animate-atmosphere bg-[radial-gradient(ellipse_at_top,_rgba(50,89,149,0.28)_0%,_transparent_58%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-forge-navy/50 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-16 bottom-0 h-64 w-64 rounded-full bg-forge-blue/20 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto flex max-w-5xl flex-col items-center text-center">
        <div className="animate-fade-in">
          <Logo className="h-48 w-auto max-w-[min(100%,22rem)] md:h-64 md:max-w-md" />
        </div>

        <h1 className="mt-10 animate-fade-up text-4xl font-extrabold leading-[1.1] tracking-tight md:text-6xl [animation-delay:120ms]">
          Forja tu mejor versión
        </h1>

        <p className="mt-5 max-w-xl animate-fade-up text-lg text-forge-muted md:text-xl [animation-delay:240ms]">
          Rutinas inteligentes, coach con IA y comunidad para mantenerte
          consistente — todo en Forgen.
        </p>

        <div className="mt-10 flex animate-fade-up flex-wrap items-center justify-center gap-4 [animation-delay:360ms]">
          <Link
            href="/download"
            className="rounded-xl bg-forge-blue px-7 py-3.5 font-semibold text-white shadow-glow transition hover:bg-forge-blue-dark"
          >
            Descargar app
          </Link>
          <Link
            href="/signup"
            className="rounded-xl border border-forge-border bg-forge-charcoal/60 px-7 py-3.5 font-semibold text-forge-text transition hover:border-forge-blue/60"
          >
            Crear cuenta web
          </Link>
        </div>
      </div>
    </section>
  );
}
