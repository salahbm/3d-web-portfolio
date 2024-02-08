/**
 * IMPORTANT: Loading glTF models into a Three.js scene is a lot of work.
 * Before we can configure or animate our model’s meshes, we need to iterate through
 * each part of our model’s meshes and save them separately.
 *
 * But luckily there is an app that turns gltf or glb files into jsx components
 * For this model, visit https://gltf.pmnd.rs/
 * And get the code. And then add the rest of the things.
 * YOU DON'T HAVE TO WRITE EVERYTHING FROM SCRATCH
 */

import { a } from "@react-spring/three";
import { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";

import islandScene from "../assets/3d/island2.glb";

 const Island2 =({
  isRotating,
  setIsRotating,
  setCurrentStage,
  currentFocusPoint,
  ...props
}) =>{
  const islandRef = useRef();
  // Get access to the Three.js renderer and viewport
  const { gl, viewport } = useThree();
  const { nodes, materials } = useGLTF(islandScene);

  // Use a ref for the last mouse x position
  const lastX = useRef(0);
  // Use a ref for rotation speed
  const rotationSpeed = useRef(0);
  // Define a damping factor to control rotation damping
  const dampingFactor = 0.95;

  // Handle pointer (mouse or touch) down event
  const handlePointerDown = (event) => {
    event.stopPropagation();
    event.preventDefault();
    setIsRotating(true);

    // Calculate the clientX based on whether it's a touch event or a mouse event
    const clientX = event.touches ? event.touches[0].clientX : event.clientX;

    // Store the current clientX position for reference
    lastX.current = clientX;
  };

  // Handle pointer (mouse or touch) up event
  const handlePointerUp = (event) => {
    event.stopPropagation();
    event.preventDefault();
    setIsRotating(false);
  };

  // Handle pointer (mouse or touch) move event
  const handlePointerMove = (event) => {
    event.stopPropagation();
    event.preventDefault();
    if (isRotating) {
      // If rotation is enabled, calculate the change in clientX position
      const clientX = event.touches ? event.touches[0].clientX : event.clientX;

      // calculate the change in the horizontal position of the mouse cursor or touch input,
      // relative to the viewport's width
      const delta = (clientX - lastX.current) / viewport.width;

      // Update the island's rotation based on the mouse/touch movement
      islandRef.current.rotation.y += delta * 0.01 * Math.PI;

      // Update the reference for the last clientX position
      lastX.current = clientX;

      // Update the rotation speed
      rotationSpeed.current = delta * 0.01 * Math.PI;
    }
  };

  // Handle keydown events
  const handleKeyDown = (event) => {
    if (event.key === "ArrowLeft") {
      if (!isRotating) setIsRotating(true);

      islandRef.current.rotation.y += 0.005 * Math.PI;
      rotationSpeed.current = 0.007;
    } else if (event.key === "ArrowRight") {
      if (!isRotating) setIsRotating(true);

      islandRef.current.rotation.y -= 0.005 * Math.PI;
      rotationSpeed.current = -0.007;
    }
  };

  // Handle keyup events
  const handleKeyUp = (event) => {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      setIsRotating(false);
    }
  };

  useEffect(() => {
    // Add event listeners for pointer, touch, and keyboard events
    const canvas = gl.domElement;
    canvas.addEventListener("pointerdown", handlePointerDown);
    canvas.addEventListener("pointerup", handlePointerUp);
    canvas.addEventListener("pointermove", handlePointerMove);
  
    // Add touch event listeners
    canvas.addEventListener("touchstart", handlePointerDown);
    canvas.addEventListener("touchend", handlePointerUp);
    canvas.addEventListener("touchmove", handlePointerMove);
  
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
  
    // Remove event listeners when component unmounts
    return () => {
      canvas.removeEventListener("pointerdown", handlePointerDown);
      canvas.removeEventListener("pointerup", handlePointerUp);
      canvas.removeEventListener("pointermove", handlePointerMove);
  
      // Remove touch event listeners
      canvas.removeEventListener("touchstart", handlePointerDown);
      canvas.removeEventListener("touchend", handlePointerUp);
      canvas.removeEventListener("touchmove", handlePointerMove);
  
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [gl, handlePointerDown, handlePointerUp, handlePointerMove]);
  

  // This function is called on each frame update
  // This function is called on each frame update
  useFrame(() => {
    // If not rotating, apply damping to slow down the rotation (smoothly)
    if (!isRotating) {
      // Apply damping factor
      rotationSpeed.current *= dampingFactor;

      // Stop rotation when speed is very small
      if (Math.abs(rotationSpeed.current) < 0.001) {
        rotationSpeed.current = 0;
      }

      islandRef.current.rotation.y += rotationSpeed.current;
    } else {
      // When rotating, determine the current stage based on island's orientation
      const rotation = islandRef.current.rotation.y;


      const normalizedRotation =
        ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

      // Set the current stage based on the island's orientation
      switch (true) {
        case normalizedRotation >= 5.45 && normalizedRotation <= 7:
          setCurrentStage(4);
          break;
        case normalizedRotation >= 0.85 && normalizedRotation <= 2:
          setCurrentStage(3);
          break;
        case normalizedRotation >= 2.4 && normalizedRotation <= 3.7:
          setCurrentStage(2);
          break;
        case normalizedRotation >= 4.25 && normalizedRotation <= 5.2:
          setCurrentStage(1);
          break;
        default:
          setCurrentStage(null);
      }
    }
  });

  return (

    <a.group ref={islandRef} {...props} >
      <group>
       <mesh
          castShadow
          receiveShadow
          geometry={nodes.tree_Material013_0.geometry}
          material={materials["Material.013"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.tree_Material015_0.geometry}
          material={materials["Material.015"]}
        />
      </group>
      <group
        position={[18.326, 200.902, -31.902]}
        rotation={[-Math.PI / 2, 0, 0.981]}
        scale={5.79}
      >
        <group position={[0.698, -0.479, -6.719]}>
          <group position={[0.001, -4.891, -7.029]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Chest_Bottom_Wood_Metal_Iron_0.geometry}
              material={materials.Metal_Iron}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Chest_Bottom_Wood_Material005_0.geometry}
              material={materials["Material.005"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Chest_Bottom_Wood_Gem_Green_0.geometry}
              material={materials.Gem_Green}
            />
          </group>
        </group>
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.earth_Cube013_rock_base_0.geometry}
        material={materials.rock_base}
        scale={36.358}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere000_Material014_0.geometry}
        material={materials["Material.014"]}
        position={[-297.998, 187.313, -11.502]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={45.452}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.kiogame3_Material_0.geometry}
        material={materials.Material}
        position={[25.663, 69.823, -31.365]}
        rotation={[0, -0.392, 0]}
        scale={113.592}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle_Material018_0.geometry}
        material={materials["Material.018"]}
        position={[-424.496, 191.695, 215.471]}
        rotation={[-Math.PI / 2, 0, -1.349]}
        scale={[47.111, 47.111, 70.976]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.earth_Cube001_rock_base_0.geometry}
        material={materials.rock_base}
        scale={36.358}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.earth_Cube002_Material003_0.geometry}
        material={materials["Material.003"]}
        scale={36.358}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.earth_Cube003_Material004_0.geometry}
        material={materials["Material.004"]}
        scale={36.358}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.earth_Cube004_rock_base_0.geometry}
        material={materials.rock_base}
        scale={36.358}
      />
    </a.group>
  );
}
export default Island2