import DemoContainer from "@/components/common/DemoContainer";
import MorphingText from "@/components/common/framer-motion/typography/morphing-text/MorphingText";
import TextClipEffect from "@/components/common/framer-motion/typography/TextClipEffect";
import Title from "../../components/Title";

export default function TypographyAnimationPage() {
  return (
    <div>
      {/* 1. 🎯 인터랙션 제목 */}
      <Title>타이포그래피 플레이그라운드</Title>
      <hr className="my-4 border-0 border-t border-gray-200" />

      {/* 4. 💻 코드 예시 + 실제 데모 */}
      <section className="mb-8">
        <h2 className="text-xl md:text-2xl font-medium mb-4">데모</h2>
        <DemoContainer className="h-48">
          <MorphingText texts={["Hello world!", "hello 2", "javascript"]} className="text-4xl md:text-6xl font-bold" />
        </DemoContainer>

        <DemoContainer>
          <TextClipEffect
            className="text-4xl md:text-6xl font-bold"
            items={[
              { main: "Hello", sub: "Hello" },
              { main: "javascript", sub: "javascript" },
              { main: "typescript", sub: "typescript" },
            ]}
          />
        </DemoContainer>

        <div className="mt-2 text-sm text-gray-500">다양한 타이포그래피 애니메이션을 테스트해보세요.</div>
      </section>
    </div>
  );
}
