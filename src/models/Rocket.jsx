/*

*/

import { useAnimations, useGLTF } from "@react-three/drei";
import React, { useEffect, useRef } from "react";
import rocketScene from '../assets/3d/rocket.glb';
import { useFrame } from "@react-three/fiber";

export function Rocket({ ...props }) {
    const ref = useRef();
    const { scene, animations } = useGLTF(rocketScene);
    const { actions } = useAnimations(animations, ref);
  
    let currentY = -1.15;
    let currentStage = 0;
  
    const stages = [-1.14, -0.4, 0.4];
  
    useFrame(() => {
      currentY += 0.005;

  
      if (currentY > 1) {
        currentY = -1.15; // Reset Y position
        currentStage = 0; // Reset to the first stage
        console.log('Animation Restarted');

      }
  
      if (currentStage < stages.length && currentY > stages[currentStage]) {
       
        console.log(`Stage ${currentStage + 1}`);
        currentStage++;

      }
  
      ref.current.position.y = currentY;
    });

    return (
      <mesh ref={ref} {...props}>
        <primitive object={scene} />
      </mesh>
    );
  }