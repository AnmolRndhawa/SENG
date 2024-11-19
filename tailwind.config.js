/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
   './src/**/*.{html,js}', // All HTML and JS files in src and its subfolders
    './index.html'          // Index file in the root directory
  ],
  theme: {
    extend: {   boxShadow: {
      'inner-deep': 'inset 0 4px 8px rgba(0, 0, 0, 0.3)', // Customize shadow
    },
      fontFamily:{
      
          'PopinsStyle':['Poppins','sans-serif'],
          'InKutStyle' : ['Inknut Antiqua', 'serif'],
          'coffeeItallic':['coffeeItallic','serif'],
        
      },
    width:{
      'calc-100vw/4': { width: 'calc(100vw /4)'}
    },
  keyframes:{
    gradientShine: {
      '0%': {
        background: 'linear-gradient(90deg, #8e44ad, #ff6f61)',
        backgroundSize: '200% 100%',
      },
      '50%': {
        background: 'linear-gradient(90deg, #ff6f61, #8e44ad)',
        backgroundSize: '200% 100%',
      },
      '100%': {
        background: 'linear-gradient(90deg, #8e44ad, #ff6f61)',
        backgroundSize: '200% 100%',
      },
    },


    shine: {
      '0%': {
        opacity: '0.5',
        transform: 'scale(1)',
      },
      '100%': {
        opacity: '1',
        transform: 'scale(1.05)',
      },
    },

  },

  animation:{
    gradientShine: 'gradientShine 3s ease-in-out infinite',
        shine: 'shine 1s ease-in-out infinite alternate',
  },

}},
  plugins: [],
}

