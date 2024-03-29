import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          "01": "#043873",
          "02": "#4F9CF9",
        },
        secondary: {
          "01": "#FFE492",
          "02": "#A7CEFC",
          "03": "#FFFFFF",
          "04": "#212529",
        },
      },
    },
  },
  plugins: [],
};
export default config;
