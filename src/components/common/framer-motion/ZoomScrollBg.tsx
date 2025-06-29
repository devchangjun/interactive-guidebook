"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

interface ZoomScrollBgProps {
  imageSrc?: string;
  imageAlt?: string;
  title?: string;
  minScale?: number;
  maxScale?: number;
  stiffness?: number;
  damping?: number;
  mass?: number;
  className?: string;
  titleClassName?: string;
}

/**
 * ZoomScrollBg
 * 스크롤에 따라 배경 이미지가 부드럽게 zoom in/out 되는 컴포넌트입니다.
 * - 스크롤을 내리면 zoom in, 올리면 zoom out
 * - framer-motion의 useScroll, useTransform 사용
 * - 반응형 웹 지원
 * - 커스터마이징 가능한 props 지원
 */
export default function ZoomScrollBg({
  imageSrc = "/1.avif",
  imageAlt = "Zoom Background",
  title = "Zoom Demo",
  minScale = 1,
  maxScale = 1.2,
  stiffness = 80,
  damping = 20,
  mass = 1,
  className = "relative h-96 w-full overflow-hidden rounded-lg",
  titleClassName = "mix-blend-difference text-4xl md:text-6xl font-bold text-white",
}: ZoomScrollBgProps) {
  const ref = useRef<HTMLDivElement>(null);
  // 전체 페이지 스크롤 기준
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  // 스크롤 진행도에 따라 scale 값을 변환
  const rawScale = useTransform(scrollYProgress, [0, 1], [minScale, maxScale]);
  // spring으로 부드럽게
  const scale = useSpring(rawScale, {
    stiffness,
    damping,
    mass,
  });

  return (
    <div ref={ref} className={className}>
      {/* 배경 이미지 */}
      <motion.img
        src={imageSrc}
        alt={imageAlt}
        className="absolute inset-0 z-0 h-full w-full object-cover"
        style={{
          scale,
        }}
      />
      <div className="relative z-10 flex h-full items-center justify-center">
        <h2 className={titleClassName}>{title}</h2>
      </div>
    </div>
  );
}
