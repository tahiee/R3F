/* eslint-disable react/no-unknown-property */
import { OrbitControls } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";

function App() {
  const theCube = useRef();
  const { camera, gl } = useThree();

  useFrame((s, d) => {
    theCube.current.rotation.y += d;
  });

  return (
    <>
      <OrbitControls args={[camera, gl.domElement]} />
      <directionalLight position={[1, 2, 3]} intensity={2.5} />
      <ambientLight intensity={1.5} />

      <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        <meshStandardMaterial color={"red"} />
      </mesh>

      <group>
        <mesh ref={theCube} position-x={-2}>
          <sphereGeometry />
          <meshStandardMaterial wireframe color={"green"} />
        </mesh>
        s
        <mesh rotation-y={Math.PI * 0.25} position-x={2} scale={1.5}>
          <boxGeometry />
          <meshStandardMaterial color={"orange"} />
        </mesh>
      </group>

      {/* <CustomeGem /> */}
    </>
  );
}

export default App;
