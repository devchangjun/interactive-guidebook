import ParallaxImageTest from "@/components/common/framer-motion/ParallaxImageTest";
import { AnimatedTextListWithCursor } from "@/components/common/framer-motion/AniatedTextListWidthCursor";
import { ResultBox } from "@/components/common/ResultBox";
import ZoomScrollBg from "@/components/common/framer-motion/ZoomScrollBg";
import TypingText from "@/components/common/framer-motion/typography/TypingText";
import MorphingText from "@/components/common/framer-motion/typography/MorphingText";
import ScrollMarqueeText from "@/components/common/framer-motion/typography/ScrollMarqueeText";
import TextClipEffectItem from "@/components/common/framer-motion/typography/TextClipEffectItem";
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
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          {[
            { main: "Hello", sub: "Hello" },
            { main: "javascript", sub: "javascript" },
            { main: "typescript", sub: "typescript" },
          ].map((item) => (
            <TextClipEffectItem key={item.main} {...item} fontSize="10vw" />
          ))}
        </div>
      </ResultBox>
      <ResultBox style={{ marginBottom: 16, height: "100vh" }}>
        <ZoomScrollBg />
      </ResultBox>
      <ResultBox style={{ marginBottom: 16, height: "100vh" }}>
        <MorphingText texts={["Hello", "Vibe", "Coding", "Let's go!"]} color="#0066ff" />
      </ResultBox>
      <ResultBox
        style={{
          height: "800px",
          position: "relative",
          background: `linear-gradient(rgba(20,30,60,0.7), rgba(20,30,60,0.7)), url('/1.avif') center/cover no-repeat`,
          boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
          border: "none",
        }}
      >
        <div className="h-screen flex flex-col justify-center items-center">
          <div style={{ position: "relative", backgroundColor: "red", transform: "rotate(5deg)" }}>
            <ScrollMarqueeText
              texts={["Let's Dive Into This Tutorial", "Take It Easy!", "Don't Worry Let's Code", "Happy Coding"]}
              baseSpeed={50}
              fontSize="5vw"
              color="#fff"
              style={{
                fontFamily: `'Montserrat', 'Noto Sans KR', 'Pretendard', Arial, sans-serif`,
                fontWeight: 700,
                letterSpacing: "-0.01em",
                textShadow: "0 2px 16px rgba(0,0,0,0.18)",
                backgroundColor: "red",
                padding: "16px",
                borderRadius: "8px",
              }}
            />
          </div>
          <div style={{ position: "relative", backgroundColor: "orange", transform: "rotate(-5deg)" }}>
            <ScrollMarqueeText
              texts={["Let's Dive Into This Tutorial", "Take It Easy!", "Don't Worry Let's Code", "Happy Coding"]}
              baseSpeed={50}
              fontSize="5vw"
              color="#fff"
              direction={true}
              style={{
                fontFamily: `'Montserrat', 'Noto Sans KR', 'Pretendard', Arial, sans-serif`,
                fontWeight: 700,
                letterSpacing: "-0.01em",
                textShadow: "0 2px 16px rgba(0,0,0,0.18)",
                padding: "16px",
                borderRadius: "8px",
              }}
            />
          </div>
        </div>
      </ResultBox>
    </div>
  );
}
