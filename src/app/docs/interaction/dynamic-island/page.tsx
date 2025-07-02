"use client";

import { useState } from "react";
import DemoContainer from "@/components/common/DemoContainer";
import DynamicIsland from "@/components/common/framer-motion/DynamicIsland";
import Title from "../../components/Title";
import {
  DYNAMIC_ISLAND_DEFAULTS,
  BACKGROUND_COLOR_OPTIONS,
  SIZE_PRESETS,
  CONTENT_EXAMPLES,
  ANIMATION_PRESETS,
} from "./constants";

export default function DynamicIslandDocsPage() {
  // 상태 관리
  const [isExpanded, setIsExpanded] = useState(false);
  const [collapsedWidth, setCollapsedWidth] = useState(DYNAMIC_ISLAND_DEFAULTS.collapsedWidth);
  const [collapsedHeight, setCollapsedHeight] = useState(DYNAMIC_ISLAND_DEFAULTS.collapsedHeight);
  const [expandedWidth, setExpandedWidth] = useState(DYNAMIC_ISLAND_DEFAULTS.expandedWidth);
  const [expandedHeight, setExpandedHeight] = useState(DYNAMIC_ISLAND_DEFAULTS.expandedHeight);
  const [backgroundColor, setBackgroundColor] = useState(DYNAMIC_ISLAND_DEFAULTS.backgroundColor);
  const [expandedBackgroundColor, setExpandedBackgroundColor] = useState(
    DYNAMIC_ISLAND_DEFAULTS.expandedBackgroundColor
  );
  const [animationDuration, setAnimationDuration] = useState(DYNAMIC_ISLAND_DEFAULTS.animationDuration);
  const [springStiffness, setSpringStiffness] = useState(DYNAMIC_ISLAND_DEFAULTS.springStiffness);
  const [springDamping, setSpringDamping] = useState(DYNAMIC_ISLAND_DEFAULTS.springDamping);
  const [clickToToggle, setClickToToggle] = useState(DYNAMIC_ISLAND_DEFAULTS.clickToToggle);
  const [hoverToExpand, setHoverToExpand] = useState(DYNAMIC_ISLAND_DEFAULTS.hoverToExpand);
  const [autoCollapse, setAutoCollapse] = useState(DYNAMIC_ISLAND_DEFAULTS.autoCollapse);
  const [autoCollapseDelay] = useState(DYNAMIC_ISLAND_DEFAULTS.autoCollapseDelay);
  const [selectedContentExample, setSelectedContentExample] = useState("simple");

  // 사이즈 프리셋 적용
  const applySizePreset = (preset: (typeof SIZE_PRESETS)[0]) => {
    setCollapsedWidth(preset.collapsedWidth);
    setCollapsedHeight(preset.collapsedHeight);
    setExpandedWidth(preset.expandedWidth);
    setExpandedHeight(preset.expandedHeight);
  };

  // 애니메이션 프리셋 적용
  const applyAnimationPreset = (preset: (typeof ANIMATION_PRESETS)[0]) => {
    setAnimationDuration(preset.duration);
    setSpringStiffness(preset.stiffness);
    setSpringDamping(preset.damping);
  };

  // 현재 선택된 콘텐츠 예제
  const currentContentExample = CONTENT_EXAMPLES[selectedContentExample as keyof typeof CONTENT_EXAMPLES];

  return (
    <div>
      <Title>Dynamic Island.</Title>
      <hr className="my-4 border-t border-gray-700" />

      <section className="mb-8">
        <p className="text-gray-300 mb-6">
          iOS Dynamic Island를 모방한 확장 가능한 인터랙티브 컴포넌트입니다. 클릭이나 호버를 통해 콘텐츠를 확장하고
          축소할 수 있습니다.
        </p>

        <DemoContainer className="mb-4 flex justify-center items-center min-h-[200px]">
          <DynamicIsland
            isExpanded={isExpanded}
            onToggle={setIsExpanded}
            collapsedWidth={collapsedWidth}
            collapsedHeight={collapsedHeight}
            expandedWidth={expandedWidth}
            expandedHeight={expandedHeight}
            backgroundColor={backgroundColor}
            expandedBackgroundColor={expandedBackgroundColor}
            animationDuration={animationDuration}
            springConfig={{
              stiffness: springStiffness,
              damping: springDamping,
            }}
            clickToToggle={clickToToggle}
            hoverToExpand={hoverToExpand}
            autoCollapse={autoCollapse}
            autoCollapseDelay={autoCollapseDelay}
            collapsedContent={<div className="text-lg">{currentContentExample.collapsed}</div>}
            expandedContent={
              <div className="flex items-center space-x-3">
                <div className="text-lg">{currentContentExample.collapsed}</div>
                <span className="text-sm font-medium">{currentContentExample.expanded}</span>
              </div>
            }
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
            {/* 콘텐츠 예제 선택 */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-200 uppercase tracking-wide">Content Example</label>
              <p className="text-xs text-gray-400">표시할 콘텐츠 유형</p>
              <select
                value={selectedContentExample}
                onChange={(e) => setSelectedContentExample(e.target.value)}
                className="w-full px-3 py-2 text-sm border border-gray-600 rounded bg-black/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                {Object.entries(CONTENT_EXAMPLES).map(([key, content]) => (
                  <option key={key} value={key} className="bg-gray-800 text-white">
                    {content.collapsed} {key.charAt(0).toUpperCase() + key.slice(1)}
                  </option>
                ))}
              </select>
            </div>

            {/* 사이즈 프리셋 */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-200 uppercase tracking-wide">Size Preset</label>
              <p className="text-xs text-gray-400">사전 정의된 크기</p>
              <div className="flex space-x-2">
                {SIZE_PRESETS.map((preset) => (
                  <button
                    key={preset.name}
                    onClick={() => applySizePreset(preset)}
                    className="px-3 py-1 text-xs border border-gray-600 rounded bg-black/20 text-white hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  >
                    {preset.name}
                  </button>
                ))}
              </div>
            </div>

            {/* 애니메이션 프리셋 */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-200 uppercase tracking-wide">Animation Preset</label>
              <p className="text-xs text-gray-400">애니메이션 스타일</p>
              <div className="flex space-x-2">
                {ANIMATION_PRESETS.map((preset) => (
                  <button
                    key={preset.name}
                    onClick={() => applyAnimationPreset(preset)}
                    className="px-3 py-1 text-xs border border-gray-600 rounded bg-black/20 text-white hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  >
                    {preset.name}
                  </button>
                ))}
              </div>
            </div>

            {/* 축소 상태 너비 */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-200 uppercase tracking-wide">Collapsed Width</label>
              <p className="text-xs text-gray-400">축소 시 너비 (px)</p>
              <div className="flex items-center space-x-3">
                <input
                  type="range"
                  min="80"
                  max="200"
                  step="10"
                  value={collapsedWidth}
                  onChange={(e) => setCollapsedWidth(Number(e.target.value))}
                  className="flex-1 h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                  type="number"
                  value={collapsedWidth}
                  onChange={(e) => setCollapsedWidth(Number(e.target.value))}
                  className="w-16 px-2 py-1 text-sm border border-gray-600 rounded text-center bg-black/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                  min="80"
                  max="200"
                />
              </div>
            </div>

            {/* 축소 상태 높이 */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-200 uppercase tracking-wide">Collapsed Height</label>
              <p className="text-xs text-gray-400">축소 시 높이 (px)</p>
              <div className="flex items-center space-x-3">
                <input
                  type="range"
                  min="24"
                  max="60"
                  step="4"
                  value={collapsedHeight}
                  onChange={(e) => setCollapsedHeight(Number(e.target.value))}
                  className="flex-1 h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                  type="number"
                  value={collapsedHeight}
                  onChange={(e) => setCollapsedHeight(Number(e.target.value))}
                  className="w-16 px-2 py-1 text-sm border border-gray-600 rounded text-center bg-black/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                  min="24"
                  max="60"
                />
              </div>
            </div>

            {/* 확장 상태 너비 */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-200 uppercase tracking-wide">Expanded Width</label>
              <p className="text-xs text-gray-400">확장 시 너비 (px)</p>
              <div className="flex items-center space-x-3">
                <input
                  type="range"
                  min="250"
                  max="500"
                  step="10"
                  value={expandedWidth}
                  onChange={(e) => setExpandedWidth(Number(e.target.value))}
                  className="flex-1 h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                  type="number"
                  value={expandedWidth}
                  onChange={(e) => setExpandedWidth(Number(e.target.value))}
                  className="w-16 px-2 py-1 text-sm border border-gray-600 rounded text-center bg-black/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                  min="250"
                  max="500"
                />
              </div>
            </div>

            {/* 확장 상태 높이 */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-200 uppercase tracking-wide">Expanded Height</label>
              <p className="text-xs text-gray-400">확장 시 높이 (px)</p>
              <div className="flex items-center space-x-3">
                <input
                  type="range"
                  min="60"
                  max="150"
                  step="10"
                  value={expandedHeight}
                  onChange={(e) => setExpandedHeight(Number(e.target.value))}
                  className="flex-1 h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                  type="number"
                  value={expandedHeight}
                  onChange={(e) => setExpandedHeight(Number(e.target.value))}
                  className="w-16 px-2 py-1 text-sm border border-gray-600 rounded text-center bg-black/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                  min="60"
                  max="150"
                />
              </div>
            </div>

            {/* 배경색 */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-200 uppercase tracking-wide">Background Color</label>
              <p className="text-xs text-gray-400">축소 상태 배경색</p>
              <select
                value={backgroundColor}
                onChange={(e) => setBackgroundColor(e.target.value)}
                className="w-full px-3 py-2 text-sm border border-gray-600 rounded bg-black/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                {BACKGROUND_COLOR_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value} className="bg-gray-800 text-white">
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* 확장 배경색 */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-200 uppercase tracking-wide">Expanded Background</label>
              <p className="text-xs text-gray-400">확장 상태 배경색</p>
              <select
                value={expandedBackgroundColor}
                onChange={(e) => setExpandedBackgroundColor(e.target.value)}
                className="w-full px-3 py-2 text-sm border border-gray-600 rounded bg-black/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                {BACKGROUND_COLOR_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value} className="bg-gray-800 text-white">
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* 애니메이션 지속시간 */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-200 uppercase tracking-wide">Animation Duration</label>
              <p className="text-xs text-gray-400">애니메이션 시간 (초)</p>
              <div className="flex items-center space-x-3">
                <input
                  type="range"
                  min="0.1"
                  max="2.0"
                  step="0.1"
                  value={animationDuration}
                  onChange={(e) => setAnimationDuration(Number(e.target.value))}
                  className="flex-1 h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                  type="number"
                  value={animationDuration}
                  onChange={(e) => setAnimationDuration(Number(e.target.value))}
                  className="w-16 px-2 py-1 text-sm border border-gray-600 rounded text-center bg-black/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                  min="0.1"
                  max="2.0"
                  step="0.1"
                />
              </div>
            </div>

            {/* 인터랙션 옵션들 */}
            <div className="space-y-2 md:col-span-2 lg:col-span-3">
              <label className="text-sm font-medium text-gray-200 uppercase tracking-wide">Interaction Options</label>
              <div className="flex flex-wrap gap-4">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={clickToToggle}
                    onChange={(e) => setClickToToggle(e.target.checked)}
                    className="w-4 h-4 text-blue-600 bg-gray-600 border-gray-600 rounded focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-300">Click to Toggle</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={hoverToExpand}
                    onChange={(e) => setHoverToExpand(e.target.checked)}
                    className="w-4 h-4 text-blue-600 bg-gray-600 border-gray-600 rounded focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-300">Hover to Expand</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={autoCollapse}
                    onChange={(e) => setAutoCollapse(e.target.checked)}
                    className="w-4 h-4 text-blue-600 bg-gray-600 border-gray-600 rounded focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-300">Auto Collapse</span>
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* 사용 예제 코드 */}
        <div className="mt-8 p-4 bg-[#0d1117] rounded-lg border border-gray-700">
          <h3 className="text-lg font-semibold text-white mb-3">사용 예제</h3>
          <pre className="text-sm text-gray-300 overflow-x-auto">
            {`import DynamicIsland from "@/components/common/framer-motion/DynamicIsland";

function MyComponent() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <DynamicIsland
      isExpanded={isExpanded}
      onToggle={setIsExpanded}
      collapsedContent={<span>💎</span>}
      expandedContent={
        <div className="flex items-center space-x-3">
          <span>💎</span>
          <span>Dynamic Island is Active!</span>
        </div>
      }
    />
  );
}`}
          </pre>
        </div>
      </section>
    </div>
  );
}
