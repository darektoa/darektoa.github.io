module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        grid: ["url('../assets/images/grids.png')"]
      },
      boxShadow: {
        sunny: '0 4px 30px 0 rgba(0, 0 ,0, 0.25)'
      }
    },
  },
  plugins: [],
}
