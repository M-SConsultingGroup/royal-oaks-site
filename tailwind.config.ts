module.exports = {
  darkMode: "media",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'custom': ['YourCustomFont', 'serif'], // Ensure custom font is defined
      },
      colors: {
        primary: '#C3A382',
        primaryHover: '#B08F6F',
        secondary: '#8B7969',
        button: '#0C1533',
        buttonShadow: '#08406F',
        darkButtonShadow: '#072756',
        gray: {
          50: '#F9F9F9', // Add specific gray colors if needed
          200: '#E5E5E5',
        },
      },
    },
  },
  plugins: [],
};