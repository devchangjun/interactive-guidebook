export const STICKY_SHRINK_DEFAULTS = {
  finalScale: 0.8,
  finalOpacity: 0.5,
  backgroundColor: "bg-neutral-900",
  backgroundImage: "",
  scrollRange: 200,
  contentTitle: "Sticky Shrink Section",
  contentDescription: "스크롤하면서 섹션이 축소되고 투명해집니다.",
  titleSize: "text-4xl md:text-6xl",
  titleWeight: "font-bold",
  titleColor: "text-white",
  descriptionSize: "text-lg md:text-xl",
  descriptionColor: "text-gray-300",
};

export const BACKGROUND_COLOR_OPTIONS = [
  { value: "bg-neutral-900", label: "Dark Gray" },
  { value: "bg-black", label: "Black" },
  { value: "bg-white", label: "White" },
  { value: "bg-blue-600", label: "Blue" },
  { value: "bg-red-600", label: "Red" },
  { value: "bg-green-600", label: "Green" },
  { value: "bg-purple-600", label: "Purple" },
  { value: "bg-orange-600", label: "Orange" },
  { value: "bg-pink-600", label: "Pink" },
  { value: "bg-gradient-to-br from-blue-600 to-purple-700", label: "Blue to Purple" },
  { value: "bg-gradient-to-br from-pink-500 to-orange-400", label: "Pink to Orange" },
  { value: "bg-gradient-to-br from-green-400 to-blue-600", label: "Green to Blue" },
];

export const BACKGROUND_IMAGE_OPTIONS = [
  { value: "", label: "None" },
  { value: "/1.avif", label: "Image 1" },
  { value: "/2.avif", label: "Image 2" },
  { value: "/3.avif", label: "Image 3" },
  { value: "/3.webp", label: "Image 4" },
];

export const FONT_SIZE_OPTIONS = [
  { value: "text-2xl md:text-3xl", label: "Small" },
  { value: "text-3xl md:text-4xl", label: "Medium" },
  { value: "text-4xl md:text-6xl", label: "Large" },
  { value: "text-5xl md:text-7xl", label: "Extra Large" },
  { value: "text-6xl md:text-8xl", label: "Giant" },
];

export const DESCRIPTION_SIZE_OPTIONS = [
  { value: "text-sm md:text-base", label: "Small" },
  { value: "text-base md:text-lg", label: "Medium" },
  { value: "text-lg md:text-xl", label: "Large" },
  { value: "text-xl md:text-2xl", label: "Extra Large" },
];

export const FONT_WEIGHT_OPTIONS = [
  { value: "font-normal", label: "Normal" },
  { value: "font-medium", label: "Medium" },
  { value: "font-semibold", label: "Semibold" },
  { value: "font-bold", label: "Bold" },
  { value: "font-black", label: "Black" },
];

export const TEXT_COLOR_OPTIONS = [
  { value: "text-white", label: "White" },
  { value: "text-black", label: "Black" },
  { value: "text-gray-300", label: "Light Gray" },
  { value: "text-gray-600", label: "Gray" },
  { value: "text-blue-400", label: "Blue" },
  { value: "text-red-400", label: "Red" },
  { value: "text-green-400", label: "Green" },
  { value: "text-purple-400", label: "Purple" },
];
