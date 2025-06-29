"use client";

import { useState } from "react";
import StickyShrinkSection from "@/components/common/framer-motion/StickyShrinkSection";
import Title from "@/app/docs/components/Title";
import {
  STICKY_SHRINK_DEFAULTS,
  BACKGROUND_COLOR_OPTIONS,
  BACKGROUND_IMAGE_OPTIONS,
  FONT_SIZE_OPTIONS,
  FONT_WEIGHT_OPTIONS,
  TEXT_COLOR_OPTIONS,
} from "./constants";

export default function StickyShrinkSectionPage() {
  // 컨트롤 상태
  const [finalScale, setFinalScale] = useState(STICKY_SHRINK_DEFAULTS.finalScale);
  const [finalOpacity, setFinalOpacity] = useState(STICKY_SHRINK_DEFAULTS.finalOpacity);
  const [backgroundColor, setBackgroundColor] = useState(STICKY_SHRINK_DEFAULTS.backgroundColor);
  const [backgroundImage, setBackgroundImage] = useState(STICKY_SHRINK_DEFAULTS.backgroundImage);
  const [scrollRange, setScrollRange] = useState(STICKY_SHRINK_DEFAULTS.scrollRange);
  const [contentTitle, setContentTitle] = useState(STICKY_SHRINK_DEFAULTS.contentTitle);
  const [contentDescription, setContentDescription] = useState(STICKY_SHRINK_DEFAULTS.contentDescription);
  const [titleSize, setTitleSize] = useState(STICKY_SHRINK_DEFAULTS.titleSize);
  const [titleWeight, setTitleWeight] = useState(STICKY_SHRINK_DEFAULTS.titleWeight);
  const [titleColor, setTitleColor] = useState(STICKY_SHRINK_DEFAULTS.titleColor);
  const [descriptionSize, setDescriptionSize] = useState(STICKY_SHRINK_DEFAULTS.descriptionSize);
  const [descriptionColor, setDescriptionColor] = useState(STICKY_SHRINK_DEFAULTS.descriptionColor);

  return (
    <main>
      <div className="p-8">
        <Title>Sticky Shrink Section</Title>
        <hr className="my-4 border-t border-gray-700" />
        <p className="mt-4 text-base md:text-lg text-neutral-400">
          스크롤하면서 콘텐츠가 자연스럽게 축소되는 효과를 주는 컴포넌트입니다. 다양한 옵션을 통해 애니메이션을
          커스터마이징할 수 있습니다.
        </p>

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
            {/* FINAL SCALE */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-200 uppercase tracking-wide">Final Scale</label>
              <p className="text-xs text-gray-400">최종 축소 비율</p>
              <div className="flex items-center space-x-3">
                <input
                  type="range"
                  min="0.3"
                  max="1"
                  step="0.05"
                  value={finalScale}
                  onChange={(e) => setFinalScale(Number(e.target.value))}
                  className="flex-1 h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                  type="number"
                  value={finalScale}
                  onChange={(e) => setFinalScale(Number(e.target.value))}
                  className="w-16 px-2 py-1 text-sm border border-gray-600 rounded text-center bg-black/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                  min="0.3"
                  max="1"
                  step="0.05"
                />
              </div>
            </div>

            {/* FINAL OPACITY */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-200 uppercase tracking-wide">Final Opacity</label>
              <p className="text-xs text-gray-400">최종 투명도</p>
              <div className="flex items-center space-x-3">
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.05"
                  value={finalOpacity}
                  onChange={(e) => setFinalOpacity(Number(e.target.value))}
                  className="flex-1 h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                  type="number"
                  value={finalOpacity}
                  onChange={(e) => setFinalOpacity(Number(e.target.value))}
                  className="w-16 px-2 py-1 text-sm border border-gray-600 rounded text-center bg-black/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                  min="0"
                  max="1"
                  step="0.05"
                />
              </div>
            </div>

            {/* SCROLL RANGE */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-200 uppercase tracking-wide">Scroll Range</label>
              <p className="text-xs text-gray-400">스크롤 범위 (vh)</p>
              <div className="flex items-center space-x-3">
                <input
                  type="range"
                  min="100"
                  max="400"
                  step="50"
                  value={scrollRange}
                  onChange={(e) => setScrollRange(Number(e.target.value))}
                  className="flex-1 h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                  type="number"
                  value={scrollRange}
                  onChange={(e) => setScrollRange(Number(e.target.value))}
                  className="w-16 px-2 py-1 text-sm border border-gray-600 rounded text-center bg-black/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                  min="100"
                  max="400"
                  step="50"
                />
              </div>
            </div>

            {/* BACKGROUND COLOR */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-200 uppercase tracking-wide">Background Color</label>
              <p className="text-xs text-gray-400">배경색</p>
              <select
                value={backgroundColor}
                onChange={(e) => setBackgroundColor(e.target.value)}
                className="w-full px-3 py-2 text-sm border border-gray-600 rounded bg-black/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                {BACKGROUND_COLOR_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value} className="bg-gray-800 text-white">
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* BACKGROUND IMAGE */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-200 uppercase tracking-wide">Background Image</label>
              <p className="text-xs text-gray-400">배경 이미지</p>
              <select
                value={backgroundImage}
                onChange={(e) => setBackgroundImage(e.target.value)}
                className="w-full px-3 py-2 text-sm border border-gray-600 rounded bg-black/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                {BACKGROUND_IMAGE_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value} className="bg-gray-800 text-white">
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* CONTENT TITLE */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-200 uppercase tracking-wide">Content Title</label>
              <p className="text-xs text-gray-400">섹션 제목</p>
              <input
                type="text"
                value={contentTitle}
                onChange={(e) => setContentTitle(e.target.value)}
                className="w-full px-3 py-2 text-sm border border-gray-600 rounded-md bg-black/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent placeholder-gray-400"
                placeholder="섹션 제목을 입력하세요"
              />
            </div>

            {/* CONTENT DESCRIPTION */}
            <div className="space-y-2 md:col-span-2">
              <label className="text-sm font-medium text-gray-200 uppercase tracking-wide">Content Description</label>
              <p className="text-xs text-gray-400">섹션 설명</p>
              <textarea
                value={contentDescription}
                onChange={(e) => setContentDescription(e.target.value)}
                className="w-full px-3 py-2 text-sm border border-gray-600 rounded-md bg-black/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent resize-none placeholder-gray-400"
                rows={3}
                placeholder="섹션 설명을 입력하세요"
              />
            </div>

            {/* TITLE SIZE */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-200 uppercase tracking-wide">Title Size</label>
              <p className="text-xs text-gray-400">제목 크기</p>
              <select
                value={titleSize}
                onChange={(e) => setTitleSize(e.target.value)}
                className="w-full px-3 py-2 text-sm border border-gray-600 rounded bg-black/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                {FONT_SIZE_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value} className="bg-gray-800 text-white">
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* TITLE WEIGHT */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-200 uppercase tracking-wide">Title Weight</label>
              <p className="text-xs text-gray-400">제목 두께</p>
              <select
                value={titleWeight}
                onChange={(e) => setTitleWeight(e.target.value)}
                className="w-full px-3 py-2 text-sm border border-gray-600 rounded bg-black/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                {FONT_WEIGHT_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value} className="bg-gray-800 text-white">
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* TITLE COLOR */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-200 uppercase tracking-wide">Title Color</label>
              <p className="text-xs text-gray-400">제목 색상</p>
              <select
                value={titleColor}
                onChange={(e) => setTitleColor(e.target.value)}
                className="w-full px-3 py-2 text-sm border border-gray-600 rounded bg-black/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                {TEXT_COLOR_OPTIONS.map((option) => (
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
                setFinalScale(STICKY_SHRINK_DEFAULTS.finalScale);
                setFinalOpacity(STICKY_SHRINK_DEFAULTS.finalOpacity);
                setBackgroundColor(STICKY_SHRINK_DEFAULTS.backgroundColor);
                setBackgroundImage(STICKY_SHRINK_DEFAULTS.backgroundImage);
                setScrollRange(STICKY_SHRINK_DEFAULTS.scrollRange);
                setContentTitle(STICKY_SHRINK_DEFAULTS.contentTitle);
                setContentDescription(STICKY_SHRINK_DEFAULTS.contentDescription);
                setTitleSize(STICKY_SHRINK_DEFAULTS.titleSize);
                setTitleWeight(STICKY_SHRINK_DEFAULTS.titleWeight);
                setTitleColor(STICKY_SHRINK_DEFAULTS.titleColor);
                setDescriptionSize(STICKY_SHRINK_DEFAULTS.descriptionSize);
                setDescriptionColor(STICKY_SHRINK_DEFAULTS.descriptionColor);
              }}
              className="px-4 py-2 text-sm bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              기본값으로 리셋
            </button>
          </div>
        </div>
      </div>

      <div className="h-screen bg-neutral-800 text-white flex items-center justify-center">
        <h1 className="text-3xl font-bold animate-pulse md:text-4xl">아래로 스크롤하세요</h1>
      </div>

      {/* 커스터마이즈 가능한 섹션 */}
      <StickyShrinkSection
        finalScale={finalScale}
        finalOpacity={finalOpacity}
        backgroundColor={backgroundColor}
        backgroundImage={backgroundImage}
        scrollRange={scrollRange}
      >
        <div className="text-center">
          <h2 className={`${titleSize} ${titleWeight} ${titleColor} mb-4`}>{contentTitle}</h2>
          <p className={`${descriptionSize} ${descriptionColor}`}>{contentDescription}</p>
        </div>
      </StickyShrinkSection>

      <div className="h-screen bg-neutral-800 text-white flex items-center justify-center">
        <h1 className="text-3xl font-bold md:text-4xl">테스트 종료</h1>
      </div>
    </main>
  );
}
