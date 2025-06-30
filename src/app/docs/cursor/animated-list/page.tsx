"use client";

import { useState } from "react";
import AnimatedTextListWithCursor from "@/components/common/framer-motion/AnimatedTextListWithCursor";
import DemoContainer from "@/components/common/DemoContainer";
import Title from "../../components/Title";
import {
  ANIMATED_LIST_DEFAULTS,
  FONT_SIZE_OPTIONS,
  FONT_WEIGHT_OPTIONS,
  COLOR_OPTIONS,
  GAP_OPTIONS,
  IMAGE_SIZE_OPTIONS,
  BORDER_RADIUS_OPTIONS,
  DEFAULT_IMAGES,
} from "./constants";

export default function AnimatedTextListPage() {
  // 컨트롤 상태
  const [cities, setCities] = useState(ANIMATED_LIST_DEFAULTS.cities);
  const [fontSize, setFontSize] = useState(ANIMATED_LIST_DEFAULTS.fontSize);
  const [fontWeight, setFontWeight] = useState(ANIMATED_LIST_DEFAULTS.fontWeight);
  const [textColor, setTextColor] = useState(ANIMATED_LIST_DEFAULTS.textColor);
  const [codeColor, setCodeColor] = useState(ANIMATED_LIST_DEFAULTS.codeColor);
  const [gap, setGap] = useState(ANIMATED_LIST_DEFAULTS.gap);
  const [imageSize, setImageSize] = useState(ANIMATED_LIST_DEFAULTS.imageSize);
  const [borderRadius, setBorderRadius] = useState(ANIMATED_LIST_DEFAULTS.borderRadius);

  // 도시 수정 함수
  const updateCity = (index: number, field: string, value: string) => {
    const newCities = [...cities];
    newCities[index] = { ...newCities[index], [field]: value };
    setCities(newCities);
  };

  return (
    <div>
      <Title>애니메이티드 리스트 (Animated Text List With Cursor)</Title>
      <hr className="my-4 border-0 border-t border-gray-700" />

      <section className="mb-8">
        <DemoContainer>
          <AnimatedTextListWithCursor
            cities={cities}
            fontSize={fontSize}
            fontWeight={fontWeight}
            textColor={textColor}
            codeColor={codeColor}
            gap={gap}
            imageSize={imageSize}
            borderRadius={borderRadius}
          />
        </DemoContainer>
        <div className="text-sm text-gray-400 mt-2">
          <b>framer-motion</b>을 활용해 리스트 hover 시 컬러/애니메이션, 마우스 이동에 따라 skew 효과, 커스텀 커서
          이미지를 구현합니다.
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
            {/* CITY ITEMS */}
            <div className="space-y-4 md:col-span-2 lg:col-span-3">
              <label className="text-sm font-medium text-gray-200 uppercase tracking-wide">List Items</label>
              <p className="text-xs text-gray-400">리스트 설정</p>
              {cities.map((city, index) => (
                <div
                  key={index}
                  className="grid gap-4 md:grid-cols-3 p-4 bg-black/20 rounded-lg border border-gray-700"
                >
                  <div className="space-y-2">
                    <label className="text-xs text-gray-300">Code</label>
                    <input
                      type="text"
                      value={city.code}
                      onChange={(e) => updateCity(index, "code", e.target.value)}
                      className="w-full px-3 py-2 text-sm border border-gray-600 rounded-md bg-black/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                      placeholder="01"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs text-gray-300">Name</label>
                    <input
                      type="text"
                      value={city.name}
                      onChange={(e) => updateCity(index, "name", e.target.value)}
                      className="w-full px-3 py-2 text-sm border border-gray-600 rounded-md bg-black/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                      placeholder="Tokyo"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs text-gray-300">Image</label>
                    <select
                      value={city.img}
                      onChange={(e) => updateCity(index, "img", e.target.value)}
                      className="w-full px-3 py-2 text-sm border border-gray-600 rounded bg-black/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                      {DEFAULT_IMAGES.map((img) => (
                        <option key={img} value={img} className="bg-gray-800 text-white">
                          {img}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              ))}
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
              <p className="text-xs text-gray-400">메인 텍스트 색상</p>
              <select
                value={textColor}
                onChange={(e) => setTextColor(e.target.value)}
                className="w-full px-3 py-2 text-sm border border-gray-600 rounded bg-black/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                {COLOR_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value} className="bg-gray-800 text-white">
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* CODE COLOR */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-200 uppercase tracking-wide">Code Color</label>
              <p className="text-xs text-gray-400">코드 텍스트 색상</p>
              <select
                value={codeColor}
                onChange={(e) => setCodeColor(e.target.value)}
                className="w-full px-3 py-2 text-sm border border-gray-600 rounded bg-black/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                {COLOR_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value} className="bg-gray-800 text-white">
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* GAP */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-200 uppercase tracking-wide">Gap</label>
              <p className="text-xs text-gray-400">항목 간 간격</p>
              <select
                value={gap}
                onChange={(e) => setGap(e.target.value)}
                className="w-full px-3 py-2 text-sm border border-gray-600 rounded bg-black/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                {GAP_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value} className="bg-gray-800 text-white">
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* IMAGE SIZE */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-200 uppercase tracking-wide">Image Size</label>
              <p className="text-xs text-gray-400">커서 이미지 크기</p>
              <select
                value={imageSize}
                onChange={(e) => setImageSize(e.target.value)}
                className="w-full px-3 py-2 text-sm border border-gray-600 rounded bg-black/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                {IMAGE_SIZE_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value} className="bg-gray-800 text-white">
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* BORDER RADIUS */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-200 uppercase tracking-wide">Border Radius</label>
              <p className="text-xs text-gray-400">이미지 둥글기</p>
              <select
                value={borderRadius}
                onChange={(e) => setBorderRadius(e.target.value)}
                className="w-full px-3 py-2 text-sm border border-gray-600 rounded bg-black/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                {BORDER_RADIUS_OPTIONS.map((option) => (
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
                setCities(ANIMATED_LIST_DEFAULTS.cities);
                setFontSize(ANIMATED_LIST_DEFAULTS.fontSize);
                setFontWeight(ANIMATED_LIST_DEFAULTS.fontWeight);
                setTextColor(ANIMATED_LIST_DEFAULTS.textColor);
                setCodeColor(ANIMATED_LIST_DEFAULTS.codeColor);
                setGap(ANIMATED_LIST_DEFAULTS.gap);
                setImageSize(ANIMATED_LIST_DEFAULTS.imageSize);
                setBorderRadius(ANIMATED_LIST_DEFAULTS.borderRadius);
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
