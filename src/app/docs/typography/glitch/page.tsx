import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { ResultBox } from "@/components/common/ResultBox";
import { CopyButton } from "../../components/CopyButton";
import GlitchText from "@/components/common/framer-motion/typography/GlitchText";

const glitchTextCode = `import GlitchText from "@/components/common/framer-motion/typography/GlitchText";

<GlitchText text="GLITCH EFFECT" fontSize={64} color="#fff" />`;

export default function GlitchTextPage() {
  return (
    <div>
      {/* 1. 🎯 인터랙션 제목 */}
      <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 8 }}>글리치 텍스트 애니메이션 (Glitch Effect)</h1>
      <hr style={{ margin: "16px 0 24px 0", border: 0, borderTop: "1px solid #eee" }} />

      {/* 4. 💻 코드 예시 + 실제 데모 */}
      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 8 }}>💻 코드 예시 & 데모</h2>
        <ResultBox>
          <GlitchText text="GLITCH EFFECT" fontSize={56} color="#fff" />
        </ResultBox>
        <div style={{ fontSize: 15, color: "#888", marginTop: 8 }}>
          <code>framer-motion</code>을 활용해 랜덤 clip-path와 색상으로 글리치 효과를 구현합니다.
        </div>
      </section>

      {/* 2. ✅ 사용하면 좋은 예시 */}
      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 8 }}>✅ 사용하면 좋은 예시</h2>
        <ul style={{ fontSize: 16, color: "#555", marginLeft: 16 }}>
          <li>메인 헤드라인: 강렬한 인상을 주고 싶을 때</li>
          <li>404/에러 페이지: 디지털 오류 느낌을 주고 싶을 때</li>
          <li>테크/게임/해킹 컨셉: 미래지향적 분위기를 연출하고 싶을 때</li>
        </ul>
      </section>

      {/* 3. 🧠 아이디어 구체화 (인터랙션 흐름 시나리오) */}
      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 8 }}>🧠 아이디어 구체화 (인터랙션 흐름 시나리오)</h2>
        <ol style={{ fontSize: 16, color: "#555", marginLeft: 16, marginBottom: 8 }}>
          <li>초기: 텍스트가 정상적으로 보임</li>
          <li>글리치: 텍스트 일부가 랜덤하게 흔들리거나 색이 번짐</li>
          <li>반복: 효과가 주기적으로 반복되어 디지털 오류 느낌을 연출</li>
        </ol>
        <div style={{ fontSize: 15, color: "#888" }}>
          💡 <b>clip-path, 색상, 위치</b>를 랜덤하게 바꿔주면 다양한 글리치 효과를 만들 수 있습니다.
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
          {`텍스트에 디지털 오류(Glitch) 느낌의 애니메이션을 주고 싶어.
색상, 위치, clip-path 등을 랜덤하게 바꿔서 미래지향적이고 임팩트 있게 만들어줘.
framer-motion이나 CSS로 구현해줘.`}
        </pre>
      </section>
      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 8 }}>⚡코드 예시</h2>
        <div style={{ position: "relative", marginBottom: 8 }}>
          <CopyButton code={glitchTextCode} />
          <SyntaxHighlighter
            language="tsx"
            style={oneDark}
            customStyle={{ borderRadius: 8, fontSize: 14, paddingTop: 32 }}
          >
            {glitchTextCode}
          </SyntaxHighlighter>
        </div>
      </section>
    </div>
  );
}
