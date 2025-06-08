"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TypingTextProps {
  text: string;
  speed?: number; // 타이핑 속도 (밀리초)
  delay?: number; // 시작 지연 시간 (밀리초)
  className?: string;
  onComplete?: () => void; // 타이핑 완료 시 콜백
  showCursor?: boolean; // 커서 표시 여부
  cursorChar?: string; // 커서 문자
  loop?: boolean; // 반복 여부
  pauseTime?: number; // 반복 시 일시정지 시간
}

const TypingText = ({
  text,
  speed = 100,
  delay = 0,
  className = "",
  onComplete,
  showCursor = true,
  cursorChar = "|",
  loop = false,
  pauseTime = 1000,
}: TypingTextProps) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const startTyping = () => {
      setIsTyping(true);
      setCurrentIndex(0);
      setDisplayText("");
    };

    if (delay > 0) {
      const delayTimer = setTimeout(startTyping, delay);
      return () => clearTimeout(delayTimer);
    } else {
      startTyping();
    }
  }, [delay, text]);

  useEffect(() => {
    if (!isTyping || currentIndex >= text.length) {
      if (currentIndex >= text.length) {
        setIsTyping(false);
        onComplete?.();

        if (loop) {
          const loopTimer = setTimeout(() => {
            setCurrentIndex(0);
            setDisplayText("");
            setIsTyping(true);
          }, pauseTime);
          return () => clearTimeout(loopTimer);
        }
      }
      return;
    }

    const typingTimer = setTimeout(() => {
      setDisplayText(text.slice(0, currentIndex + 1));
      setCurrentIndex((prev) => prev + 1);
    }, speed);

    return () => clearTimeout(typingTimer);
  }, [currentIndex, isTyping, text, speed, onComplete, loop, pauseTime]);

  return (
    <motion.div
      className={`inline-block ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <span className="font-mono">
        {displayText}
        <AnimatePresence>
          {showCursor && (
            <motion.span
              className="inline-block"
              initial={{ opacity: 1 }}
              animate={{
                opacity: [1, 0, 1],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {cursorChar}
            </motion.span>
          )}
        </AnimatePresence>
      </span>
    </motion.div>
  );
};

export default TypingText;
