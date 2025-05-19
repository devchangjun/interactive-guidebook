"use client";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
/**
 * AnimatedTextListWithCursor
 * - 텍스트 리스트(01 Tokyo, 02 Amsterdam, 03 London)를 두 줄로 렌더링
 * - hover 시 아래 텍스트가 위로 올라오는 애니메이션
 * - hover 시 커서에 이미지가 따라다니며 skew 효과 적용 (framer-motion)
 */
const cityList = [
  { code: "01", name: "Tokyo", img: "/1.avif" },
  { code: "02", name: "Amsterdam", img: "/1.avif" },
  { code: "03", name: "London", img: "/1.avif" },
];

function useMousePosition() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handle = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handle);
    return () => window.removeEventListener("mousemove", handle);
  }, []);
  return pos;
}

function AnimatedTextListWithCursor() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [skew, setSkew] = useState(0);
  const lastX = useRef(0);
  const { x, y } = useMousePosition();

  // skew 효과: 마우스 이동 속도에 따라 skew 조정
  useEffect(() => {
    const diff = x - lastX.current;
    setSkew(Math.max(-20, Math.min(20, diff * 0.6)));
    lastX.current = x;
    // skew 점진적 복원
    const id = setTimeout(() => setSkew(0), 120);
    return () => clearTimeout(id);
  }, [x]);

  return (
    <div style={{ position: "relative" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 20,
          alignItems: "center",
          userSelect: "none",
        }}
      >
        {cityList.map((city, idx) => (
          <div
            key={city.code}
            style={{ position: "relative", width: 320, height: 48, margin: 8 }}
            onMouseEnter={() => setHoveredIdx(idx)}
            onMouseLeave={() => setHoveredIdx(null)}
          >
            {/* 기본 텍스트 */}
            <motion.div
              initial={false}
              animate={{
                y: hoveredIdx === idx ? -32 : 0,
                opacity: hoveredIdx === idx ? 0 : 1,
              }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: "100%",
                fontSize: 40,
                fontWeight: 900,
                color: "#fff",
                lineHeight: "48px",
                pointerEvents: "none",
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <span style={{ color: "#888", fontWeight: 700 }}>{city.code}</span>
              <span style={{ color: "#fff", fontWeight: 900 }}>{city.name.toUpperCase()}</span>
            </motion.div>
            {/* 올라오는 텍스트 */}
            <motion.div
              initial={false}
              animate={{
                y: hoveredIdx === idx ? 0 : 32,
                opacity: hoveredIdx === idx ? 1 : 0,
              }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: "100%",
                fontSize: 40,
                fontWeight: 900,
                color: "#fff",
                lineHeight: "48px",
                pointerEvents: "none",
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <span style={{ color: "#888", fontWeight: 700 }}>{city.code}</span>
              <span style={{ color: "#fff", fontWeight: 900 }}>{city.name.toUpperCase()}</span>
            </motion.div>
          </div>
        ))}
      </div>
      {/* 커스텀 커서 이미지 */}
      <AnimatePresence>
        {hoveredIdx !== null && (
          <motion.img
            key={hoveredIdx}
            src={cityList[hoveredIdx].img}
            alt={cityList[hoveredIdx].name}
            initial={{ opacity: 0, scale: 0.7, x: x - 60, y: y + 20, skewX: skew }}
            animate={{
              opacity: 1,
              scale: 1,
              x: x - 60,
              y: y + 20,
              skewX: skew,
            }}
            exit={{ opacity: 0, scale: 0.7 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: 120,
              height: 120,
              borderRadius: 24,
              pointerEvents: "none",
              zIndex: 2000,
              boxShadow: "0 4px 32px rgba(0,0,0,0.18)",
              objectFit: "cover",
              background: "#fff",
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

// 파일 하단에 예제 컴포넌트 export (테스트용)
export { AnimatedTextListWithCursor };
