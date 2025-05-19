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
          transition: "scale 0.5s cubic-bezier(0.22, 1, 0.36, 1)", // 부드러운 트랜지션
        }}
      />
      {/* 자식 콘텐츠가 있다면 여기에 추가 */}
      <div style={{ position: "relative", zIndex: 1, width: "100%", height: "100%" }}>
        {/* 예시 텍스트 */}
        <div style={{ color: "white", fontSize: 36, fontWeight: 700, textAlign: "center", marginTop: 80, textShadow: "0 2px 8px rgba(0,0,0,0.4)" }}>
          스크롤을 내려보세요!<br />배경이 부드럽게 확대됩니다.
        </div>
      </div>
    </div>
  );
}
`;
