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
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  // 스크롤 진행도에 따라 scale 값을 1~1.2로 변환
  const rawScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  // spring으로 부드럽게
  const scale = useSpring(rawScale, {
    stiffness: 80,
    damping: 20,
    mass: 1,
  });

  return (
    <div ref={ref} style={{ position: "relative", width: "100vw", height: "100vh", overflow: "hidden" }}>
      {/* 배경 이미지 */}
      <motion.img
        src="/1.avif"
        alt="Zoom Background"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
          scale,
        }}
      />
    </div>
  );
}
