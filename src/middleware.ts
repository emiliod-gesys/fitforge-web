import { type NextRequest, NextResponse } from "next/server";
import {
  defaultLocale,
  isLocale,
  localeCookieName,
  type Locale,
} from "@/lib/i18n/config";
import { updateSession } from "@/lib/supabase/middleware";

function detectLocale(request: NextRequest): Locale {
  const fromCookie = request.cookies.get(localeCookieName)?.value;
  if (isLocale(fromCookie)) return fromCookie;

  const preferred = request.headers
    .get("accept-language")
    ?.split(",")[0]
    ?.trim()
    .toLowerCase();

  if (preferred?.startsWith("en")) return "en";
  return defaultLocale;
}

export async function middleware(request: NextRequest) {
  const response = await updateSession(request);
  const locale = detectLocale(request);

  if (!request.cookies.get(localeCookieName)?.value) {
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
