/* eslint-disable react/no-unknown-property */
import {
  Environment,
  OrbitControls,
  Stage,
  useHelper,
} from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

function App() {
  const theCube = useRef();
  const { camera, gl } = useThree();
  const directionlight = useRef();
  useHelper(directionlight, THREE.DirectionalLightHelper, 0.5);

  useFrame((s, d) => {
    theCube.current.rotation.y += d * 0.2;
  });

  return (
    <>
      <Environment preset="sunset" background />
      <OrbitControls args={[camera, gl.domElement]} />
      <directionalLight
        ref={directionlight}
        position={[1, 2, 3]}
        intensity={2.5}
        castShadow
      />
      <ambientLight intensity={1.5} />

      <mesh
        receiveShadow
        position-y={-1}
        rotation-x={-Math.PI * 0.5}
        scale={10}
      >
        <planeGeometry />
        <meshStandardMaterial color={"yellow"} />
      </mesh>

      <Stage
        contactShadow={{
          blur: 2,
          radius: 4,
          offset: [0, 0.2],
        }}
        environment={"sunset"}
      >
        <mesh castShadow position-x={-2}>
          <sphereGeometry />
          <meshStandardMaterial color={"red"} />
        </mesh>

        <mesh
          castShadow
          ref={theCube}
          rotation-y={Math.PI * 0.25}
          position-x={2}
          scale={1.5}
        >
          <boxGeometry />
          <meshStandardMaterial color={"orange"} />
        </mesh>
      </Stage>

      {/* <CustomeGem /> */}
    </>
  );
}

export default App;
