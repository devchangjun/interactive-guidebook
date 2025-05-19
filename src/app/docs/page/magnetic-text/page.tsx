"use client";
import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { MagneticLetters } from "@/components/common/framer-motion/MagneticLetters";

const magneticTextCode = `import { MagneticLetters } from "@/components/common/framer-motion/MagneticLetters";

<MagneticLetters text="마그네틱 효과 텍스트" />`;

export default function MagneticTextPage() {
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    await navigator.clipboard.writeText(magneticTextCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };
  return (
    <div>
      <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 8 }}>마그네틱 텍스트 효과</h1>
      <div style={{ border: "1px solid #eee", borderRadius: 12, overflow: "hidden", marginBottom: 16, padding: 24 }}>
        <MagneticLetters text="마그네틱 효과 텍스트" />
      </div>
      <p style={{ fontSize: 16, marginBottom: 8 }}>
        <b>설명:</b> 마우스가 텍스트 근처에 오면 텍스트가 자연스럽게 끌려가는 마그네틱 인터랙션입니다.
        <br />
        <b>framer-motion</b>을 활용하여 부드럽고 직관적인 효과를 구현했습니다.
        <br />
        <b>strength</b> 값을 조절해 끌림의 강도를 변경할 수 있습니다.
      </p>
      <ul style={{ fontSize: 15, color: "#555", marginBottom: 16 }}>
        <li>마우스가 가까워지면 텍스트가 자연스럽게 따라옵니다.</li>
        <li>여러 텍스트에 각각 다른 강도로 적용할 수 있습니다.</li>
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
          {magneticTextCode}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}
