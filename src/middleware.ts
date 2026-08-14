import { type NextRequest, NextResponse } from "next/server";
import { isLocale, localeCookieName, type Locale } from "@/lib/i18n/config";
import { isCrawlerUserAgent } from "@/lib/i18n/is-crawler";
import { updateSession } from "@/lib/supabase/middleware";

function detectLocale(request: NextRequest): Locale {
  if (isCrawlerUserAgent(request.headers.get("user-agent"))) {
    return "en";
  }

  const fromCookie = request.cookies.get(localeCookieName)?.value;
  if (isLocale(fromCookie)) return fromCookie;

  const preferred = request.headers
    .get("accept-language")
    ?.split(",")[0]
    ?.trim()
    .toLowerCase();

  if (!preferred) return "en";
  if (preferred.startsWith("en")) return "en";
  if (preferred.startsWith("es")) return "es";
  return "en";
}

export async function middleware(request: NextRequest) {
  const response = await updateSession(request);
  const isCrawler = isCrawlerUserAgent(request.headers.get("user-agent"));
  const locale = detectLocale(request);

  if (!isCrawler && !request.cookies.get(localeCookieName)?.value) {
    response.cookies.set(localeCookieName, locale, {
      path: "/",
      maxAge: 60 * 60 * 24 * 365,
      sameSite: "lax",
    });
  }

  // Ensure NextResponse from skip-supabase path also gets cookie
  if (!(response instanceof NextResponse)) {
    return response;
  }

  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
