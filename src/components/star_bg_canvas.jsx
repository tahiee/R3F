import { Points, PointMaterial } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import * as random from "maath/random";
import { useState, useRef, Suspense } from "react";

export const StarBackground = (props) => {
  const ref = useRef(null);

  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(5000), { radius: 10 })
  );

  useFrame((_state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group scale={[1.5, 1.5, 1.5]}>
      <Points
        ref={ref}
        stride={3}
        positions={sphere}
        frustumCulled
        rotation={[0, 0, Math.PI / 4]}
        {...props}
      >
        <PointMaterial
          transparent
          color="#ffffff"
          size={0.01}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

export const StarsCanvas = () => (
  <div className="w-full h-auto fixed inset-0 -z-10">
    <Canvas camera={{ position: [0, 0, 15] }}>
      <Suspense fallback={null}>
        <StarBackground />
      </Suspense>
    </Canvas>
  </div>
);
