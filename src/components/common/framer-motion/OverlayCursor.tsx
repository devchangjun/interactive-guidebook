"use client";
import React, { useState, useRef, useEffect, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface OverlayCursorProviderProps {
  children: ReactNode;
  cursorText?: string;
  cursorSize?: number;
  cursorColor?: string;
  className?: string;
}

/**
 * OverlayCursorProvider
 * 특정 영역(children)에 마우스가 올라가면 핑크색 동그란 커서와 텍스트가 나타나는 컴포넌트입니다.
 * - cursorText: 커서 안에 들어갈 텍스트 (기본값: 'overlay')
 * - cursorSize: 커서 지름(px, 기본값: 80)
 * - cursorColor: 커서 배경색 (기본값: '#ff69b4')
 */
export default function OverlayCursorProvider({
  children,
  cursorText = "overlay",
  cursorSize = 80,
  cursorColor = "#ff69b4",
  className,
}: OverlayCursorProviderProps) {
  const [showCursor, setShowCursor] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const areaRef = useRef<HTMLDivElement>(null);

  // 마우스 위치 추적
  useEffect(() => {
    if (!showCursor) return;
    const handleMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [showCursor]);

  // 커서 진입/이탈 핸들러
  const handleEnter = () => setShowCursor(true);
  const handleLeave = () => setShowCursor(false);

  return (
    <div
      ref={areaRef}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className={className}
      style={{ position: "relative", width: "100%", height: "100%", cursor: showCursor ? "none" : "auto" }}
    >
      {children}
      {/* 커스텀 커서 */}
      <AnimatePresence>
        {showCursor && (
          <motion.div
            key="overlay-cursor"
            initial={{
              opacity: 0,
              scale: 0.7,
              x: pos.x - cursorSize / 2,
              y: pos.y - cursorSize / 2,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              x: pos.x - cursorSize / 2,
              y: pos.y - cursorSize / 2,
              transition: { type: "spring", stiffness: 300, damping: 30 },
            }}
            exit={{ opacity: 0, scale: 0.7 }}
            style={{
              position: "fixed",
              left: 0,
              top: 0,
              width: cursorSize,
              height: cursorSize,
              borderRadius: "50%",
              background: cursorColor,
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 700,
              fontSize: cursorSize * 0.22,
              pointerEvents: "none",
              zIndex: 9999,
              boxShadow: "0 4px 24px rgba(255,105,180,0.18)",
              userSelect: "none",
              mixBlendMode: "multiply",
            }}
            aria-hidden
          >
            {cursorText}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
