module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sub-gray': 'rgba(91, 90, 108, 1)', 
        'blue-custom-400':'rgba(245, 244, 254, 1)',
        'blue-custom-500' :'rgba(245, 244, 254, 1)',
        'blue-custom-700' :'rgba(81, 79, 157, 1)',
        'blue-custom-800':'rgba(106, 103, 175, 1)'
      },
      fontFamily: {
        fairDisplay: ['"Fair Display"', 'sans'],
      },
      backgroundImage: {
        'primary-gradient': 'linear-gradient(90deg, #6A67AF 0%, #9996DE 100%)',
        'cta-gradient' :'linear-gradient(180deg, #E7E5FF 0%, #FAF9FF 100%);'
      },
    },
  },
  plugins: [],
};
