export const TEXT_CLIP_EFFECT_DEFAULTS = {
  items: [
    { main: "Hello", sub: "Hello" },
    { main: "javascript", sub: "javascript" },
    { main: "typescript", sub: "typescript" },
  ],
  clipColor: "#ffffff",
  fontSize: "text-5xl md:text-8xl",
  fontWeight: "font-bold",
  showMarkers: true,
  startPosition: "center 80%",
  endPosition: "center 20%",
  scrubEffect: true,
};

export const FONT_SIZE_OPTIONS = [
  { value: "text-2xl md:text-4xl", label: "작음" },
  { value: "text-3xl md:text-6xl", label: "보통" },
  { value: "text-5xl md:text-8xl", label: "큼" },
  { value: "text-6xl md:text-9xl", label: "매우 큼" },
];

export const FONT_WEIGHT_OPTIONS = [
  { value: "font-normal", label: "Normal" },
  { value: "font-medium", label: "Medium" },
  { value: "font-semibold", label: "Semibold" },
  { value: "font-bold", label: "Bold" },
  { value: "font-black", label: "Black" },
];

export const COLOR_PRESETS = [
  { value: "#ffffff", label: "하양" },
  { value: "#FFD600", label: "노랑" },
  { value: "#4246ce", label: "파랑" },
  { value: "#dc2626", label: "빨강" },
  { value: "#059669", label: "초록" },
  { value: "#7c3aed", label: "보라" },
  { value: "#f97316", label: "주황" },
  { value: "#000000", label: "검정" },
];

export const SCROLL_TRIGGER_POSITIONS = [
  { value: "top 80%", label: "상단 80%" },
  { value: "center 90%", label: "가운데 90%" },
  { value: "center 80%", label: "가운데 80%" },
  { value: "center 70%", label: "가운데 70%" },
  { value: "bottom 80%", label: "하단 80%" },
];

export const END_POSITIONS = [
  { value: "center 10%", label: "가운데 10%" },
  { value: "center 20%", label: "가운데 20%" },
  { value: "center 30%", label: "가운데 30%" },
  { value: "top 10%", label: "상단 10%" },
  { value: "bottom 10%", label: "하단 10%" },
];
