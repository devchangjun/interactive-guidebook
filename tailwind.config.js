module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        primary: "#2563eb", // 진한 파랑
        secondary: "#3b82f6", // 중간 파랑
        accent: "#60a5fa", // 밝은 파랑
        muted: "#e0e7ef", // 연한 파랑/회색
      },
      fontFamily: {
        sans: ["Pretendard", "ui-sans-serif", "system-ui"],
        title: ["Montserrat", "ui-sans-serif", "system-ui"],
      },
      borderRadius: {
        xl: "1.25rem",
        "2xl": "2rem",
      },
      spacing: {
        128: "32rem",
        144: "36rem",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};
