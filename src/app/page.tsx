"use client";

import Link from "next/link";
import { AppScreenshotsSection } from "@/components/app-screenshots-section";
import { DownloadSection } from "@/components/download-section";
import { FeatureGrid } from "@/components/feature-grid";
import { Hero } from "@/components/hero";
import { LeaderboardSection } from "@/components/leaderboard-section";
import { PricingSection } from "@/components/pricing-section";
import { useDictionary } from "@/components/locale-provider";

export default function HomePage() {
  const dict = useDictionary();

  return (
    <>
      <Hero />
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
