import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#090807",
        surface: "#100e0d",
        border: "#1c1916",
        gold: "#c9a96e",
        "gold-dim": "#8a7350",
        text: "#f0ebe4",
        "text-mid": "#a89e93",
        "text-dim": "#5c544c",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        mono: ["var(--font-dm-mono)", "'Courier New'", "monospace"],
      },
      transitionDuration: {
        "400": "400ms",
      },
      keyframes: {
        grain: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "10%": { transform: "translate(-2%, -3%)" },
          "20%": { transform: "translate(2%, 2%)" },
          "30%": { transform: "translate(-1%, 3%)" },
          "40%": { transform: "translate(3%, -1%)" },
          "50%": { transform: "translate(-2%, 1%)" },
          "60%": { transform: "translate(1%, -2%)" },
          "70%": { transform: "translate(-3%, 2%)" },
          "80%": { transform: "translate(2%, 3%)" },
          "90%": { transform: "translate(-1%, -1%)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(32px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        grain: "grain 0.8s steps(1) infinite",
        fadeUp: "fadeUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) both",
      },
    },
  },
  plugins: [],
};

export default config;
