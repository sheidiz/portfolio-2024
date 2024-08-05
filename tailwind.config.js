/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'lightbox': 'linear-gradient(to bottom, #354530 2.11%, #40534C 100%)',
        'darkbox': 'linear-gradient(to bottom, #40534C 2.11%, #677D6A 100%)',
      },
      colors: {
        "primary": "#354530",
        "secondary": "#40534C",
        "tertiary": "#677D6A",
        "quaternary": "#D6BD98",
        "light": "#F2F2FB",
        "dark": "#26272B",
        "gray": "#64748B"
      },
      fontFamily: {

      },
    },
  },
  plugins: [],
}

