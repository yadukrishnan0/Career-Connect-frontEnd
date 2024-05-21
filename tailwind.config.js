/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'noto-sans': ['"Noto Sans"', 'sans-serif'],
        'roboto': ['"Roboto"', 'sans-serif'],
      },
      colors: {
        customGray: '#F1F2F4',
        customBlue:'#0A65CC'
      },
    },
  },
  plugins: [],
}
