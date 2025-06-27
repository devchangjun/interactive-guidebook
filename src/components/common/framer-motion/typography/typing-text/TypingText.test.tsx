import React, { createRef } from "react";
import { render, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import TypingText, { TypingTextRef } from "./TypingText";

// 타이머 목킹
jest.useFakeTimers();

describe("TypingText 컴포넌트", () => {
  beforeEach(() => {
    jest.clearAllTimers();
  });

  afterEach(() => {
    act(() => {
      jest.runOnlyPendingTimers();
    });
    jest.useRealTimers();
    jest.useFakeTimers();
  });

  describe("기본 렌더링", () => {
    it("텍스트와 커서가 올바르게 렌더링되어야 한다", () => {
      const { getByText } = render(<TypingText text="안녕하세요" autoStart={false} />);

      // 컴포넌트가 렌더링되는지 확인
      expect(getByText("|")).toBeInTheDocument();
    });

    it("커서를 숨길 수 있어야 한다", () => {
      const { queryByText } = render(<TypingText text="안녕하세요" showCursor={false} autoStart={false} />);

      expect(queryByText("|")).not.toBeInTheDocument();
    });

    it("커스텀 커서 문자를 표시할 수 있어야 한다", () => {
      const { getByText } = render(<TypingText text="안녕하세요" cursorChar="▋" autoStart={false} />);

      expect(getByText("▋")).toBeInTheDocument();
    });

    it("커스텀 클래스명이 적용되어야 한다", () => {
      const { container } = render(
        <TypingText
          text="안녕하세요"
          className="custom-class"
          textClassName="text-class"
          cursorClassName="cursor-class"
          autoStart={false}
        />
      );

      expect(container.firstChild).toHaveClass("custom-class");
      expect(container.querySelector("span")).toHaveClass("text-class");
    });
  });

  describe("타이핑 애니메이션", () => {
    it("자동 시작으로 텍스트가 타이핑되어야 한다", () => {
      const { container } = render(<TypingText text="Hi" speed={50} />);

      // 첫 글자 타이핑
      act(() => {
        jest.advanceTimersByTime(50);
      });

      const textSpan = container.querySelector("span.font-mono");
      expect(textSpan?.textContent).toContain("H");

      // 두 번째 글자 타이핑
      act(() => {
        jest.advanceTimersByTime(50);
      });

      expect(textSpan?.textContent).toContain("Hi");
    });

    it("autoStart가 false일 때 자동으로 시작되지 않아야 한다", () => {
      const { container } = render(<TypingText text="Hello" speed={50} autoStart={false} />);

      act(() => {
        jest.advanceTimersByTime(100);
      });

      const textSpan = container.querySelector("span.font-mono");
      expect(textSpan?.textContent).not.toContain("H");
    });
  });

  describe("콜백 함수", () => {
    it("타이핑 시작 시 onStart 콜백이 호출되어야 한다", () => {
      const onStart = jest.fn();
      render(<TypingText text="Hello" onStart={onStart} />);

      expect(onStart).toHaveBeenCalled();
    });

    it("빈 문자열일 때 onComplete가 즉시 호출되어야 한다", () => {
      const onComplete = jest.fn();
      render(<TypingText text="" onComplete={onComplete} />);

      expect(onComplete).toHaveBeenCalled();
    });

    it("일시정지 시 onPause 콜백이 호출되어야 한다", () => {
      const onPause = jest.fn();
      const ref = createRef<TypingTextRef>();

      render(<TypingText text="Hello" ref={ref} onPause={onPause} />);

      act(() => {
        ref.current?.pause();
      });

      expect(onPause).toHaveBeenCalledTimes(1);
    });
  });

  describe("ref를 통한 제어", () => {
    it("ref가 올바르게 노출되어야 한다", () => {
      const ref = createRef<TypingTextRef>();
      render(<TypingText text="Hello" ref={ref} autoStart={false} />);

      expect(ref.current).toBeTruthy();
      expect(typeof ref.current?.start).toBe("function");
      expect(typeof ref.current?.pause).toBe("function");
      expect(typeof ref.current?.resume).toBe("function");
      expect(typeof ref.current?.restart).toBe("function");
    });

    it("pause 메서드가 정상적으로 작동해야 한다", () => {
      const ref = createRef<TypingTextRef>();
      const { container } = render(<TypingText text="Hello" ref={ref} speed={50} />);

      act(() => {
        jest.advanceTimersByTime(50); // H
        ref.current?.pause();
        jest.advanceTimersByTime(100); // 일시정지 상태에서 시간 경과
      });

      const textSpan = container.querySelector("span.font-mono");
      // 일시정지 후에는 더 이상 타이핑되지 않아야 함
      expect(textSpan?.textContent).toContain("H");
      expect(textSpan?.textContent).not.toContain("He");
    });
  });

  describe("에러 케이스 및 접근성", () => {
    it("빈 문자열을 처리할 수 있어야 한다", () => {
      const { container } = render(<TypingText text="" />);

      expect(container.firstChild).toBeInTheDocument();
    });

    it("매우 긴 텍스트를 처리할 수 있어야 한다", () => {
      const longText = "a".repeat(1000);
      const { getByText } = render(<TypingText text={longText} speed={1} autoStart={false} />);

      // 렌더링 오류가 없어야 함
      expect(getByText("|")).toBeInTheDocument();
    });

    it("컴포넌트가 올바르게 렌더링되어야 한다", () => {
      const { container } = render(<TypingText text="안녕하세요" />);

      // 텍스트가 읽을 수 있는 형태로 렌더링되어야 함
      expect(container.firstChild).toBeInTheDocument();
      expect(container.firstChild).toHaveClass("inline-block");
    });
  });

  describe("성능 및 정리", () => {
    it("컴포넌트 언마운트 시 타이머가 정리되어야 한다", () => {
      const { unmount } = render(<TypingText text="Hello" speed={50} />);

      act(() => {
        jest.advanceTimersByTime(25); // 타이핑 중간에 언마운트
        unmount();
      });

      // 메모리 누수 방지를 위해 타이머가 정리되어야 함
      expect(jest.getTimerCount()).toBe(0);
    });

    it("여러 props를 동시에 사용할 수 있어야 한다", () => {
      const onStart = jest.fn();
      const onComplete = jest.fn();
      const { container, getByText } = render(
        <TypingText
          text="Test"
          speed={100}
          className="test-class"
          showCursor={true}
          cursorChar="●"
          onStart={onStart}
          onComplete={onComplete}
        />
      );

      expect(container.firstChild).toHaveClass("test-class");
      expect(getByText("●")).toBeInTheDocument();
      expect(onStart).toHaveBeenCalled();
    });
  });
});
