/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        lightbox:
          "radial-gradient(circle closest-corner at center bottom, #627C73 0%, #40534C 100%)",
        darkbox:
          "radial-gradient(circle closest-corner at center bottom, #384842 0%, #1E2120 100%)",
      },
      colors: {
        primary: "#40534C",
        secondary: "#677D6A",
        tertiary: "#D6BD98",
        light: "#F2F2FB",
        dark: "#26272B",
        gray: "#64748B",
        dm: {
          primary: "#1E2120",
        },
      },
      dropShadow: {
        white: "0 2px 2px rgba(255, 255, 255, 0.15)",
      },
      fontFamily: {
        primary: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
