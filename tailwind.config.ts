import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#20201e",
        paper: "#f7f5f0",
        sand: "#ded7ca",
        gold: "#9b7b4d",
      },
      fontFamily: {
        sans: ["Dubai", "Arial", "Helvetica Neue", "sans-serif"],
        serif: ["Dubai", "Arial", "Helvetica Neue", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
