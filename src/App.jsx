import { Canvas, useThree } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { useEffect } from "react";
import { CameraControls } from "@react-three/drei";

 


function App() {

  return ( 
    <>
      <Canvas shadows camera={{ position: [7.3901768904158045 , 2.9379620199168963 , 14.311720504826889], fov: 30 }}>
        {/* <CameraControls /> */} 
        <Experience />
      </Canvas>
    </>
  );
}

export default App;
