/** @type {import('tailwindcss').Config} */
// apps/marketing/tailwind.config.ts
import { COLORS } from "./src/config/colors.config";

const tailwindConfig = {
  content: [
    "../../packages/**/*.{js,ts,jsx,tsx}", // все пакеты
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["DMSansRegular", "sans-serif"],
        bold: ["DMSansBold", "sans-serif"],
      },
      screens: {
        xsm: "500px",
      },
      scrollMargin: {
        header: "7rem",
      },
      colors: {
        darkBlue: COLORS.darkBlue,
        white: COLORS.white,
        green: COLORS.green,
        red: COLORS.red,
        orange: COLORS.orange,
        purple: COLORS.purple,
        blue: COLORS.blue,
      },
    },
  },
  plugins: [],
};

export default tailwindConfig;
