/*

*/

import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useEffect, useRef } from "react";
import rocketScene from '../assets/3d/greeting.glb';

export function Avatar({...props}) {
    const ref = useRef();
    const { scene, animations } = useGLTF(rocketScene);
    const { actions } = useAnimations(animations, ref);


    useEffect(() => {
 actions['Take 001'].play()
      
    }, []);
  

    return (
      <mesh ref={ref}  rotation={[0, -0.5, 0]}  {...props}>
        <primitive object={scene} />
      </mesh>
    );
  }