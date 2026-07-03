export function getSiteUrl() {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  }

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  return "http://localhost:3000";
}

export function getAuthCallbackUrl(next = "/account") {
  return `${getSiteUrl()}/auth/callback?next=${encodeURIComponent(next)}`;
}

export function getResetPasswordUrl() {
  return `${getSiteUrl()}/reset-password`;
}
