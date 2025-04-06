"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // 300px スクロールしたらボタンを表示する
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // スムーズにトップへスクロールする
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    // コンポーネントのアンマウント時にイベントリスナーを削除
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          // スタイルを調整: 右下に固定、小さめのサイズ、丸い形、背景色、ホバー効果
          className="fixed bottom-5 right-6 z-50 p-2 rounded-full bg-[var(--background)] border border-[var(--foreground)]/20 text-[var(--foreground)] shadow-md hover:bg-[var(--foreground)] hover:text-[var(--background)] transition-colors duration-300 group"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.2 }}
          aria-label="トップへ戻る" // アクセシビリティのためのラベル
        >
          {/* /product ページの矢印アイコンを上向きに変更 */}
          <div className="transform transition-transform duration-300 group-hover:-translate-y-0.5">
            <svg
              className="w-4 h-4" // サイズを小さめに調整
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2" // 線を少し太く
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* 上向きの矢印のパス */}
              <path d="M5 10l7-7m0 0l7 7m-7-7v17" />
            </svg>
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTopButton; 