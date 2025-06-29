"use client";

import StickyShrinkSection from "@/components/common/framer-motion/StickyShrinkSection";
import Title from "@/app/docs/components/Title";

export default function StickyShrinkSectionPage() {
  return (
    <main>
      {/* 인트로 섹션 */}
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex flex-col justify-center items-center text-white p-8">
        <Title>Sticky Shrink Section</Title>
        <hr className="my-8 border-t border-gray-700 w-64" />
        <p className="text-center text-lg md:text-xl text-neutral-300 max-w-2xl leading-relaxed mb-8">
          스크롤하면서 콘텐츠가 자연스럽게 축소되고 투명해지는 효과를 경험해보세요.
        </p>
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      {/* 첫 번째 섹션 - 그라디언트 배경 */}
      <StickyShrinkSection
        finalScale={0.6}
        finalOpacity={0.2}
        backgroundColor="bg-gradient-to-br from-blue-600 to-purple-700"
        scrollRange={120}
      >
        <div className="text-center text-white">
          <h2 className="text-5xl md:text-7xl font-bold mb-6">첫 번째 섹션</h2>
          <p className="text-xl md:text-2xl text-blue-100">부드러운 그라디언트와 함께 축소됩니다</p>
        </div>
      </StickyShrinkSection>

      {/* 두 번째 섹션 - 이미지 배경 */}
      <StickyShrinkSection finalScale={0.45} finalOpacity={0.25} backgroundImage="/1.avif" scrollRange={150}>
        <div className="text-center text-white bg-black bg-opacity-50 p-8 rounded-xl backdrop-blur-sm">
          <h2 className="text-4xl md:text-6xl font-black mb-4">이미지 배경</h2>
          <p className="text-lg md:text-xl">배경 이미지와 함께 스케일이 변화합니다</p>
        </div>
      </StickyShrinkSection>

      {/* 세 번째 섹션 - 단색 배경 */}
      <StickyShrinkSection finalScale={0.4} finalOpacity={0.15} backgroundColor="bg-emerald-600" scrollRange={100}>
        <div className="text-center text-white">
          <h2 className="text-6xl md:text-8xl font-bold mb-6">Emerald</h2>
          <p className="text-xl md:text-2xl text-emerald-100">강렬한 색상으로 시선을 사로잡습니다</p>
        </div>
      </StickyShrinkSection>

      {/* 네 번째 섹션 - 다른 이미지 배경 */}
      <StickyShrinkSection finalScale={0.5} finalOpacity={0.4} backgroundImage="/2.avif" scrollRange={180}>
        <div className="text-center">
          <div className="bg-white bg-opacity-90 p-8 rounded-2xl backdrop-blur-md">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">깔끔한 디자인</h2>
            <p className="text-lg md:text-xl text-gray-600">반투명 배경으로 텍스트 가독성을 높였습니다</p>
          </div>
        </div>
      </StickyShrinkSection>

      {/* 다섯 번째 섹션 - 핑크 그라디언트 */}
      <StickyShrinkSection
        finalScale={0.35}
        finalOpacity={0.2}
        backgroundColor="bg-gradient-to-br from-pink-500 to-orange-400"
        scrollRange={130}
      >
        <div className="text-center text-white">
          <h2 className="text-5xl md:text-7xl font-black mb-6">따뜻한 색감</h2>
          <p className="text-xl md:text-2xl text-pink-100">핑크에서 오렌지로 이어지는 그라디언트</p>
        </div>
      </StickyShrinkSection>

      {/* 여섯 번째 섹션 - 마지막 이미지 */}
      <StickyShrinkSection finalScale={0.55} finalOpacity={0.3} backgroundImage="/3.avif" scrollRange={160}>
        <div className="text-center text-white">
          <div className="bg-gradient-to-r from-purple-900 to-blue-900 bg-opacity-80 p-8 rounded-3xl backdrop-blur-lg border border-white border-opacity-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">마지막 섹션</h2>
            <p className="text-lg md:text-xl text-purple-100">글래스모피즘 효과와 함께 마무리</p>
          </div>
        </div>
      </StickyShrinkSection>

      {/* 아웃트로 섹션 */}
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black flex flex-col justify-center items-center text-white p-8">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center">스크롤 체험 완료</h1>
        <p className="text-lg md:text-xl text-gray-300 text-center max-w-2xl mb-8">
          여러 섹션이 각각 다른 축소 비율과 투명도로 자연스럽게 변화하는 것을 확인하셨나요?
        </p>
        <div className="flex flex-col items-center space-y-4">
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
          <p className="text-sm text-gray-400">Interactive Guidebook</p>
        </div>
      </div>
    </main>
  );
}
