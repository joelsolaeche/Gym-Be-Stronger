/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
    theme: {
      container: {
        center: true,
      },
      extend: {
        fontFamily: {
          "Oswald": ["Oswald", "sans-serif"],
        },
        colors: {
          brownfirst: "#5d4037",
          brownsecond: "#3e2723",
      },
    },
  },
  plugins: [],
}