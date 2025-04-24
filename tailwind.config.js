/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "xs" : "344px",
        "s" : "540px",
        "sm" : "640px",
        "md" : "768px",
        'tab': '853px', 
        'surface': '912px', 
        'lg': '1024px', 
        'xl': '1280px', 
        'xxl': '1285px', 
      },
    },
  },
  plugins: [],
}
