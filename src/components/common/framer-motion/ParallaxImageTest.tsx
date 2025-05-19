"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

/**
 * ParallaxImageTest 컴포넌트
 * - 스크롤에 따라 이미지가 위로 천천히 이동하는 패럴럭스 효과를 보여줍니다.
 * - 반응형 웹을 고려하여 이미지가 부모 영역에 맞게 조정됩니다.
 */
export default function ParallaxImageTest() {
  const ref = useRef<HTMLDivElement>(null);
  // ref 영역의 스크롤 진행도를 가져옵니다.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"], // 시작점과 끝점을 명확하게 지정
  });
  // 스크롤 진행도에 따라 y값을 0에서 -300px로 변환하여 더 큰 패럴럭스 효과를 줍니다.
  const y = useTransform(scrollYProgress, [0, 1], [0, 600]);

  return (
    <div
      ref={ref}
      style={{
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        width: "100%",
        maxWidth: "100vw",
      }}
    >
      <motion.img
        src="/1.avif"
        alt="parallax"
        style={{
          y,
          width: "100%",
          height: "120vh", // 이미지 높이를 더 크게 설정하여 스크롤 시 빈 공간이 보이지 않도록 함
          objectFit: "cover",
          display: "block",
          position: "absolute",
          top: 0,
        }}
      />
    </div>
  );
}
