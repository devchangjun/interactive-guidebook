import DemoContainer from "@/components/common/DemoContainer";
import TiltCard from "@/components/common/effects/TiltCard";
import Image from "next/image";
import Title from "../../components/Title";

export default function TiltCardPage() {
  return (
    <div>
      {/* 1. 🎯 인터랙션 제목 */}
      <Title>3D Tilt + Parallax 카드 인터랙션</Title>
      <hr className="my-4 border-t border-gray-700" />

      {/* 2. 💻 코드 예시 + 실제 데모 */}
      <section className="mb-8">
        <h2 className="text-xl md:text-2xl font-medium mb-4">데모</h2>
        <DemoContainer>
          <div className="flex flex-wrap justify-center gap-6">
            <TiltCard>
              <div className="w-full max-w-xs h-full rounded-lg overflow-hidden bg-gray-900 flex flex-col">
                <Image
                  src="/1.avif"
                  alt="tech image"
                  width={400}
                  height={200}
                  className="w-full h-60 object-cover"
                  priority
                  unoptimized
                />
                <div className="p-4">
                  <h3 className="text-white text-lg md:text-xl mb-2">프로필 1</h3>
                  <p className="text-gray-400 text-sm md:text-base">상세 설명 텍스트 1</p>
                </div>
              </div>
            </TiltCard>
            <TiltCard>
              <div className="w-full max-w-xs h-full rounded-lg overflow-hidden bg-gray-900 flex flex-col">
                <Image
                  src="/1.avif"
                  alt="tech image"
                  width={400}
                  height={200}
                  className="w-full h-60 object-cover"
                  priority
                  unoptimized
                />
                <div className="p-4">
                  <h3 className="text-white text-lg md:text-xl mb-2">프로필 2</h3>
                  <p className="text-gray-400 text-sm md:text-base">상세 설명 텍스트 2</p>
                </div>
              </div>
            </TiltCard>
            <TiltCard>
              <div className="w-full max-w-xs h-full rounded-lg overflow-hidden bg-gray-900 flex flex-col">
                <Image
                  src="/1.avif"
                  alt="tech image"
                  width={400}
                  height={200}
                  className="w-full h-60 object-cover"
                  priority
                  unoptimized
                />
                <div className="p-4">
                  <h3 className="text-white text-lg md:text-xl mb-2">프로필 3</h3>
                  <p className="text-gray-400 text-sm md:text-base">상세 설명 텍스트 3</p>
                </div>
              </div>
            </TiltCard>
          </div>
        </DemoContainer>
        <div className="text-sm text-gray-400 mt-2">
          내부 요소는 <code>useParallax(depth)</code>로 개별적으로 깊이 효과를 줄 수 있습니다.
        </div>
      </section>

      {/* 2. ✅ 사용하면 좋은 예시 */}
      <section className="mb-8">
        <h2 className="text-xl md:text-2xl font-medium mb-4">사용하면 좋은 예시</h2>
        <ul className="text-base text-[#fff] list-disc list-inside">
          <li>포트폴리오 썸네일: 입체감과 시각적 매력 강조</li>
          <li>CTA 카드: 마우스 호버로 시선 집중 유도</li>
          <li>제품 소개 카드: 정보에 깊이와 레이어를 부여</li>
        </ul>
      </section>

      {/* 3. 🧠 아이디어 구체화 (인터랙션 흐름 시나리오) */}
      <section className="mb-8">
        <h2 className="text-xl md:text-2xl font-medium mb-4">아이디어 구체화 (인터랙션 흐름 시나리오)</h2>
        <ol className="text-base text-[#fff] list-decimal list-inside mb-4">
          <li>초기: 정적인 카드가 배치됨</li>
          <li>마우스 이동 시: 커서 위치에 따라 카드가 기울어짐</li>
          <li>
            내부 요소: <code>useParallax(depth)</code>로 각 요소가 다르게 움직임
          </li>
          <li>마우스 이탈 시: 카드 기울기 원위치</li>
          <li>모바일: 효과 비활성화됨 (768px 이하)</li>
        </ol>
        <div className="text-sm text-gray-400 mt-2">
          💡 내부 요소도 <b>깊이감</b>을 줄 수 있어 입체적인 경험을 줄 수 있습니다.
        </div>
      </section>
    </div>
  );
}
