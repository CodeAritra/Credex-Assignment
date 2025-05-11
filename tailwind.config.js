/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        softBlue: "#1073eb",
      },
      // keyframes: {
      //   scroll: {
      //     '0%': { transform: 'translateX(0)' },
      //     '100%': { transform: 'translateX(-100%)' },
      //   },
      // },
      // animation: {
      //   scroll: 'scroll 20s linear infinite',
      // },
    },
  },
  plugins: [],
};
