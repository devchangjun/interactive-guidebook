import { ReactNode } from "react";

interface ControlPanelWrapperProps {
  children: ReactNode;
  className?: string;
}

/**
 * ControlPanelWrapper 컴포넌트
 * - 컨트롤 패널의 공통 스타일을 제공합니다.
 * - 그리드 패턴 배경과 일관된 디자인을 적용합니다.
 */
export default function ControlPanelWrapper({ children, className = "" }: ControlPanelWrapperProps) {
  return (
    <div
      className={`p-4 md:p-6 bg-[#1a1a1a] rounded-xl border border-gray-200 dark:border-neutral-800 ${className}`}
      style={{
        backgroundImage:
          "radial-gradient(circle, #444 1.5px, transparent 1.5px), radial-gradient(circle, #222 1.5px, transparent 1.5px)",
        backgroundSize: "20px 20px",
        backgroundPosition: "0 0, 10px 10px",
      }}
    >
      {children}
    </div>
  );
}
