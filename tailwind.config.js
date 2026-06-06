/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        xxxs: "8px",
        xxs: "10px",
      },
      screens: {
        xxxs: "320px",
        xxs: "400px",
        xs: "480px",
        "max-xxs": { max: "399px" },
      },
    },
  },
  plugins: [],
};