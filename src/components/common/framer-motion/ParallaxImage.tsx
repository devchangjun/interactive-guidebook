"use client";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

interface ParallaxImageProps {
  imageUrl?: string;
  parallaxRange?: number;
  stiffness?: number;
  damping?: number;
  mass?: number;
  restDelta?: number;
  containerHeight?: string;
  imageHeight?: string;
  objectFit?: string;
}

/**
 * ParallaxImage 컴포넌트
 * - 스크롤에 따라 이미지가 위로 천천히 이동하는 패럴럭스 효과를 보여줍니다.
 * - 반응형 웹을 고려하여 이미지가 부모 영역에 맞게 조정됩니다.
 */
export default function ParallaxImage({
  imageUrl = "/1.avif",
  parallaxRange = 300,
  stiffness = 60,
  damping = 20,
  mass = 1,
  restDelta = 0.5,
  containerHeight = "h-screen",
  imageHeight = "h-[120vh]",
  objectFit = "object-cover",
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  // ref 영역의 스크롤 진행도를 가져옵니다.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"], // 시작점과 끝점을 명확하게 지정
  });

  // 1. 스크롤에 따라 y값을 만듭니다.
  // y값을 0에서 -parallaxRange로 설정하여 이미지가 박스 안에서만 위로 자연스럽게 이동하게 만듭니다.
  const rawY = useTransform(scrollYProgress, [0, 1], [0, -parallaxRange]);

  // 2. useSpring으로 감싸서, 변화가 있을 때 자연스럽게 트랜지션이 일어나도록 합니다.
  const y = useSpring(rawY, {
    stiffness, // 낮을수록 더 천천히 멈춤
    damping, // 낮을수록 더 오래 흔들림
    mass,
    restDelta, // 멈추는 민감도
  });

  return (
    <div ref={ref} className={`relative ${containerHeight} w-full max-w-full overflow-hidden`}>
      <motion.img
        src={imageUrl}
        alt="parallax"
        className={`absolute top-0 block ${imageHeight} w-full ${objectFit}`}
        style={{
          y,
        }}
      />
    </div>
  );
}
