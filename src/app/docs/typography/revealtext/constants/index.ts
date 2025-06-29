export const REVEAL_TEXT_DEFAULTS = {
  text: "Reveal 애니메이션 예시입니다.",
  direction: "up" as const,
  delay: 0,
  duration: 0.5,
  stagger: 0.04,
  byWord: false,
  fontSize: "text-3xl md:text-4xl",
  fontWeight: "font-medium",
  textColor: "inherit",
};

export const DIRECTION_OPTIONS = [
  { value: "up", label: "Up (위에서)" },
  { value: "down", label: "Down (아래에서)" },
  { value: "left", label: "Left (왼쪽에서)" },
  { value: "right", label: "Right (오른쪽에서)" },
];

export const FONT_SIZE_OPTIONS = [
  { value: "text-xl md:text-2xl", label: "Small" },
  { value: "text-2xl md:text-3xl", label: "Medium" },
  { value: "text-3xl md:text-4xl", label: "Large" },
  { value: "text-4xl md:text-5xl", label: "Extra Large" },
  { value: "text-5xl md:text-6xl", label: "Giant" },
];

export const FONT_WEIGHT_OPTIONS = [
  { value: "font-normal", label: "Normal" },
  { value: "font-medium", label: "Medium" },
  { value: "font-semibold", label: "Semibold" },
  { value: "font-bold", label: "Bold" },
  { value: "font-black", label: "Black" },
];

export const COLOR_PRESETS = [
  { value: "inherit", label: "Inherit" },
  { value: "text-black", label: "Black" },
  { value: "text-white", label: "White" },
  { value: "text-blue-600", label: "Blue" },
  { value: "text-red-600", label: "Red" },
  { value: "text-green-600", label: "Green" },
  { value: "text-purple-600", label: "Purple" },
  { value: "text-orange-600", label: "Orange" },
];
