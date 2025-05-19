/* eslint-disable react/no-unknown-property */
import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";

export const CustomeGem = () => {
  const verticsCounts = 10 * 3;
  const gemoetryRef = useRef();

  const positions = useMemo(() => {
    const positions = new Float32Array(verticsCounts * 3);

    for (let index = 0; index < verticsCounts * 3; index++) {
      positions[index] = (Math.random() - 0.5) * 3;
    }
    return positions;
  }, [verticsCounts]);

  useEffect(() => {
    gemoetryRef.current.computeVertexNormals();
  }, []);

  return (
    <>
      <mesh>
        <bufferGeometry ref={gemoetryRef}>
          <bufferAttribute
            attach="attributes-position"
            count={verticsCounts}
            itemSize={3}
            array={positions}
          />
        </bufferGeometry>
        <meshStandardMaterial color={"purple"} side={THREE.DoubleSide} />
      </mesh>
    </>
  );
};
