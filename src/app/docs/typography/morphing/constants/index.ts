export const MORPHING_DEFAULTS = {
  texts: ["디자인 없이도", "차별화된 웹을", "누구나 쉽게"],
  morphTime: 1,
  cooldownTime: 0.5,
  color: "#003b9a",
  fontSize: "text-6xl sm:text-8xl md:text-9xl",
  fontWeight: "font-bold",
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
  { value: "#003b9a", label: "Deep Blue" },
  { value: "#1d4ed8", label: "Blue" },
  { value: "#7c3aed", label: "Purple" },
  { value: "#dc2626", label: "Red" },
  { value: "#059669", label: "Green" },
  { value: "#d97706", label: "Orange" },
  { value: "#000000", label: "Black" },
  { value: "#ffffff", label: "White" },
];
