module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '475px',    
        'sm': '640px',   
        'md': '768px',    
        'lg': '1024px',    
        'xl': '1280px',   
        '2xl': '1536px',   
        '3xl': '1920px',
        '4xl': '2560px',  
      },
      colors: {
        'sub-gray': 'rgba(91, 90, 108, 1)',
        'blue-custom-400': 'rgba(245, 244, 254, 1)',
        'blue-custom-500': 'rgba(245, 244, 254, 1)',
        'blue-custom-600': 'rgba(108, 105, 177, 1)',
        'blue-custom-700': 'rgba(81, 79, 157, 1)',
        'blue-custom-800': 'rgba(106, 103, 175, 1)',
      },
      backgroundImage: {
        'primary-gradient': 'linear-gradient(90deg, #6A67AF 0%, #9996DE 100%)',
        'cta-gradient': 'linear-gradient(180deg, #E7E5FF 0%, #FAF9FF 100%)',
        'blue-to-white-gradient': 'linear-gradient(180deg, #F5F2FB 0%, #FFFFFF 100%)',
        'border-gradient': 'linear-gradient(180deg, #E7E5FF 0%, #FAF9FF 100%)',
      },
      keyframes: {
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-150%)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
        'fade-in-down': 'fade-in-down 1.2s cubic-bezier(0.33, 1, 0.68, 1) forwards',
      },
    },
  },
  plugins: [],
};
