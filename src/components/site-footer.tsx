"use client";

import Link from "next/link";
import { Logo } from "./logo";
import { useDictionary } from "@/components/locale-provider";

export function SiteFooter() {
  const dict = useDictionary();

  return (
    <footer className="border-t border-forge-border bg-forge-surface px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <div>
          <Logo className="h-8 w-auto" />
          <p className="mt-2 max-w-xs text-sm text-forge-muted">
            {dict.footer.tagline}
          </p>
        </div>
        <div className="flex gap-12 text-sm">
          <div>
            <p className="font-semibold text-forge-text">{dict.footer.product}</p>
            <ul className="mt-3 space-y-2 text-forge-muted">
              <li>
                <Link href="/download" className="hover:text-forge-blue">
                  {dict.footer.download}
                </Link>
              </li>
              <li>
                <Link href="/#pricing" className="hover:text-forge-blue">
                  {dict.footer.pricing}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-forge-text">{dict.footer.account}</p>
            <ul className="mt-3 space-y-2 text-forge-muted">
              <li>
                <Link href="/login" className="hover:text-forge-blue">
                  {dict.footer.signIn}
                </Link>
              </li>
              <li>
                <Link href="/signup" className="hover:text-forge-blue">
                  {dict.footer.signUp}
                </Link>
              </li>
              <li>
                <Link href="/account" className="hover:text-forge-blue">
                  {dict.footer.subscription}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-forge-text">{dict.footer.legal}</p>
            <ul className="mt-3 space-y-2 text-forge-muted">
              <li>
                <Link href="/privacy" className="hover:text-forge-blue">
                  {dict.footer.privacy}
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-forge-blue">
                  {dict.footer.terms}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-6xl text-center text-xs text-forge-muted">
        © {new Date().getFullYear()} Forgen. {dict.footer.rights}
      </p>
    </footer>
  );
}
