import Link from "next/link";
import { Logo } from "./logo";

export function SiteFooter() {
  return (
    <footer className="border-t border-forge-border bg-forge-surface px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <div>
          <Logo className="h-8 w-auto" />
          <p className="mt-2 max-w-xs text-sm text-forge-muted">
            Forja tu mejor versión. Entrena con inteligencia, mide tu progreso y compite con amigos.
          </p>
        </div>
        <div className="flex gap-12 text-sm">
          <div>
            <p className="font-semibold text-forge-text">Producto</p>
            <ul className="mt-3 space-y-2 text-forge-muted">
              <li>
                <Link href="/download" className="hover:text-forge-orange">
                  Descargar
                </Link>
              </li>
              <li>
                <Link href="/#pricing" className="hover:text-forge-orange">
                  Planes
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-forge-text">Cuenta</p>
            <ul className="mt-3 space-y-2 text-forge-muted">
              <li>
                <Link href="/login" className="hover:text-forge-orange">
                  Iniciar sesión
                </Link>
              </li>
              <li>
                <Link href="/signup" className="hover:text-forge-orange">
                  Registrarse
                </Link>
              </li>
              <li>
                <Link href="/account" className="hover:text-forge-orange">
                  Mi suscripción
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-6xl text-center text-xs text-forge-muted">
        © {new Date().getFullYear()} FitForge. Todos los derechos reservados.
      </p>
    </footer>
  );
}
