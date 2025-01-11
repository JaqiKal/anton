/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backdropBlur: {
        sm: '4px',
        md: '8px',
        lg: '16px',
        xl: '24px',
      },
      colors: {
        customPurple: '#4d3f78',
        customPurpleDark: '#2e2548',
        customGreen: '#17471E', // coolors Pakistan Green, almost tw-green-950 
        customOrange: '#c42d0b', // coolors Engineering Orange, almost tw-orange-800
        customDutchWhite: '#ede0c0', // coolors Dutch White, almost tw-orange-50
        customDutchL: '#f9f5eb', // coolors Dutch White, 95% lighter
      },

      fontFamily: {
        customFont: ['Sniglet', 'Roboto', 'sans-serif'],
      },
      fontSize: { 
        customXxs: '0.5rem', // 8px
      },
    },
  },
  variants: {
    extend: {
      backdropBlur: ['hover', 'focus'],
    },
  },
  plugins: [],
};