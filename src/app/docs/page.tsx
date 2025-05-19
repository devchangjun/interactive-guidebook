"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function DocsPage() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/docs/typography/typing");
  }, [router]);
  return null;
}
