"use client";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useRef, useState } from "react";

interface ScrollTriggerTextProps {
  fromColor?: string;
  toColor?: string;
  duration?: number;
  text?: string;
  fontSize?: string;
  minHeight?: string;
  initialX?: number;
  finalX?: number;
  initialScale?: number;
  finalScale?: number;
}

export default function ScrollTriggerText({
  fromColor = "#888",
  toColor = "#FFD600",
  duration = 0.8,
  text = "Scroll Trigger Text Scroll Trigger Text Scroll Trigger Text Scroll Trigger Text Scroll Trigger Text Scroll Trigger Text",
  fontSize = "5vw",
  minHeight = "150vh",
  initialScale = 0.8,
}: ScrollTriggerTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const chars = Array.from(text);
  const [progress, setProgress] = useState(0);
  useMotionValueEvent(scrollYProgress, "change", (v) => setProgress(v));

  // 글자별 스타일 계산 함수
  function getCharStyle(i: number) {
    const spread = 0.5;
    const base = 0.2;
    const step = spread / Math.max(chars.length - 1, 1);
    const start = base + i * step;
    const end = start + 0.18;

    // opacity 계산
    let opacity = 0;
    if (progress >= start && progress <= end) {
      opacity = (progress - start) / (end - start);
    } else if (progress > end && progress < 1) {
      opacity = 1;
    }
    // scale 계산
    let scale = initialScale;
    if (progress >= start && progress <= end) {
      scale = initialScale + ((1 - initialScale) * (progress - start)) / (end - start);
    } else if (progress > end && progress < 1) {
      scale = 1;
    }
    // color 계산 (간단히 fromColor/toColor 중간값, 실제로는 보간 필요)
    const color = progress >= start && progress <= end ? toColor : fromColor;

    return {
      opacity,
      scale,
      color,
      transition: `color ${duration}s ease`,
      whiteSpace: chars[i] === " " ? "pre" : undefined,
      display: "inline-block",
    };
  }

  return (
    <div
      ref={containerRef}
      style={{
        minHeight,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <motion.h1
        style={{
          fontSize,
          display: "inline-block",
          transition: `color ${duration}s ease`,
        }}
      >
        {chars.map((char, i) => (
          <span key={i} style={getCharStyle(i)}>
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </motion.h1>
    </div>
  );
}
