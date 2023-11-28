import { Canvas } from "@react-three/fiber";
import React, { Suspense, useState , useEffect, useRef} from 'react';
import HomeInfo from '../components/HomeInfo';
import Loader from '../components/Loader';
import Bird from '../models/Bird';
import { FlyingPlane } from '../models/FlyingPlane';
import Island from '../models/Island';
import Sky from '../models/Sky';
import sakura2 from '../assets/sakura2.mp3'
import { soundoff, soundon } from "../assets/icons";
const Home = () => {
  const audioRef = useRef(new Audio(sakura2))
  audioRef.current.volume=0.4
  audioRef.current.loop=true

  const [isRotating, setIsRotating] = useState(false)
  const [isPlayingSong, setIsPlayingSong] = useState(false)
  const [currentStage, setCurrentStage] = useState(1)
const adjustIslandForScreenSize =   ()=>{
let screenScale=null;
 let screenPosition=[0,-6.5, -43]
 let rotation = [0.09, 0,0 ]
if (window.innerWidth <768 ) {
    screenScale=[ 0.9,0.9,0.9]

    
}else{
    screenScale=[ 1, 1,1]
}
return [screenPosition, screenScale,rotation]
}  
const adjustBiplaneForScreenSize = () => {
  let screenScale, screenPosition;

  // If screen width is less than 768px, adjust the scale and position
  if (window.innerWidth < 768) {
    screenScale = [1.5, 2.5, 1.5];
    screenPosition = [0, -1.5, 0];
  } else {
    screenScale = [3, 3, 3];
    screenPosition = [0, -4, -4];
  }

  return [screenScale, screenPosition];
};
const [isPlaneScale, isPlanePosition] = adjustBiplaneForScreenSize();
const [isIslandPosition, isIslandScale,isIslandRotation]=adjustIslandForScreenSize()

useEffect(()=>{
if (isPlayingSong) {
  audioRef.current.play()
}
return()=>{
  audioRef.current.pause()
}
},[isPlayingSong])

  return (
<section className='w-full h-screen relative'>
    <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>  
{currentStage && <HomeInfo currentStage={currentStage}/>}
      </div>
<Canvas className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing': 'cursor-grab'}`}
camera={{near:0.1, far:1000}}> 
<Suspense fallback={<Loader/>}>

<directionalLight position={[1,1,1]} intensity={2}/>
<ambientLight intensity={0.5}/>
<hemisphereLight skyColor='#b1e1ff' groundColor={'#333'} intensity={1}/>
<Bird/>
<Sky isRotating={isRotating}/>
<Island position={isIslandPosition} scale={isIslandScale} rotation={isIslandRotation} isRotating={isRotating} setIsRotating={setIsRotating} setCurrentStage={setCurrentStage}/>

<FlyingPlane planeScale={isPlaneScale} planePosition={isPlanePosition} isRotating={isRotating}  />
</Suspense>
</Canvas>

{/* music */}
<div className="absolute bottom-4 right-4 flex flex-col items-center ">
  <p className='blue-gradient_text  rotate-90 transform font-bold mb-10 lg:block hidden'>Sound {isPlayingSong ? 'On':'Off'}</p>
  <img src={isPlayingSong ? soundon: soundoff} alt="SoundOn" className="w-10 h-10 cursor-pointer object-contain" onClick={()=>setIsPlayingSong(!isPlayingSong)}/>
</div>

</section>
  )
}

export default Home