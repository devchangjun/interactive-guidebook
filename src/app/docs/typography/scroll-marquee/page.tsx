import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { ResultBox } from "@/components/common/ResultBox";
import { CopyButton } from "../../components/CopyButton";
import ScrollMarqueeText from "@/components/common/framer-motion/typography/ScrollMarqueeText";

const scrollMarqueeCode = `import ScrollMarqueeText from '@/components/common/framer-motion/typography/ScrollMarqueeText';

<ScrollMarqueeText
  texts={[
    "Let's Dive Into This Tutorial",
    "Take It Easy!",
    "Don't Worry Let's Code",
    "HappyCoding"
  ]}
  baseSpeed={50}
  fontSize="5vw"
  color="#003b9a"
/>
`;

export default function ScrollMarqueePage() {
  return (
    <div>
      {/* 1. 🎯 인터랙션 제목 */}
      <h1 className="text-white text-2xl font-medium mb-4">스크롤 마키 텍스트 (Scroll Marquee Text)</h1>
      <hr className="my-4 border-0 border-t border-white" />

      {/* 4. 💻 코드 예시 + 실제 데모 */}
      <section className="mb-8">
        <h2 className="text-white text-2xl font-medium mb-4">데모</h2>
        <ResultBox className="h-[800px] relative bg-gradient-to-b from-gray-900 to-gray-800 bg-cover bg-center no-repeat shadow-lg border-none">
          <ScrollMarqueeText
            texts={["Let's Dive Into This Tutorial", "Take It Easy!", "Don't Worry Let's Code", "Happy Coding"]}
            baseSpeed={50}
            fontSize="5vw"
            color="#fff"
            className="font-family: 'Montserrat', 'Noto Sans KR', 'Pretendard', Arial, sans-serif"
          />
        </ResultBox>
        <div className="text-gray-400 text-base font-normal ml-4 mb-4">
          <b>배경 이미지와 예쁜 폰트(Montserrat, Noto Sans KR) 적용 예시입니다.</b>
          <br />
          스크롤 시 속도가 빨라지는 무한 반복 텍스트 애니메이션입니다.
        </div>
      </section>

      {/* 2. ✅ 사용하면 좋은 예시 */}
      <section className="mb-8">
        <h2 className="text-white text-2xl font-medium mb-4">사용하면 좋은 예시</h2>
        <ul className="text-base text-[#fff] list-disc list-inside">
          <li>브랜드 메시지 강조: 주요 키워드를 반복적으로 노출</li>
          <li>섹션 구분자: 콘텐츠 영역 사이에 동적인 구분선으로 활용</li>
          <li>인터랙티브 배너: 사용자 스크롤과 연동되는 동적 배너</li>
        </ul>
      </section>

      {/* 3. 🧠 아이디어 구체화 (인터랙션 흐름 시나리오) */}
      <section style={{ marginBottom: 24 }}>
        <h2 className="text-white text-2xl font-medium mb-4">아이디어 구체화 (인터랙션 흐름 시나리오)</h2>
        <ol className="text-white text-base font-normal ml-4 mb-4 list-decimal list-inside">
          <li>기본: 일정한 속도로 텍스트가 좌에서 우로 이동</li>
          <li>스크롤: 사용자가 스크롤할 때 텍스트 이동 속도 증가</li>
          <li>복귀: 스크롤이 멈추면 천천히 기본 속도로 복귀</li>
          <li>반복: 끊김 없이 자연스럽게 무한 반복</li>
        </ol>
        <div className="text-white text-base font-normal ml-4 mb-4">
          💡 스크롤 인터랙션으로 사용자 참여도를 높이고 동적인 경험을 제공합니다.
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-white text-2xl font-medium mb-4">응용 예제</h2>
        <ResultBox className="h-[800px] relative bg-gradient-to-b from-gray-900 to-gray-800 bg-cover bg-center no-repeat shadow-lg border-none">
          <div>
            <div className="relative bg-red-500 transform rotate-5">
              <ScrollMarqueeText
                texts={["Let's Dive Into This Tutorial", "Take It Easy!", "Don't Worry Let's Code", "Happy Coding"]}
                baseSpeed={50}
                fontSize="5vw"
                color="#fff"
                className="font-family: 'Montserrat', 'Noto Sans KR', 'Pretendard', Arial, sans-serif font-bold tracking-tighter text-shadow-[0_2px_16px_rgba(0,0,0,0.18)] bg-red-500 p-4 rounded-md"
              />
            </div>
            <div className="relative bg-orange-500 transform rotate-5">
              <ScrollMarqueeText
                texts={["Let's Dive Into This Tutorial", "Take It Easy!", "Don't Worry Let's Code", "Happy Coding"]}
                baseSpeed={50}
                fontSize="5vw"
                color="#fff"
                direction={true}
                className="font-family: 'Montserrat', 'Noto Sans KR', 'Pretendard', Arial, sans-serif font-bold tracking-tighter text-shadow-[0_2px_16px_rgba(0,0,0,0.18)] bg-orange-500 p-4 rounded-md"
              />
            </div>
          </div>
        </ResultBox>
      </section>

      {/* 5. 🧑‍💻 바이브 코딩용 프롬프트 예시 */}
      <section className="mb-8">
        <h2 className="text-white text-2xl font-medium mb-4">바이브 코딩용 프롬프트 예시</h2>
        <pre className="bg-[#18181b] text-[#FFD600] rounded-md p-4 text-base whitespace-pre-line">
          {`스크롤 시 속도가 빨라지는 무한 반복 텍스트 애니메이션을 만들어줘.
텍스트는 좌에서 우로 계속 이동하고, 사용자가 스크롤하면 이동 속도가 빨라졌다가
스크롤이 멈추면 천천히 원래 속도로 돌아오게 해줘.`}
        </pre>
      </section>

      <section className="mb-8">
        <h2 className="text-white text-2xl font-medium mb-4">코드 예시</h2>
        <div className="relative mb-4">
          <CopyButton code={scrollMarqueeCode} />
          <SyntaxHighlighter
            language="tsx"
            style={oneDark}
            customStyle={{ borderRadius: 8, fontSize: 14, paddingTop: 32 }}
          >
            {scrollMarqueeCode}
          </SyntaxHighlighter>
        </div>
      </section>
    </div>
  );
}
