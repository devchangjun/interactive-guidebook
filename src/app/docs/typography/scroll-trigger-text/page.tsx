"use client";
import { useState } from "react";
import ScrollTriggerText from "@/components/common/framer-motion/typography/ScrollTriggerText";
import DemoContainer from "@/components/common/DemoContainer";
import Title from "../../components/Title";
import { SCROLL_TRIGGER_TEXT_DEFAULTS, FONT_SIZE_OPTIONS, COLOR_PRESETS } from "./constants";

export default function ScrollTriggerTextPage() {
  // 컨트롤 상태
  const [text, setText] = useState(SCROLL_TRIGGER_TEXT_DEFAULTS.text);
  const [fromColor, setFromColor] = useState(SCROLL_TRIGGER_TEXT_DEFAULTS.fromColor);
  const [toColor, setToColor] = useState(SCROLL_TRIGGER_TEXT_DEFAULTS.toColor);
  const [duration, setDuration] = useState(SCROLL_TRIGGER_TEXT_DEFAULTS.duration);
  const [fontSize, setFontSize] = useState(SCROLL_TRIGGER_TEXT_DEFAULTS.fontSize);
  const [initialScale, setInitialScale] = useState(SCROLL_TRIGGER_TEXT_DEFAULTS.initialScale);

  return (
    <div className="min-h-[200vh]">
      <Title>Scroll Trigger Text.</Title>
      <hr className="my-4 border-0 border-t border-white" />

      <section className="mb-8">
        <DemoContainer>
          <ScrollTriggerText
            key={`${text}-${fromColor}-${toColor}-${duration}-${fontSize}-${initialScale}`}
            text={text}
            fromColor={fromColor}
            toColor={toColor}
            duration={duration}
            fontSize={fontSize}
            initialScale={initialScale}
            className="font-bold min-h-[50vh] lg:min-h-[100vh]"
          />
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
            <div className="space-y-2 md:col-span-2 lg:col-span-3">
              <label className="text-sm font-medium text-gray-200 uppercase tracking-wide">Text</label>
              <p className="text-xs text-gray-400">표시할 텍스트</p>
              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="w-full px-3 py-2 text-sm border border-gray-600 rounded-md bg-black/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent resize-none placeholder-gray-400"
                rows={3}
                placeholder="텍스트를 입력하세요"
              />
            </div>

            {/* FROM COLOR */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-200 uppercase tracking-wide">시작 색상</label>
              <p className="text-xs text-gray-400">텍스트의 초기 색상</p>
              <div className="flex items-center space-x-3 mb-2">
                <input
                  type="color"
                  value={fromColor}
                  onChange={(e) => setFromColor(e.target.value)}
                  className="w-12 h-8 border border-gray-600 rounded cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                  type="text"
                  value={fromColor}
                  onChange={(e) => setFromColor(e.target.value)}
                  className="flex-1 px-3 py-1 text-sm border border-gray-600 rounded bg-black/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400"
                  placeholder="#888888"
                />
              </div>
              <div className="flex flex-wrap gap-1">
                {COLOR_PRESETS.map((preset) => (
                  <button
                    key={preset.value}
                    onClick={() => setFromColor(preset.value)}
                    className="w-6 h-6 rounded border border-gray-600 hover:scale-110 transition-transform"
                    style={{ backgroundColor: preset.value }}
                    title={preset.label}
                  />
                ))}
              </div>
            </div>

            {/* TO COLOR */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-200 uppercase tracking-wide">끝 색상</label>
              <p className="text-xs text-gray-400">스크롤 시 변할 색상</p>
              <div className="flex items-center space-x-3 mb-2">
                <input
                  type="color"
                  value={toColor}
                  onChange={(e) => setToColor(e.target.value)}
                  className="w-12 h-8 border border-gray-600 rounded cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                  type="text"
                  value={toColor}
                  onChange={(e) => setToColor(e.target.value)}
                  className="flex-1 px-3 py-1 text-sm border border-gray-600 rounded bg-black/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400"
                  placeholder="#FFD600"
                />
              </div>
              <div className="flex flex-wrap gap-1">
                {COLOR_PRESETS.map((preset) => (
                  <button
                    key={preset.value}
                    onClick={() => setToColor(preset.value)}
                    className="w-6 h-6 rounded border border-gray-600 hover:scale-110 transition-transform"
                    style={{ backgroundColor: preset.value }}
                    title={preset.label}
                  />
                ))}
              </div>
            </div>

            {/* DURATION */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-200 uppercase tracking-wide">애니메이션 시간</label>
              <p className="text-xs text-gray-400">색상 변화 애니메이션 지속시간 (초)</p>
              <div className="flex items-center space-x-3">
                <input
                  type="range"
                  min="0.1"
                  max="3"
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
                  min="0.1"
                  max="3"
                  step="0.1"
                />
              </div>
            </div>

            {/* FONT SIZE */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-200 uppercase tracking-wide">폰트 크기</label>
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

            {/* INITIAL SCALE */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-200 uppercase tracking-wide">초기 스케일</label>
              <p className="text-xs text-gray-400">텍스트의 초기 크기 비율</p>
              <div className="flex items-center space-x-3">
                <input
                  type="range"
                  min="0.1"
                  max="1"
                  step="0.1"
                  value={initialScale}
                  onChange={(e) => setInitialScale(Number(e.target.value))}
                  className="flex-1 h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                  type="number"
                  value={initialScale}
                  onChange={(e) => setInitialScale(Number(e.target.value))}
                  className="w-16 px-2 py-1 text-sm border border-gray-600 rounded text-center bg-black/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                  min="0.1"
                  max="1"
                  step="0.1"
                />
              </div>
            </div>
          </div>

          {/* 리셋 버튼 */}
          <div className="mt-6 pt-4 border-t border-gray-700">
            <button
              onClick={() => {
                setText(SCROLL_TRIGGER_TEXT_DEFAULTS.text);
                setFromColor(SCROLL_TRIGGER_TEXT_DEFAULTS.fromColor);
                setToColor(SCROLL_TRIGGER_TEXT_DEFAULTS.toColor);
                setDuration(SCROLL_TRIGGER_TEXT_DEFAULTS.duration);
                setFontSize(SCROLL_TRIGGER_TEXT_DEFAULTS.fontSize);
                setInitialScale(SCROLL_TRIGGER_TEXT_DEFAULTS.initialScale);
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
