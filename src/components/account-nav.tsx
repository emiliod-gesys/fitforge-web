"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  { href: "/account", label: "Resumen" },
  { href: "/account/profile", label: "Perfil" },
  { href: "/account/subscription", label: "Suscripción" },
] as const;

export function AccountNav() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-wrap gap-2 border-b border-forge-border pb-4">
      {LINKS.map((link) => {
        const active =
          link.href === "/account"
            ? pathname === "/account"
            : pathname.startsWith(link.href);

        return (
          <Link
            key={link.href}
            href={link.href}
            className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
              active
                ? "bg-forge-orange text-white"
                : "text-forge-muted hover:bg-forge-card hover:text-forge-text"
            }`}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
