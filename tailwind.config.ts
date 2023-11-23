// tailwind.config.js
const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5E6572",
        secondary: "#7D98A1",
        tertiary: "#A9B4C2",
        background: "#EEF1EF",
        dark: "#1C2321",
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      layout: {
        disabledOpacity: "0.3", // opacity-[0.3]
        radius: {
          small: "2px", // rounded-small
          medium: "4px", // rounded-medium
          large: "6px", // rounded-large
        },
        borderWidth: {
          small: "1px", // border-small
          medium: "1px", // border-medium
          large: "2px", // border-large
        },
      },
      themes: {
        light: {
          background: "#ffffff",
          foreground: "#0f0f0f",
        },
        dark: {
          colors: {
            primary: "#160C28",
            secondary: "#EFCB68",
            tertiary: "#AEB7B3",
            background: "#000411",
            foreground: "#0f0f0f",
          },
        },
      },
    }),
  ],
};
