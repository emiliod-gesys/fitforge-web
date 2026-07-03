"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { getAuthCallbackUrl, getResetPasswordUrl } from "@/lib/site-url";

declare global {
  interface Window {
    turnstile?: {
      render: (
        container: HTMLElement,
        options: {
          sitekey: string;
          callback: (token: string) => void;
          "expired-callback"?: () => void;
          "error-callback"?: () => void;
        },
      ) => string;
      reset: (widgetId: string) => void;
      remove: (widgetId: string) => void;
    };
  }
}

type Mode = "login" | "signup";

type Props = {
  mode: Mode;
  title: string;
  subtitle: string;
  alternate: React.ReactNode;
  primaryCta: string;
  redirectTo?: string;
};

const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

function authErrorMessage(message: string) {
  const normalized = message.toLowerCase();
  if (normalized.includes("invalid login credentials")) {
    return "Email o contraseña incorrectos.";
  }
  if (normalized.includes("user already registered")) {
    return "Ya existe una cuenta con este email.";
  }
  if (normalized.includes("password")) {
    return "La contraseña debe tener al menos 6 caracteres.";
  }
  return message;
}

export function AuthForm({
  mode,
  title,
  subtitle,
  alternate,
  primaryCta,
  redirectTo = "/account",
}: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const turnstileRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captchaToken, setCaptchaToken] = useState<string | null>(
    turnstileSiteKey ? null : "",
  );
  const [captchaError, setCaptchaError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(
    searchParams.get("error") === "auth_callback"
      ? "No se pudo completar el inicio de sesión. Inténtalo de nuevo."
      : null,
  );

  useEffect(() => {
    if (!turnstileSiteKey || !turnstileRef.current) return;

    const renderWidget = () => {
      if (!window.turnstile || !turnstileRef.current) return;
      if (widgetIdRef.current) {
        window.turnstile.remove(widgetIdRef.current);
        widgetIdRef.current = null;
      }
      widgetIdRef.current = window.turnstile.render(turnstileRef.current, {
        sitekey: turnstileSiteKey,
        callback: (token) => {
          setCaptchaToken(token);
          setCaptchaError(false);
        },
        "expired-callback": () => setCaptchaToken(null),
        "error-callback": () => {
          setCaptchaToken(null);
          setCaptchaError(true);
        },
      });
    };

    if (window.turnstile) {
      renderWidget();
      return;
    }

    const script = document.createElement("script");
    script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
    script.async = true;
    script.onload = renderWidget;
    document.head.appendChild(script);

    return () => {
      if (widgetIdRef.current && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current);
      }
    };
  }, []);

  const needsCaptcha = Boolean(turnstileSiteKey);
  const captchaReady = !needsCaptcha || Boolean(captchaToken);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setError(null);
    setMessage(null);

    if (!captchaReady) {
      setError("Completa la verificación de seguridad.");
      return;
    }

    setLoading(true);
    const supabase = createClient();

    try {
      if (mode === "login") {
        const { error: signInError } = await supabase.auth.signInWithPassword({
          email,
          password,
          options: needsCaptcha ? { captchaToken: captchaToken! } : undefined,
        });
        if (signInError) throw signInError;
        router.push(redirectTo);
        router.refresh();
        return;
      }

      const { data, error: signUpError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: name.trim() ? { display_name: name.trim() } : undefined,
          captchaToken: needsCaptcha ? captchaToken! : undefined,
        },
      });
      if (signUpError) throw signUpError;

      if (data.session) {
        router.push(redirectTo);
        router.refresh();
        return;
      }

      setMessage(
        "Cuenta creada. Revisa tu email para confirmar el registro antes de iniciar sesión.",
      );
    } catch (err) {
      setError(
        authErrorMessage(err instanceof Error ? err.message : "Error de autenticación"),
      );
    } finally {
      setLoading(false);
    }
  }

  async function handleGoogleSignIn() {
    setError(null);
    setLoading(true);
    const supabase = createClient();
    const { error: oauthError } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: getAuthCallbackUrl(redirectTo),
      },
    });
    if (oauthError) {
      setError(authErrorMessage(oauthError.message));
      setLoading(false);
    }
  }

  async function handleForgotPassword() {
    if (!email.trim()) {
      setError("Escribe tu email para recuperar la contraseña.");
      return;
    }

    setError(null);
    setMessage(null);
    setLoading(true);
    const supabase = createClient();
    const { error: resetError } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: getResetPasswordUrl(),
      captchaToken: needsCaptcha && captchaToken ? captchaToken : undefined,
    });
    setLoading(false);

    if (resetError) {
      setError(authErrorMessage(resetError.message));
      return;
    }

    setMessage("Te enviamos un enlace para restablecer tu contraseña.");
  }

  return (
    <div className="mx-auto max-w-md px-6 py-16">
      <Link href="/" className="text-sm text-forge-muted hover:text-forge-orange">
        ← Inicio
      </Link>
      <h1 className="mt-6 text-3xl font-bold">{title}</h1>
      <p className="mt-2 text-forge-muted">{subtitle}</p>

      <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
        {mode === "signup" && (
          <div>
            <label className="mb-1.5 block text-sm font-medium" htmlFor="name">
              Nombre
            </label>
            <input
              id="name"
              type="text"
              autoComplete="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-xl border border-forge-border bg-forge-card px-4 py-3 outline-none ring-forge-orange focus:ring-2"
              placeholder="Tu nombre"
            />
          </div>
        )}

        <div>
          <label className="mb-1.5 block text-sm font-medium" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-xl border border-forge-border bg-forge-card px-4 py-3 outline-none ring-forge-orange focus:ring-2"
            placeholder="tu@email.com"
          />
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium" htmlFor="password">
            Contraseña
          </label>
          <input
            id="password"
            type="password"
            autoComplete={mode === "login" ? "current-password" : "new-password"}
            required
            minLength={6}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-xl border border-forge-border bg-forge-card px-4 py-3 outline-none ring-forge-orange focus:ring-2"
          />
        </div>

        {needsCaptcha && (
          <>
            <div ref={turnstileRef} className="min-h-[65px]" />
            {captchaError && (
              <p className="text-sm text-amber-300">
                No se pudo cargar la verificación. Si usas WARP/1.1.1.1, desactívalo
                temporalmente o recarga la página.
              </p>
            )}
          </>
        )}

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
          disabled={loading || !captchaReady}
          className="w-full rounded-xl bg-forge-orange py-3 font-semibold text-white hover:bg-forge-orange-dark disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "Espera…" : primaryCta}
        </button>
      </form>

      {mode === "login" && (
        <button
          type="button"
          onClick={handleForgotPassword}
          disabled={loading}
          className="mt-4 text-sm text-forge-muted hover:text-forge-orange"
        >
          ¿Olvidaste tu contraseña?
        </button>
      )}

      <div className="mt-6">
        <div className="relative py-2 text-center text-xs uppercase tracking-wide text-forge-muted">
          <span className="bg-forge-black px-2">o continúa con</span>
        </div>
        <button
          type="button"
          onClick={handleGoogleSignIn}
          disabled={loading}
          className="mt-4 w-full rounded-xl border border-forge-border bg-forge-card py-3 text-sm font-semibold hover:border-forge-orange/50 disabled:opacity-60"
        >
          Google
        </button>
      </div>

      <p className="mt-6 text-center text-sm text-forge-muted">{alternate}</p>
    </div>
  );
}
