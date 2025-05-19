import ParallaxImageTest from "@/components/common/framer-motion/ParallaxImageTest";
import CardListDetailTest from "@/components/common/framer-motion/card/CardListDetailTest";
import CardModalTest from "@/components/common/framer-motion/card/CardModalTest";
import { AnimatedTextListWithCursor } from "@/components/common/framer-motion/AniatedTextListWidthCursor";
import TiltCard from "@/components/common/framer-motion/card/TiltCard";
import { ResultBox } from "@/components/common/ResultBox";
import TextClipEffect from "@/components/common/framer-motion/typography/TextClipEffect";

export default function Home() {
  return (
    <div className="relative">
      <ResultBox>
        <AnimatedTextListWithCursor />
      </ResultBox>
      <ResultBox>
        <ParallaxImageTest />
      </ResultBox>
      <ResultBox>
        <TextClipEffect
          items={[
            { main: "Hello", sub: "Hello" },
            { main: "javascript", sub: "javascript" },
            { main: "typescript", sub: "typescript" },
          ]}
        />
      </ResultBox>
    </div>
  );
}
