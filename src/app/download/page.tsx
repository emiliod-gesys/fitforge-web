import { headers } from "next/headers";
import { redirect } from "next/navigation";
import Link from "next/link";
import { AppleIcon, GooglePlayIcon } from "@/components/store-icons";
import { getStoreUrl } from "@/lib/download";

export const metadata = {
  title: "Descargar",
};

export default async function DownloadPage() {
  const headersList = await headers();
  const userAgent = headersList.get("user-agent") ?? "";
  const { platform, url } = getStoreUrl(userAgent);

  if (platform === "android" || platform === "ios") {
    redirect(url);
  }

  const playStore =
    process.env.NEXT_PUBLIC_PLAY_STORE_URL ??
    "https://play.google.com/store/apps/details?id=io.fitforge.fitforge";
  const appStore = process.env.NEXT_PUBLIC_APP_STORE_URL ?? "#";

  return (
    <div className="mx-auto max-w-lg px-6 py-24 text-center">
      <h1 className="text-3xl font-bold">Descarga FORGEN</h1>
      <p className="mt-4 text-forge-muted">
        Elige tu plataforma para ir directo a la tienda.
      </p>
      <div className="mt-10 flex flex-col gap-4">
        <a
          href={playStore}
          className="inline-flex items-center justify-center gap-3 rounded-xl bg-forge-blue py-4 font-semibold text-white hover:bg-forge-blue-dark"
        >
          <GooglePlayIcon className="h-7 w-7" />
          Android — Google Play
        </a>
        <a
          href={appStore}
          className="inline-flex items-center justify-center gap-3 rounded-xl border border-forge-border py-4 font-semibold hover:border-forge-blue"
        >
          <AppleIcon className="h-7 w-7" />
          iOS — App Store
        </a>
      </div>
      <Link href="/" className="mt-8 inline-block text-sm text-forge-muted hover:text-forge-blue">
        ← Volver al inicio
      </Link>
    </div>
  );
}
