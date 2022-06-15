const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      animation: {
        flutter: 'flutter 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;'
      },
      backgroundImage: {
        grid: ["url('../assets/images/grids.png')"],
        'gradient-radial-circle': 'radial-gradient(50% 50% at 50% 50%, var(--tw-gradient-stops))',
        wave: "url('../assets/images/wave.svg')"
      },
      boxShadow: {
        sunny: '0 4px 30px 0 rgba(0, 0 ,0, 0.25)'
      },
      keyframes: {
        flutter: {
          '0%, 100%': {opacity: 1, transform: 'scale(1)'},
          '50%': {opacity: .7, transform: 'scale(1.3)'}
        }
      }
    },
    screens: {
      xs: '480px',
      ...defaultTheme.screens,
    },
  },
  plugins: [],
}
