"use client";
import ZoomScrollBg from "../../../../components/common/framer-motion/ZoomScrollBg";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { CopyButton } from "../../components/CopyButton";
import { zoomScrollBgCode } from "./constants/code";
import { ResultBox } from "@/components/common/ResultBox";

export default function ZoomScrollBgPage() {
  return (
    <div>
      {/* 1. 🎯 인터랙션 제목 */}
      <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 8 }}>
        스크롤 Zoom In/Out 배경 (Zoom Scroll Background)
      </h1>
      <hr style={{ margin: "16px 0 24px 0", border: 0, borderTop: "1px solid #fff" }} />

      {/* 2. 💻 코드 예시 + 실제 데모 */}
      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 8 }}>💻 코드 예시 & 데모</h2>
        <ResultBox>
          <ZoomScrollBg />
        </ResultBox>
        <div style={{ fontSize: 15, color: "#888", marginTop: 8 }}>
          <b>framer-motion</b>을 활용해 스크롤에 따라 배경 이미지가 부드럽게 확대/축소되는 인터랙션입니다.
        </div>
      </section>

      {/* 3. ✅ 사용하면 좋은 예시 */}
      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 8 }}>✅ 사용하면 좋은 예시</h2>
        <ul style={{ fontSize: 16, color: "#fff", marginLeft: 16 }}>
          <li>랜딩/히어로 섹션: 임팩트 있는 배경 연출</li>
          <li>스크롤 기반 스토리텔링: 몰입감 있는 전환 효과</li>
          <li>포트폴리오/소개 페이지: 시각적 집중 유도</li>
        </ul>
      </section>

      {/* 4. 🧠 아이디어 구체화 (인터랙션 흐름 시나리오) */}
      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 8 }}>🧠 아이디어 구체화 (인터랙션 흐름 시나리오)</h2>
        <ol style={{ fontSize: 16, color: "#fff", marginLeft: 16, marginBottom: 8 }}>
          <li>페이지 진입: 배경 이미지가 기본 크기로 노출</li>
          <li>스크롤 내릴수록 배경이 자연스럽게 확대</li>
          <li>스크롤을 올리면 다시 축소</li>
          <li>텍스트/콘텐츠는 배경 위에 자연스럽게 노출</li>
        </ol>
        <div style={{ fontSize: 15, color: "#888" }}>
          💡 배경 이미지의 scale을 스크롤 위치에 따라 부드럽게 조절해 몰입감을 높일 수 있습니다.
        </div>
      </section>

      {/* 5. ⚡코드 예시 */}
      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 8 }}>⚡코드 예시</h2>
        <div style={{ position: "relative", marginBottom: 8 }}>
          <CopyButton code={zoomScrollBgCode} />
          <SyntaxHighlighter
            language="tsx"
            style={oneDark}
            customStyle={{ borderRadius: 8, fontSize: 14, paddingTop: 32 }}
          >
            {zoomScrollBgCode}
          </SyntaxHighlighter>
        </div>
      </section>
    </div>
  );
}
