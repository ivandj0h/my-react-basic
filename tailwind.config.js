/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
// const defaultTheme = require("tailwindcss/defaultTheme");
// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const plugin = require("tailwindcss/plugin");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {},
  plugins: [
    plugin(({ addBase, theme }) => {
      addBase({
        // or whichever color you'd like
        html: { color: theme("colors.black") },
      });
    }),
  ],
};
