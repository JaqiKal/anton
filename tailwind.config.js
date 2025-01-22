/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: { max: "374px" }, // Custom breakpoint for anything below 375px
    },
         
               
      colors: {

        customPurple: '#4d3f78',
        customPurpleDark: '#2e2548',
        customGreen: '#17471E', // coolors Pakistan Green, almost tw-green-950 
        customOrange: '#c42d0b', // coolors Engineering Orange, almost tw-orange-800
        customOrangeDark: '#a61b07', 
        customWhite: '#f9f5eb', 
        customOrangeBg:'#efcebf',
        gradientErrorpageStart:  '#ede0c0',
        gradientErrorpageEnd:  '#f57356',
      },

       backgroundImage: {
        'linear-gradient-blue': 'linear-gradient(to top, #000033,#0b0a29,#161452,#1b1967, #211e7b)',
          'linear-gradient': 'linear-gradient(to top, #ede0c0, #c42d0b)',
          'radial-gradient': 'radial-gradient(circle, #ede0c0, #c42d0b)',
          'radial-gradient-custom': 'radial-gradient(circle, var(--gradient-start), var(--gradient-end))',
        },
  
      backdropBlur: {
        sm: '4px',
        md: '8px',
        lg: '16px',
        xl: '24px',
      },
    
      fontFamily: {
        customFont: ['Titillium', 'Roboto', 'sans-serif'],
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
  plugins: [
    function({ addBase, theme }) {
      addBase({
        ':root': {
          '--gradient-start': theme('colors.gradientErrorpageStart'),
          '--gradient-end': theme('colors.gradientErrorpageEnd'),
        },
      });
    },
  ],
};