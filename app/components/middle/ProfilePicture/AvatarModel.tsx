import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { Group, Mesh, Object3D, Vector3 } from "three";
import { easing } from "maath";

const useMousePosition = () => {
  const mousePosition = useRef({ x: 100, y: 100 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mousePosition.current.x = event.clientX;
      mousePosition.current.y = event.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return mousePosition;
};

export default function AvatarModel() {
  const { nodes, materials } = useGLTF(
    "/3d/avatar/24_12_22_00_32_03_609.gltf",
    true
  );

  const mousePosition = useMousePosition();
  const ref = useRef<Group>(null);
  const dummy = new Object3D(); // No need for useState
  const target = new Vector3();

  useFrame((_state, dt) => {
    // Update only if necessary
    if (!ref.current) return;

    target.set(
      mousePosition.current.x - 500,
      0,
      mousePosition.current.y + 2000
    );
    dummy.lookAt(target);

    // Smooth rotation
    easing.dampQ(ref.current.quaternion, dummy.quaternion, 0.15, dt);
  });

  return (
    <group dispose={null} position={[0, 0, 0]}>
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.keys as Mesh).geometry}
        material={materials.keys}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.Banana as Mesh).geometry}
        material={materials.Banana}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.scarf_body as Mesh).geometry}
        material={materials["scarf body"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.scarf_stripes as Mesh).geometry}
        material={materials["scarf stripes"]}
      />
      {/* Group for Head */}
      <group ref={ref}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.eyes as Mesh).geometry}
          material={materials.eyes}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.headshape as Mesh).geometry}
          material={materials.headshape}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.beak as Mesh).geometry}
          material={materials.beak}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.star as Mesh).geometry}
          material={materials.star}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.body as Mesh).geometry}
        material={materials.body}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.computer_body as Mesh).geometry}
        material={materials["computer body"]}
      />
    </group>
  );
}

useGLTF.preload("/3d/avatar/24_12_22_00_32_03_609.gltf");
