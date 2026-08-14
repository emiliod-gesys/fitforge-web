import { cookies, headers } from "next/headers";
import { isLocale, localeCookieName, type Locale } from "./config";
import { isCrawlerUserAgent } from "./is-crawler";

function localeFromAcceptLanguage(header: string | null): Locale {
  if (!header) return "en";
  const preferred = header
    .split(",")
    .map((part) => part.trim().split(";")[0]?.toLowerCase())
    .find(Boolean);

  if (!preferred) return "en";
  if (preferred.startsWith("en")) return "en";
  if (preferred.startsWith("es")) return "es";
  return "en";
}

export async function getLocale(): Promise<Locale> {
  const headerStore = await headers();
  if (isCrawlerUserAgent(headerStore.get("user-agent"))) {
    return "en";
  }

  const cookieStore = await cookies();
  const fromCookie = cookieStore.get(localeCookieName)?.value;
  if (isLocale(fromCookie)) return fromCookie;

  return localeFromAcceptLanguage(headerStore.get("accept-language"));
}
