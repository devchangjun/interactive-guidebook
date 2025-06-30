"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { CardItem } from "@/types/card";

interface ScrollPortfolioCardsProps {
  cards: CardItem[];
  className?: string;
}

export const ScrollPortfolioCards: React.FC<ScrollPortfolioCardsProps> = ({ cards, className = "" }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // 스크롤 진행도에 따라 카드 인덱스 계산
  const cardProgress = useTransform(scrollYProgress, [0, 1], [0, cards.length]);

  useEffect(() => {
    const unsubscribe = cardProgress.on("change", (latest) => {
      const newIndex = Math.min(Math.floor(latest), cards.length - 1);
      setCurrentCardIndex(Math.max(0, newIndex));
    });

    return () => unsubscribe();
  }, [cardProgress, cards.length]);

  // 전체 컨테이너의 변환 값 - 카드 간격을 70vw로 줄이고, 첫번째 카드를 30vw에서 시작
  const cardSpacing = 70; // 각 카드 간격 (vw)
  const initialOffset = 30; // 첫번째 카드 시작 위치 (vw)
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    [`${initialOffset}vw`, `${initialOffset - (cards.length - 1) * cardSpacing}vw`]
  );

  return (
    <div ref={containerRef} className={`relative h-[500vh] ${className}`}>
      {/* 고정된 뷰포트 */}
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div style={{ x }} className="flex h-full">
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              className="flex-shrink-0 w-[70vw] h-full flex items-center justify-center p-8"
              initial={{ opacity: 0.3, scale: 0.8 }}
              animate={{
                opacity: index === currentCardIndex ? 1 : 0.3,
                scale: index === currentCardIndex ? 1 : 0.8,
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <div className="max-w-4xl w-full bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="space-y-6">
                    <motion.h2
                      className="text-4xl md:text-6xl font-bold text-white"
                      initial={{ y: 50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      {card.title}
                    </motion.h2>
                    <motion.p
                      className="text-lg md:text-xl text-white/80 leading-relaxed"
                      initial={{ y: 50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      {card.description}
                    </motion.p>
                    <motion.div
                      className="flex space-x-4"
                      initial={{ y: 50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.6 }}
                    >
                      <button className="px-6 py-3 bg-white text-black rounded-lg hover:bg-white/90 transition-colors">
                        자세히 보기
                      </button>
                      <button className="px-6 py-3 border border-white text-white rounded-lg hover:bg-white/10 transition-colors">
                        라이브 데모
                      </button>
                    </motion.div>
                  </div>
                  <motion.div
                    className="relative h-64 md:h-96 rounded-xl overflow-hidden"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <img src={card.image} alt={card.title} className="w-full h-full object-cover" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* 진행도 인디케이터 */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex space-x-2">
            {cards.map((_, index) => (
              <motion.div
                key={index}
                className="w-3 h-3 rounded-full border border-white/50"
                animate={{
                  backgroundColor: index === currentCardIndex ? "#ffffff" : "transparent",
                }}
                transition={{ duration: 0.3 }}
              />
            ))}
          </div>
        </div>

        {/* 스크롤 힌트 */}
        <motion.div
          className="absolute bottom-4 right-8 text-white/60 text-sm"
          initial={{ opacity: 1 }}
          animate={{ opacity: currentCardIndex === cards.length - 1 ? 0 : 1 }}
        >
          스크롤하여 다음 프로젝트 보기 →
        </motion.div>
      </div>
    </div>
  );
};
