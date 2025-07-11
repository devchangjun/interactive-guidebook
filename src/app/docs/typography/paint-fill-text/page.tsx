"use client";

import { useState } from "react";
import DemoContainer from "@/components/common/DemoContainer";
import PaintFillText from "@/components/common/framer-motion/typography/paint-fill-text/PaintFillText";
import Title from "../../components/Title";
import { PAINT_FILL_TEXT_DEFAULTS, FONT_SIZE_OPTIONS, FONT_WEIGHT_OPTIONS, COLOR_PRESETS } from "./constants";

export default function PaintFillTextPage() {
  // 컨트롤 상태
  const [text, setText] = useState(PAINT_FILL_TEXT_DEFAULTS.text);
  const [duration, setDuration] = useState(PAINT_FILL_TEXT_DEFAULTS.duration);
  const [delay, setDelay] = useState(PAINT_FILL_TEXT_DEFAULTS.delay);
  const [textColor, setTextColor] = useState(PAINT_FILL_TEXT_DEFAULTS.textColor);
  const [fontSize, setFontSize] = useState(PAINT_FILL_TEXT_DEFAULTS.fontSize);
  const [fontWeight, setFontWeight] = useState(PAINT_FILL_TEXT_DEFAULTS.fontWeight);
  const [trackingTight, setTrackingTight] = useState(PAINT_FILL_TEXT_DEFAULTS.trackingTight);
  const [leadingNone, setLeadingNone] = useState(PAINT_FILL_TEXT_DEFAULTS.leadingNone);

  return (
    <div>
      <Title>Paint Fill Text.</Title>
      <hr className="my-4 border-0 border-t border-[#eee]" />

      <section className="mb-8">
        <DemoContainer className="mb-4 p-8 md:p-16">
          <div className="flex items-center justify-center min-h-[200px]">
            <PaintFillText
              key={`${text}-${duration}-${delay}-${textColor}-${fontSize}-${fontWeight}-${trackingTight}-${leadingNone}`}
              text={text}
              duration={duration}
              delay={delay}
              textColor={textColor}
              fontSize={fontSize}
              fontWeight={fontWeight}
              trackingTight={trackingTight}
              leadingNone={leadingNone}
            />
          </div>
        </DemoContainer>

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
            {/* TEXT */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-200 uppercase tracking-wide">Text</label>
              <p className="text-xs text-gray-400">표시할 텍스트</p>
              <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="w-full px-3 py-2 text-sm border border-gray-600 rounded-md bg-black/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent placeholder-gray-400"
                placeholder="Paint Fill Text"
              />
            </div>

            {/* DURATION */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-200 uppercase tracking-wide">Duration</label>
              <p className="text-xs text-gray-400">애니메이션 지속 시간 (초)</p>
              <div className="flex items-center space-x-3">
                <input
                  type="range"
                  min="0.5"
                  max="5"
                  step="0.1"
                  value={duration}
                  onChange={(e) => setDuration(Number(e.target.value))}
                  className="flex-1 h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                  type="number"
                  value={duration}
                  onChange={(e) => setDuration(Number(e.target.value))}
                  className="w-16 px-2 py-1 text-sm border border-gray-600 rounded text-center bg-black/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                  min="0.5"
                  max="5"
                  step="0.1"
                />
              </div>
            </div>

            {/* DELAY */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-200 uppercase tracking-wide">Delay</label>
              <p className="text-xs text-gray-400">애니메이션 시작 지연 시간 (초)</p>
              <div className="flex items-center space-x-3">
                <input
                  type="range"
                  min="0"
                  max="3"
                  step="0.1"
                  value={delay}
                  onChange={(e) => setDelay(Number(e.target.value))}
                  className="flex-1 h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                  type="number"
                  value={delay}
                  onChange={(e) => setDelay(Number(e.target.value))}
                  className="w-16 px-2 py-1 text-sm border border-gray-600 rounded text-center bg-black/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                  min="0"
                  max="3"
                  step="0.1"
                />
              </div>
            </div>

            {/* TEXT COLOR */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-200 uppercase tracking-wide">Text Color</label>
              <p className="text-xs text-gray-400">채워질 텍스트 색상</p>
              <div className="flex items-center space-x-3 mb-2">
                <input
                  type="color"
                  value={textColor.includes("rgba") ? "#ffffff" : textColor}
                  onChange={(e) => setTextColor(e.target.value)}
                  className="w-12 h-8 border border-gray-600 rounded cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                  type="text"
                  value={textColor}
                  onChange={(e) => setTextColor(e.target.value)}
                  className="flex-1 px-3 py-1 text-sm border border-gray-600 rounded bg-black/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400"
                  placeholder="rgba(255, 255, 255, 1)"
                />
              </div>
              <div className="flex flex-wrap gap-1">
                {COLOR_PRESETS.map((preset) => (
                  <button
                    key={preset.value}
                    onClick={() => setTextColor(preset.value)}
                    className="w-6 h-6 rounded border border-gray-600 hover:scale-110 transition-transform"
                    style={{ backgroundColor: preset.value }}
                    title={preset.label}
                  />
                ))}
              </div>
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

            {/* TOGGLE OPTIONS */}
            <div className="space-y-2 md:col-span-2 lg:col-span-3">
              <label className="text-sm font-medium text-gray-200 uppercase tracking-wide">Typography Options</label>
              <p className="text-xs text-gray-400">텍스트 스타일 옵션</p>
              <div className="flex items-center space-x-6">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={trackingTight}
                    onChange={(e) => setTrackingTight(e.target.checked)}
                    className="w-4 h-4 rounded border-gray-600 bg-black/20 text-blue-600 focus:ring-blue-400 focus:ring-2"
                  />
                  <span className="text-sm text-gray-200">Tracking Tight</span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={leadingNone}
                    onChange={(e) => setLeadingNone(e.target.checked)}
                    className="w-4 h-4 rounded border-gray-600 bg-black/20 text-blue-600 focus:ring-blue-400 focus:ring-2"
                  />
                  <span className="text-sm text-gray-200">Leading None</span>
                </label>
              </div>
            </div>
          </div>

          {/* 리셋 버튼 */}
          <div className="mt-6 pt-4 border-t border-gray-700">
            <button
              onClick={() => {
                setText(PAINT_FILL_TEXT_DEFAULTS.text);
                setDuration(PAINT_FILL_TEXT_DEFAULTS.duration);
                setDelay(PAINT_FILL_TEXT_DEFAULTS.delay);
                setTextColor(PAINT_FILL_TEXT_DEFAULTS.textColor);
                setFontSize(PAINT_FILL_TEXT_DEFAULTS.fontSize);
                setFontWeight(PAINT_FILL_TEXT_DEFAULTS.fontWeight);
                setTrackingTight(PAINT_FILL_TEXT_DEFAULTS.trackingTight);
                setLeadingNone(PAINT_FILL_TEXT_DEFAULTS.leadingNone);
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
