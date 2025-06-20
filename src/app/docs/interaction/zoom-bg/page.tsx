"use client";
import ZoomScrollBg from "../../../../components/common/framer-motion/ZoomScrollBg";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { CopyButton } from "../../components/CopyButton";
import { zoomScrollBgCode } from "./constants/code";
import { ResultBox } from "@/components/common/ResultBox";
import Title from "../../components/Title";

export default function ZoomScrollBgPage() {
  return (
    <div>
      {/* 1. 🎯 인터랙션 제목 */}
      <Title>스크롤 Zoom In/Out 배경 (Zoom Scroll Background)</Title>
      <hr className="my-4 border-0 border-t border-[#fff]" />
      {/* 2. 💻 코드 예시 + 실제 데모 */}
      <section className="mb-8">
        <h2 className="text-xl font-medium mb-2">데모</h2>
        <ResultBox>
          <ZoomScrollBg />
        </ResultBox>
        <div className="text-sm text-gray-500 mt-2">
          <b>framer-motion</b>을 활용해 스크롤에 따라 배경 이미지가 부드럽게 확대/축소되는 인터랙션입니다.
        </div>
      </section>

      {/* 3. ✅ 사용하면 좋은 예시 */}
      <section className="mb-8">
        <h2 className="text-xl font-medium mb-2">사용하면 좋은 예시</h2>
        <ul className="text-base text-[#fff] list-disc list-inside">
          <li>랜딩/히어로 섹션: 임팩트 있는 배경 연출</li>
          <li>스크롤 기반 스토리텔링: 몰입감 있는 전환 효과</li>
          <li>포트폴리오/소개 페이지: 시각적 집중 유도</li>
        </ul>
      </section>
      {/* 4. 🧠 아이디어 구체화 (인터랙션 흐름 시나리오) */}
      <section className="mb-8">
        <h2 className="text-xl font-medium mb-2">아이디어 구체화 (인터랙션 흐름 시나리오)</h2>
        <ol className="text-base text-[#fff] list-decimal list-inside mb-4">
          <li>페이지 진입: 배경 이미지가 기본 크기로 노출</li>
          <li>스크롤 내릴수록 배경이 자연스럽게 확대</li>
          <li>스크롤을 올리면 다시 축소</li>
          <li>텍스트/콘텐츠는 배경 위에 자연스럽게 노출</li>
        </ol>
        <div className="text-sm text-gray-500">
          💡 배경 이미지의 scale을 스크롤 위치에 따라 부드럽게 조절해 몰입감을 높일 수 있습니다.
        </div>
      </section>
      {/* 5. 🧑‍💻 바이브 코딩용 프롬프트 예시 */}
      <section className="mb-8">
        <h2 className="text-xl font-medium mb-2">바이브 코딩용 프롬프트 예시</h2>
        <div className="overflow-x-auto rounded-lg bg-[#18181b]">
          <pre className="p-4 text-base text-yellow-500 whitespace-pre-line">
            {`스크롤을 내리면 배경 이미지가 부드럽게 확대(zoom in)되고, 올리면 다시 축소(zoom out)되는 컴포넌트를 만들어줘.
framer-motion의 useScroll, useTransform, useSpring을 활용해서 자연스럽게 트랜지션이 적용되게 해줘.
배경 이미지는 전체 화면을 덮도록 하고, 반응형 웹도 고려해줘.
샘플 이미지는 /images/image.png로해줘.`}
          </pre>
        </div>
      </section>
      {/* 6. ⚡코드 예시 */}
      <section className="mb-8">
        <h2 className="text-xl font-medium mb-2">코드 예시</h2>
        <div className="relative mb-4 overflow-hidden rounded-lg">
          <CopyButton code={zoomScrollBgCode} />
          <div className="overflow-x-auto">
            <SyntaxHighlighter
              language="tsx"
              style={oneDark}
              customStyle={{ borderRadius: 0, fontSize: 14, paddingTop: 32, margin: 0 }}
            >
              {zoomScrollBgCode}
            </SyntaxHighlighter>
          </div>
        </div>
      </section>
    </div>
  );
}
