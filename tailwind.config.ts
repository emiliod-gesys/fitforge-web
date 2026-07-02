import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        forge: {
          black: "#000000",
          surface: "#0D0D0D",
          card: "#1A1F26",
          elevated: "#242B35",
          border: "#333A44",
          slate: "#333A44",
          orange: "#FF6622",
          "orange-dark": "#E05518",
          muted: "#8B95A5",
          text: "#F5F5F5",
        },
      },
      boxShadow: {
        glow: "0 10px 40px rgba(255, 102, 34, 0.25)",
      },
    },
  },
  plugins: [],
};

export default config;
