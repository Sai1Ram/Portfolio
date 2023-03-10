import React, { useState } from "react";

// import subComponents
import Particle from "./Particle";
import Brand from "./Brand";
import SocialLinks from "./SocialLinks";

// import images
import image from "../assets/spaceman.png";

// import framer motion
import { motion } from "framer-motion";
import Skills from "./Skills";

function Profile() {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick((click) => !click);
  };
  return (
    <>
      <Particle />
      <div className="text-white w-screen overflow-hidden h-screen p-4 md:p-6 before:content-['Profile'] before:text-6xl lg:before:text-[140px] md:before:text-[100px] before:font-[900] before:text-[#faf8f81a] before:fixed before:top-[5%] before:left-[20%] lg:before:left-[20%] sm:p-6  backdrop-blur-[3px]">
        <Brand />
        <SocialLinks color={"white"} />
        <motion.div
          className="md:h-[331px] lg:h-[495px] h-[468px] lg:w-[600px] md:w-[400px] w-[250px] fixed top-[18%] left-[14%] [perspective:1000px]"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          onClick={handleClick}
        >
          <div
            className={`relative lg:w-[600px] md:w-[400px] w-[250px] [transform-style:preserve-3d] ${
              click ? "[transform:rotateY(180deg)]" : ""
            } transition-[transform] duration-[2000ms] ease-in-out`}
          >
            <motion.div className="border-2  border-white md:p-8 p-4 w-full  backdrop-blur-[5px] [backface-visibility:hidden] [transform:rotateY(180deg)] lg:leading-9 italic leading-6 font-[Ubuntu] text-xs lg:text-xl md:text-md absolute">
              <p className="">
                <strong>Education : </strong>
                <p >Mechanical Engineering<br/> National Institute of Technology, Rourkela (2021-2025)</p>
                <strong>Technical Skills : </strong>
                <Skills name={"JavaScript"} range={4} click={click}/>
                <Skills name={"React Js"} range={3} click={click}/>
                <Skills name={"Tailwind CSS"} range={4} click={click}/>
                <Skills name={"Java"} range={2} click={click}/>
                <Skills name={"Python"} range={2} click={click}/>
              </p>

            </motion.div>
            <motion.div className="border-2 border-white md:p-8 p-4 w-full  backdrop-blur-[5px] [backface-visibility:hidden] lg:leading-9 italic leading-6 font-[Ubuntu] text-xs lg:text-xl md:text-md absolute">
              <p className="">
                Hello, I'm a Mechanical Engineering student at NIT Rourkela,
                with a passion for exploring the world of front-end web
                development. I enjoy experimenting with new technologies and
                building exciting projects that showcase my skills. My favorite
                tools are React JS and Tailwind CSS, which I use to create
                beautiful and responsive websites. I'm also currently diving
                into the world of backend development, learning about
                technologies like Node JS and Django to expand my knowledge and
                skills. I believe everything is an Art when you put your
                consciousness in it. You can connect with me via social links.
              </p>
              <p className="lg:my-4">
                To know more about me{" "}
                <strong>Click anywhere in this box</strong>
              </p>
            </motion.div>
          </div>
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
