import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { FiInstagram, FiLinkedin, FiGithub, FiTwitter } from "react-icons/fi";
function SocialLinks({ side }) {
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
  }, []);
  return (
    <>
      {side === "left" && (
        <div
          className={`icons flex-col gap-7 items-center fixed bottom-0 h-[43%] left-12 lg:flex hidden`}
        >
          <motion.a
            className={`text-lightSlate a-animate opacity-0`}
            href="https://github.com/Sai1Ram"
            target={"_blank"}
            rel="noreferrer"
            whileHover={{
              scale: 1.1,
              textShadow: "0px 0px 4px gray",
            }}
          >
            <FiGithub
              className="h-[20px] w-[20px]"
              // md:h-[30px] md:w-[30px]
              // fill={"currentColor"}
            />
          </motion.a>

          <motion.a
            className={`text-lightSlate a-animate opacity-0`}
            href="https://instagram.com/__sai_ram_senapati?igshid=ZDdkNTZiNTM="
            target={"_blank"}
            rel="noreferrer"
            whileHover={{
              scale: 1.1,
              textShadow: "0px 0px 4px gray",
            }}
          >
            <FiInstagram
              className="h-[20px] w-[20px]"
              // md:h-[30px] md:w-[30px]
              // fill={"currentColor"}
            />
          </motion.a>
          <motion.a
            className={`text-lightSlate a-animate opacity-0`}
            href="https://www.linkedin.com/in/sai1ram/"
            target={"_blank"}
            rel="noreferrer"
            whileHover={{
              scale: 1.1,
              textShadow: "0px 0px 4px gray",
            }}
          >
            <FiLinkedin
              className="h-[20px] w-[20px]"
              // md:h-[30px] md:w-[30px]
              // fill={"currentColor"}
            />
          </motion.a>
          <motion.a
            className={`text-lightSlate a-animate opacity-0`}
            href="https://twitter.com/SaiRam00223"
            target={"_blank"}
            rel="noreferrer"
            whileHover={{
              scale: 1.1,
              textShadow: "0px 0px 4px gray",
            }}
          >
            <FiTwitter
              className="h-[20px] w-[20px] "
              // md:h-[30px] md:w-[30px]
              // fill={"currentColor"}
            />
          </motion.a>
          <span className={`w-[2px]  bg-lightSlate  line `}></span>
        </div>
      )}
      {side === "right" && (
        <div
          className={`flex-col items-center fixed bottom-0 h-[40%] right-12 w-4 lg:flex hidden`}
        >
          <a href="mailto:sairamsenapati0022@gmail.com" className="rotate-90 text-slate font-fontMono hover:text-textGreeen focus:text-textGreeen">sairamsenapati0022@gmail.com</a>
          <span className={`w-[2px]  bg-lightSlate absolute bottom-0 h-[46%] `}></span>
        </div>
      )}
    </>
  );
}

export default SocialLinks;
