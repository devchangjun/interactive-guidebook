"use client";

import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";

// 기존 animations 배열 (주석 처리)
// const animations = [
//   {
//     id: "parallax",
//     name: "Parallax Image",
//     description: "스크롤에 따라 움직이는 패럴럭스 이미지",
//   },
//   {
//     id: "typography-animation",
//     name: "Typing Effect",
//     description: "자연스러운 타이핑 애니메이션",
//   },
//   {
//     id: "animated-text-list",
//     name: "Cursor Image hover",
//     description: "텍스트 리스트 + 커서 이미지 hover 인터랙션",
//   },
// ];

// 트리형 카테고리/서브카테고리 데이터 구조 예시
const menuTree = [
  {
    category: "Typography",
    items: [
      {
        id: "typing",
        name: "텍스트 타이핑 효과",
        description: "자연스러운 타이핑 애니메이션",
        path: "/docs/typography/typing",
      },
      {
        id: "scramble",
        name: "텍스트 스크램블 효과",
        description: "문자가 랜덤하게 섞이며 나타나는 효과",
        path: "/docs/typography/scramble",
      },

      {
        id: "magnetic",
        name: "마그네틱 텍스트",
        description: "마우스에 반응하는 마그네틱 텍스트",
        path: "/docs/typography/magnetic",
      },
    ],
  },
  {
    category: "Interaction",
    items: [
      {
        id: "animated-list",
        name: "애니메이티드 텍스트 리스트",
        description: "텍스트 리스트 + 커서 이미지 hover 인터랙션",
        path: "/docs/interaction/animated-list",
      },
      {
        id: "tilt-card",
        name: "틸트 카드",
        description: "마우스 움직임에 반응하는 3D 카드",
        path: "/docs/interaction/tilt-card",
      },
      {
        id: "parallax",
        name: "패럴럭스 이미지",
        description: "스크롤에 따라 움직이는 패럴럭스 이미지",
        path: "/docs/interaction/parallax",
      },
    ],
  },
  // 필요시 카테고리 추가
];

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
    <nav aria-label="인터랙션 가이드북">
      <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 16 }}>인터랙션 가이드북</h2>
      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 16 }}>
        {menuTree.map((category, idx) => {
          // 모바일: 아코디언, 데스크탑: 항상 펼침
          const expanded = isMobile ? openIdx === idx : true;
          return (
            <li
              key={category.category}
              style={{ paddingBottom: 8, borderBottom: idx !== menuTree.length - 1 ? "1px solid #333" : "none" }}
            >
              <button
                type="button"
                aria-expanded={expanded}
                aria-controls={`category-panel-${idx}`}
                onClick={() => isMobile && handleAccordion(idx)}
                style={{
                  width: "100%",
                  background: "none",
                  border: "none",
                  textAlign: "left",
                  fontSize: 16,
                  fontWeight: 700,
                  marginBottom: 8,
                  color: "#FFD600",
                  letterSpacing: 0.5,
                  cursor: isMobile ? "pointer" : "default",
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                {category.category}
                {isMobile && <span style={{ fontSize: 14, color: "#aaa" }}>{expanded ? "▲" : "▼"}</span>}
              </button>
              <ul
                id={`category-panel-${idx}`}
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: expanded ? "flex" : "none",
                  flexDirection: "column",
                  gap: 4,
                  transition: "all 0.2s",
                }}
              >
                {category.items.map((item) => {
                  // 현재 경로와 메뉴 경로가 일치하면 active
                  const active = pathname === item.path;
                  return (
                    <li key={item.id}>
                      <Link
                        href={item.path}
                        style={{
                          display: "block",
                          padding: "10px 16px",
                          borderRadius: 8,
                          background: active ? "#FFD600" : "#232326",
                          color: active ? "#232326" : "#fff",
                          textDecoration: "none",
                          fontWeight: 500,
                          transition: "background 0.2s, color 0.2s",
                        }}
                        onMouseOver={(e) => {
                          if (!active) {
                            e.currentTarget.style.background = "#333";
                            e.currentTarget.style.color = "#FFD600";
                          }
                        }}
                        onMouseOut={(e) => {
                          if (!active) {
                            e.currentTarget.style.background = "#232326";
                            e.currentTarget.style.color = "#fff";
                          }
                        }}
                        aria-current={active ? "page" : undefined}
                      >
                        <div style={{ fontSize: 16 }}>{item.name}</div>
                        <div style={{ fontSize: 13, color: active ? "#23232699" : "#aaa" }}>{item.description}</div>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

// 설명:
// - 현재 경로에 따라 활성화(active) 메뉴 스타일 적용
// - 모바일(최대 768px)에서는 카테고리별 아코디언 UI 적용
// - 접근성: aria-expanded, aria-controls, aria-current 등 사용
// - 반응형/UX 개선 및 친절한 주석 포함
