import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        forge: {
          black: "#000000",
          navy: "#163159",
          blue: "#325995",
          "blue-dark": "#274878",
          charcoal: "#343339",
          grey: "#6d6e70",
          red: "#b20d30",
          gold: "#f5c151",
          surface: "#0c121c",
          card: "#1a2332",
          elevated: "#243044",
          border: "#3a4556",
          muted: "#9aa3b2",
          text: "#F5F5F5",
        },
      },
      boxShadow: {
        glow: "0 10px 40px rgba(50, 89, 149, 0.35)",
      },
      fontFamily: {
        sans: ["var(--font-outfit)", "system-ui", "sans-serif"],
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "atmosphere": {
          "0%, 100%": { opacity: "0.55", transform: "scale(1)" },
          "50%": { opacity: "0.85", transform: "scale(1.04)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out both",
        "fade-in": "fade-in 0.9s ease-out both",
        atmosphere: "atmosphere 10s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
