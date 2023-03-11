import React, { useState } from "react";
import Brand from "./Brand";

import Intro from "./Intro";

import Logo from "./Logo";
import SideBar from "./SideBar";

import { motion } from "framer-motion";
import ComputerCanvas from "./Computer";
function Main() {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  return (
    <>
      <div
        className={` bg-[#050816] sm:p-6 p-4 grid grid-cols-[2rem_calc(100%-5rem)_2rem] grid-rows-[2.5rem_calc(100%-6rem)_2.5rem] gap-2 h-screen w-screen overflow-hidden box-border absolute top-0 left-0`}
      >
        <div
          className={`${
            click ? "lg:w-[50%] lg:h-full w-full h-[50%]" : "w-0 h-[0%]"
          } absolute top-0 left-0 bg-black transition-[height,_width] duration-[0.4s,_0.4s] ease-in delay-[0s,_0.4s] `}
        ></div>
        <div className={`top flex justify-between items-center col-span-3`}>
          <Brand click={click} color={"white"} />
          <div className="chat ">
            <a className="flex" href="mailto:sairamsenapati0022@gmail.com">
            {/* ${
                  click ? "lg:text-black text-white z-[1]" : ""
                } */}
              <motion.span
                className={`font-[karla] text-xl text-white font-semibold `}
                whileHover={{
                  scale: 1.1,
                  textShadow: "0px 0px 4px gray",
                }}
              >
                Say hi..
              </motion.span>
            </a>
          </div>
        </div>
        <SideBar
          rotate={"rotate-[-90deg]"}
          click={click}
          
          side={"left"}
          text={"Works"}
        />

        <div
          className={`middle flex flex-col relative justify-center items-center `}
        >
          {/* <Logo click={click} onclick={handleClick} />
          <Intro click={click} /> */}
          <ComputerCanvas/>
        </div>
        <SideBar
          rotate={"rotate-[90deg]"}
          click={click}
          side={"right"}
          text={"Profile"}
        />
      </div>
    </>
  );
}

export default Main;
