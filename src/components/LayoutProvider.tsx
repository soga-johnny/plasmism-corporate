"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import LoadingScreen, { useLoadingStore } from "./LoadingScreen";
import CustomCursor from "./CustomCursor";
import BackToTopButton from "./BackToTopButton";

export default function LayoutProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const { isLoading } = useLoadingStore();
  const [canStartAnimation, setCanStartAnimation] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && !window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  useEffect(() => {
    if (!isLoading) {
      const timer = setTimeout(() => {
        setCanStartAnimation(true);
      }, 100);
      return () => clearTimeout(timer);
    } else {
      setCanStartAnimation(false);
    }
  }, [isLoading]);

  return (
    <>
      <CustomCursor />
      <LoadingScreen />
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={
            canStartAnimation
              ? {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.7,
                    ease: "easeInOut"
                  }
                }
              : { opacity: 0, y: 20 }
          }
          exit={{
            opacity: 0,
            y: -20,
            transition: {
              duration: 0.001,
              ease: "easeInOut"
            }
          }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
      <BackToTopButton />
    </>
  );
} 