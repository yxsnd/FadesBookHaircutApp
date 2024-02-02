/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx/jpg/png/svg/gif/jpeg}",
  ],
  theme: {
    extend: {},
    container: {
      center: true,
      // padding: {
      //   DEFAULT: '1rem',
      //   sm: '2rem',
      //   lg: '4rem',
      //   xl: '5rem',
      //   '2xl': '6rem',
      // },
    },
    backgroundImage: {
      'login-bg1': "url('/src/components/assests/bg1.jpg')",
      'login-bg4': "url('/src/components/assests/bg4.jpg')",

    },
  },
  variants: {
    extend: {
      backgroundColor: ['checked'],
      borderColor: ['checked'],
    }
  },
  plugins: [],
}