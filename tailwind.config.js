const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './stories/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Inter: ['Inter', ...defaultTheme.fontFamily.sans],
        Mona: ['Mona Sans', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
