"use client";
import { AnimatedTextListWithCursor } from "@/components/common/framer-motion/AniatedTextListWidthCursor";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useState } from "react";
import { ResultBox } from "@/components/common/ResultBox";

const animatedTextListCode = `import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

  useEffect(() => {
    const diff = x - lastX.current;
    setSkew(Math.max(-20, Math.min(20, diff * 0.6)));
    lastX.current = x;
    const id = setTimeout(() => setSkew(0), 120);
    return () => clearTimeout(id);
  }, [x]);

  return (
    <div style={{ position: "relative", width: "100%", minHeight: 320, margin: "64px 0" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 16, alignItems: "center", userSelect: "none" }}>
        {cityList.map((city, idx) => (
          <div
            key={city.code}
            style={{ position: "relative", width: 320, height: 48, margin: 8 }}
            onMouseEnter={() => setHoveredIdx(idx)}
            onMouseLeave={() => setHoveredIdx(null)}
          >
            <motion.div
              initial={false}
              animate={{ y: hoveredIdx === idx ? -32 : 0, opacity: hoveredIdx === idx ? 0 : 1 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              style={{ position: "absolute", left: 0, top: 0, width: "100%", fontSize: 28, fontWeight: 700, color: "#222", lineHeight: "48px", pointerEvents: "none" }}
            >
              {city.code} {city.name}
            </motion.div>
            <motion.div
              initial={false}
              animate={{ y: hoveredIdx === idx ? 0 : 32, opacity: hoveredIdx === idx ? 1 : 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              style={{ position: "absolute", left: 0, top: 0, width: "100%", fontSize: 28, fontWeight: 700, color: "#007aff", lineHeight: "48px", pointerEvents: "none" }}
            >
              {city.code} {city.name}
            </motion.div>
          </div>
        ))}
      </div>
      <AnimatePresence>
        {hoveredIdx !== null && (
          <motion.img
            key={hoveredIdx}
            src={cityList[hoveredIdx].img}
            alt={cityList[hoveredIdx].name}
            initial={{ opacity: 0, scale: 0.7, x: x - 60, y: y + 20, skewX: skew }}
            animate={{ opacity: 1, scale: 1, x: x - 60, y: y + 20, skewX: skew }}
            exit={{ opacity: 0, scale: 0.7 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            style={{ position: "fixed", top: 0, left: 0, width: 120, height: 120, borderRadius: 24, pointerEvents: "none", zIndex: 2000, boxShadow: "0 4px 32px rgba(0,0,0,0.18)", objectFit: "cover", background: "#fff" }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
`;

export default function AnimatedTextListPage() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(animatedTextListCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div>
      <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 8 }}>Animated Text List With Cursor</h1>
      <ResultBox>
        <AnimatedTextListWithCursor />
      </ResultBox>
      <p style={{ fontSize: 16, marginBottom: 8 }}>
        <b>설명:</b> 텍스트 리스트에 마우스를 올리면 해당 텍스트가 컬러로 바뀌며 위로 올라오고, 동시에 커서에 이미지가
        따라다니는 인터랙션입니다.
        <br />
        <b>framer-motion</b>을 활용하여 자연스러운 애니메이션과 skew 효과를 구현했습니다.
        <br />
        <b>반응형</b>으로 동작하며, 커스텀 커서 이미지는 각 리스트별로 다르게 지정할 수 있습니다.
      </p>
      <ul style={{ fontSize: 15, color: "#555", marginBottom: 16 }}>
        <li>마우스 이동 속도에 따라 커서 이미지에 skew 효과가 적용됩니다.</li>
        <li>리스트 hover 시 텍스트가 컬러로 바뀌며 자연스럽게 애니메이션됩니다.</li>
        <li>코드는 복사해서 바로 사용할 수 있습니다.</li>
      </ul>
      <div style={{ position: "relative", marginBottom: 8 }}>
        <button
          onClick={handleCopy}
          style={{
            position: "absolute",
            right: 8,
            top: 8,
            zIndex: 2,
            background: copied ? "#4ade80" : "#222",
            color: "#fff",
            border: "none",
            borderRadius: 6,
            padding: "4px 12px",
            fontSize: 14,
            cursor: "pointer",
            transition: "background 0.2s",
          }}
        >
          {copied ? "복사됨!" : "코드 복사"}
        </button>
        <SyntaxHighlighter
          language="tsx"
          style={oneDark}
          customStyle={{ borderRadius: 8, fontSize: 14, paddingTop: 32 }}
        >
          {animatedTextListCode}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}
