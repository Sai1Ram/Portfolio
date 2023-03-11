import React from 'react'
import { Html, useProgress } from '@react-three/drei'
function Loader() {
    const {progress} = useProgress();
  return (
    <Html>
        <span className='h-[50px] w-[50px] rounded-[50%] bg-red-500'>
        <p style={{color:"white", fontSize:14, fontWeight:800, }}>{progress.toFixed(2)}%</p>
        </span>
    </Html>

  )
}

export default Loader