import { createRoot } from "react-dom/client";
import "./index.css";
import { Canvas } from "@react-three/fiber";
import App from "./App";
// import * as THREE from "three";
import { Perf } from "r3f-perf";

createRoot(document.getElementById("root")).render(
  <>
    <Canvas

    // flat
    // gl={{
    //   antialias: true,
    //   toneMapping: THREE.ACESFilmicToneMapping,
    //   outputColorSpace: THREE.SRGBColorSpace,
    // }}
    // camera={{
    //   fov: 50,
    //   near: 0.9,
    //   far: -900,
    //   position: [3, 2, 6],
    // }}
    >
      <Perf position="top-left" />
      <App />
    </Canvas>
  </>
);
