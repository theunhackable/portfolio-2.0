/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
        fontFamily: {
         inter: ['Inter', 'sans-serif'],
        },
        colors: {
          'dark-0': '#000000',
          'dark-1': '#111111',

          'dark-2': '#222222',
          'dark-5': '#555555',
          'dark-blue': '#116DC1',
          'dark-trans': '#11111166',
          'dark-trans2': '#11111177',

          // light colors
          'light-f': '#ffffff',
          'light-e': '#eeeeee',
          'light-trans': '#ffffff66',
          'light-b': '#bbbbbb',
          'light-a': '#aaaaaa',
          'light-d': '#dddddd',
          'light-blue': '#61AAFF'
        },
        fontSize: {
          'h-1': '4.3rem',
          'h-2': '3.583rem',
          'h-3': '2.986rem',
          'h-4': '2.488rem',
          'h-5': '2.074rem',
          'h-6': '1.728rem',
          'body-large': '1.44rem',
          'body-medium': '1.2rem',
          'body-normal': '1rem',
          'body-small': '0.833rem'
        },
        boxShadow: {
          'light': '10px 10px 0 0 #000',
          'dark': '10px 10px 0 0 #aaa'
        }
      
    },
  },
  plugins: [],
}
