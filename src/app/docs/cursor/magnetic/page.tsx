"use client";

import { useState } from "react";
import DemoContainer from "@/components/common/DemoContainer";
import MagneticCursor from "@/components/common/framer-motion/cursor/MagneticCursor";
import MagneticTargetBox from "@/components/common/framer-motion/cursor/MagneticTargetBox";
import Title from "../../components/Title";
import {
  MAGNETIC_CURSOR_DEFAULTS,
  BOX_COLOR_OPTIONS,
  TEXT_COLOR_OPTIONS,
  BORDER_STYLE_OPTIONS,
  BORDER_COLOR_OPTIONS,
  FONT_SIZE_OPTIONS,
  FONT_WEIGHT_OPTIONS,
} from "./constants";

export default function MagneticCursorDocsPage() {
  // 컨트롤 상태
  const [boxWidth, setBoxWidth] = useState(MAGNETIC_CURSOR_DEFAULTS.boxWidth);
  const [boxHeight, setBoxHeight] = useState(MAGNETIC_CURSOR_DEFAULTS.boxHeight);
  const [boxText, setBoxText] = useState(MAGNETIC_CURSOR_DEFAULTS.boxText);
  const [boxColor, setBoxColor] = useState(MAGNETIC_CURSOR_DEFAULTS.boxColor);
  const [textColor, setTextColor] = useState(MAGNETIC_CURSOR_DEFAULTS.textColor);
  const [borderStyle, setBorderStyle] = useState(MAGNETIC_CURSOR_DEFAULTS.borderStyle);
  const [borderColor, setBorderColor] = useState(MAGNETIC_CURSOR_DEFAULTS.borderColor);
  const [fontSize, setFontSize] = useState(MAGNETIC_CURSOR_DEFAULTS.fontSize);
  const [fontWeight, setFontWeight] = useState(MAGNETIC_CURSOR_DEFAULTS.fontWeight);

  return (
    <div>
      <MagneticCursor />
      <Title>Magnetic Cursor</Title>
      <hr className="my-4 border-0 border-t border-[#eee]" />

      {/* 2. 💻 코드 예시 + 실제 데모 */}
      <section className="mb-8">
        <h2 className="text-xl md:text-2xl font-medium mb-4">데모</h2>
        <DemoContainer className="mb-4">
          <div className="flex flex-wrap items-center justify-center gap-6">
            <MagneticTargetBox>{boxText}</MagneticTargetBox>
            <MagneticTargetBox className="bg-red-600 text-white border-dashed border-white">HOVER</MagneticTargetBox>
            <MagneticTargetBox className="bg-green-600 text-white border-solid border-yellow-400">
              INTERACT
            </MagneticTargetBox>
          </div>
        </DemoContainer>
        <div className="text-sm text-[#888] mt-2">
          마우스를 박스 위에 올려보세요. 커서가 자석처럼 끌리는 효과를 확인할 수 있습니다.
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
            {/* BOX TEXT */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-200 uppercase tracking-wide">Box Text</label>
              <p className="text-xs text-gray-400">박스에 표시될 텍스트</p>
              <input
                type="text"
                value={boxText}
                onChange={(e) => setBoxText(e.target.value)}
                className="w-full px-3 py-2 text-sm border border-gray-600 rounded-md bg-black/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent placeholder-gray-400"
                placeholder="박스 텍스트를 입력하세요"
              />
            </div>

            {/* BOX WIDTH */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-200 uppercase tracking-wide">Box Width</label>
              <p className="text-xs text-gray-400">박스 너비 (px)</p>
              <div className="flex items-center space-x-3">
                <input
                  type="range"
                  min="100"
                  max="400"
                  step="10"
                  value={boxWidth}
                  onChange={(e) => setBoxWidth(Number(e.target.value))}
                  className="flex-1 h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                  type="number"
                  value={boxWidth}
                  onChange={(e) => setBoxWidth(Number(e.target.value))}
                  className="w-16 px-2 py-1 text-sm border border-gray-600 rounded text-center bg-black/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                  min="100"
                  max="400"
                  step="10"
                />
              </div>
            </div>

            {/* BOX HEIGHT */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-200 uppercase tracking-wide">Box Height</label>
              <p className="text-xs text-gray-400">박스 높이 (px)</p>
              <div className="flex items-center space-x-3">
                <input
                  type="range"
                  min="60"
                  max="200"
                  step="10"
                  value={boxHeight}
                  onChange={(e) => setBoxHeight(Number(e.target.value))}
                  className="flex-1 h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                  type="number"
                  value={boxHeight}
                  onChange={(e) => setBoxHeight(Number(e.target.value))}
                  className="w-16 px-2 py-1 text-sm border border-gray-600 rounded text-center bg-black/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                  min="60"
                  max="200"
                  step="10"
                />
              </div>
            </div>

            {/* BOX COLOR */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-200 uppercase tracking-wide">Box Color</label>
              <p className="text-xs text-gray-400">박스 배경색</p>
              <select
                value={boxColor}
                onChange={(e) => setBoxColor(e.target.value)}
                className="w-full px-3 py-2 text-sm border border-gray-600 rounded bg-black/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                {BOX_COLOR_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value} className="bg-gray-800 text-white">
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* TEXT COLOR */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-200 uppercase tracking-wide">Text Color</label>
              <p className="text-xs text-gray-400">텍스트 색상</p>
              <select
                value={textColor}
                onChange={(e) => setTextColor(e.target.value)}
                className="w-full px-3 py-2 text-sm border border-gray-600 rounded bg-black/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                {TEXT_COLOR_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value} className="bg-gray-800 text-white">
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* BORDER STYLE */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-200 uppercase tracking-wide">Border Style</label>
              <p className="text-xs text-gray-400">테두리 스타일</p>
              <select
                value={borderStyle}
                onChange={(e) => setBorderStyle(e.target.value)}
                className="w-full px-3 py-2 text-sm border border-gray-600 rounded bg-black/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                {BORDER_STYLE_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value} className="bg-gray-800 text-white">
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* BORDER COLOR */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-200 uppercase tracking-wide">Border Color</label>
              <p className="text-xs text-gray-400">테두리 색상</p>
              <select
                value={borderColor}
                onChange={(e) => setBorderColor(e.target.value)}
                className="w-full px-3 py-2 text-sm border border-gray-600 rounded bg-black/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                {BORDER_COLOR_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value} className="bg-gray-800 text-white">
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* FONT SIZE */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-200 uppercase tracking-wide">Font Size</label>
              <p className="text-xs text-gray-400">텍스트 크기</p>
              <select
                value={fontSize}
                onChange={(e) => setFontSize(e.target.value)}
                className="w-full px-3 py-2 text-sm border border-gray-600 rounded bg-black/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                {FONT_SIZE_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value} className="bg-gray-800 text-white">
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* FONT WEIGHT */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-200 uppercase tracking-wide">Font Weight</label>
              <p className="text-xs text-gray-400">글꼴 두께</p>
              <select
                value={fontWeight}
                onChange={(e) => setFontWeight(e.target.value)}
                className="w-full px-3 py-2 text-sm border border-gray-600 rounded bg-black/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                {FONT_WEIGHT_OPTIONS.map((option) => (
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
                setBoxWidth(MAGNETIC_CURSOR_DEFAULTS.boxWidth);
                setBoxHeight(MAGNETIC_CURSOR_DEFAULTS.boxHeight);
                setBoxText(MAGNETIC_CURSOR_DEFAULTS.boxText);
                setBoxColor(MAGNETIC_CURSOR_DEFAULTS.boxColor);
                setTextColor(MAGNETIC_CURSOR_DEFAULTS.textColor);
                setBorderStyle(MAGNETIC_CURSOR_DEFAULTS.borderStyle);
                setBorderColor(MAGNETIC_CURSOR_DEFAULTS.borderColor);
                setFontSize(MAGNETIC_CURSOR_DEFAULTS.fontSize);
                setFontWeight(MAGNETIC_CURSOR_DEFAULTS.fontWeight);
              }}
              className="px-4 py-2 text-sm bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              기본값으로 리셋
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
