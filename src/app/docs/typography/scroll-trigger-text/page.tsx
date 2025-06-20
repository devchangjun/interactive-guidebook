"use client";
import ScrollTriggerText from "@/components/common/framer-motion/typography/ScrollTriggerText";
import { ResultBox } from "@/components/common/ResultBox";
import Title from "../../components/Title";

export default function ScrollTriggerTextPage() {
  return (
    <div>
      {/* 1. 🎯 인터랙션 제목 */}
      <Title>스크롤 트리거 텍스트</Title>
      <hr className="my-4 border-0 border-t border-white" />
      {/* 2. 💻 코드 예시 + 실제 데모 */}
      <section className="mb-8">
        <h2 className="text-white text-xl md:text-2xl font-medium mb-4">데모</h2>
        <ResultBox>
          <ScrollTriggerText
            text="스크롤에 따라 텍스트 색상이 변합니다."
            fromColor="#888"
            toColor="#FFD600"
            duration={0.8}
            className="font-bold"
            fontSize="clamp(2.5rem, 8vw, 8rem)"
          />
        </ResultBox>
        <div className="text-gray-500 text-base font-normal mt-2">
          <b>framer-motion</b>을 활용해 스크롤 위치에 따라 텍스트가 나타나고 사라지는 인터랙션입니다.
        </div>
      </section>

      {/* 3. ✅ 사용하면 좋은 예시 */}
      <section className="mb-8">
        <h2 className="text-white text-xl md:text-2xl font-medium mb-4">사용하면 좋은 예시</h2>
        <ul className="text-white text-base font-normal ml-4 list-disc list-inside">
          <li>섹션 타이틀: 스크롤에 따른 강조 효과</li>
          <li>스토리텔링: 순차적인 메시지 전달</li>
          <li>포트폴리오: 작품 소개 시 주목도 향상</li>
        </ul>
      </section>
      {/* 4. 🧠 아이디어 구체화 (인터랙션 흐름 시나리오) */}
      <section className="mb-8">
        <h2 className="text-white text-xl md:text-2xl font-medium mb-4">아이디어 구체화 (인터랙션 흐름 시나리오)</h2>
        <ol className="text-white text-base font-normal ml-4 mb-4 list-decimal list-inside">
          <li>초기: 텍스트가 투명하고 작은 상태</li>
          <li>스크롤 중간: 텍스트가 완전히 보이고 크기가 최대</li>
          <li>스크롤 끝: 다시 투명해지고 작아짐</li>
          <li>좌우 이동으로 다이나믹한 효과 추가</li>
        </ol>
        <div className="text-white text-base font-normal ml-4 mb-4">
          💡 useScroll과 useTransform을 활용해 스크롤 위치에 따른 다양한 애니메이션을 적용할 수 있습니다.
        </div>
      </section>
    </div>
  );
}
