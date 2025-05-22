"use client";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { CopyButton } from "../../components/CopyButton";
import { ResultBox } from "@/components/common/ResultBox";
import { textClipEffectCode } from "./constants/code";
import TextClipEffectItem from "@/components/common/framer-motion/typography/TextClipEffectItem";

export default function TextClipEffectPage() {
  return (
    <div>
      {/* 1. 🎯 인터랙션 제목 */}
      <h1 className="text-white text-2xl font-medium mb-4">텍스트 클립 이펙트 (Text Clip Effect)</h1>
      <hr className="my-4 border-0 border-t border-white" />

      {/* 2. 💻 코드 예시 + 실제 데모 */}
      <section className="mb-8">
        <h2 className="text-white text-2xl font-medium mb-4">데모</h2>
        <ResultBox className="mb-4 h-screen">
          <div className="flex flex-col gap-8">
            {[
              { main: "Hello", sub: "Hello" },
              { main: "javascript", sub: "javascript" },
              { main: "typescript", sub: "typescript" },
            ].map((item) => (
              <TextClipEffectItem key={item.main} {...item} fontSize="6vw" />
            ))}
          </div>
        </ResultBox>
        <div className="text-white text-base font-normal ml-4 mb-4">
          <b>gsap</b>과 <b>ScrollTrigger</b>를 활용해 스크롤 위치에 따라 텍스트 배경이 채워지는 인터랙션입니다.
        </div>
      </section>

      {/* 3. ✅ 사용하면 좋은 예시 */}
      <section className="mb-8">
        <h2 className="text-white text-2xl font-medium mb-4">사용하면 좋은 예시</h2>
        <ul className="text-white text-base font-normal ml-4">
          <li>- 메인 타이틀: 스크롤에 따라 강조 효과</li>
          <li>- 섹션 헤드라인: 시각적 임팩트 부여</li>
          <li>- 포트폴리오/랜딩: 브랜드 컬러 강조</li>
        </ul>
      </section>

      {/* 4. 🧠 아이디어 구체화 (인터랙션 흐름 시나리오) */}
      <section className="mb-8">
        <h2 className="text-white text-2xl font-medium mb-4">아이디어 구체화 (인터랙션 흐름 시나리오)</h2>
        <ol className="text-white text-base font-normal ml-4 mb-4">
          <li>초기: 텍스트 배경이 비어 있음 (background-size: 0%)</li>
          <li>스크롤: 텍스트 배경이 점점 채워짐 (background-size: 100%)</li>
          <li>완료: 텍스트가 완전히 채워진 상태</li>
        </ol>
        <div className="text-white text-base font-normal ml-4">
          💡 gsap의 <b>ScrollTrigger</b>로 스크롤 위치에 따라 배경 그라데이션이 자연스럽게 채워집니다.
        </div>
      </section>

      {/* 5. 🧑‍💻 바이브 코딩용 프롬프트 예시 */}
      <section className="mb-8">
        <h2 className="text-white text-2xl font-medium mb-4">바이브 코딩용 프롬프트 예시</h2>
        <pre className="text-white text-base font-normal ml-4 mb-4 bg-gray-900 p-4 rounded-lg whitespace-pre-line text-yellow-500">
          {`- gsap의 ScrollTrigger를 사용해줘.
- 텍스트는 h1 태그로, 메인 텍스트와 서브 텍스트(작은 설명)가 함께 들어가야 해.
- 배경 그라데이션은 Tailwind CSS의 arbitrary value 문법([background-clip:text], [background-size:0%])을 활용해서 텍스트에만 적용해줘.
- 스크롤이 시작되면 배경이 0%에서 100%까지 채워지도록 gsap 애니메이션을 적용해줘.
- 컴포넌트는 useRef, useEffect를 사용해서 'use client' 환경에서 동작하게 해줘.
- 반응형 웹을 고려해서 폰트 크기는 vw 단위로, 레이아웃은 flex로 정렬해줘.
- 서브 텍스트는 span으로 감싸고, 메인 텍스트 위에 겹쳐서 배치해줘.
- 텍스트에 마우스를 hover하면, 서브 텍스트(span)의 clip-path가 변경되어 전체가 자연스럽게 드러나도록 해줘.
- hover 효과도 gsap 또는 Tailwind arbitrary value로 구현해줘.
- gsap의 ScrollTrigger 옵션(start, end, scrub 등)은 실제로 자연스러운 구간으로 설정해줘.
- 예시 텍스트: main=\"Clip Effect!\", sub=\"스크롤로 배경이 채워집니다\"
- 전체 코드를 컴포넌트 형태로 작성해줘.`}
        </pre>
      </section>

      {/* 6. ⚡코드 예시 */}
      <section className="mb-8">
        <h2 className="text-white text-2xl font-medium mb-4">코드 예시</h2>
        <div className="relative mb-4">
          <CopyButton code={textClipEffectCode} />
          <SyntaxHighlighter
            language="tsx"
            style={oneDark}
            customStyle={{ borderRadius: 8, fontSize: 14, paddingTop: 32 }}
          >
            {textClipEffectCode}
          </SyntaxHighlighter>
        </div>
      </section>
    </div>
  );
}
