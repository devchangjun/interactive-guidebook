"use client";

import { useState } from "react";
import DocsSidebar from "./components/DocsSidebar";

export default function DocsPageLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen">
      {/* Hamburger Menu for Mobile */}
      <button
        type="button"
        className="fixed top-5 left-4 z-50 rounded-md bg-gray-800 p-2 text-white md:hidden"
        onClick={() => setSidebarOpen(!isSidebarOpen)}
        aria-label="Open sidebar"
      >
        <svg
          className="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={isSidebarOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
          />
        </svg>
      </button>
      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 z-40 h-screen w-[260px] flex-col gap-2 bg-[#18181b] p-8 pr-4 text-white
          transform transition-transform duration-300 ease-in-out
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
          md:relative md:flex md:translate-x-0 
        `}
      >
        <DocsSidebar />
      </aside>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black opacity-50 md:hidden"
          onClick={() => setSidebarOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* 우측 상세 컨텐츠 */}
      <main className="mx-auto flex-1 max-w-[900px] px-4 py-8">{children}</main>
    </div>
  );
}
