"use client";
import { useRef, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * MagneticLetters
 * - 텍스트의 각 글자가 마우스 커서에 자석처럼 개별적으로 끌려오는 효과
 * - 마우스가 가까울수록 더 강하게, 멀수록 약하게 끌림
 * - framer-motion 기반, 반응형
 * - 예시: <MagneticLetters text="MAGNETIC TEXT" />
 */
interface MagneticLettersProps {
  text: string;
  strength?: number; // 기본 40
  className?: string;
  style?: React.CSSProperties;
}

function MagneticLetter({ char, strength }: { char: string; strength: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 400, damping: 30 });
  const springY = useSpring(y, { stiffness: 400, damping: 30 });

  useEffect(() => {
    const handle = (e: MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const threshold = rect.width * 6;
      if (dist < threshold) {
        const force = ((threshold - dist) / threshold) * strength;
        x.set((dx / threshold) * force);
        y.set((dy / threshold) * force);
      } else {
        x.set(0);
        y.set(0);
      }
    };
    window.addEventListener("mousemove", handle);
    return () => window.removeEventListener("mousemove", handle);
  }, [strength, x, y]);

  return (
    <motion.span
      ref={ref}
      style={{
        x: springX,
        y: springY,
      }}
      className="inline-block cursor-pointer select-none font-bold text-[#007aff] transition-colors duration-200"
    >
      {char === " " ? "\u00A0" : char}
    </motion.span>
  );
}

export function MagneticLetters({ text, strength = 40, className = "", style = {} }: MagneticLettersProps) {
  return (
    <span className={`${className} inline-flex gap-0.5`} style={style}>
      {text.split("").map((char, i) => (
        <MagneticLetter key={i} char={char} strength={strength} />
      ))}
    </span>
  );
}
