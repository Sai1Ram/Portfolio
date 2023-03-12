import React from "react";
import { Link } from "react-router-dom";
import SocialLinks from "./SocialLinks";
import { motion } from "framer-motion";

function SideBar({ rotate, click, side, text }) {
  return (
    // absolute top-[50%] translate-y-[-50%]
    <>
      <div className="left box-border">
        <div className={`w-[2rem] h-full relative `}>
          <div
            className={`bottom overflow-hidden text-white ${
              click
                ? "h-[50%] top-[50%] lg:hidden animate-[visible_0.4s_1_0.5s_linear_forwards] opacity-0"
                : "h-full top-0"
            } w-full absolute left-0`}
          >
            {side === "left" && (
              <Link
                className={`absolute ${rotate} w-full text-center  ${
                  click ? "" : "top-[50%]"
                }`}
                to={"/" + text}
              >
                <motion.span
                  className={`font-[karla] text-[23px] font-semibold`}
                  whileHover={{
                    scale: 1.1,
                    textShadow: "0px 0px 4px gray",
                  }}
                >
                  {text}
                </motion.span>
              </Link>
            )}
            {side === "right" && (
              <Link
                className={`absolute ${rotate} w-full text-center  ${
                  click ? "bottom-full" : "bottom-[50%]"
                }`}
                to={"/" + text}
              >
                <motion.span
                  className={`font-[karla] text-[23px] font-semibold`}
                  whileHover={{
                    scale: 1.1,
                    textShadow: "0px 0px 4px gray",
                  }}
                >
                  {text}
                </motion.span>
              </Link>
            )}
          </div>
        </div>
        {side === "left" && <SocialLinks click={click} color={"white"}/>}
      </div>
    </>
  );
}

export default SideBar;
