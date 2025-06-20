"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCursor } from "./CursorContext";

export default function GlobalCursor() {
  const { cursorText, cursorColor, cursorSize } = useCursor();
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    const handleEnter = () => setVisible(true);
    const handleLeave = () => setVisible(false);
    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseenter", handleEnter);
    window.addEventListener("mouseleave", handleLeave);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseenter", handleEnter);
      window.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="global-cursor"
          initial={{ opacity: 0, scale: 0.7, x: pos.x - (cursorSize || 48) / 2, y: pos.y - (cursorSize || 48) / 2 }}
          animate={{
            opacity: 1,
            scale: 1,
            x: pos.x - (cursorSize || 48) / 2,
            y: pos.y - (cursorSize || 48) / 2,
            transition: { type: "spring", stiffness: 300, damping: 30 },
          }}
          exit={{ opacity: 0, scale: 0.7 }}
          className="pointer-events-none fixed left-0 top-0 z-[9999] flex select-none items-center justify-center rounded-full font-bold text-white mix-blend-multiply shadow-[0_4px_24px_rgba(255,105,180,0.18)]"
          style={{
            width: cursorSize || 48,
            height: cursorSize || 48,
            background: cursorColor || "#ff69b4",
            fontSize: (cursorSize || 48) * 0.22,
          }}
          aria-hidden
        >
          {cursorText}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
