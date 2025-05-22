"use client";
import { AnimatedTextListWithCursor } from "@/components/common/framer-motion/AniatedTextListWidthCursor";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { CopyButton } from "../../components/CopyButton";
import { animatedTextListCode } from "./constants/code";
import { ResultBox } from "@/components/common/ResultBox";

export default function AnimatedTextListPage() {
  return (
    <div>
      {/* 1. 🎯 인터랙션 제목 */}
      <h1 className="text-2xl font-bold mb-2">애니메이티드 리스트 (Animated Text List With Cursor)</h1>
      <hr className="my-4 border-0 border-t border-white" />

      {/* 2. 💻 코드 예시 + 실제 데모 */}
      <section className="mb-8">
        <h2 className="text-white text-2xl font-medium mb-4">데모</h2>
        <ResultBox>
          <AnimatedTextListWithCursor />
        </ResultBox>
        <div className="text-sm text-gray-500 mt-2">
          <b>framer-motion</b>을 활용해 리스트 hover 시 컬러/애니메이션, 마우스 이동에 따라 skew 효과, 커스텀 커서
          이미지를 구현합니다.
        </div>
      </section>

      {/* 3. ✅ 사용하면 좋은 예시 */}
      <section className="mb-8">
        <h2 className="text-xl font-medium mb-2">사용하면 좋은 예시</h2>
        <ul className="text-base text-white ml-4 list-disc list-inside">
          <li>포트폴리오/랜딩: 도시, 카테고리, 서비스 등 리스트 강조</li>
          <li>메뉴/네비게이션: 마우스 hover 시 시각적 피드백</li>
          <li>갤러리/카드형 리스트: 썸네일과 텍스트를 함께 보여줄 때</li>
        </ul>
      </section>

      {/* 4. 🧠 아이디어 구체화 (인터랙션 흐름 시나리오) */}
      <section className="mb-8">
        <h2 className="text-xl font-medium mb-2">아이디어 구체화 (인터랙션 흐름 시나리오)</h2>
        <ol className="text-base text-white ml-4 list-decimal list-inside mb-2">
          <li>리스트 진입: 기본 텍스트(흰색)로 노출</li>
          <li>마우스 hover: 해당 텍스트가 컬러로 바뀌며 위로 올라옴</li>
          <li>동시에 커서 근처에 이미지가 따라다님</li>
          <li>마우스 이동 속도에 따라 이미지 skew 효과</li>
          <li>hover 해제 시 원상복귀</li>
        </ol>
        <div className="text-sm text-gray-500">
          💡 리스트 hover와 커서 인터랙션을 결합해 시각적 몰입감을 높일 수 있습니다.
        </div>
      </section>

      {/* 5. 🧑‍💻 바이브 코딩용 프롬프트 예시 */}
      <section className="mb-8">
        <h2 className="text-xl font-medium mb-2">바이브 코딩용 프롬프트 예시</h2>
        <pre className="bg-gray-900 text-yellow-500 rounded-lg p-4 text-sm whitespace-pre-line">
          {`텍스트에 마우스를 올리면 텍스트가 밑에서 위로 올라가며, 동시에 커서 근처에 이미지가 따라다니는 효과를 만들고 싶어.
framer-motion으로 자연스러운 애니메이션과 skew 효과도 추가해줘.
리스트별로 커서 이미지가 다르게 나오면 더 좋아!`}
        </pre>
      </section>

      {/* 6. ⚡코드 예시 */}
      <section className="mb-8">
        <h2 className="text-xl font-medium mb-2">코드 예시</h2>
        <div className="relative mb-2">
          <CopyButton code={animatedTextListCode} />
          <SyntaxHighlighter
            language="tsx"
            style={oneDark}
            customStyle={{ borderRadius: 8, fontSize: 14, paddingTop: 32 }}
          >
            {animatedTextListCode}
          </SyntaxHighlighter>
        </div>
      </section>
    </div>
  );
}
