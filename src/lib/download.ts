/** Ficha publicada en Google Play (id=forgen.app). */
export const PLAY_STORE_URL =
  process.env.NEXT_PUBLIC_PLAY_STORE_URL ??
  "https://play.google.com/store/apps/details?id=forgen.app&hl=es_419";

export function getStoreUrl(userAgent: string): {
  platform: "android" | "ios" | "unknown";
  url: string;
} {
  const playStore = PLAY_STORE_URL;
  const appStore =
    process.env.NEXT_PUBLIC_APP_STORE_URL ?? "https://apps.apple.com";

  const ua = userAgent.toLowerCase();
  if (/android/i.test(ua)) {
    return { platform: "android", url: playStore };
  }
  if (/iphone|ipad|ipod/i.test(ua)) {
    return { platform: "ios", url: appStore };
  }
  return { platform: "unknown", url: playStore };
}
