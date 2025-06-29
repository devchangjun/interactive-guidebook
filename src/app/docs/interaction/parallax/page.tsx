"use client";

import { useState } from "react";
import ParallaxImage from "@/components/common/framer-motion/ParallaxImage";
import DemoContainer from "@/components/common/DemoContainer";
import Title from "../../components/Title";
import {
  PARALLAX_DEFAULTS,
  IMAGE_OPTIONS,
  CONTAINER_HEIGHT_OPTIONS,
  IMAGE_HEIGHT_OPTIONS,
  OBJECT_FIT_OPTIONS,
} from "./constants";

export default function ParallaxPage() {
  // 컨트롤 상태
  const [imageUrl, setImageUrl] = useState(PARALLAX_DEFAULTS.imageUrl);
  const [parallaxRange, setParallaxRange] = useState(PARALLAX_DEFAULTS.parallaxRange);
  const [stiffness, setStiffness] = useState(PARALLAX_DEFAULTS.stiffness);
  const [damping, setDamping] = useState(PARALLAX_DEFAULTS.damping);
  const [mass, setMass] = useState(PARALLAX_DEFAULTS.mass);
  const [restDelta, setRestDelta] = useState(PARALLAX_DEFAULTS.restDelta);
  const [containerHeight, setContainerHeight] = useState(PARALLAX_DEFAULTS.containerHeight);
  const [imageHeight, setImageHeight] = useState(PARALLAX_DEFAULTS.imageHeight);
  const [objectFit, setObjectFit] = useState(PARALLAX_DEFAULTS.objectFit);

  return (
    <div>
      {/* 1. 🎯 인터랙션 제목 */}
      <Title>스크롤 패럴랙스 이미지</Title>
      <hr className="my-4 border-t border-gray-700" />

      {/* 2. 💻 코드 예시 + 실제 데모 */}
      <section className="mb-8">
        <h2 className="text-xl md:text-2xl font-medium mb-4">데모</h2>
        <DemoContainer>
          <ParallaxImage
            imageUrl={imageUrl}
            parallaxRange={parallaxRange}
            stiffness={stiffness}
            damping={damping}
            mass={mass}
            restDelta={restDelta}
            containerHeight={containerHeight}
            imageHeight={imageHeight}
            objectFit={objectFit}
          />
        </DemoContainer>
        <div className="text-sm text-gray-400 mt-2">
          <b>framer-motion</b>을 활용해 스크롤에 따라 배경 이미지가 부드럽게 패럴랙스 이동하는 인터랙션입니다.
        </div>

        {/* 컨트롤 패널 */}
        <div
          className="mt-6 p-4 md:p-6 bg-[#1a1a1a] rounded-xl border border-gray-200 dark:border-neutral-800"
          style={{
            backgroundImage:
              "radial-gradient(circle, #444 1.5px, transparent 1.5px), radial-gradient(circle, #222 1.5px, transparent 1.5px)",
            backgroundSize: "20px 20px",
            backgroundPosition: "0 0, 10px 10px",
          }}
        >
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* IMAGE URL */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-200 uppercase tracking-wide">Background Image</label>
              <p className="text-xs text-gray-400">배경 이미지 선택</p>
              <select
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                className="w-full px-3 py-2 text-sm border border-gray-600 rounded bg-black/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                {IMAGE_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value} className="bg-gray-800 text-white">
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* PARALLAX RANGE */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-200 uppercase tracking-wide">Parallax Range</label>
              <p className="text-xs text-gray-400">패럴럭스 이동 범위 (px)</p>
              <div className="flex items-center space-x-3">
                <input
                  type="range"
                  min="100"
                  max="600"
                  step="50"
                  value={parallaxRange}
                  onChange={(e) => setParallaxRange(Number(e.target.value))}
                  className="flex-1 h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                  type="number"
                  value={parallaxRange}
                  onChange={(e) => setParallaxRange(Number(e.target.value))}
                  className="w-16 px-2 py-1 text-sm border border-gray-600 rounded text-center bg-black/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                  min="100"
                  max="600"
                  step="50"
                />
              </div>
            </div>

            {/* STIFFNESS */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-200 uppercase tracking-wide">Stiffness</label>
              <p className="text-xs text-gray-400">스프링 강성 (높을수록 빠름)</p>
              <div className="flex items-center space-x-3">
                <input
                  type="range"
                  min="20"
                  max="200"
                  step="10"
                  value={stiffness}
                  onChange={(e) => setStiffness(Number(e.target.value))}
                  className="flex-1 h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                  type="number"
                  value={stiffness}
                  onChange={(e) => setStiffness(Number(e.target.value))}
                  className="w-16 px-2 py-1 text-sm border border-gray-600 rounded text-center bg-black/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                  min="20"
                  max="200"
                  step="10"
                />
              </div>
            </div>

            {/* DAMPING */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-200 uppercase tracking-wide">Damping</label>
              <p className="text-xs text-gray-400">감쇠 (낮을수록 더 흔들림)</p>
              <div className="flex items-center space-x-3">
                <input
                  type="range"
                  min="5"
                  max="50"
                  step="5"
                  value={damping}
                  onChange={(e) => setDamping(Number(e.target.value))}
                  className="flex-1 h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                  type="number"
                  value={damping}
                  onChange={(e) => setDamping(Number(e.target.value))}
                  className="w-16 px-2 py-1 text-sm border border-gray-600 rounded text-center bg-black/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                  min="5"
                  max="50"
                  step="5"
                />
              </div>
            </div>

            {/* MASS */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-200 uppercase tracking-wide">Mass</label>
              <p className="text-xs text-gray-400">질량 (높을수록 느림)</p>
              <div className="flex items-center space-x-3">
                <input
                  type="range"
                  min="0.5"
                  max="3"
                  step="0.1"
                  value={mass}
                  onChange={(e) => setMass(Number(e.target.value))}
                  className="flex-1 h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                  type="number"
                  value={mass}
                  onChange={(e) => setMass(Number(e.target.value))}
                  className="w-16 px-2 py-1 text-sm border border-gray-600 rounded text-center bg-black/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                  min="0.5"
                  max="3"
                  step="0.1"
                />
              </div>
            </div>

            {/* REST DELTA */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-200 uppercase tracking-wide">Rest Delta</label>
              <p className="text-xs text-gray-400">멈춤 민감도</p>
              <div className="flex items-center space-x-3">
                <input
                  type="range"
                  min="0.1"
                  max="2"
                  step="0.1"
                  value={restDelta}
                  onChange={(e) => setRestDelta(Number(e.target.value))}
                  className="flex-1 h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                  type="number"
                  value={restDelta}
                  onChange={(e) => setRestDelta(Number(e.target.value))}
                  className="w-16 px-2 py-1 text-sm border border-gray-600 rounded text-center bg-black/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                  min="0.1"
                  max="2"
                  step="0.1"
                />
              </div>
            </div>

            {/* CONTAINER HEIGHT */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-200 uppercase tracking-wide">Container Height</label>
              <p className="text-xs text-gray-400">컨테이너 높이</p>
              <select
                value={containerHeight}
                onChange={(e) => setContainerHeight(e.target.value)}
                className="w-full px-3 py-2 text-sm border border-gray-600 rounded bg-black/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                {CONTAINER_HEIGHT_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value} className="bg-gray-800 text-white">
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* IMAGE HEIGHT */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-200 uppercase tracking-wide">Image Height</label>
              <p className="text-xs text-gray-400">이미지 높이</p>
              <select
                value={imageHeight}
                onChange={(e) => setImageHeight(e.target.value)}
                className="w-full px-3 py-2 text-sm border border-gray-600 rounded bg-black/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                {IMAGE_HEIGHT_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value} className="bg-gray-800 text-white">
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* OBJECT FIT */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-200 uppercase tracking-wide">Object Fit</label>
              <p className="text-xs text-gray-400">이미지 맞춤 방식</p>
              <select
                value={objectFit}
                onChange={(e) => setObjectFit(e.target.value)}
                className="w-full px-3 py-2 text-sm border border-gray-600 rounded bg-black/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                {OBJECT_FIT_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value} className="bg-gray-800 text-white">
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* 리셋 버튼 */}
          <div className="mt-6 pt-4 border-t border-gray-700">
            <button
              onClick={() => {
                setImageUrl(PARALLAX_DEFAULTS.imageUrl);
                setParallaxRange(PARALLAX_DEFAULTS.parallaxRange);
                setStiffness(PARALLAX_DEFAULTS.stiffness);
                setDamping(PARALLAX_DEFAULTS.damping);
                setMass(PARALLAX_DEFAULTS.mass);
                setRestDelta(PARALLAX_DEFAULTS.restDelta);
                setContainerHeight(PARALLAX_DEFAULTS.containerHeight);
                setImageHeight(PARALLAX_DEFAULTS.imageHeight);
                setObjectFit(PARALLAX_DEFAULTS.objectFit);
              }}
              className="px-4 py-2 text-sm bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              기본값으로 리셋
            </button>
          </div>
        </div>
      </section>

      {/* 3. ✅ 사용하면 좋은 예시 */}
      <section className="mb-8">
        <h2 className="text-xl md:text-2xl font-medium mb-4">사용하면 좋은 예시</h2>
        <ul className="text-base text-[#fff] ml-4 list-disc list-inside">
          <li>랜딩/히어로 섹션: 깊이감 있는 배경 연출</li>
          <li>스크롤 기반 스토리텔링: 몰입감 있는 전환 효과</li>
          <li>포트폴리오/소개 페이지: 시각적 집중 유도</li>
        </ul>
      </section>

      {/* 4. 🧠 아이디어 구체화 (인터랙션 흐름 시나리오) */}
      <section className="mb-8">
        <h2 className="text-xl md:text-2xl font-medium mb-4">아이디어 구체화 (인터랙션 흐름 시나리오)</h2>
        <ol className="text-base text-[#fff] ml-4 mb-2 list-decimal list-inside">
          <li>페이지 진입: 배경 이미지가 기본 위치에 노출</li>
          <li>스크롤 내릴수록 배경이 자연스럽게 위로 이동</li>
          <li>스크롤을 올리면 다시 아래로 이동</li>
          <li>텍스트/콘텐츠는 배경 위에 자연스럽게 노출</li>
        </ol>
        <div className="text-sm text-gray-400">
          💡 배경 이미지의 y값을 스크롤 위치에 따라 부드럽게 조절해 깊이감을 높일 수 있습니다.
        </div>
      </section>
    </div>
  );
}
