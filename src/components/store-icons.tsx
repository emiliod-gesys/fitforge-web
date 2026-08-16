type IconProps = {
  className?: string;
};

/** Marca oficial de Google Play (triángulo de cuatro colores). */
export function GooglePlayIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <path fill="#4285F4" d="M2.5 3v18L13.2 12z" />
      <path fill="#34A853" d="M17 14.5 13.2 12 4.2 21.6z" />
      <path fill="#FBBC04" d="M17 9.5 4.2 2.4 13.2 12z" />
      <path
        fill="#EA4335"
        d="M21.4 11.1 17 9.5 13.2 12 17 14.5l4.4-1.6c.8-.4.8-1.4 0-1.8z"
      />
    </svg>
  );
}

/** Logotipo oficial de Apple (silueta). */
export function AppleIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="currentColor"
      aria-hidden
    >
      <path d="M16.365 12.73c-.022-2.36 1.926-3.49 2.013-3.542-1.098-1.606-2.805-1.826-3.41-1.85-1.452-.147-2.833.854-3.57.854-.736 0-1.875-.833-3.086-.81-1.587.024-3.05.923-3.867 2.343-1.65 2.86-.422 7.093 1.185 9.417.786 1.138 1.723 2.414 2.953 2.37 1.185-.048 1.633-.766 3.066-.766 1.433 0 1.836.766 3.086.742 1.275-.021 2.082-1.16 2.86-2.303.9-1.315 1.27-2.59 1.29-2.656-.028-.013-2.477-.95-2.52-3.8zM13.877 5.99c.654-.793 1.095-1.894.974-2.99-.942.038-2.083.627-2.76 1.42-.607.702-1.14 1.824-.997 2.9 1.054.082 2.13-.536 2.783-1.33z" />
    </svg>
  );
}
