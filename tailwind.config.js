/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        dark: {
          950: "#0C0533",
          850: "#17113B",
          500: "#3E366E",
          350: "#766FA1",
          100: "#C3C0D4",
        },
        bright: {
          950: "#052033",
          850: "#153145",
          500: "#3C5F78",
          350: "#7895AB",
          100: "#C9D6DF",
        },
      },
    },
  },
  plugins: [],
};
