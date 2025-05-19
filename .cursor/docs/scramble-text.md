## 🧾 인터랙션 문서화 예시: **[스크램블 텍스트 애니메이션]**

---

### 1. 🎯 인터랙션 제목

**스크램블 텍스트 애니메이션 (Scramble Text Effect)**

---

### 2. 예시 컴포넌트 결과물

```tsx
<ScrambleText text="스크램블 효과 예시입니다!" />
```

---

### 3. ✅ 사용하면 좋은 예시

- **로딩 중 메시지**: 데이터 로딩, 인증 등 잠깐의 대기 상황에서 시선을 끌고 싶을 때
- **메인 슬로건/헤드라인**: 혁신적이거나 미래지향적인 분위기를 주고 싶을 때
- **게임/테크/해킹 컨셉**: 텍스트가 암호처럼 등장하는 느낌을 주고 싶을 때

---

### 4. 🧠 아이디어 구체화 (인터랙션 흐름 시나리오)

1. **시작**
   - 화면에는 아무 텍스트도 없다가, 한 글자씩 타이핑되듯 등장합니다.
2. **스크램블**
   - 마지막 몇 글자는 랜덤 문자로 스크램블되어 보입니다.
   - 스크램블 구간이 여러 번 랜덤하게 바뀌며, 점차 원래 텍스트로 복원됩니다.
3. **완성**
   - 모든 글자가 원래 텍스트로 돌아오면, 컬러 변화 등으로 완료를 강조할 수 있습니다.

> 💡 포인트: "타이핑 → 스크램블 → 복원"의 3단계로, 긴장감과 몰입감을 줄 수 있어요!

---

### 5. 🧑‍💻 바이브 코딩용 프롬프트 예시

```plaintext
"텍스트가 한 글자씩 타이핑되다가, 마지막 몇 글자는 랜덤 문자로 스크램블되며 점차 원래 텍스트로 복원되는 효과를 만들고 싶어.
로딩 메시지나 해킹 느낌의 헤드라인에 쓰고 싶어. gsap이나 프레이머 모션 써도 좋아."
```

---

### 6. 💻 코드 예시 (React + gsap 활용)

```tsx
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const SCRAMBLE_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{};:,.<>?".split(
  ""
);

function ScrambleText({ text, scrambleCount = 3, typingSpeed = 80, scrambleSpeed = 40 }) {
  const [display, setDisplay] = useState("");
  const [done, setDone] = useState(false);
  const textArr = Array.from(text);
  const timeoutRef = useRef(null);

  useEffect(() => {
    let current = 0;
    let scrambleStep = 0;
    function typeNext() {
      if (current < textArr.length - scrambleCount) {
        setDisplay(textArr.slice(0, current + 1).join(""));
        current++;
        timeoutRef.current = gsap.delayedCall(typingSpeed / 1000, typeNext);
      } else {
        scrambleStep = 0;
        scramble();
      }
    }
    function scramble() {
      if (scrambleStep < scrambleCount * 4) {
        const fixed = textArr.slice(0, textArr.length - scrambleCount).join("");
        const scrambled = Array(scrambleCount)
          .fill(0)
          .map(() => SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)])
          .join("");
        setDisplay(fixed + scrambled);
        scrambleStep++;
        timeoutRef.current = gsap.delayedCall(scrambleSpeed / 1000, scramble);
      } else {
        setDisplay(text);
        setDone(true);
      }
    }
    setDisplay("");
    setDone(false);
    timeoutRef.current = gsap.delayedCall(typingSpeed / 1000, typeNext);
    return () => {
      if (timeoutRef.current) timeoutRef.current.kill();
    };
  }, [text, scrambleCount, typingSpeed, scrambleSpeed]);

  return (
    <span style={{ fontFamily: "monospace", fontSize: 24, letterSpacing: 1.5, color: done ? "#4ade80" : "#fff" }}>
      {display}
    </span>
  );
}
```

> gsap 없이 setTimeout만으로도 구현 가능하지만, gsap의 delayedCall을 쓰면 타이밍 제어가 더 쉽고 부드럽게 연출할 수 있어요.

---

## ✅ 다음과 같은 인터랙션에도 동일 구조 적용 가능

- **로딩 중 텍스트 애니메이션**
- **해킹/암호 해제 느낌의 헤드라인**
- **게임/테크/미래지향적 UI**

---

필요하면, 이 구조로 다른 인터랙션도 시나리오 포함해 정리해드릴 수 있어요 😊
