"use client";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

interface GlitchTextProps {
  text: string;
  className?: string;
  color?: string;
  fontSize?: number | string;
  style?: React.CSSProperties;
}

// 글리치 효과에 사용할 색상 배열
const glitchColors = [
  "rgba(255,0,0,0.7)", // 빨간색
  "rgba(0,0,255,0.7)", // 파란색
  "rgba(0,255,255,0.7)", // 시안
];

// 랜덤한 clip-path(inset) 값을 생성하는 함수
function getRandomClip() {
  const top = Math.floor(Math.random() * 80);
  const bottom = top + 20 + Math.floor(Math.random() * 20);
  return `inset(${top}px 0 ${100 - bottom}px 0)`;
}

const GlitchText: React.FC<GlitchTextProps> = ({ text, className = "", color = "#fff", fontSize = 48, style = {} }) => {
  const controls1 = useAnimation();
  const controls2 = useAnimation();

  // 글리치 애니메이션 반복 실행
  useEffect(() => {
    let running = true;
    const animate = async () => {
      while (running) {
        await controls1.start({
          clipPath: getRandomClip(),
          x: [2.5, -2.5, 0],
          color: glitchColors[0],
          transition: { duration: 0.12, ease: "linear" },
        });
        await controls2.start({
          clipPath: getRandomClip(),
          x: [-2.5, 2.5, 0],
          color: glitchColors[1],
          transition: { duration: 0.15, ease: "linear" },
        });
      }
    };
    animate();
    return () => {
      running = false;
    };
  }, [controls1, controls2]);

  return (
    <span
      className={className}
      style={{
        position: "relative",
        display: "inline-block",
        color,
        fontSize,
        fontWeight: 700,
        ...style,
      }}
      aria-label={text}
    >
      {/* 메인 텍스트 (가독성 유지) */}
      <span style={{ position: "relative", zIndex: 2 }}>{text}</span>
      {/* 글리치 레이어 1 (빨간색) */}
      <motion.span
        aria-hidden
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: "100%",
          height: "100%",
          color: glitchColors[0],
          pointerEvents: "none",
          zIndex: 1,
          overflow: "hidden",
          whiteSpace: "pre",
        }}
        animate={controls1}
      >
        {text}
      </motion.span>
      {/* 글리치 레이어 2 (파란색) */}
      <motion.span
        aria-hidden
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: "100%",
          height: "100%",
          color: glitchColors[1],
          pointerEvents: "none",
          zIndex: 1,
          overflow: "hidden",
          whiteSpace: "pre",
        }}
        animate={controls2}
      >
        {text}
      </motion.span>
    </span>
  );
};

export default GlitchText;
