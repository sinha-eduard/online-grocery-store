/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/views/**/*.ejs"
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui'),],
}

