import React from "react";
import Brand from "./Brand";

import SideBar from "./SideBar";

import { motion } from "framer-motion";

// image
import profile from "../assets/profile_img.png";
import AnimatedTextCharacter from "./AnimatedTextCharacter";

function Main() {
  const images = [{
    src:"https://raw.githubusercontent.com/adrianhajdin/project_3D_developer_portfolio/main/src/assets/herobg.png"
  },{src:"https://i.ibb.co/QJPV14F/profile-img.png"}]
  return (
    <>
      <div
        className={` bg-[#050816] sm:p-6 p-2 grid grid-cols-[2rem_calc(100%-5rem)_2rem] grid-rows-[2.5rem_calc(100%-6rem)_2.5rem] gap-2 h-screen w-screen overflow-hidden box-border absolute top-0 left-0`}
        style={{background:`url(${images[0].src})`, backgroundPosition:"center"}}
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
          <div className="flex flex-col items-center "
          >
            <div className="w-[130px] h-[130px] lg:w-[230px] lg:h-[230px] rounded-full border-2 border-green-500">
            <img src={profile} alt="" className="w-full h-full rounded-full"/></div>
            <h1 className="text-gray-500 md:text-4xl text-lg lg:text-5xl"><AnimatedTextCharacter text={"Hi, I'm Sai Ram Senapati from India"} name={true}/></h1>
            <h1 className="text-gray-500 text-md md:text-2xl lg:text-4xl"><AnimatedTextCharacter text={"Front End Developer"} name={false}/></h1>
          </div>
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
