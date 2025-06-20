export const zoomScrollBgCode = `"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

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
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <div ref={ref} className="relative h-screen w-screen overflow-hidden">
      {/* 배경 이미지 */}
      <motion.img
        src="/1.avif"
        alt="Zoom Background"
        className="absolute inset-0 z-0 h-full w-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{
          scale,
        }}
      />
      {/* 자식 콘텐츠가 있다면 여기에 추가 */}
      <div className="relative z-10 h-full w-full">
        {/* 예시 텍스트 */}
        <div className="mt-20 text-center text-4xl font-bold text-white shadow-lg">
          스크롤을 내려보세요!<br />배경이 부드럽게 확대됩니다.
        </div>
      </div>
    </div>
  );
}
`;
