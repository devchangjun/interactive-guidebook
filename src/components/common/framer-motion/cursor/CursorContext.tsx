"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface CursorStyle {
  cursorText?: string;
  cursorSize?: number;
  cursorColor?: string;
}

interface CursorContextType extends CursorStyle {
  setCursor: (style: CursorStyle) => void;
  resetCursor: () => void;
}

const defaultStyle: CursorStyle = {
  cursorText: "",
  cursorSize: 48,
  cursorColor: "#ff69b4",
};

const CursorContext = createContext<CursorContextType | undefined>(undefined);

export function CursorProvider({ children }: { children: ReactNode }) {
  const [style, setStyle] = useState<CursorStyle>(defaultStyle);

  const setCursor = (newStyle: CursorStyle) => {
    setStyle((prev) => ({ ...prev, ...newStyle }));
  };
  const resetCursor = () => setStyle(defaultStyle);

  return <CursorContext.Provider value={{ ...style, setCursor, resetCursor }}>{children}</CursorContext.Provider>;
}

export function useCursor() {
  const ctx = useContext(CursorContext);
  if (!ctx) throw new Error("useCursor must be used within a CursorProvider");
  return ctx;
}
