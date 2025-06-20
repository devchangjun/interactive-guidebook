export const overlayCursorDemoCode = `import OverlayCursorProvider from \\"@/components/common/framer-motion/OverlayCursor\\";

export default function OverlayCursorDemoPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-10">
      <h1 className="mb-6 text-2xl font-bold">OverlayCursorProvider 데모</h1>
      <OverlayCursorProvider>
        <div
          className="mx-auto flex h-[300px] w-full max-w-md items-center justify-center rounded-2xl bg-white text-xl font-semibold text-pink-500 shadow-lg"
        >
          이 영역에 마우스를 올려보세요!
        </div>
      </OverlayCursorProvider>
    </div>
  );
}
`;
