import Link from "next/link";
import React from "react";

const animations = [
  {
    id: "parallax",
    name: "Parallax Image",
    description: "스크롤에 따라 움직이는 패럴럭스 이미지",
  },
  {
    id: "typography-animation",
    name: "Typing Effect",
    description: "자연스러운 타이핑 애니메이션",
  },
  {
    id: "animated-text-list",
    name: "Cursor Image hover",
    description: "텍스트 리스트 + 커서 이미지 hover 인터랙션",
  },
  // 여기에 더 추가 가능
];

export default function DocsSidebar() {
  return (
    <nav>
      <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 16 }}>인터랙션 가이드북</h2>
      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
        {animations.map((ani) => (
          <li key={ani.id}>
            <Link
              href={`/docs/page/${ani.id}`}
              style={{
                display: "block",
                padding: "10px 16px",
                borderRadius: 8,
                background: "#232326",
                color: "#fff",
                textDecoration: "none",
                fontWeight: 500,
                transition: "background 0.2s",
              }}
            >
              <div style={{ fontSize: 16 }}>{ani.name}</div>
              <div style={{ fontSize: 13, color: "#aaa" }}>{ani.description}</div>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
