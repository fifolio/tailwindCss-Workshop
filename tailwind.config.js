/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        vue: {
          100: "#49e659",
          932: "#434252",
        },
      },
    },
  },
  plugins: [],
};
