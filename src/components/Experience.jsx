import { Environment, MapControls, OrthographicCamera, PerspectiveCamera, ScrollControls,  Stars } from "@react-three/drei";
import { Sggs } from "../assets/Sggs";  
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export const Experience = () => { 
  const camera = useRef();

  // useFrame((_state,delta)=>{
    // console.log(camera.current.position,camera.current.rotation) 
    // if(camera.position.x < -8 )camera.current.position.x = -7;
  // });

  return (
    <>
      <PerspectiveCamera
        ref={camera}
        position={[8.54715890252877, 3.778480439723891, 15.833211444067047]}
        rotation={[-0.24194158762559356,0.426968662304032, 0.10183955113183545]}
        fov={30}
        makeDefault
      />
      {/* <OrthographicCamera
        ref={camera}
        position={[7.3901768904158045, 2.9379620199168963, 14.311720504826889]}
        fov={30}
        makeDefault
      /> */}
      <MapControls
        enableZoom={false}
        enableRotate={false}
        minDistance={20}
        dampingFactor={0.2}
        // screenSpacePanning={true}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 4}
        camera={camera.current}
      />
      <Stars speed={5} saturation={10} />
      <color attach="background" args={[0x000000]} /> 
      <fog attach="fog" args={[0x000000, 10, 35]} />
      <ambientLight intensity={0.1} />
      <Environment preset="night" />
      <Sggs /> 
      <ScrollControls
        damping={0.1}
        offset={[0, 0, 2]}
        scrollSpeed={0.2}
        lockZoom={true}
        camera={camera.current}
      />
    </>
  );
};
