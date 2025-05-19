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
}

export default function ScrollMarqueeText({
  texts,
  baseSpeed = 50,
  fontSize = "5vw",
  color = "#000",
  backgroundColor = "transparent",
  className,
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

  // 무한 스크롤 애니메이션
  useEffect(() => {
    let animationFrame: number;

    const animate = () => {
      if (!containerRef.current) return;

      countRef.current += scrollSpeed * 0.1;

      // 절반 지점에서 리셋
      if (countRef.current >= containerRef.current.scrollWidth / 2) {
        countRef.current = 0;
      }

      controls.set({ x: -countRef.current });
      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [scrollSpeed, controls]);

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
