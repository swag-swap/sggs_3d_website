import { CameraControls, CameraShake, Environment, MapControls, OrbitControls, ScrollControls, Sky, Stars } from "@react-three/drei";
import { Sggs } from "./Sggs";  

export const Experience = () => { 

  return (
    <>
      <MapControls  enableZoom={false} />
      <Stars speed={5} saturation={10} />
      <color attach="background" args={[0x000000]} /> 
      <fog attach="fog" args={[0x000000, 10, 35]} />
      <ambientLight intensity={0.1} />
      <Environment preset="night" />
      <Sggs /> 
      <ScrollControls enabled/>
    </>
  );
};
