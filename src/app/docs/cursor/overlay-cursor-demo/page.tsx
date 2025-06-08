import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { overlayCursorDemoCode } from "./constants/code";
import { ResultBox } from "@/components/common/ResultBox";
import { CopyButton } from "../../components/CopyButton";
import OverlayCursorProvider from "@/components/common/framer-motion/cursor/OverlayCursor";
import Title from "../../components/Title";

export default function OverlayCursorDemoPage() {
  return (
    <div>
      {/* 1. 🎯 인터랙션 제목 */}
      <Title>오버레이 커서 인터랙션 (Overlay Cursor)</Title>
      <hr className="my-4 border-0 border-t border-gray-200" />

      {/* 2. 💻 코드 예시 + 실제 데모 */}
      <section className="mb-8">
        <h2 className="text-xl font-medium mb-2">데모</h2>
        <ResultBox>
          <OverlayCursorProvider>
            <div className="w-full max-w-480 h-100 mx-auto bg-white rounded-lg shadow-md flex items-center justify-center text-2xl font-bold text-pink-500">
              이 영역에 마우스를 올려보세요!
            </div>
          </OverlayCursorProvider>
        </ResultBox>
        <div className="text-sm text-gray-500 mt-2">
          마우스 커서가 영역 위에서 부드럽게 변형되는 인터랙션을 구현할 수 있습니다.
        </div>
      </section>

      {/* 3. ✅ 사용하면 좋은 예시 */}
      <section className="mb-8">
        <h2 className="text-xl font-medium mb-2">사용하면 좋은 예시</h2>
        <ul className="text-base text-white ml-4 list-disc list-inside">
          <li>버튼, 카드, 이미지 등 특정 영역에 마우스 오버 효과를 주고 싶을 때</li>
          <li>커스텀 커서로 브랜드 아이덴티티를 강조하고 싶을 때</li>
          <li>UX를 한층 더 세련되게 만들고 싶을 때</li>
        </ul>
      </section>

      {/* 4. 🧠 아이디어 구체화 (인터랙션 흐름 시나리오) */}
      <section className="mb-8">
        <h2 className="text-xl font-medium mb-2">아이디어 구체화 (인터랙션 흐름 시나리오)</h2>
        <ol className="text-base text-white ml-4 list-decimal list-inside mb-2">
          <li>기본 커서 대신, 영역 위에 올리면 커서가 부드럽게 변형된다.</li>
          <li>커서의 색상, 크기, 투명도 등을 커스텀할 수 있다.</li>
          <li>영역을 벗어나면 자연스럽게 원래 커서로 복귀한다.</li>
        </ol>
        <div className="text-sm text-gray-500">
          💡 오버레이 커서는 <b>몰입감</b>과 <b>브랜드 경험</b>을 동시에 줄 수 있는 트렌디한 인터랙션입니다.
        </div>
      </section>

      {/* 5. 🧑‍💻 바이브 코딩용 프롬프트 예시 */}
      <section className="mb-8">
        <h2 className="text-xl font-medium mb-2">바이브 코딩용 프롬프트 예시</h2>
        <pre className="bg-gray-900 text-yellow-500 rounded-lg p-4 text-sm whitespace-pre-line">
          {`특정 영역에 마우스를 올리면 커서가 부드럽게 변형되는 오버레이 커서 인터랙션을 구현하고 싶어.
GSAP이나 framer-motion, SVG를 활용해도 좋아.
커서의 색상, 크기, 투명도, 그림자 등을 커스텀할 수 있게 해줘.`}
        </pre>
      </section>

      {/* 6. ⚡ 코드 예시 */}
      <section className="mb-8">
        <h2 className="text-xl font-medium mb-2">코드 예시</h2>
        <div className="relative mb-2">
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
