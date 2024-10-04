import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { Mesh } from "three";

export default function AvatarModel() {
  const { nodes, materials } = useGLTF("/3d/avatar/24_10_04_06_55_10_361.gltf");
  return (
    <group dispose={null} position={[0, 0, 0]}>
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.me as Mesh).geometry}
        material={materials.me}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.keys as Mesh).geometry}
        material={materials.keys}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes["Area_(3)"] as Mesh).geometry}
        material={materials["Area (3)"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes["Area_(4)"] as Mesh).geometry}
        material={materials["Area (4)"]}
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
        geometry={(nodes["Area_(31)"] as Mesh).geometry}
        material={materials["Area (31)"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes["Area_(32)"] as Mesh).geometry}
        material={materials["Area (32)"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.star as Mesh).geometry}
        material={materials.star}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.body as Mesh).geometry}
        material={materials.body}
      />
    </group>
  );
}

useGLTF.preload("/3d/avatar/24_10_04_06_55_10_361.gltf");
