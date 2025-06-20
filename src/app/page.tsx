import ParallaxImageTest from "@/components/common/framer-motion/ParallaxImage";
import AnimatedTextListWithCursor from "@/components/common/framer-motion/AnimatedTextListWithCursor";
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
      <ResultBox className="mb-4 h-screen">
        <TypingText text="Hi Vibe Coding!" speed={120} className="text-4xl" cursorChar="|" />
      </ResultBox>
      <ResultBox className="mb-4 h-screen">
        <AnimatedTextListWithCursor />
      </ResultBox>
      <ResultBox className="mb-4 h-screen">
        <ParallaxImageTest />
      </ResultBox>
      <ResultBox className="mb-4 h-screen">
        <div className="flex flex-col gap-8">
          {[
            { main: "Hello", sub: "Hello" },
            { main: "javascript", sub: "javascript" },
            { main: "typescript", sub: "typescript" },
          ].map((item) => (
            <TextClipEffectItem key={item.main} {...item} className="text-10vw" />
          ))}
        </div>
      </ResultBox>
      <ResultBox className="mb-4 h-screen">
        <ZoomScrollBg />
      </ResultBox>
      <ResultBox className="mb-4 flex h-screen w-full justify-center">
        <MorphingText
          texts={["Hello", "Vibe", "Coding", "Let's go!"]}
          color="#0066ff"
          className="h-2 w-full text-center, w-full mb-2 text-8xl md:mb-4 md:text-9xl"
        />
      </ResultBox>
      <ResultBox
        className="h-[800px] border-none"
        style={{
          background: `linear-gradient(rgba(20,30,60,0.7), rgba(20,30,60,0.7)), url('/1.avif') center/cover no-repeat`,
          boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
        }}
      >
        <div className="flex h-screen flex-col items-center justify-center">
          <div className="relative rotate-5 transform bg-red-500">
            <ScrollMarqueeText
              texts={["Let's Dive Into This Tutorial", "Take It Easy!", "Don't Worry Let's Code", "Happy Coding"]}
              baseSpeed={50}
              fontSize="5vw"
              color="#fff"
              className="rounded-lg bg-red-500 p-4 font-bold tracking-tighter"
            />
          </div>
          <div className="relative -rotate-5 transform bg-orange-500">
            <ScrollMarqueeText
              texts={["Let's Dive Into This Tutorial", "Take It Easy!", "Don't Worry Let's Code", "Happy Coding"]}
              baseSpeed={50}
              fontSize="5vw"
              color="#fff"
              direction={true}
              className="rounded-lg p-4 font-bold tracking-tighter"
            />
          </div>
        </div>
      </ResultBox>
      <ResultBox className="h-screen">
        <div className="flex w-full gap-6">
          <MagneticTargetBox>
            <TiltCard>
              <div className="flex h-full w-full flex-col overflow-hidden rounded-2xl bg-gray-900">
                <Image
                  src="/1.avif"
                  alt="tech image"
                  width={400}
                  height={200}
                  className="h-[60%] w-full object-cover"
                  priority
                  unoptimized
                />
                <div className="p-4">
                  <h3 className="mb-1 text-lg text-white">프로필 1</h3>
                  <p className="text-sm text-gray-400">상세 설명 텍스트 1</p>
                </div>
              </div>
            </TiltCard>
          </MagneticTargetBox>

          <MagneticTargetBox>
            <TiltCard>
              <div className="flex h-full w-full flex-col overflow-hidden rounded-2xl bg-gray-900">
                <Image
                  src="/1.avif"
                  alt="tech image"
                  width={400}
                  height={200}
                  className="h-[60%] w-full object-cover"
                  priority
                  unoptimized
                />
                <div className="p-4">
                  <h3 className="mb-1 text-lg text-white">프로필 2</h3>
                  <p className="text-sm text-gray-400">상세 설명 텍스트 2</p>
                </div>
              </div>
            </TiltCard>
          </MagneticTargetBox>

          <MagneticTargetBox>
            <TiltCard>
              <div className="flex h-full w-full flex-col overflow-hidden rounded-2xl bg-gray-900">
                <Image
                  src="/1.avif"
                  alt="tech image"
                  width={400}
                  height={200}
                  className="h-[60%] w-full object-cover"
                  priority
                  unoptimized
                />
                <div className="p-4">
                  <h3 className="mb-1 text-lg text-white">프로필 3</h3>
                  <p className="text-sm text-gray-400">상세 설명 텍스트 3</p>
                </div>
              </div>
            </TiltCard>
          </MagneticTargetBox>
        </div>
      </ResultBox>
    </div>
  );
}
