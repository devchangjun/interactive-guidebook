import DocsSidebar from "./components/DocsSidebar";

export default function DocsPageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      {/* 좌측 공용 내비게이션 */}
      <aside className="mr-8 flex w-[260px] flex-col gap-2 bg-[#18181b] p-8 pr-4 text-white min-h-[80vh]">
        <DocsSidebar />
      </aside>
      {/* 우측 상세 컨텐츠 */}
      <main className="mx-auto flex-1 max-w-[900px] px-4 py-8">{children}</main>
    </div>
  );
}
