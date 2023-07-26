import React, { Suspense } from "react";
import { motion } from "framer-motion";
function Blog({ heading, text, image, link, side }) {
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
          className={` border-2 border-black transtion duration-300 group w-full h-[45vh] md:h-[55vh] lg:p-4 sm:p-3 p-2 hover:bg-black hover:text-white text-black backdrop-blur-sm`}
        >
          <div
            className={`w-full h-[55%] lg:h-[65%] group-hover:border-2 group-hover:border-white`}
            >
            <Suspense fallback={<div className="animate-spin"> hello </div>}>
            <img src={image} alt="image1" className="w-full h-full" />
          </Suspense>
          </div>
          <div className={`h-[40%] lg:pt-3`}>
            <h1 className="font-semibold text-sm  sm:text-md lg:text-xl">{heading}</h1>
            <h3 className="lg:text-base sm:text-sm text-[11px] leading-3 md:text-md">{text}</h3>
          </div>
        </div>
      </motion.a>
    </>
  );
}

export default Blog;
