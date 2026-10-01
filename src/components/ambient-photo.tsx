import Image from "next/image";

type AmbientPhotoProps = {
  src: string;
  /** Position of the wrapper plus the outer mask, e.g. "inset-0 mask-fade-y". */
  className?: string;
  /** Second mask applied on the inner layer (intersects with the outer one). */
  maskClassName?: string;
  /** object-position / filters for the picture itself. */
  imageClassName?: string;
  sizes?: string;
  priority?: boolean;
  /**
   * "screen": black pixels vanish into the dark page, so a B&W subject shot on
   * black emerges from the background. "normal": keep the photo as texture.
   */
  blend?: "screen" | "normal";
  /** Cold navy duotone so every photo shares the FORGEN palette. */
  tint?: boolean;
};

/**
 * Decorative photograph that melts into the layout: masked edges, blend mode
 * and a navy tint. Purely visual, hidden from assistive tech.
 */
export function AmbientPhoto({
  src,
  className = "",
  maskClassName = "",
  imageClassName = "",
  sizes = "100vw",
  priority = false,
  blend = "screen",
  tint = true,
}: AmbientPhotoProps) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute select-none overflow-hidden ${
        blend === "screen" ? "mix-blend-screen" : ""
      } ${className}`}
    >
      <div className={`absolute inset-0 isolate ${maskClassName}`}>
        <Image
          src={src}
          alt=""
          fill
          priority={priority}
          sizes={sizes}
          draggable={false}
          className={`object-cover ${imageClassName}`}
        />
        {tint ? (
          <div className="absolute inset-0 bg-forge-navy opacity-70 mix-blend-color" />
        ) : null}
      </div>
    </div>
  );
}
