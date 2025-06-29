"use client";

import { useState } from "react";
import DemoContainer from "@/components/common/DemoContainer";
import TiltCard from "@/components/common/effects/TiltCard";
import Title from "../../components/Title";
import {
  TILT_CARD_DEFAULTS,
  BACKGROUND_COLOR_OPTIONS,
  PADDING_OPTIONS,
  BORDER_RADIUS_OPTIONS,
  SHADOW_OPTIONS,
} from "./constants";

export default function TiltCardDocsPage() {
  // 컨트롤 상태
  const [maxTilt, setMaxTilt] = useState(TILT_CARD_DEFAULTS.maxTilt);
  const [parallaxFactor, setParallaxFactor] = useState(TILT_CARD_DEFAULTS.parallaxFactor);
  const [cardWidth, setCardWidth] = useState(TILT_CARD_DEFAULTS.cardWidth);
  const [cardHeight, setCardHeight] = useState(TILT_CARD_DEFAULTS.cardHeight);
  const [backgroundColor, setBackgroundColor] = useState(TILT_CARD_DEFAULTS.backgroundColor);
  const [cardPadding, setCardPadding] = useState(TILT_CARD_DEFAULTS.cardPadding);
  const [borderRadius, setBorderRadius] = useState(TILT_CARD_DEFAULTS.borderRadius);
  const [shadow, setShadow] = useState(TILT_CARD_DEFAULTS.shadow);
  const [titleText, setTitleText] = useState(TILT_CARD_DEFAULTS.titleText);
  const [titleSize, setTitleSize] = useState(TILT_CARD_DEFAULTS.titleSize);
  const [titleWeight, setTitleWeight] = useState(TILT_CARD_DEFAULTS.titleWeight);
  const [titleColor, setTitleColor] = useState(TILT_CARD_DEFAULTS.titleColor);
  const [descriptionText, setDescriptionText] = useState(TILT_CARD_DEFAULTS.descriptionText);
  const [descriptionSize, setDescriptionSize] = useState(TILT_CARD_DEFAULTS.descriptionSize);
  const [descriptionColor, setDescriptionColor] = useState(TILT_CARD_DEFAULTS.descriptionColor);

  return (
    <div>
      {/* 1. 🎯 인터랙션 제목 */}
      <Title>3D Tilt + Parallax 카드 인터랙션</Title>
      <hr className="my-4 border-t border-gray-700" />

      {/* 2. 💻 코드 예시 + 실제 데모 */}
      <section className="mb-8">
        <h2 className="text-xl md:text-2xl font-medium mb-4">데모</h2>
        <DemoContainer className="mb-4 flex justify-center">
          <TiltCard
            maxTilt={maxTilt}
            parallaxFactor={parallaxFactor}
            style={{
              width: `${cardWidth}px`,
              height: `${cardHeight}px`,
            }}
          >
            <div
              className={`${backgroundColor} ${cardPadding} ${borderRadius} ${shadow} w-full h-full flex flex-col justify-center items-center text-center`}
            >
              <h3 className={`${titleSize} ${titleWeight} ${titleColor} mb-4`}>{titleText}</h3>
              <p className={`${descriptionSize} ${descriptionColor}`}>{descriptionText}</p>
            </div>
          </TiltCard>
        </DemoContainer>
        <div className="text-sm text-[#888] mt-2">
          마우스를 카드 위에 올려서 3D 기울기 효과를 확인해보세요. (모바일에서는 비활성화됩니다)
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
            {/* MAX TILT */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-200 uppercase tracking-wide">Max Tilt</label>
              <p className="text-xs text-gray-400">최대 기울기 각도 (도)</p>
              <div className="flex items-center space-x-3">
                <input
                  type="range"
                  min="5"
                  max="45"
                  step="1"
                  value={maxTilt}
                  onChange={(e) => setMaxTilt(Number(e.target.value))}
                  className="flex-1 h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                  type="number"
                  value={maxTilt}
                  onChange={(e) => setMaxTilt(Number(e.target.value))}
                  className="w-16 px-2 py-1 text-sm border border-gray-600 rounded text-center bg-black/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                  min="5"
                  max="45"
                  step="1"
                />
              </div>
            </div>

            {/* PARALLAX FACTOR */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-200 uppercase tracking-wide">Parallax Factor</label>
              <p className="text-xs text-gray-400">패럴럭스 깊이 강도</p>
              <div className="flex items-center space-x-3">
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.05"
                  value={parallaxFactor}
                  onChange={(e) => setParallaxFactor(Number(e.target.value))}
                  className="flex-1 h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                  type="number"
                  value={parallaxFactor}
                  onChange={(e) => setParallaxFactor(Number(e.target.value))}
                  className="w-16 px-2 py-1 text-sm border border-gray-600 rounded text-center bg-black/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                  min="0"
                  max="1"
                  step="0.05"
                />
              </div>
            </div>

            {/* CARD WIDTH */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-200 uppercase tracking-wide">Card Width</label>
              <p className="text-xs text-gray-400">카드 너비 (px)</p>
              <div className="flex items-center space-x-3">
                <input
                  type="range"
                  min="200"
                  max="600"
                  step="20"
                  value={cardWidth}
                  onChange={(e) => setCardWidth(Number(e.target.value))}
                  className="flex-1 h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                  type="number"
                  value={cardWidth}
                  onChange={(e) => setCardWidth(Number(e.target.value))}
                  className="w-16 px-2 py-1 text-sm border border-gray-600 rounded text-center bg-black/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                  min="200"
                  max="600"
                  step="20"
                />
              </div>
            </div>

            {/* CARD HEIGHT */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-200 uppercase tracking-wide">Card Height</label>
              <p className="text-xs text-gray-400">카드 높이 (px)</p>
              <div className="flex items-center space-x-3">
                <input
                  type="range"
                  min="200"
                  max="500"
                  step="20"
                  value={cardHeight}
                  onChange={(e) => setCardHeight(Number(e.target.value))}
                  className="flex-1 h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                  type="number"
                  value={cardHeight}
                  onChange={(e) => setCardHeight(Number(e.target.value))}
                  className="w-16 px-2 py-1 text-sm border border-gray-600 rounded text-center bg-black/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                  min="200"
                  max="500"
                  step="20"
                />
              </div>
            </div>

            {/* BACKGROUND COLOR */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-200 uppercase tracking-wide">Background Color</label>
              <p className="text-xs text-gray-400">카드 배경색</p>
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

            {/* PADDING */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-200 uppercase tracking-wide">Padding</label>
              <p className="text-xs text-gray-400">카드 내부 여백</p>
              <select
                value={cardPadding}
                onChange={(e) => setCardPadding(e.target.value)}
                className="w-full px-3 py-2 text-sm border border-gray-600 rounded bg-black/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                {PADDING_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value} className="bg-gray-800 text-white">
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* BORDER RADIUS */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-200 uppercase tracking-wide">Border Radius</label>
              <p className="text-xs text-gray-400">모서리 둥글기</p>
              <select
                value={borderRadius}
                onChange={(e) => setBorderRadius(e.target.value)}
                className="w-full px-3 py-2 text-sm border border-gray-600 rounded bg-black/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                {BORDER_RADIUS_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value} className="bg-gray-800 text-white">
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* SHADOW */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-200 uppercase tracking-wide">Shadow</label>
              <p className="text-xs text-gray-400">그림자 강도</p>
              <select
                value={shadow}
                onChange={(e) => setShadow(e.target.value)}
                className="w-full px-3 py-2 text-sm border border-gray-600 rounded bg-black/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                {SHADOW_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value} className="bg-gray-800 text-white">
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* TITLE TEXT */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-200 uppercase tracking-wide">Title Text</label>
              <p className="text-xs text-gray-400">카드 제목</p>
              <input
                type="text"
                value={titleText}
                onChange={(e) => setTitleText(e.target.value)}
                className="w-full px-3 py-2 text-sm border border-gray-600 rounded-md bg-black/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent placeholder-gray-400"
                placeholder="카드 제목을 입력하세요"
              />
            </div>
          </div>

          {/* 리셋 버튼 */}
          <div className="mt-6 pt-4 border-t border-gray-700">
            <button
              onClick={() => {
                setMaxTilt(TILT_CARD_DEFAULTS.maxTilt);
                setParallaxFactor(TILT_CARD_DEFAULTS.parallaxFactor);
                setCardWidth(TILT_CARD_DEFAULTS.cardWidth);
                setCardHeight(TILT_CARD_DEFAULTS.cardHeight);
                setBackgroundColor(TILT_CARD_DEFAULTS.backgroundColor);
                setCardPadding(TILT_CARD_DEFAULTS.cardPadding);
                setBorderRadius(TILT_CARD_DEFAULTS.borderRadius);
                setShadow(TILT_CARD_DEFAULTS.shadow);
                setTitleText(TILT_CARD_DEFAULTS.titleText);
                setTitleSize(TILT_CARD_DEFAULTS.titleSize);
                setTitleWeight(TILT_CARD_DEFAULTS.titleWeight);
                setTitleColor(TILT_CARD_DEFAULTS.titleColor);
                setDescriptionText(TILT_CARD_DEFAULTS.descriptionText);
                setDescriptionSize(TILT_CARD_DEFAULTS.descriptionSize);
                setDescriptionColor(TILT_CARD_DEFAULTS.descriptionColor);
              }}
              className="px-4 py-2 text-sm bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              기본값으로 리셋
            </button>
          </div>
        </div>
      </section>

      {/* 2. ✅ 사용하면 좋은 예시 */}
      <section className="mb-8">
        <h2 className="text-xl md:text-2xl font-medium mb-4">사용하면 좋은 예시</h2>
        <ul className="text-base text-[#fff] list-disc list-inside">
          <li>포트폴리오 썸네일: 입체감과 시각적 매력 강조</li>
          <li>CTA 카드: 마우스 호버로 시선 집중 유도</li>
          <li>제품 소개 카드: 정보에 깊이와 레이어를 부여</li>
        </ul>
      </section>

      {/* 3. 🧠 아이디어 구체화 (인터랙션 흐름 시나리오) */}
      <section className="mb-8">
        <h2 className="text-xl md:text-2xl font-medium mb-4">아이디어 구체화 (인터랙션 흐름 시나리오)</h2>
        <ol className="text-base text-[#fff] list-decimal list-inside mb-4">
          <li>초기: 정적인 카드가 배치됨</li>
          <li>마우스 이동 시: 커서 위치에 따라 카드가 기울어짐</li>
          <li>
            내부 요소: <code>useParallax(depth)</code>로 각 요소가 다르게 움직임
          </li>
          <li>마우스 이탈 시: 카드 기울기 원위치</li>
          <li>모바일: 효과 비활성화됨 (768px 이하)</li>
        </ol>
        <div className="text-sm text-gray-400 mt-2">
          💡 내부 요소도 <b>깊이감</b>을 줄 수 있어 입체적인 경험을 줄 수 있습니다.
        </div>
      </section>
    </div>
  );
}
