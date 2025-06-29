"use client";

import { useState } from "react";
import DemoContainer from "@/components/common/DemoContainer";
import MorphingText from "@/components/common/framer-motion/typography/morphing-text/MorphingText";
import Title from "../../components/Title";
import { MORPHING_DEFAULTS, FONT_SIZE_OPTIONS, FONT_WEIGHT_OPTIONS, COLOR_PRESETS } from "./constants";

export default function MorphingTextPage() {
  // 컨트롤 상태
  const [texts, setTexts] = useState(MORPHING_DEFAULTS.texts);
  const [morphTime, setMorphTime] = useState(MORPHING_DEFAULTS.morphTime);
  const [cooldownTime, setCooldownTime] = useState(MORPHING_DEFAULTS.cooldownTime);
  const [color, setColor] = useState(MORPHING_DEFAULTS.color);
  const [fontSize, setFontSize] = useState(MORPHING_DEFAULTS.fontSize);
  const [fontWeight, setFontWeight] = useState(MORPHING_DEFAULTS.fontWeight);

  // 텍스트 배열을 문자열로 변환/파싱하는 헬퍼 함수
  const textsToString = (texts: string[]) => texts.join("\n");
  const stringToTexts = (str: string) => str.split("\n").filter((text) => text.trim() !== "");

  return (
    <div>
      <Title>Morphing Text.</Title>
      <hr className="my-4 border-0 border-t border-[#eee]" />

      <section className="mb-8">
        <DemoContainer className="h-48">
          <MorphingText
            key={`${texts.join("-")}-${morphTime}-${cooldownTime}-${color}`}
            texts={texts}
            morphTime={morphTime}
            cooldownTime={cooldownTime}
            color={color}
            className={`${fontSize} ${fontWeight}`}
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
            {/* TEXTS */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-200 uppercase tracking-wide">Texts</label>
              <p className="text-xs text-gray-400">Morphing할 텍스트들 (줄바꿈으로 구분)</p>
              <textarea
                value={textsToString(texts)}
                onChange={(e) => setTexts(stringToTexts(e.target.value))}
                className="w-full px-3 py-2 text-sm border border-gray-600 rounded-md bg-black/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent resize-none placeholder-gray-400"
                rows={4}
                placeholder="각 줄에 하나씩 텍스트를 입력하세요"
              />
            </div>

            {/* MORPH TIME */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-200 uppercase tracking-wide">Morph Time</label>
              <p className="text-xs text-gray-400">변형 애니메이션 시간 (초)</p>
              <div className="flex items-center space-x-3">
                <input
                  type="range"
                  min="0.3"
                  max="3"
                  step="0.1"
                  value={morphTime}
                  onChange={(e) => setMorphTime(Number(e.target.value))}
                  className="flex-1 h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                  type="number"
                  value={morphTime}
                  onChange={(e) => setMorphTime(Number(e.target.value))}
                  className="w-16 px-2 py-1 text-sm border border-gray-600 rounded text-center bg-black/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                  min="0.3"
                  max="3"
                  step="0.1"
                />
              </div>
            </div>

            {/* COOLDOWN TIME */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-200 uppercase tracking-wide">Cooldown Time</label>
              <p className="text-xs text-gray-400">다음 변형까지 대기 시간 (초)</p>
              <div className="flex items-center space-x-3">
                <input
                  type="range"
                  min="0.1"
                  max="3"
                  step="0.1"
                  value={cooldownTime}
                  onChange={(e) => setCooldownTime(Number(e.target.value))}
                  className="flex-1 h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                  type="number"
                  value={cooldownTime}
                  onChange={(e) => setCooldownTime(Number(e.target.value))}
                  className="w-16 px-2 py-1 text-sm border border-gray-600 rounded text-center bg-black/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                  min="0.1"
                  max="3"
                  step="0.1"
                />
              </div>
            </div>

            {/* COLOR */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-200 uppercase tracking-wide">Text Color</label>
              <p className="text-xs text-gray-400">텍스트 색상</p>
              <div className="flex items-center space-x-3 mb-2">
                <input
                  type="color"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                  className="w-12 h-8 border border-gray-600 rounded cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                  type="text"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                  className="flex-1 px-3 py-1 text-sm border border-gray-600 rounded bg-black/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400"
                  placeholder="#003b9a"
                />
              </div>
              <div className="flex flex-wrap gap-1">
                {COLOR_PRESETS.map((preset) => (
                  <button
                    key={preset.value}
                    onClick={() => setColor(preset.value)}
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
          </div>

          {/* 리셋 버튼 */}
          <div className="mt-6 pt-4 border-t border-gray-700">
            <button
              onClick={() => {
                setTexts(MORPHING_DEFAULTS.texts);
                setMorphTime(MORPHING_DEFAULTS.morphTime);
                setCooldownTime(MORPHING_DEFAULTS.cooldownTime);
                setColor(MORPHING_DEFAULTS.color);
                setFontSize(MORPHING_DEFAULTS.fontSize);
                setFontWeight(MORPHING_DEFAULTS.fontWeight);
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
