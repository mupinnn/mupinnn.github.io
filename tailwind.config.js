module.exports = {
  important: true,
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    typography: {
      default: {
        css: {
          a: {
            color: "#3182ce",
            "&:hover": {
              color: "#2c5282",
            },
          },
          h1: {
            fontSize: "1.875rem",
          },
          h2: {
            fontSize: "1.5rem",
          },
          h3: {
            fontSize: "1.25rem",
          },
          h4: {
            fontSize: "1.125rem",
          },
          h5: {
            fontSize: "1rem",
          },
          h6: {
            fontSize: "0.875rem",
          },
        },
      },
      sm: {
        css: {
          h1: {
            fontSize: "1.5rem",
          },
          h2: {
            fontSize: "1.25rem",
          },
          h3: {
            fontSize: "1.125rem",
          },
          h4: {
            fontSize: "1rem",
          },
          h5: {
            fontSize: "0.875rem",
          },
          h6: {
            fontSize: "0.75rem",
          },
        },
      },
    },
    extend: {
      fontFamily: {
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
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
