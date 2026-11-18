/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        atelier: {
          ivory: '#F7F3EB',
          'ivory-light': '#FAF7F2',
          beige: '#E8DFD2',
          'beige-muted': '#DDD2C3',
          espresso: '#33251F',
          'espresso-dark': '#231814',
          taupe: '#A99A8B',
          'taupe-light': '#C5B9AC',
          champagne: '#C6A77B',
          'champagne-light': '#DBC3A1',
          'champagne-dark': '#A8875A',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Didot', 'Bodoni MT', 'Cinzel', 'Georgia', 'serif'],
        display: ['"Playfair Display"', 'Cormorant Garamond', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'widest-editorial': '0.25em',
        'ultra-editorial': '0.35em',
      },
      boxShadow: {
        'atelier-subtle': '0 4px 30px rgba(51, 37, 31, 0.05)',
        'atelier-elevated': '0 20px 40px rgba(51, 37, 31, 0.08)',
        'atelier-glass': '0 8px 32px 0 rgba(198, 167, 123, 0.12)',
      }
    },
  },
  plugins: [],
}
