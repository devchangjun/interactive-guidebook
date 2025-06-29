"use client";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CityItem {
  code: string;
  name: string;
  img: string;
}

interface AnimatedTextListWithCursorProps {
  cities?: CityItem[];
  fontSize?: string;
  fontWeight?: string;
  textColor?: string;
  codeColor?: string;
  gap?: string;
  imageSize?: string;
  borderRadius?: string;
}

/**
 * AnimatedTextListWithCursor
 * - 텍스트 리스트(01 Tokyo, 02 Amsterdam, 03 London)를 두 줄로 렌더링
 * - hover 시 아래 텍스트가 위로 올라오는 애니메이션
 * - hover 시 커서에 이미지가 따라다니며 skew 효과 적용 (framer-motion)
 */
const DEFAULT_LIST = [
  { code: "01", name: "Tokyo", img: "/3.avif" },
  { code: "02", name: "Lasvegas", img: "/2.avif" },
  { code: "03", name: "London", img: "/3.webp" },
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

export default function AnimatedTextListWithCursor({
  cities = DEFAULT_LIST,
  fontSize = "text-5xl md:text-[68px]",
  fontWeight = "font-black",
  textColor = "text-white",
  codeColor = "text-gray-800",
  gap = "gap-20",
  imageSize = "h-60 w-60",
  borderRadius = "rounded-3xl",
}: AnimatedTextListWithCursorProps) {
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
    <div className="relative">
      <div className={`flex flex-col items-center ${gap} user-select-none`}>
        {cities.map((city, idx) => (
          <div
            key={city.code}
            className="relative m-2 h-12 w-80"
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
              className={`pointer-events-none absolute left-0 top-0 flex w-full items-center gap-8 ${fontSize} ${fontWeight} leading-[48px] ${textColor}`}
            >
              <span className={`font-bold ${codeColor}`}>{city.code}</span>
              <span className={`${fontWeight} ${textColor}`}>{city.name.toUpperCase()}</span>
            </motion.div>
            {/* 올라오는 텍스트 */}
            <motion.div
              initial={false}
              animate={{
                y: hoveredIdx === idx ? 0 : 32,
                opacity: hoveredIdx === idx ? 1 : 0,
              }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              className={`pointer-events-none absolute left-0 top-0 flex w-full items-center gap-8 ${fontSize} ${fontWeight} leading-[48px] ${textColor}`}
            >
              <span className={`font-bold ${codeColor}`}>{city.code}</span>
              <span className={`${fontWeight} ${textColor}`}>{city.name.toUpperCase()}</span>
            </motion.div>
          </div>
        ))}
      </div>
      {/* 커스텀 커서 이미지 */}
      <AnimatePresence>
        {hoveredIdx !== null && (
          <motion.img
            key={hoveredIdx}
            src={cities[hoveredIdx].img}
            alt={cities[hoveredIdx].name}
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
            className={`pointer-events-none fixed left-0 top-0 z-[2000] ${imageSize} ${borderRadius} bg-white object-cover shadow-[0_4px_32px_rgba(0,0,0,0.18)]`}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
