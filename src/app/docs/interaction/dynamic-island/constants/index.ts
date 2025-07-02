export const DYNAMIC_ISLAND_DEFAULTS = {
  collapsedWidth: 120,
  collapsedHeight: 32,
  expandedWidth: 350,
  expandedHeight: 80,
  backgroundColor: "#000000",
  expandedBackgroundColor: "#1a1a1a",
  animationDuration: 0.6,
  springStiffness: 300,
  springDamping: 30,
  clickToToggle: true,
  hoverToExpand: false,
  autoCollapse: false,
  autoCollapseDelay: 3000,
};

export const BACKGROUND_COLOR_OPTIONS = [
  { value: "#000000", label: "Black" },
  { value: "#1a1a1a", label: "Dark Gray" },
  { value: "#2563eb", label: "Blue" },
  { value: "#dc2626", label: "Red" },
  { value: "#16a34a", label: "Green" },
  { value: "#9333ea", label: "Purple" },
  { value: "#ea580c", label: "Orange" },
  { value: "#db2777", label: "Pink" },
];

export const SIZE_PRESETS = [
  {
    name: "Small",
    collapsedWidth: 100,
    collapsedHeight: 28,
    expandedWidth: 280,
    expandedHeight: 60,
  },
  {
    name: "Medium",
    collapsedWidth: 120,
    collapsedHeight: 32,
    expandedWidth: 350,
    expandedHeight: 80,
  },
  {
    name: "Large",
    collapsedWidth: 140,
    collapsedHeight: 36,
    expandedWidth: 420,
    expandedHeight: 100,
  },
];

export const CONTENT_EXAMPLES = {
  simple: {
    collapsed: "💎",
    expanded: "🎉 Dynamic Island is Active!",
  },
  notification: {
    collapsed: "🔔",
    expanded: "📱 New Message from John",
  },
  music: {
    collapsed: "🎵",
    expanded: "🎶 Now Playing: Awesome Song",
  },
  call: {
    collapsed: "📞",
    expanded: "📱 Incoming Call: Jane Doe",
  },
  timer: {
    collapsed: "⏱️",
    expanded: "⏰ Timer: 05:42 remaining",
  },
};

export const ANIMATION_PRESETS = [
  {
    name: "Fast",
    duration: 0.3,
    stiffness: 400,
    damping: 25,
  },
  {
    name: "Default",
    duration: 0.6,
    stiffness: 300,
    damping: 30,
  },
  {
    name: "Slow",
    duration: 1.0,
    stiffness: 200,
    damping: 35,
  },
  {
    name: "Bouncy",
    duration: 0.8,
    stiffness: 500,
    damping: 20,
  },
];
