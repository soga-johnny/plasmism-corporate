"use client";

import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

interface CustomCursorProps {
  className?: string;
}

const CustomCursor: React.FC<CustomCursorProps> = ({ className }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [targetPosition, setTargetPosition] = useState({ x: 0, y: 0 });
  const [hoveredElement, setHoveredElement] = useState<string>('');
  const [isVisible, setIsVisible] = useState(false);
  const [isClickable, setIsClickable] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionState, setTransitionState] = useState<'compiling' | 'ready'>('ready');
  const [isMobile, setIsMobile] = useState(false);
  const [tapPosition, setTapPosition] = useState({ x: 0, y: 0 });
  const [shouldShowTransition, setShouldShowTransition] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const prevPathRef = useRef<string>('');
  const pathname = usePathname();

  // モバイル判定
  useEffect(() => {
    const checkMobile = () => {
      const isMobileDevice = window.matchMedia('(max-width: 1080px), (pointer: coarse)').matches;
      setIsMobile(isMobileDevice);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // クリック可能な要素のタップ位置検出（モバイル用）
  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches && e.touches[0]) {
        const touchX = e.touches[0].clientX;
        const touchY = e.touches[0].clientY;

        // タップした要素がクリック可能かチェック
        const element = document.elementFromPoint(touchX, touchY);

        if (element) {
          const computedStyle = window.getComputedStyle(element);
          const isElementClickable =
            element.tagName === 'A' ||
            element.tagName === 'BUTTON' ||
            (element as HTMLElement).hasAttribute('onclick') ||
            element.getAttribute('role') === 'button' ||
            computedStyle.cursor === 'pointer';

          // クリック可能な要素の場合のみトランジションを表示
          if (isElementClickable) {
            setTapPosition({ x: touchX, y: touchY });
            setShouldShowTransition(true);
          } else {
            setShouldShowTransition(false);
          }
        }
      }
    };

    if (isMobile) {
      document.addEventListener('touchstart', handleTouchStart);
    }

    return () => {
      if (isMobile) {
        document.removeEventListener('touchstart', handleTouchStart);
      }
    };
  }, [isMobile]);

  // 遷移検知
  useEffect(() => {
    if (prevPathRef.current !== pathname) {
      // ページが実際に変わった場合のみ遷移状態を開始
      prevPathRef.current = pathname;

      // モバイルでは、クリック可能な要素をタップした場合のみ表示
      if (isMobile && !shouldShowTransition) {
        return;
      }

      setIsTransitioning(true);
      setTransitionState('compiling');

      // モバイルの場合はタップ位置を初期位置として使用
      if (isMobile) {
        setPosition(tapPosition);
        setTargetPosition(tapPosition);
      }

      // コンパイル中のアニメーション
      const compilingTimeout = setTimeout(() => {
        setTransitionState('ready');

        // Ready状態を表示した後、通常の状態に戻る
        const readyTimeout = setTimeout(() => {
          setIsTransitioning(false);
          setShouldShowTransition(false);
        }, 1200);

        return () => clearTimeout(readyTimeout);
      }, 800);

      return () => clearTimeout(compilingTimeout);
    }
  }, [pathname, isMobile, tapPosition, shouldShowTransition]);

  // 滑らかな移動のためのアニメーション（デスクトップのみ）
  useEffect(() => {
    if (isMobile && !isTransitioning) return;

    const animateMovement = () => {
      setPosition(prev => ({
        x: prev.x + (targetPosition.x - prev.x) * 0.15,
        y: prev.y + (targetPosition.y - prev.y) * 0.15
      }));

      rafRef.current = requestAnimationFrame(animateMovement);
    };

    rafRef.current = requestAnimationFrame(animateMovement);

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [targetPosition, isMobile, isTransitioning]);

  useEffect(() => {
    // モバイルで通常時は何もしない
    if (isMobile && !isTransitioning) return;

    const updatePosition = (e: MouseEvent) => {
      setTargetPosition({ x: e.clientX, y: e.clientY });

      // 画面遷移中はホバー要素を更新しない
      if (isTransitioning) return;

      // マウスの下にある要素の情報を取得
      const element = document.elementFromPoint(e.clientX, e.clientY);
      if (element) {
        // クリック可能かどうかをチェック
        const computedStyle = window.getComputedStyle(element);
        const isElementClickable =
          element.tagName === 'A' ||
          element.tagName === 'BUTTON' ||
          (element as HTMLElement).hasAttribute('onclick') ||
          element.getAttribute('role') === 'button' ||
          computedStyle.cursor === 'pointer';

        setIsClickable(isElementClickable);

        const id = element.id ? `#${element.id}` : '';
        const classList = Array.from(element.classList).map(c => `.${c}`).join('');

        // 表示テキストを生成（タグ名を省略）
        let elementInfo = '';

        // IDかクラスがある場合はそれを表示
        if (id || classList) {
          elementInfo = `${id}${classList}`;
        } else {
          // なければタグ名を表示
          elementInfo = element.tagName.toLowerCase();
        }

        // 長すぎる場合は省略
        if (elementInfo.length > 20) {
          elementInfo = elementInfo.substring(0, 20) + '...';
        }

        setHoveredElement(elementInfo);
      }
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    if (!isMobile) {
      document.addEventListener('mousemove', updatePosition);
      document.addEventListener('mouseenter', handleMouseEnter);
      document.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (!isMobile) {
        document.removeEventListener('mousemove', updatePosition);
        document.removeEventListener('mouseenter', handleMouseEnter);
        document.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [isTransitioning, isMobile]);

  // モバイルで通常時は何も表示しない、または遷移中だけ表示
  if (isMobile && (!isTransitioning || !shouldShowTransition)) return null;

  return (
    <div
      ref={cursorRef}
      className={`fixed pointer-events-none z-50 select-none ${className}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: isMobile ? 'translate(-50%, -50%)' : 'translate(-110%, 12px)',
        opacity: (isMobile && isTransitioning && shouldShowTransition) || (!isMobile && isVisible) ? 1 : 0,
        transition: 'opacity 0.4s ease',
      }}
    >
      {isTransitioning ? (
        // 遷移中の表示
        <div
          className={`text-xs bg-[var(--background)] px-2 py-1 rounded-lg whitespace-nowrap custom-cursor-info cursor-transition-state backdrop-blur-sm border border-[var(--foreground)]/10 ${isMobile ? 'mobile-transition-state' : ''}`}
          style={{
            color: transitionState === 'ready' ? 'var(--cursor-ready-color)' : 'var(--cursor-compiling-color)',
          }}
        >
          <span className="transition-opacity duration-300">
            {transitionState === 'compiling' ? 'Compiling...' : 'Ready'}
          </span>
        </div>
      ) : (
        // 通常の表示（モバイルでは表示されない）
        <div
          className={`text-xs bg-[var(--background)] px-2 py-1 rounded-lg whitespace-nowrap custom-cursor-info backdrop-blur-sm`}
          style={{
            color: isClickable ? 'var(--cursor-clickable-color)' : 'var(--foreground)',
            borderColor: isClickable ? 'var(--cursor-clickable-color)' : 'var(--cursor-border-color)',
            borderWidth: '1px',
            borderStyle: 'solid',
            transition: 'color 0.3s ease, border-color 0.3s ease, background-color 0.3s ease, transform 0.3s ease',
          }}
        >
          <span className="opacity-70">return (</span><br/>
          <span className="transition-opacity duration-300">{hoveredElement}</span>
          <span className="opacity-70">)</span>
        </div>
      )}
    </div>
  );
};

export default CustomCursor; 