"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

/**
 * TypographyAnimation
 * - 단일 텍스트를 받아 한 글자씩 타이핑 애니메이션 + 페이드인 효과
 * - 반응형, framer-motion 기반
 * - 예시: "Hello, World!"
 */
interface TypographyAnimationProps {
  text: string;
  typingSpeed?: number; // ms per char
  className?: string;
  color?: string; // 텍스트 색상
  cursorColor?: string; // 커서 색상
}

export function TypographyAnimation({
  text,
  typingSpeed = 60,
  className = "",
  color = "#000",
  cursorColor = "#0066ff",
}: TypographyAnimationProps) {
  const [displayed, setDisplayed] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (isTyping) {
      if (displayed.length < text.length) {
        timeout = setTimeout(() => {
          setDisplayed(text.slice(0, displayed.length + 1));
        }, typingSpeed);
      } else {
        setIsTyping(false);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, isTyping, text, typingSpeed]);

  return (
    <div className={className} style={{ fontSize: 28, fontWeight: 700, minHeight: 40, letterSpacing: 1, color }}>
      {displayed.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.04, type: "spring", stiffness: 400, damping: 30 }}
          style={{ display: "inline-block" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
      <motion.span
        key={displayed.length}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ repeat: Infinity, duration: 0.8, repeatType: "reverse" }}
        style={{ display: "inline-block", color: cursorColor }}
      >
        |
      </motion.span>
    </div>
  );
}
