export const SCROLL_TRIGGER_TEXT_DEFAULTS = {
  text: "스크롤에 따라 텍스트 색상이 변합니다. 스크롤에 따라 텍스트 색상이 변합니다.",
  fromColor: "#888888",
  toColor: "#FFD600",
  duration: 0.8,
  fontSize: "clamp(2.5rem, 8vw, 8rem)",
  initialScale: 0.8,
};

export const FONT_SIZE_OPTIONS = [
  { value: "clamp(1rem, 4vw, 3rem)", label: "작음" },
  { value: "clamp(2rem, 6vw, 5rem)", label: "보통" },
  { value: "clamp(2.5rem, 8vw, 8rem)", label: "큼" },
  { value: "clamp(3rem, 10vw, 12rem)", label: "매우 큼" },
];

export const COLOR_PRESETS = [
  { value: "#888888", label: "회색" },
  { value: "#FFD600", label: "노랑" },
  { value: "#003b9a", label: "파랑" },
  { value: "#dc2626", label: "빨강" },
  { value: "#059669", label: "초록" },
  { value: "#7c3aed", label: "보라" },
  { value: "#000000", label: "검정" },
  { value: "#ffffff", label: "하양" },
];
