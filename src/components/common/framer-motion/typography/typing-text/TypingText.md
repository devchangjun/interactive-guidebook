# TypingText 컴포넌트

타이핑 애니메이션 효과를 제공하는 재사용 가능한 React 컴포넌트입니다.

## 기본 사용법

```tsx
import TypingText from "@/components/common/framer-motion/typography/TypingText";

function MyComponent() {
  return <TypingText text="안녕하세요! 타이핑 애니메이션입니다." speed={100} />;
}
```

## Props

| Prop              | 타입         | 기본값  | 설명                           |
| ----------------- | ------------ | ------- | ------------------------------ | --------- |
| `text`            | `string`     | -       | 타이핑할 텍스트 (필수)         |
| `speed`           | `number`     | `100`   | 타이핑 속도 (밀리초)           |
| `delay`           | `number`     | `0`     | 시작 지연 시간 (밀리초)        |
| `className`       | `string`     | `""`    | 컨테이너 스타일 클래스         |
| `textClassName`   | `string`     | `""`    | 텍스트 스타일 클래스           |
| `cursorClassName` | `string`     | `""`    | 커서 스타일 클래스             |
| `showCursor`      | `boolean`    | `true`  | 커서 표시 여부                 |
| `cursorChar`      | `string`     | `"      | "`                             | 커서 문자 |
| `loop`            | `boolean`    | `false` | 반복 여부                      |
| `pauseTime`       | `number`     | `1000`  | 반복 시 일시정지 시간 (밀리초) |
| `autoStart`       | `boolean`    | `true`  | 자동 시작 여부                 |
| `onComplete`      | `() => void` | -       | 타이핑 완료 시 콜백            |
| `onStart`         | `() => void` | -       | 타이핑 시작 시 콜백            |
| `onPause`         | `() => void` | -       | 일시정지 시 콜백               |
| `onResume`        | `() => void` | -       | 재개 시 콜백                   |

## 사용 예시

### 1. 기본 타이핑

```tsx
<TypingText text="간단한 타이핑 효과입니다." />
```

### 2. 속도 조절

```tsx
<TypingText
  text="빠른 타이핑"
  speed={50}
/>
<TypingText
  text="느린 타이핑"
  speed={200}
/>
```

### 3. 지연 시작

```tsx
<TypingText text="2초 후에 시작됩니다." delay={2000} />
```

### 4. 반복 타이핑

```tsx
<TypingText text="반복되는 텍스트입니다." loop={true} pauseTime={2000} />
```

### 5. 커스텀 커서

```tsx
<TypingText text="다른 커서를 사용합니다." cursorChar="█" cursorClassName="text-red-500" />
```

### 6. 스타일 커스터마이징

```tsx
<TypingText
  text="스타일이 적용된 텍스트입니다."
  className="text-2xl font-bold text-blue-600"
  textClassName="text-green-500"
  cursorClassName="text-red-500 font-bold"
/>
```

### 7. 콜백 사용

```tsx
<TypingText
  text="완료되면 알림이 표시됩니다."
  onComplete={() => alert("타이핑 완료!")}
  onStart={() => console.log("타이핑 시작")}
/>
```

### 8. 수동 제어 (ref 사용)

```tsx
import { useRef } from "react";
import TypingText, { TypingTextRef } from "@/components/common/framer-motion/typography/TypingText";

function ControlledTypingText() {
  const typingRef = useRef<TypingTextRef>(null);

  return (
    <div>
      <TypingText ref={typingRef} text="수동으로 제어할 수 있는 텍스트입니다." autoStart={false} />

      <div className="mt-4 space-x-2">
        <button onClick={() => typingRef.current?.start()} className="px-4 py-2 bg-blue-500 text-white rounded">
          시작
        </button>
        <button onClick={() => typingRef.current?.pause()} className="px-4 py-2 bg-yellow-500 text-white rounded">
          일시정지
        </button>
        <button onClick={() => typingRef.current?.resume()} className="px-4 py-2 bg-green-500 text-white rounded">
          재개
        </button>
        <button onClick={() => typingRef.current?.restart()} className="px-4 py-2 bg-red-500 text-white rounded">
          재시작
        </button>
      </div>
    </div>
  );
}
```

### 9. 여러 텍스트 순차 타이핑

```tsx
function SequentialTyping() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const texts = ["첫 번째 텍스트입니다.", "두 번째 텍스트입니다.", "세 번째 텍스트입니다."];

  return (
    <TypingText
      text={texts[currentTextIndex]}
      onComplete={() => {
        if (currentTextIndex < texts.length - 1) {
          setTimeout(() => {
            setCurrentTextIndex((prev) => prev + 1);
          }, 1000);
        }
      }}
    />
  );
}
```

## 특징

- ✅ **완전한 커스터마이징**: 속도, 지연, 스타일 등 모든 요소 커스터마이징 가능
- ✅ **타입 안전성**: TypeScript로 완전한 타입 지원
- ✅ **성능 최적화**: 메모리 누수 방지 및 효율적인 타이머 관리
- ✅ **접근성**: 시각적 피드백 및 키보드 네비게이션 지원
- ✅ **외부 제어**: ref를 통한 수동 제어 기능
- ✅ **애니메이션**: Framer Motion을 활용한 부드러운 애니메이션
- ✅ **반응형**: 모바일, 태블릿, PC 모든 환경에서 최적화
