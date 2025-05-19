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
        name: "텍스트 마그네틱 효과",
        description: "마우스에 반응하는 마그네틱 텍스트",
        path: "/docs/typography/magnetic",
      },
      {
        id: "revealtext",
        name: "텍스트 등장 효과",
        description: "한 글자씩 등장하는 텍스트",
        path: "/docs/typography/revealtext",
      },
      {
        id: "glitch",
        name: "글리치 텍스트 효과",
        description: "글리치(Glitch) 스타일의 텍스트 애니메이션",
        path: "/docs/typography/glitch",
      },
      {
        id: "morphing",
        name: "모프링 텍스트 효과",
        description: "모프링(Morphing) 스타일의 텍스트 애니메이션",
        path: "/docs/typography/morphing",
      },
      {
        id: "scroll-marquee",
        name: "스크롤 마크리",
        description: "스크롤 마크리(Scroll Marquee) 스타일의 텍스트 애니메이션",
        path: "/docs/typography/scroll-marquee",
      },
      {
        id: "scroll-color-text",
        name: "스크롤 트리거 텍스트",
        description: "스크롤 트리거 텍스트",
        path: "/docs/typography/scroll-trigger-text",
      },
      {
        id: "text-clip-effect",
        name: "텍스트 클립 이펙트",
        description: "텍스트 클립 이펙트",
        path: "/docs/typography/text-clip-effect",
      },
      {
        id: "playground",
        name: "플레이그라운드",
        description: "플레이그라운드",
        path: "/docs/typography/playground",
      },
    ],
  },
  {
    category: "Interaction",
    items: [
      {
        id: "animated-list",
        name: "커스텀 이미지 커서",
        description: "텍스트에 호버 시 이미지가 나타나는 효과",
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
      {
        id: "zoom-bg",
        name: "스크롤 줌 배경",
        description: "스크롤에 따라 배경이 줌 인/아웃 되는 효과",
        path: "/docs/interaction/zoom-bg",
      },
      {
        id: "overlay-cursor-demo",
        name: "오버레이 커서 데모",
        description: "오버레이 커서 데모",
        path: "/docs/interaction/overlay-cursor-demo",
      },
    ],
  },
  // 필요시 카테고리 추가
];

export default menuTree;
