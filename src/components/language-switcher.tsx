"use client";

import { useLocaleContext } from "@/components/locale-provider";
import type { Locale } from "@/lib/i18n/config";

export function LanguageSwitcher() {
  const { locale, setLocale, dict, isPending } = useLocaleContext();

  return (
    <div
      className="flex items-center rounded-lg border border-forge-border p-0.5 text-xs font-semibold"
      role="group"
      aria-label={dict.language.label}
    >
      {(["es", "en"] as Locale[]).map((code) => (
        <button
          key={code}
          type="button"
          disabled={isPending}
          onClick={() => setLocale(code)}
          className={`rounded-md px-2 py-1 transition ${
            locale === code
              ? "bg-forge-blue text-white"
              : "text-forge-muted hover:text-forge-text"
          }`}
        >
          {dict.language[code]}
        </button>
      ))}
    </div>
  );
}
