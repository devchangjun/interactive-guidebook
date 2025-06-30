export const SCROLL_PORTFOLIO_CARDS_INFO = {
  title: "Pinned Scroll Section.",
  description: "스크롤이 고정되어 있는 섹션에서 포트폴리오 카드가 하나씩 넘어가는 인터랙션 컴포넌트입니다.",

  usage: `import { ScrollPortfolioCards } from '@/components/common/framer-motion/ScrollPortfolioCards';
import { sampleCards } from '@/data/sampleCards';

export default function Portfolio() {
  return (
    <div className="bg-gradient-to-br from-purple-900 to-blue-900">
      <ScrollPortfolioCards cards={sampleCards} />
      
      {/* 다음 섹션 */}
      <section className="h-screen flex items-center justify-center bg-white">
        <h2 className="text-4xl font-bold">다음 섹션</h2>
      </section>
    </div>
  );
}`,
  props: [
    {
      name: "cards",
      type: "CardItem[]",
      required: true,
      description: "표시할 포트폴리오 카드 배열",
    },
    {
      name: "className",
      type: "string",
      required: false,
      description: "추가 CSS 클래스명",
    },
  ],
  dependencies: ["framer-motion", "react"],
};
