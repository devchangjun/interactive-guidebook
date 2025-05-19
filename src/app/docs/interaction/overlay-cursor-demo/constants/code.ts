export const overlayCursorDemoCode = `import OverlayCursorProvider from \"@/components/common/framer-motion/OverlayCursor\";

export default function OverlayCursorDemoPage() {
  return (
    <div style={{ padding: 40, minHeight: \"100vh\", background: \"#f8f8fa\" }}>
      <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 24 }}>OverlayCursorProvider 데모</h1>
      <OverlayCursorProvider>
        <div
          style={{
            width: \"100%\",
            maxWidth: 480,
            height: 300,
            margin: \"0 auto\",
            background: \"#fff\",
            borderRadius: 16,
            boxShadow: \"0 4px 24px rgba(0,0,0,0.08)\",
            display: \"flex\",
            alignItems: \"center\",
            justifyContent: \"center\",
            fontSize: 22,
            fontWeight: 600,
            color: \"#ff69b4\",
          }}
        >
          이 영역에 마우스를 올려보세요!
        </div>
      </OverlayCursorProvider>
    </div>
  );
}
`;
