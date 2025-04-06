"use client";

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { create, StateCreator } from 'zustand';
import { motion, AnimatePresence } from 'framer-motion';

// ローディング状態を管理するグローバルストア
interface LoadingState {
  isLoading: boolean;
  progress: number;
  loadStartTime?: number;
  setLoading: (isLoading: boolean) => void;
  setProgress: (progress: number) => void;
  incrementProgress: (amount: number) => void;
}

// クライアントサイド専用のストア
const loadingStoreCreator: StateCreator<LoadingState> = (set) => ({
  isLoading: true,
  progress: 0,
  loadStartTime: typeof window !== 'undefined' ? Date.now() : undefined,
  setLoading: (isLoading) => set({ isLoading }),
  setProgress: (progress) => set({ progress: Math.min(Math.max(progress, 0), 100) }),
  incrementProgress: (amount) => set((state) => ({ 
    progress: Math.min(Math.max(state.progress + amount, 0), 100) 
  })),
});

export const useLoadingStore = create<LoadingState>(loadingStoreCreator);

export default function LoadingScreen() {
  const { isLoading, progress, setLoading } = useLoadingStore();
  const [visualProgress, setVisualProgress] = useState(0);
  const [canHide, setCanHide] = useState(false);
  const [showReady, setShowReady] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const progressRef = useRef(progress);
  const visualProgressRef = useRef(visualProgress);
  const readyDisplayDuration = 800; // Ready表示の持続時間(ms)
  const lastProgressUpdateTime = useRef<number | null>(null); // 追加
  const progressCheckTimeout = useRef<NodeJS.Timeout | null>(null); // 追加

  // ストアのprogressをrefに同期
  useEffect(() => {
    progressRef.current = progress;
  }, [progress]);

  // visualProgressをrefに同期
  useEffect(() => {
    visualProgressRef.current = visualProgress;
  }, [visualProgress]);

  // クライアントサイドでのみ実行するためのマウントチェック
  useEffect(() => {
    setIsMounted(true);
    return () => {
      // アンマウント時にタイマーをクリア
      if (progressCheckTimeout.current) {
        clearTimeout(progressCheckTimeout.current);
      }
    };
  }, []);

  // スムーズなプログレス更新用
  useEffect(() => {
    if (!isLoading || !isMounted) return;

    let animationFrameId: number;
    const duration = 400; // アニメーション時間 (ms)

    const animateProgress = () => {
      const targetProgress = progressRef.current;
      const currentVisual = visualProgressRef.current;

      if (currentVisual < targetProgress) {
        const diff = targetProgress - currentVisual;
        const step = diff / (duration / (1000 / 60)); // 1フレームあたりの進捗量
        const nextValue = currentVisual + step;

        setVisualProgress(Math.min(nextValue, targetProgress));
      } else if (currentVisual > targetProgress) { // 逆方向もスムーズにする場合
        const diff = currentVisual - targetProgress;
        const step = diff / (duration / (1000/60));
        const nextValue = currentVisual - step;
        setVisualProgress(Math.max(nextValue, targetProgress));
      }

      // visualProgressRef と progressRef の比較で継続判定
      if (Math.abs(visualProgressRef.current - progressRef.current) > 0.1) { // 閾値を追加
        animationFrameId = requestAnimationFrame(animateProgress);
      }
    };

    animationFrameId = requestAnimationFrame(animateProgress);

    return () => cancelAnimationFrame(animationFrameId);
  }, [progress, isMounted, isLoading]);

  // --- 追加: progress の変化を監視して最終更新時間を記録 --- 
  useEffect(() => {
    if (isLoading && isMounted && progress > 0) { 
      lastProgressUpdateTime.current = Date.now();
      // プログレスが更新されたら、タイムアウトをクリア
      if (progressCheckTimeout.current) {
        clearTimeout(progressCheckTimeout.current);
        progressCheckTimeout.current = null;
      }
    }
  }, [progress, isLoading, isMounted]);

  // --- 追加: プログレスソースがない場合のタイムアウト処理 --- 
  useEffect(() => {
    if (!isMounted || !isLoading) return;

    // 既存のタイムアウトがあればクリア
    if (progressCheckTimeout.current) {
      clearTimeout(progressCheckTimeout.current);
    }

    // マウントから1.5秒後に実行されるタイマーを設定
    progressCheckTimeout.current = setTimeout(() => {
      // 1.5秒経っても progress が低いまま、または更新がない場合
      if (progressRef.current < 10 || lastProgressUpdateTime.current === null) {
        console.warn("LoadingScreen: No significant progress detected after 1.5s. Forcing progress to 100.");
        useLoadingStore.setState({ progress: 100 });
      }
      progressCheckTimeout.current = null; // タイマー完了
    }, 1500); // 1.5秒のタイムアウト

    // クリーンアップ関数
    return () => {
      if (progressCheckTimeout.current) {
        clearTimeout(progressCheckTimeout.current);
        progressCheckTimeout.current = null;
      }
    };
    // isMounted と isLoading が変わった時も再設定
  }, [isMounted, isLoading]); 

  // 最低表示時間と初期ビジュアルアニメーション
  useEffect(() => {
    if (!isMounted || !isLoading) return; // isLoadingもチェック

    const minDisplayTime = 2000;
    const startTime = performance.now();
    let visualAnimationId: number | null = null;

    // --- visualProgress の初期アニメーション --- 
    const initialVisualDuration = 1800; 
    const targetVisualProgress = 80;
    const animateVisualProgress = (currentTime: number) => {
         const elapsed = currentTime - startTime;
         const visualAnimProgress = Math.min(elapsed / initialVisualDuration, 1);
         const easedVisual = visualAnimProgress * (2 - visualAnimProgress);
         // 実際の visualProgress より低い場合のみ更新
         setVisualProgress(prev => Math.max(prev, easedVisual * targetVisualProgress));

         // visualProgress がターゲットに達するか、時間が経過したら停止
         if (visualAnimProgress < 1 && visualProgressRef.current < targetVisualProgress) {
             visualAnimationId = requestAnimationFrame(animateVisualProgress);
         } else {
             visualAnimationId = null; // アニメーション終了
         }
    }
    visualAnimationId = requestAnimationFrame(animateVisualProgress);
    // --- visualProgress アニメーションここまで ---

    // 最低表示時間経過後にcanHideをtrueにするタイマー
    const hideTimer = setTimeout(() => {
      setCanHide(true);
      if (visualAnimationId) {
          cancelAnimationFrame(visualAnimationId);
          visualAnimationId = null;
      }
    }, minDisplayTime);

    return () => {
      clearTimeout(hideTimer);
      if (visualAnimationId) {
          cancelAnimationFrame(visualAnimationId);
      }
    };
  }, [isMounted, isLoading]); // isLoading を依存配列に追加

  // 進捗が100%になったらReady表示 & フェードアウト
  useEffect(() => {
    if (!isMounted || !isLoading) return;

    if (progressRef.current >= 100 && !showReady) {
      setShowReady(true);
    }

    // Ready表示後、canHideがtrueになったらロード完了
    if (progressRef.current >= 100 && canHide && showReady) {
      const fadeTimer = setTimeout(() => {
        // controls.start() の代わりに setLoading(false) を呼ぶ
        setLoading(false); 
      }, readyDisplayDuration);

      return () => clearTimeout(fadeTimer);
    }
  }, [canHide, showReady, setLoading, isMounted, isLoading, readyDisplayDuration]);

  // サーバーサイドレンダリング時には何も表示しない
  if (!isMounted) return null;

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          key="loading-screen"
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#2B2325]"
          style={{
            backgroundImage: 'url("/background.png")',
            backgroundSize: 'auto 80%', // 画像サイズを小さく表示
            backgroundRepeat: 'repeat',
            willChange: 'opacity, filter, transform',
          }}
          initial={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
          exit={{ 
            opacity: 0,
            filter: "blur(24px)", 
            scale: 1.1, 
            transition: { 
              duration: 1.2, 
              ease: "easeInOut" 
            }
          }}
        >
          <motion.div 
            className="relative w-32 h-32 md:w-48 md:h-48"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          >
            <Image
              src="/logo-white.svg"
              alt="Logo"
              fill
              className="object-contain"
              priority
            />
          </motion.div>

          <motion.div 
            className="w-24 h-0.5 bg-white/20 rounded-full overflow-hidden"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
          >
            <motion.div
              className="h-full bg-white"
              style={{
                width: `${Math.floor(visualProgress)}%` 
              }}
              transition={{ 
                duration: 0.5, 
                ease: "easeInOut" 
              }}
            />
          </motion.div>

          <motion.div 
            className="mt-2 text-white/60 text-xs"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
          >
            {showReady ? 
              <motion.span 
                className="text-[#00E7A2] font-medium inline-block"
                initial={{ opacity: 0, y: 5 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  transition: { 
                    duration: 0.5, 
                    ease: "easeOut" 
                  }
                }}
              >
                Ready
              </motion.span> : 
              `Loading... ${Math.floor(visualProgress)}%`
            }
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 