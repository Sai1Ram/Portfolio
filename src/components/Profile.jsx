import React from "react";
import Particle from "./Particle";
import Brand from "./Brand";
import SocialLinks from "./SocialLinks";
import image from "../assets/spaceman.png";
import { motion } from "framer-motion";
function Profile() {
  return (
    <>
      <Particle />
      <div
        className="text-white w-screen h-screen p-4 md:p-6 after:content-['Profile'] after:text-6xl lg:after:text-[140px] md:after:text-[100px] after:font-[900]
         after:text-[#faf8f81a] after:fixed after:top-[5%] after:left-[20%] lg:after:left-[20%] sm:p-6 overflow-hidden"
      >
        <Brand />
        <SocialLinks color={"white"} />
        <motion.div
          className="border-2 border-white lg:w-[600px] top-[20%] left-[15%] md:w-[400px] w-[250px] lg:text-xl md:text-md text-xs fixed z-[-1] backdrop-blur-sm md:p-8 p-4 lg:leading-9 italic leading-6 font-[Ubuntu]"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <p className="">
            Hello, I'm a Mechanical Engineering student at NIT Rourkela, with a
            passion for exploring the world of front-end web development. I
            enjoy experimenting with new technologies and building exciting
            projects that showcase my skills. My favorite tools are React JS and
            Tailwind CSS, which I use to create beautiful and responsive
            websites. I'm also currently diving into the world of backend
            development, learning about technologies like Node JS and Django to
            expand my knowledge and skills. I believe everything is an Art when you put your consciousness in
            it. You can connect with me via social links.
          </p>
          <p className="lg:my-4">
            To know more about me check this
          </p>
          <button className="rounded-md shadow-md p-2 hover:shadow-inner shadow-white">
            Resume
          </button>
        </motion.div>
        <motion.div
          className="absolute top-[2%] right-[5%] lg:right-[10%] transition-all duration-700 animate-[float_4s_2s_ease_infinite] w-[30%]"
          initial={{ y: "70%", x: "70%", scale: 0.2, opacity: 0 }}
          animate={{ y: 0, x: 0, scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <img src={image} alt="" />
        </motion.div>
      </div>
    </>
  );
}

export default Profile;
