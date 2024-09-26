/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/views/**/*.ejs"
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui'),],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#0084ff",
          "secondary": "#f6d860",
          "accent": "#ffdd00",
          "neutral": "#3d4451",
          "base-100": "#ffffff",
        },
      },
    ],
  },
}

