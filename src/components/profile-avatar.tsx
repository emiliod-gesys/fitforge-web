"use client";

import Image from "next/image";
import { useState } from "react";
import { resolveAvatarSrc } from "@/lib/avatar";

export function ProfileAvatar({
  avatarUrl,
  displayName,
  size = 40,
  className = "",
}: {
  avatarUrl: string | null | undefined;
  displayName?: string | null;
  size?: number;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);
  const src = resolveAvatarSrc(avatarUrl);
  const letter = (displayName?.trim() || "?").charAt(0).toUpperCase();
  const showImage = src != null && !failed;

  return (
    <div
      className={`relative shrink-0 overflow-hidden rounded-full bg-forge-elevated ${className}`}
      style={{ width: size, height: size }}
    >
      {showImage ? (
        <Image
          src={src}
          alt={displayName?.trim() || "Avatar"}
          width={size}
          height={size}
          className="h-full w-full object-cover object-top"
          onError={() => setFailed(true)}
          unoptimized={src.startsWith("http")}
        />
      ) : (
        <span
          className="flex h-full w-full items-center justify-center text-sm font-bold text-forge-muted"
          style={{ fontSize: size * 0.4 }}
        >
          {letter}
        </span>
      )}
    </div>
  );
}
