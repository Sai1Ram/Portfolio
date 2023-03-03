import React, { useState } from "react";
import Brand from "./Brand";

import Heading from "./Heading";
import Intro from "./Intro";

import Logo from "./Logo";
import SideBar from "./SideBar";
function Main() {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  return (
    <>
      <div
        className={` bg-white sm:p-6 p-4 grid grid-cols-[2rem_calc(100%-5rem)_2rem] grid-rows-[2.5rem_calc(100%-6rem)_2.5rem] gap-2 h-screen w-screen overflow-hidden box-border absolute top-0 left-0`}
      >
        <div
          className={`${
            click ? "lg:w-[50%] lg:h-full w-full h-[50%]" : "w-0 h-[0%]"
          } absolute top-0 left-0 bg-black transition-[height,_width] duration-[0.4s,_0.4s] ease-in delay-[0s,_0.4s] `}
        ></div>
        <div className={`top flex justify-between items-center col-span-3`}>
          <Brand click={click} />
          <div className="chat ">
            <Heading
              text={"Say hi.."}
              cl={`${click ? "lg:text-black text-white z-[1]" : ""}`}
              click = {click}
            />
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
          <Logo click={click} onclick={handleClick} />
          <Intro click={click} />
        </div>
        <SideBar
          rotate={"rotate-[90deg]"}
          click={click}
          side={"right"}
          text={"Profile"}
        />
        <div
          className={`bottom col-span-3 flex justify-around items-center  text-black`}
        >
          <Heading
            text={"About"}
            cl={`${click ? "lg:text-white z-[1]" : ""}`}
            click = {click}
            link={"/about"}
          />
          <Heading text={"My Skills"} link={"/my-skills"}     click = {click}/>
        </div>
      </div>
    </>
  );
}

export default Main;
