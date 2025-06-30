"use client";

import React from "react";
import { STICKY_STACK_SECTIONS_INFO } from "./constants";
import Title from "../../components/Title";

export default function StickyStackSectionsPage() {
  return (
    <div>
      <Title>Sticky Stack Sections</Title>
      <hr className="my-4 border-t border-gray-700" />

      <section className="mb-8">
        <p className="text-lg text-gray-300 mb-6">{STICKY_STACK_SECTIONS_INFO.description}</p>
      </section>

      {/* 데모 */}
      <section className="mb-8">
        <div className="border border-gray-600 rounded-lg bg-gray-900">
          {/* 테스트용 스티키 섹션들 */}
          <div className="h-[500vh]">
            <section className="sticky top-0 h-screen bg-gradient-to-br from-red-500 via-pink-500 to-orange-500 flex items-center justify-center">
              <h2 className="text-4xl font-bold text-white drop-shadow-lg">첫 번째 스티키 섹션</h2>
            </section>
            <section className="sticky top-0 h-screen bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-500 flex items-center justify-center">
              <h2 className="text-4xl font-bold text-white drop-shadow-lg">두 번째 스티키 섹션</h2>
            </section>
            <section className="sticky top-0 h-screen bg-gradient-to-br from-green-500 via-emerald-500 to-lime-500 flex items-center justify-center">
              <h2 className="text-4xl font-bold text-white drop-shadow-lg">세 번째 스티키 섹션</h2>
            </section>
            <section className="sticky top-0 h-screen bg-gradient-to-br from-purple-500 via-violet-500 to-indigo-500 flex items-center justify-center">
              <h2 className="text-4xl font-bold text-white drop-shadow-lg">네 번째 스티키 섹션</h2>
            </section>
            <section className="sticky top-0 h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 via-white to-gray-200">
              <div className="text-center">
                <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 drop-shadow-sm">마지막 섹션</h2>
                <p className="text-lg text-gray-600">스티키 스택 효과가 완료된 후 표시되는 일반 섹션입니다.</p>
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
