module.exports = {
  important: true,
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      sans: [
        "Press Start 2P",
        "system-ui",
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
