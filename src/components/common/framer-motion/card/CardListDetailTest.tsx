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
    <div style={{ padding: 32, minHeight: "100vh" }}>
      <AnimatePresence mode="wait">
        {selectedId === null ? (
          // 카드 리스트 뷰
          <motion.div
            key="list"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              display: "flex",
              gap: 24,
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {items.map((item) => (
              <TiltCard key={item.id} style={{ width: 240, margin: 0, cursor: "pointer" }}>
                <motion.div
                  layoutId={`card-${item.id}`}
                  style={{ borderRadius: 16, overflow: "hidden", padding: 0, background: "transparent" }}
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
          <TiltCard style={{ maxWidth: 480, margin: "60px auto" }}>
            <motion.div
              key="detail"
              layoutId={`card-${selectedId}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{
                borderRadius: 24,
                background: "#fff",
                boxShadow: "0 4px 32px rgba(0,0,0,0.12)",
                overflow: "hidden",
                position: "relative",
                paddingBottom: 32,
              }}
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
                style={{
                  position: "absolute",
                  top: 16,
                  right: 16,
                  background: "#eee",
                  border: "none",
                  borderRadius: 8,
                  padding: "8px 12px",
                  cursor: "pointer",
                  fontWeight: 600,
                }}
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
    <motion.img src={src} alt={alt} layoutId={layoutId} style={{ width: "100%", height, objectFit: "cover", x, y }} />
  );
}
function ParallaxTitle({ children, layoutId }: { children: React.ReactNode; layoutId?: string }) {
  const { x, y } = useParallax(1.2);
  return (
    <motion.h3
      layoutId={layoutId}
      style={{
        margin: "16px 24px 8px 24px",
        fontSize: 24,
        fontWeight: 700,
        x,
        y,
      }}
    >
      {children}
    </motion.h3>
  );
}
function ParallaxDescription({ children }: { children: React.ReactNode }) {
  const { x, y } = useParallax(0.7);
  return <motion.p style={{ margin: "0 24px", color: "#555", x, y }}>{children}</motion.p>;
}
