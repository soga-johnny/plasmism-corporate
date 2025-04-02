"use client"

import React from 'react'

interface PageTitleProps {
  titleEn: string;  // 英語タイトル (例: "About")
  titleJa: string;  // 日本語タイトル (例: "私たちについて")
  description?: string;  // 説明文 (オプション)
}

const PageTitle: React.FC<PageTitleProps> = ({ titleEn, titleJa, description }) => {
  return (
    <div className="mb-8 border-b border-white/10 px-4 md:px-8">
      <p className="text-md mb-4 font-serif font-light tracking-wider">● {titleEn}</p>
      <h1 className="text-5xl font-thin mb-6">{titleJa}</h1>
      {description && (
        <p className="mb-8 font-extralight text-sm md:text-base">{description}</p>
      )}
    </div>
  )
}

export default PageTitle 