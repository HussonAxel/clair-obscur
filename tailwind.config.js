/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        larken: ["Larken", "sans-serif"],
        trajan: ["trajan-pro-3", "sans-serif"],
      },
    },
  },
  plugins: [],
};
