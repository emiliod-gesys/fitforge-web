import Link from "next/link";
import { LanguageSwitcher } from "./language-switcher";
import { Logo } from "./logo";
import { SignOutButton } from "./sign-out-button";
import { createClient } from "@/lib/supabase/server";
import { isSupabaseConfigured } from "@/lib/supabase/env";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { getLocale } from "@/lib/i18n/get-locale";
import type { User } from "@supabase/supabase-js";

export async function SiteHeader() {
  let user: User | null = null;
  const locale = await getLocale();
  const dict = getDictionary(locale);

  if (isSupabaseConfigured()) {
    const supabase = await createClient();
    const {
      data: { user: authUser },
    } = await supabase.auth.getUser();
    user = authUser;
  }

  const nav = [
    { href: "/#app", label: dict.nav.app },
    { href: "/#features", label: dict.nav.features },
    { href: "/#pricing", label: dict.nav.pricing },
    { href: "/download", label: dict.nav.download },
    { href: "/#leaderboards", label: dict.nav.rankings },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-forge-border/80 bg-forge-black/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center">
          <Logo className="h-9 w-auto" />
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-forge-muted transition hover:text-forge-text"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          {user ? (
            <>
              <Link
                href="/account"
                className="hidden text-sm font-medium text-forge-muted transition hover:text-forge-text sm:inline"
              >
                {dict.nav.account}
              </Link>
              <SignOutButton
                label={dict.nav.signOut}
                className="hidden text-sm font-medium text-forge-muted transition hover:text-forge-text sm:inline"
              />
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="hidden text-sm font-medium text-forge-muted transition hover:text-forge-text sm:inline"
              >
                {dict.nav.signIn}
              </Link>
              <Link
                href="/signup"
                className="rounded-lg bg-forge-blue px-4 py-2 text-sm font-semibold text-white transition hover:bg-forge-blue-dark"
              >
                {dict.nav.getStarted}
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
