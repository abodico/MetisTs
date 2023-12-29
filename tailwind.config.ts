import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
   theme: {
    screens: {
      "2xs": "280px",
      xs: "400px",
      sm: "601px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
    },
    extend: {
      backgroundImage: {
        "gradient-tethys":
          "linear-gradient(94.15deg, #3838F1 0%, #0000FF 100%)",
        "gradient-unidex":
          "linear-gradient(94.15deg, #333333 0%, #000000 100%)",
        "gradient-maia": "linear-gradient(94.15deg, #140235 0%, #0D0123 100%)",
        "gradient-netswap":
          "linear-gradient(94.15deg, #0051FB 0%, #001284 100%)",
        "gradient-hummus":
          "linear-gradient(94.15deg, #7400AB 0%, #4A006D 100%)",
        "gradient-midas": "linear-gradient(94.15deg, #3A4C59 0%, #343434 100%)",
        "gradient-league":
          "linear-gradient(94.15deg, #424242 0%, #405A6C 100%)",
      },
      colors: {
        white: "#fff",
        dark: "#0e0e0e",
        black: "#000",
        light: "#1f1f1f",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "0",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "190px",
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
}
export default config
