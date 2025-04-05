'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface ScrollingTitleProps {
  text: string;
}

export default function ScrollingTitle({ text }: ScrollingTitleProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  // useScroll に target と offset を再設定
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  // x の outputRange を ["100%", "-100%"] に変更して進行方向を逆にする
  const x = useTransform(scrollYProgress, [0, 1], ["40%", "-40%"])

  return (
    // 親 div に mask-image スタイルを追加してフェード効果を実装
    <div 
      ref={containerRef} 
      className="h-[120px] md:h-[400px] relative flex items-center justify-center md:-mb-40 -mb-8 overflow-hidden"
      style={{ 
        maskImage: 'linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)', // Safari 対応
        overflowY: 'hidden'
      }}
    >
      <motion.p 
        style={{ x, fontFamily: 'EBGaramond' }}
        className="absolute whitespace-nowrap text-[120px] md:text-[300px] text-[var(--foreground)]/10 tracking-wider select-none -z-50"
      >
       {text} {/* 受け取った text を表示 */}
      </motion.p>
    </div>
  )
} 