import { OrbitControls } from "@react-three/drei";
import { extend, useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";

extend({ OrbitControls });

/* eslint-disable react/no-unknown-property */
function App() {
  const theCube = useRef();
  // const theCircle = useRef();
  const { camera, gl } = useThree();

  useFrame((s, d) => {
    theCube.current.rotation.y += d;
    // theCircle.current.rotation.y += 0.01;
  });

  return (
    <>
      <OrbitControls args={[camera, gl.domElement]} />

      <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        <meshBasicMaterial color={"green"} />
      </mesh>
      <group ref={theCube}>
        <mesh position-x={-2}>
          <sphereGeometry />
          <meshBasicMaterial color={"red"} />
        </mesh>
        <mesh rotation-y={Math.PI * 0.25} position-x={2} scale={1.5}>
          <boxGeometry />
          <meshBasicMaterial color={"yellow"} />
        </mesh>
      </group>
    </>
  );
}

export default App;
