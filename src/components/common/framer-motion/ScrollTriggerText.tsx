"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

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
  colorChangePoint?: [number, number];
}

export default function ScrollTriggerText({
  fromColor = "#888",
  toColor = "#FFD600",
  duration = 0.8,
  text = "Scroll Trigger Text",
  fontSize = "5vw",
  minHeight = "150vh",
  initialScale = 0.8,
  finalScale = 0.8,
  colorChangePoint = [0.3, 0.5],
}: ScrollTriggerTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [initialScale, 1, finalScale]);

  const color = useTransform(
    scrollYProgress,
    [0, colorChangePoint[0], colorChangePoint[1], 1],
    [fromColor, fromColor, toColor, fromColor]
  );

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
          opacity,
          scale,
          color,
          transition: `color ${duration}s ease`,
        }}
      >
        {text}
      </motion.h1>
    </div>
  );
}
