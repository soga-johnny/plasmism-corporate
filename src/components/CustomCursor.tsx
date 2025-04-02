"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 bg-blue-500 rounded-full pointer-events-none z-[9999] mix-blend-difference"
      style={{
        translateX: mousePosition.x - 16,
        translateY: mousePosition.y - 16,
      }}
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
    />
  );
} 