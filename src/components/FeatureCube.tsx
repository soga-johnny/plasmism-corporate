"use client"

import { Canvas, useFrame, RootState } from '@react-three/fiber'
import { Environment } from '@react-three/drei'
import { EffectComposer, Noise } from '@react-three/postprocessing'
import { Suspense, useRef, useState, useEffect } from 'react'
import { MeshStandardMaterial, WebGLRenderer, Group, InstancedMesh, Euler, Object3D, Vector3 } from 'three'
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js"

// ステージ3のキューブのサイズと設定
const NUM_INSTANCES = 4; // 4つのキューブ
const STAGE3_BOX_SIZE = 1.2;
const STAGE3_BOX_RADIUS = 0.05;
const STAGE3_BOX_SEGMENTS = 4; // smoothness={4}に相当

// RoundedBoxGeometryをインスタンス化
const roundedBoxGeometry = new RoundedBoxGeometry(
    STAGE3_BOX_SIZE,
    STAGE3_BOX_SIZE,
    STAGE3_BOX_SIZE,
    STAGE3_BOX_SEGMENTS,
    STAGE3_BOX_RADIUS
);

// マテリアルを定義
const metalMaterial = new MeshStandardMaterial({
  color: 0xBFC0DA,
  metalness: 1.0,
  roughness: 0.1,
  envMapIntensity: 1,
  transparent: true,
  opacity: 0.1,
});

function FeatureCubeMesh() {
  const instancedMeshRef = useRef<InstancedMesh>(null)
  const groupRef = useRef<Group>(null)
  const [isMobile, setIsMobile] = useState(false)
  const targetSpread = isMobile ? 2 : 3; // モバイルではスプレッドを小さく

  // 画面サイズ監視
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    // 初期チェック
    checkMobile();
    
    // リサイズイベント監視
    window.addEventListener('resize', checkMobile);
    
    // クリーンアップ
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // ダミーオブジェクトの初期化 (Matrix計算用)
  // const dummyMatrix = useRef(new Matrix4());
  const dummyObject = useRef(new Object3D());
  const dummyVec = useRef(new Vector3());
  const localRotationsRef = useRef<Euler[]>([]);

  // 各キューブの最終位置を定義
  const finalPositions = [
    new Vector3(-targetSpread / 2, targetSpread / 2, 0),
    new Vector3(targetSpread / 2, targetSpread / 2, 0),
    new Vector3(-targetSpread / 2, -targetSpread / 2, 0),
    new Vector3(targetSpread / 2, -targetSpread / 2, 0),
  ];

  // ローカル回転の初期化
  if (localRotationsRef.current.length === 0) {
    localRotationsRef.current = Array(NUM_INSTANCES).fill(null).map(() => new Euler());
  }

  useFrame((state: RootState, delta: number) => {
    if (!instancedMeshRef.current || !groupRef.current) return;

    const time = state.clock.elapsedTime;
    
    // グループ全体の回転
    const groupRotationSpeed = 0.3;
    groupRef.current.rotation.y += delta * groupRotationSpeed;
    groupRef.current.rotation.x += delta * groupRotationSpeed * 0.6;
    groupRef.current.rotation.z += delta * groupRotationSpeed * 0.3;
    
    // モバイルなら中央に、PCなら右側に配置
    groupRef.current.position.x = isMobile ? 0 : 1.5;
    
    // モバイルならサイズを小さく
    const groupScale = isMobile ? 0.8 : 1.0;
    groupRef.current.scale.set(groupScale, groupScale, groupScale);

    // 浮遊アニメーションの設定
    const floatSpeed = 2;
    const floatDistance = 0.08;

    // 各インスタンスの更新
    for (let i = 0; i < NUM_INSTANCES; i++) {
      // 浮遊アニメーションの計算
      const offset = i * (Math.PI / 2);
      const floatY = Math.sin(time * floatSpeed + offset) * floatDistance;

      // 位置の計算
      dummyVec.current.copy(finalPositions[i]);
      dummyVec.current.y += floatY;

      // ローカル回転の更新
      const currentLocalRotation = localRotationsRef.current[i];
      const rotationSpeed = 0.5;
      const timeOffset = i * 0.5;
      const rotXDelta = delta * rotationSpeed * (Math.sin(time * 0.5 + timeOffset) * 0.5 + 0.5);
      const rotYDelta = delta * rotationSpeed * 0.8 * (Math.cos(time * 0.4 + timeOffset * 1.2) * 0.5 + 0.5);
      const rotZDelta = delta * rotationSpeed * 0.5;
      
      currentLocalRotation.x += rotXDelta;
      currentLocalRotation.y += rotYDelta;
      currentLocalRotation.z += rotZDelta;

      // スケールの設定
      const scale = 1.2;
      
      // ダミーオブジェクトの変換を設定
      dummyObject.current.scale.set(scale, scale, scale);
      dummyObject.current.position.copy(dummyVec.current);
      dummyObject.current.rotation.copy(currentLocalRotation);
      
      // マトリックスの更新
      dummyObject.current.updateMatrix();
      instancedMeshRef.current.setMatrixAt(i, dummyObject.current.matrix);
    }
    
    // インスタンスマトリックスの更新をGPUに通知
    instancedMeshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <group ref={groupRef} position={[isMobile ? 0 : 2, 0, 0]}>
      <instancedMesh
        ref={instancedMeshRef}
        args={[roundedBoxGeometry, metalMaterial, NUM_INSTANCES]}
      />
    </group>
  );
}

export default function FeatureScene() {
  const cameraPosition: [number, number, number] = [0, 0, 10];
  const cameraFov = 50;

  return (
    <Canvas
      camera={{ position: cameraPosition, fov: cameraFov }}
      gl={{
        alpha: true,
        antialias: true,
        preserveDrawingBuffer: true,
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
        {/* <ambientLight intensity={2} /> */}
        {/* <directionalLight position={[10, 10, 5]} intensity={2} /> */}
        <FeatureCubeMesh />
        <Environment preset="sunset" />
        <EffectComposer>
          <Noise opacity={0.15} />
        </EffectComposer>
      </Suspense>
    </Canvas>
  );
} 