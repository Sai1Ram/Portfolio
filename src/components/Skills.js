import React from 'react'
import {BsStar, BsStarFill} from "react-icons/bs"
import { motion } from 'framer-motion'
function Skills({name, range, click}) {
  // useEffect(()=>{},[])
  return (
    <div className='flex items-center justify-between relative'>
      <div className="names mr-2">{name}</div>
      <div className="flex absolute left-[70%] md:left-[80%] rotate-180">

        {[...Array(5).keys()].map(x => ++x).map(()=>{return(<BsStar className='lg:text-[15px] text-[8px] ml-1'/>)})}
        </div>
        <motion.div className="flex absolute  rotate-180 left-[70%] md:left-[80%]">
        {[...Array(range).keys()].map(x => ++x).map((v,i)=>{return(<BsStarFill className={`lg:text-[15px] text-[8px] ml-1 ${click ? `animate-[visible_5s_0s_1_linear_forwards] `:"" }ease-out tansition-all duration-500 opacity-0`}/>)})}

        </motion.div>
    </div>
  )
}

export default Skills