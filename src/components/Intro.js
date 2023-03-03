import React from "react";
import image1 from "../assets/profile-img.png";
import { motion } from "framer-motion";
function Intro({ click }) {
  //
  return (
    <div
      className={`border-2  ${
        click
          ? "h-[80%] lg:w-[80%] border-black "
          : "h-0 opacity-0 border-white w-0"
      } overflow-hidden  flex flex-col lg:flex-row  items-center transition-[height,_width] duration-[0.3s,_0.1s] ease-linear delay-[0.3s,_0s]`}
    >
      <div
        className={`text-white font-[karla] h-[50%] lg:h-full border-2 border-b-0 lg:border-r-0 lg:border-b-2 border-white p-4 md:p-6 text-start lg:w-[50%]`}
      >
        <h1
          className={`lg:text-[130px] lg:ml-[-8px] ml-[-2px] sm:ml-[-4px] md:text-6xl text-4xl font-[1000]`}
        >
          Hii,
        </h1>
        <h2 className={`lg:text-4xl text-lg font-semibold mt-4 lg:mt-8`}>
          I am Sai Ram Senapati
        </h2>
        <p className={`text-gray-400 text-sm mt-2 md:text-lg lg:mt-8`}>
          I design and Code simple yet beautiful websites.
        </p>
      </div>
      <motion.div
        drag
        dragConstraints={{
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
        className={`flex items-end justify-center h-[50%] lg:h-full lg:w-[50%]`}
      >
        <img src={image1} alt="" className={`h-full w-full`} />
      </motion.div>
    </div>
  );
}

export default Intro;
