"use client";
import { useEffect, useRef } from "react";

interface MorphingTextProps {
  texts: string[];
  morphTime?: number; // morph 애니메이션 시간(초)
  cooldownTime?: number; // 쿨다운 시간(초)
  color?: string;
  className?: string;
}

/**
 * MorphingText
 * - 두 개의 텍스트를 겹쳐서 blur + threshold SVG 필터로 morphing 효과를 만듭니다.
 * - 반응형, 커스텀 텍스트, 폰트, 색상, 속도 props 지원
 * - 예시: <MorphingText texts={["Why", "is", "this", "cool?"]} />
 */
const MorphingText: React.FC<MorphingTextProps> = ({
  texts,
  morphTime = 1,
  cooldownTime = 0.25,
  color = "#222",
  className,
}) => {
  const text1Ref = useRef<HTMLSpanElement>(null);
  const text2Ref = useRef<HTMLSpanElement>(null);

  // 내부 상태
  const textIndex = useRef(texts.length - 1);
  const time = useRef(new Date());
  const morph = useRef(0);
  const cooldown = useRef(cooldownTime);

  useEffect(() => {
    const elts = {
      text1: text1Ref.current!,
      text2: text2Ref.current!,
    };
    if (!elts.text1 || !elts.text2) return;

    elts.text1.textContent = texts[textIndex.current % texts.length];
    elts.text2.textContent = texts[(textIndex.current + 1) % texts.length];

    function setMorph(fraction: number) {
      elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
      elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

      const inv = 1 - fraction;
      elts.text1.style.filter = `blur(${Math.min(8 / inv - 8, 100)}px)`;
      elts.text1.style.opacity = `${Math.pow(inv, 0.4) * 100}%`;

      elts.text1.textContent = texts[textIndex.current % texts.length];
      elts.text2.textContent = texts[(textIndex.current + 1) % texts.length];
    }

    function doMorph() {
      morph.current -= cooldown.current;
      cooldown.current = 0;
      let fraction = morph.current / morphTime;
      if (fraction > 1) {
        cooldown.current = cooldownTime;
        fraction = 1;
      }
      setMorph(fraction);
    }

    function doCooldown() {
      morph.current = 0;
      elts.text2.style.filter = "";
      elts.text2.style.opacity = "100%";
      elts.text1.style.filter = "";
      elts.text1.style.opacity = "0%";
    }

    function animate() {
      requestAnimationFrame(animate);
      const newTime = new Date();
      const shouldIncrementIndex = cooldown.current > 0;
      const dt = (+newTime - +time.current) / 1000;
      time.current = newTime;
      cooldown.current -= dt;
      if (cooldown.current <= 0) {
        if (shouldIncrementIndex) textIndex.current++;
        doMorph();
      } else {
        doCooldown();
      }
    }
    animate();
    // eslint-disable-next-line
  }, [texts, morphTime, cooldownTime]);

  return (
    <div
      style={{
        position: "relative",
        filter: "url(#threshold) blur(0.6px)",
      }}
      className={className}
    >
      {/* SVG 필터 정의 */}
      <svg style={{ display: "none" }}>
        <defs>
          <filter id="threshold">
            <feColorMatrix in="SourceGraphic" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 255 -140" />
          </filter>
        </defs>
      </svg>
      <span
        ref={text1Ref}
        style={{
          position: "absolute",
          fontFamily: "'Raleway', sans-serif",
          fontWeight: 900,
          color,
          userSelect: "none",
          left: 0,
          top: 0,
        }}
      />
      <span
        ref={text2Ref}
        style={{
          position: "absolute",
          fontFamily: "'Raleway', sans-serif",
          fontWeight: 900,
          color,
          userSelect: "none",
          left: 0,
          top: 0,
        }}
      />
    </div>
  );
};

export default MorphingText;
