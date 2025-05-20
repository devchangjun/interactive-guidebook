"use client";
import ScrollTriggerText from "@/components/common/framer-motion/typography/ScrollTriggerText";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { CopyButton } from "../../components/CopyButton";
import { scrollTriggerTextCode } from "./constants/code";
import { ResultBox } from "@/components/common/ResultBox";

export default function ScrollTriggerTextPage() {
  return (
    <div>
      {/* 1. 🎯 인터랙션 제목 */}
      <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 8 }}>스크롤 트리거 텍스트 (Scroll Trigger Text)</h1>
      <hr style={{ margin: "16px 0 24px 0", border: 0, borderTop: "1px solid #fff" }} />
      {/* 2. 💻 코드 예시 + 실제 데모 */}
      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 8 }}>💻 코드 예시 & 데모</h2>
        <ResultBox>
          <ScrollTriggerText fromColor="#888" toColor="#FFD600" duration={0.8} />
        </ResultBox>
        <div style={{ fontSize: 15, color: "#888", marginTop: 8 }}>
          <b>framer-motion</b>을 활용해 스크롤 위치에 따라 텍스트가 나타나고 사라지는 인터랙션입니다.
        </div>
      </section>

      {/* 3. ✅ 사용하면 좋은 예시 */}
      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 8 }}>✅ 사용하면 좋은 예시</h2>
        <ul style={{ fontSize: 16, color: "#fff", marginLeft: 16 }}>
          <li>섹션 타이틀: 스크롤에 따른 강조 효과</li>
          <li>스토리텔링: 순차적인 메시지 전달</li>
          <li>포트폴리오: 작품 소개 시 주목도 향상</li>
        </ul>
      </section>
      {/* 4. 🧠 아이디어 구체화 (인터랙션 흐름 시나리오) */}
      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 8 }}>🧠 아이디어 구체화 (인터랙션 흐름 시나리오)</h2>
        <ol style={{ fontSize: 16, color: "#fff", marginLeft: 16, marginBottom: 8 }}>
          <li>초기: 텍스트가 투명하고 작은 상태</li>
          <li>스크롤 중간: 텍스트가 완전히 보이고 크기가 최대</li>
          <li>스크롤 끝: 다시 투명해지고 작아짐</li>
          <li>좌우 이동으로 다이나믹한 효과 추가</li>
        </ol>
        <div style={{ fontSize: 15, color: "#888" }}>
          💡 useScroll과 useTransform을 활용해 스크롤 위치에 따른 다양한 애니메이션을 적용할 수 있습니다.
        </div>
      </section>
      {/* 5. 🧑‍💻 바이브 코딩용 프롬프트 예시 */}
      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 8 }}>🧑‍💻 바이브 코딩용 프롬프트 예시</h2>
        <pre
          style={{
            background: "#18181b",
            color: "#FFD600",
            borderRadius: 8,
            padding: 16,
            fontSize: 15,
            whiteSpace: "pre-line",
          }}
        >
          {`스크롤 위치에 따라 텍스트가 나타났다 사라지는 인터랙션을 만들어줘.
framer-motion의 useScroll과 useTransform을 사용해서 opacity, scale을 조절해줘.
스크롤 중간 지점에서 텍스트가 가장 선명하고 크게 보이도록 해줘.
반응형으로 동작하게 해줘.`}
        </pre>
      </section>
      {/* 6. ⚡코드 예시 */}
      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 8 }}>⚡코드 예시</h2>
        <div style={{ position: "relative", marginBottom: 8 }}>
          <CopyButton code={scrollTriggerTextCode} />
          <SyntaxHighlighter
            language="tsx"
            style={oneDark}
            customStyle={{ borderRadius: 8, fontSize: 14, paddingTop: 32 }}
          >
            {scrollTriggerTextCode}
          </SyntaxHighlighter>
        </div>
      </section>
    </div>
  );
}
