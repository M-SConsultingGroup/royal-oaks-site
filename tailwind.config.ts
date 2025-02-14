module.exports = {
  darkMode: "media", 
  content: [
    "./index.html", // Include your HTML entry point
    "./src/**/*.{js,ts,jsx,tsx}", // Include all source files
  ],
  theme: {
    extend: {
      fontFamily: {
        'custom': ['YourCustomFont', 'sans-serif'],
      },
      colors: {
        primary: '#C3A382',
        secondary: '#8B7969',
        button: '#B0E0E6',
        buttonShadow: '#9AB3C2', // Slightly darker color for button shadow
        darkButtonShadow: '#A38465', // Even darker color for hover effect
      },
    },
  },
  plugins: [],
};