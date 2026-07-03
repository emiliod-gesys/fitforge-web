"use client";

import { Suspense } from "react";
import { AuthForm } from "@/components/auth-form";

type Props = {
  mode: "login" | "signup";
  title: string;
  subtitle: string;
  alternate: React.ReactNode;
  primaryCta: string;
  redirectTo?: string;
};

function AuthFormWithParams(props: Props) {
  return <AuthForm {...props} />;
}

export function AuthFormShell(props: Props) {
  return (
    <Suspense fallback={<div className="mx-auto max-w-md px-6 py-16 text-forge-muted">Cargando…</div>}>
      <AuthFormWithParams {...props} />
    </Suspense>
  );
}
