/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        burtons: "burtons",
        chubbo: "chubbo",
        tanker: "tanker",
      },
      colors: {
        primary: "#3E3232",
        secondary: "#e8f0c8",
        accent: "#3e3232",
        "dark-bg": "#1a1a1a",
        "dark-text": "#f0f0f0",
        "light-text": "#333333",
         "light-bg": "#333333",
      },
    },
  },
  plugins: [],
};
