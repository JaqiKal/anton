/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        'xs': { max: '374px' },  // Custom breakpoint for smaller devices
        'iphone12': { max: '390px' },  // Custom breakpoint for iPhone 12 Pro
        'ipadpro': { max: '1024px' },  // Custom breakpoint for iPad Pro
        'mediumOne': { min: '1024px', max: '1024px' },  // Custom breakpoint for devices in the 1024px to 1279px range
        'mediumTwo': { min: '1025px', max: '1279px' },  // Custom breakpoint for devices in the 1024px to 1279px range
      },
         
               
      colors: {

        customPurple: '#4d3f78', // used in Submit btn
        customPurpleDark: '#2e2548', // used in Submit btn
        customGreen: '#17471E', // coolors Pakistan Green, almost tw-green-950 
        customOrange: '#c42d0b', // coolors Engineering Orange, almost tw-orange-800
        customWhite: '#f9f5eb', 

      },

       backgroundImage: {
        'linear-gradient-customBlue': 'linear-gradient(to top, #000033,#0b0a29,#161452,#1b1967, #211e7b)', // used in Contact.jsx
        'radial-gradient-customErrpage': 'radial-gradient(circle, #A9D9E4, #0891b2)', // used in Error pages
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
  ],
};