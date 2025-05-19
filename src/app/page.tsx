import ParallaxImageTest from "@/components/common/framer-motion/ParallaxImageTest";
import { AnimatedTextListWithCursor } from "@/components/common/framer-motion/AniatedTextListWidthCursor";
import { ResultBox } from "@/components/common/ResultBox";
import TextClipEffect from "@/components/common/framer-motion/typography/TextClipEffect";
import ZoomScrollBg from "@/components/common/framer-motion/ZoomScrollBg";
import TypingText from "@/components/common/framer-motion/typography/TypingText";

export default function Home() {
  return (
    <div className="relative">
      <ResultBox style={{ marginBottom: 16, height: "100vh" }}>
        <TypingText text="Hi Vibe Coding!" color="#fff" fontSize={120} typingSpeed={120} />
      </ResultBox>
      <ResultBox style={{ marginBottom: 16, height: "100vh" }}>
        <AnimatedTextListWithCursor />
      </ResultBox>
      <ResultBox style={{ marginBottom: 16, height: "100vh" }}>
        <ParallaxImageTest />
      </ResultBox>
      <ResultBox style={{ marginBottom: 16, height: "100vh" }}>
        <TextClipEffect
          items={[
            { main: "Hello", sub: "Hello" },
            { main: "javascript", sub: "javascript" },
            { main: "typescript", sub: "typescript" },
          ]}
        />
      </ResultBox>
      <ResultBox style={{ marginBottom: 16, height: "100vh" }}>
        <ZoomScrollBg />
      </ResultBox>
    </div>
  );
}
