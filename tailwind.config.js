/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        frog: "#22C55E",
        frogDark: "#16A34A",
        frogLight: "#DCFCE7",
      },
    },
  },
  plugins: [],
};
