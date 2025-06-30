export const TEXT_3D_INFO = {
  title: "3D Text Effect",
  description:
    "깊이감 있는 그림자와 회전 효과로 만든 3D 스타일 텍스트 컴포넌트입니다. 픽셀 아트 게임 스타일의 폰트와 함께 사용하면 레트로한 느낌을 연출할 수 있습니다.",
  features: [
    "다중 레이어 text-shadow로 3D 깊이 효과",
    "회전(rotate)과 기울임(skew) 변형 지원",
    "사용자 정의 가능한 색상 조합",
    "반응형 크기 조절",
    "픽셀 아트 폰트 지원",
    "중앙 정렬 및 커스텀 배치 옵션",
  ],
};

export const TEXT_3D_CODE = `import Text3D from "@/components/common/framer-motion/typography/Text3D";

export default function Example() {
  return (
    <Text3D 
      text="3D TEXT"
      fontSize={80}
      rotateAngle={20}
      skewAngle={-20}
      baseColor="#ffffff"
      shadowColor1="#51B3A3"
      shadowColor2="#389788"
      shadowColor3="#7ee5d6"
      backgroundColor="#59C4B4"
      fontFamily="'Press Start 2P', cursive"
      shadowDepth={90}
      centered={true}
    />
  );
}`;

export const TEXT_3D_PROPS = [
  {
    name: "text",
    type: "string",
    description: "표시할 텍스트",
    required: true,
  },
  {
    name: "fontSize",
    type: "number",
    description: "폰트 크기 (px)",
    defaultValue: "80",
  },
  {
    name: "rotateAngle",
    type: "number",
    description: "회전 각도 (deg)",
    defaultValue: "20",
  },
  {
    name: "skewAngle",
    type: "number",
    description: "기울임 각도 (deg)",
    defaultValue: "-20",
  },
  {
    name: "className",
    type: "string",
    description: "추가 CSS 클래스",
    defaultValue: '""',
  },
  {
    name: "baseColor",
    type: "string",
    description: "텍스트 기본 색상",
    defaultValue: '"#ffffff"',
  },
  {
    name: "shadowColor1",
    type: "string",
    description: "첫 번째 그림자 색상",
    defaultValue: '"#51B3A3"',
  },
  {
    name: "shadowColor2",
    type: "string",
    description: "두 번째 그림자 색상",
    defaultValue: '"#389788"',
  },
  {
    name: "shadowColor3",
    type: "string",
    description: "세 번째 그림자 색상",
    defaultValue: '"#7ee5d6"',
  },
  {
    name: "backgroundColor",
    type: "string",
    description: "배경 색상 (centered=true일 때)",
    defaultValue: '"#59C4B4"',
  },
  {
    name: "fontFamily",
    type: "string",
    description: "폰트 패밀리",
    defaultValue: "\"'Press Start 2P', cursive\"",
  },
  {
    name: "shadowDepth",
    type: "number",
    description: "그림자 깊이 (최대 레이어 수)",
    defaultValue: "90",
  },
  {
    name: "centered",
    type: "boolean",
    description: "중앙 정렬 및 전체 화면 배경 적용",
    defaultValue: "true",
  },
];
