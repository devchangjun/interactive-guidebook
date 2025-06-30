"use client";

import React from "react";

interface Text3DProps {
  text: string;
  fontSize?: number;
  rotateAngle?: number;
  skewAngle?: number;
  className?: string;
  baseColor?: string;
  shadowColor1?: string;
  shadowColor2?: string;
  shadowColor3?: string;
  backgroundColor?: string;
  fontFamily?: string;
  shadowDepth?: number;
  centered?: boolean;
  shadowOffsetX?: number;
  shadowOffsetY?: number;
  shadowBlur?: number;
  shadowSpread?: number;
}

const Text3D: React.FC<Text3DProps> = ({
  text,
  fontSize = 80,
  rotateAngle = 20,
  skewAngle = -20,
  className = "",
  baseColor = "#ffffff",
  shadowColor1 = "#51B3A3",
  shadowColor2 = "#389788",
  shadowColor3 = "#7ee5d6",
  backgroundColor = "#59C4B4",
  fontFamily = "'Press Start 2P', cursive",
  shadowDepth = 90,
  centered = true,
  shadowOffsetX = 1,
  shadowOffsetY = 1,
  shadowBlur = 0,
  shadowSpread = 1,
}) => {
  // 3D text-shadow 생성 함수
  const generateTextShadow = () => {
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
  };

  const containerStyle = centered
    ? {
        position: "absolute" as const,
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        margin: "auto",
        width: "fit-content",
        height: "fit-content",
        maxWidth: "90vw",
        maxHeight: "90vh",
      }
    : {};

  const textStyle = {
    fontFamily,
    fontSize: `${fontSize}px`,
    color: baseColor,
    textShadow: generateTextShadow(),
    transform: `rotate(${rotateAngle}deg) skew(${skewAngle}deg)`,
    WebkitTransform: `rotate(${rotateAngle}deg) skew(${skewAngle}deg)`,
    MozTransform: `rotate(${rotateAngle}deg) skew(${skewAngle}deg)`,
    OTransform: `rotate(${rotateAngle}deg) skew(${skewAngle}deg)`,
    msTransform: `rotate(${rotateAngle}deg) skew(${skewAngle}deg)`,
    userSelect: "none" as const,
    lineHeight: "1.2",
    whiteSpace: "nowrap" as const,
  };

  const backgroundStyle = {
    backgroundColor,
    minHeight: "100vh",
    width: "100%",
    position: "relative" as const,
    overflow: "hidden",
  };

  if (centered) {
    return (
      <div style={backgroundStyle}>
        <div style={containerStyle}>
          <h1 style={textStyle} className={className}>
            {text}
          </h1>
        </div>
      </div>
    );
  }

  return (
    <h1 style={textStyle} className={className}>
      {text}
    </h1>
  );
};

export default Text3D;
