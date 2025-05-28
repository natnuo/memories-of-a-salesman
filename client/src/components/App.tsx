import styles from "../css/index.module.css";
import { Canvas, useFrame } from '@react-three/fiber'
import Memory from "./Grave";
import { useRef, useState } from "react";
import { CameraControls } from "@react-three/drei";

const RED = "#B31942", BLUE = "#0A3161", WHITE = "#FFFFFF";

const App = () => {
  const [paused, setPaused] = useState(true);

  return (
    <div className={`${styles["w-svw"]} ${styles["h-svh"]}`}>
      <Canvas flat className={`${styles["w-full"]} ${styles["h-full"]} ${styles["bg-black"]}`}>
        {/* CAMERA */}
        <CameraControls
          onChange={() => setPaused(false) }
          minPolarAngle={0}
          maxPolarAngle={Math.PI / 1.6}
        />

        {/* LIGHTING */}
        <ambientLight intensity={Math.PI / 2} />
        <spotLight
          position={[ 0, 0, 100 ]}
          angle={0.15}
          rotation={[ Math.PI / 2, 0, 0 ]}
          penumbra={1}
          decay={0}
          intensity={Math.PI / 2}
        />

        {/* MESHES */}
        {/* cemetery */}
        <group position={[ 0, 0, -10 ]}>
          <Memory x={-5} y={3} color={BLUE} paused={paused}></Memory>
          <Memory x={-5} y={2} color={BLUE} paused={paused}></Memory>
          <Memory x={-5} y={1} color={BLUE} paused={paused}></Memory>
          <Memory x={-5} y={0} color={WHITE} paused={paused}></Memory>
          <Memory x={-5} y={-1} color={RED} paused={paused}></Memory>
          <Memory x={-5} y={-2} color={WHITE} paused={paused}></Memory>
          <Memory x={-5} y={-3} color={RED} paused={paused}></Memory>
          
          <Memory x={-4} y={3} color={BLUE} paused={paused}></Memory>
          <Memory x={-4} y={2} color={BLUE} paused={paused}></Memory>
          <Memory x={-4} y={1} color={BLUE} paused={paused}></Memory>
          <Memory x={-4} y={0} color={WHITE} paused={paused}></Memory>
          <Memory x={-4} y={-1} color={RED} paused={paused}></Memory>
          <Memory x={-4} y={-2} color={WHITE} paused={paused}></Memory>
          <Memory x={-4} y={-3} color={RED} paused={paused}></Memory>

          <Memory x={-3} y={3} color={BLUE} paused={paused}></Memory>
          <Memory x={-3} y={2} color={BLUE} paused={paused}></Memory>
          <Memory x={-3} y={1} color={BLUE} paused={paused}></Memory>
          <Memory x={-3} y={0} color={WHITE} paused={paused}></Memory>
          <Memory x={-3} y={-1} color={RED} paused={paused}></Memory>
          <Memory x={-3} y={-2} color={WHITE} paused={paused}></Memory>
          <Memory x={-3} y={-3} color={RED} paused={paused}></Memory>
            
          <Memory x={-2} y={3} color={BLUE} paused={paused}></Memory>
          <Memory x={-2} y={2} color={BLUE} paused={paused}></Memory>
          <Memory x={-2} y={1} color={BLUE} paused={paused}></Memory>
          <Memory x={-2} y={0} color={WHITE} paused={paused}></Memory>
          <Memory x={-2} y={-1} color={RED} paused={paused}></Memory>
          <Memory x={-2} y={-2} color={WHITE} paused={paused}></Memory>
          <Memory x={-2} y={-3} color={RED} paused={paused}></Memory>
          
          <Memory x={-1} y={3} color={RED} paused={paused}></Memory>
          <Memory x={-1} y={2} color={WHITE} paused={paused}></Memory>
          <Memory x={-1} y={1} color={RED} paused={paused}></Memory>
          <Memory x={-1} y={0} color={WHITE} paused={paused}></Memory>
          <Memory x={-1} y={-1} color={RED} paused={paused}></Memory>
          <Memory x={-1} y={-2} color={WHITE} paused={paused}></Memory>
          <Memory x={-1} y={-3} color={RED} paused={paused}></Memory>
            
          <Memory x={0} y={3} color={RED} paused={paused}></Memory>
          <Memory x={0} y={2} color={WHITE} paused={paused}></Memory>
          <Memory x={0} y={1} color={RED} paused={paused}></Memory>
          <Memory x={0} y={0} color={WHITE} paused={paused}></Memory>
          <Memory x={0} y={-1} color={RED} paused={paused}></Memory>
          <Memory x={0} y={-2} color={WHITE} paused={paused}></Memory>
          <Memory x={0} y={-3} color={RED} paused={paused}></Memory>
          
          <Memory x={1} y={3} color={RED} paused={paused}></Memory>
          <Memory x={1} y={2} color={WHITE} paused={paused}></Memory>
          <Memory x={1} y={1} color={RED} paused={paused}></Memory>
          <Memory x={1} y={0} color={WHITE} paused={paused}></Memory>
          <Memory x={1} y={-1} color={RED} paused={paused}></Memory>
          <Memory x={1} y={-2} color={WHITE} paused={paused}></Memory>
          <Memory x={1} y={-3} color={RED} paused={paused}></Memory>
          
          <Memory x={2} y={3} color={RED} paused={paused}></Memory>
          <Memory x={2} y={2} color={WHITE} paused={paused}></Memory>
          <Memory x={2} y={1} color={RED} paused={paused}></Memory>
          <Memory x={2} y={0} color={WHITE} paused={paused}></Memory>
          <Memory x={2} y={-1} color={RED} paused={paused}></Memory>
          <Memory x={2} y={-2} color={WHITE} paused={paused}></Memory>
          <Memory x={2} y={-3} color={RED} paused={paused}></Memory>
          
          <Memory x={3} y={3} color={RED} paused={paused}></Memory>
          <Memory x={3} y={2} color={WHITE} paused={paused}></Memory>
          <Memory x={3} y={1} color={RED} paused={paused}></Memory>
          <Memory x={3} y={0} color={WHITE} paused={paused}></Memory>
          <Memory x={3} y={-1} color={RED} paused={paused}></Memory>
          <Memory x={3} y={-2} color={WHITE} paused={paused}></Memory>
          <Memory x={3} y={-3} color={RED} paused={paused}></Memory>
          
          <Memory x={4} y={3} color={RED} paused={paused}></Memory>
          <Memory x={4} y={2} color={WHITE} paused={paused}></Memory>
          <Memory x={4} y={1} color={RED} paused={paused}></Memory>
          <Memory x={4} y={0} color={WHITE} paused={paused}></Memory>
          <Memory x={4} y={-1} color={RED} paused={paused}></Memory>
          <Memory x={4} y={-2} color={WHITE} paused={paused}></Memory>
          <Memory x={4} y={-3} color={RED} paused={paused}></Memory>
          
          <Memory x={5} y={3} color={RED} paused={paused}></Memory>
          <Memory x={5} y={2} color={WHITE} paused={paused}></Memory>
          <Memory x={5} y={1} color={RED} paused={paused}></Memory>
          <Memory x={5} y={0} color={WHITE} paused={paused}></Memory>
          <Memory x={5} y={-1} color={RED} paused={paused}></Memory>
          <Memory x={5} y={-2} color={WHITE} paused={paused}></Memory>
          <Memory x={5} y={-3} color={RED} paused={paused}></Memory>
        </group>
      </Canvas>
    </div>
  );
};

export default App;
