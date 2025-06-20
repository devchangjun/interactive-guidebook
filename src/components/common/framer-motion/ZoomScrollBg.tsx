"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

/**
 * ZoomScrollBg
 * 스크롤에 따라 배경 이미지가 부드럽게 zoom in/out 되는 컴포넌트입니다.
 * - 스크롤을 내리면 zoom in, 올리면 zoom out
 * - framer-motion의 useScroll, useTransform 사용
 * - 반응형 웹 지원
 * - 샘플 이미지는 /public/1.avif
 */
export default function ZoomScrollBg() {
  const ref = useRef<HTMLDivElement>(null);
  // 전체 페이지 스크롤 기준
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  // 스크롤 진행도에 따라 scale 값을 1~1.2로 변환
  const rawScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  // spring으로 부드럽게
  const scale = useSpring(rawScale, {
    stiffness: 80,
    damping: 20,
    mass: 1,
  });

  return (
    <div ref={ref} className="relative h-96 w-full overflow-hidden rounded-lg">
      {/* 배경 이미지 */}
      <motion.img
        src="/1.avif"
        alt="Zoom Background"
        className="absolute inset-0 z-0 h-full w-full object-cover"
        style={{
          scale,
        }}
      />
      <div className="relative z-10 flex h-full items-center justify-center">
        <h2 className="mix-blend-difference text-4xl font-bold text-white">Zoom Demo</h2>
      </div>
    </div>
  );
}
