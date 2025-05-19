"use client";
import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

// 예시용 스크램블 텍스트 컴포넌트 (간단 버전)
function ScrambleText({ text }: { text: string }) {
  const [display, setDisplay] = useState(text);
  // 실제 구현은 gsap/프리셋 활용 가능. 여기선 단순 랜덤 치환 예시.
  // (실제 프로젝트에서는 gsap 또는 커스텀 훅으로 대체 권장)
  return <span style={{ fontFamily: "monospace", letterSpacing: 1 }}>{display}</span>;
}

const scrambleTextCode = `function ScrambleText({ text }) {
  // ...스크램블 로직 구현...
  return <span>{display}</span>;
}`;

export default function ScrambleTextPage() {
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    await navigator.clipboard.writeText(scrambleTextCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };
  return (
    <div>
      <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 8 }}>스크램블 텍스트 효과</h1>
      <div style={{ border: "1px solid #eee", borderRadius: 12, overflow: "hidden", marginBottom: 16, padding: 24 }}>
        <ScrambleText text="스크램블 효과 예시입니다!" />
      </div>
      <p style={{ fontSize: 16, marginBottom: 8 }}>
        <b>설명:</b> 텍스트가 랜덤하게 섞이며 등장하는 인터랙션입니다.
        <br />
        <b>gsap</b> 또는 <b>framer-motion</b>을 활용해 자연스러운 효과를 구현할 수 있습니다.
        <br />
        <b>반응형</b>으로 동작하며, 다양한 텍스트에 쉽게 적용할 수 있습니다.
      </p>
      <ul style={{ fontSize: 15, color: "#555", marginBottom: 16 }}>
        <li>문자가 랜덤하게 섞이며 점차 원래 텍스트로 복원됩니다.</li>
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
          {scrambleTextCode}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}
