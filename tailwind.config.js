/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '20vh': '20vh',
      },
    colors: {
      'text-primary': '#206AB3',
      'text-black': '#000000',
      'text-grey': '#929497',
      'text-primary-dark': '#0A1E29',
      'text-dark': '#042B7E',
      'text-grey-hover': '#e8e9ea',
      'text-white': '#ffffff'
    },
      spacing: {
        'm': '0.5rem',
        'l': '1rem',
        'xl': '1.5rem',
        '2xl': '2rem',
        '3xl': '3rem',
        '4xl': '4rem',
        '5xl': '5rem',
        '6xl': '6rem',
        '7xl': '7rem',
        '8xl': '8rem',
      },
      borderRadius: {
        '1xl': '8px',
        '2xl': '16px',
        '3xl': '24px',
        '4xl': '32px',
      },
      fontSize: {
        'small': '16px',
        'medium': '20px',
        'large': '40px',
        'xlarge': '48px',
      },
      screens: {
        'sm': {'min': '250px', 'max': '567px'},
        // => @media (min-width: 640px and max-width: 767px) { ... }
  
        'md': {'min': '568px', 'max': '767px'},
        // => @media (min-width: 768px and max-width: 1023px) { ... }
  
        'lg': {'min': '768px', 'max': '1280px'},
        // => @media (min-width: 1024px and max-width: 1279px) { ... }
  
        'xl': {'min': '1281px', 'max': '1535px'},
        // => @media (min-width: 1280px and max-width: 1535px) { ... }
  
        '2xl': {'min': '1535px', 'max': '1920px'},
        // // => @media (min-width: 1535px and max-width: 1920px) { ... }
      },
  },
  }
}

