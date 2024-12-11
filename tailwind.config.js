/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "3xl": "2000px",
      },
      colors: {
        primary: "#FB5A5A",
        "primary-darkened": "#e34d4d",
        "navbar-circle": "#48F6F6",
        "title-yellow": "#FFD029",
        "title-blue": "#1970C0",
        "accent-gray-dark": "#727272",
        "accent-gray-light": "#ECECEC",
        "text-dark": "#000000",
        "text-light": "#FFFFFF",
        background: "#FFFFFF",
        "bug-primary": "#B7D947",
        "dark-primary": "#3E3E3E",
        "dragon-primary": "#7B67F9",
        "electric-primary": "#FFF700",
        "fairy-primary": "#FFC1F3",
        "fighting-primary": "#A40000",
        "fire-primary": "#FA2A00",
        "ghost-primary": "#675994",
        "grass-primary": "#47D751",
        "ground-primary": "#E8DA96",
        "ice-primary": "#B8F8FF",
        "normal-primary": "#DAD9D5",
        "poison-primary": "#9C2EB0",
        "flying-primary": "#AAAEFF",
        "psychic-primary": "#ED3D86",
        "rock-primary": "#CCAC71",
        "steel-primary": "#BABABA",
        "water-primary": "#1C8AFF",
      },
      keyframes: {
        fade: {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 100,
          },
        },
      },
      animation: {
        fadeIn: "fade 0.25s linear",
      },
    },
  },
  plugins: [],
};
