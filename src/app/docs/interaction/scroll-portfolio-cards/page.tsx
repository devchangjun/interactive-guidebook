"use client";

import React from "react";
import { ScrollPortfolioCards } from "@/components/common/framer-motion/ScrollPortfolioCards";
import { sampleCards } from "@/data/sampleCards";
import { SCROLL_PORTFOLIO_CARDS_INFO } from "./constants";
import Title from "../../components/Title";

export default function ScrollPortfolioCardsPage() {
  return (
    <div>
      <Title>Pinned Scroll Section.</Title>
      <hr className="my-4 border-t border-gray-700" />

      <section className="mb-8">
        <p className="text-lg text-gray-300 mb-6">{SCROLL_PORTFOLIO_CARDS_INFO.description}</p>
      </section>

      {/* 데모 */}
      <section className="mb-8">
        <div className="bg-gradient-to-br from-purple-900 to-blue-900">
          <ScrollPortfolioCards cards={sampleCards} />
          {/* 다음 섹션 예시 */}
          <section className="h-screen flex items-center justify-center bg-white">
            <div className="text-center">
              <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">다음 섹션</h2>
              <p className="text-lg text-gray-600">포트폴리오가 끝나면 자연스럽게 다음 섹션으로 전환됩니다.</p>
            </div>
          </section>
        </div>
      </section>

      {/* Props */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold text-white mb-4">Props</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-600 bg-gray-800">
            <thead className="bg-gray-700">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">이름</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">타입</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">필수</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">설명</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-600">
              {SCROLL_PORTFOLIO_CARDS_INFO.props.map((prop, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">{prop.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                    <code className="bg-gray-700 px-2 py-1 rounded text-xs">{prop.type}</code>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <span
                      className={`px-2 py-1 text-xs rounded-full ${
                        prop.required ? "bg-red-500 text-white" : "bg-gray-600 text-gray-300"
                      }`}
                    >
                      {prop.required ? "필수" : "선택"}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-300">{prop.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 의존성 */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold text-white mb-4">의존성</h3>
        <div className="flex flex-wrap gap-2">
          {SCROLL_PORTFOLIO_CARDS_INFO.dependencies.map((dep, index) => (
            <code key={index} className="bg-blue-600 text-white px-3 py-1 rounded-md text-sm">
              {dep}
            </code>
          ))}
        </div>
      </section>
    </div>
  );
}
