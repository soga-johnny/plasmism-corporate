'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { useLoadingStore } from './LoadingScreen'

export default function Header() {
  const [mounted, setMounted] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentDate, setCurrentDate] = useState('')
  const [currentTime, setCurrentTime] = useState('')
  const pathname = usePathname()
  const { isLoading } = useLoadingStore()
  const [canStartAnimation, setCanStartAnimation] = useState(false)
  
  // メニューを開閉する関数
  const toggleMenu = () => setIsMenuOpen(prev => !prev)
  const closeMenu = () => setIsMenuOpen(false)
  
  // パス変更時にメニューを閉じる
  useEffect(() => {
    closeMenu()
  }, [pathname])
  
  // クライアントサイドのみで実行する処理
  useEffect(() => {
    setMounted(true)
    
    // 画面サイズの検出
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 1080)
    }
    
    // 日時の更新処理
    const updateDateTime = () => {
      const now = new Date()
      const year = now.getFullYear()
      const month = String(now.getMonth() + 1).padStart(2, '0')
      const day = String(now.getDate()).padStart(2, '0')
      const hours = String(now.getHours()).padStart(2, '0')
      const minutes = String(now.getMinutes()).padStart(2, '0')
      const seconds = String(now.getSeconds()).padStart(2, '0')
      
      setCurrentDate(`${year}.${month}.${day}`)
      setCurrentTime(`${hours}:${minutes}:${seconds}`)
    }
    
    // 初期化
    checkIfMobile()
    updateDateTime()
    
    // イベントリスナー設定
    window.addEventListener('resize', checkIfMobile)
    const interval = setInterval(updateDateTime, 1000)
    
    // メニュー開閉時のスクロール制御
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    
    // クリーンアップ
    return () => {
      window.removeEventListener('resize', checkIfMobile)
      clearInterval(interval)
      document.body.style.overflow = ''
    }
  }, [isMenuOpen, pathname])
  
  // --- ローディング完了後にアニメーションを開始するロジック ---
  useEffect(() => {
    // isLoading が false になった後、少し遅延させてアニメーションを開始
    if (!isLoading) {
      const timer = setTimeout(() => {
        setCanStartAnimation(true)
      }, 100) // LayoutProvider と同じ遅延時間
      return () => clearTimeout(timer)
    } else {
      // ローディング中はアニメーションをリセット（オプション）
      setCanStartAnimation(false)
    }
  }, [isLoading])
  // -------------------------------------------------------
  
  // ハイドレーション前は何も表示しない
  if (!mounted) {
    return null
  }
  
  // PCヘッダー
  if (!isMobile) {
    return (
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={
          canStartAnimation
            ? {
                opacity: 1,
                y: 0,
                transition: { duration: 0.7, delay: 0.6, ease: "easeOut" }
              }
            : { opacity: 0, y: -20 } // canStartAnimationがfalseの間は初期状態を維持
        }
        className="fixed top-0 left-0 right-0 text-[var(--foreground)] py-4 z-40 mix-blend-difference"
      >
        <div className="w-full mx-auto px-4 md:px-8 flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="mix-blend-normal">
              <Image 
                src="/logo-white.svg" 
                alt="Plasmism" 
                width={100}
                height={20}
                className="h-5 w-auto hover:opacity-70 transition-all duration-300 logo-white mix-blend-difference" 
              />
            </Link>
            <Link href="/" className="mix-blend-normal">
              <Image 
                src="/logo-dark.svg" 
                alt="Plasmism" 
                width={100}
                height={20}
                className="h-5 w-auto hover:opacity-70 transition-all duration-300 logo-dark mix-blend-difference" 
              />
            </Link>
          </div>
          <div className="flex items-center mix-blend-difference">
            <nav>
              <ul className="flex space-x-5 text-sm mr-8">
                <li><Link href="/" className={`hover:font-bold hover:text-[#BC2611] transition-all duration-300 ${pathname === '/' ? 'font-semibold border-b-2 border-[var(--foreground)] pb-1' : ''}`}>トップ</Link></li>
                <li><Link href="/about" className={`hover:font-bold hover:text-[#BC2611] transition-all duration-300 ${pathname === '/about' ? 'font-semibold border-b-2 border-[var(--foreground)] pb-1' : ''}`}>私たちについて</Link></li>
                <li><Link href="/feature" className={`hover:font-bold hover:text-[#BC2611] transition-all duration-300 ${pathname === '/feature' ? 'font-semibold border-b-2 border-[var(--foreground)] pb-1' : ''}`}>特徴</Link></li>
                <li><Link href="/product" className={`hover:font-bold hover:text-[#BC2611] transition-all duration-300 ${pathname === '/product' ? 'font-semibold border-b-2 border-[var(--foreground)] pb-1' : ''}`}>プロダクト</Link></li>
                <li><Link href="/service" className={`hover:font-bold hover:text-[#BC2611] transition-all duration-300 ${pathname === '/service' ? 'font-semibold border-b-2 border-[var(--foreground)] pb-1' : ''}`}>サービス</Link></li>
                {/* <li><Link href="/achievements" className={`hover:font-bold hover:translate-y-[-2px] transition-all duration-300 ${pathname === '/achievements' ? 'line-through font-bold' : ''}`}>実績</Link></li> */}
                <li><Link href="/recruit" className={`hover:font-bold hover:text-[#BC2611] transition-all duration-300 ${pathname === '/recruit' ? 'font-semibold border-b-2 border-[var(--foreground)] pb-1' : ''}`}>採用</Link></li>
                <li><Link href="/company" className={`hover:font-bold hover:text-[#BC2611] transition-all duration-300 ${pathname === '/company' ? 'font-semibold border-b-2 border-[var(--foreground)] pb-1' : ''}`}>会社案内</Link></li>
              </ul>
            </nav>
            <div className="mr-2 border-r border-[var(--foreground)]/50 pr-3 text-right flex flex-col items-end">
              <div className="-mb-1 text-xs">{currentDate}</div>
              <div className="text-base">{currentTime}</div>
            </div>
            <Link href="/contact" className="bg-[var(--foreground)] hover:bg-[#BC2611] hover:scale-105 hover:text-[var(--background)] transition-all duration-300 text-[var(--background)] rounded-md py-2 px-4 mx-1 flex items-center text-sm border border-[var(--foreground)]/20">
              お問い合わせ <span className="ml-2 border-l border-[var(--background)]/50 pl-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
            </Link>
            <Link href="/download" className="bg-[var(--foreground)] hover:bg-[#BC2611] hover:scale-105 hover:text-[var(--background)] transition-all duration-300 text-[var(--background)] rounded-md py-2 px-4 flex items-center text-sm border border-[var(--foreground)]/20">
              資料DL <span className="ml-2 border-l border-[var(--background)]/50 pl-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
            </Link>
          </div>
        </div>
      </motion.header>
    )
  }
  
  // SPヘッダー
  return (
    <>
      {/* モバイル用時計 - 最上部中央配置 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={
          canStartAnimation
            ? {
                opacity: 1,
                transition: { duration: 0.5, delay: 0.2, ease: "easeOut" }
              }
            : { opacity: 0 } // canStartAnimationがfalseの間は初期状態を維持
        }
        className="fixed top-0.5 left-1/2 transform -translate-x-1/2 z-[40] text-[var(--foreground)] text-center"
      >
        <div className="text-[8px] font-extralight tracking-wider">{currentDate} {currentTime}</div>
      </motion.div>
      
      {/* 下部固定メニュー */}
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={
          canStartAnimation
            ? {
                opacity: 1,
                y: 0,
                transition: { duration: 0.7, delay: 0.7, ease: "easeOut" }
              }
            : { opacity: 0, y: 20 } // canStartAnimationがfalseの間は初期状態を維持
        }
        className="fixed bottom-5 left-1/2 transform -translate-x-1/2 w-1/2 z-[70] flex backdrop-blur-lg mix-blend-difference overflow-hidden rounded-lg"
      >
        <button 
          className="flex-1 flex items-center justify-center py-4 text-[var(--foreground)] active:scale-95 active:bg-opacity-80 transition-all duration-300 overflow-hidden rounded-lg"
          style={{ backgroundColor: isMenuOpen ? 'var(--background)' : 'var(--foreground)' }}
          onClick={toggleMenu}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            <div
              className={`absolute flex items-center justify-center transition-all duration-500 transform ${
                isMenuOpen ? 'translate-y-[-100%] opacity-0' : 'translate-y-0 opacity-100'
              }`}
            >
              <div className="flex items-center">
                <div className="flex flex-col items-center mr-3">
                  <div className="w-4 h-[1px] bg-[var(--background)] mb-1 transform transition-transform duration-300"></div>
                  <div className="w-4 h-[1px] bg-[var(--background)] transform transition-transform duration-300"></div>
                </div>
                <span className="text-xs text-[var(--background)]">Menu</span>
              </div>
            </div>

            <div
              className={`absolute flex items-center justify-center transition-all duration-500 transform ${
                isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-[100%] opacity-0'
              }`}
            >
              <span className="mr-2">
                <svg 
                  width="18" 
                  height="18" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  className="transform rotate-0 transition-transform duration-500 text-[var(--foreground)]"
                >
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" fill="currentColor" stroke="currentColor" strokeWidth="0.5"/>
                </svg>
              </span>
              <span className="text-xs text-[var(--foreground)]">Close</span>
            </div>
          </div>
        </button>
      </motion.header>
      
      {/* モバイルメニュー - AnimatePresenceをクライアントサイドでのみレンダリング */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/60 z-[60] backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={closeMenu}
            />
            
            <motion.div
              className="fixed inset-x-4 bottom-16 bg-[var(--background)] border border-[var(--foreground)]/10 rounded-lg z-[70] flex flex-col"
              initial={{ opacity: 0, scale: 0.95, filter: "blur(8px)" }}
              animate={{ 
                opacity: 1, 
                scale: 1, 
                filter: "blur(0px)",
                transition: {
                  type: "spring",
                  damping: 20,
                  stiffness: 300,
                  duration: 0.5
                }
              }}
              exit={{ 
                opacity: 0, 
                scale: 0.98,
                filter: "blur(4px)",
                transition: {
                  duration: 0.25,
                  ease: "easeInOut"
                }
              }}
            >
              {/* ロゴ */}
              <div className="px-8 pt-5">
                <Link href="/" onClick={closeMenu} className="mix-blend-normal">
                  <Image 
                    src="/logo-white.svg" 
                    alt="Plasmism" 
                    width={100}
                    height={20}
                    className="h-5 w-auto logo-white" 
                  />
                </Link>
                <Link href="/" onClick={closeMenu} className="mix-blend-normal">
                  <Image 
                    src="/logo-dark.svg" 
                    alt="Plasmism" 
                    width={100}
                    height={20}
                    className="h-5 w-auto logo-dark" 
                  />
                </Link>
              </div>
              
              {/* スクロール可能なコンテンツエリア */}
              <div className="flex-1 py-3">
                {/* メニュー項目アニメーション */}
                <nav className="flex flex-col justify-start">
                  <ul className="text-left py-1 space-y-0">
                    {[
                      { path: "/", label: "トップ" },
                      { path: "/about", label: "私たちについて" },
                      { path: "/feature", label: "特徴" },
                      { path: "/product", label: "プロダクト" },
                      { path: "/service", label: "サービス" },
                      // { path: "/achievements", label: "実績" },
                      { path: "/recruit", label: "採用" },
                      { path: "/company", label: "会社案内" }
                    ].map((item, index) => (
                      <motion.li 
                        key={item.path}
                        className="mx-8 border-b border-[var(--foreground)]/10"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ 
                          opacity: 1, 
                          x: 0,
                          transition: {
                            delay: 0.05 * index,
                            duration: 0.25
                          }
                        }}
                      >
                        <Link 
                          href={item.path} 
                          className={`block py-3 text-sm hover:bg-[var(--foreground)]/10 transition-colors duration-200 ${pathname === item.path ? 'font-semibold' : ''}`}
                          onClick={closeMenu}
                        >
                          {item.label}
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                  
                  <div className="mt-2 px-8 space-y-3">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ 
                        opacity: 1, 
                        y: 0,
                        transition: {
                          delay: 0.4,
                          duration: 0.3
                        }
                      }}
                    >
                      {/* <Link 
                        href="/download" 
                        className="bg-[var(--foreground)] hover:bg-[#BC2611] hover:scale-105 hover:text-[var(--background)] transition-all duration-300 text-[var(--background)] rounded-md py-3 px-4 flex items-center justify-between text-sm w-full"
                        onClick={closeMenu}
                      >
                        資料ダウンロード <span className="border-l border-[var(--background)]/50 pl-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                      </Link> */}
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ 
                        opacity: 1, 
                        y: 0,
                        transition: {
                          delay: 0.5,
                          duration: 0.3
                        }
                      }}
                    >
                      <Link 
                        href="/contact" 
                        className="bg-[var(--foreground)] hover:bg-[#BC2611] hover:scale-105 hover:text-[var(--background)] transition-all duration-300 text-[var(--background)] rounded-md py-3 px-4 flex items-center justify-between text-sm w-full"
                        onClick={closeMenu}
                      >
                        お問い合わせ <span className="ml-2 border-l border-[var(--background)]/50 pl-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                      </Link>
                    </motion.div>
                  </div>
                  
                  <motion.div 
                    className="mt-auto px-8 py-2"
                    initial={{ opacity: 0 }}
                    animate={{ 
                      opacity: 1,
                      transition: {
                        delay: 0.6,
                        duration: 0.3
                      }
                    }}
                  >
                    {/* <Link 
                      href="/privacy" 
                      className="text-sm font-extralight hover:opacity-70 transition-opacity"
                      onClick={closeMenu}
                    >
                      プライバシーポリシー
                    </Link> */}
                  </motion.div>
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
} 