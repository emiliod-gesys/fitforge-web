export const locales = ["es", "en"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "es";
export const localeCookieName = "forgen_locale";

export function isLocale(value: string | null | undefined): value is Locale {
  return value === "es" || value === "en";
}
