import { PivotControls, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { Box3, Group, Mesh, Object3D, Vector3 } from "three";
import { easing } from "maath";

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return mousePosition;
};

export default function AvatarModel({
  setModelLoaded,
}: {
  setModelLoaded: Dispatch<SetStateAction<boolean>>;
}) {
  const { nodes, materials } = useGLTF("/3d/avatar/24_10_05_06_53_13_179.gltf");
  const { x, y } = useMousePosition();
  const ref = useRef<Group>(null);

  const box = new Box3();
  const center = new Vector3();

  const { scene } = useGLTF("/3d/avatar/24_10_05_06_53_13_179.gltf");

  useEffect(() => {
    if (scene) {
      setModelLoaded(true);
    }
  }, [scene, setModelLoaded]);

  useEffect(() => {
    if (ref.current) {
      box.setFromObject(ref.current);
      box.getCenter(center);
    }
  }, [nodes, ref]);

  const [dummy] = useState(() => new Object3D());
  useFrame((state, dt) => {
    dummy.lookAt(x - 500, 0, y + 2000);
    if (ref.current) {
      ref.current.position.copy(center);
      easing.dampQ(ref.current.quaternion, dummy.quaternion, 0.15, dt);
    }
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

useGLTF.preload("/3d/avatar/24_10_05_06_53_13_179.gltf");
