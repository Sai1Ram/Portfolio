/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes:{
        visible:{
          "0%":{
            opacity:"0"
          },
          "50%":{opacity:"0.5"},
          "100%":{
            opacity:"1"
          }
        },
        length:{
          "0%":{
            height:"0"
          },
          "50%":{height:"50%"},
          "100%":{
            height:"100%"
          }
        },
        float:{
          "0%":{
            transform:"translateY(-10px)",
          },
          "50%":{
            transform:"translateY(15px) translateX(15px)",
          },
          "100%":{
            transform:"translateY(-10px)",
          }
        }
      },
      backgroundImage: {
        'hero-pattern': "url('https://images.unsplash.com/photo-1661961110671-77b71b929d52?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')",
      }
    },
  },
  plugins: [require("tailwind-scrollbar")],
}