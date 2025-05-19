import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { typographyAnimationCode } from "./constants/code";
import { ResultBox } from "@/components/common/ResultBox";
import { CopyButton } from "../../components/CopyButton";
import MorphingText from "@/components/common/framer-motion/typography/MorphingText";
import TextClipEffect from "@/components/common/framer-motion/typography/TextClipEffect";
export default function TypographyAnimationPage() {
  return (
    <div>
      {/* 1. 🎯 인터랙션 제목 */}
      <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 8 }}>텍스트 타이핑 애니메이션 (Typewriter Effect)</h1>
      <hr style={{ margin: "16px 0 24px 0", border: 0, borderTop: "1px solid #eee" }} />

      {/* 4. 💻 코드 예시 + 실제 데모 */}
      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 8 }}>💻 코드 예시 & 데모</h2>
        <ResultBox style={{ marginBottom: 16 }}>
          <MorphingText texts={["Hello world!", "hello 2", "javascript"]} />
        </ResultBox>

        <ResultBox style={{ marginBottom: 16 }}>
          <TextClipEffect
            items={[
              { main: "Hello", sub: "Hello" },
              { main: "javascript", sub: "javascript" },
              { main: "typescript", sub: "typescript" },
            ]}
          />
        </ResultBox>

        <div style={{ fontSize: 15, color: "#888", marginTop: 8 }}>
          프레임워크 없이 구현하려면 <code>setTimeout</code>과 <code>useEffect</code>로 직접 구현해도 됩니다.
        </div>
      </section>

      {/* 2. ✅ 사용하면 좋은 예시 */}
      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 8 }}>✅ 사용하면 좋은 예시</h2>
        <ul style={{ fontSize: 16, color: "#555", marginLeft: 16 }}>
          <li>메인 헤드라인: 사용자 진입 직후 강렬한 인상을 주고 싶을 때</li>
          <li>CTA 위 강조 문구: &quot;3초 안에 결과를 확인하세요&quot;</li>
          <li>제품 슬로건: &quot;AI로 만드는 스마트 포트폴리오&quot;</li>
        </ul>
      </section>

      {/* 3. 🧠 아이디어 구체화 (인터랙션 흐름 시나리오) */}
      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 8 }}>🧠 아이디어 구체화 (인터랙션 흐름 시나리오)</h2>
        <ol style={{ fontSize: 16, color: "#555", marginLeft: 16, marginBottom: 8 }}>
          <li>시작: 화면에는 아무 텍스트도 없다. (혹은 깜빡이는 커서만 있음)</li>
          <li>타이핑: 한 글자씩 타이핑되며 문장이 완성된다. (0.1초 간격)</li>
          <li>유지: 문장이 완성된 후 1~2초간 전체 문장이 유지된다.</li>
          <li>지우기(선택): 글자들이 거꾸로 하나씩 사라진다. (백스페이스 느낌)</li>
          <li>반복: 다음 문장이 새롭게 타이핑되며 사이클 반복</li>
        </ol>
        <div style={{ fontSize: 15, color: "#888" }}>
          💡 타이핑은 <b>등장 - 유지 - 제거 - 반복</b> 구조로 나눌 수 있고, 각 단계에서 감정(기대→만족→전환)을 줄 수
          있습니다.
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
          {`텍스트가 타이핑되듯 하나씩 등장하고, 일정 시간 후 사라졌다가 다른 문장이 반복되는 효과를 구현하고 싶어.
문장은 '디자인 없이도', '차별화된 웹을', '누구나 쉽게' 이런 식으로 바뀌게 해줘.
커서가 깜빡이도록 하고, 프레이머 모션이나 타이핑 라이브러리를 써도 괜찮아.`}
        </pre>
      </section>
      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 8 }}>⚡코드 예시</h2>
        <div style={{ position: "relative", marginBottom: 8 }}>
          <CopyButton code={typographyAnimationCode} />
          <SyntaxHighlighter
            language="tsx"
            style={oneDark}
            customStyle={{ borderRadius: 8, fontSize: 14, paddingTop: 32 }}
          >
            {typographyAnimationCode}
          </SyntaxHighlighter>
        </div>
      </section>
    </div>
  );
}
