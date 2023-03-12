import React from "react";
import Brand from "./Brand";

import SideBar from "./SideBar";

import { motion } from "framer-motion";
import ComputerCanvas from "./Computer";

// image
import {homebg} from "../assets/herobg.png"

function Main() {
  const image = {
    src:"https://raw.githubusercontent.com/adrianhajdin/project_3D_developer_portfolio/main/src/assets/herobg.png"
  }
  return (
    <>
      <div
        className={` bg-[#050816] sm:p-6 p-2 grid grid-cols-[2rem_calc(100%-5rem)_2rem] grid-rows-[2.5rem_calc(100%-6rem)_2.5rem] gap-2 h-screen w-screen overflow-hidden box-border absolute top-0 left-0`}
        style={{background:`url(${image.src})`, backgroundPosition:"center"}}
      >

        <div
          className={` absolute top-0 left-0 bg-black transition-[height,_width] duration-[0.4s,_0.4s] ease-in delay-[0s,_0.4s] `}
        ></div>
        <div className={`top flex justify-between items-center col-span-3`}>
          <Brand color={"white"} />
          <div className="chat ">
            <a className="flex" href="mailto:sairamsenapati0022@gmail.com">

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
          
          
          side={"left"}
          text={"Works"}
        />

        <div
          className={`middle flex flex-col relative justify-center items-center `}

        >
          <ComputerCanvas/>
        </div>
        <SideBar
          rotate={"rotate-[90deg]"}
        
          side={"right"}
          text={"Profile"}
        />
      </div>
    </>
  );
}

export default Main;
