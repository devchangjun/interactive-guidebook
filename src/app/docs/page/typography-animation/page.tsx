"use client";
import { TypographyAnimation } from "@/components/common/framer-motion/TypographyAnimation";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useState } from "react";

const typographyAnimationCode = `import { TypographyAnimation } from "@/components/common/framer-motion/TypographyAnimation";

<TypographyAnimation
  texts={["Hello, World!", "프론트엔드 개발자", "타이포그래피 애니메이션"]}
  typingSpeed={60}
  pause={1200}
/>
`;

export default function TypographyAnimationPage() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(typographyAnimationCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div>
      <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 8 }}>Typography Animation</h1>
      <div
        style={{
          border: "1px solid #eee",
          borderRadius: 12,
          overflow: "hidden",
          marginBottom: 16,
          padding: 32,
          background: "#1a1a1a",
        }}
      >
        <TypographyAnimation
          texts={["Hello, World!", "프론트엔드 개발자", "타이포그래피 애니메이션"]}
          typingSpeed={60}
          pause={1200}
        />
      </div>
      <p style={{ fontSize: 16, marginBottom: 8 }}>
        <b>설명:</b> 여러 줄의 텍스트가 한 글자씩 자연스럽게 타이핑되며, 각 글자가 페이드인 애니메이션으로 등장합니다.
        <br />
        <b>framer-motion</b>을 활용하여 부드러운 인터랙션을 구현했습니다.
        <br />
        <b>반응형</b>으로 동작하며, 텍스트 배열만 바꿔서 다양한 문구에 적용할 수 있습니다.
      </p>
      <ul style={{ fontSize: 15, color: "#555", marginBottom: 16 }}>
        <li>한 글자씩 타이핑되며, 각 글자가 자연스럽게 페이드인됩니다.</li>
        <li>텍스트 배열을 바꿔서 다양한 문구에 쉽게 적용할 수 있습니다.</li>
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
          {typographyAnimationCode}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}
