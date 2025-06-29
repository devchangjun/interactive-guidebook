export const ANIMATED_LIST_DEFAULTS = {
  cities: [
    { code: "01", name: "Tokyo", img: "/3.avif" },
    { code: "02", name: "Lasvegas", img: "/2.avif" },
    { code: "03", name: "London", img: "/3.webp" },
  ],
  fontSize: "text-5xl md:text-[68px]",
  fontWeight: "font-black",
  textColor: "text-white",
  codeColor: "text-gray-800",
  gap: "gap-20",
  imageSize: "h-60 w-60",
  borderRadius: "rounded-3xl",
};

export const FONT_SIZE_OPTIONS = [
  { value: "text-3xl md:text-4xl", label: "Small" },
  { value: "text-4xl md:text-5xl", label: "Medium" },
  { value: "text-5xl md:text-[68px]", label: "Large" },
  { value: "text-6xl md:text-7xl", label: "Extra Large" },
  { value: "text-7xl md:text-8xl", label: "Giant" },
];

export const FONT_WEIGHT_OPTIONS = [
  { value: "font-medium", label: "Medium" },
  { value: "font-semibold", label: "Semibold" },
  { value: "font-bold", label: "Bold" },
  { value: "font-black", label: "Black" },
];

export const COLOR_OPTIONS = [
  { value: "text-white", label: "White" },
  { value: "text-black", label: "Black" },
  { value: "text-blue-600", label: "Blue" },
  { value: "text-red-600", label: "Red" },
  { value: "text-green-600", label: "Green" },
  { value: "text-purple-600", label: "Purple" },
  { value: "text-orange-600", label: "Orange" },
  { value: "text-pink-600", label: "Pink" },
];

export const GAP_OPTIONS = [
  { value: "gap-10", label: "Small (10)" },
  { value: "gap-16", label: "Medium (16)" },
  { value: "gap-20", label: "Large (20)" },
  { value: "gap-24", label: "Extra Large (24)" },
  { value: "gap-32", label: "Giant (32)" },
];

export const IMAGE_SIZE_OPTIONS = [
  { value: "h-40 w-40", label: "Small (40)" },
  { value: "h-48 w-48", label: "Medium (48)" },
  { value: "h-60 w-60", label: "Large (60)" },
  { value: "h-72 w-72", label: "Extra Large (72)" },
  { value: "h-80 w-80", label: "Giant (80)" },
];

export const BORDER_RADIUS_OPTIONS = [
  { value: "rounded-none", label: "None" },
  { value: "rounded-lg", label: "Small" },
  { value: "rounded-xl", label: "Medium" },
  { value: "rounded-2xl", label: "Large" },
  { value: "rounded-3xl", label: "Extra Large" },
  { value: "rounded-full", label: "Full" },
];

export const DEFAULT_IMAGES = ["/1.avif", "/2.avif", "/3.avif", "/3.webp"];
