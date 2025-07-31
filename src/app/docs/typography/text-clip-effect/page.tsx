"use client";
import { useState } from "react";
import DemoContainer from "@/components/common/DemoContainer";
import TextClipEffectItem from "@/components/common/framer-motion/typography/TextClipEffectItem";
import ControlPanelWrapper from "@/components/common/ControlPanelWrapper";
import Title from "../../components/Title";
import {
  TEXT_CLIP_EFFECT_DEFAULTS,
  FONT_SIZE_OPTIONS,
  FONT_WEIGHT_OPTIONS,
  COLOR_PRESETS,
  SCROLL_TRIGGER_POSITIONS,
  END_POSITIONS,
} from "./constants";

export default function TextClipEffectPage() {
  // 컨트롤 상태
  const [items, setItems] = useState(TEXT_CLIP_EFFECT_DEFAULTS.items);
  const [clipColor, setClipColor] = useState(TEXT_CLIP_EFFECT_DEFAULTS.clipColor);
  const [fontSize, setFontSize] = useState(TEXT_CLIP_EFFECT_DEFAULTS.fontSize);
  const [fontWeight, setFontWeight] = useState(TEXT_CLIP_EFFECT_DEFAULTS.fontWeight);
  const [showMarkers, setShowMarkers] = useState(TEXT_CLIP_EFFECT_DEFAULTS.showMarkers);
  const [startPosition, setStartPosition] = useState(TEXT_CLIP_EFFECT_DEFAULTS.startPosition);
  const [endPosition, setEndPosition] = useState(TEXT_CLIP_EFFECT_DEFAULTS.endPosition);
  const [scrubEffect, setScrubEffect] = useState(TEXT_CLIP_EFFECT_DEFAULTS.scrubEffect);

  // 텍스트 배열을 문자열로 변환/파싱하는 헬퍼 함수
  const itemsToString = (items: typeof TEXT_CLIP_EFFECT_DEFAULTS.items) =>
    items.map((item) => `${item.main}|${item.sub}`).join("\n");

  const stringToItems = (str: string) =>
    str
      .split("\n")
      .filter((line) => line.trim() !== "")
      .map((line) => {
        const [main, sub] = line.split("|");
        return { main: main || "", sub: sub || main || "" };
      });

  return (
    <div>
      <Title>Text Clip.</Title>
      <hr className="my-4 border-0 border-t border-white" />

      <section className="mb-8">
        <DemoContainer className="mb-4 p-8 md:p-16">
          <div className={`flex flex-col gap-8 ${fontWeight}`}>
            {items.map((item, index) => (
              <TextClipEffectItem
                key={`${item.main}-${index}-${clipColor}-${showMarkers}-${startPosition}-${endPosition}-${scrubEffect}`}
                main={item.main}
                sub={item.sub}
                className={fontSize}
                clipColor={clipColor}
                showMarkers={showMarkers}
                startPosition={startPosition}
                endPosition={endPosition}
                scrubEffect={scrubEffect}
              />
            ))}
          </div>
        </DemoContainer>

        {/* 컨트롤 패널 */}
        <ControlPanelWrapper>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* TEXT ITEMS */}
            <div className="space-y-2 md:col-span-2 lg:col-span-3">
              <label className="text-sm font-medium text-gray-200 uppercase tracking-wide">Text Items</label>
              <p className="text-xs text-gray-400">텍스트 항목들 (main|sub 형식으로 줄바꿈으로 구분)</p>
              <textarea
                value={itemsToString(items)}
                onChange={(e) => setItems(stringToItems(e.target.value))}
                className="w-full px-3 py-2 text-sm border border-gray-600 rounded-md bg-black/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent resize-none placeholder-gray-400"
                rows={4}
                placeholder="Hello|Hello&#10;javascript|javascript&#10;typescript|typescript"
              />
            </div>

            {/* CLIP COLOR */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-200 uppercase tracking-wide">Clip Color</label>
              <p className="text-xs text-gray-400">클립 배경 색상</p>
              <div className="flex items-center space-x-3 mb-2">
                <input
                  type="color"
                  value={clipColor}
                  onChange={(e) => setClipColor(e.target.value)}
                  className="w-12 h-8 border border-gray-600 rounded cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                  type="text"
                  value={clipColor}
                  onChange={(e) => setClipColor(e.target.value)}
                  className="flex-1 px-3 py-1 text-sm border border-gray-600 rounded bg-black/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400"
                  placeholder="#ffffff"
                />
              </div>
              <div className="flex flex-wrap gap-1">
                {COLOR_PRESETS.map((preset) => (
                  <button
                    key={preset.value}
                    onClick={() => setClipColor(preset.value)}
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

            {/* START POSITION */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-200 uppercase tracking-wide">Start Position</label>
              <p className="text-xs text-gray-400">애니메이션 시작 위치</p>
              <select
                value={startPosition}
                onChange={(e) => setStartPosition(e.target.value)}
                className="w-full px-3 py-2 text-sm border border-gray-600 rounded bg-black/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                {SCROLL_TRIGGER_POSITIONS.map((option) => (
                  <option key={option.value} value={option.value} className="bg-gray-800 text-white">
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* END POSITION */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-200 uppercase tracking-wide">End Position</label>
              <p className="text-xs text-gray-400">애니메이션 끝 위치</p>
              <select
                value={endPosition}
                onChange={(e) => setEndPosition(e.target.value)}
                className="w-full px-3 py-2 text-sm border border-gray-600 rounded bg-black/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                {END_POSITIONS.map((option) => (
                  <option key={option.value} value={option.value} className="bg-gray-800 text-white">
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* TOGGLE OPTIONS */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-200 uppercase tracking-wide">Options</label>
              <p className="text-xs text-gray-400">애니메이션 옵션</p>
              <div className="space-y-3">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={showMarkers}
                    onChange={(e) => setShowMarkers(e.target.checked)}
                    className="w-4 h-4 rounded border-gray-600 bg-black/20 text-blue-600 focus:ring-blue-400 focus:ring-2"
                  />
                  <span className="text-sm text-gray-200">Show Markers</span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={scrubEffect}
                    onChange={(e) => setScrubEffect(e.target.checked)}
                    className="w-4 h-4 rounded border-gray-600 bg-black/20 text-blue-600 focus:ring-blue-400 focus:ring-2"
                  />
                  <span className="text-sm text-gray-200">Scrub Effect</span>
                </label>
              </div>
            </div>
          </div>

          {/* 리셋 버튼 */}
          <div className="mt-6 pt-4 border-t border-gray-700">
            <button
              onClick={() => {
                setItems(TEXT_CLIP_EFFECT_DEFAULTS.items);
                setClipColor(TEXT_CLIP_EFFECT_DEFAULTS.clipColor);
                setFontSize(TEXT_CLIP_EFFECT_DEFAULTS.fontSize);
                setFontWeight(TEXT_CLIP_EFFECT_DEFAULTS.fontWeight);
                setShowMarkers(TEXT_CLIP_EFFECT_DEFAULTS.showMarkers);
                setStartPosition(TEXT_CLIP_EFFECT_DEFAULTS.startPosition);
                setEndPosition(TEXT_CLIP_EFFECT_DEFAULTS.endPosition);
                setScrubEffect(TEXT_CLIP_EFFECT_DEFAULTS.scrubEffect);
              }}
              className="px-4 py-2 text-sm bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              기본값으로 리셋
            </button>
          </div>
        </ControlPanelWrapper>
      </section>
    </div>
  );
}
