"use client"

import React from 'react'

interface PageTitleProps {
  titleEn: string;  // 英語タイトル (例: "About")
  titleJa: string;  // 日本語タイトル (例: "私たちについて")
  description?: string;  // 説明文 (オプション)
}

const PageTitle: React.FC<PageTitleProps> = ({ titleEn, titleJa, description }) => {
  return (
    <div className="md:mt-10 mt-8 mb-4 md:mb-8 border-b border-[var(--foreground)]/10 px-4 md:px-8">
      <p className="text-md md:mb-3 mb-2 font-serif text-[var(--foreground)]">● {titleEn}</p>
      <h1 className="md:text-6xl text-4xl md:mb-6 mb-4 text-[var(--foreground)]">{titleJa}</h1>
      {description && (
        <p className="md:mb-10 mb-8 md:text-sm text-xs text-[var(--foreground)]">{description}</p>
      )}
    </div>
  )
}

export default PageTitle 