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
    <div className="min-h-screen px-6 py-12">
      {/* 카드 리스트 */}
      <div className="mx-auto grid max-w-6xl grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-6">
        {products.map((product) => (
          <motion.div
            key={product.id}
            layoutId={`card-${product.id}`}
            className={`card cursor-pointer overflow-hidden rounded-2xl bg-white p-0 text-center shadow-md ${
              selectedId === product.id ? "opacity-0" : "opacity-100"
            }`}
            onClick={() => setSelectedId(product.id)}
            whileHover={{ scale: 1.04 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          >
            <motion.img
              layoutId={`image-${product.id}`}
              src="/1.avif"
              alt={product.title}
              className="h-[180px] w-full object-cover"
            />
            <div className="p-6">
              <h3 className="m-0 text-xl font-bold">{product.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 상세정보 모달 */}
      <AnimatePresence>
        {selectedId && (
          <motion.div
            layoutId={`card-${selectedId}`}
            className="fixed left-0 top-0 z-[1000] flex h-screen w-screen items-center justify-center bg-black/30 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedId(null)}
          >
            <motion.div
              className="relative w-full max-w-md overflow-hidden rounded-3xl bg-white p-0 text-center shadow-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img
                layoutId={`image-${selectedId}`}
                src="/1.avif"
                alt={products.find((p) => p.id === selectedId)?.title}
                className="h-[280px] w-full object-cover"
              />
              <div className="p-8">
                <h3 className="m-0 text-2xl font-extrabold">{products.find((p) => p.id === selectedId)?.title}</h3>
                <p className="my-6 text-gray-600">{products.find((p) => p.id === selectedId)?.description}</p>
              </div>
              <button
                onClick={() => setSelectedId(null)}
                className="absolute right-4 top-4 cursor-pointer rounded-lg border-none bg-gray-200 px-3 py-2 font-semibold"
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
