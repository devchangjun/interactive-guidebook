"use client";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
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

  // 1. 스크롤에 따라 y값을 만듭니다.
  // y값을 0에서 -300으로 설정하여 이미지가 박스 안에서만 위로 자연스럽게 이동하게 만듭니다.
  const rawY = useTransform(scrollYProgress, [0, 1], [0, -300]);

  // 2. useSpring으로 감싸서, 변화가 있을 때 자연스럽게 트랜지션이 일어나도록 합니다.
  const y = useSpring(rawY, {
    stiffness: 60, // 낮을수록 더 천천히 멈춤
    damping: 20, // 낮을수록 더 오래 흔들림
    mass: 1,
    restDelta: 0.5, // 멈추는 민감도
  });

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
