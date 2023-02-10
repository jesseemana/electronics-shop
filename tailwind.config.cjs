/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: "Montserrat",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1234px",
      },
    },
  },
  plugins: [],
}
