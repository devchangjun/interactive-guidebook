import { useMotionValue } from "framer-motion";
import { useEffect } from "react";

export function useParallax(depth: number = 1) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  useEffect(() => {
    function handleMouseMove(e: MouseEvent) {
      const { innerWidth, innerHeight } = window;
      const offsetX = (e.clientX - innerWidth / 2) / (innerWidth / 2);
      const offsetY = (e.clientY - innerHeight / 2) / (innerHeight / 2);
      x.set(offsetX * 10 * depth);
      y.set(offsetY * 10 * depth);
    }
    if (typeof window !== "undefined") {
      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }
  }, [depth, x, y]);

  return { x, y };
}
