"use client";
import React, { useEffect, useRef, useState } from "react";

interface MorphingTextProps {
  texts: string[];
  morphTime?: number; // morph 애니메이션 시간 (초)
  cooldownTime?: number; // 쿨다운 시간 (초)
  fontSize?: string | number;
  color?: string;
  style?: React.CSSProperties;
}

const MorphingText: React.FC<MorphingTextProps> = ({
  texts,
  morphTime = 1,
  cooldownTime = 0.25,
  fontSize = "8vw",
  color = "#000",
  style = {},
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fraction, setFraction] = useState(0); // 0~1 사이 값
  const [isCooldown, setIsCooldown] = useState(false);
  const requestRef = useRef<number>(0);

  const nextIndex = (currentIndex + 1) % texts.length;
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    const animate = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const elapsed = (timestamp - startTimeRef.current) / 1000;

      if (!isCooldown) {
        const progress = Math.min(elapsed / morphTime, 1);
        setFraction(progress);
        if (progress >= 1) {
          setIsCooldown(true);
          startTimeRef.current = null;
        }
      } else {
        const progress = Math.min(elapsed / cooldownTime, 1);
        setFraction(1);
        if (progress >= 1) {
          setCurrentIndex(nextIndex);
          setIsCooldown(false);
          setFraction(0);
          startTimeRef.current = null;
        }
      }

      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current!);
  }, [currentIndex, isCooldown, morphTime, cooldownTime]);

  // blur 및 opacity 계산
  const blurA = Math.max(8 * (1 - fraction), 0.01);
  const opacityA = 1 - fraction;
  const blurB = Math.max(8 * fraction, 0.01);
  const opacityB = fraction;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        filter: "url(#threshold)",
        ...style,
      }}
    >
      <svg style={{ position: "absolute", width: 0, height: 0 }}>
        <filter id="threshold">
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
          <feColorMatrix
            in="blur"
            type="matrix"
            values="
              1 0 0 0 0
              0 1 0 0 0
              0 0 1 0 0
              0 0 0 255 -140"
          />
        </filter>
      </svg>

      <div style={{ position: "relative", fontSize, color }}>
        <span
          style={{
            position: "absolute",
            filter: `blur(${blurA}px)`,
            opacity: opacityA,
            transition: "opacity 0.1s linear",
          }}
        >
          {texts[currentIndex]}
        </span>
        <span
          style={{
            filter: `blur(${blurB}px)`,
            opacity: opacityB,
            transition: "opacity 0.1s linear",
          }}
        >
          {texts[nextIndex]}
        </span>
      </div>
    </div>
  );
};

export default MorphingText;
