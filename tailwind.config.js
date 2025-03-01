/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      backgroundImage: {
        'radial-custom': 'radial-gradient (circle, #fff, #3300ff)',
      },
      screens: {
        xs: { max: '500px' },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
