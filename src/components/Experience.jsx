import { CameraControls, CameraShake, Environment, MapControls, OrbitControls, Sky, Stars } from "@react-three/drei";
import { Sggs } from "./Sggs"; 
import { Names } from "./Names";

export const Experience = () => {
   

  return (
    <>
      <MapControls />
      <Stars speed={5} saturation={10} />
      <color attach="background" args={[0x000000]} /> 
      <fog attach="fog" args={[0x000000, 10, 35]} />
      <ambientLight intensity={0.1} />
      <Environment preset="night" />
      <Sggs />
      <Names />
      {/* <CameraControls /> */}
    </>
  );
};
