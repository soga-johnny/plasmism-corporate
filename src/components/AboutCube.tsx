"use client"

import { Canvas, useFrame, RootState } from '@react-three/fiber'
import { RoundedBox, Environment } from '@react-three/drei'
import { EffectComposer, Noise } from '@react-three/postprocessing'
import { Suspense, useRef } from 'react'
import { MeshPhysicalMaterial, Mesh, Color, WebGLRenderer } from 'three'

// ステージ2相当のマテリアルを定義
const stage2Material = new MeshPhysicalMaterial({
  color: 0xaaaaaa,
  transmission: 1, // 負荷軽減のため 1 に変更 (元: 2)
  roughness: 0,      // ステージ2の目標値
  metalness: 0.9,    // ステージ2の目標値
  ior: 1,          // ステージ2の目標値
  // thickness: 0.5,    // ステージ2の目標値
  specularIntensity: 2.0, // ステージ2の目標値
  specularColor: 0xff3366,
  envMapIntensity: -0.5, // ステージ2の目標値
  // reflectivity: 0.99,  // ステージ2の目標値
  depthWrite: true,
  depthTest: true,
  sheen: 0, // 負荷軽減のため 0 に変更 (元: 1)
  sheenColor: 0x3366ff,
  attenuationColor: new Color(0xffffff), // ステージ2の目標値
  attenuationDistance: 0.7, // ステージ2の目標値
  transparent: true,
  opacity: 0.1, // ステージ2の目標値 (不透明)
  emissive: new Color(0x000000).setScalar(0.1), // ステージ2の放射
  emissiveIntensity: 0.1, // ステージ2の放射強度
  side: 2, // THREE.BackSide (ステージ2後半相当)
  toneMapped: false, // ステージ2後半相当
});


function AboutCubeMesh() {
  const meshRef = useRef<Mesh>(null)
  const fixedScale = 1.6; // ステージ2の中間スケール（PC基準）

  useFrame((state: RootState, delta: number) => {
    if (!meshRef.current) return

    const baseRotationSpeed = 0.3 // 少し遅めの回転

    // 一定速度での回転
    meshRef.current.rotation.x += delta * baseRotationSpeed * 0.7;
    meshRef.current.rotation.y += delta * baseRotationSpeed;
    meshRef.current.rotation.z += delta * baseRotationSpeed * 0.5;
  })

  return (
    <RoundedBox
        args={[2, 2, 2]}
        radius={0.07}
        smoothness={2}
        ref={meshRef}
        scale={[fixedScale, fixedScale, fixedScale]} // 固定スケール
        position={[1.2, 0.1, 0]} // 右にずらす (0,0,0 から変更)
        material={stage2Material} // ステージ2のマテリアルを適用
    />
  )
}

export default function AboutScene() {
    const cameraPosition: [number, number, number] = [0, 0, 8];
    const cameraFov = 50;

  return (
    <Canvas
      camera={{ position: cameraPosition, fov: cameraFov }}
      gl={{
        alpha: true,
        antialias: true,
        preserveDrawingBuffer: true, // 必要に応じて
      }}
      onCreated={({ gl }: { gl: WebGLRenderer }) => {
        gl.setClearColor(0x000000, 0) // 背景を透明に
        gl.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        gl.outputColorSpace = 'srgb'
      }}
      dpr={[0.1, 0.8]}
      style={{ pointerEvents: 'none' }} // Canvas 自体は操作不可に
    >
      <Suspense fallback={null}>
        <ambientLight intensity={1.5} />
        {/* <directionalLight position={[5, 5, 5]} intensity={1} /> */}
        <AboutCubeMesh />
        <Environment preset="sunset" />
        <EffectComposer>
          <Noise opacity={0.1} /> 
        </EffectComposer>
      </Suspense>
    </Canvas>
  )
} 