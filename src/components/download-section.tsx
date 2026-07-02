import Link from "next/link";

export function DownloadSection() {
  const playStore =
    process.env.NEXT_PUBLIC_PLAY_STORE_URL ??
    "https://play.google.com/store/apps/details?id=io.fitforge.fitforge";
  const appStore = process.env.NEXT_PUBLIC_APP_STORE_URL ?? "#";

  return (
    <section id="download" className="border-t border-forge-border bg-forge-surface px-6 py-20">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold md:text-4xl">Descarga FitForge</h2>
        <p className="mt-4 text-forge-muted">
          Disponible en Android. iOS próximamente.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href={playStore}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-w-[200px] items-center justify-center gap-2 rounded-xl border border-forge-border bg-forge-card px-6 py-4 font-semibold transition hover:border-forge-orange"
          >
            <span aria-hidden>▶</span> Google Play
          </a>
          <a
            href={appStore}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-w-[200px] items-center justify-center gap-2 rounded-xl border border-forge-border bg-forge-card px-6 py-4 font-semibold text-forge-muted transition hover:border-forge-border"
          >
            <span aria-hidden>🍎</span> App Store (pronto)
          </a>
        </div>
        <p className="mt-6 text-sm text-forge-muted">
          ¿Ya tienes cuenta?{" "}
          <Link href="/login" className="text-forge-orange hover:underline">
            Inicia sesión
          </Link>{" "}
          con el mismo email que en la app.
        </p>
      </div>
    </section>
  );
}
