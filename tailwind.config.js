/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#C781DC",
        secondary: "#ED97BC",
        // ...
      },
      backgroundImage: {
        miniHero: "url('/image/bg_mini.png') ",
        miniHeroMobile: "url('/image/bg_mini_mobi.png') ",
      },
      keyframes: {
        infiniRotate: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        infiniRotate: "infiniRotate 10s linear infinite",
      },
    },
  },
  plugins: [],
};
