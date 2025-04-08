"use client"

import { Canvas, RootState, useFrame } from '@react-three/fiber'
import { RoundedBox, Environment, useProgress } from '@react-three/drei'
import { EffectComposer, Noise } from '@react-three/postprocessing'
import { Suspense, useRef, useEffect, useState, useMemo } from 'react'
import { useScroll, motion } from 'framer-motion'
import { MeshPhysicalMaterial, Mesh, Color, WebGLRenderer, MeshStandardMaterial, Vector3, Group, InstancedMesh, Euler, Object3D, DoubleSide, FrontSide } from 'three'
import { useLoadingStore } from './LoadingScreen'
import { MathUtils } from 'three'
import { useMotionValueEvent, motionValue, useTransform, animate } from "framer-motion";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js";

// SceneUpdater コンポーネントを定義
function SceneUpdater() {
  const { progress } = useProgress();
  const setStoreProgress = useLoadingStore((state) => state.setProgress);

  useEffect(() => {
    const currentStoreProgress = useLoadingStore.getState().progress;
    // 実際の進捗がストアより進んでいる場合のみ更新
    if (progress > currentStoreProgress) {
      setStoreProgress(progress);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [progress]); // setStoreProgressは含めない

  return null; // 何もレンダリングしない
}

// スクロール進行度を正規化するヘルパー関数
const normalizeProgress = (progress: number, start: number, end: number) => {
  if (progress < start) return 0;
  if (progress > end) return 1;
  if (end === start) return 0; // Avoid division by zero
  return (progress - start) / (end - start);
};

// デフォルトの3段階の境界 (PC向け)
const DEFAULT_STAGE1_END = 0.1;
const DEFAULT_STAGE2_END = 0.3;
const DEFAULT_TRANSITION_DURATION = 0.25;

const NUM_INSTANCES = 4; // 3段階目のキューブの数
const STAGE3_BOX_SIZE = 1;
const STAGE3_BOX_RADIUS = 0.05;
const STAGE3_BOX_SEGMENTS = 4; // Corresponds to smoothness={4}

// UseMemo for RoundedBoxGeometry for the instanced mesh
const roundedBoxGeometry = new RoundedBoxGeometry(
    STAGE3_BOX_SIZE,
    STAGE3_BOX_SIZE,
    STAGE3_BOX_SIZE,
    STAGE3_BOX_SEGMENTS,
    STAGE3_BOX_RADIUS
);

function Cube({ isMobile }: { isMobile: boolean }) {
  const meshRef = useRef<Mesh>(null)
  const instancedMeshRef = useRef<InstancedMesh>(null) // Ref for InstancedMesh primitive
  const stage3GroupRef = useRef<Group>(null) // ステージ3のグループ用 ref を追加
  const { scrollYProgress } = useScroll()
  const [isMounted, setIsMounted] = useState(false)

  // isMobile に応じてステージ境界値を計算
  const { stage1End, /* stage2End, */ stage2TransitionStart, stage3TransitionEnd } = useMemo(() => {
    const factor = isMobile ? 0.85 : 1;
    const s1End = DEFAULT_STAGE1_END * factor;
    const s2End = DEFAULT_STAGE2_END * factor;
    const tDuration = DEFAULT_TRANSITION_DURATION * factor;
    // stage2TransitionStart と stage3TransitionEnd は stage2End と transitionDuration から計算
    const s2TransitionStart = s2End - tDuration / 3.5;
    const s3TransitionEnd = s2End + tDuration / 3.5;
    return {
      stage1End: s1End,
      // stage2End: s2End, // Keep s2End for reference <-- コメントアウトまたは削除
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
    envMapIntensity: 0.2,
    reflectivity: 1,
    depthWrite: true,
    depthTest: true,
    sheen: 1,
    sheenColor: 0x3366ff,
    attenuationColor: new Color(0xff9999),
    transparent: true,
    opacity: 0.7
  }), []);

  // Dummy objects for matrix calculations
  // const dummyMatrix = useMemo(() => new Matrix4(), []);
  const dummyObject = useMemo(() => new Object3D(), []);
  const dummyVec = useMemo(() => new Vector3(), []);

  // Ref to store local rotations for each instance
  const localRotationsRef = useRef<Euler[]>([]); // Initialize as empty
  // Refs for the "burun" animation state per instance
  const burunPlayedRef = useRef<boolean[]>([]);
  const burunStartTimeRef = useRef<(number | null)[]>([]);

  useEffect(() => {
    setIsMounted(true);

    // Initialize refs for burun animation state
    if (burunPlayedRef.current.length === 0) {
      burunPlayedRef.current = Array(NUM_INSTANCES).fill(false);
    }
    if (burunStartTimeRef.current.length === 0) {
      burunStartTimeRef.current = Array(NUM_INSTANCES).fill(null);
    }

    // Initialize local rotations array once
    if (localRotationsRef.current.length === 0) {
        localRotationsRef.current = Array(NUM_INSTANCES).fill(null).map(() => new Euler());
    }

    // --- 初期状態の設定 --- ※ useEffect内なので初回マウント時のみ
    if (meshRef.current) {
        meshRef.current.visible = true;
        // Reflective materialを初期状態で適用
        meshRef.current.material = reflectiveMaterial;
    }
    // Initial setup for InstancedMesh
    if (instancedMeshRef.current) {
        instancedMeshRef.current.visible = false;
        instancedMeshRef.current.count = NUM_INSTANCES;
        // Set initial matrices
        const initialRotation = new Euler(0, 0, 0);
        for (let i = 0; i < NUM_INSTANCES; i++) {
            dummyObject.scale.set(0.001, 0.001, 0.001);
            dummyObject.position.set(0, 0, 0);
            dummyObject.rotation.copy(initialRotation);
            dummyObject.updateMatrix();
            instancedMeshRef.current.setMatrixAt(i, dummyObject.matrix);
            // Also reset stored local rotation state
            if (localRotationsRef.current[i]) {
                localRotationsRef.current[i].copy(initialRotation);
            }
        }
        instancedMeshRef.current.instanceMatrix.needsUpdate = true;
        // Set initial material state (opacity)
        const initialMaterial = instancedMeshRef.current
          .material as MeshStandardMaterial;
        if (initialMaterial.opacity !== 0) {
            initialMaterial.opacity = 0;
            initialMaterial.needsUpdate = true;
        }
    }
    // --- 初期状態の設定ここまで ---

  }, [isMobile, dummyObject, reflectiveMaterial]); // reflectiveMaterialも依存配列に追加

  useFrame((state: RootState, delta: number) => {
    if (!isMounted || !meshRef.current || !instancedMeshRef.current || !stage3GroupRef.current || localRotationsRef.current.length !== NUM_INSTANCES) return

    const progress = scrollYProgress.get()
    const time = state.clock.elapsedTime

    // isMobileに応じた境界値を使用 (再計算して明確化)
    const s1End = stage1End; // Use pre-calculated value from useMemo
    const s2TransitionStart = stage2TransitionStart; // Start of fade-out / stage 3 transition-in
    const s3TransitionEnd = stage3TransitionEnd; // End of fade-out / stage 3 transition-in

    // === New Slower Material Transition Timing ===
    const originalMaterialTransitionDuration = s2TransitionStart - s1End;
    const slowerDurationFactor = 1.5; // Increase duration by 50%
    const newMaterialTransitionDuration = originalMaterialTransitionDuration * slowerDurationFactor;

    // Start at the same point as the previous edit (earlier than s1End)
    const newMaterialTransitionStart = Math.max(0, s1End - originalMaterialTransitionDuration);
    // End later, calculated from the start and the new longer duration
    const newMaterialTransitionEnd = newMaterialTransitionStart + newMaterialTransitionDuration;
    // Ensure the transition doesn't overlap incorrectly with stage 3 start
    const actualMaterialTransitionEnd = Math.min(newMaterialTransitionEnd, s2TransitionStart - 0.01); // Add a small buffer

    // Normalize progress for the new, slower material transition
    const t_material = normalizeProgress(progress, newMaterialTransitionStart, actualMaterialTransitionEnd);
    // === End New Slower Timing ===

    // Normalize progress for overall stage 1 movement/scale (still ends at s1End)
    const t_move = normalizeProgress(progress, 0, s1End); // For scale/position lerp up to s1End

    // Normalize progress for stage 3 transition (still starts at s2TransitionStart)
    const t_stage3_transition = normalizeProgress(progress, s2TransitionStart, s3TransitionEnd);

    // Reset burun state if scrolling back before stage 3 starts
    if (progress < s2TransitionStart) { // Use the correct start point
      if (burunPlayedRef.current.some(played => played)) { // Optimization
        burunPlayedRef.current.fill(false);
        burunStartTimeRef.current.fill(null);
      }
    }

    // --- Initial State Handling with Smooth Transition ---
    // Define a small threshold to blend initial state (progress = 0) with early scrolling
    const initialStateThreshold = 0.003; // Adjust this value to control the blend range
    const isInInitialBlendRange = progress <= initialStateThreshold;
    
    // Factor to blend between initial and scrolled state (0 = initial state, 1 = fully scrolled)
    const initialBlendFactor = isInInitialBlendRange 
      ? progress / initialStateThreshold // Linear blend within threshold
      : 1; // Fully scrolled if beyond threshold
    
    if (isInInitialBlendRange) {
      // In the initial blend range (smoothly transition from initial state)
      const material = meshRef.current.material as MeshPhysicalMaterial;
      let needsMaterialUpdate = false;
      
      // Initial scale value - constant regardless of scroll position
      const initialScaleValue = isMobile ? 1.1 : 1.6;
      
      // Calculate the target scale based on early scroll progress
      const earlyTargetScale = MathUtils.lerp(
        initialScaleValue, 
        isMobile ? 1.15 : 1.65, // Slightly larger than initial, smaller than midScale
        t_move * 5 // Accelerate early movement
      );
      
      // Blend between fixed initial value and scrolled value
      const currentScale = MathUtils.lerp(
        initialScaleValue,
        earlyTargetScale,
        initialBlendFactor
      );
      
      // Position - smoothly move from center origin
      const earlyX = MathUtils.lerp(0, isMobile ? 0.2 : 0.4, t_move * 5);
      const earlyY = MathUtils.lerp(0, isMobile ? 0.3 : 0.2, t_move * 5);
      
      const currentX = MathUtils.lerp(0, earlyX, initialBlendFactor);
      const currentY = MathUtils.lerp(0, earlyY, initialBlendFactor);
      
      // Apply calculated scale and position
      meshRef.current.scale.set(currentScale, currentScale, currentScale);
      meshRef.current.position.set(currentX, currentY, 0);
      
      // Always ensure cube is visible at startup
      if (!meshRef.current.visible) meshRef.current.visible = true;
      
      // Base rotation speed - constant
      const baseRotationSpeed = 0.3;
      
      // Apply continuous rotation with slight acceleration based on scroll
      meshRef.current.rotation.x += delta * baseRotationSpeed * 0.7;
      meshRef.current.rotation.y += delta * baseRotationSpeed;
      meshRef.current.rotation.z += delta * baseRotationSpeed * 0.5;
      
      // Additional rotation based on scroll - more pronounced as we scroll
      const t1_for_scroll = normalizeProgress(progress, 0, newMaterialTransitionStart * 0.5);
      const scrollFactor = Math.sin(t1_for_scroll * Math.PI / 2) * initialBlendFactor;
      
      const scrollRotationX = scrollFactor * 0.2;
      const scrollRotationY = t1_for_scroll * Math.PI * initialBlendFactor;
      const scrollRotationZ = scrollFactor * 0.1;
      
      meshRef.current.rotation.x += scrollRotationX * delta * 2;
      meshRef.current.rotation.y += scrollRotationY * delta * 2;
      meshRef.current.rotation.z += scrollRotationZ * delta * 2;
      
      // Ensure instanced mesh is hidden at start
      if (instancedMeshRef.current.visible) instancedMeshRef.current.visible = false;
      
      // Ensure material properties match reflectiveMaterial at start
      // Blend toward early material transition as we scroll
      if (progress < 0.001) {
        // At true zero, reset to exact defaults
        if (material.transmission !== reflectiveMaterial.transmission) { material.transmission = reflectiveMaterial.transmission; needsMaterialUpdate = true; }
        if (material.metalness !== reflectiveMaterial.metalness) { material.metalness = reflectiveMaterial.metalness; needsMaterialUpdate = true; }
        if (material.roughness !== reflectiveMaterial.roughness) { material.roughness = reflectiveMaterial.roughness; needsMaterialUpdate = true; }
        if (material.envMapIntensity !== reflectiveMaterial.envMapIntensity) { material.envMapIntensity = reflectiveMaterial.envMapIntensity; needsMaterialUpdate = true; }
        if (material.reflectivity !== reflectiveMaterial.reflectivity) { material.reflectivity = reflectiveMaterial.reflectivity; needsMaterialUpdate = true; }
        if (material.ior !== reflectiveMaterial.ior) { material.ior = reflectiveMaterial.ior; needsMaterialUpdate = true; }
        if (material.thickness !== reflectiveMaterial.thickness) { material.thickness = reflectiveMaterial.thickness; needsMaterialUpdate = true; }
        if (!material.attenuationColor.equals(reflectiveMaterial.attenuationColor)) { material.attenuationColor.copy(reflectiveMaterial.attenuationColor); needsMaterialUpdate = true; }
        if (material.opacity !== reflectiveMaterial.opacity) { material.opacity = reflectiveMaterial.opacity; needsMaterialUpdate = true; }
        if (material.side !== FrontSide) { material.side = FrontSide; needsMaterialUpdate = true; }
        if (material.toneMapped !== true) { material.toneMapped = true; needsMaterialUpdate = true; }
        
        const emissiveCheckColor = new Color().setScalar(0);
        if (!material.emissive.equals(emissiveCheckColor)) { material.emissive.copy(emissiveCheckColor); needsMaterialUpdate = true; }
        if (material.emissiveIntensity !== 0) { material.emissiveIntensity = 0; needsMaterialUpdate = true; }
      }
      
      if (needsMaterialUpdate) {
        material.needsUpdate = true;
      }
      
      // Process the rest of the animation frame if we're not at absolute zero
      if (progress > 0) {
        // Continue with normal stage logic (will be weighted by initialBlendFactor)
      } else {
        // At absolute zero, we've done all our work
        return;
      }
    }
    // --- End of Initial State Handling with Smooth Transition ---

    // --- Stage 1 & 2 (+ Transition out): Single RoundedBox Logic ---
    // Only update if not in absolute initial state (progress === 0)
    if (progress > 0) {
      meshRef.current.visible = progress < s3TransitionEnd; // Visible until end of stage 3 transition
      if (meshRef.current.visible) {
          const material = meshRef.current.material as MeshPhysicalMaterial;
          // const baseRotationSpeed = 0.3; // Removed unused declaration

          // --- Scale, Position Logic (based on t_move) ---
          const initialScale = isMobile ? 1.1 : 1.6;
          const midScale = isMobile ? 1.2 : 1.5;
          const targetRightShift = isMobile ? 1 : 2.4;
          const targetY = isMobile ? 1.0 : 0; // Adjusted mobile Y from 1.5 to 1.3

          let currentScale: number;
          let currentX: number;
          let currentY: number;
          let currentOpacity: number = reflectiveMaterial.opacity; // Default opacity

          // Calculate scale/position based purely on t_move (progress 0 to s1End)
          // This lerp happens regardless of material transition state up to s1End
          currentScale = MathUtils.lerp(initialScale, midScale, t_move);
          currentX = MathUtils.lerp(0, targetRightShift, t_move);
          currentY = MathUtils.lerp(0, targetY, t_move);

          // --- Material Logic (based on t_material) ---
          const initialEmissiveIntensity = 0.0;
          const stage2EmissiveIntensity = 0.3;
          let needsMaterialUpdate = false;

          if (progress < newMaterialTransitionStart) {
              // Before material transition: Use reflectiveMaterial defaults
              // Reset properties if they were changed (ensure clean state)
              if (material.transmission !== reflectiveMaterial.transmission) { material.transmission = reflectiveMaterial.transmission; needsMaterialUpdate = true; }
              if (material.metalness !== reflectiveMaterial.metalness) { material.metalness = reflectiveMaterial.metalness; needsMaterialUpdate = true; }
              if (material.roughness !== reflectiveMaterial.roughness) { material.roughness = reflectiveMaterial.roughness; needsMaterialUpdate = true; }
              if (material.envMapIntensity !== reflectiveMaterial.envMapIntensity) { material.envMapIntensity = reflectiveMaterial.envMapIntensity; needsMaterialUpdate = true; }
              if (material.reflectivity !== reflectiveMaterial.reflectivity) { material.reflectivity = reflectiveMaterial.reflectivity; needsMaterialUpdate = true; }
              if (material.ior !== reflectiveMaterial.ior) { material.ior = reflectiveMaterial.ior; needsMaterialUpdate = true; }
              if (material.thickness !== reflectiveMaterial.thickness) { material.thickness = reflectiveMaterial.thickness; needsMaterialUpdate = true; }
              if (!material.attenuationColor.equals(reflectiveMaterial.attenuationColor)) { material.attenuationColor.copy(reflectiveMaterial.attenuationColor); needsMaterialUpdate = true; }
              const initialAttenuationDistance = 0.0; // Assuming this is the base value before stage 2 lerp
              if (material.attenuationDistance !== initialAttenuationDistance) { material.attenuationDistance = initialAttenuationDistance; needsMaterialUpdate = true; }
              if (material.specularIntensity !== reflectiveMaterial.specularIntensity) { material.specularIntensity = reflectiveMaterial.specularIntensity; needsMaterialUpdate = true; }
              const emissiveCheckColor = new Color().setScalar(initialEmissiveIntensity);
              if (!material.emissive.equals(emissiveCheckColor)) { material.emissive.copy(emissiveCheckColor); needsMaterialUpdate = true; }
              if (material.emissiveIntensity !== initialEmissiveIntensity) { material.emissiveIntensity = initialEmissiveIntensity; needsMaterialUpdate = true; }
              if (material.opacity !== reflectiveMaterial.opacity) { material.opacity = reflectiveMaterial.opacity; needsMaterialUpdate = true;} // Keep base opacity
              if (material.side !== FrontSide) { material.side = FrontSide; needsMaterialUpdate = true; } // Use FrontSide constant
              if (material.toneMapped !== true) { material.toneMapped = true; needsMaterialUpdate = true; }

          } else if (progress <= actualMaterialTransitionEnd) { // Use actualMaterialTransitionEnd
              // During material transition: Lerp properties based on t_material
              currentOpacity = MathUtils.lerp(reflectiveMaterial.opacity, 0.7, t_material);
              if (material.opacity !== currentOpacity) { material.opacity = currentOpacity; needsMaterialUpdate = true; }

              const targetTransmission = MathUtils.lerp(reflectiveMaterial.transmission, 2.5, t_material);
              if (material.transmission !== targetTransmission) { material.transmission = targetTransmission; needsMaterialUpdate = true; }

              const targetMetalness = MathUtils.lerp(reflectiveMaterial.metalness, 0.8, t_material);
              if (material.metalness !== targetMetalness) { material.metalness = targetMetalness; needsMaterialUpdate = true; }

              const targetRoughness = MathUtils.lerp(reflectiveMaterial.roughness, 0, t_material);
              if (material.roughness !== targetRoughness) { material.roughness = targetRoughness; needsMaterialUpdate = true; }

              const targetEnvMapIntensity = MathUtils.lerp(reflectiveMaterial.envMapIntensity, -0.5, t_material);
              if (material.envMapIntensity !== targetEnvMapIntensity) { material.envMapIntensity = targetEnvMapIntensity; needsMaterialUpdate = true; }

              const targetReflectivity = MathUtils.lerp(reflectiveMaterial.reflectivity, 0.99, t_material);
              if (material.reflectivity !== targetReflectivity) { material.reflectivity = targetReflectivity; needsMaterialUpdate = true; }

              const targetIor = MathUtils.lerp(reflectiveMaterial.ior, 2.3, t_material);
              if (material.ior !== targetIor) { material.ior = targetIor; needsMaterialUpdate = true; }

              const targetThickness = MathUtils.lerp(reflectiveMaterial.thickness, 0.5, t_material);
              if (material.thickness !== targetThickness) { material.thickness = targetThickness; needsMaterialUpdate = true; }

              dummyVec.set(reflectiveMaterial.attenuationColor.r, reflectiveMaterial.attenuationColor.g, reflectiveMaterial.attenuationColor.b);
              dummyVec.lerp(new Vector3(1,1,1), t_material); // Lerp towards white
              const targetAttenuationColor = new Color().setRGB(dummyVec.x, dummyVec.y, dummyVec.z);
              if (!material.attenuationColor.equals(targetAttenuationColor)) { material.attenuationColor.copy(targetAttenuationColor); needsMaterialUpdate = true; }

              const targetAttenuationDistance = MathUtils.lerp(0.0, 0.5, t_material);
              if (material.attenuationDistance !== targetAttenuationDistance) { material.attenuationDistance = targetAttenuationDistance; needsMaterialUpdate = true; }

              const targetSpecularIntensity = MathUtils.lerp(reflectiveMaterial.specularIntensity, 2.5, t_material);
              if (material.specularIntensity !== targetSpecularIntensity) { material.specularIntensity = targetSpecularIntensity; needsMaterialUpdate = true; }

              const targetEmissiveScalar = MathUtils.lerp(initialEmissiveIntensity, stage2EmissiveIntensity, t_material);
              const targetEmissiveColor = new Color().setScalar(targetEmissiveScalar);
              if (!material.emissive.equals(targetEmissiveColor)) { material.emissive.copy(targetEmissiveColor); needsMaterialUpdate = true; }

              const targetEmissiveIntensity = MathUtils.lerp(initialEmissiveIntensity, stage2EmissiveIntensity, t_material);
              if (material.emissiveIntensity !== targetEmissiveIntensity) { material.emissiveIntensity = targetEmissiveIntensity; needsMaterialUpdate = true; }

              // Add Sheen transition
              const targetSheen = MathUtils.lerp(reflectiveMaterial.sheen, 1.2, t_material);
              if (material.sheen !== targetSheen) { material.sheen = targetSheen; needsMaterialUpdate = true; }
              if (targetSheen > 0 && !material.sheenColor.equals(reflectiveMaterial.sheenColor)) {
                material.sheenColor.copy(reflectiveMaterial.sheenColor);
                needsMaterialUpdate = true;
              }

              if (material.depthWrite !== true) { material.depthWrite = true; needsMaterialUpdate = true; }
              if (material.depthTest !== true) { material.depthTest = true; needsMaterialUpdate = true; }

              const targetSide = t_material > 0.5 ? DoubleSide : FrontSide; // Use constants
              if (material.side !== targetSide) { material.side = targetSide; needsMaterialUpdate = true; }

              const targetToneMapped = t_material > 0.5 ? false : true;
              if (material.toneMapped !== targetToneMapped) { material.toneMapped = targetToneMapped; needsMaterialUpdate = true; }

          } else if (progress < s2TransitionStart) {
              // After material transition, before stage 3 transition: Use fully transitioned stage 2 material
              currentOpacity = 0.5;
              if (material.opacity !== currentOpacity) { material.opacity = currentOpacity; needsMaterialUpdate = true; }
              if (material.transmission !== 2.5) { material.transmission = 2.5; needsMaterialUpdate = true; }
              if (material.metalness !== 0.8) { material.metalness = 0.8; needsMaterialUpdate = true; }
              if (material.roughness !== 0) { material.roughness = 0; needsMaterialUpdate = true; }
              if (material.envMapIntensity !== -0.5) { material.envMapIntensity = -0.5; needsMaterialUpdate = true; }
              if (material.reflectivity !== 0.99) { material.reflectivity = 0.99; needsMaterialUpdate = true; }
              if (material.ior !== 2.3) { material.ior = 2.3; needsMaterialUpdate = true; }
              if (material.thickness !== 0.5) { material.thickness = 0.5; needsMaterialUpdate = true; }
              const finalAttenuationColor = new Color(1,1,1);
              if (!material.attenuationColor.equals(finalAttenuationColor)) { material.attenuationColor.copy(finalAttenuationColor); needsMaterialUpdate = true; }
              if (material.attenuationDistance !== 0.5) { material.attenuationDistance = 0.5; needsMaterialUpdate = true; }
              if (material.specularIntensity !== 2.5) { material.specularIntensity = 2.5; needsMaterialUpdate = true; }
              const finalEmissiveColor = new Color().setScalar(stage2EmissiveIntensity);
              if (!material.emissive.equals(finalEmissiveColor)) { material.emissive.copy(finalEmissiveColor); needsMaterialUpdate = true; }
              if (material.emissiveIntensity !== stage2EmissiveIntensity) { material.emissiveIntensity = stage2EmissiveIntensity; needsMaterialUpdate = true; }
              if (material.sheen !== 1.2) { material.sheen = 1.2; needsMaterialUpdate = true; }
              if (material.sheen > 0 && !material.sheenColor.equals(reflectiveMaterial.sheenColor)) {
                material.sheenColor.copy(reflectiveMaterial.sheenColor);
                needsMaterialUpdate = true;
              }
              if (material.depthWrite !== true) { material.depthWrite = true; needsMaterialUpdate = true; }
              if (material.depthTest !== true) { material.depthTest = true; needsMaterialUpdate = true; }
              if (material.side !== DoubleSide) { material.side = DoubleSide; needsMaterialUpdate = true; }
              if (material.toneMapped !== false) { material.toneMapped = false; needsMaterialUpdate = true; }

          } else { // Transitioning out to stage 3 (progress >= s2TransitionStart)
              // Lerp scale & opacity out based on t_stage3_transition
              // Keep final X, Y position from s1End
              currentX = targetRightShift;
              currentY = targetY;
              currentScale = MathUtils.lerp(midScale, 0.001, t_stage3_transition);

              const stage2Opacity = 0.5; // Adjusted final opacity before fade
              currentOpacity = MathUtils.lerp(stage2Opacity, 0, t_stage3_transition); // Fade out

              // Keep emissive from stage 2 during fade-out
              if (material.emissiveIntensity !== stage2EmissiveIntensity) { material.emissiveIntensity = stage2EmissiveIntensity; needsMaterialUpdate = true; }
              if (material.opacity !== currentOpacity) { material.opacity = currentOpacity; needsMaterialUpdate = true; }

              // Keep final stage 2 state for other props during fade
              if (material.side !== DoubleSide) { material.side = DoubleSide; needsMaterialUpdate = true; }
              if (material.toneMapped !== false) { material.toneMapped = false; needsMaterialUpdate = true; }
          }

          // Apply calculated scale, position - 
          // Don't apply if in initial blend range (already handled above)
          if (!isInInitialBlendRange) {
            meshRef.current.scale.set(currentScale, currentScale, currentScale);
            meshRef.current.position.set(currentX, currentY, 0);
          }

          if (needsMaterialUpdate) {
              material.needsUpdate = true;
          }

          // --- Rotation Logic (Adjusted for new material timing) ---
          // Don't apply if in initial blend range (already handled above)
          if (!isInInitialBlendRange) {
            const baseRotationSpeed = 0.3; // 基本の回転速度
            let currentRotationSpeed = baseRotationSpeed; // 現在のフレームでの回転速度

            if (progress >= s2TransitionStart) { // Stage 3 transition (fade out)
                // ステージ3移行中の回転ロジック（既存のまま）
                const transitionProgress = t_stage3_transition;
                const rotationMultiplier = Math.max(0, 1.0 - transitionProgress * 1.5);
                const additionalRotationSpeed = Math.sin(transitionProgress * Math.PI) * 2.5;
                currentRotationSpeed = baseRotationSpeed * rotationMultiplier + additionalRotationSpeed;

            } else if (progress > newMaterialTransitionStart && progress <= actualMaterialTransitionEnd) { // During material transition (Stage 1 -> 2)
                // マテリアル移行中の回転ロジック
                // t_material は 0 -> 1 に変化する
                // sinカーブを使って中間地点(0.5)で最大になるような係数を計算 (0 -> 1 -> 0)
                const transitionMidpointFactor = Math.sin(t_material * Math.PI);
                // ピーク時の速度倍率（例: 1.8倍速く） - この値を調整して速度変化の度合いを変更
                const peakSpeedMultiplier = 1.8;
                // 基本速度からの追加速度分を計算
                const additionalSpeedFactor = (peakSpeedMultiplier - 1.0) * transitionMidpointFactor;
                // 現在の速度 = 基本速度 * (1 + 追加速度係数)
                currentRotationSpeed = baseRotationSpeed * (1.0 + additionalSpeedFactor);

            } else {
                // マテリアル移行前、または移行後でステージ3移行前
                // 基本速度を維持
                currentRotationSpeed = baseRotationSpeed;
            }

            // 計算された回転速度を適用 (非常に遅い場合は適用しない)
            if (currentRotationSpeed > 0.001 * baseRotationSpeed) {
                meshRef.current.rotation.x += delta * currentRotationSpeed * 0.7;
                meshRef.current.rotation.y += delta * currentRotationSpeed;
                meshRef.current.rotation.z += delta * currentRotationSpeed * 0.5;
            }

            // Scroll influence logic remains the same (スクロールによる追加回転)
            const scrollInfluence = 1.0 - MathUtils.smoothstep(t_material, 0, 1); // Influence decreases during material transition
            if (scrollInfluence > 0.001 && progress < actualMaterialTransitionEnd) { // Check against actual end
                // Normalize scroll effect based on pre-transition phase only
                const t_scroll_norm = normalizeProgress(progress, 0, newMaterialTransitionStart); // Use new start
                const initialProgressFactor = Math.sin(t_scroll_norm * Math.PI / 2);
                const scrollRotationX = initialProgressFactor * 0.2;
                const scrollRotationY = t_scroll_norm * Math.PI;
                const scrollRotationZ = initialProgressFactor * 0.1;
                meshRef.current.rotation.x += scrollRotationX * delta * 2 * scrollInfluence;
                meshRef.current.rotation.y += scrollRotationY * delta * 2 * scrollInfluence;
                meshRef.current.rotation.z += scrollRotationZ * delta * 2 * scrollInfluence;
            }
          }
          // --- End Rotation Logic ---
      } // End if (meshRef.current.visible)
    }

    // --- Stage 3 (+ Transition in): instancedMesh Logic ---
    const showStage3 = progress > s2TransitionStart; // Stage 3 starts when single cube starts fading
    const instancedMaterial = instancedMeshRef.current.material as MeshStandardMaterial;
    let instanceMatrixNeedsUpdate = false;
    let instanceMaterialNeedsUpdate = false;

    const stage3Visible = t_stage3_transition > 0; // Visible during the transition period
    if (stage3GroupRef.current.visible !== stage3Visible) {
        stage3GroupRef.current.visible = stage3Visible;
    }
    if (instancedMeshRef.current.visible !== stage3Visible) {
        instancedMeshRef.current.visible = stage3Visible;
    }

    if (showStage3) {
        const targetScale = isMobile ? 1.0 : 1.2;
        const targetSpread = isMobile ? 1.6 : 2;
        const appearDelay = 0.2;
        const appearDuration = 0.4;

        // Calculate the group's start position based on single cube's final position
        const startPos = dummyVec; // Reuse dummy vector
        const finalX = isMobile ? 1 : 2.4; // Should match targetRightShift
        const finalY = isMobile ? 1.0 : 0; // Adjusted mobile Y from 1.5 to 1.3
        startPos.set(finalX, finalY, 0);
        stage3GroupRef.current.position.copy(startPos);

        // Apply rotation and scale pop to the group based on t_stage3_transition
        const groupRotationSpeed = 0.3;
        const transitionProgressFactor = Math.sin(t_stage3_transition * Math.PI);
        const transitionTwistY = transitionProgressFactor * Math.PI * 0.5;
        const transitionTwistX = transitionProgressFactor * Math.PI * 0.2;
        stage3GroupRef.current.rotation.y += delta * groupRotationSpeed + transitionTwistY * delta;
        stage3GroupRef.current.rotation.x += delta * groupRotationSpeed * 0.6 + transitionTwistX * delta;
        stage3GroupRef.current.rotation.z += delta * groupRotationSpeed * 0.3;

        const baseScale = 1.0;
        const scalePopAmount = 0.4;
        const currentGroupScale = baseScale + transitionProgressFactor * scalePopAmount;
        stage3GroupRef.current.scale.set(currentGroupScale, currentGroupScale, currentGroupScale);

        // Final relative positions
        const finalRelativePositions: Vector3[] = [
          new Vector3(-targetSpread / 2, targetSpread / 2, 0),
          new Vector3(targetSpread / 2, targetSpread / 2, 0),
          new Vector3(-targetSpread / 2, -targetSpread / 2, 0),
          new Vector3(targetSpread / 2, -targetSpread / 2, 0),
        ];

        const floatSpeed = 2;
        const floatDistance = 0.07;

        // Update instance matrices based on t_stage3_transition
        for (let i = 0; i < NUM_INSTANCES; i++) {
            const instanceAppearStart = i * appearDelay;
            const instanceProgress = normalizeProgress(
                t_stage3_transition, // Use the overall transition progress
                instanceAppearStart, // Start delay within the transition
                instanceAppearStart + appearDuration // Duration within the transition
            );
            const instanceScale = MathUtils.lerp(0.001, targetScale, instanceProgress);

            // Calculate floating animation offset
            const floatAmplitude =
              floatDistance * MathUtils.smoothstep(instanceProgress, 0.8, 1.0); // Fade in float
            const offset = i * (Math.PI / 2);
            const floatY = Math.sin(time * floatSpeed + offset) * floatAmplitude;

            // Calculate target position relative to the group
            dummyVec.copy(finalRelativePositions[i]);
            dummyVec.y += floatY;
            const targetRelativePos = dummyVec;

            // --- Update Local Rotation (Normal) --- >
            const currentLocalRotation = localRotationsRef.current[i];
            const individualRotationSpeed = 0.3;
            const timeOffset = i * 0.5;
            const rotXDelta = delta * individualRotationSpeed * (Math.sin(time * 0.5 + timeOffset) * 0.5 + 0.5);
            const rotYDelta = delta * individualRotationSpeed * 0.8 * (Math.cos(time * 0.4 + timeOffset * 1.2) * 0.5 + 0.5);
            const rotZDelta = delta * individualRotationSpeed * 0.5;
            currentLocalRotation.x += rotXDelta;
            currentLocalRotation.y += rotYDelta;
            currentLocalRotation.z += rotZDelta;
            // < --- End Update Local Rotation (Normal) ---

            // --- "Burun" Animation Logic --- >
            const burunDuration = 0.4; // Duration of the spin animation
            const totalSpinAngle = Math.PI * 2; // 360 degrees

            // Trigger Check
            if (instanceProgress >= 1 && !burunPlayedRef.current[i]) {
              burunPlayedRef.current[i] = true;
              burunStartTimeRef.current[i] = time;
            }

            // Animation Execution
            if (burunStartTimeRef.current[i] !== null) {
              const timeSinceBurunStart = time - burunStartTimeRef.current[i]!;
              if (timeSinceBurunStart < burunDuration) {
                const burunProgress = timeSinceBurunStart / burunDuration;
                const burunSpeed = Math.sin(burunProgress * Math.PI) * (totalSpinAngle / burunDuration) * 2;
                const spinDelta = burunSpeed * delta; // Angle to rotate this frame
                currentLocalRotation.y += spinDelta; // Add the spin to the Y rotation
              } else {
                // Animation finished
                burunStartTimeRef.current[i] = null; // Stop applying the animation
              }
            }
            // < --- End "Burun" Animation Logic ---

            // Set dummy object's transform using updated local state
            dummyObject.scale.set(instanceScale, instanceScale, instanceScale);
            dummyObject.position.set(0, 0, 0).lerp(targetRelativePos, instanceProgress); // Apply lerped position
            dummyObject.rotation.copy(currentLocalRotation); // Apply accumulated local rotation (including burun)

            // Update the matrix for this instance using the dummy object's local transform
            dummyObject.updateMatrix(); // Computes matrix from pos, rot, scale
            instancedMeshRef.current.setMatrixAt(i, dummyObject.matrix);
            instanceMatrixNeedsUpdate = true; // Mark matrix buffer for update
          }

        // Update material properties based on t_stage3_transition
        const overallFadeProgress = MathUtils.smoothstep(t_stage3_transition, 0, 1);
        const currentInstOpacity = MathUtils.lerp(0, 1, overallFadeProgress);
        const currentMetalness = MathUtils.lerp(0.5, 1.0, t_stage3_transition);
        const currentRoughness = MathUtils.lerp(0.5, 0.1, t_stage3_transition);

        if (instancedMaterial.opacity !== currentInstOpacity) {
          instancedMaterial.opacity = currentInstOpacity;
          instanceMaterialNeedsUpdate = true;
        }
        if (instancedMaterial.metalness !== currentMetalness) {
          instancedMaterial.metalness = currentMetalness;
          instanceMaterialNeedsUpdate = true;
        }
        if (instancedMaterial.roughness !== currentRoughness) {
          instancedMaterial.roughness = currentRoughness;
          instanceMaterialNeedsUpdate = true;
        }
    } else {
        // Ensure instances are hidden and reset if not in stage 3 transition
        if (instancedMeshRef.current.visible) {
            instancedMeshRef.current.visible = false;
            if (instancedMaterial.opacity !== 0) {
                instancedMaterial.opacity = 0;
                instanceMaterialNeedsUpdate = true;
            }
        }
        if (stage3GroupRef.current.visible) {
            stage3GroupRef.current.visible = false;
        }
    }

    // Apply updates to GPU if needed
    if (instanceMatrixNeedsUpdate) {
      instancedMeshRef.current.instanceMatrix.needsUpdate = true;
    }
    if (instanceMaterialNeedsUpdate) {
      instancedMaterial.needsUpdate = true;
    }
  }) // End useFrame

  return (
    <group position={[0, 0, 0]}>
      {/* Stage 1 & 2 Cube */}
      {/* Ensure the initial material is set here or in useEffect */}
      <RoundedBox args={[2, 2, 2]} radius={0.07} smoothness={2} ref={meshRef} visible={true} material={reflectiveMaterial} />

      {/* Stage 3 Instanced Cubes - Use lowercase instancedMesh primitive */}
      <group ref={stage3GroupRef} visible={false}>
        <instancedMesh
          ref={instancedMeshRef}
          args={[roundedBoxGeometry, metalMaterial, NUM_INSTANCES]}
        />
      </group>
    </group>
  )
}

function Scene({ isMobile }: { isMobile: boolean }) {
  return (
    <>
      <ambientLight intensity={2} />
      <directionalLight position={[10, 10, 5]} intensity={2} />
      <Suspense fallback={null}>
        <Cube isMobile={isMobile} />
        <SceneUpdater />
      </Suspense>
      <Environment preset="dawn" /> {/* Keep dawn as per previous adjustment? Or revert? Let's keep dawn for now */}
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
  const [isMounted, setIsMounted] = useState(false);
  const { isLoading } = useLoadingStore();
  const [canStartCubeAnimation, setCanStartCubeAnimation] = useState(false);

  const blurAmount = motionValue(20);
  const filterStyle = useTransform(blurAmount, value => `blur(${value}px)`);

  const { scrollYProgress } = useScroll();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isLoading && isMounted) {
      const timer = setTimeout(() => {
        setCanStartCubeAnimation(true);
      }, 200);
      return () => clearTimeout(timer);
    } else {
      setCanStartCubeAnimation(false);
    }
  }, [isLoading, isMounted]);

  useEffect(() => {
    if (isMounted) {
      const controls = animate(blurAmount, 0, {
        duration: 2.0,
        ease: "easeOut",
        delay: 0.5
      });
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

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const currentProgress = latest;
    const factor = isMobile ? 0.85 : 1;

    const tDuration = DEFAULT_TRANSITION_DURATION * factor;
    const transitionWidth = tDuration / 3.5;

    const s1End = DEFAULT_STAGE1_END * factor;
    const transition1Start = s1End - (transitionWidth / 2);
    const transition1End = s1End + (transitionWidth / 2);
    const blurStart1 = transition1Start - 0.02;
    const blurEnd1 = transition1End + 0.02;

    const s2End = DEFAULT_STAGE2_END * factor;
    const s2TransitionStart = s2End - (transitionWidth / 2);
    const s3TransitionEnd = s2End + (transitionWidth / 2);
    const blurStart2 = s2TransitionStart - 0.02;
    const blurEnd2 = s3TransitionEnd + 0.02;

    const maxBlur = 20;
    let newBlur = 0;

    if (currentProgress > blurStart1 && currentProgress < blurEnd1) {
      const normalizedProgress = (currentProgress - blurStart1) / (blurEnd1 - blurStart1);
      newBlur = Math.sin(normalizedProgress * Math.PI) * maxBlur;
    }
    else if (currentProgress > blurStart2 && currentProgress < blurEnd2) {
      const normalizedProgress = (currentProgress - blurStart2) / (blurEnd2 - blurStart2);
      newBlur = Math.sin(normalizedProgress * Math.PI) * maxBlur;
    }

    blurAmount.set(newBlur);
  });

  if (!isMounted) return null;

  return (
    <motion.div
      className="w-full h-screen z-10"
      initial={{
        opacity: 0,
        y: -500,
      }}
      animate={canStartCubeAnimation ? {
        opacity: 1,
        y: 0,
        transition: {
          opacity: { duration: 1.5, ease: "easeOut", delay: 0.2 },
          y: { duration: 1.5, ease: "easeOut", delay: 0.2 },
        }
      } : {
        opacity: 0,
        y: -500,
      }}
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
        dpr={Math.min(window.devicePixelRatio, 1.5)}
        style={{ pointerEvents: 'none' }}
      >
        <Scene isMobile={isMobile} />
      </Canvas>
    </motion.div>
  )
} 