"use client";
import ParallaxImageTest from "@/components/common/framer-motion/ParallaxImage";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { CopyButton } from "../../components/CopyButton";
import { parallaxImageTestCode } from "./constants/code";
import { ResultBox } from "@/components/common/ResultBox";
import Title from "../../components/Title";

export default function ParallaxPage() {
  return (
    <div>
      {/* 1. 🎯 인터랙션 제목 */}
      <Title>스크롤 패럴랙스 이미지</Title>
      <hr className="my-4 border-t border-gray-200" />
      {/* 2. 💻 코드 예시 + 실제 데모 */}
      <section className="mb-8">
        <h2 className="text-xl font-medium mb-2">데모</h2>
        <ResultBox>
          <ParallaxImageTest />
        </ResultBox>
        <div className="text-sm text-gray-500 mt-2">
          <b>framer-motion</b>을 활용해 스크롤에 따라 배경 이미지가 부드럽게 패럴랙스 이동하는 인터랙션입니다.
        </div>
      </section>
      {/* 3. ✅ 사용하면 좋은 예시 */}
      <section className="mb-8">
        <h2 className="text-xl font-medium mb-2">사용하면 좋은 예시</h2>
        <ul className="text-base text-white ml-4">
          <li>랜딩/히어로 섹션: 깊이감 있는 배경 연출</li>
          <li>스크롤 기반 스토리텔링: 몰입감 있는 전환 효과</li>
          <li>포트폴리오/소개 페이지: 시각적 집중 유도</li>
        </ul>
      </section>
      {/* 4. 🧠 아이디어 구체화 (인터랙션 흐름 시나리오) */}
      <section className="mb-8">
        <h2 className="text-xl font-medium mb-2">아이디어 구체화 (인터랙션 흐름 시나리오)</h2>
        <ol className="text-base text-white ml-4 mb-2">
          <li>페이지 진입: 배경 이미지가 기본 위치에 노출</li>
          <li>스크롤 내릴수록 배경이 자연스럽게 위로 이동</li>
          <li>스크롤을 올리면 다시 아래로 이동</li>
          <li>텍스트/콘텐츠는 배경 위에 자연스럽게 노출</li>
        </ol>
        <div className="text-sm text-gray-500">
          💡 배경 이미지의 y값을 스크롤 위치에 따라 부드럽게 조절해 깊이감을 높일 수 있습니다.
        </div>
      </section>
      {/* 5. 🧑‍💻 바이브 코딩용 프롬프트 예시 */}
      <section className="mb-8">
        <h2 className="text-xl font-medium mb-2">바이브 코딩용 프롬프트 예시</h2>
        <pre className="bg-gray-900 text-yellow-500 rounded-lg p-4 text-sm whitespace-pre-line">
          {`스크롤을 내리면 배경 이미지가 부드럽게 위로 이동하는 패럴랙스 효과의 컴포넌트를 만들어줘.\nframer-motion의 useScroll, useTransform, useSpring을 활용해서 자연스럽게 트랜지션이 적용되게 해줘.\n배경 이미지는 전체 화면을 덮도록 하고, 반응형 웹도 고려해줘.\n샘플 이미지는 /images/image.png로 해줘.`}
        </pre>
      </section>
      {/* 6. ⚡코드 예시 */}
      <section className="mb-8">
        <h2 className="text-xl font-medium mb-2">코드 예시</h2>
        <div className="relative mb-2">
          <CopyButton code={parallaxImageTestCode} />
          <SyntaxHighlighter
            language="tsx"
            style={oneDark}
            customStyle={{ borderRadius: 8, fontSize: 14, paddingTop: 32 }}
          >
            {parallaxImageTestCode}
          </SyntaxHighlighter>
        </div>
      </section>
    </div>
  );
}
