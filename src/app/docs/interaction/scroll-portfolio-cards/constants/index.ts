export const SCROLL_PORTFOLIO_CARDS_INFO = {
  title: "가로 스크롤 섹션",
  description:
    "세로 스크롤에 따라 포트폴리오 카드들이 가로로 스크롤되는 인터랙션 컴포넌트입니다. 스티키 섹션에서 부드러운 가로 이동 효과를 제공합니다.",

  usage: `import HorizontalScrollPortfolioCards from '@/components/common/framer-motion/HorizontalScrollPortfolioCards';
import { sampleCards } from '@/data/sampleCards';

export default function Portfolio() {
  return (
    <div>
      <HorizontalScrollPortfolioCards 
        cards={sampleCards}
        className="bg-gradient-to-br from-indigo-50 via-white to-cyan-50"
      />
      
      {/* 다음 섹션 */}
      <section className="h-screen flex items-center justify-center bg-purple-600">
        <h2 className="text-4xl font-bold text-white">다음 섹션</h2>
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
