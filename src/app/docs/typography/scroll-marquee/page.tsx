import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { ResultBox } from "@/components/common/ResultBox";
import { CopyButton } from "../../components/CopyButton";
import ScrollMarqueeText from "@/components/common/framer-motion/typography/ScrollMarqueeText";
import Title from "../../components/Title";

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
      <Title>마퀴 텍스트</Title>
      <hr className="my-4 border-0 border-t border-gray-600" />

      {/* 4. 💻 코드 예시 + 실제 데모 */}
      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-medium text-white">데모</h2>
        <ResultBox className="relative h-[800px] border-none bg-gradient-to-b from-gray-900 to-gray-800 bg-cover bg-center no-repeat shadow-lg">
          <ScrollMarqueeText
            texts={["Let's Dive Into This Tutorial", "Take It Easy!", "Don't Worry Let's Code", "Happy Coding"]}
            baseSpeed={50}
            fontSize="5vw"
            color="#fff"
          />
        </ResultBox>
        <div className="mb-4 ml-4 text-base font-normal text-gray-400">
          <b>배경 이미지와 예쁜 폰트(Montserrat, Noto Sans KR) 적용 예시입니다.</b>
          <br />
          스크롤 시 속도가 빨라지는 무한 반복 텍스트 애니메이션입니다.
        </div>
      </section>

      {/* 2. ✅ 사용하면 좋은 예시 */}
      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-medium text-white">사용하면 좋은 예시</h2>
        <ul className="list-inside list-disc text-base text-white">
          <li>브랜드 메시지 강조: 주요 키워드를 반복적으로 노출</li>
          <li>섹션 구분자: 콘텐츠 영역 사이에 동적인 구분선으로 활용</li>
          <li>인터랙티브 배너: 사용자 스크롤과 연동되는 동적 배너</li>
        </ul>
      </section>

      {/* 3. 🧠 아이디어 구체화 (인터랙션 흐름 시나리오) */}
      <section className="mb-6">
        <h2 className="mb-4 text-2xl font-medium text-white">아이디어 구체화 (인터랙션 흐름 시나리오)</h2>
        <ol className="mb-4 ml-4 list-inside list-decimal text-base font-normal text-white">
          <li>기본: 일정한 속도로 텍스트가 좌에서 우로 이동</li>
          <li>스크롤: 사용자가 스크롤할 때 텍스트 이동 속도 증가</li>
          <li>복귀: 스크롤이 멈추면 천천히 기본 속도로 복귀</li>
          <li>반복: 끊김 없이 자연스럽게 무한 반복</li>
        </ol>
        <div className="mb-4 ml-4 text-base font-normal text-white">
          💡 스크롤 인터랙션으로 사용자 참여도를 높이고 동적인 경험을 제공합니다.
        </div>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-medium text-white">응용 예제</h2>
        <ResultBox className="relative h-[800px] border-none bg-gradient-to-b from-gray-900 to-gray-800 bg-cover bg-center no-repeat shadow-lg">
          <div>
            <div className="relative rotate-5 transform bg-red-500">
              <ScrollMarqueeText
                texts={["Let's Dive Into This Tutorial", "Take It Easy!", "Don't Worry Let's Code", "Happy Coding"]}
                baseSpeed={50}
                fontSize="5vw"
                color="#fff"
                className="rounded-md bg-red-500 p-4 font-bold tracking-tighter"
              />
            </div>
            <div className="relative rotate-5 transform bg-orange-500">
              <ScrollMarqueeText
                texts={["Let's Dive Into This Tutorial", "Take It Easy!", "Don't Worry Let's Code", "Happy Coding"]}
                baseSpeed={50}
                fontSize="5vw"
                color="#fff"
                direction={true}
                className="rounded-md bg-orange-500 p-4 font-bold tracking-tighter"
              />
            </div>
          </div>
        </ResultBox>
      </section>

      {/* 5. 🧑‍💻 바이브 코딩용 프롬프트 예시 */}
      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-medium text-white">바이브 코딩용 프롬프트 예시</h2>
        <pre className="whitespace-pre-line rounded-lg bg-gray-900 p-4 text-base text-yellow-400">
          {`스크롤 시 속도가 빨라지는 무한 반복 텍스트 애니메이션을 만들어줘.
텍스트는 좌에서 우로 계속 이동하고, 사용자가 스크롤하면 이동 속도가 빨라졌다가
스크롤이 멈추면 천천히 원래 속도로 돌아오게 해줘.`}
        </pre>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-medium text-white">코드 예시</h2>
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
