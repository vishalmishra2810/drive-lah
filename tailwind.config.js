/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      border: '#FCFCFC',
      primaryText: '#026786',
    },
    extend: {
      fontFamily: {
        'museo-sans-rounded': ['"Museo Sans Rounded"', 'sans-serif'],
      },
      shadow: {
        footer: '0px -3px 6px #00000014'
      },
      screens: {
        md: '768px'
      }
    },
  },
  plugins: [],
}

