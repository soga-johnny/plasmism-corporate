"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { create, StateCreator } from 'zustand';

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
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const loadingStoreCreator: StateCreator<LoadingState> = (set, _get) => ({
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
  const [isFading, setIsFading] = useState(false);
  const [canHide, setCanHide] = useState(false);
  const [showReady, setShowReady] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // クライアントサイドでのみ実行するためのマウントチェック
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // コンポーネントがマウントされてから2秒後にcanHideをtrueに設定
  useEffect(() => {
    if (!isMounted) return;

    const timer = setTimeout(() => {
      setCanHide(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, [isMounted]);

  useEffect(() => {
    if (!isMounted) return;

    // 進捗が100%に達した時点でまずReady表示の準備
    if (progress >= 100 && !showReady) {
        setShowReady(true);
    }

    // 進捗が100%で、最低表示時間も経過し、まだフェード中でなければフェードアウト開始
    if (progress >= 100 && canHide && !isFading) {
      // Ready表示を確認（もし↑のifで設定されていなければここで設定）
      if (!showReady) setShowReady(true);

      // 少し待ってからフェードアウト処理を開始
      const fadeTimer = setTimeout(() => {
        setIsFading(true);
        const hideTimer = setTimeout(() => {
          setLoading(false);
        }, 800); // フェードアウトアニメーション時間
        // cleanup hideTimer
        return () => clearTimeout(hideTimer);
      }, 500); // Ready表示からフェードアウト開始までの時間 (900msから調整)

      // cleanup fadeTimer
      return () => clearTimeout(fadeTimer);
    }
  }, [progress, canHide, isFading, showReady, setLoading, isMounted]);

  // 初期ロード時に最低2秒間はローディング画面を表示する
  useEffect(() => {
    if (!isMounted) return;

    const minLoadingTimer = setTimeout(() => {
      // canHideがtrueになるタイミングで実行
      // 最低表示時間が経過しても進捗が100%未満なら80%まで自動で進める
      // ただし、既に外部から100%に設定されている場合は何もしない
       if (useLoadingStore.getState().progress < 100) {
         useLoadingStore.getState().setProgress(Math.max(useLoadingStore.getState().progress, 80));
       }
    }, 2000); // 2秒後に canHide が true になるのに合わせる

    return () => clearTimeout(minLoadingTimer);
  }, [isMounted]); // isMounted だけで良い

  // サーバーサイドレンダリング時には何も表示しない
  if (!isMounted) return null;
  if (!isLoading) return null;

  return (
    <div 
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#2B2325] ${isFading ? 'fade-out' : ''}`}
      style={{
        backgroundImage: 'url("/background.png")',
        backgroundRepeat: 'repeat',
      }}
    >
      <div className="relative w-32 h-32 md:w-48 md:h-48 fade-in mb-8">
        <Image
          src="/logo-white.svg"
          alt="Logo"
          fill
          className="object-contain"
          priority
        />
      </div>

      <div className="w-24 h-0.5 bg-white/20 rounded-full overflow-hidden fade-in">
        <div 
          className="h-full bg-white transition-all duration-600 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="mt-2 text-white/60 text-xs fade-in">
        {showReady ? 
          <span className="text-[#00E7A2] font-medium animate-pulse">Ready</span> : 
          `Starting... ${Math.floor(progress)}%`
        }
      </div>
    </div>
  );
} 