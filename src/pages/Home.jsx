import { Canvas } from "@react-three/fiber";
import React, { Suspense, useState , useEffect, useRef} from 'react';
import HomeInfo from '../components/HomeInfo';
import Loader from '../components/Loader';
import Bird from '../models/Bird';
import HomeInfo2 from "../components/HomeInfo2";
import { FlyingPlane } from '../models/FlyingPlane';
import Island from '../models/Island';
import Sky from '../models/Sky';
import sakura2 from '../assets/sakura2.mp3'
import { soundoff, soundon } from "../assets/icons";
import { Rocket } from "../models/Rocket";
import Desert from "../models/Desert";
import { Avatar } from "../models/Avatar";

const Home = () => {
  const audioRef = useRef(new Audio(sakura2))
  audioRef.current.volume=0.4
  audioRef.current.loop=true

  const [isRotating, setIsRotating] = useState(false)
  const [isPlayingSong, setIsPlayingSong] = useState(false)
  const [currentStage, setCurrentStage] = useState(1)
  const [rocketStage, setRocketStage] = useState(1)
  console.log(`file: Home.jsx:22 ~ rocketStage:`, rocketStage)

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
    screenPosition =[0.4, -1, 3]
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


useEffect(()=>{

if (isPlayingSong) {
  audioRef.current.play()
}
return()=>{
  audioRef.current.pause()

}
},[isPlayingSong])



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

<div className='absolute -bottom-[40%]  right-10 z-10 flex items-center justify-center'>  
{rocketStage && <HomeInfo2 stage={rocketStage}/>}
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
<Rocket scale={isRocketScale} position={isRocketPosition}    setRocketStage={setRocketStage}     rotation={[0, 0.1, 0]}/>
</Suspense>
</Canvas>


<div className="absolute bottom-4 right-4 flex flex-col items-center ">
  <p className='blue-gradient_text  rotate-90 transform font-bold mb-10 lg:block hidden'>Sound {isPlayingSong ? 'On':'Off'}</p>
  <img src={isPlayingSong ? soundon: soundoff} alt="SoundOn" className="w-10 h-10 cursor-pointer object-contain" onClick={()=>setIsPlayingSong(!isPlayingSong)}/>
</div>

</section> 

  )
}

export default Home

