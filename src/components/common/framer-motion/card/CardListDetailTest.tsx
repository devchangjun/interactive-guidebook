"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TiltCard, { useParallax } from "./TiltCard";

// 샘플 데이터
const items = [
  {
    id: 1,
    title: "첫 번째 카드",
    description: "이것은 첫 번째 카드의 상세 설명입니다.",
    image: "/1.avif",
  },
  {
    id: 2,
    title: "두 번째 카드",
    description: "이것은 두 번째 카드의 상세 설명입니다.",
    image: "/1.avif",
  },
];

/**
 * CardListDetailTest 컴포넌트
 * - 카드 리스트에서 카드를 클릭하면 상세 뷰로 자연스럽게 확대 전환됩니다.
 * - 카드, 이미지, 타이틀 모두 layoutId로 연결되어 복합 트랜지션이 일어납니다.
 * - AnimatePresence로 페이지 전환 애니메이션을 자연스럽게 처리합니다.
 */
export default function CardListDetailTest() {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  return (
    <div className="min-h-screen p-8">
      <AnimatePresence mode="wait">
        {selectedId === null ? (
          // 카드 리스트 뷰
          <motion.div
            key="list"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-wrap justify-center gap-6"
          >
            {items.map((item) => (
              <TiltCard key={item.id} className="m-0 w-60 cursor-pointer">
                <motion.div
                  layoutId={`card-${item.id}`}
                  className="overflow-hidden rounded-2xl bg-transparent p-0"
                  onClick={() => setSelectedId(item.id)}
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                >
                  <ParallaxImage src={item.image} alt={item.title} layoutId={`image-${item.id}`} />
                  <ParallaxTitle layoutId={`title-${item.id}`}>{item.title}</ParallaxTitle>
                </motion.div>
              </TiltCard>
            ))}
          </motion.div>
        ) : (
          // 상세 뷰
          <TiltCard className="mx-auto my-16 max-w-md">
            <motion.div
              key="detail"
              layoutId={`card-${selectedId}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="relative overflow-hidden rounded-3xl bg-white pb-8 shadow-lg"
            >
              <ParallaxImage
                src={items.find((i) => i.id === selectedId)?.image}
                alt=""
                layoutId={`image-${selectedId}`}
                height={260}
              />
              <ParallaxTitle layoutId={`title-${selectedId}`}>
                {items.find((i) => i.id === selectedId)?.title}
              </ParallaxTitle>
              <ParallaxDescription>{items.find((i) => i.id === selectedId)?.description}</ParallaxDescription>
              <button
                onClick={() => setSelectedId(null)}
                className="absolute right-4 top-4 cursor-pointer rounded-lg border-none bg-gray-200 px-3 py-2 font-semibold"
              >
                닫기
              </button>
            </motion.div>
          </TiltCard>
        )}
      </AnimatePresence>
    </div>
  );
}

// Parallax 효과를 주는 서브 컴포넌트 추가
function ParallaxImage({
  src,
  alt,
  layoutId,
  height = 140,
}: {
  src?: string;
  alt?: string;
  layoutId?: string;
  height?: number;
}) {
  const { x, y } = useParallax(2.5); // 이미지에 가장 깊은 parallax
  return (
    <motion.img src={src} alt={alt} layoutId={layoutId} style={{ x, y, height }} className="w-full object-cover" />
  );
}
function ParallaxTitle({ children, layoutId }: { children: React.ReactNode; layoutId?: string }) {
  const { x, y } = useParallax(1.2);
  return (
    <motion.h3 layoutId={layoutId} style={{ x, y }} className="mx-6 mb-2 my-4 text-2xl font-bold">
      {children}
    </motion.h3>
  );
}
function ParallaxDescription({ children }: { children: React.ReactNode }) {
  const { x, y } = useParallax(0.7);
  return (
    <motion.p style={{ x, y }} className="mx-6 text-gray-600">
      {children}
    </motion.p>
  );
}
