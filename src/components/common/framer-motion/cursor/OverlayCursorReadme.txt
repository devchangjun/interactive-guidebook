OverlayCursorProvider 컴포넌트 사용법 안내
====================================

1. 컴포넌트 설명
----------------
- 특정 영역에 마우스가 올라가면 핑크색 동그란 원과 'overlay' 텍스트가 포함된 커스텀 커서가 나타납니다.
- 커서 위치는 마우스 위치를 따라다니며, 영역을 벗어나면 사라집니다.
- 재사용 가능한 Provider 형태로, 원하는 영역을 children으로 감싸서 사용합니다.

2. 기본 사용 예시
----------------

import OverlayCursorProvider from '@/components/common/framer-motion/OverlayCursor';

<OverlayCursorProvider>
  <div style={{ height: 300, background: '#eee' }}>
    여기에 마우스를 올려보세요!
  </div>
</OverlayCursorProvider>

3. 커스텀 옵션
--------------
- cursorText: 커서 안에 들어갈 텍스트 (기본값: 'overlay')
- cursorSize: 커서 지름(px, 기본값: 80)
- cursorColor: 커서 배경색 (기본값: '#ff69b4')

<OverlayCursorProvider cursorText="Click!" cursorSize={100} cursorColor="#e91e63">
  ...
</OverlayCursorProvider>

4. 특징 및 참고사항
-------------------
- 커서가 나타나는 영역은 children 전체입니다.
- motion.div로 부드럽게 이동하며, pointerEvents: none으로 클릭 등 이벤트에 방해되지 않습니다.
- 반응형 및 접근성을 고려하여 설계되었습니다. 