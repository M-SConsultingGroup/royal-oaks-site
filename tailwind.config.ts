module.exports = {
  darkMode: "media",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'custom': ['YourCustomFont', 'sans-serif'],
      },
      colors: {
        primary: '#C3A382',
        secondary: '#8B7969',
        button: '#0C1533', // Change this to your darker blue
        buttonShadow: '#08406F', // Slightly darker shadow for button
        darkButtonShadow: '#072756', // Even darker color for hover effect
      },
    },
  },
  plugins: [],
};