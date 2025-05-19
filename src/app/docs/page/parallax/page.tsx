"use client";
import ParallaxImageTest from "../../components/animations/ParallaxImageTest";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useState } from "react";

const parallaxImageTestCode = `import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

export default function ParallaxImageTest() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const rawY = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const y = useSpring(rawY, {
    stiffness: 60,
    damping: 20,
    mass: 1,
    restDelta: 0.5,
  });
  return (
    <div
      ref={ref}
      style={{
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        width: "100%",
        maxWidth: "100vw",
      }}
    >
      <motion.img
        src="/1.avif"
        alt="parallax"
        style={{
          y,
          width: "100%",
          height: "120vh",
          objectFit: "cover",
          display: "block",
          position: "absolute",
          top: 0,
        }}
      />
    </div>
  );
}`;

export default function ParallaxPage() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(parallaxImageTestCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div>
      <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 8 }}>Parallax Image</h1>
      <div style={{ border: "1px solid #eee", borderRadius: 12, overflow: "hidden", marginBottom: 16 }}>
        <ParallaxImageTest />
      </div>
      <p style={{ fontSize: 16, marginBottom: 8 }}>
        <b>설명:</b> 스크롤에 따라 이미지가 위로 천천히 이동하는 패럴럭스 효과를 보여주는 컴포넌트입니다.
        <br />
        <b>반응형</b>으로 동작하며, <b>framer-motion</b>의 useScroll, useTransform, useSpring을 활용합니다.
        <br />
        <b>이미지 경로</b>는 <code>/public/1.avif</code>를 사용합니다.
      </p>
      <ul style={{ fontSize: 15, color: "#555", marginBottom: 16 }}>
        <li>스크롤 진행도에 따라 y값이 자연스럽게 변화합니다.</li>
        <li>부모 영역에 맞게 이미지가 커버됩니다.</li>
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
          {parallaxImageTestCode}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}
