import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { revealTextCode } from "./constants/code";
import { ResultBox } from "@/components/common/ResultBox";
import { CopyButton } from "../../components/CopyButton";
import RevealText from "@/components/common/framer-motion/typography/RevealText";

export default function RevealTextDocsPage() {
  return (
    <div>
      {/* 1. ✨ 인터랙션 제목 */}
      <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 8 }}>텍스트 Reveal 애니메이션 (RevealText)</h1>
      <hr style={{ margin: "16px 0 24px 0", border: 0, borderTop: "1px solid #eee" }} />

      {/* 2. 💻 코드 예시 + 실제 데모 */}
      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 8 }}>💻 코드 예시 & 데모</h2>
        <ResultBox>
          <div style={{ fontSize: 28, fontWeight: 600, marginBottom: 16 }}>
            <RevealText text="Reveal 애니메이션 예시입니다." direction="up" />
          </div>
          <div style={{ fontSize: 22, marginBottom: 12 }}>
            <RevealText text="단어 단위로 등장합니다!" byWord direction="left" delay={0.2} stagger={0.12} />
          </div>
          <div style={{ fontSize: 20, color: "#1976d2" }}>
            <RevealText text="오른쪽에서 한 글자씩 등장!" direction="right" delay={0.4} duration={0.7} />
          </div>
        </ResultBox>
        <div style={{ fontSize: 15, color: "#888", marginTop: 8 }}>
          <code>framer-motion</code>을 활용해 직접 구현할 수 있습니다.
        </div>
      </section>

      {/* 3. ✅ 사용하면 좋은 예시 */}
      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 8 }}>✅ 사용하면 좋은 예시</h2>
        <ul style={{ fontSize: 16, color: "#555", marginLeft: 16 }}>
          <li>메인 헤드라인, 강조 문구</li>
          <li>CTA 버튼 위 설명</li>
          <li>제품/서비스 슬로건</li>
          <li>페이지 섹션 타이틀/소개 문구</li>
          <li>온보딩/튜토리얼 안내 메시지</li>
          <li>로딩/전환 시 임팩트 주는 텍스트</li>
        </ul>
      </section>

      {/* 4. 🧠 아이디어 구체화 (인터랙션 흐름 시나리오) */}
      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 8 }}>🧠 아이디어 구체화 (인터랙션 흐름 시나리오)</h2>
        <ol style={{ fontSize: 16, color: "#555", marginLeft: 16, marginBottom: 8 }}>
          <li>초기: 텍스트가 보이지 않거나 투명(또는 살짝 아래/옆에 위치)</li>
          <li>등장: 한 글자 또는 한 단어씩 순차적으로 애니메이션 등장</li>
          <li>완성: 전체 문장이 자연스럽게 완성되어 잠시 유지</li>
          <li>반복/전환(선택): 다른 문장으로 교체하거나, 한 번만 등장</li>
          <li>커스텀: direction, delay, byWord 등 옵션에 따라 다양한 연출 가능</li>
        </ol>
        <div style={{ fontSize: 15, color: "#888" }}>
          💡 <b>direction, delay, byWord, stagger</b> 등 다양한 옵션으로 여러 연출이 가능합니다.
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
          {`텍스트가 한 글자 또는 한 단어씩 자연스럽게 등장하는 Reveal 애니메이션을 만들고 싶어.
방향, 딜레이, 단어/글자 단위 등 커스텀 옵션도 지원해줘.
framer-motion을 활용해서 구현해줘.`}
        </pre>
      </section>
      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 8 }}>⚡코드 예시</h2>
        <div style={{ position: "relative", marginBottom: 8 }}>
          <CopyButton code={revealTextCode} />
          <SyntaxHighlighter
            language="tsx"
            style={oneDark}
            customStyle={{ borderRadius: 8, fontSize: 14, paddingTop: 32 }}
          >
            {revealTextCode}
          </SyntaxHighlighter>
        </div>
      </section>
    </div>
  );
}
