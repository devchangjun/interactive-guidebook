"use client";

import { useState } from "react";
import ZoomScrollBg from "../../../../components/common/framer-motion/ZoomScrollBg";
import DemoContainer from "@/components/common/DemoContainer";
import Title from "../../components/Title";
import {
  ZOOM_BG_DEFAULTS,
  IMAGE_OPTIONS,
  TITLE_SIZE_OPTIONS,
  TITLE_WEIGHT_OPTIONS,
  BLEND_MODE_OPTIONS,
} from "./constants";

export default function ZoomScrollBgPage() {
  // 컨트롤 상태
  const [imageSrc, setImageSrc] = useState(ZOOM_BG_DEFAULTS.imageSrc);
  const [imageAlt, setImageAlt] = useState(ZOOM_BG_DEFAULTS.imageAlt);
  const [title, setTitle] = useState(ZOOM_BG_DEFAULTS.title);
  const [minScale, setMinScale] = useState(ZOOM_BG_DEFAULTS.minScale);
  const [maxScale, setMaxScale] = useState(ZOOM_BG_DEFAULTS.maxScale);
  const [stiffness, setStiffness] = useState(ZOOM_BG_DEFAULTS.stiffness);
  const [damping, setDamping] = useState(ZOOM_BG_DEFAULTS.damping);
  const [mass, setMass] = useState(ZOOM_BG_DEFAULTS.mass);
  const [titleSize, setTitleSize] = useState(ZOOM_BG_DEFAULTS.titleSize);
  const [titleWeight, setTitleWeight] = useState(ZOOM_BG_DEFAULTS.titleWeight);
  const [titleColor, setTitleColor] = useState(ZOOM_BG_DEFAULTS.titleColor);
  const [blendMode, setBlendMode] = useState(ZOOM_BG_DEFAULTS.blendMode);

  const titleClassName = `${blendMode} ${titleSize} ${titleWeight} ${titleColor}`;

  return (
    <div>
      {/* 1. 🎯 인터랙션 제목 */}
      <Title>스크롤 Zoom In/Out 배경 (Zoom Scroll Background)</Title>
      <hr className="my-4 border-0 border-t border-gray-700" />

      {/* 2. 💻 코드 예시 + 실제 데모 */}
      <section className="mb-8">
        <h2 className="text-xl md:text-2xl font-medium mb-4">데모</h2>
        <DemoContainer>
          <ZoomScrollBg
            key={`${imageSrc}-${title}-${minScale}-${maxScale}-${stiffness}-${damping}-${mass}`}
            imageSrc={imageSrc}
            imageAlt={imageAlt}
            title={title}
            minScale={minScale}
            maxScale={maxScale}
            stiffness={stiffness}
            damping={damping}
            mass={mass}
            titleClassName={titleClassName}
          />
        </DemoContainer>
        <div className="text-sm text-gray-400 mt-2">
          <b>framer-motion</b>을 활용해 스크롤에 따라 배경 이미지가 부드럽게 확대/축소되는 인터랙션입니다.
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
            {/* IMAGE SOURCE */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-200 uppercase tracking-wide">Background Image</label>
              <p className="text-xs text-gray-400">배경 이미지 선택</p>
              <select
                value={imageSrc}
                onChange={(e) => setImageSrc(e.target.value)}
                className="w-full px-3 py-2 text-sm border border-gray-600 rounded bg-black/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                {IMAGE_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value} className="bg-gray-800 text-white">
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* TITLE */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-200 uppercase tracking-wide">Title</label>
              <p className="text-xs text-gray-400">표시될 제목 텍스트</p>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-3 py-2 text-sm border border-gray-600 rounded-md bg-black/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent placeholder-gray-400"
                placeholder="제목을 입력하세요"
              />
            </div>

            {/* MIN SCALE */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-200 uppercase tracking-wide">Min Scale</label>
              <p className="text-xs text-gray-400">최소 확대 비율</p>
              <div className="flex items-center space-x-3">
                <input
                  type="range"
                  min="0.5"
                  max="1.5"
                  step="0.05"
                  value={minScale}
                  onChange={(e) => setMinScale(Number(e.target.value))}
                  className="flex-1 h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                  type="number"
                  value={minScale}
                  onChange={(e) => setMinScale(Number(e.target.value))}
                  className="w-16 px-2 py-1 text-sm border border-gray-600 rounded text-center bg-black/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                  min="0.5"
                  max="1.5"
                  step="0.05"
                />
              </div>
            </div>

            {/* MAX SCALE */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-200 uppercase tracking-wide">Max Scale</label>
              <p className="text-xs text-gray-400">최대 확대 비율</p>
              <div className="flex items-center space-x-3">
                <input
                  type="range"
                  min="1"
                  max="3"
                  step="0.05"
                  value={maxScale}
                  onChange={(e) => setMaxScale(Number(e.target.value))}
                  className="flex-1 h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                  type="number"
                  value={maxScale}
                  onChange={(e) => setMaxScale(Number(e.target.value))}
                  className="w-16 px-2 py-1 text-sm border border-gray-600 rounded text-center bg-black/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                  min="1"
                  max="3"
                  step="0.05"
                />
              </div>
            </div>

            {/* STIFFNESS */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-200 uppercase tracking-wide">Stiffness</label>
              <p className="text-xs text-gray-400">스프링 강성 (반응 속도)</p>
              <div className="flex items-center space-x-3">
                <input
                  type="range"
                  min="10"
                  max="300"
                  value={stiffness}
                  onChange={(e) => setStiffness(Number(e.target.value))}
                  className="flex-1 h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                  type="number"
                  value={stiffness}
                  onChange={(e) => setStiffness(Number(e.target.value))}
                  className="w-16 px-2 py-1 text-sm border border-gray-600 rounded text-center bg-black/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                  min="10"
                  max="300"
                />
              </div>
            </div>

            {/* DAMPING */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-200 uppercase tracking-wide">Damping</label>
              <p className="text-xs text-gray-400">스프링 댐핑 (감속도)</p>
              <div className="flex items-center space-x-3">
                <input
                  type="range"
                  min="5"
                  max="100"
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
                  max="100"
                />
              </div>
            </div>

            {/* TITLE SIZE */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-200 uppercase tracking-wide">Title Size</label>
              <p className="text-xs text-gray-400">제목 텍스트 크기</p>
              <select
                value={titleSize}
                onChange={(e) => setTitleSize(e.target.value)}
                className="w-full px-3 py-2 text-sm border border-gray-600 rounded bg-black/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                {TITLE_SIZE_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value} className="bg-gray-800 text-white">
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* TITLE WEIGHT */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-200 uppercase tracking-wide">Title Weight</label>
              <p className="text-xs text-gray-400">제목 글꼴 두께</p>
              <select
                value={titleWeight}
                onChange={(e) => setTitleWeight(e.target.value)}
                className="w-full px-3 py-2 text-sm border border-gray-600 rounded bg-black/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                {TITLE_WEIGHT_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value} className="bg-gray-800 text-white">
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* BLEND MODE */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-200 uppercase tracking-wide">Blend Mode</label>
              <p className="text-xs text-gray-400">텍스트 블렌드 모드</p>
              <select
                value={blendMode}
                onChange={(e) => setBlendMode(e.target.value)}
                className="w-full px-3 py-2 text-sm border border-gray-600 rounded bg-black/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                {BLEND_MODE_OPTIONS.map((option) => (
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
                setImageSrc(ZOOM_BG_DEFAULTS.imageSrc);
                setImageAlt(ZOOM_BG_DEFAULTS.imageAlt);
                setTitle(ZOOM_BG_DEFAULTS.title);
                setMinScale(ZOOM_BG_DEFAULTS.minScale);
                setMaxScale(ZOOM_BG_DEFAULTS.maxScale);
                setStiffness(ZOOM_BG_DEFAULTS.stiffness);
                setDamping(ZOOM_BG_DEFAULTS.damping);
                setMass(ZOOM_BG_DEFAULTS.mass);
                setTitleSize(ZOOM_BG_DEFAULTS.titleSize);
                setTitleWeight(ZOOM_BG_DEFAULTS.titleWeight);
                setTitleColor(ZOOM_BG_DEFAULTS.titleColor);
                setBlendMode(ZOOM_BG_DEFAULTS.blendMode);
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
        <ul className="text-base text-[#fff] list-disc list-inside">
          <li>랜딩/히어로 섹션: 임팩트 있는 배경 연출</li>
          <li>스크롤 기반 스토리텔링: 몰입감 있는 전환 효과</li>
          <li>포트폴리오/소개 페이지: 시각적 집중 유도</li>
          <li>제품 소개: 브랜드 이미지 강조</li>
          <li>비디오 대체: 동적인 느낌의 이미지 연출</li>
        </ul>
      </section>

      {/* 4. 🧠 아이디어 구체화 (인터랙션 흐름 시나리오) */}
      <section className="mb-8">
        <h2 className="text-xl md:text-2xl font-medium mb-4">아이디어 구체화 (인터랙션 흐름 시나리오)</h2>
        <ol className="text-base text-[#fff] list-decimal list-inside mb-4">
          <li>페이지 진입: 배경 이미지가 기본 크기로 노출</li>
          <li>스크롤 내릴수록 배경이 자연스럽게 확대</li>
          <li>스크롤을 올리면 다시 축소</li>
          <li>텍스트/콘텐츠는 배경 위에 자연스럽게 노출</li>
          <li>부드러운 스프링 애니메이션으로 자연스러운 움직임</li>
        </ol>
        <div className="text-sm text-gray-400">
          💡 <strong>MinScale/MaxScale</strong>로 확대 범위를, <strong>Stiffness/Damping</strong>으로 애니메이션 특성을
          조절할 수 있습니다.
        </div>
      </section>
    </div>
  );
}
