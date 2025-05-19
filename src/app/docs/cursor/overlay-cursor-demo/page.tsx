import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { overlayCursorDemoCode } from "./constants/code";
import { ResultBox } from "@/components/common/ResultBox";
import { CopyButton } from "../../components/CopyButton";
import OverlayCursorProvider from "@/components/common/framer-motion/OverlayCursor";

export default function OverlayCursorDemoPage() {
  return (
    <div>
      {/* 1. 🎯 인터랙션 제목 */}
      <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 8 }}>오버레이 커서 인터랙션 (Overlay Cursor)</h1>
      <hr style={{ margin: "16px 0 24px 0", border: 0, borderTop: "1px solid #fff" }} />

      {/* 2. 💻 코드 예시 + 실제 데모 */}
      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 8 }}>💻 코드 예시 & 데모</h2>
        <ResultBox>
          <OverlayCursorProvider>
            <div
              style={{
                width: "100%",
                maxWidth: 480,
                height: 300,
                margin: "0 auto",
                background: "#fff",
                borderRadius: 16,
                boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 22,
                fontWeight: 600,
                color: "#ff69b4",
              }}
            >
              이 영역에 마우스를 올려보세요!
            </div>
          </OverlayCursorProvider>
        </ResultBox>
        <div style={{ fontSize: 15, color: "#888", marginTop: 8 }}>
          마우스 커서가 영역 위에서 부드럽게 변형되는 인터랙션을 구현할 수 있습니다.
        </div>
      </section>

      {/* 3. ✅ 사용하면 좋은 예시 */}
      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 8 }}>✅ 사용하면 좋은 예시</h2>
        <ul style={{ fontSize: 16, color: "#fff", marginLeft: 16 }}>
          <li>버튼, 카드, 이미지 등 특정 영역에 마우스 오버 효과를 주고 싶을 때</li>
          <li>커스텀 커서로 브랜드 아이덴티티를 강조하고 싶을 때</li>
          <li>UX를 한층 더 세련되게 만들고 싶을 때</li>
        </ul>
      </section>

      {/* 4. 🧠 아이디어 구체화 (인터랙션 흐름 시나리오) */}
      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 8 }}>🧠 아이디어 구체화 (인터랙션 흐름 시나리오)</h2>
        <ol style={{ fontSize: 16, color: "#fff", marginLeft: 16, marginBottom: 8 }}>
          <li>기본 커서 대신, 영역 위에 올리면 커서가 부드럽게 변형된다.</li>
          <li>커서의 색상, 크기, 투명도 등을 커스텀할 수 있다.</li>
          <li>영역을 벗어나면 자연스럽게 원래 커서로 복귀한다.</li>
        </ol>
        <div style={{ fontSize: 15, color: "#888" }}>
          💡 오버레이 커서는 <b>몰입감</b>과 <b>브랜드 경험</b>을 동시에 줄 수 있는 트렌디한 인터랙션입니다.
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
          {`특정 영역에 마우스를 올리면 커서가 부드럽게 변형되는 오버레이 커서 인터랙션을 구현하고 싶어.
GSAP이나 framer-motion, SVG를 활용해도 좋아.
커서의 색상, 크기, 투명도, 그림자 등을 커스텀할 수 있게 해줘.`}
        </pre>
      </section>

      {/* 6. ⚡ 코드 예시 */}
      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 8 }}>⚡코드 예시</h2>
        <div style={{ position: "relative", marginBottom: 8 }}>
          <CopyButton code={overlayCursorDemoCode} />
          <SyntaxHighlighter
            language="tsx"
            style={oneDark}
            customStyle={{ borderRadius: 8, fontSize: 14, paddingTop: 32 }}
          >
            {overlayCursorDemoCode}
          </SyntaxHighlighter>
        </div>
      </section>
    </div>
  );
}
