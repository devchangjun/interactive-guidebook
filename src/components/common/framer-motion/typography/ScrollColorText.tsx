"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap 플러그인 등록 (중복 호출해도 안전)
gsap.registerPlugin(ScrollTrigger);

interface ScrollColorTextProps {
  children: React.ReactNode;
  fromColor?: string; // 기본 색상
  toColor?: string; // 변경될 색상
  duration?: number; // 애니메이션 지속시간 (초)
  triggerStart?: string; // ScrollTrigger start 옵션
  triggerEnd?: string; // ScrollTrigger end 옵션
  className?: string;
  style?: React.CSSProperties;
}

const ScrollColorText: React.FC<ScrollColorTextProps> = ({
  children,
  fromColor = "#fff",
  toColor = "#FFD600",
  duration = 0.6,
  triggerStart = "top 80%",
  triggerEnd = "bottom 20%",
  className,
  style,
}) => {
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;

    // 초기 색상 설정
    el.style.color = fromColor;

    const ctx = gsap.context(() => {
      gsap.to(el, {
        color: toColor,
        duration,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: triggerStart,
          end: triggerEnd,
          toggleActions: "play reverse play reverse",
        },
      });
    }, el);

    return () => {
      ctx.revert();
    };
  }, [fromColor, toColor, duration, triggerStart, triggerEnd]);

  return (
    <span
      ref={textRef}
      className={className}
      style={{
        color: fromColor,
        display: "inline-block",
        transition: `color ${duration}s cubic-bezier(0.4,0,0.2,1)`,
        ...style,
      }}
    >
      {children}
    </span>
  );
};

export default ScrollColorText;
