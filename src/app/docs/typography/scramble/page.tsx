"use client";
import DemoContainer from "@/components/common/DemoContainer";
import ScrambleText from "@/components/common/framer-motion/typography/TextScramble";
import Title from "../../components/Title";

export default function ScrambleTextPage() {
  return (
    <div>
      <Title>스크램블 텍스트 애니메이션</Title>
      <hr className="my-4 border-t border-gray-700" />

      <section className="w-full mb-8">
        <h2 className="text-xl md:text-2xl font-medium mb-4">데모</h2>
        <DemoContainer>
          <ScrambleText
            className="text-3xl md:text-5xl"
            text="스크램블 효과 예시입니다!"
            speed={100}
            delay={100}
            loop={true}
          />
        </DemoContainer>
        <div className="mt-2 text-sm text-gray-500">
          gsap 없이 <code>setTimeout</code>만으로도 구현 가능하지만, gsap의 delayedCall을 쓰면 타이밍 제어가 더 쉽고
          부드럽게 연출할 수 있어요.
        </div>
      </section>

      {/* 3. ✅ 사용하면 좋은 예시 */}
      <section className="mb-8">
        <h2 className="text-xl md:text-2xl font-medium mb-4">사용하면 좋은 예시</h2>
        <ul className="list-inside list-disc text-base text-[#fff]">
          <li>로딩 중 메시지: 데이터 로딩, 인증 등 잠깐의 대기 상황에서 시선을 끌고 싶을 때</li>
          <li>메인 슬로건/헤드라인: 혁신적이거나 미래지향적인 분위기를 주고 싶을 때</li>
          <li>게임/테크/해킹 컨셉: 텍스트가 암호처럼 등장하는 느낌을 주고 싶을 때</li>
        </ul>
      </section>

      {/* 4. 🧠 아이디어 구체화 (인터랙션 흐름 시나리오) */}
      <section className="mb-8">
        <h2 className="text-xl md:text-2xl font-medium mb-4">아이디어 구체화 (인터랙션 흐름 시나리오)</h2>
        <ol className="mb-2 ml-4 list-decimal text-base text-[#fff]">
          <li>
            <b>시작(Resting)</b>: 초기 텍스트가 표시되거나, 아무것도 없는 상태
          </li>
          <li>
            <b>활성화(Active)</b>: 마우스 호버 또는 스크롤 진입 시 스크램블 시작
          </li>
          <li>
            <b>진행(Animating)</b>: 문자열이 빠르게 랜덤 문자로 바뀌다가, 점차 원래 텍스트로 복원
          </li>
          <li>
            <b>완료(Resolved)</b>: 원래 텍스트가 완전히 드러나고 애니메이션 종료
          </li>
        </ol>
        <div className="mt-2 text-sm text-gray-500">
          💡 그냥 랜덤 텍스트만 보여주는 것보다, <b>원래 텍스트로 점진적으로 복원</b>되는 과정이 더 흥미롭고 안정감을
          줍니다.
        </div>
      </section>
    </div>
  );
}
