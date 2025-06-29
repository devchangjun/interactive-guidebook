"use client";

import { useState } from "react";
import DemoContainer from "@/components/common/DemoContainer";
import { MagneticLetters } from "@/components/common/framer-motion/typography/MagneticLetters";
import Title from "../../components/Title";
import { MAGNETIC_DEFAULTS, FONT_SIZE_OPTIONS, FONT_WEIGHT_OPTIONS, SPACING_OPTIONS, COLOR_PRESETS } from "./constants";

export default function MagneticLettersPage() {
  // 컨트롤 상태
  const [text, setText] = useState(MAGNETIC_DEFAULTS.text);
  const [strength, setStrength] = useState(MAGNETIC_DEFAULTS.strength);
  const [threshold, setThreshold] = useState(MAGNETIC_DEFAULTS.threshold);
  const [stiffness, setStiffness] = useState(MAGNETIC_DEFAULTS.stiffness);
  const [damping, setDamping] = useState(MAGNETIC_DEFAULTS.damping);
  const [textColor, setTextColor] = useState(MAGNETIC_DEFAULTS.textColor);
  const [fontSize, setFontSize] = useState(MAGNETIC_DEFAULTS.fontSize);
  const [fontWeight, setFontWeight] = useState(MAGNETIC_DEFAULTS.fontWeight);
  const [spacing, setSpacing] = useState(MAGNETIC_DEFAULTS.spacing);

  return (
    <div>
      <Title>마그네틱 텍스트 </Title>
      <hr className="my-4 border-0 border-t border-[#fff]" />

      <section className="mb-8">
        <DemoContainer>
          <div className="min-h-32 md:min-h-40 flex items-center justify-center">
            <MagneticLetters
              key={`${text}-${strength}-${threshold}-${stiffness}-${damping}-${textColor}`}
              text={text}
              strength={strength}
              threshold={threshold}
              stiffness={stiffness}
              damping={damping}
              textColor={textColor}
              className={`${fontSize} ${fontWeight} ${spacing}`}
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
              <p className="text-xs text-gray-400">마그네틱 효과를 적용할 텍스트</p>
              <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="w-full px-3 py-2 text-sm border border-gray-600 rounded-md bg-black/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent placeholder-gray-400"
                placeholder="텍스트를 입력하세요"
              />
            </div>

            {/* STRENGTH */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-200 uppercase tracking-wide">Strength</label>
              <p className="text-xs text-gray-400">자석 끌림 강도</p>
              <div className="flex items-center space-x-3">
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={strength}
                  onChange={(e) => setStrength(Number(e.target.value))}
                  className="flex-1 h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                  type="number"
                  value={strength}
                  onChange={(e) => setStrength(Number(e.target.value))}
                  className="w-16 px-2 py-1 text-sm border border-gray-600 rounded text-center bg-black/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                  min="0"
                  max="100"
                />
              </div>
            </div>

            {/* THRESHOLD */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-200 uppercase tracking-wide">Threshold</label>
              <p className="text-xs text-gray-400">영향 범위 배수</p>
              <div className="flex items-center space-x-3">
                <input
                  type="range"
                  min="1"
                  max="15"
                  step="0.5"
                  value={threshold}
                  onChange={(e) => setThreshold(Number(e.target.value))}
                  className="flex-1 h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                  type="number"
                  value={threshold}
                  onChange={(e) => setThreshold(Number(e.target.value))}
                  className="w-16 px-2 py-1 text-sm border border-gray-600 rounded text-center bg-black/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                  min="1"
                  max="15"
                  step="0.5"
                />
              </div>
            </div>

            {/* STIFFNESS */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-200 uppercase tracking-wide">Stiffness</label>
              <p className="text-xs text-gray-400">스프링 강성 (빠르기)</p>
              <div className="flex items-center space-x-3">
                <input
                  type="range"
                  min="50"
                  max="1000"
                  value={stiffness}
                  onChange={(e) => setStiffness(Number(e.target.value))}
                  className="flex-1 h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                  type="number"
                  value={stiffness}
                  onChange={(e) => setStiffness(Number(e.target.value))}
                  className="w-16 px-2 py-1 text-sm border border-gray-600 rounded text-center bg-black/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                  min="50"
                  max="1000"
                />
              </div>
            </div>

            {/* DAMPING */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-200 uppercase tracking-wide">Damping</label>
              <p className="text-xs text-gray-400">스프링 댐핑 (감속)</p>
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

            {/* TEXT COLOR */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-200 uppercase tracking-wide">Text Color</label>
              <p className="text-xs text-gray-400">텍스트 색상</p>
              <div className="flex items-center space-x-3 mb-2">
                <input
                  type="color"
                  value={textColor}
                  onChange={(e) => setTextColor(e.target.value)}
                  className="w-12 h-8 border border-gray-600 rounded cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                  type="text"
                  value={textColor}
                  onChange={(e) => setTextColor(e.target.value)}
                  className="flex-1 px-3 py-1 text-sm border border-gray-600 rounded bg-black/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400"
                  placeholder="#007aff"
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

            {/* SPACING */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-200 uppercase tracking-wide">Letter Spacing</label>
              <p className="text-xs text-gray-400">글자 간격</p>
              <select
                value={spacing}
                onChange={(e) => setSpacing(e.target.value)}
                className="w-full px-3 py-2 text-sm border border-gray-600 rounded bg-black/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                {SPACING_OPTIONS.map((option) => (
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
                setText(MAGNETIC_DEFAULTS.text);
                setStrength(MAGNETIC_DEFAULTS.strength);
                setThreshold(MAGNETIC_DEFAULTS.threshold);
                setStiffness(MAGNETIC_DEFAULTS.stiffness);
                setDamping(MAGNETIC_DEFAULTS.damping);
                setTextColor(MAGNETIC_DEFAULTS.textColor);
                setFontSize(MAGNETIC_DEFAULTS.fontSize);
                setFontWeight(MAGNETIC_DEFAULTS.fontWeight);
                setSpacing(MAGNETIC_DEFAULTS.spacing);
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
