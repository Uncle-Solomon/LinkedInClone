/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        slide: {
          "0%": { left: "100%" },
          "100%": { left: "0px", padding: "0rem 0 0 14rem" },
        },
      },
      animation: {
        slide: "slide 2s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
