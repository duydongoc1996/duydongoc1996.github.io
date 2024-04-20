/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      custom1: ["Custom-1", "cursive"],
      custom2: ["Custom-2"],
    },
  },
  plugins: [],
});
