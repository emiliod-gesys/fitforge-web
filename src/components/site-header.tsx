import Link from "next/link";
import { Logo } from "./logo";
import { SignOutButton } from "./sign-out-button";
import { createClient } from "@/lib/supabase/server";
import { isSupabaseConfigured } from "@/lib/supabase/env";
import type { User } from "@supabase/supabase-js";

const NAV = [
  { href: "/#app", label: "App" },
  { href: "/#features", label: "Funciones" },
  { href: "/#pricing", label: "Planes" },
  { href: "/download", label: "Descargar" },
  { href: "/#leaderboards", label: "Rankings" },
];

export async function SiteHeader() {
  let user: User | null = null;

  if (isSupabaseConfigured()) {
    const supabase = await createClient();
    const {
      data: { user: authUser },
    } = await supabase.auth.getUser();
    user = authUser;
  }

  return (
    <header className="sticky top-0 z-50 border-b border-forge-border/80 bg-forge-black/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center">
          <Logo className="h-9 w-auto" />
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
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
          {user ? (
            <>
              <Link
                href="/account"
                className="hidden text-sm font-medium text-forge-muted transition hover:text-forge-text sm:inline"
              >
                Mi cuenta
              </Link>
              <SignOutButton className="hidden text-sm font-medium text-forge-muted transition hover:text-forge-text sm:inline" />
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="hidden text-sm font-medium text-forge-muted transition hover:text-forge-text sm:inline"
              >
                Iniciar sesión
              </Link>
              <Link
                href="/signup"
                className="rounded-lg bg-forge-orange px-4 py-2 text-sm font-semibold text-white transition hover:bg-forge-orange-dark"
              >
                Empezar gratis
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
