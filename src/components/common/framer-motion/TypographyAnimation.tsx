"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

/**
 * TypographyAnimation
 * - 텍스트 배열을 받아 한 글자씩 타이핑 애니메이션 + 페이드인 효과
 * - 반응형, framer-motion 기반
 * - 예시: ["Hello, World!", "프론트엔드 개발자", "타이포그래피 애니메이션"]
 */
interface TypographyAnimationProps {
  texts: string[];
  typingSpeed?: number; // ms per char
  pause?: number; // ms pause between lines
  className?: string;
}

export function TypographyAnimation({
  texts,
  typingSpeed = 60,
  pause = 1200,
  className = "",
}: TypographyAnimationProps) {
  const [currentLine, setCurrentLine] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (isTyping) {
      if (displayed.length < texts[currentLine].length) {
        timeout = setTimeout(() => {
          setDisplayed(texts[currentLine].slice(0, displayed.length + 1));
        }, typingSpeed);
      } else {
        setIsTyping(false);
        timeout = setTimeout(() => {
          setIsTyping(true);
          setDisplayed("");
          setCurrentLine((prev) => (prev + 1) % texts.length);
        }, pause);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, isTyping, texts, currentLine, typingSpeed, pause]);

  return (
    <div className={className} style={{ fontSize: 28, fontWeight: 700, minHeight: 40, letterSpacing: 1 }}>
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
        style={{ display: "inline-block", color: "#007aff" }}
      >
        |
      </motion.span>
    </div>
  );
}
