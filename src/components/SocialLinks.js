import { motion } from "framer-motion";
import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'
function SocialLinks({ click, color }) {
  useEffect(() => {
    document
      .getElementsByClassName("a-animate")
      .item(0)
      .classList.add(`animate-[visible_0.4s_1_0.5s_linear_forwards]`);
    document
      .getElementsByClassName("a-animate")
      .item(1)
      .classList.add(`animate-[visible_0.4s_1_0.7s_linear_forwards]`);
    document
      .getElementsByClassName("a-animate")
      .item(2)
      .classList.add(`animate-[visible_0.4s_1_0.9s_linear_forwards]`);
    document
      .getElementsByClassName("a-animate")
      .item(3)
      .classList.add(`animate-[visible_0.4s_1_1.1s_linear_forwards]`);
    document
      .getElementsByClassName("line")
      .item(0)
      .classList.add("animate-[length_0.5s_1_1.3s_linear_forwards]");
  }, [click]);
  return (
    <>
      <div
        className={`icons flex flex-col gap-2 items-center fixed bottom-0 h-[40%] left-6 sm:left-6`}
      >
        <motion.a
          className={`${click ? "z-[1] lg:text-white " : ""}  ${
            color === "white" ? "text-white" : "text-black"
          } a-animate opacity-0`}
          href="https://github.com/Sai1Ram"
          target={"_blank"}
          rel="noreferrer"
          whileHover={{
            scale: 1.1,
            textShadow: "0px 0px 4px gray",
          }}
        >
          <FaGithub
            className="h-[20px] w-[20px] md:h-[30px] md:w-[30px]"
            fill={"currentColor"}
          />
        </motion.a>

        <motion.a
          className={`${click ? "lg:text-white z-[1]  " : ""}  ${
            color === "white" ? "text-white" : "text-black"
          } a-animate opacity-0`}
          href="https://github.com/Sai1Ram"
          target={"_blank"}
          rel="noreferrer"
          whileHover={{
            scale: 1.1,
            textShadow: "0px 0px 4px gray",
          }}
        >
          <FaInstagram
            className="h-[20px] w-[20px] md:h-[30px] md:w-[30px]"
            fill={"currentColor"}
          />
        </motion.a>
        <motion.a
          className={`${click ? "lg:text-white z-[1]  " : ""}  ${
            color === "white" ? "text-white" : "text-black"
          } a-animate opacity-0`}
          href="https://github.com/Sai1Ram"
          target={"_blank"}
          rel="noreferrer"
          whileHover={{
            scale: 1.1,
            textShadow: "0px 0px 4px gray",
          }}
        >
          <FaLinkedin
            className="h-[20px] w-[20px] md:h-[30px] md:w-[30px]"
            fill={"currentColor"}
          />
        </motion.a>
        <motion.a
          className={`${click ? "lg:text-white z-[1]  " : ""}  ${
            color === "white" ? "text-white" : "text-black"
          } a-animate opacity-0`}
          href="https://github.com/Sai1Ram"
          target={"_blank"}
          rel="noreferrer"
          whileHover={{
            scale: 1.1,
            textShadow: "0px 0px 4px gray",
          }}
        >
          <FaTwitter
            className="h-[20px] w-[20px] md:h-[30px] md:w-[30px]"
            fill={"currentColor"}
          />
        </motion.a>
        <span
          className={`w-[2px]  ${click ? "z-[1] lg:bg-white" : "h-0"}  ${
            color === "white" ? "bg-white" : "bg-black"
          } line`}
        ></span>
      </div>
    </>
  );
}

export default SocialLinks;
