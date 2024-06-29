/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'gray-navigation': '#D9D9D9',
      },
      fontFamily: {
        InterTightLight: ['InterTightLight'],
        InterTightSemiBold: ['InterTightSemiBold'],
        MangoGrotesqueBold: ['MangoGrotesqueBold'],
      },
      screens: {
        custom: '960px',
        '3xl': '1720px',
      },
    },
  },
  plugins: [],
};
