import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { ResultBox } from "@/components/common/ResultBox";
import { CopyButton } from "../../components/CopyButton";
import ScrollMarqueeText from "@/components/common/framer-motion/typography/ScrollMarqueeText";

const scrollMarqueeCode = `import ScrollMarqueeText from '@/components/common/framer-motion/typography/ScrollMarqueeText';

<ScrollMarqueeText
  texts={[
    "Let's Dive Into This Tutorial",
    "Take It Easy!",
    "Don't Worry Let's Code",
    "Yummy Coding"
  ]}
  baseSpeed={50}
  fontSize="5vw"
  color="#003b9a"
/>
`;

export default function ScrollMarqueePage() {
  return (
    <div>
      {/* 1. 🎯 인터랙션 제목 */}
      <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 8 }}>스크롤 마키 텍스트 (Scroll Marquee Text)</h1>
      <hr style={{ margin: "16px 0 24px 0", border: 0, borderTop: "1px solid #eee" }} />

      {/* 4. 💻 코드 예시 + 실제 데모 */}
      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 8 }}>데모</h2>
        <ResultBox
          style={{
            height: "800px",
            position: "relative",
            background: `linear-gradient(rgba(20,30,60,0.7), rgba(20,30,60,0.7)), url('/1.avif') center/cover no-repeat`,
            boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
            border: "none",
          }}
        >
          <ScrollMarqueeText
            texts={["Let's Dive Into This Tutorial", "Take It Easy!", "Don't Worry Let's Code", "Yummy Coding"]}
            baseSpeed={50}
            fontSize="5vw"
            color="#fff"
            style={{
              fontFamily: `'Montserrat', 'Noto Sans KR', 'Pretendard', Arial, sans-serif`,
              fontWeight: 700,
              letterSpacing: "-0.01em",
              textShadow: "0 2px 16px rgba(0,0,0,0.18)",
            }}
          />
        </ResultBox>
        <div style={{ fontSize: 15, color: "#888", marginTop: 8 }}>
          <b>배경 이미지와 예쁜 폰트(Montserrat, Noto Sans KR) 적용 예시입니다.</b>
          <br />
          스크롤 시 속도가 빨라지는 무한 반복 텍스트 애니메이션입니다.
        </div>
      </section>

      {/* 2. ✅ 사용하면 좋은 예시 */}
      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 8 }}>사용하면 좋은 예시</h2>
        <ul style={{ fontSize: 16, color: "#555", marginLeft: 16 }}>
          <li>브랜드 메시지 강조: 주요 키워드를 반복적으로 노출</li>
          <li>섹션 구분자: 콘텐츠 영역 사이에 동적인 구분선으로 활용</li>
          <li>인터랙티브 배너: 사용자 스크롤과 연동되는 동적 배너</li>
        </ul>
      </section>

      {/* 3. 🧠 아이디어 구체화 (인터랙션 흐름 시나리오) */}
      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 8 }}>아이디어 구체화 (인터랙션 흐름 시나리오)</h2>
        <ol style={{ fontSize: 16, color: "#555", marginLeft: 16, marginBottom: 8 }}>
          <li>기본: 일정한 속도로 텍스트가 좌에서 우로 이동</li>
          <li>스크롤: 사용자가 스크롤할 때 텍스트 이동 속도 증가</li>
          <li>복귀: 스크롤이 멈추면 천천히 기본 속도로 복귀</li>
          <li>반복: 끊김 없이 자연스럽게 무한 반복</li>
        </ol>
        <div style={{ fontSize: 15, color: "#888" }}>
          💡 스크롤 인터랙션으로 사용자 참여도를 높이고 동적인 경험을 제공합니다.
        </div>
      </section>

      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 8 }}>응용 예제</h2>
        <ResultBox
          style={{
            height: "800px",
            position: "relative",
            background: `linear-gradient(rgba(20,30,60,0.7), rgba(20,30,60,0.7)), url('/1.avif') center/cover no-repeat`,
            boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
            border: "none",
          }}
        >
          <div style={{ position: "relative", backgroundColor: "red", transform: "rotate(5deg)" }}>
            <ScrollMarqueeText
              texts={["Let's Dive Into This Tutorial", "Take It Easy!", "Don't Worry Let's Code", "Yummy Coding"]}
              baseSpeed={50}
              fontSize="5vw"
              color="#fff"
              style={{
                fontFamily: `'Montserrat', 'Noto Sans KR', 'Pretendard', Arial, sans-serif`,
                fontWeight: 700,
                letterSpacing: "-0.01em",
                textShadow: "0 2px 16px rgba(0,0,0,0.18)",
                backgroundColor: "red",
                padding: "16px",
                borderRadius: "8px",
              }}
            />
          </div>
        </ResultBox>
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
          {`스크롤 시 속도가 빨라지는 무한 반복 텍스트 애니메이션을 만들어줘.
텍스트는 좌에서 우로 계속 이동하고, 사용자가 스크롤하면 이동 속도가 빨라졌다가
스크롤이 멈추면 천천히 원래 속도로 돌아오게 해줘.`}
        </pre>
      </section>

      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 8 }}>코드 예시</h2>
        <div style={{ position: "relative", marginBottom: 8 }}>
          <CopyButton code={scrollMarqueeCode} />
          <SyntaxHighlighter
            language="tsx"
            style={oneDark}
            customStyle={{ borderRadius: 8, fontSize: 14, paddingTop: 32 }}
          >
            {scrollMarqueeCode}
          </SyntaxHighlighter>
        </div>
      </section>
    </div>
  );
}
