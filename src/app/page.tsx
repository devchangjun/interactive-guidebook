import ParallaxImageTest from "@/components/common/framer-motion/ParallaxImageTest";
import { AnimatedTextListWithCursor } from "@/components/common/framer-motion/AniatedTextListWidthCursor";
import { ResultBox } from "@/components/common/ResultBox";
import ZoomScrollBg from "@/components/common/framer-motion/ZoomScrollBg";
import TypingText from "@/components/common/framer-motion/typography/TypingText";
import MorphingText from "@/components/common/framer-motion/typography/MorphingText";
import ScrollMarqueeText from "@/components/common/framer-motion/typography/ScrollMarqueeText";
import TextClipEffectItem from "@/components/common/framer-motion/typography/TextClipEffectItem";
import TiltCard from "@/components/common/framer-motion/card/TiltCard";
import Image from "next/image";
import MagneticTargetBox from "@/components/common/framer-motion/cursor/MagneticTargetBox";
import MagneticCursor from "@/components/common/framer-motion/cursor/MagneticCursor";

export default function Home() {
  return (
    <div className="relative">
      <MagneticCursor />
      <ResultBox style={{ marginBottom: 16, height: "100vh" }}>
        <TypingText text="Hi Vibe Coding!" speed={120} className="text-4xl" cursorChar="|" />
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
      <ResultBox
        style={{
          marginBottom: 16,
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <MorphingText
          texts={["Hello", "Vibe", "Coding", "Let's go!"]}
          color="#0066ff"
          className="mb-2 md:mb-4 text-8xl md:text-9xl h-2 w-full text-center, w-full"
        />
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
      <ResultBox style={{ height: "100vh" }}>
        <div style={{ display: "flex", gap: 24, width: "100%" }}>
          <MagneticTargetBox>
            <TiltCard>
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: 16,
                  overflow: "hidden",
                  background: "#111",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Image
                  src="/1.avif"
                  alt="tech image"
                  width={400}
                  height={200}
                  style={{ width: "100%", height: "60%", objectFit: "cover" }}
                  priority
                  unoptimized
                />
                <div style={{ padding: 16 }}>
                  <h3 style={{ color: "#fff", fontSize: 18, marginBottom: 4 }}>프로필 1</h3>
                  <p style={{ color: "#aaa", fontSize: 14 }}>상세 설명 텍스트 1</p>
                </div>
              </div>
            </TiltCard>
          </MagneticTargetBox>

          <MagneticTargetBox>
            <TiltCard>
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: 16,
                  overflow: "hidden",
                  background: "#111",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Image
                  src="/1.avif"
                  alt="tech image"
                  width={400}
                  height={200}
                  style={{ width: "100%", height: "60%", objectFit: "cover" }}
                  priority
                  unoptimized
                />
                <div style={{ padding: 16 }}>
                  <h3 style={{ color: "#fff", fontSize: 18, marginBottom: 4 }}>프로필 2</h3>
                  <p style={{ color: "#aaa", fontSize: 14 }}>상세 설명 텍스트 2</p>
                </div>
              </div>
            </TiltCard>
          </MagneticTargetBox>

          <MagneticTargetBox>
            <TiltCard>
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: 16,
                  overflow: "hidden",
                  background: "#111",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Image
                  src="/1.avif"
                  alt="tech image"
                  width={400}
                  height={200}
                  style={{ width: "100%", height: "60%", objectFit: "cover" }}
                  priority
                  unoptimized
                />
                <div style={{ padding: 16 }}>
                  <h3 style={{ color: "#fff", fontSize: 18, marginBottom: 4 }}>프로필 3</h3>
                  <p style={{ color: "#aaa", fontSize: 14 }}>상세 설명 텍스트 3</p>
                </div>
              </div>
            </TiltCard>
          </MagneticTargetBox>
        </div>
      </ResultBox>
    </div>
  );
}
