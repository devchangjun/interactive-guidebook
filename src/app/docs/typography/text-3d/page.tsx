"use client";
import { useState } from "react";
import DemoContainer from "@/components/common/DemoContainer";
import Text3D from "@/components/common/framer-motion/typography/Text3D";
import Title from "../../components/Title";
import { TEXT_3D_INFO } from "./constants";

export default function Text3DPage() {
  // 컨트롤 상태
  const [text, setText] = useState("3D TEXT");
  const [fontSize, setFontSize] = useState(80);
  const [rotateAngle, setRotateAngle] = useState(20);
  const [skewAngle, setSkewAngle] = useState(-20);
  const [baseColor, setBaseColor] = useState("#ffffff");
  const [shadowColor1, setShadowColor1] = useState("#51B3A3");
  const [shadowColor2, setShadowColor2] = useState("#389788");
  const [shadowColor3, setShadowColor3] = useState("#7ee5d6");
  const [backgroundColor, setBackgroundColor] = useState("#59C4B4");
  const [shadowDepth, setShadowDepth] = useState(90);
  const [centered, setCentered] = useState(false); // 데모에서는 false로 시작

  // 새로운 text-shadow 컨트롤 추가
  const [shadowOffsetX, setShadowOffsetX] = useState(1);
  const [shadowOffsetY, setShadowOffsetY] = useState(1);
  const [shadowBlur, setShadowBlur] = useState(0);
  const [shadowSpread, setShadowSpread] = useState(1);

  return (
    <div>
      <Title>3D Text Effect</Title>
      <hr className="my-4 border-t border-gray-700" />

      <section className="mb-8">
        <p className="text-lg text-gray-300 mb-6">{TEXT_3D_INFO.description}</p>

        <div className="mb-4">
          <h3 className="text-lg font-semibold text-white mb-2">주요 기능</h3>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            {TEXT_3D_INFO.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Interactive Playground */}
      <section className="mb-8">
        {/* 데모 영역 */}
        <DemoContainer className="h-[50vh]">
          <div
            className="min-h-32 md:min-h-40 flex items-center justify-center"
            style={{ backgroundColor: centered ? backgroundColor : "transparent" }}
          >
            <Text3D
              text={text}
              fontSize={fontSize}
              rotateAngle={rotateAngle}
              skewAngle={skewAngle}
              baseColor={baseColor}
              shadowColor1={shadowColor1}
              shadowColor2={shadowColor2}
              shadowColor3={shadowColor3}
              backgroundColor={backgroundColor}
              shadowDepth={shadowDepth}
              shadowOffsetX={shadowOffsetX}
              shadowOffsetY={shadowOffsetY}
              shadowBlur={shadowBlur}
              shadowSpread={shadowSpread}
              centered={false} // 데모에서는 항상 false
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
                placeholder="3D 텍스트를 입력하세요"
              />
            </div>

            {/* FONT SIZE */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-200 uppercase tracking-wide">Font Size</label>
              <p className="text-xs text-gray-400">폰트 크기 (px)</p>
              <div className="flex items-center space-x-3">
                <input
                  type="range"
                  min="20"
                  max="120"
                  value={fontSize}
                  onChange={(e) => setFontSize(Number(e.target.value))}
                  className="flex-1 h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                  type="number"
                  value={fontSize}
                  onChange={(e) => setFontSize(Number(e.target.value))}
                  className="w-16 px-2 py-1 text-sm border border-gray-600 rounded text-center bg-black/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                  min="20"
                  max="120"
                />
              </div>
            </div>

            {/* ROTATE ANGLE */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-200 uppercase tracking-wide">Rotate Angle</label>
              <p className="text-xs text-gray-400">회전 각도 (deg)</p>
              <div className="flex items-center space-x-3">
                <input
                  type="range"
                  min="-45"
                  max="45"
                  value={rotateAngle}
                  onChange={(e) => setRotateAngle(Number(e.target.value))}
                  className="flex-1 h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                  type="number"
                  value={rotateAngle}
                  onChange={(e) => setRotateAngle(Number(e.target.value))}
                  className="w-16 px-2 py-1 text-sm border border-gray-600 rounded text-center bg-black/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                  min="-45"
                  max="45"
                />
              </div>
            </div>

            {/* SKEW ANGLE */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-200 uppercase tracking-wide">Skew Angle</label>
              <p className="text-xs text-gray-400">기울임 각도 (deg)</p>
              <div className="flex items-center space-x-3">
                <input
                  type="range"
                  min="-45"
                  max="45"
                  value={skewAngle}
                  onChange={(e) => setSkewAngle(Number(e.target.value))}
                  className="flex-1 h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                  type="number"
                  value={skewAngle}
                  onChange={(e) => setSkewAngle(Number(e.target.value))}
                  className="w-16 px-2 py-1 text-sm border border-gray-600 rounded text-center bg-black/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                  min="-45"
                  max="45"
                />
              </div>
            </div>

            {/* SHADOW DEPTH */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-200 uppercase tracking-wide">Shadow Depth</label>
              <p className="text-xs text-gray-400">그림자 깊이</p>
              <div className="flex items-center space-x-3">
                <input
                  type="range"
                  min="30"
                  max="150"
                  value={shadowDepth}
                  onChange={(e) => setShadowDepth(Number(e.target.value))}
                  className="flex-1 h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                  type="number"
                  value={shadowDepth}
                  onChange={(e) => setShadowDepth(Number(e.target.value))}
                  className="w-16 px-2 py-1 text-sm border border-gray-600 rounded text-center bg-black/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                  min="30"
                  max="150"
                />
              </div>
            </div>

            {/* SHADOW OFFSET X */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-200 uppercase tracking-wide">Shadow Offset X</label>
              <p className="text-xs text-gray-400">그림자 X축 오프셋</p>
              <div className="flex items-center space-x-3">
                <input
                  type="range"
                  min="0"
                  max="10"
                  step="0.1"
                  value={shadowOffsetX}
                  onChange={(e) => setShadowOffsetX(Number(e.target.value))}
                  className="flex-1 h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                  type="number"
                  value={shadowOffsetX}
                  onChange={(e) => setShadowOffsetX(Number(e.target.value))}
                  className="w-16 px-2 py-1 text-sm border border-gray-600 rounded text-center bg-black/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                  min="0"
                  max="10"
                  step="0.1"
                />
              </div>
            </div>

            {/* SHADOW OFFSET Y */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-200 uppercase tracking-wide">Shadow Offset Y</label>
              <p className="text-xs text-gray-400">그림자 Y축 오프셋</p>
              <div className="flex items-center space-x-3">
                <input
                  type="range"
                  min="0"
                  max="10"
                  step="0.1"
                  value={shadowOffsetY}
                  onChange={(e) => setShadowOffsetY(Number(e.target.value))}
                  className="flex-1 h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                  type="number"
                  value={shadowOffsetY}
                  onChange={(e) => setShadowOffsetY(Number(e.target.value))}
                  className="w-16 px-2 py-1 text-sm border border-gray-600 rounded text-center bg-black/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                  min="0"
                  max="10"
                  step="0.1"
                />
              </div>
            </div>

            {/* SHADOW BLUR */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-200 uppercase tracking-wide">Shadow Blur</label>
              <p className="text-xs text-gray-400">그림자 블러</p>
              <div className="flex items-center space-x-3">
                <input
                  type="range"
                  min="0"
                  max="20"
                  value={shadowBlur}
                  onChange={(e) => setShadowBlur(Number(e.target.value))}
                  className="flex-1 h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                  type="number"
                  value={shadowBlur}
                  onChange={(e) => setShadowBlur(Number(e.target.value))}
                  className="w-16 px-2 py-1 text-sm border border-gray-600 rounded text-center bg-black/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                  min="0"
                  max="20"
                />
              </div>
            </div>

            {/* SHADOW SPREAD */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-200 uppercase tracking-wide">Shadow Spread</label>
              <p className="text-xs text-gray-400">그림자 간격 배수</p>
              <div className="flex items-center space-x-3">
                <input
                  type="range"
                  min="0.5"
                  max="3"
                  step="0.1"
                  value={shadowSpread}
                  onChange={(e) => setShadowSpread(Number(e.target.value))}
                  className="flex-1 h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                  type="number"
                  value={shadowSpread}
                  onChange={(e) => setShadowSpread(Number(e.target.value))}
                  className="w-16 px-2 py-1 text-sm border border-gray-600 rounded text-center bg-black/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                  min="0.5"
                  max="3"
                  step="0.1"
                />
              </div>
            </div>

            {/* BASE COLOR */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-200 uppercase tracking-wide">Base Color</label>
              <p className="text-xs text-gray-400">텍스트 기본 색상</p>
              <div className="flex items-center space-x-3">
                <input
                  type="color"
                  value={baseColor}
                  onChange={(e) => setBaseColor(e.target.value)}
                  className="w-12 h-10 border border-gray-600 rounded cursor-pointer bg-transparent"
                />
                <input
                  type="text"
                  value={baseColor}
                  onChange={(e) => setBaseColor(e.target.value)}
                  className="flex-1 px-3 py-2 text-sm border border-gray-600 rounded bg-black/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="#ffffff"
                />
              </div>
            </div>

            {/* SHADOW COLOR 1 */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-200 uppercase tracking-wide">Shadow Color 1</label>
              <p className="text-xs text-gray-400">첫 번째 그림자 색상</p>
              <div className="flex items-center space-x-3">
                <input
                  type="color"
                  value={shadowColor1}
                  onChange={(e) => setShadowColor1(e.target.value)}
                  className="w-12 h-10 border border-gray-600 rounded cursor-pointer bg-transparent"
                />
                <input
                  type="text"
                  value={shadowColor1}
                  onChange={(e) => setShadowColor1(e.target.value)}
                  className="flex-1 px-3 py-2 text-sm border border-gray-600 rounded bg-black/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="#51B3A3"
                />
              </div>
            </div>

            {/* SHADOW COLOR 2 */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-200 uppercase tracking-wide">Shadow Color 2</label>
              <p className="text-xs text-gray-400">두 번째 그림자 색상</p>
              <div className="flex items-center space-x-3">
                <input
                  type="color"
                  value={shadowColor2}
                  onChange={(e) => setShadowColor2(e.target.value)}
                  className="w-12 h-10 border border-gray-600 rounded cursor-pointer bg-transparent"
                />
                <input
                  type="text"
                  value={shadowColor2}
                  onChange={(e) => setShadowColor2(e.target.value)}
                  className="flex-1 px-3 py-2 text-sm border border-gray-600 rounded bg-black/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="#389788"
                />
              </div>
            </div>

            {/* SHADOW COLOR 3 */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-200 uppercase tracking-wide">Shadow Color 3</label>
              <p className="text-xs text-gray-400">세 번째 그림자 색상</p>
              <div className="flex items-center space-x-3">
                <input
                  type="color"
                  value={shadowColor3}
                  onChange={(e) => setShadowColor3(e.target.value)}
                  className="w-12 h-10 border border-gray-600 rounded cursor-pointer bg-transparent"
                />
                <input
                  type="text"
                  value={shadowColor3}
                  onChange={(e) => setShadowColor3(e.target.value)}
                  className="flex-1 px-3 py-2 text-sm border border-gray-600 rounded bg-black/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="#7ee5d6"
                />
              </div>
            </div>

            {/* BACKGROUND COLOR */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-200 uppercase tracking-wide">Background Color</label>
              <p className="text-xs text-gray-400">배경 색상</p>
              <div className="flex items-center space-x-3">
                <input
                  type="color"
                  value={backgroundColor}
                  onChange={(e) => setBackgroundColor(e.target.value)}
                  className="w-12 h-10 border border-gray-600 rounded cursor-pointer bg-transparent"
                />
                <input
                  type="text"
                  value={backgroundColor}
                  onChange={(e) => setBackgroundColor(e.target.value)}
                  className="flex-1 px-3 py-2 text-sm border border-gray-600 rounded bg-black/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="#59C4B4"
                />
              </div>
            </div>

            {/* CENTERED */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-200 uppercase tracking-wide">Background Style</label>
              <p className="text-xs text-gray-400">배경 스타일 적용</p>
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={centered}
                  onChange={(e) => setCentered(e.target.checked)}
                  className="w-4 h-4 text-blue-400 bg-black/20 border-gray-600 rounded focus:ring-blue-400 focus:ring-2"
                />
                <span className="text-sm text-gray-200">배경 색상 적용</span>
              </label>
            </div>
          </div>
        </div>
      </section>

      {/* Full Screen Demo */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold text-white mb-4">전체 화면 데모</h3>
        <p className="text-gray-300 mb-4">아래 버튼을 클릭하면 전체 화면으로 3D 텍스트 효과를 확인할 수 있습니다.</p>
        <button
          onClick={() => {
            const newWindow = window.open("", "_blank");
            if (newWindow) {
              newWindow.document.write(`
                <!DOCTYPE html>
                <html>
                  <head>
                    <title>3D Text Effect</title>
                    <link href="https://fonts.googleapis.com/css?family=Press+Start+2P" rel="stylesheet">
                    <style>
                      * { margin: 0; padding: 0; box-sizing: border-box; }
                      body { 
                        font-family: 'Press Start 2P', cursive; 
                        background: ${backgroundColor}; 
                        overflow: hidden;
                      }
                      .container {
                        margin: auto;
                        top: 0; left: 0; bottom: 0; right: 0;
                        position: absolute;
                        width: fit-content;
                        height: fit-content;
                      }
                      h1 {
                        color: ${baseColor};
                        font-size: ${fontSize}px;
                        transform: rotate(${rotateAngle}deg) skew(${skewAngle}deg);
                        text-shadow: ${(() => {
                          const shadows = [];

                          // 첫 번째 단계: shadowColor1
                          for (let i = 1; i <= 20; i++) {
                            const x = i * shadowOffsetX * shadowSpread;
                            const y = (i + (i > 10 ? i - 10 : 0)) * shadowOffsetY * shadowSpread;
                            shadows.push(`${x}px ${y}px ${shadowBlur}px ${shadowColor1}`);
                          }

                          // 두 번째 단계: shadowColor2
                          for (let i = 21; i <= 47; i++) {
                            const x = (i + Math.floor((i - 21) / 2)) * shadowOffsetX * shadowSpread;
                            const y = (i + Math.floor((i - 21) / 2) + 10) * shadowOffsetY * shadowSpread;
                            shadows.push(`${x}px ${y}px ${shadowBlur}px ${shadowColor2}`);
                          }

                          // 세 번째 단계: shadowColor3
                          for (let i = 48; i <= 64; i++) {
                            const x = (i + (i - 48) * 2) * shadowOffsetX * shadowSpread;
                            const y = (i + (i - 48) * 4 + 1) * shadowOffsetY * shadowSpread;
                            shadows.push(`${x}px ${y}px ${shadowBlur}px ${shadowColor3}`);
                          }

                          // 마지막 단계: shadowColor1 (뒷부분)
                          for (let i = 65; i <= shadowDepth; i++) {
                            const x = (i + (i - 65) * 2) * shadowOffsetX * shadowSpread;
                            const y = (i + (i - 65) * 1 + 15) * shadowOffsetY * shadowSpread;
                            shadows.push(`${x}px ${y}px ${shadowBlur}px ${shadowColor1}`);
                          }

                          return shadows.join(", ");
                        })()};
                        user-select: none;
                        line-height: 1.2;
                        white-space: nowrap;
                      }
                    </style>
                  </head>
                  <body>
                    <div class="container">
                      <h1>${text}</h1>
                    </div>
                  </body>
                </html>
              `);
              newWindow.document.close();
            }
          }}
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200"
        >
          전체 화면으로 보기
        </button>
      </section>
    </div>
  );
}
