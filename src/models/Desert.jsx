import { useAnimations, useGLTF } from '@react-three/drei'
import React, { useEffect, useRef } from 'react'
import desertScene from '../assets/3d/desert.glb'
import { useFrame } from '@react-three/fiber'
const Desert = () => {
  
    const ref = useRef()
    const { scene, animations } = useGLTF(desertScene);
    const { actions } = useAnimations(animations, ref);
    console.log(`file: Desert.jsx:9 ~ actions:`, actions)

    useEffect(() => {
        const flyAction = actions.Animation;
        flyAction.play()
      }, []);


  return (
<mesh ref={ref}     position={[-0, -1, 1]} 
     scale={[0.1, 0.1, 0.1]} >
    <primitive object={scene}/>
</mesh>
  )
}

export default Desert