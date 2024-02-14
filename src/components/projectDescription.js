import { UnderLineLink } from "./Projects";
const Crypto = () => {
  return (
    <>
      <p className="md:block inline">
        Live <span className="text-textGreeen">Crypto Currency Tracker</span>{" "}
        website which gives Real-time
      </p>
      <p className="md:block inline">
        data like <span className="text-textGreeen">Price, Market Cap</span>
        ,and market information
      </p>
      <p className="md:block inline">
        in both <span className="text-textGreeen">USD and INR</span> using
        graphs and deployed
      </p>
      <p>
        on{" "}
        {UnderLineLink({
          name: "Vercel.com",
          link: "https://vercel.com/",
        })}{" "}
        for easy access.
      </p>
    </>
  );
};

const EYantra = () => {
  return (
    <>
      <p className="md:block inline">
        It is a <span className="text-textGreeen">Robotics Competition at {UnderLineLink({name:"IITB", link:"https://www.iitb.ac.in/"})}</span> me and my team
      </p>
      <p className="md:block inline">
         won <span className="text-textGreeen">3rd prize</span> in theme <span className="text-textGreeen">Pharma Bot</span>.{" "}
      </p>
      <p className="md:block inline">
        I also got <span className="text-textGreeen">internship</span> for this at {UnderLineLink({name:"e-Yantra", link:"https://www.e-yantra.org/"})}
        
      </p>

    </>
  );
};
const Cosmo = () => {
  return (
    <>
      <p className="md:block inline">
        Developed interactive multi-ethnic fest website for{" "}
        {UnderLineLink({
          name: "NITR",
          link: "https://www.nitrkl.ac.in/",
        })}
        .
      </p>
      <p className="md:block inline">
        I especially worked on creating user-friendly{" "}
      </p>
      <p className="md:block inline">
        <span className="text-textGreeen">animations</span> using{" "}
        {UnderLineLink({
          name: "React Js",
          link: "https://react.dev/",
        })}{" "}
        {UnderLineLink({
          name: "Tailwind CSS",
          link: "https://tailwindcss.com/",
        })}
      </p>
      <p>
        
      </p>
    </>
  );
};
const GPT = () => {
  return (
    <>
      <p className="md:block inline">
        This a {UnderLineLink({
          name: "React Js",
          link: "https://react.dev/",
        })} learning project for me{" "}
      </p>
      <p className="md:block inline">
        it helps me to get acquainted with{" "}
      </p>
      <p className="md:block inline">
        folder structure, state, prop, hooks. 
      </p>
    </>
  );
};
const FoodShop = () => {
  return (
    <>
      <p className="md:block inline">
        This is a <span className="text-textGreeen">Food Ordering</span> website where {" "}
      </p>
      <p className="md:block inline">
      user can choose food and add that to cart and 
      </p>
      <p className="md:block inline">
      the website gives the total price. This project 
      </p>
      <p>
        contains user friendly <span className="text-textGreeen">animations</span> built using {UnderLineLink({name: "Framer motion", link: "https://www.framer.com/"})}
      </p>
    </>
  );
};
const Chat = () => {
  return (
    <>
      <p className="md:block inline">
        It is a real time chatting website. Where user{" "}
      </p>
      <p className="md:block inline">
      can make group chat or one to one chat.
      </p>
      <p className="md:block inline">
      This project helps me learn {UnderLineLink({
        name: "Socket IO",
        link: "https://socket.io/"
      })}
      </p>
      
    </>
  );
};

const DigITHack = () => {
  return (
    <>
      <p className="md:block inline">
      Developed a dynamic website for startup {UnderLineLink({name: "DigITHack", link: "https://www.digithack.in/"})}{" "}
      </p>
      <p className="md:block inline">
      showcasing innovative design and functionality,{" "}
      </p>
      <p className="md:block inline">
      highlighting expertise in frontend development
      </p>
    </>
  );
};  
export { Crypto, EYantra, Cosmo, Chat, FoodShop, GPT, DigITHack };

// • I especially worked on creating user-friendly website animations using
// the mentioned tech stacks to enhance the overall user experience
