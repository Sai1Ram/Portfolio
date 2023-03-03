import React from "react";
import { motion } from "framer-motion";
function Blog({ text, image, link, side }) {
  return (
    <>
      {}
      <motion.a
        href={link}
        target="_blank"
        rel="noreferrer"
        initial={{x:`${side === "left" ? "100%" : side === "right" ? "-100%" :""}`, y: "100%" , opacity:0}}
        animate={{x:0, y:0, opacity:1}}
        transition={{ duration: 1, ease: "easeOut" }}

      >
        <div
          className={` border-2 border-black transtion duration-300 group w-[100%] h-[35vh] md:h-[55vh] p-4 hover:bg-black hover:text-white text-black backdrop-blur-sm`}
        >
          <div
            className={`w-full h-[65%] group-hover:border-2 group-hover:border-white`}
          >
            <img src={image} alt="image1" className="w-full h-full" />
          </div>:
          <div className={` h-[40%] pt-3 text-md sm:text-xl`}>
            <h1>{text}</h1>
            <h1>{text}</h1>
          </div>
        </div>
      </motion.a>
    </>
  );
}

export default Blog;
