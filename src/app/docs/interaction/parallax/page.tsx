"use client";
import ParallaxImage from "@/components/common/framer-motion/ParallaxImage";
import { ResultBox } from "@/components/common/ResultBox";
import Title from "../../components/Title";

export default function ParallaxPage() {
  return (
    <div>
      {/* 1. 🎯 인터랙션 제목 */}
      <Title>스크롤 패럴랙스 이미지</Title>
      <hr className="my-4 border-t border-gray-700" />
      {/* 2. 💻 코드 예시 + 실제 데모 */}
      <section className="mb-8">
        <h2 className="text-xl md:text-2xl font-medium mb-4">데모</h2>
        <ResultBox>
          <ParallaxImage />
        </ResultBox>
        <div className="text-sm text-gray-400 mt-2">
          <b>framer-motion</b>을 활용해 스크롤에 따라 배경 이미지가 부드럽게 패럴랙스 이동하는 인터랙션입니다.
        </div>
      </section>
      {/* 3. ✅ 사용하면 좋은 예시 */}
      <section className="mb-8">
        <h2 className="text-xl md:text-2xl font-medium mb-4">사용하면 좋은 예시</h2>
        <ul className="text-base text-[#fff] ml-4 list-disc list-inside">
          <li>랜딩/히어로 섹션: 깊이감 있는 배경 연출</li>
          <li>스크롤 기반 스토리텔링: 몰입감 있는 전환 효과</li>
          <li>포트폴리오/소개 페이지: 시각적 집중 유도</li>
        </ul>
      </section>
      {/* 4. 🧠 아이디어 구체화 (인터랙션 흐름 시나리오) */}
      <section className="mb-8">
        <h2 className="text-xl md:text-2xl font-medium mb-4">아이디어 구체화 (인터랙션 흐름 시나리오)</h2>
        <ol className="text-base text-[#fff] ml-4 mb-2 list-decimal list-inside">
          <li>페이지 진입: 배경 이미지가 기본 위치에 노출</li>
          <li>스크롤 내릴수록 배경이 자연스럽게 위로 이동</li>
          <li>스크롤을 올리면 다시 아래로 이동</li>
          <li>텍스트/콘텐츠는 배경 위에 자연스럽게 노출</li>
        </ol>
        <div className="text-sm text-gray-400">
          💡 배경 이미지의 y값을 스크롤 위치에 따라 부드럽게 조절해 깊이감을 높일 수 있습니다.
        </div>
      </section>
    </div>
  );
}
