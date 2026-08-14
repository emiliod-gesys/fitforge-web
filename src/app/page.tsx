import Link from "next/link";
import { AppScreenshotsSection } from "@/components/app-screenshots-section";
import { CatalogHighlight } from "@/components/catalog-highlight";
import { DownloadSection } from "@/components/download-section";
import { FeatureGrid } from "@/components/feature-grid";
import { Hero } from "@/components/hero";
import { LeaderboardSection } from "@/components/leaderboard-section";
import { PricingSection } from "@/components/pricing-section";
import { APP_NAME } from "@/lib/brand";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { getLocale } from "@/lib/i18n/get-locale";

export const metadata = {
  title: APP_NAME,
  description:
    "FORGEN is a mobile fitness application for Android and iOS. Sign in with Google, Apple, or email.",
};

export default async function HomePage() {
  const locale = await getLocale();
  const dict = getDictionary(locale);

  return (
    <>
      <Hero dict={dict} locale={locale} />
      <CatalogHighlight />
      <AppScreenshotsSection />
      <FeatureGrid />
      <PricingSection />
      <DownloadSection />
      <section className="border-t border-forge-border bg-forge-surface px-6 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold">{dict.cta.title}</h2>
          <p className="mt-3 text-forge-muted">{dict.cta.subtitle}</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/signup"
              className="rounded-xl bg-forge-blue px-6 py-3 font-semibold text-white shadow-glow transition hover:bg-forge-blue-dark"
            >
              {dict.cta.createAccount}
            </Link>
            <Link
              href="/download"
              className="rounded-xl border border-forge-border px-6 py-3 font-semibold text-forge-text transition hover:border-forge-blue hover:text-forge-blue"
            >
              {dict.cta.downloadApp}
            </Link>
          </div>
        </div>
      </section>
      <LeaderboardSection />
    </>
  );
}
