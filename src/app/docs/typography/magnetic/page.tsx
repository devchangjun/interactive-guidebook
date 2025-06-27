import DemoContainer from "@/components/common/DemoContainer";
import { MagneticLetters } from "@/components/common/framer-motion/typography/MagneticLetters";
import Title from "../../components/Title";

export default function MagneticLettersPage() {
  return (
    <div>
      {/* 1. 🎯 인터랙션 제목 */}
      <Title>마그네틱 텍스트 애니메이션</Title>
      <hr className="my-4 border-0 border-t border-[#fff]" />

      {/* 4. 💻 코드 예시 + 실제 데모 */}
      <section className="mb-8">
        <h2 className="text-xl md:text-2xl font-medium mb-4">데모</h2>
        <DemoContainer>
          <MagneticLetters text="MAGNETIC TEXT" className="text-4xl md:text-6xl" />
        </DemoContainer>

        <div className="text-sm text-[#888] mt-2">
          각 글자가 마우스 위치에 따라 자석처럼 반응하며 이동합니다. 가까울수록 더 많이 끌려와요.
        </div>
      </section>

      {/* 2. ✅ 사용하면 좋은 예시 */}
      <section className="mb-8">
        <h2 className="text-xl md:text-2xl font-medium mb-4">사용하면 좋은 예시</h2>
        <ul className="text-base text-[#fff] list-disc list-inside">
          <li>히어로 섹션 타이틀: 첫 인상에서 몰입감을 주고 싶을 때</li>
          <li>커서 기반 인터랙션이 많은 웹사이트</li>
          <li>전시/이벤트용 마이크로사이트</li>
        </ul>
      </section>

      {/* 3. 🧠 아이디어 구체화 (인터랙션 흐름 시나리오) */}
      <section className="mb-8">
        <h2 className="text-xl md:text-2xl font-medium mb-4">아이디어 구체화 (인터랙션 흐름 시나리오)</h2>
        <ol className="text-base text-[#fff] list-decimal list-inside mb-4">
          <li>텍스트가 화면에 표시됨</li>
          <li>마우스가 글자 근처로 이동하면 해당 글자가 마우스를 따라 움직임</li>
          <li>가까울수록 더 강하게, 멀어지면 원래 위치로 되돌아옴</li>
          <li>움직임은 자연스럽고, 스프링 기반의 부드러운 반응</li>
        </ol>
        <div className="text-sm text-[#888]">
          💡 스프링 기반의 모션 처리를 통해 물리 기반의 리얼한 느낌을 줄 수 있어요.
        </div>
      </section>
    </div>
  );
}
