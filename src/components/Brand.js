import React, { useEffect } from 'react'
import {motion} from "framer-motion";
function Brand({click, color}) {
  useEffect(()=>{
    document.getElementsByClassName("brandName").item(0).classList.add("animate-[visible_0.4s_1_1.1s_linear_forwards]");
    document.getElementsByClassName("brandName").item(0).classList.add("opacity-0");
  },[click]);
  return (
    <a href ="/" className='w-[68px] lg:w-[88px] md:w-[78px] flex'>
          <motion.div
        drag
        dragConstraints={{
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }} className={`brandName z-[1] text-textGreeen w-[68px] lg:w-[88px] md:w-[78px]`}>
            <h2 className={`font-fontMono md:text-5xl text-3xl font-extrabold `}>
              SR
            </h2>
          </motion.div>
    </a>
  )
}

export default Brand
//click ? ' text-white ' : ''