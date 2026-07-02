export function Logo({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <rect width="64" height="64" rx="14" fill="#1A1F26" />
      <path
        d="M18 38V26h6l4 8 4-8h6v12h-5V33l-3.5 7h-3L24 33v5h-6z"
        fill="#333A44"
      />
      <path
        d="M36 38V26h5.5c3.3 0 5.5 1.8 5.5 4.5 0 2-1.1 3.4-2.8 4l3.3 3.5H42l-2.8-3H39v3h-3zm3-6h2.2c1.1 0 1.8-.6 1.8-1.5S42.3 29 41.2 29H39v3z"
        fill="#FF6622"
      />
    </svg>
  );
}
