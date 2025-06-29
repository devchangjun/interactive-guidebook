"use client";

import { useState } from "react";
import DemoContainer from "@/components/common/DemoContainer";
import RevealText from "@/components/common/framer-motion/typography/reveal-text/RevealText";
import Title from "../../components/Title";
import {
  REVEAL_TEXT_DEFAULTS,
  DIRECTION_OPTIONS,
  FONT_SIZE_OPTIONS,
  FONT_WEIGHT_OPTIONS,
  COLOR_PRESETS,
} from "./constants";

export default function RevealTextDocsPage() {
  // 컨트롤 상태
  const [text, setText] = useState(REVEAL_TEXT_DEFAULTS.text);
  const [direction, setDirection] = useState<"up" | "down" | "left" | "right">(REVEAL_TEXT_DEFAULTS.direction);
  const [delay, setDelay] = useState(REVEAL_TEXT_DEFAULTS.delay);
  const [duration, setDuration] = useState(REVEAL_TEXT_DEFAULTS.duration);
  const [stagger, setStagger] = useState(REVEAL_TEXT_DEFAULTS.stagger);
  const [byWord, setByWord] = useState(REVEAL_TEXT_DEFAULTS.byWord);
  const [fontSize, setFontSize] = useState(REVEAL_TEXT_DEFAULTS.fontSize);
  const [fontWeight, setFontWeight] = useState(REVEAL_TEXT_DEFAULTS.fontWeight);
  const [textColor, setTextColor] = useState(REVEAL_TEXT_DEFAULTS.textColor);

  return (
    <div>
      <Title>Reveal Text.</Title>
      <hr className="my-4 border-0 border-t border-[#eee]" />

      <section className="mb-8">
        <DemoContainer className="mb-4">
          <div className={`${fontSize} ${fontWeight} ${textColor}`}>
            <RevealText
              key={`${text}-${direction}-${delay}-${duration}-${stagger}-${byWord}`}
              text={text}
              direction={direction}
              delay={delay}
              duration={duration}
              stagger={stagger}
              byWord={byWord}
            />
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
            {/* TEXT */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-200 uppercase tracking-wide">Text</label>
              <p className="text-xs text-gray-400">텍스트를 입력하세요</p>
              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="w-full px-3 py-2 text-sm border border-gray-600 rounded-md bg-black/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent resize-none placeholder-gray-400"
                rows={3}
                placeholder="Reveal할 텍스트를 입력하세요"
              />
            </div>

            {/* DIRECTION */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-200 uppercase tracking-wide">Direction</label>
              <p className="text-xs text-gray-400">애니메이션 방향</p>
              <select
                value={direction}
                onChange={(e) => setDirection(e.target.value as "up" | "down" | "left" | "right")}
                className="w-full px-3 py-2 text-sm border border-gray-600 rounded bg-black/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                {DIRECTION_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value} className="bg-gray-800 text-white">
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* DELAY */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-200 uppercase tracking-wide">Start Delay</label>
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

            {/* DURATION */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-200 uppercase tracking-wide">Duration</label>
              <p className="text-xs text-gray-400">각 글자/단어 애니메이션 시간 (초)</p>
              <div className="flex items-center space-x-3">
                <input
                  type="range"
                  min="0.1"
                  max="2"
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
                  max="2"
                  step="0.1"
                />
              </div>
            </div>

            {/* STAGGER */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-200 uppercase tracking-wide">Stagger</label>
              <p className="text-xs text-gray-400">각 글자/단어 사이 간격 (초)</p>
              <div className="flex items-center space-x-3">
                <input
                  type="range"
                  min="0"
                  max="0.3"
                  step="0.01"
                  value={stagger}
                  onChange={(e) => setStagger(Number(e.target.value))}
                  className="flex-1 h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                  type="number"
                  value={stagger}
                  onChange={(e) => setStagger(Number(e.target.value))}
                  className="w-16 px-2 py-1 text-sm border border-gray-600 rounded text-center bg-black/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                  min="0"
                  max="0.3"
                  step="0.01"
                />
              </div>
            </div>

            {/* BY WORD */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-200 uppercase tracking-wide">Animation Unit</label>
              <p className="text-xs text-gray-400">애니메이션 단위</p>
              <div className="flex items-center space-x-4">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="byWord"
                    checked={!byWord}
                    onChange={() => setByWord(false)}
                    className="w-4 h-4 text-blue-600 border-gray-600 focus:ring-blue-500 focus:ring-2 bg-black/20"
                  />
                  <span className="text-sm text-gray-200">글자 단위</span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="byWord"
                    checked={byWord}
                    onChange={() => setByWord(true)}
                    className="w-4 h-4 text-blue-600 border-gray-600 focus:ring-blue-500 focus:ring-2 bg-black/20"
                  />
                  <span className="text-sm text-gray-200">단어 단위</span>
                </label>
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

            {/* TEXT COLOR */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-200 uppercase tracking-wide">Text Color</label>
              <p className="text-xs text-gray-400">텍스트 색상</p>
              <select
                value={textColor}
                onChange={(e) => setTextColor(e.target.value)}
                className="w-full px-3 py-2 text-sm border border-gray-600 rounded bg-black/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                {COLOR_PRESETS.map((option) => (
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
                setText(REVEAL_TEXT_DEFAULTS.text);
                setDirection(REVEAL_TEXT_DEFAULTS.direction);
                setDelay(REVEAL_TEXT_DEFAULTS.delay);
                setDuration(REVEAL_TEXT_DEFAULTS.duration);
                setStagger(REVEAL_TEXT_DEFAULTS.stagger);
                setByWord(REVEAL_TEXT_DEFAULTS.byWord);
                setFontSize(REVEAL_TEXT_DEFAULTS.fontSize);
                setFontWeight(REVEAL_TEXT_DEFAULTS.fontWeight);
                setTextColor(REVEAL_TEXT_DEFAULTS.textColor);
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
