export const revealTextCode = `// RevealText 기본 사용 예시
<RevealText
  text="Reveal 애니메이션 예시입니다."
  direction="up"
  delay={0}
  duration={0.5}
  stagger={0.04}
/>

// 단어 단위로 등장
<RevealText
  text="단어 단위로 등장합니다!"
  byWord
  direction="left"
  delay={0.2}
  stagger={0.12}
/>

// 오른쪽에서 한 글자씩 등장
<RevealText
  text="오른쪽에서 한 글자씩 등장!"
  direction="right"
  delay={0.4}
  duration={0.7}
/>
`;
