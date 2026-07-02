import Image from "next/image";

export function Logo({ className = "h-10 w-auto" }: { className?: string }) {
  return (
    <Image
      src="/logo.png"
      alt="FitForge"
      width={1024}
      height={1024}
      className={className}
      priority
    />
  );
}
