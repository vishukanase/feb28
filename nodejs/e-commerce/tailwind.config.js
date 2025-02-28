/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", 
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        CardColor: "#2f3349",
        MybgColor: "#25293c",
        buttonColor: "#7367f0"
      }
    },
  },
  plugins: [],
}

