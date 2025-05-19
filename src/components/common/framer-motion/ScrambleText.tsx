// ScrambleText.tsx
"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const SCRAMBLE_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{};:,.<>?".split(
  ""
);

interface ScrambleTextProps {
  text: string;
  scrambleCount?: number; // 몇 글자를 스크램블할지 (기본 3)
  typingSpeed?: number; // 타이핑 속도(ms)
  scrambleSpeed?: number; // 스크램블 속도(ms)
}

export default function ScrambleText({
  text,
  scrambleCount = 3,
  typingSpeed = 80,
  scrambleSpeed = 40,
}: ScrambleTextProps) {
  const [display, setDisplay] = useState("");
  const [done, setDone] = useState(false);
  const textArr = Array.from(text); // 한글도 잘 분리됨
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const timeoutRef = useRef<any>(null);

  useEffect(() => {
    let current = 0;
    let scrambleStep = 0;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let scrambleActive = false;

    function typeNext() {
      if (current < textArr.length - scrambleCount) {
        setDisplay(textArr.slice(0, current + 1).join(""));
        current++;
        timeoutRef.current = gsap.delayedCall(typingSpeed / 1000, typeNext);
      } else {
        scrambleActive = true;
        scrambleStep = 0;
        scramble();
      }
    }

    function scramble() {
      if (scrambleStep < scrambleCount * 4) {
        // 4번 정도 스크램블 반복
        const fixed = textArr.slice(0, textArr.length - scrambleCount).join("");
        const scrambled = Array(scrambleCount)
          .fill(0)
          .map(() => SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)])
          .join("");
        setDisplay(fixed + scrambled);
        scrambleStep++;
        timeoutRef.current = gsap.delayedCall(scrambleSpeed / 1000, scramble);
      } else {
        // 원본 텍스트로 복구
        setDisplay(text);
        setDone(true);
      }
    }

    setDisplay("");
    setDone(false);
    timeoutRef.current = gsap.delayedCall(typingSpeed / 1000, typeNext);

    return () => {
      if (timeoutRef.current) timeoutRef.current.kill();
    };
    // eslint-disable-next-line
  }, [text, scrambleCount, typingSpeed, scrambleSpeed]);

  return (
    <span style={{ fontFamily: "monospace", fontSize: 24, letterSpacing: 1.5, color: done ? "#4ade80" : "#fff" }}>
      {display}
    </span>
  );
}
