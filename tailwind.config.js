/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "xs" : "360px",
        "sm" : "640px",
        "md" : "768px",
        'tab': '853px', 
        'lg': '1024px', 
        'xl': '1280px', 
        '2xl': '1536px', 
      },
    },
  },
  plugins: [],
}
