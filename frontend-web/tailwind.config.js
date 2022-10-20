/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      padding: {
        section: '8rem 0',
      },
      fontFamily: {
        DMSans: ['DM Sans', 'sans-serif'],
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      dark: '#14213D',
      primary: '#fca311',
      secondary: '#e5e5e5',
      light: '#ffffff',
    },
  },
  plugins: [],
};
