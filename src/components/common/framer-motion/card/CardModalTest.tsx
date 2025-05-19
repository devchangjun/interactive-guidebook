"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const products = [
  {
    id: 1,
    title: "제품 A",
    description: "제품 A에 대한 상세한 설명입니다. 이 제품의 특징과 장점을 소개합니다.",
  },
  {
    id: 2,
    title: "제품 B",
    description: "제품 B는 이러한 특징이 있습니다. 사용자에게 제공하는 가치를 설명합니다.",
  },
  {
    id: 3,
    title: "제품 C",
    description: "제품 C의 주요 기능과 사용 방법에 대해 설명하는 상세 내용입니다.",
  },
];

/**
 * CardModalTest 컴포넌트
 * - 카드를 클릭하면 상세정보가 모달로 자연스럽게 확대되어 나타납니다.
 * - 카드와 모달 모두 같은 layoutId를 사용하여 부드러운 트랜지션을 제공합니다.
 * - AnimatePresence로 모달의 등장/퇴장 애니메이션을 처리합니다.
 */
export default function CardModalTest() {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "48px 24px",
      }}
    >
      {/* 카드 리스트 */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "24px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {products.map((product) => (
          <motion.div
            key={product.id}
            layoutId={`card-${product.id}`}
            className="card"
            onClick={() => setSelectedId(product.id)}
            style={{
              borderRadius: 16,
              background: "#fff",
              boxShadow: "0 2px 16px rgba(0,0,0,0.08)",
              cursor: "pointer",
              padding: 0,
              textAlign: "center",
              overflow: "hidden",
              opacity: selectedId === product.id ? 0 : 1,
            }}
            whileHover={{ scale: 1.04 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          >
            <motion.img
              layoutId={`image-${product.id}`}
              src="/1.avif"
              alt={product.title}
              style={{
                width: "100%",
                height: 180,
                objectFit: "cover",
              }}
            />
            <div style={{ padding: 24 }}>
              <h3 style={{ fontSize: 22, fontWeight: 700, margin: 0 }}>{product.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 상세정보 모달 */}
      <AnimatePresence>
        {selectedId && (
          <motion.div
            layoutId={`card-${selectedId}`}
            className="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              background: "rgba(0,0,0,0.3)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 1000,
              padding: "24px",
            }}
            onClick={() => setSelectedId(null)}
          >
            <motion.div
              style={{
                width: "100%",
                maxWidth: "480px",
                borderRadius: 24,
                background: "#fff",
                boxShadow: "0 4px 32px rgba(0,0,0,0.16)",
                padding: 0,
                position: "relative",
                textAlign: "center",
                overflow: "hidden",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img
                layoutId={`image-${selectedId}`}
                src="/1.avif"
                alt={products.find((p) => p.id === selectedId)?.title}
                style={{
                  width: "100%",
                  height: 280,
                  objectFit: "cover",
                }}
              />
              <div style={{ padding: 32 }}>
                <h3 style={{ fontSize: 28, fontWeight: 800, margin: 0 }}>
                  {products.find((p) => p.id === selectedId)?.title}
                </h3>
                <p style={{ margin: "24px 0 32px 0", color: "#555" }}>
                  {products.find((p) => p.id === selectedId)?.description}
                </p>
              </div>
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
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
