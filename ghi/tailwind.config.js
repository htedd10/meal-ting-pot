/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: ["garden"],
  plugins: [
  require("daisyui"),
  require('@tailwindcss/forms'),
],
}
