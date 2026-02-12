"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";

function DNAModel() {
  const group = useRef<THREE.Group>(null);

  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += 0.002;
    }
  });

  const dnaParts = useMemo(() => {
    const items = [];
    const turns = 60;
    const radius = 1.8;
    const heightStep = 0.18;

    for (let i = 0; i < turns; i++) {
      const t = i * 0.35;
      const y = i * heightStep - 5;

      const x1 = Math.cos(t) * radius;
      const z1 = Math.sin(t) * radius;

      const x2 = Math.cos(t + Math.PI) * radius;
      const z2 = Math.sin(t + Math.PI) * radius;

      // 左螺旋
      items.push(
        <mesh key={`l-${i}`} position={[x1, y, z1]}>
          <sphereGeometry args={[0.12, 16, 16]} />
          <meshStandardMaterial
            color="#b60505"
            emissive="#1d4ed8"
            emissiveIntensity={0.5}
            transparent
            opacity={0.85}
          />
        </mesh>
      );

      // 右螺旋
      items.push(
        <mesh key={`r-${i}`} position={[x2, y, z2]}>
          <sphereGeometry args={[0.12, 16, 16]} />
          <meshStandardMaterial
            color="#6314d9"
            emissive="#0464d1"
            emissiveIntensity={0.4}
            transparent
            opacity={0.85}
          />
        </mesh>
      );

      // 横ブリッジ
      items.push(
        <mesh
          key={`b-${i}`}
          position={[(x1 + x2) / 2, y, (z1 + z2) / 2]}
          rotation={[0, t, 0]}
        >
          <boxGeometry args={[radius * 2, 0.03, 0.03]} />
          <meshStandardMaterial
            color="#93c5fd"
            emissive="#93c5fd"
            emissiveIntensity={0.6}
            transparent
            opacity={0.7}
          />
        </mesh>
      );
    }

    return items;
  }, []);

  return <group ref={group}>{dnaParts}</group>;
}

export default function DNAAnimation() {
  return (
    <Canvas camera={{ position: [0, 0, 12], fov: 45 }}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 10, 5]} intensity={1.5} />

      <Float
        speed={1.2}
        rotationIntensity={0.2}
        floatIntensity={1}
      >
        <DNAModel />
      </Float>
    </Canvas>
  );
}