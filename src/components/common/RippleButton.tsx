"use client";

import React, { useState, MouseEvent } from "react";

interface RippleButtonProps {
  children: React.ReactNode;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  rippleColor?: string;
  as?: "button" | "div";
}

interface RippleData {
  x: number;
  y: number;
  size: number;
  id: number;
}

export default function RippleButton({
  children,
  onClick,
  className = "",
  disabled = false,
  type = "button",
  rippleColor = "rgba(255, 255, 255, 0.3)",
  as = "button",
}: RippleButtonProps) {
  const [ripples, setRipples] = useState<RippleData[]>([]);
  const [rippleElement, setRippleElement] = useState<HTMLElement | null>(null);

  const createRipple = (event: MouseEvent<HTMLButtonElement | HTMLDivElement>) => {
    if (!rippleElement) return;

    const rect = rippleElement.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 2; // 더 큰 ripple 크기
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    const newRipple: RippleData = {
      x,
      y,
      size,
      id: Date.now(),
    };

    setRipples((prev) => [...prev, newRipple]);

    // 애니메이션이 끝난 후 ripple 제거 (더 긴 지속시간)
    setTimeout(() => {
      setRipples((prev) => prev.filter((ripple) => ripple.id !== newRipple.id));
    }, 800);
  };

  const handleClick = (event: MouseEvent<HTMLButtonElement | HTMLDivElement>) => {
    if (disabled) return;

    createRipple(event);

    if (onClick) {
      onClick(event as MouseEvent<HTMLButtonElement>);
    }
  };

  const baseClasses = `
    relative overflow-hidden transition-all duration-200
    ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
    ${className}
  `;

  const Component = as;

  return (
    <Component
      ref={setRippleElement}
      onClick={handleClick}
      className={baseClasses}
      disabled={as === "button" ? disabled : undefined}
      type={as === "button" ? type : undefined}
    >
      {children}

      {/* Ripple 애니메이션 */}
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="absolute pointer-events-none animate-ripple"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: ripple.size,
            height: ripple.size,
            backgroundColor: rippleColor,
            borderRadius: "50%",
            transform: "scale(0)",
            animation: "ripple 0.6s linear",
          }}
        />
      ))}

      <style jsx>{`
        @keyframes ripple {
          0% {
            transform: scale(0);
            opacity: 0.8;
          }
          50% {
            opacity: 0.4;
          }
          100% {
            transform: scale(6);
            opacity: 0;
          }
        }
      `}</style>
    </Component>
  );
}
