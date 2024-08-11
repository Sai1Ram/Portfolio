// import image files
import {
  Crypto,
  EYantra,
  Cosmo,
  DigITHack,
  FoodShop,
  GPT,
  LiveCode,
} from "./projectDescription";

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
    images:
      "https://res.cloudinary.com/dtp5uqey3/image/upload/v1705374629/portfolio/cosmopolitan_zit8j6.png",
    heading: "COSMOPOLITAN",
    link: "https://www.multiethnicfest.com/",
    gitLink: "",
    skillUsed: [
      {
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
    description: <Cosmo />,
  },
  {
    images:
      "https://res.cloudinary.com/dtp5uqey3/image/upload/v1707889249/portfolio/Screenshot_2024-02-14_110835_esbm51.png",
    heading: "DigIT-Hack",
    link: "https://www.digithack.in/",
    gitLink: "",
    skillUsed: [
      {
        name: "React Js",
        link: "https://react.dev/",
      },
      {
        name: "Tailwind CSS",
        link: "https://tailwindcss.com/",
      },
    ],
    description: <DigITHack />,
  },
  {
    images:
      "https://res.cloudinary.com/dtp5uqey3/image/upload/v1723317874/portfolio/Screenshot_2024-08-11_003909_luk50l.png",
    heading: "Live-Code",
    link: "https://live-code-mu.vercel.app/",
    gitLink: "https://github.com/Sai1Ram/live-code",
    skillUsed: [
      {
        name: "Node JS",
        link: "https://nodejs.org/en",
      },
      {
        name: "Express Js",
        link: "https://expressjs.com/",
      },
      {
        name: "Socket IO",
        link: "https://socket.io/",
      },
      {
        name: "React Js",
        link: "https://react.dev/",
      },
    ],
    description: <LiveCode />,
  },

  // {
  //   images:
  //     "https://res.cloudinary.com/dtp5uqey3/image/upload/v1690387412/portfolio/Screenshot_2023-07-26_213300_mbotol.png",
  //   heading: "Crypto Tracker",
  //   link: "https://crypto-tracker-sai.vercel.app/",
  //   gitLink: "https://github.com/Sai1Ram/crypto_tracker",
  //   skillUsed: [
  //     {
  //       name: "Next Js",
  //       link: "https://nextjs.org/",
  //     },
  //     {
  //       name: "Tailwind CSS",
  //       link: "https://tailwindcss.com/",
  //     },
  //     {
  //       name: "TypeScript",
  //       link: "https://www.typescriptlang.org/",
  //     },
  //   ],
  //   description: <Crypto />,
  // },
  {
    images:
      "https://res.cloudinary.com/dtp5uqey3/image/upload/v1690387004/portfolio/IMG_2096_tvgzyg.jpg",
    heading: "e-Yantra",
    text: "I'm proud to have achieved 3rd place in e-Yantra, a Ministry of Education-funded robotics outreach program hosted at IIT Bombay. Our team used a Raspberry Pi and AlphaBot, programmed with Python, to create our winning robot.",
    link: "https://youtu.be/7L1HzlAIuvg?t=21680",
    skillUsed: [
      {
        name: "Python",
        link: "https://www.python.org/",
      },
      {
        name: "Coppeliasim",
        link: "https://www.coppeliarobotics.com/",
      },
      {
        name: "Open CV",
        link: "https://opencv.org/",
      },
    ],
    description: <EYantra />,
  },
  // {
  //   images:
  //     "https://res.cloudinary.com/dtp5uqey3/image/upload/v1690387005/portfolio/Screenshot_20230130_115502_moww7f.png",
  //   heading: "Food Shop",
  //   text: "Welcome to our online food store! With our easy-to-use e-commerce website built with React JS, you can browse through a variety of delicious food options, add your favorites to your cart, and checkout seamlessly.",
  //   link: "https://food-shop-web.netlify.app/",
  //   gitLink: "https://github.com/Sai1Ram/FoodTask",
  //   skillUsed: [
  //     {
  //       name: "React Js",
  //       link: "https://react.dev/",
  //     },
  //     {
  //       name: "CSS",
  //       link: "https://www.w3schools.com/css/",
  //     },
  //   ],
  //   description: <FoodShop />,
  // },
  // {
  //   images:
  //     "https://res.cloudinary.com/dtp5uqey3/image/upload/v1690387003/portfolio/Screenshot_2023-03-07_115933_idkv3j.png",
  //   heading: "GPT-3",
  //   text: "Welcome to our website, where you can explore the exciting world of GPT-3 and Open AI! Our static website, built using React JS, provides you with a brief and informative introduction to these cutting-edge technologies.",
  //   link: "https://gpt-3info.netlify.app/",
  //   gitLink: "https://github.com/Sai1Ram/GPT-3",
  //   skillUsed: [
  //     {
  //       name: "React Js",
  //       link: "https://react.dev/",
  //     },
  //     {
  //       name: "CSS",
  //       link: "https://www.w3schools.com/css/",
  //     },
  //   ],
  //   description: <GPT />,
  // },
];
export const projectData = [
  {
    heading: "CYBORG",
    link: "https://www.cyborgnitrkl.in/",
    gitLink: "",
    skillUsed: [
      {
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
    description: "Cyborg is the official Robotics and Automation society of NIT Rourkela. I was the lead of the Web and Automation subsystem and we built this website for our club.",
  },
  {
    heading: "Roots 2023",
    link: "https://roots2023.vercel.app",
    gitLink: "",
    skillUsed: [
      {
        name: "React Js",
        link: "https://react.dev/",
      },
      {
        name: "Tailwind CSS",
        link: "https://tailwindcss.com/",
      },
    ],
    description: "Roots is the cultural fest of NIT Rourkela. We built a user-friendly website to showcase the fest's events, with multiple animations to enhance the user experience.",
  },
  {
    heading: "Anon",
    link: "https://anon-nu.vercel.app/",
    gitLink: "https://github.com/Sai1Ram/Anon",
    skillUsed: [
      {
        name: "HTML",
        link: "https://www.w3schools.com/html/",
      },
      {
        name: "CSS",
        link: "https://www.w3schools.com/css/",
      },
      {
        name: "JavaScript",
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      },
      
    ],
    description: "This is a static shopping website with a beautiful design and user-friendly animations. It is a learning-based project built using HTML, CSS, and JavaScript.",
  },
  {
    
    heading: "Crypto Tracker",
    link: "https://crypto-tracker-sai.vercel.app/",
    gitLink: "https://github.com/Sai1Ram/crypto_tracker",
    skillUsed: [
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
      },
    ],
    description: "Live Crypto Currency Tracker website which gives Real-time data like Price, Market Cap, and market information in both USD and INR using graphs and deployed on Vercel.com for easy access.",
  },
  {
    heading: "CRSI-NITR",
    link:"https://crsi2023.nitrkl.ac.in/",
    gitLink: "",
    skillUsed: [
      {
        name: "PHP",
        link: "https://www.php.net/",
      },
      {
        name: "MySQL",
        link: "https://www.mysql.com/",
      },
    ],
    description: "CRSI is the official website of the Chemical Research Society of India at NIT Rourkela. I worked on the Sign Up and Login pages using PHP and MySQL.",
  },
  {
    heading: "Food Shop",
    link: "https://food-shop-web.netlify.app/",
    gitLink: "",
    skillUsed: [
      {
        name: "React Js",
        link: "https://react.dev/",
      },
      {
        name: "CSS",
        link: "https://www.w3schools.com/css/",
      },
    ],
    description: "Welcome to our online food store! With our easy-to-use e-commerce website built with React JS, you can browse through a variety of delicious food options, add your favorites to your cart, and checkout seamlessly.",
  },
  {
    heading: "GPT-3",
    link: "https://gpt-3info.netlify.app/",
    gitLink: "https://github/Sai1Ram/GPT-3",
    skillUsed: [
      {
        name: "React Js",
        link: "https://react.dev/",
      },
      {
        name: "CSS",
        link: "https://www.w3schools.com/css/",
      },
    ],
    description: "Welcome to our website, where you can explore the exciting world of GPT-3 and Open AI! Our static website, built using React JS, provides you with a brief and informative introduction to these cutting-edge technologies.",
  },
];
export default technologies;
