/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        amber: {
          50: '#E6F4F5',
          100: '#C0E5E8',
          200: '#99D6DA',
          300: '#73C7CD',
          400: '#4CB8BF',
          500: '#24858F', // your deep teal
          600: '#1E6C73',
          700: '#175356',
          800: '#103A3A',
          900: '#0A2121',
        },
        // tailwind.config.js
extend: {
  colors: {
    tealbrand: {
      50:  '#E6F3F4',
      100: '#C0E0E3',
      200: '#99CCD2',
      300: '#73B8C1',
      400: '#4DA4B0',
      500: '#24858F', // your main color
      600: '#1C6B73',
      700: '#145158',
      800: '#0D373D',
      900: '#061D22',
    },
  },
}

      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        serif: ['Cormorant Garamond', 'serif'],
      },
      backgroundImage: {
        'sand-pattern': "url('https://www.transparenttextures.com/patterns/sandpaper.png')",
      },
    },
  },
  plugins: [],
};