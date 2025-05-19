"use client";
import { TypographyAnimation } from "@/components/common/framer-motion/TypographyAnimation";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useState } from "react";
import { MagneticText } from "@/components/common/framer-motion/MagneticText";
import { MagneticLetters } from "@/components/common/framer-motion/MagneticLetters";

const typographyAnimationCode = `import { TypographyAnimation } from "@/components/common/framer-motion/TypographyAnimation";

<TypographyAnimation
  texts={["Hello, World!", "프론트엔드 개발자", "타이포그래피 애니메이션"]}
  typingSpeed={60}
  pause={1200}
/>
`;

const magneticTextCode = `import { MagneticText } from "@/components/common/framer-motion/MagneticText";

<MagneticText strength={48} style={{ fontSize: 32, fontWeight: 700, color: "#007aff", margin: "0 8px" }}>
  마그네틱 효과 텍스트
</MagneticText>
<MagneticText strength={32} style={{ fontSize: 28, fontWeight: 600, color: "#222", margin: "0 8px" }}>
  Magnetic
</MagneticText>
`;

export default function TypographyAnimationPage() {
  const [copied, setCopied] = useState(false);
  const [copiedMagnetic, setCopiedMagnetic] = useState(false);

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
      <h2 style={{ fontSize: 22, fontWeight: 700, margin: "40px 0 12px 0" }}>마그네틱 효과 (Magnetic Text)</h2>
      <div
        style={{
          border: "1px solid #eee",
          borderRadius: 12,
          overflow: "hidden",
          marginBottom: 16,
          padding: 32,
          background: "#1a1a1a",
          textAlign: "center",
        }}
      >
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
          onClick={async () => {
            await navigator.clipboard.writeText(magneticTextCode);
            setCopiedMagnetic(true);
            setTimeout(() => setCopiedMagnetic(false), 1500);
          }}
          style={{
            position: "absolute",
            right: 8,
            top: 8,
            zIndex: 2,
            background: copiedMagnetic ? "#4ade80" : "#222",
            color: "#fff",
            border: "none",
            borderRadius: 6,
            padding: "4px 12px",
            fontSize: 14,
            cursor: "pointer",
            transition: "background 0.2s",
          }}
        >
          {copiedMagnetic ? "복사됨!" : "코드 복사"}
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
