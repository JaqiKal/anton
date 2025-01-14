/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
         
        backgroundImage: {
          'radial-gradient': 'radial-gradient(circle, #ede0c0, #c42d0b)',
        },
      colors: {
        customPurple: '#4d3f78',
        customPurpleDark: '#2e2548',
        customGreen: '#17471E', // coolors Pakistan Green, almost tw-green-950 
        customOrange: '#c42d0b', // coolors Engineering Orange, almost tw-orange-800
   
        customWhite: '#f9f5eb', 
        customOrangeBg:'#efcebf',
      },

  
      backdropBlur: {
        sm: '4px',
        md: '8px',
        lg: '16px',
        xl: '24px',
      },
    
      fontFamily: {
        customFont: ['Sniglet', 'Roboto', 'sans-serif'],
      },
      fontSize: { 
        customXxs: '0.5rem', // 8px
        customXxss: '0.3rem', // 
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