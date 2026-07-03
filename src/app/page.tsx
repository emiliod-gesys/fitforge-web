import Link from "next/link";
import { AppScreenshotsSection } from "@/components/app-screenshots-section";
import { DownloadSection } from "@/components/download-section";
import { FeatureGrid } from "@/components/feature-grid";
import { Hero } from "@/components/hero";
import { LeaderboardSection } from "@/components/leaderboard-section";
import { PricingSection } from "@/components/pricing-section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AppScreenshotsSection />
      <FeatureGrid />
      <LeaderboardSection />
      <PricingSection />
      <DownloadSection />
      <section className="border-t border-forge-border bg-forge-surface px-6 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold">¿Listo para empezar?</h2>
          <p className="mt-3 text-forge-muted">
            Crea tu cuenta gratis y sincroniza tu progreso en todos tus dispositivos.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/signup"
              className="rounded-xl bg-forge-orange px-6 py-3 font-semibold text-white shadow-glow transition hover:bg-forge-orange-dark"
            >
              Crear cuenta
            </Link>
            <Link
              href="/download"
              className="rounded-xl border border-forge-border px-6 py-3 font-semibold text-forge-text transition hover:border-forge-orange hover:text-forge-orange"
            >
              Descargar app
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
