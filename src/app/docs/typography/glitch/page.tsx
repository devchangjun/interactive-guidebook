import DemoContainer from "@/components/common/DemoContainer";
import GlitchText from "@/components/common/framer-motion/typography/glitch-text/GlitchText";
import Title from "../../components/Title";

export default function GlitchTextPage() {
  return (
    <div>
      {/* 1. 🎯 인터랙션 제목 */}
      <Title>글리치 텍스트 애니메이션 (Glitch Effect)</Title>
      <hr className="my-4 border-t border-gray-200" />

      {/* 4. 💻 코드 예시 + 실제 데모 */}
      <section className="mb-8">
        <h2 className="text-xl md:text-2xl font-medium mb-4">데모</h2>

        {/* 자동 재생 데모 */}
        <div className="mb-6">
          <h3 className="text-lg font-medium mb-2">자동 재생</h3>
          <DemoContainer>
            <GlitchText
              className="text-4xl md:text-6xl"
              enableOnHover={false}
              speed={0.5}
              refreshDelay={800}
              glitchColors={["#ff0040", "#00ffff", "#ff0080", "#0040ff"]}
            >
              GLITCH EFFECT
            </GlitchText>
          </DemoContainer>
        </div>

        {/* 호버 데모 */}
        <div className="mb-6">
          <h3 className="text-lg font-medium mb-2">호버 시 실행 (마우스 올려보세요)</h3>
          <DemoContainer>
            <GlitchText
              className="text-4xl md:text-6xl"
              enableOnHover={true}
              speed={0.3}
              refreshDelay={100}
              glitchColors={["#ffff00", "#ff00ff", "#00ffff", "#ff8000"]}
            >
              HOVER ME
            </GlitchText>
          </DemoContainer>
        </div>

        {/* 빠른 글리치 데모 */}
        <div className="mb-6">
          <h3 className="text-lg font-medium mb-2">빠른 글리치</h3>
          <DemoContainer>
            <GlitchText
              className="text-2xl md:text-4xl"
              enableOnHover={false}
              speed={0.2}
              refreshDelay={200}
              glitchColors={["#ff3232", "#3232ff", "#ff32ff", "#32ffff"]}
            >
              FAST GLITCH
            </GlitchText>
          </DemoContainer>
        </div>

        <div className="text-sm text-gray-400 mt-2">
          <code>framer-motion</code>을 활용해 랜덤 clip-path와 색상으로 글리치 효과를 구현합니다.
        </div>
      </section>

      {/* 2. ✅ 사용하면 좋은 예시 */}
      <section className="mb-8">
        <h2 className="text-xl md:text-2xl font-medium mb-4">사용하면 좋은 예시</h2>
        <ul className="text-base text-white list-disc list-inside">
          <li>메인 헤드라인: 강렬한 인상을 주고 싶을 때</li>
          <li>404/에러 페이지: 디지털 오류 느낌을 주고 싶을 때</li>
          <li>테크/게임/해킹 컨셉: 미래지향적 분위기를 연출하고 싶을 때</li>
        </ul>
      </section>

      {/* 3. 🧠 아이디어 구체화 (인터랙션 흐름 시나리오) */}
      <section className="mb-8">
        <h2 className="text-xl md:text-2xl font-medium mb-4">아이디어 구체화 (인터랙션 흐름 시나리오)</h2>
        <ol className="text-base text-white list-decimal list-inside">
          <li>초기: 텍스트가 정상적으로 보임</li>
          <li>글리치: 텍스트 일부가 랜덤하게 흔들리거나 색이 번짐</li>
          <li>반복: 효과가 주기적으로 반복되어 디지털 오류 느낌을 연출</li>
        </ol>
        <div className="text-sm text-gray-400 mt-2">
          💡 <b>clip-path, 색상, 위치</b>를 랜덤하게 바꿔주면 다양한 글리치 효과를 만들 수 있습니다.
        </div>
      </section>

      {/* 5. 🧑‍💻 바이브 코딩용 프롬프트 예시 */}
      <section className="mb-8">
        <h2 className="text-xl md:text-2xl font-medium mb-4">바이브 코딩용 프롬프트 예시</h2>
        <div className="overflow-x-auto rounded-lg bg-[#18181b]">
          <pre className="p-4 text-sm text-[#FFD600] whitespace-pre-line">
            텍스트에 디지털 오류(Glitch) 느낌의 애니메이션을 주고 싶어. 색상, 위치, clip-path 등을 랜덤하게 바꿔서
            미래지향적이고 임팩트 있게 만들어줘. framer-motion이나 CSS로 구현해줘.
          </pre>
        </div>
      </section>
    </div>
  );
}
