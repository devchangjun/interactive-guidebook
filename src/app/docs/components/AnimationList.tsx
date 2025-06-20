import Link from "next/link";
import React from "react";

// 애니메이션 목록 데이터 (추후 확장 가능)
const animations = [
  {
    id: "parallax",
    name: "Parallax Image",
    description: "스크롤에 따라 움직이는 패럴럭스 이미지",
  },
  {
    id: "typing",
    name: "Typing Effect",
    description: "자연스러운 타이핑 애니메이션",
  },
  {
    id: "animated-text-list",
    name: "Animated Text List",
    description: "텍스트 리스트 + 커서 이미지 인터랙션",
  },
  // 여기에 더 추가 가능
];

export default function AnimationList() {
  return (
    <nav>
      <h2 className="mb-4 text-lg font-bold">애니메이션 목록</h2>
      <ul className="m-0 flex list-none flex-col gap-2 p-0">
        {animations.map((ani) => (
          <li key={ani.id}>
            <Link
              href={`/docs/page/${ani.id}`}
              className="block rounded-lg bg-[#232326] px-4 py-2.5 font-medium text-white no-underline transition-colors hover:bg-gray-700"
            >
              <div className="text-base">{ani.name}</div>
              <div className="text-sm text-[#aaa]">{ani.description}</div>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
