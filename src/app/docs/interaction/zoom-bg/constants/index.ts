export const ZOOM_BG_DEFAULTS = {
  imageSrc: "/1.avif",
  imageAlt: "Zoom Background",
  title: "Zoom Demo",
  minScale: 1,
  maxScale: 1.2,
  stiffness: 80,
  damping: 20,
  mass: 1,
  titleSize: "text-4xl md:text-6xl",
  titleWeight: "font-bold",
  titleColor: "text-white",
  blendMode: "mix-blend-difference",
};

export const IMAGE_OPTIONS = [
  { value: "/1.avif", label: "기본 이미지" },
  { value: "/2.avif", label: "이미지 2" },
  { value: "/3.avif", label: "이미지 3" },
];

export const TITLE_SIZE_OPTIONS = [
  { value: "text-2xl md:text-4xl", label: "Small" },
  { value: "text-3xl md:text-5xl", label: "Medium" },
  { value: "text-4xl md:text-6xl", label: "Large" },
  { value: "text-5xl md:text-7xl", label: "Extra Large" },
  { value: "text-6xl md:text-8xl", label: "Giant" },
];

export const TITLE_WEIGHT_OPTIONS = [
  { value: "font-normal", label: "Normal" },
  { value: "font-medium", label: "Medium" },
  { value: "font-semibold", label: "Semibold" },
  { value: "font-bold", label: "Bold" },
  { value: "font-black", label: "Black" },
];

export const BLEND_MODE_OPTIONS = [
  { value: "mix-blend-normal", label: "Normal" },
  { value: "mix-blend-difference", label: "Difference" },
  { value: "mix-blend-exclusion", label: "Exclusion" },
  { value: "mix-blend-overlay", label: "Overlay" },
  { value: "mix-blend-screen", label: "Screen" },
  { value: "mix-blend-hard-light", label: "Hard Light" },
];
