"use client"

import { Canvas, RootState, useFrame } from '@react-three/fiber'
import { RoundedBox, Environment, useProgress } from '@react-three/drei'
import { EffectComposer, Noise } from '@react-three/postprocessing'
import { Suspense, useRef, useEffect, useState, useMemo } from 'react'
import { useScroll, motion } from 'framer-motion'
import { MeshPhysicalMaterial, Mesh, Color, WebGLRenderer, MeshStandardMaterial, Vector3, Group, InstancedMesh, Euler, Object3D } from 'three'
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
  if (end === start) return 0;
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

    // --- 初期状態の設定 ---
    if (meshRef.current) {
        meshRef.current.visible = true;
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

  }, [isMobile, dummyObject]);

  useFrame((state: RootState, delta: number) => {
    if (!isMounted || !meshRef.current || !instancedMeshRef.current || !stage3GroupRef.current || localRotationsRef.current.length !== NUM_INSTANCES) return

    const progress = scrollYProgress.get()
    const time = state.clock.elapsedTime

    // isMobile に応じた境界値を使用
    const t1 = normalizeProgress(progress, 0, stage1End)
    const t2 = normalizeProgress(progress, stage1End, stage2TransitionStart)
    const t_transition = normalizeProgress(progress, stage2TransitionStart, stage3TransitionEnd)

    // Reset burun state if scrolling back before stage 3 starts
    if (progress < stage2TransitionStart) {
      if (burunPlayedRef.current.some(played => played)) { // Optimization: check if any are true before resetting
        burunPlayedRef.current.fill(false);
        burunStartTimeRef.current.fill(null);
      }
    }

    // --- Handle Initial State Explicitly (progress === 0) ---
    if (progress === 0) {
        const initialScaleValue = isMobile ? 1.1 : 1.6;
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
        // Ensure instanced mesh is hidden at start
        if (instancedMeshRef.current.visible) instancedMeshRef.current.visible = false;
        return;
    }
    // --- End Initial State Handling ---

    // --- Stage 1 & 2 (+ Transition out): Single RoundedBox Logic ---
    meshRef.current.visible = progress < stage3TransitionEnd;
    if (meshRef.current.visible) {
      const material = meshRef.current.material as MeshPhysicalMaterial;
      const baseRotationSpeed = 0.3;

      // --- Scale, Position, Material Logic ---
      const initialScale = isMobile ? 1.1 : 1.6
      const midScale = isMobile ? 1.2 : 1.5
      const targetRightShift = isMobile ? 1 : 2.4 // PC時の右移動量を固定値に変更 (例: 2.4)
      const targetY = isMobile ? 1.5 : 0

      let currentScale: number;
      let currentX: number;
      let currentY: number;
      let currentOpacity: number;

      const initialEmissiveIntensity = 0.0;
      const stage2EmissiveIntensity = 0.5;

      let needsMaterialUpdate = false; // Flag to track if material needs update

      // Calculate movement progress (0 to stage1End)
      const t_move = normalizeProgress(progress, 0, stage1End);
      currentX = MathUtils.lerp(0, targetRightShift, t_move);

      if (progress <= stage1End) {
        // Stage 1: Lerp scale and Y position based on t_move
        currentScale = MathUtils.lerp(initialScale, midScale, t_move); // Scale changes during stage 1
        currentY = MathUtils.lerp(0, targetY, t_move); // Y position changes during stage 1
        // Ensure opacity stays at the initial value during stage 1
        currentOpacity = reflectiveMaterial.opacity;
        if (material.opacity !== currentOpacity) {
            material.opacity = currentOpacity;
            needsMaterialUpdate = true;
        }
        // Ensure other essential properties from reflectiveMaterial are initially set or maintained if necessary
        // For simplicity now, we only explicitly manage opacity here,
        // assuming other reflectiveMaterial properties are correctly initialized
        // and stage 2 lerping will handle the transitions properly.
        // We removed the explicit resets for other props from the previous edit.

      } else if (progress < stage2TransitionStart) {
        // Stage 2: Keep final scale, X, and Y from stage 1. Lerp material properties based on t2.
        currentScale = midScale; // Already reached midScale at stage1End
        currentY = targetY;      // Already reached targetY at stage1End
        // currentX is already set to targetRightShift as t_move is 1 here
        // Opacity remains 0.7 throughout stage 2 (lerp from 0.7 to 0.7)
        currentOpacity = MathUtils.lerp(reflectiveMaterial.opacity, 0.7, t2); // t2 goes 0 to 1
        if (material.opacity !== currentOpacity) { material.opacity = currentOpacity; needsMaterialUpdate = true; } // Apply lerped opacity

        // Lerp material properties based on t2 - with update checks
        const targetTransmission = MathUtils.lerp(reflectiveMaterial.transmission, 2.2, t2);
        if (material.transmission !== targetTransmission) { material.transmission = targetTransmission; needsMaterialUpdate = true; }

        const targetMetalness = MathUtils.lerp(reflectiveMaterial.metalness, 0.9, t2);
        if (material.metalness !== targetMetalness) { material.metalness = targetMetalness; needsMaterialUpdate = true; }

        const targetRoughness = MathUtils.lerp(reflectiveMaterial.roughness, 0, t2);
        if (material.roughness !== targetRoughness) { material.roughness = targetRoughness; needsMaterialUpdate = true; }

        const targetEnvMapIntensity = MathUtils.lerp(reflectiveMaterial.envMapIntensity, -0.5, t2);
        if (material.envMapIntensity !== targetEnvMapIntensity) { material.envMapIntensity = targetEnvMapIntensity; needsMaterialUpdate = true; }

        const targetReflectivity = MathUtils.lerp(reflectiveMaterial.reflectivity, 0.99, t2);
        if (material.reflectivity !== targetReflectivity) { material.reflectivity = targetReflectivity; needsMaterialUpdate = true; }

        const targetIor = MathUtils.lerp(reflectiveMaterial.ior, 2.5, t2);
        if (material.ior !== targetIor) { material.ior = targetIor; needsMaterialUpdate = true; }

        const targetThickness = MathUtils.lerp(reflectiveMaterial.thickness, 0.5, t2);
        if (material.thickness !== targetThickness) { material.thickness = targetThickness; needsMaterialUpdate = true; }

        // Reuse dummyVec for color lerp to avoid allocation
        dummyVec.set(reflectiveMaterial.attenuationColor.r, reflectiveMaterial.attenuationColor.g, reflectiveMaterial.attenuationColor.b);
        dummyVec.lerp(new Vector3(1,1,1), t2); // Lerp towards white
        const targetAttenuationColor = new Color().setRGB(dummyVec.x, dummyVec.y, dummyVec.z);
        if (!material.attenuationColor.equals(targetAttenuationColor)) { material.attenuationColor.copy(targetAttenuationColor); needsMaterialUpdate = true; }

        const targetAttenuationDistance = MathUtils.lerp(0.0, 0.7, t2);
        if (material.attenuationDistance !== targetAttenuationDistance) { material.attenuationDistance = targetAttenuationDistance; needsMaterialUpdate = true; }

        const targetSpecularIntensity = MathUtils.lerp(reflectiveMaterial.specularIntensity, 2.0, t2);
        if (material.specularIntensity !== targetSpecularIntensity) { material.specularIntensity = targetSpecularIntensity; needsMaterialUpdate = true; }

        const targetEmissiveScalar = MathUtils.lerp(initialEmissiveIntensity, stage2EmissiveIntensity, t2);
        if (!material.emissive.equals(new Color().setScalar(targetEmissiveScalar))) { material.emissive.setScalar(targetEmissiveScalar); needsMaterialUpdate = true; }

        const targetEmissiveIntensity = MathUtils.lerp(initialEmissiveIntensity, stage2EmissiveIntensity, t2);
        if (material.emissiveIntensity !== targetEmissiveIntensity) { material.emissiveIntensity = targetEmissiveIntensity; needsMaterialUpdate = true; }

        if (material.depthWrite !== true) { material.depthWrite = true; needsMaterialUpdate = true; }
        if (material.depthTest !== true) { material.depthTest = true; needsMaterialUpdate = true; }

        const targetSide = t2 > 0.5 ? 2 : 0; // 2 is DoubleSide, 0 is FrontSide
        if (material.side !== targetSide) { material.side = targetSide; needsMaterialUpdate = true; }

        const targetToneMapped = t2 > 0.5 ? false : true;
        if (material.toneMapped !== targetToneMapped) { material.toneMapped = targetToneMapped; needsMaterialUpdate = true; }

        // Opacity update handled above

      } else { // Transitioning out (progress >= stage2TransitionStart)
        // Keep the final position and stage 2 material base properties, lerp scale & opacity out
        currentX = targetRightShift;
        currentY = targetY;

        currentScale = MathUtils.lerp(midScale, 0.001, t_transition);
        // Ensure opacity starts from the value at the beginning of the transition (0.7 from stage 2)
        const stage2Opacity = 0.7; // Assuming stage 2 target opacity is 0.7
        currentOpacity = MathUtils.lerp(stage2Opacity, 0, t_transition); // Fade out from stage 2 opacity

        // Reset or keep material properties during fade-out? Example: keep emissive
        if (material.emissiveIntensity !== stage2EmissiveIntensity) { material.emissiveIntensity = stage2EmissiveIntensity; needsMaterialUpdate = true; }
        // Update opacity
        if (material.opacity !== currentOpacity) { material.opacity = currentOpacity; needsMaterialUpdate = true; }
        // Optionally reset other material props to avoid visual glitches if needed
      }

      // Apply calculated scale, position
      meshRef.current.scale.set(currentScale, currentScale, currentScale);
      meshRef.current.position.set(currentX, currentY, 0);

      // Only set needsUpdate if something actually changed
      if (needsMaterialUpdate) {
        material.needsUpdate = true;
      }
      // --- End Scale, Position, Material Logic ---

      // --- Rotation Logic (Modified for transition accent) ---
      let rotationMultiplier = 1.0;
      let additionalRotationSpeed = 0;

      if (progress >= stage2TransitionStart) {
        // During transition: Start fast rotation, then decay
        const transitionProgress = t_transition;
        rotationMultiplier = Math.max(0, 1.0 - transitionProgress * 1.5); // Faster decay
        // Add a burst of speed peaking early in the transition (Reduced intensity)
        additionalRotationSpeed = Math.sin(transitionProgress * Math.PI) * 2.5; // Adjust 2.5 for intensity
      } else if (progress > stage1End) {
        rotationMultiplier = MathUtils.lerp(1.0, 1.2, t2); // Slightly faster in stage 2
      } else {
        rotationMultiplier = 1.0; // Normal speed in stage 1
      }

      if (rotationMultiplier > 0.01 || additionalRotationSpeed > 0.01) { // Avoid tiny rotations
        const currentRotationSpeed = baseRotationSpeed * rotationMultiplier + additionalRotationSpeed;
        meshRef.current.rotation.x += delta * currentRotationSpeed * 0.7;
        meshRef.current.rotation.y += delta * currentRotationSpeed; // Apply speed boost mainly to Y axis?
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

    // --- Stage 3 (+ Transition in): instancedMesh Logic ---
    const showStage3 = progress > stage2TransitionStart;
    const instancedMaterial = instancedMeshRef.current.material as MeshStandardMaterial;
    let instanceMatrixNeedsUpdate = false;
    let instanceMaterialNeedsUpdate = false;

    // Manage visibility of stage 3 elements based on transition state
    const stage3Visible = t_transition > 0;
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

      // Calculate the group's start position
      const startPos = dummyVec; // Reuse dummy vector
      const initialScaleFallback = isMobile ? 1.6 : 1.9;
      const midScaleFallback = isMobile ? 1 : 1.3;
      const targetRightShiftFallback = isMobile
        ? 0.8
        : (initialScaleFallback - midScaleFallback) * 4;
      const targetYFallback = isMobile ? 1.0 : 0;
      startPos.set(targetRightShiftFallback, targetYFallback, 0);

      // Update stage3GroupRef position
      stage3GroupRef.current.position.copy(startPos);

      // Apply rotation to the group (parent of instancedMesh) - WITH TRANSITION ACCENT
      const groupRotationSpeed = 0.3;
      // Add a twist based on transition progress (peaks in the middle)
      const transitionProgressFactor = Math.sin(t_transition * Math.PI);
      const transitionTwistY = transitionProgressFactor * Math.PI * 0.5; // Y-axis twist intensity
      const transitionTwistX = transitionProgressFactor * Math.PI * 0.2; // X-axis twist intensity (smaller)

      stage3GroupRef.current.rotation.y += delta * groupRotationSpeed + transitionTwistY * delta; // Add Y twist
      stage3GroupRef.current.rotation.x += delta * groupRotationSpeed * 0.6 + transitionTwistX * delta; // Add X twist
      stage3GroupRef.current.rotation.z += delta * groupRotationSpeed * 0.3;

      // Add a scale pop during transition
      const baseScale = 1.0;
      const scalePopAmount = 0.4; // How much larger it gets at the peak (e.g., 1.15x)
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

      // Update instance matrices one by one
      for (let i = 0; i < NUM_INSTANCES; i++) {
        // Calculate progress for this specific instance's appearance animation
        const instanceAppearStart = i * appearDelay;
        const instanceProgress = normalizeProgress(
          t_transition,
          instanceAppearStart,
          instanceAppearStart + appearDuration
        );
        // Lerp scale from near-zero to target scale based on instance progress
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
            // Calculate speed based on sine curve (peaks in the middle)
            // Integral of sin(0 to PI) is 2. Multiply by 2 to ensure total angle = totalSpinAngle
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

      // Update material properties
      const overallFadeProgress = MathUtils.smoothstep(t_transition, 0, 1);
      const currentOpacity = MathUtils.lerp(0, 1, overallFadeProgress);
      const currentMetalness = MathUtils.lerp(0.5, 1.0, t_transition);
      const currentRoughness = MathUtils.lerp(0.5, 0.1, t_transition);

      if (instancedMaterial.opacity !== currentOpacity) {
        instancedMaterial.opacity = currentOpacity;
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
      // Reset burun state if not in stage 3 (already handled above by progress check)
      if (instancedMeshRef.current.visible) {
        instancedMeshRef.current.visible = false;
        // Reset opacity if needed when hiding
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
      <RoundedBox args={[2, 2, 2]} radius={0.07} smoothness={2} ref={meshRef} visible={true}>
        <primitive object={reflectiveMaterial} attach="material" />
      </RoundedBox>

      {/* Stage 3 Instanced Cubes - Use lowercase instancedMesh primitive */}
      <group ref={stage3GroupRef} visible={false}>
        <instancedMesh
          ref={instancedMeshRef}
          args={[roundedBoxGeometry, metalMaterial, NUM_INSTANCES]} // Use standard BoxGeometry
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
      <Environment preset="forest" />
      <EffectComposer>
        <Noise opacity={0.1} />
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

  const blurAmount = motionValue(20);
  const filterStyle = useTransform(blurAmount, value => `blur(${value}px)`);

  const { scrollYProgress } = useScroll();

  useEffect(() => {
    setIsMounted(true)
  }, [])

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
    const factor = isMobile ? 2 / 3 : 1;
    const s2End = DEFAULT_STAGE2_END * factor;
    const tDuration = DEFAULT_TRANSITION_DURATION * factor;
    const s2TransitionStart = s2End - tDuration / 3.5;
    const s3TransitionEnd = s2End + tDuration / 3.5;
    const blurStart = s2TransitionStart - 0.02;
    const blurEnd = s3TransitionEnd + 0.02;
    const maxBlur = 20;
    let newBlur = 0;
    if (currentProgress > blurStart && currentProgress < blurEnd) {
      const normalizedProgress = (currentProgress - blurStart) / (blurEnd - blurStart);
      newBlur = Math.sin(normalizedProgress * Math.PI) * maxBlur;
    }
    blurAmount.set(newBlur);
  });

  if (!isMounted) return null

  return (
    <motion.div
      className="w-full h-screen z-10"
      initial={{
        opacity: 0,
        y: -500,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        opacity: { duration: 1.5, ease: "easeOut", delay: 0.2 },
        y: { duration: 1.5, ease: "easeOut", delay: 0.2 },
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