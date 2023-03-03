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
        <div className="border-2 border-white lg:w-[600px] top-[20%] left-[15%] md:w-[400px] w-[250px] lg:text-2xl md:text-xl text-sm fixed z-[-1] backdrop-blur-sm lg:p-10 md:p-8 p-4 lg:leading-10 italic md:font-bold leading-8 font-[Ubuntu]">
          <p className="my-4">
            I'm a front-end developer located in India. I love to create simple
            yet beautiful websites with great user experience.
          </p>
          <p className="my-4">
            I'm interested in the whole frontend stack Like trying new things
            and building great projects. I'm an independent freelancer and
            blogger. I love to write blogs and read books.
          </p>
          <p className="my-4">
            {/* I believe everything is an Art when you put your consciousness in
            it. You can connect with me via social links. */}
            To know more about me check this
          </p>
          <button className="rounded-md shadow-md p-2 hover:shadow-inner shadow-white">
            Resume
          </button>
        </div>
          <motion.div
            className="absolute top-[2%] right-[5%] lg:right-[10%] transition-all duration-700 animate-[float_4s_2s_ease_infinite] w-[30%]"
            initial={{ y: "70%", x: "70%", scale: 0.2, opacity: 0 }}
            animate={{ y: 0, x: 0, scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeIn" }}
            >
            <img src={image} alt="" />
          </motion.div>
      </div>
    </>
  );
}

export default Profile;
