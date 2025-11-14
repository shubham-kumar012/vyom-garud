/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: "#0b0c10",
        accent: "#ff7b00",
      },
      fontFamily: {
        poppins: ["Poppins", "inter", "Montserrat"],
        inter: ["Inter", "sans-serif"], 
      },
    },
  },
}
