import React from 'react'
function Loader() {
  return (
    <div className="flex justify-center items-center bg-[#040c18] h-screen w-screen ">
      <div className="loader relative h-[180px] w-[180px] flex justify-center items-center" style={{transformStyle:"preserve-3d", transform:"perspective(500px) rotateX(45deg)"}}><span className='absolute border-[15px] border-white shadow-[0px_10px_0_#e0e0e0_,_inset_0px_10px_0_#e0e0e0] rounded-full block animate-[loading_2.5s_0s_ease-in-out_infinite]'></span><span className='absolute border-[15px] border-white shadow-[0px_10px_0_#e0e0e0_,_inset_0px_10px_0_#e0e0e0] rounded-full block animate-[loading_2.5s_0.7s_ease-in-out_infinite]'></span><span className='absolute border-[15px] border-white shadow-[0px_10px_0_#e0e0e0_,_inset_0px_10px_0_#e0e0e0] rounded-full block animate-[loading_2.5s_1.5s_ease-in-out_infinite]'></span></div>
    </div>

  )
}

export default Loader