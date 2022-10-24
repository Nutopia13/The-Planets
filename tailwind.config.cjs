/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './**.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        'antonio': `'Antonio', 'sans-serif'`,
        'sparta': `'League Spartan', 'sans-serif'`,
      },
      colors: {
        'dark_bg': '#070724',
        'pale_blue': '#38384F',
        'light_grey': '#838391',
      },
      
    },
  },
  plugins: [],
}
