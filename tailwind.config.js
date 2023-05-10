/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryPink: "#e683b6",
        primaryBlue: "#02a5e2",
        primaryGreen: "#80c241",
        primaryPurple: "#b353a0",
        primaryYellow: "#f8af2f",
        lightBlue: "#00abe5",
      },
      backgroundImage: {
        mushroom1: "url('/mushroom1.jpg')",
        primaryGr:
          "linear-gradient(90deg, rgba(140,209,212,1) 0%, rgba(176,131,186,1) 28%, rgba(247,184,165,1) 64%, rgba(194,219,168,1) 100%)",
      },
      backgroundPosition: {
        topMid: "center 30%",
      },
      fontFamily: {
        anja: ["Anja"],
        arial: ["Arial"],
        bebas: ["Bebas"],
        emoji: ["Emoji"],
        gotham: ["Gotham"],
        mont: ["Montserrat"],
      },
    },
  },
  plugins: [],
};
