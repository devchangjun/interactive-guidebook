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
      style={{
        position: "absolute",
        right: 8,
        top: 8,
        zIndex: 2,
        background: copied ? "#4ade80" : "#222",
        color: "#fff",
        border: "none",
        borderRadius: 6,
        padding: "4px 12px",
        fontSize: 14,
        cursor: "pointer",
        transition: "background 0.2s",
      }}
    >
      {copied ? "복사됨!" : "코드 복사"}
    </button>
  );
}
