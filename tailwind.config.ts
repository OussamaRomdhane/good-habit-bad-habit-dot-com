import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "good-habit": "#156034",
        "good-habit-dark": "#27ae60",
        "bad-habit": "#e74c3cda",
        eiilo: "#156034",
        "eiilo-dark": "#7ae0b4",
        "eiilo-active": "#62b390",
        footer: "#4A5454",
        "footer-dark": "#909D9D",
      },
    },
  },
  plugins: [],
} satisfies Config;
