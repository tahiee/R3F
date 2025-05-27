import { createRoot } from "react-dom/client";
import "./index.css";
import { Canvas } from "@react-three/fiber";
// import App from "./App";
// import * as THREE from "three";
// import { Perf } from "r3f-perf";
import { StarBackground } from "./components/star_bg_canvas";
createRoot(document.getElementById("root")).render(
  <div className="relative w-full h-screen overflow-hidden overflow-y-scroll">
    {/* <Canvas
        shadows
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
      </Canvas> */}
    <Canvas className="absolute inset-0 -z-10">
      <StarBackground />
    </Canvas>
    <div className="absolute top-0">
      <h1 className="text-red-400">R3F</h1>
    </div>
  </div>
);
