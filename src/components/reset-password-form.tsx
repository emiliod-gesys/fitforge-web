"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export function ResetPasswordForm() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [ready, setReady] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    const supabase = createClient();

    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        setReady(true);
      }
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "PASSWORD_RECOVERY" || session) {
        setReady(true);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setError(null);
    setMessage(null);

    if (password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden.");
      return;
    }

    setLoading(true);
    const supabase = createClient();
    const { error: updateError } = await supabase.auth.updateUser({ password });
    setLoading(false);

    if (updateError) {
      setError(updateError.message);
      return;
    }

    setMessage("Contraseña actualizada. Redirigiendo…");
    router.push("/account");
    router.refresh();
  }

  return (
    <div className="mx-auto max-w-md px-6 py-16">
      <Link href="/login" className="text-sm text-forge-muted hover:text-forge-orange">
        ← Iniciar sesión
      </Link>
      <h1 className="mt-6 text-3xl font-bold">Nueva contraseña</h1>
      <p className="mt-2 text-forge-muted">
        Elige una contraseña nueva para tu cuenta FitForge.
      </p>

      {!ready ? (
        <p className="mt-8 rounded-lg border border-dashed border-forge-border bg-forge-surface p-4 text-sm text-forge-muted">
          Abre el enlace que te enviamos por email para restablecer tu contraseña.
        </p>
      ) : (
      <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="mb-1.5 block text-sm font-medium" htmlFor="password">
            Nueva contraseña
          </label>
          <input
            id="password"
            type="password"
            autoComplete="new-password"
            required
            minLength={6}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-xl border border-forge-border bg-forge-card px-4 py-3 outline-none ring-forge-orange focus:ring-2"
          />
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium" htmlFor="confirm-password">
            Confirmar contraseña
          </label>
          <input
            id="confirm-password"
            type="password"
            autoComplete="new-password"
            required
            minLength={6}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full rounded-xl border border-forge-border bg-forge-card px-4 py-3 outline-none ring-forge-orange focus:ring-2"
          />
        </div>

        {error && (
          <p className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
            {error}
          </p>
        )}

        {message && (
          <p className="rounded-lg border border-forge-orange/30 bg-forge-orange/10 px-4 py-3 text-sm text-forge-text">
            {message}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-xl bg-forge-orange py-3 font-semibold text-white hover:bg-forge-orange-dark disabled:opacity-60"
        >
          {loading ? "Guardando…" : "Guardar contraseña"}
        </button>
      </form>
      )}
    </div>
  );
}
