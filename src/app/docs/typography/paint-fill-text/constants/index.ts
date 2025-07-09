export const PAINT_FILL_TEXT_DEFAULTS = {
  text: "Paint Fill Text",
  duration: 1.5,
  delay: 0.5,
  textColor: "rgba(255, 255, 255, 1)",
  fontSize: "text-6xl",
  fontWeight: "font-bold",
  trackingTight: true,
  leadingNone: true,
};

export const FONT_SIZE_OPTIONS = [
  { value: "text-2xl sm:text-3xl md:text-4xl", label: "Small" },
  { value: "text-3xl sm:text-4xl md:text-5xl", label: "Medium" },
  { value: "text-4xl sm:text-6xl md:text-7xl", label: "Large" },
  { value: "text-5xl sm:text-7xl md:text-8xl", label: "Extra Large" },
  { value: "text-6xl sm:text-8xl md:text-9xl", label: "Giant" },
];

export const FONT_WEIGHT_OPTIONS = [
  { value: "font-normal", label: "Normal" },
  { value: "font-medium", label: "Medium" },
  { value: "font-semibold", label: "Semibold" },
  { value: "font-bold", label: "Bold" },
  { value: "font-black", label: "Black" },
];

export const COLOR_PRESETS = [
  { value: "rgba(255, 255, 255, 1)", label: "White" },
  { value: "rgba(0, 59, 154, 1)", label: "Deep Blue" },
  { value: "rgba(29, 78, 216, 1)", label: "Blue" },
  { value: "rgba(124, 58, 237, 1)", label: "Purple" },
  { value: "rgba(220, 38, 38, 1)", label: "Red" },
  { value: "rgba(5, 150, 105, 1)", label: "Green" },
  { value: "rgba(217, 119, 6, 1)", label: "Orange" },
  { value: "rgba(0, 0, 0, 1)", label: "Black" },
];
