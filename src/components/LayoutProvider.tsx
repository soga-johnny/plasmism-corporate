"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import LoadingScreen from "./LoadingScreen";
import CustomCursor from "./CustomCursor";
import BackToTopButton from "./BackToTopButton";

export default function LayoutProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <>
      <CustomCursor />
      <LoadingScreen />
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.7,
              ease: "easeInOut"
            }
          }}
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