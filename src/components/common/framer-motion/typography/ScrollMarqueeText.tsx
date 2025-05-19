"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useAnimationControls } from "framer-motion";
import { twMerge } from "tailwind-merge";

interface ScrollMarqueeTextProps {
  texts: string[];
  baseSpeed?: number;
  fontSize?: string;
  color?: string;
  backgroundColor?: string;
  className?: string;
  style?: React.CSSProperties;
  /**
   * direction: false(기본값) = 왼쪽, true = 오른쪽
   */
  direction?: boolean;
}

export default function ScrollMarqueeText({
  texts,
  baseSpeed = 50,
  fontSize = "5vw",
  color = "#000",
  backgroundColor = "transparent",
  className,
  style,
  direction = false, // 기본값: 왼쪽
}: ScrollMarqueeTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [duplicatedTexts, setDuplicatedTexts] = useState<string[]>([]);
  const controls = useAnimationControls();
  const [scrollSpeed, setScrollSpeed] = useState(baseSpeed);
  const countRef = useRef(0);

  // 텍스트 배열 2배로 복제
  useEffect(() => {
    setDuplicatedTexts([...texts, ...texts]);
  }, [texts]);

  // 스크롤 이벤트에 따른 속도 조절
  useEffect(() => {
    let lastScrollY = window.scrollY;
    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDiff = Math.abs(currentScrollY - lastScrollY);

      // 스크롤 속도에 따라 마키 속도 증가
      setScrollSpeed(baseSpeed + scrollDiff * 2);

      // 일정 시간 후 원래 속도로 복귀
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setScrollSpeed(baseSpeed);
      }, 150);

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [baseSpeed]);

  // 무한 스크롤 애니메이션 (방향에 따라 x값 증감)
  useEffect(() => {
    let animationFrame: number;

    const animate = () => {
      if (!containerRef.current) return;

      const halfWidth = containerRef.current.scrollWidth / 2;

      // 오른쪽 방향일 때는 -halfWidth에서 0까지 이동, 왼쪽은 0에서 -halfWidth까지 이동
      if (direction) {
        // 초기값 세팅 (최초 0이면 -halfWidth로)
        if (countRef.current === 0) {
          countRef.current = -halfWidth;
        }
        countRef.current += scrollSpeed * 0.1;
        if (countRef.current >= 0) {
          countRef.current = -halfWidth;
        }
      } else {
        countRef.current -= scrollSpeed * 0.1;
        if (countRef.current <= -halfWidth) {
          countRef.current = 0;
        }
      }

      controls.set({ x: countRef.current });
      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [scrollSpeed, controls, direction]);

  return (
    <div
      ref={containerRef}
      className={twMerge("w-full overflow-hidden whitespace-nowrap relative", className)}
      style={{ backgroundColor }}
    >
      <motion.div
        animate={controls}
        className="inline-block whitespace-nowrap py-4"
        style={{
          fontSize,
          color,
          ...style,
        }}
      >
        {duplicatedTexts.map((text, index) => (
          <span key={index} className="mr-8">
            {text}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
