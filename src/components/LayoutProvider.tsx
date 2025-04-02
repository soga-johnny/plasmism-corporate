"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import LoadingScreen from "./LoadingScreen"; // 変更
import CustomCursor from "./CustomCursor"; // 変更

export default function LayoutProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // ここで初期ロードの判定や非同期処理を行う
    // 例: 1秒後にローディング完了（デモ用に短縮）
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer); // クリーンアップ
  }, []);

  return (
    <>
      <CustomCursor /> {/* 変更 */}
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname} // URLが変わるたびにアニメーションを実行
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      )}
    </>
  );
} 