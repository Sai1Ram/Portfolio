// import image files
import {Crypto, EYantra, Cosmo, Chat, FoodShop, GPT} from "./projectDescription";

const technologies = [
    {
      name: "HTML 5",
      icon: "https://res.cloudinary.com/dtp5uqey3/image/upload/v1679637150/portfolio/html_dyrmws.png",
    },
    {
      name: "CSS 3",
      icon: "https://res.cloudinary.com/dtp5uqey3/image/upload/v1679637150/portfolio/css_je3kuc.png",
    },
    {
      name: "JavaScript",
      icon: "https://res.cloudinary.com/dtp5uqey3/image/upload/v1679637150/portfolio/javascript_fscw5i.png",
    },
    {
      name: "React JS",
      icon: "https://res.cloudinary.com/dtp5uqey3/image/upload/v1679637150/portfolio/reactjs_qxndia.png",
    },
    {
      name: "PHP",
      icon: "https://res.cloudinary.com/dtp5uqey3/image/upload/v1679651461/portfolio/kisspng-php-server-side-scripting-yii-web-application-scri-5b00d886698cb9.3580042815267820864324_toqlik.jpg",
    },
    {
      name: "Tailwind CSS",
      icon: "https://res.cloudinary.com/dtp5uqey3/image/upload/v1679637151/portfolio/tailwind_axhorq.png",
    },
    {
      name: "Node JS",
      icon: "https://res.cloudinary.com/dtp5uqey3/image/upload/v1679637151/portfolio/nodejs_vk2f3h.png",
    },
    {
      name: "MongoDB",
      icon: "https://res.cloudinary.com/dtp5uqey3/image/upload/v1679637151/portfolio/mongodb_vkiokg.png",
    },
    {
      name: "git",
      icon: "https://res.cloudinary.com/dtp5uqey3/image/upload/v1679637150/portfolio/git_khlotn.png",
    },
  ];
  export const data = [
    
    {
      images: "https://res.cloudinary.com/dtp5uqey3/image/upload/v1690387004/portfolio/Screenshot_2023-03-11_172659_tfqq55.png",
      heading:"COSMOPOLITAN",
      text: "I contributed to the development of our institute's Multiethnic Fest website, primarily focusing on the frontend. During the project, I gained valuable insights and proficiency in Tailwind CSS, which has further improved my skills as a frontend developer.",
      link: "https://www.multiethnicfest.com/events",
      gitLink: "",
      skillUsed: [{
        name: "Next Js",
        link: "https://nextjs.org/",
      },
      {
        name: "React Js",
        link: "https://react.dev/",
      },
      {
        name: "Tailwind CSS",
        link: "https://tailwindcss.com/",
      },

    ],
    description: <Cosmo/>
    },
    {
      images: "https://res.cloudinary.com/dtp5uqey3/image/upload/v1690388550/portfolio/Screenshot_2023-07-26_215149_xlukfi.png",
      heading:"Quick Chat",
      text: " Creating Quick Chat a real chat application using Node.js, Express.js, MongoDB, socket io, tailwind CSS, Redux, and React. Implementing one-to-one and group chat features for seamless communication. This project is helping me in learning and using socket io",
      link: "https://quick-chat-sai.vercel.app/",
      gitLink:"https://github.com/Sai1Ram/Chat-frontend",
      skillUsed: [{
        name: "React Js",
        link: "https://react.dev/",
      },
      {
        name: "Tailwind CSS",
        link: "https://tailwindcss.com/",
      },
      {
        name: "Node JS",
        link: "https://nodejs.org/en",
      },
      {
        name: "Express Js",
        link: "https://expressjs.com/"
      },
      {
        name: "Socket IO",
        link: "https://socket.io/"
      }
    ],
    description: <Chat/>
    },
    {
      images: "https://res.cloudinary.com/dtp5uqey3/image/upload/v1690387412/portfolio/Screenshot_2023-07-26_213300_mbotol.png",
      heading:"Crypto Tracker",
      text: "It is a website that gives all the live data like price, market cap, profit, loss, and changes with a graph view about the cryptocurrency. It is a learning-based project for me and I used Next JS, TypeScript, and Material UI for this project. A",
      link: "https://crypto-tracker-sai.vercel.app/",
      gitLink:"https://github.com/Sai1Ram/crypto_tracker",
      skillUsed:[
        {
          name: "Next Js",
          link: "https://nextjs.org/",
        },
        {
          name: "Tailwind CSS",
          link: "https://tailwindcss.com/",
        },
        {
          name: "TypeScript",
          link: "https://www.typescriptlang.org/",
        }
      ],
      description: <Crypto/>
    },
    {
      images: "https://res.cloudinary.com/dtp5uqey3/image/upload/v1690387004/portfolio/IMG_2096_tvgzyg.jpg",
      heading:"e-Yantra",
      text: "I'm proud to have achieved 3rd place in e-Yantra, a Ministry of Education-funded robotics outreach program hosted at IIT Bombay. Our team used a Raspberry Pi and AlphaBot, programmed with Python, to create our winning robot.",
      link: "https://youtu.be/7L1HzlAIuvg?t=21680",
      skillUsed: [{
        name: "Python",
        link: "https://www.python.org/",
      },
      {
        name: "Coppeliasim",
        link: "https://www.coppeliarobotics.com/",
      },
      {
        name: "Open CV",
        link: "https://opencv.org/"
      }
    ],
    description: <EYantra/>
    },
    {
      images: "https://res.cloudinary.com/dtp5uqey3/image/upload/v1690387005/portfolio/Screenshot_20230130_115502_moww7f.png",
      heading:"Food Shop",
      text: "Welcome to our online food store! With our easy-to-use e-commerce website built with React JS, you can browse through a variety of delicious food options, add your favorites to your cart, and checkout seamlessly.",
      link: "https://food-shop-web.netlify.app/",
      gitLink:"https://github.com/Sai1Ram/FoodTask",
      skillUsed: [{
        name: "React Js",
        link: "https://react.dev/",
      },
      {
        name: "CSS",
        link: "https://www.w3schools.com/css/",
      },],
      description: <FoodShop/>
    },
    {
      images: "https://res.cloudinary.com/dtp5uqey3/image/upload/v1690387003/portfolio/Screenshot_2023-03-07_115933_idkv3j.png",
      heading:"GPT-3",
      text: "Welcome to our website, where you can explore the exciting world of GPT-3 and Open AI! Our static website, built using React JS, provides you with a brief and informative introduction to these cutting-edge technologies.",
      link: "https://gpt-3info.netlify.app/",
      gitLink: "https://github.com/Sai1Ram/GPT-3",
      skillUsed: [{
        name: "React Js",
        link: "https://react.dev/",
      },
      {
        name: "CSS",
        link: "https://www.w3schools.com/css/",
      },],
      description: <GPT/>
    },

  ];
  export default technologies
  // export {data}
  





  // {
  //   images: "https://res.cloudinary.com/dtp5uqey3/image/upload/v1690386978/portfolio/e-yrc_o686m4.jpg",
  //   heading:"Summer Intern e-Yantra (IITB)",
  //   text: "Welcome to our online food store! With our easy-to-use e-commerce website built with React JS, you can browse through a variety of delicious food options, add your favorites to your cart, and checkout seamlessly.",
  //   link:"https://drive.google.com/file/d/1bckSo_SS53fT701DrlzuO7TemZ_vTbJe/view?usp=sharing"
  // },
  // {
  //   images: "https://res.cloudinary.com/dtp5uqey3/image/upload/v1690386939/portfolio/neoPhyte_huemce.png",
  //   heading:"Web Devloper Intern at NeyoPyte",
  //   text: " As a Web Development Intern, I worked on API integration and creating visually appealing UI for websites using React. Also used React, Redux, Tailwind CSS, and Material UI to improve front-end development.",
  //   link:"https://neophyte.live/"
  // },
