import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Suspense, useState } from "react";
import { Loader, ScrollControls, Stats } from "@react-three/drei";




function App() { 
  return (
    <>
 
      <Canvas
        camera={{ position: [7.3901768904158045, 2.9379620199168963, 14.311720504826889], fov: 20 }}>
        <Suspense fallback={null}>
          <ScrollControls pages={5} damping={3}>
            <Experience />
          </ScrollControls>
        </Suspense>

      </Canvas>
      <Loader
        preload
        dataInterpolation={(p) => `Welcome to SGGS! ${p.toFixed(2)}%`}
      />
    </>
  );
}

export default App;
