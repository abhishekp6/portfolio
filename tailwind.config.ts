import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      filter: {
        'preserve-color': 'brightness(1) contrast(1)',
      },
    },
  },
  plugins: [],
};
export default config;
