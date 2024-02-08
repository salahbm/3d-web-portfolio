/*

*/

import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import rocketScene from '../assets/3d/rocket.glb';

export function Rocket({ ...props }) {
    const ref = useRef();
    const { scene } = useGLTF(rocketScene);

    let currentY = -1.15;
    let currentStage = 0;
  
    const stages = [-1.14, -0.4, 0.4];
  
    useFrame(() => {
      currentY += 0.003;
  
      if (currentY > 1) {
        currentY = -1.15;
        currentStage = 0;
      }
  
      if (currentStage < stages.length && currentY >= stages[currentStage]) {
      
        currentStage++;
        // setRocketStage(currentStage)

      }
  
      ref.current.position.y = currentY;
    });
  

    return (
      <mesh ref={ref} {...props}>
        <primitive object={scene} />
      </mesh>
    );
  }