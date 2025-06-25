import { ResultBox } from "@/components/common/ResultBox";
import MagneticTargetBox from "@/components/common/framer-motion/cursor/MagneticTargetBox";
import MagneticCursor from "@/components/common/framer-motion/cursor/MagneticCursor";
import Title from "../../components/Title";
import TiltCard from "@/components/common/effects/TiltCard";
import Image from "next/image";

export default function MagneticCursorPage() {
  return (
    <div>
      {/* 1. 🎯 인터랙션 제목 */}
      <Title>마그네틱 커서 인터랙션 (Magnetic Cursor)</Title>
      <hr className="my-4 border-t border-gray-700" />

      {/* 4. 💻 코드 예시 + 실제 데모 */}
      <section className="mb-8">
        <h2 className="text-xl md:text-2xl font-medium mb-4">데모</h2>
        <ResultBox>
          <div className="flex gap-4 flex-wrap p-4 justify-center">
            <MagneticTargetBox className="md:text-3xl">
              <TiltCard>
                <div className="w-full max-w-xs h-full rounded-lg overflow-hidden bg-gray-900 flex flex-col">
                  <Image
                    src="/1.avif"
                    alt="tech image"
                    width={400}
                    height={200}
                    className="w-full h-60 object-cover"
                    priority
                    unoptimized
                  />
                  <div className="p-4">
                    <h3 className="text-white text-lg md:text-xl mb-2">프로필 1</h3>
                    <p className="text-gray-400 text-sm md:text-base">상세 설명 텍스트 1</p>
                  </div>
                </div>
              </TiltCard>
            </MagneticTargetBox>
            <MagneticTargetBox className="md:text-3xl">
              <TiltCard>
                <div className="w-full max-w-xs h-full rounded-lg overflow-hidden bg-gray-900 flex flex-col">
                  <Image
                    src="/1.avif"
                    alt="tech image"
                    width={400}
                    height={200}
                    className="w-full h-60 object-cover"
                    priority
                    unoptimized
                  />
                  <div className="p-4">
                    <h3 className="text-white text-lg md:text-xl mb-2">프로필 1</h3>
                    <p className="text-gray-400 text-sm md:text-base">상세 설명 텍스트 1</p>
                  </div>
                </div>
              </TiltCard>
            </MagneticTargetBox>
            <MagneticTargetBox className="md:text-3xl">
              <TiltCard>
                <div className="w-full max-w-xs h-full rounded-lg overflow-hidden bg-gray-900 flex flex-col">
                  <Image
                    src="/1.avif"
                    alt="tech image"
                    width={400}
                    height={200}
                    className="w-full h-60 object-cover"
                    priority
                    unoptimized
                  />
                  <div className="p-4">
                    <h3 className="text-white text-lg md:text-xl mb-2">프로필 1</h3>
                    <p className="text-gray-400 text-sm md:text-base">상세 설명 텍스트 1</p>
                  </div>
                </div>
              </TiltCard>
            </MagneticTargetBox>
          </div>
          <MagneticCursor />
        </ResultBox>

        <div className="text-sm text-gray-400 mt-2">
          마우스를 박스 위로 가져가면 커서가 자연스럽게 박스를 감싸는 효과가 적용됩니다.
        </div>
      </section>

      {/* 2. ✅ 사용하면 좋은 예시 */}
      <section className="mb-8">
        <h2 className="text-xl md:text-2xl font-medium mb-4">사용하면 좋은 예시</h2>
        <ul className="text-base text-white ml-4 list-disc list-inside">
          <li>버튼이나 카드 등 클릭 가능한 요소를 강조하고 싶을 때</li>
          <li>포트폴리오나 쇼케이스 웹사이트에서 인터랙티브한 경험을 주고 싶을 때</li>
          <li>사용자의 주목을 끌고 싶은 중요한 UI 요소가 있을 때</li>
          <li>전체적인 웹사이트의 품격과 완성도를 높이고 싶을 때</li>
        </ul>
      </section>

      {/* 3. 🧠 아이디어 구체화 (인터랙션 흐름 시나리오) */}
      <section className="mb-8">
        <h2 className="text-xl md:text-2xl font-medium mb-4">아이디어 구체화 (인터랙션 흐름 시나리오)</h2>
        <ol className="text-base text-white ml-4 list-decimal list-inside mb-2">
          <li>기본 상태: 커서는 네 귀퉁이가 있는 사각형 테두리와 중앙 원으로 구성</li>
          <li>회전 애니메이션: 커서가 천천히 무한 회전하며 생동감을 줌</li>
          <li>마그네틱 박스 진입: 커서가 박스의 크기에 맞춰 자연스럽게 확대</li>
          <li>박스 위치 추적: 커서가 박스의 중앙을 기준으로 자연스럽게 이동</li>
          <li>박스 이탈: 커서가 원래 크기로 돌아가고 회전 애니메이션 재개</li>
        </ol>
        <div className="text-sm text-gray-400">
          💡 커서는 <b>기본 - 진입 - 추적 - 이탈 - 복귀</b> 단계로 나눌 수 있으며, 각 단계에서 자연스러운 전환이
          중요합니다.
        </div>
      </section>

      {/* 6. 💡 구현 시 주의사항 */}
      <section className="mb-8">
        <h2 className="text-xl md:text-2xl font-medium mb-4">❗구현 시 주의사항</h2>
        <ul className="text-base text-white ml-4 list-disc list-inside">
          <li>모바일 환경에서는 커서 효과를 비활성화 (터치 기반이므로)</li>
          <li>성능 최적화를 위해 framer-motion의 useMotionValue, useSpring 활용</li>
          <li>박스 크기/위치 변경 시 자연스러운 전환을 위한 트랜지션 설정</li>
          <li>커서의 z-index를 높게 설정하여 항상 최상단에 표시</li>
        </ul>
      </section>

      {/* 7. 🎨 커스터마이징 옵션 */}
      <section className="mb-8">
        <h2 className="text-xl md:text-2xl font-medium mb-4">커스터마이징 옵션</h2>
        <ul className="text-base text-white ml-4 list-disc list-inside">
          <li>커서 크기: CURSOR_SIZE 상수 조정 (기본 40px)</li>
          <li>테두리 색상: stroke 속성 변경 (기본 #fff)</li>
          <li>회전 속성: duration 값 조정 (기본 1.2초)</li>
          <li>마그네틱 강도: 박스와의 간격(gap) 조정 (기본 16px)</li>
          <li>스프링 효과: stiffness, damping 값 조정으로 움직임 커스텀</li>
        </ul>
      </section>
    </div>
  );
}
