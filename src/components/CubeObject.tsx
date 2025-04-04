"use client"

import { Canvas, RootState, useFrame } from '@react-three/fiber'
import { RoundedBox, Svg, Environment, ScrollControls, useScroll } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import { Suspense, useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { MeshPhysicalMaterial, Mesh, Color, WebGLRenderer, Group, Object3D } from 'three'

function Cube() {
  const meshRef = useRef<Mesh>(null)
  const data = useScroll()
  // const { viewport } = useThree() // 未使用のためコメントアウト
  const [localViewport, setLocalViewport] = useState({ width: 0, height: 0 })
  const [isMounted, setIsMounted] = useState(false)
  const [svgScale, setSvgScale] = useState(5)
  const [svgPositionZ, setSvgPositionZ] = useState(-5)
  const svgRef = useRef<Group>(null); // any から Group に変更
  const svgOpacityRef = useRef(1);

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const easeOutExpo = (x: number): number => {
    return x === 1 ? 1 : 1 - Math.pow(2, -10 * x)
  }

  /* // 未使用のためコメントアウト
  const easeOutBack = (x: number): number => {
    const c1 = 1.70158
    const c3 = c1 + 1
    return 1 + c3 * Math.pow(x - 1, 3) + c1 * Math.pow(x - 1, 2)
  }
  */

  useEffect(() => {
    if (!isMounted || typeof window === 'undefined') return

    const updateViewport = () => {
      const currentWidth = window.innerWidth;
      setLocalViewport({
        width: currentWidth,
        height: window.innerHeight
      })
      const isMobile = currentWidth <= 768;
      setSvgScale(isMobile ? 3 : 5);
      setSvgPositionZ(isMobile ? -3 : -5);
    }

    updateViewport()
    window.addEventListener('resize', updateViewport)
    return () => window.removeEventListener('resize', updateViewport)
  }, [isMounted])

  const reflectiveMaterial = new MeshPhysicalMaterial({
    color: 0xffffff,
    transmission: 1,
    roughness: 0.05,
    metalness: 1.0,
    ior: 2.0,
    thickness: 0.3,
    specularIntensity: 1,
    specularColor: 0xff3366,
    envMapIntensity: 4.5,
    reflectivity: 1,
    depthWrite: true,
    depthTest: true,
    sheen: 1.0,
    sheenColor: 0x3366ff,
    attenuationColor: new Color(0xff9999),
    attenuationDistance: 1,
    toneMapped: false,
    transparent: true,
    opacity: 0.7
  })

  useFrame((state: RootState, delta: number) => {
    if (!meshRef.current || !isMounted) return

    const progress = data.offset
    const isMobile = localViewport.width <= 768

    const yProgress = Math.min(progress * 3, 1);

    const initialYOffset = 1.7;
    const verticalMoveFactor = 10;
    const endY = -verticalMoveFactor / 6;
    meshRef.current.position.y = initialYOffset + yProgress * (endY - initialYOffset);

    const initialScale = isMobile ? 0.8 : 1.0
    const finalScale = isMobile ? 0.7 : 0.8
    const scaleProgress = Math.min(progress * 1.0, 1)
    const scale = initialScale - (scaleProgress * (initialScale - finalScale))
    meshRef.current.scale.set(scale, scale, scale)

    if (!isMobile) {
      const rightShiftMultiplier = 4
      const rightShift = (initialScale - scale) * rightShiftMultiplier
      meshRef.current.position.x = rightShift
    } else {
      meshRef.current.position.x = 0
    }

    const material = meshRef.current.material as MeshPhysicalMaterial
    const materialProgress = Math.min(progress * 1.0, 1)
    material.color = new Color(0xffffff).lerp(new Color(0xFFFFFF), materialProgress)
    material.transmission = 0.4 + materialProgress
    material.metalness = 1 - materialProgress
    material.roughness = 0.05 * (1 - materialProgress) + 0.01 * materialProgress
    material.opacity = 0.7 + (materialProgress * 0.3)
    material.envMapIntensity = 4.5 - (materialProgress * 2)
    material.reflectivity = 1 - (0.2 * materialProgress)
    material.ior = 2.0 + (materialProgress * 1)
    material.thickness = 0.2 + (materialProgress * 0.4)
    material.depthWrite = materialProgress > 0.1
    material.depthTest = materialProgress > 0.3
    material.side = materialProgress > 0.5 ? 2 : 0
    material.toneMapped = materialProgress > 0.5 ? false : true
    material.attenuationColor = new Color(0xff9999).lerp(new Color(0xffffff), materialProgress)
    material.attenuationDistance = 0.5 + (materialProgress * 0.2)
    material.specularIntensity = 1.5 + (materialProgress * 1)
    material.emissive = new Color(0xffffff).multiplyScalar(materialProgress * 0.01)

    const baseRotationSpeed = 0.3
    const rotationMultiplierProgress = Math.min(progress * 1.0, 1)
    const rotationMultiplier = 1.5 - (rotationMultiplierProgress * 10)
    meshRef.current.rotation.x += delta * baseRotationSpeed * 0.7 * Math.max(0, rotationMultiplier)
    meshRef.current.rotation.y += delta * baseRotationSpeed * Math.max(0, rotationMultiplier)
    meshRef.current.rotation.z += delta * baseRotationSpeed * 0.5 * Math.max(0, rotationMultiplier)

    const initialRotProgress = Math.min(progress * 0.5, 0.1) * 3
    const scrollRotationX = Math.sin(initialRotProgress * Math.PI / 2) * 0.2
    const scrollRotationY = initialRotProgress * Math.PI
    const scrollRotationZ = Math.sin(initialRotProgress * Math.PI) * 0.1
    meshRef.current.rotation.x += scrollRotationX * delta * 2
    meshRef.current.rotation.y += scrollRotationY * delta * 2
    meshRef.current.rotation.z += scrollRotationZ * delta * 2

    const svgOpacityProgress = Math.min(progress * 1.0, 1)
    const svgTargetOpacity = 1 - easeOutExpo(svgOpacityProgress);
    svgOpacityRef.current += (svgTargetOpacity - svgOpacityRef.current) * delta * 5;

    if (svgRef.current && svgRef.current.children) {
      svgRef.current.children.forEach((child: Object3D) => { // any から Object3D に変更
        // child が Mesh かどうかをチェックし、material プロパティが存在するか確認
        if (child instanceof Mesh && child.material) {
          // material が配列でないことを確認 (MultiMaterial の場合など)
          if (!Array.isArray(child.material)) {
            child.material.transparent = true;
            child.material.opacity = svgOpacityRef.current;
            child.material.needsUpdate = true;
          } else {
            // 配列の場合は各マテリアルを処理
            child.material.forEach(material => {
              material.transparent = true;
              material.opacity = svgOpacityRef.current;
              material.needsUpdate = true;
            });
          }
        }
      });
    }
  })

  if (!isMounted) return null

  return (
    <group position={[0, 0, 0]}>
      <RoundedBox args={[2, 2, 2]} radius={0.1} smoothness={2} ref={meshRef}>
        <primitive object={reflectiveMaterial} attach="material" />
      </RoundedBox>
      <Suspense fallback={null}>
        <Svg
          ref={svgRef}
          src="/logo-white.svg"
          scale={[svgScale, svgScale, svgScale]}
          position={[0, 0, svgPositionZ]}
        />
      </Suspense>
    </group>
  )
}

function Scene() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <>
      <ambientLight intensity={2} />
      <directionalLight position={[10, 10, 5]} intensity={2} />
      <directionalLight position={[-10, -10, -5]} intensity={0.5} />
      <hemisphereLight intensity={0.5} groundColor="white" />
      <Cube />
      <Environment preset="city" />
      <EffectComposer>
        <Bloom 
          luminanceThreshold={0.6}
          luminanceSmoothing={0.9}
          intensity={0.6}
        />
      </EffectComposer>
    </>
  )
}

export default function CubeInteractive() {
  const [cameraPosition, setCameraPosition] = useState<[number, number, number]>([0, 0, 8])
  const [cameraFov, setCameraFov] = useState(50)
  const [, setIsMobile] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted || typeof window === 'undefined') return

    const updateCamera = () => {
      const mobile = window.innerWidth <= 768
      setIsMobile(mobile)
      setCameraPosition([0, 0, mobile ? 9 : 8])
      setCameraFov(mobile ? 45 : 50)
    }

    updateCamera()
    window.addEventListener('resize', updateCamera)
    return () => window.removeEventListener('resize', updateCamera)
  }, [isMounted])

  if (!isMounted) return null

  return (
    <motion.div
      className="absolute inset-0 w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, ease: "easeOut", delay: 1 }}
    >
      <Canvas
        camera={{ position: cameraPosition, fov: cameraFov }}
        gl={{
          alpha: true,
          antialias: true,
          preserveDrawingBuffer: true,
          powerPreference: "high-performance"
        }}
        onCreated={({ gl }: { gl: WebGLRenderer }) => {
          gl.setClearColor(0x000000, 0)
          gl.setPixelRatio(Math.min(window.devicePixelRatio, 2))
          gl.outputColorSpace = 'srgb'
        }}
        dpr={[1, 2]}
      >
        <ScrollControls pages={2.5} damping={0.1}>
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </ScrollControls>
      </Canvas>
    </motion.div>
  )
} 