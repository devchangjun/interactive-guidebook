"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useMotionValue, useSpring } from "framer-motion";

/**
 * SVG로 네 귀퉁이만 있는 사각 테두리와 중앙 원을 그리는 커스텀 커서 컴포넌트입니다.
 * framer-motion을 활용해 커서가 자연스럽게 회전하는 애니메이션이 적용됩니다.
 * 마우스 위치 추적 및 마그네틱 효과는 추후 구현 예정입니다.
 */
const CURSOR_SIZE = 40;

function isMobile() {
  if (typeof navigator === "undefined") return false;
  return /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

export default function MagneticCursor() {
  const controls = useAnimation();
  const cursorRef = useRef<HTMLDivElement>(null);

  // 초기값 0으로 설정 (SSR 안전)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  // spring 효과로 부드럽게 이동
  const springX = useSpring(mouseX, { stiffness: 350, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 350, damping: 30 });

  // 커서 크기/회전 상태
  const [cursorBox, setCursorBox] = useState<{ width: number; height: number } | null>(null);
  const [cursorRotate, setCursorRotate] = useState(0);
  const [isMagnetic, setIsMagnetic] = useState(false);

  // 마운트 시 브라우저에서만 중앙으로 세팅
  useEffect(() => {
    if (typeof window !== "undefined") {
      mouseX.set(window.innerWidth / 2);
      mouseY.set(window.innerHeight / 2);
    }
  }, [mouseX, mouseY]);

  // 무한 회전 애니메이션 (기본 상태)
  useEffect(() => {
    if (!isMagnetic) {
      controls.start({
        rotate: 360,
        transition: {
          repeat: Infinity,
          ease: "linear",
          duration: 1.2,
        },
      });
    } else {
      controls.stop();
      controls.set({ rotate: cursorRotate });
    }
  }, [controls, isMagnetic, cursorRotate]);

  // 마우스 위치 추적 (기본 상태)
  useEffect(() => {
    if (isMobile()) return;
    if (isMagnetic) return; // 마그네틱 상태에서는 별도 처리
    const handleMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [mouseX, mouseY, isMagnetic]);

  // 기본 커서 숨김
  useEffect(() => {
    if (isMobile()) return;
    const prev = document.body.style.cursor;
    document.body.style.cursor = "none";
    return () => {
      document.body.style.cursor = prev;
    };
  }, []);

  // 마그네틱 타겟 진입/이탈 이벤트 리스닝
  useEffect(() => {
    if (isMobile()) return;
    let lastRect: DOMRect | null = null;
    let lastBoxCenter = { x: 0, y: 0 };
    let lastBoxWidth = CURSOR_SIZE;
    let lastBoxHeight = CURSOR_SIZE;
    let lastRotate = 0;

    // 박스 내부 마우스 이동 핸들러
    const handleBoxMove = (e: MouseEvent) => {
      if (!lastRect) return;
      // 박스 내 마우스 좌표 (0~1)
      const relX = (e.clientX - lastRect.left) / lastRect.width;
      const relY = (e.clientY - lastRect.top) / lastRect.height;
      // 커서가 박스 중앙에서 살짝 벗어나도록(자석 효과)
      const offsetX = (relX - 0.5) * lastRect.width * 0.3;
      const offsetY = (relY - 0.5) * lastRect.height * 0.3;
      mouseX.set(lastBoxCenter.x + offsetX);
      mouseY.set(lastBoxCenter.y + offsetY);
    };

    // 타겟 진입 시
    const handleEnter = (e: CustomEvent) => {
      const rect: DOMRect = e.detail.rect;
      lastRect = rect;
      lastBoxCenter = {
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
      };
      lastBoxWidth = rect.width + 16; // 박스보다 16px 크게
      lastBoxHeight = rect.height + 16;
      lastRotate = 0;
      setIsMagnetic(true);
      setCursorBox({ width: lastBoxWidth, height: lastBoxHeight });
      setCursorRotate(lastRotate);
      // 커서를 박스 중앙으로 이동
      mouseX.set(lastBoxCenter.x);
      mouseY.set(lastBoxCenter.y);
      // 박스 내부 마우스 이동 추적
      window.addEventListener("mousemove", handleBoxMove);
    };
    // 타겟 이탈 시
    const handleLeave = () => {
      setIsMagnetic(false);
      setCursorBox(null);
      setCursorRotate(0);
      lastRect = null;
      // 커서가 원래 마우스 위치로 복귀하도록(마우스 위치 추적 재개)
      window.removeEventListener("mousemove", handleBoxMove);
    };
    window.addEventListener("magnetic-cursor:enter", handleEnter as EventListener);
    window.addEventListener("magnetic-cursor:leave", handleLeave);
    return () => {
      window.removeEventListener("magnetic-cursor:enter", handleEnter as EventListener);
      window.removeEventListener("magnetic-cursor:leave", handleLeave);
      window.removeEventListener("mousemove", handleBoxMove);
    };
  }, [mouseX, mouseY]);

  // 모바일에서는 렌더링하지 않음
  if (isMobile()) return null;

  return (
    <motion.div
      ref={cursorRef}
      animate={controls}
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        x: springX,
        y: springY,
        width: isMagnetic && cursorBox ? cursorBox.width : CURSOR_SIZE,
        height: isMagnetic && cursorBox ? cursorBox.height : CURSOR_SIZE,
        pointerEvents: "none",
        zIndex: 9999,
        translateX: "-50%",
        translateY: "-50%",
        mixBlendMode: "difference",
        transition: "width 0.18s, height 0.18s",
      }}
    >
      <svg
        width={isMagnetic && cursorBox ? cursorBox.width : CURSOR_SIZE}
        height={isMagnetic && cursorBox ? cursorBox.height : CURSOR_SIZE}
        viewBox={`0 0 ${isMagnetic && cursorBox ? cursorBox.width : CURSOR_SIZE} ${
          isMagnetic && cursorBox ? cursorBox.height : CURSOR_SIZE
        }`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: "block", transition: "all 0.18s" }}
      >
        {/* 네 귀퉁이만 있는 사각 테두리 */}
        <g stroke="#fff" strokeWidth={3}>
          {/* 왼쪽 위 */}
          <line x1={8} y1={8} x2={(isMagnetic && cursorBox ? cursorBox.width : CURSOR_SIZE) * 0.28} y2={8} />
          <line x1={8} y1={8} x2={8} y2={(isMagnetic && cursorBox ? cursorBox.height : CURSOR_SIZE) * 0.28} />
          {/* 오른쪽 위 */}
          <line
            x1={(isMagnetic && cursorBox ? cursorBox.width : CURSOR_SIZE) - 8}
            y1={8}
            x2={(isMagnetic && cursorBox ? cursorBox.width : CURSOR_SIZE) * 0.72}
            y2={8}
          />
          <line
            x1={(isMagnetic && cursorBox ? cursorBox.width : CURSOR_SIZE) - 8}
            y1={8}
            x2={(isMagnetic && cursorBox ? cursorBox.width : CURSOR_SIZE) - 8}
            y2={(isMagnetic && cursorBox ? cursorBox.height : CURSOR_SIZE) * 0.28}
          />
          {/* 왼쪽 아래 */}
          <line
            x1={8}
            y1={(isMagnetic && cursorBox ? cursorBox.height : CURSOR_SIZE) - 8}
            x2={8}
            y2={(isMagnetic && cursorBox ? cursorBox.height : CURSOR_SIZE) * 0.72}
          />
          <line
            x1={8}
            y1={(isMagnetic && cursorBox ? cursorBox.height : CURSOR_SIZE) - 8}
            x2={(isMagnetic && cursorBox ? cursorBox.width : CURSOR_SIZE) * 0.28}
            y2={(isMagnetic && cursorBox ? cursorBox.height : CURSOR_SIZE) - 8}
          />
          {/* 오른쪽 아래 */}
          <line
            x1={(isMagnetic && cursorBox ? cursorBox.width : CURSOR_SIZE) - 8}
            y1={(isMagnetic && cursorBox ? cursorBox.height : CURSOR_SIZE) - 8}
            x2={(isMagnetic && cursorBox ? cursorBox.width : CURSOR_SIZE) * 0.72}
            y2={(isMagnetic && cursorBox ? cursorBox.height : CURSOR_SIZE) - 8}
          />
          <line
            x1={(isMagnetic && cursorBox ? cursorBox.width : CURSOR_SIZE) - 8}
            y1={(isMagnetic && cursorBox ? cursorBox.height : CURSOR_SIZE) - 8}
            x2={(isMagnetic && cursorBox ? cursorBox.width : CURSOR_SIZE) - 8}
            y2={(isMagnetic && cursorBox ? cursorBox.height : CURSOR_SIZE) * 0.72}
          />
        </g>
        {/* 중앙 원 */}
        <circle
          cx={(isMagnetic && cursorBox ? cursorBox.width : CURSOR_SIZE) / 2}
          cy={(isMagnetic && cursorBox ? cursorBox.height : CURSOR_SIZE) / 2}
          r={CURSOR_SIZE / 8}
          fill="#fff"
        />
      </svg>
    </motion.div>
  );
}
