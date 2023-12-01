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
import { arrow, swap } from "../assets/icons";
import Island2 from "../models/Island2";
import Bird2 from "../models/Bird2";

const Home = () => {

  const [isRotating, setIsRotating] = useState(false)
  const [currentStage, setCurrentStage] = useState(1)
const [swapIslands, setSwapIslands] = useState('foxIsland')

const adjustIslandForScreenSize =()=>{
  let screenScale=null;
   let screenPosition=[-0.1,-1.5, -4]
   let rotation = [0.04, 0,0 ]
  if (window.innerWidth <768 ) {
      screenScale=[ 0.14, 0.14,0.14]
  
      
  }else{
      screenScale=[ 0.19, 0.19,0.19]
  }
  return [screenPosition, screenScale,rotation]
  } 
const adjustIsland2ForScreenSize =()=>{
let screenScale=null;
 let screenPosition=[-0.7,-1, -3.66]
 let rotation = [0.09, -1,0 ]
if (window.innerWidth <768 ) {
    screenScale=[ 0.0055, 0.005,0.0055]

    
}else{
    screenScale=[ 0.0075, 0.009,0.0075]
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
    screenPosition =[0.25, -0.8, 3.68]
  } else {
    screenScale = [-0.5, 0.5, 0.5]
    screenPosition =[1.1, -0.9, 3.5]
  }

  return [screenScale, screenPosition];
}
const [avatarScale, avatarPosition]=adjustAvatarForScreenSize()
const [isPlaneScale, isPlanePosition] = adjustBiplaneForScreenSize();
const [isRocketScale, isRocketPosition] = adjustRocketForScreenSize();
const [isIsland2Position, isIsland2Scale,isIsland2Rotation]=adjustIsland2ForScreenSize()
const [isIslandPosition, isIslandScale,isIslandRotation]=adjustIslandForScreenSize()


const containerRef = useRef(null);
const [scrollY, setScrollY] = useState(0);
const startY = useRef(0); // Add this line to create a ref for startY

const handleScroll = (direction) => {
  const container = containerRef.current;
  const scrollHeight = container.scrollHeight - container.clientHeight;
  const screenHeight = window.innerHeight;
  let newScrollY;

  if (direction === 'up') {
    newScrollY = Math.max(0, scrollY - screenHeight);
  } else {
    newScrollY = Math.min(scrollHeight, scrollY + screenHeight);
  }

  container.scrollTo(0, newScrollY);
  setScrollY(newScrollY);
};

useEffect(() => {
  const container = containerRef.current;

  const handleTouchStart = (e) => {
    startY.current = e.touches[0].clientY;
  };

  const handleTouchMove = (e) => {
    const deltaY = startY.current - e.touches[0].clientY;


    if (deltaY > 70) {
      handleScroll('up');
    } else if (deltaY < -5) {
      handleScroll('down');
    }
  };

  container.addEventListener('touchstart', handleTouchStart);
  container.addEventListener('touchmove', handleTouchMove);

  return () => {
    container.removeEventListener('touchstart', handleTouchStart);
    container.removeEventListener('touchmove', handleTouchMove);
  };
}, [handleScroll]);
  return (
 <section className='w-full h-screen overflow-hidden relative'  ref={containerRef} >
    <div className='absolute top-24 left-0 right-0 z-10 flex items-center justify-center'>  
{currentStage && <HomeInfo currentStage={currentStage}/>}
      </div>
<Canvas className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing': 'cursor-grab'}`}
camera={{near:0.1, far:1000}}> 
<Suspense fallback={<Loader/>}>

<directionalLight position={[1,1,1]} intensity={2}/>
<ambientLight intensity={0.5}/>
<hemisphereLight skyColor='#b1e1ff' groundColor={'#333'} intensity={1}/>
{swapIslands ==='foxIsland' ? 
<Bird/>:
<Bird2/>}
<Sky isRotating={isRotating}/>
{swapIslands ==='foxIsland' ? <Island position={isIslandPosition} scale={isIslandScale} rotation={isIslandRotation} isRotating={isRotating} setIsRotating={setIsRotating} setCurrentStage={setCurrentStage}/> :
<Island2 position={isIsland2Position} scale={isIsland2Scale} rotation={isIsland2Rotation} isRotating={isRotating} setIsRotating={setIsRotating} setCurrentStage={setCurrentStage}/>
}
<FlyingPlane scale={isPlaneScale} position={isPlanePosition} isRotating={isRotating}        rotation={[0, 0.1, 0]}/>

</Suspense>
</Canvas>
<div className='fixed bottom-4 left-[45%] translate-[50%] flex space-x-2 ' style={{ zIndex: 9999 }}>
  <img
    src={swap}
    alt="swap"

    className={`md:w-10 md:h-10 w-7 h-7 cursor-pointer  object-contain text-blue-500`}
    onClick={() => swapIslands === 'diamond' ? setSwapIslands('foxIsland') : setSwapIslands('diamond')}
  />
</div>
<div className='fixed bottom-4 left-[49%] translate-[50%] flex space-x-2 ' style={{ zIndex: 9999 }}>
  <img
    src={arrow}
    alt="ScrollButton"
    className={`md:w-10 md:h-10 w-7 h-7 cursor-pointer ${scrollY === 0 ? 'rotate-90' : '-rotate-90'} object-contain`}
    onClick={() => (scrollY === 0 ? handleScroll('down') : handleScroll('up'))}
  />
</div>


<div className='absolute -bottom-[30%] md:-bottom-[40%] right-0 md:right-10 z-10 flex items-center justify-center'>  
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

