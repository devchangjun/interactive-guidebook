"use client";
import React from "react";
import { CursorProvider } from "@/components/common/framer-motion/cursor/CursorContext";
import GlobalCursor from "@/components/common/framer-motion/cursor/GlobalCursor";

export default function OverlayCursorDemoLayout({ children }: { children: React.ReactNode }) {
  return (
    <CursorProvider>
      <GlobalCursor />
      {children}
    </CursorProvider>
  );
}
