"use client";

import StickyShrinkSection from "@/components/common/framer-motion/StickyShrinkSection";
import Title from "@/app/docs/components/Title";
import { Fragment } from "react";

const sections = [
  {
    title: "기본 Sticky Shrink 섹션",
    component: (
      <StickyShrinkSection>
        <div className="text-center text-white">
          <h2 className="text-2xl font-bold md:text-3xl">기본 예제</h2>
          <p className="text-sm md:text-base">이 섹션은 스크롤에 따라 축소되고 투명해집니다.</p>
        </div>
      </StickyShrinkSection>
    ),
  },
  {
    title: "배경 이미지와 함께 사용",
    component: (
      <StickyShrinkSection backgroundImage="/2.avif" finalScale={0.9} finalOpacity={0.8} scrollRange={250}>
        <div className="rounded-lg bg-black/50 p-8 text-center text-white backdrop-blur-sm">
          <h2 className="text-2xl font-bold md:text-3xl">배경 이미지 예제</h2>
          <p className="text-sm md:text-base">배경 이미지가 있는 상태에서도 잘 작동합니다.</p>
        </div>
      </StickyShrinkSection>
    ),
  },
  {
    title: "다양한 옵션 조합",
    component: (
      <StickyShrinkSection finalScale={0.5} finalOpacity={0.2} backgroundColor="#4c0519" scrollRange={300}>
        <div className="text-center text-white">
          <h2 className="text-2xl font-bold md:text-3xl">커스텀 옵션 예제</h2>
          <p className="text-sm md:text-base">배경색, 최종 크기, 투명도, 스크롤 범위를 직접 설정했습니다.</p>
        </div>
      </StickyShrinkSection>
    ),
  },
];

export default function StickyShrinkSectionPage() {
  return (
    <main>
      <div className="p-8">
        <Title>Sticky Shrink Section</Title>
        <hr className="my-4 border-t border-gray-700" />
        <p className="mt-4 text-base md:text-lg text-neutral-400">
          스크롤하면서 콘텐츠가 자연스럽게 축소되는 효과를 주는 컴포넌트입니다. 다양한 옵션을 통해 애니메이션을
          커스터마이징할 수 있습니다.
        </p>
      </div>

      <div className="h-screen bg-neutral-800 text-white flex items-center justify-center">
        <h1 className="text-3xl font-bold animate-pulse md:text-4xl">아래로 스크롤하세요</h1>
      </div>
      {sections.map((section, index) => (
        <Fragment key={index}>
          <div className="py-20 text-center">
            <h2 className="text-2xl md:text-3xl font-bold">{section.title}</h2>
          </div>
          {section.component}
        </Fragment>
      ))}
      <div className="h-screen bg-neutral-800 text-white flex items-center justify-center">
        <h1 className="text-3xl font-bold md:text-4xl">테스트 종료</h1>
      </div>
    </main>
  );
}
