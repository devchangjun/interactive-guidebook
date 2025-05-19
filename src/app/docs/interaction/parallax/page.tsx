"use client";
import ParallaxImageTest from "@/components/common/framer-motion/ParallaxImageTest";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { CopyButton } from "../../components/CopyButton";
import { parallaxImageTestCode } from "./constants/code";
import { ResultBox } from "@/components/common/ResultBox";

export default function ParallaxPage() {
  return (
    <div>
      {/* 1. 🎯 인터랙션 제목 */}
      <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 8 }}>패럴랙스 배경 (Parallax Background)</h1>
      <hr style={{ margin: "16px 0 24px 0", border: 0, borderTop: "1px solid #fff" }} />
      {/* 2. 💻 코드 예시 + 실제 데모 */}
      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 8 }}>💻 코드 예시 & 데모</h2>
        <ResultBox>
          <ParallaxImageTest />
        </ResultBox>
        <div style={{ fontSize: 15, color: "#888", marginTop: 8 }}>
          <b>framer-motion</b>을 활용해 스크롤에 따라 배경 이미지가 부드럽게 패럴랙스 이동하는 인터랙션입니다.
        </div>
      </section>
      {/* 3. ✅ 사용하면 좋은 예시 */}
      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 8 }}>✅ 사용하면 좋은 예시</h2>
        <ul style={{ fontSize: 16, color: "#fff", marginLeft: 16 }}>
          <li>랜딩/히어로 섹션: 깊이감 있는 배경 연출</li>
          <li>스크롤 기반 스토리텔링: 몰입감 있는 전환 효과</li>
          <li>포트폴리오/소개 페이지: 시각적 집중 유도</li>
        </ul>
      </section>
      {/* 4. 🧠 아이디어 구체화 (인터랙션 흐름 시나리오) */}
      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 8 }}>🧠 아이디어 구체화 (인터랙션 흐름 시나리오)</h2>
        <ol style={{ fontSize: 16, color: "#fff", marginLeft: 16, marginBottom: 8 }}>
          <li>페이지 진입: 배경 이미지가 기본 위치에 노출</li>
          <li>스크롤 내릴수록 배경이 자연스럽게 위로 이동</li>
          <li>스크롤을 올리면 다시 아래로 이동</li>
          <li>텍스트/콘텐츠는 배경 위에 자연스럽게 노출</li>
        </ol>
        <div style={{ fontSize: 15, color: "#888" }}>
          💡 배경 이미지의 y값을 스크롤 위치에 따라 부드럽게 조절해 깊이감을 높일 수 있습니다.
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
          {`스크롤을 내리면 배경 이미지가 부드럽게 위로 이동하는 패럴랙스 효과의 컴포넌트를 만들어줘.\nframer-motion의 useScroll, useTransform, useSpring을 활용해서 자연스럽게 트랜지션이 적용되게 해줘.\n배경 이미지는 전체 화면을 덮도록 하고, 반응형 웹도 고려해줘.\n샘플 이미지는 /images/image.png로 해줘.`}
        </pre>
      </section>
      {/* 6. ⚡코드 예시 */}
      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 8 }}>⚡코드 예시</h2>
        <div style={{ position: "relative", marginBottom: 8 }}>
          <CopyButton code={parallaxImageTestCode} />
          <SyntaxHighlighter
            language="tsx"
            style={oneDark}
            customStyle={{ borderRadius: 8, fontSize: 14, paddingTop: 32 }}
          >
            {parallaxImageTestCode}
          </SyntaxHighlighter>
        </div>
      </section>
    </div>
  );
}
