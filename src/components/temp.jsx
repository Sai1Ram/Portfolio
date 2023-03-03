import React from 'react'
import Brand from './Brand'
import SocialLinks from './SocialLinks'

function Works() {

  return (
    <div className={`h-screen w-screen overflow-hidden p-4 md:p-6`}>
      <Brand/>
      <div className={`flex justify-center items-center gap-4 h-full`}>
          <div className={`one hover:text-white hover:bg-black border-2 border-black w-[35%] h-[60%]`}></div>
          <div className={`two hover:text-white hover:bg-black border-2 border-black w-[35%] h-[60%]`}></div>
      </div>
      <SocialLinks/>
    </div>
  )
}

export default Works