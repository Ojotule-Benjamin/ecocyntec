/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        CrimsonText: ["Crimson Text", "serif"],
      },
      colors: {
        primaryColor: "#00A651",
        textColor: "#005F41",
        textColorWhite: "#FFFAFA",
        textNav: "#AA985D",
        backgroundColor: "FFFAFA",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
};
