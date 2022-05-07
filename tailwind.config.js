// tailwind.config.js
const colors = require("tailwindcss/colors");
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    colors: {
      houmtxt: {
        button: "#607D8B",
        hover: "#b2301e",
      },
      houmbg: {
        focusBtn: "#263238",
      },
      trueGray: {
        darkest: "#171717",
        dark: "#404040",
        DEFAULT: "#737373",
        light: "#D4D4D4",
        lightest: "#F5F5F5",
      },
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
    },
    extend: {
      backgroundImage: {
        "hero-bg": "url('assets/img/bg.png')",
      },
    },
  },
  darkMode: false, // or 'media' or 'class'
  plugins: [],
};
