"use client";
import { useState } from "react";

interface CopyButtonProps {
  code: string;
}

export function CopyButton({ code }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <button
      onClick={handleCopy}
      className="absolute right-2 top-2 z-10 cursor-pointer rounded-md border-none px-3 py-1 text-sm text-white transition-colors"
      style={{
        background: copied ? "#4ade80" : "#222",
      }}
    >
      {copied ? "복사됨!" : "코드 복사"}
    </button>
  );
}
