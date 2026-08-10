"use client";

import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export function SignOutButton({
  className,
  label = "Cerrar sesión",
}: {
  className?: string;
  label?: string;
}) {
  const router = useRouter();

  async function handleSignOut() {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/");
    router.refresh();
  }

  return (
    <button
      type="button"
      onClick={handleSignOut}
      className={
        className ??
        "text-sm font-medium text-forge-muted transition hover:text-forge-text"
      }
    >
      {label}
    </button>
  );
}
