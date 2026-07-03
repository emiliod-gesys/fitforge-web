const CATALOG_PREFIX = "catalog:";

export function isCatalogAvatar(value: string | null | undefined): boolean {
  return value != null && value.startsWith(CATALOG_PREFIX);
}

export function isNetworkAvatar(value: string | null | undefined): boolean {
  return (
    value != null &&
    (value.startsWith("http://") || value.startsWith("https://"))
  );
}

/** Resuelve avatar_url del perfil a una URL usable en la web. */
export function resolveAvatarSrc(value: string | null | undefined): string | null {
  if (!value) return null;

  if (isCatalogAvatar(value)) {
    const id = value.slice(CATALOG_PREFIX.length);
    return id ? `/avatars/${id}.png` : null;
  }

  if (isNetworkAvatar(value)) return value;

  return null;
}
