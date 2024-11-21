/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    colors: {
      "very-dark-blue-main-background": "hsl(233, 47%, 7%)",
      "dark-desaturated-blue-card-background": "hsl(244, 38%, 16%)",
      "soft-violet-accent-color": "hsl(277, 64%, 61%)",
      "soft-violet-accent-background": "hsl(277, 64%, 61%, 0.4)",
      "white-main-heading-stats": "hsl(0, 0%, 100%)",
      "slightly-transparent-white-main-paragraph": "hsla(0, 0%, 100%, 0.75)",
      "slightly-transparent-white-stat-headings": "hsla(0, 0%, 100%, 0.6)",
    },
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        lexend: ["Lexend Deca", "serif"],
      },
    },
  },
  plugins: [],
};
