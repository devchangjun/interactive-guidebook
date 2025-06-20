"use client";
import React, { useState } from "react";

/**
 * 결과물 데모를 위한 재사용 가능한 박스 컴포넌트입니다.
 * - 내부에 점(dot) grid 배경이 적용됩니다.
 * - 우측 상단에 리셋 버튼이 있습니다.
 * - children으로 데모 컴포넌트를 전달하세요.
 * - 반응형 및 접근성을 고려했습니다.
 */
export interface ResultBoxProps {
  children: React.ReactNode;
  onReset?: () => void;
  style?: React.CSSProperties;
  className?: string;
}

export const ResultBox: React.FC<ResultBoxProps> = ({ children, onReset, style, className = "" }) => {
  // 리셋 버튼 클릭 시 애니메이션 리셋을 위해 내부 key를 변경합니다.
  const [resetKey, setResetKey] = useState(0);

  const handleReset = () => {
    setResetKey((k) => k + 1);
    if (onReset) onReset();
  };

  return (
    <div
      className={`w-full relative overflow-hidden rounded-xl border border-gray-200 dark:border-neutral-800 bg-[#1a1a1a] p-6 sm:p-8 flex justify-center min-h-[120px] ${className}`}
      style={{
        ...style,
        backgroundImage:
          "radial-gradient(circle, #444 1.5px, transparent 1.5px), radial-gradient(circle, #222 1.5px, transparent 1.5px)",
        backgroundSize: "20px 20px",
        backgroundPosition: "0 0, 10px 10px",
      }}
    >
      <button
        onClick={handleReset}
        className="absolute right-3 top-3 z-10 bg-neutral-900/80 hover:bg-green-400 text-white text-xs px-3 py-1 rounded-md transition-colors duration-150 shadow"
        aria-label="리셋"
        type="button"
      >
        리셋
      </button>
      <div key={resetKey} className="w-full flex items-center justify-center">
        {children}
      </div>
    </div>
  );
};
