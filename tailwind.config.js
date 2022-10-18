/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        Blurple: "#5865F2",
        BlurpleDark: "#282e75",
        ThemeDark: "#2a2b2e",
        MainColor: "#36393e",
        WhiteColor: "#FFFFFF",
      },
    },
  },
  plugins: [],
}
