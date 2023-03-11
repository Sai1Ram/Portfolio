import {Suspense, useEffect, useState} from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import CanvasLoader from './Loader' 
function Computer() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(()=>{
    const mediaQuery = window.matchMedia("(max-width:500px)");
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event)=>{
      setIsMobile(event.matches);
    }
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return(mediaQuery.removeEventListener("change", handleMediaQueryChange))
  }, [])
  const computer = useGLTF('./desktop_pc/scene.gltf')
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black'/>
      <pointLight  intensity={1} position={isMobile ? [0, 0.6, 0.5] :[0, 1.5, 1.7]}/>
      <spotLight intensity={1} penumbra={1} angle={0.12} position={[-20, 50, 10]} castShadow shadow-mapSize={1024}/>
      <primitive object={computer.scene} scale={isMobile ? 0.45 : 0.95} position={isMobile ? [0, -1.2, -1.45] : [0, -2.6, -1.7]} rotation={[-0.01, -0.2, -0.1]}/>
    </mesh>
  )
}
const ComputerCanvas = () =>{
  return(
    <Canvas
    frameloop='demand'
    shadows
    camera={{position: [20, 3, 5], fov: 25}}
    gl={{preserveDrawingBuffer: true}}>
      <Suspense fallback={<CanvasLoader/>}>
      <OrbitControls 
      enablePan={false}
      enableZoom={false}
      maxPolarAngle={Math.PI / 2 }
      minPolarAngle={Math.PI / 2 }
      />
      <Computer/>
      </Suspense>
      <Preload all/>
    </Canvas>
  )
}
export default ComputerCanvas