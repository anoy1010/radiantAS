/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'firstColor': '#FF9900',
        'secondColor': '#111047',
      },
    },
  },
  plugins: [require("daisyui")],
}

