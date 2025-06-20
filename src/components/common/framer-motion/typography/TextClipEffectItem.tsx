"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./TextClipEffect.module.css";

gsap.registerPlugin(ScrollTrigger);

export type TextClipEffectItemProps = {
  main: string;
  sub: React.ReactNode;
  className?: string;
  clipColor?: string;
};

export default function TextClipEffectItem({ main, sub, className, clipColor }: TextClipEffectItemProps) {
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
          markers: true,
        },
      });
    }
  }, []);

  return (
    <h1 ref={textRef} className={`${styles.text} ${className}`}>
      {main}
      <span className={styles.span} style={{ backgroundColor: clipColor ? clipColor : "#fff" }}>
        {sub}
      </span>
    </h1>
  );
}
