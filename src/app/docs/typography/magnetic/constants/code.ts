export const magneticLettersCode = `
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { magneticLettersCode } from "./constants/code"; // 사용자가 정의한 코드 문자열
import { ResultBox } from "@/components/common/ResultBox";
import { CopyButton } from "../../components/CopyButton";
import { MagneticLetters } from "@/components/common/framer-motion/text/MagneticLetters";

export default function MagneticLettersPage() {
  return (
    <div>
      {/* 1. 🎯 인터랙션 제목 */}
      <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 8 }}>마우스를 따라 끌려오는 텍스트 (Magnetic Letters)</h1>
      <hr style={{ margin: "16px 0 24px 0", border: 0, borderTop: "1px solid #fff" }} />

      {/* 4. 💻 코드 예시 + 실제 데모 */}
      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 8 }}>데모</h2>
        <ResultBox>
          <MagneticLetters text="MAGNETIC TEXT" />
        </ResultBox>

        <div style={{ fontSize: 15, color: "#888", marginTop: 8 }}>
          각 글자가 마우스 위치에 따라 자석처럼 반응하며 이동합니다. 가까울수록 더 많이 끌려와요.
        </div>
      </section>

      {/* 2. ✅ 사용하면 좋은 예시 */}
      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 8 }}>사용하면 좋은 예시</h2>
        <ul style={{ fontSize: 16, color: "#fff", marginLeft: 16 }}>
          <li>히어로 섹션 타이틀: 첫 인상에서 몰입감을 주고 싶을 때</li>
          <li>커서 기반 인터랙션이 많은 웹사이트</li>
          <li>전시/이벤트용 마이크로사이트</li>
        </ul>
      </section>

      {/* 3. 🧠 아이디어 구체화 (인터랙션 흐름 시나리오) */}
      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 8 }}>아이디어 구체화 (인터랙션 흐름 시나리오)</h2>
        <ol style={{ fontSize: 16, color: "#fff", marginLeft: 16, marginBottom: 8 }}>
          <li>텍스트가 화면에 표시됨</li>
          <li>마우스가 글자 근처로 이동하면 해당 글자가 마우스를 따라 움직임</li>
          <li>가까울수록 더 강하게, 멀어지면 원래 위치로 되돌아옴</li>
          <li>움직임은 자연스럽고, 스프링 기반의 부드러운 반응</li>
        </ol>
        <div style={{ fontSize: 15, color: "#888" }}>
          💡 스프링 기반의 모션 처리를 통해 물리 기반의 리얼한 느낌을 줄 수 있어요.
        </div>
      </section>

      {/* 5. 🧑‍💻 바이브 코딩용 프롬프트 예시 */}
      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 8 }}>바이브 코딩용 프롬프트 예시</h2>
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
{\`글자의 각 문자에 마우스 커서가 가까워지면 자석처럼 끌리는 효과를 주고 싶어.
framer-motion을 활용해서 자연스럽고 반응형으로 만들어줘.
커서가 멀어지면 원래 위치로 돌아가도록 하고, 글자마다 독립적으로 움직이게 해줘.\`}
        </pre>
      </section>

      {/* 6. 🧑‍💻 코드 예시 */}
      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 8 }}>코드 예시</h2>
        <div style={{ position: "relative", marginBottom: 8 }}>
          <CopyButton code={magneticLettersCode} />
          <SyntaxHighlighter
            language="tsx"
            style={oneDark}
            customStyle={{ borderRadius: 8, fontSize: 14, paddingTop: 32 }}
          >
            {magneticLettersCode}
          </SyntaxHighlighter>
        </div>
      </section>
    </div>
  );
}
`;
