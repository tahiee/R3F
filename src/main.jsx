import { createRoot } from "react-dom/client";
import "./index.css";
import { Canvas } from "@react-three/fiber";
import App from "./App";

createRoot(document.getElementById("root")).render(
  <>
    <Canvas>
      <App />
    </Canvas>
  </>
);
