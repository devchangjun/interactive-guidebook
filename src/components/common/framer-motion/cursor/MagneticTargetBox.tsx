"use client";
import React, { useRef, useEffect } from "react";

/**
 * MagneticTargetBox: 마그네틱 커서와 상호작용하는 타겟 박스 컴포넌트
 * - 자신의 위치/크기를 ref로 측정
 * - 마우스가 박스 위에 들어오면 커스텀 커서에 신호를 전달할 수 있도록 커스텀 이벤트 디스패치
 * - 기본 스타일(점선 테두리, 중앙 정렬 텍스트, 반응형) 적용
 */
interface MagneticTargetBoxProps {
  children: React.ReactNode;
  className?: string;
}

export default function MagneticTargetBox({ children, className }: MagneticTargetBoxProps) {
  const boxRef = useRef<HTMLDivElement>(null);

  // 마우스가 박스 위에 들어오고 나갈 때 커스텀 이벤트 디스패치
  useEffect(() => {
    const box = boxRef.current;
    if (!box) return;
    const handleEnter = () => {
      const rect = box.getBoundingClientRect();
      window.dispatchEvent(
        new CustomEvent("magnetic-cursor:enter", {
          detail: {
            rect,
          },
        })
      );
    };
    const handleLeave = () => {
      window.dispatchEvent(new CustomEvent("magnetic-cursor:leave"));
    };
    box.addEventListener("mouseenter", handleEnter);
    box.addEventListener("mouseleave", handleLeave);
    return () => {
      box.removeEventListener("mouseenter", handleEnter);
      box.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <div
      ref={boxRef}
      className={className}
      style={{
        border: "1.5px dashed #fff",
        minWidth: 120,
        minHeight: 48,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: 600,
        fontSize: 28,
        color: "#fff",
        background: "transparent",
        position: "relative",
        cursor: "pointer",
        userSelect: "none",
        transition: "box-shadow 0.2s",
      }}
    >
      {children}
    </div>
  );
}
