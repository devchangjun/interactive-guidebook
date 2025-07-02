"use client";

import HorizontalScrollPortfolioCards from "@/components/common/framer-motion/HorizontalScrollPortfolioCards";
import Title from "@/app/docs/components/Title";
import { SCROLL_PORTFOLIO_CARDS_INFO } from "./constants";
import { sampleCards } from "@/data/sampleCards";

export default function ScrollPortfolioCardsPage() {
  return (
    <div className="min-h-screen">
      <Title>{SCROLL_PORTFOLIO_CARDS_INFO.title}</Title>
      <hr className="my-4" />
      {/* 제목 및 설명 섹션 */}
      <section className="h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-700">
        <div className="text-center text-white px-4">
          <Title>{SCROLL_PORTFOLIO_CARDS_INFO.title}</Title>
          <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            {SCROLL_PORTFOLIO_CARDS_INFO.description}
          </p>
          <div className="text-sm text-slate-400">스크롤하여 가로 스크롤 포트폴리오를 체험해보세요</div>
        </div>
      </section>

      {/* 가로 스크롤 포트폴리오 카드 섹션 - DemoContainer 밖으로 이동 */}
      <HorizontalScrollPortfolioCards cards={sampleCards} className="" />

      {/* 다음 섹션 */}
      <section className="h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 to-blue-600">
        <div className="text-center text-white">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">다음 섹션</h2>
          <p className="text-xl md:text-2xl opacity-90">포트폴리오 카드 스크롤이 완료되면 이 섹션으로 이동됩니다.</p>
        </div>
      </section>

      {/* 추가 섹션 */}
      <section className="h-screen flex items-center justify-center bg-gradient-to-br from-emerald-600 to-teal-600">
        <div className="text-center text-white">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">컴포넌트 완료</h2>
          <p className="text-xl md:text-2xl opacity-90">가로 스크롤 인터랙션이 완료되었습니다!</p>
        </div>
      </section>
    </div>
  );
}
