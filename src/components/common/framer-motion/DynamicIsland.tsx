"use client";

import React, { useState, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface DynamicIslandProps {
  // 기본 상태 설정
  isExpanded?: boolean;
  onToggle?: (expanded: boolean) => void;

  // 스타일링
  className?: string;
  backgroundColor?: string;
  expandedBackgroundColor?: string;

  // 크기 설정
  collapsedWidth?: number;
  collapsedHeight?: number;
  expandedWidth?: number;
  expandedHeight?: number;

  // 콘텐츠
  collapsedContent?: ReactNode;
  expandedContent?: ReactNode;

  // 애니메이션 설정
  animationDuration?: number;
  springConfig?: {
    stiffness: number;
    damping: number;
  };

  // 인터랙션 설정
  clickToToggle?: boolean;
  hoverToExpand?: boolean;
  autoCollapse?: boolean;
  autoCollapseDelay?: number;
}

export default function DynamicIsland({
  isExpanded: controlledExpanded,
  onToggle,
  className = "",
  backgroundColor = "#000000",
  expandedBackgroundColor,
  collapsedWidth = 120,
  collapsedHeight = 32,
  expandedWidth = 350,
  expandedHeight = 80,
  collapsedContent,
  expandedContent,
  animationDuration = 0.6,
  springConfig = { stiffness: 300, damping: 30 },
  clickToToggle = true,
  hoverToExpand = false,
  autoCollapse = false,
  autoCollapseDelay = 3000,
}: DynamicIslandProps) {
  const [internalExpanded, setInternalExpanded] = useState(false);

  // 제어된 컴포넌트인지 확인
  const isControlled = controlledExpanded !== undefined;
  const isExpanded = isControlled ? controlledExpanded : internalExpanded;

  // 상태 토글 함수
  const handleToggle = () => {
    const newExpanded = !isExpanded;

    if (isControlled) {
      onToggle?.(newExpanded);
    } else {
      setInternalExpanded(newExpanded);
      onToggle?.(newExpanded);
    }
  };

  // 자동 축소 타이머
  React.useEffect(() => {
    if (isExpanded && autoCollapse) {
      const timer = setTimeout(() => {
        if (isControlled) {
          onToggle?.(false);
        } else {
          setInternalExpanded(false);
        }
      }, autoCollapseDelay);

      return () => clearTimeout(timer);
    }
  }, [isExpanded, autoCollapse, autoCollapseDelay, isControlled, onToggle]);

  // 애니메이션 variants
  const variants = {
    collapsed: {
      width: collapsedWidth,
      height: collapsedHeight,
      borderRadius: collapsedHeight / 2,
    },
    expanded: {
      width: expandedWidth,
      height: expandedHeight,
      borderRadius: 20,
    },
  };

  const contentVariants = {
    collapsed: {
      opacity: 0,
      scale: 0.8,
    },
    expanded: {
      opacity: 1,
      scale: 1,
    },
  };

  return (
    <motion.div
      className={`relative flex items-center justify-center cursor-pointer select-none ${className}`}
      style={{
        backgroundColor: isExpanded ? expandedBackgroundColor || backgroundColor : backgroundColor,
      }}
      variants={variants}
      initial="collapsed"
      animate={isExpanded ? "expanded" : "collapsed"}
      transition={{
        duration: animationDuration,
        type: "spring",
        ...springConfig,
      }}
      onClick={clickToToggle ? handleToggle : undefined}
      onHoverStart={hoverToExpand ? () => !isExpanded && handleToggle() : undefined}
      onHoverEnd={hoverToExpand ? () => isExpanded && handleToggle() : undefined}
      whileHover={!hoverToExpand ? { scale: 1.02 } : undefined}
      whileTap={clickToToggle ? { scale: 0.98 } : undefined}
    >
      <AnimatePresence mode="wait">
        {!isExpanded ? (
          <motion.div
            key="collapsed"
            variants={contentVariants}
            initial="collapsed"
            animate="expanded"
            exit="collapsed"
            transition={{ duration: animationDuration * 0.7 }}
            className="flex items-center justify-center text-white"
          >
            {collapsedContent || <div className="w-2 h-2 bg-white rounded-full" />}
          </motion.div>
        ) : (
          <motion.div
            key="expanded"
            variants={contentVariants}
            initial="collapsed"
            animate="expanded"
            exit="collapsed"
            transition={{ duration: animationDuration * 0.7, delay: animationDuration * 0.3 }}
            className="flex items-center justify-center text-white p-4"
          >
            {expandedContent || (
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-green-500 rounded-full" />
                <span className="text-sm font-medium">Dynamic Island</span>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
