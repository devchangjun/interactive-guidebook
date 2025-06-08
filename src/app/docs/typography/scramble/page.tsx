"use client";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { ResultBox } from "@/components/common/ResultBox";
import { CopyButton } from "../../components/CopyButton";
import ScrambleText from "@/components/common/framer-motion/typography/TextScramble";

// 코드 예시 상수 (실제 구현 코드)
const scrambleTextCode = `"use client";

import { useState, useEffect, useRef } from "react";

export interface TextScrambleProps {
  text: string;
  speed?: number; // 스크램블 속도 (밀리초)
  delay?: number; // 시작 지연 시간 (밀리초)
  className?: string;
  onComplete?: () => void; // 스크램블 완료 시 콜백
  loop?: boolean; // 반복 여부
  pauseTime?: number; // 반복 시 일시정지 시간
  characters?: string; // 스크램블에 사용할 문자셋
  revealSpeed?: number; // 각 문자가 복원되는 속도
  trigger?: "auto" | "hover" | "manual"; // 트리거 방식
  onHover?: () => void; // 호버 시 콜백
}

const TextScramble = ({
  text,
  speed = 50,
  delay = 0,
  className = "",
  onComplete,
  loop = false,
  pauseTime = 1000,
  characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?",
  revealSpeed = 100,
  trigger = "auto",
  onHover,
}: TextScrambleProps) => {
  const [displayText, setDisplayText] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const frameRef = useRef(0);

  const getRandomChar = () => {
    return characters[Math.floor(Math.random() * characters.length)];
  };

  const scrambleText = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    frameRef.current = 0;

    const animate = () => {
      const frame = frameRef.current;
      const revealIndex = Math.floor(frame / (revealSpeed / speed));

      let scrambledText = "";

      for (let i = 0; i < text.length; i++) {
        if (i < revealIndex) {
          // 이미 복원된 문자
          scrambledText += text[i];
        } else {
          // 아직 스크램블 중인 문자
          if (text[i] === " ") {
            scrambledText += " ";
          } else {
            scrambledText += getRandomChar();
          }
        }
      }

      setDisplayText(scrambledText);

      if (revealIndex >= text.length) {
        // 애니메이션 완료
        setDisplayText(text);
        setIsAnimating(false);
        onComplete?.();

        if (loop) {
          timeoutRef.current = setTimeout(() => {
            setDisplayText("");
            frameRef.current = 0;
            scrambleText();
          }, pauseTime);
        }
      } else {
        frameRef.current++;
        intervalRef.current = setTimeout(animate, speed);
      }
    };

    animate();
  };

  const handleMouseEnter = () => {
    if (trigger === "hover" && !isAnimating) {
      onHover?.();
      scrambleText();
    }
  };

  useEffect(() => {
    // auto 모드에서만 자동 시작
    if (trigger === "auto") {
      const startTimeout = setTimeout(() => {
        scrambleText();
      }, delay);

      return () => {
        clearTimeout(startTimeout);
        if (intervalRef.current) {
          clearTimeout(intervalRef.current);
        }
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
      };
    }
  }, [text, speed, delay, loop, pauseTime, characters, revealSpeed, trigger]);

  // text가 변경되면 애니메이션 재시작
  useEffect(() => {
    if (intervalRef.current) {
      clearTimeout(intervalRef.current);
    }
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setDisplayText("");
    setIsAnimating(false);
    frameRef.current = 0;

    const startTimeout = setTimeout(() => {
      scrambleText();
    }, delay);

    return () => {
      clearTimeout(startTimeout);
    };
  }, [text]);

  // hover 모드일 때 초기 텍스트를 표시
  const shouldShowInitialText = trigger === "hover" && !displayText && !isAnimating;

  return (
    <span
      className={\`\${className} \${trigger === "hover" ? "cursor-pointer select-none" : ""}\`}
      onMouseEnter={trigger === "hover" ? handleMouseEnter : undefined}
    >
      {shouldShowInitialText
        ? text
        : displayText ||
          text.split("").map((char, i) => (
            <span key={i} className="opacity-0">
              {char}
            </span>
          ))}
    </span>
  );
};

export default TextScramble;

`;

export default function ScrambleTextPage() {
  return (
    <div>
      {/* 1. 🎯 인터랙션 제목 */}
      <h1 className="text-4xl font-bold mb-2">스크램블 텍스트 애니메이션 (Scramble Text Effect)</h1>
      <hr className="my-4 border-t border-[#eee]" />

      {/* 2. 💻 코드 예시 + 실제 데모 */}
      <section className="mb-8">
        <h2 className="text-2xl font-medium mb-4">데모</h2>
        <ResultBox>
          <ScrambleText className="text-4xl" text="스크램블 효과 예시입니다!" speed={100} delay={100} loop={true} />
        </ResultBox>
        <div className="text-sm text-[#888] mt-2">
          gsap 없이 <code>setTimeout</code>만으로도 구현 가능하지만, gsap의 delayedCall을 쓰면 타이밍 제어가 더 쉽고
          부드럽게 연출할 수 있어요.
        </div>
      </section>

      {/* 3. ✅ 사용하면 좋은 예시 */}
      <section className="mb-8">
        <h2 className="text-2xl font-medium mb-4">사용하면 좋은 예시</h2>
        <ul className="text-base text-[#fff] list-disc list-inside">
          <li>로딩 중 메시지: 데이터 로딩, 인증 등 잠깐의 대기 상황에서 시선을 끌고 싶을 때</li>
          <li>메인 슬로건/헤드라인: 혁신적이거나 미래지향적인 분위기를 주고 싶을 때</li>
          <li>게임/테크/해킹 컨셉: 텍스트가 암호처럼 등장하는 느낌을 주고 싶을 때</li>
        </ul>
      </section>

      {/* 4. 🧠 아이디어 구체화 (인터랙션 흐름 시나리오) */}
      <section className="mb-8">
        <h2 className="text-2xl font-medium mb-4">아이디어 구체화 (인터랙션 흐름 시나리오)</h2>
        <ol className="text-base text-[#fff] list-decimal list-inside mb-4">
          <li>시작: 화면에는 아무 텍스트도 없다가, 한 글자씩 타이핑되듯 등장합니다.</li>
          <li>
            스크램블: 마지막 몇 글자는 랜덤 문자로 스크램블되어 보입니다. 여러 번 랜덤하게 바뀌며, 점차 원래 텍스트로
            복원됩니다.
          </li>
          <li>완성: 모든 글자가 원래 텍스트로 돌아오면, 컬러 변화 등으로 완료를 강조할 수 있습니다.</li>
        </ol>
        <div className="text-sm text-[#fff]">
          💡 &quot;타이핑 → 스크램블 → 복원&quot;의 3단계로, 긴장감과 몰입감을 줄 수 있어요!
        </div>
      </section>

      {/* 5. 🧑‍💻 바이브 코딩용 프롬프트 예시 */}
      <section className="mb-8">
        <h2 className="text-2xl font-medium mb-4">바이브 코딩용 프롬프트 예시</h2>
        <pre className="bg-[#18181b] text-[#FFD600] rounded-lg p-4 text-sm whitespace-pre-line">
          {`텍스트가 한 글자씩 타이핑되다가, 마지막 몇 글자는 랜덤 문자로 스크램블되며 점차 원래 텍스트로 복원되는 효과를 만들고 싶어.\n로딩 메시지나 해킹 느낌의 헤드라인에 쓰고 싶어. gsap이나 프레이머 모션 써도 좋아.`}
        </pre>
      </section>

      {/* 6. ⚡코드 예시 */}
      <section className="mb-8">
        <h2 className="text-2xl font-medium mb-4">코드 예시</h2>
        <div className="relative mb-4">
          <CopyButton code={scrambleTextCode} />
          <SyntaxHighlighter
            language="tsx"
            style={oneDark}
            customStyle={{ borderRadius: 8, fontSize: 14, paddingTop: 32 }}
          >
            {scrambleTextCode}
          </SyntaxHighlighter>
        </div>
      </section>

      {/* 7. ✅ 다음과 같은 인터랙션에도 동일 구조 적용 가능 */}
      <section className="mb-8">
        <h2 className="text-2xl font-medium mb-4">✅ 다음과 같은 인터랙션에도 동일 구조 적용 가능</h2>
        <ul style={{ fontSize: 16, color: "#555", marginLeft: 16 }}>
          <li>로딩 중 텍스트 애니메이션</li>
          <li>해킹/암호 해제 느낌의 헤드라인</li>
          <li>게임/테크/미래지향적 UI</li>
        </ul>
      </section>
    </div>
  );
}
