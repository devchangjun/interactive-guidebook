"use client";

import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import menuTree from "./menuTree";

export default function DocsSidebar() {
  const pathname = usePathname();
  // 모바일 아코디언 상태: 카테고리별 펼침 여부
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  // 반응형 체크
  const isMobile = typeof window !== "undefined" && window.matchMedia("(max-width: 768px)").matches;

  // 모바일에서 카테고리 클릭 시 펼침/접힘 토글
  const handleAccordion = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <nav aria-label="인터랙션 가이드북" className="w-full max-w-[300px] px-4">
      <div className="sticky top-16">
        <h2 className="text-sm font-semibold mb-4 text-[#fff]">인터랙션 가이드북</h2>
        <ul className="flex flex-col space-y-1">
          {menuTree.map((category, idx) => {
            // 모바일: 아코디언, 데스크탑: 항상 펼침
            const expanded = isMobile ? openIdx === idx : true;
            return (
              <li key={category.category} className="mb-4">
                <button
                  type="button"
                  aria-expanded={expanded}
                  aria-controls={`category-panel-${idx}`}
                  onClick={() => isMobile && handleAccordion(idx)}
                  className={`
                    w-full text-left text-sm font-medium mb-1 py-1
                    text-[#fff] transition-colors
                    flex items-center justify-between
                    ${isMobile ? "cursor-pointer" : "cursor-default"}
                  `}
                >
                  {category.category}
                  {isMobile && <span className="text-xs text-[#fff]">{expanded ? "▲" : "▼"}</span>}
                </button>
                <ul
                  id={`category-panel-${idx}`}
                  className={`
                    space-y-0.5 pl-3 border-l border-[#eaeaea]
                    ${expanded ? "block" : "hidden"}
                  `}
                >
                  {category.items.map((item) => {
                    // 현재 경로와 메뉴 경로가 일치하면 active
                    const active = pathname === item.path;
                    return (
                      <li key={item.id}>
                        <Link
                          href={item.path}
                          className={`
                            block py-1 px-2 rounded-md text-sm
                            transition-colors
                            ${
                              active
                                ? "text-black font-medium bg-[#fafafa]"
                                : "text-[#666] hover:text-black hover:bg-[#fafafa]"
                            }
                          `}
                          aria-current={active ? "page" : undefined}
                        >
                          <div>{item.name}</div>
                          {item.description && (
                            <div
                              className={`
                              text-xs mt-0.5
                              ${active ? "text-[#666]" : "text-[#888]"}
                            `}
                            >
                              {item.description}
                            </div>
                          )}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

// 설명:
// - 현재 경로에 따라 활성화(active) 메뉴 스타일 적용
// - 모바일(최대 768px)에서는 카테고리별 아코디언 UI 적용
// - 접근성: aria-expanded, aria-controls, aria-current 등 사용
// - 반응형/UX 개선 및 친절한 주석 포함
