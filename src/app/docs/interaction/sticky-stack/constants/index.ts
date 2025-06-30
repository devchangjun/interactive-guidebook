export const STICKY_STACK_SECTIONS_INFO = {
  title: "Sticky Stack Sections",
  description:
    "스크롤 시 여러 섹션이 상단에 차례로 고정되며, 다음 섹션이 위에서 덮어가는 스택 효과를 제공하는 컴포넌트입니다.",

  usage: `import { StickyStackSections } from '@/components/common/framer-motion/StickyStackSections';
import { sampleSections } from '@/data/sampleSections';

export default function StackDemo() {
  return (
    <div>
      <StickyStackSections sections={sampleSections} />
      
      {/* 다음 섹션 */}
      <section className="h-screen flex items-center justify-center bg-gray-100">
        <h2 className="text-4xl font-bold text-gray-800">마지막 섹션</h2>
      </section>
    </div>
  );
}`,

  features: [
    "각 섹션이 viewport 상단에 sticky로 고정",
    "다음 섹션이 이전 섹션 위에 쌓이는 z-index 스택 효과",
    "스크롤 진행도에 따른 스케일 및 투명도 애니메이션",
    "섹션별 고유한 배경색과 텍스트 색상 지원",
    "반응형 디자인으로 모든 디바이스 지원",
    "부드러운 framer-motion 애니메이션",
    "스크롤 힌트 및 섹션 번호 인디케이터",
  ],

  props: [
    {
      name: "sections",
      type: "SectionItem[]",
      required: true,
      description: "표시할 섹션 데이터 배열. 각 섹션은 id, title, description, backgroundColor를 포함해야 합니다.",
    },
    {
      name: "className",
      type: "string",
      required: false,
      description: "추가 CSS 클래스명",
    },
  ],

  types: `interface SectionItem {
  id: string;
  title: string;
  description: string;
  backgroundColor: string;
  textColor?: string;
  content?: React.ReactNode;
}`,

  dependencies: ["framer-motion", "react"],
};
