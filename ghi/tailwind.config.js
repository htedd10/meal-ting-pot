/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
<<<<<<< HEAD
  theme: {
    extend: {},
  },
  plugins: [],
=======
  theme: ["garden"],
  plugins: [
  require("daisyui"),
  require('@tailwindcss/forms'),
],
>>>>>>> main
}
