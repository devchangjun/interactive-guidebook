"use client";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

/**
 * ParallaxImage 컴포넌트
 * - 스크롤에 따라 이미지가 위로 천천히 이동하는 패럴럭스 효과를 보여줍니다.
 * - 반응형 웹을 고려하여 이미지가 부모 영역에 맞게 조정됩니다.
 */
export default function ParallaxImage() {
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
    <div ref={ref} className="relative h-screen w-full max-w-full overflow-hidden">
      <motion.img
        src="/1.avif"
        alt="parallax"
        className="absolute top-0 block h-[120vh] w-full object-cover"
        style={{
          y,
        }}
      />
    </div>
  );
}
