import DemoContainer from "@/components/common/DemoContainer";
import MorphingText from "@/components/common/framer-motion/typography/MorphingText";
import Title from "../../components/Title";

export default function MorphingTextPage() {
  return (
    <div>
      {/* 1. 🎯 인터랙션 제목 */}
      <Title>텍스트 Morphing 애니메이션 (MorphingText Effect)</Title>
      <hr className="my-4 border-0 border-t border-[#eee]" />

      {/* 4. 💻 코드 예시 + 실제 데모 */}
      <section className="mb-8">
        <h2 className="text-xl md:text-2xl font-medium mb-4">데모</h2>
        <DemoContainer className="h-48">
          <MorphingText
            texts={["디자인 없이도", "차별화된 웹을", "누구나 쉽게"]}
            morphTime={1}
            cooldownTime={0.5}
            color="#003b9a"
            className="text-4xl sm:text-6xl md:text-7xl font-bold"
          />
        </DemoContainer>
        <div className="text-sm text-[#888] mt-2">
          SVG 필터와 blur 효과를 활용해 자연스럽게 텍스트가 변환되는 인터랙션입니다.
        </div>
      </section>

      {/* 2. ✅ 사용하면 좋은 예시 */}
      <section className="mb-8">
        <h2 className="text-xl md:text-2xl font-medium mb-4">사용하면 좋은 예시</h2>
        <ul className="text-base text-[#fff] list-disc list-inside">
          <li>메인 슬로건: 브랜드 메시지를 임팩트 있게 전달할 때</li>
          <li>Hero 영역: 여러 키워드를 순차적으로 보여주고 싶을 때</li>
          <li>CTA 위 강조 문구: &quot;지금 바로 시작하세요&quot; 등 반복 강조</li>
        </ul>
      </section>

      {/* 3. 🧠 아이디어 구체화 (인터랙션 흐름 시나리오) */}
      <section className="mb-8">
        <h2 className="text-xl md:text-2xl font-medium mb-4">아이디어 구체화 (인터랙션 흐름 시나리오)</h2>
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
    </div>
  );
}
