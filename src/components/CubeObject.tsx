"use client"

import { Canvas, RootState, useFrame } from '@react-three/fiber'
import { RoundedBox, Environment, useProgress } from '@react-three/drei'
import { EffectComposer, Noise } from '@react-three/postprocessing'
import { Suspense, useRef, useEffect, useState, startTransition, useMemo } from 'react'
import { useScroll, motion } from 'framer-motion'
import { MeshPhysicalMaterial, Mesh, Color, WebGLRenderer, MeshStandardMaterial, Vector3, Group } from 'three'
import { useLoadingStore } from './LoadingScreen'
import { MathUtils } from 'three'
import { useMotionValueEvent, motionValue, useTransform, animate } from "framer-motion";

// スクロール進行度を正規化するヘルパー関数
const normalizeProgress = (progress: number, start: number, end: number) => {
  if (progress < start) return 0;
  if (progress > end) return 1;
  if (end === start) return 0;
  return (progress - start) / (end - start);
};

// デフォルトの3段階の境界 (PC向け)
const DEFAULT_STAGE1_END = 0.15;
const DEFAULT_STAGE2_END = 0.42;
const DEFAULT_TRANSITION_DURATION = 0.25;

const NUM_INSTANCES = 4; // 3段階目のキューブの数

function Cube({ isMobile }: { isMobile: boolean }) {
  const meshRef = useRef<Mesh>(null)
  const stage3BoxRefs = useRef<Mesh[]>([]) // ステージ3用の RoundedBox の ref 配列
  const stage3GroupRef = useRef<Group>(null) // ステージ3のグループ用 ref を追加
  const { scrollYProgress } = useScroll()
  const [isMounted, setIsMounted] = useState(false)

  // isMobile に応じてステージ境界値を計算
  const { stage1End, stage2TransitionStart, stage3TransitionEnd } = useMemo(() => {
    const factor = isMobile ? 2 / 3 : 1;
    const s1End = DEFAULT_STAGE1_END * factor;
    const s2End = DEFAULT_STAGE2_END * factor;
    const tDuration = DEFAULT_TRANSITION_DURATION * factor;
    // stage2TransitionStart と stage3TransitionEnd は stage2End と transitionDuration から計算
    const s2TransitionStart = s2End - tDuration / 3.5;
    const s3TransitionEnd = s2End + tDuration / 3.5;
    return {
      stage1End: s1End,
      stage2TransitionStart: s2TransitionStart,
      stage3TransitionEnd: s3TransitionEnd,
    };
  }, [isMobile]);

  const metalMaterial = useMemo(() => new MeshStandardMaterial({
    color: 0xBFC0DA,
    metalness: 1.0,
    roughness: 0.1,
    envMapIntensity: 1,
    transparent: true, // 透明を有効化
    opacity: 0,        // 初期透明度を0に
  }), []);

  const reflectiveMaterial = useMemo(() => new MeshPhysicalMaterial({
    color: 0xffffff,
    transmission: 1,
    roughness: 0.05,
    metalness: 1.0,
    ior: 1.0,
    thickness: 0.3,
    specularIntensity: 0.1,
    specularColor: 0xff3366,
    envMapIntensity: 1,
    reflectivity: 1,
    depthWrite: true,
    depthTest: true,
    sheen: 1,
    sheenColor: 0x3366ff,
    attenuationColor: new Color(0xff9999),
    transparent: true,
    opacity: 0.8
  }), []);

  useEffect(() => {
    setIsMounted(true);

    // --- 初期状態の設定 ---
    if (meshRef.current) {
        meshRef.current.visible = true;
    }
    stage3BoxRefs.current.forEach(box => {
        if (box) {
            box.visible = false;
            const material = box.material as MeshStandardMaterial;
            if (material) {
                material.opacity = 0;
                material.needsUpdate = true;
            }
            box.scale.set(0.001, 0.001, 0.001);
            box.position.set(0,0,0);
        }
    });
    // --- 初期状態の設定ここまで ---

  }, [isMobile]);

  useFrame((state: RootState, delta: number) => {
    if (!isMounted || !meshRef.current || stage3BoxRefs.current.length !== NUM_INSTANCES || !stage3GroupRef.current) return

    const progress = scrollYProgress.get()
    const time = state.clock.elapsedTime

    // isMobile に応じた境界値を使用
    const t1 = normalizeProgress(progress, 0, stage1End)
    const t2 = normalizeProgress(progress, stage1End, stage2TransitionStart)
    const t_transition = normalizeProgress(progress, stage2TransitionStart, stage3TransitionEnd)

    // --- Handle Initial State Explicitly (progress === 0) ---
    if (progress === 0) {
        const initialScaleValue = isMobile ? 1.6 : 1.9;
        if (meshRef.current.scale.x !== initialScaleValue) {
            meshRef.current.scale.set(initialScaleValue, initialScaleValue, initialScaleValue);
        }
        meshRef.current.position.set(0, 0, 0);
        meshRef.current.visible = true;
        const baseRotationSpeed = 0.3;
        meshRef.current.rotation.x += delta * baseRotationSpeed * 0.7;
        meshRef.current.rotation.y += delta * baseRotationSpeed;
        meshRef.current.rotation.z += delta * baseRotationSpeed * 0.5;
        const initialProgressFactor = Math.sin(t1 * Math.PI / 2);
        const scrollRotationX = initialProgressFactor * 0.2;
        const scrollRotationY = t1 * Math.PI;
        const scrollRotationZ = initialProgressFactor * 0.1;
        meshRef.current.rotation.x += scrollRotationX * delta * 2;
        meshRef.current.rotation.y += scrollRotationY * delta * 2;
        meshRef.current.rotation.z += scrollRotationZ * delta * 2;
        return;
    }
    // --- End Initial State Handling ---

    // --- Stage 1 & 2 (+ Transition out): Single RoundedBox ---
    meshRef.current.visible = progress < stage3TransitionEnd; // isMobile に応じた境界値を使用
    if (meshRef.current.visible) {
      const material = meshRef.current.material as MeshPhysicalMaterial
      const baseRotationSpeed = 0.3

      // --- Scale, Position, Material Logic ---
      const initialScale = isMobile ? 1.6 : 1.9
      const midScale = isMobile ? 1 : 1.3
      const targetRightShift = isMobile ? 2 : (initialScale - midScale) * 4
      const targetY = isMobile ? 1.5 : 0

      let currentScale: number;
      let currentX: number;
      let currentY: number;
      let currentOpacity: number;

      // Bloom 関連の変数を削除
      const initialEmissiveIntensity = 0.0;
      const stage2EmissiveIntensity = 0.1;

      if (progress <= stage1End) { // isMobile に応じた境界値を使用
          // Stage 1: Keep initial visual state
          currentScale = initialScale;
          currentX = 0;
          currentY = 0;
          currentOpacity = reflectiveMaterial.opacity;
          // bloomRef の参照を削除
          material.emissiveIntensity = initialEmissiveIntensity;
          material.needsUpdate = true;

      } else if (progress < stage2TransitionStart) { // isMobile に応じた境界値を使用
          // Stage 2: Lerp based on t2
          currentScale = MathUtils.lerp(initialScale, midScale, t2);
          currentX = MathUtils.lerp(0, targetRightShift, t2);
          currentY = MathUtils.lerp(0, targetY, t2);
          currentOpacity = MathUtils.lerp(reflectiveMaterial.opacity, 1.0, t2);

          // Lerp material properties based on t2
          material.transmission = MathUtils.lerp(reflectiveMaterial.transmission, 2.2, t2);
          material.metalness = MathUtils.lerp(reflectiveMaterial.metalness, 0.9, t2);
          material.roughness = MathUtils.lerp(reflectiveMaterial.roughness, 0, t2);
          material.envMapIntensity = MathUtils.lerp(reflectiveMaterial.envMapIntensity, -0.5, t2);
          material.reflectivity = MathUtils.lerp(reflectiveMaterial.reflectivity, 0.99, t2);
          material.ior = MathUtils.lerp(reflectiveMaterial.ior, 2.5, t2);
          material.thickness = MathUtils.lerp(reflectiveMaterial.thickness, 0.5, t2);
          material.attenuationColor.copy(reflectiveMaterial.attenuationColor).lerp(new Color(0xffffff), t2);
          material.attenuationDistance = MathUtils.lerp(0.0, 0.7, t2);
          material.specularIntensity = MathUtils.lerp(reflectiveMaterial.specularIntensity, 2.0, t2);
          material.emissive.setScalar(MathUtils.lerp(initialEmissiveIntensity, stage2EmissiveIntensity, t2));
          material.emissiveIntensity = MathUtils.lerp(initialEmissiveIntensity, stage2EmissiveIntensity, t2);
          material.depthWrite = true;
          material.depthTest = true;
          material.side = t2 > 0.5 ? 2 : 0;
          material.toneMapped = t2 > 0.5 ? false : true;
          material.needsUpdate = true;
          // bloomRef の参照を削除

      } else { // Transitioning out (progress >= stage2TransitionStart) // isMobile に応じた境界値を使用
          // Lerp scale and opacity towards 0 based on t_transition
          currentScale = MathUtils.lerp(midScale, 0.001, t_transition);
          currentOpacity = MathUtils.lerp(1.0, 0, t_transition);
          currentX = targetRightShift;
          currentY = targetY;
          // bloomRef の参照を削除
          material.emissiveIntensity = stage2EmissiveIntensity; // ステージ2の値を維持
          material.needsUpdate = true;
      }

      // Apply calculated scale, position, opacity
      meshRef.current.scale.set(currentScale, currentScale, currentScale);
      meshRef.current.position.set(currentX, currentY, 0);
      if (material.opacity !== currentOpacity) {
        material.opacity = currentOpacity;
        material.needsUpdate = true;
      } else if (progress > stage1End) { // isMobile に応じた境界値を使用
          material.needsUpdate = true;
      }
      // --- End Scale, Position, Material Logic ---

      // --- Rotation Logic ---
      let rotationMultiplier = 1.0;

      if (progress >= stage2TransitionStart) { // isMobile に応じた境界値を使用
          rotationMultiplier = 0;
      } else if (progress > stage1End) { // isMobile に応じた境界値を使用
          rotationMultiplier = MathUtils.lerp(1.0, 1.2, t2);
      } else {
          rotationMultiplier = 1.0;
      }

      const currentRotationSpeed = baseRotationSpeed * rotationMultiplier;
      if (rotationMultiplier > 0) {
          meshRef.current.rotation.x += delta * currentRotationSpeed * 0.7;
          meshRef.current.rotation.y += delta * currentRotationSpeed;
          meshRef.current.rotation.z += delta * currentRotationSpeed * 0.5;
      }

      const scrollInfluence = 1.0 - MathUtils.smoothstep(t2, 0, 0.5);
      if (scrollInfluence > 0.001) {
          const initialProgressFactor = Math.sin(t1 * Math.PI / 2);
          const scrollRotationX = initialProgressFactor * 0.2;
          const scrollRotationY = t1 * Math.PI;
          const scrollRotationZ = initialProgressFactor * 0.1;
          meshRef.current.rotation.x += scrollRotationX * delta * 2 * scrollInfluence;
          meshRef.current.rotation.y += scrollRotationY * delta * 2 * scrollInfluence;
          meshRef.current.rotation.z += scrollRotationZ * delta * 2 * scrollInfluence;
      }
      // --- End Rotation Logic ---

    } // End if (meshRef.current.visible)

    // --- Stage 3 (+ Transition in): Individual Rounded Cubes ---
    const showStage3Boxes = progress > stage2TransitionStart; // isMobile に応じた境界値を使用
    stage3GroupRef.current.visible = showStage3Boxes;

    if (showStage3Boxes) {
      const targetScale = isMobile ? 1.0 : 1.2;
      const targetSpread = isMobile ? 1.6 : 2;
      const appearDelay = 0.2;
      const appearDuration = 0.4;

      const startPos = new Vector3();
      if (meshRef.current) {
        const initialScale = isMobile ? 1.6 : 1.9
        const midScale = isMobile ? 1 : 1.3
        const targetRightShift = isMobile ? 0.8 : (initialScale - midScale) * 4
        const targetY = isMobile ? 1.0 : 0
        startPos.set(targetRightShift, targetY, 0);
      } else {
         const initialScaleFallback = isMobile ? 1.6 : 1.9;
         const midScaleFallback = isMobile ? 1 : 1.3;
         const targetRightShiftFallback = isMobile ? 0.8 : (initialScaleFallback - midScaleFallback) * 4;
         const targetYFallback = isMobile ? 1.0 : 0;
         startPos.set(targetRightShiftFallback, targetYFallback, 0);
      }

      stage3GroupRef.current.position.copy(startPos);

      const groupRotationSpeed = 0.35;
      stage3GroupRef.current.rotation.y += delta * groupRotationSpeed;
      stage3GroupRef.current.rotation.x += delta * groupRotationSpeed * 0.6;
      stage3GroupRef.current.rotation.z += delta * groupRotationSpeed * 0.3;

      const finalRelativePositions: Vector3[] = [
        new Vector3(-targetSpread / 2, targetSpread / 2, 0),
        new Vector3(targetSpread / 2, targetSpread / 2, 0),
        new Vector3(-targetSpread / 2, -targetSpread / 2, 0),
        new Vector3(targetSpread / 2, -targetSpread / 2, 0),
      ];

      const floatSpeed = 2;
      const floatDistance = 0.07;

      stage3BoxRefs.current.forEach((box, i) => {
        if (!box) return;

        box.visible = true;
        const material = box.material as MeshStandardMaterial;
        if (!material) return;

        const instanceAppearStart = i * appearDelay;
        const instanceProgress = normalizeProgress(t_transition, instanceAppearStart, instanceAppearStart + appearDuration);
        const instanceScale = MathUtils.lerp(0.001, targetScale, instanceProgress);
        const floatAmplitude = floatDistance * MathUtils.smoothstep(instanceProgress, 0.8, 1.0);
        const offset = i * (Math.PI / 2);
        const floatY = Math.sin(time * floatSpeed + offset) * floatAmplitude;
        const targetRelativePos = new Vector3().copy(finalRelativePositions[i]);
        targetRelativePos.y += floatY;
        const currentPos = new Vector3(0,0,0).lerp(targetRelativePos, instanceProgress);

        box.position.copy(currentPos);
        box.scale.set(instanceScale, instanceScale, instanceScale);

        const individualRotationSpeed = 0.3;
        const timeOffset = i * 0.5;
        box.rotation.x += delta * individualRotationSpeed * (Math.sin(time * 0.5 + timeOffset) * 0.5 + 0.5);
        box.rotation.y += delta * individualRotationSpeed * 0.8 * (Math.cos(time * 0.4 + timeOffset * 1.2) * 0.5 + 0.5);
        box.rotation.z += delta * individualRotationSpeed * 0.5;

        const currentOpacity = MathUtils.lerp(0, 1, instanceProgress);
        const currentMetalness = MathUtils.lerp(0.5, 1.0, t_transition);
        const currentRoughness = MathUtils.lerp(0.5, 0.1, t_transition);

        let needsUpdate = false;
        if (material.opacity !== currentOpacity) {
            material.opacity = currentOpacity;
            needsUpdate = true;
        }
        if (material.metalness !== currentMetalness) {
            material.metalness = currentMetalness;
            needsUpdate = true;
        }
        if (material.roughness !== currentRoughness) {
            material.roughness = currentRoughness;
            needsUpdate = true;
        }
        if (needsUpdate) {
            material.needsUpdate = true;
        }
      });

    } else {
        stage3BoxRefs.current.forEach(box => {
            if (box) box.visible = false;
        });
    }

  }) // End useFrame

  return (
    <group position={[0, 0, 0]}>
      <RoundedBox args={[2, 2, 2]} radius={0.07} smoothness={2} ref={meshRef} visible={true}>
        <primitive object={reflectiveMaterial} attach="material" />
      </RoundedBox>
      <group ref={stage3GroupRef} visible={false}>
        {[...Array(NUM_INSTANCES)].map((_, i) => (
            <RoundedBox
                key={i}
                ref={(el) => {
                    if (el) stage3BoxRefs.current[i] = el;
                }}
                args={[1, 1, 1]}
                radius={0.05}
                smoothness={4}
                visible={false}
            >
                <primitive object={metalMaterial.clone()} attach="material" />
            </RoundedBox>
        ))}
      </group>
    </group>
  )
}

function Scene({ isMobile }: { isMobile: boolean }) {
  // bloomRef の定義を削除

  return (
    <>
      <ambientLight intensity={2} />
      <directionalLight position={[10, 10, 5]} intensity={2} />
      {/* Cube から bloomRef prop を完全に削除 */}
      <Cube isMobile={isMobile} />
      <Environment preset="sunset" />
      <EffectComposer>
        <Noise opacity={0.15} />
      </EffectComposer>
    </>
  )
}

export default function CubeInteractive() {
  const [cameraPosition, setCameraPosition] = useState<[number, number, number]>([0, 0, 8])
  const [cameraFov, setCameraFov] = useState(50)
  const [isMobile, setIsMobile] = useState(() => {
      if (typeof window === 'undefined') return false;
      return window.innerWidth <= 768;
  });
  const [isMounted, setIsMounted] = useState(false)

  // ブラー値を管理する motionValue を作成 (初期値 20px)
  const blurAmount = motionValue(20);

  // motionValue を filter 文字列に変換する
  const filterStyle = useTransform(blurAmount, value => `blur(${value}px)`);

  const { progress } = useProgress()
  const { setProgress } = useLoadingStore()
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // isMounted が true になったら初期ブラー解除アニメーションを開始
  useEffect(() => {
    if (isMounted) {
      // motionValue を 0 にアニメーションさせる
      const controls = animate(blurAmount, 0, {
        duration: 2.0,
        ease: "easeOut",
        delay: 0.5
      });
      // コンポーネントアンマウント時にアニメーションをクリーンアップ
      return controls.stop;
    }
  }, [isMounted, blurAmount]);

  useEffect(() => {
    if (!isMounted || typeof window === 'undefined') return

    const updateSettings = () => {
      const mobile = window.innerWidth <= 768
      if (mobile !== isMobile) {
        setIsMobile(mobile)
        setCameraPosition([0, 0, mobile ? 9 : 8])
        setCameraFov(mobile ? 45 : 50)
      }
    }

    updateSettings()
    window.addEventListener('resize', updateSettings)
    return () => window.removeEventListener('resize', updateSettings)
  }, [isMounted, isMobile])

  useEffect(() => {
    if (!isMounted) return

    startTransition(() => {
      setProgress(progress);
    });

  }, [progress, isMounted, setProgress])

  // スクロール位置に応じて motionValue を更新
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const currentProgress = latest;
    // isMobile に応じてステージ境界値を計算 (Cube コンポーネントと同じロジック)
    const factor = isMobile ? 2 / 3 : 1;
    const s2End = DEFAULT_STAGE2_END * factor;
    const tDuration = DEFAULT_TRANSITION_DURATION * factor;
    const s2TransitionStart = s2End - tDuration / 3.5;
    const s3TransitionEnd = s2End + tDuration / 3.5;

    const blurStart = s2TransitionStart - 0.02; // isMobile に応じた境界値を使用
    const blurEnd = s3TransitionEnd + 0.02; // isMobile に応じた境界値を使用
    const maxBlur = 20; // スクロール時の最大ブラー

    let newBlur = 0;
    if (currentProgress > blurStart && currentProgress < blurEnd) {
      const normalizedProgress = (currentProgress - blurStart) / (blurEnd - blurStart);
      newBlur = Math.sin(normalizedProgress * Math.PI) * maxBlur;
    }
    // motionValue を直接更新
    blurAmount.set(newBlur);
  });

  if (!isMounted) return null

  return (
    <motion.div
      className="w-full h-screen z-10"
      initial={{
        opacity: 0,
        y: -500,
        // filter は style で管理するため initial から削除
      }}
      animate={{
        opacity: 1,
        y: 0,
        // filter は style で管理するため animate から削除
      }}
      transition={{
        opacity: { duration: 1.5, ease: "easeOut", delay: 0.2 },
        y: { duration: 1.5, ease: "easeOut", delay: 0.2 },
        // filter の transition は useEffect の animate で制御
      }}
      // style で filter を motionValue から適用
      style={{ filter: filterStyle, willChange: 'filter' }}
    >
      <Canvas
        camera={{ position: cameraPosition, fov: cameraFov }}
        gl={{
          alpha: true,
          antialias: true,
          preserveDrawingBuffer: true,
        }}
        onCreated={({ gl }: { gl: WebGLRenderer }) => {
          gl.setClearColor(0x000000, 0)
          gl.setPixelRatio(Math.min(window.devicePixelRatio, 2))
          gl.outputColorSpace = 'srgb'
        }}
        dpr={[1, 2]}
        style={{ pointerEvents: 'none' }}
      >
        <Suspense fallback={null}>
          <Scene isMobile={isMobile} />
        </Suspense>
      </Canvas>
    </motion.div>
  )
} 