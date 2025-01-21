/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        customBlue: 'rgb(230, 240, 255)', // আপনার ব্যাকগ্রাউন্ড কালার
      },
    },
  },
  plugins: [require('daisyui')],
};
