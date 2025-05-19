"use client";
import React, { useRef, ReactNode } from "react";
import { useCursor } from "./CursorContext";

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
  const { setCursor, resetCursor } = useCursor();
  const areaRef = useRef<HTMLDivElement>(null);

  // 커서 진입/이탈 핸들러
  const handleEnter = () => {
    setCursor({ cursorText, cursorSize, cursorColor });
  };
  const handleLeave = () => {
    resetCursor();
  };

  return (
    <div
      ref={areaRef}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className={className}
      style={{ position: "relative", width: "100%", height: "100%" }}
    >
      {children}
    </div>
  );
}
