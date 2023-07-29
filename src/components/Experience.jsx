import { CameraShake, Environment, MapControls, Sky, Stars } from "@react-three/drei";
import { Sggs } from "./Sggs";
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
 

export const Experience = () => {
  
  return (
    <>
      <MapControls />
      <Stars speed={5} saturation={10}/>  
      
      <color attach="background" args={[0x000000]} />
      <fog attach="fog" args={[0x000000, 10, 35]} />
      <ambientLight intensity={0.1} />
      <Environment preset="night" />
      <Sggs />
    </>
  );
};
