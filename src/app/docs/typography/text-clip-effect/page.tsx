"use client";
import { ResultBox } from "@/components/common/ResultBox";
import TextClipEffectItem from "@/components/common/framer-motion/typography/TextClipEffectItem";
import Title from "../../components/Title";

export default function TextClipEffectPage() {
  return (
    <div>
      {/* 1. 🎯 인터랙션 제목 */}
      <Title>텍스트 클립 이펙트</Title>
      <hr className="my-4 border-0 border-t border-white" />

      {/* 2. 💻 코드 예시 + 실제 데모 */}
      <section className="mb-8">
        <h2 className="text-white text-xl md:text-2xl font-medium mb-4">데모</h2>
        <ResultBox className="mb-4 p-8 md:p-16">
          <div className="flex flex-col gap-8 font-bold">
            {[
              { main: "Hello", sub: "Hello" },
              { main: "javascript", sub: "javascript" },
              { main: "typescript", sub: "typescript" },
            ].map((item) => (
              <TextClipEffectItem key={item.main} {...item} className="text-5xl md:text-8xl" />
            ))}
          </div>
        </ResultBox>
        <div className="text-gray-400 text-base font-normal mt-2">
          <b>gsap</b>과 <b>ScrollTrigger</b>를 활용해 스크롤 위치에 따라 텍스트 배경이 채워지는 인터랙션입니다.
        </div>
      </section>

      {/* 3. ✅ 사용하면 좋은 예시 */}
      <section className="mb-8">
        <h2 className="text-white text-xl md:text-2xl font-medium mb-4">사용하면 좋은 예시</h2>
        <ul className="text-white text-base font-normal ml-4 list-disc list-inside">
          <li>메인 타이틀: 스크롤에 따라 강조 효과</li>
          <li>섹션 헤드라인: 시각적 임팩트 부여</li>
          <li>포트폴리오/랜딩: 브랜드 컬러 강조</li>
        </ul>
      </section>

      {/* 4. 🧠 아이디어 구체화 (인터랙션 흐름 시나리오) */}
      <section className="mb-8">
        <h2 className="text-white text-xl md:text-2xl font-medium mb-4">아이디어 구체화 (인터랙션 흐름 시나리오)</h2>
        <ol className="text-white text-base font-normal ml-4 mb-4 list-decimal list-inside">
          <li>초기: 텍스트 배경이 비어 있음 (background-size: 0%)</li>
          <li>스크롤: 텍스트 배경이 점점 채워짐 (background-size: 100%)</li>
          <li>완료: 텍스트가 완전히 채워진 상태</li>
        </ol>
        <div className="text-white text-base font-normal ml-4">
          💡 gsap의 <b>ScrollTrigger</b>로 스크롤 위치에 따라 배경 그라데이션이 자연스럽게 채워집니다.
        </div>
      </section>
    </div>
  );
}
