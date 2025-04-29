/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInFromLeft: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideInFromTop: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        zoomIn: {
          '0%': { transform: 'scale(0)' },
          '100%': { transform: 'scale(1)' },
        },
        bounceIn: {
          '0%': { transform: 'scale(0.5)', opacity: '0' },
          '60%': { transform: 'scale(1.2)', opacity: '1' },
          '100%': { transform: 'scale(1)' },
        },
        rotateIn: {
          '0%': { transform: 'rotate(-200deg)', opacity: '0' },
          '100%': { transform: 'rotate(0deg)', opacity: '1' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-out forwards',
        slideInFromLeft: 'slideInFromLeft 1s ease-out forwards',
        slideInFromTop: 'slideInFromTop 1s ease-out forwards',
        zoomIn: 'zoomIn 0.5s ease-out forwards',
        bounceIn: 'bounceIn 1s ease-out forwards',
        rotateIn: 'rotateIn 1s ease-out forwards',      },
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
