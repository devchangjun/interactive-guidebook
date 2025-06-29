"use client";

import { useState } from "react";
import DemoContainer from "@/components/common/DemoContainer";
import OverlayCursorProvider from "@/components/common/framer-motion/cursor/OverlayCursor";
import Title from "../../components/Title";
import { OVERLAY_CURSOR_DEFAULTS, TEXT_SIZE_OPTIONS, COLOR_PRESETS } from "./constants";

export default function OverlayCursorDemoPage() {
  // 컨트롤 상태
  const [cursorText, setCursorText] = useState(OVERLAY_CURSOR_DEFAULTS.cursorText);
  const [cursorSize, setCursorSize] = useState(OVERLAY_CURSOR_DEFAULTS.cursorSize);
  const [cursorColor, setCursorColor] = useState(OVERLAY_CURSOR_DEFAULTS.cursorColor);
  const [demoText, setDemoText] = useState(OVERLAY_CURSOR_DEFAULTS.demoText);
  const [demoTextSize, setDemoTextSize] = useState(OVERLAY_CURSOR_DEFAULTS.demoTextSize);
  const [demoTextColor, setDemoTextColor] = useState(OVERLAY_CURSOR_DEFAULTS.demoTextColor);
  const [demoBgColor, setDemoBgColor] = useState(OVERLAY_CURSOR_DEFAULTS.demoBgColor);

  return (
    <div>
      {/* 1. 🎯 인터랙션 제목 */}
      <Title>오버레이 커서 인터랙션 (Overlay Cursor)</Title>
      <hr className="my-4 border-0 border-t border-gray-700" />

      {/* 2. 💻 코드 예시 + 실제 데모 */}
      <section className="mb-8">
        <h2 className="text-xl md:text-2xl font-medium mb-4">데모</h2>
        <DemoContainer>
          <OverlayCursorProvider
            key={`${cursorText}-${cursorSize}-${cursorColor}`}
            cursorText={cursorText}
            cursorSize={cursorSize}
            cursorColor={cursorColor}
          >
            <div
              className={`w-full max-w-[480px] h-40 mx-auto rounded-lg shadow-md flex items-center justify-center ${demoTextSize} font-bold text-center px-4`}
              style={{
                backgroundColor: demoBgColor,
                color: demoTextColor,
              }}
            >
              {demoText}
            </div>
          </OverlayCursorProvider>
        </DemoContainer>
        <div className="text-sm text-gray-400 mt-2">
          마우스 커서가 영역 위에서 부드럽게 변형되는 인터랙션을 구현할 수 있습니다.
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
            {/* CURSOR TEXT */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-200 uppercase tracking-wide">Cursor Text</label>
              <p className="text-xs text-gray-400">커서 안에 표시될 텍스트</p>
              <input
                type="text"
                value={cursorText}
                onChange={(e) => setCursorText(e.target.value)}
                className="w-full px-3 py-2 text-sm border border-gray-600 rounded-md bg-black/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent placeholder-gray-400"
                placeholder="커서 텍스트를 입력하세요"
              />
            </div>

            {/* CURSOR SIZE */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-200 uppercase tracking-wide">Cursor Size</label>
              <p className="text-xs text-gray-400">커서 크기</p>
              <div className="flex items-center space-x-3">
                <input
                  type="range"
                  min="30"
                  max="150"
                  value={cursorSize}
                  onChange={(e) => setCursorSize(Number(e.target.value))}
                  className="flex-1 h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                  type="number"
                  value={cursorSize}
                  onChange={(e) => setCursorSize(Number(e.target.value))}
                  className="w-16 px-2 py-1 text-sm border border-gray-600 rounded text-center bg-black/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                  min="30"
                  max="150"
                />
              </div>
            </div>

            {/* CURSOR COLOR */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-200 uppercase tracking-wide">Cursor Color</label>
              <p className="text-xs text-gray-400">커서 배경 색상</p>
              <div className="flex items-center space-x-3 mb-2">
                <input
                  type="color"
                  value={cursorColor}
                  onChange={(e) => setCursorColor(e.target.value)}
                  className="w-12 h-8 border border-gray-600 rounded cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                  type="text"
                  value={cursorColor}
                  onChange={(e) => setCursorColor(e.target.value)}
                  className="flex-1 px-3 py-1 text-sm border border-gray-600 rounded bg-black/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400"
                  placeholder="#ff69b4"
                />
              </div>
              <div className="flex flex-wrap gap-1">
                {COLOR_PRESETS.map((preset) => (
                  <button
                    key={preset.value}
                    onClick={() => setCursorColor(preset.value)}
                    className="w-6 h-6 rounded border border-gray-600 hover:scale-110 transition-transform"
                    style={{ backgroundColor: preset.value }}
                    title={preset.label}
                  />
                ))}
              </div>
            </div>

            {/* DEMO TEXT */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-200 uppercase tracking-wide">Demo Text</label>
              <p className="text-xs text-gray-400">데모 영역의 텍스트</p>
              <textarea
                value={demoText}
                onChange={(e) => setDemoText(e.target.value)}
                className="w-full px-3 py-2 text-sm border border-gray-600 rounded-md bg-black/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent resize-none placeholder-gray-400"
                rows={2}
                placeholder="데모 텍스트를 입력하세요"
              />
            </div>

            {/* DEMO TEXT SIZE */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-200 uppercase tracking-wide">Demo Text Size</label>
              <p className="text-xs text-gray-400">데모 텍스트 크기</p>
              <select
                value={demoTextSize}
                onChange={(e) => setDemoTextSize(e.target.value)}
                className="w-full px-3 py-2 text-sm border border-gray-600 rounded bg-black/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                {TEXT_SIZE_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value} className="bg-gray-800 text-white">
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* DEMO TEXT COLOR */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-200 uppercase tracking-wide">Demo Text Color</label>
              <p className="text-xs text-gray-400">데모 텍스트 색상</p>
              <div className="flex items-center space-x-3">
                <input
                  type="color"
                  value={demoTextColor}
                  onChange={(e) => setDemoTextColor(e.target.value)}
                  className="w-12 h-8 border border-gray-600 rounded cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                  type="text"
                  value={demoTextColor}
                  onChange={(e) => setDemoTextColor(e.target.value)}
                  className="flex-1 px-3 py-1 text-sm border border-gray-600 rounded bg-black/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400"
                  placeholder="#ec4899"
                />
              </div>
            </div>

            {/* DEMO BACKGROUND COLOR */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-200 uppercase tracking-wide">Demo Background</label>
              <p className="text-xs text-gray-400">데모 영역 배경색</p>
              <div className="flex items-center space-x-3">
                <input
                  type="color"
                  value={demoBgColor}
                  onChange={(e) => setDemoBgColor(e.target.value)}
                  className="w-12 h-8 border border-gray-600 rounded cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                  type="text"
                  value={demoBgColor}
                  onChange={(e) => setDemoBgColor(e.target.value)}
                  className="flex-1 px-3 py-1 text-sm border border-gray-600 rounded bg-black/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400"
                  placeholder="#ffffff"
                />
              </div>
            </div>
          </div>

          {/* 리셋 버튼 */}
          <div className="mt-6 pt-4 border-t border-gray-700">
            <button
              onClick={() => {
                setCursorText(OVERLAY_CURSOR_DEFAULTS.cursorText);
                setCursorSize(OVERLAY_CURSOR_DEFAULTS.cursorSize);
                setCursorColor(OVERLAY_CURSOR_DEFAULTS.cursorColor);
                setDemoText(OVERLAY_CURSOR_DEFAULTS.demoText);
                setDemoTextSize(OVERLAY_CURSOR_DEFAULTS.demoTextSize);
                setDemoTextColor(OVERLAY_CURSOR_DEFAULTS.demoTextColor);
                setDemoBgColor(OVERLAY_CURSOR_DEFAULTS.demoBgColor);
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
        <ul className="text-base text-white ml-4 list-disc list-inside">
          <li>버튼, 카드, 이미지 등 특정 영역에 마우스 오버 효과를 주고 싶을 때</li>
          <li>커스텀 커서로 브랜드 아이덴티티를 강조하고 싶을 때</li>
          <li>UX를 한층 더 세련되게 만들고 싶을 때</li>
          <li>인터랙티브한 포트폴리오나 갤러리 사이트</li>
          <li>프리미엄 브랜드의 웹사이트</li>
        </ul>
      </section>

      {/* 4. 🧠 아이디어 구체화 (인터랙션 흐름 시나리오) */}
      <section className="mb-8">
        <h2 className="text-xl md:text-2xl font-medium mb-4">아이디어 구체화 (인터랙션 흐름 시나리오)</h2>
        <ol className="text-base text-white ml-4 list-decimal list-inside mb-2">
          <li>기본 커서 대신, 영역 위에 올리면 커서가 부드럽게 변형된다.</li>
          <li>커서의 색상, 크기, 투명도 등을 커스텀할 수 있다.</li>
          <li>영역을 벗어나면 자연스럽게 원래 커서로 복귀한다.</li>
          <li>텍스트나 아이콘을 커서 안에 표시할 수 있다.</li>
        </ol>
        <div className="text-sm text-gray-400">
          💡 오버레이 커서는 <b>몰입감</b>과 <b>브랜드 경험</b>을 동시에 줄 수 있는 트렌디한 인터랙션입니다.
        </div>
      </section>
    </div>
  );
}
