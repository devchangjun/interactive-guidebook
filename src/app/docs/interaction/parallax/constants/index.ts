export const PARALLAX_DEFAULTS = {
  imageUrl: "/1.avif",
  parallaxRange: 300,
  stiffness: 60,
  damping: 20,
  mass: 1,
  restDelta: 0.5,
  containerHeight: "h-screen",
  imageHeight: "h-[120vh]",
  objectFit: "object-cover",
};

export const IMAGE_OPTIONS = [
  { value: "/1.avif", label: "Image 1" },
  { value: "/2.avif", label: "Image 2" },
  { value: "/3.avif", label: "Image 3" },
  { value: "/3.webp", label: "Image 4" },
];

export const CONTAINER_HEIGHT_OPTIONS = [
  { value: "h-[50vh]", label: "Half Screen" },
  { value: "h-[70vh]", label: "70% Screen" },
  { value: "h-screen", label: "Full Screen" },
  { value: "h-[120vh]", label: "120% Screen" },
  { value: "h-[150vh]", label: "150% Screen" },
];

export const IMAGE_HEIGHT_OPTIONS = [
  { value: "h-[100vh]", label: "100% Screen" },
  { value: "h-[110vh]", label: "110% Screen" },
  { value: "h-[120vh]", label: "120% Screen" },
  { value: "h-[130vh]", label: "130% Screen" },
  { value: "h-[150vh]", label: "150% Screen" },
];

export const OBJECT_FIT_OPTIONS = [
  { value: "object-cover", label: "Cover" },
  { value: "object-contain", label: "Contain" },
  { value: "object-fill", label: "Fill" },
  { value: "object-none", label: "None" },
  { value: "object-scale-down", label: "Scale Down" },
];
