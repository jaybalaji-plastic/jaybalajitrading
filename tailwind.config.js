/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          teal: {
            DEFAULT: '#147582',
            50: '#F0F8FA',
            100: '#E2F1F3',
            200: '#C2E2E6',
            300: '#8FBEC5',
            400: '#5297A2',
            500: '#196F7D',
            600: '#147582',
            700: '#105864',
            800: '#0E4852',
            900: '#0A343B',
            950: '#062025',
          },
          orange: {
            DEFAULT: '#F58220',
            50: '#FFF7ED',
            100: '#FEEDD6',
            200: '#FDD5AC',
            300: '#FBBA77',
            400: '#F8973D',
            500: '#EE7E21',
            600: '#F58220',
            700: '#C25D0E',
            800: '#9B4711',
            900: '#7E3B12',
          },
          dark: '#252B2D',
          muted: '#687477',
          light: '#F3F5F5',
          border: '#E1E7E8',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Outfit', 'Montserrat', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(20, 117, 130, 0.08)',
        'soft-lg': '0 10px 30px -4px rgba(20, 117, 130, 0.12)',
        'soft-xl': '0 20px 40px -6px rgba(20, 117, 130, 0.16)',
        'orange-glow': '0 6px 20px -2px rgba(245, 130, 32, 0.35)',
      },
    },
  },
  plugins: [],
}
