/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // For React
    "./public/index.html", // Optional for CRA
  ],
  theme: {
    extend: {
      fontFamily: {
        cursive: ['"Pacifico"', "cursive"],
      },
    },
  },
  plugins: [],
};
