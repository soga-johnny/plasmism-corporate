'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useEffect, useState, useRef } from 'react'

// パンくずリストの設定
const breadcrumbMap: { [key: string]: { label: string; parent?: string } } = {
  '/': { label: 'トップ' },
  '/privacy': { label: 'プライバシーポリシー', parent: '/' },
  '/about': { label: '私たちについて', parent: '/' },
  '/feature': { label: '特徴', parent: '/' },
  '/product': { label: 'プロダクト', parent: '/' },
  '/service': { label: 'サービス', parent: '/' },
  // '/achievements': { label: '実績', parent: '/' },
  // '/achievements/[id]': { label: '', parent: '/achievements' },
  '/recruit': { label: '採用', parent: '/' },
  '/company': { label: '会社案内', parent: '/' },
  '/contact': { label: 'お問い合わせ', parent: '/' },
  '/download': { label: '資料ダウンロード', parent: '/' }
}

export default function Footer() {
  const pathname = usePathname()
  const [dynamicTitle, setDynamicTitle] = useState<string>('')
  const [isLoading, setIsLoading] = useState(false)
  const footerRef = useRef<HTMLDivElement>(null);
  
  // Notionのタイトルを取得する関数
  const fetchNotionTitle = async (id: string) => {
    setIsLoading(true)
    try {
      const response = await fetch(`/api/notion/pages/${id}`)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const data = await response.json()
      const title = data.properties?.Title?.title?.[0]?.plain_text || '実績詳細'
      setDynamicTitle(title)
    } catch (error) {
      console.error('Failed to fetch Notion title:', error)
      setDynamicTitle('実績詳細')
    } finally {
      setIsLoading(false)
    }
  }
  
  // パスが変更されたときにタイトルを取得
  useEffect(() => {
    const match = pathname.match(/^\/achievements\/([^/]+)$/);
    if (match && match[1]) {
      fetchNotionTitle(match[1]);
    } else {
      setDynamicTitle('');
    }
  }, [pathname]);
  
  // フッターの表示状態に応じてテーマを切り替える (IntersectionObserver)
  useEffect(() => {
    // クライアントサイドでのみ実行
    const isMobile = window.innerWidth <= 1080;
    const thresholdValue = isMobile ? 0.3 : 0.7; // モバイルなら0.4、PCなら0.6

    if (process.env.NODE_ENV === 'development') {
      console.log(`Setting threshold based on screen width. isMobile: ${isMobile}, threshold: ${thresholdValue}`);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        const htmlElement = document.documentElement;
        if (entry.isIntersecting) {
          // フッターが表示領域に入ったらダークテーマ（lightクラスを削除）
          htmlElement.classList.remove('light');
          if (process.env.NODE_ENV === 'development') {
              console.log('Footer intersecting, removing light theme.');
          }
        } else {
          // フッターが表示領域から出たらライトテーマ（lightクラスを追加）
          htmlElement.classList.add('light');
          if (process.env.NODE_ENV === 'development') {
              console.log('Footer not intersecting, adding light theme.');
          }
        }
      },
      {
        rootMargin: '0px',
        threshold: thresholdValue, // 動的に設定した閾値を使用
      }
    );

    const currentRef = footerRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    // クリーンアップ
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      // 念のため、アンマウント時にライトテーマに戻す
      document.documentElement.classList.add('light');
    };
  }, []); // マウント時に一度だけ実行
  
  // パンくずリストを生成する関数
  const generateBreadcrumbs = () => {
    const breadcrumbs: {path: string; label: string}[] = []
    let currentPath = pathname
    let basePathForLookup = pathname;

    // 実績詳細ページの特別処理
    if (pathname.startsWith('/achievements/')) {
      const match = pathname.match(/^\/achievements\/([^/]+)$/);
      if (match && match[1]) {
        // const achievementId = match[1]; // 未使用のため削除
        // ローディング中か、タイトル取得済みか
        const label = isLoading ? '読み込み中...' : (dynamicTitle || '実績詳細'); // タイトル or フォールバック
        breadcrumbs.unshift({ path: pathname, label: label });
        basePathForLookup = '/achievements'; // 親パスから辿る
      }
    }

    // 静的パスを辿る
    currentPath = basePathForLookup;
    while (currentPath) {
        const mapEntry = breadcrumbMap[currentPath];
        if (mapEntry) {
            // 既に動的パンくずが追加されている場合、その親は追加しない
            // （例: /achievements/[id] があれば、/achievements は追加済みのはず）
            // ただし、動的処理で親を設定しているので、ここでは単純に追加で良いはず
            if (!breadcrumbs.some(b => b.path === currentPath)) {
               breadcrumbs.unshift({ path: currentPath, label: mapEntry.label });
            }
            currentPath = mapEntry.parent || '';
        } else {
            // マップにない場合は終了
            break;
        }
    }
    
    // トップページがなければ追加 (ルートパスの考慮)
    if (!breadcrumbs.some(b => b.path === '/') && breadcrumbMap['/'] && pathname !== '/') {
        breadcrumbs.unshift({ path: '/', label: breadcrumbMap['/'].label });
    }

    return breadcrumbs;
  }
  
  const breadcrumbs = generateBreadcrumbs()
  
  // お問い合わせと資料請求セクションの表示制御
  const isContactPage = pathname === '/contact' || pathname.startsWith('/contact/')
  const isDownloadPage = pathname === '/download' || pathname.startsWith('/download/')
  const shouldShowContactSection = !isContactPage && !isDownloadPage
  
  // 開発環境でのデバッグ用
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      console.log('Current pathname:', pathname)
      console.log('Is contact page:', isContactPage)
      console.log('Is download page:', isDownloadPage)
      console.log('Should show contact section:', shouldShowContactSection)
    }
  }, [pathname, isContactPage, isDownloadPage, shouldShowContactSection])
  
  return (
    <footer ref={footerRef} className="text-[var(--foreground)] pt-12 pb-4 transition-colors duration-300">
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12">
        {/* パンくずリスト */}
        <div className="border-y border-[var(--foreground)]/10 py-6 my-8">
          <div className="flex items-center space-x-2 text-sm">
            {breadcrumbs.map((breadcrumb, index) => (
              <div key={breadcrumb.path} className="flex items-center">
                {index > 0 && <span className="mx-2">/</span>}
                {index === breadcrumbs.length - 1 ? (
                  <span className="text-[var(--foreground)]">{breadcrumb.label || '現在のページ'}</span>
                ) : (
                  <Link href={breadcrumb.path} className="hover:text-[var(--foreground)]/70 transition-colors">
                    {breadcrumb.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between mb-12">
          <div className="flex flex-col mb-8 md:mb-0">
            {/* パンくずは上部に移動したので、ここは削除 */}
          </div>
          
          {shouldShowContactSection && (
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-2 gap-1">
              <Link href="/contact" className="inline-block group">
                <div className="bg-[var(--foreground)]/10 hover:bg-[var(--foreground)]/15 hover:shadow-xl hover:scale-[1.02] transition-all rounded-xl md:px-20 px-8 md:py-20 py-10 w-full">
                  <h3 className="md:text-4xl text-2xl mb-6 text-center border-b border-[var(--foreground)]/10 pb-4">お問い合わせ・ご相談</h3>
                  <p className="text-base md:mb-12 mb-6 text-[var(--foreground)]/80">
                    UXデザイン、コーポレートデザイン、アーキテクチャデザインなど、課題に真摯に向き合って対応。
                    初回相談は無料で、お客様の状況に合わせた最適な提案をいたします。
                  </p>
                  <div className="flex justify-center">
                    <svg className="w-14 h-14 transition-transform duration-500 group-hover:rotate-[360deg]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>

              <Link href="/download" className="inline-block group">
                <div className="bg-[var(--foreground)]/10 hover:bg-[var(--foreground)]/15 hover:shadow-xl hover:scale-[1.02] transition-all rounded-xl md:px-20 px-8 md:py-20 py-10 w-full">
                  <h3 className="md:text-4xl text-2xl mb-6 text-center border-b border-[var(--foreground)]/10 pb-4">会社資料ダウンロード</h3>
                  <p className="text-base md:mb-12 mb-6 text-[var(--foreground)]/80">
                    サービスの具体的な内容や、実績事例、アプローチをまとめた資料をご用意。
                    メールアドレスをご入力いただくだけで、すぐに担当からダウンロードリンクを送付します。
                  </p>
                  <div className="flex justify-center">
                    <svg className="w-14 h-14 transition-transform duration-500 group-hover:rotate-[360deg]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5">
                      <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                </div>
              </Link>
            </div>
          )}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div>
            <h4 className="text-xs mb-4 text-[var(--foreground)]/70">About us</h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="hover:text-[var(--foreground)]/70 transition-colors text-base font-light">私たちについて</Link></li>
              <li><Link href="/feature" className="hover:text-[var(--foreground)]/70 transition-colors text-base font-light">特徴</Link></li>
              <li><Link href="/company" className="hover:text-[var(--foreground)]/70 transition-colors text-base font-light">会社案内</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs mb-4 text-[var(--foreground)]/70">Service and Product</h4>
            <ul className="space-y-3">
              <li><Link href="/service" className="hover:text-[var(--foreground)]/70 transition-colors text-base font-light">サービス</Link></li>
              <li><Link href="/product" className="hover:text-[var(--foreground)]/70 transition-colors text-base font-light">プロダクト</Link></li>
               {/* <li><Link href="/achievements" className="hover:text-[var(--foreground)]/70 transition-colors text-base font-light">実績</Link></li> */}
            </ul>
          </div>
          <div>
            <h4 className="text-xs mb-4 text-[var(--foreground)]/70">Support</h4>
            <ul className="space-y-3">
              <li><Link href="/contact" className="hover:text-[var(--foreground)]/70 transition-colors text-base font-light">お問い合わせ</Link></li>
              <li><Link href="/download" className="hover:text-[var(--foreground)]/70 transition-colors text-base font-light">資料ダウンロード</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs mb-4 text-[var(--foreground)]/70">Recruit</h4>
            <ul className="space-y-3">
              <li><Link href="/recruit" className="hover:text-[var(--foreground)]/70 transition-colors text-base font-light">採用情報</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-[var(--foreground)]/10 pt-8">
            <div className="flex flex-col justify-between items-center">
                <div className="w-full md:mb-40 mb-12 md:mt-24 mt-4">
                    <Link
                      href="/"
                      className="mr-4 mix-blend-normal"
                    >
                      <Image
                        src="/logo-white.svg"
                        alt="Plasmism Logo Dark"
                        width={1200}
                        height={240}
                        className="w-full h-auto logo-white"
                      />
                      <Image
                        src="/logo-dark.svg"
                        alt="Plasmism Logo Light"
                        width={1200}
                        height={240}
                        className="w-full h-auto logo-dark"
                      />
                    </Link>
                </div>
                <div className="w-full flex justify-between items-center md:pb-0 pb-16">
                <Link href="/privacy" className="hover:text-[var(--foreground)]/70 transition-colors md:text-sm text-xs font-light">
                プライバシーポリシー
                </Link>
                    <div className="md:text-sm text-xs text-[var(--foreground)]/60">
                        ©2025 Plasmism Inc.
                    </div>
                </div>
            </div>
        </div>
      </div>
    </footer>
  )
} 