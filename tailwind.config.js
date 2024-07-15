/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        "primary":"#DA291C",
        "accent": "#FFF078",
        "extra": '#FF0000B0',
        "green": '#06D001',
      },
      fontFamily: {
        "abhayaExtraBold": ['abhaya-extraBold', 'serif'],
        "abhayaMedium": ['abhaya-medium', 'serif'],
        "poppinsRegular": ['poppins-regular', 'sans-serif', 'Helvetica']
      },
      boxShadow: {
        'heroBtn': '0 5px 5px 0 rgba(0, 0, 0, .25)',
        'product' : '0 7px 7px 0 rgba(0, 0, 0, .25)',
        'cart' : '0 4px 4px 0 rgba(0, 0, 0, .25)'
      },
      screens: {
        "sm": "375px",
        "md": "430px",
        "ex": "700px",
        "lg": "960px",
        "xl": "1440px",
      }
    },
  },
  plugins: [],
}

