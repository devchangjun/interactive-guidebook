"use client";

import { useState } from "react";
import DemoContainer from "@/components/common/DemoContainer";
import GlitchText from "@/components/common/framer-motion/typography/glitch-text/GlitchText";
import Title from "../../components/Title";
import TextScramble from "@/components/common/framer-motion/typography/TextScramble";

export default function GlitchTextPage() {
  // 컨트롤 상태
  const [text, setText] = useState("GLITCH EFFECT");
  const [speed, setSpeed] = useState(0.5);
  const [enableShadows, setEnableShadows] = useState(true);
  const [enableOnHover, setEnableOnHover] = useState(false);
  const [refreshDelay, setRefreshDelay] = useState(100);
  const [variant, setVariant] = useState("h1");
  const [glitchColor1, setGlitchColor1] = useState("#ff0040");
  const [glitchColor2, setGlitchColor2] = useState("#00ffff");
  const [glitchColor3, setGlitchColor3] = useState("#ff0080");
  const [glitchColor4, setGlitchColor4] = useState("#0040ff");

  // Typography variant 클래스
  const getVariantClass = (variant: string) => {
    switch (variant) {
      case "h1":
        return "text-3xl md:text-5xl lg:text-6xl font-bold";
      case "h2":
        return "text-2xl md:text-4xl lg:text-5xl font-semibold";
      case "h3":
        return "text-xl md:text-3xl lg:text-4xl font-medium";
      case "h4":
        return "text-lg md:text-2xl lg:text-3xl font-medium";
      case "body":
        return "text-base md:text-lg";
      case "small":
        return "text-sm md:text-base";
      default:
        return "text-xl md:text-3xl lg:text-4xl font-medium";
    }
  };

  // 글리치 색상 배열
  const glitchColors = [glitchColor1, glitchColor2, glitchColor3, glitchColor4];

  return (
    <div>
      <Title>
        <TextScramble text="Glitch Text." speed={30} delay={0} loop={false} pauseTime={1000} revealSpeed={60} />
      </Title>
      <hr className="my-4 border-0 border-t border-gray-200" />
      <section className="mb-8">
        <DemoContainer>
          <div className="min-h-32 md:min-h-40 flex items-center justify-center">
            <GlitchText
              key={`${text}-${speed}-${enableShadows}-${enableOnHover}-${refreshDelay}-${glitchColor1}-${glitchColor2}-${glitchColor3}-${glitchColor4}`}
              className={getVariantClass(variant)}
              speed={speed}
              enableShadows={enableShadows}
              enableOnHover={enableOnHover}
              refreshDelay={refreshDelay}
              glitchColors={glitchColors}
            >
              {text}
            </GlitchText>
          </div>
        </DemoContainer>

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
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-200 uppercase tracking-wide">Text</label>
              <p className="text-xs text-gray-400">글리치 효과가 적용될 텍스트</p>
              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="w-full px-3 py-2 text-sm border border-gray-600 rounded-md bg-black/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent resize-none placeholder-gray-400"
                rows={2}
                placeholder="글리치 효과를 적용할 텍스트를 입력하세요"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-200 uppercase tracking-wide">Speed</label>
              <p className="text-xs text-gray-400">글리치 애니메이션 속도 (낮을수록 빠름)</p>
              <div className="flex items-center space-x-3">
                <input
                  type="range"
                  min="0.1"
                  max="2"
                  step="0.1"
                  value={speed}
                  onChange={(e) => setSpeed(Number(e.target.value))}
                  className="flex-1 h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                  type="number"
                  value={speed}
                  onChange={(e) => setSpeed(Number(e.target.value))}
                  className="w-16 px-2 py-1 text-sm border border-gray-600 rounded text-center bg-black/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                  min="0.1"
                  max="2"
                  step="0.1"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-200 uppercase tracking-wide">Refresh Delay</label>
              <p className="text-xs text-gray-400">글리치 효과 간격 (ms)</p>
              <div className="flex items-center space-x-3">
                <input
                  type="range"
                  min="50"
                  max="1000"
                  value={refreshDelay}
                  onChange={(e) => setRefreshDelay(Number(e.target.value))}
                  className="flex-1 h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                  type="number"
                  value={refreshDelay}
                  onChange={(e) => setRefreshDelay(Number(e.target.value))}
                  className="w-16 px-2 py-1 text-sm border border-gray-600 rounded text-center bg-black/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                  min="50"
                  max="1000"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-200 uppercase tracking-wide">Glitch Color 1</label>
              <p className="text-xs text-gray-400">첫 번째 글리치 색상</p>
              <div className="flex items-center space-x-3">
                <input
                  type="color"
                  value={glitchColor1}
                  onChange={(e) => setGlitchColor1(e.target.value)}
                  className="w-12 h-8 border border-gray-600 rounded cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                  type="text"
                  value={glitchColor1}
                  onChange={(e) => setGlitchColor1(e.target.value)}
                  className="flex-1 px-3 py-1 text-sm border border-gray-600 rounded bg-black/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400"
                  placeholder="#ff0040"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-200 uppercase tracking-wide">Glitch Color 2</label>
              <p className="text-xs text-gray-400">두 번째 글리치 색상</p>
              <div className="flex items-center space-x-3">
                <input
                  type="color"
                  value={glitchColor2}
                  onChange={(e) => setGlitchColor2(e.target.value)}
                  className="w-12 h-8 border border-gray-600 rounded cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                  type="text"
                  value={glitchColor2}
                  onChange={(e) => setGlitchColor2(e.target.value)}
                  className="flex-1 px-3 py-1 text-sm border border-gray-600 rounded bg-black/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400"
                  placeholder="#00ffff"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-200 uppercase tracking-wide">Glitch Color 3</label>
              <p className="text-xs text-gray-400">세 번째 글리치 색상</p>
              <div className="flex items-center space-x-3">
                <input
                  type="color"
                  value={glitchColor3}
                  onChange={(e) => setGlitchColor3(e.target.value)}
                  className="w-12 h-8 border border-gray-600 rounded cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                  type="text"
                  value={glitchColor3}
                  onChange={(e) => setGlitchColor3(e.target.value)}
                  className="flex-1 px-3 py-1 text-sm border border-gray-600 rounded bg-black/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400"
                  placeholder="#ff0080"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-200 uppercase tracking-wide">Glitch Color 4</label>
              <p className="text-xs text-gray-400">네 번째 글리치 색상</p>
              <div className="flex items-center space-x-3">
                <input
                  type="color"
                  value={glitchColor4}
                  onChange={(e) => setGlitchColor4(e.target.value)}
                  className="w-12 h-8 border border-gray-600 rounded cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                  type="text"
                  value={glitchColor4}
                  onChange={(e) => setGlitchColor4(e.target.value)}
                  className="flex-1 px-3 py-1 text-sm border border-gray-600 rounded bg-black/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400"
                  placeholder="#0040ff"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-200 uppercase tracking-wide">Variant</label>
              <p className="text-xs text-gray-400">Typography 변형</p>
              <select
                value={variant}
                onChange={(e) => setVariant(e.target.value)}
                className="w-full px-3 py-2 text-sm border border-gray-600 rounded bg-black/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option value="h1" className="bg-gray-800 text-white">
                  H1 - Heading 1
                </option>
                <option value="h2" className="bg-gray-800 text-white">
                  H2 - Heading 2
                </option>
                <option value="h3" className="bg-gray-800 text-white">
                  H3 - Heading 3
                </option>
                <option value="h4" className="bg-gray-800 text-white">
                  H4 - Heading 4
                </option>
                <option value="body" className="bg-gray-800 text-white">
                  Body - 본문
                </option>
                <option value="small" className="bg-gray-800 text-white">
                  Small - 소형
                </option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-200 uppercase tracking-wide">Enable Shadows</label>
              <p className="text-xs text-gray-400">글리치 그림자 효과 활성화</p>
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={enableShadows}
                  onChange={(e) => setEnableShadows(e.target.checked)}
                  className="w-4 h-4 text-blue-400 bg-black/20 border-gray-600 rounded focus:ring-blue-400 focus:ring-2"
                />
                <span className="text-sm text-gray-200">그림자 효과 사용</span>
              </label>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-200 uppercase tracking-wide">Enable On Hover</label>
              <p className="text-xs text-gray-400">호버 시에만 글리치 효과 실행</p>
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={enableOnHover}
                  onChange={(e) => setEnableOnHover(e.target.checked)}
                  className="w-4 h-4 text-blue-400 bg-black/20 border-gray-600 rounded focus:ring-blue-400 focus:ring-2"
                />
                <span className="text-sm text-gray-200">호버 시에만 실행</span>
              </label>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
