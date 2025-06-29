"use client";

import { useState } from "react";
import DemoContainer from "@/components/common/DemoContainer";
import ScrollMarqueeText from "@/components/common/framer-motion/typography/ScrollMarqueeText";
import Title from "../../components/Title";

export default function ScrollMarqueePage() {
  // 컨트롤 상태
  const [texts, setTexts] = useState([
    "Let's Dive Into This Tutorial",
    "Take It Easy!",
    "Don't Worry Let's Code",
    "Happy Coding",
  ]);
  const [baseSpeed, setBaseSpeed] = useState(50);
  const [fontSize, setFontSize] = useState("clamp(2.5rem, 5vw, 5rem)");
  const [color, setColor] = useState("#ffffff");
  const [backgroundColor, setBackgroundColor] = useState("transparent");
  const [direction, setDirection] = useState(false);

  // 텍스트 배열을 문자열로 변환/파싱하는 헬퍼 함수
  const textsToString = (texts: string[]) => texts.join("\n");
  const stringToTexts = (str: string) => str.split("\n").filter((text) => text.trim() !== "");

  return (
    <div>
      <Title>마퀴 텍스트</Title>
      <hr className="my-4 border-0 border-t border-gray-600" />

      {/* Interactive Playground */}
      <section className="mb-8">
        {/* 데모 영역 */}
        <DemoContainer className="relative h-[60vh] border-none bg-gradient-to-b from-gray-900 to-gray-800 bg-cover bg-center no-repeat shadow-lg">
          <ScrollMarqueeText
            key={`${texts.join("-")}-${baseSpeed}-${fontSize}-${color}-${backgroundColor}-${direction}`}
            texts={texts}
            baseSpeed={baseSpeed}
            fontSize={fontSize}
            color={color}
            backgroundColor={backgroundColor}
            direction={direction}
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
              <p className="text-xs text-gray-400">마키에 표시될 텍스트 (줄바꿈으로 구분)</p>
              <textarea
                value={textsToString(texts)}
                onChange={(e) => setTexts(stringToTexts(e.target.value))}
                className="w-full px-3 py-2 text-sm border border-gray-600 rounded-md bg-black/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent resize-none placeholder-gray-400"
                rows={4}
                placeholder="각 줄에 하나씩 텍스트를 입력하세요"
              />
            </div>

            {/* BASE SPEED */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-200 uppercase tracking-wide">Base Speed</label>
              <p className="text-xs text-gray-400">기본 스크롤 속도</p>
              <div className="flex items-center space-x-3">
                <input
                  type="range"
                  min="10"
                  max="200"
                  value={baseSpeed}
                  onChange={(e) => setBaseSpeed(Number(e.target.value))}
                  className="flex-1 h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                  type="number"
                  value={baseSpeed}
                  onChange={(e) => setBaseSpeed(Number(e.target.value))}
                  className="w-16 px-2 py-1 text-sm border border-gray-600 rounded text-center bg-black/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                  min="10"
                  max="200"
                />
              </div>
            </div>

            {/* FONT SIZE */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-200 uppercase tracking-wide">Font Size</label>
              <p className="text-xs text-gray-400">텍스트 크기 (CSS 단위)</p>
              <select
                value={fontSize}
                onChange={(e) => setFontSize(e.target.value)}
                className="w-full px-3 py-2 text-sm border border-gray-600 rounded bg-black/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option value="clamp(1rem, 2vw, 2rem)" className="bg-gray-800 text-white">
                  Small (clamp(1rem, 2vw, 2rem))
                </option>
                <option value="clamp(1.5rem, 3vw, 3rem)" className="bg-gray-800 text-white">
                  Medium (clamp(1.5rem, 3vw, 3rem))
                </option>
                <option value="clamp(2.5rem, 5vw, 5rem)" className="bg-gray-800 text-white">
                  Large (clamp(2.5rem, 5vw, 5rem))
                </option>
                <option value="clamp(3rem, 8vw, 8rem)" className="bg-gray-800 text-white">
                  Extra Large (clamp(3rem, 8vw, 8rem))
                </option>
                <option value="2rem" className="bg-gray-800 text-white">
                  Fixed 2rem
                </option>
                <option value="4rem" className="bg-gray-800 text-white">
                  Fixed 4rem
                </option>
                <option value="6rem" className="bg-gray-800 text-white">
                  Fixed 6rem
                </option>
              </select>
            </div>

            {/* TEXT COLOR */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-200 uppercase tracking-wide">Text Color</label>
              <p className="text-xs text-gray-400">텍스트 색상</p>
              <div className="flex items-center space-x-3">
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
                  placeholder="#ffffff"
                />
              </div>
            </div>

            {/* BACKGROUND COLOR */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-200 uppercase tracking-wide">Background Color</label>
              <p className="text-xs text-gray-400">배경 색상</p>
              <div className="flex items-center space-x-3">
                <select
                  value={backgroundColor}
                  onChange={(e) => setBackgroundColor(e.target.value)}
                  className="flex-1 px-3 py-2 text-sm border border-gray-600 rounded bg-black/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  <option value="transparent" className="bg-gray-800 text-white">
                    Transparent
                  </option>
                  <option value="#000000" className="bg-gray-800 text-white">
                    Black
                  </option>
                  <option value="#ffffff" className="bg-gray-800 text-white">
                    White
                  </option>
                  <option value="#ef4444" className="bg-gray-800 text-white">
                    Red
                  </option>
                  <option value="#f97316" className="bg-gray-800 text-white">
                    Orange
                  </option>
                  <option value="#eab308" className="bg-gray-800 text-white">
                    Yellow
                  </option>
                  <option value="#22c55e" className="bg-gray-800 text-white">
                    Green
                  </option>
                  <option value="#3b82f6" className="bg-gray-800 text-white">
                    Blue
                  </option>
                  <option value="#8b5cf6" className="bg-gray-800 text-white">
                    Purple
                  </option>
                </select>
              </div>
            </div>

            {/* DIRECTION */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-200 uppercase tracking-wide">Direction</label>
              <p className="text-xs text-gray-400">스크롤 방향</p>
              <div className="flex items-center space-x-4">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="direction"
                    checked={!direction}
                    onChange={() => setDirection(false)}
                    className="w-4 h-4 text-blue-600 border-gray-600 focus:ring-blue-500 focus:ring-2 bg-black/20"
                  />
                  <span className="text-sm text-gray-200">← 왼쪽</span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="direction"
                    checked={direction}
                    onChange={() => setDirection(true)}
                    className="w-4 h-4 text-blue-600 border-gray-600 focus:ring-blue-500 focus:ring-2 bg-black/20"
                  />
                  <span className="text-sm text-gray-200">오른쪽 →</span>
                </label>
              </div>
            </div>
          </div>

          {/* 리셋 버튼 */}
          <div className="mt-6 flex justify-end">
            <button
              onClick={() => {
                setTexts(["Let's Dive Into This Tutorial", "Take It Easy!", "Don't Worry Let's Code", "Happy Coding"]);
                setBaseSpeed(50);
                setFontSize("clamp(2.5rem, 5vw, 5rem)");
                setColor("#ffffff");
                setBackgroundColor("transparent");
                setDirection(false);
              }}
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-colors"
            >
              Reset to Default
            </button>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-xl md:text-2xl font-medium text-white">응용 예제</h2>
        <DemoContainer className="relative h-[60vh] border-none bg-gradient-to-b from-gray-900 to-gray-800 bg-cover bg-center no-repeat shadow-lg overflow-hidden">
          <div>
            <div className="relative rotate-5 transform bg-red-500">
              <ScrollMarqueeText
                texts={["Let's Dive Into This Tutorial", "Take It Easy!", "Don't Worry Let's Code", "Happy Coding"]}
                baseSpeed={50}
                fontSize="clamp(2.5rem, 5vw, 5rem)"
                color="#fff"
                className="rounded-md bg-red-500 p-4 font-bold tracking-tighter"
              />
            </div>
            <div className="relative rotate-5 transform bg-orange-500">
              <ScrollMarqueeText
                texts={["Let's Dive Into This Tutorial", "Take It Easy!", "Don't Worry Let's Code", "Happy Coding"]}
                baseSpeed={50}
                fontSize="clamp(2.5rem, 5vw, 5rem)"
                color="#fff"
                direction={true}
                className="rounded-md bg-orange-500 p-4 font-bold tracking-tighter"
              />
            </div>
          </div>
        </DemoContainer>
      </section>
    </div>
  );
}
