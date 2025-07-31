interface IdeaConcretizationSectionProps {
  when: string;
  what: string;
  how: string;
}

/**
 * IdeaConcretizationSection 컴포넌트
 * - 아이디어 구체화 섹션의 공통 스타일을 제공합니다.
 * - 언제, 무엇을, 어떻게에 대한 구조화된 설명을 표시합니다.
 */
export default function IdeaConcretizationSection({ when, what, how }: IdeaConcretizationSectionProps) {
  return (
    <section className="mb-8">
      <div className="flex items-start space-x-4">
        {/* 번호 아이콘 */}
        <div className="flex-shrink-0 w-8 h-8 bg-blue-500 rounded-full border border-white flex items-center justify-center">
          <span className="text-white font-bold text-sm">1</span>
        </div>

        {/* 내용 */}
        <div className="flex-1">
          <h2 className="text-xl font-bold text-white mb-4">아이디어 구체화</h2>

          <div className="space-y-3 pl-4 border-l border-gray-600">
            <div className="flex items-start space-x-3">
              <span className="text-gray-400 text-sm font-medium min-w-[60px]">언제:</span>
              <span className="text-gray-300 text-sm">{when}</span>
            </div>

            <div className="flex items-start space-x-3">
              <span className="text-gray-400 text-sm font-medium min-w-[60px]">무엇을:</span>
              <span className="text-gray-300 text-sm">{what}</span>
            </div>

            <div className="flex items-start space-x-3">
              <span className="text-gray-400 text-sm font-medium min-w-[60px]">어떻게:</span>
              <span className="text-gray-300 text-sm">{how}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
