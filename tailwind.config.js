/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontSize: {
      sm: '13px',
      base: '16px',
      lg: '20px',
      xl: '25px',
      '2xl': '31px',
      '3xl': '39px',
      '4xl': '49px',
      '5xl': '61px',
      '6xl': '76px',
  },
  extend: {
      animation: {
          text: 'text 5s ease infinite',
      },
      keyframes: {
          text: {
              '0%, 100%': {
                  'background-size': '200% 200%',
                  'background-position': 'left center',
              },
              '50%': {
                  'background-size': '200% 200%',
                  'background-position': 'right center',
              },
          },
      },
  },
  },
  plugins: [],
}
