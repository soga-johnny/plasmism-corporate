"use client";

import { motion } from "framer-motion";

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }} // 必要に応じてアニメーションを追加
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-white" // 仮のスタイル
    >
      <p className="text-xl font-bold">Loading...</p>
      {/* ここにローディングアニメーションなどを追加 */}
    </motion.div>
  );
} 