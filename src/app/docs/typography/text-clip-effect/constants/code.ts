export const textClipEffectCode = `import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export type TextClipEffectItemProps = {
  main: string;
  sub: React.ReactNode;
};

export default function TextClipEffectItem({ main, sub }: TextClipEffectItemProps) {
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (textRef.current) {
      gsap.to(textRef.current, {
        backgroundSize: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: textRef.current,
          start: "center 80%",
          end: "center 20%",
          scrub: true,
        },
      });
    }
  }, []);

  return (
    <h1
      ref={textRef}
      className={
        "text-[10vw] tracking-[-0.01em] leading-[100%] m-0 w-full text-[rgba(182,182,182,0.2)] bg-gradient-to-r from-[#b6b6b6] to-[#b6b6b6] bg-no-repeat [background-clip:text] [background-size:0%] transition-[background-size] duration-500 ease-[cubic-bezier(0.1,0.5,0.5,1)] border-b border-[#2f2b28] flex flex-col items-start justify-center relative"
      }
    >
      {main}
      <span
        className={
          "absolute w-full h-full bg-[#4246ce] text-[#0d0d0d] [clip-path:polygon(0_50%,100%_50%,100%_50%,0_50%)] [transform-origin:center] transition-all duration-400 ease-[cubic-bezier(0.1,0.5,0.5,1)] flex flex-col justify-center"
        }
      >
        {sub}
      </span>
    </h1>
  );
}

// 사용 예시
<TextClipEffectItem main="Clip Effect!" sub="스크롤로 배경이 채워집니다" />
`;
