interface BasicPromptSectionProps {
  prompt: string;
}

/**
 * BasicPromptSection 컴포넌트
 * - 기본 프롬프트 섹션의 공통 스타일을 제공합니다.
 * - 컴포넌트 생성에 필요한 프롬프트를 표시합니다.
 */
export default function BasicPromptSection({ prompt }: BasicPromptSectionProps) {
  return (
    <section className="mb-8">
      <div className="flex items-start space-x-4">
        {/* 번호 아이콘 */}
        <div className="flex-shrink-0 w-8 h-8 bg-[#181818] rounded-full border border-white flex items-center justify-center">
          <span className="text-white font-bold text-sm">2</span>
        </div>

        {/* 내용 */}
        <div className="flex-1">
          <h2 className="text-xl font-bold text-white mb-4">바이브 프롬프트</h2>

          <div className="pl-4 border-l border-gray-600">
            <p className="text-gray-300 text-sm leading-relaxed">{prompt}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
