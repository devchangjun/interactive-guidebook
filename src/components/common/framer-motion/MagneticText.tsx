"use client";
import { useRef, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * MagneticText
 * - 마우스가 텍스트 근처에 오면 텍스트가 자연스럽게 끌려가는 마그네틱 인터랙션
 * - framer-motion 기반, 반응형
 * - props: children(텍스트), strength(끌림 강도, 기본 40)
 */
interface MagneticTextProps {
  children: React.ReactNode;
  strength?: number;
  className?: string;
  style?: React.CSSProperties;
}

export function MagneticText({ children, strength = 40, className = "", style = {} }: MagneticTextProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 400, damping: 30 });
  const springY = useSpring(y, { stiffness: 400, damping: 30 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const mx = e.clientX;
      const my = e.clientY;
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = mx - cx;
      const dy = my - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const threshold = rect.width * 1.2;
      if (dist < threshold) {
        // 마우스가 가까우면 끌림
        x.set((dx / threshold) * strength);
        y.set((dy / threshold) * strength);
      } else {
        // 멀어지면 원위치
        x.set(0);
        y.set(0);
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [strength, x, y]);

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        display: "inline-block",
        willChange: "transform",
        x: springX,
        y: springY,
        ...style,
      }}
    >
      {children}
    </motion.div>
  );
}
