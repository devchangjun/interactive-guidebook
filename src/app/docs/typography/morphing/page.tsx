import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { ResultBox } from "@/components/common/ResultBox";
import { CopyButton } from "../../components/CopyButton";
import MorphingText from "@/components/common/framer-motion/typography/MorphingText";
import Title from "../../components/Title";

const morphingTextCode = `import MorphingText from '@/components/common/framer-motion/typography/MorphingText';

<MorphingText
  texts={["디자인 없이도", "차별화된 웹을", "누구나 쉽게"]}
  morphTime={1}
  cooldownTime={0.5}
  color="#003b9a"
  className="text-4xl sm:text-6xl md:text-8xl font-bold w-full text-center"
/>
`;

export default function MorphingTextPage() {
  return (
    <div>
      {/* 1. 🎯 인터랙션 제목 */}
      <Title>텍스트 Morphing 애니메이션 (MorphingText Effect)</Title>
      <hr className="my-4 border-0 border-t border-[#eee]" />

      {/* 4. 💻 코드 예시 + 실제 데모 */}
      <section className="mb-8">
        <h2 className="text-xl font-medium mb-4">데모</h2>
        <ResultBox>
          <MorphingText
            texts={["디자인 없이도", "차별화된 웹을", "누구나 쉽게"]}
            morphTime={1}
            cooldownTime={0.5}
            color="#003b9a"
            className="text-4xl sm:text-6xl md:text-8xl font-bold w-full mb-24 mt-4 text-center flex justify-center items-center"
          />
        </ResultBox>
        <div className="text-sm text-[#888] mt-2">
          SVG 필터와 blur 효과를 활용해 자연스럽게 텍스트가 변환되는 인터랙션입니다.
        </div>
      </section>

      {/* 2. ✅ 사용하면 좋은 예시 */}
      <section className="mb-8">
        <h2 className="text-xl font-medium mb-4">사용하면 좋은 예시</h2>
        <ul className="text-base text-[#fff] list-disc list-inside">
          <li>메인 슬로건: 브랜드 메시지를 임팩트 있게 전달할 때</li>
          <li>Hero 영역: 여러 키워드를 순차적으로 보여주고 싶을 때</li>
          <li>CTA 위 강조 문구: &quot;지금 바로 시작하세요&quot; 등 반복 강조</li>
        </ul>
      </section>

      {/* 3. 🧠 아이디어 구체화 (인터랙션 흐름 시나리오) */}
      <section className="mb-8">
        <h2 className="text-xl font-medium mb-4">아이디어 구체화 (인터랙션 흐름 시나리오)</h2>
        <ol className="text-base text-[#fff] list-decimal list-inside">
          <li>시작: 첫 번째 텍스트가 화면에 나타남</li>
          <li>변환: 부드럽게 다음 텍스트로 morphing</li>
          <li>유지: 변환된 텍스트가 잠시 유지됨</li>
          <li>반복: 다음 텍스트로 순차적으로 변환</li>
        </ol>
        <div className="text-sm text-[#888]">
          💡 Morphing 효과는 <b>부드러운 전환</b>과 <b>강렬한 인상</b>을 동시에 줄 수 있습니다.
        </div>
      </section>

      {/* 5. 🧑‍💻 바이브 코딩용 프롬프트 예시 */}
      <section className="mb-8">
        <h2 className="text-xl font-medium mb-4">바이브 코딩용 프롬프트 예시</h2>
        <div className="overflow-x-auto rounded-lg bg-[#18181b]">
          <pre className="p-4 text-sm text-[#FFD600] whitespace-pre-line">
            {`여러 문장이 자연스럽게 변환(morphing)되는 텍스트 효과를 만들고 싶어.
SVG 필터나 blur를 활용해서 부드럽게 바뀌는 느낌이면 좋겠어.
문장은 '디자인 없이도', '차별화된 웹을', '누구나 쉽게' 이런 식으로 반복되게 해줘.`}
          </pre>
        </div>
      </section>
      <section className="mb-8">
        <h2 className="text-xl font-medium mb-4">코드 예시</h2>
        <div className="relative mb-4 overflow-hidden rounded-lg">
          <CopyButton code={morphingTextCode} />
          <div className="overflow-x-auto">
            <SyntaxHighlighter
              language="tsx"
              style={oneDark}
              customStyle={{ borderRadius: 0, fontSize: 14, paddingTop: 32, margin: 0 }}
            >
              {morphingTextCode}
            </SyntaxHighlighter>
          </div>
        </div>
      </section>
    </div>
  );
}
