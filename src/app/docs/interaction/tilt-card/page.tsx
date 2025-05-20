import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { ResultBox } from "@/components/common/ResultBox";
import { CopyButton } from "../../components/CopyButton";
import TiltCard from "@/components/common/framer-motion/card/TiltCard";
import { tiltCardCode } from "./constants/code";
import Image from "next/image";

export default function TiltCardPage() {
  return (
    <div>
      {/* 1. 🎯 인터랙션 제목 */}
      <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 8 }}>3D Tilt + Parallax 카드 인터랙션</h1>
      <hr
        style={{
          margin: "16px 0 24px 0",
          border: 0,
          borderTop: "1px solid #fff",
        }}
      />

      {/* 4. 💻 코드 예시 + 실제 데모 */}
      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 8 }}>데모</h2>
        <ResultBox>
          <div style={{ display: "flex", gap: 24 }}>
            <TiltCard>
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: 16,
                  overflow: "hidden",
                  background: "#111",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Image
                  src="/1.avif"
                  alt="tech image"
                  width={400}
                  height={200}
                  style={{ width: "100%", height: "60%", objectFit: "cover" }}
                  priority
                  unoptimized
                />
                <div style={{ padding: 16 }}>
                  <h3 style={{ color: "#fff", fontSize: 18, marginBottom: 4 }}>AI 기술 카드</h3>
                  <p style={{ color: "#aaa", fontSize: 14 }}>미래를 바꾸는 인터랙티브 UI</p>
                </div>
              </div>
            </TiltCard>
            <TiltCard>
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: 16,
                  overflow: "hidden",
                  background: "#111",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Image
                  src="/1.avif"
                  alt="tech image"
                  width={400}
                  height={200}
                  style={{ width: "100%", height: "60%", objectFit: "cover" }}
                  priority
                  unoptimized
                />
                <div style={{ padding: 16 }}>
                  <h3 style={{ color: "#fff", fontSize: 18, marginBottom: 4 }}>AI 기술 카드</h3>
                  <p style={{ color: "#aaa", fontSize: 14 }}>미래를 바꾸는 인터랙티브 UI</p>
                </div>
              </div>
            </TiltCard>
            <TiltCard>
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: 16,
                  overflow: "hidden",
                  background: "#111",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Image
                  src="/1.avif"
                  alt="tech image"
                  width={400}
                  height={200}
                  style={{ width: "100%", height: "60%", objectFit: "cover" }}
                  priority
                  unoptimized
                />
                <div style={{ padding: 16 }}>
                  <h3 style={{ color: "#fff", fontSize: 18, marginBottom: 4 }}>AI 기술 카드</h3>
                  <p style={{ color: "#aaa", fontSize: 14 }}>미래를 바꾸는 인터랙티브 UI</p>
                </div>
              </div>
            </TiltCard>
          </div>
        </ResultBox>
        <div style={{ fontSize: 15, color: "#888", marginTop: 8 }}>
          내부 요소는 <code>useParallax(depth)</code>로 개별적으로 깊이 효과를 줄 수 있습니다.
        </div>
      </section>

      {/* 2. ✅ 사용하면 좋은 예시 */}
      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 8 }}>사용하면 좋은 예시</h2>
        <ul style={{ fontSize: 16, color: "#fff", marginLeft: 16 }}>
          <li>포트폴리오 썸네일: 입체감과 시각적 매력 강조</li>
          <li>CTA 카드: 마우스 호버로 시선 집중 유도</li>
          <li>제품 소개 카드: 정보에 깊이와 레이어를 부여</li>
        </ul>
      </section>

      {/* 3. 🧠 아이디어 구체화 (인터랙션 흐름 시나리오) */}
      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 8 }}>아이디어 구체화 (인터랙션 흐름 시나리오)</h2>
        <ol
          style={{
            fontSize: 16,
            color: "#fff",
            marginLeft: 16,
            marginBottom: 8,
          }}
        >
          <li>초기: 정적인 카드가 배치됨</li>
          <li>마우스 이동 시: 커서 위치에 따라 카드가 기울어짐</li>
          <li>
            내부 요소: <code>useParallax(depth)</code>로 각 요소가 다르게 움직임
          </li>
          <li>마우스 이탈 시: 카드 기울기 원위치</li>
          <li>모바일: 효과 비활성화됨 (768px 이하)</li>
        </ol>
        <div style={{ fontSize: 15, color: "#888" }}>
          💡 내부 요소도 <b>깊이감</b>을 줄 수 있어 입체적인 경험을 줄 수 있습니다.
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
          {`마우스를 올렸을 때 카드가 3D로 기울어지고, 내부 텍스트나 이미지가 깊이에 따라 다르게 움직이는 효과를 구현하고 싶어.
모바일에서는 이 효과를 꺼주고, 내부 요소는 useParallax 같은 훅으로 제어 가능하면 좋겠어.
Framer Motion으로 부드럽게 애니메이션 처리하고 싶어.`}
        </pre>
      </section>

      {/* 6. 🧑‍💻 코드 예시 */}
      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 8 }}>코드 예시</h2>
        <div style={{ position: "relative", marginBottom: 8 }}>
          <CopyButton code={tiltCardCode} />
          <SyntaxHighlighter
            language="tsx"
            style={oneDark}
            customStyle={{ borderRadius: 8, fontSize: 14, paddingTop: 32 }}
          >
            {tiltCardCode}
          </SyntaxHighlighter>
        </div>
      </section>
    </div>
  );
}
