/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        "tech-blue": "#0072BB",
        "industry-green": "#39B54A",
        "automation-orange": "#FF5722",
        "data-purple": "#6E44FF",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
        button: "0px 8px 16px rgba(0, 114, 187, 0.2)",
        "button-hover": "0px 10px 20px rgba(0, 114, 187, 0.4)",
        section: "inset 0 -1px 0 0 rgba(0, 114, 187, 0.1)",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/images/hero-bg.png')",
        "tech-gradient": "linear-gradient(90.13deg, #0072BB 1.9%, #39B54A 97.5%)",
      },
      animation: {
        "tech-pulse": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
}