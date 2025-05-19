import DocsSidebar from "./components/DocsSidebar";

export default function DocsPageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      {/* 좌측 공용 내비게이션 */}
      <aside
        style={{
          width: 260,
          background: "#18181b",
          color: "#fff",
          padding: "2rem 1rem",
          marginRight: 32,
          minHeight: "80vh",
          display: "flex",
          flexDirection: "column",
          gap: 8,
        }}
      >
        <DocsSidebar />
      </aside>
      {/* 우측 상세 컨텐츠 */}
      <main style={{ flex: 1, maxWidth: 900, margin: "0 auto", padding: "2rem 1rem" }}>{children}</main>
    </div>
  );
}
