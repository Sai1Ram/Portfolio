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
        }, 
        loading:{
          "0%":{
            transform:"translateZ(-100px)",
            width:"100%",
            height:"100%"
          },
          "25%":{
            transform:"translateZ(100px)",
            width:"100%",
            height:"100%"
          },
          "50%":{
            transform:"translateZ(-100px)",
            width:"35%",
            height:"35%"
          },
          "75%":{
            transform:"translateZ(100px)",
            width:"35%",
            height:"35%"
          },
          "100%":{
            transform:"translateZ(-100px)",
            width:"100%",
            height:"100%"
          },
        },
      },
      colors: {
        bgColor: 'var(--navy)',
        lightSlate: 'var(--light-slate)',
        lightestSlate: 'var(--lightest-slate)',
        lightestNavy: 'var(--lightest-navy)',
        lightNavy: 'var(--light-navy)',
        slate: 'var(--slate)',
        textGreeen: 'var(--green)',
        layer: 'var(--green-tint)',
        darkNavy: 'var(--dark-navy)',
        navyShadow: 'var(--navy-shadow)'
      },
      fontFamily:{
        fontMono: 'var(--font-mono)',
        fontSans: 'var(--font-sans)'
      },
      
      // fontSize:{
      //   textMd: 'var(--fz-md)',
      //   textLg: 'var(--fz-lg)',
      //   textXl: 'var(--fz-xl)',
      //   textXxl: 'var(--fz-xxl)',
      // }
    },
  },
  plugins: [require("tailwind-scrollbar")],
}