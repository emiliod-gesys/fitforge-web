"use client";

import Link from "next/link";
import { useDictionary } from "@/components/locale-provider";

export function DownloadSection() {
  const dict = useDictionary();
  const playStore =
    process.env.NEXT_PUBLIC_PLAY_STORE_URL ??
    "https://play.google.com/store/apps/details?id=io.fitforge.fitforge";
  const appStore = process.env.NEXT_PUBLIC_APP_STORE_URL ?? "#";

  return (
    <section id="download" className="border-t border-forge-border bg-forge-navy/40 px-6 py-20">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold md:text-4xl">{dict.download.title}</h2>
        <p className="mt-4 text-forge-muted">{dict.download.subtitle}</p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href={playStore}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-w-[200px] items-center justify-center gap-2 rounded-xl bg-forge-blue px-6 py-4 font-semibold text-white shadow-glow transition hover:bg-forge-blue-dark"
          >
            <span aria-hidden>▶</span> Google Play
          </a>
          <a
            href={appStore}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-w-[200px] items-center justify-center gap-2 rounded-xl border border-forge-border bg-forge-card px-6 py-4 font-semibold text-forge-muted transition hover:border-forge-grey"
          >
            <span aria-hidden>🍎</span> {dict.download.appStoreSoon}
          </a>
        </div>
        <p className="mt-6 text-sm text-forge-muted">
          {dict.download.hasAccount}{" "}
          <Link href="/login" className="text-forge-blue hover:underline">
            {dict.download.signInLink}
          </Link>{" "}
          {dict.download.sameEmail}
        </p>
      </div>
    </section>
  );
}
