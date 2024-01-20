import React from "react";
import { Canvas } from "react-three-fiber";
import { OrbitControls } from "drei";
import { Physics, usePlane, useSphere} from "use-cannon";
import "./Space.css";

function Tetrahedron() {
  const [ref, api] = useSphere(() => ({ mass: 1, position: [0, 2, 0] }));
  return (
    <mesh
      onClick={() => {
        api.velocity.set(0, 2, 0);
      }}
      ref={ref}
      position={[0, 2, 0]}
    >
      <tetrahedronBufferGeometry attach="geometry" />
      <meshLambertMaterial attach="material" color="orange" />
    </mesh>
  );
}

function Plane() {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
  }));
  return (
    <mesh ref={ref} rotation={[-Math.PI / 2, 0, 0]}>
      <planeBufferGeometry attach="geometry" args={[100, 100]} />
      <meshLambertMaterial attach="material" color="lightblue" />
    </mesh>
  );
}

export default function TetrahedronSpace() {
  return (
    <Canvas>
      <OrbitControls />
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 15, 10]} angle={0.3} />
      <Physics>
        <Tetrahedron />
        <Plane />
      </Physics>
    </Canvas>
  );
}