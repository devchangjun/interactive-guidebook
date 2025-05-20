"use client";
import { useState } from "react";
import Image from "next/image";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import TiltCard from "@/components/common/framer-motion/card/TiltCard";

const tiltCardCode = `import TiltCard from "@/components/common/framer-motion/TiltCard";

<TiltCard style={{ width: 320 }}>
  <div style={{ padding: 24 }}>
    <h2>틸트 카드 예시</h2>
    <p>마우스를 움직여보세요!</p>
  </div>
</TiltCard>`;

export default function TiltCardPage() {
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    await navigator.clipboard.writeText(tiltCardCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };
  return (
    <div>
      <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 8 }}>틸트 카드 효과</h1>
      <div
        style={{
          border: "1px solid #eee",
          borderRadius: 12,
          overflow: "hidden",
          marginBottom: 16,
          padding: 24,
          maxWidth: 400,
        }}
      >
        <TiltCard>
          <div
            style={{
              width: "100%",
              height: "100%",
              borderRadius: 16,
              overflow: "hidden",
              background: "#111",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Image
              src="/1.avif"
              alt="tech image"
              width={400}
              height={200}
              style={{ width: "100%", height: "60%", objectFit: "cover" }}
              priority
              unoptimized
            />
            <div style={{ padding: 16 }}>
              <h3 style={{ color: "#fff", fontSize: 18, marginBottom: 4 }}>타이틀</h3>
              <p style={{ color: "#aaa", fontSize: 14 }}>설명 텍스트 설명 텍스트</p>
            </div>
          </div>
        </TiltCard>
      </div>
      <p style={{ fontSize: 16, marginBottom: 8 }}>
        <b>설명:</b> 마우스 움직임에 따라 카드가 3D로 기울어지는 인터랙션입니다.
        <br />
        <b>framer-motion</b>을 활용해 부드럽고 직관적인 효과를 구현했습니다.
        <br />
        <b>반응형</b>으로 동작하며, 다양한 카드 UI에 쉽게 적용할 수 있습니다.
      </p>
      <ul style={{ fontSize: 15, color: "#555", marginBottom: 16 }}>
        <li>마우스 움직임에 따라 카드가 자연스럽게 기울어집니다.</li>
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
          {tiltCardCode}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}
