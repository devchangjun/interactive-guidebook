import DemoContainer from "@/components/common/DemoContainer";
import MorphingText from "@/components/common/framer-motion/typography/MorphingText";
import TextClipEffect from "@/components/common/framer-motion/typography/TextClipEffect";
import Title from "../../components/Title";

export default function TypographyAnimationPage() {
  return (
    <div>
      {/* 1. 🎯 인터랙션 제목 */}
      <Title>타이포그래피 플레이그라운드</Title>
      <hr className="my-4 border-0 border-t border-gray-200" />

      {/* 4. 💻 코드 예시 + 실제 데모 */}
      <section className="mb-8">
        <h2 className="text-xl md:text-2xl font-medium mb-4">데모</h2>
        <DemoContainer className="h-48">
          <MorphingText texts={["Hello world!", "hello 2", "javascript"]} className="text-4xl md:text-6xl font-bold" />
        </DemoContainer>

        <DemoContainer>
          <TextClipEffect
            className="text-4xl md:text-6xl font-bold"
            items={[
              { main: "Hello", sub: "Hello" },
              { main: "javascript", sub: "javascript" },
              { main: "typescript", sub: "typescript" },
            ]}
          />
        </DemoContainer>

        <div className="mt-2 text-sm text-gray-500">다양한 타이포그래피 애니메이션을 테스트해보세요.</div>
      </section>

      {/* 2. ✅ 사용하면 좋은 예시 */}
      <section className="mb-8">
        <h2 className="text-xl md:text-2xl font-medium mb-4">사용하면 좋은 예시</h2>
        <ul className="ml-4 text-base list-disc list-inside">
          <li>메인 헤드라인: 사용자 진입 직후 강렬한 인상을 주고 싶을 때</li>
          <li>CTA 위 강조 문구: &quot;3초 안에 결과를 확인하세요&quot;</li>
          <li>제품 슬로건: &quot;AI로 만드는 스마트 포트폴리오&quot;</li>
        </ul>
      </section>

      {/* 3. 🧠 아이디어 구체화 (인터랙션 흐름 시나리오) */}
      <section className="mb-8">
        <h2 className="text-xl md:text-2xl font-medium mb-4">아이디어 구체화 (인터랙션 흐름 시나리오)</h2>
        <ol className="mb-4 ml-4 text-base list-decimal list-inside">
          <li>시작: 화면에는 아무 텍스트도 없다. (혹은 깜빡이는 커서만 있음)</li>
          <li>타이핑: 한 글자씩 타이핑되며 문장이 완성된다. (0.1초 간격)</li>
          <li>유지: 문장이 완성된 후 1~2초간 전체 문장이 유지된다.</li>
          <li>지우기(선택): 글자들이 거꾸로 하나씩 사라진다. (백스페이스 느낌)</li>
          <li>반복: 다음 문장이 새롭게 타이핑되며 사이클 반복</li>
        </ol>
        <div className="text-sm text-gray-500">
          💡 타이핑은 <b>등장 - 유지 - 제거 - 반복</b> 구조로 나눌 수 있고, 각 단계에서 감정(기대→만족→전환)을 줄 수
          있습니다.
        </div>
      </section>
    </div>
  );
}
