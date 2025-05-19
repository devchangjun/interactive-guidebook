"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./TextClipEffect.module.css";

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
    <h1 ref={textRef} className={styles.text}>
      {main}
      <span className={styles.span}>{sub}</span>
    </h1>
  );
}
