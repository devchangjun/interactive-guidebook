import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { ResultBox } from "@/components/common/ResultBox";
import { CopyButton } from "../../components/CopyButton";
import MagneticTargetBox from "@/components/common/framer-motion/cursor/MagneticTargetBox";
import MagneticCursor from "@/components/common/framer-motion/cursor/MagneticCursor";
import { magneticCursorCode, magneticTargetBoxCode } from "./constants/code";

export default function MagneticCursorPage() {
  return (
    <div>
      {/* 1. 🎯 인터랙션 제목 */}
      <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 8 }}>마그네틱 커서 인터랙션 (Magnetic Cursor)</h1>
      <hr style={{ margin: "16px 0 24px 0", border: 0, borderTop: "1px solid #fff" }} />

      {/* 4. 💻 코드 예시 + 실제 데모 */}
      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 8 }}>데모</h2>
        <ResultBox>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <MagneticTargetBox>Hover Me!</MagneticTargetBox>
            <MagneticTargetBox>Interactive</MagneticTargetBox>
            <MagneticTargetBox>Magnetic Box</MagneticTargetBox>
          </div>
          <MagneticCursor />
        </ResultBox>

        <div style={{ fontSize: 15, color: "#888", marginTop: 8 }}>
          마우스를 박스 위로 가져가면 커서가 자연스럽게 박스를 감싸는 효과가 적용됩니다.
        </div>
      </section>

      {/* 2. ✅ 사용하면 좋은 예시 */}
      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 8 }}>사용하면 좋은 예시</h2>
        <ul style={{ fontSize: 16, color: "#fff", marginLeft: 16 }}>
          <li>버튼이나 카드 등 클릭 가능한 요소를 강조하고 싶을 때</li>
          <li>포트폴리오나 쇼케이스 웹사이트에서 인터랙티브한 경험을 주고 싶을 때</li>
          <li>사용자의 주목을 끌고 싶은 중요한 UI 요소가 있을 때</li>
          <li>전체적인 웹사이트의 품격과 완성도를 높이고 싶을 때</li>
        </ul>
      </section>

      {/* 3. 🧠 아이디어 구체화 (인터랙션 흐름 시나리오) */}
      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 8 }}>아이디어 구체화 (인터랙션 흐름 시나리오)</h2>
        <ol style={{ fontSize: 16, color: "#fff", marginLeft: 16, marginBottom: 8 }}>
          <li>기본 상태: 커서는 네 귀퉁이가 있는 사각형 테두리와 중앙 원으로 구성</li>
          <li>회전 애니메이션: 커서가 천천히 무한 회전하며 생동감을 줌</li>
          <li>마그네틱 박스 진입: 커서가 박스의 크기에 맞춰 자연스럽게 확대</li>
          <li>박스 위치 추적: 커서가 박스의 중앙을 기준으로 자연스럽게 이동</li>
          <li>박스 이탈: 커서가 원래 크기로 돌아가고 회전 애니메이션 재개</li>
        </ol>
        <div style={{ fontSize: 15, color: "#888" }}>
          💡 커서는 <b>기본 - 진입 - 추적 - 이탈 - 복귀</b> 단계로 나눌 수 있으며, 각 단계에서 자연스러운 전환이
          중요합니다.
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
          {`마우스 커서가 특정 박스나 버튼 위에 올라가면 커서가 자연스럽게 그 요소를 감싸는 마그네틱 효과를 만들고 싶어.
기본 커서는 네 귀퉁이만 있는 사각형 테두리와 중앙 원으로 구성되고, 천천히 회전하면서 움직여.
박스 위에 올라가면 회전은 멈추고 박스 크기에 맞춰 커서가 확대되면서 자연스럽게 박스를 감싸주는 느낌으로 만들어줘.
framer-motion을 사용해도 좋아.`}
        </pre>
      </section>

      {/* 6. 💡 구현 시 주의사항 */}
      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 8 }}>구현 시 주의사항</h2>
        <ul style={{ fontSize: 16, color: "#fff", marginLeft: 16 }}>
          <li>모바일 환경에서는 커서 효과를 비활성화 (터치 기반이므로)</li>
          <li>성능 최적화를 위해 framer-motion의 useMotionValue, useSpring 활용</li>
          <li>박스 크기/위치 변경 시 자연스러운 전환을 위한 트랜지션 설정</li>
          <li>커서의 z-index를 높게 설정하여 항상 최상단에 표시</li>
        </ul>
      </section>

      {/* 7. 🎨 커스터마이징 옵션 */}
      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 8 }}>커스터마이징 옵션</h2>
        <ul style={{ fontSize: 16, color: "#fff", marginLeft: 16 }}>
          <li>커서 크기: CURSOR_SIZE 상수 조정 (기본 40px)</li>
          <li>테두리 색상: stroke 속성 변경 (기본 #fff)</li>
          <li>회전 속성: duration 값 조정 (기본 1.2초)</li>
          <li>마그네틱 강도: 박스와의 간격(gap) 조정 (기본 16px)</li>
          <li>스프링 효과: stiffness, damping 값 조정으로 움직임 커스텀</li>
        </ul>
      </section>

      {/* 8. 📝 코드 예시 */}
      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 16 }}>코드 예시</h2>

        <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 8 }}>MagneticCursor.tsx</h3>
        <div style={{ position: "relative", marginBottom: 16 }}>
          <CopyButton code={magneticCursorCode} />
          <SyntaxHighlighter
            language="tsx"
            style={oneDark}
            customStyle={{ borderRadius: 8, fontSize: 14, paddingTop: 32 }}
          >
            {magneticCursorCode}
          </SyntaxHighlighter>
        </div>

        <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 8 }}>MagneticTargetBox.tsx</h3>
        <div style={{ position: "relative", marginBottom: 8 }}>
          <CopyButton code={magneticTargetBoxCode} />
          <SyntaxHighlighter
            language="tsx"
            style={oneDark}
            customStyle={{ borderRadius: 8, fontSize: 14, paddingTop: 32 }}
          >
            {magneticTargetBoxCode}
          </SyntaxHighlighter>
        </div>
      </section>
    </div>
  );
}
