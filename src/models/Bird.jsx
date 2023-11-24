import React from 'react'
import birdScene from '../assets/3d/bird.glb'
import { useGLTF } from '@react-three/drei'

const Bird = () => {
    const {scene, animation} = useGLTF(birdScene)
  return (
<mesh position={[5,10,2]} scale={[0.23, 0.3,0.3]}>
<primitive object={scene}/>
</mesh>
  )
}

export default Bird