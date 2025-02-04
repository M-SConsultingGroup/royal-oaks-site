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
    },
  },
  plugins: [],
};
