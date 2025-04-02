'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

export default function Header() {
  const [mounted, setMounted] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentDate, setCurrentDate] = useState('')
  const [currentTime, setCurrentTime] = useState('')
  const pathname = usePathname()
  
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
      setIsMobile(window.innerWidth < 768)
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
  }, [isMenuOpen])
  
  // ハイドレーション前は何も表示しない
  if (!mounted) {
    return null
  }
  
  // PCヘッダー
  if (!isMobile) {
    return (
      <header className="fixed top-0 left-0 right-0 text-white py-4 z-40">
        <div className="w-full max-w-[1440px] mx-auto px-4 md:px-8 flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/">
              <Image 
                src="/logo.svg" 
                alt="Plasmism" 
                width={100}
                height={20}
                className="h-5 w-auto hover:opacity-70 transition-all duration-300" 
              />
            </Link>
          </div>
          <div className="flex items-center">
            <nav>
              <ul className="flex space-x-6 text-sm font-extralight mr-12">
                <li><Link href="/" className={`hover:opacity-70 hover:translate-y-[-2px] transition-all duration-300 ${pathname === '/' ? 'line-through font-normal' : ''}`}>トップ</Link></li>
                <li><Link href="/about" className={`hover:opacity-70 hover:translate-y-[-2px] transition-all duration-300 ${pathname === '/about' ? 'line-through font-normal' : ''}`}>私たちについて</Link></li>
                <li><Link href="/feature" className={`hover:opacity-70 hover:translate-y-[-2px] transition-all duration-300 ${pathname === '/feature' ? 'line-through font-normal' : ''}`}>特徴</Link></li>
                <li><Link href="/product" className={`hover:opacity-70 hover:translate-y-[-2px] transition-all duration-300 ${pathname === '/product' ? 'line-through font-normal' : ''}`}>プロダクト</Link></li>
                <li><Link href="/service" className={`hover:opacity-70 hover:translate-y-[-2px] transition-all duration-300 ${pathname === '/service' ? 'line-through font-normal' : ''}`}>サービス</Link></li>
                <li><Link href="/achievements" className={`hover:opacity-70 hover:translate-y-[-2px] transition-all duration-300 ${pathname === '/achievements' ? 'line-through font-normal' : ''}`}>実績</Link></li>
                <li><Link href="/recruit" className={`hover:opacity-70 hover:translate-y-[-2px] transition-all duration-300 ${pathname === '/recruit' ? 'line-through font-normal' : ''}`}>採用</Link></li>
                <li><Link href="/company" className={`hover:opacity-70 hover:translate-y-[-2px] transition-all duration-300 ${pathname === '/company' ? 'line-through font-normal' : ''}`}>会社案内</Link></li>
              </ul>
            </nav>
            <div className="mr-2 text-right border-r border-gray-500 pr-4">
              <div className="text-sm font-extralight">{currentDate}</div>
              <div className="text-md font-extralight">{currentTime}</div>
            </div>
            <Link href="/contact" className="bg-[#ffffff] hover:bg-[#BC2611] hover:scale-105 hover:text-[#ffffff] transition-all duration-300 text-[#251E1F] rounded-md py-3 px-4 mx-2 flex items-center text-sm">
              お問い合わせ <span className="ml-2 border-l border-[#251E1F] pl-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
            </Link>
            <Link href="/download" className="bg-[#ffffff] hover:bg-[#BC2611] hover:scale-105 hover:text-[#ffffff] transition-all duration-300 text-[#251E1F] rounded-md py-3 px-4 flex items-center text-sm">
              資料DL <span className="ml-2 border-l border-[#251E1F] pl-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
            </Link>
          </div>
        </div>
      </header>
    )
  }
  
  // SPヘッダー
  return (
    <>
      {/* モバイル用時計 - 最上部中央配置 */}
      <div className="fixed top-0.5 left-1/2 transform -translate-x-1/2 z-[40] mix-blend-difference text-white text-center">
        <div className="text-[8px] font-extralight tracking-wider">{currentDate} {currentTime}</div>
      </div>
      
      {/* 下部固定メニュー */}
      <header className="fixed bottom-5 left-1/2 transform -translate-x-1/2 w-2/3 z-[70] flex bg-white overflow-hidden rounded-lg rounded-tr-lg">
        <button 
          className="flex-1 flex items-center justify-center py-4 bg-white text-[#251E1F] border-r border-gray-200 active:scale-95 active:bg-gray-100 transition-all duration-300 overflow-hidden"
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
                  <div className="w-6 h-[1px] bg-[#251E1F] mb-1 transform transition-transform duration-300"></div>
                  <div className="w-6 h-[1px] bg-[#251E1F] transform transition-transform duration-300"></div>
                </div>
                <span className="text-xs">メニュー</span>
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
                  className="transform rotate-0 transition-transform duration-500"
                >
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" fill="currentColor" stroke="currentColor" strokeWidth="0.5"/>
                </svg>
              </span>
              <span className="text-xs">閉じる</span>
            </div>
          </div>
        </button>
        {/* <Link 
          href="/contact" 
          className="flex-1 flex items-center justify-center gap-2 py-1 bg-[#c22626] text-white"
        >
          <span className="text-xs">お問合わせ</span>
        </Link> */}
      </header>
      
      {/* モバイルメニュー - AnimatePresenceをクライアントサイドでのみレンダリング */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/60 z-[60]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={closeMenu}
            />
            
            <motion.div
              className="fixed inset-x-4 bottom-16 h-[84vh] bg-[#1C1819] border border-white/10 rounded-lg overflow-hidden z-[70] flex flex-col"
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
              <div className="px-8 pt-4">
                <Link href="/" onClick={closeMenu}>
                  <Image 
                    src="/logo.svg" 
                    alt="Plasmism" 
                    width={100}
                    height={20}
                    className="h-3 w-auto" 
                  />
                </Link>
              </div>
              
              {/* スクロール可能なコンテンツエリア */}
              <div className="flex-1 overflow-y-auto py-6">
                {/* メニュー項目アニメーション */}
                <nav className="flex flex-col justify-start">
                  <ul className="text-left mx-8 py-1 space-y-0 border-t border-white/10">
                    {[
                      { path: "/", label: "トップ" },
                      { path: "/about", label: "私たちについて" },
                      { path: "/feature", label: "特徴" },
                      { path: "/product", label: "プロダクト" },
                      { path: "/service", label: "サービス" },
                      { path: "/achievements", label: "実績" },
                      { path: "/recruit", label: "採用" },
                      { path: "/company", label: "会社案内" }
                    ].map((item, index) => (
                      <motion.li 
                        key={item.path}
                        className="border-b border-white/10"
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
                          className={`block py-3 px-8 text-md font-extralight hover:bg-gray-900 transition-colors duration-200 ${pathname === item.path ? 'line-through font-normal' : ''}`}
                          onClick={closeMenu}
                        >
                          {item.label}
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                  
                  <div className="mt-6 px-8 space-y-4">
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
                      <Link 
                        href="/download" 
                        className="bg-[#ffffff] hover:bg-[#BC2611] hover:scale-105 hover:text-[#ffffff] transition-all duration-300 text-[#251E1F] rounded-md py-3 px-4 flex items-center justify-between text-sm w-full"
                        onClick={closeMenu}
                      >
                        資料ダウンロード <span className="border-l border-[#251E1F] pl-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                      </Link>
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
                        className="bg-[#ffffff] hover:bg-[#BC2611] hover:scale-105 hover:text-[#ffffff] transition-all duration-300 text-[#251E1F] rounded-md py-3 px-4 flex items-center justify-between text-sm w-full"
                        onClick={closeMenu}
                      >
                        お問い合わせ <span className="ml-2 border-l border-[#251E1F] pl-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                      </Link>
                    </motion.div>
                  </div>
                  
                  <motion.div 
                    className="mt-auto mb-4 px-8 py-4"
                    initial={{ opacity: 0 }}
                    animate={{ 
                      opacity: 1,
                      transition: {
                        delay: 0.6,
                        duration: 0.3
                      }
                    }}
                  >
                    <Link 
                      href="/privacy" 
                      className="text-sm font-extralight hover:opacity-70 transition-opacity"
                      onClick={closeMenu}
                    >
                      プライバシーポリシー
                    </Link>
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