import DemoContainer from "@/components/common/DemoContainer";
import TypingText from "@/components/common/framer-motion/typography/typing-text/TypingText";
import Title from "../../components/Title";

export default function TypographyAnimationPage() {
  return (
    <div>
      {/* 1. 🎯 인터랙션 제목 */}
      <Title>텍스트 타이핑 애니메이션</Title>
      <hr className="my-4 border-0 border-t border-gray-200" />

      {/* 4. 💻 코드 예시 + 실제 데모 */}
      <section className="mb-8">
        <h2 className="text-xl md:text-2xl font-medium mb-4">데모</h2>
        <DemoContainer>
          <TypingText text="Vibe Design" speed={50} className="text-4xl md:text-6xl" cursorChar="|" />
        </DemoContainer>

        <div className="text-sm text-gray-500 mt-2">
          프레임워크 없이 구현하려면 <code>setTimeout</code>과 <code>useEffect</code>로 직접 구현해도 됩니다.
        </div>
      </section>
    </div>
  );
}
