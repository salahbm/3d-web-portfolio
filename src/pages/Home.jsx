import { Canvas } from "@react-three/fiber";
import React, { Suspense, useState , useEffect, useRef} from 'react';
import HomeInfo from '../components/HomeInfo';
import Loader from '../components/Loader';
import Bird from '../models/Bird';
import HomeInfo2 from "../components/HomeInfo2";
import { FlyingPlane } from '../models/FlyingPlane';
import Island from '../models/Island';
import Sky from '../models/Sky';
import { Rocket } from "../models/Rocket";
import Desert from "../models/Desert";
import { Avatar } from "../models/Avatar";

const Home = () => {

  const [isRotating, setIsRotating] = useState(false)
  const [currentStage, setCurrentStage] = useState(1)



const adjustIslandForScreenSize =   ()=>{
let screenScale=null;
 let screenPosition=[0,-6.5, -43]
 let rotation = [0.09, 0,0 ]
if (window.innerWidth <768 ) {
    screenScale=[ 0.6,0.6,0.6]

    
}else{
    screenScale=[ 1, 1,1]
}
return [screenPosition, screenScale,rotation]
}  
const adjustBiplaneForScreenSize = () => {
  let screenScale, screenPosition;

  if (window.innerWidth < 768) {
    screenScale =[-0.9, 0.8, 0.8]
    screenPosition =[-0, -1, 3]
  } else {
    screenScale = [-0.9, 1, 1]
    screenPosition =[-0, -1, 3]
  }

  return [screenScale, screenPosition];
};
const adjustRocketForScreenSize = () => {
  let screenScale, screenPosition;

  if (window.innerWidth < 768) {
    screenScale =[-0.5, 0.5, 0.5]
    screenPosition =[0, -1, 3]
  } else {
    screenScale = [-0.7, 0.7, 0.6]
    screenPosition =[0, -0.87, 3]
  }

  return [screenScale, screenPosition];
};
const adjustAvatarForScreenSize = () => {
  let screenScale, screenPosition;

  if (window.innerWidth < 768) {
    screenScale =[0.3, 0.3, 0.3]
    screenPosition =[0.25, -0.9, 3.68]
  } else {
    screenScale = [-0.5, 0.5, 0.5]
    screenPosition =[1.1, -0.9, 3.5]
  }

  return [screenScale, screenPosition];
}
const [avatarScale, avatarPosition]=adjustAvatarForScreenSize()
const [isPlaneScale, isPlanePosition] = adjustBiplaneForScreenSize();
const [isRocketScale, isRocketPosition] = adjustRocketForScreenSize();
const [isIslandPosition, isIslandScale,isIslandRotation]=adjustIslandForScreenSize()



  return (
 <section className='w-full h-screen overflow-auto relative' >
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

<FlyingPlane scale={isPlaneScale} position={isPlanePosition} isRotating={isRotating}        rotation={[0, 0.1, 0]}/>

</Suspense>
</Canvas>

<div className='absolute -bottom-[24%] md:-bottom-[40%] right-0 md:right-10 z-10 flex items-center justify-center'>  
<HomeInfo2 />
      </div>
<Canvas    className={`w-full h-screen bg-transparent`}
camera={{near:0.1, far:1000}}> 
<Suspense fallback={<Loader/>}>

<directionalLight position={[1,1,1]} intensity={2}/>
<ambientLight intensity={0.5}/>
<hemisphereLight skyColor='#b1e1ff' groundColor={'#333'} intensity={1}/>

<Avatar scale={avatarScale} position={avatarPosition}
 />
<Sky isRotating={isRotating}/>
<Desert/>
<Rocket scale={isRocketScale} position={isRocketPosition}        rotation={[0, 0.1, 0]}/>
</Suspense>
</Canvas>




</section> 

  )
}

export default Home

