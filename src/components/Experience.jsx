import { OrbitControls } from "@react-three/drei";
import { Sggs } from "./Sggs"; 

export const Experience = () => {
  return (
    <>
      <OrbitControls />
      <ambientLight intensity={1} /> 
      <Sggs />
    </>
  );
};
