import React, { Suspense } from 'react'
import { Canvas } from "@react-three/fiber";
import Loader from '../components/Loader';
import IslandModel from '../models/Island';
import Sky from '../models/Sky';
const Home = () => {
const adjustIslandForScreenSize =   ()=>{
let screenScale=null;
 let screenPosition=[0,-6.5, -43]
 let rotation = [0.2, 0,0 ]
if (window.innerWidth <768 ) {
    screenScale=[ 0.9,0.9,0.9]

    
}else{
    screenScale=[ 1, 1,1]
}
return [screenPosition, screenScale,rotation]
}  
const [isIslandPosition, isIslandScale,isIslandRotation]=adjustIslandForScreenSize()
  return (
<section className='w-full h-screen relative'>
    {/* <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>    pop up</div> */}
<Canvas className='w-full h-screen bg-transparent'
camera={{near:0.1, far:1000}}> 
<Suspense fallback={<Loader/>}>

</Suspense>
<directionalLight position={[1,1,1]} intensity={2}/>
<ambientLight intensity={0.5}/>
<hemisphereLight skyColor='#b1e1ff' groundColor={'#333'} intensity={1}/>
<Sky/>
<IslandModel position={isIslandPosition} scale={isIslandScale} rotation={isIslandRotation}/>
</Canvas>

</section>
  )
}

export default Home