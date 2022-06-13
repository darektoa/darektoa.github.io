module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        grid: ["url('../assets/images/grids.png')"],
        'gradient-radial-circle': 'radial-gradient(50% 50% at 50% 50%, var(--tw-gradient-stops))',
        wave: "url('../assets/images/wave.svg')"
      },
      boxShadow: {
        sunny: '0 4px 30px 0 rgba(0, 0 ,0, 0.25)'
      },
      screens: {
        xs: '480px'
      }
    },
  },
  plugins: [],
}
