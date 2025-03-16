/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1C3F60',
          light: '#2a5c8c',
          dark: '#142e46'
        },
        secondary: {
          DEFAULT: '#D86018',
          light: '#e87937',
          dark: '#b34d12'
        },
        steel: {
          DEFAULT: '#58595B',
          light: '#6e6f72',
          dark: '#424344'
        },
        slate: {
          DEFAULT: '#4A6D8B',
          light: '#5d89b0',
          dark: '#385166'
        }
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif']
      },
      backgroundImage: {
        'steel-texture': "url('https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&q=80&w=1920')"
      }
    }
  },
  plugins: []
};